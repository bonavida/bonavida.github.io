_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{Ff2n:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}r.d(t,"a",(function(){return n}))},XrP9:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{day:"numeric",month:"long",year:"numeric"};return new Date(e).toLocaleDateString("en-US",t)}},YFqc:function(e,t,r){e.exports=r("cTJO")},Zd8P:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[[...slug]]",function(){return r("rfmu")}])},cTJO:function(e,t,r){"use strict";var n=r("J4zp"),a=r("284h");t.__esModule=!0,t.default=void 0;var o=a(r("q1tI")),i=r("elyg"),c=r("nOHt"),s=r("vNVm"),l={};function f(e,t,r,n){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,r=(0,c.useRouter)(),a=r&&r.pathname||"/",d=o.default.useMemo((function(){var t=(0,i.resolveHref)(a,e.href,!0),r=n(t,2),o=r[0],c=r[1];return{href:o,as:e.as?(0,i.resolveHref)(a,e.as):c||o}}),[a,e.href,e.as]),u=d.href,h=d.as,g=e.children,b=e.replace,p=e.shallow,j=e.scroll,k=e.locale;"string"===typeof g&&(g=o.default.createElement("a",null,g));var O=o.Children.only(g),m=O&&"object"===typeof O&&O.ref,v=(0,s.useIntersection)({rootMargin:"200px"}),x=n(v,2),_=x[0],y=x[1],P=o.default.useCallback((function(e){_(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,_]);(0,o.useEffect)((function(){var e=y&&t&&(0,i.isLocalURL)(u),n="undefined"!==typeof k?k:r&&r.locale,a=l[u+"%"+h+(n?"%"+n:"")];e&&!a&&f(r,u,h,{locale:n})}),[h,u,y,k,t,r]);var w={ref:P,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(r))&&(e.preventDefault(),null==c&&(c=n.indexOf("#")<0),t[a?"replace":"push"](r,n,{shallow:o,locale:s,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,r,u,h,b,p,j,k)},onMouseEnter:function(e){(0,i.isLocalURL)(u)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),f(r,u,h,{priority:!0}))}};if(e.passHref||"a"===O.type&&!("href"in O.props)){var E="undefined"!==typeof k?k:r&&r.locale,L=r&&r.isLocaleDomain&&(0,i.getDomainLocale)(h,E,r&&r.locales,r&&r.domainLocales);w.href=L||(0,i.addBasePath)((0,i.addLocale)(h,E,r&&r.defaultLocale))}return o.default.cloneElement(O,w)};t.default=d},e9sY:function(e,t,r){e.exports={translatedPosts:"PostTranslations_translatedPosts__2TiZD",translatedPostsText:"PostTranslations_translatedPostsText__ImwGG",translatedPostLink:"PostTranslations_translatedPostLink__2sOwS"}},jxKE:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}));var n={"bg-primary":{light:"#FCFCFC",dark:"#101827"},"bg-header":{light:"#ffffff",dark:"#172133"},"border-header":{light:"#e6e6e6",dark:"#1c3246"},"text-header-link":{light:"#152736",dark:"#ffffff"},"text-hover-header-link":{light:"#d23669",dark:"#ffe100"},"avatar-border":{light:"#d23669",dark:"#525560"},"text-primary":{light:"#171717",dark:"#fbfbfc"},"text-secondary":{light:"#777777",dark:"#fefefe"},"text-link":{light:"#d23669",dark:"#ffe100"},"color-toggler":{light:"#d23669",dark:"#172133"},"border-color-toggler":{light:"#e07195",dark:"#3a3d46"},"border-bg-toggler":{light:"#c12e5e",dark:"#2e3a50"},"toggler-yellow":{light:"#ffd712",dark:"#ffd712"},"code-inline-color":{light:"#db4c69",dark:"#ffd712"},"code-inline-bgColor":{light:"#f9f2f4",dark:"#3e3d3b"},"code-color":{light:"#2a3032",dark:"#fbfbfc"},"code-bgColor":{light:"#f7f7f7",dark:"#282A3A  "},"code-border":{light:"#dce2e2",dark:"#1c3246"},"token-comment":{light:"#93a1a1",dark:"#6c7d7d"},"token-punctuation":{light:"#a3a3a3",dark:"#a3a3a3"},"token-property":{light:"#10b981",dark:"#10b981"},"token-string":{light:"#8b5cf6",dark:"#f5d04e"},"token-import-name":{light:"#2a3032",dark:"#E2E4DD"},"token-operator":{light:"#f59e0b",dark:"#CB5A5B"},"token-operator-bgColor":{light:"#f7f7f7",dark:"#252638"},"token-tag":{light:"#ff5779",dark:"#E05D53"},"token-keyword":{light:"#3b82f6",dark:"#E05D53"},"token-keyword-const":{light:"#3b82f6",dark:"#94d2b2"},"token-variable":{light:"#3b82f6",dark:"#B093BF"},"token-attr-name":{light:"#8b5cf6",dark:"#94d2b2"},"token-attr-value":{light:"#5ab980",dark:"#DFC35F"},"token-function":{light:"#ec4899",dark:"#b8ea56"},"token-class":{light:"#3b27da",dark:"#2bbb2f"},"token-regex":{light:"#ff531a",dark:"#ff531a"},"line-highglight-color":{light:"#db4c69",dark:"#db4c69"},"line-highlight-bgColor":{light:"#f5e5eb",dark:"#f5e5eb"}},a={DARK:"dark",LIGHT:"light",COLOR_MODE_KEY:"color-mode",INITIAL_COLOR_MODE_CSS_PROP:"--initial-color-mode",DEFAULT_LANG:"en",SUPPORTED_LANGS:{es:"Spanish",en:"English"}}},nWDx:function(e,t,r){"use strict";var n=r("rePB"),a=r("nKUr"),o=r("Ff2n"),i=r("q1tI"),c=r("YFqc"),s=r.n(c);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=Object(i.forwardRef)((function(e,t){var r=e.to,n=e.children,i=e.className,c=Object(o.a)(e,["to","children","className"]);return"string"===typeof r?Object(a.jsx)(s.a,{href:r,children:Object(a.jsx)("a",f(f({className:i,ref:t},c),{},{children:n}))}):Object(a.jsx)(s.a,{href:r.href,as:r.as,children:Object(a.jsx)("a",f(f({className:i,ref:t},c),{},{children:n}))})}));t.a=d},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},rfmu:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return g}));var n=r("nKUr"),a=r("MX0m"),o=r.n(a),i=r("g4pe"),c=r.n(i),s=r("nWDx"),l=r("jxKE"),f=r("e9sY"),d=r.n(f),u=function(e){var t=e.id,r=e.lang,a=e.otherLangs;return Object(n.jsx)("div",{className:d.a.translatedPosts,children:r===l.b.DEFAULT_LANG?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{className:d.a.translatedPostsText,children:"This post has been translated into:"}),a.map((function(e){return Object(n.jsx)(s.a,{to:"/posts/".concat(e,"/").concat(t),className:d.a.translatedPostLink,children:l.b.SUPPORTED_LANGS[e]})}))]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{className:d.a.translatedPostsText,children:"Read the original post"}),Object(n.jsx)(s.a,{to:"/posts/".concat(t),className:d.a.translatedPostLink,children:"here"}),"."]})})},h=r("XrP9"),g=!0;t.default=function(e){var t=e.id,r=e.content,a=e.date,i=e.title,s=e.lang,l=e.otherLangs;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(c.a,{children:Object(n.jsxs)("title",{className:"jsx-2098560227",children:[i," | Diego Bonavida"]})}),Object(n.jsx)("header",{className:"jsx-2098560227 post__header",children:Object(n.jsx)("h1",{className:"jsx-2098560227 post__title",children:i})}),Object(n.jsxs)("main",{className:"jsx-2098560227 post__content",children:[Object(n.jsx)("span",{className:"jsx-2098560227 post__date",children:Object(h.a)(a)}),Object(n.jsx)(u,{id:t,lang:s,otherLangs:l}),Object(n.jsx)("div",{dangerouslySetInnerHTML:{__html:r},className:"jsx-2098560227"})]}),Object(n.jsx)(o.a,{id:"2098560227",children:["a.jsx-2098560227{font-weight:600;}",".post__header.jsx-2098560227{width:100%;max-width:1300px;margin:0 auto;text-align:center;}",".post__date.jsx-2098560227{display:block;margin:20px 0 40px;font-size:14px;color:#8aa0a0;}",".post__title.jsx-2098560227{color:var(--text-primary);font-size:42px;line-height:45px;-webkit-transition:all 0.2s linear;transition:all 0.2s linear;}",".post__content.jsx-2098560227{width:100%;max-width:1024px;margin:0 auto;color:var(--text-primary);-webkit-transition:all 0.2s linear;transition:all 0.2s linear;}"]})]})}},vNVm:function(e,t,r){"use strict";var n=r("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,s=(0,a.useRef)(),l=(0,a.useState)(!1),f=n(l,2),d=f[0],u=f[1],h=(0,a.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),r||d||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,i=n.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[r,t,d]);return(0,a.useEffect)((function(){if(!i&&!d){var e=(0,o.requestIdleCallback)((function(){return u(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[d]),[h,d]};var a=r("q1tI"),o=r("0G5g"),i="undefined"!==typeof IntersectionObserver;var c=new Map}},[["Zd8P",0,1,2,3]]]);