from fastapi import APIRouter, Depends
from sqlmodel import Session, select
from sqlalchemy import extract
from datetime import datetime
import pandas as pd
import io

from .database import get_session
from .models import (
    User, Expense, Income, Goal, PortfolioHolding, CreditCard, BudgetGroup
)
from .auth import get_current_user
from .routers import analyze_budget_for_user
from .pdf_generator import PDF
from fastapi.responses import Response, StreamingResponse

router_reports = APIRouter(prefix="/reports", tags=["Reports"])

# ==========================================================
# ======================== EXCEL ============================
# ==========================================================

@router_reports.get("/excel")
def export_excel_report(
    *,
    session: Session = Depends(get_session),
    user: User = Depends(get_current_user),
    month: int,
    year: int,
    include_income: bool = False,
    include_expenses: bool = False,
    include_goals: bool = False,
    include_portfolio: bool = False,
    include_credit_cards: bool = False,
    include_budget: bool = False,
    include_balance: bool = False
):
    
    output = io.BytesIO()
    writer = pd.ExcelWriter(output, engine='openpyxl')

    # ---------- ENTRADAS ----------
    if include_income:
        incomes = session.exec(select(Income).where(
            Income.user_id == user.id,
            extract('month', Income.date) == month,
            extract('year', Income.date) == year
        )).all()

        income_data = [
            {
                "Data": inc.date.strftime('%Y-%m-%d'),
                "Descrição": inc.description,
                "Valor": inc.amount,
                "Status": "Recebido" if inc.received else "A Receber"
            } 
            for inc in incomes
        ]

        df_income = pd.DataFrame(income_data)
        df_income.to_excel(writer, sheet_name='Entradas', index=False)

    # ---------- DESPESAS ----------
    if include_expenses:
        expenses = session.exec(select(Expense).where(
            Expense.user_id == user.id,
            extract('month', Expense.date) == month,
            extract('year', Expense.date) == year
        )).all()

        expense_data = [
            {
                "Data": exp.date.strftime('%Y-%m-%d'),
                "Descrição": exp.description,
                "Valor": exp.amount,
                "Grupo": exp.budget_group.name if exp.budget_group else "N/A",
                "Status": "Pago" if exp.paid else "Pendente"
            } 
            for exp in expenses
        ]

        df_expenses = pd.DataFrame(expense_data)
        df_expenses.to_excel(writer, sheet_name='Despesas', index=False)

    # ---------- METAS ----------
    if include_goals:
        goals = session.exec(select(Goal).where(
            Goal.user_id == user.id
        )).all()

        goals_data = [
            {
                "Meta": g.name,
                "Valor Guardado": g.current_amount,
                "Objetivo": g.target_amount,
                "Progresso": f"{(g.current_amount/g.target_amount*100):.1f}%" if g.target_amount > 0 else "0%"
            }
            for g in goals
        ]

        df_goals = pd.DataFrame(goals_data)
        df_goals.to_excel(writer, sheet_name='Metas', index=False)

    # ---------- INVESTIMENTOS ----------
    if include_portfolio:
        holdings = session.exec(select(PortfolioHolding).where(
            PortfolioHolding.user_id == user.id
        )).all()

        portfolio_data = [
            {
                "Ticker": h.asset.ticker,
                "Nome": h.asset.name,
                "Quantidade": h.quantity,
                "Preço Médio": h.average_price
            }
            for h in holdings
        ]

        df_portfolio = pd.DataFrame(portfolio_data)
        df_portfolio.to_excel(writer, sheet_name='Investimentos', index=False)

    # ---------- CARTÃO DE CRÉDITO ----------
    if include_credit_cards:
        cc_expenses = session.exec(select(Expense).where(
            Expense.user_id == user.id,
            Expense.credit_card_id != None,
            extract('month', Expense.date) == month,
            extract('year', Expense.date) == year
        )).all()

        cc_data = [
            {
                "Data": exp.date.strftime('%Y-%m-%d'),
                "Cartão": exp.credit_card.name if exp.credit_card else "N/A",
                "Descrição": exp.description,
                "Valor": exp.amount
            }
            for exp in cc_expenses
        ]

        df_cc = pd.DataFrame(cc_data)
        df_cc.to_excel(writer, sheet_name='Cartão', index=False)

    # ---------- ORÇAMENTO & BALANÇO ----------
    if include_budget or include_balance:
        analysis_data = analyze_budget_for_user(
            session=session, user=user, month=month, year=year
        )

        if include_budget:
            budget_data = [
                {
                    "Grupo": g["name"],
                    "% Meta": f"{g['target_percentage']}%",
                    "Planejado": g["planned_amount"],
                    "Gasto": g["actual_spent"]
                }
                for g in analysis_data["analysis"]
            ]
            df_budget = pd.DataFrame(budget_data)
            df_budget.to_excel(writer, sheet_name='Orçamento', index=False)

        if include_balance:
            total_expenses = sum(g['actual_spent'] for g in analysis_data['analysis'])

            balance_data = {
                "Item": ["Renda Total", "Despesas Totais", "Balanço"],
                "Valor": [
                    analysis_data["total_income"],
                    total_expenses,
                    analysis_data["total_income"] - total_expenses
                ]
            }

            df_balance = pd.DataFrame(balance_data)
            df_balance.to_excel(writer, sheet_name='Balanço', index=False)

    writer.close()
    output.seek(0)

    headers = {
        'Content-Disposition': f'attachment; filename="relatorio_{year}_{month:02d}.xlsx"'
    }

    return StreamingResponse(
        output,
        media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        headers=headers
    )


# ==========================================================
# ======================== PDF =============================
# ==========================================================

