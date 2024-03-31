"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@vercel";
exports.ids = ["vendor-chunks/@vercel"];
exports.modules = {

/***/ "(ssr)/./node_modules/@vercel/analytics/dist/react/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@vercel/analytics/dist/react/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Analytics: () => (/* binding */ Analytics),\n/* harmony export */   track: () => (/* binding */ track)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* __next_internal_client_entry_do_not_use__ Analytics,track auto */ // src/react.tsx\n\n// package.json\nvar name = \"@vercel/analytics\";\nvar version = \"1.2.2\";\n// src/queue.ts\nvar initQueue = ()=>{\n    if (window.va) return;\n    window.va = function a(...params) {\n        (window.vaq = window.vaq || []).push(params);\n    };\n};\n// src/utils.ts\nfunction isBrowser() {\n    return \"undefined\" !== \"undefined\";\n}\nfunction detectEnvironment() {\n    try {\n        const env = \"development\";\n        if (env === \"development\" || env === \"test\") {\n            return \"development\";\n        }\n    } catch (e) {}\n    return \"production\";\n}\nfunction setMode(mode = \"auto\") {\n    if (mode === \"auto\") {\n        window.vam = detectEnvironment();\n        return;\n    }\n    window.vam = mode;\n}\nfunction getMode() {\n    const mode = isBrowser() ? window.vam : detectEnvironment();\n    return mode || \"production\";\n}\nfunction isProduction() {\n    return getMode() === \"production\";\n}\nfunction isDevelopment() {\n    return getMode() === \"development\";\n}\nfunction removeKey(key, { [key]: _, ...rest }) {\n    return rest;\n}\nfunction parseProperties(properties, options) {\n    if (!properties) return void 0;\n    let props = properties;\n    const errorProperties = [];\n    for (const [key, value] of Object.entries(properties)){\n        if (typeof value === \"object\" && value !== null) {\n            if (options.strip) {\n                props = removeKey(key, props);\n            } else {\n                errorProperties.push(key);\n            }\n        }\n    }\n    if (errorProperties.length > 0 && !options.strip) {\n        throw Error(`The following properties are not valid: ${errorProperties.join(\", \")}. Only strings, numbers, booleans, and null are allowed.`);\n    }\n    return props;\n}\n// src/generic.ts\nvar DEV_SCRIPT_URL = \"https://va.vercel-scripts.com/v1/script.debug.js\";\nvar PROD_SCRIPT_URL = \"/_vercel/insights/script.js\";\nfunction inject(props = {\n    debug: true\n}) {\n    var _a;\n    if (!isBrowser()) return;\n    setMode(props.mode);\n    initQueue();\n    if (props.beforeSend) {\n        (_a = window.va) == null ? void 0 : _a.call(window, \"beforeSend\", props.beforeSend);\n    }\n    const src = props.scriptSrc || (isDevelopment() ? DEV_SCRIPT_URL : PROD_SCRIPT_URL);\n    if (document.head.querySelector(`script[src*=\"${src}\"]`)) return;\n    const script = document.createElement(\"script\");\n    script.src = src;\n    script.defer = true;\n    script.dataset.sdkn = name + (props.framework ? `/${props.framework}` : \"\");\n    script.dataset.sdkv = version;\n    if (props.disableAutoTrack) {\n        script.dataset.disableAutoTrack = \"1\";\n    }\n    if (props.endpoint) {\n        script.dataset.endpoint = props.endpoint;\n    }\n    if (props.dsn) {\n        script.dataset.dsn = props.dsn;\n    }\n    script.onerror = ()=>{\n        const errorMessage = isDevelopment() ? \"Please check if any ad blockers are enabled and try again.\" : \"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.\";\n        console.log(`[Vercel Web Analytics] Failed to load script from ${src}. ${errorMessage}`);\n    };\n    if (isDevelopment() && props.debug === false) {\n        script.dataset.debug = \"false\";\n    }\n    document.head.appendChild(script);\n}\nfunction track(name2, properties) {\n    var _a, _b;\n    if (!isBrowser()) {\n        const msg = \"[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment\";\n        if (isProduction()) {\n            console.warn(msg);\n        } else {\n            throw new Error(msg);\n        }\n        return;\n    }\n    if (!properties) {\n        (_a = window.va) == null ? void 0 : _a.call(window, \"event\", {\n            name: name2\n        });\n        return;\n    }\n    try {\n        const props = parseProperties(properties, {\n            strip: isProduction()\n        });\n        (_b = window.va) == null ? void 0 : _b.call(window, \"event\", {\n            name: name2,\n            data: props\n        });\n    } catch (err) {\n        if (err instanceof Error && isDevelopment()) {\n            console.error(err);\n        }\n    }\n}\nfunction pageview({ route, path }) {\n    var _a;\n    (_a = window.va) == null ? void 0 : _a.call(window, \"pageview\", {\n        route,\n        path\n    });\n}\n// src/react.tsx\nfunction Analytics(props) {\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        inject({\n            framework: props.framework || \"react\",\n            ...props.route !== void 0 && {\n                disableAutoTrack: true\n            },\n            ...props\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (props.route && props.path) {\n            pageview({\n                route: props.route,\n                path: props.path\n            });\n        }\n    }, [\n        props.route,\n        props.path\n    ]);\n    return null;\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHZlcmNlbC9hbmFseXRpY3MvZGlzdC9yZWFjdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O3FFQUVBLGdCQUFnQjtBQUNrQjtBQUVsQyxlQUFlO0FBQ2YsSUFBSUMsT0FBTztBQUNYLElBQUlDLFVBQVU7QUFFZCxlQUFlO0FBQ2YsSUFBSUMsWUFBWTtJQUNkLElBQUlDLE9BQU9DLEVBQUUsRUFDWDtJQUNGRCxPQUFPQyxFQUFFLEdBQUcsU0FBU0MsRUFBRSxHQUFHQyxNQUFNO1FBQzdCSCxDQUFBQSxPQUFPSSxHQUFHLEdBQUdKLE9BQU9JLEdBQUcsSUFBSSxFQUFFLEVBQUVDLElBQUksQ0FBQ0Y7SUFDdkM7QUFDRjtBQUVBLGVBQWU7QUFDZixTQUFTRztJQUNQLE9BQU8sZ0JBQWtCO0FBQzNCO0FBQ0EsU0FBU0M7SUFDUCxJQUFJO1FBQ0YsTUFBTUMsTUF4QlY7UUF5QkksSUFBSUEsUUFBUSxpQkFBaUJBLFFBQVEsUUFBUTtZQUMzQyxPQUFPO1FBQ1Q7SUFDRixFQUFFLE9BQU9DLEdBQUcsQ0FDWjtJQUNBLE9BQU87QUFDVDtBQUNBLFNBQVNDLFFBQVFDLE9BQU8sTUFBTTtJQUM1QixJQUFJQSxTQUFTLFFBQVE7UUFDbkJYLE9BQU9ZLEdBQUcsR0FBR0w7UUFDYjtJQUNGO0lBQ0FQLE9BQU9ZLEdBQUcsR0FBR0Q7QUFDZjtBQUNBLFNBQVNFO0lBQ1AsTUFBTUYsT0FBT0wsY0FBY04sT0FBT1ksR0FBRyxHQUFHTDtJQUN4QyxPQUFPSSxRQUFRO0FBQ2pCO0FBQ0EsU0FBU0c7SUFDUCxPQUFPRCxjQUFjO0FBQ3ZCO0FBQ0EsU0FBU0U7SUFDUCxPQUFPRixjQUFjO0FBQ3ZCO0FBQ0EsU0FBU0csVUFBVUMsR0FBRyxFQUFFLEVBQUUsQ0FBQ0EsSUFBSSxFQUFFQyxDQUFDLEVBQUUsR0FBR0MsTUFBTTtJQUMzQyxPQUFPQTtBQUNUO0FBQ0EsU0FBU0MsZ0JBQWdCQyxVQUFVLEVBQUVDLE9BQU87SUFDMUMsSUFBSSxDQUFD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QztJQUM1QixPQUFPO0FBQ1Q7QUFJRSxDQUNGLGtDQUFrQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXBvcy1zdG9yZS8uL25vZGVfbW9kdWxlcy9AdmVyY2VsL2FuYWx5dGljcy9kaXN0L3JlYWN0L2luZGV4Lm1qcz81NTlkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG4vLyBzcmMvcmVhY3QudHN4XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gcGFja2FnZS5qc29uXG52YXIgbmFtZSA9IFwiQHZlcmNlbC9hbmFseXRpY3NcIjtcbnZhciB2ZXJzaW9uID0gXCIxLjIuMlwiO1xuXG4vLyBzcmMvcXVldWUudHNcbnZhciBpbml0UXVldWUgPSAoKSA9PiB7XG4gIGlmICh3aW5kb3cudmEpXG4gICAgcmV0dXJuO1xuICB3aW5kb3cudmEgPSBmdW5jdGlvbiBhKC4uLnBhcmFtcykge1xuICAgICh3aW5kb3cudmFxID0gd2luZG93LnZhcSB8fCBbXSkucHVzaChwYXJhbXMpO1xuICB9O1xufTtcblxuLy8gc3JjL3V0aWxzLnRzXG5mdW5jdGlvbiBpc0Jyb3dzZXIoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiO1xufVxuZnVuY3Rpb24gZGV0ZWN0RW52aXJvbm1lbnQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG4gICAgaWYgKGVudiA9PT0gXCJkZXZlbG9wbWVudFwiIHx8IGVudiA9PT0gXCJ0ZXN0XCIpIHtcbiAgICAgIHJldHVybiBcImRldmVsb3BtZW50XCI7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gIH1cbiAgcmV0dXJuIFwicHJvZHVjdGlvblwiO1xufVxuZnVuY3Rpb24gc2V0TW9kZShtb2RlID0gXCJhdXRvXCIpIHtcbiAgaWYgKG1vZGUgPT09IFwiYXV0b1wiKSB7XG4gICAgd2luZG93LnZhbSA9IGRldGVjdEVudmlyb25tZW50KCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHdpbmRvdy52YW0gPSBtb2RlO1xufVxuZnVuY3Rpb24gZ2V0TW9kZSgpIHtcbiAgY29uc3QgbW9kZSA9IGlzQnJvd3NlcigpID8gd2luZG93LnZhbSA6IGRldGVjdEVudmlyb25tZW50KCk7XG4gIHJldHVybiBtb2RlIHx8IFwicHJvZHVjdGlvblwiO1xufVxuZnVuY3Rpb24gaXNQcm9kdWN0aW9uKCkge1xuICByZXR1cm4gZ2V0TW9kZSgpID09PSBcInByb2R1Y3Rpb25cIjtcbn1cbmZ1bmN0aW9uIGlzRGV2ZWxvcG1lbnQoKSB7XG4gIHJldHVybiBnZXRNb2RlKCkgPT09IFwiZGV2ZWxvcG1lbnRcIjtcbn1cbmZ1bmN0aW9uIHJlbW92ZUtleShrZXksIHsgW2tleV06IF8sIC4uLnJlc3QgfSkge1xuICByZXR1cm4gcmVzdDtcbn1cbmZ1bmN0aW9uIHBhcnNlUHJvcGVydGllcyhwcm9wZXJ0aWVzLCBvcHRpb25zKSB7XG4gIGlmICghcHJvcGVydGllcylcbiAgICByZXR1cm4gdm9pZCAwO1xuICBsZXQgcHJvcHMgPSBwcm9wZXJ0aWVzO1xuICBjb25zdCBlcnJvclByb3BlcnRpZXMgPSBbXTtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcGVydGllcykpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICBpZiAob3B0aW9ucy5zdHJpcCkge1xuICAgICAgICBwcm9wcyA9IHJlbW92ZUtleShrZXksIHByb3BzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yUHJvcGVydGllcy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChlcnJvclByb3BlcnRpZXMubGVuZ3RoID4gMCAmJiAhb3B0aW9ucy5zdHJpcCkge1xuICAgIHRocm93IEVycm9yKFxuICAgICAgYFRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyBhcmUgbm90IHZhbGlkOiAke2Vycm9yUHJvcGVydGllcy5qb2luKFxuICAgICAgICBcIiwgXCJcbiAgICAgICl9LiBPbmx5IHN0cmluZ3MsIG51bWJlcnMsIGJvb2xlYW5zLCBhbmQgbnVsbCBhcmUgYWxsb3dlZC5gXG4gICAgKTtcbiAgfVxuICByZXR1cm4gcHJvcHM7XG59XG5cbi8vIHNyYy9nZW5lcmljLnRzXG52YXIgREVWX1NDUklQVF9VUkwgPSBcImh0dHBzOi8vdmEudmVyY2VsLXNjcmlwdHMuY29tL3YxL3NjcmlwdC5kZWJ1Zy5qc1wiO1xudmFyIFBST0RfU0NSSVBUX1VSTCA9IFwiL192ZXJjZWwvaW5zaWdodHMvc2NyaXB0LmpzXCI7XG5mdW5jdGlvbiBpbmplY3QocHJvcHMgPSB7XG4gIGRlYnVnOiB0cnVlXG59KSB7XG4gIHZhciBfYTtcbiAgaWYgKCFpc0Jyb3dzZXIoKSlcbiAgICByZXR1cm47XG4gIHNldE1vZGUocHJvcHMubW9kZSk7XG4gIGluaXRRdWV1ZSgpO1xuICBpZiAocHJvcHMuYmVmb3JlU2VuZCkge1xuICAgIChfYSA9IHdpbmRvdy52YSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNhbGwod2luZG93LCBcImJlZm9yZVNlbmRcIiwgcHJvcHMuYmVmb3JlU2VuZCk7XG4gIH1cbiAgY29uc3Qgc3JjID0gcHJvcHMuc2NyaXB0U3JjIHx8IChpc0RldmVsb3BtZW50KCkgPyBERVZfU0NSSVBUX1VSTCA6IFBST0RfU0NSSVBUX1VSTCk7XG4gIGlmIChkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmMqPVwiJHtzcmN9XCJdYCkpXG4gICAgcmV0dXJuO1xuICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICBzY3JpcHQuc3JjID0gc3JjO1xuICBzY3JpcHQuZGVmZXIgPSB0cnVlO1xuICBzY3JpcHQuZGF0YXNldC5zZGtuID0gbmFtZSArIChwcm9wcy5mcmFtZXdvcmsgPyBgLyR7cHJvcHMuZnJhbWV3b3JrfWAgOiBcIlwiKTtcbiAgc2NyaXB0LmRhdGFzZXQuc2RrdiA9IHZlcnNpb247XG4gIGlmIChwcm9wcy5kaXNhYmxlQXV0b1RyYWNrKSB7XG4gICAgc2NyaXB0LmRhdGFzZXQuZGlzYWJsZUF1dG9UcmFjayA9IFwiMVwiO1xuICB9XG4gIGlmIChwcm9wcy5lbmRwb2ludCkge1xuICAgIHNjcmlwdC5kYXRhc2V0LmVuZHBvaW50ID0gcHJvcHMuZW5kcG9pbnQ7XG4gIH1cbiAgaWYgKHByb3BzLmRzbikge1xuICAgIHNjcmlwdC5kYXRhc2V0LmRzbiA9IHByb3BzLmRzbjtcbiAgfVxuICBzY3JpcHQub25lcnJvciA9ICgpID0+IHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBpc0RldmVsb3BtZW50KCkgPyBcIlBsZWFzZSBjaGVjayBpZiBhbnkgYWQgYmxvY2tlcnMgYXJlIGVuYWJsZWQgYW5kIHRyeSBhZ2Fpbi5cIiA6IFwiQmUgc3VyZSB0byBlbmFibGUgV2ViIEFuYWx5dGljcyBmb3IgeW91ciBwcm9qZWN0IGFuZCBkZXBsb3kgYWdhaW4uIFNlZSBodHRwczovL3ZlcmNlbC5jb20vZG9jcy9hbmFseXRpY3MvcXVpY2tzdGFydCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cIjtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBbVmVyY2VsIFdlYiBBbmFseXRpY3NdIEZhaWxlZCB0byBsb2FkIHNjcmlwdCBmcm9tICR7c3JjfS4gJHtlcnJvck1lc3NhZ2V9YFxuICAgICk7XG4gIH07XG4gIGlmIChpc0RldmVsb3BtZW50KCkgJiYgcHJvcHMuZGVidWcgPT09IGZhbHNlKSB7XG4gICAgc2NyaXB0LmRhdGFzZXQuZGVidWcgPSBcImZhbHNlXCI7XG4gIH1cbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufVxuZnVuY3Rpb24gdHJhY2sobmFtZTIsIHByb3BlcnRpZXMpIHtcbiAgdmFyIF9hLCBfYjtcbiAgaWYgKCFpc0Jyb3dzZXIoKSkge1xuICAgIGNvbnN0IG1zZyA9IFwiW1ZlcmNlbCBXZWIgQW5hbHl0aWNzXSBQbGVhc2UgaW1wb3J0IGB0cmFja2AgZnJvbSBgQHZlcmNlbC9hbmFseXRpY3Mvc2VydmVyYCB3aGVuIHVzaW5nIHRoaXMgZnVuY3Rpb24gaW4gYSBzZXJ2ZXIgZW52aXJvbm1lbnRcIjtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKCkpIHtcbiAgICAgIGNvbnNvbGUud2Fybihtc2cpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghcHJvcGVydGllcykge1xuICAgIChfYSA9IHdpbmRvdy52YSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNhbGwod2luZG93LCBcImV2ZW50XCIsIHsgbmFtZTogbmFtZTIgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgcHJvcHMgPSBwYXJzZVByb3BlcnRpZXMocHJvcGVydGllcywge1xuICAgICAgc3RyaXA6IGlzUHJvZHVjdGlvbigpXG4gICAgfSk7XG4gICAgKF9iID0gd2luZG93LnZhKSA9PSBudWxsID8gdm9pZCAwIDogX2IuY2FsbCh3aW5kb3csIFwiZXZlbnRcIiwge1xuICAgICAgbmFtZTogbmFtZTIsXG4gICAgICBkYXRhOiBwcm9wc1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IgJiYgaXNEZXZlbG9wbWVudCgpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBwYWdldmlldyh7IHJvdXRlLCBwYXRoIH0pIHtcbiAgdmFyIF9hO1xuICAoX2EgPSB3aW5kb3cudmEpID09IG51bGwgPyB2b2lkIDAgOiBfYS5jYWxsKHdpbmRvdywgXCJwYWdldmlld1wiLCB7XG4gICAgcm91dGUsXG4gICAgcGF0aFxuICB9KTtcbn1cblxuLy8gc3JjL3JlYWN0LnRzeFxuZnVuY3Rpb24gQW5hbHl0aWNzKHByb3BzKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW5qZWN0KHtcbiAgICAgIGZyYW1ld29yazogcHJvcHMuZnJhbWV3b3JrIHx8IFwicmVhY3RcIixcbiAgICAgIC4uLnByb3BzLnJvdXRlICE9PSB2b2lkIDAgJiYgeyBkaXNhYmxlQXV0b1RyYWNrOiB0cnVlIH0sXG4gICAgICAuLi5wcm9wc1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLnJvdXRlICYmIHByb3BzLnBhdGgpIHtcbiAgICAgIHBhZ2V2aWV3KHtcbiAgICAgICAgcm91dGU6IHByb3BzLnJvdXRlLFxuICAgICAgICBwYXRoOiBwcm9wcy5wYXRoXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtwcm9wcy5yb3V0ZSwgcHJvcHMucGF0aF0pO1xuICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCB7XG4gIEFuYWx5dGljcyxcbiAgdHJhY2tcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIm5hbWUiLCJ2ZXJzaW9uIiwiaW5pdFF1ZXVlIiwid2luZG93IiwidmEiLCJhIiwicGFyYW1zIiwidmFxIiwicHVzaCIsImlzQnJvd3NlciIsImRldGVjdEVudmlyb25tZW50IiwiZW52IiwiZSIsInNldE1vZGUiLCJtb2RlIiwidmFtIiwiZ2V0TW9kZSIsImlzUHJvZHVjdGlvbiIsImlzRGV2ZWxvcG1lbnQiLCJyZW1vdmVLZXkiLCJrZXkiLCJfIiwicmVzdCIsInBhcnNlUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJvcHRpb25zIiwicHJvcHMiLCJlcnJvclByb3BlcnRpZXMiLCJ2YWx1ZSIsIk9iamVjdCIsImVudHJpZXMiLCJzdHJpcCIsImxlbmd0aCIsIkVycm9yIiwiam9pbiIsIkRFVl9TQ1JJUFRfVVJMIiwiUFJPRF9TQ1JJUFRfVVJMIiwiaW5qZWN0IiwiZGVidWciLCJfYSIsImJlZm9yZVNlbmQiLCJjYWxsIiwic3JjIiwic2NyaXB0U3JjIiwiZG9jdW1lbnQiLCJoZWFkIiwicXVlcnlTZWxlY3RvciIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJkZWZlciIsImRhdGFzZXQiLCJzZGtuIiwiZnJhbWV3b3JrIiwic2RrdiIsImRpc2FibGVBdXRvVHJhY2siLCJlbmRwb2ludCIsImRzbiIsIm9uZXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiYXBwZW5kQ2hpbGQiLCJ0cmFjayIsIm5hbWUyIiwiX2IiLCJtc2ciLCJ3YXJuIiwiZGF0YSIsImVyciIsImVycm9yIiwicGFnZXZpZXciLCJyb3V0ZSIsInBhdGgiLCJBbmFseXRpY3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@vercel/analytics/dist/react/index.mjs\n");

/***/ }),

/***/ "(rsc)/./node_modules/@vercel/analytics/dist/react/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@vercel/analytics/dist/react/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Analytics: () => (/* binding */ e0),
/* harmony export */   track: () => (/* binding */ e1)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Website-portfolio\node_modules\@vercel\analytics\dist\react\index.mjs`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Website-portfolio\node_modules\@vercel\analytics\dist\react\index.mjs#Analytics`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Website-portfolio\node_modules\@vercel\analytics\dist\react\index.mjs#track`);


/***/ })

};
;