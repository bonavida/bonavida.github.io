_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(i.default.useContext(o.AmpStateContext))};var n,i=(n=r("q1tI"))&&n.__esModule?n:{default:n},o=r("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,i=void 0!==n&&n,o=e.hasQuery,s=void 0!==o&&o;return r||i&&s}},"/EDR":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("QeBL")}])},"3niX":function(e,t,r){"use strict";t.__esModule=!0,t.flush=function(){var e=o.cssRules();return o.flush(),e},t.default=void 0;var n,i=r("q1tI");var o=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),s=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return o.computeId(t,r)})).join(" ")};var i=n.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){o.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&o.remove(this.prevProps),o.add(this.props),this.prevProps=this.props),null},n}(i.Component);t.default=s},"7W2i":function(e,t,r){var n=r("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"8Kt/":function(e,t,r){"use strict";r("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var n,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),o=(n=r("Xuae"))&&n.__esModule?n:{default:n},s=r("lwAK"),a=r("FYa8"),u=r("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(i){var o=!0,s=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){s=!0;var a=i.key.slice(i.key.indexOf("$")+1);e.has(a)?o=!1:e.add(a)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var u=0,c=p.length;u<c;u++){var l=p[u];if(i.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?o=!1:r.add(l);else{var d=i.props[l],f=n[l]||new Set;"name"===l&&s||!f.has(d)?(f.add(d),n[l]=f):o=!1}}}return o}}()).reverse().map((function(e,t){var r=e.key||t;return i.default.cloneElement(e,{key:r})}))}function h(e){var t=e.children,r=(0,i.useContext)(s.AmpStateContext),n=(0,i.useContext)(a.HeadManagerContext);return i.default.createElement(o.default,{reduceComponentsToState:f,headManager:n,inAmpMode:(0,u.isInAmpMode)(r)},t)}h.rewind=function(){};var m=h;t.default=m},"8oxB":function(e,t){var r,n,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"===typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var u,c=[],l=!1,d=-1;function p(){l&&u&&(l=!1,u.length?c=u.concat(c):d=-1,c.length&&f())}function f(){if(!l){var e=a(p);l=!0;for(var t=c.length;t;){for(u=c,c=[];++d<t;)u&&u[d].run();d=-1,t=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new h(e,t)),1!==c.length||l||a(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var i=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=i},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},MX0m:function(e,t,r){e.exports=r("3niX")},Nsbk:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},QeBL:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return A}));var n=r("nKUr"),i=r("MX0m"),o=r.n(i),s=r("g4pe"),a=r.n(s),u=r("q1tI"),c=r.n(u),l=r("7O5W"),d=r("17x9"),p=r.n(d);function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function _(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function g(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),i=b(t.slice(0,n)),o=t.slice(n+1).trim();return i.startsWith("webkit")?e[(r=i,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[i]=o,e}),{})}var x=!1;try{x=!0}catch(N){}function j(e){return l.c.icon?l.c.icon(e):null===e?null:"object"===f(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function S(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?h({},e,t):{}}function w(e){var t=e.forwardedRef,r=v(e,["forwardedRef"]),n=r.icon,i=r.mask,o=r.symbol,s=r.className,a=r.title,u=r.titleId,c=j(n),d=S("classes",[].concat(_(function(e){var t,r=e.spin,n=e.pulse,i=e.fixedWidth,o=e.inverse,s=e.border,a=e.listItem,u=e.flip,c=e.size,l=e.rotation,d=e.pull,p=(h(t={"fa-spin":r,"fa-pulse":n,"fa-fw":i,"fa-inverse":o,"fa-border":s,"fa-li":a,"fa-flip-horizontal":"horizontal"===u||"both"===u,"fa-flip-vertical":"vertical"===u||"both"===u},"fa-".concat(c),"undefined"!==typeof c&&null!==c),h(t,"fa-rotate-".concat(l),"undefined"!==typeof l&&null!==l&&0!==l),h(t,"fa-pull-".concat(d),"undefined"!==typeof d&&null!==d),h(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map((function(e){return p[e]?e:null})).filter((function(e){return e}))}(r)),_(s.split(" ")))),p=S("transform","string"===typeof r.transform?l.c.transform(r.transform):r.transform),f=S("mask",j(i)),m=Object(l.a)(c,y({},d,{},p,{},f,{symbol:o,title:a,titleId:u}));if(!m)return function(){var e;!x&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",c),null;var b=m.abstract,g={ref:t};return Object.keys(r).forEach((function(e){w.defaultProps.hasOwnProperty(e)||(g[e]=r[e])})),O(b[0],g)}w.displayName="FontAwesomeIcon",w.propTypes={border:p.a.bool,className:p.a.string,mask:p.a.oneOfType([p.a.object,p.a.array,p.a.string]),fixedWidth:p.a.bool,inverse:p.a.bool,flip:p.a.oneOf(["horizontal","vertical","both"]),icon:p.a.oneOfType([p.a.object,p.a.array,p.a.string]),listItem:p.a.bool,pull:p.a.oneOf(["right","left"]),pulse:p.a.bool,rotation:p.a.oneOf([0,90,180,270]),size:p.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.a.bool,symbol:p.a.oneOfType([p.a.bool,p.a.string]),title:p.a.string,transform:p.a.oneOfType([p.a.string,p.a.object]),swapOpacity:p.a.bool},w.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var O=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof r)return r;var i=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=g(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[b(t)]=n}return e}),{attrs:{}}),s=n.style,a=void 0===s?{}:s,u=v(n,["style"]);return o.attrs.style=y({},o.attrs.style,{},a),t.apply(void 0,[r.tag,y({},o.attrs,{},u)].concat(_(i)))}.bind(null,c.a.createElement),k=r("nWDx"),C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{day:"numeric",month:"long",year:"numeric"};return new Date(e).toLocaleDateString("en-US",t)},R=r("YNJF"),T=r.n(R),P=function(e){var t=e.posts;return Object(n.jsxs)("main",{className:T.a.postsContainer,children:[Object(n.jsx)("h2",{className:T.a.postsTitle,children:"Posts"}),Object(n.jsx)("ul",{className:T.a.posts,children:t.map((function(e){var t=e.id,r=e.date,i=e.title,o=e.readingTime;return Object(n.jsxs)("li",{className:T.a.post,children:[Object(n.jsx)(k.a,{to:"/posts/".concat(t),className:T.a.postLink,children:i}),Object(n.jsxs)("div",{className:T.a.postMetadata,children:[Object(n.jsx)("small",{className:T.a.postDate,children:C(r)}),Object(n.jsxs)("div",{className:T.a.postReadingTime,children:[Object(n.jsx)(w,{icon:"glasses",className:T.a.postReadingTimeIcon,style:{width:"1.125em"}}),Object(n.jsx)("small",{className:T.a.postReadingTimeText,children:o})]})]})]},t)}))})]})},A=!0;t.default=function(e){var t=e.posts;return Object(n.jsxs)("div",{className:"jsx-1448635513",children:[Object(n.jsxs)(a.a,{children:[Object(n.jsx)("title",{className:"jsx-1448635513",children:"Diego Bonavida"}),Object(n.jsx)("link",{rel:"icon",href:"/favicon.ico?v=1",className:"jsx-1448635513"})]}),Object(n.jsxs)("main",{className:"jsx-1448635513 home",children:[Object(n.jsx)("div",{className:"jsx-1448635513 home__avatar",children:Object(n.jsx)("img",{src:"/avatar.jpg",alt:"Diego Bonavida",className:"jsx-1448635513"})}),Object(n.jsxs)("div",{className:"jsx-1448635513 home__content",children:[Object(n.jsxs)("div",{className:"jsx-1448635513 home__author",children:[Object(n.jsx)("h1",{className:"jsx-1448635513 home__name",children:"Diego Bonavida"}),Object(n.jsx)("p",{className:"jsx-1448635513",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum sollicitudin lacinia. Nam pulvinar mi in risus ullamcorper sollicitudin. Nullam condimentum tortor tempus, malesuada sem ut, luctus tellus."}),Object(n.jsx)("p",{className:"jsx-1448635513",children:"Nullam lacinia elit nec arcu lacinia, vel posuere orci elementum. Maecenas felis nulla, aliquam in leo at, placerat lacinia velit."})]}),Object(n.jsx)(P,{posts:t})]})]}),Object(n.jsx)(o.a,{id:"1448635513",children:[".home.jsx-1448635513{width:100%;}",".home__avatar.jsx-1448635513{width:100px;height:100px;border:3px solid var(--avatar-border);border-radius:50%;padding:8px;-webkit-transition:all 0.2s linear;transition:all 0.2s linear;}",".home__avatar.jsx-1448635513 img.jsx-1448635513{width:100%;height:100%;border-radius:50%;background-size:cover;overflow:hidden;}",".home__content.jsx-1448635513{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:24px;-webkit-transition:all 0.2s linear;transition:all 0.2s linear;}",".home__author.jsx-1448635513{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}",".home__name.jsx-1448635513{color:var(--text-primary);font-size:36px;font-weight:700;line-height:40px;}","p.jsx-1448635513{color:var(--text-primary);}","@media (min-width:768px){.home__avatar.jsx-1448635513{width:150px;height:150px;border-width:4px;}.home__content.jsx-1448635513{margin-top:48px;}}","@media (min-width:1024px){.home__content.jsx-1448635513{-webkit-flex-direction:unset;-ms-flex-direction:unset;flex-direction:unset;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:48px;}}"]})]})}},RIqP:function(e,t,r){var n=r("Ijbi"),i=r("EbDI"),o=r("ZhPi"),s=r("Bnag");e.exports=function(e){return n(e)||i(e)||o(e)||s()}},SevZ:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=o(r("9kyW")),i=o(r("bVZc"));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,o=t.optimizeForSpeed,s=void 0!==o&&o,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;this._sheet=n||new i.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),n&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,i=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var o=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=o,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var i=String(r),o=t+i;return e[o]||(e[o]="jsx-"+(0,n.default)(t+"-"+i)),e[o]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var i=r+n;return t[i]||(t[i]=n.replace(e,r)),t[i]}},t.getIdAndRules=function(e){var t=this,r=e.children,n=e.dynamic,i=e.id;if(n){var o=this.computeId(i,n);return{styleId:o,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(o,e)})):[this.computeSelector(o,r)]}}return{styleId:this.computeId(i),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=s},Xuae:function(e,t,r){"use strict";var n=r("RIqP"),i=r("lwsE"),o=r("W8MJ"),s=(r("PJYZ"),r("7W2i")),a=r("a1gu"),u=r("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var i=u(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return a(this,r)}}t.__esModule=!0,t.default=void 0;var l=r("q1tI"),d=function(e){s(r,e);var t=c(r);function r(e){var o;return i(this,r),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=d},YNJF:function(e,t,r){e.exports={postsContainer:"HomePosts_postsContainer__26Eua",postsTitle:"HomePosts_postsTitle__1GSvB",posts:"HomePosts_posts__1iB_u",post:"HomePosts_post__oHjEf",postLink:"HomePosts_postLink__3zn_c",postMetadata:"HomePosts_postMetadata__1O4wk",postReadingTime:"HomePosts_postReadingTime__1ztQL",postDate:"HomePosts_postDate__1j1KD",postReadingTimeText:"HomePosts_postReadingTimeText__uPAMn",postReadingTimeIcon:"HomePosts_postReadingTimeIcon__2X_LV"}},a1gu:function(e,t,r){var n=r("cDf5"),i=r("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?i(e):t}},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(e){var t=void 0===e?{}:e,r=t.name,o=void 0===r?"stylesheet":r,a=t.optimizeForSpeed,u=void 0===a?n:a,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;s(i(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#"+o+"-deleted-rule____{}",s("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,o,a,u=e.prototype;return u.setOptimizeForSpeed=function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(s(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(a){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(o){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];s(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,r){t&&s(i(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return r?o.insertBefore(n,r):o.appendChild(n),n},t=e,(o=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,o),a&&r(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=o}).call(this,r("8oxB"))},g4pe:function(e,t,r){e.exports=r("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var i=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=i}},[["/EDR",0,1,2,3]]]);