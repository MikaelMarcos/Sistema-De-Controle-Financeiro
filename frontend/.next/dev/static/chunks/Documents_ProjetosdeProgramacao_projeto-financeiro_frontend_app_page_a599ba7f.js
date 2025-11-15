(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/AuthGuard'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
const API_URL = 'https://api-financeiro-vbsl.onrender.com';
const formatCurrency = (v)=>(v ?? 0).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
// --- Sistema de Cores para Progresso ---
const getProgressColor = (percentage)=>{
    const p = Math.max(0, Math.min(100, percentage));
    if (p < 10) return 'from-red-800 to-red-600';
    else if (p < 20) return 'from-red-600 to-orange-700';
    else if (p < 30) return 'from-orange-700 to-orange-500';
    else if (p < 40) return 'from-orange-500 to-amber-500';
    else if (p < 50) return 'from-amber-500 to-yellow-500';
    else if (p < 60) return 'from-yellow-500 to-yellow-400';
    else if (p < 70) return 'from-yellow-400 to-lime-400';
    else if (p < 80) return 'from-lime-400 to-green-500';
    else if (p < 90) return 'from-green-500 to-emerald-500';
    else if (p < 100) return 'from-emerald-500 to-emerald-400';
    else return 'from-green-400 to-emerald-300';
};
const getTextColor = (percentage)=>{
    const p = Math.max(0, Math.min(100, percentage));
    if (p < 30) return 'text-red-400';
    if (p < 50) return 'text-orange-400';
    if (p < 70) return 'text-yellow-400';
    if (p < 90) return 'text-lime-400';
    return 'text-emerald-400';
};
// --- Seletor de Mês ---
function MonthSelector(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "1a92dd7c7640e70af727d3afa11185120f00d061679eb15bbf96f527b3961f1d") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1a92dd7c7640e70af727d3afa11185120f00d061679eb15bbf96f527b3961f1d";
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
        t3 = currentDate.toLocaleString("pt-BR", {
            month: "long"
        });
        $[7] = currentDate;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== currentDate) {
        t4 = currentDate.getFullYear();
        $[9] = currentDate;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    const t5 = `${t3} ${t4}`;
    let t6;
    if ($[11] !== t5) {
        let t7;
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /^\w/;
            $[13] = t7;
        } else {
            t7 = $[13];
        }
        t6 = t5.replace(t7, _MonthSelectorAnonymous);
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const formattedDate = t6;
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 2,
            stroke: "currentColor",
            className: "w-5 h-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15.75 19.5L8.25 12l7.5-7.5"
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 112,
                columnNumber: 140
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== handlePreviousMonth) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handlePreviousMonth,
            className: "p-3 text-fin-gold hover:bg-fin-gold/10 rounded-xl transition-all duration-300 hover:scale-105 border border-fin-gold/20",
            children: t7
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[15] = handlePreviousMonth;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== formattedDate) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-bold text-white tracking-wide",
            children: formattedDate
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        $[17] = formattedDate;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-400 mt-1",
            children: "Controle Financeiro Mensal"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[20] = t9;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 2,
            stroke: "currentColor",
            className: "w-5 h-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M8.25 4.5l7.5 7.5-7.5 7.5"
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 150,
                columnNumber: 141
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== handleNextMonth) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleNextMonth,
            className: "p-3 text-fin-gold hover:bg-fin-gold/10 rounded-xl transition-all duration-300 hover:scale-105 border border-fin-gold/20",
            children: t12
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[23] = handleNextMonth;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] !== t11 || $[26] !== t13 || $[27] !== t8) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center mb-8 p-4 bg-gradient-to-r from-fin-dark/80 to-fin-card/80 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl",
            children: [
                t8,
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[25] = t11;
        $[26] = t13;
        $[27] = t8;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    return t14;
}
_c = MonthSelector;
// --- Card de Resumo ---
function _MonthSelectorAnonymous(c) {
    return c.toUpperCase();
}
function SummaryCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "1a92dd7c7640e70af727d3afa11185120f00d061679eb15bbf96f527b3961f1d") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1a92dd7c7640e70af727d3afa11185120f00d061679eb15bbf96f527b3961f1d";
    }
    const { title, amount, type } = t0;
    let t1;
    if ($[1] !== amount) {
        t1 = formatCurrency(amount);
        $[1] = amount;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const formattedAmount = t1;
    let t2;
    if ($[3] !== amount || $[4] !== type) {
        t2 = ({
            "SummaryCard[getCardStyles]": ()=>{
                switch(type){
                    case "income":
                        {
                            return "p-6 rounded-2xl shadow-lg backdrop-blur-sm border transition-all duration-300 border-opacity-20 bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-green-500";
                        }
                    case "expense":
                        {
                            return "p-6 rounded-2xl shadow-lg backdrop-blur-sm border transition-all duration-300 border-opacity-20 bg-gradient-to-br from-red-500/10 to-pink-600/10 border-red-500";
                        }
                    case "balance":
                        {
                            return amount >= 0 ? "p-6 rounded-2xl shadow-lg backdrop-blur-sm border transition-all duration-300 border-opacity-20 bg-gradient-to-br from-blue-500/10 to-cyan-600/10 border-blue-500" : "p-6 rounded-2xl shadow-lg backdrop-blur-sm border transition-all duration-300 border-opacity-20 bg-gradient-to-br from-red-500/10 to-orange-600/10 border-red-500";
                        }
                    case "credit":
                        {
                            return "p-6 rounded-2xl shadow-lg backdrop-blur-sm border transition-all duration-300 border-opacity-20 bg-gradient-to-br from-purple-500/10 to-indigo-600/10 border-purple-500";
                        }
                    default:
                        {
                            return "p-6 rounded-2xl shadow-lg backdrop-blur-sm border transition-all duration-300 border-opacity-20 bg-fin-card/80 border-white";
                        }
                }
            }
        })["SummaryCard[getCardStyles]"];
        $[3] = amount;
        $[4] = type;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const getCardStyles = t2;
    let t3;
    if ($[6] !== amount || $[7] !== type) {
        t3 = ({
            "SummaryCard[getTextColor]": ()=>{
                switch(type){
                    case "income":
                        {
                            return "text-green-400";
                        }
                    case "expense":
                        {
                            return "text-red-400";
                        }
                    case "balance":
                        {
                            return amount >= 0 ? "text-cyan-400" : "text-orange-400";
                        }
                    case "credit":
                        {
                            return "text-purple-400";
                        }
                    default:
                        {
                            return "text-white";
                        }
                }
            }
        })["SummaryCard[getTextColor]"];
        $[6] = amount;
        $[7] = type;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    const getTextColor = t3;
    let t4;
    if ($[9] !== amount || $[10] !== type) {
        t4 = ({
            "SummaryCard[getIcon]": ()=>{
                switch(type){
                    case "income":
                        {
                            return "\uD83D\uDCB0";
                        }
                    case "expense":
                        {
                            return "\uD83D\uDCB8";
                        }
                    case "balance":
                        {
                            return amount >= 0 ? "\uD83D\uDCC8" : "\uD83D\uDCC9";
                        }
                    case "credit":
                        {
                            return "\uD83D\uDCB3";
                        }
                    default:
                        {
                            return "\uD83D\uDCCA";
                        }
                }
            }
        })["SummaryCard[getIcon]"];
        $[9] = amount;
        $[10] = type;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    const getIcon = t4;
    const t5 = getCardStyles();
    let t6;
    if ($[12] !== title) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-sm font-semibold text-gray-300 uppercase tracking-wider",
            children: title
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 310,
            columnNumber: 10
        }, this);
        $[12] = title;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    const t7 = getIcon();
    let t8;
    if ($[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-lg",
            children: t7
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 319,
            columnNumber: 10
        }, this);
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== t6 || $[17] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-3",
            children: [
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 327,
            columnNumber: 10
        }, this);
        $[16] = t6;
        $[17] = t8;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    const t10 = `text-2xl font-bold ${getTextColor()}`;
    let t11;
    if ($[19] !== formattedAmount || $[20] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t10,
            children: formattedAmount
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 337,
            columnNumber: 11
        }, this);
        $[19] = formattedAmount;
        $[20] = t10;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== amount || $[23] !== type) {
        t12 = type === "balance" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `mt-2 text-xs font-medium ${amount >= 0 ? "text-cyan-400" : "text-orange-400"}`,
            children: amount >= 0 ? "Positivo" : "Negativo"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 346,
            columnNumber: 33
        }, this);
        $[22] = amount;
        $[23] = type;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== t11 || $[26] !== t12 || $[27] !== t5 || $[28] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t9,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 355,
            columnNumber: 11
        }, this);
        $[25] = t11;
        $[26] = t12;
        $[27] = t5;
        $[28] = t9;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    return t13;
}
_c1 = SummaryCard;
// --- Lista de Despesas ---
function ExpenseList(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "1a92dd7c7640e70af727d3afa11185120f00d061679eb15bbf96f527b3961f1d") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1a92dd7c7640e70af727d3afa11185120f00d061679eb15bbf96f527b3961f1d";
    }
    const { expenses, onExpenseDeleted } = t0;
    let t1;
    if ($[1] !== onExpenseDeleted) {
        t1 = ({
            "ExpenseList[handleDelete]": (id)=>{
                if (confirm("Tem certeza que deseja excluir esta despesa?")) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`${API_URL}/expenses/${id}`).then({
                        "ExpenseList[handleDelete > (anonymous)()]": ()=>onExpenseDeleted()
                    }["ExpenseList[handleDelete > (anonymous)()]"]);
                }
            }
        })["ExpenseList[handleDelete]"];
        $[1] = onExpenseDeleted;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleDelete = t1;
    const formatDate = _ExpenseListFormatDate;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-bold text-white",
            children: [
                "Últimas Movimentações ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs bg-fin-terra/20 text-fin-terra px-2 py-1 rounded-full ml-2",
                    children: "Caixa"
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                    lineNumber: 400,
                    columnNumber: 77
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 400,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const t3 = expenses.length === 1 ? "item" : "itens";
    let t4;
    if ($[4] !== expenses.length || $[5] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-6",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-gray-400 bg-black/30 px-3 py-1 rounded-full",
                    children: [
                        expenses.length,
                        " ",
                        t3
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                    lineNumber: 408,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 408,
            columnNumber: 10
        }, this);
        $[4] = expenses.length;
        $[5] = t3;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== expenses || $[8] !== handleDelete) {
        t5 = expenses.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-4xl mb-2",
                    children: "📝"
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                    lineNumber: 417,
                    columnNumber: 68
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 font-light",
                    children: "Nenhuma despesa em caixa neste mês."
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                    lineNumber: 417,
                    columnNumber: 107
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 417,
            columnNumber: 34
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3 max-h-96 overflow-y-auto",
            children: expenses.map({
                "ExpenseList[expenses.map()]": (expense)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center bg-black/20 p-4 rounded-xl border border-white/5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-fin-gold/20 rounded-lg flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-fin-gold",
                                            children: "💸"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                            lineNumber: 418,
                                            columnNumber: 299
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                        lineNumber: 418,
                                        columnNumber: 213
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-400",
                                                children: formatDate(expense.date)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                                lineNumber: 418,
                                                columnNumber: 351
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-white block",
                                                children: expense.description
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                                lineNumber: 418,
                                                columnNumber: 424
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-fin-gold/80 flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-1 h-1 bg-fin-gold rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                                        lineNumber: 418,
                                                        columnNumber: 566
                                                    }, this),
                                                    expense.budget_group?.name || "Sem categoria"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                                lineNumber: 418,
                                                columnNumber: 499
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                        lineNumber: 418,
                                        columnNumber: 346
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                lineNumber: 418,
                                columnNumber: 168
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-red-400 text-lg",
                                        children: [
                                            "- ",
                                            formatCurrency(expense.amount)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                        lineNumber: 418,
                                        columnNumber: 726
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "ExpenseList[expenses.map() > <button>.onClick]": ()=>handleDelete(expense.id)
                                        }["ExpenseList[expenses.map() > <button>.onClick]"],
                                        className: "p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-all duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            strokeWidth: 1.5,
                                            stroke: "currentColor",
                                            className: "w-4 h-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                                lineNumber: 420,
                                                columnNumber: 286
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                            lineNumber: 420,
                                            columnNumber: 154
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                        lineNumber: 418,
                                        columnNumber: 816
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                lineNumber: 418,
                                columnNumber: 685
                            }, this)
                        ]
                    }, expense.id, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 418,
                        columnNumber: 51
                    }, this)
            }["ExpenseList[expenses.map()]"])
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 417,
            columnNumber: 195
        }, this);
        $[7] = expenses;
        $[8] = handleDelete;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t4 || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-br from-fin-card/60 to-fin-dark/60 p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 430,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    return t6;
}
_c2 = ExpenseList;
// --- Card de Meta ---
function _ExpenseListFormatDate(d) {
    return new Date(d).toLocaleDateString("pt-BR", {
        timeZone: "UTC"
    });
}
function DashboardGoals(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "1a92dd7c7640e70af727d3afa11185120f00d061679eb15bbf96f527b3961f1d") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1a92dd7c7640e70af727d3afa11185120f00d061679eb15bbf96f527b3961f1d";
    }
    const { goals } = t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    if ($[1] !== goals) {
        t5 = Symbol.for("react.early_return_sentinel");
        bb0: {
            const completedGoals = goals.filter(_DashboardGoalsGoalsFilter);
            const activeGoals = goals.filter(_DashboardGoalsGoalsFilter2).slice(0, 3);
            if (goals.length === 0) {
                let t6;
                if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
                    t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-fin-card/60 to-fin-dark/60 p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm h-full flex flex-col items-center justify-center text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-4xl mb-3",
                                children: "🎯"
                            }, void 0, false, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                lineNumber: 470,
                                columnNumber: 210
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-white mb-2",
                                children: "Sem metas ativas"
                            }, void 0, false, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                lineNumber: 470,
                                columnNumber: 249
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-sm",
                                children: "Crie sua primeira meta"
                            }, void 0, false, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                lineNumber: 470,
                                columnNumber: 324
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/metas",
                                className: "inline-block mt-4 bg-gradient-to-r from-fin-highlight to-fin-gold text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg",
                                children: "Criar Meta"
                            }, void 0, false, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                lineNumber: 470,
                                columnNumber: 387
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 470,
                        columnNumber: 16
                    }, this);
                    $[7] = t6;
                } else {
                    t6 = $[7];
                }
                t5 = t6;
                break bb0;
            }
            const DashboardGoalCard = _DashboardGoalsDashboardGoalCard;
            t1 = "bg-gradient-to-br from-fin-card/60 to-fin-dark/60 p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm h-full";
            let t6;
            if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
                t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold text-white flex items-center gap-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "bg-gradient-to-r from-fin-gold to-fin-highlight bg-clip-text text-transparent",
                        children: "Progresso das Metas"
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 482,
                        columnNumber: 83
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                    lineNumber: 482,
                    columnNumber: 14
                }, this);
                $[8] = t6;
            } else {
                t6 = $[8];
            }
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                    t6,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-gray-400 bg-black/30 px-3 py-1 rounded-full border border-white/10",
                        children: [
                            completedGoals.length,
                            "/",
                            goals.length,
                            " concluídas"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 487,
                        columnNumber: 72
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 487,
                columnNumber: 12
            }, this);
            const t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2",
                children: [
                    "Metas Ativas (",
                    activeGoals.length,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 488,
                columnNumber: 18
            }, this);
            let t8;
            if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
                t8 = ({
                    "DashboardGoals[activeGoals.map()]": (goal_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardGoalCard, {
                            goal: goal_2
                        }, goal_2.id, false, {
                            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                            lineNumber: 492,
                            columnNumber: 58
                        }, this)
                })["DashboardGoals[activeGoals.map()]"];
                $[9] = t8;
            } else {
                t8 = $[9];
            }
            const t9 = activeGoals.map(t8);
            if ($[10] !== t7 || $[11] !== t9) {
                t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 mb-6",
                    children: [
                        t7,
                        t9
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                    lineNumber: 500,
                    columnNumber: 14
                }, this);
                $[10] = t7;
                $[11] = t9;
                $[12] = t3;
            } else {
                t3 = $[12];
            }
            t4 = completedGoals.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2",
                        children: [
                            "Concluídas (",
                            completedGoals.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 507,
                        columnNumber: 68
                    }, this),
                    completedGoals.slice(0, 2).map(_DashboardGoalsAnonymous)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 507,
                columnNumber: 41
            }, this);
        }
        $[1] = goals;
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
    } else {
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
    }
    if (t5 !== Symbol.for("react.early_return_sentinel")) {
        return t5;
    }
    let t6;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "/metas",
            className: "block w-full mt-4 text-center bg-fin-dark/50 hover:bg-fin-dark/70 text-fin-gold font-medium py-2 px-4 rounded-lg border border-fin-gold/20 transition-all duration-300 hover:border-fin-gold/40",
            children: "Ver Todas as Metas →"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 527,
            columnNumber: 10
        }, this);
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== t1 || $[15] !== t2 || $[16] !== t3 || $[17] !== t4) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: [
                t2,
                t3,
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 534,
            columnNumber: 10
        }, this);
        $[14] = t1;
        $[15] = t2;
        $[16] = t3;
        $[17] = t4;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    return t7;
}
_c3 = DashboardGoals;
// --- Gráfico de Pizza ---
function _DashboardGoalsAnonymous(goal_3) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-br from-green-500/10 to-emerald-600/10 p-4 rounded-xl border border-green-500/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium text-white text-sm",
                        children: goal_3.name
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 548,
                        columnNumber: 190
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-green-400 font-bold",
                        children: "🎉 100%"
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 548,
                        columnNumber: 259
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 548,
                columnNumber: 139
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-gray-400 mt-1",
                children: [
                    "Valor alcançado: ",
                    formatCurrency(goal_3.target_amount)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 548,
                columnNumber: 322
            }, this)
        ]
    }, goal_3.id, true, {
        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
        lineNumber: 548,
        columnNumber: 10
    }, this);
}
function _DashboardGoalsDashboardGoalCard(t0) {
    const { goal: goal_1 } = t0;
    const progressPercentage = goal_1.target_amount > 0 ? goal_1.current_amount / goal_1.target_amount * 100 : 0;
    const percentage = Math.round(progressPercentage);
    const progressColor = getProgressColor(percentage);
    const textColor = getTextColor(percentage);
    const isCompleted = percentage >= 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-br from-fin-dark/70 to-fin-card/50 p-5 rounded-2xl border border-white/10 hover:border-fin-gold/30 transition-all duration-300 group cursor-pointer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-lg text-white truncate flex-1 pr-2",
                        children: goal_1.name
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 559,
                        columnNumber: 245
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-xl font-bold ${textColor} whitespace-nowrap`,
                        children: [
                            percentage,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 559,
                        columnNumber: 329
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 559,
                columnNumber: 190
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-black/40 backdrop-blur-sm rounded-full h-2.5 p-0.5 border border-white/10 mb-3 shadow-inner relative overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${progressColor} relative overflow-hidden`,
                    style: {
                        width: `${Math.min(percentage, 100)}%`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse-slow"
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 561,
                        columnNumber: 10
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                    lineNumber: 559,
                    columnNumber: 568
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 559,
                columnNumber: 424
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-400",
                        children: isCompleted ? "\uD83C\uDF89 Conclu\xEDdo!" : "Em andamento"
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 561,
                        columnNumber: 198
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-fin-gold font-medium",
                        children: [
                            formatCurrency(goal_1.current_amount),
                            " / ",
                            formatCurrency(goal_1.target_amount)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 561,
                        columnNumber: 298
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 561,
                columnNumber: 139
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
        lineNumber: 559,
        columnNumber: 10
    }, this);
}
function _DashboardGoalsGoalsFilter2(goal_0) {
    return goal_0.current_amount / goal_0.target_amount * 100 < 100;
}
function _DashboardGoalsGoalsFilter(goal) {
    return goal.current_amount / goal.target_amount * 100 >= 100;
}
function ExpensePieChart(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(87);
    if ($[0] !== "1a92dd7c7640e70af727d3afa11185120f00d061679eb15bbf96f527b3961f1d") {
        for(let $i = 0; $i < 87; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1a92dd7c7640e70af727d3afa11185120f00d061679eb15bbf96f527b3961f1d";
    }
    const { expenses } = t0;
    let categorySpending;
    let labels;
    let soberColors;
    let t1;
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    let total;
    if ($[1] !== expenses) {
        t14 = Symbol.for("react.early_return_sentinel");
        bb0: {
            categorySpending = expenses.reduce(_ExpensePieChartExpensesReduce, {});
            labels = Object.keys(categorySpending);
            const dataValues = Object.values(categorySpending);
            total = dataValues.reduce(_ExpensePieChartDataValuesReduce, 0);
            soberColors = [
                "#3B82F6",
                "#10B981",
                "#F59E0B",
                "#EF4444",
                "#8B5CF6",
                "#06B6D4",
                "#84CC16",
                "#F97316",
                "#6366F1",
                "#EC4899",
                "#14B8A6",
                "#F43F5E",
                "#0EA5E9",
                "#22C55E",
                "#EAB308"
            ];
            const borderColors = [
                "#024059"
            ];
            const hoverColors = soberColors.map(_ExpensePieChartSoberColorsMap);
            const chartData = {
                labels,
                datasets: [
                    {
                        data: dataValues,
                        backgroundColor: soberColors.slice(0, labels.length),
                        borderColor: borderColors,
                        borderWidth: 2,
                        hoverBackgroundColor: hoverColors.slice(0, labels.length),
                        hoverBorderColor: "#FFFFFF",
                        hoverBorderWidth: 3,
                        spacing: 0,
                        hoverOffset: 15
                    }
                ]
            };
            let t15;
            if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
                t15 = {
                    padding: 15
                };
                $[20] = t15;
            } else {
                t15 = $[20];
            }
            let t16;
            if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
                t16 = {
                    position: "right",
                    labels: {
                        color: "#E2E8F0",
                        font: {
                            size: 11,
                            weight: "500",
                            family: "'Inter', sans-serif"
                        },
                        boxWidth: 14,
                        boxHeight: 14,
                        padding: 12,
                        usePointStyle: true,
                        pointStyle: "circle"
                    },
                    onHover: _temp,
                    onLeave: _temp2
                };
                $[21] = t16;
            } else {
                t16 = $[21];
            }
            let t17;
            let t18;
            if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
                t17 = {
                    size: 12,
                    weight: "600"
                };
                t18 = {
                    size: 11,
                    weight: "500"
                };
                $[22] = t17;
                $[23] = t18;
            } else {
                t17 = $[22];
                t18 = $[23];
            }
            let t19;
            if ($[24] !== total) {
                t19 = {
                    legend: t16,
                    tooltip: {
                        backgroundColor: "rgba(15, 23, 42, 0.95)",
                        titleColor: "#F1F5F9",
                        bodyColor: "#CBD5E1",
                        titleFont: t17,
                        bodyFont: t18,
                        borderColor: "#334155",
                        borderWidth: 1,
                        cornerRadius: 8,
                        padding: 12,
                        displayColors: true,
                        usePointStyle: true,
                        boxPadding: 4,
                        callbacks: {
                            label: function(context) {
                                const label = context.label || "";
                                const value = context.parsed;
                                const percentage = total > 0 ? (value / total * 100).toFixed(1) : 0;
                                return `${label}: ${formatCurrency(value)} (${percentage}%)`;
                            },
                            title: _temp3
                        }
                    }
                };
                $[24] = total;
                $[25] = t19;
            } else {
                t19 = $[25];
            }
            let t20;
            let t21;
            let t22;
            if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
                t20 = {
                    intersect: false,
                    mode: "index"
                };
                t21 = {
                    animateScale: true,
                    animateRotate: true,
                    duration: 800,
                    easing: "easeOutCubic"
                };
                t22 = {
                    arc: {
                        borderJoinStyle: "bevel"
                    }
                };
                $[26] = t20;
                $[27] = t21;
                $[28] = t22;
            } else {
                t20 = $[26];
                t21 = $[27];
                t22 = $[28];
            }
            let t23;
            if ($[29] !== t19) {
                t23 = {
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: t15,
                    plugins: t19,
                    interaction: t20,
                    animation: t21,
                    elements: t22
                };
                $[29] = t19;
                $[30] = t23;
            } else {
                t23 = $[30];
            }
            const chartOptions = t23;
            const topCategory = Object.entries(categorySpending).reduce(_ExpensePieChartAnonymous, {
                category: "",
                amount: 0
            });
            if (expenses.length === 0) {
                let t24;
                if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
                    t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-fin-card/60 to-fin-dark/60 p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm h-full flex flex-col items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-6xl mb-4",
                                    children: "📊"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                    lineNumber: 756,
                                    columnNumber: 228
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-white mb-2",
                                    children: "Gastos por Categoria"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                    lineNumber: 756,
                                    columnNumber: 267
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 text-lg",
                                    children: "Sem gastos para exibir"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                    lineNumber: 756,
                                    columnNumber: 342
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500 mt-1",
                                    children: "Registre despesas para ver a distribuição"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                    lineNumber: 756,
                                    columnNumber: 405
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                            lineNumber: 756,
                            columnNumber: 199
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 756,
                        columnNumber: 17
                    }, this);
                    $[31] = t24;
                } else {
                    t24 = $[31];
                }
                t14 = t24;
                break bb0;
            }
            t12 = "bg-gradient-to-br from-fin-card/60 to-fin-dark/60 p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm";
            let t24;
            if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
                t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold text-white flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-gradient-to-r from-fin-gold to-fin-highlight p-2 rounded-xl",
                            children: "📊"
                        }, void 0, false, {
                            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                            lineNumber: 767,
                            columnNumber: 84
                        }, this),
                        "Distribuição de Gastos"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                    lineNumber: 767,
                    columnNumber: 15
                }, this);
                $[32] = t24;
            } else {
                t24 = $[32];
            }
            const t25 = labels.length === 1 ? "categoria" : "categorias";
            if ($[33] !== labels.length || $[34] !== t25) {
                t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-6",
                    children: [
                        t24,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-gray-400 bg-black/30 px-3 py-2 rounded-full border border-white/10",
                            children: [
                                labels.length,
                                " ",
                                t25
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                            lineNumber: 774,
                            columnNumber: 76
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                    lineNumber: 774,
                    columnNumber: 15
                }, this);
                $[33] = labels.length;
                $[34] = t25;
                $[35] = t13;
            } else {
                t13 = $[35];
            }
            t10 = "grid grid-cols-1 lg:grid-cols-3 gap-6 items-center";
            let t26;
            if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
                t26 = {
                    height: "300px"
                };
                $[36] = t26;
            } else {
                t26 = $[36];
            }
            let t27;
            if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
                t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-gray-400 font-medium",
                    children: "Total Gasto"
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                    lineNumber: 793,
                    columnNumber: 15
                }, this);
                $[37] = t27;
            } else {
                t27 = $[37];
            }
            let t28;
            if ($[38] !== labels.length) {
                t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-fin-gold mt-1",
                    children: [
                        labels.length,
                        " categorias"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                    lineNumber: 800,
                    columnNumber: 15
                }, this);
                $[38] = labels.length;
                $[39] = t28;
            } else {
                t28 = $[39];
            }
            const t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl font-bold text-white mb-1",
                        children: formatCurrency(total)
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 806,
                        columnNumber: 48
                    }, this),
                    t27,
                    t28
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 806,
                columnNumber: 19
            }, this);
            let t30;
            if ($[40] !== t29) {
                t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                    children: t29
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                    lineNumber: 809,
                    columnNumber: 15
                }, this);
                $[40] = t29;
                $[41] = t30;
            } else {
                t30 = $[41];
            }
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-2 relative",
                style: t26,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                        data: chartData,
                        options: chartOptions
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 815,
                        columnNumber: 65
                    }, this),
                    t30
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 815,
                columnNumber: 13
            }, this);
            t8 = "lg:col-span-1 space-y-4";
            let t31;
            if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
                t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-sm font-semibold text-gray-300 mb-3",
                    children: "📈 Maior Gasto"
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                    lineNumber: 819,
                    columnNumber: 15
                }, this);
                $[42] = t31;
            } else {
                t31 = $[42];
            }
            const t32 = total > 0 ? (topCategory.amount / total * 100).toFixed(1) : 0;
            let t33;
            if ($[43] !== t32) {
                t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-gray-400 mt-1",
                    children: [
                        t32,
                        "% do total"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                    lineNumber: 827,
                    columnNumber: 15
                }, this);
                $[43] = t32;
                $[44] = t33;
            } else {
                t33 = $[44];
            }
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-br from-fin-dark/80 to-fin-card/60 p-4 rounded-xl border border-white/10",
                children: [
                    t31,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-lg font-bold text-white truncate",
                        title: topCategory.category,
                        children: topCategory.category
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 833,
                        columnNumber: 122
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-fin-gold font-semibold text-sm",
                        children: formatCurrency(topCategory.amount)
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 833,
                        columnNumber: 234
                    }, this),
                    t33
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 833,
                columnNumber: 12
            }, this);
            t6 = "bg-gradient-to-br from-fin-dark/80 to-fin-card/60 p-4 rounded-xl border border-white/10";
            if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
                t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-sm font-semibold text-gray-300 mb-3",
                    children: "📋 Resumo"
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                    lineNumber: 836,
                    columnNumber: 14
                }, this);
                $[45] = t7;
            } else {
                t7 = $[45];
            }
            t5 = "space-y-2 text-sm";
            t3 = "flex justify-between";
            if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
                t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-400",
                    children: "Total:"
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                    lineNumber: 844,
                    columnNumber: 14
                }, this);
                $[46] = t4;
            } else {
                t4 = $[46];
            }
            t1 = "text-white font-medium";
            t2 = formatCurrency(total);
        }
        $[1] = expenses;
        $[2] = categorySpending;
        $[3] = labels;
        $[4] = soberColors;
        $[5] = t1;
        $[6] = t10;
        $[7] = t11;
        $[8] = t12;
        $[9] = t13;
        $[10] = t14;
        $[11] = t2;
        $[12] = t3;
        $[13] = t4;
        $[14] = t5;
        $[15] = t6;
        $[16] = t7;
        $[17] = t8;
        $[18] = t9;
        $[19] = total;
    } else {
        categorySpending = $[2];
        labels = $[3];
        soberColors = $[4];
        t1 = $[5];
        t10 = $[6];
        t11 = $[7];
        t12 = $[8];
        t13 = $[9];
        t14 = $[10];
        t2 = $[11];
        t3 = $[12];
        t4 = $[13];
        t5 = $[14];
        t6 = $[15];
        t7 = $[16];
        t8 = $[17];
        t9 = $[18];
        total = $[19];
    }
    if (t14 !== Symbol.for("react.early_return_sentinel")) {
        return t14;
    }
    let t15;
    if ($[47] !== t1 || $[48] !== t2) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 896,
            columnNumber: 11
        }, this);
        $[47] = t1;
        $[48] = t2;
        $[49] = t15;
    } else {
        t15 = $[49];
    }
    let t16;
    if ($[50] !== t15 || $[51] !== t3 || $[52] !== t4) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 905,
            columnNumber: 11
        }, this);
        $[50] = t15;
        $[51] = t3;
        $[52] = t4;
        $[53] = t16;
    } else {
        t16 = $[53];
    }
    let t17;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-400",
            children: "Categorias:"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 915,
            columnNumber: 11
        }, this);
        $[54] = t17;
    } else {
        t17 = $[54];
    }
    let t18;
    if ($[55] !== labels.length) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-fin-gold font-medium",
                    children: labels.length
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                    lineNumber: 922,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 922,
            columnNumber: 11
        }, this);
        $[55] = labels.length;
        $[56] = t18;
    } else {
        t18 = $[56];
    }
    let t19;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-400",
            children: "Transações:"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 930,
            columnNumber: 11
        }, this);
        $[57] = t19;
    } else {
        t19 = $[57];
    }
    let t20;
    if ($[58] !== expenses.length) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white font-medium",
                    children: expenses.length
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                    lineNumber: 937,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 937,
            columnNumber: 11
        }, this);
        $[58] = expenses.length;
        $[59] = t20;
    } else {
        t20 = $[59];
    }
    let t21;
    if ($[60] !== t16 || $[61] !== t18 || $[62] !== t20 || $[63] !== t5) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t16,
                t18,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 945,
            columnNumber: 11
        }, this);
        $[60] = t16;
        $[61] = t18;
        $[62] = t20;
        $[63] = t5;
        $[64] = t21;
    } else {
        t21 = $[64];
    }
    let t22;
    if ($[65] !== t21 || $[66] !== t6 || $[67] !== t7) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t7,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 956,
            columnNumber: 11
        }, this);
        $[65] = t21;
        $[66] = t6;
        $[67] = t7;
        $[68] = t22;
    } else {
        t22 = $[68];
    }
    let t23;
    if ($[69] !== t22 || $[70] !== t8 || $[71] !== t9) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: [
                t9,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 966,
            columnNumber: 11
        }, this);
        $[69] = t22;
        $[70] = t8;
        $[71] = t9;
        $[72] = t23;
    } else {
        t23 = $[72];
    }
    let t24;
    if ($[73] !== t10 || $[74] !== t11 || $[75] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: [
                t11,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 976,
            columnNumber: 11
        }, this);
        $[73] = t10;
        $[74] = t11;
        $[75] = t23;
        $[76] = t24;
    } else {
        t24 = $[76];
    }
    let t25;
    if ($[77] !== categorySpending || $[78] !== labels || $[79] !== soberColors || $[80] !== total) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:hidden mt-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-2 max-h-32 overflow-y-auto",
                children: labels.map({
                    "ExpensePieChart[labels.map()]": (label_0, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-3 h-3 rounded-full flex-shrink-0",
                                    style: {
                                        backgroundColor: soberColors[index]
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                    lineNumber: 987,
                                    columnNumber: 127
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-300 truncate",
                                    title: label_0,
                                    children: label_0
                                }, void 0, false, {
                                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                    lineNumber: 989,
                                    columnNumber: 18
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-fin-gold font-medium ml-auto",
                                    children: [
                                        total > 0 ? (categorySpending[label_0] / total * 100).toFixed(0) : 0,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                    lineNumber: 989,
                                    columnNumber: 91
                                }, this)
                            ]
                        }, label_0, true, {
                            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                            lineNumber: 987,
                            columnNumber: 64
                        }, this)
                }["ExpensePieChart[labels.map()]"])
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 986,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 986,
            columnNumber: 11
        }, this);
        $[77] = categorySpending;
        $[78] = labels;
        $[79] = soberColors;
        $[80] = total;
        $[81] = t25;
    } else {
        t25 = $[81];
    }
    let t26;
    if ($[82] !== t12 || $[83] !== t13 || $[84] !== t24 || $[85] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t12,
            children: [
                t13,
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 1001,
            columnNumber: 11
        }, this);
        $[82] = t12;
        $[83] = t13;
        $[84] = t24;
        $[85] = t25;
        $[86] = t26;
    } else {
        t26 = $[86];
    }
    return t26;
}
_c4 = ExpensePieChart;
// --- Componente Principal (CORRIGIDO) ---
function _ExpensePieChartAnonymous(max, t0) {
    const [cat, amount] = t0;
    return amount > max.amount ? {
        category: cat,
        amount
    } : max;
}
function _temp3(context_0) {
    return context_0[0].label;
}
function _temp2(event_0) {
    event_0.native.target.style.cursor = "default";
}
function _temp(event) {
    event.native.target.style.cursor = "pointer";
}
function _ExpensePieChartSoberColorsMap(color) {
    return color;
}
function _ExpensePieChartDataValuesReduce(sum, val) {
    return sum + val;
}
function _ExpensePieChartExpensesReduce(acc, expense) {
    const categoryName = expense.category?.name || "Sem Categoria";
    acc[categoryName] = (acc[categoryName] || 0) + expense.amount;
    return acc;
}
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(51);
    if ($[0] !== "1a92dd7c7640e70af727d3afa11185120f00d061679eb15bbf96f527b3961f1d") {
        for(let $i = 0; $i < 51; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1a92dd7c7640e70af727d3afa11185120f00d061679eb15bbf96f527b3961f1d";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [allExpenses, setAllExpenses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [cashExpenses, setCashExpenses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const [goals, setGoals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const [totalIncome, setTotalIncome] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [totalCashExpenses, setTotalCashExpenses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [totalCreditExpenses, setTotalCreditExpenses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [balance, setBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentDate, setCurrentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lastUpdate, setLastUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "Home[useEffect()]": ()=>{
                setCurrentDate(new Date());
                setLastUpdate(new Date());
            }
        })["Home[useEffect()]"];
        t4 = [];
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[6] !== currentDate) {
        t5 = ({
            "Home[useEffect()]": ()=>{
                if (!currentDate) {
                    return;
                }
                const fetchData = {
                    "Home[useEffect() > fetchData]": async ()=>{
                        const month = currentDate.getMonth() + 1;
                        const year = currentDate.getFullYear();
                        ;
                        try {
                            const [expenseRes, incomeRes, goalsRes] = await Promise.all([
                                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/expenses/?year=${year}&month=${month}`),
                                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/income/?year=${year}&month=${month}`),
                                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/goals/`)
                            ]);
                            const allExpensesData = expenseRes.data;
                            const allIncomes = incomeRes.data;
                            const cashOnlyExpenses = allExpensesData.filter(_HomeUseEffectFetchDataAllExpensesDataFilter);
                            const creditOnlyExpenses = allExpensesData.filter(_HomeUseEffectFetchDataAllExpensesDataFilter2);
                            const receivedIncomes = allIncomes.filter(_HomeUseEffectFetchDataAllIncomesFilter);
                            setAllExpenses(allExpensesData);
                            setCashExpenses(cashOnlyExpenses);
                            setGoals(goalsRes.data);
                            const totalInc = receivedIncomes.reduce(_HomeUseEffectFetchDataReceivedIncomesReduce, 0);
                            const totalCashExp = cashOnlyExpenses.reduce(_HomeUseEffectFetchDataCashOnlyExpensesReduce, 0);
                            const totalCreditExp = creditOnlyExpenses.reduce(_HomeUseEffectFetchDataCreditOnlyExpensesReduce, 0);
                            setTotalIncome(totalInc);
                            setTotalCashExpenses(totalCashExp);
                            setTotalCreditExpenses(totalCreditExp);
                            setBalance(totalInc - totalCashExp);
                        } catch (t6) {
                            const error = t6;
                            console.error("Erro ao carregar dados:", error);
                        }
                    }
                }["Home[useEffect() > fetchData]"];
                fetchData();
            }
        })["Home[useEffect()]"];
        $[6] = currentDate;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== currentDate || $[9] !== lastUpdate) {
        t6 = [
            currentDate,
            lastUpdate
        ];
        $[8] = currentDate;
        $[9] = lastUpdate;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    if (!currentDate) {
        let t7;
        if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-20 bg-fin-card/50 rounded-2xl mb-8"
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 1152,
                columnNumber: 12
            }, this);
            $[11] = t7;
        } else {
            t7 = $[11];
        }
        let t8;
        if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",
                children: [
                    ...Array(4)
                ].map(_HomeAnonymous)
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 1159,
                columnNumber: 12
            }, this);
            $[12] = t8;
        } else {
            t8 = $[12];
        }
        let t9;
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 h-96 bg-fin-card/50 rounded-2xl"
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 1166,
                        columnNumber: 67
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1 h-96 bg-fin-card/50 rounded-2xl"
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 1166,
                        columnNumber: 132
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 1166,
                columnNumber: 12
            }, this);
            $[13] = t9;
        } else {
            t9 = $[13];
        }
        let t10;
        if ($[14] !== t8) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gradient-to-br from-fin-dark via-fin-card to-fin-dark",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-pulse",
                        children: [
                            t7,
                            t8,
                            t9
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 1173,
                        columnNumber: 145
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                    lineNumber: 1173,
                    columnNumber: 100
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 1173,
                columnNumber: 13
            }, this);
            $[14] = t8;
            $[15] = t10;
        } else {
            t10 = $[15];
        }
        return t10;
    }
    let t7;
    if ($[16] !== currentDate) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MonthSelector, {
            currentDate: currentDate,
            onDateChange: setCurrentDate
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 1183,
            columnNumber: 10
        }, this);
        $[16] = currentDate;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    let t8;
    if ($[18] !== totalIncome) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
            title: "Receita (Caixa)",
            amount: totalIncome,
            type: "income"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 1191,
            columnNumber: 10
        }, this);
        $[18] = totalIncome;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] !== totalCashExpenses) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
            title: "Despesas (Caixa)",
            amount: totalCashExpenses,
            type: "expense"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 1199,
            columnNumber: 10
        }, this);
        $[20] = totalCashExpenses;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== balance) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
            title: "Balan\xE7o de Caixa",
            amount: balance,
            type: "balance"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 1207,
            columnNumber: 11
        }, this);
        $[22] = balance;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] !== totalCreditExpenses) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
            title: "Faturas Abertas",
            amount: totalCreditExpenses,
            type: "credit"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 1215,
            columnNumber: 11
        }, this);
        $[24] = totalCreditExpenses;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== t10 || $[27] !== t11 || $[28] !== t8 || $[29] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",
            children: [
                t8,
                t9,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 1223,
            columnNumber: 11
        }, this);
        $[26] = t10;
        $[27] = t11;
        $[28] = t8;
        $[29] = t9;
        $[30] = t12;
    } else {
        t12 = $[30];
    }
    let t13;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "Home[<ExpenseList>.onExpenseDeleted]": ()=>setLastUpdate(new Date())
        })["Home[<ExpenseList>.onExpenseDeleted]"];
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    let t14;
    if ($[32] !== cashExpenses) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExpenseList, {
            expenses: cashExpenses,
            onExpenseDeleted: t13
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 1243,
            columnNumber: 11
        }, this);
        $[32] = cashExpenses;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    let t15;
    if ($[34] !== allExpenses) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExpensePieChart, {
            expenses: allExpenses
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 1251,
            columnNumber: 11
        }, this);
        $[34] = allExpenses;
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    let t16;
    if ($[36] !== t14 || $[37] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 space-y-8",
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 1259,
            columnNumber: 11
        }, this);
        $[36] = t14;
        $[37] = t15;
        $[38] = t16;
    } else {
        t16 = $[38];
    }
    let t17;
    if ($[39] !== goals) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardGoals, {
                goals: goals
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 1268,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 1268,
            columnNumber: 11
        }, this);
        $[39] = goals;
        $[40] = t17;
    } else {
        t17 = $[40];
    }
    let t18;
    if ($[41] !== t16 || $[42] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 1276,
            columnNumber: 11
        }, this);
        $[41] = t16;
        $[42] = t17;
        $[43] = t18;
    } else {
        t18 = $[43];
    }
    let t19;
    if ($[44] !== t12 || $[45] !== t18 || $[46] !== t7) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-8",
            children: [
                t7,
                t12,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 1285,
            columnNumber: 11
        }, this);
        $[44] = t12;
        $[45] = t18;
        $[46] = t7;
        $[47] = t19;
    } else {
        t19 = $[47];
    }
    let t20;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            id: "4f29f4101fca892a",
            children: "@keyframes pulse-slow{0%,to{opacity:1}50%{opacity:.4}}.animate-pulse-slow.jsx-4f29f4101fca892a{animation:3s ease-in-out infinite pulse-slow}"
        }, void 0, false, void 0, this);
        $[48] = t20;
    } else {
        t20 = $[48];
    }
    let t21;
    if ($[49] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen",
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 1302,
            columnNumber: 11
        }, this);
        $[49] = t19;
        $[50] = t21;
    } else {
        t21 = $[50];
    }
    return t21;
}
_s(Home, "aLlzMVFDm637TBhrQu0kMshzVew=");
_c5 = Home;
function _HomeAnonymous(_, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-32 bg-fin-card/50 rounded-2xl"
    }, i_0, false, {
        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
        lineNumber: 1311,
        columnNumber: 10
    }, this);
}
function _HomeUseEffectFetchDataCreditOnlyExpensesReduce(acc_1, e_0) {
    return acc_1 + e_0.amount;
}
function _HomeUseEffectFetchDataCashOnlyExpensesReduce(acc_0, e) {
    return acc_0 + e.amount;
}
function _HomeUseEffectFetchDataReceivedIncomesReduce(acc, i) {
    return acc + i.amount;
}
function _HomeUseEffectFetchDataAllIncomesFilter(inc) {
    return inc.received;
}
function _HomeUseEffectFetchDataAllExpensesDataFilter2(exp_0) {
    return exp_0.credit_card_id && !exp_0.paid;
}
function _HomeUseEffectFetchDataAllExpensesDataFilter(exp) {
    return !exp.credit_card_id && exp.paid;
}
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "MonthSelector");
__turbopack_context__.k.register(_c1, "SummaryCard");
__turbopack_context__.k.register(_c2, "ExpenseList");
__turbopack_context__.k.register(_c3, "DashboardGoals");
__turbopack_context__.k.register(_c4, "ExpensePieChart");
__turbopack_context__.k.register(_c5, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_ProjetosdeProgramacao_projeto-financeiro_frontend_app_page_a599ba7f.js.map