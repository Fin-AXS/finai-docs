(self.webpackChunkfin_ai_docs=self.webpackChunkfin_ai_docs||[]).push([[917],{8:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7757:function(e,t,n){e.exports=n(5666)},9047:function(e,t,n){var r={"./deckgo-highlight-code_2.entry.js":[3414,414]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=9047,e.exports=o},555:function(e,t,n){"use strict";n.d(t,{H:function(){return q},b:function(){return Le},c:function(){return ue},g:function(){return ae},h:function(){return F},p:function(){return S},r:function(){return Re}});var r=n(5671),o=n(3144);function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var a=n(9611);function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&(0,a.Z)(e,t)}var c=n(8);function l(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return i(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function $(e,t,n){return $=f()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&(0,a.Z)(o,n.prototype),o},$.apply(null,arguments)}function h(e){var t="function"==typeof Map?new Map:void 0;return h=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return $(e,arguments,s(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),(0,a.Z)(r,e)},h(e)}var m=n(5861),p=n(2982);var d=n(181);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,t)||(0,d.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=n(7757),g=n.n(y);function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}var b,E,x=!1,L=!1,k="undefined"!=typeof window?window:{},N=k.document||{head:{}},R={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}},S=function(e){return Promise.resolve(e)},O=function(){try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1}(),j=function(e,t,n,r){n&&n.map((function(n){var r=v(n,3),o=r[0],i=r[1],a=r[2],u=T(e,o),c=P(t,a),l=_(o);R.ael(u,i,c,l),(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return R.rel(u,i,c,l)}))}))},P=function(e,t){return function(n){try{256&e.$flags$?e.$lazyInstance$[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}catch(r){je(r)}}},T=function(e,t){return 4&t?N:e},_=function(e){return 0!=(2&e)},M="{visibility:hidden}.hydrated{visibility:inherit}",I="http://www.w3.org/1999/xlink",A=new WeakMap,C=function(e,t,n){var r=_e.get(e);O&&n?(r=r||new CSSStyleSheet).replace(t):r=t,_e.set(e,r)},Z=function(e){var t=e.$cmpMeta$,n=e.$hostElement$,r=t.$flags$,o=(t.$tagName$,function(){}),i=function(e,t,n,r){var o=H(t),i=_e.get(o);if(e=11===e.nodeType?e:N,i)if("string"==typeof i){e=e.head||e;var a,u=A.get(e);u||A.set(e,u=new Set),u.has(o)||((a=N.createElement("style")).innerHTML=i,e.insertBefore(a,e.querySelector("link")),u&&u.add(o))}else e.adoptedStyleSheets.includes(i)||(e.adoptedStyleSheets=[].concat((0,p.Z)(e.adoptedStyleSheets),[i]));return o}(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&r&&(n["s-sc"]=i,n.classList.add(i+"-h")),o()},H=function(e,t){return"sc-"+e.$tagName$},U={},B=function(e){return"object"===(e=typeof e)||"function"===e},F=function(e,t){for(var n=null,r=null,o=!1,i=!1,a=[],u=function t(r){for(var u=0;u<r.length;u++)n=r[u],Array.isArray(n)?t(n):null!=n&&"boolean"!=typeof n&&((o="function"!=typeof e&&!B(n))&&(n=String(n)),o&&i?a[a.length-1].$text$+=n:a.push(o?G(null,n):n),i=o)},c=arguments.length,l=new Array(c>2?c-2:0),s=2;s<c;s++)l[s-2]=arguments[s];if(u(l),t){t.key&&(r=t.key);var f=t.className||t.class;f&&(t.class="object"!=typeof f?f:Object.keys(f).filter((function(e){return f[e]})).join(" "))}if("function"==typeof e)return e(null===t?{}:t,a,z);var $=G(e,null);return $.$attrs$=t,a.length>0&&($.$children$=a),$.$key$=r,$},G=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null};return n},q={},z={forEach:function(e,t){return e.map(D).forEach(t)},map:function(e,t){return e.map(D).map(t).map(V)}},D=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}},V=function(e){if("function"==typeof e.vtag){var t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),F.apply(void 0,[e.vtag,t].concat((0,p.Z)(e.vchildren||[])))}var n=G(e.vtag,e.vtext);return n.$attrs$=e.vattrs,n.$children$=e.vchildren,n.$key$=e.vkey,n.$name$=e.vname,n},W=function(e,t,n,r,o,i){if(n!==r){var a=Oe(e,t),u=t.toLowerCase();if("class"===t){var c=e.classList,l=K(n),s=K(r);c.remove.apply(c,(0,p.Z)(l.filter((function(e){return e&&!s.includes(e)})))),c.add.apply(c,(0,p.Z)(s.filter((function(e){return e&&!l.includes(e)}))))}else if("style"===t){for(var f in n)r&&null!=r[f]||(f.includes("-")?e.style.removeProperty(f):e.style[f]="");for(var $ in r)n&&r[$]===n[$]||($.includes("-")?e.style.setProperty($,r[$]):e.style[$]=r[$])}else if("key"===t);else if("ref"===t)r&&r(e);else if(a||"o"!==t[0]||"n"!==t[1]){var h=B(r);if((a||h&&null!==r)&&!o)try{if(e.tagName.includes("-"))e[t]=r;else{var m=null==r?"":r;"list"===t?a=!1:null!=n&&e[t]==m||(e[t]=m)}}catch(v){}var d=!1;u!==(u=u.replace(/^xlink\:?/,""))&&(t=u,d=!0),null==r||!1===r?!1===r&&""!==e.getAttribute(t)||(d?e.removeAttributeNS(I,t):e.removeAttribute(t)):(!a||4&i||o)&&!h&&(r=!0===r?"":r,d?e.setAttributeNS(I,t,r):e.setAttribute(t,r))}else t="-"===t[2]?t.slice(3):Oe(k,u)?u.slice(2):u[2]+t.slice(3),n&&R.rel(e,t,n,!1),r&&R.ael(e,t,r,!1)}},Y=/\s/,K=function(e){return e?e.split(Y):[]},X=function(e,t,n,r){var o=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,i=e&&e.$attrs$||U,a=t.$attrs$||U;for(r in i)r in a||W(o,r,i[r],void 0,n,t.$flags$);for(r in a)W(o,r,i[r],a[r],n,t.$flags$)},J=function e(t,n,r,o){var i,a,u=n.$children$[r],c=0;if(null!==u.$text$)i=u.$elm$=N.createTextNode(u.$text$);else{if(x||(x="svg"===u.$tag$),i=u.$elm$=N.createElementNS(x?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",u.$tag$),x&&"foreignObject"===u.$tag$&&(x=!1),X(null,u,x),null!=b&&i["s-si"]!==b&&i.classList.add(i["s-si"]=b),u.$children$)for(c=0;c<u.$children$.length;++c)(a=e(t,u,c))&&i.appendChild(a);"svg"===u.$tag$?x=!1:"foreignObject"===i.tagName&&(x=!0)}return i},Q=function(e,t,n,r,o,i){var a,u=e;for(u.shadowRoot&&u.tagName===E&&(u=u.shadowRoot);o<=i;++o)r[o]&&(a=J(null,n,o))&&(r[o].$elm$=a,u.insertBefore(a,t))},ee=function(e,t,n,r,o){for(;t<=n;++t)(r=e[t])&&(o=r.$elm$,oe(r),o.remove())},te=function(e,t,n,r){for(var o,i,a=0,u=0,c=0,l=0,s=t.length-1,f=t[0],$=t[s],h=r.length-1,m=r[0],p=r[h];a<=s&&u<=h;)if(null==f)f=t[++a];else if(null==$)$=t[--s];else if(null==m)m=r[++u];else if(null==p)p=r[--h];else if(ne(f,m))re(f,m),f=t[++a],m=r[++u];else if(ne($,p))re($,p),$=t[--s],p=r[--h];else if(ne(f,p))re(f,p),e.insertBefore(f.$elm$,$.$elm$.nextSibling),f=t[++a],p=r[--h];else if(ne($,m))re($,m),e.insertBefore($.$elm$,f.$elm$),$=t[--s],m=r[++u];else{for(c=-1,l=a;l<=s;++l)if(t[l]&&null!==t[l].$key$&&t[l].$key$===m.$key$){c=l;break}c>=0?((i=t[c]).$tag$!==m.$tag$?o=J(t&&t[u],n,c):(re(i,m),t[c]=void 0,o=i.$elm$),m=r[++u]):(o=J(t&&t[u],n,u),m=r[++u]),o&&f.$elm$.parentNode.insertBefore(o,f.$elm$)}a>s?Q(e,null==r[h+1]?null:r[h+1].$elm$,n,r,u,h):u>h&&ee(t,a,s)},ne=function(e,t){return e.$tag$===t.$tag$&&e.$key$===t.$key$},re=function(e,t){var n=t.$elm$=e.$elm$,r=e.$children$,o=t.$children$,i=t.$tag$,a=t.$text$;null===a?(x="svg"===i||"foreignObject"!==i&&x,"slot"===i||X(e,t,x),null!==r&&null!==o?te(n,r,t,o):null!==o?(null!==e.$text$&&(n.textContent=""),Q(n,null,t,o,0,o.length-1)):null!==r&&ee(r,0,r.length-1),x&&"svg"===i&&(x=!1)):e.$text$!==a&&(n.data=a)},oe=function e(t){t.$attrs$&&t.$attrs$.ref&&t.$attrs$.ref(null),t.$children$&&t.$children$.map(e)},ie=function(e,t){var n,r=e.$hostElement$,o=e.$cmpMeta$,i=e.$vnode$||G(null,null),a=(n=t)&&n.$tag$===q?t:F(null,null,t);E=r.tagName,o.$attrsToReflect$&&(a.$attrs$=a.$attrs$||{},o.$attrsToReflect$.map((function(e){var t=v(e,2),n=t[0],o=t[1];return a.$attrs$[o]=r[n]}))),a.$tag$=null,a.$flags$|=4,e.$vnode$=a,a.$elm$=i.$elm$=r.shadowRoot||r,b=r["s-sc"],re(i,a)},ae=function(e){return Ne(e).$hostElement$},ue=function(e,t,n){var r=ae(e);return{emit:function(e){return ce(r,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}}},ce=function(e,t,n){var r=R.ce(t,n);return e.dispatchEvent(r),r},le=function(e,t){t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))},se=function(e,t){if(e.$flags$|=16,!(4&e.$flags$)){le(e,e.$ancestorComponent$);return Ue((function(){return fe(e,t)}))}e.$flags$|=512},fe=function(e,t){var n,r=(e.$cmpMeta$.$tagName$,function(){}),o=e.$lazyInstance$;return t&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((function(e){var t=v(e,2),n=t[0],r=t[1];return de(o,n,r)})),e.$queuedListeners$=null),n=de(o,"componentWillLoad")),r(),ve(n,(function(){return $e(e,o,t)}))},$e=function(){var e=(0,m.Z)(g().mark((function e(t,n,r){var o,i,a,u,c,l;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=t.$hostElement$,t.$cmpMeta$.$tagName$,i=function(){},a=o["s-rc"],r&&Z(t),t.$cmpMeta$.$tagName$,u=function(){},he(t,n),a&&(a.map((function(e){return e()})),o["s-rc"]=void 0),u(),i(),c=o["s-p"],l=function(){return me(t)},0===c.length?l():(Promise.all(c).then(l),t.$flags$|=4,c.length=0);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),he=function(e,t,n){try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,ie(e,t)}catch(r){je(r,e.$hostElement$)}return null},me=function(e){e.$cmpMeta$.$tagName$;var t=e.$hostElement$,n=function(){},r=e.$lazyInstance$,o=e.$ancestorComponent$;64&e.$flags$?(de(r,"componentDidUpdate"),n()):(e.$flags$|=64,ye(t),de(r,"componentDidLoad"),n(),e.$onReadyResolve$(t),o||pe()),e.$onInstanceResolve$(t),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&He((function(){return se(e,!1)})),e.$flags$&=-517},pe=function(e){ye(N.documentElement),He((function(){return ce(k,"appload",{detail:{namespace:"deckdeckgo-highlight-code"}})}))},de=function(e,t,n){if(e&&e[t])try{return e[t](n)}catch(r){je(r)}},ve=function(e,t){return e&&e.then?e.then(t):t()},ye=function(e){return e.classList.add("hydrated")},ge=function(e,t,n,r){var o,i,a=Ne(e),u=a.$hostElement$,c=a.$instanceValues$.get(t),l=a.$flags$,s=a.$lazyInstance$;if(o=n,i=r.$members$[t][0],n=null==o||B(o)?o:4&i?"false"!==o&&(""===o||!!o):1&i?String(o):o,!(8&l&&void 0!==c||n===c)&&(a.$instanceValues$.set(t,n),s)){if(r.$watchers$&&128&l){var f=r.$watchers$[t];f&&f.map((function(e){try{s[e](n,c,t)}catch(r){je(r,u)}}))}2==(18&l)&&se(a,!1)}},we=function(e,t,n){if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);var r=Object.entries(t.$members$),o=e.prototype;if(r.map((function(e){var r=v(e,2),i=r[0],a=v(r[1],1)[0];31&a||2&n&&32&a?Object.defineProperty(o,i,{get:function(){return e=i,Ne(this).$instanceValues$.get(e);var e},set:function(e){ge(this,i,e,t)},configurable:!0,enumerable:!0}):1&n&&64&a&&Object.defineProperty(o,i,{value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=Ne(this);return r.$onInstancePromise$.then((function(){var e;return(e=r.$lazyInstance$)[i].apply(e,t)}))}})})),1&n){var i=new Map;o.attributeChangedCallback=function(e,t,n){var r=this;R.jmp((function(){var t=i.get(e);r.hasOwnProperty(t)&&(n=r[t],delete r[t]),r[t]=(null!==n||"boolean"!=typeof r[t])&&n}))},e.observedAttributes=r.filter((function(e){var t=v(e,2);t[0];return 15&t[1][0]})).map((function(e){var n=v(e,2),r=n[0],o=n[1],a=o[1]||r;return i.set(a,r),512&o[0]&&t.$attrsToReflect$.push([r,a]),a}))}}return e},be=function(){var e=(0,m.Z)(g().mark((function e(t,n,r,o,i){var a,u,c,l,s,f,$;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=(32&n.$flags$)){e.next=17;break}if(n.$flags$|=32,!(i=Te(r)).then){e.next=9;break}return a=function(){},e.next=7,i;case 7:i=e.sent,a();case 9:i.isProxied||(r.$watchers$=i.watchers,we(i,r,2),i.isProxied=!0),r.$tagName$,u=function(){},n.$flags$|=8;try{new i(n)}catch(t){je(t)}n.$flags$&=-9,n.$flags$|=128,u(),i.style&&(c=i.style,l=H(r),_e.has(l)||(r.$tagName$,s=function(){},C(l,c,!!(1&r.$flags$)),s()));case 17:f=n.$ancestorComponent$,$=function(){return se(n,!0)},f&&f["s-rc"]?f["s-rc"].push($):$();case 20:case"end":return e.stop()}}),e)})));return function(t,n,r,o,i){return e.apply(this,arguments)}}(),Ee=function(e){if(0==(1&R.$flags$)){var t=Ne(e),n=t.$cmpMeta$,r=(n.$tagName$,function(){});if(1&t.$flags$)j(e,t,n.$listeners$);else{t.$flags$|=1;for(var o=e;o=o.parentNode||o.host;)if(o["s-p"]){le(t,t.$ancestorComponent$=o);break}n.$members$&&Object.entries(n.$members$).map((function(t){var n=v(t,2),r=n[0];if(31&v(n[1],1)[0]&&e.hasOwnProperty(r)){var o=e[r];delete e[r],e[r]=o}})),be(e,t,n)}r()}},xe=function(e){if(0==(1&R.$flags$)){var t=Ne(e);t.$rmListeners$&&(t.$rmListeners$.map((function(e){return e()})),t.$rmListeners$=void 0)}},Le=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=function(){},c=[],l=n.exclude||[],s=k.customElements,f=N.head,$=f.querySelector("meta[charset]"),m=N.createElement("style"),p=[],d=!0;Object.assign(R,n),R.$resourcesUrl$=new URL(n.resourcesUrl||"./",N.baseURI).href,e.map((function(e){return e[1].map((function(n){var a={$flags$:n[0],$tagName$:n[1],$members$:n[2],$listeners$:n[3]};a.$members$=n[2],a.$listeners$=n[3],a.$attrsToReflect$=[],a.$watchers$={};var f=a.$tagName$,$=function(e){u(c,e);var n=w(c);function c(e){var t;return(0,r.Z)(this,c),e=i(t=n.call(this,e)),Se(e,a),1&a.$flags$&&e.attachShadow({mode:"open"}),t}return(0,o.Z)(c,[{key:"connectedCallback",value:function(){var e=this;t&&(clearTimeout(t),t=null),d?p.push(this):R.jmp((function(){return Ee(e)}))}},{key:"disconnectedCallback",value:function(){var e=this;R.jmp((function(){return xe(e)}))}},{key:"componentOnReady",value:function(){return Ne(this).$onReadyPromise$}}]),c}(h(HTMLElement));a.$lazyBundleId$=e[0],l.includes(f)||s.get(f)||(c.push(f),s.define(f,we($,a,1)))}))})),m.innerHTML=c+M,m.setAttribute("data-styles",""),f.insertBefore(m,$?$.nextSibling:f.firstChild),d=!1,p.length?p.map((function(e){return e.connectedCallback()})):R.jmp((function(){return t=setTimeout(pe,30)})),a()},ke=new WeakMap,Ne=function(e){return ke.get(e)},Re=function(e,t){return ke.set(t.$lazyInstance$=e,t)},Se=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onInstancePromise$=new Promise((function(e){return n.$onInstanceResolve$=e})),n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e})),e["s-p"]=[],e["s-rc"]=[],j(e,n,t.$listeners$),ke.set(e,n)},Oe=function(e,t){return t in e},je=function(e,t){return(0,console.error)(e,t)},Pe=new Map,Te=function(e,t,r){var o=e.$tagName$.replace(/-/g,"_"),i=e.$lazyBundleId$,a=Pe.get(i);return a?a[o]:n(9047)("./".concat(i,".entry.js")).then((function(e){return Pe.set(i,e),e[o]}),je)},_e=new Map,Me=[],Ie=[],Ae=function(e,t){return function(n){e.push(n),L||(L=!0,t&&4&R.$flags$?He(Ze):R.raf(Ze))}},Ce=function(e){for(var t=0;t<e.length;t++)try{e[t](performance.now())}catch(n){je(n)}e.length=0},Ze=function e(){Ce(Me),Ce(Ie),(L=Me.length>0)&&R.raf(e)},He=function(e){return S().then(e)},Ue=Ae(Ie,!0)},2482:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(7294),o=n(5444);function i(){return r.createElement("div",{className:"footer"},r.createElement("div",{className:"footer-logo"},r.createElement("div",{className:"company"},"FinAI"),r.createElement("div",{className:"copyright"},"© 2021")),r.createElement("div",{className:"footer-links"},r.createElement(o.rU,{to:"/"},"Home"),r.createElement(o.rU,{to:"https://github.com/Fin-AXS"},"GitHub"),r.createElement(o.rU,{to:"/team"},"Team")))}var a=function(e){var t=e.itemName,n=e.subItems;return r.createElement("div",{className:"side-menu-item"},r.createElement("h3",null,t),n&&n.length&&n.map((function(e){return r.createElement(o.rU,{key:e.frontmatter.slug,to:"/"+e.frontmatter.tag+"/"+e.frontmatter.slug},e.frontmatter.title)})))},u=function(e){var t=e.itemName,n=e.link,i=e.subItems;return n?r.createElement(o.rU,{to:n},r.createElement(a,{itemName:t,subItems:i})):r.createElement(a,{itemName:t,subItems:i})};function c(){var e=(0,o.K2)("2642479948"),t=e.site.siteMetadata.title,n=[],i=[],a=[];return e.allMarkdownRemark.nodes.forEach((function(e){var t=e.fileAbsolutePath.match(/^.+docs\/(\w+)\/.+/)[1];"admin"===t?i.push(e):"developer"===t?n.push(e):a.push(e)})),r.createElement("div",{className:"sidebar"},r.createElement("div",null,r.createElement("a",{href:"/",id:"logo"},t)),r.createElement("div",{className:"sidemenu-container"},r.createElement(u,{itemName:"Home",link:"/"}),i.length>0&&r.createElement(u,{itemName:"Admin Guide",subItems:i}),n.length>0&&r.createElement(u,{itemName:"Developer Guide",subItems:n}),a.length>0&&r.createElement(u,{itemName:"Other Guides",subItems:a})))}var l,s=n(555);function f(e){var t=e.children;return r.createElement("div",{className:"layout"},r.createElement("div",{className:"canvas"},r.createElement(c,null),r.createElement("div",{className:"doc-display"},t,r.createElement(i,null))))}!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}(),"undefined"==typeof window?Promise.resolve():(0,s.p)().then((function(){return(0,s.b)([["deckgo-highlight-code_2",[[1,"deckgo-highlight-code",{language:[513],highlightLines:[513,"highlight-lines"],lineNumbers:[516,"line-numbers"],terminal:[513],editable:[4],editableLabel:[1,"editable-label"],theme:[513],revealProgress:[1025,"reveal-progress"],themeStyle:[32],loaded:[32],highlightRows:[32],load:[64],reveal:[64],hide:[64],revealAll:[64],hideAll:[64],nextHighlight:[64],prevHighlight:[64]},[[5,"prismLanguageLoaded","onLanguageLoaded"],[5,"prismLanguageError","onLanguageError"]]],[1,"deckgo-highlight-code-edit",{label:[1]}]]]],l)}))},5666:function(e){var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(P){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(e,t,n){var r=f;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===m){if("throw"===o)throw i;return j()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=k(a,n);if(u){if(u===p)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=s(e,t,n);if("normal"===c.type){if(r=n.done?m:$,c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=m,n.method="throw",n.arg=c.arg)}}}(e,n,a),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(P){return{type:"throw",arg:P}}}e.wrap=l;var f="suspendedStart",$="suspendedYield",h="executing",m="completed",p={};function d(){}function v(){}function y(){}var g={};c(g,i,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(O([])));b&&b!==n&&r.call(b,i)&&(g=b);var E=y.prototype=d.prototype=Object.create(g);function x(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function n(o,i,a,u){var c=s(e[o],e,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,a,u)}),(function(e){n("throw",e,a,u)})):t.resolve(f).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,u)}))}u(c.arg)}var o;this._invoke=function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}}function k(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=s(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function R(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function O(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:j}}function j(){return{value:t,done:!0}}return v.prototype=y,c(E,"constructor",y),c(y,"constructor",v),v.displayName=c(y,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,u,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},x(L.prototype),c(L.prototype,a,(function(){return this})),e.AsyncIterator=L,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new L(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(E),c(E,u,"Generator"),c(E,i,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(R),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return u.type="throw",u.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),R(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;R(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:O(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=t}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},5861:function(e,t,n){"use strict";function r(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function u(e){r(a,o,i,u,c,"next",e)}function c(e){r(a,o,i,u,c,"throw",e)}u(void 0)}))}}n.d(t,{Z:function(){return o}})},5671:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},3144:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=a29bb46985cfec9ca7185c78aad57e31b4092b31-afbbf24e6f975e0c118a.js.map