@router_reports.get("/pdf")
def export_pdf_report(
    *,
    session: Session = Depends(get_session),
    user: User = Depends(get_current_user),
    month: int,
    year: int,
    include_income: bool = False,
    include_expenses: bool = False,
    include_goals: bool = False,
    include_portfolio: bool = False,
    include_credit_cards: bool = False,
    include_budget: bool = False,
    include_balance: bool = False
):

    month_name = datetime(year, month, 1).strftime('%B').capitalize()
    pdf = PDF()
    pdf.add_page()
    pdf.add_report_header(month_name, year)

    analysis_data = analyze_budget_for_user(
        session=session, user=user, month=month, year=year
    )

    total_expenses = sum(g['actual_spent'] for g in analysis_data['analysis'])
    balance = analysis_data["total_income"] - total_expenses

    # ---------- BALANÇO ----------
    if include_balance:
        pdf.chapter_title("Balanço Financeiro")

        pdf.add_kpi_card("Renda Total", f"R$ {analysis_data['total_income']:,.2f}", "green")
        pdf.add_kpi_card("Despesas Totais", f"R$ {total_expenses:,.2f}", "red")
        pdf.add_kpi_card(
            "Balanço",
            f"R$ {balance:,.2f}",
            "green" if balance >= 0 else "red"
        )

    # ---------- ORÇAMENTO ----------
    if include_budget:
        pdf.chapter_title("Resumo do Orçamento")
        budget_data = [
            {
                "Grupo": g["name"],
                "% Meta": f"{g['target_percentage']}%",
                "Planejado": f"R$ {g['planned_amount']:,.2f}",
                "Gasto": f"R$ {g['actual_spent']:,.2f}"
            }
            for g in analysis_data["analysis"]
        ]
        df_budget = pd.DataFrame(budget_data)
        pdf.dataframe_to_table(df_budget)

    # ---------- ENTRADAS ----------
    if include_income:
        pdf.chapter_title("Entradas")
        incomes = session.exec(select(Income).where(
            Income.user_id == user.id,
            extract('month', Income.date) == month,
            extract('year', Income.date) == year
        )).all()

        income_data = [
            {
                "Data": inc.date.strftime('%d/%m/%Y'),
                "Descrição": inc.description,
                "Valor": f"R$ {inc.amount:,.2f}",
                "Status": "Recebido" if inc.received else "A Receber"
            }
            for inc in incomes
        ]

        df_income = pd.DataFrame(income_data)
        pdf.dataframe_to_table(df_income)

    # ---------- DESPESAS ----------
    if include_expenses:
        pdf.chapter_title("Despesas")
        expenses = session.exec(select(Expense).where(
            Expense.user_id == user.id,
            extract('month', Expense.date) == month,
            extract('year', Expense.date) == year
        )).all()

        expense_data = [
            {
                "Data": exp.date.strftime('%d/%m/%Y'),
                "Descrição": exp.description,
                "Valor": f"R$ {exp.amount:,.2f}",
                "Grupo": exp.budget_group.name if exp.budget_group else "Sem Grupo"
            }
            for exp in expenses
        ]

        df_expenses = pd.DataFrame(expense_data)
        pdf.dataframe_to_table(df_expenses)

    # ---------- NOVA PÁGINA OPCIONAL ----------
    if include_goals or include_portfolio or include_credit_cards:
        pdf.add_page()

    # ---------- METAS ----------
    if include_goals:
        pdf.chapter_title("Metas Financeiras")
        goals = session.exec(select(Goal).where(
            Goal.user_id == user.id
        )).all()

        goals_data = [
            {
                "Meta": g.name,
                "Guardado": f"R$ {g.current_amount:,.2f}",
                "Objetivo": f"R$ {g.target_amount:,.2f}",
                "Progresso": f"{(g.current_amount/g.target_amount*100):.1f}%" if g.target_amount > 0 else "0%"
            }
            for g in goals
        ]

        df_goals = pd.DataFrame(goals_data)
        pdf.dataframe_to_table(df_goals)

    # ---------- INVESTIMENTOS ----------
    if include_portfolio:
        pdf.chapter_title("Investimentos")

        holdings = session.exec(select(PortfolioHolding).where(
            PortfolioHolding.user_id == user.id
        )).all()

        portfolio_data = [
            {
                "Ticker": h.asset.ticker,
                "Nome": h.asset.name,
                "Quantidade": f"{h.quantity:,}",
                "Preço Médio": f"R$ {h.average_price:,.2f}"
            }
            for h in holdings
        ]

        df_portfolio = pd.DataFrame(portfolio_data)
        pdf.dataframe_to_table(df_portfolio)

    # ---------- CARTÃO DE CRÉDITO ----------
    if include_credit_cards:
        pdf.chapter_title("Cartão de Crédito")

        cc_expenses = session.exec(select(Expense).where(
            Expense.user_id == user.id,
            Expense.credit_card_id != None,
            extract('month', Expense.date) == month,
            extract('year', Expense.date) == year
        )).all()

        cc_data = [
            {
                "Data": exp.date.strftime('%d/%m/%Y'),
                "Cartão": exp.credit_card.name if exp.credit_card else "N/A",
                "Descrição": exp.description,
                "Valor": f"R$ {exp.amount:,.2f}"
            }
            for exp in cc_expenses
        ]

        df_cc = pd.DataFrame(cc_data)
        pdf.dataframe_to_table(df_cc)

    pdf_output = bytes(pdf.output(dest='S'))
    
    headers = {
        'Content-Disposition': f'inline; filename="relatorio_{year}_{month:02d}.pdf"'
    }

    return Response(content=pdf_output, media_type="application/pdf", headers=headers)
