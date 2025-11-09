(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MetasPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
const API_URL = 'http://localhost:8000';
// --- Componente: Formulário de Criação de Meta (O mesmo da última vez) ---
function GoalCreateForm(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "964436667bac31285d683169245a4c28e08c62f76a72ac463459c722284726fe") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "964436667bac31285d683169245a4c28e08c62f76a72ac463459c722284726fe";
    }
    const { onGoalAdded } = t0;
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [targetAmount, setTargetAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentAmount, setCurrentAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [deadline, setDeadline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[1] !== currentAmount || $[2] !== deadline || $[3] !== name || $[4] !== notes || $[5] !== onGoalAdded || $[6] !== targetAmount) {
        t1 = ({
            "GoalCreateForm[handleSubmit]": (e)=>{
                e.preventDefault();
                if (!name || !targetAmount) {
                    alert("Preencha pelo menos o Nome e o Valor Estimado.");
                    return;
                }
                const newGoal = {
                    name,
                    target_amount: parseFloat(targetAmount),
                    current_amount: parseFloat(currentAmount) || 0,
                    deadline: deadline ? new Date(deadline).toISOString() : null,
                    notes
                };
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API_URL}/goals/`, newGoal).then({
                    "GoalCreateForm[handleSubmit > (anonymous)()]": (response)=>{
                        onGoalAdded(response.data);
                        setName("");
                        setTargetAmount("");
                        setCurrentAmount("");
                        setDeadline("");
                        setNotes("");
                    }
                }["GoalCreateForm[handleSubmit > (anonymous)()]"]).catch(_GoalCreateFormHandleSubmitAnonymous);
            }
        })["GoalCreateForm[handleSubmit]"];
        $[1] = currentAmount;
        $[2] = deadline;
        $[3] = name;
        $[4] = notes;
        $[5] = onGoalAdded;
        $[6] = targetAmount;
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    const handleSubmit = t1;
    let t2;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-bold mb-4 text-yellow-400",
            children: "Criar Nova Meta"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "GoalCreateForm[<input>.onChange]": (e_0)=>setName(e_0.target.value)
        })["GoalCreateForm[<input>.onChange]"];
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== name) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            value: name,
            onChange: t3,
            placeholder: "Nome da Meta (ex: Casamento)",
            className: "p-3 bg-gray-700 rounded border border-gray-600 md:col-span-3"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[10] = name;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "GoalCreateForm[<input>.onChange]": (e_1)=>setTargetAmount(e_1.target.value)
        })["GoalCreateForm[<input>.onChange]"];
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== targetAmount) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "number",
            value: targetAmount,
            onChange: t5,
            placeholder: "Valor Estimado (ex: 20000)",
            className: "p-3 bg-gray-700 rounded border border-gray-600"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[13] = targetAmount;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "GoalCreateForm[<input>.onChange]": (e_2)=>setCurrentAmount(e_2.target.value)
        })["GoalCreateForm[<input>.onChange]"];
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== currentAmount) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "number",
            value: currentAmount,
            onChange: t7,
            placeholder: "Valor Inicial (opcional)",
            className: "p-3 bg-gray-700 rounded border border-gray-600"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[16] = currentAmount;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "GoalCreateForm[<input>.onChange]": (e_3)=>setDeadline(e_3.target.value)
        })["GoalCreateForm[<input>.onChange]"];
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== deadline) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "date",
            value: deadline,
            onChange: t9,
            className: "p-3 bg-gray-700 rounded border border-gray-600",
            title: "Per\xEDodo para cumprir"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 133,
            columnNumber: 11
        }, this);
        $[19] = deadline;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "GoalCreateForm[<input>.onChange]": (e_4)=>setNotes(e_4.target.value)
        })["GoalCreateForm[<input>.onChange]"];
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== notes) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            value: notes,
            onChange: t11,
            placeholder: "Observa\xE7\xF5es (opcional)",
            className: "p-3 bg-gray-700 rounded border border-gray-600 md:col-span-3"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[22] = notes;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== t10 || $[25] !== t12 || $[26] !== t4 || $[27] !== t6 || $[28] !== t8) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
            children: [
                t4,
                t6,
                t8,
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[24] = t10;
        $[25] = t12;
        $[26] = t4;
        $[27] = t6;
        $[28] = t8;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "mt-4 w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-4 rounded transition duration-300",
            children: "Salvar Meta"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] !== handleSubmit || $[32] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "bg-gray-800 p-6 rounded-lg shadow-lg mb-8",
            children: [
                t2,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[31] = handleSubmit;
        $[32] = t13;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    return t15;
}
_s(GoalCreateForm, "E/x7MLKkBamUJ2KXuDfEVrxup/Q=");
_c = GoalCreateForm;
// --- NOVO Componente: Modal de Edição ---
function _GoalCreateFormHandleSubmitAnonymous(error) {
    return console.error("Erro ao criar meta:", error);
}
function EditGoalModal(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(60);
    if ($[0] !== "964436667bac31285d683169245a4c28e08c62f76a72ac463459c722284726fe") {
        for(let $i = 0; $i < 60; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "964436667bac31285d683169245a4c28e08c62f76a72ac463459c722284726fe";
    }
    const { goal, onClose, onGoalUpdated } = t0;
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(goal.name);
    const [targetAmount, setTargetAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(goal.target_amount);
    let t1;
    if ($[1] !== goal.deadline) {
        t1 = goal.deadline ? goal.deadline.split("T")[0] : "";
        $[1] = goal.deadline;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [deadline, setDeadline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(goal.notes || "");
    const [adjustmentAmount, setAdjustmentAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t2;
    if ($[3] !== deadline || $[4] !== goal.id || $[5] !== name || $[6] !== notes || $[7] !== onClose || $[8] !== onGoalUpdated || $[9] !== targetAmount) {
        t2 = ({
            "EditGoalModal[handleEditSubmit]": (e)=>{
                e.preventDefault();
                const updatedGoalData = {
                    name,
                    target_amount: parseFloat(targetAmount),
                    deadline: deadline ? new Date(deadline).toISOString() : null,
                    notes
                };
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`${API_URL}/goals/${goal.id}`, updatedGoalData).then({
                    "EditGoalModal[handleEditSubmit > (anonymous)()]": (response)=>{
                        onGoalUpdated(response.data);
                        onClose();
                    }
                }["EditGoalModal[handleEditSubmit > (anonymous)()]"]).catch(_EditGoalModalHandleEditSubmitAnonymous);
            }
        })["EditGoalModal[handleEditSubmit]"];
        $[3] = deadline;
        $[4] = goal.id;
        $[5] = name;
        $[6] = notes;
        $[7] = onClose;
        $[8] = onGoalUpdated;
        $[9] = targetAmount;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    const handleEditSubmit = t2;
    let t3;
    if ($[11] !== adjustmentAmount || $[12] !== goal.id || $[13] !== onGoalUpdated) {
        t3 = ({
            "EditGoalModal[handleAdjustmentSubmit]": (e_0, type)=>{
                e_0.preventDefault();
                const amount = parseFloat(adjustmentAmount);
                if (!amount || amount <= 0) {
                    alert("Por favor, insira um valor positivo.");
                    return;
                }
                const adjustmentData = {
                    amount
                };
                const url = `${API_URL}/goals/${goal.id}/${type}`;
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(url, adjustmentData).then({
                    "EditGoalModal[handleAdjustmentSubmit > (anonymous)()]": (response_0)=>{
                        onGoalUpdated(response_0.data);
                        setAdjustmentAmount("");
                    }
                }["EditGoalModal[handleAdjustmentSubmit > (anonymous)()]"]).catch({
                    "EditGoalModal[handleAdjustmentSubmit > (anonymous)()]": (error_0)=>{
                        console.error(`Erro ao fazer ${type}:`, error_0);
                        alert(`Erro: ${error_0.response?.data?.detail || "Opera\xE7\xE3o falhou"}`);
                    }
                }["EditGoalModal[handleAdjustmentSubmit > (anonymous)()]"]);
            }
        })["EditGoalModal[handleAdjustmentSubmit]"];
        $[11] = adjustmentAmount;
        $[12] = goal.id;
        $[13] = onGoalUpdated;
        $[14] = t3;
    } else {
        t3 = $[14];
    }
    const handleAdjustmentSubmit = t3;
    let t4;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-bold text-yellow-400",
            children: "Gerenciar Meta"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 285,
            columnNumber: 10
        }, this);
        $[15] = t4;
    } else {
        t4 = $[15];
    }
    let t5;
    if ($[16] !== onClose) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center mb-4",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "text-gray-400 hover:text-white text-2xl",
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
                    lineNumber: 292,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 292,
            columnNumber: 10
        }, this);
        $[16] = onClose;
        $[17] = t5;
    } else {
        t5 = $[17];
    }
    let t6;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold text-gray-200 border-b border-gray-700 pb-2",
            children: "Editar Detalhes"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 300,
            columnNumber: 10
        }, this);
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    let t7;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "EditGoalModal[<input>.onChange]": (e_2)=>setName(e_2.target.value)
        })["EditGoalModal[<input>.onChange]"];
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] !== name) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            value: name,
            onChange: t7,
            placeholder: "Nome da Meta",
            className: "w-full p-3 bg-gray-700 rounded border border-gray-600"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 316,
            columnNumber: 10
        }, this);
        $[20] = name;
        $[21] = t8;
    } else {
        t8 = $[21];
    }
    let t9;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "EditGoalModal[<input>.onChange]": (e_3)=>setTargetAmount(e_3.target.value)
        })["EditGoalModal[<input>.onChange]"];
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    let t10;
    if ($[23] !== targetAmount) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "number",
            value: targetAmount,
            onChange: t9,
            placeholder: "Valor Estimado",
            className: "w-full p-3 bg-gray-700 rounded border border-gray-600"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 333,
            columnNumber: 11
        }, this);
        $[23] = targetAmount;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "EditGoalModal[<input>.onChange]": (e_4)=>setDeadline(e_4.target.value)
        })["EditGoalModal[<input>.onChange]"];
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== deadline) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "date",
            value: deadline,
            onChange: t11,
            className: "w-full p-3 bg-gray-700 rounded border border-gray-600"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 350,
            columnNumber: 11
        }, this);
        $[26] = deadline;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "EditGoalModal[<input>.onChange]": (e_5)=>setNotes(e_5.target.value)
        })["EditGoalModal[<input>.onChange]"];
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] !== notes) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            value: notes,
            onChange: t13,
            placeholder: "Observa\xE7\xF5es",
            className: "w-full p-3 bg-gray-700 rounded border border-gray-600"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 367,
            columnNumber: 11
        }, this);
        $[29] = notes;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
            children: "Salvar Alterações"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 375,
            columnNumber: 11
        }, this);
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[32] !== handleEditSubmit || $[33] !== t10 || $[34] !== t12 || $[35] !== t14 || $[36] !== t8) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleEditSubmit,
            className: "space-y-4",
            children: [
                t6,
                t8,
                t10,
                t12,
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 382,
            columnNumber: 11
        }, this);
        $[32] = handleEditSubmit;
        $[33] = t10;
        $[34] = t12;
        $[35] = t14;
        $[36] = t8;
        $[37] = t16;
    } else {
        t16 = $[37];
    }
    let t17;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
            className: "my-6 border-gray-700"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 394,
            columnNumber: 11
        }, this);
        $[38] = t17;
    } else {
        t17 = $[38];
    }
    let t18;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold text-gray-200 border-b border-gray-700 pb-2",
            children: "Ajuste Manual"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 401,
            columnNumber: 11
        }, this);
        $[39] = t18;
    } else {
        t18 = $[39];
    }
    let t19;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = ({
            "EditGoalModal[<input>.onChange]": (e_6)=>setAdjustmentAmount(e_6.target.value)
        })["EditGoalModal[<input>.onChange]"];
        $[40] = t19;
    } else {
        t19 = $[40];
    }
    let t20;
    if ($[41] !== adjustmentAmount) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "number",
            value: adjustmentAmount,
            onChange: t19,
            placeholder: "Valor do Ajuste",
            className: "w-full p-3 bg-gray-700 rounded border border-gray-600"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 417,
            columnNumber: 11
        }, this);
        $[41] = adjustmentAmount;
        $[42] = t20;
    } else {
        t20 = $[42];
    }
    let t21;
    if ($[43] !== handleAdjustmentSubmit) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            onClick: {
                "EditGoalModal[<button>.onClick]": (e_7)=>handleAdjustmentSubmit(e_7, "deposit")
            }["EditGoalModal[<button>.onClick]"],
            className: "w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",
            children: "Depositar"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 425,
            columnNumber: 11
        }, this);
        $[43] = handleAdjustmentSubmit;
        $[44] = t21;
    } else {
        t21 = $[44];
    }
    let t22;
    if ($[45] !== handleAdjustmentSubmit) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            onClick: {
                "EditGoalModal[<button>.onClick]": (e_8)=>handleAdjustmentSubmit(e_8, "withdraw")
            }["EditGoalModal[<button>.onClick]"],
            className: "w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
            children: "Retirar"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 435,
            columnNumber: 11
        }, this);
        $[45] = handleAdjustmentSubmit;
        $[46] = t22;
    } else {
        t22 = $[46];
    }
    let t23;
    if ($[47] !== t21 || $[48] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex space-x-4",
            children: [
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 445,
            columnNumber: 11
        }, this);
        $[47] = t21;
        $[48] = t22;
        $[49] = t23;
    } else {
        t23 = $[49];
    }
    let t24;
    if ($[50] !== t20 || $[51] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            className: "space-y-4",
            children: [
                t18,
                t20,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 454,
            columnNumber: 11
        }, this);
        $[50] = t20;
        $[51] = t23;
        $[52] = t24;
    } else {
        t24 = $[52];
    }
    let t25;
    if ($[53] !== t16 || $[54] !== t24 || $[55] !== t5) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-lg",
            onClick: _EditGoalModalDivOnClick,
            children: [
                t5,
                t16,
                t17,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 463,
            columnNumber: 11
        }, this);
        $[53] = t16;
        $[54] = t24;
        $[55] = t5;
        $[56] = t25;
    } else {
        t25 = $[56];
    }
    let t26;
    if ($[57] !== onClose || $[58] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50",
            onClick: onClose,
            children: t25
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 473,
            columnNumber: 11
        }, this);
        $[57] = onClose;
        $[58] = t25;
        $[59] = t26;
    } else {
        t26 = $[59];
    }
    return t26;
}
_s1(EditGoalModal, "BpeUZHAPKtyLbiIid9C6SpjFGbI=");
_c1 = EditGoalModal;
// --- Componente: Card de Meta (Exibe uma meta) ---
function _EditGoalModalDivOnClick(e_1) {
    return e_1.stopPropagation();
}
function _EditGoalModalHandleEditSubmitAnonymous(error) {
    return console.error("Erro ao atualizar meta:", error);
}
function GoalCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(54);
    if ($[0] !== "964436667bac31285d683169245a4c28e08c62f76a72ac463459c722284726fe") {
        for(let $i = 0; $i < 54; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "964436667bac31285d683169245a4c28e08c62f76a72ac463459c722284726fe";
    }
    const { goal, onEditClick, onDeleteClick } = t0;
    const remainingAmount = goal.target_amount - goal.current_amount;
    const progressPercentage = goal.target_amount > 0 ? goal.current_amount / goal.target_amount * 100 : 100;
    const formatDate = _GoalCardFormatDate;
    let t1;
    if ($[1] !== onEditClick) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onEditClick,
            className: "text-gray-400 hover:text-blue-500 transition-colors",
            title: "Editar/Gerenciar Meta",
            children: "✎"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 508,
            columnNumber: 10
        }, this);
        $[1] = onEditClick;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== onDeleteClick) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onDeleteClick,
            className: "text-gray-400 hover:text-red-500 transition-colors text-xl",
            title: "Deletar meta",
            children: "×"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 516,
            columnNumber: 10
        }, this);
        $[3] = onDeleteClick;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-3 right-3 flex space-x-2",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 524,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== goal.name) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-semibold text-xl text-yellow-400",
            children: goal.name
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 533,
            columnNumber: 10
        }, this);
        $[8] = goal.name;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== progressPercentage) {
        t5 = progressPercentage.toFixed(1);
        $[10] = progressPercentage;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-medium text-yellow-400",
            children: [
                t5,
                "%"
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 549,
            columnNumber: 10
        }, this);
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== t4 || $[15] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center mb-1",
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 557,
            columnNumber: 10
        }, this);
        $[14] = t4;
        $[15] = t6;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== progressPercentage) {
        t8 = progressPercentage.toFixed(1);
        $[17] = progressPercentage;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    const t9 = `${t8}%`;
    let t10;
    if ($[19] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full bg-gray-700 rounded-full h-2.5 mb-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-yellow-500 h-2.5 rounded-full",
                style: {
                    width: t9
                }
            }, void 0, false, {
                fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
                lineNumber: 575,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 575,
            columnNumber: 11
        }, this);
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== goal.current_amount) {
        t11 = goal.current_amount.toLocaleString("pt-BR");
        $[21] = goal.current_amount;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                "R$ ",
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 593,
            columnNumber: 11
        }, this);
        $[23] = t11;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== goal.target_amount) {
        t13 = goal.target_amount.toLocaleString("pt-BR");
        $[25] = goal.target_amount;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                "R$ ",
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 609,
            columnNumber: 11
        }, this);
        $[27] = t13;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] !== t12 || $[30] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center text-sm text-gray-300 mb-4",
            children: [
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 617,
            columnNumber: 11
        }, this);
        $[29] = t12;
        $[30] = t14;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-400",
            children: "Quanto falta:"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 626,
            columnNumber: 11
        }, this);
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    let t17;
    if ($[33] !== remainingAmount) {
        t17 = remainingAmount.toLocaleString("pt-BR");
        $[33] = remainingAmount;
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium text-red-400",
                    children: [
                        "R$ ",
                        t17
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
                    lineNumber: 641,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 641,
            columnNumber: 11
        }, this);
        $[35] = t17;
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    let t19;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-400",
            children: "Prazo:"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 649,
            columnNumber: 11
        }, this);
        $[37] = t19;
    } else {
        t19 = $[37];
    }
    let t20;
    if ($[38] !== goal.deadline) {
        t20 = formatDate(goal.deadline);
        $[38] = goal.deadline;
        $[39] = t20;
    } else {
        t20 = $[39];
    }
    let t21;
    if ($[40] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium",
                    children: t20
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
                    lineNumber: 664,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 664,
            columnNumber: 11
        }, this);
        $[40] = t20;
        $[41] = t21;
    } else {
        t21 = $[41];
    }
    let t22;
    if ($[42] !== goal.notes) {
        t22 = goal.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-400 block",
                    children: "Observações:"
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
                    lineNumber: 672,
                    columnNumber: 30
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-medium text-gray-200",
                    children: goal.notes
                }, void 0, false, {
                    fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
                    lineNumber: 672,
                    columnNumber: 87
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 672,
            columnNumber: 25
        }, this);
        $[42] = goal.notes;
        $[43] = t22;
    } else {
        t22 = $[43];
    }
    let t23;
    if ($[44] !== t18 || $[45] !== t21 || $[46] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2 text-sm",
            children: [
                t18,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 680,
            columnNumber: 11
        }, this);
        $[44] = t18;
        $[45] = t21;
        $[46] = t22;
        $[47] = t23;
    } else {
        t23 = $[47];
    }
    let t24;
    if ($[48] !== t10 || $[49] !== t15 || $[50] !== t23 || $[51] !== t3 || $[52] !== t7) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-800 p-6 rounded-lg shadow-lg relative",
            children: [
                t3,
                t7,
                t10,
                t15,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 690,
            columnNumber: 11
        }, this);
        $[48] = t10;
        $[49] = t15;
        $[50] = t23;
        $[51] = t3;
        $[52] = t7;
        $[53] = t24;
    } else {
        t24 = $[53];
    }
    return t24;
}
_c2 = GoalCard;
// --- Componente Principal da Página ---
function _GoalCardFormatDate(dateString) {
    if (!dateString) {
        return "N/A";
    }
    return new Date(dateString).toLocaleDateString("pt-BR", {
        timeZone: "UTC"
    });
}
function MetasPage() {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "964436667bac31285d683169245a4c28e08c62f76a72ac463459c722284726fe") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "964436667bac31285d683169245a4c28e08c62f76a72ac463459c722284726fe";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [goals, setGoals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [editingGoal, setEditingGoal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "MetasPage[useEffect()]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/goals/`).then({
                    "MetasPage[useEffect() > (anonymous)()]": (response)=>{
                        setGoals(response.data);
                    }
                }["MetasPage[useEffect() > (anonymous)()]"]).catch(_MetasPageUseEffectAnonymous);
            }
        })["MetasPage[useEffect()]"];
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
            "MetasPage[handleGoalAdded]": (newGoal)=>{
                setGoals({
                    "MetasPage[handleGoalAdded > setGoals()]": (prevGoals)=>[
                            newGoal,
                            ...prevGoals
                        ]
                }["MetasPage[handleGoalAdded > setGoals()]"]);
            }
        })["MetasPage[handleGoalAdded]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const handleGoalAdded = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "MetasPage[handleGoalDeleted]": (deletedGoalId)=>{
                if (confirm("Tem certeza que deseja deletar esta meta?")) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`${API_URL}/goals/${deletedGoalId}`).then({
                        "MetasPage[handleGoalDeleted > (anonymous)()]": ()=>{
                            setGoals({
                                "MetasPage[handleGoalDeleted > (anonymous)() > setGoals()]": (prevGoals_0)=>prevGoals_0.filter({
                                        "MetasPage[handleGoalDeleted > (anonymous)() > setGoals() > prevGoals_0.filter()]": (goal)=>goal.id !== deletedGoalId
                                    }["MetasPage[handleGoalDeleted > (anonymous)() > setGoals() > prevGoals_0.filter()]"])
                            }["MetasPage[handleGoalDeleted > (anonymous)() > setGoals()]"]);
                        }
                    }["MetasPage[handleGoalDeleted > (anonymous)()]"]).catch(_MetasPageHandleGoalDeletedAnonymous);
                }
            }
        })["MetasPage[handleGoalDeleted]"];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const handleGoalDeleted = t4;
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "MetasPage[handleGoalUpdated]": (updatedGoal)=>{
                setGoals({
                    "MetasPage[handleGoalUpdated > setGoals()]": (prevGoals_1)=>prevGoals_1.map({
                            "MetasPage[handleGoalUpdated > setGoals() > prevGoals_1.map()]": (goal_0)=>goal_0.id === updatedGoal.id ? updatedGoal : goal_0
                        }["MetasPage[handleGoalUpdated > setGoals() > prevGoals_1.map()]"])
                }["MetasPage[handleGoalUpdated > setGoals()]"]);
            }
        })["MetasPage[handleGoalUpdated]"];
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const handleGoalUpdated = t5;
    let t6;
    if ($[7] !== editingGoal) {
        t6 = editingGoal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditGoalModal, {
            goal: editingGoal,
            onClose: {
                "MetasPage[<EditGoalModal>.onClose]": ()=>setEditingGoal(null)
            }["MetasPage[<EditGoalModal>.onClose]"],
            onGoalUpdated: handleGoalUpdated
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 803,
            columnNumber: 25
        }, this);
        $[7] = editingGoal;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoalCreateForm, {
            onGoalAdded: handleGoalAdded
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 814,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-bold mb-6",
            children: "Suas Metas Atuais"
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 815,
            columnNumber: 10
        }, this);
        $[9] = t7;
        $[10] = t8;
    } else {
        t7 = $[9];
        t8 = $[10];
    }
    let t9;
    if ($[11] !== goals) {
        t9 = goals.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400",
            children: "Você ainda não criou nenhuma meta."
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 824,
            columnNumber: 31
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: goals.map({
                "MetasPage[goals.map()]": (goal_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoalCard, {
                        goal: goal_1,
                        onEditClick: {
                            "MetasPage[goals.map() > <GoalCard>.onEditClick]": ()=>setEditingGoal(goal_1)
                        }["MetasPage[goals.map() > <GoalCard>.onEditClick]"],
                        onDeleteClick: {
                            "MetasPage[goals.map() > <GoalCard>.onDeleteClick]": ()=>handleGoalDeleted(goal_1.id)
                        }["MetasPage[goals.map() > <GoalCard>.onDeleteClick]"]
                    }, goal_1.id, false, {
                        fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
                        lineNumber: 825,
                        columnNumber: 45
                    }, this)
            }["MetasPage[goals.map()]"])
        }, void 0, false, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 824,
            columnNumber: 101
        }, this);
        $[11] = goals;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== t6 || $[14] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$ProjetosdeProgramacao$2f$projeto$2d$financeiro$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t6,
                t7,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/ProjetosdeProgramacao/projeto-financeiro/frontend/app/metas/page.js",
            lineNumber: 838,
            columnNumber: 11
        }, this);
        $[13] = t6;
        $[14] = t9;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    return t10;
}
_s2(MetasPage, "5nCIi6GaVS3630qAXGLrtQPWhJg=");
_c3 = MetasPage;
function _MetasPageHandleGoalDeletedAnonymous(error_0) {
    return console.error("Erro ao deletar meta:", error_0);
}
function _MetasPageUseEffectAnonymous(error) {
    return console.error("Erro ao buscar metas:", error);
}
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "GoalCreateForm");
__turbopack_context__.k.register(_c1, "EditGoalModal");
__turbopack_context__.k.register(_c2, "GoalCard");
__turbopack_context__.k.register(_c3, "MetasPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=80b94_ProjetosdeProgramacao_projeto-financeiro_frontend_app_metas_page_88838f82.js.map