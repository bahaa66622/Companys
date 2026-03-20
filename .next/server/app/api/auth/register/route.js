"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/register/route";
exports.ids = ["app/api/auth/register/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fregister%2Froute&page=%2Fapi%2Fauth%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Froute.ts&appDir=D%3A%5CPROJECT%5CCompanys_X%5CCompanys%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CPROJECT%5CCompanys_X%5CCompanys&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fregister%2Froute&page=%2Fapi%2Fauth%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Froute.ts&appDir=D%3A%5CPROJECT%5CCompanys_X%5CCompanys%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CPROJECT%5CCompanys_X%5CCompanys&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_PROJECT_Companys_X_Companys_app_api_auth_register_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/register/route.ts */ \"(rsc)/./app/api/auth/register/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/register/route\",\n        pathname: \"/api/auth/register\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/register/route\"\n    },\n    resolvedPagePath: \"D:\\\\PROJECT\\\\Companys_X\\\\Companys\\\\app\\\\api\\\\auth\\\\register\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_PROJECT_Companys_X_Companys_app_api_auth_register_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/register/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGcmVnaXN0ZXIlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZyZWdpc3RlciUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZyZWdpc3RlciUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDUFJPSkVDVCU1Q0NvbXBhbnlzX1glNUNDb21wYW55cyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q1BST0pFQ1QlNUNDb21wYW55c19YJTVDQ29tcGFueXMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3FCO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29tcGFueS1tYW5hZ2VtZW50LXN5c3RlbS8/YmU0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxQUk9KRUNUXFxcXENvbXBhbnlzX1hcXFxcQ29tcGFueXNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXHJlZ2lzdGVyXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL3JlZ2lzdGVyL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9yZWdpc3RlclwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9yZWdpc3Rlci9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXFBST0pFQ1RcXFxcQ29tcGFueXNfWFxcXFxDb21wYW55c1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxccmVnaXN0ZXJcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvcmVnaXN0ZXIvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fregister%2Froute&page=%2Fapi%2Fauth%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Froute.ts&appDir=D%3A%5CPROJECT%5CCompanys_X%5CCompanys%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CPROJECT%5CCompanys_X%5CCompanys&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/register/route.ts":
/*!****************************************!*\
  !*** ./app/api/auth/register/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/v3/types.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma/index.ts\");\n/* harmony import */ var _lib_auth_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/auth/session */ \"(rsc)/./lib/auth/session.ts\");\n/* harmony import */ var _lib_utils_hash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/utils/hash */ \"(rsc)/./lib/utils/hash.ts\");\n/* harmony import */ var _lib_utils_response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/utils/response */ \"(rsc)/./lib/utils/response.ts\");\n\n\n\n\n\n\n\nconst schema = zod__WEBPACK_IMPORTED_MODULE_6__.object({\n    name: zod__WEBPACK_IMPORTED_MODULE_6__.string().min(2),\n    email: zod__WEBPACK_IMPORTED_MODULE_6__.string().email(),\n    password: zod__WEBPACK_IMPORTED_MODULE_6__.string().min(6),\n    role: zod__WEBPACK_IMPORTED_MODULE_6__.nativeEnum(_prisma_client__WEBPACK_IMPORTED_MODULE_1__.Role)\n});\nasync function POST(req) {\n    const session = await (0,_lib_auth_session__WEBPACK_IMPORTED_MODULE_3__.getAuthSession)();\n    if (session?.user.role !== _prisma_client__WEBPACK_IMPORTED_MODULE_1__.Role.SUPER_ADMIN) return (0,_lib_utils_response__WEBPACK_IMPORTED_MODULE_5__.jsonError)(\"Forbidden\", 403);\n    const parsed = schema.safeParse(await req.json());\n    if (!parsed.success) return (0,_lib_utils_response__WEBPACK_IMPORTED_MODULE_5__.jsonError)(\"Invalid payload\", 422);\n    const exists = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n        where: {\n            email: parsed.data.email\n        }\n    });\n    if (exists) return (0,_lib_utils_response__WEBPACK_IMPORTED_MODULE_5__.jsonError)(\"Email already exists\", 409);\n    const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.create({\n        data: {\n            ...parsed.data,\n            password: await (0,_lib_utils_hash__WEBPACK_IMPORTED_MODULE_4__.hashPassword)(parsed.data.password)\n        },\n        select: {\n            id: true,\n            email: true\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(user, {\n        status: 201\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvcmVnaXN0ZXIvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdEO0FBQ2hDO0FBQ2M7QUFDQTtBQUNjO0FBQ0o7QUFDQztBQUVqRCxNQUFNTyxTQUFTTix1Q0FBUSxDQUFDO0lBQ3RCUSxNQUFNUix1Q0FBUSxHQUFHVSxHQUFHLENBQUM7SUFDckJDLE9BQU9YLHVDQUFRLEdBQUdXLEtBQUs7SUFDdkJDLFVBQVVaLHVDQUFRLEdBQUdVLEdBQUcsQ0FBQztJQUN6QkcsTUFBTWIsMkNBQVksQ0FBQ0MsZ0RBQUlBO0FBQ3pCO0FBRU8sZUFBZWMsS0FBS0MsR0FBZ0I7SUFDekMsTUFBTUMsVUFBVSxNQUFNZCxpRUFBY0E7SUFDcEMsSUFBSWMsU0FBU0MsS0FBS0wsU0FBU1osZ0RBQUlBLENBQUNrQixXQUFXLEVBQUUsT0FBT2QsOERBQVNBLENBQUMsYUFBYTtJQUUzRSxNQUFNZSxTQUFTZCxPQUFPZSxTQUFTLENBQUMsTUFBTUwsSUFBSU0sSUFBSTtJQUM5QyxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRSxPQUFPbEIsOERBQVNBLENBQUMsbUJBQW1CO0lBRXpELE1BQU1tQixTQUFTLE1BQU10QiwrQ0FBTUEsQ0FBQ2dCLElBQUksQ0FBQ08sVUFBVSxDQUFDO1FBQUVDLE9BQU87WUFBRWYsT0FBT1MsT0FBT08sSUFBSSxDQUFDaEIsS0FBSztRQUFDO0lBQUU7SUFDbEYsSUFBSWEsUUFBUSxPQUFPbkIsOERBQVNBLENBQUMsd0JBQXdCO0lBRXJELE1BQU1hLE9BQU8sTUFBTWhCLCtDQUFNQSxDQUFDZ0IsSUFBSSxDQUFDVSxNQUFNLENBQUM7UUFDcENELE1BQU07WUFDSixHQUFHUCxPQUFPTyxJQUFJO1lBQ2RmLFVBQVUsTUFBTVIsNkRBQVlBLENBQUNnQixPQUFPTyxJQUFJLENBQUNmLFFBQVE7UUFDbkQ7UUFDQWlCLFFBQVE7WUFBRUMsSUFBSTtZQUFNbkIsT0FBTztRQUFLO0lBQ2xDO0lBRUEsT0FBT1oscURBQVlBLENBQUN1QixJQUFJLENBQUNKLE1BQU07UUFBRWEsUUFBUTtJQUFJO0FBQy9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29tcGFueS1tYW5hZ2VtZW50LXN5c3RlbS8uL2FwcC9hcGkvYXV0aC9yZWdpc3Rlci9yb3V0ZS50cz80YThhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcclxuaW1wb3J0IHsgUm9sZSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcbmltcG9ydCB7IGdldEF1dGhTZXNzaW9uIH0gZnJvbSBcIkAvbGliL2F1dGgvc2Vzc2lvblwiO1xyXG5pbXBvcnQgeyBoYXNoUGFzc3dvcmQgfSBmcm9tIFwiQC9saWIvdXRpbHMvaGFzaFwiO1xyXG5pbXBvcnQgeyBqc29uRXJyb3IgfSBmcm9tIFwiQC9saWIvdXRpbHMvcmVzcG9uc2VcIjtcclxuXHJcbmNvbnN0IHNjaGVtYSA9IHoub2JqZWN0KHtcclxuICBuYW1lOiB6LnN0cmluZygpLm1pbigyKSxcclxuICBlbWFpbDogei5zdHJpbmcoKS5lbWFpbCgpLFxyXG4gIHBhc3N3b3JkOiB6LnN0cmluZygpLm1pbig2KSxcclxuICByb2xlOiB6Lm5hdGl2ZUVudW0oUm9sZSlcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldEF1dGhTZXNzaW9uKCk7XHJcbiAgaWYgKHNlc3Npb24/LnVzZXIucm9sZSAhPT0gUm9sZS5TVVBFUl9BRE1JTikgcmV0dXJuIGpzb25FcnJvcihcIkZvcmJpZGRlblwiLCA0MDMpO1xyXG5cclxuICBjb25zdCBwYXJzZWQgPSBzY2hlbWEuc2FmZVBhcnNlKGF3YWl0IHJlcS5qc29uKCkpO1xyXG4gIGlmICghcGFyc2VkLnN1Y2Nlc3MpIHJldHVybiBqc29uRXJyb3IoXCJJbnZhbGlkIHBheWxvYWRcIiwgNDIyKTtcclxuXHJcbiAgY29uc3QgZXhpc3RzID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGVtYWlsOiBwYXJzZWQuZGF0YS5lbWFpbCB9IH0pO1xyXG4gIGlmIChleGlzdHMpIHJldHVybiBqc29uRXJyb3IoXCJFbWFpbCBhbHJlYWR5IGV4aXN0c1wiLCA0MDkpO1xyXG5cclxuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuY3JlYXRlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgLi4ucGFyc2VkLmRhdGEsXHJcbiAgICAgIHBhc3N3b3JkOiBhd2FpdCBoYXNoUGFzc3dvcmQocGFyc2VkLmRhdGEucGFzc3dvcmQpXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0OiB7IGlkOiB0cnVlLCBlbWFpbDogdHJ1ZSB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih1c2VyLCB7IHN0YXR1czogMjAxIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJ6IiwiUm9sZSIsInByaXNtYSIsImdldEF1dGhTZXNzaW9uIiwiaGFzaFBhc3N3b3JkIiwianNvbkVycm9yIiwic2NoZW1hIiwib2JqZWN0IiwibmFtZSIsInN0cmluZyIsIm1pbiIsImVtYWlsIiwicGFzc3dvcmQiLCJyb2xlIiwibmF0aXZlRW51bSIsIlBPU1QiLCJyZXEiLCJzZXNzaW9uIiwidXNlciIsIlNVUEVSX0FETUlOIiwicGFyc2VkIiwic2FmZVBhcnNlIiwianNvbiIsInN1Y2Nlc3MiLCJleGlzdHMiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJkYXRhIiwiY3JlYXRlIiwic2VsZWN0IiwiaWQiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/register/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth/options.ts":
/*!*****************************!*\
  !*** ./lib/auth/options.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma/index.ts\");\n/* harmony import */ var _lib_utils_hash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils/hash */ \"(rsc)/./lib/utils/hash.ts\");\n\n\n\nconst authOptions = {\n    secret: process.env.NEXTAUTH_SECRET,\n    session: {\n        strategy: \"jwt\"\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials.password) return null;\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user) return null;\n                const ok = await (0,_lib_utils_hash__WEBPACK_IMPORTED_MODULE_2__.comparePassword)(credentials.password, user.password);\n                if (!ok) return null;\n                return {\n                    id: user.id,\n                    name: user.name,\n                    email: user.email,\n                    role: user.role,\n                    companyId: user.companyId,\n                    departmentId: user.departmentId\n                };\n            }\n        })\n    ],\n    callbacks: {\n        jwt: async ({ token, user })=>{\n            if (user) {\n                token.role = user.role;\n                token.companyId = user.companyId;\n                token.departmentId = user.departmentId;\n            }\n            return token;\n        },\n        session: async ({ session, token })=>{\n            if (session.user) {\n                session.user.id = token.sub ?? \"\";\n                session.user.role = token.role;\n                session.user.companyId = token.companyId;\n                session.user.departmentId = token.departmentId;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/auth/login\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC9vcHRpb25zLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDa0U7QUFFNUI7QUFDYTtBQUU1QyxNQUFNRyxjQUErQjtJQUMxQ0MsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0lBQ25DQyxTQUFTO1FBQUVDLFVBQVU7SUFBTTtJQUMzQkMsV0FBVztRQUNUViwyRUFBbUJBLENBQUM7WUFDbEJXLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBUTtnQkFDdkNDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsWUFBWUksUUFBUSxFQUFFLE9BQU87Z0JBRXpELE1BQU1FLE9BQU8sTUFBTWpCLCtDQUFNQSxDQUFDaUIsSUFBSSxDQUFDQyxVQUFVLENBQUM7b0JBQUVDLE9BQU87d0JBQUVQLE9BQU9ELFlBQVlDLEtBQUs7b0JBQUM7Z0JBQUU7Z0JBQ2hGLElBQUksQ0FBQ0ssTUFBTSxPQUFPO2dCQUVsQixNQUFNRyxLQUFLLE1BQU1uQixnRUFBZUEsQ0FBQ1UsWUFBWUksUUFBUSxFQUFFRSxLQUFLRixRQUFRO2dCQUNwRSxJQUFJLENBQUNLLElBQUksT0FBTztnQkFFaEIsT0FBTztvQkFDTEMsSUFBSUosS0FBS0ksRUFBRTtvQkFDWFgsTUFBTU8sS0FBS1AsSUFBSTtvQkFDZkUsT0FBT0ssS0FBS0wsS0FBSztvQkFDakJVLE1BQU1MLEtBQUtLLElBQUk7b0JBQ2ZDLFdBQVdOLEtBQUtNLFNBQVM7b0JBQ3pCQyxjQUFjUCxLQUFLTyxZQUFZO2dCQUNqQztZQUNGO1FBQ0Y7S0FDRDtJQUNEQyxXQUFXO1FBQ1RDLEtBQUssT0FBTyxFQUFFQyxLQUFLLEVBQUVWLElBQUksRUFBRTtZQUN6QixJQUFJQSxNQUFNO2dCQUNSVSxNQUFNTCxJQUFJLEdBQUcsS0FBeUJBLElBQUk7Z0JBQzFDSyxNQUFNSixTQUFTLEdBQUcsS0FBd0NBLFNBQVM7Z0JBQ25FSSxNQUFNSCxZQUFZLEdBQUcsS0FBMkNBLFlBQVk7WUFDOUU7WUFDQSxPQUFPRztRQUNUO1FBQ0FwQixTQUFTLE9BQU8sRUFBRUEsT0FBTyxFQUFFb0IsS0FBSyxFQUFFO1lBQ2hDLElBQUlwQixRQUFRVSxJQUFJLEVBQUU7Z0JBQ2hCVixRQUFRVSxJQUFJLENBQUNJLEVBQUUsR0FBR00sTUFBTUMsR0FBRyxJQUFJO2dCQUMvQnJCLFFBQVFVLElBQUksQ0FBQ0ssSUFBSSxHQUFHSyxNQUFNTCxJQUFJO2dCQUM5QmYsUUFBUVUsSUFBSSxDQUFDTSxTQUFTLEdBQUdJLE1BQU1KLFNBQVM7Z0JBQ3hDaEIsUUFBUVUsSUFBSSxDQUFDTyxZQUFZLEdBQUdHLE1BQU1ILFlBQVk7WUFDaEQ7WUFDQSxPQUFPakI7UUFDVDtJQUNGO0lBQ0FzQixPQUFPO1FBQ0xDLFFBQVE7SUFDVjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21wYW55LW1hbmFnZW1lbnQtc3lzdGVtLy4vbGliL2F1dGgvb3B0aW9ucy50cz9jNDhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR5cGUgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgeyBSb2xlIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgY29tcGFyZVBhc3N3b3JkIH0gZnJvbSBcIkAvbGliL3V0aWxzL2hhc2hcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxyXG4gIHNlc3Npb246IHsgc3RyYXRlZ3k6IFwiand0XCIgfSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXHJcbiAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJlbWFpbFwiIH0sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH1cclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XHJcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzLnBhc3N3b3JkKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwgfSB9KTtcclxuICAgICAgICBpZiAoIXVzZXIpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBvayA9IGF3YWl0IGNvbXBhcmVQYXNzd29yZChjcmVkZW50aWFscy5wYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XHJcbiAgICAgICAgaWYgKCFvaykgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpZDogdXNlci5pZCxcclxuICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgcm9sZTogdXNlci5yb2xlLFxyXG4gICAgICAgICAgY29tcGFueUlkOiB1c2VyLmNvbXBhbnlJZCxcclxuICAgICAgICAgIGRlcGFydG1lbnRJZDogdXNlci5kZXBhcnRtZW50SWRcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBqd3Q6IGFzeW5jICh7IHRva2VuLCB1c2VyIH0pID0+IHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICB0b2tlbi5yb2xlID0gKHVzZXIgYXMgeyByb2xlOiBSb2xlIH0pLnJvbGU7XHJcbiAgICAgICAgdG9rZW4uY29tcGFueUlkID0gKHVzZXIgYXMgeyBjb21wYW55SWQ/OiBzdHJpbmcgfCBudWxsIH0pLmNvbXBhbnlJZDtcclxuICAgICAgICB0b2tlbi5kZXBhcnRtZW50SWQgPSAodXNlciBhcyB7IGRlcGFydG1lbnRJZD86IHN0cmluZyB8IG51bGwgfSkuZGVwYXJ0bWVudElkO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH0sXHJcbiAgICBzZXNzaW9uOiBhc3luYyAoeyBzZXNzaW9uLCB0b2tlbiB9KSA9PiB7XHJcbiAgICAgIGlmIChzZXNzaW9uLnVzZXIpIHtcclxuICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5zdWIgPz8gXCJcIjtcclxuICAgICAgICBzZXNzaW9uLnVzZXIucm9sZSA9IHRva2VuLnJvbGUgYXMgUm9sZTtcclxuICAgICAgICBzZXNzaW9uLnVzZXIuY29tcGFueUlkID0gdG9rZW4uY29tcGFueUlkIGFzIHN0cmluZyB8IG51bGw7XHJcbiAgICAgICAgc2Vzc2lvbi51c2VyLmRlcGFydG1lbnRJZCA9IHRva2VuLmRlcGFydG1lbnRJZCBhcyBzdHJpbmcgfCBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzZXNzaW9uO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGFnZXM6IHtcclxuICAgIHNpZ25JbjogXCIvYXV0aC9sb2dpblwiXHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiQ3JlZGVudGlhbHNQcm92aWRlciIsInByaXNtYSIsImNvbXBhcmVQYXNzd29yZCIsImF1dGhPcHRpb25zIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsInNlc3Npb24iLCJzdHJhdGVneSIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwib2siLCJpZCIsInJvbGUiLCJjb21wYW55SWQiLCJkZXBhcnRtZW50SWQiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInN1YiIsInBhZ2VzIiwic2lnbkluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth/options.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth/session.ts":
/*!*****************************!*\
  !*** ./lib/auth/session.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAuthSession: () => (/* binding */ getAuthSession)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth/options */ \"(rsc)/./lib/auth/options.ts\");\n\n\nconst getAuthSession = ()=>(0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(_lib_auth_options__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC9zZXNzaW9uLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkM7QUFDSTtBQUUxQyxNQUFNRSxpQkFBaUIsSUFBTUYsMkRBQWdCQSxDQUFDQywwREFBV0EsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbXBhbnktbWFuYWdlbWVudC1zeXN0ZW0vLi9saWIvYXV0aC9zZXNzaW9uLnRzP2Y2NTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiQC9saWIvYXV0aC9vcHRpb25zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QXV0aFNlc3Npb24gPSAoKSA9PiBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcclxuIl0sIm5hbWVzIjpbImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsImdldEF1dGhTZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth/session.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma/index.ts":
