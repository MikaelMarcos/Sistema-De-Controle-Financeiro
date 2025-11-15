(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BudgetPage
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
const API_URL = 'https://api-financeiro-vbsl.onrender.com';
// --- Componente: Banner de Alerta (O mesmo de antes) ---
function AlertBanner(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "d0de1dd126b0c05277b1df1b1fb35a32f1ec61810c76d33db06baec6e29e2151") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d0de1dd126b0c05277b1df1b1fb35a32f1ec61810c76d33db06baec6e29e2151";
    }
    const { overBudgetGroups } = t0;
    if (overBudgetGroups.length === 0) {
        return null;
    }
    let t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "h-7 w-7 text-fin-red",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M12 9v2m0 4h.01M4.93 19h14.14a2 2 0 001.73-3L13.73 4a2 2 0 00-3.46 0L3.2 16a2 2 0 001.73 3z"
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                    lineNumber: 27,
                    columnNumber: 133
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                lineNumber: 27,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-bold text-fin-red mb-1",
            children: "⚠️ Atenção ao Orçamento!"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-300",
            children: "Você excedeu o limite planejado:"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
    } else {
        t1 = $[1];
        t2 = $[2];
        t3 = $[3];
    }
    let t4;
    if ($[4] !== overBudgetGroups) {
        t4 = overBudgetGroups.map(_AlertBannerOverBudgetGroupsMap);
        $[4] = overBudgetGroups;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-r from-red-900/40 to-red-700/30 border-l-4 border-fin-red p-5 mb-8 rounded-xl shadow-lg backdrop-blur-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            t2,
                            t3,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc list-inside mt-2 text-white font-semibold space-y-1",
                                children: t4
                            }, void 0, false, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                                lineNumber: 48,
                                columnNumber: 204
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                        lineNumber: 48,
                        columnNumber: 191
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                lineNumber: 48,
                columnNumber: 147
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    return t5;
}
_c = AlertBanner;
// --- Seletor de Mês (O mesmo de antes) ---
function _AlertBannerOverBudgetGroupsMap(group) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: [
            group.name,
            " (Estourado em ",
            formatCurrency(group.actual_spent - group.planned_amount),
            ")"
        ]
    }, group.group_id, true, {
        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
        lineNumber: 59,
        columnNumber: 10
    }, this);
}
function MonthSelector(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "d0de1dd126b0c05277b1df1b1fb35a32f1ec61810c76d33db06baec6e29e2151") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d0de1dd126b0c05277b1df1b1fb35a32f1ec61810c76d33db06baec6e29e2151";
    }
    const { currentDate, onDateChange } = t0;
    let t1;
    if ($[1] !== currentDate || $[2] !== onDateChange) {
        t1 = ({
            "MonthSelector[handlePreviousMonth]": ()=>{
                const newDate = new Date(currentDate);
                newDate.setMonth(newDate.getMonth() - 1);
                onDateChange(newDate);
            }
        })["MonthSelector[handlePreviousMonth]"];
        $[1] = currentDate;
        $[2] = onDateChange;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handlePreviousMonth = t1;
    let t2;
    if ($[4] !== currentDate || $[5] !== onDateChange) {
        t2 = ({
            "MonthSelector[handleNextMonth]": ()=>{
                const newDate_0 = new Date(currentDate);
                newDate_0.setMonth(newDate_0.getMonth() + 1);
                onDateChange(newDate_0);
            }
        })["MonthSelector[handleNextMonth]"];
        $[4] = currentDate;
        $[5] = onDateChange;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const handleNextMonth = t2;
    let t3;
    if ($[7] !== currentDate) {
        let t4;
        if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /^\w/;
            $[9] = t4;
        } else {
            t4 = $[9];
        }
        t3 = currentDate.toLocaleString("pt-BR", {
            month: "long",
            year: "numeric"
        }).replace(t4, _MonthSelectorAnonymous);
        $[7] = currentDate;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    const formattedDate = t3;
    let t4;
    if ($[10] !== handlePreviousMonth) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handlePreviousMonth,
            className: "px-3 py-2 text-fin-gold border border-fin-gold/40 rounded-lg hover:bg-fin-gold hover:text-black transition-all",
            children: "< Anterior"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 126,
            columnNumber: 10
        }, this);
        $[10] = handlePreviousMonth;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] !== formattedDate) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-light text-white tracking-wide",
            children: formattedDate
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 134,
            columnNumber: 10
        }, this);
        $[12] = formattedDate;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] !== handleNextMonth) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleNextMonth,
            className: "px-3 py-2 text-fin-gold border border-fin-gold/40 rounded-lg hover:bg-fin-gold hover:text-black transition-all",
            children: "Pr\xF3ximo >"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 142,
            columnNumber: 10
        }, this);
        $[14] = handleNextMonth;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] !== t4 || $[17] !== t5 || $[18] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center mb-8 bg-fin-card/30 p-4 rounded-2xl border border-white/5 backdrop-blur-sm shadow-inner",
            children: [
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 150,
            columnNumber: 10
        }, this);
        $[16] = t4;
        $[17] = t5;
        $[18] = t6;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    return t7;
}
_c1 = MonthSelector;
// --- 👇 NOVO COMPONENTE: Card de Treinamento da IA 👇 ---
function _MonthSelectorAnonymous(c) {
    return c.toUpperCase();
}
function AITrainingCard() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "d0de1dd126b0c05277b1df1b1fb35a32f1ec61810c76d33db06baec6e29e2151") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d0de1dd126b0c05277b1df1b1fb35a32f1ec61810c76d33db06baec6e29e2151";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            trained: false,
            message: "Verificando status..."
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "AITrainingCard[useEffect()]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/ai/status`).then({
                    "AITrainingCard[useEffect() > (anonymous)()]": (response)=>setStatus(response.data)
                }["AITrainingCard[useEffect() > (anonymous)()]"]).catch({
                    "AITrainingCard[useEffect() > (anonymous)()]": (error)=>setStatus({
                            trained: false,
                            message: "Erro ao conectar com a IA."
                        })
                }["AITrainingCard[useEffect() > (anonymous)()]"]);
            }
        })["AITrainingCard[useEffect()]"];
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
        t3 = ({
            "AITrainingCard[handleTrain]": ()=>{
                setIsLoading(true);
                setStatus({
                    trained: false,
                    message: "Treinando... Isso pode levar um momento."
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API_URL}/ai/train`).then({
                    "AITrainingCard[handleTrain > (anonymous)()]": (response_0)=>{
                        setStatus({
                            trained: true,
                            message: response_0.data.message
                        });
                    }
                }["AITrainingCard[handleTrain > (anonymous)()]"]).catch({
                    "AITrainingCard[handleTrain > (anonymous)()]": (error_0)=>{
                        const detail = error_0.response?.data?.detail || "Erro desconhecido durante o treinamento.";
                        setStatus({
                            trained: false,
                            message: `Falha no Treinamento: ${detail}`
                        });
                    }
                }["AITrainingCard[handleTrain > (anonymous)()]"]).finally({
                    "AITrainingCard[handleTrain > (anonymous)()]": ()=>{
                        setIsLoading(false);
                    }
                }["AITrainingCard[handleTrain > (anonymous)()]"]);
            }
        })["AITrainingCard[handleTrain]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const handleTrain = t3;
    const statusColor = status.trained ? "text-green-400" : "text-yellow-400";
    let t4;
    let t5;
    let t6;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 bg-fin-highlight/20 rounded-2xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-3xl",
                children: "🤖"
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                lineNumber: 249,
                columnNumber: 63
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 249,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-bold text-fin-highlight mb-2",
            children: "Categorização Inteligente"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 250,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white/80 mb-4 text-sm",
            children: "Treine a IA para aprender com seu histórico. Quanto mais despesas você categorizar, mais inteligente ela ficará para preencher automaticamente no futuro."
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 251,
            columnNumber: 10
        }, this);
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
    } else {
        t4 = $[5];
        t5 = $[6];
        t6 = $[7];
    }
    const t7 = isLoading ? "Treinando IA..." : "Treinar / Retreinar IA";
    let t8;
    if ($[8] !== isLoading || $[9] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleTrain,
            disabled: isLoading,
            className: "px-6 py-3 bg-gradient-to-r from-fin-highlight to-fin-gold text-fin-dark font-bold rounded-xl shadow-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:animate-pulse",
            children: t7
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 263,
            columnNumber: 10
        }, this);
        $[8] = isLoading;
        $[9] = t7;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-gray-400",
            children: "Status:"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 272,
            columnNumber: 10
        }, this);
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    const t10 = `font-semibold ${statusColor}`;
    let t11;
    if ($[12] !== status.message || $[13] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-left",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: t10,
                    children: status.message
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                    lineNumber: 280,
                    columnNumber: 42
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 280,
            columnNumber: 11
        }, this);
        $[12] = status.message;
        $[13] = t10;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] !== t11 || $[16] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-br from-fin-dark/90 to-fin-card/50 p-6 rounded-2xl border border-fin-highlight/30 shadow-xl backdrop-blur-sm mt-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-4",
                children: [
                    t4,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            t5,
                            t6,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    t8,
                                    t11
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                                lineNumber: 289,
                                columnNumber: 215
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                        lineNumber: 289,
                        columnNumber: 202
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                lineNumber: 289,
                columnNumber: 158
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[15] = t11;
        $[16] = t8;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    return t12;
}
_s(AITrainingCard, "+xC0AejdOIk7zsISIhb7OpvMWIc=");
_c2 = AITrainingCard;
function BudgetPage() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(53);
    if ($[0] !== "d0de1dd126b0c05277b1df1b1fb35a32f1ec61810c76d33db06baec6e29e2151") {
        for(let $i = 0; $i < 53; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d0de1dd126b0c05277b1df1b1fb35a32f1ec61810c76d33db06baec6e29e2151";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = new Date();
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [currentDate, setCurrentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [analysisData, setAnalysisData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [totalPercentage, setTotalPercentage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [overBudgetGroups, setOverBudgetGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] !== currentDate) {
        t2 = ({
            "BudgetPage[fetchAnalysis]": async ()=>{
                const month = currentDate.getMonth() + 1;
                const year = currentDate.getFullYear();
                ;
                try {
                    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/budget/analysis?month=${month}&year=${year}`);
                    setAnalysisData(response.data);
                    const totalPerc = response.data.analysis.reduce(_BudgetPageFetchAnalysisResponseDataAnalysisReduce, 0);
                    setTotalPercentage(totalPerc);
                    const alerts = response.data.analysis.filter(_BudgetPageFetchAnalysisResponseDataAnalysisFilter);
                    setOverBudgetGroups(alerts);
                } catch (t3) {
                    const error = t3;
                    console.error("Erro ao buscar an\xE1lise:", error);
                }
            }
        })["BudgetPage[fetchAnalysis]"];
        $[3] = currentDate;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const fetchAnalysis = t2;
    let t3;
    if ($[5] !== fetchAnalysis) {
        t3 = ({
            "BudgetPage[useEffect()]": ()=>{
                fetchAnalysis();
            }
        })["BudgetPage[useEffect()]"];
        $[5] = fetchAnalysis;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== currentDate) {
        t4 = [
            currentDate
        ];
        $[7] = currentDate;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[9] !== fetchAnalysis) {
        t5 = ({
            "BudgetPage[handlePercentageChange]": (groupId, newValue)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`${API_URL}/budget/${groupId}?target_percentage=${newValue}`).then({
                    "BudgetPage[handlePercentageChange > (anonymous)()]": ()=>fetchAnalysis()
                }["BudgetPage[handlePercentageChange > (anonymous)()]"]).catch(_BudgetPageHandlePercentageChangeAnonymous);
            }
        })["BudgetPage[handlePercentageChange]"];
        $[9] = fetchAnalysis;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const handlePercentageChange = t5;
    if (!analysisData) {
        let t6;
        if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white flex justify-center items-center h-64 animate-pulse",
                children: "Carregando análise..."
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                lineNumber: 391,
                columnNumber: 12
            }, this);
            $[11] = t6;
        } else {
            t6 = $[11];
        }
        return t6;
    }
    let t6;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-4xl font-bold mb-8 text-center text-fin-gold tracking-wide drop-shadow-md",
            children: "📊 Meu Orçamento Mensal"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 400,
            columnNumber: 10
        }, this);
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== currentDate) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MonthSelector, {
            currentDate: currentDate,
            onDateChange: setCurrentDate
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 407,
            columnNumber: 10
        }, this);
        $[13] = currentDate;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== overBudgetGroups) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertBanner, {
            overBudgetGroups: overBudgetGroups
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 415,
            columnNumber: 10
        }, this);
        $[15] = overBudgetGroups;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== currentDate) {
        t9 = currentDate.toLocaleString("pt-BR", {
            month: "long"
        });
        $[17] = currentDate;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-gray-300 text-sm mb-1 font-medium",
            children: [
                "Renda em ",
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 433,
            columnNumber: 11
        }, this);
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== analysisData.total_income) {
        t11 = formatCurrency(analysisData.total_income);
        $[21] = analysisData.total_income;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-4xl font-extrabold text-fin-gold",
            children: t11
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 449,
            columnNumber: 11
        }, this);
        $[23] = t11;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== t10 || $[26] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 457,
            columnNumber: 11
        }, this);
        $[25] = t10;
        $[26] = t12;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    let t14;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-gray-300 text-sm mb-1 font-medium",
            children: "Planejamento Total"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 466,
            columnNumber: 11
        }, this);
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    const t15 = `text-3xl font-bold ${totalPercentage === 100 ? "text-green-400" : "text-fin-red"}`;
    let t16;
    if ($[29] !== t15 || $[30] !== totalPercentage) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t15,
            children: [
                totalPercentage,
                "%"
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 474,
            columnNumber: 11
        }, this);
        $[29] = t15;
        $[30] = totalPercentage;
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] !== totalPercentage) {
        t17 = totalPercentage !== 100 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-fin-red block mt-1",
            children: "Ajuste para 100%"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 483,
            columnNumber: 38
        }, this);
        $[32] = totalPercentage;
        $[33] = t17;
    } else {
        t17 = $[33];
    }
    let t18;
    if ($[34] !== t16 || $[35] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-right",
            children: [
                t14,
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 491,
            columnNumber: 11
        }, this);
        $[34] = t16;
        $[35] = t17;
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    let t19;
    if ($[37] !== t13 || $[38] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-fin-card/80 p-6 rounded-2xl shadow-xl mb-10 flex justify-between items-center border border-white/10 backdrop-blur-md",
            children: [
                t13,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 500,
            columnNumber: 11
        }, this);
        $[37] = t13;
        $[38] = t18;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    let t20;
    if ($[40] !== analysisData.analysis || $[41] !== handlePercentageChange) {
        let t21;
        if ($[43] !== handlePercentageChange) {
            t21 = ({
                "BudgetPage[analysisData.analysis.map()]": (group_1)=>{
                    let spendPercentage = 0;
                    if (group_1.planned_amount > 0) {
                        spendPercentage = group_1.actual_spent / group_1.planned_amount * 100;
                    } else {
                        if (group_1.actual_spent > 0) {
                            spendPercentage = 100;
                        }
                    }
                    const visualPercentage = Math.min(spendPercentage, 100);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-6 rounded-2xl border transition-all duration-500 hover:scale-[1.02] shadow-lg ${group_1.is_over_budget ? "bg-gradient-to-br from-red-900/70 to-red-800/50 border-fin-red/40 shadow-red-900/30" : "bg-gradient-to-br from-fin-dark/70 to-fin-card/40 border-white/10 hover:border-fin-gold/40"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-white",
                                                children: group_1.name
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                                                lineNumber: 522,
                                                columnNumber: 409
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-400",
                                                        children: "Meta:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                                                        lineNumber: 522,
                                                        columnNumber: 519
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "0",
                                                        max: "100",
                                                        value: group_1.target_percentage,
                                                        onChange: {
                                                            "BudgetPage[analysisData.analysis.map() > <input>.onChange]": (e)=>handlePercentageChange(group_1.group_id, e.target.value)
                                                        }["BudgetPage[analysisData.analysis.map() > <input>.onChange]"],
                                                        className: "w-16 bg-fin-dark/50 text-center border border-fin-gold/40 rounded-md text-fin-highlight font-bold focus:outline-none focus:border-fin-gold shadow-inner"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                                                        lineNumber: 522,
                                                        columnNumber: 571
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-fin-highlight",
                                                        children: "%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                                                        lineNumber: 524,
                                                        columnNumber: 250
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                                                lineNumber: 522,
                                                columnNumber: 473
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                                        lineNumber: 522,
                                        columnNumber: 404
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400 text-xs block uppercase tracking-wider",
                                                children: "Realizado"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                                                lineNumber: 524,
                                                columnNumber: 335
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-2xl font-bold ${group_1.is_over_budget ? "text-fin-red" : "text-green-300"}`,
                                                children: formatCurrency(group_1.actual_spent)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                                                lineNumber: 524,
                                                columnNumber: 422
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                                        lineNumber: 524,
                                        columnNumber: 307
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                                lineNumber: 522,
                                columnNumber: 349
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-xs mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400",
                                                children: [
                                                    "Planejado: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-fin-gold",
                                                        children: formatCurrency(group_1.planned_amount)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                                                        lineNumber: 524,
                                                        columnNumber: 696
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                                                lineNumber: 524,
                                                columnNumber: 653
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `font-semibold ${group_1.is_over_budget ? "text-fin-red" : "text-green-400"}`,
                                                children: [
                                                    spendPercentage.toFixed(0),
                                                    "% gasto"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                                                lineNumber: 524,
                                                columnNumber: 786
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                                        lineNumber: 524,
                                        columnNumber: 602
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full bg-black/30 rounded-full h-4 overflow-hidden border border-white/10 shadow-inner",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `h-full rounded-full shadow-lg transition-all duration-700 ease-out ${group_1.is_over_budget ? "bg-gradient-to-r from-red-500 via-red-600 to-fin-red" : "bg-gradient-to-r from-green-500 via-green-400 to-green-300"}`,
                                            style: {
                                                width: `${visualPercentage}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                                            lineNumber: 524,
                                            columnNumber: 1035
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                                        lineNumber: 524,
                                        columnNumber: 930
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                                lineNumber: 524,
                                columnNumber: 580
                            }, this)
                        ]
                    }, group_1.group_id, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
                        lineNumber: 522,
                        columnNumber: 18
                    }, this);
                }
            })["BudgetPage[analysisData.analysis.map()]"];
            $[43] = handlePercentageChange;
            $[44] = t21;
        } else {
            t21 = $[44];
        }
        t20 = analysisData.analysis.map(t21);
        $[40] = analysisData.analysis;
        $[41] = handlePercentageChange;
        $[42] = t20;
    } else {
        t20 = $[42];
    }
    let t21;
    if ($[45] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
            children: t20
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 543,
            columnNumber: 11
        }, this);
        $[45] = t20;
        $[46] = t21;
    } else {
        t21 = $[46];
    }
    let t22;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AITrainingCard, {}, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 551,
            columnNumber: 11
        }, this);
        $[47] = t22;
    } else {
        t22 = $[47];
    }
    let t23;
    if ($[48] !== t19 || $[49] !== t21 || $[50] !== t7 || $[51] !== t8) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white",
            children: [
                t6,
                t7,
                t8,
                t19,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/budget/page.js",
            lineNumber: 558,
            columnNumber: 11
        }, this);
        $[48] = t19;
        $[49] = t21;
        $[50] = t7;
        $[51] = t8;
        $[52] = t23;
    } else {
        t23 = $[52];
    }
    return t23;
}
_s1(BudgetPage, "CNEzNYAm3J/JGUOEgTpKl1/lqmg=");
_c3 = BudgetPage;
// Função auxiliar (precisa estar no escopo)
function _BudgetPageHandlePercentageChangeAnonymous(error_0) {
    return console.error("Erro ao atualizar:", error_0);
}
function _BudgetPageFetchAnalysisResponseDataAnalysisFilter(group_0) {
    return group_0.is_over_budget;
}
function _BudgetPageFetchAnalysisResponseDataAnalysisReduce(acc, group) {
    return acc + group.target_percentage;
}
const formatCurrency = (value)=>{
    if (value === null || value === undefined) value = 0;
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
};
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "AlertBanner");
__turbopack_context__.k.register(_c1, "MonthSelector");
__turbopack_context__.k.register(_c2, "AITrainingCard");
__turbopack_context__.k.register(_c3, "BudgetPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=80b94_ProjetosdeProgramacao_projeto-financeiro_frontend_app_budget_page_5b3479db.js.map