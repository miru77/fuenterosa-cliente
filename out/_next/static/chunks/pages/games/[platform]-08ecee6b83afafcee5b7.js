_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"8jRI":function(e,t,r){"use strict";var n="%[a-f0-9]{2}",a=new RegExp(n,"gi"),c=new RegExp("("+n+")+","gi");function i(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],i(r),i(n))}function o(e){try{return decodeURIComponent(e)}catch(n){for(var t=e.match(a),r=1;r<t.length;r++)t=(e=i(t,r).join("")).match(a);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},n=c.exec(e);n;){try{r[n[0]]=decodeURIComponent(n[0])}catch(t){var a=o(n[0]);a!==n[0]&&(r[n[0]]=a)}n=c.exec(e)}r["%C2"]="\ufffd";for(var i=Object.keys(r),s=0;s<i.length;s++){var u=i[s];e=e.replace(new RegExp(u,"g"),r[u])}return e}(e)}}},"8yz6":function(e,t,r){"use strict";e.exports=(e,t)=>{if("string"!==typeof e||"string"!==typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},KyHP:function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"b",(function(){return u})),r.d(t,"d",(function(){return p})),r.d(t,"a",(function(){return d})),r.d(t,"e",(function(){return b}));var n=r("vJKn"),a=r.n(n),c=r("rg98"),i=r("wyBh");function o(e){return s.apply(this,arguments)}function s(){return(s=Object(c.a)(a.a.mark((function e(t){var r,n,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="_limit=".concat(t),"_sort=createdAt:desc",n="".concat(i.a,"/games?").concat(r,"&").concat("_sort=createdAt:desc"),e.next=6,fetch(n);case 6:return c=e.sent,o=c.json(),e.abrupt("return",o);case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function u(e,t,r){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(a.a.mark((function e(t,r,n){var c,o,s,u,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c="_limit=".concat(r),"_sort=createdAt:desc",o="_start=".concat(n),s="".concat(i.a,"/games?platform.url=").concat(t,"&").concat(c,"&").concat("_sort=createdAt:desc","&").concat(o),e.next=7,fetch(s);case 7:return u=e.sent,l=u.json(),e.abrupt("return",l);case 12:return e.prev=12,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(a.a.mark((function e(t){var r,n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat(i.a,"/games/count?platform.url=").concat(t),e.next=4,fetch(r);case 4:return n=e.sent,e.next=7,n.json();case 7:return c=e.sent,e.abrupt("return",c);case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function d(e){return g.apply(this,arguments)}function g(){return(g=Object(c.a)(a.a.mark((function e(t){var r,n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat(i.a,"/games?url=").concat(t),e.next=4,fetch(r);case 4:return n=e.sent,e.next=7,n.json();case 7:return c=e.sent,e.abrupt("return",c[0]);case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function b(e){return m.apply(this,arguments)}function m(){return(m=Object(c.a)(a.a.mark((function e(t){var r,n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat(i.a,"/games?_q=").concat(t),e.next=4,fetch(r);case 4:return n=e.sent,e.next=7,n.json();case 7:return c=e.sent,e.abrupt("return",c);case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}},NrgV:function(e,t,r){"use strict";var n=r("wx14"),a=r("iuhU"),c=(r("17x9"),r("q1tI")),i=r.n(c),o=r("ZeOK"),s=r("ICNK"),u=r("Y53p"),l=r("H+2d");function p(e){var t=e.active,r=e.children,c=e.className,f=e.content,d=e.disabled,g=e.indeterminate,b=e.inline,m=e.inverted,v=e.size,y=Object(a.a)("ui",v,Object(o.a)(t,"active"),Object(o.a)(d,"disabled"),Object(o.a)(g,"indeterminate"),Object(o.a)(m,"inverted"),Object(o.a)(r||f,"text"),Object(o.b)(b,"inline"),"loader",c),j=Object(s.a)(p,e),h=Object(u.a)(p,e);return i.a.createElement(h,Object(n.a)({},j,{className:y}),l.a.isNil(r)?f:r)}p.handledProps=["active","as","children","className","content","disabled","indeterminate","inline","inverted","size"],p.propTypes={},t.a=p},Tidf:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/[platform]",function(){return r("acqg")}])},ZFOp:function(e,t,r){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},acqg:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return S}));var n=r("nKUr"),a=r("vJKn"),c=r.n(a),i=r("rg98"),o=r("q1tI"),s=r.n(o),u=r("20a2"),l=r("bq+c"),p=r("KyHP"),f=r("NrgV"),d=r("LvDl"),g=r("ggQW"),b=r("wx14"),m=r("dI71"),v=r("zmn3"),y=r("LrWZ"),j=r("JpOH"),h=(r("17x9"),r("sFTa")),O=r("ICNK"),x=r("lWiA"),I=r("R6OX"),w=r("R2a4"),k=r.n(w),P=r("MZgk"),N=r("WzmB"),C=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).handleClick=function(e){Object(j.a)(t.props,"onClick",e,t.props)},t.handleKeyDown=function(e){Object(j.a)(t.props,"onKeyDown",e,t.props),k.a.getCode(e)===k.a.Enter&&Object(j.a)(t.props,"onClick",e,t.props)},t.handleOverrides=function(){return{onClick:t.handleClick,onKeyDown:t.handleKeyDown}},t}return Object(m.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.active,r=e.type,n=this.props.disabled||"ellipsisItem"===r;return N.a.create(this.props,{defaultProps:{active:t,"aria-current":t,"aria-disabled":n,disabled:n,onClick:this.handleClick,onKeyDown:this.handleKeyDown,tabIndex:n?-1:0},overrideProps:this.handleOverrides})},t}(o.Component);C.handledProps=["active","disabled","onClick","onKeyDown","type"],C.propTypes={},C.create=Object(P.d)(C,(function(e){return{content:e}}));var R=C,F=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).handleItemClick=function(e,r){var n=r.value;+t.state.activePage!==+n&&(t.setState({activePage:n}),Object(j.a)(t.props,"onPageChange",e,Object(b.a)({},t.props,{activePage:n})))},t.handleItemOverrides=function(e,r,n){return function(a){return{active:e,type:r,key:r+"-"+n,onClick:function(e,r){Object(j.a)(a,"onClick",e,r),"ellipsisItem"!==r.type&&t.handleItemClick(e,r)}}}},t}Object(m.a)(t,e);var r=t.prototype;return r.getInitialAutoControlledState=function(){return{activePage:1}},r.render=function(){var e=this,r=this.props,n=r["aria-label"],a=r.boundaryRange,c=r.disabled,i=r.ellipsisItem,o=r.siblingRange,u=r.totalPages,l=this.state.activePage,p=Object(h.a)({activePage:l,boundaryRange:a,hideEllipsis:Object(y.a)(i),siblingRange:o,totalPages:u}),f=Object(O.a)(t,this.props);return s.a.createElement(I.a,Object(b.a)({},f,{"aria-label":n,pagination:!0,role:"navigation"}),Object(v.a)(p,(function(t){var r=t.active,n=t.type,a=t.value;return R.create(e.props[n],{defaultProps:{content:a,disabled:c,value:a},overrideProps:e.handleItemOverrides(r,n,a)})})))},t}(x.a);F.handledProps=["activePage","aria-label","boundaryRange","defaultActivePage","disabled","ellipsisItem","firstItem","lastItem","nextItem","onPageChange","pageItem","prevItem","siblingRange","totalPages"],F.propTypes={},F.autoControlledProps=["activePage"],F.defaultProps={"aria-label":"Pagination Navigation",boundaryRange:1,ellipsisItem:"...",firstItem:{"aria-label":"First item",content:"\xab"},lastItem:{"aria-label":"Last item",content:"\xbb"},nextItem:{"aria-label":"Next item",content:"\u27e9"},pageItem:{},prevItem:{"aria-label":"Previous item",content:"\u27e8"},siblingRange:1},F.Item=R;var E=r("cr+I"),_=r.n(E);function A(e){var t=e.totalGames,r=e.page,a=e.limitPerPage,c=Math.ceil(t/a),i=Object(u.useRouter)(),o=_.a.parseUrl(i.asPath);return Object(n.jsx)("div",{className:"pagination",children:Object(n.jsx)(F,{defaultActivePage:r,totalPages:c,firstItem:null,lastItem:null,onPageChange:function(e,t){return function(e){o.query.page=e;var t=_.a.stringifyUrl(o);console.log(t),i.push(t)}(t.activePage)},boundaryRange:0,siblingRange:1,ellipsisItem:null})})}function S(){var e=Object(u.useRouter)().query,t=Object(o.useState)(null),r=t[0],a=t[1],s=Object(o.useState)(null),b=s[0],m=s[1],v=function(){var t=parseInt(e.page);return e.page&&1!==t?10*t-10:0};return Object(o.useEffect)((function(){Object(i.a)(c.a.mark((function t(){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.platform){t.next=5;break}return t.next=3,Object(p.b)(e.platform,10,v());case 3:r=t.sent,a(r);case 5:case"end":return t.stop()}}),t)})))()}),[e]),Object(o.useEffect)((function(){Object(i.a)(c.a.mark((function t(){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.d)(e.platform);case 2:r=t.sent,m(r);case 4:case"end":return t.stop()}}),t)})))()}),[e]),Object(n.jsxs)(l.a,{className:"platfrom",children:[!r&&Object(n.jsx)(f.a,{active:!0,children:"Cargando articulos..."}),r&&0===Object(d.size)(r)&&Object(n.jsx)("div",{children:"No hay articulos..."}),Object(d.size)(r)>0&&Object(n.jsx)(g.a,{games:r}),b?Object(n.jsx)(A,{totalGames:b,page:e.page?parseInt(e.page):1,limitPerPage:10}):null]})}},c0go:function(e,t,r){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),a=Array.isArray(t),c=0;c<n.length;c++){var i=n[c],o=e[i];(a?-1!==t.indexOf(i):t(i,o,e))&&(r[i]=o)}return r}},"cr+I":function(e,t,r){"use strict";const n=r("ZFOp"),a=r("8jRI"),c=r("8yz6"),i=r("c0go");function o(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function s(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function u(e,t){return t.decode?a(e):e}function l(e){return Array.isArray(e)?e.sort():"object"===typeof e?l(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function p(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function f(e){const t=(e=p(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function d(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function g(e,t){o((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const a="string"===typeof r&&r.includes(e.arrayFormatSeparator),c="string"===typeof r&&!a&&u(r,e).includes(e.arrayFormatSeparator);r=c?u(r,e):r;const i=a||c?r.split(e.arrayFormatSeparator).map((t=>u(t,e))):null===r?r:u(r,e);n[t]=i};case"bracket-separator":return(t,r,n)=>{const a=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!a)return void(n[t]=r?u(r,e):r);const c=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>u(t,e)));void 0!==n[t]?n[t]=[].concat(n[t],c):n[t]=c};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!==typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const a of e.split("&")){if(""===a)continue;let[e,i]=c(t.decode?a.replace(/\+/g," "):a,"=");i=void 0===i?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?i:u(i,t),r(u(e,t),i,n)}for(const a of Object.keys(n)){const e=n[a];if("object"===typeof e&&null!==e)for(const r of Object.keys(e))e[r]=d(e[r],t);else n[a]=d(e,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"===typeof r&&!Array.isArray(r)?e[t]=l(r):e[t]=r,e}),Object.create(null))}t.extract=f,t.parse=g,t.stringify=(e,t)=>{if(!e)return"";o((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>{return t.skipNull&&(null===(n=e[r])||void 0===n)||t.skipEmptyString&&""===e[r];var n},n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const a=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[s(t,e),"[",a,"]"].join("")]:[...r,[s(t,e),"[",s(a,e),"]=",s(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[s(t,e),"[]"].join("")]:[...r,[s(t,e),"[]=",s(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,a)=>void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[s(r,e),t,s(a,e)].join("")]:[[n,s(a,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,s(t,e)]:[...r,[s(t,e),"=",s(n,e)].join("")]}}(t),a={};for(const i of Object.keys(e))r(i)||(a[i]=e[i]);const c=Object.keys(a);return!1!==t.sort&&c.sort(t.sort),c.map((r=>{const a=e[r];return void 0===a?"":null===a?s(r,t):Array.isArray(a)?0===a.length&&"bracket-separator"===t.arrayFormat?s(r,t)+"[]":a.reduce(n(r),[]).join("&"):s(r,t)+"="+s(a,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,n]=c(e,"#");return Object.assign({url:r.split("?")[0]||"",query:g(f(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:u(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0},r);const n=p(e.url).split("?")[0]||"",a=t.extract(e.url),c=t.parse(a,{sort:!1}),i=Object.assign(c,e.query);let o=t.stringify(i,r);o&&(o=`?${o}`);let u=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(u=`#${s(e.fragmentIdentifier,r)}`),`${n}${o}${u}`},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0},n);const{url:a,query:c,fragmentIdentifier:o}=t.parseUrl(e,n);return t.stringifyUrl({url:a,query:i(c,r),fragmentIdentifier:o},n)},t.exclude=(e,r,n)=>{const a=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,a,n)}},ggQW:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r("nKUr"),a=(r("q1tI"),r("LvDl")),c=r("YFqc"),i=r.n(c),o=r("+6Dn"),s=r("5XkN"),u=r("MhZx"),l=r("XQoO");function p(e){var t=e.games,r=Object(u.a)().width;return Object(n.jsx)("div",{className:"list-games",children:Object(n.jsx)(o.a,{children:Object(n.jsx)(o.a.Row,{columns:function(){switch(!0){case r>l.a:return 5;case r>l.b:return 3;case r>l.c:return 2;default:return 1}}(),children:Object(a.map)(t,(function(e){return Object(n.jsx)(f,{game:e})}))})})})}function f(e){var t=e.game;return Object(n.jsx)(o.a.Column,{className:"list-games__game",children:Object(n.jsx)(i.a,{href:"/".concat(t.url),children:Object(n.jsxs)("a",{children:[Object(n.jsxs)("div",{className:"list-games__game-poster",children:[Object(n.jsx)(s.a,{src:t.poster.url,alt:t.title}),Object(n.jsxs)("div",{className:"list-games__game-poster-info",children:[t.discount?Object(n.jsxs)("span",{className:"discount",children:["-",t.discount,"%"]}):Object(n.jsx)("span",{}),Object(n.jsxs)("span",{className:"price",children:[t.price,"$"]})]})]}),Object(n.jsx)("h2",{children:t.title})]})})})}},sFTa:function(e,t,r){"use strict";var n=function(e){return{active:!1,type:"ellipsisItem",value:e}},a=function(e){return{active:!1,type:"prevItem",value:Math.max(1,e-1)}},c=function(e,t){return{active:!1,type:"nextItem",value:Math.min(e+1,t)}},i=function(e){return{active:!1,type:"lastItem",value:e}},o=Math.ceil,s=Math.max;var u=function(e,t,r,n){for(var a=-1,c=s(o((t-e)/(r||1)),0),i=Array(c);c--;)i[n?c:++a]=e,e+=r;return i},l=r("XFn8"),p=r("ywm8");var f=function(e){return function(t,r,n){return n&&"number"!=typeof n&&Object(l.a)(t,r,n)&&(r=n=void 0),t=Object(p.a)(t),void 0===r?(r=t,t=0):r=Object(p.a)(r),n=void 0===n?t<r?1:-1:Object(p.a)(n),u(t,r,n,e)}}(),d=r("zmn3"),g=function(e,t,r){var a=t-1;return(a!==e+1?n:r)(a)},b=function(e,t,r){var a=e+1;return(a!==t-1?n:r)(a)},m=function(e,t,r){return Object(d.a)(f(e,t+1),r)};t.a=function(e){var t,r={activePage:+(t=e).activePage,boundaryRange:+t.boundaryRange,hideEllipsis:!!t.hideEllipsis,siblingRange:+t.siblingRange,totalPages:+t.totalPages},n=r.activePage,o=r.totalPages,s=function(e){return function(t){return{active:e===t,type:"pageItem",value:t}}}(n),u=function(e){var t=e.boundaryRange;return 1+(e.hideEllipsis?0:2)+2*e.siblingRange+2*t>=e.totalPages}(r)?m(1,o,s):function(e,t){var r=e.activePage,n=e.boundaryRange,a=e.hideEllipsis,c=e.siblingRange,i=e.totalPages,o=a?0:1,s=n,u=m(1,s,t),l=i+1-n,p=m(l,i,t),f=Math.min(Math.max(r-c,s+o+1),l-o-2*c-1),d=f+2*c,v=m(f,d,t);return[].concat(u,[!a&&g(s,f,t)],v,[!a&&b(d,l,t)],p).filter(Boolean)}(r,s);return[{active:!1,type:"firstItem",value:1},a(n)].concat(u,[c(n,o),i(o)])}}},[["Tidf",1,2,3,0,4]]]);