/*!*****************************!*\
  !*** ./lib/prisma/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"warn\",\n        \"error\"\n    ]\n});\nif (true) {\n    global.prisma = prisma;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hL2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQU12QyxNQUFNQyxTQUNYQyxPQUFPRCxNQUFNLElBQ2IsSUFBSUQsd0RBQVlBLENBQUM7SUFDZkcsS0FBSztRQUFDO1FBQVE7S0FBUTtBQUN4QixHQUFHO0FBRUwsSUFBSUMsSUFBcUMsRUFBRTtJQUN6Q0YsT0FBT0QsTUFBTSxHQUFHQTtBQUNsQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbXBhbnktbWFuYWdlbWVudC1zeXN0ZW0vLi9saWIvcHJpc21hL2luZGV4LnRzPzExZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgdmFyIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJpc21hID1cclxuICBnbG9iYWwucHJpc21hIHx8XHJcbiAgbmV3IFByaXNtYUNsaWVudCh7XHJcbiAgICBsb2c6IFtcIndhcm5cIiwgXCJlcnJvclwiXVxyXG4gIH0pO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWE7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdsb2JhbCIsImxvZyIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma/index.ts\n");

/***/ }),

/***/ "(rsc)/./lib/utils/hash.ts":
/*!***************************!*\
  !*** ./lib/utils/hash.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   comparePassword: () => (/* binding */ comparePassword),\n/* harmony export */   hashPassword: () => (/* binding */ hashPassword)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n\nconst hashPassword = async (password)=>bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().hash(password, 10);\nconst comparePassword = async (password, hash)=>bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().compare(password, hash);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvdXRpbHMvaGFzaC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQThCO0FBRXZCLE1BQU1DLGVBQWUsT0FBT0MsV0FBcUJGLG9EQUFXLENBQUNFLFVBQVUsSUFBSTtBQUMzRSxNQUFNRSxrQkFBa0IsT0FBT0YsVUFBa0JDLE9BQWlCSCx1REFBYyxDQUFDRSxVQUFVQyxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29tcGFueS1tYW5hZ2VtZW50LXN5c3RlbS8uL2xpYi91dGlscy9oYXNoLnRzP2IzOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBoYXNoUGFzc3dvcmQgPSBhc3luYyAocGFzc3dvcmQ6IHN0cmluZykgPT4gYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTtcclxuZXhwb3J0IGNvbnN0IGNvbXBhcmVQYXNzd29yZCA9IGFzeW5jIChwYXNzd29yZDogc3RyaW5nLCBoYXNoOiBzdHJpbmcpID0+IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCBoYXNoKTtcclxuIl0sIm5hbWVzIjpbImJjcnlwdCIsImhhc2hQYXNzd29yZCIsInBhc3N3b3JkIiwiaGFzaCIsImNvbXBhcmVQYXNzd29yZCIsImNvbXBhcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/utils/hash.ts\n");

