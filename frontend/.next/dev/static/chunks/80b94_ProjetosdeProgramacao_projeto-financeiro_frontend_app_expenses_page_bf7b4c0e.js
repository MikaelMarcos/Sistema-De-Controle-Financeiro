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
function ExpenseForm(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(67);
    if ($[0] !== "8a99842b2b1fdff5c135bc9d872b0bbd4cd3d926b31702ac315d114432229151") {
        for(let $i = 0; $i < 67; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8a99842b2b1fdff5c135bc9d872b0bbd4cd3d926b31702ac315d114432229151";
    }
    const { onExpenseAdded } = t0;
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [groupId, setGroupId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [subcategoryId, setSubcategoryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newSubcategoryName, setNewSubcategoryName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [budgetGroups, setBudgetGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const [subcategories, setSubcategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const [goals, setGoals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    const [selectedGoalId, setSelectedGoalId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [metaGroupId, setMetaGroupId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t4;
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "ExpenseForm[useEffect()]": ()=>{
                Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/budget/`),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/categories/`),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/goals/`)
                ]).then({
                    "ExpenseForm[useEffect() > (anonymous)()]": (t6)=>{
                        const [groupsRes, catsRes, goalsRes] = t6;
                        setBudgetGroups(groupsRes.data);
                        setSubcategories(catsRes.data);
                        setGoals(goalsRes.data);
                        const metaGroup = groupsRes.data.find(_ExpenseFormUseEffectAnonymousGroupsResDataFind);
                        if (metaGroup) {
                            setMetaGroupId(metaGroup.id);
                        }
                    }
                }["ExpenseForm[useEffect() > (anonymous)()]"]);
            }
        })["ExpenseForm[useEffect()]"];
        t5 = [];
        $[4] = t4;
        $[5] = t5;
    } else {
        t4 = $[4];
        t5 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[6] !== amount || $[7] !== date || $[8] !== description || $[9] !== groupId || $[10] !== metaGroupId || $[11] !== newSubcategoryName || $[12] !== onExpenseAdded || $[13] !== selectedGoalId || $[14] !== subcategoryId) {
        t6 = ({
            "ExpenseForm[handleSubmit]": async (e)=>{
                e.preventDefault();
                if (!description || !amount || !groupId) {
                    alert("Preencha Descri\xE7\xE3o, Valor e GRUPO (Obrigat\xF3rio).");
                    return;
                }
                let finalSubcategoryId = subcategoryId;
                if (newSubcategoryName) {
                    ;
                    try {
                        const catRes = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API_URL}/categories/`, {
                            name: newSubcategoryName
                        });
                        finalSubcategoryId = catRes.data.id;
                        setSubcategories({
                            "ExpenseForm[handleSubmit > setSubcategories()]": (prev)=>[
                                    ...prev,
                                    catRes.data
                                ]
                        }["ExpenseForm[handleSubmit > setSubcategories()]"]);
                    } catch (t7) {
                        const error = t7;
                        console.error("Erro ao criar subcategoria:", error);
                        alert("Erro ao criar nova subcategoria.");
                        return;
                    }
                }
                const newExpense = {
                    description,
                    amount: parseFloat(amount),
                    budget_group_id: parseInt(groupId),
                    category_id: finalSubcategoryId ? parseInt(finalSubcategoryId) : null,
                    goal_id: null,
                    date: date ? new Date(date).toISOString() : new Date().toISOString()
                };
                if (parseInt(groupId) === metaGroupId && selectedGoalId) {
                    newExpense.goal_id = parseInt(selectedGoalId);
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API_URL}/expenses/`, newExpense).then({
                    "ExpenseForm[handleSubmit > (anonymous)()]": (response)=>{
                        setDescription("");
                        setAmount("");
                        setDate("");
                        setGroupId("");
                        setSubcategoryId("");
                        setNewSubcategoryName("");
                        setSelectedGoalId("");
                        onExpenseAdded();
                    }
                }["ExpenseForm[handleSubmit > (anonymous)()]"]).catch(_ExpenseFormHandleSubmitAnonymous);
            }
        })["ExpenseForm[handleSubmit]"];
        $[6] = amount;
        $[7] = date;
        $[8] = description;
        $[9] = groupId;
        $[10] = metaGroupId;
        $[11] = newSubcategoryName;
        $[12] = onExpenseAdded;
        $[13] = selectedGoalId;
        $[14] = subcategoryId;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    const handleSubmit = t6;
    const isMetaGroupSelected = parseInt(groupId) === metaGroupId;
    let t7;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-bold mb-4 text-red-400",
            children: "Nova Despesa"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 146,
            columnNumber: 10
        }, this);
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "ExpenseForm[<input>.onChange]": (e_0)=>setDescription(e_0.target.value)
        })["ExpenseForm[<input>.onChange]"];
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== description) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            value: description,
            onChange: t8,
            placeholder: "Descri\xE7\xE3o (ex: Almo\xE7o)",
            className: "p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-red-500"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 162,
            columnNumber: 10
        }, this);
        $[18] = description;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "ExpenseForm[<input>.onChange]": (e_1)=>setAmount(e_1.target.value)
        })["ExpenseForm[<input>.onChange]"];
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== amount) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "number",
            value: amount,
            onChange: t10,
            placeholder: "Valor (ex: 50.00)",
            className: "p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-red-500"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[21] = amount;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== t11 || $[24] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",
            children: [
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 187,
            columnNumber: 11
        }, this);
        $[23] = t11;
        $[24] = t9;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "ExpenseForm[<input>.onChange]": (e_2)=>setDate(e_2.target.value)
        })["ExpenseForm[<input>.onChange]"];
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== date) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "date",
            value: date,
            onChange: t13,
            className: "p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-red-500"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[27] = date;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = ({
            "ExpenseForm[<select>.onChange]": (e_3)=>setGroupId(e_3.target.value)
        })["ExpenseForm[<select>.onChange]"];
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    let t16;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "SELECIONE O GRUPO (Obrigatório)"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 222,
            columnNumber: 11
        }, this);
        $[30] = t16;
    } else {
        t16 = $[30];
    }
    let t17;
    if ($[31] !== budgetGroups) {
        t17 = budgetGroups.map(_ExpenseFormBudgetGroupsMap);
        $[31] = budgetGroups;
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    let t18;
    if ($[33] !== groupId || $[34] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            value: groupId,
            onChange: t15,
            className: "p-3 bg-gray-700 rounded border-2 border-red-500 focus:outline-none font-bold text-white",
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 237,
            columnNumber: 11
        }, this);
        $[33] = groupId;
        $[34] = t17;
        $[35] = t18;
    } else {
        t18 = $[35];
    }
    let t19;
    if ($[36] !== t14 || $[37] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",
            children: [
                t14,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[36] = t14;
        $[37] = t18;
        $[38] = t19;
    } else {
        t19 = $[38];
    }
    let t20;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = ({
            "ExpenseForm[<select>.onChange]": (e_4)=>setSubcategoryId(e_4.target.value)
        })["ExpenseForm[<select>.onChange]"];
        $[39] = t20;
    } else {
        t20 = $[39];
    }
    const t21 = !!newSubcategoryName;
    const t22 = `p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none ${newSubcategoryName ? "opacity-50" : ""}`;
    let t23;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Subcategoria (Opcional)"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 266,
            columnNumber: 11
        }, this);
        $[40] = t23;
    } else {
        t23 = $[40];
    }
    let t24;
    if ($[41] !== subcategories) {
        t24 = subcategories.map(_ExpenseFormSubcategoriesMap);
        $[41] = subcategories;
        $[42] = t24;
    } else {
        t24 = $[42];
    }
    let t25;
    if ($[43] !== subcategoryId || $[44] !== t21 || $[45] !== t22 || $[46] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            value: subcategoryId,
            onChange: t20,
            disabled: t21,
            className: t22,
            children: [
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 281,
            columnNumber: 11
        }, this);
        $[43] = subcategoryId;
        $[44] = t21;
        $[45] = t22;
        $[46] = t24;
        $[47] = t25;
    } else {
        t25 = $[47];
    }
    let t26;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = ({
            "ExpenseForm[<input>.onChange]": (e_5)=>setNewSubcategoryName(e_5.target.value)
        })["ExpenseForm[<input>.onChange]"];
        $[48] = t26;
    } else {
        t26 = $[48];
    }
    const t27 = !!subcategoryId;
    const t28 = `p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none ${subcategoryId ? "opacity-50" : ""}`;
    let t29;
    if ($[49] !== newSubcategoryName || $[50] !== t27 || $[51] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            value: newSubcategoryName,
            onChange: t26,
            disabled: t27,
            placeholder: "Ou digite uma nova Subcategoria...",
            className: t28
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 303,
            columnNumber: 11
        }, this);
        $[49] = newSubcategoryName;
        $[50] = t27;
        $[51] = t28;
        $[52] = t29;
    } else {
        t29 = $[52];
    }
    let t30;
    if ($[53] !== t25 || $[54] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
            children: [
                t25,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 313,
            columnNumber: 11
        }, this);
        $[53] = t25;
        $[54] = t29;
        $[55] = t30;
    } else {
        t30 = $[55];
    }
    let t31;
    if ($[56] !== goals || $[57] !== isMetaGroupSelected || $[58] !== selectedGoalId) {
        t31 = isMetaGroupSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: selectedGoalId,
                onChange: {
                    "ExpenseForm[<select>.onChange]": (e_6)=>setSelectedGoalId(e_6.target.value)
                }["ExpenseForm[<select>.onChange]"],
                className: "w-full p-3 bg-gray-700 rounded border border-yellow-500 focus:outline-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: "Vincular a qual meta?"
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                        lineNumber: 324,
                        columnNumber: 131
                    }, this),
                    goals.map(_ExpenseFormGoalsMap)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                lineNumber: 322,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 322,
            columnNumber: 34
        }, this);
        $[56] = goals;
        $[57] = isMetaGroupSelected;
        $[58] = selectedGoalId;
        $[59] = t31;
    } else {
        t31 = $[59];
    }
    let t32;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded transition duration-300",
            children: "Adicionar Despesa"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 334,
            columnNumber: 11
        }, this);
        $[60] = t32;
    } else {
        t32 = $[60];
    }
    let t33;
    if ($[61] !== handleSubmit || $[62] !== t12 || $[63] !== t19 || $[64] !== t30 || $[65] !== t31) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "bg-gray-800 p-6 rounded-lg shadow-lg mb-8",
            children: [
                t7,
                t12,
                t19,
                t30,
                t31,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 341,
            columnNumber: 11
        }, this);
        $[61] = handleSubmit;
        $[62] = t12;
        $[63] = t19;
        $[64] = t30;
        $[65] = t31;
        $[66] = t33;
    } else {
        t33 = $[66];
    }
    return t33;
}
_s(ExpenseForm, "J2kLZnyQfZIUFQk3q5s6YKjwC58=");
_c = ExpenseForm;
function _ExpenseFormGoalsMap(goal) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: goal.id,
        children: goal.name
    }, goal.id, false, {
        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
        lineNumber: 354,
        columnNumber: 10
    }, this);
}
function _ExpenseFormSubcategoriesMap(cat) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: cat.id,
        children: cat.name
    }, cat.id, false, {
        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
        lineNumber: 357,
        columnNumber: 10
    }, this);
}
function _ExpenseFormBudgetGroupsMap(group) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: group.id,
        children: group.name
    }, group.id, false, {
        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
        lineNumber: 360,
        columnNumber: 10
    }, this);
}
function _ExpenseFormHandleSubmitAnonymous(error_0) {
    return console.error("Erro ao adicionar despesa:", error_0);
}
function _ExpenseFormUseEffectAnonymousGroupsResDataFind(g) {
    return g.name.toLowerCase().includes("metas");
}
function ExpenseList(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "8a99842b2b1fdff5c135bc9d872b0bbd4cd3d926b31702ac315d114432229151") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8a99842b2b1fdff5c135bc9d872b0bbd4cd3d926b31702ac315d114432229151";
    }
    const { expenses, setExpenses } = t0;
    let t1;
    if ($[1] !== expenses || $[2] !== setExpenses) {
        t1 = ({
            "ExpenseList[handleDelete]": (id)=>{
                if (confirm("Deletar despesa?")) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`${API_URL}/expenses/${id}`).then({
                        "ExpenseList[handleDelete > (anonymous)()]": ()=>setExpenses(expenses.filter({
                                "ExpenseList[handleDelete > (anonymous)() > expenses.filter()]": (exp)=>exp.id !== id
                            }["ExpenseList[handleDelete > (anonymous)() > expenses.filter()]"]))
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
            children: "Últimas Despesas"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 403,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== expenses || $[6] !== handleDelete) {
        let t4;
        if ($[8] !== handleDelete) {
            t4 = ({
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
                                        lineNumber: 413,
                                        columnNumber: 147
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-lg",
                                        children: expense.description
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                        lineNumber: 413,
                                        columnNumber: 231
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm ml-2 px-2 py-0.5 rounded bg-blue-900 text-blue-200 font-bold",
                                        children: expense.budget_group?.name
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                        lineNumber: 413,
                                        columnNumber: 299
                                    }, this),
                                    expense.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm ml-2 px-2 py-0.5 rounded bg-gray-600",
                                        children: expense.category.name
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                        lineNumber: 413,
                                        columnNumber: 442
                                    }, this),
                                    expense.goal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm ml-2 px-2 py-0.5 rounded bg-yellow-600",
                                        children: [
                                            "→ ",
                                            expense.goal.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                        lineNumber: 413,
                                        columnNumber: 553
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                lineNumber: 413,
                                columnNumber: 142
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
                                        lineNumber: 413,
                                        columnNumber: 698
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "ExpenseList[expenses.map() > <button>.onClick]": ()=>handleDelete(expense.id)
                                        }["ExpenseList[expenses.map() > <button>.onClick]"],
                                        className: "text-gray-400 hover:text-red-500",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                        lineNumber: 413,
                                        columnNumber: 784
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                lineNumber: 413,
                                columnNumber: 653
                            }, this)
                        ]
                    }, expense.id, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                        lineNumber: 413,
                        columnNumber: 51
                    }, this)
            })["ExpenseList[expenses.map()]"];
            $[8] = handleDelete;
            $[9] = t4;
        } else {
            t4 = $[9];
        }
        t3 = expenses.map(t4);
        $[5] = expenses;
        $[6] = handleDelete;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[10] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-800 p-6 rounded-lg shadow-lg",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-4",
                    children: t3
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                    lineNumber: 431,
                    columnNumber: 68
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 431,
            columnNumber: 10
        }, this);
        $[10] = t3;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    return t4;
}
_c1 = ExpenseList;
function _ExpenseListFormatDate(d) {
    return new Date(d).toLocaleDateString("pt-BR", {
        timeZone: "UTC"
    });
}
function _ExpenseListHandleDeleteAnonymous(error) {
    return console.error("Erro:", error);
}
function ExpensesPage() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "8a99842b2b1fdff5c135bc9d872b0bbd4cd3d926b31702ac315d114432229151") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8a99842b2b1fdff5c135bc9d872b0bbd4cd3d926b31702ac315d114432229151";
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
                    "ExpensesPage[fetchExpenses > (anonymous)()]": (res)=>setExpenses(res.data)
                }["ExpensesPage[fetchExpenses > (anonymous)()]"]);
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
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExpenseForm, {
            onExpenseAdded: fetchExpenses
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 495,
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
                    lineNumber: 502,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 502,
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