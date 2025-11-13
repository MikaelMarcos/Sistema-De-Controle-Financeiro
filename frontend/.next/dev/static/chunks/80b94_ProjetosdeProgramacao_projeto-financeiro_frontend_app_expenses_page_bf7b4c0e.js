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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/node_modules/@headlessui/react/dist/components/listbox/listbox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/node_modules/@headlessui/react/dist/components/transition/transition.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// --- Ícones ---
const SelectorIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "425ec68a3fd5b781a398fd04adfd2444f1c77dd707f263270d1c937ace824b48") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "425ec68a3fd5b781a398fd04adfd2444f1c77dd707f263270d1c937ace824b48";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            className: "w-5 h-5 text-gray-400",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                lineNumber: 19,
                columnNumber: 156
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 19,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = SelectorIcon;
const CheckIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "425ec68a3fd5b781a398fd04adfd2444f1c77dd707f263270d1c937ace824b48") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "425ec68a3fd5b781a398fd04adfd2444f1c77dd707f263270d1c937ace824b48";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            className: "w-5 h-5 text-blue-800",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M4.5 12.75l6 6 9-13.5"
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                lineNumber: 36,
                columnNumber: 156
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 36,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c1 = CheckIcon;
const API_URL = 'http://localhost:8000';
// --- COMPONENTE DE SELEÇÃO (Com sua cor personalizada) ---
function CustomSelect(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "425ec68a3fd5b781a398fd04adfd2444f1c77dd707f263270d1c937ace824b48") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "425ec68a3fd5b781a398fd04adfd2444f1c77dd707f263270d1c937ace824b48";
    }
    const { label, value, onChange, options, placeholder, required: t1, textClass: t2 } = t0;
    const required = t1 === undefined ? false : t1;
    const textClass = t2 === undefined ? "text-white" : t2;
    let t3;
    if ($[1] !== options || $[2] !== value) {
        t3 = options.find({
            "CustomSelect[options.find()]": (option)=>option.id === value
        }["CustomSelect[options.find()]"]) || null;
        $[1] = options;
        $[2] = value;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const selectedOption = t3;
    let t4;
    if ($[4] !== label || $[5] !== required) {
        t4 = label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-white/80 mb-2",
            children: [
                label,
                " ",
                required && "*"
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 79,
            columnNumber: 19
        }, this);
        $[4] = label;
        $[5] = required;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== label || $[8] !== options || $[9] !== placeholder || $[10] !== selectedOption || $[11] !== textClass) {
        t5 = (t6)=>{
            const { open } = t6;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Listbox"].Button, {
                        className: `relative w-full p-4 pr-10 text-left bg-fin-dark/60 rounded-xl border-2 transition-all text-white ${textClass} ${open ? "border-fin-gold focus:ring-2 focus:ring-fin-gold/20" : "border-white/10 focus:border-fin-gold focus:ring-2 focus:ring-fin-gold/20"}`,
                        style: label === "Grupo *" ? {
                            background: "linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))",
                            borderColor: "rgba(59, 130, 246, 0.3)"
                        } : {},
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block truncate",
                                children: selectedOption ? selectedOption.name : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white/40",
                                    children: placeholder
                                }, void 0, false, {
                                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                    lineNumber: 95,
                                    columnNumber: 90
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                lineNumber: 95,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectorIcon, {}, void 0, false, {
                                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                    lineNumber: 95,
                                    columnNumber: 238
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                lineNumber: 95,
                                columnNumber: 150
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                        lineNumber: 92,
                        columnNumber: 40
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"], {
                        as: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
                        leave: "transition ease-in duration-100",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Listbox"].Options, {
                            className: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-xl py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border border-fin-gold/50",
                            style: {
                                backgroundColor: "#A7C7E7"
                            },
                            children: options.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative cursor-default select-none py-2 px-4 text-gray-700",
                                children: "Nenhuma opção."
                            }, void 0, false, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                lineNumber: 97,
                                columnNumber: 38
                            }, this) : options.map(_CustomSelectAnonymousOptionsMap)
                        }, void 0, false, {
                            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                            lineNumber: 95,
                            columnNumber: 388
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                        lineNumber: 95,
                        columnNumber: 278
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                lineNumber: 92,
                columnNumber: 14
            }, this);
        };
        $[7] = label;
        $[8] = options;
        $[9] = placeholder;
        $[10] = selectedOption;
        $[11] = textClass;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== onChange || $[14] !== t5 || $[15] !== value) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Listbox"], {
            value: value,
            onChange: onChange,
            children: t5
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 110,
            columnNumber: 10
        }, this);
        $[13] = onChange;
        $[14] = t5;
        $[15] = value;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    let t7;
    if ($[17] !== t4 || $[18] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[17] = t4;
        $[18] = t6;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    return t7;
}
_c2 = CustomSelect;
// --- FORMULÁRIO (Com seu botão personalizado) ---
function _CustomSelectAnonymousOptionsMap(option_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Listbox"].Option, {
        className: _CustomSelectAnonymousOptionsMapListboxOptionClassName,
        value: option_0.id,
        children: (t0)=>{
            const { selected } = t0;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `block truncate ${selected ? "font-bold" : "font-normal"}`,
                        children: option_0.name
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                        lineNumber: 136,
                        columnNumber: 16
                    }, this),
                    selected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute inset-y-0 left-0 flex items-center pl-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {}, void 0, false, {
                            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                            lineNumber: 136,
                            columnNumber: 194
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                        lineNumber: 136,
                        columnNumber: 127
                    }, this) : null
                ]
            }, void 0, true);
        }
    }, option_0.id, false, {
        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
        lineNumber: 132,
        columnNumber: 10
    }, this);
}
function _CustomSelectAnonymousOptionsMapListboxOptionClassName(t0) {
    const { active } = t0;
    return `relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? "bg-blue-200 text-blue-900" : "text-gray-800"}`;
}
function ExpenseForm({ onExpenseAdded }) {
    _s();
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [paid, setPaid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [groupId, setGroupId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [subcategoryId, setSubcategoryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [newSubcategoryName, setNewSubcategoryName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [budgetGroups, setBudgetGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [subcategories, setSubcategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [goals, setGoals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedGoalId, setSelectedGoalId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [metaGroupId, setMetaGroupId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [suggestionApplied, setSuggestionApplied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const debounceTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExpenseForm.useEffect": ()=>{
            Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/budget/`),
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/categories/`),
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/goals/`)
            ]).then({
                "ExpenseForm.useEffect": ([groupsRes, catsRes, goalsRes])=>{
                    setBudgetGroups(groupsRes.data);
                    setSubcategories(catsRes.data);
                    setGoals(goalsRes.data);
                    const metaGroup = groupsRes.data.find({
                        "ExpenseForm.useEffect.metaGroup": (g)=>g.name.toLowerCase().includes("metas")
                    }["ExpenseForm.useEffect.metaGroup"]);
                    if (metaGroup) setMetaGroupId(metaGroup.id);
                }
            }["ExpenseForm.useEffect"]);
        }
    }["ExpenseForm.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExpenseForm.useEffect": ()=>{
            setSuggestionApplied(false);
            if (debounceTimer.current) {
                clearTimeout(debounceTimer.current);
            }
            if (description.trim() === '') {
                return;
            }
            debounceTimer.current = setTimeout({
                "ExpenseForm.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/rules/suggest?description=${description}`).then({
                        "ExpenseForm.useEffect": (response)=>{
                            const rule = response.data;
                            setGroupId(rule.budget_group_id);
                            setSubcategoryId(rule.category_id);
                            setSuggestionApplied(true);
                        }
                    }["ExpenseForm.useEffect"]).catch({
                        "ExpenseForm.useEffect": (error)=>{}
                    }["ExpenseForm.useEffect"]);
                }
            }["ExpenseForm.useEffect"], 800);
            return ({
                "ExpenseForm.useEffect": ()=>{
                    if (debounceTimer.current) {
                        clearTimeout(debounceTimer.current);
                    }
                }
            })["ExpenseForm.useEffect"];
        }
    }["ExpenseForm.useEffect"], [
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
                const catRes = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API_URL}/categories/`, {
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
            await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API_URL}/expenses/`, newExpense);
            setDescription('');
            setAmount('');
            setDate('');
            setPaid(true);
            setGroupId(null);
            setSubcategoryId(null);
            setNewSubcategoryName('');
            setSelectedGoalId(null);
            onExpenseAdded();
        } catch (error_0) {
            console.error("Erro:", error_0);
            alert("Erro ao cadastrar despesa.");
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-br from-fin-card to-fin-dark/80 p-8 rounded-3xl shadow-2xl mb-8 border border-fin-gold/20 backdrop-blur-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 bg-fin-gold/20 rounded-2xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-2xl",
                            children: "💰"
                        }, void 0, false, {
                            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                            lineNumber: 238,
                            columnNumber: 57
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-white",
                                children: "Nova Transação"
                            }, void 0, false, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-fin-gold/70 text-sm",
                                children: "Registre despesas ou agendamentos"
                            }, void 0, false, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-fin-gold border-b border-fin-gold/30 pb-2",
                                children: "Informações Básicas"
                            }, void 0, false, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-white/80 mb-2",
                                                children: "Descrição *"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 250,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: description,
                                                onChange: (e_0)=>setDescription(e_0.target.value),
                                                placeholder: "Ex: Conta de Luz, Supermercado...",
                                                className: "w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold focus:ring-2 focus:ring-fin-gold/20 transition-all text-white placeholder-white/40"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 251,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                        lineNumber: 249,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-white/80 mb-2",
                                                children: "Valor *"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 254,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute left-4 top-1/2 transform -translate-y-1/2 text-fin-gold font-bold",
                                                        children: "R$"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                        lineNumber: 256,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        step: "0.01",
                                                        value: amount,
                                                        onChange: (e_1)=>setAmount(e_1.target.value),
                                                        placeholder: "0,00",
                                                        className: "w-full p-4 pl-12 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold focus:ring-2 focus:ring-fin-gold/20 transition-all text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                        lineNumber: 257,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 255,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                lineNumber: 248,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-white/80 mb-2",
                                                children: "Data"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 263,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: date,
                                                onChange: (e_2)=>setDate(e_2.target.value),
                                                className: "w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold focus:ring-2 focus:ring-fin-gold/20 transition-all text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 264,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                        lineNumber: 262,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomSelect, {
                                                label: "Grupo *",
                                                required: true,
                                                value: groupId,
                                                onChange: setGroupId,
                                                options: budgetGroups,
                                                placeholder: "Selecione um grupo",
                                                textClass: "font-semibold"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 267,
                                                columnNumber: 15
                                            }, this),
                                            suggestionApplied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -top-2 -right-2 text-xs bg-fin-highlight text-fin-dark font-bold px-2 py-0.5 rounded-full animate-pulse",
                                                children: "💡"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 268,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                        lineNumber: 266,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-white/80 mb-2",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 271,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-full p-4 rounded-xl border-2 transition-all cursor-pointer ${paid ? 'bg-green-500/20 border-green-500/50 text-green-400' : 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400'}`,
                                                onClick: ()=>setPaid(!paid),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold",
                                                            children: paid ? '✅ PAGO' : '⏳ PENDENTE'
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                            lineNumber: 274,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-3 h-3 rounded-full ${paid ? 'bg-green-400' : 'bg-yellow-400'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                            lineNumber: 275,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                    lineNumber: 273,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 272,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                lineNumber: 261,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-fin-gold border-b border-fin-gold/30 pb-2",
                                children: "Categorização (Opcional)"
                            }, void 0, false, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomSelect, {
                                                label: "Subcategoria",
                                                value: subcategoryId,
                                                onChange: setSubcategoryId,
                                                options: subcategories,
                                                placeholder: "Selecionar existente"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 286,
                                                columnNumber: 15
                                            }, this),
                                            suggestionApplied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -top-2 -right-2 text-xs bg-fin-highlight text-fin-dark font-bold px-2 py-0.5 rounded-full animate-pulse",
                                                children: "💡"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 287,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-white/80 mb-2",
                                                children: "Nova Subcategoria"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 290,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: newSubcategoryName,
                                                onChange: (e_3)=>setNewSubcategoryName(e_3.target.value),
                                                disabled: !!subcategoryId,
                                                placeholder: "Criar nova...",
                                                className: "w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold transition-all text-white placeholder-white/40 disabled:opacity-50"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 291,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                        lineNumber: 289,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this),
                            parseInt(groupId) === metaGroupId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomSelect, {
                                label: "Vincular à Meta",
                                value: selectedGoalId,
                                onChange: setSelectedGoalId,
                                options: goals,
                                placeholder: "Selecionar meta...",
                                textClass: "text-fin-highlight"
                            }, void 0, false, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                lineNumber: 294,
                                columnNumber: 49
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: isSubmitting,
                        className: "w-full bg-gradient-to-r from-rose-500 to-fin-red hover:from-rose-600 hover:to-red-700 disabled:opacity-50 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2",
                        style: {
                            boxShadow: '0 4px 20px rgba(244, 63, 94, 0.25)' // sombra avermelhada
                        },
                        children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                    lineNumber: 302,
                                    columnNumber: 15
                                }, this),
                                "Processando..."
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: paid ? '💾' : '📅'
                                }, void 0, false, {
                                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                    lineNumber: 305,
                                    columnNumber: 15
                                }, this),
                                paid ? 'Registrar Pagamento' : 'Agendar Despesa'
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                lineNumber: 245,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
        lineNumber: 236,
        columnNumber: 10
    }, this);
}
_s(ExpenseForm, "SHbubsfzI5EWPSomiKgE+65FH2Q=");
_c3 = ExpenseForm;
// --- LISTA DE DESPESAS (Corrigida e Limpa) ---
function ExpenseList(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "425ec68a3fd5b781a398fd04adfd2444f1c77dd707f263270d1c937ace824b48") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "425ec68a3fd5b781a398fd04adfd2444f1c77dd707f263270d1c937ace824b48";
    }
    const { expenses, setExpenses } = t0;
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    let t1;
    if ($[1] !== expenses || $[2] !== filter || $[3] !== setExpenses) {
        let t2;
        if ($[5] !== filter) {
            t2 = ({
                "ExpenseList[expenses.filter()]": (expense)=>{
                    if (filter === "paid") {
                        return expense.paid;
                    }
                    if (filter === "pending") {
                        return !expense.paid;
                    }
                    return true;
                }
            })["ExpenseList[expenses.filter()]"];
            $[5] = filter;
            $[6] = t2;
        } else {
            t2 = $[6];
        }
        const filteredExpenses = expenses.filter(t2);
        let t3;
        if ($[7] !== expenses || $[8] !== setExpenses) {
            t3 = ({
                "ExpenseList[handleDelete]": async (id)=>{
                    if (!confirm("Tem certeza que deseja excluir esta transa\xE7\xE3o?")) {
                        return;
                    }
                    ;
                    try {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`${API_URL}/expenses/${id}`);
                        setExpenses(expenses.filter({
                            "ExpenseList[handleDelete > expenses.filter()]": (e)=>e.id !== id
                        }["ExpenseList[handleDelete > expenses.filter()]"]));
                    } catch (t4) {
                        const error = t4;
                        console.error("Erro ao excluir:", error);
                        alert("Erro ao excluir transa\xE7\xE3o.");
                    }
                }
            })["ExpenseList[handleDelete]"];
            $[7] = expenses;
            $[8] = setExpenses;
            $[9] = t3;
        } else {
            t3 = $[9];
        }
        const handleDelete = t3;
        let t4;
        if ($[10] !== setExpenses) {
            t4 = ({
                "ExpenseList[handleToggleStatus]": async (expense_0)=>{
                    ;
                    try {
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch(`${API_URL}/expenses/${expense_0.id}/toggle-status`);
                        setExpenses({
                            "ExpenseList[handleToggleStatus > setExpenses()]": (prev)=>prev.map({
                                    "ExpenseList[handleToggleStatus > setExpenses() > prev.map()]": (e_0)=>e_0.id === expense_0.id ? response.data : e_0
                                }["ExpenseList[handleToggleStatus > setExpenses() > prev.map()]"])
                        }["ExpenseList[handleToggleStatus > setExpenses()]"]);
                    } catch (t5) {
                        const error_0 = t5;
                        console.error("Erro ao atualizar status:", error_0);
                    }
                }
            })["ExpenseList[handleToggleStatus]"];
            $[10] = setExpenses;
            $[11] = t4;
        } else {
            t4 = $[11];
        }
        const handleToggleStatus = t4;
        const formatDate = _ExpenseListFormatDate;
        const totalAmount = filteredExpenses.reduce(_ExpenseListFilteredExpensesReduce, 0);
        const paidAmount = filteredExpenses.filter(_ExpenseListFilteredExpensesFilter).reduce(_ExpenseListAnonymous, 0);
        const pendingAmount = filteredExpenses.filter(_ExpenseListFilteredExpensesFilter2).reduce(_ExpenseListAnonymous2, 0);
        let t5;
        if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 bg-blue-500/20 rounded-2xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-2xl",
                            children: "📊"
                        }, void 0, false, {
                            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                            lineNumber: 405,
                            columnNumber: 101
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                        lineNumber: 405,
                        columnNumber: 53
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-white",
                                children: "Histórico Financeiro"
                            }, void 0, false, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                lineNumber: 405,
                                columnNumber: 148
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/60 text-sm",
                                children: "Transações registradas e agendadas"
                            }, void 0, false, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                lineNumber: 405,
                                columnNumber: 219
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                        lineNumber: 405,
                        columnNumber: 143
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                lineNumber: 405,
                columnNumber: 12
            }, this);
            $[12] = t5;
        } else {
            t5 = $[12];
        }
        let t6;
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = [
                {
                    key: "all",
                    label: "Todos",
                    emoji: "\uD83D\uDCCB"
                },
                {
                    key: "paid",
                    label: "Pagas",
                    emoji: "\u2705"
                },
                {
                    key: "pending",
                    label: "Pendentes",
                    emoji: "\u23F3"
                }
            ];
            $[13] = t6;
        } else {
            t6 = $[13];
        }
        let t7;
        if ($[14] !== filter) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4",
                children: [
                    t5,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 bg-fin-dark/60 p-1 rounded-xl",
                        children: t6.map({
                            "ExpenseList[(anonymous)()]": (t8)=>{
                                const { key, label, emoji } = t8;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "ExpenseList[(anonymous)() > <button>.onClick]": ()=>setFilter(key)
                                    }["ExpenseList[(anonymous)() > <button>.onClick]"],
                                    className: `px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${filter === key ? "bg-fin-gold text-fin-dark font-bold" : "text-white/70 hover:text-white"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: emoji
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                            lineNumber: 440,
                                            columnNumber: 234
                                        }, this),
                                        label
                                    ]
                                }, key, true, {
                                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                    lineNumber: 438,
                                    columnNumber: 22
                                }, this);
                            }
                        }["ExpenseList[(anonymous)()]"])
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                        lineNumber: 431,
                        columnNumber: 102
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                lineNumber: 431,
                columnNumber: 12
            }, this);
            $[14] = filter;
            $[15] = t7;
        } else {
            t7 = $[15];
        }
        let t8;
        if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white/60 text-sm",
                children: "Total"
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                lineNumber: 450,
                columnNumber: 12
            }, this);
            $[16] = t8;
        } else {
            t8 = $[16];
        }
        const t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-fin-dark/40 p-4 rounded-xl border border-white/5",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-2xl font-bold text-white",
                    children: [
                        "R$ ",
                        totalAmount.toFixed(2)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                    lineNumber: 455,
                    columnNumber: 89
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 455,
            columnNumber: 16
        }, this);
        let t10;
        if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-green-400 text-sm",
                children: "Pagas"
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                lineNumber: 458,
                columnNumber: 13
            }, this);
            $[17] = t10;
        } else {
            t10 = $[17];
        }
        const t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-green-500/10 p-4 rounded-xl border border-green-500/20",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-2xl font-bold text-green-400",
                    children: [
                        "R$ ",
                        paidAmount.toFixed(2)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                    lineNumber: 463,
                    columnNumber: 97
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 463,
            columnNumber: 17
        }, this);
        let t12;
        if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-yellow-400 text-sm",
                children: "Pendentes"
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                lineNumber: 466,
                columnNumber: 13
            }, this);
            $[18] = t12;
        } else {
            t12 = $[18];
        }
        const t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/20",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-2xl font-bold text-yellow-400",
                    children: [
                        "R$ ",
                        pendingAmount.toFixed(2)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                    lineNumber: 471,
                    columnNumber: 99
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 471,
            columnNumber: 17
        }, this);
        let t14;
        if ($[19] !== t11 || $[20] !== t13 || $[21] !== t9) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",
                children: [
                    t9,
                    t11,
                    t13
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                lineNumber: 474,
                columnNumber: 13
            }, this);
            $[19] = t11;
            $[20] = t13;
            $[21] = t9;
            $[22] = t14;
        } else {
            t14 = $[22];
        }
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-br from-fin-card to-fin-dark/80 p-8 rounded-3xl border border-white/5 backdrop-blur-sm",
            children: [
                t7,
                t14,
                filteredExpenses.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12 text-white/40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-6xl mb-4",
                            children: "📭"
                        }, void 0, false, {
                            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                            lineNumber: 482,
                            columnNumber: 220
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Nenhuma transação encontrada"
                        }, void 0, false, {
                            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                            lineNumber: 482,
                            columnNumber: 259
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                    lineNumber: 482,
                    columnNumber: 171
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: filteredExpenses.map({
                        "ExpenseList[filteredExpenses.map()]": (expense_4)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex justify-between items-center p-5 rounded-2xl border-2 transition-all hover:scale-[1.01] ${expense_4.paid ? "bg-fin-dark/30 border-white/5 hover:border-white/10" : "bg-yellow-500/10 border-yellow-500/20 hover:border-yellow-500/30"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `p-3 rounded-xl ${expense_4.paid ? "bg-green-500/20" : "bg-yellow-500/20"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg",
                                                    children: expense_4.paid ? "\u2705" : "\u23F3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                    lineNumber: 483,
                                                    columnNumber: 477
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 483,
                                                columnNumber: 384
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-xs font-bold px-3 py-1 rounded-full ${expense_4.paid ? "text-green-400 bg-green-400/10" : "text-yellow-400 bg-yellow-400/10"}`,
                                                                children: formatDate(expense_4.date)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                                lineNumber: 483,
                                                                columnNumber: 624
                                                            }, this),
                                                            !expense_4.paid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-yellow-400 font-bold uppercase tracking-wider bg-yellow-400/10 px-2 py-1 rounded",
                                                                children: "Pendente"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                                lineNumber: 483,
                                                                columnNumber: 830
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                        lineNumber: 483,
                                                        columnNumber: 578
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-white text-lg mb-1",
                                                        children: expense_4.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                        lineNumber: 483,
                                                        columnNumber: 964
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-white/60",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-fin-gold/80",
                                                                children: expense_4.budget_group?.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                                lineNumber: 483,
                                                                columnNumber: 1087
                                                            }, this),
                                                            expense_4.category && ` • ${expense_4.category.name}`
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                        lineNumber: 483,
                                                        columnNumber: 1048
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 483,
                                                columnNumber: 554
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                        lineNumber: 483,
                                        columnNumber: 337
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-xl font-bold ${expense_4.paid ? "text-fin-red" : "text-white/70"}`,
                                                children: [
                                                    "R$ ",
                                                    expense_4.amount.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 483,
                                                columnNumber: 1273
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: {
                                                            "ExpenseList[filteredExpenses.map() > <button>.onClick]": ()=>handleToggleStatus(expense_4)
                                                        }["ExpenseList[filteredExpenses.map() > <button>.onClick]"],
                                                        className: `p-3 rounded-xl transition-all hover:scale-110 ${expense_4.paid ? "text-gray-500 hover:text-yellow-400 hover:bg-yellow-400/10" : "text-green-400 hover:bg-green-400/20"}`,
                                                        title: expense_4.paid ? "Marcar como Pendente" : "Marcar como Pago",
                                                        children: expense_4.paid ? "\u21A9\uFE0F" : "\u2705"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                        lineNumber: 483,
                                                        columnNumber: 1431
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: {
                                                            "ExpenseList[filteredExpenses.map() > <button>.onClick]": ()=>handleDelete(expense_4.id)
                                                        }["ExpenseList[filteredExpenses.map() > <button>.onClick]"],
                                                        className: "p-3 rounded-xl text-fin-red/50 hover:text-fin-red hover:bg-fin-red/10 transition-all",
                                                        title: "Excluir transa\xE7\xE3o",
                                                        children: "🗑️"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                        lineNumber: 485,
                                                        columnNumber: 382
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                                lineNumber: 483,
                                                columnNumber: 1403
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                        lineNumber: 483,
                                        columnNumber: 1232
                                    }, this)
                                ]
                            }, expense_4.id, true, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                lineNumber: 483,
                                columnNumber: 63
                            }, this)
                    }["ExpenseList[filteredExpenses.map()]"])
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                    lineNumber: 482,
                    columnNumber: 303
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 482,
            columnNumber: 10
        }, this);
        $[1] = expenses;
        $[2] = filter;
        $[3] = setExpenses;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_s1(ExpenseList, "boPJerHaELAyf+PNkR+Y8+JetQg=");
