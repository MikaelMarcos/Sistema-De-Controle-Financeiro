(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExpensesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const API_URL = 'http://localhost:8000';
// --- Componente do Formulário de Despesas (ATUALIZADO) ---
function ExpenseForm(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(46);
    if ($[0] !== "b9593ec6a0f74a0c125e5c28833286ea558cdce4861a5022f86613a3aa1fcd1e") {
        for(let $i = 0; $i < 46; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b9593ec6a0f74a0c125e5c28833286ea558cdce4861a5022f86613a3aa1fcd1e";
    }
    const { onExpenseAdded } = t0;
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [categoryId, setCategoryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const [goals, setGoals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const [selectedGoalId, setSelectedGoalId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [metaCategoryId, setMetaCategoryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "ExpenseForm[useEffect()]": ()=>{
                Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/categories/`),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/goals/`)
                ]).then({
                    "ExpenseForm[useEffect() > (anonymous)()]": (t5)=>{
                        const [categoriesRes, goalsRes] = t5;
                        const allCategories = categoriesRes.data;
                        setCategories(allCategories);
                        setGoals(goalsRes.data);
                        if (allCategories.length > 0) {
                            setCategoryId(allCategories[0].id);
                        }
                        const metaCat = allCategories.find(_ExpenseFormUseEffectAnonymousAllCategoriesFind);
                        if (metaCat) {
                            setMetaCategoryId(metaCat.id);
                        }
                    }
                }["ExpenseForm[useEffect() > (anonymous)()]"]).catch(_ExpenseFormUseEffectAnonymous);
            }
        })["ExpenseForm[useEffect()]"];
        t4 = [];
        $[3] = t3;
        $[4] = t4;
    } else {
        t3 = $[3];
        t4 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[5] !== amount || $[6] !== categoryId || $[7] !== date || $[8] !== description || $[9] !== metaCategoryId || $[10] !== onExpenseAdded || $[11] !== selectedGoalId) {
        t5 = ({
            "ExpenseForm[handleSubmit]": (e)=>{
                e.preventDefault();
                if (!description || !amount || !categoryId) {
                    alert("Por favor, preencha todos os campos.");
                    return;
                }
                const newExpense = {
                    description,
                    amount: parseFloat(amount),
                    category_id: parseInt(categoryId),
                    goal_id: null
                };
                if (date) {
                    newExpense.date = new Date(date).toISOString();
                }
                if (parseInt(categoryId) === metaCategoryId && selectedGoalId) {
                    newExpense.goal_id = parseInt(selectedGoalId);
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API_URL}/expenses/`, newExpense).then({
                    "ExpenseForm[handleSubmit > (anonymous)()]": (response)=>{
                        setDescription("");
                        setAmount("");
                        setDate("");
                        setSelectedGoalId("");
                        onExpenseAdded(response.data);
                    }
                }["ExpenseForm[handleSubmit > (anonymous)()]"]).catch(_ExpenseFormHandleSubmitAnonymous);
            }
        })["ExpenseForm[handleSubmit]"];
        $[5] = amount;
        $[6] = categoryId;
        $[7] = date;
        $[8] = description;
        $[9] = metaCategoryId;
        $[10] = onExpenseAdded;
        $[11] = selectedGoalId;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    const handleSubmit = t5;
    const isMetaCategorySelected = parseInt(categoryId) === metaCategoryId;
    let t6;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-bold mb-4 text-red-400",
            children: "Nova Despesa"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "ExpenseForm[<input>.onChange]": (e_0)=>setDescription(e_0.target.value)
        })["ExpenseForm[<input>.onChange]"];
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== description) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            value: description,
            onChange: t7,
            placeholder: "Descri\xE7\xE3o (ex: Poupan\xE7a Casamento)",
            className: "p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-red-500"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 135,
            columnNumber: 10
        }, this);
        $[15] = description;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "ExpenseForm[<input>.onChange]": (e_1)=>setAmount(e_1.target.value)
        })["ExpenseForm[<input>.onChange]"];
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== amount) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "number",
            value: amount,
            onChange: t9,
            placeholder: "Valor (ex: 500.00)",
            className: "p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-red-500"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[18] = amount;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== t10 || $[21] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 160,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t8;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "ExpenseForm[<input>.onChange]": (e_2)=>setDate(e_2.target.value)
        })["ExpenseForm[<input>.onChange]"];
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== date) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "date",
            value: date,
            onChange: t12,
            className: "p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-red-500"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[24] = date;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = ({
            "ExpenseForm[<select>.onChange]": (e_3)=>setCategoryId(e_3.target.value)
        })["ExpenseForm[<select>.onChange]"];
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            disabled: true,
            children: "Selecione a Categoria"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] !== categories) {
        t16 = categories.map(_ExpenseFormCategoriesMap);
        $[28] = categories;
        $[29] = t16;
    } else {
        t16 = $[29];
    }
    let t17;
    if ($[30] !== categoryId || $[31] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            value: categoryId,
            onChange: t14,
            className: "p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-red-500",
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 210,
            columnNumber: 11
        }, this);
        $[30] = categoryId;
        $[31] = t16;
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    let t18;
    if ($[33] !== goals || $[34] !== isMetaCategorySelected || $[35] !== selectedGoalId) {
        t18 = isMetaCategorySelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            value: selectedGoalId,
            onChange: {
                "ExpenseForm[<select>.onChange]": (e_4)=>setSelectedGoalId(e_4.target.value)
            }["ExpenseForm[<select>.onChange]"],
            className: "p-3 bg-gray-700 rounded border border-yellow-500 focus:outline-none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "",
                    children: "Vincular a qual meta?"
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                    lineNumber: 221,
                    columnNumber: 122
                }, this),
                goals.map(_ExpenseFormGoalsMap)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 219,
            columnNumber: 37
        }, this);
        $[33] = goals;
        $[34] = isMetaCategorySelected;
        $[35] = selectedGoalId;
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    let t19;
    if ($[37] !== t13 || $[38] !== t17 || $[39] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
            children: [
                t13,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[37] = t13;
        $[38] = t17;
        $[39] = t18;
        $[40] = t19;
    } else {
        t19 = $[40];
    }
    let t20;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded transition duration-300",
            children: "Adicionar Despesa"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[41] = t20;
    } else {
        t20 = $[41];
    }
    let t21;
    if ($[42] !== handleSubmit || $[43] !== t11 || $[44] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "bg-gray-800 p-6 rounded-lg shadow-lg mb-8",
            children: [
                t6,
                t11,
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 248,
            columnNumber: 11
        }, this);
        $[42] = handleSubmit;
        $[43] = t11;
        $[44] = t19;
        $[45] = t21;
    } else {
        t21 = $[45];
    }
    return t21;
}
_s(ExpenseForm, "4S8Fv9TSGjBLw6ExRGlhM4G89Fc=");
_c = ExpenseForm;
// ... O resto da página (ExpenseList, ExpensesPage) permanece o mesmo ...
// --- Componente da Lista de Despesas ---
function _ExpenseFormGoalsMap(goal) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: goal.id,
        children: goal.name
    }, goal.id, false, {
        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
        lineNumber: 262,
        columnNumber: 10
    }, this);
}
function _ExpenseFormCategoriesMap(cat_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: cat_0.id,
        children: cat_0.name
    }, cat_0.id, false, {
        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
        lineNumber: 265,
        columnNumber: 10
    }, this);
}
function _ExpenseFormHandleSubmitAnonymous(error_0) {
    return console.error("Erro ao adicionar despesa:", error_0);
}
function _ExpenseFormUseEffectAnonymous(error) {
    return console.error("Erro ao buscar dados:", error);
}
function _ExpenseFormUseEffectAnonymousAllCategoriesFind(cat) {
    return cat.name.toLowerCase().includes("sonhos");
}
function ExpenseList(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "b9593ec6a0f74a0c125e5c28833286ea558cdce4861a5022f86613a3aa1fcd1e") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b9593ec6a0f74a0c125e5c28833286ea558cdce4861a5022f86613a3aa1fcd1e";
    }
    const { expenses, setExpenses } = t0;
    let t1;
    if ($[1] !== expenses || $[2] !== setExpenses) {
        t1 = ({
            "ExpenseList[handleDelete]": (id)=>{
                if (confirm("Tem certeza que deseja deletar esta despesa?")) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`${API_URL}/expenses/${id}`).then({
                        "ExpenseList[handleDelete > (anonymous)()]": ()=>{
                            setExpenses(expenses.filter({
                                "ExpenseList[handleDelete > (anonymous)() > expenses.filter()]": (exp)=>exp.id !== id
                            }["ExpenseList[handleDelete > (anonymous)() > expenses.filter()]"]));
                        }
                    }["ExpenseList[handleDelete > (anonymous)()]"]).catch(_ExpenseListHandleDeleteAnonymous);
                }
            }
        })["ExpenseList[handleDelete]"];
        $[1] = expenses;
        $[2] = setExpenses;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleDelete = t1;
    const formatDate = _ExpenseListFormatDate;
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-bold mb-4 text-red-400",
            children: "Todas as Despesas"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 313,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== expenses || $[6] !== handleDelete) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-800 p-6 rounded-lg shadow-lg",
            children: [
                t2,
                expenses.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400",
                    children: "Nenhuma despesa registrada ainda."
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                    lineNumber: 320,
                    columnNumber: 93
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-4",
                    children: expenses.map({
                        "ExpenseList[expenses.map()]": (expense)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex justify-between items-center bg-gray-700 p-4 rounded",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-400 block mb-1",
                                                children: formatDate(expense.date)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 321,
                                                columnNumber: 149
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-lg",
                                                children: expense.description
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 321,
                                                columnNumber: 233
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-sm ml-2 px-2 py-0.5 rounded ${expense.category ? "bg-blue-600" : "bg-gray-600"}`,
                                                children: expense.category ? expense.category.name : "Sem Categoria"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 321,
                                                columnNumber: 301
                                            }, this),
                                            expense.goal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm ml-2 px-2 py-0.5 rounded bg-yellow-600",
                                                children: [
                                                    "→ ",
                                                    expense.goal.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 321,
                                                columnNumber: 490
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                        lineNumber: 321,
                                        columnNumber: 144
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-red-400 text-lg",
                                                children: [
                                                    "R$ ",
                                                    expense.amount.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 321,
                                                columnNumber: 635
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: {
                                                    "ExpenseList[expenses.map() > <button>.onClick]": ()=>handleDelete(expense.id)
                                                }["ExpenseList[expenses.map() > <button>.onClick]"],
                                                className: "text-gray-400 hover:text-red-500 transition duration-300",
                                                children: "×"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 321,
                                                columnNumber: 721
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                        lineNumber: 321,
                                        columnNumber: 590
                                    }, this)
                                ]
                            }, expense.id, true, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                lineNumber: 321,
                                columnNumber: 53
                            }, this)
                    }["ExpenseList[expenses.map()]"])
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                    lineNumber: 320,
                    columnNumber: 162
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 320,
            columnNumber: 10
        }, this);
        $[5] = expenses;
        $[6] = handleDelete;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
}
_c1 = ExpenseList;
// --- Componente Principal da Página de Despesas ---
function _ExpenseListFormatDate(dateString) {
    return new Date(dateString).toLocaleDateString("pt-BR", {
        timeZone: "UTC"
    });
}
function _ExpenseListHandleDeleteAnonymous(error) {
    return console.error("Erro ao deletar despesa:", error);
}
function ExpensesPage() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "b9593ec6a0f74a0c125e5c28833286ea558cdce4861a5022f86613a3aa1fcd1e") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b9593ec6a0f74a0c125e5c28833286ea558cdce4861a5022f86613a3aa1fcd1e";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [expenses, setExpenses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "ExpensesPage[fetchExpenses]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/expenses/`).then({
                    "ExpensesPage[fetchExpenses > (anonymous)()]": (response)=>{
                        setExpenses(response.data);
                    }
                }["ExpensesPage[fetchExpenses > (anonymous)()]"]).catch(_ExpensesPageFetchExpensesAnonymous);
            }
        })["ExpensesPage[fetchExpenses]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const fetchExpenses = t1;
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "ExpensesPage[useEffect()]": ()=>{
                fetchExpenses();
            }
        })["ExpensesPage[useEffect()]"];
        t3 = [];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        const handleNewExpense = {
            "ExpensesPage[handleNewExpense]": (newExpense)=>{
                fetchExpenses();
            }
        }["ExpensesPage[handleNewExpense]"];
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExpenseForm, {
            onExpenseAdded: handleNewExpense
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 398,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== expenses) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExpenseList, {
                    expenses: expenses,
                    setExpenses: setExpenses
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                    lineNumber: 405,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 405,
            columnNumber: 10
        }, this);
        $[6] = expenses;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    return t5;
}
_s1(ExpensesPage, "YLDlD2ke0eDKDsPlZUgUzdtmFKs=");
_c2 = ExpensesPage;
function _ExpensesPageFetchExpensesAnonymous(error) {
    return console.error("Erro ao buscar despesas:", error);
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ExpenseForm");
__turbopack_context__.k.register(_c1, "ExpenseList");
__turbopack_context__.k.register(_c2, "ExpensesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=80b94_ProjetosdeProgramacao_projeto-financeiro_frontend_app_expenses_page_bf7b4c0e.js.map