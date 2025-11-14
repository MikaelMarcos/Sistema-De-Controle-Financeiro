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
"[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// --- 👇 GRÁFICO DE GASTOS ATUALIZADO COM CORES SÓBRIAS E SEM ARREDONDAMENTO 👇 ---
const { jsxDEV: _jsxDEV } = __turbopack_context__.r("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
function ExpensePieChart({ expenses }) {
    // Processar os dados para o gráfico
    const categorySpending = expenses.reduce((acc, expense)=>{
        const categoryName = expense.category?.name || 'Sem Categoria';
        acc[categoryName] = (acc[categoryName] || 0) + expense.amount;
        return acc;
    }, {});
    const labels = Object.keys(categorySpending);
    const dataValues = Object.values(categorySpending);
    const total = dataValues.reduce((sum, val)=>sum + val, 0);
    // Paleta de cores sóbrias e profissionais
    const soberColors = [
        '#3B82F6',
        '#10B981',
        '#F59E0B',
        '#EF4444',
        '#8B5CF6',
        '#06B6D4',
        '#84CC16',
        '#F97316',
        '#6366F1',
        '#EC4899',
        '#14B8A6',
        '#F43F5E',
        '#0EA5E9',
        '#22C55E',
        '#EAB308'
    ];
    const borderColors = [
        '#1E293B'
    ]; // Bordas escuras uniformes
    const hoverColors = soberColors.map((color)=>color);
    const chartData = {
        labels: labels,
        datasets: [
            {
                data: dataValues,
                backgroundColor: soberColors.slice(0, labels.length),
                borderColor: borderColors,
                borderWidth: 2,
                hoverBackgroundColor: hoverColors.slice(0, labels.length),
                hoverBorderColor: '#FFFFFF',
                hoverBorderWidth: 3,
                spacing: 0,
                hoverOffset: 15
            }
        ]
    };
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '60%',
        layout: {
            padding: 15
        },
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    color: '#E2E8F0',
                    font: {
                        size: 11,
                        weight: '500',
                        family: "'Inter', sans-serif"
                    },
                    boxWidth: 14,
                    boxHeight: 14,
                    padding: 12,
                    usePointStyle: true,
                    pointStyle: 'circle'
                },
                onHover: function(event, legendItem) {
                    event.native.target.style.cursor = 'pointer';
                },
                onLeave: function(event, legendItem) {
                    event.native.target.style.cursor = 'default';
                }
            },
            tooltip: {
                backgroundColor: 'rgba(15, 23, 42, 0.95)',
                titleColor: '#F1F5F9',
                bodyColor: '#CBD5E1',
                titleFont: {
                    size: 12,
                    weight: '600'
                },
                bodyFont: {
                    size: 11,
                    weight: '500'
                },
                borderColor: '#334155',
                borderWidth: 1,
                cornerRadius: 8,
                padding: 12,
                displayColors: true,
                usePointStyle: true,
                boxPadding: 4,
                callbacks: {
                    label: function(context) {
                        const label = context.label || '';
                        const value = context.parsed;
                        const percentage = total > 0 ? (value / total * 100).toFixed(1) : 0;
                        return `${label}: ${formatCurrency(value)} (${percentage}%)`;
                    },
                    title: function(context) {
                        return context[0].label;
                    }
                }
            }
        },
        interaction: {
            intersect: false,
            mode: 'index'
        },
        animation: {
            animateScale: true,
            animateRotate: true,
            duration: 800,
            easing: 'easeOutCubic'
        },
        elements: {
            arc: {
                borderJoinStyle: 'bevel'
            }
        }
    };
    // Estatísticas para o card de resumo
    const topCategory = Object.entries(categorySpending).reduce((max, [cat, amount])=>amount > max.amount ? {
            category: cat,
            amount
        } : max, {
        category: '',
        amount: 0
    });
    if (expenses.length === 0) {
        return /*#__PURE__*/ _jsxDEV("div", {
            className: "bg-gradient-to-br from-fin-card/60 to-fin-dark/60 p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm h-full flex flex-col items-center justify-center",
            children: /*#__PURE__*/ _jsxDEV("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "text-6xl mb-4",
                        children: "📊"
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("h2", {
                        className: "text-xl font-bold text-white mb-2",
                        children: "Gastos por Categoria"
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("p", {
                        className: "text-gray-400 text-lg",
                        children: "Sem gastos para exibir"
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("p", {
                        className: "text-sm text-gray-500 mt-1",
                        children: "Registre despesas para ver a distribuição"
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 129,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
            lineNumber: 128,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "bg-gradient-to-br from-fin-card/60 to-fin-dark/60 p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm",
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                    /*#__PURE__*/ _jsxDEV("h2", {
                        className: "text-xl font-bold text-white flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ _jsxDEV("span", {
                                className: "bg-gradient-to-r from-fin-gold to-fin-highlight p-2 rounded-xl",
                                children: "📊"
                            }, void 0, false, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            "Distribuição de Gastos"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "text-xs text-gray-400 bg-black/30 px-3 py-2 rounded-full border border-white/10",
                        children: [
                            labels.length,
                            " ",
                            labels.length === 1 ? 'categoria' : 'categorias'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6 items-center",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "lg:col-span-2 relative",
                        style: {
                            height: '300px'
                        },
                        children: [
                            /*#__PURE__*/ _jsxDEV(Doughnut, {
                                data: chartData,
                                options: chartOptions
                            }, void 0, false, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                                children: /*#__PURE__*/ _jsxDEV("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "text-2xl font-bold text-white mb-1",
                                            children: formatCurrency(total)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "text-xs text-gray-400 font-medium",
                                            children: "Total Gasto"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "text-xs text-fin-gold mt-1",
                                            children: [
                                                labels.length,
                                                " categorias"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "lg:col-span-1 space-y-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "bg-gradient-to-br from-fin-dark/80 to-fin-card/60 p-4 rounded-xl border border-white/10",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("h3", {
                                        className: "text-sm font-semibold text-gray-300 mb-3",
                                        children: "📈 Maior Gasto"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "text-lg font-bold text-white truncate",
                                        title: topCategory.category,
                                        children: topCategory.category
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "text-fin-gold font-semibold text-sm",
                                        children: formatCurrency(topCategory.amount)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "text-xs text-gray-400 mt-1",
                                        children: [
                                            total > 0 ? (topCategory.amount / total * 100).toFixed(1) : 0,
                                            "% do total"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "bg-gradient-to-br from-fin-dark/80 to-fin-card/60 p-4 rounded-xl border border-white/10",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("h3", {
                                        className: "text-sm font-semibold text-gray-300 mb-3",
                                        children: "📋 Resumo"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                        lineNumber: 188,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "space-y-2 text-sm",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                        className: "text-gray-400",
                                                        children: "Total:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                                        lineNumber: 191,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                        className: "text-white font-medium",
                                                        children: formatCurrency(total)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                                        lineNumber: 192,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                                lineNumber: 190,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                        className: "text-gray-400",
                                                        children: "Categorias:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                                        lineNumber: 195,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                        className: "text-fin-gold font-medium",
                                                        children: labels.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                                        lineNumber: 196,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                                lineNumber: 194,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                        className: "text-gray-400",
                                                        children: "Transações:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                                        lineNumber: 199,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                        className: "text-white font-medium",
                                                        children: expenses.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                                        lineNumber: 200,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                                lineNumber: 198,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                        lineNumber: 189,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                className: "lg:hidden mt-6",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    className: "grid grid-cols-2 gap-2 max-h-32 overflow-y-auto",
                    children: labels.map((label, index)=>/*#__PURE__*/ _jsxDEV("div", {
                            className: "flex items-center gap-2 text-xs",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "w-3 h-3 rounded-full flex-shrink-0",
                                    style: {
                                        backgroundColor: soberColors[index]
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                    lineNumber: 212,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("span", {
                                    className: "text-gray-300 truncate",
                                    title: label,
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                    lineNumber: 216,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("span", {
                                    className: "text-fin-gold font-medium ml-auto",
                                    children: [
                                        total > 0 ? (categorySpending[label] / total * 100).toFixed(0) : 0,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                                    lineNumber: 219,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, label, true, {
                            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                            lineNumber: 211,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                    lineNumber: 209,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
                lineNumber: 208,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5df220d0._.js.map