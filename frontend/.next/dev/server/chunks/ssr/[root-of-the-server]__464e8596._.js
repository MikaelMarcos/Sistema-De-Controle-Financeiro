module.exports = [
"[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/favicon.ico.mjs { IMAGE => \"[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/favicon.ico.mjs { IMAGE => \"[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { jsxDEV: _jsxDEV, Fragment: _Fragment } = __turbopack_context__.r("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
function ExpenseForm({ onExpenseAdded }) {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [paid, setPaid] = useState(true);
    const [groupId, setGroupId] = useState(null);
    const [subcategoryId, setSubcategoryId] = useState(null);
    const [newSubcategoryName, setNewSubcategoryName] = useState('');
    const [budgetGroups, setBudgetGroups] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [goals, setGoals] = useState([]);
    const [selectedGoalId, setSelectedGoalId] = useState(null);
    const [metaGroupId, setMetaGroupId] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [suggestionApplied, setSuggestionApplied] = useState(false); // 💡 NOVO
    // Ref para o timer do debounce
    const debounceTimer = useRef(null);
    // Carrega dados iniciais (grupos, categorias, metas)
    useEffect(()=>{
        Promise.all([
            axios.get(`${API_URL}/budget/`),
            axios.get(`${API_URL}/categories/`),
            axios.get(`${API_URL}/goals/`)
        ]).then(([groupsRes, catsRes, goalsRes])=>{
            setBudgetGroups(groupsRes.data);
            setSubcategories(catsRes.data);
            setGoals(goalsRes.data);
            const metaGroup = groupsRes.data.find((g)=>g.name.toLowerCase().includes("metas"));
            if (metaGroup) setMetaGroupId(metaGroup.id);
        });
    }, []);
    // --- LÓGICA DE SUGESTÃO AUTOMÁTICA ---
    useEffect(()=>{
        setSuggestionApplied(false);
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }
        if (description.trim() === '') {
            return;
        }
        debounceTimer.current = setTimeout(()=>{
            axios.get(`${API_URL}/rules/suggest?description=${description}`).then((response)=>{
                const rule = response.data;
                setGroupId(rule.budget_group_id);
                setSubcategoryId(rule.category_id);
                setSuggestionApplied(true);
            }).catch((error)=>{});
        }, 800);
        return ()=>{
            if (debounceTimer.current) {
                clearTimeout(debounceTimer.current);
            }
        };
    }, [
        description
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!description || !amount || !groupId) {
            alert("Preencha os campos obrigatórios.");
            return;
        }
        setIsSubmitting(true);
        try {
            let finalSubcategoryId = subcategoryId;
            if (newSubcategoryName) {
                const catRes = await axios.post(`${API_URL}/categories/`, {
                    name: newSubcategoryName
                });
                finalSubcategoryId = catRes.data.id;
                setSubcategories((prev)=>[
                        ...prev,
                        catRes.data
                    ]);
            }
            const newExpense = {
                description,
                amount: parseFloat(amount),
                date: date ? new Date(date).toISOString() : new Date().toISOString(),
                paid: paid,
                budget_group_id: parseInt(groupId),
                category_id: finalSubcategoryId ? parseInt(finalSubcategoryId) : null,
                goal_id: parseInt(groupId) === metaGroupId && selectedGoalId ? parseInt(selectedGoalId) : null
            };
            await axios.post(`${API_URL}/expenses/`, newExpense);
            setDescription('');
            setAmount('');
            setDate('');
            setPaid(true);
            setGroupId(null);
            setSubcategoryId(null);
            setNewSubcategoryName('');
            setSelectedGoalId(null);
            onExpenseAdded();
        } catch (error) {
            console.error("Erro:", error);
            alert("Erro ao cadastrar despesa.");
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "bg-gradient-to-br from-fin-card to-fin-dark/80 p-8 rounded-3xl shadow-2xl mb-8 border border-fin-gold/20 backdrop-blur-sm",
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                className: "flex items-center gap-3 mb-8",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "p-3 bg-fin-gold/20 rounded-2xl",
                        children: /*#__PURE__*/ _jsxDEV("span", {
                            className: "text-2xl",
                            children: "💰"
                        }, void 0, false, {
                            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                            lineNumber: 100,
                            columnNumber: 57
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        children: [
                            /*#__PURE__*/ _jsxDEV("h2", {
                                className: "text-2xl font-bold text-white",
                                children: "Nova Transação"
                            }, void 0, false, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("p", {
                                className: "text-fin-gold/70 text-sm",
                                children: "Registre despesas ou agendamentos"
                            }, void 0, false, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("form", {
                onSubmit: handleSubmit,
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV("h3", {
                                className: "text-lg font-semibold text-fin-gold border-b border-fin-gold/30 pb-2",
                                children: "Informações Básicas"
                            }, void 0, false, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("label", {
                                                className: "block text-sm font-medium text-white/80 mb-2",
                                                children: "Descrição *"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("input", {
                                                type: "text",
                                                value: description,
                                                onChange: (e)=>setDescription(e.target.value),
                                                placeholder: "Ex: Conta de Luz, Supermercado...",
                                                className: "w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold focus:ring-2 focus:ring-fin-gold/20 transition-all text-white placeholder-white/40"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 114,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("label", {
                                                className: "block text-sm font-medium text-white/80 mb-2",
                                                children: "Valor *"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                        className: "absolute left-4 top-1/2 transform -translate-y-1/2 text-fin-gold font-bold",
                                                        children: "R$"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                        lineNumber: 119,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("input", {
                                                        type: "number",
                                                        step: "0.01",
                                                        value: amount,
                                                        onChange: (e)=>setAmount(e.target.value),
                                                        placeholder: "0,00",
                                                        className: "w-full p-4 pl-12 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold focus:ring-2 focus:ring-fin-gold/20 transition-all text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                        lineNumber: 120,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 118,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("label", {
                                                className: "block text-sm font-medium text-white/80 mb-2",
                                                children: "Data"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("input", {
                                                type: "date",
                                                value: date,
                                                onChange: (e)=>setDate(e.target.value),
                                                className: "w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold focus:ring-2 focus:ring-fin-gold/20 transition-all text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 127,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(CustomSelect, {
                                                label: "Grupo *",
                                                required: true,
                                                value: groupId,
                                                onChange: setGroupId,
                                                options: budgetGroups,
                                                placeholder: "Selecione um grupo",
                                                textClass: "font-semibold"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 130,
                                                columnNumber: 15
                                            }, this),
                                            suggestionApplied && /*#__PURE__*/ _jsxDEV("span", {
                                                className: "absolute -top-2 -right-2 text-xs bg-fin-highlight text-fin-dark font-bold px-2 py-0.5 rounded-full animate-pulse",
                                                children: "💡"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 131,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("label", {
                                                className: "block text-sm font-medium text-white/80 mb-2",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 134,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: `w-full p-4 rounded-xl border-2 transition-all cursor-pointer ${paid ? 'bg-green-500/20 border-green-500/50 text-green-400' : 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400'}`,
                                                onClick: ()=>setPaid(!paid),
                                                children: /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                            className: "font-bold",
                                                            children: paid ? '✅ PAGO' : '⏳ PENDENTE'
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                            lineNumber: 137,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            className: `w-3 h-3 rounded-full ${paid ? 'bg-green-400' : 'bg-yellow-400'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                            lineNumber: 138,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                    lineNumber: 136,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 135,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV("h3", {
                                className: "text-lg font-semibold text-fin-gold border-b border-fin-gold/30 pb-2",
                                children: "Categorização (Opcional)"
                            }, void 0, false, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(CustomSelect, {
                                                label: "Subcategoria",
                                                value: subcategoryId,
                                                onChange: setSubcategoryId,
                                                options: subcategories,
                                                placeholder: "Selecionar existente"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, this),
                                            suggestionApplied && /*#__PURE__*/ _jsxDEV("span", {
                                                className: "absolute -top-2 -right-2 text-xs bg-fin-highlight text-fin-dark font-bold px-2 py-0.5 rounded-full animate-pulse",
                                                children: "💡"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 150,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("label", {
                                                className: "block text-sm font-medium text-white/80 mb-2",
                                                children: "Nova Subcategoria"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 153,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("input", {
                                                type: "text",
                                                value: newSubcategoryName,
                                                onChange: (e)=>setNewSubcategoryName(e.target.value),
                                                disabled: !!subcategoryId,
                                                placeholder: "Criar nova...",
                                                className: "w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold transition-all text-white placeholder-white/40 disabled:opacity-50"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 154,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            parseInt(groupId) === metaGroupId && /*#__PURE__*/ _jsxDEV(CustomSelect, {
                                label: "Vincular à Meta",
                                value: selectedGoalId,
                                onChange: setSelectedGoalId,
                                options: goals,
                                placeholder: "Selecionar meta...",
                                textClass: "text-fin-highlight"
                            }, void 0, false, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("button", {
                        type: "submit",
                        disabled: isSubmitting,
                        className: "w-full bg-gradient-to-r from-rose-500 to-fin-red hover:from-rose-600 hover:to-red-700 disabled:opacity-50 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2",
                        style: {
                            boxShadow: '0 4px 20px rgba(244, 63, 94, 0.25)' // sombra avermelhada
                        },
                        children: isSubmitting ? /*#__PURE__*/ _jsxDEV(_Fragment, {
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this),
                                "Processando..."
                            ]
                        }, void 0, true) : /*#__PURE__*/ _jsxDEV(_Fragment, {
                            children: [
                                /*#__PURE__*/ _jsxDEV("span", {
                                    children: paid ? '💾' : '📅'
                                }, void 0, false, {
                                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this),
                                paid ? 'Registrar Pagamento' : 'Agendar Despesa'
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__464e8596._.js.map