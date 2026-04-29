module.exports = [
"[externals]/mongoose [external] (mongoose, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongoose", () => require("mongoose"));

module.exports = mod;
}),
"[project]/lib/database.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const MONGODB_URI = process.env.MONGODB_URI;
const connectToDatabase = async ()=>{
    if (!MONGODB_URI) {
        console.warn("MONGODB_URI is not defined. Features requiring database access will be disabled.");
        return;
    }
    const connectionState = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connection.readyState;
    if (connectionState === 1) {
        console.log("Database connection has already been established.");
        return;
    }
    if (connectionState === 2) {
        console.log("Establishing database connection...");
        return;
    }
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connect(MONGODB_URI, {
            dbName: "portfolio",
            bufferCommands: true
        });
        console.log("Database connection established successfully.");
    } catch (err) {
        console.error("Database connection failed: ", err.message);
    // Allow the app to continue in offline mode rather than throwing
    }
};
const __TURBOPACK__default__export__ = connectToDatabase;
}),
"[project]/model/views.model.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const viewSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    views: {
        type: Number,
        default: 0
    }
});
const View = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.View || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("View", viewSchema);
const __TURBOPACK__default__export__ = View;
}),
"[project]/app/actions/getAndSetViewsServerAction.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"004edf4a3af01f7a4ffcd5e65008372f4e51512f5e":"getViewsServerAction","00af6d1fe062475be6bea597588eef73af57492a90":"setViewsServerAction"},"",""] */ __turbopack_context__.s([
    "getViewsServerAction",
    ()=>getViewsServerAction,
    "setViewsServerAction",
    ()=>setViewsServerAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$database$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/database.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$model$2f$views$2e$model$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/model/views.model.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function getViewsServerAction() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$database$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        // If no DB connection, return fallback
        if (!process.env.MONGODB_URI) {
            return {
                success: true,
                message: 1247
            };
        }
        const viewDoc = await __TURBOPACK__imported__module__$5b$project$5d2f$model$2f$views$2e$model$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({});
        return {
            success: true,
            message: viewDoc?.views ?? 1247
        };
    } catch (error) {
        return {
            success: true,
            message: 1247
        };
    }
}
async function setViewsServerAction() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$database$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$model$2f$views$2e$model$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOneAndUpdate({}, {
            $inc: {
                views: 1
            }
        }, {
            new: true,
            upsert: true
        });
        return {
            success: true,
            message: 'Views set successfully'
        };
    } catch (error) {
        return {
            success: false,
            message: 'Failed to set views'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getViewsServerAction,
    setViewsServerAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getViewsServerAction, "004edf4a3af01f7a4ffcd5e65008372f4e51512f5e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(setViewsServerAction, "00af6d1fe062475be6bea597588eef73af57492a90", null);
}),
"[project]/model/loveCount.model.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const loveCountSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    count: {
        type: Number,
        default: 0
    }
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.LoveCount || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("LoveCount", loveCountSchema);
}),
"[project]/app/actions/getAndSetLoveCountServerAction.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0002d7f0bd1fe237a85499fb66db3369e0f7b0f1bb":"setLoveCountServerAction","009eb1851b2623e197798b8d037aec587083d8283f":"getLoveCountServerAction"},"",""] */ __turbopack_context__.s([
    "getLoveCountServerAction",
    ()=>getLoveCountServerAction,
    "setLoveCountServerAction",
    ()=>setLoveCountServerAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$database$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/database.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$model$2f$loveCount$2e$model$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/model/loveCount.model.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function getLoveCountServerAction() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$database$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        if (!process.env.MONGODB_URI) {
            return {
                success: true,
                count: 84
            };
        }
        const loveDoc = await __TURBOPACK__imported__module__$5b$project$5d2f$model$2f$loveCount$2e$model$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({});
        return {
            success: true,
            count: loveDoc?.count ?? 84
        };
    } catch (error) {
        return {
            success: true,
            count: 84
        };
    }
}
async function setLoveCountServerAction() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$database$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const loveCount = await __TURBOPACK__imported__module__$5b$project$5d2f$model$2f$loveCount$2e$model$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOneAndUpdate({}, {
            $inc: {
                count: 1
            }
        }, {
            new: true,
            upsert: true
        });
        return {
            success: true,
            count: loveCount.count
        };
    } catch (error) {
        return {
            success: false,
            message: "Failed to update love count"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getLoveCountServerAction,
    setLoveCountServerAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLoveCountServerAction, "009eb1851b2623e197798b8d037aec587083d8283f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(setLoveCountServerAction, "0002d7f0bd1fe237a85499fb66db3369e0f7b0f1bb", null);
}),
"[project]/.next-internal/server/app/_not-found/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/getAndSetViewsServerAction.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/getAndSetLoveCountServerAction.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$getAndSetViewsServerAction$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/getAndSetViewsServerAction.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$getAndSetLoveCountServerAction$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/getAndSetLoveCountServerAction.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/.next-internal/server/app/_not-found/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/getAndSetViewsServerAction.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/getAndSetLoveCountServerAction.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "009eb1851b2623e197798b8d037aec587083d8283f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$getAndSetLoveCountServerAction$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLoveCountServerAction"],
    "00af6d1fe062475be6bea597588eef73af57492a90",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$getAndSetViewsServerAction$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setViewsServerAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$_not$2d$found$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$getAndSetViewsServerAction$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$getAndSetLoveCountServerAction$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/_not-found/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/getAndSetViewsServerAction.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/actions/getAndSetLoveCountServerAction.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$getAndSetViewsServerAction$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/getAndSetViewsServerAction.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$getAndSetLoveCountServerAction$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/getAndSetLoveCountServerAction.ts [app-rsc] (ecmascript)");
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0da0098b._.js.map