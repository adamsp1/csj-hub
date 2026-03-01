(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/data/glossary.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"term":"Deconstruction","definition":"A method of critical analysis associated with Jacques Derrida that examines how texts undermine their own assumptions and reveal internal contradictions, showing that meaning is unstable and relational."},{"term":"Power-Knowledge","definition":"A concept associated with Michel Foucault describing how power and knowledge are intertwined, with institutions shaping what is accepted as truth and using knowledge to reinforce power structures."},{"term":"Metanarratives","definition":"Grand, overarching stories or theories that claim to explain historical events, social structures, or knowledge universally. Postmodern thinkers are skeptical of such totalizing explanations."},{"term":"Simulacra and Simulation","definition":"A concept developed by Jean Baudrillard suggesting that representations or symbols can replace or become more real than the reality they depict, leading to a world dominated by signs and images."},{"term":"Hyperreality","definition":"A condition in which the distinction between reality and representation breaks down, and simulated experiences are perceived as more real than actual reality."},{"term":"Systemic Racism","definition":"A form of racism embedded in social, legal, and institutional systems, producing unequal outcomes across areas such as criminal justice, employment, housing, health care, political power, and education."},{"term":"Intersectionality","definition":"A framework introduced by Kimberlé Crenshaw that examines how overlapping social identities such as race, gender, and class interact to produce unique experiences of discrimination or privilege."},{"term":"White Privilege","definition":"The idea that white individuals benefit from unearned social advantages or protections within societies structured by racial hierarchies."},{"term":"Counter-storytelling","definition":"A method used in Critical Race Theory that centers the narratives and lived experiences of marginalized groups to challenge dominant cultural accounts."},{"term":"Interest Convergence","definition":"A theory associated with Derrick Bell proposing that advances for racial justice occur primarily when they align with the interests of dominant groups."}]);}),
"[project]/src/data/glossary.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "glossary",
    ()=>glossary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$glossary$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/data/glossary.json (json)");
