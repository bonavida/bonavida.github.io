(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{3905:function(e,t,n){"use strict";n.r(t),n.d(t,{MDXContext:function(){return l},MDXProvider:function(){return p},mdx:function(){return y},useMDXComponents:function(){return f},withMDXComponents:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){return function(t){var n=f(t.components);return r.createElement(e,a({},t,{components:n}))}},f=function(e){var t=r.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=f(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=f(n),p=o,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"===typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8093:function(e,t,n){"use strict";var r=n(7294),o=n(3905);function a(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}function c(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var s=a(r),i=c(o);"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)}),t.R=function({compiledSource:e,scope:t,components:n={},lazy:o}){const[a,c]=r.useState(!o||"undefined"===typeof window);r.useEffect((()=>{if(o){const e=window.requestIdleCallback((()=>{c(!0)}));return()=>window.cancelIdleCallback(e)}}),[]);const l=r.useMemo((()=>{const n=Object.assign({mdx:i.mdx,React:s.default},t),r=Object.keys(n),o=Object.values(n),a=Reflect.construct(Function,r.concat(`${e}; return MDXContent;`));return a.apply(a,o)}),[t,e]);if(!a)return s.default.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});const u=s.default.createElement(i.MDXProvider,{components:n},s.default.createElement(l,null));return o?s.default.createElement("div",null,u):u}},9504:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return j},default:function(){return O}});var r=n(4942),o=n(5988),a=n(7294),c=n(9008),s=n(8093),i=n(8663),l=n(7595),u=n(8798),f=n.n(u),p=n(5893),d=function(e){var t=e.id,n=e.lang,r=e.otherLangs;return(0,p.jsx)("div",{className:f().translatedPosts,children:n===l.Z.DEFAULT_LANG?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{className:f().translatedPostsText,children:"This post has been translated into:"}),r.map((function(e){return(0,p.jsx)(i.Z,{to:"/post/".concat(e,"/").concat(t),className:f().translatedPostLink,children:l.Z.SUPPORTED_LANGS[e]},"".concat(e,"_translation"))}))]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{className:f().translatedPostsText,children:"Read the original post"}),(0,p.jsx)(i.Z,{to:"/post/".concat(t),className:f().translatedPostLink,children:"here"}),(0,p.jsx)("span",{className:f().translatedPostsText,children:"."})]})})},m=n(4245);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=!0,O=function(e){var t=e.id,n=e.content,r=e.date,i=e.title,l=e.lang,u=e.otherLangs,f=(0,a.useState)(!1),y=f[0],j=f[1];return(0,a.useEffect)((function(){j(!0)}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c.default,{children:(0,p.jsxs)("title",{className:"jsx-2874201961",children:[i," | Diego Bonavida"]})}),(0,p.jsxs)("main",{className:"jsx-2874201961 post__content",children:[(0,p.jsx)("h1",{className:"jsx-2874201961 post__title",children:i}),y&&(0,p.jsx)("span",{className:"jsx-2874201961 post__date",children:(0,m.L)({date:r,lang:l})}),(0,p.jsx)(d,{id:t,lang:l,otherLangs:u}),(0,p.jsx)(s.R,b({},n))]}),(0,p.jsx)(o.default,{id:"2874201961",children:[".post__date.jsx-2874201961{display:block;margin:20px 0 40px;font-size:14px;color:#8aa0a0;}",".post__title.jsx-2874201961{color:var(--text-primary);font-size:42px;line-height:45px;-webkit-transition:color 0.2s linear;transition:color 0.2s linear;}",".post__content.jsx-2874201961{width:100%;max-width:900px;margin:0 auto;color:var(--text-primary);-webkit-transition:color 0.2s linear;transition:color 0.2s linear;}"]})]})}},4245:function(e,t,n){"use strict";n.d(t,{L:function(){return o}});var r=n(7595),o=function(e){var t=e.date,n=e.options,o=void 0===n?{day:"numeric",month:"long",year:"numeric"}:n,a=e.lang,c=void 0===a?r.Z.DEFAULT_LANG:a;return new Date(t).toLocaleDateString(r.Z.LOCALE_BY_LANG[c],o)}},2380:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[[...slug]]",function(){return n(9504)}])},8798:function(e){e.exports={translatedPosts:"PostTranslations_translatedPosts__2TiZD",translatedPostsText:"PostTranslations_translatedPostsText__ImwGG",translatedPostLink:"PostTranslations_translatedPostLink__2sOwS"}}},function(e){e.O(0,[988,774,888,179],(function(){return t=2380,e(e.s=t);var t}));var t=e.O();_N_E=t}]);