/*! For license information please see 99.5d762072.chunk.js.LICENSE.txt */
(self.webpackChunklyrics=self.webpackChunklyrics||[]).push([[99],{8232:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(5043);const s=function(e){const t=(0,n.useRef)(e);return(0,n.useEffect)((()=>{t.current=e}),[e]),t}},1456:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var n=r(5043),s=r(8232);function a(e){const t=(0,s.A)(e);return(0,n.useCallback)((function(){return t.current&&t.current(...arguments)}),[t])}},4723:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var n=r(5043);const s="undefined"!==typeof r.g&&r.g.navigator&&"ReactNative"===r.g.navigator.product,a="undefined"!==typeof document||s?n.useLayoutEffect:n.useEffect},8293:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var n=r(5043);const s=e=>e&&"function"!==typeof e?t=>{e.current=t}:e;const a=function(e,t){return(0,n.useMemo)((()=>function(e,t){const r=s(e),n=s(t);return e=>{r&&r(e),n&&n(e)}}(e,t)),[e,t])}},6723:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(5043);function s(){const e=(0,n.useRef)(!0),t=(0,n.useRef)((()=>e.current));return(0,n.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),t.current}},1342:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(5043);function s(e){const t=(0,n.useRef)(null);return(0,n.useEffect)((()=>{t.current=e})),t.current}},4140:(e,t,r)=>{"use strict";r.d(t,{Am:()=>o,Ay:()=>i});var n=r(5043),s=r(579);const a=["as","disabled"];function o(e){let{tagName:t,disabled:r,href:n,target:s,rel:a,role:o,onClick:c,tabIndex:i=0,type:u}=e;t||(t=null!=n||null!=s||null!=a?"a":"button");const l={tagName:t};if("button"===t)return[{type:u||"button",disabled:r},l];const d=e=>{(r||"a"===t&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),r?e.stopPropagation():null==c||c(e)};return"a"===t&&(n||(n="#"),r&&(n=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:r?void 0:i,href:n,target:"a"===t?s:void 0,"aria-disabled":r||void 0,rel:"a"===t?a:void 0,onClick:d,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),d(e))}},l]}const c=n.forwardRef(((e,t)=>{let{as:r,disabled:n}=e,c=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,a);const[i,{tagName:u}]=o(Object.assign({tagName:r,disabled:n},c));return(0,s.jsx)(u,Object.assign({},c,i,{ref:t}))}));c.displayName="Button";const i=c},5425:(e,t,r)=>{"use strict";r.d(t,{sE:()=>s});const n="data-rr-ui-";function s(e){return"".concat(n).concat(e)}},5901:(e,t,r)=>{"use strict";r.d(t,{A:()=>a,u:()=>s});var n=r(5043);const s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):t||null},a=n.createContext(null)},1701:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(5043),s=r(8279);const a=(0,n.createContext)(s.A?window:void 0);a.Provider;function o(){return(0,n.useContext)(a)}},3043:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>c});var n=r(8279),s=!1,a=!1;try{var o={get passive(){return s=!0},get once(){return a=s=!0}};n.A&&(window.addEventListener("test",o,o),window.removeEventListener("test",o,!0))}catch(i){}const c=function(e,t,r,n){if(n&&"boolean"!==typeof n&&!a){var o=n.once,c=n.capture,i=r;!a&&o&&(i=r.__once||function e(n){this.removeEventListener(t,e,c),r.call(this,n)},r.__once=i),e.addEventListener(t,i,s?n:c)}e.addEventListener(t,r,n)}},8279:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});const n=!("undefined"===typeof window||!window.document||!window.document.createElement)},2631:(e,t,r)=>{"use strict";function n(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}r.d(t,{A:()=>n})},1094:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var n=r(3043);const s=function(e,t,r,n){var s=n&&"boolean"!==typeof n?n.capture:n;e.removeEventListener(t,r,s),r.__once&&e.removeEventListener(t,r.__once,s)};const a=function(e,t,r,a){return(0,n.Ay)(e,t,r,a),function(){s(e,t,r,a)}}},182:(e,t,r)=>{"use strict";function n(e){return e&&e.ownerDocument||document}r.d(t,{A:()=>n})},3818:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function s(e,t){return n(e.querySelectorAll(t))}},2740:e=>{"use strict";e.exports=function(e,t,r,n,s,a,o,c){if(!e){var i;if(void 0===t)i=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,n,s,a,o,c],l=0;(i=new Error(t.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw i.framesToPop=1,i}}},1497:(e,t,r)=>{"use strict";var n=r(3218);function s(){}function a(){}a.resetWarningCache=s,e.exports=function(){function e(e,t,r,s,a,o){if(o!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:s};return r.PropTypes=r,r}},5173:(e,t,r)=>{e.exports=r(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4282:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var n=r(8139),s=r.n(n),a=r(5043),o=r(4140),c=r(7852),i=r(579);const u=a.forwardRef(((e,t)=>{let{as:r,bsPrefix:n,variant:a="primary",size:u,active:l=!1,disabled:d=!1,className:f,...p}=e;const v=(0,c.oU)(n,"btn"),[m,{tagName:y}]=(0,o.Am)({tagName:r,disabled:d,...p}),b=y;return(0,i.jsx)(b,{...m,...p,ref:t,disabled:d,className:s()(f,v,l&&"active",a&&"".concat(v,"-").concat(a),u&&"".concat(v,"-").concat(u),p.href&&d&&"disabled")})}));u.displayName="Button";const l=u},599:(e,t,r)=>{"use strict";r.d(t,{A:()=>u});var n=r(8139),s=r.n(n),a=r(5043),o=r(7852),c=r(579);const i=a.forwardRef(((e,t)=>{let{bsPrefix:r,size:n,vertical:a=!1,className:i,role:u="group",as:l="div",...d}=e;const f=(0,o.oU)(r,"btn-group");let p=f;return a&&(p="".concat(f,"-vertical")),(0,c.jsx)(l,{...d,ref:t,role:u,className:s()(i,p,n&&"".concat(f,"-").concat(n))})}));i.displayName="ButtonGroup";const u=i},8258:(e,t,r)=>{"use strict";r.d(t,{A:()=>S});var n=r(8139),s=r.n(n),a=r(5043),o=r(7852),c=r(579);const i=a.forwardRef(((e,t)=>{let{className:r,bsPrefix:n,as:a="div",...i}=e;return n=(0,o.oU)(n,"card-body"),(0,c.jsx)(a,{ref:t,className:s()(r,n),...i})}));i.displayName="CardBody";const u=i,l=a.forwardRef(((e,t)=>{let{className:r,bsPrefix:n,as:a="div",...i}=e;return n=(0,o.oU)(n,"card-footer"),(0,c.jsx)(a,{ref:t,className:s()(r,n),...i})}));l.displayName="CardFooter";const d=l,f=a.createContext(null);f.displayName="CardHeaderContext";const p=f,v=a.forwardRef(((e,t)=>{let{bsPrefix:r,className:n,as:i="div",...u}=e;const l=(0,o.oU)(r,"card-header"),d=(0,a.useMemo)((()=>({cardHeaderBsPrefix:l})),[l]);return(0,c.jsx)(p.Provider,{value:d,children:(0,c.jsx)(i,{ref:t,...u,className:s()(n,l)})})}));v.displayName="CardHeader";const m=v,y=a.forwardRef(((e,t)=>{let{bsPrefix:r,className:n,variant:a,as:i="img",...u}=e;const l=(0,o.oU)(r,"card-img");return(0,c.jsx)(i,{ref:t,className:s()(a?"".concat(l,"-").concat(a):l,n),...u})}));y.displayName="CardImg";const b=y,h=a.forwardRef(((e,t)=>{let{className:r,bsPrefix:n,as:a="div",...i}=e;return n=(0,o.oU)(n,"card-img-overlay"),(0,c.jsx)(a,{ref:t,className:s()(r,n),...i})}));h.displayName="CardImgOverlay";const g=h,x=a.forwardRef(((e,t)=>{let{className:r,bsPrefix:n,as:a="a",...i}=e;return n=(0,o.oU)(n,"card-link"),(0,c.jsx)(a,{ref:t,className:s()(r,n),...i})}));x.displayName="CardLink";const N=x;var w=r(4488);const A=(0,w.A)("h6"),C=a.forwardRef(((e,t)=>{let{className:r,bsPrefix:n,as:a=A,...i}=e;return n=(0,o.oU)(n,"card-subtitle"),(0,c.jsx)(a,{ref:t,className:s()(r,n),...i})}));C.displayName="CardSubtitle";const j=C,P=a.forwardRef(((e,t)=>{let{className:r,bsPrefix:n,as:a="p",...i}=e;return n=(0,o.oU)(n,"card-text"),(0,c.jsx)(a,{ref:t,className:s()(r,n),...i})}));P.displayName="CardText";const R=P,O=(0,w.A)("h5"),k=a.forwardRef(((e,t)=>{let{className:r,bsPrefix:n,as:a=O,...i}=e;return n=(0,o.oU)(n,"card-title"),(0,c.jsx)(a,{ref:t,className:s()(r,n),...i})}));k.displayName="CardTitle";const E=k,_=a.forwardRef(((e,t)=>{let{bsPrefix:r,className:n,bg:a,text:i,border:l,body:d=!1,children:f,as:p="div",...v}=e;const m=(0,o.oU)(r,"card");return(0,c.jsx)(p,{ref:t,...v,className:s()(n,m,a&&"bg-".concat(a),i&&"text-".concat(i),l&&"border-".concat(l)),children:d?(0,c.jsx)(u,{children:f}):f})}));_.displayName="Card";const S=Object.assign(_,{Img:b,Title:E,Subtitle:j,Body:u,Link:N,Text:R,Header:m,Footer:d,ImgOverlay:g})},8602:(e,t,r)=>{"use strict";r.d(t,{A:()=>u});var n=r(8139),s=r.n(n),a=r(5043),o=r(7852),c=r(579);const i=a.forwardRef(((e,t)=>{const[{className:r,...n},{as:a="div",bsPrefix:i,spans:u}]=function(e){let{as:t,bsPrefix:r,className:n,...a}=e;r=(0,o.oU)(r,"col");const c=(0,o.gy)(),i=(0,o.Jm)(),u=[],l=[];return c.forEach((e=>{const t=a[e];let n,s,o;delete a[e],"object"===typeof t&&null!=t?({span:n,offset:s,order:o}=t):n=t;const c=e!==i?"-".concat(e):"";n&&u.push(!0===n?"".concat(r).concat(c):"".concat(r).concat(c,"-").concat(n)),null!=o&&l.push("order".concat(c,"-").concat(o)),null!=s&&l.push("offset".concat(c,"-").concat(s))})),[{...a,className:s()(n,...u,...l)},{as:t,bsPrefix:r,spans:u}]}(e);return(0,c.jsx)(a,{...n,ref:t,className:s()(r,!u.length&&i)})}));i.displayName="Col";const u=i},3519:(e,t,r)=>{"use strict";r.d(t,{A:()=>u});var n=r(8139),s=r.n(n),a=r(5043),o=r(7852),c=r(579);const i=a.forwardRef(((e,t)=>{let{bsPrefix:r,fluid:n=!1,as:a="div",className:i,...u}=e;const l=(0,o.oU)(r,"container"),d="string"===typeof n?"-".concat(n):"-fluid";return(0,c.jsx)(a,{ref:t,...u,className:s()(i,n?"".concat(l).concat(d):l)})}));i.displayName="Container";const u=i},2663:(e,t,r)=>{"use strict";r.d(t,{Tj:()=>s,mf:()=>a});var n=r(5043);function s(e,t){let r=0;return n.Children.map(e,(e=>n.isValidElement(e)?t(e,r++):e))}function a(e,t){return n.Children.toArray(e).some((e=>n.isValidElement(e)&&e.type===t))}},9125:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});const n=r(5043).createContext(null);n.displayName="NavbarContext";const s=n},7852:(e,t,r)=>{"use strict";r.d(t,{Jm:()=>d,Wz:()=>f,gy:()=>l,oU:()=>u});var n=r(5043);r(579);const s=["xxl","xl","lg","md","sm","xs"],a="xs",o=n.createContext({prefixes:{},breakpoints:s,minBreakpoint:a}),{Consumer:c,Provider:i}=o;function u(e,t){const{prefixes:r}=(0,n.useContext)(o);return e||r[t]||t}function l(){const{breakpoints:e}=(0,n.useContext)(o);return e}function d(){const{minBreakpoint:e}=(0,n.useContext)(o);return e}function f(){const{dir:e}=(0,n.useContext)(o);return"rtl"===e}},8490:(e,t,r)=>{"use strict";r.d(t,{A:()=>d});var n=r(8139),s=r.n(n),a=r(5043),o=r(7852),c=r(4282),i=r(579);const u=()=>{},l=a.forwardRef(((e,t)=>{let{bsPrefix:r,name:n,className:a,checked:l,type:d,onChange:f,value:p,disabled:v,id:m,inputRef:y,...b}=e;return r=(0,o.oU)(r,"btn-check"),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("input",{className:r,name:n,type:d,value:p,ref:y,autoComplete:"off",checked:!!l,disabled:!!v,onChange:f||u,id:m}),(0,i.jsx)(c.A,{...b,ref:t,className:s()(a,v&&"disabled"),type:void 0,role:void 0,as:"label",htmlFor:m})]})}));l.displayName="ToggleButton";const d=l},583:(e,t,r)=>{"use strict";r.d(t,{A:()=>p});var n=r(5043),s=r(2740),a=r.n(s),o=r(1969),c=r(5468),i=r(2663),u=r(599),l=r(8490),d=r(579);const f=n.forwardRef(((e,t)=>{const{children:r,type:s="radio",name:l,value:f,onChange:p,vertical:v=!1,...m}=(0,o.Zw)(e,{value:"onChange"}),y=()=>null==f?[]:[].concat(f);return"radio"!==s||l||a()(!1),(0,d.jsx)(u.A,{...m,ref:t,vertical:v,children:(0,i.Tj)(r,(e=>{const t=y(),{value:r,onChange:a}=e.props;return n.cloneElement(e,{type:s,name:e.name||l,checked:-1!==t.indexOf(r),onChange:(0,c.A)(a,(e=>((e,t)=>{if(!p)return;const r=y(),n=-1!==r.indexOf(e);"radio"!==s?p(n?r.filter((t=>t!==e)):[...r,e],t):n||p(e,t)})(r,e)))})}))})})),p=Object.assign(f,{Button:l.A})},5468:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});const n=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e=>null!=e)).reduce(((e,t)=>{if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];e.apply(this,n),t.apply(this,n)}}),null)}},4488:(e,t,r)=>{"use strict";r.d(t,{A:()=>c});var n=r(5043),s=r(8139),a=r.n(s),o=r(579);const c=e=>n.forwardRef(((t,r)=>(0,o.jsx)("div",{...t,ref:r,className:a()(t.className,e)})))},1969:(e,t,r)=>{"use strict";function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Zw:()=>i});var s=r(8587),a=r(5043);r(2740);function o(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function c(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function i(e,t){return Object.keys(t).reduce((function(r,i){var u,l=r,d=l[o(i)],f=l[i],p=(0,s.A)(l,[o(i),i].map(c)),v=t[i],m=function(e,t,r){var n=(0,a.useRef)(void 0!==e),s=(0,a.useState)(t),o=s[0],c=s[1],i=void 0!==e,u=n.current;return n.current=i,!i&&u&&o!==t&&c(t),[i?e:o,(0,a.useCallback)((function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];r&&r.apply(void 0,[e].concat(n)),c(e)}),[r])]}(f,d,e[v]),y=m[0],b=m[1];return n({},p,((u={})[i]=y,u[v]=b,u))}),e)}function u(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function l(e){this.setState(function(t){var r=this.constructor.getDerivedStateFromProps(e,t);return null!==r&&void 0!==r?r:null}.bind(this))}function d(e,t){try{var r=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(r,n)}finally{this.props=r,this.state=n}}u.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0,d.__suppressDeprecationWarning=!0},6440:e=>{"use strict";var t=function(){};e.exports=t},8139:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=o(e,a(r)))}return e}function a(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=o(t,r));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(s.default=s,e.exports=s):void 0===(r=function(){return s}.apply(t,[]))||(e.exports=r)}()},8587:(e,t,r)=>{"use strict";function n(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}r.d(t,{A:()=>n})}}]);
//# sourceMappingURL=99.5d762072.chunk.js.map