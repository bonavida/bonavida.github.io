_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{0:function(e,t,r){r("74v/"),e.exports=r("nOHt")},"094J":function(e,t,r){"use strict";(function(e){var n=r("q1tI"),o=r("puqk"),a={},c=function(e,t,r){return a[e]||(a[e]={callbacks:[],value:r}),a[e].callbacks.push(t),{deregister:function(){var r=a[e].callbacks,n=r.indexOf(t);n>-1&&r.splice(n,1)},emit:function(r){a[e].value!==r&&(a[e].value=r,a[e].callbacks.forEach((function(e){t!==e&&e(r)})))}}};t.a=function(t,r){if(void 0===r&&(r="undefined"!=typeof e&&e.localStorage?e.localStorage:"undefined"!=typeof globalThis&&globalThis.localStorage?globalThis.localStorage:"undefined"!=typeof window&&window.localStorage?window.localStorage:"undefined"!=typeof localStorage?localStorage:null),r){var a=(i=r,{get:function(e,t){var r=i.getItem(e);return null==r?"function"==typeof t?t():t:JSON.parse(r)},set:function(e,t){i.setItem(e,JSON.stringify(t))}});return function(e){return function(e,t,r){var a=r.get,i=r.set,u=Object(n.useRef)(null),l=Object(n.useState)((function(){return a(t,e)})),f=l[0],s=l[1];Object(o.a)("storage",(function(e){if(e.key===t){var r=JSON.parse(e.newValue);f!==r&&s(r)}})),Object(n.useEffect)((function(){return u.current=c(t,s,e),function(){u.current.deregister()}}),[e,t]);var d=Object(n.useCallback)((function(e){var r="function"==typeof e?e(f):e;i(t,r),s(r),u.current.emit(e)}),[f,i,t]);return[f,d]}(e,t,a)}}var i;return n.useState}}).call(this,r("ntbh"))},"6Fm8":function(e,t,r){},"74v/":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("cha2")}])},HVIU:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return u}));var n=r("nKUr"),o=r("ODXe"),a=r("q1tI"),c=r("ii3f"),i=Object(a.createContext)({}),u=function(e){var t=e.children,r=Object(a.useState)(void 0),u=r[0],l=r[1];Object(a.useEffect)((function(){var e=window.document.documentElement.style.getPropertyValue("--initial-color-mode");l(e)}),[]);return Object(n.jsx)(i.Provider,{value:{colorMode:u,setColorMode:function(e){var t=window.document.documentElement;l(e),localStorage.setItem("color-mode",e),Object.entries(c.a).forEach((function(r){var n=Object(o.a)(r,2),a=n[0],c=n[1],i="--".concat(a);t.style.setProperty(i,c[e])}))}},children:t})}},ODXe:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return o}))},cha2:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t);var o=r("nKUr"),a=r("q1tI"),c=r("HVIU"),i=r("ODXe"),u=r("g+62"),l=r("ii3f"),f=function(){var e=Object(u.a)(!1,{storageKey:null,onChange:null});return Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",t=localStorage.getItem("color-mode"),r="string"===typeof t?t:e,n=document.documentElement;Object.entries(l.a).forEach((function(e){var t=Object(i.a)(e,2),o=t[0],a=t[1],c="--".concat(o);n.style.setProperty(c,a[r])})),n.style.setProperty("--initial-color-mode",r)}),[e,e.value]),null},s=function(e){var t=e.children;return Object(o.jsxs)(c.b,{children:[Object(o.jsx)(f,{}),t]})};r("6Fm8");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e){var t=e.Component,r=e.pageProps;return Object(o.jsx)(s,{children:Object(o.jsx)(t,b({},r))})}},"g+62":function(e,t,r){"use strict";(function(e){var n=r("puqk"),o=r("q1tI"),a=r("094J"),c=function(){},i={classList:{add:c,remove:c}},u=function(t,r,n){void 0===n&&(n=e);var c=t?Object(a.a)(t,r):o.useState,u=n.matchMedia?n.matchMedia("(prefers-color-scheme: dark)"):{},l={addEventListener:function(e,t){return u.addListener&&u.addListener(t)},removeEventListener:function(e,t){return u.removeListener&&u.removeListener(t)}},f="(prefers-color-scheme: dark)"===u.media,s=n.document&&n.document.body||i;return{usePersistedDarkModeState:c,getDefaultOnChange:function(e,t,r){return void 0===e&&(e=s),void 0===t&&(t="dark-mode"),void 0===r&&(r="light-mode"),function(n){e.classList.add(n?t:r),e.classList.remove(n?r:t)}},mediaQueryEventTarget:l,getInitialValue:function(e){return f?u.matches:e}}};t.a=function(e,t){void 0===e&&(e=!1),void 0===t&&(t={});var r=t.element,a=t.classNameDark,c=t.classNameLight,i=t.onChange,l=t.storageKey;void 0===l&&(l="darkMode");var f=t.storageProvider,s=t.global,d=Object(o.useMemo)((function(){return u(l,f,s)}),[l,f,s]),b=d.getDefaultOnChange,g=d.mediaQueryEventTarget,v=(0,d.usePersistedDarkModeState)((0,d.getInitialValue)(e)),h=v[0],p=v[1],m=Object(o.useMemo)((function(){return i||b(r,a,c)}),[i,r,a,c,b]);return Object(o.useEffect)((function(){m(h)}),[m,h]),Object(n.a)("change",(function(e){return p(e.matches)}),g),{value:h,enable:Object(o.useCallback)((function(){return p(!0)}),[p]),disable:Object(o.useCallback)((function(){return p(!1)}),[p]),toggle:Object(o.useCallback)((function(){return p((function(e){return!e}))}),[p])}}}).call(this,r("ntbh"))},ii3f:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={"bg-primary":{light:"#fefefe",dark:"#050505"},"bg-secondary":{light:"#ffffff",dark:"#151617"},"bg-inset":{light:"#eff0f5",dark:"#151617"},"border-primary":{light:"rgba(65,67,78,0.16)",dark:"rgba(255,255,255,0.12)"},"text-primary":{light:"#050505",dark:"#fbfbfc"},"text-secondary":{light:"#2f3037",dark:"#e3e4e8"},"text-tertiary":{light:"#525560",dark:"#a9abb6"},"text-quaternary":{light:"#686B78",dark:"#9094A6"},"text-placeholder":{light:"rgba(82,85,96,0.5)",dark:"rgba(145,148,161,0.5)"},"text-on-primary":{light:"#fbfbfc",dark:"#050505"},"text-link":{light:"#007AFF",dark:"#FF9500"},"text-link-rgb":{light:"0,122,255",dark:"255,149,0"},"accent-blue":{light:"#007AFF",dark:"#0A84FF"},"accent-green":{light:"#34C759",dark:"#32D74B"},"accent-orange":{light:"#FF9500",dark:"#FF9F0A"},"accent-red":{light:"#FF3B30",dark:"#FF453A"},"accent-yellow":{light:"#FFCC00",dark:"#FFD60A"},"accent-purple":{light:"#AF52DE",dark:"#BF5AF2"},"accent-pink":{light:"#FF2D55",dark:"#FF375F"},"social-facebook":{light:"#1877f2",dark:"#1877f2"},"social-twitter":{light:"#00ACED",dark:"#00ACED"}}},ntbh:function(e,t){(function(t){e.exports=function(){var e={149:function(e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(r){"object"===typeof window&&(t=window)}e.exports=t}},r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={exports:{}},a=!0;try{e[t](o,o.exports,n),a=!1}finally{a&&delete r[t]}return o.exports}return n.ab=t+"/",n(149)}()}).call(this,"/")},puqk:function(e,t,r){"use strict";(function(e){var n=r("q1tI");t.a=function(t,r,o,a){void 0===o&&(o=e),void 0===a&&(a={});var c=Object(n.useRef)(),i=a.capture,u=a.passive,l=a.once;Object(n.useEffect)((function(){c.current=r}),[r]),Object(n.useEffect)((function(){if(o&&o.addEventListener){var e=function(e){return c.current(e)},r={capture:i,passive:u,once:l};return o.addEventListener(t,e,r),function(){o.removeEventListener(t,e,r)}}}),[t,o,i,u,l])}}).call(this,r("ntbh"))}},[[0,0,1,2]]]);