;
const glossary = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$glossary$2e$json__$28$json$29$__["default"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/glossary/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlossaryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$glossary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/glossary.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function GlossaryPage() {
    _s();
    const [activeTerm, setActiveTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const suppressUntilRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlossaryPage.useEffect": ()=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$glossary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["glossary"].length > 0) {
                setActiveTerm(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$glossary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["glossary"][0].term);
            }
            // use the component-level ref for suppression
            const observerOptions = {
                root: null,
                rootMargin: "-100px 0px -20% 0px",
                threshold: [
                    0,
                    0.25,
                    0.5,
                    0.75,
                    1
                ]
            };
            const observer = new IntersectionObserver({
                "GlossaryPage.useEffect": (entries)=>{
                    // If we've recently clicked to navigate, ignore observer updates
                    if (Date.now() < suppressUntilRef.current) return;
                    // From intersecting entries pick the one with the largest intersectionRatio
                    const visible = entries.filter({
                        "GlossaryPage.useEffect.visible": (e)=>e.isIntersecting
                    }["GlossaryPage.useEffect.visible"]);
                    if (visible.length > 0) {
                        let chosen = visible[0];
                        for (const v of visible){
                            if ((v.intersectionRatio ?? 0) > (chosen.intersectionRatio ?? 0)) {
                                chosen = v;
                            }
                        }
                        const termId = chosen.target.id;
                        const term = termId.replace("term-", "");
                        setActiveTerm(term);
                        return;
                    }
                    // Fallback: if no entries intersect and we're at the very bottom, mark last
                    const scrollPosition = window.scrollY + window.innerHeight;
                    const documentHeight = document.documentElement.scrollHeight;
                    if (documentHeight - scrollPosition < 120 && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$glossary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["glossary"].length > 0) {
                        setActiveTerm(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$glossary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["glossary"][__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$glossary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["glossary"].length - 1].term);
                    }
                }
            }["GlossaryPage.useEffect"], observerOptions);
            // expose suppress ref so click handler can update it
            window.__glossarySuppress = suppressUntilRef;
            window.__glossaryObserver = observer;
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$glossary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["glossary"].forEach({
                "GlossaryPage.useEffect": (entry)=>{
                    const element = document.getElementById(`term-${entry.term}`);
                    if (element) {
                        observer.observe(element);
                    }
                }
            }["GlossaryPage.useEffect"]);
            return ({
                "GlossaryPage.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$glossary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["glossary"].forEach({
                        "GlossaryPage.useEffect": (entry)=>{
                            const element = document.getElementById(`term-${entry.term}`);
                            if (element) {
                                observer.unobserve(element);
                            }
                        }
                    }["GlossaryPage.useEffect"]);
                    try {
                        delete window.__glossaryObserver;
                        delete window.__glossarySuppress;
                    } catch (e) {}
                }
            })["GlossaryPage.useEffect"];
        }
    }["GlossaryPage.useEffect"], []);
    // Scroll listener to synchronize active term during manual scrolling
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlossaryPage.useEffect": ()=>{
            const refY = 120; // offset from top to consider "active"
            let ticking = false;
            const onScrollCheck = {
                "GlossaryPage.useEffect.onScrollCheck": ()=>{
                    if (Date.now() < suppressUntilRef.current) return;
                    let closest = null;
                    let closestDistance = Infinity;
                    for (const entry of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$glossary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["glossary"]){
                        const el = document.getElementById(`term-${entry.term}`);
                        if (!el) continue;
                        const rect = el.getBoundingClientRect();
                        const distance = Math.abs(rect.top - refY);
                        if (distance < closestDistance) {
                            closestDistance = distance;
                            closest = entry.term;
                        }
                    }
                    if (closest && closest !== activeTerm) {
                        setActiveTerm(closest);
                    }
                }
            }["GlossaryPage.useEffect.onScrollCheck"];
            const handler = {
                "GlossaryPage.useEffect.handler": ()=>{
                    if (!ticking) {
                        ticking = true;
                        window.requestAnimationFrame({
                            "GlossaryPage.useEffect.handler": ()=>{
                                onScrollCheck();
                                ticking = false;
                            }
                        }["GlossaryPage.useEffect.handler"]);
                    }
                }
            }["GlossaryPage.useEffect.handler"];
            window.addEventListener("scroll", handler, {
                passive: true
            });
            // run once to initialize
            onScrollCheck();
            return ({
                "GlossaryPage.useEffect": ()=>window.removeEventListener("scroll", handler)
            })["GlossaryPage.useEffect"];
        }
    }["GlossaryPage.useEffect"], [
        activeTerm
    ]);
    const handleScroll = (term)=>{
        // Immediately set the active term and suppress observer updates while scrolling
        setActiveTerm(term);
        const suppress = window.__glossarySuppress;
        if (suppress) suppress.current = Date.now() + 900;
        const element = document.getElementById(`term-${term}`);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed left-6 top-32 z-30 bg-white rounded-lg border border-gray-200 shadow-lg p-4 w-48 max-h-[calc(100vh-150px)] overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-bold text-gray-900 mb-4 px-2",
                        children: "Terms"
                    }, void 0, false, {
                        fileName: "[project]/src/app/glossary/page.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "space-y-1",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$glossary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["glossary"].map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleScroll(entry.term),
                                className: `w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${activeTerm === entry.term ? "bg-blue-100 text-blue-700 font-semibold" : "text-gray-600 hover:bg-gray-100"}`,
                                children: entry.term
                            }, entry.term, false, {
                                fileName: "[project]/src/app/glossary/page.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/glossary/page.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/glossary/page.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pl-0 lg:pl-64",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold mb-8",
                        children: "Glossary"
                    }, void 0, false, {
                        fileName: "[project]/src/app/glossary/page.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$glossary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["glossary"].map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: `term-${entry.term}`,
                                className: "bg-white rounded-lg p-6 border border-gray-100 shadow-sm scroll-mt-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "text-2xl font-bold text-gray-900 mb-3",
                                        children: entry.term
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/glossary/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "text-gray-700 leading-relaxed",
                                        children: entry.definition
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/glossary/page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, entry.term, true, {
                                fileName: "[project]/src/app/glossary/page.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/glossary/page.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/glossary/page.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/glossary/page.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_s(GlossaryPage, "mNmplldQQ8ldbJMxQbGtHJquPhk=");
_c = GlossaryPage;
var _c;
__turbopack_context__.k.register(_c, "GlossaryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_4b3f6769._.js.map