(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ObsidianFlux.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$p5$2f$dist$2f$app$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/p5/dist/app.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$p5$2f$dist$2f$main$2d$H_nu4eDs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/p5/dist/main-H_nu4eDs.js [app-client] (ecmascript) <export p as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const HyperMatrix = ()=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { theme, resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    // Handle Hydration
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HyperMatrix.useEffect": ()=>{
            setMounted(true);
        }
    }["HyperMatrix.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HyperMatrix.useEffect": ()=>{
            if (!mounted || !containerRef.current) return;
            let p5Instance;
            const sketch = {
                "HyperMatrix.useEffect.sketch": (p)=>{
                    let grid = [];
                    let cols = 0;
                    let rows = 0;
                    const spacing = 50;
                    const mouseRange = 400;
                    p.setup = ({
                        "HyperMatrix.useEffect.sketch": ()=>{
                            const w = window.innerWidth;
                            const h = window.innerHeight;
                            p.createCanvas(w, h, p.WEBGL).parent(containerRef.current);
                            p.pixelDensity(1); // Performance boost
                            initGrid();
                        }
                    })["HyperMatrix.useEffect.sketch"];
                    const initGrid = {
                        "HyperMatrix.useEffect.sketch.initGrid": ()=>{
                            grid = [];
                            // Overscan by 60% for deep edge coverage during movement
                            const w = p.width * 1.6;
                            const h = p.height * 1.6;
                            cols = Math.ceil(w / spacing);
                            rows = Math.ceil(h / spacing);
                            const startX = -w / 2;
                            const startY = -h / 2;
                            for(let y = 0; y < rows; y++){
                                for(let x = 0; x < cols; x++){
                                    grid.push({
                                        x: startX + x * spacing,
                                        y: startY + y * spacing,
                                        z: 0
                                    });
                                }
                            }
                        }
                    }["HyperMatrix.useEffect.sketch.initGrid"];
                    p.draw = ({
                        "HyperMatrix.useEffect.sketch": ()=>{
                            const currentTheme = resolvedTheme || theme || 'dark';
                            const isDark = currentTheme === 'dark';
                            // Solid background to clear frames
                            p.background(isDark ? 0 : 255);
                            // WebGL Mouse coords
                            const mx = p.mouseX - p.width / 2;
                            const my = p.mouseY - p.height / 2;
                            // Camera Dynamics (End-to-End coverage logic)
                            p.rotateX(p.PI * 0.15 + p.map(p.mouseY, 0, p.height, 0.1, -0.1));
                            p.rotateY(p.map(p.mouseX, 0, p.width, -0.1, 0.1));
                            p.translate(0, 0, -50);
                            p.noFill();
                            // Multi-pass Mesh Rendering
                            for(let y = 0; y < rows; y++){
                                p.beginShape(p.LINES);
                                for(let x = 0; x < cols; x++){
                                    const idx = y * cols + x;
                                    const pt = grid[idx];
                                    const distToMouse = p.dist(mx, my, pt.x, pt.y);
                                    const targetZ = distToMouse < mouseRange ? p.map(distToMouse, 0, mouseRange, 220, 0, true) : 0;
                                    pt.z = p.lerp(pt.z, targetZ, 0.1);
                                    const alpha = p.map(distToMouse, 0, mouseRange * 2, isDark ? 255 : 200, isDark ? 30 : 10, true);
                                    p.stroke(isDark ? 255 : 0, isDark ? 160 : 100, isDark ? 0 : 255, alpha);
                                    // Connect horizontal
                                    if (x < cols - 1) {
                                        const nextX = grid[idx + 1];
                                        p.strokeWeight(distToMouse < mouseRange ? 1.6 : 0.8);
                                        p.vertex(pt.x, pt.y, pt.z);
                                        p.vertex(nextX.x, nextX.y, nextX.z);
                                    }
                                    // Connect vertical
                                    if (y < rows - 1) {
                                        const nextY = grid[idx + cols];
                                        p.strokeWeight(distToMouse < mouseRange ? 1.6 : 0.8);
                                        p.vertex(pt.x, pt.y, pt.z);
                                        p.vertex(nextY.x, nextY.y, nextY.z);
                                    }
                                }
                                p.endShape();
                            }
                            // Hyper-Accents
                            if (p.frameCount % 2 === 0) {
                                p.strokeWeight(3);
                                for(let i = 0; i < 30; i++){
                                    const idx = Math.floor(p.random(grid.length));
                                    const pt = grid[idx];
                                    if (p.dist(mx, my, pt.x, pt.y) < mouseRange * 1.2) {
                                        p.stroke(isDark ? 255 : 0, isDark ? 200 : 120, 0, 180);
                                        p.point(pt.x, pt.y, pt.z + 5);
                                    }
                                }
                            }
                        }
                    })["HyperMatrix.useEffect.sketch"];
                    p.windowResized = ({
                        "HyperMatrix.useEffect.sketch": ()=>{
                            p.resizeCanvas(window.innerWidth, window.innerHeight);
                            initGrid();
                        }
                    })["HyperMatrix.useEffect.sketch"];
                }
            }["HyperMatrix.useEffect.sketch"];
            p5Instance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$p5$2f$dist$2f$main$2d$H_nu4eDs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__default$3e$__["default"](sketch);
            return ({
                "HyperMatrix.useEffect": ()=>{
                    p5Instance.remove();
                }
            })["HyperMatrix.useEffect"];
        }
    }["HyperMatrix.useEffect"], [
        mounted,
        theme,
        resolvedTheme
    ]);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 pointer-events-none",
        style: {
            zIndex: -10
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "absolute inset-0 w-full h-full block",
                style: {
                    zIndex: -1
                }
            }, void 0, false, {
                fileName: "[project]/components/ObsidianFlux.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 noise-overlay opacity-[0.01]"
            }, void 0, false, {
                fileName: "[project]/components/ObsidianFlux.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ObsidianFlux.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HyperMatrix, "1AvdFZDOOLgXx4K9ujODOPEjmHU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = HyperMatrix;
const __TURBOPACK__default__export__ = HyperMatrix;
var _c;
__turbopack_context__.k.register(_c, "HyperMatrix");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ObsidianFlux.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/ObsidianFlux.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_ObsidianFlux_tsx_e1152337._.js.map