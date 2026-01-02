import pandas as pd
from fpdf import FPDF
from datetime import datetime

# Paleta de cores moderna
COLORS = {
    "dark": (15, 23, 42),
    "card": (30, 41, 59),
    "gold": (245, 158, 11),
    "red": (220, 38, 38),
    "green": (16, 185, 129),
    "blue": (59, 130, 246),
    "white": (255, 255, 255),
    "black": (0, 0, 0),
    "gray": (100, 116, 139),
    "light_gray": (241, 245, 249)
}

class PDF(FPDF):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.WIDTH = 210
        self.HEIGHT = 297
        self.set_auto_page_break(auto=True, margin=15)

    def header(self):
        """ Cabeçalho moderno """
        self.set_fill_color(*COLORS["dark"])
        self.rect(0, 0, self.WIDTH, 25, style='F')
        
        self.set_font('Arial', 'B', 16)
        self.set_text_color(*COLORS["gold"])
        self.cell(0, 10, "RELATÓRIO FINANCEIRO", 0, 1, 'C')
        
        self.set_font('Arial', 'I', 8)
        self.set_text_color(*COLORS["gold"])
        date_str = datetime.now().strftime('%d/%m/%Y %H:%M')
        self.cell(0, 5, date_str, 0, 1, 'C')
        
        self.ln(15)

    def footer(self):
        """ Rodapé elegante """
        self.set_y(-15)
        self.set_font('Arial', '', 8)
        self.set_text_color(*COLORS["gray"])
        self.cell(0, 10, f'Página {self.page_no()}', 0, 0, 'C')

    def chapter_title(self, title):
        """ Título de seção """
        self.set_font('Arial', 'B', 14)
        self.set_fill_color(*COLORS["card"])
        self.set_text_color(*COLORS["white"])
        self.cell(0, 10, f" {title}", 0, 1, 'L', fill=1)
        self.ln(5)

    def add_kpi_card(self, title, value, color="blue"):
        """ Card de KPI """
        color_map = {
            "blue": COLORS["blue"],
            "green": COLORS["green"], 
            "gold": COLORS["gold"],
            "red": COLORS["red"]
        }
        selected_color = color_map.get(color, COLORS["blue"])
        
        self.set_font('Arial', '', 10)
        self.set_text_color(*COLORS["gray"])
        self.cell(0, 6, title, 0, 1)

        self.set_font('Arial', 'B', 16)
        self.set_text_color(*selected_color)
        self.cell(0, 10, value, 0, 1)
        self.ln(5)

    def dataframe_to_table(self, df: pd.DataFrame):
        """ Tabela moderna """
        if df.empty:
            self.set_font('Arial', 'I', 10)
            self.set_text_color(*COLORS["gray"])
            self.cell(0, 10, "Nenhum dado disponível", 0, 1, 'C')
            self.ln(5)
            return

        # Cabeçalho
        self.set_font('Arial', 'B', 9)
        self.set_fill_color(*COLORS["dark"])
        self.set_text_color(*COLORS["white"])
        
        col_width = (self.WIDTH - 20) / len(df.columns)
        
        for col_name in df.columns:
            self.cell(col_width, 8, str(col_name), 1, 0, 'C', True)
        self.ln()
        
        # Dados
        self.set_font('Arial', '', 8)
        self.set_text_color(*COLORS["black"])
        self.set_fill_color(245, 245, 245)
        fill = False
        
        for _, row in df.iterrows():
            for item in row:
                self.cell(col_width, 6, str(item), 1, 0, 'L', fill)
            self.ln()
            fill = not fill
        
        self.ln(8)

    def add_report_header(self, month_name, year):
        """ Cabeçalho informativo """
        self.set_font('Arial', 'B', 12)
        self.set_text_color(*COLORS["dark"])
        self.cell(0, 8, f"Período: {month_name}/{year}", 0, 1, 'C')
        self.ln(8)