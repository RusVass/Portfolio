function ue(e,t){for(var o=0;o<t.length;o++){const n=t[o];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in e)){const s=Object.getOwnPropertyDescriptor(n,r);s&&Object.defineProperty(e,r,s.get?s:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();function de(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function dt(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var o=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};o.prototype=t.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(o,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}),o}var J={exports:{}},u={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P=Symbol.for("react.element"),fe=Symbol.for("react.portal"),pe=Symbol.for("react.fragment"),me=Symbol.for("react.strict_mode"),ye=Symbol.for("react.profiler"),he=Symbol.for("react.provider"),ve=Symbol.for("react.context"),be=Symbol.for("react.forward_ref"),ge=Symbol.for("react.suspense"),Ee=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),U=Symbol.iterator;function we(e){return e===null||typeof e!="object"?null:(e=U&&e[U]||e["@@iterator"],typeof e=="function"?e:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,Y={};function C(e,t,o){this.props=e,this.context=t,this.refs=Y,this.updater=o||H}C.prototype.isReactComponent={};C.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};C.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function G(){}G.prototype=C.prototype;function I(e,t,o){this.props=e,this.context=t,this.refs=Y,this.updater=o||H}var M=I.prototype=new G;M.constructor=I;X(M,C.prototype);M.isPureReactComponent=!0;var F=Array.isArray,K=Object.prototype.hasOwnProperty,L={current:null},Q={key:!0,ref:!0,__self:!0,__source:!0};function Z(e,t,o){var n,r={},s=null,i=null;if(t!=null)for(n in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(s=""+t.key),t)K.call(t,n)&&!Q.hasOwnProperty(n)&&(r[n]=t[n]);var c=arguments.length-2;if(c===1)r.children=o;else if(1<c){for(var l=Array(c),m=0;m<c;m++)l[m]=arguments[m+2];r.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps,c)r[n]===void 0&&(r[n]=c[n]);return{$$typeof:P,type:e,key:s,ref:i,props:r,_owner:L.current}}function Ce(e,t){return{$$typeof:P,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function D(e){return typeof e=="object"&&e!==null&&e.$$typeof===P}function xe(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(o){return t[o]})}var z=/\/+/g;function T(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xe(""+e.key):t.toString(36)}function S(e,t,o,n,r){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case P:case fe:i=!0}}if(i)return i=e,r=r(i),e=n===""?"."+T(i,0):n,F(r)?(o="",e!=null&&(o=e.replace(z,"$&/")+"/"),S(r,t,o,"",function(m){return m})):r!=null&&(D(r)&&(r=Ce(r,o+(!r.key||i&&i.key===r.key?"":(""+r.key).replace(z,"$&/")+"/")+e)),t.push(r)),1;if(i=0,n=n===""?".":n+":",F(e))for(var c=0;c<e.length;c++){s=e[c];var l=n+T(s,c);i+=S(s,t,o,l,r)}else if(l=we(e),typeof l=="function")for(e=l.call(e),c=0;!(s=e.next()).done;)s=s.value,l=n+T(s,c++),i+=S(s,t,o,l,r);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function j(e,t,o){if(e==null)return e;var n=[],r=0;return S(e,n,"","",function(s){return t.call(o,s,r++)}),n}function Pe(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(o){(e._status===0||e._status===-1)&&(e._status=1,e._result=o)},function(o){(e._status===0||e._status===-1)&&(e._status=2,e._result=o)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var g={current:null},O={transition:null},je={ReactCurrentDispatcher:g,ReactCurrentBatchConfig:O,ReactCurrentOwner:L};function ee(){throw Error("act(...) is not supported in production builds of React.")}u.Children={map:j,forEach:function(e,t,o){j(e,function(){t.apply(this,arguments)},o)},count:function(e){var t=0;return j(e,function(){t++}),t},toArray:function(e){return j(e,function(t){return t})||[]},only:function(e){if(!D(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};u.Component=C;u.Fragment=pe;u.Profiler=ye;u.PureComponent=I;u.StrictMode=me;u.Suspense=ge;u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=je;u.act=ee;u.cloneElement=function(e,t,o){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=X({},e.props),r=e.key,s=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,i=L.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)K.call(t,l)&&!Q.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&c!==void 0?c[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=o;else if(1<l){c=Array(l);for(var m=0;m<l;m++)c[m]=arguments[m+2];n.children=c}return{$$typeof:P,type:e.type,key:r,ref:s,props:n,_owner:i}};u.createContext=function(e){return e={$$typeof:ve,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:he,_context:e},e.Consumer=e};u.createElement=Z;u.createFactory=function(e){var t=Z.bind(null,e);return t.type=e,t};u.createRef=function(){return{current:null}};u.forwardRef=function(e){return{$$typeof:be,render:e}};u.isValidElement=D;u.lazy=function(e){return{$$typeof:_e,_payload:{_status:-1,_result:e},_init:Pe}};u.memo=function(e,t){return{$$typeof:Ee,type:e,compare:t===void 0?null:t}};u.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}};u.unstable_act=ee;u.useCallback=function(e,t){return g.current.useCallback(e,t)};u.useContext=function(e){return g.current.useContext(e)};u.useDebugValue=function(){};u.useDeferredValue=function(e){return g.current.useDeferredValue(e)};u.useEffect=function(e,t){return g.current.useEffect(e,t)};u.useId=function(){return g.current.useId()};u.useImperativeHandle=function(e,t,o){return g.current.useImperativeHandle(e,t,o)};u.useInsertionEffect=function(e,t){return g.current.useInsertionEffect(e,t)};u.useLayoutEffect=function(e,t){return g.current.useLayoutEffect(e,t)};u.useMemo=function(e,t){return g.current.useMemo(e,t)};u.useReducer=function(e,t,o){return g.current.useReducer(e,t,o)};u.useRef=function(e){return g.current.useRef(e)};u.useState=function(e){return g.current.useState(e)};u.useSyncExternalStore=function(e,t,o){return g.current.useSyncExternalStore(e,t,o)};u.useTransition=function(){return g.current.useTransition()};u.version="18.3.1";J.exports=u;var f=J.exports;const a=de(f),ft=ue({__proto__:null,default:a},[f]);var Se={},R;typeof process<"u"&&((R=Se)===null||R===void 0||R.REACT_APP_IDE_DEVMODE);function E(e,t){t===void 0&&(t={});var o=t.insertAt;if(!(!e||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",o==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var Oe=`.table-header {
  border-color: #363636;
  border-width: 1px 0;
  border-style: solid;
  font-weight: 800;
  padding: 10px 20px 10px 10px;
  display: flex;
}
.table-header:after {
  content: "";
}
.table-header .table-header-item {
  flex-basis: 22%;
  color: #444;
}
.table-header .table-header-item-control {
  flex-basis: 78%;
  color: #444;
}`;E(Oe);const ke=()=>a.createElement("div",{className:"table-header"},a.createElement("div",{className:"table-header-item"},"Property name"),a.createElement("div",{className:"table-header-item-control"},"Edit"));var b;(function(e){e.Checkbox="checkbox",e.Input="input",e.Radio="radio",e.Select="select",e.Textarea="textarea",e.JsonEditor="jsonEditor"})(b||(b={}));/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function k(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o}const W=e=>{var{value:t}=e,o=k(e,["value"]);return a.createElement("input",Object.assign({},o,{value:t??"",type:"text"}))},Te=e=>{var{checked:t,className:o}=e,n=k(e,["checked","className"]);return a.createElement("div",{className:o},a.createElement("input",Object.assign({},n,{checked:t??!1,type:"checkbox"})))},Re=e=>{var{optionsData:t}=e,o=k(e,["optionsData"]);return a.createElement("select",Object.assign({},o),t==null?void 0:t.map(n=>a.createElement("option",{value:n,key:n},n)))};var Ne=`.radio-control {
  display: flex;
  align-items: center;
  margin-right: 15px;
}
.radio-control label {
  margin-right: 5px;
}`;E(Ne);const $e=e=>{var{className:t,radioData:o,extValue:n}=e,r=k(e,["className","radioData","extValue"]);return o?a.createElement("div",{className:t},o.map(s=>a.createElement("div",{key:s,className:"radio-control"},a.createElement("label",{htmlFor:String(s)}," ",s),a.createElement("input",Object.assign({},r,{type:"radio",checked:n==s,id:String(s),value:s}))))):null},te=e=>a.createElement("textarea",Object.assign({},e));var Ae=`.json-editor {
  flex-direction: column;
}
.json-editor .json-editor-textarea {
  align-self: start;
  width: 100%;
  min-height: 100px;
  margin: 0 0 10px 0;
}
.json-editor .json-editor-apply-button {
  align-self: start;
}`;E(Ae);const Ie=({className:e,propName:t,propValue:o,propUpdate:n})=>{const[r,s]=f.useState(),i=f.useCallback(m=>{const{currentTarget:{value:h}}=m;s(h)},[]),c=f.useMemo(()=>r==null,[r]),l=f.useCallback(()=>{n(t,r),s(void 0)},[t,r]);return a.createElement("div",{className:e+" json-editor"},a.createElement(te,{className:"json-editor-textarea",onChange:i,id:t,value:r??o}),a.createElement("button",{className:"json-editor-apply-button",disabled:c,onClick:l},"Apply changes"))},Me=({controlType:e,data:t,propName:o,propValue:n,onPropChange:r})=>{switch(e){case b.Input:return a.createElement(W,{className:"table-item-control",id:o,value:n,onChange:r});case b.Textarea:return a.createElement(te,{className:"table-item-control",id:o,value:n,onChange:r});case b.Select:return a.createElement(Re,{className:"table-item-control",id:o,onChange:r,optionsData:t});case b.Checkbox:return a.createElement(Te,{checked:n,id:o,onChange:r});case b.Radio:return a.createElement($e,{className:"table-item-control",extValue:n,name:o,onChange:r,radioData:t});case b.JsonEditor:return a.createElement(Ie,{className:"table-item-control",propValue:n,propName:o,propUpdate:r});default:return a.createElement(W,{className:"table-item-control",id:o,value:n,onChange:r})}};var Le=`.table-item-wrapper {
  border-color: #363636;
  border-width: 0 0 1px 0;
  border-style: solid;
  padding: 10px;
  display: flex;
}
.table-item-wrapper:after {
  content: "";
}
.table-item-wrapper .table-item,
.table-item-wrapper .table-item-control {
  display: flex;
  align-items: center;
  justify-content: start;
}
.table-item-wrapper .table-item {
  flex-basis: 22%;
}
.table-item-wrapper .table-item-control {
  flex-basis: 78%;
}`;E(Le);const q=({propName:e,propValue:t,onPropChange:o,controlType:n,data:r})=>a.createElement("div",{className:"table-item-wrapper"},a.createElement("div",{className:"table-item"},e),a.createElement(Me,{data:r,controlType:n,propName:e,propValue:t,onPropChange:o}));var De=`.table-items {
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}
.table-items:after {
  content: "";
}`;E(De);const Ve=({toolsPropsToEdit:e})=>{const{props:t=null,initialProps:o=null,propsEditInfo:n=null,updateProps:r}=Object.assign({},e);f.useEffect(()=>{let d={};n&&Object.entries(n).map(([v,y])=>{const p=Array.isArray(y.data)?y.data[0]:y.data;d=Object.assign(Object.assign({},d),{[v]:p})}),r==null||r(Object.assign(Object.assign({},t),d))},[n]);const s=f.useCallback(d=>{const{value:v,id:y}=d.currentTarget,p=Object.assign(Object.assign({},t),{[y]:v});r(p)},[t]),i=f.useCallback(d=>{const{checked:v,id:y}=d.currentTarget,p=Object.assign(Object.assign({},t),{[y]:v});r(p)},[t]),c=f.useCallback(d=>{const{value:v,id:y}=d.currentTarget,p=Object.assign(Object.assign({},t),{[y]:v});r(p)},[t]),l=f.useCallback(d=>{const{value:v,name:y}=d.currentTarget,p=Object.assign(Object.assign({},t),{[y]:v});r(p)},[t]),m=f.useCallback(d=>{const{value:v,id:y}=d.currentTarget,p=Object.assign(Object.assign({},t),{[y]:v});r(p)},[t]),h=f.useCallback((d,v)=>{let y;try{y=JSON.parse(v)}catch{alert(`Property ${d} has incorrect value to object parse`);return}const p=Object.assign(Object.assign({},t),{[d]:y});r(p)},[t]),w=f.useCallback(d=>{switch(d){case b.Input:return s;case b.Checkbox:return i;case b.Select:return c;case b.Radio:return l;case b.Textarea:return m;case b.JsonEditor:return h;default:return s}},[t]),x=f.useCallback(()=>{let d=[];const v=t&&Object.entries(t).filter(([p])=>!(n!=null&&n.hasOwnProperty(p))).map(([p,_])=>a.createElement(q,{key:p,propName:p,propValue:_,initialPropValue:o==null?void 0:o[p],onPropChange:w()}));d=v?[...d,...v]:d;const y=n&&Object.entries(n).map(([p,_])=>a.createElement(q,{key:p,data:_.data,controlType:_.controlType,propName:p,propValue:_.controlType===b.JsonEditor?JSON.stringify(t==null?void 0:t[p],null,2):t==null?void 0:t[p],initialPropValue:o==null?void 0:o[p],onPropChange:w(_.controlType)}));return d=y?[...d,...y]:d,d},[t,n]);return a.createElement("div",{className:"table-items"},x())};var Ue=`.props-edit-table {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}`;E(Ue);const Fe=({toolsPropsToEdit:e})=>a.createElement("div",{className:"props-edit-table"},a.createElement(ke,null),a.createElement(Ve,{toolsPropsToEdit:e}));var ze=`.tools-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
}
.tools-panel .empty-props-message {
  color: red;
}`;E(ze);const We=({toolsPropsToEdit:e})=>{const{props:t=null,propsEditInfo:o=null}=Object.assign({},e),n=f.useCallback(()=>{let r;return r=t?Object.keys(t).length>0:!1,r=r||(o?Object.keys(o).length>0:!1),r?a.createElement(Fe,{toolsPropsToEdit:e}):a.createElement("div",{className:"empty-props-message"},"This component has no properties to edit")},[t,o]);return a.createElement("div",{className:"tools-panel"},n())};function qe(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const ne="/REACT_BUDDY_PALETTE",A="urlchange",re=(e,t)=>{const[,o]=f.useState(!1),n=f.useCallback(()=>{o(r=>!r)},[]);return f.useEffect(()=>(window.addEventListener(A,n),window.addEventListener("popstate",n),()=>{window.removeEventListener(A,n),window.removeEventListener("popstate",n)}),[]),Be(e,t)};function Be(e,t=!1){const o=He(),n=new RegExp(Je(e)).exec(o);if(n){const[r]=n;return t?o===r:!0}return!1}function Je(e){return qe(encodeURI(e))}function He(){const{hash:e,pathname:t}=window.location;return e?e.replace("#",""):t}function Xe(e){window.history.replaceState({},"",e),Ye(e)}function Ye(e){const t=new CustomEvent(A,{bubbles:!0,detail:e});window.dispatchEvent(t)}var Ge=`.previews-module_previewsMain__31L3F {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.previews-module_previewsContent__1aMUf {
  flex-basis: 100%;
  flex-grow: 1;
  overflow-y: auto;
}

.previews-module_previewsToolsPanel__30jjI {
  flex-basis: 295px;
  min-height: 100px;
}`,N={previewsMain:"previews-module_previewsMain__31L3F",previewsContent:"previews-module_previewsContent__1aMUf",previewsToolsPanel:"previews-module_previewsToolsPanel__30jjI"};E(Ge);const pt=({children:e,palette:t=null})=>{const[o,n]=f.useState(null),[r,s]=f.useState(()=>{var l;return(l=window.__PROPERTIES_EDIT_PANEL_ENABLED__)!==null&&l!==void 0?l:!1}),i=re(ne),c=f.useMemo(()=>e?a.Children.map(e,l=>a.cloneElement(l,{setToolsPropsToEdit:n})):null,[e]);return f.useEffect(()=>{var l;window.enableComponentsPropsPanelEditor=m=>{var h;(h=window.setPropertiesEditPanelStatus)===null||h===void 0||h.call(window,m),s(m)},window.reactBuddyHistoryPush=Xe,(l=window.cefQuery)===null||l===void 0||l.call(window,{request:"event:react-toolbox-initialized"})},[]),i?t:a.createElement("div",{className:N.previewsMain},a.createElement("div",{className:N.previewsContent},c),r&&a.createElement("div",{className:N.previewsToolsPanel},a.createElement(We,{toolsPropsToEdit:o})))};var Ke=`.react-buddy-error-boundary-module_errorMessageContainer__1L848 {
  width: 100%;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #fff;
}

.react-buddy-error-boundary-module_errorMessageTitle__r4YnX {
  color: #d32f2f;
}

.react-buddy-error-boundary-module_errorMessageStack__2XNRm {
  color: #a9a9a9;
  font-size: 0.8rem;
  width: 100%;
  overflow-x: scroll;
}`,$={errorMessageContainer:"react-buddy-error-boundary-module_errorMessageContainer__1L848",errorMessageTitle:"react-buddy-error-boundary-module_errorMessageTitle__r4YnX",errorMessageStack:"react-buddy-error-boundary-module_errorMessageStack__2XNRm"};E(Ke);class Qe extends a.Component{constructor(){super(...arguments),this.state={error:null}}componentDidCatch(t){console.error(t),this.setState({error:t})}componentDidUpdate(t,o){o.error!=null&&this.setState({error:null})}render(){const{error:t}=this.state,{componentName:o,children:n}=this.props;return t!=null?a.createElement("div",{className:$.errorMessageContainer},a.createElement("h2",{className:$.errorMessageTitle},o?`Something went wrong while rendering ${o} component`:"Something went wrong"),a.createElement("p",null,t.message),a.createElement("pre",{className:$.errorMessageStack},t.stack)):n}}const mt=({style:e,className:t,embeddable:o,children:n})=>o?a.createElement(a.Fragment,null,n):a.createElement("div",{style:e,className:t},n),oe=a.createContext({}),Ze=()=>f.useContext(oe),yt=({children:e,name:t,className:o,style:n})=>a.createElement(oe.Provider,{value:{categoryClassName:o,categoryStyle:n}},et({children:e,categoryName:t}));function et({children:e,categoryName:t}){return a.Children.map(e,o=>a.cloneElement(o,{categoryName:t}))}const ae=a.createContext({}),tt=()=>f.useContext(ae),ht=({children:e,categoryName:t,name:o,className:n,style:r})=>a.createElement(ae.Provider,{value:{componentClassName:n,componentStyle:r}},nt({children:e,componentName:o,categoryName:t}));function nt({children:e,componentName:t,categoryName:o}){return a.Children.map(e,n=>a.cloneElement(n,{categoryName:o,componentName:t}))}function se(...e){const t=e.flatMap(n=>n?n.split(" "):[]);return[...new Set(t)].join(" ")}var rt=`.variant-module_fullWindow__1DkCI {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

.variant-module_variantRouteCenter__ce423 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
}`,V={fullWindow:"variant-module_fullWindow__1DkCI",variantRouteCenter:"variant-module_variantRouteCenter__ce423"};E(rt);const ot="DEFAULT_VARIANT",at=({categoryName:e,componentName:t,variantName:o=ot,previewLayout:n="center",children:r})=>{const{categoryClassName:s,categoryStyle:i}=Ze(),{componentClassName:c,componentStyle:l}=tt(),{variantClassName:m,variantStyle:h}=lt(),w=f.useMemo(()=>st([e,t,o]),[e,t,o]),x=re(w,!0),[d,v]=f.useState(null);return f.useLayoutEffect(()=>(d!==null&&ie(d),()=>{d!==null&&ce(d)}),[d]),x?a.createElement("div",{className:s,style:i},a.createElement("div",{className:c,style:l,ref:v},a.createElement("div",{className:n==="center"?se(V.variantRouteCenter,m):m,style:h},r))):null};function st(e){return ne+"/"+e.filter(t=>t!=null).join("/")}const le=a.createContext({}),lt=()=>f.useContext(le),vt=({children:e,categoryName:t,componentName:o,name:n,previewLayout:r,className:s,style:i})=>a.createElement(le.Provider,{value:{variantClassName:s,variantStyle:i}},a.createElement(at,{previewLayout:r,variantName:n,categoryName:t,componentName:o},a.createElement(Qe,{componentName:o},e)));function ie(e){e===null||e===document||(e.className=se(V.fullWindow,e.className),ie(e.parentElement))}function ce(e){e===null||e===document||(e.classList.remove(V.fullWindow),ce(e.parentElement))}const it="modulepreload",ct=function(e){return"/"+e},B={},ut=function(t,o,n){let r=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),i=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.all(o.map(c=>{if(c=ct(c),c in B)return;B[c]=!0;const l=c.endsWith(".css"),m=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${m}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":it,l||(h.as="script",h.crossOrigin=""),h.href=c,i&&h.setAttribute("nonce",i),document.head.appendChild(h),l)return new Promise((w,x)=>{h.addEventListener("load",w),h.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${c}`)))})}))}return r.then(()=>t()).catch(s=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s})};a.lazy(()=>ut(()=>import("./previews-CtNUkV0U.js"),[]));export{yt as C,mt as P,ft as R,vt as V,de as a,ht as b,pt as c,a as e,dt as g,f as r};
