(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/income/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IncomePage
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
// --- Componente do Formulário de Entradas ---
function IncomeForm(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "8dfaedca75dfba9f7dd640a164b79ab461c75b2fb703bac0b627308c8ca22822") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8dfaedca75dfba9f7dd640a164b79ab461c75b2fb703bac0b627308c8ca22822";
    }
    const { onIncomeAdded } = t0;
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[1] !== amount || $[2] !== date || $[3] !== description || $[4] !== onIncomeAdded) {
        t1 = ({
            "IncomeForm[handleSubmit]": (e)=>{
                e.preventDefault();
                if (!description || !amount) {
                    alert("Por favor, preencha todos os campos.");
                    return;
                }
                const newIncome = {
                    description,
                    amount: parseFloat(amount)
                };
                if (date) {
                    newIncome.date = new Date(date).toISOString();
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API_URL}/income/`, newIncome).then({
                    "IncomeForm[handleSubmit > (anonymous)()]": (response)=>{
                        setDescription("");
                        setAmount("");
                        setDate("");
                        onIncomeAdded(response.data);
                    }
                }["IncomeForm[handleSubmit > (anonymous)()]"]).catch(_IncomeFormHandleSubmitAnonymous);
            }
        })["IncomeForm[handleSubmit]"];
        $[1] = amount;
        $[2] = date;
        $[3] = description;
        $[4] = onIncomeAdded;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const handleSubmit = t1;
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-bold mb-4 text-green-400",
            children: "Nova Entrada (Receita)"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/income/page.js",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "IncomeForm[<input>.onChange]": (e_0)=>setDescription(e_0.target.value)
        })["IncomeForm[<input>.onChange]"];
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== description) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            value: description,
            onChange: t3,
            placeholder: "Descri\xE7\xE3o (ex: Sal\xE1rio - LAIS)",
            className: "p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-green-500"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/income/page.js",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[8] = description;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "IncomeForm[<input>.onChange]": (e_1)=>setAmount(e_1.target.value)
        })["IncomeForm[<input>.onChange]"];
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== amount) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "number",
            value: amount,
            onChange: t5,
            placeholder: "Valor (ex: 3000.00)",
            className: "p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-green-500"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/income/page.js",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[11] = amount;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "IncomeForm[<input>.onChange]": (e_2)=>setDate(e_2.target.value)
        })["IncomeForm[<input>.onChange]"];
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== date) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "date",
            value: date,
            onChange: t7,
            className: "p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-green-500"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/income/page.js",
            lineNumber: 110,
            columnNumber: 10
        }, this);
        $[14] = date;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== t4 || $[17] !== t6 || $[18] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
            children: [
                t4,
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/income/page.js",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        $[16] = t4;
        $[17] = t6;
        $[18] = t8;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded transition duration-300",
            children: "Adicionar Entrada"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/income/page.js",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== handleSubmit || $[22] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "bg-gray-800 p-6 rounded-lg shadow-lg mb-8",
            children: [
                t2,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/income/page.js",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[21] = handleSubmit;
        $[22] = t9;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    return t11;
}
_s(IncomeForm, "H2AODJ577+Cufxhh3r1At1vZ9GE=");
_c = IncomeForm;
// --- Componente da Lista de Entradas ---
function _IncomeFormHandleSubmitAnonymous(error) {
    return console.error("Erro ao adicionar entrada:", error);
}
function IncomeList(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "8dfaedca75dfba9f7dd640a164b79ab461c75b2fb703bac0b627308c8ca22822") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8dfaedca75dfba9f7dd640a164b79ab461c75b2fb703bac0b627308c8ca22822";
    }
    const { incomes, setIncomes } = t0;
    let t1;
    if ($[1] !== incomes || $[2] !== setIncomes) {
        t1 = ({
            "IncomeList[handleDelete]": (id)=>{
                if (confirm("Tem certeza que deseja deletar esta entrada?")) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`${API_URL}/income/${id}`).then({
                        "IncomeList[handleDelete > (anonymous)()]": ()=>{
                            setIncomes(incomes.filter({
                                "IncomeList[handleDelete > (anonymous)() > incomes.filter()]": (inc)=>inc.id !== id
                            }["IncomeList[handleDelete > (anonymous)() > incomes.filter()]"]));
                        }
                    }["IncomeList[handleDelete > (anonymous)()]"]).catch(_IncomeListHandleDeleteAnonymous);
                }
            }
        })["IncomeList[handleDelete]"];
        $[1] = incomes;
        $[2] = setIncomes;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleDelete = t1;
    const formatDate = _IncomeListFormatDate;
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-bold mb-4 text-green-400",
            children: "Últimas Entradas"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/income/page.js",
            lineNumber: 186,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== handleDelete || $[6] !== incomes) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-800 p-6 rounded-lg shadow-lg",
            children: [
                t2,
                incomes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400",
                    children: "Nenhuma entrada registrada ainda."
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/income/page.js",
                    lineNumber: 193,
                    columnNumber: 92
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-4",
                    children: incomes.map({
                        "IncomeList[incomes.map()]": (income)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex justify-between items-center bg-gray-700 p-4 rounded",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-400 block mb-1",
                                                children: formatDate(income.date)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/income/page.js",
                                                lineNumber: 194,
                                                columnNumber: 145
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-lg",
                                                children: income.description
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/income/page.js",
                                                lineNumber: 194,
                                                columnNumber: 228
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/income/page.js",
                                        lineNumber: 194,
                                        columnNumber: 140
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-green-400 text-lg",
                                                children: [
                                                    "+ R$ ",
                                                    income.amount.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/income/page.js",
                                                lineNumber: 194,
                                                columnNumber: 346
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: {
                                                    "IncomeList[incomes.map() > <button>.onClick]": ()=>handleDelete(income.id)
                                                }["IncomeList[incomes.map() > <button>.onClick]"],
                                                className: "text-gray-400 hover:text-red-500 transition duration-300",
                                                children: "×"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/income/page.js",
                                                lineNumber: 194,
                                                columnNumber: 435
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/income/page.js",
                                        lineNumber: 194,
                                        columnNumber: 301
                                    }, this)
                                ]
                            }, income.id, true, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/income/page.js",
                                lineNumber: 194,
                                columnNumber: 50
                            }, this)
                    }["IncomeList[incomes.map()]"])
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/income/page.js",
                    lineNumber: 193,
                    columnNumber: 161
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/income/page.js",
            lineNumber: 193,
            columnNumber: 10
        }, this);
        $[5] = handleDelete;
        $[6] = incomes;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
}
_c1 = IncomeList;
// --- Componente Principal da Página ---
function _IncomeListFormatDate(dateString) {
    return new Date(dateString).toLocaleDateString("pt-BR", {
        timeZone: "UTC"
    });
}
function _IncomeListHandleDeleteAnonymous(error) {
    return console.error("Erro ao deletar entrada:", error);
}
function IncomePage() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "8dfaedca75dfba9f7dd640a164b79ab461c75b2fb703bac0b627308c8ca22822") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8dfaedca75dfba9f7dd640a164b79ab461c75b2fb703bac0b627308c8ca22822";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [incomes, setIncomes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "IncomePage[useEffect()]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/income/`).then({
                    "IncomePage[useEffect() > (anonymous)()]": (response)=>{
                        setIncomes(response.data);
                    }
                }["IncomePage[useEffect() > (anonymous)()]"]).catch(_IncomePageUseEffectAnonymous);
            }
        })["IncomePage[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        const handleNewIncome = {
            "IncomePage[handleNewIncome]": (newIncome)=>{
                setIncomes({
                    "IncomePage[handleNewIncome > setIncomes()]": (prevIncomes)=>[
                            newIncome,
                            ...prevIncomes
                        ]
                }["IncomePage[handleNewIncome > setIncomes()]"]);
            }
        }["IncomePage[handleNewIncome]"];
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IncomeForm, {
            onIncomeAdded: handleNewIncome
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/income/page.js",
            lineNumber: 261,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== incomes) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IncomeList, {
                    incomes: incomes,
                    setIncomes: setIncomes
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/income/page.js",
                    lineNumber: 268,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/income/page.js",
            lineNumber: 268,
            columnNumber: 10
        }, this);
        $[5] = incomes;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    return t4;
}
_s1(IncomePage, "62x+YcgyzLHZ6jgD2leKK+kybP0=");
_c2 = IncomePage;
function _IncomePageUseEffectAnonymous(error) {
    return console.error("Erro ao buscar entradas:", error);
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "IncomeForm");
__turbopack_context__.k.register(_c1, "IncomeList");
__turbopack_context__.k.register(_c2, "IncomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=80b94_ProjetosdeProgramacao_projeto-financeiro_frontend_app_income_page_8d60405b.js.map