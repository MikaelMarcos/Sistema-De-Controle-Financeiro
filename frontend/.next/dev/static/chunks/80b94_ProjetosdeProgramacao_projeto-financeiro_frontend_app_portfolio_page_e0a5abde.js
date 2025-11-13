(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortfolioPage
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
    if ($[0] !== "d9f3caf74bddefab358f137e3d2ea2a2e914413b9918854baebb242a311bf1c4") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d9f3caf74bddefab358f137e3d2ea2a2e914413b9918854baebb242a311bf1c4";
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
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                lineNumber: 19,
                columnNumber: 156
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
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
    if ($[0] !== "d9f3caf74bddefab358f137e3d2ea2a2e914413b9918854baebb242a311bf1c4") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d9f3caf74bddefab358f137e3d2ea2a2e914413b9918854baebb242a311bf1c4";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            className: "w-5 h-5 text-fin-gold",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M4.5 12.75l6 6 9-13.5"
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                lineNumber: 36,
                columnNumber: 156
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
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
// --- Função Auxiliar de Formatação ---
const formatCurrency = (value)=>{
    if (value === null || value === undefined || typeof value !== 'number') value = 0;
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
};
// --- Componente de Seletor ---
function CustomSelect(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "d9f3caf74bddefab358f137e3d2ea2a2e914413b9918854baebb242a311bf1c4") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d9f3caf74bddefab358f137e3d2ea2a2e914413b9918854baebb242a311bf1c4";
    }
    const { label, value, onChange, options, placeholder } = t0;
    let t1;
    if ($[1] !== options || $[2] !== value) {
        t1 = options.find({
            "CustomSelect[options.find()]": (option)=>option.id === value
        }["CustomSelect[options.find()]"]) || null;
        $[1] = options;
        $[2] = value;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const selectedOption = t1;
    let t2;
    if ($[4] !== label) {
        t2 = label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-white/80 mb-2",
            children: label
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
            lineNumber: 84,
            columnNumber: 19
        }, this);
        $[4] = label;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== placeholder || $[7] !== selectedOption) {
        t3 = selectedOption ? selectedOption.name : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-white/40",
            children: placeholder
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
            lineNumber: 92,
            columnNumber: 49
        }, this);
        $[6] = placeholder;
        $[7] = selectedOption;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "block truncate",
            children: t3
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectorIcon, {}, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                lineNumber: 109,
                columnNumber: 98
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Listbox"].Button, {
            className: "relative w-full p-4 pr-10 text-left bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold focus:ring-2 focus:ring-fin-gold/20 transition-all text-white",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[12] = t4;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== options) {
        t7 = options.map(_CustomSelectOptionsMap);
        $[14] = options;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"], {
            as: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
            leave: "transition ease-in duration-100",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Listbox"].Options, {
                className: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-xl bg-fin-dark py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border border-fin-gold/50",
                children: t7
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                lineNumber: 132,
                columnNumber: 120
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
            lineNumber: 132,
            columnNumber: 10
        }, this);
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== t6 || $[19] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
            lineNumber: 140,
            columnNumber: 10
        }, this);
        $[18] = t6;
        $[19] = t8;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== onChange || $[22] !== t9 || $[23] !== value) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Listbox"], {
            value: value,
            onChange: onChange,
            children: t9
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[21] = onChange;
        $[22] = t9;
        $[23] = value;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] !== t10 || $[26] !== t2) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t2,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[25] = t10;
        $[26] = t2;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    return t11;
}
_c2 = CustomSelect;
// --- Formulário para Adicionar Ativos ---
function _CustomSelectOptionsMap(option_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Listbox"].Option, {
        className: _CustomSelectOptionsMapListboxOptionClassName,
        value: option_0.id,
        children: (t0)=>{
            const { selected } = t0;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `block truncate ${selected ? "font-bold" : "font-normal"}`,
                        children: option_0.name
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                        lineNumber: 175,
                        columnNumber: 16
                    }, this),
                    selected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute inset-y-0 left-0 flex items-center pl-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {}, void 0, false, {
                            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                            lineNumber: 175,
                            columnNumber: 194
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                        lineNumber: 175,
                        columnNumber: 127
                    }, this) : null
                ]
            }, void 0, true);
        }
    }, option_0.id, false, {
        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
        lineNumber: 171,
        columnNumber: 10
    }, this);
}
function _CustomSelectOptionsMapListboxOptionClassName(t0) {
    const { active } = t0;
    return `relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? "bg-fin-card/80 text-fin-gold" : "text-white"}`;
}
function AddHoldingForm({ onHoldingAdded }) {
    _s();
    const [ticker, setTicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [assetType, setAssetType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Ação');
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [averagePrice, setAveragePrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [quote, setQuote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [quoteLoading, setQuoteLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const assetTypes = [
        {
            id: 'Ação',
            name: 'Ação (BR)'
        },
        {
            id: 'FII',
            name: 'FII (BR)'
        },
        {
            id: 'Cripto',
            name: 'Criptomoeda'
        },
        {
            id: 'Ação (EUA)',
            name: 'Ação (EUA)'
        }
    ];
    const fetchQuote = ()=>{
        if (!ticker) return;
        setQuoteLoading(true);
        setQuote(null);
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/portfolio/quote/${ticker}`).then((response)=>setQuote(response.data.price)).catch((error)=>{
            console.error("Erro:", error);
            setQuote('Não encontrado');
        }).finally(()=>setQuoteLoading(false));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!ticker || !name || !assetType || !quantity || !averagePrice) {
            alert("Preencha todos os campos.");
            return;
        }
        setIsSubmitting(true);
        try {
            const holdingData = {
                ticker: ticker.toUpperCase(),
                name,
                asset_type: assetType,
                quantity: parseFloat(quantity),
                average_price: parseFloat(averagePrice)
            };
            await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API_URL}/portfolio/`, holdingData);
            setTicker('');
            setName('');
            setAssetType('Ação');
            setQuantity('');
            setAveragePrice('');
            setQuote(null);
            onHoldingAdded();
        } catch (error_0) {
            alert("Erro ao salvar ativo.");
            console.error(error_0);
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-br from-fin-card to-fin-dark/80 p-8 rounded-3xl shadow-2xl mb-8 border border-fin-gold/20 backdrop-blur-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-white mb-6",
                children: "Adicionar Ativo ao Portfólio"
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-white/80 mb-2",
                                        children: "Ticker *"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: ticker,
                                                onChange: (e_0)=>setTicker(e_0.target.value),
                                                placeholder: "Ex: ITUB4",
                                                className: "w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white uppercase"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                                lineNumber: 255,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: fetchQuote,
                                                disabled: quoteLoading,
                                                className: "p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 text-fin-gold hover:border-fin-gold transition",
                                                children: quoteLoading ? '...' : 'Buscar'
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                                lineNumber: 256,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, this),
                                    quote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm mt-2 text-fin-highlight",
                                        children: [
                                            "Preço Atual: ",
                                            typeof quote === 'number' ? formatCurrency(quote) : quote
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                        lineNumber: 260,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-white/80 mb-2",
                                        children: "Nome do Ativo *"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: name,
                                        onChange: (e_1)=>setName(e_1.target.value),
                                        placeholder: "Ex: Itaú Unibanco",
                                        className: "w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                        lineNumber: 266,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomSelect, {
                                label: "Tipo de Ativo *",
                                value: assetType,
                                onChange: setAssetType,
                                options: assetTypes,
                                placeholder: "Selecione o tipo"
                            }, void 0, false, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-white/80 mb-2",
                                        children: "Quantidade *"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                        lineNumber: 273,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        step: "any",
                                        value: quantity,
                                        onChange: (e_2)=>setQuantity(e_2.target.value),
                                        placeholder: "Ex: 100",
                                        className: "w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                        lineNumber: 274,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-white/80 mb-2",
                                        children: "Preço Médio de Compra *"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                        lineNumber: 277,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        step: "any",
                                        value: averagePrice,
                                        onChange: (e_3)=>setAveragePrice(e_3.target.value),
                                        placeholder: "Ex: 28.50",
                                        className: "w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                        lineNumber: 278,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: isSubmitting,
                        className: "w-full bg-gradient-to-r from-fin-highlight to-fin-gold hover:opacity-90 text-fin-dark font-bold py-4 rounded-xl transition shadow-lg",
                        children: isSubmitting ? 'Salvando...' : '💾 Salvar Ativo'
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                lineNumber: 249,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
        lineNumber: 247,
        columnNumber: 10
    }, this);
}
_s(AddHoldingForm, "uSCqxI6XhQpk9RMBE8wUizB7JEM=");
_c3 = AddHoldingForm;
// --- Componente para Mostrar o Portfólio ---
function PortfolioView(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(71);
    if ($[0] !== "d9f3caf74bddefab358f137e3d2ea2a2e914413b9918854baebb242a311bf1c4") {
        for(let $i = 0; $i < 71; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d9f3caf74bddefab358f137e3d2ea2a2e914413b9918854baebb242a311bf1c4";
    }
    const { holdings, setHoldings } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {};
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [marketPrices, setMarketPrices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    if ($[2] !== holdings || $[3] !== marketPrices) {
        t2 = ({
            "PortfolioView[fetchPricesSequentially]": async ()=>{
                if (holdings.length === 0) {
                    return;
                }
                setIsLoading(true);
                const uniqueTickers = [
                    ...new Set(holdings.map(_PortfolioViewFetchPricesSequentiallyHoldingsMap))
                ];
                const newPrices = {
                    ...marketPrices
                };
                for (const ticker of uniqueTickers){
                    ;
                    try {
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/portfolio/quote/${ticker}`);
                        newPrices[ticker] = res.data.price;
                        setMarketPrices({
                            ...newPrices
                        });
                        await new Promise(_temp);
                    } catch (t3) {
                        console.error(`Falha ao buscar ${ticker}`);
                        newPrices[ticker] = 0;
                    }
                }
                setIsLoading(false);
            }
        })["PortfolioView[fetchPricesSequentially]"];
        $[2] = holdings;
        $[3] = marketPrices;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const fetchPricesSequentially = t2;
    let t3;
    if ($[5] !== setHoldings) {
        t3 = ({
            "PortfolioView[handleDelete]": async (holdingId)=>{
                if (confirm("Remover este ativo do portf\xF3lio?")) {
                    ;
                    try {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`${API_URL}/portfolio/${holdingId}`);
                        setHoldings({
                            "PortfolioView[handleDelete > setHoldings()]": (prev)=>prev.filter({
                                    "PortfolioView[handleDelete > setHoldings() > prev.filter()]": (h_0)=>h_0.id !== holdingId
                                }["PortfolioView[handleDelete > setHoldings() > prev.filter()]"])
                        }["PortfolioView[handleDelete > setHoldings()]"]);
                    } catch (t4) {
                        alert("Erro ao deletar ativo.");
                    }
                }
            }
        })["PortfolioView[handleDelete]"];
        $[5] = setHoldings;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const handleDelete = t3;
    let t10;
    let t11;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    let totalProfit;
    let totalProfitPercent;
    if ($[7] !== fetchPricesSequentially || $[8] !== holdings || $[9] !== isLoading || $[10] !== marketPrices) {
        let totalInvested = 0;
        let totalCurrent = 0;
        holdings.forEach({
            "PortfolioView[holdings.forEach()]": (h_1)=>{
                const currentPrice = marketPrices[h_1.asset.ticker] || h_1.average_price;
                totalInvested = totalInvested + h_1.quantity * h_1.average_price;
                totalInvested;
                totalCurrent = totalCurrent + h_1.quantity * currentPrice;
                totalCurrent;
            }
        }["PortfolioView[holdings.forEach()]"]);
        totalProfit = totalCurrent - totalInvested;
        totalProfitPercent = totalInvested > 0 ? totalProfit / totalInvested * 100 : 0;
        t10 = "bg-gradient-to-br from-fin-card to-fin-dark/80 p-8 rounded-3xl border border-white/5 backdrop-blur-sm";
        let t12;
        if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-white",
                children: "Meu Patrimônio"
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                lineNumber: 399,
                columnNumber: 13
            }, this);
            $[21] = t12;
        } else {
            t12 = $[21];
        }
        const t13 = isLoading ? "Atualizando..." : "\uD83D\uDD04 Atualizar Cota\xE7\xF5es";
        if ($[22] !== fetchPricesSequentially || $[23] !== isLoading || $[24] !== t13) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                    t12,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: fetchPricesSequentially,
                        disabled: isLoading,
                        className: "px-4 py-2 bg-fin-dark/70 text-fin-gold border border-fin-gold/50 rounded-xl hover:bg-fin-gold hover:text-fin-dark transition disabled:opacity-50 disabled:animate-pulse",
                        children: t13
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                        lineNumber: 406,
                        columnNumber: 74
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                lineNumber: 406,
                columnNumber: 13
            }, this);
            $[22] = fetchPricesSequentially;
            $[23] = isLoading;
            $[24] = t13;
            $[25] = t11;
        } else {
            t11 = $[25];
        }
        t8 = "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8";
        let t14;
        if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-400 text-sm mb-1",
                children: "Patrimônio Atual"
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                lineNumber: 417,
                columnNumber: 13
            }, this);
            $[26] = t14;
        } else {
            t14 = $[26];
        }
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-fin-dark/50 p-6 rounded-2xl border border-white/5 text-center",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-3xl font-bold text-white",
                    children: formatCurrency(totalCurrent)
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                    lineNumber: 422,
                    columnNumber: 97
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
            lineNumber: 422,
            columnNumber: 10
        }, this);
        t6 = "bg-fin-dark/50 p-6 rounded-2xl border border-white/5 text-center";
        if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-400 text-sm mb-1",
                children: "Total Investido"
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                lineNumber: 425,
                columnNumber: 12
            }, this);
            $[27] = t7;
        } else {
            t7 = $[27];
        }
        t4 = "text-3xl font-bold text-gray-300";
        t5 = formatCurrency(totalInvested);
        $[7] = fetchPricesSequentially;
        $[8] = holdings;
        $[9] = isLoading;
        $[10] = marketPrices;
        $[11] = t10;
        $[12] = t11;
        $[13] = t4;
        $[14] = t5;
        $[15] = t6;
        $[16] = t7;
        $[17] = t8;
        $[18] = t9;
        $[19] = totalProfit;
        $[20] = totalProfitPercent;
    } else {
        t10 = $[11];
        t11 = $[12];
        t4 = $[13];
        t5 = $[14];
        t6 = $[15];
        t7 = $[16];
        t8 = $[17];
        t9 = $[18];
        totalProfit = $[19];
        totalProfitPercent = $[20];
    }
    let t12;
    if ($[28] !== t4 || $[29] !== t5) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
            lineNumber: 460,
            columnNumber: 11
        }, this);
        $[28] = t4;
        $[29] = t5;
        $[30] = t12;
    } else {
        t12 = $[30];
    }
    let t13;
    if ($[31] !== t12 || $[32] !== t6 || $[33] !== t7) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t7,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
            lineNumber: 469,
            columnNumber: 11
        }, this);
        $[31] = t12;
        $[32] = t6;
        $[33] = t7;
        $[34] = t13;
    } else {
        t13 = $[34];
    }
    const t14 = `p-6 rounded-2xl border ${totalProfit >= 0 ? "bg-green-500/10 border-green-500/20" : "bg-red-500/10 border-red-500/20"}`;
    const t15 = `text-sm mb-1 ${totalProfit >= 0 ? "text-green-400" : "text-fin-red"}`;
    let t16;
    if ($[35] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t15,
            children: "Lucro/Prejuízo"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
            lineNumber: 481,
            columnNumber: 11
        }, this);
        $[35] = t15;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    const t17 = `text-3xl font-bold ${totalProfit >= 0 ? "text-green-400" : "text-fin-red"}`;
    let t18;
    if ($[37] !== totalProfit) {
        t18 = formatCurrency(totalProfit);
        $[37] = totalProfit;
        $[38] = t18;
    } else {
        t18 = $[38];
    }
    let t19;
    if ($[39] !== totalProfitPercent) {
        t19 = totalProfitPercent.toFixed(1);
        $[39] = totalProfitPercent;
        $[40] = t19;
    } else {
        t19 = $[40];
    }
    let t20;
    if ($[41] !== t17 || $[42] !== t18 || $[43] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t17,
            children: [
                t18,
                " (",
                t19,
                "%)"
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
            lineNumber: 506,
            columnNumber: 11
        }, this);
        $[41] = t17;
        $[42] = t18;
        $[43] = t19;
        $[44] = t20;
    } else {
        t20 = $[44];
    }
    let t21;
    if ($[45] !== t14 || $[46] !== t16 || $[47] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t14,
            children: [
                t16,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
            lineNumber: 516,
            columnNumber: 11
        }, this);
        $[45] = t14;
        $[46] = t16;
        $[47] = t20;
        $[48] = t21;
    } else {
        t21 = $[48];
    }
    let t22;
    if ($[49] !== t13 || $[50] !== t21 || $[51] !== t8 || $[52] !== t9) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: [
                t9,
                t13,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
            lineNumber: 526,
            columnNumber: 11
        }, this);
        $[49] = t13;
        $[50] = t21;
        $[51] = t8;
        $[52] = t9;
        $[53] = t22;
    } else {
        t22 = $[53];
    }
    let t23;
    if ($[54] !== isLoading) {
        t23 = isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center text-fin-gold animate-pulse mb-4",
            children: "Atualizando cotações... (15s por ativo)"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
            lineNumber: 537,
            columnNumber: 24
        }, this);
        $[54] = isLoading;
        $[55] = t23;
    } else {
        t23 = $[55];
    }
    let t24;
    if ($[56] !== handleDelete || $[57] !== holdings || $[58] !== marketPrices) {
        let t25;
        if ($[60] !== handleDelete || $[61] !== marketPrices) {
            t25 = ({
                "PortfolioView[holdings.map()]": (h_2)=>{
                    const currentPrice_0 = marketPrices[h_2.asset.ticker] || 0;
                    const invested = h_2.quantity * h_2.average_price;
                    const currentVal = h_2.quantity * currentPrice_0;
                    const profit = currentVal - invested;
                    const profitPercent = invested > 0 ? profit / invested * 100 : 0;
                    const isPriceFound = marketPrices[h_2.asset.ticker] !== undefined;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-fin-dark/50 p-5 rounded-2xl border border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-white",
                                                children: h_2.asset.ticker
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                                lineNumber: 555,
                                                columnNumber: 163
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-400",
                                                children: [
                                                    h_2.asset.name,
                                                    " (",
                                                    h_2.asset.asset_type,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                                lineNumber: 555,
                                                columnNumber: 231
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                        lineNumber: 555,
                                        columnNumber: 158
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "PortfolioView[holdings.map() > <button>.onClick]": ()=>handleDelete(h_2.id)
                                        }["PortfolioView[holdings.map() > <button>.onClick]"],
                                        className: "p-2 text-fin-red/50 hover:text-fin-red hover:bg-fin-red/10 rounded-full",
                                        children: "🗑️"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                        lineNumber: 555,
                                        columnNumber: 319
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                lineNumber: 555,
                                columnNumber: 102
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-400",
                                                children: "Posição Atual"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                                lineNumber: 557,
                                                columnNumber: 244
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-semibold text-white",
                                                children: formatCurrency(currentVal)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                                lineNumber: 557,
                                                columnNumber: 302
                                            }, this),
                                            isPriceFound && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `text-sm ${profit >= 0 ? "text-green-400" : "text-fin-red"}`,
                                                children: [
                                                    profitPercent.toFixed(1),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                                lineNumber: 557,
                                                columnNumber: 403
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                        lineNumber: 557,
                                        columnNumber: 239
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-400",
                                                children: "Preço Atual"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                                lineNumber: 557,
                                                columnNumber: 526
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-semibold text-white",
                                                children: isPriceFound ? formatCurrency(currentPrice_0) : "..."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                                lineNumber: 557,
                                                columnNumber: 582
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                        lineNumber: 557,
                                        columnNumber: 521
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-400",
                                                children: "Quantidade"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                                lineNumber: 557,
                                                columnNumber: 704
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-semibold text-white",
                                                children: h_2.quantity
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                                lineNumber: 557,
                                                columnNumber: 759
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                        lineNumber: 557,
                                        columnNumber: 699
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-400",
                                                children: "Preço Médio"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                                lineNumber: 557,
                                                columnNumber: 840
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-semibold text-white",
                                                children: formatCurrency(h_2.average_price)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                                lineNumber: 557,
                                                columnNumber: 896
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                        lineNumber: 557,
                                        columnNumber: 835
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                                lineNumber: 557,
                                columnNumber: 172
                            }, this)
                        ]
                    }, h_2.id, true, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                        lineNumber: 555,
                        columnNumber: 18
                    }, this);
                }
            })["PortfolioView[holdings.map()]"];
            $[60] = handleDelete;
            $[61] = marketPrices;
            $[62] = t25;
        } else {
            t25 = $[62];
        }
        t24 = holdings.map(t25);
        $[56] = handleDelete;
        $[57] = holdings;
        $[58] = marketPrices;
        $[59] = t24;
    } else {
        t24 = $[59];
    }
    let t25;
    if ($[63] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: t24
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
            lineNumber: 576,
            columnNumber: 11
        }, this);
        $[63] = t24;
        $[64] = t25;
    } else {
        t25 = $[64];
    }
    let t26;
    if ($[65] !== t10 || $[66] !== t11 || $[67] !== t22 || $[68] !== t23 || $[69] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: [
                t11,
                t22,
                t23,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
            lineNumber: 584,
            columnNumber: 11
        }, this);
        $[65] = t10;
        $[66] = t11;
        $[67] = t22;
        $[68] = t23;
        $[69] = t25;
        $[70] = t26;
    } else {
        t26 = $[70];
    }
    return t26;
}
_s1(PortfolioView, "knWvLCl0uKX86vCo2EzbuJ2fUDU=");
_c4 = PortfolioView;
// --- Componente Principal da Página ---
function _temp(resolve) {
    return setTimeout(resolve, 15000);
}
function _PortfolioViewFetchPricesSequentiallyHoldingsMap(h) {
    return h.asset.ticker;
}
function PortfolioPage() {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "d9f3caf74bddefab358f137e3d2ea2a2e914413b9918854baebb242a311bf1c4") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d9f3caf74bddefab358f137e3d2ea2a2e914413b9918854baebb242a311bf1c4";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [holdings, setHoldings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "PortfolioPage[fetchHoldings]": ()=>{
                setIsLoading(true);
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/portfolio/`).then({
                    "PortfolioPage[fetchHoldings > (anonymous)()]": (res)=>setHoldings(res.data)
                }["PortfolioPage[fetchHoldings > (anonymous)()]"]).catch(_PortfolioPageFetchHoldingsAnonymous).finally({
                    "PortfolioPage[fetchHoldings > (anonymous)()]": ()=>setIsLoading(false)
                }["PortfolioPage[fetchHoldings > (anonymous)()]"]);
            }
        })["PortfolioPage[fetchHoldings]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const fetchHoldings = t1;
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "PortfolioPage[useEffect()]": ()=>{
                fetchHoldings();
            }
        })["PortfolioPage[useEffect()]"];
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
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AddHoldingForm, {
            onHoldingAdded: fetchHoldings
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
            lineNumber: 656,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== holdings || $[7] !== isLoading) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto",
                children: [
                    t4,
                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-white/60 py-12",
                        children: "Carregando portfólio..."
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                        lineNumber: 663,
                        columnNumber: 92
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PortfolioView, {
                        holdings: holdings,
                        setHoldings: setHoldings
                    }, void 0, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                        lineNumber: 663,
                        columnNumber: 173
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
                lineNumber: 663,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/portfolio/page.js",
            lineNumber: 663,
            columnNumber: 10
        }, this);
        $[6] = holdings;
        $[7] = isLoading;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    return t5;
}
_s2(PortfolioPage, "w+kZJkX2FP0rTj7DWg9Nsu/cM0A=");
_c5 = PortfolioPage;
function _PortfolioPageFetchHoldingsAnonymous(e) {
    return console.error("Erro ao buscar portf\xF3lio:", e);
}
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "SelectorIcon");
__turbopack_context__.k.register(_c1, "CheckIcon");
__turbopack_context__.k.register(_c2, "CustomSelect");
__turbopack_context__.k.register(_c3, "AddHoldingForm");
__turbopack_context__.k.register(_c4, "PortfolioView");
__turbopack_context__.k.register(_c5, "PortfolioPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=80b94_ProjetosdeProgramacao_projeto-financeiro_frontend_app_portfolio_page_e0a5abde.js.map