/***/ }),

/***/ "(rsc)/./lib/utils/response.ts":
/*!*******************************!*\
  !*** ./lib/utils/response.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   jsonError: () => (/* binding */ jsonError)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nconst jsonError = (message, status = 400)=>next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: message\n    }, {\n        status\n    });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvdXRpbHMvcmVzcG9uc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkM7QUFFcEMsTUFBTUMsWUFBWSxDQUFDQyxTQUFpQkMsU0FBUyxHQUFHLEdBQUtILHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7UUFBRUMsT0FBT0g7SUFBUSxHQUFHO1FBQUVDO0lBQU8sR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbXBhbnktbWFuYWdlbWVudC1zeXN0ZW0vLi9saWIvdXRpbHMvcmVzcG9uc2UudHM/MjE4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBqc29uRXJyb3IgPSAobWVzc2FnZTogc3RyaW5nLCBzdGF0dXMgPSA0MDApID0+IE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IG1lc3NhZ2UgfSwgeyBzdGF0dXMgfSk7XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJqc29uRXJyb3IiLCJtZXNzYWdlIiwic3RhdHVzIiwianNvbiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/utils/response.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/zod"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fregister%2Froute&page=%2Fapi%2Fauth%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Froute.ts&appDir=D%3A%5CPROJECT%5CCompanys_X%5CCompanys%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CPROJECT%5CCompanys_X%5CCompanys&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();