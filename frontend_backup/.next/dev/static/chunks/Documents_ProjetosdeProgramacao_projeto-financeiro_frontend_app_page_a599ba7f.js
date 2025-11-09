(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
// 👇 1. IMPORTAR AS BIBLIOTECAS DE GRÁFICO
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// 👇 2. REGISTRAR OS COMPONENTES DO GRÁFICO
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
const API_URL = 'http://localhost:8000';
// --- Componente: Seletor de Mês (O mesmo de antes) ---
function MonthSelector(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "f994d7e311a775540bbaa0286b51cba1267a6e0179eaef763bdd02daf8f0e53c") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f994d7e311a775540bbaa0286b51cba1267a6e0179eaef763bdd02daf8f0e53c";
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
            className: "px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors",
            children: "< Anterior"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 80,
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
            className: "text-xl font-bold text-white",
            children: formattedDate
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 88,
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
            className: "px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors",
            children: "Pr\xF3ximo >"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 96,
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
            className: "flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-lg mb-8",
            children: [
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 104,
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
_c = MonthSelector;
// --- Componente: Card de Resumo (O mesmo de antes, mas com % de poupança) ---
function _MonthSelectorAnonymous(c) {
    return c.toUpperCase();
}
function SummaryCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "f994d7e311a775540bbaa0286b51cba1267a6e0179eaef763bdd02daf8f0e53c") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f994d7e311a775540bbaa0286b51cba1267a6e0179eaef763bdd02daf8f0e53c";
    }
    const { title, amount, colorClass, isCurrency: t1 } = t0;
    const isCurrency = t1 === undefined ? true : t1;
    let t2;
    if ($[1] !== amount || $[2] !== isCurrency) {
        t2 = isCurrency ? amount.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        }) : `${amount.toFixed(1)}%`;
        $[1] = amount;
        $[2] = isCurrency;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const formattedAmount = t2;
    let t3;
    if ($[4] !== title) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-sm font-medium text-gray-400 mb-1",
            children: title
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 149,
            columnNumber: 10
        }, this);
        $[4] = title;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const t4 = `text-3xl font-bold ${colorClass}`;
    let t5;
    if ($[6] !== formattedAmount || $[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t4,
            children: formattedAmount
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 158,
            columnNumber: 10
        }, this);
        $[6] = formattedAmount;
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t3 || $[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-800 p-6 rounded-lg shadow-lg",
            children: [
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 167,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    return t6;
}
_c1 = SummaryCard;
// --- NOVO Componente: Gráfico de Despesas ---
function ExpenseChart(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "f994d7e311a775540bbaa0286b51cba1267a6e0179eaef763bdd02daf8f0e53c") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f994d7e311a775540bbaa0286b51cba1267a6e0179eaef763bdd02daf8f0e53c";
    }
    const { chartData } = t0;
    let t1;
    if ($[1] !== chartData) {
        t1 = chartData.map(_ExpenseChartChartDataMap);
        $[1] = chartData;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== chartData) {
        t2 = chartData.map(_ExpenseChartChartDataMap2);
        $[3] = chartData;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
            "#FF9F40",
            "#E7E9ED",
            "#8B0000",
            "#008B8B",
            "#BDB76B",
            "#556B2F",
            "#FF8C00"
        ];
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t2) {
        t4 = [
            {
                label: "Gastos por Categoria",
                data: t2,
                backgroundColor: t3,
                borderColor: "#4B5563",
                borderWidth: 1
            }
        ];
        $[6] = t2;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t1 || $[9] !== t4) {
        t5 = {
            labels: t1,
            datasets: t4
        };
        $[8] = t1;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const data = t5;
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "right",
                    labels: {
                        color: "#E5E7EB",
                        boxWidth: 20
                    }
                },
                tooltip: {
                    callbacks: {
                        label: _temp
                    }
                }
            }
        };
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    const options = t6;
    let t7;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-bold mb-4 text-green-400",
            children: "Gastos por Categoria"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 266,
            columnNumber: 10
        }, this);
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== chartData.length || $[14] !== data) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-800 p-6 rounded-lg shadow-lg h-[400px]",
            children: [
                t7,
                chartData.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-full w-full max-h-[320px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Doughnut"], {
                        data: data,
                        options: options
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 273,
                        columnNumber: 156
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                    lineNumber: 273,
                    columnNumber: 102
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 h-full flex items-center justify-center",
                    children: "Nenhuma despesa registrada para este mês."
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                    lineNumber: 273,
                    columnNumber: 207
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 273,
            columnNumber: 10
        }, this);
        $[13] = chartData.length;
        $[14] = data;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    return t8;
}
_c2 = ExpenseChart;
// --- Card de Metas (ATUALIZADO com personalização) ---
function _temp(context) {
    let label = context.label || "";
    if (label) {
        label = label + ": ";
    }
    if (context.parsed !== null) {
        label = label + new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(context.parsed);
    }
    return label;
}
function _ExpenseChartChartDataMap2(item_0) {
    return item_0.total;
}
function _ExpenseChartChartDataMap(item) {
    return item.category_name;
}
function GoalsCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(35);
    if ($[0] !== "f994d7e311a775540bbaa0286b51cba1267a6e0179eaef763bdd02daf8f0e53c") {
        for(let $i = 0; $i < 35; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f994d7e311a775540bbaa0286b51cba1267a6e0179eaef763bdd02daf8f0e53c";
    }
    const { goals } = t0;
    let t1;
    if ($[1] !== goals) {
        t1 = goals.find(_GoalsCardGoalsFind);
        $[1] = goals;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let featuredGoal = t1;
    if (!featuredGoal && goals.length > 0) {
        featuredGoal = goals[0];
    }
    if (!featuredGoal) {
        let t2;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4 text-yellow-400",
                children: "Suas Metas"
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 329,
                columnNumber: 12
            }, this);
            $[3] = t2;
        } else {
            t2 = $[3];
        }
        let t3;
        if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 p-6 rounded-lg shadow-lg h-full",
                children: [
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: [
                            "Nenhuma meta criada. Vá para a página de ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/metas",
                                className: "text-yellow-500 hover:underline",
                                children: "Metas"
                            }, void 0, false, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                lineNumber: 336,
                                columnNumber: 147
                            }, this),
                            " para criar uma."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 336,
                        columnNumber: 77
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 336,
                columnNumber: 12
            }, this);
            $[4] = t3;
        } else {
            t3 = $[4];
        }
        return t3;
    }
    const { name, current_amount, target_amount } = featuredGoal;
    const progressPercentage = target_amount > 0 ? current_amount / target_amount * 100 : 100;
    let t2;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-bold mb-4 text-yellow-400",
            children: "Meta em Destaque"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 351,
            columnNumber: 10
        }, this);
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== name) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-semibold text-lg",
            children: name
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 358,
            columnNumber: 10
        }, this);
        $[6] = name;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== progressPercentage) {
        t4 = progressPercentage.toFixed(1);
        $[8] = progressPercentage;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-medium text-yellow-400",
            children: [
                t4,
                "%"
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 374,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t3 || $[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center mb-1",
            children: [
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 382,
            columnNumber: 10
        }, this);
        $[12] = t3;
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== progressPercentage) {
        t7 = progressPercentage.toFixed(1);
        $[15] = progressPercentage;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    const t8 = `${t7}%`;
    let t9;
    if ($[17] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full bg-gray-700 rounded-full h-2.5 mb-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-yellow-500 h-2.5 rounded-full",
                style: {
                    width: t8
                }
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 400,
                columnNumber: 70
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 400,
            columnNumber: 10
        }, this);
        $[17] = t8;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== current_amount) {
        t10 = current_amount.toLocaleString("pt-BR");
        $[19] = current_amount;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                "R$ ",
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 418,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== target_amount) {
        t12 = target_amount.toLocaleString("pt-BR");
        $[23] = target_amount;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                "R$ ",
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 434,
            columnNumber: 11
        }, this);
        $[25] = t12;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== t11 || $[28] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center text-sm text-gray-300",
            children: [
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 442,
            columnNumber: 11
        }, this);
        $[27] = t11;
        $[28] = t13;
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    let t15;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "/metas",
            className: "text-yellow-500 hover:underline text-sm mt-4 inline-block",
            children: "Ver todas as metas →"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 451,
            columnNumber: 11
        }, this);
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] !== t14 || $[32] !== t6 || $[33] !== t9) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-800 p-6 rounded-lg shadow-lg h-full",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t6,
                        t9,
                        t14,
                        t15
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                    lineNumber: 458,
                    columnNumber: 76
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 458,
            columnNumber: 11
        }, this);
        $[31] = t14;
        $[32] = t6;
        $[33] = t9;
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    return t16;
}
_c3 = GoalsCard;
// --- Componente Principal da Página (Dashboard) ---
function _GoalsCardGoalsFind(g) {
    return g.name.toLowerCase().includes("casamento");
}
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38);
    if ($[0] !== "f994d7e311a775540bbaa0286b51cba1267a6e0179eaef763bdd02daf8f0e53c") {
        for(let $i = 0; $i < 38; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f994d7e311a775540bbaa0286b51cba1267a6e0179eaef763bdd02daf8f0e53c";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [goals, setGoals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            total_income: 0,
            total_expenses: 0,
            balance: 0,
            savings_rate: 0,
            category_summary: []
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [summary, setSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = new Date();
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const [currentDate, setCurrentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = new Date();
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const [lastUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    let t4;
    if ($[5] !== currentDate) {
        t4 = ({
            "Home[useEffect()]": ()=>{
                const fetchData = {
                    "Home[useEffect() > fetchData]": async ()=>{
                        const month = currentDate.getMonth() + 1;
                        const year = currentDate.getFullYear();
                        ;
                        try {
                            const summaryRes = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/dashboard/summary?year=${year}&month=${month}`);
                            setSummary(summaryRes.data);
                            const goalsRes = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/goals/`);
                            setGoals(goalsRes.data);
                        } catch (t5) {
                            const error = t5;
                            console.error("Erro ao buscar dados do dashboard:", error);
                        }
                    }
                }["Home[useEffect() > fetchData]"];
                fetchData();
            }
        })["Home[useEffect()]"];
        $[5] = currentDate;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== currentDate || $[8] !== lastUpdate) {
        t5 = [
            currentDate,
            lastUpdate
        ];
        $[7] = currentDate;
        $[8] = lastUpdate;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[10] !== currentDate) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MonthSelector, {
            currentDate: currentDate,
            onDateChange: setCurrentDate
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 559,
            columnNumber: 10
        }, this);
        $[10] = currentDate;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== summary.total_income) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
            title: "Total Entradas",
            amount: summary.total_income,
            colorClass: "text-green-400"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 567,
            columnNumber: 10
        }, this);
        $[12] = summary.total_income;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== summary.total_expenses) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
            title: "Total Despesas",
            amount: summary.total_expenses,
            colorClass: "text-red-400"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 575,
            columnNumber: 10
        }, this);
        $[14] = summary.total_expenses;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    const t9 = summary.balance >= 0 ? "text-blue-400" : "text-red-500";
    let t10;
    if ($[16] !== summary.balance || $[17] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
            title: "Balan\xE7o Atual",
            amount: summary.balance,
            colorClass: t9
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 584,
            columnNumber: 11
        }, this);
        $[16] = summary.balance;
        $[17] = t9;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    const t11 = summary.savings_rate >= 0 ? "text-green-400" : "text-red-500";
    let t12;
    if ($[19] !== summary.savings_rate || $[20] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
            title: "Taxa de Poupan\xE7a",
            amount: summary.savings_rate,
            colorClass: t11,
            isCurrency: false
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 594,
            columnNumber: 11
        }, this);
        $[19] = summary.savings_rate;
        $[20] = t11;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== t10 || $[23] !== t12 || $[24] !== t7 || $[25] !== t8) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",
            children: [
                t7,
                t8,
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 603,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t12;
        $[24] = t7;
        $[25] = t8;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== summary.category_summary) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExpenseChart, {
                chartData: summary.category_summary
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 614,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 614,
            columnNumber: 11
        }, this);
        $[27] = summary.category_summary;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] !== goals) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoalsCard, {
                goals: goals
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 622,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 622,
            columnNumber: 11
        }, this);
        $[29] = goals;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] !== t14 || $[32] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 630,
            columnNumber: 11
        }, this);
        $[31] = t14;
        $[32] = t15;
        $[33] = t16;
    } else {
        t16 = $[33];
    }
    let t17;
    if ($[34] !== t13 || $[35] !== t16 || $[36] !== t6) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t6,
                t13,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 639,
            columnNumber: 11
        }, this);
        $[34] = t13;
        $[35] = t16;
        $[36] = t6;
        $[37] = t17;
    } else {
        t17 = $[37];
    }
    return t17;
}
_s(Home, "Wfui+BKAF3v62KvKMbwjH9YZ5wI=");
_c4 = Home;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "MonthSelector");
__turbopack_context__.k.register(_c1, "SummaryCard");
__turbopack_context__.k.register(_c2, "ExpenseChart");
__turbopack_context__.k.register(_c3, "GoalsCard");
__turbopack_context__.k.register(_c4, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_ProjetosdeProgramacao_projeto-financeiro_frontend_app_page_a599ba7f.js.map