_c4 = ExpenseList;
// --- COMPONENTE PRINCIPAL (Wrapper) ---
function _ExpenseListAnonymous2(sum_1, expense_3) {
    return sum_1 + expense_3.amount;
}
function _ExpenseListFilteredExpensesFilter2(e_2) {
    return !e_2.paid;
}
function _ExpenseListAnonymous(sum_0, expense_2) {
    return sum_0 + expense_2.amount;
}
function _ExpenseListFilteredExpensesFilter(e_1) {
    return e_1.paid;
}
function _ExpenseListFilteredExpensesReduce(sum, expense_1) {
    return sum + expense_1.amount;
}
function _ExpenseListFormatDate(d) {
    return new Date(d).toLocaleDateString("pt-BR", {
        timeZone: "UTC"
    });
}
function ExpensesPage() {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "425ec68a3fd5b781a398fd04adfd2444f1c77dd707f263270d1c937ace824b48") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "425ec68a3fd5b781a398fd04adfd2444f1c77dd707f263270d1c937ace824b48";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [expenses, setExpenses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "ExpensesPage[fetchExpenses]": ()=>{
                setIsLoading(true);
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/expenses/`).then({
                    "ExpensesPage[fetchExpenses > (anonymous)()]": (res)=>setExpenses(res.data)
                }["ExpensesPage[fetchExpenses > (anonymous)()]"]).catch(_ExpensesPageFetchExpensesAnonymous).finally({
                    "ExpensesPage[fetchExpenses > (anonymous)()]": ()=>setIsLoading(false)
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
            lineNumber: 572,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== expenses || $[7] !== isLoading) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto",
                children: [
                    t4,
                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-fin-card/30 p-12 rounded-3xl border border-white/5 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 border-4 border-fin-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"
                            }, void 0, false, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                lineNumber: 579,
                                columnNumber: 175
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/60",
                                children: "Carregando transações..."
                            }, void 0, false, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                                lineNumber: 579,
                                columnNumber: 289
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                        lineNumber: 579,
                        columnNumber: 92
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExpenseList, {
                        expenses: expenses,
                        setExpenses: setExpenses
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                        lineNumber: 579,
                        columnNumber: 355
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
                lineNumber: 579,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/expenses/page.js",
            lineNumber: 579,
            columnNumber: 10
        }, this);
        $[6] = expenses;
        $[7] = isLoading;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    return t5;
}
_s2(ExpensesPage, "WGDQHmuyJimwtSYINPSOawhzVT8=");
_c5 = ExpensesPage;
function _ExpensesPageFetchExpensesAnonymous(error) {
    return console.error("Erro ao carregar despesas:", error);
}
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "SelectorIcon");
__turbopack_context__.k.register(_c1, "CheckIcon");
__turbopack_context__.k.register(_c2, "CustomSelect");
__turbopack_context__.k.register(_c3, "ExpenseForm");
__turbopack_context__.k.register(_c4, "ExpenseList");
__turbopack_context__.k.register(_c5, "ExpensesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=80b94_ProjetosdeProgramacao_projeto-financeiro_frontend_app_expenses_page_bf7b4c0e.js.map