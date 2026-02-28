module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/components/ui/SourceCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SourceCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
function SourceCard({ source }) {
    const getEmbedUrl = (url)=>{
        if (url.includes("youtube.com/watch?v=")) {
            const videoId = url.split("v=")[1];
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return null;
    };
    const embedUrl = source.url ? getEmbedUrl(source.url) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border rounded-lg overflow-hidden h-full hover:shadow-lg transition-shadow",
        children: [
            embedUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aspect-w-16 aspect-h-9",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                    src: embedUrl,
                    frameBorder: "0",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                    allowFullScreen: true,
                    className: "w-full h-full"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SourceCard.tsx",
                    lineNumber: 23,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SourceCard.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this) : source.thumbnailUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: source.url || '#',
                target: "_blank",
                rel: "noopener noreferrer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: source.thumbnailUrl,
                    alt: source.title,
                    className: "w-full h-48 object-contain bg-gray-100"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SourceCard.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SourceCard.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold mb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: source.url || '#',
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: source.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/SourceCard.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SourceCard.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-2",
                        children: [
                            "by ",
                            source.author
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/SourceCard.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mb-4",
                        children: source.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SourceCard.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm",
                                children: source.type
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/SourceCard.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            (source.topicIds || []).map((topicId)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm",
                                    children: [
                                        "Topic ",
                                        topicId
                                    ]
                                }, topicId, true, {
                                    fileName: "[project]/src/components/ui/SourceCard.tsx",
                                    lineNumber: 47,
                                    columnNumber: 14
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/SourceCard.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/SourceCard.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/SourceCard.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/sources.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sources",
    ()=>sources
]);
const sources = [
    {
        id: '1',
        title: 'Cynical Theories: How Activist Scholarship Made Everything about Race, Gender, and Identity―and Why This Harms Everybody',
        author: 'Helen Pluckrose & James Lindsay',
        type: 'book',
        url: 'https://www.amazon.com/Cynical-Theories-Scholarship-Everything-Identity_and/dp/1634312023',
        description: 'An overview of the evolution of postmodern thought and its application in social justice scholarship.',
        ideologyIds: [
            '1'
        ],
        thumbnailUrl: 'https://m.media-amazon.com/images/I/51sA9XeCFwL._SL1000_.jpg'
    },
    {
        id: '2',
        title: 'The Madness of Crowds: Gender, Race and Identity',
        author: 'Douglas Murray',
        type: 'book',
        url: 'https://www.amazon.com/Madness-Crowds-Gender-Race-Identity/dp/1635579988',
        description: 'An examination of the key battlegrounds in the new culture wars: gay rights, feminism, race, and trans rights.',
        ideologyIds: [
            '1',
            '2'
        ],
        thumbnailUrl: 'https://m.media-amazon.com/images/I/81xVz3oh2hL._SL1500_.jpg'
    },
    {
        id: '3',
        title: 'What Is Critical Race Theory and Why Is It Under Attack?',
        author: 'Stephen Sawchuk',
        type: 'article',
        url: 'https://www.edweek.org/leadership/what-is-critical-race-theory-and-why-is-it-under-attack/2021/05',
        description: 'An article from Education Week explaining the core tenets of CRT.',
        ideologyIds: [
            '2'
        ]
    },
    {
        id: '4',
        title: 'The Ugly Truth About Critical Race Theory - Christopher Rufo',
        author: 'Triggernometry',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=PlF7AnjmaMI',
        description: 'A YouTube video discussing CRT with Christopher Rufo.',
        ideologyIds: [
            '2'
        ]
    },
    {
        id: '5',
        title: 'The End of Race Politics: Arguments for a Colorblind America',
        author: 'Coleman Hughes',
        type: 'book',
        url: 'https://www.amazon.com/End-Race-Politics-Arguments-Colorblind/dp/0593332458',
        description: 'A case for colorblind principles in public policy and civic life, with critiques of race-based political frameworks.',
        ideologyIds: [
            '1',
            '2'
        ],
        thumbnailUrl: 'https://covers3.booksamillion.com/covers/bam/0/59/333/245/0593332458_b.jpg'
    },
    {
        id: '6',
        title: 'Social Justice Fallacies',
        author: 'Thomas Sowell',
        type: 'book',
        url: 'https://www.amazon.com/Social-Justice-Fallacies-Thomas-Sowell/dp/1541603923',
        description: 'A critique of common claims made under the banner of social justice, focused on tradeoffs, incentives, and real-world outcomes.',
        ideologyIds: [
            '1',
            '2'
        ],
        thumbnailUrl: 'https://www.hachettebookgroup.com/wp-content/uploads/2023/10/9781541603929.jpg'
    },
    {
        id: '7',
        title: 'Woke Racism: How a New Religion Has Betrayed Black America',
        author: 'John McWhorter',
        type: 'book',
        url: 'https://www.amazon.com/Woke-Racism-Religion-Betrayed-America/dp/0593423062',
        description: 'An argument that modern anti-racism functions like a secular religion, with unintended consequences for public discourse and policy.',
        ideologyIds: [
            '1',
            '2'
        ],
        thumbnailUrl: 'https://www.publishersweekly.com/cover/9780593423066'
    }
];
}),
"[project]/src/app/sources/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SourcesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SourceCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SourceCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$sources$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/sources.ts [app-rsc] (ecmascript)");
;
;
;
function SourcesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-8",
                children: "Sources Library"
            }, void 0, false, {
                fileName: "[project]/src/app/sources/page.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$sources$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sources"].map((source)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SourceCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        source: source
                    }, source.id, false, {
                        fileName: "[project]/src/app/sources/page.tsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/sources/page.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/sources/page.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/sources/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/sources/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7b390322._.js.map