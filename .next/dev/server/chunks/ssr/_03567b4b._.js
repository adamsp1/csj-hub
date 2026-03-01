module.exports = [
"[project]/src/lib/data/glossary.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"term":"Deconstruction","definition":"A method of critical analysis associated with Jacques Derrida that examines how texts undermine their own assumptions and reveal internal contradictions, showing that meaning is unstable and relational."},{"term":"Power-Knowledge","definition":"A concept associated with Michel Foucault describing how power and knowledge are intertwined, with institutions shaping what is accepted as truth and using knowledge to reinforce power structures."},{"term":"Metanarratives","definition":"Grand, overarching stories or theories that claim to explain historical events, social structures, or knowledge universally. Postmodern thinkers are skeptical of such totalizing explanations."},{"term":"Simulacra and Simulation","definition":"A concept developed by Jean Baudrillard suggesting that representations or symbols can replace or become more real than the reality they depict, leading to a world dominated by signs and images."},{"term":"Hyperreality","definition":"A condition in which the distinction between reality and representation breaks down, and simulated experiences are perceived as more real than actual reality."},{"term":"Systemic Racism","definition":"A form of racism embedded in social, legal, and institutional systems, producing unequal outcomes across areas such as criminal justice, employment, housing, health care, political power, and education."},{"term":"Intersectionality","definition":"A framework introduced by Kimberlé Crenshaw that examines how overlapping social identities such as race, gender, and class interact to produce unique experiences of discrimination or privilege."},{"term":"White Privilege","definition":"The idea that white individuals benefit from unearned social advantages or protections within societies structured by racial hierarchies."},{"term":"Counter-storytelling","definition":"A method used in Critical Race Theory that centers the narratives and lived experiences of marginalized groups to challenge dominant cultural accounts."},{"term":"Interest Convergence","definition":"A theory associated with Derrick Bell proposing that advances for racial justice occur primarily when they align with the interests of dominant groups."}]);}),
"[project]/src/data/glossary.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "glossary",
    ()=>glossary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$glossary$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/data/glossary.json (json)");
;
const glossary = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$glossary$2e$json__$28$json$29$__["default"];
}),
"[project]/src/app/glossary/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlossaryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$glossary$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/glossary.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function GlossaryPage() {
    const [activeTerm, setActiveTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const suppressUntilRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$glossary$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["glossary"].length > 0) {
            setActiveTerm(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$glossary$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["glossary"][0].term);
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
        const observer = new IntersectionObserver((entries)=>{
            // If we've recently clicked to navigate, ignore observer updates
            if (Date.now() < suppressUntilRef.current) return;
            // From intersecting entries pick the one with the largest intersectionRatio
            const visible = entries.filter((e)=>e.isIntersecting);
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
            if (documentHeight - scrollPosition < 120 && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$glossary$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["glossary"].length > 0) {
                setActiveTerm(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$glossary$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["glossary"][__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$glossary$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["glossary"].length - 1].term);
            }
        }, observerOptions);
        // expose suppress ref so click handler can update it
        window.__glossarySuppress = suppressUntilRef;
        window.__glossaryObserver = observer;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$glossary$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["glossary"].forEach((entry)=>{
            const element = document.getElementById(`term-${entry.term}`);
            if (element) {
                observer.observe(element);
            }
        });
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$glossary$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["glossary"].forEach((entry)=>{
                const element = document.getElementById(`term-${entry.term}`);
                if (element) {
                    observer.unobserve(element);
                }
            });
            try {
                delete window.__glossaryObserver;
                delete window.__glossarySuppress;
            } catch (e) {}
        };
    }, []);
    // Scroll listener to synchronize active term during manual scrolling
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const refY = 120; // offset from top to consider "active"
        let ticking = false;
        const onScrollCheck = ()=>{
            if (Date.now() < suppressUntilRef.current) return;
            let closest = null;
            let closestDistance = Infinity;
            for (const entry of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$glossary$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["glossary"]){
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
        };
        const handler = ()=>{
            if (!ticking) {
                ticking = true;
                window.requestAnimationFrame(()=>{
                    onScrollCheck();
                    ticking = false;
                });
            }
        };
        window.addEventListener("scroll", handler, {
            passive: true
        });
        // run once to initialize
        onScrollCheck();
        return ()=>window.removeEventListener("scroll", handler);
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed left-6 top-32 z-30 bg-white rounded-lg border border-gray-200 shadow-lg p-4 w-48 max-h-[calc(100vh-150px)] overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-bold text-gray-900 mb-4 px-2",
                        children: "Terms"
                    }, void 0, false, {
                        fileName: "[project]/src/app/glossary/page.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "space-y-1",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$glossary$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["glossary"].map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pl-0 lg:pl-64",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold mb-8",
                        children: "Glossary"
                    }, void 0, false, {
                        fileName: "[project]/src/app/glossary/page.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$glossary$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["glossary"].map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: `term-${entry.term}`,
                                className: "bg-white rounded-lg p-6 border border-gray-100 shadow-sm scroll-mt-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "text-2xl font-bold text-gray-900 mb-3",
                                        children: entry.term
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/glossary/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
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
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=_03567b4b._.js.map