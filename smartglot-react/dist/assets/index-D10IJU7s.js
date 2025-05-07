(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const f of o)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function r(o){const f={};return o.integrity&&(f.integrity=o.integrity),o.referrerPolicy&&(f.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?f.credentials="include":o.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(o){if(o.ep)return;o.ep=!0;const f=r(o);fetch(o.href,f)}})();function Vv(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ff={exports:{}},cs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function T0(){if(Ng)return cs;Ng=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(l,o,f){var d=null;if(f!==void 0&&(d=""+f),o.key!==void 0&&(d=""+o.key),"key"in o){f={};for(var m in o)m!=="key"&&(f[m]=o[m])}else f=o;return o=f.ref,{$$typeof:i,type:l,key:d,ref:o!==void 0?o:null,props:f}}return cs.Fragment=t,cs.jsx=r,cs.jsxs=r,cs}var Dg;function S0(){return Dg||(Dg=1,ff.exports=T0()),ff.exports}var k=S0(),df={exports:{}},ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function w0(){if(kg)return ae;kg=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function S(E){return E===null||typeof E!="object"?null:(E=b&&E[b]||E["@@iterator"],typeof E=="function"?E:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,q={};function M(E,B,$){this.props=E,this.context=B,this.refs=q,this.updater=$||D}M.prototype.isReactComponent={},M.prototype.setState=function(E,B){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,B,"setState")},M.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function H(){}H.prototype=M.prototype;function X(E,B,$){this.props=E,this.context=B,this.refs=q,this.updater=$||D}var L=X.prototype=new H;L.constructor=X,C(L,M.prototype),L.isPureReactComponent=!0;var G=Array.isArray,j={H:null,A:null,T:null,S:null,V:null},se=Object.prototype.hasOwnProperty;function pe(E,B,$,Y,W,de){return $=de.ref,{$$typeof:i,type:E,key:B,ref:$!==void 0?$:null,props:de}}function me(E,B){return pe(E.type,B,void 0,void 0,void 0,E.props)}function ce(E){return typeof E=="object"&&E!==null&&E.$$typeof===i}function Ye(E){var B={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function($){return B[$]})}var Se=/\/+/g;function Ie(E,B){return typeof E=="object"&&E!==null&&E.key!=null?Ye(""+E.key):B.toString(36)}function mt(){}function Oi(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(mt,mt):(E.status="pending",E.then(function(B){E.status==="pending"&&(E.status="fulfilled",E.value=B)},function(B){E.status==="pending"&&(E.status="rejected",E.reason=B)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function st(E,B,$,Y,W){var de=typeof E;(de==="undefined"||de==="boolean")&&(E=null);var ne=!1;if(E===null)ne=!0;else switch(de){case"bigint":case"string":case"number":ne=!0;break;case"object":switch(E.$$typeof){case i:case t:ne=!0;break;case y:return ne=E._init,st(ne(E._payload),B,$,Y,W)}}if(ne)return W=W(E),ne=Y===""?"."+Ie(E,0):Y,G(W)?($="",ne!=null&&($=ne.replace(Se,"$&/")+"/"),st(W,B,$,"",function($n){return $n})):W!=null&&(ce(W)&&(W=me(W,$+(W.key==null||E&&E.key===W.key?"":(""+W.key).replace(Se,"$&/")+"/")+ne)),B.push(W)),1;ne=0;var St=Y===""?".":Y+":";if(G(E))for(var Ne=0;Ne<E.length;Ne++)Y=E[Ne],de=St+Ie(Y,Ne),ne+=st(Y,B,$,de,W);else if(Ne=S(E),typeof Ne=="function")for(E=Ne.call(E),Ne=0;!(Y=E.next()).done;)Y=Y.value,de=St+Ie(Y,Ne++),ne+=st(Y,B,$,de,W);else if(de==="object"){if(typeof E.then=="function")return st(Oi(E),B,$,Y,W);throw B=String(E),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return ne}function x(E,B,$){if(E==null)return E;var Y=[],W=0;return st(E,Y,"","",function(de){return B.call($,de,W++)}),Y}function F(E){if(E._status===-1){var B=E._result;B=B(),B.then(function($){(E._status===0||E._status===-1)&&(E._status=1,E._result=$)},function($){(E._status===0||E._status===-1)&&(E._status=2,E._result=$)}),E._status===-1&&(E._status=0,E._result=B)}if(E._status===1)return E._result.default;throw E._result}var ee=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)};function we(){}return ae.Children={map:x,forEach:function(E,B,$){x(E,function(){B.apply(this,arguments)},$)},count:function(E){var B=0;return x(E,function(){B++}),B},toArray:function(E){return x(E,function(B){return B})||[]},only:function(E){if(!ce(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},ae.Component=M,ae.Fragment=r,ae.Profiler=o,ae.PureComponent=X,ae.StrictMode=l,ae.Suspense=h,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,ae.__COMPILER_RUNTIME={__proto__:null,c:function(E){return j.H.useMemoCache(E)}},ae.cache=function(E){return function(){return E.apply(null,arguments)}},ae.cloneElement=function(E,B,$){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var Y=C({},E.props),W=E.key,de=void 0;if(B!=null)for(ne in B.ref!==void 0&&(de=void 0),B.key!==void 0&&(W=""+B.key),B)!se.call(B,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&B.ref===void 0||(Y[ne]=B[ne]);var ne=arguments.length-2;if(ne===1)Y.children=$;else if(1<ne){for(var St=Array(ne),Ne=0;Ne<ne;Ne++)St[Ne]=arguments[Ne+2];Y.children=St}return pe(E.type,W,void 0,void 0,de,Y)},ae.createContext=function(E){return E={$$typeof:d,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:f,_context:E},E},ae.createElement=function(E,B,$){var Y,W={},de=null;if(B!=null)for(Y in B.key!==void 0&&(de=""+B.key),B)se.call(B,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(W[Y]=B[Y]);var ne=arguments.length-2;if(ne===1)W.children=$;else if(1<ne){for(var St=Array(ne),Ne=0;Ne<ne;Ne++)St[Ne]=arguments[Ne+2];W.children=St}if(E&&E.defaultProps)for(Y in ne=E.defaultProps,ne)W[Y]===void 0&&(W[Y]=ne[Y]);return pe(E,de,void 0,void 0,null,W)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(E){return{$$typeof:m,render:E}},ae.isValidElement=ce,ae.lazy=function(E){return{$$typeof:y,_payload:{_status:-1,_result:E},_init:F}},ae.memo=function(E,B){return{$$typeof:g,type:E,compare:B===void 0?null:B}},ae.startTransition=function(E){var B=j.T,$={};j.T=$;try{var Y=E(),W=j.S;W!==null&&W($,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(we,ee)}catch(de){ee(de)}finally{j.T=B}},ae.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},ae.use=function(E){return j.H.use(E)},ae.useActionState=function(E,B,$){return j.H.useActionState(E,B,$)},ae.useCallback=function(E,B){return j.H.useCallback(E,B)},ae.useContext=function(E){return j.H.useContext(E)},ae.useDebugValue=function(){},ae.useDeferredValue=function(E,B){return j.H.useDeferredValue(E,B)},ae.useEffect=function(E,B,$){var Y=j.H;if(typeof $=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Y.useEffect(E,B)},ae.useId=function(){return j.H.useId()},ae.useImperativeHandle=function(E,B,$){return j.H.useImperativeHandle(E,B,$)},ae.useInsertionEffect=function(E,B){return j.H.useInsertionEffect(E,B)},ae.useLayoutEffect=function(E,B){return j.H.useLayoutEffect(E,B)},ae.useMemo=function(E,B){return j.H.useMemo(E,B)},ae.useOptimistic=function(E,B){return j.H.useOptimistic(E,B)},ae.useReducer=function(E,B,$){return j.H.useReducer(E,B,$)},ae.useRef=function(E){return j.H.useRef(E)},ae.useState=function(E){return j.H.useState(E)},ae.useSyncExternalStore=function(E,B,$){return j.H.useSyncExternalStore(E,B,$)},ae.useTransition=function(){return j.H.useTransition()},ae.version="19.1.0",ae}var Ug;function Xf(){return Ug||(Ug=1,df.exports=w0()),df.exports}var N=Xf();const R0=Vv(N);var hf={exports:{}},fs={},pf={exports:{}},mf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function A0(){return Mg||(Mg=1,function(i){function t(x,F){var ee=x.length;x.push(F);e:for(;0<ee;){var we=ee-1>>>1,E=x[we];if(0<o(E,F))x[we]=F,x[ee]=E,ee=we;else break e}}function r(x){return x.length===0?null:x[0]}function l(x){if(x.length===0)return null;var F=x[0],ee=x.pop();if(ee!==F){x[0]=ee;e:for(var we=0,E=x.length,B=E>>>1;we<B;){var $=2*(we+1)-1,Y=x[$],W=$+1,de=x[W];if(0>o(Y,ee))W<E&&0>o(de,Y)?(x[we]=de,x[W]=ee,we=W):(x[we]=Y,x[$]=ee,we=$);else if(W<E&&0>o(de,ee))x[we]=de,x[W]=ee,we=W;else break e}}return F}function o(x,F){var ee=x.sortIndex-F.sortIndex;return ee!==0?ee:x.id-F.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;i.unstable_now=function(){return f.now()}}else{var d=Date,m=d.now();i.unstable_now=function(){return d.now()-m}}var h=[],g=[],y=1,b=null,S=3,D=!1,C=!1,q=!1,M=!1,H=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function G(x){for(var F=r(g);F!==null;){if(F.callback===null)l(g);else if(F.startTime<=x)l(g),F.sortIndex=F.expirationTime,t(h,F);else break;F=r(g)}}function j(x){if(q=!1,G(x),!C)if(r(h)!==null)C=!0,se||(se=!0,Ie());else{var F=r(g);F!==null&&st(j,F.startTime-x)}}var se=!1,pe=-1,me=5,ce=-1;function Ye(){return M?!0:!(i.unstable_now()-ce<me)}function Se(){if(M=!1,se){var x=i.unstable_now();ce=x;var F=!0;try{e:{C=!1,q&&(q=!1,X(pe),pe=-1),D=!0;var ee=S;try{t:{for(G(x),b=r(h);b!==null&&!(b.expirationTime>x&&Ye());){var we=b.callback;if(typeof we=="function"){b.callback=null,S=b.priorityLevel;var E=we(b.expirationTime<=x);if(x=i.unstable_now(),typeof E=="function"){b.callback=E,G(x),F=!0;break t}b===r(h)&&l(h),G(x)}else l(h);b=r(h)}if(b!==null)F=!0;else{var B=r(g);B!==null&&st(j,B.startTime-x),F=!1}}break e}finally{b=null,S=ee,D=!1}F=void 0}}finally{F?Ie():se=!1}}}var Ie;if(typeof L=="function")Ie=function(){L(Se)};else if(typeof MessageChannel<"u"){var mt=new MessageChannel,Oi=mt.port2;mt.port1.onmessage=Se,Ie=function(){Oi.postMessage(null)}}else Ie=function(){H(Se,0)};function st(x,F){pe=H(function(){x(i.unstable_now())},F)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(x){x.callback=null},i.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):me=0<x?Math.floor(1e3/x):5},i.unstable_getCurrentPriorityLevel=function(){return S},i.unstable_next=function(x){switch(S){case 1:case 2:case 3:var F=3;break;default:F=S}var ee=S;S=F;try{return x()}finally{S=ee}},i.unstable_requestPaint=function(){M=!0},i.unstable_runWithPriority=function(x,F){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var ee=S;S=x;try{return F()}finally{S=ee}},i.unstable_scheduleCallback=function(x,F,ee){var we=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?we+ee:we):ee=we,x){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=ee+E,x={id:y++,callback:F,priorityLevel:x,startTime:ee,expirationTime:E,sortIndex:-1},ee>we?(x.sortIndex=ee,t(g,x),r(h)===null&&x===r(g)&&(q?(X(pe),pe=-1):q=!0,st(j,ee-we))):(x.sortIndex=E,t(h,x),C||D||(C=!0,se||(se=!0,Ie()))),x},i.unstable_shouldYield=Ye,i.unstable_wrapCallback=function(x){var F=S;return function(){var ee=S;S=F;try{return x.apply(this,arguments)}finally{S=ee}}}}(mf)),mf}var xg;function C0(){return xg||(xg=1,pf.exports=A0()),pf.exports}var gf={exports:{}},ut={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lg;function O0(){if(Lg)return ut;Lg=1;var i=Xf();function t(h){var g="https://react.dev/errors/"+h;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+h+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var l={d:{f:r,r:function(){throw Error(t(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},o=Symbol.for("react.portal");function f(h,g,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:h,containerInfo:g,implementation:y}}var d=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(h,g){if(h==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,ut.createPortal=function(h,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return f(h,g,null,y)},ut.flushSync=function(h){var g=d.T,y=l.p;try{if(d.T=null,l.p=2,h)return h()}finally{d.T=g,l.p=y,l.d.f()}},ut.preconnect=function(h,g){typeof h=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,l.d.C(h,g))},ut.prefetchDNS=function(h){typeof h=="string"&&l.d.D(h)},ut.preinit=function(h,g){if(typeof h=="string"&&g&&typeof g.as=="string"){var y=g.as,b=m(y,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,D=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?l.d.S(h,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:D}):y==="script"&&l.d.X(h,{crossOrigin:b,integrity:S,fetchPriority:D,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ut.preinitModule=function(h,g){if(typeof h=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=m(g.as,g.crossOrigin);l.d.M(h,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&l.d.M(h)},ut.preload=function(h,g){if(typeof h=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,b=m(y,g.crossOrigin);l.d.L(h,y,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ut.preloadModule=function(h,g){if(typeof h=="string")if(g){var y=m(g.as,g.crossOrigin);l.d.m(h,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else l.d.m(h)},ut.requestFormReset=function(h){l.d.r(h)},ut.unstable_batchedUpdates=function(h,g){return h(g)},ut.useFormState=function(h,g,y){return d.H.useFormState(h,g,y)},ut.useFormStatus=function(){return d.H.useHostTransitionStatus()},ut.version="19.1.0",ut}var Pg;function I0(){if(Pg)return gf.exports;Pg=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),gf.exports=O0(),gf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zg;function N0(){if(zg)return fs;zg=1;var i=C0(),t=Xf(),r=I0();function l(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(f(e)!==e)throw Error(l(188))}function h(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(l(188));return n!==e?null:e}for(var a=e,s=n;;){var u=a.return;if(u===null)break;var c=u.alternate;if(c===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===a)return m(u),e;if(c===s)return m(u),n;c=c.sibling}throw Error(l(188))}if(a.return!==s.return)a=u,s=c;else{for(var p=!1,v=u.child;v;){if(v===a){p=!0,a=u,s=c;break}if(v===s){p=!0,s=u,a=c;break}v=v.sibling}if(!p){for(v=c.child;v;){if(v===a){p=!0,a=c,s=u;break}if(v===s){p=!0,s=c,a=u;break}v=v.sibling}if(!p)throw Error(l(189))}}if(a.alternate!==s)throw Error(l(190))}if(a.tag!==3)throw Error(l(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),L=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),ce=Symbol.for("react.activity"),Ye=Symbol.for("react.memo_cache_sentinel"),Se=Symbol.iterator;function Ie(e){return e===null||typeof e!="object"?null:(e=Se&&e[Se]||e["@@iterator"],typeof e=="function"?e:null)}var mt=Symbol.for("react.client.reference");function Oi(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===mt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case M:return"Profiler";case q:return"StrictMode";case j:return"Suspense";case se:return"SuspenseList";case ce:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case D:return"Portal";case L:return(e.displayName||"Context")+".Provider";case X:return(e._context.displayName||"Context")+".Consumer";case G:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pe:return n=e.displayName||null,n!==null?n:Oi(e.type)||"Memo";case me:n=e._payload,e=e._init;try{return Oi(e(n))}catch{}}return null}var st=Array.isArray,x=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},we=[],E=-1;function B(e){return{current:e}}function $(e){0>E||(e.current=we[E],we[E]=null,E--)}function Y(e,n){E++,we[E]=e.current,e.current=n}var W=B(null),de=B(null),ne=B(null),St=B(null);function Ne(e,n){switch(Y(ne,n),Y(de,e),Y(W,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?ag(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=ag(n),e=rg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(W),Y(W,e)}function $n(){$(W),$(de),$(ne)}function Ko(e){e.memoizedState!==null&&Y(St,e);var n=W.current,a=rg(n,e.type);n!==a&&(Y(de,e),Y(W,a))}function Fs(e){de.current===e&&($(W),$(de)),St.current===e&&($(St),rs._currentValue=ee)}var Qo=Object.prototype.hasOwnProperty,Wo=i.unstable_scheduleCallback,Zo=i.unstable_cancelCallback,eb=i.unstable_shouldYield,tb=i.unstable_requestPaint,an=i.unstable_now,nb=i.unstable_getCurrentPriorityLevel,zd=i.unstable_ImmediatePriority,Hd=i.unstable_UserBlockingPriority,Xs=i.unstable_NormalPriority,ib=i.unstable_LowPriority,Bd=i.unstable_IdlePriority,ab=i.log,rb=i.unstable_setDisableYieldValue,hr=null,wt=null;function Kn(e){if(typeof ab=="function"&&rb(e),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(hr,e)}catch{}}var Rt=Math.clz32?Math.clz32:ob,sb=Math.log,lb=Math.LN2;function ob(e){return e>>>=0,e===0?32:31-(sb(e)/lb|0)|0}var $s=256,Ks=4194304;function Ii(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qs(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var u=0,c=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var v=s&134217727;return v!==0?(s=v&~c,s!==0?u=Ii(s):(p&=v,p!==0?u=Ii(p):a||(a=v&~e,a!==0&&(u=Ii(a))))):(v=s&~c,v!==0?u=Ii(v):p!==0?u=Ii(p):a||(a=s&~e,a!==0&&(u=Ii(a)))),u===0?0:n!==0&&n!==u&&(n&c)===0&&(c=u&-u,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:u}function pr(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ub(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jd(){var e=$s;return $s<<=1,($s&4194048)===0&&($s=256),e}function qd(){var e=Ks;return Ks<<=1,(Ks&62914560)===0&&(Ks=4194304),e}function Jo(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function mr(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function cb(e,n,a,s,u,c){var p=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var v=e.entanglements,_=e.expirationTimes,A=e.hiddenUpdates;for(a=p&~a;0<a;){var U=31-Rt(a),z=1<<U;v[U]=0,_[U]=-1;var O=A[U];if(O!==null)for(A[U]=null,U=0;U<O.length;U++){var I=O[U];I!==null&&(I.lane&=-536870913)}a&=~z}s!==0&&Vd(e,s,0),c!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=c&~(p&~n))}function Vd(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Rt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194090}function Gd(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Rt(a),u=1<<s;u&n|e[s]&n&&(e[s]|=n),a&=~u}}function eu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function tu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Yd(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:wg(e.type))}function fb(e,n){var a=F.p;try{return F.p=e,n()}finally{F.p=a}}var Qn=Math.random().toString(36).slice(2),lt="__reactFiber$"+Qn,gt="__reactProps$"+Qn,aa="__reactContainer$"+Qn,nu="__reactEvents$"+Qn,db="__reactListeners$"+Qn,hb="__reactHandles$"+Qn,Fd="__reactResources$"+Qn,gr="__reactMarker$"+Qn;function iu(e){delete e[lt],delete e[gt],delete e[nu],delete e[db],delete e[hb]}function ra(e){var n=e[lt];if(n)return n;for(var a=e.parentNode;a;){if(n=a[aa]||a[lt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=ug(e);e!==null;){if(a=e[lt])return a;e=ug(e)}return n}e=a,a=e.parentNode}return null}function sa(e){if(e=e[lt]||e[aa]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function vr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(l(33))}function la(e){var n=e[Fd];return n||(n=e[Fd]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Qe(e){e[gr]=!0}var Xd=new Set,$d={};function Ni(e,n){oa(e,n),oa(e+"Capture",n)}function oa(e,n){for($d[e]=n,e=0;e<n.length;e++)Xd.add(n[e])}var pb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Kd={},Qd={};function mb(e){return Qo.call(Qd,e)?!0:Qo.call(Kd,e)?!1:pb.test(e)?Qd[e]=!0:(Kd[e]=!0,!1)}function Ws(e,n,a){if(mb(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Zs(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function yn(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}var au,Wd;function ua(e){if(au===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);au=n&&n[1]||"",Wd=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+au+e+Wd}var ru=!1;function su(e,n){if(!e||ru)return"";ru=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(I){var O=I}Reflect.construct(e,[],z)}else{try{z.call()}catch(I){O=I}e.call(z.prototype)}}else{try{throw Error()}catch(I){O=I}(z=e())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(I){if(I&&O&&typeof I.stack=="string")return[I.stack,O.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=s.DetermineComponentFrameRoot(),p=c[0],v=c[1];if(p&&v){var _=p.split(`
`),A=v.split(`
`);for(u=s=0;s<_.length&&!_[s].includes("DetermineComponentFrameRoot");)s++;for(;u<A.length&&!A[u].includes("DetermineComponentFrameRoot");)u++;if(s===_.length||u===A.length)for(s=_.length-1,u=A.length-1;1<=s&&0<=u&&_[s]!==A[u];)u--;for(;1<=s&&0<=u;s--,u--)if(_[s]!==A[u]){if(s!==1||u!==1)do if(s--,u--,0>u||_[s]!==A[u]){var U=`
`+_[s].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=s&&0<=u);break}}}finally{ru=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ua(a):""}function gb(e){switch(e.tag){case 26:case 27:case 5:return ua(e.type);case 16:return ua("Lazy");case 13:return ua("Suspense");case 19:return ua("SuspenseList");case 0:case 15:return su(e.type,!1);case 11:return su(e.type.render,!1);case 1:return su(e.type,!0);case 31:return ua("Activity");default:return""}}function Zd(e){try{var n="";do n+=gb(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Lt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function vb(e){var n=Jd(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,c=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(p){s=""+p,c.call(this,p)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(p){s=""+p},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Js(e){e._valueTracker||(e._valueTracker=vb(e))}function eh(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Jd(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function el(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var yb=/[\n"\\]/g;function Pt(e){return e.replace(yb,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function lu(e,n,a,s,u,c,p,v){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),n!=null?p==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Lt(n)):e.value!==""+Lt(n)&&(e.value=""+Lt(n)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),n!=null?ou(e,p,Lt(n)):a!=null?ou(e,p,Lt(a)):s!=null&&e.removeAttribute("value"),u==null&&c!=null&&(e.defaultChecked=!!c),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+Lt(v):e.removeAttribute("name")}function th(e,n,a,s,u,c,p,v){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null))return;a=a!=null?""+Lt(a):"",n=n!=null?""+Lt(n):a,v||n===e.value||(e.value=n),e.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=v?e.checked:!!s,e.defaultChecked=!!s,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p)}function ou(e,n,a){n==="number"&&el(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ca(e,n,a,s){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&s&&(e[a].defaultSelected=!0)}else{for(a=""+Lt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function nh(e,n,a){if(n!=null&&(n=""+Lt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Lt(a):""}function ih(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(l(92));if(st(s)){if(1<s.length)throw Error(l(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Lt(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function fa(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var _b=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ah(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||_b.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function rh(e,n,a){if(n!=null&&typeof n!="object")throw Error(l(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&ah(e,u,s)}else for(var c in n)n.hasOwnProperty(c)&&ah(e,c,n[c])}function uu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Eb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tl(e){return Eb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var cu=null;function fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var da=null,ha=null;function sh(e){var n=sa(e);if(n&&(e=n.stateNode)){var a=e[gt]||null;e:switch(e=n.stateNode,n.type){case"input":if(lu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Pt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var u=s[gt]||null;if(!u)throw Error(l(90));lu(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&eh(s)}break e;case"textarea":nh(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ca(e,!!a.multiple,n,!1)}}}var du=!1;function lh(e,n,a){if(du)return e(n,a);du=!0;try{var s=e(n);return s}finally{if(du=!1,(da!==null||ha!==null)&&(Bl(),da&&(n=da,e=ha,ha=da=null,sh(n),e)))for(n=0;n<e.length;n++)sh(e[n])}}function yr(e,n){var a=e.stateNode;if(a===null)return null;var s=a[gt]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(l(231,n,typeof a));return a}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=!1;if(_n)try{var _r={};Object.defineProperty(_r,"passive",{get:function(){hu=!0}}),window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{hu=!1}var Wn=null,pu=null,nl=null;function oh(){if(nl)return nl;var e,n=pu,a=n.length,s,u="value"in Wn?Wn.value:Wn.textContent,c=u.length;for(e=0;e<a&&n[e]===u[e];e++);var p=a-e;for(s=1;s<=p&&n[a-s]===u[c-s];s++);return nl=u.slice(e,1<s?1-s:void 0)}function il(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function al(){return!0}function uh(){return!1}function vt(e){function n(a,s,u,c,p){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(a=e[v],this[v]=a?a(c):c[v]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?al:uh,this.isPropagationStopped=uh,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),n}var Di={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=vt(Di),br=y({},Di,{view:0,detail:0}),Tb=vt(br),mu,gu,Er,sl=y({},br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Er&&(Er&&e.type==="mousemove"?(mu=e.screenX-Er.screenX,gu=e.screenY-Er.screenY):gu=mu=0,Er=e),mu)},movementY:function(e){return"movementY"in e?e.movementY:gu}}),ch=vt(sl),Sb=y({},sl,{dataTransfer:0}),wb=vt(Sb),Rb=y({},br,{relatedTarget:0}),vu=vt(Rb),Ab=y({},Di,{animationName:0,elapsedTime:0,pseudoElement:0}),Cb=vt(Ab),Ob=y({},Di,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ib=vt(Ob),Nb=y({},Di,{data:0}),fh=vt(Nb),Db={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ub={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mb(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ub[e])?!!n[e]:!1}function yu(){return Mb}var xb=y({},br,{key:function(e){if(e.key){var n=Db[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=il(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(e){return e.type==="keypress"?il(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?il(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lb=vt(xb),Pb=y({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dh=vt(Pb),zb=y({},br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),Hb=vt(zb),Bb=y({},Di,{propertyName:0,elapsedTime:0,pseudoElement:0}),jb=vt(Bb),qb=y({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vb=vt(qb),Gb=y({},Di,{newState:0,oldState:0}),Yb=vt(Gb),Fb=[9,13,27,32],_u=_n&&"CompositionEvent"in window,Tr=null;_n&&"documentMode"in document&&(Tr=document.documentMode);var Xb=_n&&"TextEvent"in window&&!Tr,hh=_n&&(!_u||Tr&&8<Tr&&11>=Tr),ph=" ",mh=!1;function gh(e,n){switch(e){case"keyup":return Fb.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pa=!1;function $b(e,n){switch(e){case"compositionend":return vh(n);case"keypress":return n.which!==32?null:(mh=!0,ph);case"textInput":return e=n.data,e===ph&&mh?null:e;default:return null}}function Kb(e,n){if(pa)return e==="compositionend"||!_u&&gh(e,n)?(e=oh(),nl=pu=Wn=null,pa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return hh&&n.locale!=="ko"?null:n.data;default:return null}}var Qb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Qb[e.type]:n==="textarea"}function _h(e,n,a,s){da?ha?ha.push(s):ha=[s]:da=s,n=Fl(n,"onChange"),0<n.length&&(a=new rl("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Sr=null,wr=null;function Wb(e){Jm(e,0)}function ll(e){var n=vr(e);if(eh(n))return e}function bh(e,n){if(e==="change")return n}var Eh=!1;if(_n){var bu;if(_n){var Eu="oninput"in document;if(!Eu){var Th=document.createElement("div");Th.setAttribute("oninput","return;"),Eu=typeof Th.oninput=="function"}bu=Eu}else bu=!1;Eh=bu&&(!document.documentMode||9<document.documentMode)}function Sh(){Sr&&(Sr.detachEvent("onpropertychange",wh),wr=Sr=null)}function wh(e){if(e.propertyName==="value"&&ll(wr)){var n=[];_h(n,wr,e,fu(e)),lh(Wb,n)}}function Zb(e,n,a){e==="focusin"?(Sh(),Sr=n,wr=a,Sr.attachEvent("onpropertychange",wh)):e==="focusout"&&Sh()}function Jb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(wr)}function eE(e,n){if(e==="click")return ll(n)}function tE(e,n){if(e==="input"||e==="change")return ll(n)}function nE(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var At=typeof Object.is=="function"?Object.is:nE;function Rr(e,n){if(At(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Qo.call(n,u)||!At(e[u],n[u]))return!1}return!0}function Rh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ah(e,n){var a=Rh(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Rh(a)}}function Ch(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ch(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Oh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=el(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=el(e.document)}return n}function Tu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var iE=_n&&"documentMode"in document&&11>=document.documentMode,ma=null,Su=null,Ar=null,wu=!1;function Ih(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wu||ma==null||ma!==el(s)||(s=ma,"selectionStart"in s&&Tu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ar&&Rr(Ar,s)||(Ar=s,s=Fl(Su,"onSelect"),0<s.length&&(n=new rl("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=ma)))}function ki(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ga={animationend:ki("Animation","AnimationEnd"),animationiteration:ki("Animation","AnimationIteration"),animationstart:ki("Animation","AnimationStart"),transitionrun:ki("Transition","TransitionRun"),transitionstart:ki("Transition","TransitionStart"),transitioncancel:ki("Transition","TransitionCancel"),transitionend:ki("Transition","TransitionEnd")},Ru={},Nh={};_n&&(Nh=document.createElement("div").style,"AnimationEvent"in window||(delete ga.animationend.animation,delete ga.animationiteration.animation,delete ga.animationstart.animation),"TransitionEvent"in window||delete ga.transitionend.transition);function Ui(e){if(Ru[e])return Ru[e];if(!ga[e])return e;var n=ga[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Nh)return Ru[e]=n[a];return e}var Dh=Ui("animationend"),kh=Ui("animationiteration"),Uh=Ui("animationstart"),aE=Ui("transitionrun"),rE=Ui("transitionstart"),sE=Ui("transitioncancel"),Mh=Ui("transitionend"),xh=new Map,Au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Au.push("scrollEnd");function Kt(e,n){xh.set(e,n),Ni(n,[e])}var Lh=new WeakMap;function zt(e,n){if(typeof e=="object"&&e!==null){var a=Lh.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Zd(n)},Lh.set(e,n),n)}return{value:e,source:n,stack:Zd(n)}}var Ht=[],va=0,Cu=0;function ol(){for(var e=va,n=Cu=va=0;n<e;){var a=Ht[n];Ht[n++]=null;var s=Ht[n];Ht[n++]=null;var u=Ht[n];Ht[n++]=null;var c=Ht[n];if(Ht[n++]=null,s!==null&&u!==null){var p=s.pending;p===null?u.next=u:(u.next=p.next,p.next=u),s.pending=u}c!==0&&Ph(a,u,c)}}function ul(e,n,a,s){Ht[va++]=e,Ht[va++]=n,Ht[va++]=a,Ht[va++]=s,Cu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Ou(e,n,a,s){return ul(e,n,a,s),cl(e)}function ya(e,n){return ul(e,null,null,n),cl(e)}function Ph(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var u=!1,c=e.return;c!==null;)c.childLanes|=a,s=c.alternate,s!==null&&(s.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(u=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,u&&n!==null&&(u=31-Rt(a),e=c.hiddenUpdates,s=e[u],s===null?e[u]=[n]:s.push(n),n.lane=a|536870912),c):null}function cl(e){if(50<Wr)throw Wr=0,Mc=null,Error(l(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var _a={};function lE(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,n,a,s){return new lE(e,n,a,s)}function Iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bn(e,n){var a=e.alternate;return a===null?(a=Ct(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function zh(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function fl(e,n,a,s,u,c){var p=0;if(s=e,typeof e=="function")Iu(e)&&(p=1);else if(typeof e=="string")p=u0(e,a,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ce:return e=Ct(31,a,n,u),e.elementType=ce,e.lanes=c,e;case C:return Mi(a.children,u,c,n);case q:p=8,u|=24;break;case M:return e=Ct(12,a,n,u|2),e.elementType=M,e.lanes=c,e;case j:return e=Ct(13,a,n,u),e.elementType=j,e.lanes=c,e;case se:return e=Ct(19,a,n,u),e.elementType=se,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:case L:p=10;break e;case X:p=9;break e;case G:p=11;break e;case pe:p=14;break e;case me:p=16,s=null;break e}p=29,a=Error(l(130,e===null?"null":typeof e,"")),s=null}return n=Ct(p,a,n,u),n.elementType=e,n.type=s,n.lanes=c,n}function Mi(e,n,a,s){return e=Ct(7,e,s,n),e.lanes=a,e}function Nu(e,n,a){return e=Ct(6,e,null,n),e.lanes=a,e}function Du(e,n,a){return n=Ct(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var ba=[],Ea=0,dl=null,hl=0,Bt=[],jt=0,xi=null,En=1,Tn="";function Li(e,n){ba[Ea++]=hl,ba[Ea++]=dl,dl=e,hl=n}function Hh(e,n,a){Bt[jt++]=En,Bt[jt++]=Tn,Bt[jt++]=xi,xi=e;var s=En;e=Tn;var u=32-Rt(s)-1;s&=~(1<<u),a+=1;var c=32-Rt(n)+u;if(30<c){var p=u-u%5;c=(s&(1<<p)-1).toString(32),s>>=p,u-=p,En=1<<32-Rt(n)+u|a<<u|s,Tn=c+e}else En=1<<c|a<<u|s,Tn=e}function ku(e){e.return!==null&&(Li(e,1),Hh(e,1,0))}function Uu(e){for(;e===dl;)dl=ba[--Ea],ba[Ea]=null,hl=ba[--Ea],ba[Ea]=null;for(;e===xi;)xi=Bt[--jt],Bt[jt]=null,Tn=Bt[--jt],Bt[jt]=null,En=Bt[--jt],Bt[jt]=null}var ft=null,Le=null,ge=!1,Pi=null,rn=!1,Mu=Error(l(519));function zi(e){var n=Error(l(418,""));throw Ir(zt(n,e)),Mu}function Bh(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[lt]=e,n[gt]=s,a){case"dialog":ue("cancel",n),ue("close",n);break;case"iframe":case"object":case"embed":ue("load",n);break;case"video":case"audio":for(a=0;a<Jr.length;a++)ue(Jr[a],n);break;case"source":ue("error",n);break;case"img":case"image":case"link":ue("error",n),ue("load",n);break;case"details":ue("toggle",n);break;case"input":ue("invalid",n),th(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Js(n);break;case"select":ue("invalid",n);break;case"textarea":ue("invalid",n),ih(n,s.value,s.defaultValue,s.children),Js(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||ig(n.textContent,a)?(s.popover!=null&&(ue("beforetoggle",n),ue("toggle",n)),s.onScroll!=null&&ue("scroll",n),s.onScrollEnd!=null&&ue("scrollend",n),s.onClick!=null&&(n.onclick=Xl),n=!0):n=!1,n||zi(e)}function jh(e){for(ft=e.return;ft;)switch(ft.tag){case 5:case 13:rn=!1;return;case 27:case 3:rn=!0;return;default:ft=ft.return}}function Cr(e){if(e!==ft)return!1;if(!ge)return jh(e),ge=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Qc(e.type,e.memoizedProps)),a=!a),a&&Le&&zi(e),jh(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Le=Wt(e.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Le=null}}else n===27?(n=Le,hi(e.type)?(e=ef,ef=null,Le=e):Le=n):Le=ft?Wt(e.stateNode.nextSibling):null;return!0}function Or(){Le=ft=null,ge=!1}function qh(){var e=Pi;return e!==null&&(bt===null?bt=e:bt.push.apply(bt,e),Pi=null),e}function Ir(e){Pi===null?Pi=[e]:Pi.push(e)}var xu=B(null),Hi=null,Sn=null;function Zn(e,n,a){Y(xu,n._currentValue),n._currentValue=a}function wn(e){e._currentValue=xu.current,$(xu)}function Lu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function Pu(e,n,a,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var c=u.dependencies;if(c!==null){var p=u.child;c=c.firstContext;e:for(;c!==null;){var v=c;c=u;for(var _=0;_<n.length;_++)if(v.context===n[_]){c.lanes|=a,v=c.alternate,v!==null&&(v.lanes|=a),Lu(c.return,a,e),s||(p=null);break e}c=v.next}}else if(u.tag===18){if(p=u.return,p===null)throw Error(l(341));p.lanes|=a,c=p.alternate,c!==null&&(c.lanes|=a),Lu(p,a,e),p=null}else p=u.child;if(p!==null)p.return=u;else for(p=u;p!==null;){if(p===e){p=null;break}if(u=p.sibling,u!==null){u.return=p.return,p=u;break}p=p.return}u=p}}function Nr(e,n,a,s){e=null;for(var u=n,c=!1;u!==null;){if(!c){if((u.flags&524288)!==0)c=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var p=u.alternate;if(p===null)throw Error(l(387));if(p=p.memoizedProps,p!==null){var v=u.type;At(u.pendingProps.value,p.value)||(e!==null?e.push(v):e=[v])}}else if(u===St.current){if(p=u.alternate,p===null)throw Error(l(387));p.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(rs):e=[rs])}u=u.return}e!==null&&Pu(n,e,a,s),n.flags|=262144}function pl(e){for(e=e.firstContext;e!==null;){if(!At(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Bi(e){Hi=e,Sn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ot(e){return Vh(Hi,e)}function ml(e,n){return Hi===null&&Bi(e),Vh(e,n)}function Vh(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Sn===null){if(e===null)throw Error(l(308));Sn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Sn=Sn.next=n;return a}var oE=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},uE=i.unstable_scheduleCallback,cE=i.unstable_NormalPriority,Fe={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zu(){return{controller:new oE,data:new Map,refCount:0}}function Dr(e){e.refCount--,e.refCount===0&&uE(cE,function(){e.controller.abort()})}var kr=null,Hu=0,Ta=0,Sa=null;function fE(e,n){if(kr===null){var a=kr=[];Hu=0,Ta=jc(),Sa={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Hu++,n.then(Gh,Gh),n}function Gh(){if(--Hu===0&&kr!==null){Sa!==null&&(Sa.status="fulfilled");var e=kr;kr=null,Ta=0,Sa=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function dE(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Yh=x.S;x.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&fE(e,n),Yh!==null&&Yh(e,n)};var ji=B(null);function Bu(){var e=ji.current;return e!==null?e:Ae.pooledCache}function gl(e,n){n===null?Y(ji,ji.current):Y(ji,n.pool)}function Fh(){var e=Bu();return e===null?null:{parent:Fe._currentValue,pool:e}}var Ur=Error(l(460)),Xh=Error(l(474)),vl=Error(l(542)),ju={then:function(){}};function $h(e){return e=e.status,e==="fulfilled"||e==="rejected"}function yl(){}function Kh(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(yl,yl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Wh(e),e;default:if(typeof n.status=="string")n.then(yl,yl);else{if(e=Ae,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Wh(e),e}throw Mr=n,Ur}}var Mr=null;function Qh(){if(Mr===null)throw Error(l(459));var e=Mr;return Mr=null,e}function Wh(e){if(e===Ur||e===vl)throw Error(l(483))}var Jn=!1;function qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ei(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ti(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(ve&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=cl(e),Ph(e,null,a),n}return ul(e,s,n,a),cl(e)}function xr(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Gd(e,a)}}function Gu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var p={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?u=c=p:c=c.next=p,a=a.next}while(a!==null);c===null?u=c=n:c=c.next=n}else u=c=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Yu=!1;function Lr(){if(Yu){var e=Sa;if(e!==null)throw e}}function Pr(e,n,a,s){Yu=!1;var u=e.updateQueue;Jn=!1;var c=u.firstBaseUpdate,p=u.lastBaseUpdate,v=u.shared.pending;if(v!==null){u.shared.pending=null;var _=v,A=_.next;_.next=null,p===null?c=A:p.next=A,p=_;var U=e.alternate;U!==null&&(U=U.updateQueue,v=U.lastBaseUpdate,v!==p&&(v===null?U.firstBaseUpdate=A:v.next=A,U.lastBaseUpdate=_))}if(c!==null){var z=u.baseState;p=0,U=A=_=null,v=c;do{var O=v.lane&-536870913,I=O!==v.lane;if(I?(fe&O)===O:(s&O)===O){O!==0&&O===Ta&&(Yu=!0),U!==null&&(U=U.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var te=e,Z=v;O=n;var Ee=a;switch(Z.tag){case 1:if(te=Z.payload,typeof te=="function"){z=te.call(Ee,z,O);break e}z=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=Z.payload,O=typeof te=="function"?te.call(Ee,z,O):te,O==null)break e;z=y({},z,O);break e;case 2:Jn=!0}}O=v.callback,O!==null&&(e.flags|=64,I&&(e.flags|=8192),I=u.callbacks,I===null?u.callbacks=[O]:I.push(O))}else I={lane:O,tag:v.tag,payload:v.payload,callback:v.callback,next:null},U===null?(A=U=I,_=z):U=U.next=I,p|=O;if(v=v.next,v===null){if(v=u.shared.pending,v===null)break;I=v,v=I.next,I.next=null,u.lastBaseUpdate=I,u.shared.pending=null}}while(!0);U===null&&(_=z),u.baseState=_,u.firstBaseUpdate=A,u.lastBaseUpdate=U,c===null&&(u.shared.lanes=0),ui|=p,e.lanes=p,e.memoizedState=z}}function Zh(e,n){if(typeof e!="function")throw Error(l(191,e));e.call(n)}function Jh(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Zh(a[e],n)}var wa=B(null),_l=B(0);function ep(e,n){e=Dn,Y(_l,e),Y(wa,n),Dn=e|n.baseLanes}function Fu(){Y(_l,Dn),Y(wa,wa.current)}function Xu(){Dn=_l.current,$(wa),$(_l)}var ni=0,re=null,_e=null,qe=null,bl=!1,Ra=!1,qi=!1,El=0,zr=0,Aa=null,hE=0;function Be(){throw Error(l(321))}function $u(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!At(e[a],n[a]))return!1;return!0}function Ku(e,n,a,s,u,c){return ni=c,re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,x.H=e===null||e.memoizedState===null?Pp:zp,qi=!1,c=a(s,u),qi=!1,Ra&&(c=np(n,a,s,u)),tp(e),c}function tp(e){x.H=Cl;var n=_e!==null&&_e.next!==null;if(ni=0,qe=_e=re=null,bl=!1,zr=0,Aa=null,n)throw Error(l(300));e===null||We||(e=e.dependencies,e!==null&&pl(e)&&(We=!0))}function np(e,n,a,s){re=e;var u=0;do{if(Ra&&(Aa=null),zr=0,Ra=!1,25<=u)throw Error(l(301));if(u+=1,qe=_e=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}x.H=bE,c=n(a,s)}while(Ra);return c}function pE(){var e=x.H,n=e.useState()[0];return n=typeof n.then=="function"?Hr(n):n,e=e.useState()[0],(_e!==null?_e.memoizedState:null)!==e&&(re.flags|=1024),n}function Qu(){var e=El!==0;return El=0,e}function Wu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Zu(e){if(bl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}bl=!1}ni=0,qe=_e=re=null,Ra=!1,zr=El=0,Aa=null}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?re.memoizedState=qe=e:qe=qe.next=e,qe}function Ve(){if(_e===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var n=qe===null?re.memoizedState:qe.next;if(n!==null)qe=n,_e=e;else{if(e===null)throw re.alternate===null?Error(l(467)):Error(l(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},qe===null?re.memoizedState=qe=e:qe=qe.next=e}return qe}function Ju(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Hr(e){var n=zr;return zr+=1,Aa===null&&(Aa=[]),e=Kh(Aa,e,n),n=re,(qe===null?n.memoizedState:qe.next)===null&&(n=n.alternate,x.H=n===null||n.memoizedState===null?Pp:zp),e}function Tl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Hr(e);if(e.$$typeof===L)return ot(e)}throw Error(l(438,String(e)))}function ec(e){var n=null,a=re.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=re.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ju(),re.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=Ye;return n.index++,a}function Rn(e,n){return typeof n=="function"?n(e):n}function Sl(e){var n=Ve();return tc(n,_e,e)}function tc(e,n,a){var s=e.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=a;var u=e.baseQueue,c=s.pending;if(c!==null){if(u!==null){var p=u.next;u.next=c.next,c.next=p}n.baseQueue=u=c,s.pending=null}if(c=e.baseState,u===null)e.memoizedState=c;else{n=u.next;var v=p=null,_=null,A=n,U=!1;do{var z=A.lane&-536870913;if(z!==A.lane?(fe&z)===z:(ni&z)===z){var O=A.revertLane;if(O===0)_!==null&&(_=_.next={lane:0,revertLane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),z===Ta&&(U=!0);else if((ni&O)===O){A=A.next,O===Ta&&(U=!0);continue}else z={lane:0,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},_===null?(v=_=z,p=c):_=_.next=z,re.lanes|=O,ui|=O;z=A.action,qi&&a(c,z),c=A.hasEagerState?A.eagerState:a(c,z)}else O={lane:z,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},_===null?(v=_=O,p=c):_=_.next=O,re.lanes|=z,ui|=z;A=A.next}while(A!==null&&A!==n);if(_===null?p=c:_.next=v,!At(c,e.memoizedState)&&(We=!0,U&&(a=Sa,a!==null)))throw a;e.memoizedState=c,e.baseState=p,e.baseQueue=_,s.lastRenderedState=c}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function nc(e){var n=Ve(),a=n.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=e;var s=a.dispatch,u=a.pending,c=n.memoizedState;if(u!==null){a.pending=null;var p=u=u.next;do c=e(c,p.action),p=p.next;while(p!==u);At(c,n.memoizedState)||(We=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,s]}function ip(e,n,a){var s=re,u=Ve(),c=ge;if(c){if(a===void 0)throw Error(l(407));a=a()}else a=n();var p=!At((_e||u).memoizedState,a);p&&(u.memoizedState=a,We=!0),u=u.queue;var v=sp.bind(null,s,u,e);if(Br(2048,8,v,[e]),u.getSnapshot!==n||p||qe!==null&&qe.memoizedState.tag&1){if(s.flags|=2048,Ca(9,wl(),rp.bind(null,s,u,a,n),null),Ae===null)throw Error(l(349));c||(ni&124)!==0||ap(s,n,a)}return a}function ap(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=re.updateQueue,n===null?(n=Ju(),re.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function rp(e,n,a,s){n.value=a,n.getSnapshot=s,lp(n)&&op(e)}function sp(e,n,a){return a(function(){lp(n)&&op(e)})}function lp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!At(e,a)}catch{return!0}}function op(e){var n=ya(e,2);n!==null&&kt(n,e,2)}function ic(e){var n=yt();if(typeof e=="function"){var a=e;if(e=a(),qi){Kn(!0);try{a()}finally{Kn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:e},n}function up(e,n,a,s){return e.baseState=a,tc(e,_e,typeof s=="function"?s:Rn)}function mE(e,n,a,s,u){if(Al(e))throw Error(l(485));if(e=n.action,e!==null){var c={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};x.T!==null?a(!0):c.isTransition=!1,s(c),a=n.pending,a===null?(c.next=n.pending=c,cp(n,c)):(c.next=a.next,n.pending=a.next=c)}}function cp(e,n){var a=n.action,s=n.payload,u=e.state;if(n.isTransition){var c=x.T,p={};x.T=p;try{var v=a(u,s),_=x.S;_!==null&&_(p,v),fp(e,n,v)}catch(A){ac(e,n,A)}finally{x.T=c}}else try{c=a(u,s),fp(e,n,c)}catch(A){ac(e,n,A)}}function fp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){dp(e,n,s)},function(s){return ac(e,n,s)}):dp(e,n,a)}function dp(e,n,a){n.status="fulfilled",n.value=a,hp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,cp(e,a)))}function ac(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,hp(n),n=n.next;while(n!==s)}e.action=null}function hp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function pp(e,n){return n}function mp(e,n){if(ge){var a=Ae.formState;if(a!==null){e:{var s=re;if(ge){if(Le){t:{for(var u=Le,c=rn;u.nodeType!==8;){if(!c){u=null;break t}if(u=Wt(u.nextSibling),u===null){u=null;break t}}c=u.data,u=c==="F!"||c==="F"?u:null}if(u){Le=Wt(u.nextSibling),s=u.data==="F!";break e}}zi(s)}s=!1}s&&(n=a[0])}}return a=yt(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pp,lastRenderedState:n},a.queue=s,a=Mp.bind(null,re,s),s.dispatch=a,s=ic(!1),c=uc.bind(null,re,!1,s.queue),s=yt(),u={state:n,dispatch:null,action:e,pending:null},s.queue=u,a=mE.bind(null,re,u,c,a),u.dispatch=a,s.memoizedState=e,[n,a,!1]}function gp(e){var n=Ve();return vp(n,_e,e)}function vp(e,n,a){if(n=tc(e,n,pp)[0],e=Sl(Rn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Hr(n)}catch(p){throw p===Ur?vl:p}else s=n;n=Ve();var u=n.queue,c=u.dispatch;return a!==n.memoizedState&&(re.flags|=2048,Ca(9,wl(),gE.bind(null,u,a),null)),[s,c,e]}function gE(e,n){e.action=n}function yp(e){var n=Ve(),a=_e;if(a!==null)return vp(n,a,e);Ve(),n=n.memoizedState,a=Ve();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Ca(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=re.updateQueue,n===null&&(n=Ju(),re.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function wl(){return{destroy:void 0,resource:void 0}}function _p(){return Ve().memoizedState}function Rl(e,n,a,s){var u=yt();s=s===void 0?null:s,re.flags|=e,u.memoizedState=Ca(1|n,wl(),a,s)}function Br(e,n,a,s){var u=Ve();s=s===void 0?null:s;var c=u.memoizedState.inst;_e!==null&&s!==null&&$u(s,_e.memoizedState.deps)?u.memoizedState=Ca(n,c,a,s):(re.flags|=e,u.memoizedState=Ca(1|n,c,a,s))}function bp(e,n){Rl(8390656,8,e,n)}function Ep(e,n){Br(2048,8,e,n)}function Tp(e,n){return Br(4,2,e,n)}function Sp(e,n){return Br(4,4,e,n)}function wp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Rp(e,n,a){a=a!=null?a.concat([e]):null,Br(4,4,wp.bind(null,n,e),a)}function rc(){}function Ap(e,n){var a=Ve();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&$u(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function Cp(e,n){var a=Ve();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&$u(n,s[1]))return s[0];if(s=e(),qi){Kn(!0);try{e()}finally{Kn(!1)}}return a.memoizedState=[s,n],s}function sc(e,n,a){return a===void 0||(ni&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Nm(),re.lanes|=e,ui|=e,a)}function Op(e,n,a,s){return At(a,n)?a:wa.current!==null?(e=sc(e,a,s),At(e,n)||(We=!0),e):(ni&42)===0?(We=!0,e.memoizedState=a):(e=Nm(),re.lanes|=e,ui|=e,n)}function Ip(e,n,a,s,u){var c=F.p;F.p=c!==0&&8>c?c:8;var p=x.T,v={};x.T=v,uc(e,!1,n,a);try{var _=u(),A=x.S;if(A!==null&&A(v,_),_!==null&&typeof _=="object"&&typeof _.then=="function"){var U=dE(_,s);jr(e,n,U,Dt(e))}else jr(e,n,s,Dt(e))}catch(z){jr(e,n,{then:function(){},status:"rejected",reason:z},Dt())}finally{F.p=c,x.T=p}}function vE(){}function lc(e,n,a,s){if(e.tag!==5)throw Error(l(476));var u=Np(e).queue;Ip(e,u,n,ee,a===null?vE:function(){return Dp(e),a(s)})}function Np(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:ee},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Dp(e){var n=Np(e).next.queue;jr(e,n,{},Dt())}function oc(){return ot(rs)}function kp(){return Ve().memoizedState}function Up(){return Ve().memoizedState}function yE(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Dt();e=ei(a);var s=ti(n,e,a);s!==null&&(kt(s,n,a),xr(s,n,a)),n={cache:zu()},e.payload=n;return}n=n.return}}function _E(e,n,a){var s=Dt();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Al(e)?xp(n,a):(a=Ou(e,n,a,s),a!==null&&(kt(a,e,s),Lp(a,n,s)))}function Mp(e,n,a){var s=Dt();jr(e,n,a,s)}function jr(e,n,a,s){var u={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Al(e))xp(n,u);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var p=n.lastRenderedState,v=c(p,a);if(u.hasEagerState=!0,u.eagerState=v,At(v,p))return ul(e,n,u,0),Ae===null&&ol(),!1}catch{}finally{}if(a=Ou(e,n,u,s),a!==null)return kt(a,e,s),Lp(a,n,s),!0}return!1}function uc(e,n,a,s){if(s={lane:2,revertLane:jc(),action:s,hasEagerState:!1,eagerState:null,next:null},Al(e)){if(n)throw Error(l(479))}else n=Ou(e,a,s,2),n!==null&&kt(n,e,2)}function Al(e){var n=e.alternate;return e===re||n!==null&&n===re}function xp(e,n){Ra=bl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Lp(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Gd(e,a)}}var Cl={readContext:ot,use:Tl,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be},Pp={readContext:ot,use:Tl,useCallback:function(e,n){return yt().memoizedState=[e,n===void 0?null:n],e},useContext:ot,useEffect:bp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Rl(4194308,4,wp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Rl(4194308,4,e,n)},useInsertionEffect:function(e,n){Rl(4,2,e,n)},useMemo:function(e,n){var a=yt();n=n===void 0?null:n;var s=e();if(qi){Kn(!0);try{e()}finally{Kn(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=yt();if(a!==void 0){var u=a(n);if(qi){Kn(!0);try{a(n)}finally{Kn(!1)}}}else u=n;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=_E.bind(null,re,e),[s.memoizedState,e]},useRef:function(e){var n=yt();return e={current:e},n.memoizedState=e},useState:function(e){e=ic(e);var n=e.queue,a=Mp.bind(null,re,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:rc,useDeferredValue:function(e,n){var a=yt();return sc(a,e,n)},useTransition:function(){var e=ic(!1);return e=Ip.bind(null,re,e.queue,!0,!1),yt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=re,u=yt();if(ge){if(a===void 0)throw Error(l(407));a=a()}else{if(a=n(),Ae===null)throw Error(l(349));(fe&124)!==0||ap(s,n,a)}u.memoizedState=a;var c={value:a,getSnapshot:n};return u.queue=c,bp(sp.bind(null,s,c,e),[e]),s.flags|=2048,Ca(9,wl(),rp.bind(null,s,c,a,n),null),a},useId:function(){var e=yt(),n=Ae.identifierPrefix;if(ge){var a=Tn,s=En;a=(s&~(1<<32-Rt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=El++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=hE++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:oc,useFormState:mp,useActionState:mp,useOptimistic:function(e){var n=yt();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=uc.bind(null,re,!0,a),a.dispatch=n,[e,n]},useMemoCache:ec,useCacheRefresh:function(){return yt().memoizedState=yE.bind(null,re)}},zp={readContext:ot,use:Tl,useCallback:Ap,useContext:ot,useEffect:Ep,useImperativeHandle:Rp,useInsertionEffect:Tp,useLayoutEffect:Sp,useMemo:Cp,useReducer:Sl,useRef:_p,useState:function(){return Sl(Rn)},useDebugValue:rc,useDeferredValue:function(e,n){var a=Ve();return Op(a,_e.memoizedState,e,n)},useTransition:function(){var e=Sl(Rn)[0],n=Ve().memoizedState;return[typeof e=="boolean"?e:Hr(e),n]},useSyncExternalStore:ip,useId:kp,useHostTransitionStatus:oc,useFormState:gp,useActionState:gp,useOptimistic:function(e,n){var a=Ve();return up(a,_e,e,n)},useMemoCache:ec,useCacheRefresh:Up},bE={readContext:ot,use:Tl,useCallback:Ap,useContext:ot,useEffect:Ep,useImperativeHandle:Rp,useInsertionEffect:Tp,useLayoutEffect:Sp,useMemo:Cp,useReducer:nc,useRef:_p,useState:function(){return nc(Rn)},useDebugValue:rc,useDeferredValue:function(e,n){var a=Ve();return _e===null?sc(a,e,n):Op(a,_e.memoizedState,e,n)},useTransition:function(){var e=nc(Rn)[0],n=Ve().memoizedState;return[typeof e=="boolean"?e:Hr(e),n]},useSyncExternalStore:ip,useId:kp,useHostTransitionStatus:oc,useFormState:yp,useActionState:yp,useOptimistic:function(e,n){var a=Ve();return _e!==null?up(a,_e,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ec,useCacheRefresh:Up},Oa=null,qr=0;function Ol(e){var n=qr;return qr+=1,Oa===null&&(Oa=[]),Kh(Oa,e,n)}function Vr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Il(e,n){throw n.$$typeof===b?Error(l(525)):(e=Object.prototype.toString.call(n),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Hp(e){var n=e._init;return n(e._payload)}function Bp(e){function n(w,T){if(e){var R=w.deletions;R===null?(w.deletions=[T],w.flags|=16):R.push(T)}}function a(w,T){if(!e)return null;for(;T!==null;)n(w,T),T=T.sibling;return null}function s(w){for(var T=new Map;w!==null;)w.key!==null?T.set(w.key,w):T.set(w.index,w),w=w.sibling;return T}function u(w,T){return w=bn(w,T),w.index=0,w.sibling=null,w}function c(w,T,R){return w.index=R,e?(R=w.alternate,R!==null?(R=R.index,R<T?(w.flags|=67108866,T):R):(w.flags|=67108866,T)):(w.flags|=1048576,T)}function p(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function v(w,T,R,P){return T===null||T.tag!==6?(T=Nu(R,w.mode,P),T.return=w,T):(T=u(T,R),T.return=w,T)}function _(w,T,R,P){var K=R.type;return K===C?U(w,T,R.props.children,P,R.key):T!==null&&(T.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===me&&Hp(K)===T.type)?(T=u(T,R.props),Vr(T,R),T.return=w,T):(T=fl(R.type,R.key,R.props,null,w.mode,P),Vr(T,R),T.return=w,T)}function A(w,T,R,P){return T===null||T.tag!==4||T.stateNode.containerInfo!==R.containerInfo||T.stateNode.implementation!==R.implementation?(T=Du(R,w.mode,P),T.return=w,T):(T=u(T,R.children||[]),T.return=w,T)}function U(w,T,R,P,K){return T===null||T.tag!==7?(T=Mi(R,w.mode,P,K),T.return=w,T):(T=u(T,R),T.return=w,T)}function z(w,T,R){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=Nu(""+T,w.mode,R),T.return=w,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case S:return R=fl(T.type,T.key,T.props,null,w.mode,R),Vr(R,T),R.return=w,R;case D:return T=Du(T,w.mode,R),T.return=w,T;case me:var P=T._init;return T=P(T._payload),z(w,T,R)}if(st(T)||Ie(T))return T=Mi(T,w.mode,R,null),T.return=w,T;if(typeof T.then=="function")return z(w,Ol(T),R);if(T.$$typeof===L)return z(w,ml(w,T),R);Il(w,T)}return null}function O(w,T,R,P){var K=T!==null?T.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return K!==null?null:v(w,T,""+R,P);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case S:return R.key===K?_(w,T,R,P):null;case D:return R.key===K?A(w,T,R,P):null;case me:return K=R._init,R=K(R._payload),O(w,T,R,P)}if(st(R)||Ie(R))return K!==null?null:U(w,T,R,P,null);if(typeof R.then=="function")return O(w,T,Ol(R),P);if(R.$$typeof===L)return O(w,T,ml(w,R),P);Il(w,R)}return null}function I(w,T,R,P,K){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return w=w.get(R)||null,v(T,w,""+P,K);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case S:return w=w.get(P.key===null?R:P.key)||null,_(T,w,P,K);case D:return w=w.get(P.key===null?R:P.key)||null,A(T,w,P,K);case me:var le=P._init;return P=le(P._payload),I(w,T,R,P,K)}if(st(P)||Ie(P))return w=w.get(R)||null,U(T,w,P,K,null);if(typeof P.then=="function")return I(w,T,R,Ol(P),K);if(P.$$typeof===L)return I(w,T,R,ml(T,P),K);Il(T,P)}return null}function te(w,T,R,P){for(var K=null,le=null,Q=T,J=T=0,Je=null;Q!==null&&J<R.length;J++){Q.index>J?(Je=Q,Q=null):Je=Q.sibling;var he=O(w,Q,R[J],P);if(he===null){Q===null&&(Q=Je);break}e&&Q&&he.alternate===null&&n(w,Q),T=c(he,T,J),le===null?K=he:le.sibling=he,le=he,Q=Je}if(J===R.length)return a(w,Q),ge&&Li(w,J),K;if(Q===null){for(;J<R.length;J++)Q=z(w,R[J],P),Q!==null&&(T=c(Q,T,J),le===null?K=Q:le.sibling=Q,le=Q);return ge&&Li(w,J),K}for(Q=s(Q);J<R.length;J++)Je=I(Q,w,J,R[J],P),Je!==null&&(e&&Je.alternate!==null&&Q.delete(Je.key===null?J:Je.key),T=c(Je,T,J),le===null?K=Je:le.sibling=Je,le=Je);return e&&Q.forEach(function(yi){return n(w,yi)}),ge&&Li(w,J),K}function Z(w,T,R,P){if(R==null)throw Error(l(151));for(var K=null,le=null,Q=T,J=T=0,Je=null,he=R.next();Q!==null&&!he.done;J++,he=R.next()){Q.index>J?(Je=Q,Q=null):Je=Q.sibling;var yi=O(w,Q,he.value,P);if(yi===null){Q===null&&(Q=Je);break}e&&Q&&yi.alternate===null&&n(w,Q),T=c(yi,T,J),le===null?K=yi:le.sibling=yi,le=yi,Q=Je}if(he.done)return a(w,Q),ge&&Li(w,J),K;if(Q===null){for(;!he.done;J++,he=R.next())he=z(w,he.value,P),he!==null&&(T=c(he,T,J),le===null?K=he:le.sibling=he,le=he);return ge&&Li(w,J),K}for(Q=s(Q);!he.done;J++,he=R.next())he=I(Q,w,J,he.value,P),he!==null&&(e&&he.alternate!==null&&Q.delete(he.key===null?J:he.key),T=c(he,T,J),le===null?K=he:le.sibling=he,le=he);return e&&Q.forEach(function(E0){return n(w,E0)}),ge&&Li(w,J),K}function Ee(w,T,R,P){if(typeof R=="object"&&R!==null&&R.type===C&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case S:e:{for(var K=R.key;T!==null;){if(T.key===K){if(K=R.type,K===C){if(T.tag===7){a(w,T.sibling),P=u(T,R.props.children),P.return=w,w=P;break e}}else if(T.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===me&&Hp(K)===T.type){a(w,T.sibling),P=u(T,R.props),Vr(P,R),P.return=w,w=P;break e}a(w,T);break}else n(w,T);T=T.sibling}R.type===C?(P=Mi(R.props.children,w.mode,P,R.key),P.return=w,w=P):(P=fl(R.type,R.key,R.props,null,w.mode,P),Vr(P,R),P.return=w,w=P)}return p(w);case D:e:{for(K=R.key;T!==null;){if(T.key===K)if(T.tag===4&&T.stateNode.containerInfo===R.containerInfo&&T.stateNode.implementation===R.implementation){a(w,T.sibling),P=u(T,R.children||[]),P.return=w,w=P;break e}else{a(w,T);break}else n(w,T);T=T.sibling}P=Du(R,w.mode,P),P.return=w,w=P}return p(w);case me:return K=R._init,R=K(R._payload),Ee(w,T,R,P)}if(st(R))return te(w,T,R,P);if(Ie(R)){if(K=Ie(R),typeof K!="function")throw Error(l(150));return R=K.call(R),Z(w,T,R,P)}if(typeof R.then=="function")return Ee(w,T,Ol(R),P);if(R.$$typeof===L)return Ee(w,T,ml(w,R),P);Il(w,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,T!==null&&T.tag===6?(a(w,T.sibling),P=u(T,R),P.return=w,w=P):(a(w,T),P=Nu(R,w.mode,P),P.return=w,w=P),p(w)):a(w,T)}return function(w,T,R,P){try{qr=0;var K=Ee(w,T,R,P);return Oa=null,K}catch(Q){if(Q===Ur||Q===vl)throw Q;var le=Ct(29,Q,null,w.mode);return le.lanes=P,le.return=w,le}finally{}}}var Ia=Bp(!0),jp=Bp(!1),qt=B(null),sn=null;function ii(e){var n=e.alternate;Y(Xe,Xe.current&1),Y(qt,e),sn===null&&(n===null||wa.current!==null||n.memoizedState!==null)&&(sn=e)}function qp(e){if(e.tag===22){if(Y(Xe,Xe.current),Y(qt,e),sn===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(sn=e)}}else ai()}function ai(){Y(Xe,Xe.current),Y(qt,qt.current)}function An(e){$(qt),sn===e&&(sn=null),$(Xe)}var Xe=B(0);function Nl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Jc(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function cc(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:y({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var fc={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Dt(),u=ei(s);u.payload=n,a!=null&&(u.callback=a),n=ti(e,u,s),n!==null&&(kt(n,e,s),xr(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Dt(),u=ei(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ti(e,u,s),n!==null&&(kt(n,e,s),xr(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Dt(),s=ei(a);s.tag=2,n!=null&&(s.callback=n),n=ti(e,s,a),n!==null&&(kt(n,e,a),xr(n,e,a))}};function Vp(e,n,a,s,u,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,c,p):n.prototype&&n.prototype.isPureReactComponent?!Rr(a,s)||!Rr(u,c):!0}function Gp(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&fc.enqueueReplaceState(n,n.state,null)}function Vi(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=y({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Dl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Yp(e){Dl(e)}function Fp(e){console.error(e)}function Xp(e){Dl(e)}function kl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function $p(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function dc(e,n,a){return a=ei(a),a.tag=3,a.payload={element:null},a.callback=function(){kl(e,n)},a}function Kp(e){return e=ei(e),e.tag=3,e}function Qp(e,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var c=s.value;e.payload=function(){return u(c)},e.callback=function(){$p(n,a,s)}}var p=a.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){$p(n,a,s),typeof u!="function"&&(ci===null?ci=new Set([this]):ci.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})})}function EE(e,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Nr(n,a,u,!0),a=qt.current,a!==null){switch(a.tag){case 13:return sn===null?Lc():a.alternate===null&&Pe===0&&(Pe=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===ju?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),zc(e,s,u)),!1;case 22:return a.flags|=65536,s===ju?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),zc(e,s,u)),!1}throw Error(l(435,a.tag))}return zc(e,s,u),Lc(),!1}if(ge)return n=qt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Mu&&(e=Error(l(422),{cause:s}),Ir(zt(e,a)))):(s!==Mu&&(n=Error(l(423),{cause:s}),Ir(zt(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=zt(s,a),u=dc(e.stateNode,s,u),Gu(e,u),Pe!==4&&(Pe=2)),!1;var c=Error(l(520),{cause:s});if(c=zt(c,a),Qr===null?Qr=[c]:Qr.push(c),Pe!==4&&(Pe=2),n===null)return!0;s=zt(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=dc(a.stateNode,s,e),Gu(a,e),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ci===null||!ci.has(c))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Kp(u),Qp(u,e,a,s),Gu(a,u),!1}a=a.return}while(a!==null);return!1}var Wp=Error(l(461)),We=!1;function nt(e,n,a,s){n.child=e===null?jp(n,null,a,s):Ia(n,e.child,a,s)}function Zp(e,n,a,s,u){a=a.render;var c=n.ref;if("ref"in s){var p={};for(var v in s)v!=="ref"&&(p[v]=s[v])}else p=s;return Bi(n),s=Ku(e,n,a,p,c,u),v=Qu(),e!==null&&!We?(Wu(e,n,u),Cn(e,n,u)):(ge&&v&&ku(n),n.flags|=1,nt(e,n,s,u),n.child)}function Jp(e,n,a,s,u){if(e===null){var c=a.type;return typeof c=="function"&&!Iu(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,em(e,n,c,s,u)):(e=fl(a.type,null,s,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(c=e.child,!bc(e,u)){var p=c.memoizedProps;if(a=a.compare,a=a!==null?a:Rr,a(p,s)&&e.ref===n.ref)return Cn(e,n,u)}return n.flags|=1,e=bn(c,s),e.ref=n.ref,e.return=n,n.child=e}function em(e,n,a,s,u){if(e!==null){var c=e.memoizedProps;if(Rr(c,s)&&e.ref===n.ref)if(We=!1,n.pendingProps=s=c,bc(e,u))(e.flags&131072)!==0&&(We=!0);else return n.lanes=e.lanes,Cn(e,n,u)}return hc(e,n,a,s,u)}function tm(e,n,a){var s=n.pendingProps,u=s.children,c=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=c!==null?c.baseLanes|a:a,e!==null){for(u=n.child=e.child,c=0;u!==null;)c=c|u.lanes|u.childLanes,u=u.sibling;n.childLanes=c&~s}else n.childLanes=0,n.child=null;return nm(e,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&gl(n,c!==null?c.cachePool:null),c!==null?ep(n,c):Fu(),qp(n);else return n.lanes=n.childLanes=536870912,nm(e,n,c!==null?c.baseLanes|a:a,a)}else c!==null?(gl(n,c.cachePool),ep(n,c),ai(),n.memoizedState=null):(e!==null&&gl(n,null),Fu(),ai());return nt(e,n,u,a),n.child}function nm(e,n,a,s){var u=Bu();return u=u===null?null:{parent:Fe._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&gl(n,null),Fu(),qp(n),e!==null&&Nr(e,n,s,!0),null}function Ul(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(l(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function hc(e,n,a,s,u){return Bi(n),a=Ku(e,n,a,s,void 0,u),s=Qu(),e!==null&&!We?(Wu(e,n,u),Cn(e,n,u)):(ge&&s&&ku(n),n.flags|=1,nt(e,n,a,u),n.child)}function im(e,n,a,s,u,c){return Bi(n),n.updateQueue=null,a=np(n,s,a,u),tp(e),s=Qu(),e!==null&&!We?(Wu(e,n,c),Cn(e,n,c)):(ge&&s&&ku(n),n.flags|=1,nt(e,n,a,c),n.child)}function am(e,n,a,s,u){if(Bi(n),n.stateNode===null){var c=_a,p=a.contextType;typeof p=="object"&&p!==null&&(c=ot(p)),c=new a(s,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=fc,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=s,c.state=n.memoizedState,c.refs={},qu(n),p=a.contextType,c.context=typeof p=="object"&&p!==null?ot(p):_a,c.state=n.memoizedState,p=a.getDerivedStateFromProps,typeof p=="function"&&(cc(n,a,p,s),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&fc.enqueueReplaceState(c,c.state,null),Pr(n,s,c,u),Lr(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){c=n.stateNode;var v=n.memoizedProps,_=Vi(a,v);c.props=_;var A=c.context,U=a.contextType;p=_a,typeof U=="object"&&U!==null&&(p=ot(U));var z=a.getDerivedStateFromProps;U=typeof z=="function"||typeof c.getSnapshotBeforeUpdate=="function",v=n.pendingProps!==v,U||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(v||A!==p)&&Gp(n,c,s,p),Jn=!1;var O=n.memoizedState;c.state=O,Pr(n,s,c,u),Lr(),A=n.memoizedState,v||O!==A||Jn?(typeof z=="function"&&(cc(n,a,z,s),A=n.memoizedState),(_=Jn||Vp(n,a,_,s,O,A,p))?(U||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=A),c.props=s,c.state=A,c.context=p,s=_):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{c=n.stateNode,Vu(e,n),p=n.memoizedProps,U=Vi(a,p),c.props=U,z=n.pendingProps,O=c.context,A=a.contextType,_=_a,typeof A=="object"&&A!==null&&(_=ot(A)),v=a.getDerivedStateFromProps,(A=typeof v=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==z||O!==_)&&Gp(n,c,s,_),Jn=!1,O=n.memoizedState,c.state=O,Pr(n,s,c,u),Lr();var I=n.memoizedState;p!==z||O!==I||Jn||e!==null&&e.dependencies!==null&&pl(e.dependencies)?(typeof v=="function"&&(cc(n,a,v,s),I=n.memoizedState),(U=Jn||Vp(n,a,U,s,O,I,_)||e!==null&&e.dependencies!==null&&pl(e.dependencies))?(A||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,I,_),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,I,_)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&O===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&O===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=I),c.props=s,c.state=I,c.context=_,s=U):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&O===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&O===e.memoizedState||(n.flags|=1024),s=!1)}return c=s,Ul(e,n),s=(n.flags&128)!==0,c||s?(c=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,e!==null&&s?(n.child=Ia(n,e.child,null,u),n.child=Ia(n,null,a,u)):nt(e,n,a,u),n.memoizedState=c.state,e=n.child):e=Cn(e,n,u),e}function rm(e,n,a,s){return Or(),n.flags|=256,nt(e,n,a,s),n.child}var pc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mc(e){return{baseLanes:e,cachePool:Fh()}}function gc(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Vt),e}function sm(e,n,a){var s=n.pendingProps,u=!1,c=(n.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(Xe.current&2)!==0),p&&(u=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,e===null){if(ge){if(u?ii(n):ai(),ge){var v=Le,_;if(_=v){e:{for(_=v,v=rn;_.nodeType!==8;){if(!v){v=null;break e}if(_=Wt(_.nextSibling),_===null){v=null;break e}}v=_}v!==null?(n.memoizedState={dehydrated:v,treeContext:xi!==null?{id:En,overflow:Tn}:null,retryLane:536870912,hydrationErrors:null},_=Ct(18,null,null,0),_.stateNode=v,_.return=n,n.child=_,ft=n,Le=null,_=!0):_=!1}_||zi(n)}if(v=n.memoizedState,v!==null&&(v=v.dehydrated,v!==null))return Jc(v)?n.lanes=32:n.lanes=536870912,null;An(n)}return v=s.children,s=s.fallback,u?(ai(),u=n.mode,v=Ml({mode:"hidden",children:v},u),s=Mi(s,u,a,null),v.return=n,s.return=n,v.sibling=s,n.child=v,u=n.child,u.memoizedState=mc(a),u.childLanes=gc(e,p,a),n.memoizedState=pc,s):(ii(n),vc(n,v))}if(_=e.memoizedState,_!==null&&(v=_.dehydrated,v!==null)){if(c)n.flags&256?(ii(n),n.flags&=-257,n=yc(e,n,a)):n.memoizedState!==null?(ai(),n.child=e.child,n.flags|=128,n=null):(ai(),u=s.fallback,v=n.mode,s=Ml({mode:"visible",children:s.children},v),u=Mi(u,v,a,null),u.flags|=2,s.return=n,u.return=n,s.sibling=u,n.child=s,Ia(n,e.child,null,a),s=n.child,s.memoizedState=mc(a),s.childLanes=gc(e,p,a),n.memoizedState=pc,n=u);else if(ii(n),Jc(v)){if(p=v.nextSibling&&v.nextSibling.dataset,p)var A=p.dgst;p=A,s=Error(l(419)),s.stack="",s.digest=p,Ir({value:s,source:null,stack:null}),n=yc(e,n,a)}else if(We||Nr(e,n,a,!1),p=(a&e.childLanes)!==0,We||p){if(p=Ae,p!==null&&(s=a&-a,s=(s&42)!==0?1:eu(s),s=(s&(p.suspendedLanes|a))!==0?0:s,s!==0&&s!==_.retryLane))throw _.retryLane=s,ya(e,s),kt(p,e,s),Wp;v.data==="$?"||Lc(),n=yc(e,n,a)}else v.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=_.treeContext,Le=Wt(v.nextSibling),ft=n,ge=!0,Pi=null,rn=!1,e!==null&&(Bt[jt++]=En,Bt[jt++]=Tn,Bt[jt++]=xi,En=e.id,Tn=e.overflow,xi=n),n=vc(n,s.children),n.flags|=4096);return n}return u?(ai(),u=s.fallback,v=n.mode,_=e.child,A=_.sibling,s=bn(_,{mode:"hidden",children:s.children}),s.subtreeFlags=_.subtreeFlags&65011712,A!==null?u=bn(A,u):(u=Mi(u,v,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,s=u,u=n.child,v=e.child.memoizedState,v===null?v=mc(a):(_=v.cachePool,_!==null?(A=Fe._currentValue,_=_.parent!==A?{parent:A,pool:A}:_):_=Fh(),v={baseLanes:v.baseLanes|a,cachePool:_}),u.memoizedState=v,u.childLanes=gc(e,p,a),n.memoizedState=pc,s):(ii(n),a=e.child,e=a.sibling,a=bn(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(p=n.deletions,p===null?(n.deletions=[e],n.flags|=16):p.push(e)),n.child=a,n.memoizedState=null,a)}function vc(e,n){return n=Ml({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ml(e,n){return e=Ct(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function yc(e,n,a){return Ia(n,e.child,null,a),e=vc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function lm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Lu(e.return,n,a)}function _c(e,n,a,s,u){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u}:(c.isBackwards=n,c.rendering=null,c.renderingStartTime=0,c.last=s,c.tail=a,c.tailMode=u)}function om(e,n,a){var s=n.pendingProps,u=s.revealOrder,c=s.tail;if(nt(e,n,s.children,a),s=Xe.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lm(e,a,n);else if(e.tag===19)lm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(Y(Xe,s),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Nl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),_c(n,!1,u,a,c);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Nl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}_c(n,!0,a,null,c);break;case"together":_c(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Cn(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ui|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Nr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(l(153));if(n.child!==null){for(e=n.child,a=bn(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=bn(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function bc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&pl(e)))}function TE(e,n,a){switch(n.tag){case 3:Ne(n,n.stateNode.containerInfo),Zn(n,Fe,e.memoizedState.cache),Or();break;case 27:case 5:Ko(n);break;case 4:Ne(n,n.stateNode.containerInfo);break;case 10:Zn(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ii(n),n.flags|=128,null):(a&n.child.childLanes)!==0?sm(e,n,a):(ii(n),e=Cn(e,n,a),e!==null?e.sibling:null);ii(n);break;case 19:var u=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Nr(e,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return om(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Y(Xe,Xe.current),s)break;return null;case 22:case 23:return n.lanes=0,tm(e,n,a);case 24:Zn(n,Fe,e.memoizedState.cache)}return Cn(e,n,a)}function um(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)We=!0;else{if(!bc(e,a)&&(n.flags&128)===0)return We=!1,TE(e,n,a);We=(e.flags&131072)!==0}else We=!1,ge&&(n.flags&1048576)!==0&&Hh(n,hl,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var s=n.elementType,u=s._init;if(s=u(s._payload),n.type=s,typeof s=="function")Iu(s)?(e=Vi(s,e),n.tag=1,n=am(null,n,s,e,a)):(n.tag=0,n=hc(null,n,s,e,a));else{if(s!=null){if(u=s.$$typeof,u===G){n.tag=11,n=Zp(null,n,s,e,a);break e}else if(u===pe){n.tag=14,n=Jp(null,n,s,e,a);break e}}throw n=Oi(s)||s,Error(l(306,n,""))}}return n;case 0:return hc(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=Vi(s,n.pendingProps),am(e,n,s,u,a);case 3:e:{if(Ne(n,n.stateNode.containerInfo),e===null)throw Error(l(387));s=n.pendingProps;var c=n.memoizedState;u=c.element,Vu(e,n),Pr(n,s,null,a);var p=n.memoizedState;if(s=p.cache,Zn(n,Fe,s),s!==c.cache&&Pu(n,[Fe],a,!0),Lr(),s=p.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=rm(e,n,s,a);break e}else if(s!==u){u=zt(Error(l(424)),n),Ir(u),n=rm(e,n,s,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Le=Wt(e.firstChild),ft=n,ge=!0,Pi=null,rn=!0,a=jp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Or(),s===u){n=Cn(e,n,a);break e}nt(e,n,s,a)}n=n.child}return n;case 26:return Ul(e,n),e===null?(a=hg(n.type,null,n.pendingProps,null))?n.memoizedState=a:ge||(a=n.type,e=n.pendingProps,s=$l(ne.current).createElement(a),s[lt]=n,s[gt]=e,at(s,a,e),Qe(s),n.stateNode=s):n.memoizedState=hg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ko(n),e===null&&ge&&(s=n.stateNode=cg(n.type,n.pendingProps,ne.current),ft=n,rn=!0,u=Le,hi(n.type)?(ef=u,Le=Wt(s.firstChild)):Le=u),nt(e,n,n.pendingProps.children,a),Ul(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ge&&((u=s=Le)&&(s=QE(s,n.type,n.pendingProps,rn),s!==null?(n.stateNode=s,ft=n,Le=Wt(s.firstChild),rn=!1,u=!0):u=!1),u||zi(n)),Ko(n),u=n.type,c=n.pendingProps,p=e!==null?e.memoizedProps:null,s=c.children,Qc(u,c)?s=null:p!==null&&Qc(u,p)&&(n.flags|=32),n.memoizedState!==null&&(u=Ku(e,n,pE,null,null,a),rs._currentValue=u),Ul(e,n),nt(e,n,s,a),n.child;case 6:return e===null&&ge&&((e=a=Le)&&(a=WE(a,n.pendingProps,rn),a!==null?(n.stateNode=a,ft=n,Le=null,e=!0):e=!1),e||zi(n)),null;case 13:return sm(e,n,a);case 4:return Ne(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Ia(n,null,s,a):nt(e,n,s,a),n.child;case 11:return Zp(e,n,n.type,n.pendingProps,a);case 7:return nt(e,n,n.pendingProps,a),n.child;case 8:return nt(e,n,n.pendingProps.children,a),n.child;case 12:return nt(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Zn(n,n.type,s.value),nt(e,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,Bi(n),u=ot(u),s=s(u),n.flags|=1,nt(e,n,s,a),n.child;case 14:return Jp(e,n,n.type,n.pendingProps,a);case 15:return em(e,n,n.type,n.pendingProps,a);case 19:return om(e,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},e===null?(a=Ml(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=bn(e.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return tm(e,n,a);case 24:return Bi(n),s=ot(Fe),e===null?(u=Bu(),u===null&&(u=Ae,c=zu(),u.pooledCache=c,c.refCount++,c!==null&&(u.pooledCacheLanes|=a),u=c),n.memoizedState={parent:s,cache:u},qu(n),Zn(n,Fe,u)):((e.lanes&a)!==0&&(Vu(e,n),Pr(n,null,null,a),Lr()),u=e.memoizedState,c=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Zn(n,Fe,s)):(s=c.cache,Zn(n,Fe,s),s!==u.cache&&Pu(n,[Fe],a,!0))),nt(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(l(156,n.tag))}function On(e){e.flags|=4}function cm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!yg(n)){if(n=qt.current,n!==null&&((fe&4194048)===fe?sn!==null:(fe&62914560)!==fe&&(fe&536870912)===0||n!==sn))throw Mr=ju,Xh;e.flags|=8192}}function xl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?qd():536870912,e.lanes|=n,Ua|=n)}function Gr(e,n){if(!ge)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ue(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function SE(e,n,a){var s=n.pendingProps;switch(Uu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(n),null;case 1:return Ue(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),wn(Fe),$n(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Cr(n)?On(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,qh())),Ue(n),null;case 26:return a=n.memoizedState,e===null?(On(n),a!==null?(Ue(n),cm(n,a)):(Ue(n),n.flags&=-16777217)):a?a!==e.memoizedState?(On(n),Ue(n),cm(n,a)):(Ue(n),n.flags&=-16777217):(e.memoizedProps!==s&&On(n),Ue(n),n.flags&=-16777217),null;case 27:Fs(n),a=ne.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&On(n);else{if(!s){if(n.stateNode===null)throw Error(l(166));return Ue(n),null}e=W.current,Cr(n)?Bh(n):(e=cg(u,s,a),n.stateNode=e,On(n))}return Ue(n),null;case 5:if(Fs(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&On(n);else{if(!s){if(n.stateNode===null)throw Error(l(166));return Ue(n),null}if(e=W.current,Cr(n))Bh(n);else{switch(u=$l(ne.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?u.createElement("select",{is:s.is}):u.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?u.createElement(a,{is:s.is}):u.createElement(a)}}e[lt]=n,e[gt]=s;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;e:switch(at(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&On(n)}}return Ue(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&On(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(l(166));if(e=ne.current,Cr(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,u=ft,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[lt]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||ig(e.nodeValue,a)),e||zi(n)}else e=$l(e).createTextNode(s),e[lt]=n,n.stateNode=e}return Ue(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Cr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(l(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(l(317));u[lt]=n}else Or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ue(n),u=!1}else u=qh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(An(n),n):(An(n),null)}if(An(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool);var c=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==u&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),xl(n,n.updateQueue),Ue(n),null;case 4:return $n(),e===null&&Yc(n.stateNode.containerInfo),Ue(n),null;case 10:return wn(n.type),Ue(n),null;case 19:if($(Xe),u=n.memoizedState,u===null)return Ue(n),null;if(s=(n.flags&128)!==0,c=u.rendering,c===null)if(s)Gr(u,!1);else{if(Pe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(c=Nl(e),c!==null){for(n.flags|=128,Gr(u,!1),e=c.updateQueue,n.updateQueue=e,xl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)zh(a,e),a=a.sibling;return Y(Xe,Xe.current&1|2),n.child}e=e.sibling}u.tail!==null&&an()>zl&&(n.flags|=128,s=!0,Gr(u,!1),n.lanes=4194304)}else{if(!s)if(e=Nl(c),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,xl(n,e),Gr(u,!0),u.tail===null&&u.tailMode==="hidden"&&!c.alternate&&!ge)return Ue(n),null}else 2*an()-u.renderingStartTime>zl&&a!==536870912&&(n.flags|=128,s=!0,Gr(u,!1),n.lanes=4194304);u.isBackwards?(c.sibling=n.child,n.child=c):(e=u.last,e!==null?e.sibling=c:n.child=c,u.last=c)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=an(),n.sibling=null,e=Xe.current,Y(Xe,s?e&1|2:e&1),n):(Ue(n),null);case 22:case 23:return An(n),Xu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ue(n),n.subtreeFlags&6&&(n.flags|=8192)):Ue(n),a=n.updateQueue,a!==null&&xl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&$(ji),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),wn(Fe),Ue(n),null;case 25:return null;case 30:return null}throw Error(l(156,n.tag))}function wE(e,n){switch(Uu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return wn(Fe),$n(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Fs(n),null;case 13:if(An(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(l(340));Or()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return $(Xe),null;case 4:return $n(),null;case 10:return wn(n.type),null;case 22:case 23:return An(n),Xu(),e!==null&&$(ji),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return wn(Fe),null;case 25:return null;default:return null}}function fm(e,n){switch(Uu(n),n.tag){case 3:wn(Fe),$n();break;case 26:case 27:case 5:Fs(n);break;case 4:$n();break;case 13:An(n);break;case 19:$(Xe);break;case 10:wn(n.type);break;case 22:case 23:An(n),Xu(),e!==null&&$(ji);break;case 24:wn(Fe)}}function Yr(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&e)===e){s=void 0;var c=a.create,p=a.inst;s=c(),p.destroy=s}a=a.next}while(a!==u)}}catch(v){Re(n,n.return,v)}}function ri(e,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var c=u.next;s=c;do{if((s.tag&e)===e){var p=s.inst,v=p.destroy;if(v!==void 0){p.destroy=void 0,u=n;var _=a,A=v;try{A()}catch(U){Re(u,_,U)}}}s=s.next}while(s!==c)}}catch(U){Re(n,n.return,U)}}function dm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Jh(n,a)}catch(s){Re(e,e.return,s)}}}function hm(e,n,a){a.props=Vi(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Re(e,n,s)}}function Fr(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(u){Re(e,n,u)}}function ln(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Re(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Re(e,n,u)}else a.current=null}function pm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Re(e,e.return,u)}}function Ec(e,n,a){try{var s=e.stateNode;YE(s,e.type,a,n),s[gt]=n}catch(u){Re(e,e.return,u)}}function mm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&hi(e.type)||e.tag===4}function Tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&hi(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sc(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xl));else if(s!==4&&(s===27&&hi(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Sc(e,n,a),e=e.sibling;e!==null;)Sc(e,n,a),e=e.sibling}function Ll(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&hi(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ll(e,n,a),e=e.sibling;e!==null;)Ll(e,n,a),e=e.sibling}function gm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);at(n,s,a),n[lt]=e,n[gt]=a}catch(c){Re(e,e.return,c)}}var In=!1,je=!1,wc=!1,vm=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function RE(e,n){if(e=e.containerInfo,$c=eo,e=Oh(e),Tu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,c=s.focusNode;s=s.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var p=0,v=-1,_=-1,A=0,U=0,z=e,O=null;t:for(;;){for(var I;z!==a||u!==0&&z.nodeType!==3||(v=p+u),z!==c||s!==0&&z.nodeType!==3||(_=p+s),z.nodeType===3&&(p+=z.nodeValue.length),(I=z.firstChild)!==null;)O=z,z=I;for(;;){if(z===e)break t;if(O===a&&++A===u&&(v=p),O===c&&++U===s&&(_=p),(I=z.nextSibling)!==null)break;z=O,O=z.parentNode}z=I}a=v===-1||_===-1?null:{start:v,end:_}}else a=null}a=a||{start:0,end:0}}else a=null;for(Kc={focusedElem:e,selectionRange:a},eo=!1,Ze=n;Ze!==null;)if(n=Ze,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Ze=e;else for(;Ze!==null;){switch(n=Ze,c=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,a=n,u=c.memoizedProps,c=c.memoizedState,s=a.stateNode;try{var te=Vi(a.type,u,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(te,c),s.__reactInternalSnapshotBeforeUpdate=e}catch(Z){Re(a,a.return,Z)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Zc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Zc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=n.sibling,e!==null){e.return=n.return,Ze=e;break}Ze=n.return}}function ym(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:si(e,a),s&4&&Yr(5,a);break;case 1:if(si(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(p){Re(a,a.return,p)}else{var u=Vi(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(p){Re(a,a.return,p)}}s&64&&dm(a),s&512&&Fr(a,a.return);break;case 3:if(si(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Jh(e,n)}catch(p){Re(a,a.return,p)}}break;case 27:n===null&&s&4&&gm(a);case 26:case 5:si(e,a),n===null&&s&4&&pm(a),s&512&&Fr(a,a.return);break;case 12:si(e,a);break;case 13:si(e,a),s&4&&Em(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ME.bind(null,a),ZE(e,a))));break;case 22:if(s=a.memoizedState!==null||In,!s){n=n!==null&&n.memoizedState!==null||je,u=In;var c=je;In=s,(je=n)&&!c?li(e,a,(a.subtreeFlags&8772)!==0):si(e,a),In=u,je=c}break;case 30:break;default:si(e,a)}}function _m(e){var n=e.alternate;n!==null&&(e.alternate=null,_m(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&iu(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,_t=!1;function Nn(e,n,a){for(a=a.child;a!==null;)bm(e,n,a),a=a.sibling}function bm(e,n,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(hr,a)}catch{}switch(a.tag){case 26:je||ln(a,n),Nn(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:je||ln(a,n);var s=De,u=_t;hi(a.type)&&(De=a.stateNode,_t=!1),Nn(e,n,a),ts(a.stateNode),De=s,_t=u;break;case 5:je||ln(a,n);case 6:if(s=De,u=_t,De=null,Nn(e,n,a),De=s,_t=u,De!==null)if(_t)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(a.stateNode)}catch(c){Re(a,n,c)}else try{De.removeChild(a.stateNode)}catch(c){Re(a,n,c)}break;case 18:De!==null&&(_t?(e=De,og(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),us(e)):og(De,a.stateNode));break;case 4:s=De,u=_t,De=a.stateNode.containerInfo,_t=!0,Nn(e,n,a),De=s,_t=u;break;case 0:case 11:case 14:case 15:je||ri(2,a,n),je||ri(4,a,n),Nn(e,n,a);break;case 1:je||(ln(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&hm(a,n,s)),Nn(e,n,a);break;case 21:Nn(e,n,a);break;case 22:je=(s=je)||a.memoizedState!==null,Nn(e,n,a),je=s;break;default:Nn(e,n,a)}}function Em(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{us(e)}catch(a){Re(n,n.return,a)}}function AE(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new vm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new vm),n;default:throw Error(l(435,e.tag))}}function Rc(e,n){var a=AE(e);n.forEach(function(s){var u=xE.bind(null,e,s);a.has(s)||(a.add(s),s.then(u,u))})}function Ot(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],c=e,p=n,v=p;e:for(;v!==null;){switch(v.tag){case 27:if(hi(v.type)){De=v.stateNode,_t=!1;break e}break;case 5:De=v.stateNode,_t=!1;break e;case 3:case 4:De=v.stateNode.containerInfo,_t=!0;break e}v=v.return}if(De===null)throw Error(l(160));bm(c,p,u),De=null,_t=!1,c=u.alternate,c!==null&&(c.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Tm(n,e),n=n.sibling}var Qt=null;function Tm(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ot(n,e),It(e),s&4&&(ri(3,e,e.return),Yr(3,e),ri(5,e,e.return));break;case 1:Ot(n,e),It(e),s&512&&(je||a===null||ln(a,a.return)),s&64&&In&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=Qt;if(Ot(n,e),It(e),s&512&&(je||a===null||ln(a,a.return)),s&4){var c=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(s){case"title":c=u.getElementsByTagName("title")[0],(!c||c[gr]||c[lt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=u.createElement(s),u.head.insertBefore(c,u.querySelector("head > title"))),at(c,s,a),c[lt]=e,Qe(c),s=c;break e;case"link":var p=gg("link","href",u).get(s+(a.href||""));if(p){for(var v=0;v<p.length;v++)if(c=p[v],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){p.splice(v,1);break t}}c=u.createElement(s),at(c,s,a),u.head.appendChild(c);break;case"meta":if(p=gg("meta","content",u).get(s+(a.content||""))){for(v=0;v<p.length;v++)if(c=p[v],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){p.splice(v,1);break t}}c=u.createElement(s),at(c,s,a),u.head.appendChild(c);break;default:throw Error(l(468,s))}c[lt]=e,Qe(c),s=c}e.stateNode=s}else vg(u,e.type,e.stateNode);else e.stateNode=mg(u,s,e.memoizedProps);else c!==s?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,s===null?vg(u,e.type,e.stateNode):mg(u,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Ec(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ot(n,e),It(e),s&512&&(je||a===null||ln(a,a.return)),a!==null&&s&4&&Ec(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ot(n,e),It(e),s&512&&(je||a===null||ln(a,a.return)),e.flags&32){u=e.stateNode;try{fa(u,"")}catch(I){Re(e,e.return,I)}}s&4&&e.stateNode!=null&&(u=e.memoizedProps,Ec(e,u,a!==null?a.memoizedProps:u)),s&1024&&(wc=!0);break;case 6:if(Ot(n,e),It(e),s&4){if(e.stateNode===null)throw Error(l(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(I){Re(e,e.return,I)}}break;case 3:if(Wl=null,u=Qt,Qt=Kl(n.containerInfo),Ot(n,e),Qt=u,It(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{us(n.containerInfo)}catch(I){Re(e,e.return,I)}wc&&(wc=!1,Sm(e));break;case 4:s=Qt,Qt=Kl(e.stateNode.containerInfo),Ot(n,e),It(e),Qt=s;break;case 12:Ot(n,e),It(e);break;case 13:Ot(n,e),It(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Dc=an()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Rc(e,s)));break;case 22:u=e.memoizedState!==null;var _=a!==null&&a.memoizedState!==null,A=In,U=je;if(In=A||u,je=U||_,Ot(n,e),je=U,In=A,It(e),s&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||_||In||je||Gi(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){_=a=n;try{if(c=_.stateNode,u)p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{v=_.stateNode;var z=_.memoizedProps.style,O=z!=null&&z.hasOwnProperty("display")?z.display:null;v.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(I){Re(_,_.return,I)}}}else if(n.tag===6){if(a===null){_=n;try{_.stateNode.nodeValue=u?"":_.memoizedProps}catch(I){Re(_,_.return,I)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Rc(e,a))));break;case 19:Ot(n,e),It(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Rc(e,s)));break;case 30:break;case 21:break;default:Ot(n,e),It(e)}}function It(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(mm(s)){a=s;break}s=s.return}if(a==null)throw Error(l(160));switch(a.tag){case 27:var u=a.stateNode,c=Tc(e);Ll(e,c,u);break;case 5:var p=a.stateNode;a.flags&32&&(fa(p,""),a.flags&=-33);var v=Tc(e);Ll(e,v,p);break;case 3:case 4:var _=a.stateNode.containerInfo,A=Tc(e);Sc(e,A,_);break;default:throw Error(l(161))}}catch(U){Re(e,e.return,U)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Sm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Sm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function si(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ym(e,n.alternate,n),n=n.sibling}function Gi(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ri(4,n,n.return),Gi(n);break;case 1:ln(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&hm(n,n.return,a),Gi(n);break;case 27:ts(n.stateNode);case 26:case 5:ln(n,n.return),Gi(n);break;case 22:n.memoizedState===null&&Gi(n);break;case 30:Gi(n);break;default:Gi(n)}e=e.sibling}}function li(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=e,c=n,p=c.flags;switch(c.tag){case 0:case 11:case 15:li(u,c,a),Yr(4,c);break;case 1:if(li(u,c,a),s=c,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(A){Re(s,s.return,A)}if(s=c,u=s.updateQueue,u!==null){var v=s.stateNode;try{var _=u.shared.hiddenCallbacks;if(_!==null)for(u.shared.hiddenCallbacks=null,u=0;u<_.length;u++)Zh(_[u],v)}catch(A){Re(s,s.return,A)}}a&&p&64&&dm(c),Fr(c,c.return);break;case 27:gm(c);case 26:case 5:li(u,c,a),a&&s===null&&p&4&&pm(c),Fr(c,c.return);break;case 12:li(u,c,a);break;case 13:li(u,c,a),a&&p&4&&Em(u,c);break;case 22:c.memoizedState===null&&li(u,c,a),Fr(c,c.return);break;case 30:break;default:li(u,c,a)}n=n.sibling}}function Ac(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Dr(a))}function Cc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Dr(e))}function on(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)wm(e,n,a,s),n=n.sibling}function wm(e,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:on(e,n,a,s),u&2048&&Yr(9,n);break;case 1:on(e,n,a,s);break;case 3:on(e,n,a,s),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Dr(e)));break;case 12:if(u&2048){on(e,n,a,s),e=n.stateNode;try{var c=n.memoizedProps,p=c.id,v=c.onPostCommit;typeof v=="function"&&v(p,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(_){Re(n,n.return,_)}}else on(e,n,a,s);break;case 13:on(e,n,a,s);break;case 23:break;case 22:c=n.stateNode,p=n.alternate,n.memoizedState!==null?c._visibility&2?on(e,n,a,s):Xr(e,n):c._visibility&2?on(e,n,a,s):(c._visibility|=2,Na(e,n,a,s,(n.subtreeFlags&10256)!==0)),u&2048&&Ac(p,n);break;case 24:on(e,n,a,s),u&2048&&Cc(n.alternate,n);break;default:on(e,n,a,s)}}function Na(e,n,a,s,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var c=e,p=n,v=a,_=s,A=p.flags;switch(p.tag){case 0:case 11:case 15:Na(c,p,v,_,u),Yr(8,p);break;case 23:break;case 22:var U=p.stateNode;p.memoizedState!==null?U._visibility&2?Na(c,p,v,_,u):Xr(c,p):(U._visibility|=2,Na(c,p,v,_,u)),u&&A&2048&&Ac(p.alternate,p);break;case 24:Na(c,p,v,_,u),u&&A&2048&&Cc(p.alternate,p);break;default:Na(c,p,v,_,u)}n=n.sibling}}function Xr(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,u=s.flags;switch(s.tag){case 22:Xr(a,s),u&2048&&Ac(s.alternate,s);break;case 24:Xr(a,s),u&2048&&Cc(s.alternate,s);break;default:Xr(a,s)}n=n.sibling}}var $r=8192;function Da(e){if(e.subtreeFlags&$r)for(e=e.child;e!==null;)Rm(e),e=e.sibling}function Rm(e){switch(e.tag){case 26:Da(e),e.flags&$r&&e.memoizedState!==null&&f0(Qt,e.memoizedState,e.memoizedProps);break;case 5:Da(e);break;case 3:case 4:var n=Qt;Qt=Kl(e.stateNode.containerInfo),Da(e),Qt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=$r,$r=16777216,Da(e),$r=n):Da(e));break;default:Da(e)}}function Am(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Kr(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Ze=s,Om(s,e)}Am(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Cm(e),e=e.sibling}function Cm(e){switch(e.tag){case 0:case 11:case 15:Kr(e),e.flags&2048&&ri(9,e,e.return);break;case 3:Kr(e);break;case 12:Kr(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Pl(e)):Kr(e);break;default:Kr(e)}}function Pl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Ze=s,Om(s,e)}Am(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ri(8,n,n.return),Pl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Pl(n));break;default:Pl(n)}e=e.sibling}}function Om(e,n){for(;Ze!==null;){var a=Ze;switch(a.tag){case 0:case 11:case 15:ri(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Dr(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Ze=s;else e:for(a=e;Ze!==null;){s=Ze;var u=s.sibling,c=s.return;if(_m(s),s===a){Ze=null;break e}if(u!==null){u.return=c,Ze=u;break e}Ze=c}}}var CE={getCacheForType:function(e){var n=ot(Fe),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},OE=typeof WeakMap=="function"?WeakMap:Map,ve=0,Ae=null,oe=null,fe=0,ye=0,Nt=null,oi=!1,ka=!1,Oc=!1,Dn=0,Pe=0,ui=0,Yi=0,Ic=0,Vt=0,Ua=0,Qr=null,bt=null,Nc=!1,Dc=0,zl=1/0,Hl=null,ci=null,it=0,fi=null,Ma=null,xa=0,kc=0,Uc=null,Im=null,Wr=0,Mc=null;function Dt(){if((ve&2)!==0&&fe!==0)return fe&-fe;if(x.T!==null){var e=Ta;return e!==0?e:jc()}return Yd()}function Nm(){Vt===0&&(Vt=(fe&536870912)===0||ge?jd():536870912);var e=qt.current;return e!==null&&(e.flags|=32),Vt}function kt(e,n,a){(e===Ae&&(ye===2||ye===9)||e.cancelPendingCommit!==null)&&(La(e,0),di(e,fe,Vt,!1)),mr(e,a),((ve&2)===0||e!==Ae)&&(e===Ae&&((ve&2)===0&&(Yi|=a),Pe===4&&di(e,fe,Vt,!1)),un(e))}function Dm(e,n,a){if((ve&6)!==0)throw Error(l(327));var s=!a&&(n&124)===0&&(n&e.expiredLanes)===0||pr(e,n),u=s?DE(e,n):Pc(e,n,!0),c=s;do{if(u===0){ka&&!s&&di(e,n,0,!1);break}else{if(a=e.current.alternate,c&&!IE(a)){u=Pc(e,n,!1),c=!1;continue}if(u===2){if(c=n,e.errorRecoveryDisabledLanes&c)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;e:{var v=e;u=Qr;var _=v.current.memoizedState.isDehydrated;if(_&&(La(v,p).flags|=256),p=Pc(v,p,!1),p!==2){if(Oc&&!_){v.errorRecoveryDisabledLanes|=c,Yi|=c,u=4;break e}c=bt,bt=u,c!==null&&(bt===null?bt=c:bt.push.apply(bt,c))}u=p}if(c=!1,u!==2)continue}}if(u===1){La(e,0),di(e,n,0,!0);break}e:{switch(s=e,c=u,c){case 0:case 1:throw Error(l(345));case 4:if((n&4194048)!==n)break;case 6:di(s,n,Vt,!oi);break e;case 2:bt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((n&62914560)===n&&(u=Dc+300-an(),10<u)){if(di(s,n,Vt,!oi),Qs(s,0,!0)!==0)break e;s.timeoutHandle=sg(km.bind(null,s,a,bt,Hl,Nc,n,Vt,Yi,Ua,oi,c,2,-0,0),u);break e}km(s,a,bt,Hl,Nc,n,Vt,Yi,Ua,oi,c,0,-0,0)}}break}while(!0);un(e)}function km(e,n,a,s,u,c,p,v,_,A,U,z,O,I){if(e.timeoutHandle=-1,z=n.subtreeFlags,(z&8192||(z&16785408)===16785408)&&(as={stylesheets:null,count:0,unsuspend:c0},Rm(n),z=d0(),z!==null)){e.cancelPendingCommit=z(Hm.bind(null,e,n,c,a,s,u,p,v,_,U,1,O,I)),di(e,c,p,!A);return}Hm(e,n,c,a,s,u,p,v,_)}function IE(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],c=u.getSnapshot;u=u.value;try{if(!At(c(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function di(e,n,a,s){n&=~Ic,n&=~Yi,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var u=n;0<u;){var c=31-Rt(u),p=1<<c;s[c]=-1,u&=~p}a!==0&&Vd(e,a,n)}function Bl(){return(ve&6)===0?(Zr(0),!1):!0}function xc(){if(oe!==null){if(ye===0)var e=oe.return;else e=oe,Sn=Hi=null,Zu(e),Oa=null,qr=0,e=oe;for(;e!==null;)fm(e.alternate,e),e=e.return;oe=null}}function La(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,XE(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),xc(),Ae=e,oe=a=bn(e.current,null),fe=n,ye=0,Nt=null,oi=!1,ka=pr(e,n),Oc=!1,Ua=Vt=Ic=Yi=ui=Pe=0,bt=Qr=null,Nc=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var u=31-Rt(s),c=1<<u;n|=e[u],s&=~c}return Dn=n,ol(),a}function Um(e,n){re=null,x.H=Cl,n===Ur||n===vl?(n=Qh(),ye=3):n===Xh?(n=Qh(),ye=4):ye=n===Wp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Nt=n,oe===null&&(Pe=1,kl(e,zt(n,e.current)))}function Mm(){var e=x.H;return x.H=Cl,e===null?Cl:e}function xm(){var e=x.A;return x.A=CE,e}function Lc(){Pe=4,oi||(fe&4194048)!==fe&&qt.current!==null||(ka=!0),(ui&134217727)===0&&(Yi&134217727)===0||Ae===null||di(Ae,fe,Vt,!1)}function Pc(e,n,a){var s=ve;ve|=2;var u=Mm(),c=xm();(Ae!==e||fe!==n)&&(Hl=null,La(e,n)),n=!1;var p=Pe;e:do try{if(ye!==0&&oe!==null){var v=oe,_=Nt;switch(ye){case 8:xc(),p=6;break e;case 3:case 2:case 9:case 6:qt.current===null&&(n=!0);var A=ye;if(ye=0,Nt=null,Pa(e,v,_,A),a&&ka){p=0;break e}break;default:A=ye,ye=0,Nt=null,Pa(e,v,_,A)}}NE(),p=Pe;break}catch(U){Um(e,U)}while(!0);return n&&e.shellSuspendCounter++,Sn=Hi=null,ve=s,x.H=u,x.A=c,oe===null&&(Ae=null,fe=0,ol()),p}function NE(){for(;oe!==null;)Lm(oe)}function DE(e,n){var a=ve;ve|=2;var s=Mm(),u=xm();Ae!==e||fe!==n?(Hl=null,zl=an()+500,La(e,n)):ka=pr(e,n);e:do try{if(ye!==0&&oe!==null){n=oe;var c=Nt;t:switch(ye){case 1:ye=0,Nt=null,Pa(e,n,c,1);break;case 2:case 9:if($h(c)){ye=0,Nt=null,Pm(n);break}n=function(){ye!==2&&ye!==9||Ae!==e||(ye=7),un(e)},c.then(n,n);break e;case 3:ye=7;break e;case 4:ye=5;break e;case 7:$h(c)?(ye=0,Nt=null,Pm(n)):(ye=0,Nt=null,Pa(e,n,c,7));break;case 5:var p=null;switch(oe.tag){case 26:p=oe.memoizedState;case 5:case 27:var v=oe;if(!p||yg(p)){ye=0,Nt=null;var _=v.sibling;if(_!==null)oe=_;else{var A=v.return;A!==null?(oe=A,jl(A)):oe=null}break t}}ye=0,Nt=null,Pa(e,n,c,5);break;case 6:ye=0,Nt=null,Pa(e,n,c,6);break;case 8:xc(),Pe=6;break e;default:throw Error(l(462))}}kE();break}catch(U){Um(e,U)}while(!0);return Sn=Hi=null,x.H=s,x.A=u,ve=a,oe!==null?0:(Ae=null,fe=0,ol(),Pe)}function kE(){for(;oe!==null&&!eb();)Lm(oe)}function Lm(e){var n=um(e.alternate,e,Dn);e.memoizedProps=e.pendingProps,n===null?jl(e):oe=n}function Pm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=im(a,n,n.pendingProps,n.type,void 0,fe);break;case 11:n=im(a,n,n.pendingProps,n.type.render,n.ref,fe);break;case 5:Zu(n);default:fm(a,n),n=oe=zh(n,Dn),n=um(a,n,Dn)}e.memoizedProps=e.pendingProps,n===null?jl(e):oe=n}function Pa(e,n,a,s){Sn=Hi=null,Zu(n),Oa=null,qr=0;var u=n.return;try{if(EE(e,u,n,a,fe)){Pe=1,kl(e,zt(a,e.current)),oe=null;return}}catch(c){if(u!==null)throw oe=u,c;Pe=1,kl(e,zt(a,e.current)),oe=null;return}n.flags&32768?(ge||s===1?e=!0:ka||(fe&536870912)!==0?e=!1:(oi=e=!0,(s===2||s===9||s===3||s===6)&&(s=qt.current,s!==null&&s.tag===13&&(s.flags|=16384))),zm(n,e)):jl(n)}function jl(e){var n=e;do{if((n.flags&32768)!==0){zm(n,oi);return}e=n.return;var a=SE(n.alternate,n,Dn);if(a!==null){oe=a;return}if(n=n.sibling,n!==null){oe=n;return}oe=n=e}while(n!==null);Pe===0&&(Pe=5)}function zm(e,n){do{var a=wE(e.alternate,e);if(a!==null){a.flags&=32767,oe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){oe=e;return}oe=e=a}while(e!==null);Pe=6,oe=null}function Hm(e,n,a,s,u,c,p,v,_){e.cancelPendingCommit=null;do ql();while(it!==0);if((ve&6)!==0)throw Error(l(327));if(n!==null){if(n===e.current)throw Error(l(177));if(c=n.lanes|n.childLanes,c|=Cu,cb(e,a,c,p,v,_),e===Ae&&(oe=Ae=null,fe=0),Ma=n,fi=e,xa=a,kc=c,Uc=u,Im=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,LE(Xs,function(){return Gm(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=x.T,x.T=null,u=F.p,F.p=2,p=ve,ve|=4;try{RE(e,n,a)}finally{ve=p,F.p=u,x.T=s}}it=1,Bm(),jm(),qm()}}function Bm(){if(it===1){it=0;var e=fi,n=Ma,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=x.T,x.T=null;var s=F.p;F.p=2;var u=ve;ve|=4;try{Tm(n,e);var c=Kc,p=Oh(e.containerInfo),v=c.focusedElem,_=c.selectionRange;if(p!==v&&v&&v.ownerDocument&&Ch(v.ownerDocument.documentElement,v)){if(_!==null&&Tu(v)){var A=_.start,U=_.end;if(U===void 0&&(U=A),"selectionStart"in v)v.selectionStart=A,v.selectionEnd=Math.min(U,v.value.length);else{var z=v.ownerDocument||document,O=z&&z.defaultView||window;if(O.getSelection){var I=O.getSelection(),te=v.textContent.length,Z=Math.min(_.start,te),Ee=_.end===void 0?Z:Math.min(_.end,te);!I.extend&&Z>Ee&&(p=Ee,Ee=Z,Z=p);var w=Ah(v,Z),T=Ah(v,Ee);if(w&&T&&(I.rangeCount!==1||I.anchorNode!==w.node||I.anchorOffset!==w.offset||I.focusNode!==T.node||I.focusOffset!==T.offset)){var R=z.createRange();R.setStart(w.node,w.offset),I.removeAllRanges(),Z>Ee?(I.addRange(R),I.extend(T.node,T.offset)):(R.setEnd(T.node,T.offset),I.addRange(R))}}}}for(z=[],I=v;I=I.parentNode;)I.nodeType===1&&z.push({element:I,left:I.scrollLeft,top:I.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<z.length;v++){var P=z[v];P.element.scrollLeft=P.left,P.element.scrollTop=P.top}}eo=!!$c,Kc=$c=null}finally{ve=u,F.p=s,x.T=a}}e.current=n,it=2}}function jm(){if(it===2){it=0;var e=fi,n=Ma,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=x.T,x.T=null;var s=F.p;F.p=2;var u=ve;ve|=4;try{ym(e,n.alternate,n)}finally{ve=u,F.p=s,x.T=a}}it=3}}function qm(){if(it===4||it===3){it=0,tb();var e=fi,n=Ma,a=xa,s=Im;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?it=5:(it=0,Ma=fi=null,Vm(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ci=null),tu(a),n=n.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(hr,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=x.T,u=F.p,F.p=2,x.T=null;try{for(var c=e.onRecoverableError,p=0;p<s.length;p++){var v=s[p];c(v.value,{componentStack:v.stack})}}finally{x.T=n,F.p=u}}(xa&3)!==0&&ql(),un(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Mc?Wr++:(Wr=0,Mc=e):Wr=0,Zr(0)}}function Vm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Dr(n)))}function ql(e){return Bm(),jm(),qm(),Gm()}function Gm(){if(it!==5)return!1;var e=fi,n=kc;kc=0;var a=tu(xa),s=x.T,u=F.p;try{F.p=32>a?32:a,x.T=null,a=Uc,Uc=null;var c=fi,p=xa;if(it=0,Ma=fi=null,xa=0,(ve&6)!==0)throw Error(l(331));var v=ve;if(ve|=4,Cm(c.current),wm(c,c.current,p,a),ve=v,Zr(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(hr,c)}catch{}return!0}finally{F.p=u,x.T=s,Vm(e,n)}}function Ym(e,n,a){n=zt(a,n),n=dc(e.stateNode,n,2),e=ti(e,n,2),e!==null&&(mr(e,2),un(e))}function Re(e,n,a){if(e.tag===3)Ym(e,e,a);else for(;n!==null;){if(n.tag===3){Ym(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ci===null||!ci.has(s))){e=zt(a,e),a=Kp(2),s=ti(n,a,2),s!==null&&(Qp(a,s,n,e),mr(s,2),un(s));break}}n=n.return}}function zc(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new OE;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Oc=!0,u.add(a),e=UE.bind(null,e,n,a),n.then(e,e))}function UE(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ae===e&&(fe&a)===a&&(Pe===4||Pe===3&&(fe&62914560)===fe&&300>an()-Dc?(ve&2)===0&&La(e,0):Ic|=a,Ua===fe&&(Ua=0)),un(e)}function Fm(e,n){n===0&&(n=qd()),e=ya(e,n),e!==null&&(mr(e,n),un(e))}function ME(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Fm(e,a)}function xE(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(l(314))}s!==null&&s.delete(n),Fm(e,a)}function LE(e,n){return Wo(e,n)}var Vl=null,za=null,Hc=!1,Gl=!1,Bc=!1,Fi=0;function un(e){e!==za&&e.next===null&&(za===null?Vl=za=e:za=za.next=e),Gl=!0,Hc||(Hc=!0,zE())}function Zr(e,n){if(!Bc&&Gl){Bc=!0;do for(var a=!1,s=Vl;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var c=0;else{var p=s.suspendedLanes,v=s.pingedLanes;c=(1<<31-Rt(42|e)+1)-1,c&=u&~(p&~v),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,Qm(s,c))}else c=fe,c=Qs(s,s===Ae?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||pr(s,c)||(a=!0,Qm(s,c));s=s.next}while(a);Bc=!1}}function PE(){Xm()}function Xm(){Gl=Hc=!1;var e=0;Fi!==0&&(FE()&&(e=Fi),Fi=0);for(var n=an(),a=null,s=Vl;s!==null;){var u=s.next,c=$m(s,n);c===0?(s.next=null,a===null?Vl=u:a.next=u,u===null&&(za=a)):(a=s,(e!==0||(c&3)!==0)&&(Gl=!0)),s=u}Zr(e)}function $m(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var p=31-Rt(c),v=1<<p,_=u[p];_===-1?((v&a)===0||(v&s)!==0)&&(u[p]=ub(v,n)):_<=n&&(e.expiredLanes|=v),c&=~v}if(n=Ae,a=fe,a=Qs(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(ye===2||ye===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Zo(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||pr(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Zo(s),tu(a)){case 2:case 8:a=Hd;break;case 32:a=Xs;break;case 268435456:a=Bd;break;default:a=Xs}return s=Km.bind(null,e),a=Wo(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Zo(s),e.callbackPriority=2,e.callbackNode=null,2}function Km(e,n){if(it!==0&&it!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ql()&&e.callbackNode!==a)return null;var s=fe;return s=Qs(e,e===Ae?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Dm(e,s,n),$m(e,an()),e.callbackNode!=null&&e.callbackNode===a?Km.bind(null,e):null)}function Qm(e,n){if(ql())return null;Dm(e,n,!0)}function zE(){$E(function(){(ve&6)!==0?Wo(zd,PE):Xm()})}function jc(){return Fi===0&&(Fi=jd()),Fi}function Wm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:tl(""+e)}function Zm(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function HE(e,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var c=Wm((u[gt]||null).action),p=s.submitter;p&&(n=(n=p[gt]||null)?Wm(n.formAction):p.getAttribute("formAction"),n!==null&&(c=n,p=null));var v=new rl("action","action",null,s,u);e.push({event:v,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Fi!==0){var _=p?Zm(u,p):new FormData(u);lc(a,{pending:!0,data:_,method:u.method,action:c},null,_)}}else typeof c=="function"&&(v.preventDefault(),_=p?Zm(u,p):new FormData(u),lc(a,{pending:!0,data:_,method:u.method,action:c},c,_))},currentTarget:u}]})}}for(var qc=0;qc<Au.length;qc++){var Vc=Au[qc],BE=Vc.toLowerCase(),jE=Vc[0].toUpperCase()+Vc.slice(1);Kt(BE,"on"+jE)}Kt(Dh,"onAnimationEnd"),Kt(kh,"onAnimationIteration"),Kt(Uh,"onAnimationStart"),Kt("dblclick","onDoubleClick"),Kt("focusin","onFocus"),Kt("focusout","onBlur"),Kt(aE,"onTransitionRun"),Kt(rE,"onTransitionStart"),Kt(sE,"onTransitionCancel"),Kt(Mh,"onTransitionEnd"),oa("onMouseEnter",["mouseout","mouseover"]),oa("onMouseLeave",["mouseout","mouseover"]),oa("onPointerEnter",["pointerout","pointerover"]),oa("onPointerLeave",["pointerout","pointerover"]),Ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ni("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jr));function Jm(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],u=s.event;s=s.listeners;e:{var c=void 0;if(n)for(var p=s.length-1;0<=p;p--){var v=s[p],_=v.instance,A=v.currentTarget;if(v=v.listener,_!==c&&u.isPropagationStopped())break e;c=v,u.currentTarget=A;try{c(u)}catch(U){Dl(U)}u.currentTarget=null,c=_}else for(p=0;p<s.length;p++){if(v=s[p],_=v.instance,A=v.currentTarget,v=v.listener,_!==c&&u.isPropagationStopped())break e;c=v,u.currentTarget=A;try{c(u)}catch(U){Dl(U)}u.currentTarget=null,c=_}}}}function ue(e,n){var a=n[nu];a===void 0&&(a=n[nu]=new Set);var s=e+"__bubble";a.has(s)||(eg(n,e,2,!1),a.add(s))}function Gc(e,n,a){var s=0;n&&(s|=4),eg(a,e,s,n)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Yc(e){if(!e[Yl]){e[Yl]=!0,Xd.forEach(function(a){a!=="selectionchange"&&(qE.has(a)||Gc(a,!1,e),Gc(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yl]||(n[Yl]=!0,Gc("selectionchange",!1,n))}}function eg(e,n,a,s){switch(wg(n)){case 2:var u=m0;break;case 8:u=g0;break;default:u=sf}a=u.bind(null,n,a,e),u=void 0,!hu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Fc(e,n,a,s,u){var c=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var p=s.tag;if(p===3||p===4){var v=s.stateNode.containerInfo;if(v===u)break;if(p===4)for(p=s.return;p!==null;){var _=p.tag;if((_===3||_===4)&&p.stateNode.containerInfo===u)return;p=p.return}for(;v!==null;){if(p=ra(v),p===null)return;if(_=p.tag,_===5||_===6||_===26||_===27){s=c=p;continue e}v=v.parentNode}}s=s.return}lh(function(){var A=c,U=fu(a),z=[];e:{var O=xh.get(e);if(O!==void 0){var I=rl,te=e;switch(e){case"keypress":if(il(a)===0)break e;case"keydown":case"keyup":I=Lb;break;case"focusin":te="focus",I=vu;break;case"focusout":te="blur",I=vu;break;case"beforeblur":case"afterblur":I=vu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=wb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=Hb;break;case Dh:case kh:case Uh:I=Cb;break;case Mh:I=jb;break;case"scroll":case"scrollend":I=Tb;break;case"wheel":I=Vb;break;case"copy":case"cut":case"paste":I=Ib;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=dh;break;case"toggle":case"beforetoggle":I=Yb}var Z=(n&4)!==0,Ee=!Z&&(e==="scroll"||e==="scrollend"),w=Z?O!==null?O+"Capture":null:O;Z=[];for(var T=A,R;T!==null;){var P=T;if(R=P.stateNode,P=P.tag,P!==5&&P!==26&&P!==27||R===null||w===null||(P=yr(T,w),P!=null&&Z.push(es(T,P,R))),Ee)break;T=T.return}0<Z.length&&(O=new I(O,te,null,a,U),z.push({event:O,listeners:Z}))}}if((n&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",O&&a!==cu&&(te=a.relatedTarget||a.fromElement)&&(ra(te)||te[aa]))break e;if((I||O)&&(O=U.window===U?U:(O=U.ownerDocument)?O.defaultView||O.parentWindow:window,I?(te=a.relatedTarget||a.toElement,I=A,te=te?ra(te):null,te!==null&&(Ee=f(te),Z=te.tag,te!==Ee||Z!==5&&Z!==27&&Z!==6)&&(te=null)):(I=null,te=A),I!==te)){if(Z=ch,P="onMouseLeave",w="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(Z=dh,P="onPointerLeave",w="onPointerEnter",T="pointer"),Ee=I==null?O:vr(I),R=te==null?O:vr(te),O=new Z(P,T+"leave",I,a,U),O.target=Ee,O.relatedTarget=R,P=null,ra(U)===A&&(Z=new Z(w,T+"enter",te,a,U),Z.target=R,Z.relatedTarget=Ee,P=Z),Ee=P,I&&te)t:{for(Z=I,w=te,T=0,R=Z;R;R=Ha(R))T++;for(R=0,P=w;P;P=Ha(P))R++;for(;0<T-R;)Z=Ha(Z),T--;for(;0<R-T;)w=Ha(w),R--;for(;T--;){if(Z===w||w!==null&&Z===w.alternate)break t;Z=Ha(Z),w=Ha(w)}Z=null}else Z=null;I!==null&&tg(z,O,I,Z,!1),te!==null&&Ee!==null&&tg(z,Ee,te,Z,!0)}}e:{if(O=A?vr(A):window,I=O.nodeName&&O.nodeName.toLowerCase(),I==="select"||I==="input"&&O.type==="file")var K=bh;else if(yh(O))if(Eh)K=tE;else{K=Jb;var le=Zb}else I=O.nodeName,!I||I.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?A&&uu(A.elementType)&&(K=bh):K=eE;if(K&&(K=K(e,A))){_h(z,K,a,U);break e}le&&le(e,O,A),e==="focusout"&&A&&O.type==="number"&&A.memoizedProps.value!=null&&ou(O,"number",O.value)}switch(le=A?vr(A):window,e){case"focusin":(yh(le)||le.contentEditable==="true")&&(ma=le,Su=A,Ar=null);break;case"focusout":Ar=Su=ma=null;break;case"mousedown":wu=!0;break;case"contextmenu":case"mouseup":case"dragend":wu=!1,Ih(z,a,U);break;case"selectionchange":if(iE)break;case"keydown":case"keyup":Ih(z,a,U)}var Q;if(_u)e:{switch(e){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else pa?gh(e,a)&&(J="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(J="onCompositionStart");J&&(hh&&a.locale!=="ko"&&(pa||J!=="onCompositionStart"?J==="onCompositionEnd"&&pa&&(Q=oh()):(Wn=U,pu="value"in Wn?Wn.value:Wn.textContent,pa=!0)),le=Fl(A,J),0<le.length&&(J=new fh(J,e,null,a,U),z.push({event:J,listeners:le}),Q?J.data=Q:(Q=vh(a),Q!==null&&(J.data=Q)))),(Q=Xb?$b(e,a):Kb(e,a))&&(J=Fl(A,"onBeforeInput"),0<J.length&&(le=new fh("onBeforeInput","beforeinput",null,a,U),z.push({event:le,listeners:J}),le.data=Q)),HE(z,e,A,a,U)}Jm(z,n)})}function es(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Fl(e,n){for(var a=n+"Capture",s=[];e!==null;){var u=e,c=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||c===null||(u=yr(e,a),u!=null&&s.unshift(es(e,u,c)),u=yr(e,n),u!=null&&s.push(es(e,u,c))),e.tag===3)return s;e=e.return}return[]}function Ha(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function tg(e,n,a,s,u){for(var c=n._reactName,p=[];a!==null&&a!==s;){var v=a,_=v.alternate,A=v.stateNode;if(v=v.tag,_!==null&&_===s)break;v!==5&&v!==26&&v!==27||A===null||(_=A,u?(A=yr(a,c),A!=null&&p.unshift(es(a,A,_))):u||(A=yr(a,c),A!=null&&p.push(es(a,A,_)))),a=a.return}p.length!==0&&e.push({event:n,listeners:p})}var VE=/\r\n?/g,GE=/\u0000|\uFFFD/g;function ng(e){return(typeof e=="string"?e:""+e).replace(VE,`
`).replace(GE,"")}function ig(e,n){return n=ng(n),ng(e)===n}function Xl(){}function be(e,n,a,s,u,c){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||fa(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&fa(e,""+s);break;case"className":Zs(e,"class",s);break;case"tabIndex":Zs(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Zs(e,a,s);break;case"style":rh(e,s,c);break;case"data":if(n!=="object"){Zs(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=tl(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&be(e,n,"name",u.name,u,null),be(e,n,"formEncType",u.formEncType,u,null),be(e,n,"formMethod",u.formMethod,u,null),be(e,n,"formTarget",u.formTarget,u,null)):(be(e,n,"encType",u.encType,u,null),be(e,n,"method",u.method,u,null),be(e,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=tl(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Xl);break;case"onScroll":s!=null&&ue("scroll",e);break;case"onScrollEnd":s!=null&&ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(l(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=tl(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":ue("beforetoggle",e),ue("toggle",e),Ws(e,"popover",s);break;case"xlinkActuate":yn(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":yn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":yn(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":yn(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":yn(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":yn(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":yn(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":yn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":yn(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ws(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=bb.get(a)||a,Ws(e,a,s))}}function Xc(e,n,a,s,u,c){switch(a){case"style":rh(e,s,c);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(l(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"children":typeof s=="string"?fa(e,s):(typeof s=="number"||typeof s=="bigint")&&fa(e,""+s);break;case"onScroll":s!=null&&ue("scroll",e);break;case"onScrollEnd":s!=null&&ue("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Xl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$d.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),c=e[gt]||null,c=c!=null?c[a]:null,typeof c=="function"&&e.removeEventListener(n,c,u),typeof s=="function")){typeof c!="function"&&c!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,u);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):Ws(e,a,s)}}}function at(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ue("error",e),ue("load",e);var s=!1,u=!1,c;for(c in a)if(a.hasOwnProperty(c)){var p=a[c];if(p!=null)switch(c){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,n));default:be(e,n,c,p,a,null)}}u&&be(e,n,"srcSet",a.srcSet,a,null),s&&be(e,n,"src",a.src,a,null);return;case"input":ue("invalid",e);var v=c=p=u=null,_=null,A=null;for(s in a)if(a.hasOwnProperty(s)){var U=a[s];if(U!=null)switch(s){case"name":u=U;break;case"type":p=U;break;case"checked":_=U;break;case"defaultChecked":A=U;break;case"value":c=U;break;case"defaultValue":v=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(l(137,n));break;default:be(e,n,s,U,a,null)}}th(e,c,v,_,A,p,u,!1),Js(e);return;case"select":ue("invalid",e),s=p=c=null;for(u in a)if(a.hasOwnProperty(u)&&(v=a[u],v!=null))switch(u){case"value":c=v;break;case"defaultValue":p=v;break;case"multiple":s=v;default:be(e,n,u,v,a,null)}n=c,a=p,e.multiple=!!s,n!=null?ca(e,!!s,n,!1):a!=null&&ca(e,!!s,a,!0);return;case"textarea":ue("invalid",e),c=u=s=null;for(p in a)if(a.hasOwnProperty(p)&&(v=a[p],v!=null))switch(p){case"value":s=v;break;case"defaultValue":u=v;break;case"children":c=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(l(91));break;default:be(e,n,p,v,a,null)}ih(e,s,u,c),Js(e);return;case"option":for(_ in a)if(a.hasOwnProperty(_)&&(s=a[_],s!=null))switch(_){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:be(e,n,_,s,a,null)}return;case"dialog":ue("beforetoggle",e),ue("toggle",e),ue("cancel",e),ue("close",e);break;case"iframe":case"object":ue("load",e);break;case"video":case"audio":for(s=0;s<Jr.length;s++)ue(Jr[s],e);break;case"image":ue("error",e),ue("load",e);break;case"details":ue("toggle",e);break;case"embed":case"source":case"link":ue("error",e),ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in a)if(a.hasOwnProperty(A)&&(s=a[A],s!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,n));default:be(e,n,A,s,a,null)}return;default:if(uu(n)){for(U in a)a.hasOwnProperty(U)&&(s=a[U],s!==void 0&&Xc(e,n,U,s,a,void 0));return}}for(v in a)a.hasOwnProperty(v)&&(s=a[v],s!=null&&be(e,n,v,s,a,null))}function YE(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,c=null,p=null,v=null,_=null,A=null,U=null;for(I in a){var z=a[I];if(a.hasOwnProperty(I)&&z!=null)switch(I){case"checked":break;case"value":break;case"defaultValue":_=z;default:s.hasOwnProperty(I)||be(e,n,I,null,s,z)}}for(var O in s){var I=s[O];if(z=a[O],s.hasOwnProperty(O)&&(I!=null||z!=null))switch(O){case"type":c=I;break;case"name":u=I;break;case"checked":A=I;break;case"defaultChecked":U=I;break;case"value":p=I;break;case"defaultValue":v=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(l(137,n));break;default:I!==z&&be(e,n,O,I,s,z)}}lu(e,p,v,_,A,U,c,u);return;case"select":I=p=v=O=null;for(c in a)if(_=a[c],a.hasOwnProperty(c)&&_!=null)switch(c){case"value":break;case"multiple":I=_;default:s.hasOwnProperty(c)||be(e,n,c,null,s,_)}for(u in s)if(c=s[u],_=a[u],s.hasOwnProperty(u)&&(c!=null||_!=null))switch(u){case"value":O=c;break;case"defaultValue":v=c;break;case"multiple":p=c;default:c!==_&&be(e,n,u,c,s,_)}n=v,a=p,s=I,O!=null?ca(e,!!a,O,!1):!!s!=!!a&&(n!=null?ca(e,!!a,n,!0):ca(e,!!a,a?[]:"",!1));return;case"textarea":I=O=null;for(v in a)if(u=a[v],a.hasOwnProperty(v)&&u!=null&&!s.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:be(e,n,v,null,s,u)}for(p in s)if(u=s[p],c=a[p],s.hasOwnProperty(p)&&(u!=null||c!=null))switch(p){case"value":O=u;break;case"defaultValue":I=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(l(91));break;default:u!==c&&be(e,n,p,u,s,c)}nh(e,O,I);return;case"option":for(var te in a)if(O=a[te],a.hasOwnProperty(te)&&O!=null&&!s.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:be(e,n,te,null,s,O)}for(_ in s)if(O=s[_],I=a[_],s.hasOwnProperty(_)&&O!==I&&(O!=null||I!=null))switch(_){case"selected":e.selected=O&&typeof O!="function"&&typeof O!="symbol";break;default:be(e,n,_,O,s,I)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in a)O=a[Z],a.hasOwnProperty(Z)&&O!=null&&!s.hasOwnProperty(Z)&&be(e,n,Z,null,s,O);for(A in s)if(O=s[A],I=a[A],s.hasOwnProperty(A)&&O!==I&&(O!=null||I!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(l(137,n));break;default:be(e,n,A,O,s,I)}return;default:if(uu(n)){for(var Ee in a)O=a[Ee],a.hasOwnProperty(Ee)&&O!==void 0&&!s.hasOwnProperty(Ee)&&Xc(e,n,Ee,void 0,s,O);for(U in s)O=s[U],I=a[U],!s.hasOwnProperty(U)||O===I||O===void 0&&I===void 0||Xc(e,n,U,O,s,I);return}}for(var w in a)O=a[w],a.hasOwnProperty(w)&&O!=null&&!s.hasOwnProperty(w)&&be(e,n,w,null,s,O);for(z in s)O=s[z],I=a[z],!s.hasOwnProperty(z)||O===I||O==null&&I==null||be(e,n,z,O,s,I)}var $c=null,Kc=null;function $l(e){return e.nodeType===9?e:e.ownerDocument}function ag(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Qc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Wc=null;function FE(){var e=window.event;return e&&e.type==="popstate"?e===Wc?!1:(Wc=e,!0):(Wc=null,!1)}var sg=typeof setTimeout=="function"?setTimeout:void 0,XE=typeof clearTimeout=="function"?clearTimeout:void 0,lg=typeof Promise=="function"?Promise:void 0,$E=typeof queueMicrotask=="function"?queueMicrotask:typeof lg<"u"?function(e){return lg.resolve(null).then(e).catch(KE)}:sg;function KE(e){setTimeout(function(){throw e})}function hi(e){return e==="head"}function og(e,n){var a=n,s=0,u=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(0<s&&8>s){a=s;var p=e.ownerDocument;if(a&1&&ts(p.documentElement),a&2&&ts(p.body),a&4)for(a=p.head,ts(a),p=a.firstChild;p;){var v=p.nextSibling,_=p.nodeName;p[gr]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&p.rel.toLowerCase()==="stylesheet"||a.removeChild(p),p=v}}if(u===0){e.removeChild(c),us(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:s=a.charCodeAt(0)-48;else s=0;a=c}while(a);us(n)}function Zc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Zc(a),iu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function QE(e,n,a,s){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[gr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var c=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Wt(e.nextSibling),e===null)break}return null}function WE(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Wt(e.nextSibling),e===null))return null;return e}function Jc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function ZE(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function Wt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var ef=null;function ug(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function cg(e,n,a){switch(n=$l(a),e){case"html":if(e=n.documentElement,!e)throw Error(l(452));return e;case"head":if(e=n.head,!e)throw Error(l(453));return e;case"body":if(e=n.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function ts(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);iu(e)}var Gt=new Map,fg=new Set;function Kl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var kn=F.d;F.d={f:JE,r:e0,D:t0,C:n0,L:i0,m:a0,X:s0,S:r0,M:l0};function JE(){var e=kn.f(),n=Bl();return e||n}function e0(e){var n=sa(e);n!==null&&n.tag===5&&n.type==="form"?Dp(n):kn.r(e)}var Ba=typeof document>"u"?null:document;function dg(e,n,a){var s=Ba;if(s&&typeof n=="string"&&n){var u=Pt(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),fg.has(u)||(fg.add(u),e={rel:e,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),at(n,"link",e),Qe(n),s.head.appendChild(n)))}}function t0(e){kn.D(e),dg("dns-prefetch",e,null)}function n0(e,n){kn.C(e,n),dg("preconnect",e,n)}function i0(e,n,a){kn.L(e,n,a);var s=Ba;if(s&&e&&n){var u='link[rel="preload"][as="'+Pt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Pt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Pt(a.imageSizes)+'"]')):u+='[href="'+Pt(e)+'"]';var c=u;switch(n){case"style":c=ja(e);break;case"script":c=qa(e)}Gt.has(c)||(e=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Gt.set(c,e),s.querySelector(u)!==null||n==="style"&&s.querySelector(ns(c))||n==="script"&&s.querySelector(is(c))||(n=s.createElement("link"),at(n,"link",e),Qe(n),s.head.appendChild(n)))}}function a0(e,n){kn.m(e,n);var a=Ba;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Pt(s)+'"][href="'+Pt(e)+'"]',c=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=qa(e)}if(!Gt.has(c)&&(e=y({rel:"modulepreload",href:e},n),Gt.set(c,e),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(is(c)))return}s=a.createElement("link"),at(s,"link",e),Qe(s),a.head.appendChild(s)}}}function r0(e,n,a){kn.S(e,n,a);var s=Ba;if(s&&e){var u=la(s).hoistableStyles,c=ja(e);n=n||"default";var p=u.get(c);if(!p){var v={loading:0,preload:null};if(p=s.querySelector(ns(c)))v.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Gt.get(c))&&tf(e,a);var _=p=s.createElement("link");Qe(_),at(_,"link",e),_._p=new Promise(function(A,U){_.onload=A,_.onerror=U}),_.addEventListener("load",function(){v.loading|=1}),_.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Ql(p,n,s)}p={type:"stylesheet",instance:p,count:1,state:v},u.set(c,p)}}}function s0(e,n){kn.X(e,n);var a=Ba;if(a&&e){var s=la(a).hoistableScripts,u=qa(e),c=s.get(u);c||(c=a.querySelector(is(u)),c||(e=y({src:e,async:!0},n),(n=Gt.get(u))&&nf(e,n),c=a.createElement("script"),Qe(c),at(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(u,c))}}function l0(e,n){kn.M(e,n);var a=Ba;if(a&&e){var s=la(a).hoistableScripts,u=qa(e),c=s.get(u);c||(c=a.querySelector(is(u)),c||(e=y({src:e,async:!0,type:"module"},n),(n=Gt.get(u))&&nf(e,n),c=a.createElement("script"),Qe(c),at(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(u,c))}}function hg(e,n,a,s){var u=(u=ne.current)?Kl(u):null;if(!u)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ja(a.href),a=la(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ja(a.href);var c=la(u).hoistableStyles,p=c.get(e);if(p||(u=u.ownerDocument||u,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,p),(c=u.querySelector(ns(e)))&&!c._p&&(p.instance=c,p.state.loading=5),Gt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Gt.set(e,a),c||o0(u,e,a,p.state))),n&&s===null)throw Error(l(528,""));return p}if(n&&s!==null)throw Error(l(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=qa(a),a=la(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function ja(e){return'href="'+Pt(e)+'"'}function ns(e){return'link[rel="stylesheet"]['+e+"]"}function pg(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function o0(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),at(n,"link",a),Qe(n),e.head.appendChild(n))}function qa(e){return'[src="'+Pt(e)+'"]'}function is(e){return"script[async]"+e}function mg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+Pt(a.href)+'"]');if(s)return n.instance=s,Qe(s),s;var u=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Qe(s),at(s,"style",u),Ql(s,a.precedence,e),n.instance=s;case"stylesheet":u=ja(a.href);var c=e.querySelector(ns(u));if(c)return n.state.loading|=4,n.instance=c,Qe(c),c;s=pg(a),(u=Gt.get(u))&&tf(s,u),c=(e.ownerDocument||e).createElement("link"),Qe(c);var p=c;return p._p=new Promise(function(v,_){p.onload=v,p.onerror=_}),at(c,"link",s),n.state.loading|=4,Ql(c,a.precedence,e),n.instance=c;case"script":return c=qa(a.src),(u=e.querySelector(is(c)))?(n.instance=u,Qe(u),u):(s=a,(u=Gt.get(c))&&(s=y({},a),nf(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),Qe(u),at(u,"link",s),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(l(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Ql(s,a.precedence,e));return n.instance}function Ql(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,c=u,p=0;p<s.length;p++){var v=s[p];if(v.dataset.precedence===n)c=v;else if(c!==u)break}c?c.parentNode.insertBefore(e,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function tf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function nf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Wl=null;function gg(e,n,a){if(Wl===null){var s=new Map,u=Wl=new Map;u.set(a,s)}else u=Wl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var c=a[u];if(!(c[gr]||c[lt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(n)||"";p=e+p;var v=s.get(p);v?v.push(c):s.set(p,[c])}}return s}function vg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function u0(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function yg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var as=null;function c0(){}function f0(e,n,a){if(as===null)throw Error(l(475));var s=as;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=ja(a.href),c=e.querySelector(ns(u));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=Zl.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=c,Qe(c);return}c=e.ownerDocument||e,a=pg(a),(u=Gt.get(u))&&tf(a,u),c=c.createElement("link"),Qe(c);var p=c;p._p=new Promise(function(v,_){p.onload=v,p.onerror=_}),at(c,"link",a),n.instance=c}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Zl.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function d0(){if(as===null)throw Error(l(475));var e=as;return e.stylesheets&&e.count===0&&af(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&af(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Zl(){if(this.count--,this.count===0){if(this.stylesheets)af(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Jl=null;function af(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Jl=new Map,n.forEach(h0,e),Jl=null,Zl.call(e))}function h0(e,n){if(!(n.state.loading&4)){var a=Jl.get(e);if(a)var s=a.get(null);else{a=new Map,Jl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<u.length;c++){var p=u[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(a.set(p.dataset.precedence,p),s=p)}s&&a.set(null,s)}u=n.instance,p=u.getAttribute("data-precedence"),c=a.get(p)||s,c===s&&a.set(null,u),a.set(p,u),this.count++,s=Zl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),c?c.parentNode.insertBefore(u,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var rs={$$typeof:L,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function p0(e,n,a,s,u,c,p,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Jo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jo(0),this.hiddenUpdates=Jo(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function _g(e,n,a,s,u,c,p,v,_,A,U,z){return e=new p0(e,n,a,p,v,_,A,z),n=1,c===!0&&(n|=24),c=Ct(3,null,null,n),e.current=c,c.stateNode=e,n=zu(),n.refCount++,e.pooledCache=n,n.refCount++,c.memoizedState={element:s,isDehydrated:a,cache:n},qu(c),e}function bg(e){return e?(e=_a,e):_a}function Eg(e,n,a,s,u,c){u=bg(u),s.context===null?s.context=u:s.pendingContext=u,s=ei(n),s.payload={element:a},c=c===void 0?null:c,c!==null&&(s.callback=c),a=ti(e,s,n),a!==null&&(kt(a,e,n),xr(a,e,n))}function Tg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function rf(e,n){Tg(e,n),(e=e.alternate)&&Tg(e,n)}function Sg(e){if(e.tag===13){var n=ya(e,67108864);n!==null&&kt(n,e,67108864),rf(e,67108864)}}var eo=!0;function m0(e,n,a,s){var u=x.T;x.T=null;var c=F.p;try{F.p=2,sf(e,n,a,s)}finally{F.p=c,x.T=u}}function g0(e,n,a,s){var u=x.T;x.T=null;var c=F.p;try{F.p=8,sf(e,n,a,s)}finally{F.p=c,x.T=u}}function sf(e,n,a,s){if(eo){var u=lf(s);if(u===null)Fc(e,n,s,to,a),Rg(e,s);else if(y0(u,e,n,a,s))s.stopPropagation();else if(Rg(e,s),n&4&&-1<v0.indexOf(e)){for(;u!==null;){var c=sa(u);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=Ii(c.pendingLanes);if(p!==0){var v=c;for(v.pendingLanes|=2,v.entangledLanes|=2;p;){var _=1<<31-Rt(p);v.entanglements[1]|=_,p&=~_}un(c),(ve&6)===0&&(zl=an()+500,Zr(0))}}break;case 13:v=ya(c,2),v!==null&&kt(v,c,2),Bl(),rf(c,2)}if(c=lf(s),c===null&&Fc(e,n,s,to,a),c===u)break;u=c}u!==null&&s.stopPropagation()}else Fc(e,n,s,null,a)}}function lf(e){return e=fu(e),of(e)}var to=null;function of(e){if(to=null,e=ra(e),e!==null){var n=f(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return to=e,null}function wg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nb()){case zd:return 2;case Hd:return 8;case Xs:case ib:return 32;case Bd:return 268435456;default:return 32}default:return 32}}var uf=!1,pi=null,mi=null,gi=null,ss=new Map,ls=new Map,vi=[],v0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rg(e,n){switch(e){case"focusin":case"focusout":pi=null;break;case"dragenter":case"dragleave":mi=null;break;case"mouseover":case"mouseout":gi=null;break;case"pointerover":case"pointerout":ss.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ls.delete(n.pointerId)}}function os(e,n,a,s,u,c){return e===null||e.nativeEvent!==c?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:c,targetContainers:[u]},n!==null&&(n=sa(n),n!==null&&Sg(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function y0(e,n,a,s,u){switch(n){case"focusin":return pi=os(pi,e,n,a,s,u),!0;case"dragenter":return mi=os(mi,e,n,a,s,u),!0;case"mouseover":return gi=os(gi,e,n,a,s,u),!0;case"pointerover":var c=u.pointerId;return ss.set(c,os(ss.get(c)||null,e,n,a,s,u)),!0;case"gotpointercapture":return c=u.pointerId,ls.set(c,os(ls.get(c)||null,e,n,a,s,u)),!0}return!1}function Ag(e){var n=ra(e.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,fb(e.priority,function(){if(a.tag===13){var s=Dt();s=eu(s);var u=ya(a,s);u!==null&&kt(u,a,s),rf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function no(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=lf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);cu=s,a.target.dispatchEvent(s),cu=null}else return n=sa(a),n!==null&&Sg(n),e.blockedOn=a,!1;n.shift()}return!0}function Cg(e,n,a){no(e)&&a.delete(n)}function _0(){uf=!1,pi!==null&&no(pi)&&(pi=null),mi!==null&&no(mi)&&(mi=null),gi!==null&&no(gi)&&(gi=null),ss.forEach(Cg),ls.forEach(Cg)}function io(e,n){e.blockedOn===n&&(e.blockedOn=null,uf||(uf=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,_0)))}var ao=null;function Og(e){ao!==e&&(ao=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){ao===e&&(ao=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],u=e[n+2];if(typeof s!="function"){if(of(s||a)===null)continue;break}var c=sa(a);c!==null&&(e.splice(n,3),n-=3,lc(c,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function us(e){function n(_){return io(_,e)}pi!==null&&io(pi,e),mi!==null&&io(mi,e),gi!==null&&io(gi,e),ss.forEach(n),ls.forEach(n);for(var a=0;a<vi.length;a++){var s=vi[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<vi.length&&(a=vi[0],a.blockedOn===null);)Ag(a),a.blockedOn===null&&vi.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],c=a[s+1],p=u[gt]||null;if(typeof c=="function")p||Og(a);else if(p){var v=null;if(c&&c.hasAttribute("formAction")){if(u=c,p=c[gt]||null)v=p.formAction;else if(of(u)!==null)continue}else v=p.action;typeof v=="function"?a[s+1]=v:(a.splice(s,3),s-=3),Og(a)}}}function cf(e){this._internalRoot=e}ro.prototype.render=cf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(l(409));var a=n.current,s=Dt();Eg(a,s,e,n,null,null)},ro.prototype.unmount=cf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Eg(e.current,2,null,e,null,null),Bl(),n[aa]=null}};function ro(e){this._internalRoot=e}ro.prototype.unstable_scheduleHydration=function(e){if(e){var n=Yd();e={blockedOn:null,target:e,priority:n};for(var a=0;a<vi.length&&n!==0&&n<vi[a].priority;a++);vi.splice(a,0,e),a===0&&Ag(e)}};var Ig=t.version;if(Ig!=="19.1.0")throw Error(l(527,Ig,"19.1.0"));F.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=h(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var b0={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var so=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!so.isDisabled&&so.supportsFiber)try{hr=so.inject(b0),wt=so}catch{}}return fs.createRoot=function(e,n){if(!o(e))throw Error(l(299));var a=!1,s="",u=Yp,c=Fp,p=Xp,v=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(v=n.unstable_transitionCallbacks)),n=_g(e,1,!1,null,null,a,s,u,c,p,v,null),e[aa]=n.current,Yc(e),new cf(n)},fs.hydrateRoot=function(e,n,a){if(!o(e))throw Error(l(299));var s=!1,u="",c=Yp,p=Fp,v=Xp,_=null,A=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(v=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(_=a.unstable_transitionCallbacks),a.formState!==void 0&&(A=a.formState)),n=_g(e,1,!0,n,a??null,s,u,c,p,v,_,A),n.context=bg(null),a=n.current,s=Dt(),s=eu(s),u=ei(s),u.callback=null,ti(a,u,s),a=s,n.current.lanes=a,mr(n,a),un(n),e[aa]=n.current,Yc(e),new ro(n)},fs.version="19.1.0",fs}var Hg;function D0(){if(Hg)return hf.exports;Hg=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),hf.exports=N0(),hf.exports}var k0=D0();const U0=Vv(k0);var ds={},Bg;function M0(){if(Bg)return ds;Bg=1,Object.defineProperty(ds,"__esModule",{value:!0}),ds.parse=d,ds.serialize=g;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,l=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,f=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function d(S,D){const C=new f,q=S.length;if(q<2)return C;const M=(D==null?void 0:D.decode)||y;let H=0;do{const X=S.indexOf("=",H);if(X===-1)break;const L=S.indexOf(";",H),G=L===-1?q:L;if(X>G){H=S.lastIndexOf(";",X-1)+1;continue}const j=m(S,H,X),se=h(S,X,j),pe=S.slice(j,se);if(C[pe]===void 0){let me=m(S,X+1,G),ce=h(S,G,me);const Ye=M(S.slice(me,ce));C[pe]=Ye}H=G+1}while(H<q);return C}function m(S,D,C){do{const q=S.charCodeAt(D);if(q!==32&&q!==9)return D}while(++D<C);return C}function h(S,D,C){for(;D>C;){const q=S.charCodeAt(--D);if(q!==32&&q!==9)return D+1}return C}function g(S,D,C){const q=(C==null?void 0:C.encode)||encodeURIComponent;if(!i.test(S))throw new TypeError(`argument name is invalid: ${S}`);const M=q(D);if(!t.test(M))throw new TypeError(`argument val is invalid: ${D}`);let H=S+"="+M;if(!C)return H;if(C.maxAge!==void 0){if(!Number.isInteger(C.maxAge))throw new TypeError(`option maxAge is invalid: ${C.maxAge}`);H+="; Max-Age="+C.maxAge}if(C.domain){if(!r.test(C.domain))throw new TypeError(`option domain is invalid: ${C.domain}`);H+="; Domain="+C.domain}if(C.path){if(!l.test(C.path))throw new TypeError(`option path is invalid: ${C.path}`);H+="; Path="+C.path}if(C.expires){if(!b(C.expires)||!Number.isFinite(C.expires.valueOf()))throw new TypeError(`option expires is invalid: ${C.expires}`);H+="; Expires="+C.expires.toUTCString()}if(C.httpOnly&&(H+="; HttpOnly"),C.secure&&(H+="; Secure"),C.partitioned&&(H+="; Partitioned"),C.priority)switch(typeof C.priority=="string"?C.priority.toLowerCase():void 0){case"low":H+="; Priority=Low";break;case"medium":H+="; Priority=Medium";break;case"high":H+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${C.priority}`)}if(C.sameSite)switch(typeof C.sameSite=="string"?C.sameSite.toLowerCase():C.sameSite){case!0:case"strict":H+="; SameSite=Strict";break;case"lax":H+="; SameSite=Lax";break;case"none":H+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${C.sameSite}`)}return H}function y(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function b(S){return o.call(S)==="[object Date]"}return ds}M0();var jg="popstate";function x0(i={}){function t(l,o){let{pathname:f,search:d,hash:m}=l.location;return Uf("",{pathname:f,search:d,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(l,o){return typeof o=="string"?o:Is(o)}return P0(t,r,null,i)}function ke(i,t){if(i===!1||i===null||typeof i>"u")throw new Error(t)}function Jt(i,t){if(!i){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function L0(){return Math.random().toString(36).substring(2,10)}function qg(i,t){return{usr:i.state,key:i.key,idx:t}}function Uf(i,t,r=null,l){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof t=="string"?ir(t):t,state:r,key:t&&t.key||l||L0()}}function Is({pathname:i="/",search:t="",hash:r=""}){return t&&t!=="?"&&(i+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(i+=r.charAt(0)==="#"?r:"#"+r),i}function ir(i){let t={};if(i){let r=i.indexOf("#");r>=0&&(t.hash=i.substring(r),i=i.substring(0,r));let l=i.indexOf("?");l>=0&&(t.search=i.substring(l),i=i.substring(0,l)),i&&(t.pathname=i)}return t}function P0(i,t,r,l={}){let{window:o=document.defaultView,v5Compat:f=!1}=l,d=o.history,m="POP",h=null,g=y();g==null&&(g=0,d.replaceState({...d.state,idx:g},""));function y(){return(d.state||{idx:null}).idx}function b(){m="POP";let M=y(),H=M==null?null:M-g;g=M,h&&h({action:m,location:q.location,delta:H})}function S(M,H){m="PUSH";let X=Uf(q.location,M,H);g=y()+1;let L=qg(X,g),G=q.createHref(X);try{d.pushState(L,"",G)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;o.location.assign(G)}f&&h&&h({action:m,location:q.location,delta:1})}function D(M,H){m="REPLACE";let X=Uf(q.location,M,H);g=y();let L=qg(X,g),G=q.createHref(X);d.replaceState(L,"",G),f&&h&&h({action:m,location:q.location,delta:0})}function C(M){let H=o.location.origin!=="null"?o.location.origin:o.location.href,X=typeof M=="string"?M:Is(M);return X=X.replace(/ $/,"%20"),ke(H,`No window.location.(origin|href) available to create URL for href: ${X}`),new URL(X,H)}let q={get action(){return m},get location(){return i(o,d)},listen(M){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(jg,b),h=M,()=>{o.removeEventListener(jg,b),h=null}},createHref(M){return t(o,M)},createURL:C,encodeLocation(M){let H=C(M);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:S,replace:D,go(M){return d.go(M)}};return q}function Gv(i,t,r="/"){return z0(i,t,r,!1)}function z0(i,t,r,l){let o=typeof t=="string"?ir(t):t,f=Bn(o.pathname||"/",r);if(f==null)return null;let d=Yv(i);H0(d);let m=null;for(let h=0;m==null&&h<d.length;++h){let g=Q0(f);m=$0(d[h],g,l)}return m}function Yv(i,t=[],r=[],l=""){let o=(f,d,m)=>{let h={relativePath:m===void 0?f.path||"":m,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};h.relativePath.startsWith("/")&&(ke(h.relativePath.startsWith(l),`Absolute route path "${h.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(l.length));let g=Pn([l,h.relativePath]),y=r.concat(h);f.children&&f.children.length>0&&(ke(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Yv(f.children,t,y,g)),!(f.path==null&&!f.index)&&t.push({path:g,score:F0(g,f.index),routesMeta:y})};return i.forEach((f,d)=>{var m;if(f.path===""||!((m=f.path)!=null&&m.includes("?")))o(f,d);else for(let h of Fv(f.path))o(f,d,h)}),t}function Fv(i){let t=i.split("/");if(t.length===0)return[];let[r,...l]=t,o=r.endsWith("?"),f=r.replace(/\?$/,"");if(l.length===0)return o?[f,""]:[f];let d=Fv(l.join("/")),m=[];return m.push(...d.map(h=>h===""?f:[f,h].join("/"))),o&&m.push(...d),m.map(h=>i.startsWith("/")&&h===""?"/":h)}function H0(i){i.sort((t,r)=>t.score!==r.score?r.score-t.score:X0(t.routesMeta.map(l=>l.childrenIndex),r.routesMeta.map(l=>l.childrenIndex)))}var B0=/^:[\w-]+$/,j0=3,q0=2,V0=1,G0=10,Y0=-2,Vg=i=>i==="*";function F0(i,t){let r=i.split("/"),l=r.length;return r.some(Vg)&&(l+=Y0),t&&(l+=q0),r.filter(o=>!Vg(o)).reduce((o,f)=>o+(B0.test(f)?j0:f===""?V0:G0),l)}function X0(i,t){return i.length===t.length&&i.slice(0,-1).every((l,o)=>l===t[o])?i[i.length-1]-t[t.length-1]:0}function $0(i,t,r=!1){let{routesMeta:l}=i,o={},f="/",d=[];for(let m=0;m<l.length;++m){let h=l[m],g=m===l.length-1,y=f==="/"?t:t.slice(f.length)||"/",b=_o({path:h.relativePath,caseSensitive:h.caseSensitive,end:g},y),S=h.route;if(!b&&g&&r&&!l[l.length-1].route.index&&(b=_o({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},y)),!b)return null;Object.assign(o,b.params),d.push({params:o,pathname:Pn([f,b.pathname]),pathnameBase:eT(Pn([f,b.pathnameBase])),route:S}),b.pathnameBase!=="/"&&(f=Pn([f,b.pathnameBase]))}return d}function _o(i,t){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[r,l]=K0(i.path,i.caseSensitive,i.end),o=t.match(r);if(!o)return null;let f=o[0],d=f.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:l.reduce((g,{paramName:y,isOptional:b},S)=>{if(y==="*"){let C=m[S]||"";d=f.slice(0,f.length-C.length).replace(/(.)\/+$/,"$1")}const D=m[S];return b&&!D?g[y]=void 0:g[y]=(D||"").replace(/%2F/g,"/"),g},{}),pathname:f,pathnameBase:d,pattern:i}}function K0(i,t=!1,r=!0){Jt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let l=[],o="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,m,h)=>(l.push({paramName:m,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(l.push({paramName:"*"}),o+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":i!==""&&i!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),l]}function Q0(i){try{return i.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Jt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),i}}function Bn(i,t){if(t==="/")return i;if(!i.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,l=i.charAt(r);return l&&l!=="/"?null:i.slice(r)||"/"}function W0(i,t="/"){let{pathname:r,search:l="",hash:o=""}=typeof i=="string"?ir(i):i;return{pathname:r?r.startsWith("/")?r:Z0(r,t):t,search:tT(l),hash:nT(o)}}function Z0(i,t){let r=t.replace(/\/+$/,"").split("/");return i.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function vf(i,t,r,l){return`Cannot include a '${i}' character in a manually specified \`to.${t}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function J0(i){return i.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function $f(i){let t=J0(i);return t.map((r,l)=>l===t.length-1?r.pathname:r.pathnameBase)}function Kf(i,t,r,l=!1){let o;typeof i=="string"?o=ir(i):(o={...i},ke(!o.pathname||!o.pathname.includes("?"),vf("?","pathname","search",o)),ke(!o.pathname||!o.pathname.includes("#"),vf("#","pathname","hash",o)),ke(!o.search||!o.search.includes("#"),vf("#","search","hash",o)));let f=i===""||o.pathname==="",d=f?"/":o.pathname,m;if(d==null)m=r;else{let b=t.length-1;if(!l&&d.startsWith("..")){let S=d.split("/");for(;S[0]==="..";)S.shift(),b-=1;o.pathname=S.join("/")}m=b>=0?t[b]:"/"}let h=W0(o,m),g=d&&d!=="/"&&d.endsWith("/"),y=(f||d===".")&&r.endsWith("/");return!h.pathname.endsWith("/")&&(g||y)&&(h.pathname+="/"),h}var Pn=i=>i.join("/").replace(/\/\/+/g,"/"),eT=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),tT=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,nT=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function iT(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var Xv=["POST","PUT","PATCH","DELETE"];new Set(Xv);var aT=["GET",...Xv];new Set(aT);var ar=N.createContext(null);ar.displayName="DataRouter";var Uo=N.createContext(null);Uo.displayName="DataRouterState";var $v=N.createContext({isTransitioning:!1});$v.displayName="ViewTransition";var rT=N.createContext(new Map);rT.displayName="Fetchers";var sT=N.createContext(null);sT.displayName="Await";var tn=N.createContext(null);tn.displayName="Navigation";var Ps=N.createContext(null);Ps.displayName="Location";var nn=N.createContext({outlet:null,matches:[],isDataRoute:!1});nn.displayName="Route";var Qf=N.createContext(null);Qf.displayName="RouteError";function lT(i,{relative:t}={}){ke(rr(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:l}=N.useContext(tn),{hash:o,pathname:f,search:d}=zs(i,{relative:t}),m=f;return r!=="/"&&(m=f==="/"?r:Pn([r,f])),l.createHref({pathname:m,search:d,hash:o})}function rr(){return N.useContext(Ps)!=null}function Gn(){return ke(rr(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(Ps).location}var Kv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Qv(i){N.useContext(tn).static||N.useLayoutEffect(i)}function sr(){let{isDataRoute:i}=N.useContext(nn);return i?TT():oT()}function oT(){ke(rr(),"useNavigate() may be used only in the context of a <Router> component.");let i=N.useContext(ar),{basename:t,navigator:r}=N.useContext(tn),{matches:l}=N.useContext(nn),{pathname:o}=Gn(),f=JSON.stringify($f(l)),d=N.useRef(!1);return Qv(()=>{d.current=!0}),N.useCallback((h,g={})=>{if(Jt(d.current,Kv),!d.current)return;if(typeof h=="number"){r.go(h);return}let y=Kf(h,JSON.parse(f),o,g.relative==="path");i==null&&t!=="/"&&(y.pathname=y.pathname==="/"?t:Pn([t,y.pathname])),(g.replace?r.replace:r.push)(y,g.state,g)},[t,r,f,o,i])}var uT=N.createContext(null);function cT(i){let t=N.useContext(nn).outlet;return t&&N.createElement(uT.Provider,{value:i},t)}function zs(i,{relative:t}={}){let{matches:r}=N.useContext(nn),{pathname:l}=Gn(),o=JSON.stringify($f(r));return N.useMemo(()=>Kf(i,JSON.parse(o),l,t==="path"),[i,o,l,t])}function fT(i,t){return Wv(i,t)}function Wv(i,t,r,l){var X;ke(rr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:f}=N.useContext(tn),{matches:d}=N.useContext(nn),m=d[d.length-1],h=m?m.params:{},g=m?m.pathname:"/",y=m?m.pathnameBase:"/",b=m&&m.route;{let L=b&&b.path||"";Zv(g,!b||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let S=Gn(),D;if(t){let L=typeof t=="string"?ir(t):t;ke(y==="/"||((X=L.pathname)==null?void 0:X.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${L.pathname}" was given in the \`location\` prop.`),D=L}else D=S;let C=D.pathname||"/",q=C;if(y!=="/"){let L=y.replace(/^\//,"").split("/");q="/"+C.replace(/^\//,"").split("/").slice(L.length).join("/")}let M=!f&&r&&r.matches&&r.matches.length>0?r.matches:Gv(i,{pathname:q});Jt(b||M!=null,`No routes matched location "${D.pathname}${D.search}${D.hash}" `),Jt(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=gT(M&&M.map(L=>Object.assign({},L,{params:Object.assign({},h,L.params),pathname:Pn([y,o.encodeLocation?o.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?y:Pn([y,o.encodeLocation?o.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),d,r,l);return t&&H?N.createElement(Ps.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...D},navigationType:"POP"}},H):H}function dT(){let i=ET(),t=iT(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),r=i instanceof Error?i.stack:null,l="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:l},f={padding:"2px 4px",backgroundColor:l},d=null;return console.error("Error handled by React Router default ErrorBoundary:",i),d=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:f},"ErrorBoundary")," or"," ",N.createElement("code",{style:f},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},t),r?N.createElement("pre",{style:o},r):null,d)}var hT=N.createElement(dT,null),pT=class extends N.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,t){return t.location!==i.location||t.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:t.error,location:t.location,revalidation:i.revalidation||t.revalidation}}componentDidCatch(i,t){console.error("React Router caught the following error during render",i,t)}render(){return this.state.error!==void 0?N.createElement(nn.Provider,{value:this.props.routeContext},N.createElement(Qf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function mT({routeContext:i,match:t,children:r}){let l=N.useContext(ar);return l&&l.static&&l.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=t.route.id),N.createElement(nn.Provider,{value:i},r)}function gT(i,t=[],r=null,l=null){if(i==null){if(!r)return null;if(r.errors)i=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)i=r.matches;else return null}let o=i,f=r==null?void 0:r.errors;if(f!=null){let h=o.findIndex(g=>g.route.id&&(f==null?void 0:f[g.route.id])!==void 0);ke(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),o=o.slice(0,Math.min(o.length,h+1))}let d=!1,m=-1;if(r)for(let h=0;h<o.length;h++){let g=o[h];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=h),g.route.id){let{loaderData:y,errors:b}=r,S=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!b||b[g.route.id]===void 0);if(g.route.lazy||S){d=!0,m>=0?o=o.slice(0,m+1):o=[o[0]];break}}}return o.reduceRight((h,g,y)=>{let b,S=!1,D=null,C=null;r&&(b=f&&g.route.id?f[g.route.id]:void 0,D=g.route.errorElement||hT,d&&(m<0&&y===0?(Zv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,C=null):m===y&&(S=!0,C=g.route.hydrateFallbackElement||null)));let q=t.concat(o.slice(0,y+1)),M=()=>{let H;return b?H=D:S?H=C:g.route.Component?H=N.createElement(g.route.Component,null):g.route.element?H=g.route.element:H=h,N.createElement(mT,{match:g,routeContext:{outlet:h,matches:q,isDataRoute:r!=null},children:H})};return r&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?N.createElement(pT,{location:r.location,revalidation:r.revalidation,component:D,error:b,children:M(),routeContext:{outlet:null,matches:q,isDataRoute:!0}}):M()},null)}function Wf(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vT(i){let t=N.useContext(ar);return ke(t,Wf(i)),t}function yT(i){let t=N.useContext(Uo);return ke(t,Wf(i)),t}function _T(i){let t=N.useContext(nn);return ke(t,Wf(i)),t}function Zf(i){let t=_T(i),r=t.matches[t.matches.length-1];return ke(r.route.id,`${i} can only be used on routes that contain a unique "id"`),r.route.id}function bT(){return Zf("useRouteId")}function ET(){var l;let i=N.useContext(Qf),t=yT("useRouteError"),r=Zf("useRouteError");return i!==void 0?i:(l=t.errors)==null?void 0:l[r]}function TT(){let{router:i}=vT("useNavigate"),t=Zf("useNavigate"),r=N.useRef(!1);return Qv(()=>{r.current=!0}),N.useCallback(async(o,f={})=>{Jt(r.current,Kv),r.current&&(typeof o=="number"?i.navigate(o):await i.navigate(o,{fromRouteId:t,...f}))},[i,t])}var Gg={};function Zv(i,t,r){!t&&!Gg[i]&&(Gg[i]=!0,Jt(!1,r))}N.memo(ST);function ST({routes:i,future:t,state:r}){return Wv(i,void 0,r,t)}function Jf({to:i,replace:t,state:r,relative:l}){ke(rr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=N.useContext(tn);Jt(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=N.useContext(nn),{pathname:d}=Gn(),m=sr(),h=Kf(i,$f(f),d,l==="path"),g=JSON.stringify(h);return N.useEffect(()=>{m(JSON.parse(g),{replace:t,state:r,relative:l})},[m,g,l,t,r]),null}function ed(i){return cT(i.context)}function Un(i){ke(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function wT({basename:i="/",children:t=null,location:r,navigationType:l="POP",navigator:o,static:f=!1}){ke(!rr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=i.replace(/^\/*/,"/"),m=N.useMemo(()=>({basename:d,navigator:o,static:f,future:{}}),[d,o,f]);typeof r=="string"&&(r=ir(r));let{pathname:h="/",search:g="",hash:y="",state:b=null,key:S="default"}=r,D=N.useMemo(()=>{let C=Bn(h,d);return C==null?null:{location:{pathname:C,search:g,hash:y,state:b,key:S},navigationType:l}},[d,h,g,y,b,S,l]);return Jt(D!=null,`<Router basename="${d}"> is not able to match the URL "${h}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:N.createElement(tn.Provider,{value:m},N.createElement(Ps.Provider,{children:t,value:D}))}function RT({children:i,location:t}){return fT(Mf(i),t)}function Mf(i,t=[]){let r=[];return N.Children.forEach(i,(l,o)=>{if(!N.isValidElement(l))return;let f=[...t,o];if(l.type===N.Fragment){r.push.apply(r,Mf(l.props.children,f));return}ke(l.type===Un,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ke(!l.props.index||!l.props.children,"An index route cannot have child routes.");let d={id:l.props.id||f.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(d.children=Mf(l.props.children,f)),r.push(d)}),r}var ho="get",po="application/x-www-form-urlencoded";function Mo(i){return i!=null&&typeof i.tagName=="string"}function AT(i){return Mo(i)&&i.tagName.toLowerCase()==="button"}function CT(i){return Mo(i)&&i.tagName.toLowerCase()==="form"}function OT(i){return Mo(i)&&i.tagName.toLowerCase()==="input"}function IT(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function NT(i,t){return i.button===0&&(!t||t==="_self")&&!IT(i)}var lo=null;function DT(){if(lo===null)try{new FormData(document.createElement("form"),0),lo=!1}catch{lo=!0}return lo}var kT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function yf(i){return i!=null&&!kT.has(i)?(Jt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${po}"`),null):i}function UT(i,t){let r,l,o,f,d;if(CT(i)){let m=i.getAttribute("action");l=m?Bn(m,t):null,r=i.getAttribute("method")||ho,o=yf(i.getAttribute("enctype"))||po,f=new FormData(i)}else if(AT(i)||OT(i)&&(i.type==="submit"||i.type==="image")){let m=i.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=i.getAttribute("formaction")||m.getAttribute("action");if(l=h?Bn(h,t):null,r=i.getAttribute("formmethod")||m.getAttribute("method")||ho,o=yf(i.getAttribute("formenctype"))||yf(m.getAttribute("enctype"))||po,f=new FormData(m,i),!DT()){let{name:g,type:y,value:b}=i;if(y==="image"){let S=g?`${g}.`:"";f.append(`${S}x`,"0"),f.append(`${S}y`,"0")}else g&&f.append(g,b)}}else{if(Mo(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=ho,l=null,o=po,d=i}return f&&o==="text/plain"&&(d=f,f=void 0),{action:l,method:r.toLowerCase(),encType:o,formData:f,body:d}}function td(i,t){if(i===!1||i===null||typeof i>"u")throw new Error(t)}async function MT(i,t){if(i.id in t)return t[i.id];try{let r=await import(i.module);return t[i.id]=r,r}catch(r){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function xT(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function LT(i,t,r){let l=await Promise.all(i.map(async o=>{let f=t.routes[o.route.id];if(f){let d=await MT(f,r);return d.links?d.links():[]}return[]}));return BT(l.flat(1).filter(xT).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Yg(i,t,r,l,o,f){let d=(h,g)=>r[g]?h.route.id!==r[g].route.id:!0,m=(h,g)=>{var y;return r[g].pathname!==h.pathname||((y=r[g].route.path)==null?void 0:y.endsWith("*"))&&r[g].params["*"]!==h.params["*"]};return f==="assets"?t.filter((h,g)=>d(h,g)||m(h,g)):f==="data"?t.filter((h,g)=>{var b;let y=l.routes[h.route.id];if(!y||!y.hasLoader)return!1;if(d(h,g)||m(h,g))return!0;if(h.route.shouldRevalidate){let S=h.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((b=r[0])==null?void 0:b.params)||{},nextUrl:new URL(i,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function PT(i,t,{includeHydrateFallback:r}={}){return zT(i.map(l=>{let o=t.routes[l.route.id];if(!o)return[];let f=[o.module];return o.clientActionModule&&(f=f.concat(o.clientActionModule)),o.clientLoaderModule&&(f=f.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(f=f.concat(o.hydrateFallbackModule)),o.imports&&(f=f.concat(o.imports)),f}).flat(1))}function zT(i){return[...new Set(i)]}function HT(i){let t={},r=Object.keys(i).sort();for(let l of r)t[l]=i[l];return t}function BT(i,t){let r=new Set;return new Set(t),i.reduce((l,o)=>{let f=JSON.stringify(HT(o));return r.has(f)||(r.add(f),l.push({key:f,link:o})),l},[])}var jT=new Set([100,101,204,205]);function qT(i,t){let r=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return r.pathname==="/"?r.pathname="_root.data":t&&Bn(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.data`:r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function Jv(){let i=N.useContext(ar);return td(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function VT(){let i=N.useContext(Uo);return td(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var nd=N.createContext(void 0);nd.displayName="FrameworkContext";function ey(){let i=N.useContext(nd);return td(i,"You must render this element inside a <HydratedRouter> element"),i}function GT(i,t){let r=N.useContext(nd),[l,o]=N.useState(!1),[f,d]=N.useState(!1),{onFocus:m,onBlur:h,onMouseEnter:g,onMouseLeave:y,onTouchStart:b}=t,S=N.useRef(null);N.useEffect(()=>{if(i==="render"&&d(!0),i==="viewport"){let q=H=>{H.forEach(X=>{d(X.isIntersecting)})},M=new IntersectionObserver(q,{threshold:.5});return S.current&&M.observe(S.current),()=>{M.disconnect()}}},[i]),N.useEffect(()=>{if(l){let q=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(q)}}},[l]);let D=()=>{o(!0)},C=()=>{o(!1),d(!1)};return r?i!=="intent"?[f,S,{}]:[f,S,{onFocus:hs(m,D),onBlur:hs(h,C),onMouseEnter:hs(g,D),onMouseLeave:hs(y,C),onTouchStart:hs(b,D)}]:[!1,S,{}]}function hs(i,t){return r=>{i&&i(r),r.defaultPrevented||t(r)}}function YT({page:i,...t}){let{router:r}=Jv(),l=N.useMemo(()=>Gv(r.routes,i,r.basename),[r.routes,i,r.basename]);return l?N.createElement(XT,{page:i,matches:l,...t}):null}function FT(i){let{manifest:t,routeModules:r}=ey(),[l,o]=N.useState([]);return N.useEffect(()=>{let f=!1;return LT(i,t,r).then(d=>{f||o(d)}),()=>{f=!0}},[i,t,r]),l}function XT({page:i,matches:t,...r}){let l=Gn(),{manifest:o,routeModules:f}=ey(),{basename:d}=Jv(),{loaderData:m,matches:h}=VT(),g=N.useMemo(()=>Yg(i,t,h,o,l,"data"),[i,t,h,o,l]),y=N.useMemo(()=>Yg(i,t,h,o,l,"assets"),[i,t,h,o,l]),b=N.useMemo(()=>{if(i===l.pathname+l.search+l.hash)return[];let C=new Set,q=!1;if(t.forEach(H=>{var L;let X=o.routes[H.route.id];!X||!X.hasLoader||(!g.some(G=>G.route.id===H.route.id)&&H.route.id in m&&((L=f[H.route.id])!=null&&L.shouldRevalidate)||X.hasClientLoader?q=!0:C.add(H.route.id))}),C.size===0)return[];let M=qT(i,d);return q&&C.size>0&&M.searchParams.set("_routes",t.filter(H=>C.has(H.route.id)).map(H=>H.route.id).join(",")),[M.pathname+M.search]},[d,m,l,o,g,t,i,f]),S=N.useMemo(()=>PT(y,o),[y,o]),D=FT(y);return N.createElement(N.Fragment,null,b.map(C=>N.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...r})),S.map(C=>N.createElement("link",{key:C,rel:"modulepreload",href:C,...r})),D.map(({key:C,link:q})=>N.createElement("link",{key:C,...q})))}function $T(...i){return t=>{i.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var ty=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ty&&(window.__reactRouterVersion="7.5.3")}catch{}function KT({basename:i,children:t,window:r}){let l=N.useRef();l.current==null&&(l.current=x0({window:r,v5Compat:!0}));let o=l.current,[f,d]=N.useState({action:o.action,location:o.location}),m=N.useCallback(h=>{N.startTransition(()=>d(h))},[d]);return N.useLayoutEffect(()=>o.listen(m),[o,m]),N.createElement(wT,{basename:i,children:t,location:f.location,navigationType:f.action,navigator:o})}var ny=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fa=N.forwardRef(function({onClick:t,discover:r="render",prefetch:l="none",relative:o,reloadDocument:f,replace:d,state:m,target:h,to:g,preventScrollReset:y,viewTransition:b,...S},D){let{basename:C}=N.useContext(tn),q=typeof g=="string"&&ny.test(g),M,H=!1;if(typeof g=="string"&&q&&(M=g,ty))try{let ce=new URL(window.location.href),Ye=g.startsWith("//")?new URL(ce.protocol+g):new URL(g),Se=Bn(Ye.pathname,C);Ye.origin===ce.origin&&Se!=null?g=Se+Ye.search+Ye.hash:H=!0}catch{Jt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=lT(g,{relative:o}),[L,G,j]=GT(l,S),se=JT(g,{replace:d,state:m,target:h,preventScrollReset:y,relative:o,viewTransition:b});function pe(ce){t&&t(ce),ce.defaultPrevented||se(ce)}let me=N.createElement("a",{...S,...j,href:M||X,onClick:H||f?t:pe,ref:$T(D,G),target:h,"data-discover":!q&&r==="render"?"true":void 0});return L&&!q?N.createElement(N.Fragment,null,me,N.createElement(YT,{page:X})):me});Fa.displayName="Link";var QT=N.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:l="",end:o=!1,style:f,to:d,viewTransition:m,children:h,...g},y){let b=zs(d,{relative:g.relative}),S=Gn(),D=N.useContext(Uo),{navigator:C,basename:q}=N.useContext(tn),M=D!=null&&aS(b)&&m===!0,H=C.encodeLocation?C.encodeLocation(b).pathname:b.pathname,X=S.pathname,L=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;r||(X=X.toLowerCase(),L=L?L.toLowerCase():null,H=H.toLowerCase()),L&&q&&(L=Bn(L,q)||L);const G=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let j=X===H||!o&&X.startsWith(H)&&X.charAt(G)==="/",se=L!=null&&(L===H||!o&&L.startsWith(H)&&L.charAt(H.length)==="/"),pe={isActive:j,isPending:se,isTransitioning:M},me=j?t:void 0,ce;typeof l=="function"?ce=l(pe):ce=[l,j?"active":null,se?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let Ye=typeof f=="function"?f(pe):f;return N.createElement(Fa,{...g,"aria-current":me,className:ce,ref:y,style:Ye,to:d,viewTransition:m},typeof h=="function"?h(pe):h)});QT.displayName="NavLink";var WT=N.forwardRef(({discover:i="render",fetcherKey:t,navigate:r,reloadDocument:l,replace:o,state:f,method:d=ho,action:m,onSubmit:h,relative:g,preventScrollReset:y,viewTransition:b,...S},D)=>{let C=nS(),q=iS(m,{relative:g}),M=d.toLowerCase()==="get"?"get":"post",H=typeof m=="string"&&ny.test(m),X=L=>{if(h&&h(L),L.defaultPrevented)return;L.preventDefault();let G=L.nativeEvent.submitter,j=(G==null?void 0:G.getAttribute("formmethod"))||d;C(G||L.currentTarget,{fetcherKey:t,method:j,navigate:r,replace:o,state:f,relative:g,preventScrollReset:y,viewTransition:b})};return N.createElement("form",{ref:D,method:M,action:q,onSubmit:l?h:X,...S,"data-discover":!H&&i==="render"?"true":void 0})});WT.displayName="Form";function ZT(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function iy(i){let t=N.useContext(ar);return ke(t,ZT(i)),t}function JT(i,{target:t,replace:r,state:l,preventScrollReset:o,relative:f,viewTransition:d}={}){let m=sr(),h=Gn(),g=zs(i,{relative:f});return N.useCallback(y=>{if(NT(y,t)){y.preventDefault();let b=r!==void 0?r:Is(h)===Is(g);m(i,{replace:b,state:l,preventScrollReset:o,relative:f,viewTransition:d})}},[h,m,g,r,l,t,i,o,f,d])}var eS=0,tS=()=>`__${String(++eS)}__`;function nS(){let{router:i}=iy("useSubmit"),{basename:t}=N.useContext(tn),r=bT();return N.useCallback(async(l,o={})=>{let{action:f,method:d,encType:m,formData:h,body:g}=UT(l,t);if(o.navigate===!1){let y=o.fetcherKey||tS();await i.fetch(y,r,o.action||f,{preventScrollReset:o.preventScrollReset,formData:h,body:g,formMethod:o.method||d,formEncType:o.encType||m,flushSync:o.flushSync})}else await i.navigate(o.action||f,{preventScrollReset:o.preventScrollReset,formData:h,body:g,formMethod:o.method||d,formEncType:o.encType||m,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[i,t,r])}function iS(i,{relative:t}={}){let{basename:r}=N.useContext(tn),l=N.useContext(nn);ke(l,"useFormAction must be used inside a RouteContext");let[o]=l.matches.slice(-1),f={...zs(i||".",{relative:t})},d=Gn();if(i==null){f.search=d.search;let m=new URLSearchParams(f.search),h=m.getAll("index");if(h.some(y=>y==="")){m.delete("index"),h.filter(b=>b).forEach(b=>m.append("index",b));let y=m.toString();f.search=y?`?${y}`:""}}return(!i||i===".")&&o.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(f.pathname=f.pathname==="/"?r:Pn([r,f.pathname])),Is(f)}function aS(i,t={}){let r=N.useContext($v);ke(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=iy("useViewTransitionState"),o=zs(i,{relative:t.relative});if(!r.isTransitioning)return!1;let f=Bn(r.currentLocation.pathname,l)||r.currentLocation.pathname,d=Bn(r.nextLocation.pathname,l)||r.nextLocation.pathname;return _o(o.pathname,d)!=null||_o(o.pathname,f)!=null}new TextEncoder;[...jT];const rS=()=>{};var Fg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=function(i){const t=[];let r=0;for(let l=0;l<i.length;l++){let o=i.charCodeAt(l);o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=o&63|128):(o&64512)===55296&&l+1<i.length&&(i.charCodeAt(l+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++l)&1023),t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=o&63|128):(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=o&63|128)}return t},sS=function(i){const t=[];let r=0,l=0;for(;r<i.length;){const o=i[r++];if(o<128)t[l++]=String.fromCharCode(o);else if(o>191&&o<224){const f=i[r++];t[l++]=String.fromCharCode((o&31)<<6|f&63)}else if(o>239&&o<365){const f=i[r++],d=i[r++],m=i[r++],h=((o&7)<<18|(f&63)<<12|(d&63)<<6|m&63)-65536;t[l++]=String.fromCharCode(55296+(h>>10)),t[l++]=String.fromCharCode(56320+(h&1023))}else{const f=i[r++],d=i[r++];t[l++]=String.fromCharCode((o&15)<<12|(f&63)<<6|d&63)}}return t.join("")},ry={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,l=[];for(let o=0;o<i.length;o+=3){const f=i[o],d=o+1<i.length,m=d?i[o+1]:0,h=o+2<i.length,g=h?i[o+2]:0,y=f>>2,b=(f&3)<<4|m>>4;let S=(m&15)<<2|g>>6,D=g&63;h||(D=64,d||(S=64)),l.push(r[y],r[b],r[S],r[D])}return l.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(ay(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):sS(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,l=[];for(let o=0;o<i.length;){const f=r[i.charAt(o++)],m=o<i.length?r[i.charAt(o)]:0;++o;const g=o<i.length?r[i.charAt(o)]:64;++o;const b=o<i.length?r[i.charAt(o)]:64;if(++o,f==null||m==null||g==null||b==null)throw new lS;const S=f<<2|m>>4;if(l.push(S),g!==64){const D=m<<4&240|g>>2;if(l.push(D),b!==64){const C=g<<6&192|b;l.push(C)}}}return l},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class lS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oS=function(i){const t=ay(i);return ry.encodeByteArray(t,!0)},bo=function(i){return oS(i).replace(/\./g,"")},id=function(i){try{return ry.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function Eo(i,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const r=t;return new Date(r.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return t}for(const r in t)!t.hasOwnProperty(r)||!uS(r)||(i[r]=Eo(i[r],t[r]));return i}function uS(i){return i!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=()=>sy().__FIREBASE_DEFAULTS__,fS=()=>{if(typeof process>"u"||typeof Fg>"u")return;const i=Fg.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},dS=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&id(i[1]);return t&&JSON.parse(t)},ad=()=>{try{return rS()||cS()||fS()||dS()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},ly=()=>{var i;return(i=ad())===null||i===void 0?void 0:i.config},hS=i=>{var t;return(t=ad())===null||t===void 0?void 0:t[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,r)=>{this.resolve=t,this.reject=r})}wrapCallback(t){return(r,l)=>{r?this.reject(r):this.resolve(l),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(r):t(r,l))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(i,t){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},l=t||"demo-project",o=i.iat||0,f=i.sub||i.user_id;if(!f)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${l}`,aud:l,iat:o,exp:o+3600,auth_time:o,sub:f,user_id:f,firebase:{sign_in_provider:"custom",identities:{}}},i);return[bo(JSON.stringify(r)),bo(JSON.stringify(d)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function oy(){var i;const t=(i=ad())===null||i===void 0?void 0:i.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vS(){return typeof window<"u"||uy()}function uy(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function yS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function cy(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function rd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fy(){const i=Ke();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function To(){try{return typeof indexedDB=="object"}catch{return!1}}function _S(){return new Promise((i,t)=>{try{let r=!0;const l="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(l);o.onsuccess=()=>{o.result.close(),r||self.indexedDB.deleteDatabase(l),i(!0)},o.onupgradeneeded=()=>{r=!1},o.onerror=()=>{var f;t(((f=o.error)===null||f===void 0?void 0:f.message)||"")}}catch(r){t(r)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS="FirebaseError";class et extends Error{constructor(t,r,l){super(r),this.code=t,this.customData=l,this.name=bS,Object.setPrototypeOf(this,et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,na.prototype.create)}}class na{constructor(t,r,l){this.service=t,this.serviceName=r,this.errors=l}create(t,...r){const l=r[0]||{},o=`${this.service}/${t}`,f=this.errors[t],d=f?ES(f,l):"Error",m=`${this.serviceName}: ${d} (${o}).`;return new et(o,m,l)}}function ES(i,t){return i.replace(TS,(r,l)=>{const o=t[l];return o!=null?String(o):`<${l}?>`})}const TS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(i,t){return Object.prototype.hasOwnProperty.call(i,t)}function SS(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}function Ns(i,t){if(i===t)return!0;const r=Object.keys(i),l=Object.keys(t);for(const o of r){if(!l.includes(o))return!1;const f=i[o],d=t[o];if($g(f)&&$g(d)){if(!Ns(f,d))return!1}else if(f!==d)return!1}for(const o of l)if(!r.includes(o))return!1;return!0}function $g(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(i){const t=[];for(const[r,l]of Object.entries(i))Array.isArray(l)?l.forEach(o=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(l));return t.length?"&"+t.join("&"):""}function Ya(i){const t={};return i.replace(/^\?/,"").split("&").forEach(l=>{if(l){const[o,f]=l.split("=");t[decodeURIComponent(o)]=decodeURIComponent(f)}}),t}function bs(i){const t=i.indexOf("?");if(!t)return"";const r=i.indexOf("#",t);return i.substring(t,r>0?r:void 0)}function dy(i,t){const r=new wS(i,t);return r.subscribe.bind(r)}class wS{constructor(t,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{t(this)}).catch(l=>{this.error(l)})}next(t){this.forEachObserver(r=>{r.next(t)})}error(t){this.forEachObserver(r=>{r.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,r,l){let o;if(t===void 0&&r===void 0&&l===void 0)throw new Error("Missing Observer.");RS(t,["next","error","complete"])?o=t:o={next:t,error:r,complete:l},o.next===void 0&&(o.next=_f),o.error===void 0&&(o.error=_f),o.complete===void 0&&(o.complete=_f);const f=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),f}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,t)}sendOne(t,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{r(this.observers[t])}catch(l){typeof console<"u"&&console.error&&console.error(l)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RS(i,t){if(typeof i!="object"||i===null)return!1;for(const r of t)if(r in i&&typeof i[r]=="function")return!0;return!1}function _f(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(i){return i&&i._delegate?i._delegate:i}class Xt{constructor(t,r,l){this.name=t,this.instanceFactory=r,this.type=l,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(t,r){this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const r=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(r)){const l=new pS;if(this.instancesDeferred.set(r,l),this.isInitialized(r)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:r});o&&l.resolve(o)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(t){var r;const l=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(r=t==null?void 0:t.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(l)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:l})}catch(f){if(o)return null;throw f}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(OS(t))try{this.getOrInitializeService({instanceIdentifier:Xi})}catch{}for(const[r,l]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(r);try{const f=this.getOrInitializeService({instanceIdentifier:o});l.resolve(f)}catch{}}}}clearInstance(t=Xi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...t.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xi){return this.instances.has(t)}getOptions(t=Xi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:r={}}=t,l=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(l))throw Error(`${this.name}(${l}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:l,options:r});for(const[f,d]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(f);l===m&&d.resolve(o)}return o}onInit(t,r){var l;const o=this.normalizeInstanceIdentifier(r),f=(l=this.onInitCallbacks.get(o))!==null&&l!==void 0?l:new Set;f.add(t),this.onInitCallbacks.set(o,f);const d=this.instances.get(o);return d&&t(d,o),()=>{f.delete(t)}}invokeOnInitCallbacks(t,r){const l=this.onInitCallbacks.get(r);if(l)for(const o of l)try{o(t,r)}catch{}}getOrInitializeService({instanceIdentifier:t,options:r={}}){let l=this.instances.get(t);if(!l&&this.component&&(l=this.component.instanceFactory(this.container,{instanceIdentifier:CS(t),options:r}),this.instances.set(t,l),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(l,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,l)}catch{}return l||null}normalizeInstanceIdentifier(t=Xi){return this.component?this.component.multipleInstances?t:Xi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CS(i){return i===Xi?void 0:i}function OS(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const r=this.getProvider(t.name);if(r.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);r.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const r=new AS(t,this);return this.providers.set(t,r),r}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd=[];var Te;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Te||(Te={}));const py={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},IS=Te.INFO,NS={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},DS=(i,t,...r)=>{if(t<i.logLevel)return;const l=new Date().toISOString(),o=NS[t];if(o)console[o](`[${l}]  ${i.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ld{constructor(t){this.name=t,this._logLevel=IS,this._logHandler=DS,this._userLogHandler=null,sd.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Te))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?py[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...t),this._logHandler(this,Te.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...t),this._logHandler(this,Te.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...t),this._logHandler(this,Te.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...t),this._logHandler(this,Te.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...t),this._logHandler(this,Te.ERROR,...t)}}function kS(i){sd.forEach(t=>{t.setLogLevel(i)})}function US(i,t){for(const r of sd){let l=null;t&&t.level&&(l=py[t.level]),i===null?r.userLogHandler=null:r.userLogHandler=(o,f,...d)=>{const m=d.map(h=>{if(h==null)return null;if(typeof h=="string")return h;if(typeof h=="number"||typeof h=="boolean")return h.toString();if(h instanceof Error)return h.message;try{return JSON.stringify(h)}catch{return null}}).filter(h=>h).join(" ");f>=(l??o.logLevel)&&i({level:Te[f].toLowerCase(),message:m,args:d,type:o.name})}}}const MS=(i,t)=>t.some(r=>i instanceof r);let Kg,Qg;function xS(){return Kg||(Kg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LS(){return Qg||(Qg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const my=new WeakMap,xf=new WeakMap,gy=new WeakMap,bf=new WeakMap,od=new WeakMap;function PS(i){const t=new Promise((r,l)=>{const o=()=>{i.removeEventListener("success",f),i.removeEventListener("error",d)},f=()=>{r(Ei(i.result)),o()},d=()=>{l(i.error),o()};i.addEventListener("success",f),i.addEventListener("error",d)});return t.then(r=>{r instanceof IDBCursor&&my.set(r,i)}).catch(()=>{}),od.set(t,i),t}function zS(i){if(xf.has(i))return;const t=new Promise((r,l)=>{const o=()=>{i.removeEventListener("complete",f),i.removeEventListener("error",d),i.removeEventListener("abort",d)},f=()=>{r(),o()},d=()=>{l(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",f),i.addEventListener("error",d),i.addEventListener("abort",d)});xf.set(i,t)}let Lf={get(i,t,r){if(i instanceof IDBTransaction){if(t==="done")return xf.get(i);if(t==="objectStoreNames")return i.objectStoreNames||gy.get(i);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Ei(i[t])},set(i,t,r){return i[t]=r,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function HS(i){Lf=i(Lf)}function BS(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){const l=i.call(Ef(this),t,...r);return gy.set(l,t.sort?t.sort():[t]),Ei(l)}:LS().includes(i)?function(...t){return i.apply(Ef(this),t),Ei(my.get(this))}:function(...t){return Ei(i.apply(Ef(this),t))}}function jS(i){return typeof i=="function"?BS(i):(i instanceof IDBTransaction&&zS(i),MS(i,xS())?new Proxy(i,Lf):i)}function Ei(i){if(i instanceof IDBRequest)return PS(i);if(bf.has(i))return bf.get(i);const t=jS(i);return t!==i&&(bf.set(i,t),od.set(t,i)),t}const Ef=i=>od.get(i);function qS(i,t,{blocked:r,upgrade:l,blocking:o,terminated:f}={}){const d=indexedDB.open(i,t),m=Ei(d);return l&&d.addEventListener("upgradeneeded",h=>{l(Ei(d.result),h.oldVersion,h.newVersion,Ei(d.transaction),h)}),r&&d.addEventListener("blocked",h=>r(h.oldVersion,h.newVersion,h)),m.then(h=>{f&&h.addEventListener("close",()=>f()),o&&h.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),m}const VS=["get","getKey","getAll","getAllKeys","count"],GS=["put","add","delete","clear"],Tf=new Map;function Wg(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if(Tf.get(t))return Tf.get(t);const r=t.replace(/FromIndex$/,""),l=t!==r,o=GS.includes(r);if(!(r in(l?IDBIndex:IDBObjectStore).prototype)||!(o||VS.includes(r)))return;const f=async function(d,...m){const h=this.transaction(d,o?"readwrite":"readonly");let g=h.store;return l&&(g=g.index(m.shift())),(await Promise.all([g[r](...m),o&&h.done]))[0]};return Tf.set(t,f),f}HS(i=>({...i,get:(t,r,l)=>Wg(t,r)||i.get(t,r,l),has:(t,r)=>!!Wg(t,r)||i.has(t,r)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(FS(r)){const l=r.getImmediate();return`${l.library}/${l.version}`}else return null}).filter(r=>r).join(" ")}}function FS(i){const t=i.getComponent();return(t==null?void 0:t.type)==="VERSION"}const So="@firebase/app",Pf="0.11.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new ld("@firebase/app"),XS="@firebase/app-compat",$S="@firebase/analytics-compat",KS="@firebase/analytics",QS="@firebase/app-check-compat",WS="@firebase/app-check",ZS="@firebase/auth",JS="@firebase/auth-compat",ew="@firebase/database",tw="@firebase/data-connect",nw="@firebase/database-compat",iw="@firebase/functions",aw="@firebase/functions-compat",rw="@firebase/installations",sw="@firebase/installations-compat",lw="@firebase/messaging",ow="@firebase/messaging-compat",uw="@firebase/performance",cw="@firebase/performance-compat",fw="@firebase/remote-config",dw="@firebase/remote-config-compat",hw="@firebase/storage",pw="@firebase/storage-compat",mw="@firebase/firestore",gw="@firebase/vertexai",vw="@firebase/firestore-compat",yw="firebase",_w="11.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si="[DEFAULT]",bw={[So]:"fire-core",[XS]:"fire-core-compat",[KS]:"fire-analytics",[$S]:"fire-analytics-compat",[WS]:"fire-app-check",[QS]:"fire-app-check-compat",[ZS]:"fire-auth",[JS]:"fire-auth-compat",[ew]:"fire-rtdb",[tw]:"fire-data-connect",[nw]:"fire-rtdb-compat",[iw]:"fire-fn",[aw]:"fire-fn-compat",[rw]:"fire-iid",[sw]:"fire-iid-compat",[lw]:"fire-fcm",[ow]:"fire-fcm-compat",[uw]:"fire-perf",[cw]:"fire-perf-compat",[fw]:"fire-rc",[dw]:"fire-rc-compat",[hw]:"fire-gcs",[pw]:"fire-gcs-compat",[mw]:"fire-fst",[vw]:"fire-fst-compat",[gw]:"fire-vertex","fire-js":"fire-js",[yw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new Map,Za=new Map,Ja=new Map;function Ds(i,t){try{i.container.addComponent(t)}catch(r){jn.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,r)}}function vy(i,t){i.container.addOrOverwriteComponent(t)}function qn(i){const t=i.name;if(Ja.has(t))return jn.debug(`There were multiple attempts to register component ${t}.`),!1;Ja.set(t,i);for(const r of wi.values())Ds(r,i);for(const r of Za.values())Ds(r,i);return!0}function yy(i,t){const r=i.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),i.container.getProvider(t)}function Ew(i,t,r=Si){yy(i,t).clearInstance(r)}function _y(i){return i.options!==void 0}function Ce(i){return i==null?!1:i.settings!==void 0}function Tw(){Ja.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ft=new na("app","Firebase",Sw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let by=class{constructor(t,r,l){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=l,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(i,t){const r=id(i.split(".")[1]);if(r===null){console.error(`FirebaseServerApp ${t} is invalid: second part could not be parsed.`);return}if(JSON.parse(r).exp===void 0){console.error(`FirebaseServerApp ${t} is invalid: expiration claim could not be parsed`);return}const o=JSON.parse(r).exp*1e3,f=new Date().getTime();o-f<=0&&console.error(`FirebaseServerApp ${t} is invalid: the token has expired.`)}class ww extends by{constructor(t,r,l,o){const f=r.automaticDataCollectionEnabled!==void 0?r.automaticDataCollectionEnabled:!1,d={name:l,automaticDataCollectionEnabled:f};if(t.apiKey!==void 0)super(t,d,o);else{const m=t;super(m.options,d,o)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:f},r),this._serverConfig.authIdToken&&Zg(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&Zg(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,r.releaseOnDeref=void 0,xt(So,Pf,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(t){this.isDeleted||(this._refCount++,t!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(t,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){cd(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Ft.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=_w;function ud(i,t={}){let r=i;typeof t!="object"&&(t={name:t});const l=Object.assign({name:Si,automaticDataCollectionEnabled:!1},t),o=l.name;if(typeof o!="string"||!o)throw Ft.create("bad-app-name",{appName:String(o)});if(r||(r=ly()),!r)throw Ft.create("no-options");const f=wi.get(o);if(f){if(Ns(r,f.options)&&Ns(l,f.config))return f;throw Ft.create("duplicate-app",{appName:o})}const d=new hy(o);for(const h of Ja.values())d.addComponent(h);const m=new by(r,l,d);return wi.set(o,m),m}function Rw(i,t){if(vS()&&!uy())throw Ft.create("invalid-server-app-environment");t.automaticDataCollectionEnabled===void 0&&(t.automaticDataCollectionEnabled=!1);let r;_y(i)?r=i.options:r=i;const l=Object.assign(Object.assign({},t),r);l.releaseOnDeref!==void 0&&delete l.releaseOnDeref;const o=g=>[...g].reduce((y,b)=>Math.imul(31,y)+b.charCodeAt(0)|0,0);if(t.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Ft.create("finalization-registry-not-supported",{});const f=""+o(JSON.stringify(l)),d=Za.get(f);if(d)return d.incRefCount(t.releaseOnDeref),d;const m=new hy(f);for(const g of Ja.values())m.addComponent(g);const h=new ww(r,t,f,m);return Za.set(f,h),h}function Aw(i=Si){const t=wi.get(i);if(!t&&i===Si&&ly())return ud();if(!t)throw Ft.create("no-app",{appName:i});return t}function Cw(){return Array.from(wi.values())}async function cd(i){let t=!1;const r=i.name;wi.has(r)?(t=!0,wi.delete(r)):Za.has(r)&&i.decRefCount()<=0&&(Za.delete(r),t=!0),t&&(await Promise.all(i.container.getProviders().map(l=>l.delete())),i.isDeleted=!0)}function xt(i,t,r){var l;let o=(l=bw[i])!==null&&l!==void 0?l:i;r&&(o+=`-${r}`);const f=o.match(/\s|\//),d=t.match(/\s|\//);if(f||d){const m=[`Unable to register library "${o}" with version "${t}":`];f&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),f&&d&&m.push("and"),d&&m.push(`version name "${t}" contains illegal characters (whitespace or "/")`),jn.warn(m.join(" "));return}qn(new Xt(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}function Ey(i,t){if(i!==null&&typeof i!="function")throw Ft.create("invalid-log-argument");US(i,t)}function Ty(i){kS(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="firebase-heartbeat-database",Iw=1,ks="firebase-heartbeat-store";let Sf=null;function Sy(){return Sf||(Sf=qS(Ow,Iw,{upgrade:(i,t)=>{switch(t){case 0:try{i.createObjectStore(ks)}catch(r){console.warn(r)}}}}).catch(i=>{throw Ft.create("idb-open",{originalErrorMessage:i.message})})),Sf}async function Nw(i){try{const r=(await Sy()).transaction(ks),l=await r.objectStore(ks).get(wy(i));return await r.done,l}catch(t){if(t instanceof et)jn.warn(t.message);else{const r=Ft.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});jn.warn(r.message)}}}async function Jg(i,t){try{const l=(await Sy()).transaction(ks,"readwrite");await l.objectStore(ks).put(t,wy(i)),await l.done}catch(r){if(r instanceof et)jn.warn(r.message);else{const l=Ft.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});jn.warn(l.message)}}}function wy(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=1024,kw=30;class Uw{constructor(t){this.container=t,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new xw(r),this._heartbeatsCachePromise=this._storage.read().then(l=>(this._heartbeatsCache=l,l))}async triggerHeartbeat(){var t,r;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),f=ev();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===f||this._heartbeatsCache.heartbeats.some(d=>d.date===f))return;if(this._heartbeatsCache.heartbeats.push({date:f,agent:o}),this._heartbeatsCache.heartbeats.length>kw){const d=Lw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(l){jn.warn(l)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=ev(),{heartbeatsToSend:l,unsentEntries:o}=Mw(this._heartbeatsCache.heartbeats),f=bo(JSON.stringify({version:2,heartbeats:l}));return this._heartbeatsCache.lastSentHeartbeatDate=r,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),f}catch(r){return jn.warn(r),""}}}function ev(){return new Date().toISOString().substring(0,10)}function Mw(i,t=Dw){const r=[];let l=i.slice();for(const o of i){const f=r.find(d=>d.agent===o.agent);if(f){if(f.dates.push(o.date),tv(r)>t){f.dates.pop();break}}else if(r.push({agent:o.agent,dates:[o.date]}),tv(r)>t){r.pop();break}l=l.slice(1)}return{heartbeatsToSend:r,unsentEntries:l}}class xw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return To()?_S().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await Nw(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var r;if(await this._canUseIndexedDBPromise){const o=await this.read();return Jg(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!==null&&r!==void 0?r:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var r;if(await this._canUseIndexedDBPromise){const o=await this.read();return Jg(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!==null&&r!==void 0?r:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function tv(i){return bo(JSON.stringify({version:2,heartbeats:i})).length}function Lw(i){if(i.length===0)return-1;let t=0,r=i[0].date;for(let l=1;l<i.length;l++)i[l].date<r&&(r=i[l].date,t=l);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(i){qn(new Xt("platform-logger",t=>new YS(t),"PRIVATE")),qn(new Xt("heartbeat",t=>new Uw(t),"PRIVATE")),xt(So,Pf,i),xt(So,Pf,"esm2017"),xt("fire-js","")}Pw("");const zw=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:et,SDK_VERSION:Ri,_DEFAULT_ENTRY_NAME:Si,_addComponent:Ds,_addOrOverwriteComponent:vy,_apps:wi,_clearComponents:Tw,_components:Ja,_getProvider:yy,_isFirebaseApp:_y,_isFirebaseServerApp:Ce,_registerComponent:qn,_removeServiceInstance:Ew,_serverApps:Za,deleteApp:cd,getApp:Aw,getApps:Cw,initializeApp:ud,initializeServerApp:Rw,onLog:Ey,registerVersion:xt,setLogLevel:Ty},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(t,r){this._delegate=t,this.firebase=r,Ds(t,new Xt("app-compat",()=>this,"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(t=>{this._delegate.checkDestroyed(),t()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),cd(this._delegate)))}_getService(t,r=Si){var l;this._delegate.checkDestroyed();const o=this._delegate.container.getProvider(t);return!o.isInitialized()&&((l=o.getComponent())===null||l===void 0?void 0:l.instantiationMode)==="EXPLICIT"&&o.initialize(),o.getImmediate({identifier:r})}_removeServiceInstance(t,r=Si){this._delegate.container.getProvider(t).clearInstance(r)}_addComponent(t){Ds(this._delegate,t)}_addOrOverwriteComponent(t){vy(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},nv=new na("app-compat","Firebase",Bw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(i){const t={},r={__esModule:!0,initializeApp:f,app:o,registerVersion:xt,setLogLevel:Ty,onLog:Ey,apps:null,SDK_VERSION:Ri,INTERNAL:{registerComponent:m,removeApp:l,useAsService:h,modularAPIs:zw}};r.default=r,Object.defineProperty(r,"apps",{get:d});function l(g){delete t[g]}function o(g){if(g=g||Si,!Xg(t,g))throw nv.create("no-app",{appName:g});return t[g]}o.App=i;function f(g,y={}){const b=ud(g,y);if(Xg(t,b.name))return t[b.name];const S=new i(b,r);return t[b.name]=S,S}function d(){return Object.keys(t).map(g=>t[g])}function m(g){const y=g.name,b=y.replace("-compat","");if(qn(g)&&g.type==="PUBLIC"){const S=(D=o())=>{if(typeof D[b]!="function")throw nv.create("invalid-app-argument",{appName:y});return D[b]()};g.serviceProps!==void 0&&Eo(S,g.serviceProps),r[b]=S,i.prototype[b]=function(...D){return this._getService.bind(this,y).apply(this,g.multipleInstances?D:[])}}return g.type==="PUBLIC"?r[b]:null}function h(g,y){return y==="serverAuth"?null:y}return r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(){const i=jw(Hw);i.INTERNAL=Object.assign(Object.assign({},i.INTERNAL),{createFirebaseNamespace:Ry,extendNamespace:t,createSubscribe:dy,ErrorFactory:na,deepExtend:Eo});function t(r){Eo(i,r)}return i}const qw=Ry();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=new ld("@firebase/app-compat"),Vw="@firebase/app-compat",Gw="0.2.54";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(i){xt(Vw,Gw,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const i=sy();if(i.firebase!==void 0){iv.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const t=i.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&iv.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const pt=qw;Yw();var Fw="firebase",Xw="11.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pt.registerVersion(Fw,Xw,"app-compat");function fd(i,t){var r={};for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&t.indexOf(l)<0&&(r[l]=i[l]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(i);o<l.length;o++)t.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(i,l[o])&&(r[l[o]]=i[l[o]]);return r}const ps={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},Va={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function Ay(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Kw=$w,Qw=Ay,Cy=new na("auth","Firebase",Ay());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=new ld("@firebase/auth");function Ww(i,...t){wo.logLevel<=Te.WARN&&wo.warn(`Auth (${Ri}): ${i}`,...t)}function mo(i,...t){wo.logLevel<=Te.ERROR&&wo.error(`Auth (${Ri}): ${i}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(i,...t){throw hd(i,...t)}function $e(i,...t){return hd(i,...t)}function dd(i,t,r){const l=Object.assign(Object.assign({},Qw()),{[t]:r});return new na("auth","Firebase",l).create(t,{appName:i.name})}function tt(i){return dd(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function or(i,t,r){const l=r;if(!(t instanceof l))throw l.name!==t.constructor.name&&rt(i,"argument-error"),dd(i,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function hd(i,...t){if(typeof i!="string"){const r=t[0],l=[...t.slice(1)];return l[0]&&(l[0].appName=i.name),i._errorFactory.create(r,...l)}return Cy.create(i,...t)}function V(i,t,...r){if(!i)throw hd(t,...r)}function mn(i){const t="INTERNAL ASSERTION FAILED: "+i;throw mo(t),new Error(t)}function en(i,t){i||mn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function pd(){return av()==="http:"||av()==="https:"}function av(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pd()||cy()||"connection"in navigator)?navigator.onLine:!0}function Jw(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(t,r){this.shortDelay=t,this.longDelay=r,en(r>t,"Short delay should be less than long delay!"),this.isMobile=gS()||rd()}get(){return Zw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(i,t){en(i.emulator,"Emulator should always be set here");const{url:r}=i.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{static initialize(t,r,l){this.fetchImpl=t,r&&(this.headersImpl=r),l&&(this.responseImpl=l)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],nR=new Hs(3e4,6e4);function ze(i,t){return i.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:i.tenantId}):t}async function He(i,t,r,l,o={}){return Iy(i,o,async()=>{let f={},d={};l&&(t==="GET"?d=l:f={body:JSON.stringify(l)});const m=lr(Object.assign({key:i.config.apiKey},d)).slice(1),h=await i._getAdditionalHeaders();h["Content-Type"]="application/json",i.languageCode&&(h["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:t,headers:h},f);return yS()||(g.referrerPolicy="no-referrer"),Oy.fetch()(await Ny(i,i.config.apiHost,r,m),g)})}async function Iy(i,t,r){i._canInitEmulator=!1;const l=Object.assign(Object.assign({},eR),t);try{const o=new aR(i),f=await Promise.race([r(),o.promise]);o.clearNetworkTimeout();const d=await f.json();if("needConfirmation"in d)throw Es(i,"account-exists-with-different-credential",d);if(f.ok&&!("errorMessage"in d))return d;{const m=f.ok?d.errorMessage:d.error.message,[h,g]=m.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Es(i,"credential-already-in-use",d);if(h==="EMAIL_EXISTS")throw Es(i,"email-already-in-use",d);if(h==="USER_DISABLED")throw Es(i,"user-disabled",d);const y=l[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw dd(i,y,g);rt(i,y)}}catch(o){if(o instanceof et)throw o;rt(i,"network-request-failed",{message:String(o)})}}async function Yn(i,t,r,l,o={}){const f=await He(i,t,r,l,o);return"mfaPendingCredential"in f&&rt(i,"multi-factor-auth-required",{_serverResponse:f}),f}async function Ny(i,t,r,l){const o=`${t}${r}?${l}`,f=i,d=f.config.emulator?md(i.config,o):`${i.config.apiScheme}://${o}`;return tR.includes(r)&&(await f._persistenceManagerAvailable,f._getPersistenceType()==="COOKIE")?f._getPersistence()._getFinalTarget(d).toString():d}function iR(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class aR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((r,l)=>{this.timer=setTimeout(()=>l($e(this.auth,"network-request-failed")),nR.get())})}}function Es(i,t,r){const l={appName:i.name};r.email&&(l.email=r.email),r.phoneNumber&&(l.phoneNumber=r.phoneNumber);const o=$e(i,t,l);return o.customData._tokenResponse=r,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(i){return i!==void 0&&i.getResponse!==void 0}function sv(i){return i!==void 0&&i.enterprise!==void 0}class Dy{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const r of this.recaptchaEnforcementState)if(r.provider&&r.provider===t)return iR(r.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rR(i){return(await He(i,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function ky(i,t){return He(i,"GET","/v2/recaptchaConfig",ze(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sR(i,t){return He(i,"POST","/v1/accounts:delete",t)}async function lR(i,t){return He(i,"POST","/v1/accounts:update",t)}async function Ro(i,t){return He(i,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(i){if(i)try{const t=new Date(Number(i));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function oR(i,t=!1){const r=ie(i),l=await r.getIdToken(t),o=xo(l);V(o&&o.exp&&o.auth_time&&o.iat,r.auth,"internal-error");const f=typeof o.firebase=="object"?o.firebase:void 0,d=f==null?void 0:f.sign_in_provider;return{claims:o,token:l,authTime:Ts(wf(o.auth_time)),issuedAtTime:Ts(wf(o.iat)),expirationTime:Ts(wf(o.exp)),signInProvider:d||null,signInSecondFactor:(f==null?void 0:f.sign_in_second_factor)||null}}function wf(i){return Number(i)*1e3}function xo(i){const[t,r,l]=i.split(".");if(t===void 0||r===void 0||l===void 0)return mo("JWT malformed, contained fewer than 3 sections"),null;try{const o=id(r);return o?JSON.parse(o):(mo("Failed to decode base64 JWT payload"),null)}catch(o){return mo("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function lv(i){const t=xo(i);return V(t,"internal-error"),V(typeof t.exp<"u","internal-error"),V(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(i,t,r=!1){if(r)return t;try{return await t}catch(l){throw l instanceof et&&uR(l)&&i.auth.currentUser===i&&await i.auth.signOut(),l}}function uR({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var r;if(t){const l=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),l}else{this.errorBackoff=3e4;const o=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const r=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(t,r){this.createdAt=t,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ts(this.lastLoginAt),this.creationTime=Ts(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(i){var t;const r=i.auth,l=await i.getIdToken(),o=await Vn(i,Ro(r,{idToken:l}));V(o==null?void 0:o.users.length,r,"internal-error");const f=o.users[0];i._notifyReloadListener(f);const d=!((t=f.providerUserInfo)===null||t===void 0)&&t.length?Uy(f.providerUserInfo):[],m=dR(i.providerData,d),h=i.isAnonymous,g=!(i.email&&f.passwordHash)&&!(m!=null&&m.length),y=h?g:!1,b={uid:f.localId,displayName:f.displayName||null,photoURL:f.photoUrl||null,email:f.email||null,emailVerified:f.emailVerified||!1,phoneNumber:f.phoneNumber||null,tenantId:f.tenantId||null,providerData:m,metadata:new zf(f.createdAt,f.lastLoginAt),isAnonymous:y};Object.assign(i,b)}async function fR(i){const t=ie(i);await Ms(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function dR(i,t){return[...i.filter(l=>!t.some(o=>o.providerId===l.providerId)),...t]}function Uy(i){return i.map(t=>{var{providerId:r}=t,l=fd(t,["providerId"]);return{providerId:r,uid:l.rawId||"",displayName:l.displayName||null,email:l.email||null,phoneNumber:l.phoneNumber||null,photoURL:l.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hR(i,t){const r=await Iy(i,{},async()=>{const l=lr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:f}=i.config,d=await Ny(i,o,"/v1/token",`key=${f}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",Oy.fetch()(d,{method:"POST",headers:m,body:l})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function pR(i,t){return He(i,"POST","/v2/accounts:revokeToken",ze(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){V(t.idToken,"internal-error"),V(typeof t.idToken<"u","internal-error"),V(typeof t.refreshToken<"u","internal-error");const r="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):lv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,r)}updateFromIdToken(t){V(t.length!==0,"internal-error");const r=lv(t);this.updateTokensAndExpiration(t,null,r)}async getToken(t,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,r){const{accessToken:l,refreshToken:o,expiresIn:f}=await hR(t,r);this.updateTokensAndExpiration(l,o,Number(f))}updateTokensAndExpiration(t,r,l){this.refreshToken=r||null,this.accessToken=t||null,this.expirationTime=Date.now()+l*1e3}static fromJSON(t,r){const{refreshToken:l,accessToken:o,expirationTime:f}=r,d=new Xa;return l&&(V(typeof l=="string","internal-error",{appName:t}),d.refreshToken=l),o&&(V(typeof o=="string","internal-error",{appName:t}),d.accessToken=o),f&&(V(typeof f=="number","internal-error",{appName:t}),d.expirationTime=f),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Xa,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(i,t){V(typeof i=="string"||typeof i>"u","internal-error",{appName:t})}class Zt{constructor(t){var{uid:r,auth:l,stsTokenManager:o}=t,f=fd(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=l,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=f.displayName||null,this.email=f.email||null,this.emailVerified=f.emailVerified||!1,this.phoneNumber=f.phoneNumber||null,this.photoURL=f.photoURL||null,this.isAnonymous=f.isAnonymous||!1,this.tenantId=f.tenantId||null,this.providerData=f.providerData?[...f.providerData]:[],this.metadata=new zf(f.createdAt||void 0,f.lastLoginAt||void 0)}async getIdToken(t){const r=await Vn(this,this.stsTokenManager.getToken(this.auth,t));return V(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(t){return oR(this,t)}reload(){return fR(this)}_assign(t){this!==t&&(V(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(r=>Object.assign({},r)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const r=new Zt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(t){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,r=!1){let l=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),l=!0),r&&await Ms(this),await this.auth._persistUserIfCurrent(this),l&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ce(this.auth.app))return Promise.reject(tt(this.auth));const t=await this.getIdToken();return await Vn(this,sR(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,r){var l,o,f,d,m,h,g,y;const b=(l=r.displayName)!==null&&l!==void 0?l:void 0,S=(o=r.email)!==null&&o!==void 0?o:void 0,D=(f=r.phoneNumber)!==null&&f!==void 0?f:void 0,C=(d=r.photoURL)!==null&&d!==void 0?d:void 0,q=(m=r.tenantId)!==null&&m!==void 0?m:void 0,M=(h=r._redirectEventId)!==null&&h!==void 0?h:void 0,H=(g=r.createdAt)!==null&&g!==void 0?g:void 0,X=(y=r.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:L,emailVerified:G,isAnonymous:j,providerData:se,stsTokenManager:pe}=r;V(L&&pe,t,"internal-error");const me=Xa.fromJSON(this.name,pe);V(typeof L=="string",t,"internal-error"),_i(b,t.name),_i(S,t.name),V(typeof G=="boolean",t,"internal-error"),V(typeof j=="boolean",t,"internal-error"),_i(D,t.name),_i(C,t.name),_i(q,t.name),_i(M,t.name),_i(H,t.name),_i(X,t.name);const ce=new Zt({uid:L,auth:t,email:S,emailVerified:G,displayName:b,isAnonymous:j,photoURL:C,phoneNumber:D,tenantId:q,stsTokenManager:me,createdAt:H,lastLoginAt:X});return se&&Array.isArray(se)&&(ce.providerData=se.map(Ye=>Object.assign({},Ye))),M&&(ce._redirectEventId=M),ce}static async _fromIdTokenResponse(t,r,l=!1){const o=new Xa;o.updateFromServerResponse(r);const f=new Zt({uid:r.localId,auth:t,stsTokenManager:o,isAnonymous:l});return await Ms(f),f}static async _fromGetAccountInfoResponse(t,r,l){const o=r.users[0];V(o.localId!==void 0,"internal-error");const f=o.providerUserInfo!==void 0?Uy(o.providerUserInfo):[],d=!(o.email&&o.passwordHash)&&!(f!=null&&f.length),m=new Xa;m.updateFromIdToken(l);const h=new Zt({uid:o.localId,auth:t,stsTokenManager:m,isAnonymous:d}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new zf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(f!=null&&f.length)};return Object.assign(h,g),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=new Map;function Mt(i){en(i instanceof Function,"Expected a class definition");let t=ov.get(i);return t?(en(t instanceof i,"Instance stored in cache mismatched with class"),t):(t=new i,ov.set(i,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,r){this.storage[t]=r}async _get(t){const r=this.storage[t];return r===void 0?null:r}async _remove(t){delete this.storage[t]}_addListener(t,r){}_removeListener(t,r){}}My.type="NONE";const er=My;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(i,t,r){return`firebase:${i}:${t}:${r}`}class $a{constructor(t,r,l){this.persistence=t,this.auth=r,this.userKey=l;const{config:o,name:f}=this.auth;this.fullUserKey=Ki(this.userKey,o.apiKey,f),this.fullPersistenceKey=Ki("persistence",o.apiKey,f),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const r=await Ro(this.auth,{idToken:t}).catch(()=>{});return r?Zt._fromGetAccountInfoResponse(this.auth,r,t):null}return Zt._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,r,l="authUser"){if(!r.length)return new $a(Mt(er),t,l);const o=(await Promise.all(r.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let f=o[0]||Mt(er);const d=Ki(l,t.config.apiKey,t.name);let m=null;for(const g of r)try{const y=await g._get(d);if(y){let b;if(typeof y=="string"){const S=await Ro(t,{idToken:y}).catch(()=>{});if(!S)break;b=await Zt._fromGetAccountInfoResponse(t,S,y)}else b=Zt._fromJSON(t,y);g!==f&&(m=b),f=g;break}}catch{}const h=o.filter(g=>g._shouldAllowMigration);return!f._shouldAllowMigration||!h.length?new $a(f,t,l):(f=h[0],m&&await f._set(d,m.toJSON()),await Promise.all(r.map(async g=>{if(g!==f)try{await g._remove(d)}catch{}})),new $a(f,t,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(i){const t=i.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(zy(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(xy(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Hy(t))return"Blackberry";if(By(t))return"Webos";if(Ly(t))return"Safari";if((t.includes("chrome/")||Py(t))&&!t.includes("edge/"))return"Chrome";if(Bs(t))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,l=i.match(r);if((l==null?void 0:l.length)===2)return l[1]}return"Other"}function xy(i=Ke()){return/firefox\//i.test(i)}function Ly(i=Ke()){const t=i.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Py(i=Ke()){return/crios\//i.test(i)}function zy(i=Ke()){return/iemobile/i.test(i)}function Bs(i=Ke()){return/android/i.test(i)}function Hy(i=Ke()){return/blackberry/i.test(i)}function By(i=Ke()){return/webos/i.test(i)}function js(i=Ke()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function mR(i=Ke()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(i)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(i)}function gR(i=Ke()){var t;return js(i)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function vR(){return fy()&&document.documentMode===10}function jy(i=Ke()){return js(i)||Bs(i)||By(i)||Hy(i)||/windows phone/i.test(i)||zy(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(i,t=[]){let r;switch(i){case"Browser":r=uv(Ke());break;case"Worker":r=`${uv(Ke())}-${i}`;break;default:r=i}const l=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${Ri}/${l}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,r){const l=f=>new Promise((d,m)=>{try{const h=t(f);d(h)}catch(h){m(h)}});l.onAbort=r,this.queue.push(l);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const r=[];try{for(const l of this.queue)await l(t),l.onAbort&&r.push(l.onAbort)}catch(l){r.reverse();for(const o of r)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:l==null?void 0:l.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _R(i,t={}){return He(i,"GET","/v2/passwordPolicy",ze(i,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR=6;class ER{constructor(t){var r,l,o,f;const d=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=d.minPasswordLength)!==null&&r!==void 0?r:bR,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(l=t.allowedNonAlphanumericCharacters)===null||l===void 0?void 0:l.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(f=t.forceUpgradeOnSignin)!==null&&f!==void 0?f:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var r,l,o,f,d,m;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,h),this.validatePasswordCharacterOptions(t,h),h.isValid&&(h.isValid=(r=h.meetsMinPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(l=h.meetsMaxPasswordLength)!==null&&l!==void 0?l:!0),h.isValid&&(h.isValid=(o=h.containsLowercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(f=h.containsUppercaseLetter)!==null&&f!==void 0?f:!0),h.isValid&&(h.isValid=(d=h.containsNumericCharacter)!==null&&d!==void 0?d:!0),h.isValid&&(h.isValid=(m=h.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),h}validatePasswordLengthOptions(t,r){const l=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;l&&(r.meetsMinPasswordLength=t.length>=l),o&&(r.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let l;for(let o=0;o<t.length;o++)l=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(r,l>="a"&&l<="z",l>="A"&&l<="Z",l>="0"&&l<="9",this.allowedNonAlphanumericCharacters.includes(l))}updatePasswordCharacterOptionsStatuses(t,r,l,o,f){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=l)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(t,r,l,o){this.app=t,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=l,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cv(this),this.idTokenSubscription=new cv(this),this.beforeStateQueue=new yR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(f=>this._resolvePersistenceManagerAvailable=f)}_initializeWithPersistence(t,r){return r&&(this._popupRedirectResolver=Mt(r)),this._initializationPromise=this.queue(async()=>{var l,o,f;if(!this._deleted&&(this.persistenceManager=await $a.create(this,t),(l=this._resolvePersistenceManagerAvailable)===null||l===void 0||l.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((f=this.currentUser)===null||f===void 0?void 0:f.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const r=await Ro(this,{idToken:t}),l=await Zt._fromGetAccountInfoResponse(this,r,t);await this.directlySetCurrentUser(l)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var r;if(Ce(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(m,m))}):this.directlySetCurrentUser(null)}const l=await this.assertedPersistence.getCurrentUser();let o=l,f=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,m=o==null?void 0:o._redirectEventId,h=await this.tryRedirectSignIn(t);(!d||d===m)&&(h!=null&&h.user)&&(o=h.user,f=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(f)try{await this.beforeStateQueue.runMiddleware(o)}catch(d){o=l,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(t){try{await Ms(t)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Jw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ce(this.app))return Promise.reject(tt(this));const r=t?ie(t):null;return r&&V(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(t,r=!1){if(!this._deleted)return t&&V(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ce(this.app)?Promise.reject(tt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ce(this.app)?Promise.reject(tt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await _R(this),r=new ER(t);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new na("auth","Firebase",t())}onAuthStateChanged(t,r,l){return this.registerStateListener(this.authStateSubscription,t,r,l)}beforeAuthStateChanged(t,r){return this.beforeStateQueue.pushCallback(t,r)}onIdTokenChanged(t,r,l){return this.registerStateListener(this.idTokenSubscription,t,r,l)}authStateReady(){return new Promise((t,r)=>{if(this.currentUser)t();else{const l=this.onAuthStateChanged(()=>{l(),t()},r)}})}async revokeAccessToken(t){if(this.currentUser){const r=await this.currentUser.getIdToken(),l={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:r};this.tenantId!=null&&(l.tenantId=this.tenantId),await pR(this,l)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,r){const l=await this.getOrInitRedirectPersistenceManager(r);return t===null?l.removeCurrentUser():l.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const r=t&&Mt(t)||this._popupRedirectResolver;V(r,this,"argument-error"),this.redirectPersistenceManager=await $a.create(this,[Mt(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var r,l;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===t?this._currentUser:((l=this.redirectUser)===null||l===void 0?void 0:l._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const l=(r=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==l&&(this.lastNotifiedUid=l,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,r,l,o){if(this._deleted)return()=>{};const f=typeof r=="function"?r:r.next.bind(r);let d=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(m,this,"internal-error"),m.then(()=>{d||f(this.currentUser)}),typeof r=="function"){const h=t.addObserver(r,l,o);return()=>{d=!0,h()}}else{const h=t.addObserver(r);return()=>{d=!0,h()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=qy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const l=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());l&&(r["X-Firebase-Client"]=l);const o=await this._getAppCheckToken();return o&&(r["X-Firebase-AppCheck"]=o),r}async _getAppCheckToken(){var t;if(Ce(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const r=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return r!=null&&r.error&&Ww(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function Me(i){return ie(i)}class cv{constructor(t){this.auth=t,this.observer=null,this.addObserver=dy(r=>this.observer=r)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function SR(i){qs=i}function gd(i){return qs.loadJS(i)}function wR(){return qs.recaptchaV2Script}function RR(){return qs.recaptchaEnterpriseScript}function AR(){return qs.gapiScript}function Vy(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=500,OR=6e4,oo=1e12;class IR{constructor(t){this.auth=t,this.counter=oo,this._widgets=new Map}render(t,r){const l=this.counter;return this._widgets.set(l,new kR(t,this.auth.name,r||{})),this.counter++,l}reset(t){var r;const l=t||oo;(r=this._widgets.get(l))===null||r===void 0||r.delete(),this._widgets.delete(l)}getResponse(t){var r;const l=t||oo;return((r=this._widgets.get(l))===null||r===void 0?void 0:r.getResponse())||""}async execute(t){var r;const l=t||oo;return(r=this._widgets.get(l))===null||r===void 0||r.execute(),""}}class NR{constructor(){this.enterprise=new DR}ready(t){t()}execute(t,r){return Promise.resolve("token")}render(t,r){return""}}class DR{ready(t){t()}execute(t,r){return Promise.resolve("token")}render(t,r){return""}}class kR{constructor(t,r,l){this.params=l,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const o=typeof t=="string"?document.getElementById(t):t;V(o,"argument-error",{appName:r}),this.container=o,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=UR(50);const{callback:t,"expired-callback":r}=this.params;if(t)try{t(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,r)try{r()}catch{}this.isVisible&&this.execute()},OR)},CR))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function UR(i){const t=[],r="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let l=0;l<i;l++)t.push(r.charAt(Math.floor(Math.random()*r.length)));return t.join("")}const MR="recaptcha-enterprise",Ss="NO_RECAPTCHA";class Gy{constructor(t){this.type=MR,this.auth=Me(t)}async verify(t="verify",r=!1){async function l(f){if(!r){if(f.tenantId==null&&f._agentRecaptchaConfig!=null)return f._agentRecaptchaConfig.siteKey;if(f.tenantId!=null&&f._tenantRecaptchaConfigs[f.tenantId]!==void 0)return f._tenantRecaptchaConfigs[f.tenantId].siteKey}return new Promise(async(d,m)=>{ky(f,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const g=new Dy(h);return f.tenantId==null?f._agentRecaptchaConfig=g:f._tenantRecaptchaConfigs[f.tenantId]=g,d(g.siteKey)}}).catch(h=>{m(h)})})}function o(f,d,m){const h=window.grecaptcha;sv(h)?h.enterprise.ready(()=>{h.enterprise.execute(f,{action:t}).then(g=>{d(g)}).catch(()=>{d(Ss)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new NR().execute("siteKey",{action:"verify"}):new Promise((f,d)=>{l(this.auth).then(m=>{if(!r&&sv(window.grecaptcha))o(m,f,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let h=RR();h.length!==0&&(h+=m),gd(h).then(()=>{o(m,f,d)}).catch(g=>{d(g)})}}).catch(m=>{d(m)})})}}async function ms(i,t,r,l=!1,o=!1){const f=new Gy(i);let d;if(o)d=Ss;else try{d=await f.verify(r)}catch{d=await f.verify(r,!0)}const m=Object.assign({},t);if(r==="mfaSmsEnrollment"||r==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const h=m.phoneEnrollmentInfo.phoneNumber,g=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:g,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const h=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return l?Object.assign(m,{captchaResp:d}):Object.assign(m,{captchaResponse:d}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Ti(i,t,r,l,o){var f,d;if(o==="EMAIL_PASSWORD_PROVIDER")if(!((f=i._getRecaptchaConfig())===null||f===void 0)&&f.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const m=await ms(i,t,r,r==="getOobCode");return l(i,m)}else return l(i,t).catch(async m=>{if(m.code==="auth/missing-recaptcha-token"){console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await ms(i,t,r,r==="getOobCode");return l(i,h)}else return Promise.reject(m)});else if(o==="PHONE_PROVIDER")if(!((d=i._getRecaptchaConfig())===null||d===void 0)&&d.isProviderEnabled("PHONE_PROVIDER")){const m=await ms(i,t,r);return l(i,m).catch(async h=>{var g;if(((g=i._getRecaptchaConfig())===null||g===void 0?void 0:g.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(h.code==="auth/missing-recaptcha-token"||h.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${r} flow.`);const y=await ms(i,t,r,!1,!0);return l(i,y)}return Promise.reject(h)})}else{const m=await ms(i,t,r,!1,!0);return l(i,m)}else return Promise.reject(o+" provider is not supported.")}async function xR(i){const t=Me(i),r=await ky(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),l=new Dy(r);t.tenantId==null?t._agentRecaptchaConfig=l:t._tenantRecaptchaConfigs[t.tenantId]=l,l.isAnyProviderEnabled()&&new Gy(t).verify()}function LR(i,t){const r=(t==null?void 0:t.persistence)||[],l=(Array.isArray(r)?r:[r]).map(Mt);t!=null&&t.errorMap&&i._updateErrorMap(t.errorMap),i._initializeWithPersistence(l,t==null?void 0:t.popupRedirectResolver)}function PR(i,t,r){const l=Me(i);V(/^https?:\/\//.test(t),l,"invalid-emulator-scheme");const o=!!(r!=null&&r.disableWarnings),f=Yy(t),{host:d,port:m}=zR(t),h=m===null?"":`:${m}`,g={url:`${f}//${d}${h}/`},y=Object.freeze({host:d,port:m,protocol:f.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!l._canInitEmulator){V(l.config.emulator&&l.emulatorConfig,l,"emulator-config-failed"),V(Ns(g,l.config.emulator)&&Ns(y,l.emulatorConfig),l,"emulator-config-failed");return}l.config.emulator=g,l.emulatorConfig=y,l.settings.appVerificationDisabledForTesting=!0,o||HR()}function Yy(i){const t=i.indexOf(":");return t<0?"":i.substr(0,t+1)}function zR(i){const t=Yy(i),r=/(\/\/)?([^?#/]+)/.exec(i.substr(t.length));if(!r)return{host:"",port:null};const l=r[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(l);if(o){const f=o[1];return{host:f,port:fv(l.substr(f.length+1))}}else{const[f,d]=l.split(":");return{host:f,port:fv(d)}}}function fv(i){if(!i)return null;const t=Number(i);return isNaN(t)?null:t}function HR(){function i(){const t=document.createElement("p"),r=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t,r){this.providerId=t,this.signInMethod=r}toJSON(){return mn("not implemented")}_getIdTokenResponse(t){return mn("not implemented")}_linkToIdToken(t,r){return mn("not implemented")}_getReauthenticationResolver(t){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fy(i,t){return He(i,"POST","/v1/accounts:resetPassword",ze(i,t))}async function BR(i,t){return He(i,"POST","/v1/accounts:update",t)}async function jR(i,t){return He(i,"POST","/v1/accounts:signUp",t)}async function qR(i,t){return He(i,"POST","/v1/accounts:update",ze(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VR(i,t){return Yn(i,"POST","/v1/accounts:signInWithPassword",ze(i,t))}async function Lo(i,t){return He(i,"POST","/v1/accounts:sendOobCode",ze(i,t))}async function GR(i,t){return Lo(i,t)}async function YR(i,t){return Lo(i,t)}async function FR(i,t){return Lo(i,t)}async function XR(i,t){return Lo(i,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $R(i,t){return Yn(i,"POST","/v1/accounts:signInWithEmailLink",ze(i,t))}async function KR(i,t){return Yn(i,"POST","/v1/accounts:signInWithEmailLink",ze(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends ur{constructor(t,r,l,o=null){super("password",l),this._email=t,this._password=r,this._tenantId=o}static _fromEmailAndPassword(t,r){return new xs(t,r,"password")}static _fromEmailAndCode(t,r,l=null){return new xs(t,r,"emailLink",l)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const r=typeof t=="string"?JSON.parse(t):t;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ti(t,r,"signInWithPassword",VR,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return $R(t,{email:this._email,oobCode:this._password});default:rt(t,"internal-error")}}async _linkToIdToken(t,r){switch(this.signInMethod){case"password":const l={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ti(t,l,"signUpPassword",jR,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return KR(t,{idToken:r,email:this._email,oobCode:this._password});default:rt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(i,t){return Yn(i,"POST","/v1/accounts:signInWithIdp",ze(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR="http://localhost";class vn extends ur{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const r=new vn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(r.idToken=t.idToken),t.accessToken&&(r.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(r.nonce=t.nonce),t.pendingToken&&(r.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(r.accessToken=t.oauthToken,r.secret=t.oauthTokenSecret):rt("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const r=typeof t=="string"?JSON.parse(t):t,{providerId:l,signInMethod:o}=r,f=fd(r,["providerId","signInMethod"]);if(!l||!o)return null;const d=new vn(l,o);return d.idToken=f.idToken||void 0,d.accessToken=f.accessToken||void 0,d.secret=f.secret,d.nonce=f.nonce,d.pendingToken=f.pendingToken||null,d}_getIdTokenResponse(t){const r=this.buildRequest();return zn(t,r)}_linkToIdToken(t,r){const l=this.buildRequest();return l.idToken=r,zn(t,l)}_getReauthenticationResolver(t){const r=this.buildRequest();return r.autoCreate=!1,zn(t,r)}buildRequest(){const t={requestUri:QR,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),t.postBody=lr(r)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dv(i,t){return He(i,"POST","/v1/accounts:sendVerificationCode",ze(i,t))}async function WR(i,t){return Yn(i,"POST","/v1/accounts:signInWithPhoneNumber",ze(i,t))}async function ZR(i,t){const r=await Yn(i,"POST","/v1/accounts:signInWithPhoneNumber",ze(i,t));if(r.temporaryProof)throw Es(i,"account-exists-with-different-credential",r);return r}const JR={USER_NOT_FOUND:"user-not-found"};async function eA(i,t){const r=Object.assign(Object.assign({},t),{operation:"REAUTH"});return Yn(i,"POST","/v1/accounts:signInWithPhoneNumber",ze(i,r),JR)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi extends ur{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,r){return new Qi({verificationId:t,verificationCode:r})}static _fromTokenResponse(t,r){return new Qi({phoneNumber:t,temporaryProof:r})}_getIdTokenResponse(t){return WR(t,this._makeVerificationRequest())}_linkToIdToken(t,r){return ZR(t,Object.assign({idToken:r},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return eA(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:r,verificationId:l,verificationCode:o}=this.params;return t&&r?{temporaryProof:t,phoneNumber:r}:{sessionInfo:l,code:o}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){typeof t=="string"&&(t=JSON.parse(t));const{verificationId:r,verificationCode:l,phoneNumber:o,temporaryProof:f}=t;return!l&&!r&&!o&&!f?null:new Qi({verificationId:r,verificationCode:l,phoneNumber:o,temporaryProof:f})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nA(i){const t=Ya(bs(i)).link,r=t?Ya(bs(t)).deep_link_id:null,l=Ya(bs(i)).deep_link_id;return(l?Ya(bs(l)).link:null)||l||r||t||i}class Po{constructor(t){var r,l,o,f,d,m;const h=Ya(bs(t)),g=(r=h.apiKey)!==null&&r!==void 0?r:null,y=(l=h.oobCode)!==null&&l!==void 0?l:null,b=tA((o=h.mode)!==null&&o!==void 0?o:null);V(g&&y&&b,"argument-error"),this.apiKey=g,this.operation=b,this.code=y,this.continueUrl=(f=h.continueUrl)!==null&&f!==void 0?f:null,this.languageCode=(d=h.lang)!==null&&d!==void 0?d:null,this.tenantId=(m=h.tenantId)!==null&&m!==void 0?m:null}static parseLink(t){const r=nA(t);try{return new Po(r)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.providerId=Ai.PROVIDER_ID}static credential(t,r){return xs._fromEmailAndPassword(t,r)}static credentialWithLink(t,r){const l=Po.parseLink(r);return V(l,"argument-error"),xs._fromEmailAndCode(t,l.code,l.tenantId)}}Ai.PROVIDER_ID="password";Ai.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ai.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Fn{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class Ka extends cr{static credentialFromJSON(t){const r=typeof t=="string"?JSON.parse(t):t;return V("providerId"in r&&"signInMethod"in r,"argument-error"),vn._fromParams(r)}credential(t){return this._credential(Object.assign(Object.assign({},t),{nonce:t.rawNonce}))}_credential(t){return V(t.idToken||t.accessToken,"argument-error"),vn._fromParams(Object.assign(Object.assign({},t),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(t){return Ka.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return Ka.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:r,oauthAccessToken:l,oauthTokenSecret:o,pendingToken:f,nonce:d,providerId:m}=t;if(!l&&!o&&!r&&!f||!m)return null;try{return new Ka(m)._credential({idToken:r,accessToken:l,nonce:d,pendingToken:f})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends cr{constructor(){super("facebook.com")}static credential(t){return vn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return cn.credentialFromTaggedObject(t)}static credentialFromError(t){return cn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return cn.credential(t.oauthAccessToken)}catch{return null}}}cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";cn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends cr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,r){return vn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:r})}static credentialFromResult(t){return fn.credentialFromTaggedObject(t)}static credentialFromError(t){return fn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:r,oauthAccessToken:l}=t;if(!r&&!l)return null;try{return fn.credential(r,l)}catch{return null}}}fn.GOOGLE_SIGN_IN_METHOD="google.com";fn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends cr{constructor(){super("github.com")}static credential(t){return vn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return dn.credentialFromTaggedObject(t)}static credentialFromError(t){return dn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return dn.credential(t.oauthAccessToken)}catch{return null}}}dn.GITHUB_SIGN_IN_METHOD="github.com";dn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA="http://localhost";class tr extends ur{constructor(t,r){super(t,t),this.pendingToken=r}_getIdTokenResponse(t){const r=this.buildRequest();return zn(t,r)}_linkToIdToken(t,r){const l=this.buildRequest();return l.idToken=r,zn(t,l)}_getReauthenticationResolver(t){const r=this.buildRequest();return r.autoCreate=!1,zn(t,r)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(t){const r=typeof t=="string"?JSON.parse(t):t,{providerId:l,signInMethod:o,pendingToken:f}=r;return!l||!o||!f||l!==o?null:new tr(l,f)}static _create(t,r){return new tr(t,r)}buildRequest(){return{requestUri:iA,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="saml.";class Ao extends Fn{constructor(t){V(t.startsWith(aA),"argument-error"),super(t)}static credentialFromResult(t){return Ao.samlCredentialFromTaggedObject(t)}static credentialFromError(t){return Ao.samlCredentialFromTaggedObject(t.customData||{})}static credentialFromJSON(t){const r=tr.fromJSON(t);return V(r,"argument-error"),r}static samlCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{pendingToken:r,providerId:l}=t;if(!r||!l)return null;try{return tr._create(l,r)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends cr{constructor(){super("twitter.com")}static credential(t,r){return vn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:r})}static credentialFromResult(t){return hn.credentialFromTaggedObject(t)}static credentialFromError(t){return hn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:r,oauthTokenSecret:l}=t;if(!r||!l)return null;try{return hn.credential(r,l)}catch{return null}}}hn.TWITTER_SIGN_IN_METHOD="twitter.com";hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xy(i,t){return Yn(i,"POST","/v1/accounts:signUp",ze(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,r,l,o=!1){const f=await Zt._fromIdTokenResponse(t,l,o),d=hv(l);return new $t({user:f,providerId:d,_tokenResponse:l,operationType:r})}static async _forOperation(t,r,l){await t._updateTokensIfNecessary(l,!0);const o=hv(l);return new $t({user:t,providerId:o,_tokenResponse:l,operationType:r})}}function hv(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rA(i){var t;if(Ce(i.app))return Promise.reject(tt(i));const r=Me(i);if(await r._initializationPromise,!((t=r.currentUser)===null||t===void 0)&&t.isAnonymous)return new $t({user:r.currentUser,providerId:null,operationType:"signIn"});const l=await Xy(r,{returnSecureToken:!0}),o=await $t._fromIdTokenResponse(r,"signIn",l,!0);return await r._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co extends et{constructor(t,r,l,o){var f;super(r.code,r.message),this.operationType=l,this.user=o,Object.setPrototypeOf(this,Co.prototype),this.customData={appName:t.name,tenantId:(f=t.tenantId)!==null&&f!==void 0?f:void 0,_serverResponse:r.customData._serverResponse,operationType:l}}static _fromErrorAndOperation(t,r,l,o){return new Co(t,r,l,o)}}function $y(i,t,r,l){return(t==="reauthenticate"?r._getReauthenticationResolver(i):r._getIdTokenResponse(i)).catch(f=>{throw f.code==="auth/multi-factor-auth-required"?Co._fromErrorAndOperation(i,f,t,l):f})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(i){return new Set(i.map(({providerId:t})=>t).filter(t=>!!t))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sA(i,t){const r=ie(i);await zo(!0,r,t);const{providerUserInfo:l}=await lR(r.auth,{idToken:await r.getIdToken(),deleteProvider:[t]}),o=Ky(l||[]);return r.providerData=r.providerData.filter(f=>o.has(f.providerId)),o.has("phone")||(r.phoneNumber=null),await r.auth._persistUserIfCurrent(r),r}async function vd(i,t,r=!1){const l=await Vn(i,t._linkToIdToken(i.auth,await i.getIdToken()),r);return $t._forOperation(i,"link",l)}async function zo(i,t,r){await Ms(t);const l=Ky(t.providerData),o=i===!1?"provider-already-linked":"no-such-provider";V(l.has(r)===i,t.auth,o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qy(i,t,r=!1){const{auth:l}=i;if(Ce(l.app))return Promise.reject(tt(l));const o="reauthenticate";try{const f=await Vn(i,$y(l,o,t,i),r);V(f.idToken,l,"internal-error");const d=xo(f.idToken);V(d,l,"internal-error");const{sub:m}=d;return V(i.uid===m,l,"user-mismatch"),$t._forOperation(i,o,f)}catch(f){throw(f==null?void 0:f.code)==="auth/user-not-found"&&rt(l,"user-mismatch"),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wy(i,t,r=!1){if(Ce(i.app))return Promise.reject(tt(i));const l="signIn",o=await $y(i,l,t),f=await $t._fromIdTokenResponse(i,l,o);return r||await i._updateCurrentUser(f.user),f}async function Ho(i,t){return Wy(Me(i),t)}async function Zy(i,t){const r=ie(i);return await zo(!1,r,t.providerId),vd(r,t)}async function Jy(i,t){return Qy(ie(i),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lA(i,t){return Yn(i,"POST","/v1/accounts:signInWithCustomToken",ze(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oA(i,t){if(Ce(i.app))return Promise.reject(tt(i));const r=Me(i),l=await lA(r,{token:t,returnSecureToken:!0}),o=await $t._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t,r){this.factorId=t,this.uid=r.mfaEnrollmentId,this.enrollmentTime=new Date(r.enrolledAt).toUTCString(),this.displayName=r.displayName}static _fromServerResponse(t,r){return"phoneInfo"in r?yd._fromServerResponse(t,r):"totpInfo"in r?_d._fromServerResponse(t,r):rt(t,"internal-error")}}class yd extends Vs{constructor(t){super("phone",t),this.phoneNumber=t.phoneInfo}static _fromServerResponse(t,r){return new yd(r)}}class _d extends Vs{constructor(t){super("totp",t)}static _fromServerResponse(t,r){return new _d(r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(i,t,r){var l;V(((l=r.url)===null||l===void 0?void 0:l.length)>0,i,"invalid-continue-uri"),V(typeof r.dynamicLinkDomain>"u"||r.dynamicLinkDomain.length>0,i,"invalid-dynamic-link-domain"),V(typeof r.linkDomain>"u"||r.linkDomain.length>0,i,"invalid-hosting-link-domain"),t.continueUrl=r.url,t.dynamicLinkDomain=r.dynamicLinkDomain,t.linkDomain=r.linkDomain,t.canHandleCodeInApp=r.handleCodeInApp,r.iOS&&(V(r.iOS.bundleId.length>0,i,"missing-ios-bundle-id"),t.iOSBundleId=r.iOS.bundleId),r.android&&(V(r.android.packageName.length>0,i,"missing-android-pkg-name"),t.androidInstallApp=r.android.installApp,t.androidMinimumVersionCode=r.android.minimumVersion,t.androidPackageName=r.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bd(i){const t=Me(i);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function uA(i,t,r){const l=Me(i),o={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};r&&Bo(l,o,r),await Ti(l,o,"getOobCode",YR,"EMAIL_PASSWORD_PROVIDER")}async function cA(i,t,r){await Fy(ie(i),{oobCode:t,newPassword:r}).catch(async l=>{throw l.code==="auth/password-does-not-meet-requirements"&&bd(i),l})}async function fA(i,t){await qR(ie(i),{oobCode:t})}async function e_(i,t){const r=ie(i),l=await Fy(r,{oobCode:t}),o=l.requestType;switch(V(o,r,"internal-error"),o){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":V(l.newEmail,r,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":V(l.mfaInfo,r,"internal-error");default:V(l.email,r,"internal-error")}let f=null;return l.mfaInfo&&(f=Vs._fromServerResponse(Me(r),l.mfaInfo)),{data:{email:(l.requestType==="VERIFY_AND_CHANGE_EMAIL"?l.newEmail:l.email)||null,previousEmail:(l.requestType==="VERIFY_AND_CHANGE_EMAIL"?l.email:l.newEmail)||null,multiFactorInfo:f},operation:o}}async function dA(i,t){const{data:r}=await e_(ie(i),t);return r.email}async function hA(i,t,r){if(Ce(i.app))return Promise.reject(tt(i));const l=Me(i),d=await Ti(l,{returnSecureToken:!0,email:t,password:r,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Xy,"EMAIL_PASSWORD_PROVIDER").catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&bd(i),h}),m=await $t._fromIdTokenResponse(l,"signIn",d);return await l._updateCurrentUser(m.user),m}function pA(i,t,r){return Ce(i.app)?Promise.reject(tt(i)):Ho(ie(i),Ai.credential(t,r)).catch(async l=>{throw l.code==="auth/password-does-not-meet-requirements"&&bd(i),l})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mA(i,t,r){const l=Me(i),o={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};function f(d,m){V(m.handleCodeInApp,l,"argument-error"),m&&Bo(l,d,m)}f(o,r),await Ti(l,o,"getOobCode",FR,"EMAIL_PASSWORD_PROVIDER")}function gA(i,t){const r=Po.parseLink(t);return(r==null?void 0:r.operation)==="EMAIL_SIGNIN"}async function vA(i,t,r){if(Ce(i.app))return Promise.reject(tt(i));const l=ie(i),o=Ai.credentialWithLink(t,r||Us());return V(o._tenantId===(l.tenantId||null),l,"tenant-id-mismatch"),Ho(l,o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yA(i,t){return He(i,"POST","/v1/accounts:createAuthUri",ze(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _A(i,t){const r=pd()?Us():"http://localhost",l={identifier:t,continueUri:r},{signinMethods:o}=await yA(ie(i),l);return o||[]}async function bA(i,t){const r=ie(i),o={requestType:"VERIFY_EMAIL",idToken:await i.getIdToken()};t&&Bo(r.auth,o,t);const{email:f}=await GR(r.auth,o);f!==i.email&&await i.reload()}async function EA(i,t,r){const l=ie(i),f={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await i.getIdToken(),newEmail:t};r&&Bo(l.auth,f,r);const{email:d}=await XR(l.auth,f);d!==i.email&&await i.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(i,t){return He(i,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA(i,{displayName:t,photoURL:r}){if(t===void 0&&r===void 0)return;const l=ie(i),f={idToken:await l.getIdToken(),displayName:t,photoUrl:r,returnSecureToken:!0},d=await Vn(l,TA(l.auth,f));l.displayName=d.displayName||null,l.photoURL=d.photoUrl||null;const m=l.providerData.find(({providerId:h})=>h==="password");m&&(m.displayName=l.displayName,m.photoURL=l.photoURL),await l._updateTokensIfNecessary(d)}function wA(i,t){const r=ie(i);return Ce(r.auth.app)?Promise.reject(tt(r.auth)):t_(r,t,null)}function RA(i,t){return t_(ie(i),null,t)}async function t_(i,t,r){const{auth:l}=i,f={idToken:await i.getIdToken(),returnSecureToken:!0};t&&(f.email=t),r&&(f.password=r);const d=await Vn(i,BR(l,f));await i._updateTokensIfNecessary(d,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(i){var t,r;if(!i)return null;const{providerId:l}=i,o=i.rawUserInfo?JSON.parse(i.rawUserInfo):{},f=i.isNewUser||i.kind==="identitytoolkit#SignupNewUserResponse";if(!l&&(i!=null&&i.idToken)){const d=(r=(t=xo(i.idToken))===null||t===void 0?void 0:t.firebase)===null||r===void 0?void 0:r.sign_in_provider;if(d){const m=d!=="anonymous"&&d!=="custom"?d:null;return new Qa(f,m)}}if(!l)return null;switch(l){case"facebook.com":return new CA(f,o);case"github.com":return new OA(f,o);case"google.com":return new IA(f,o);case"twitter.com":return new NA(f,o,i.screenName||null);case"custom":case"anonymous":return new Qa(f,null);default:return new Qa(f,l,o)}}class Qa{constructor(t,r,l={}){this.isNewUser=t,this.providerId=r,this.profile=l}}class n_ extends Qa{constructor(t,r,l,o){super(t,r,l),this.username=o}}class CA extends Qa{constructor(t,r){super(t,"facebook.com",r)}}class OA extends n_{constructor(t,r){super(t,"github.com",r,typeof(r==null?void 0:r.login)=="string"?r==null?void 0:r.login:null)}}class IA extends Qa{constructor(t,r){super(t,"google.com",r)}}class NA extends n_{constructor(t,r,l){super(t,"twitter.com",r,l)}}function DA(i){const{user:t,_tokenResponse:r}=i;return t.isAnonymous&&!r?{providerId:null,isNewUser:!1,profile:null}:AA(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(t,r,l){this.type=t,this.credential=r,this.user=l}static _fromIdtoken(t,r){return new $i("enroll",t,r)}static _fromMfaPendingCredential(t){return new $i("signin",t)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(t){var r,l;if(t!=null&&t.multiFactorSession){if(!((r=t.multiFactorSession)===null||r===void 0)&&r.pendingCredential)return $i._fromMfaPendingCredential(t.multiFactorSession.pendingCredential);if(!((l=t.multiFactorSession)===null||l===void 0)&&l.idToken)return $i._fromIdtoken(t.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t,r,l){this.session=t,this.hints=r,this.signInResolver=l}static _fromError(t,r){const l=Me(t),o=r.customData._serverResponse,f=(o.mfaInfo||[]).map(m=>Vs._fromServerResponse(l,m));V(o.mfaPendingCredential,l,"internal-error");const d=$i._fromMfaPendingCredential(o.mfaPendingCredential);return new Ed(d,f,async m=>{const h=await m._process(l,d);delete o.mfaInfo,delete o.mfaPendingCredential;const g=Object.assign(Object.assign({},o),{idToken:h.idToken,refreshToken:h.refreshToken});switch(r.operationType){case"signIn":const y=await $t._fromIdTokenResponse(l,r.operationType,g);return await l._updateCurrentUser(y.user),y;case"reauthenticate":return V(r.user,l,"internal-error"),$t._forOperation(r.user,r.operationType,g);default:rt(l,"internal-error")}})}async resolveSignIn(t){const r=t;return this.signInResolver(r)}}function kA(i,t){var r;const l=ie(i),o=t;return V(t.customData.operationType,l,"argument-error"),V((r=o.customData._serverResponse)===null||r===void 0?void 0:r.mfaPendingCredential,l,"argument-error"),Ed._fromError(l,o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(i,t){return He(i,"POST","/v2/accounts/mfaEnrollment:start",ze(i,t))}function UA(i,t){return He(i,"POST","/v2/accounts/mfaEnrollment:finalize",ze(i,t))}function MA(i,t){return He(i,"POST","/v2/accounts/mfaEnrollment:withdraw",ze(i,t))}class Td{constructor(t){this.user=t,this.enrolledFactors=[],t._onReload(r=>{r.mfaInfo&&(this.enrolledFactors=r.mfaInfo.map(l=>Vs._fromServerResponse(t.auth,l)))})}static _fromUser(t){return new Td(t)}async getSession(){return $i._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(t,r){const l=t,o=await this.getSession(),f=await Vn(this.user,l._process(this.user.auth,o,r));return await this.user._updateTokensIfNecessary(f),this.user.reload()}async unenroll(t){const r=typeof t=="string"?t:t.uid,l=await this.user.getIdToken();try{const o=await Vn(this.user,MA(this.user.auth,{idToken:l,mfaEnrollmentId:r}));this.enrolledFactors=this.enrolledFactors.filter(({uid:f})=>f!==r),await this.user._updateTokensIfNecessary(o),await this.user.reload()}catch(o){throw o}}}const Rf=new WeakMap;function xA(i){const t=ie(i);return Rf.has(t)||Rf.set(t,Td._fromUser(t)),Rf.get(t)}const Oo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(t,r){this.storageRetriever=t,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Oo,"1"),this.storage.removeItem(Oo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,r){return this.storage.setItem(t,JSON.stringify(r)),Promise.resolve()}_get(t){const r=this.storage.getItem(t);return Promise.resolve(r?JSON.parse(r):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA=1e3,PA=10;class a_ extends i_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,r)=>this.onStorageEvent(t,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jy(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const r of Object.keys(this.listeners)){const l=this.storage.getItem(r),o=this.localCache[r];l!==o&&t(r,o,l)}}onStorageEvent(t,r=!1){if(!t.key){this.forAllChangedKeys((d,m,h)=>{this.notifyListeners(d,h)});return}const l=t.key;r?this.detachListener():this.stopPolling();const o=()=>{const d=this.storage.getItem(l);!r&&this.localCache[l]===d||this.notifyListeners(l,d)},f=this.storage.getItem(l);vR()&&f!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,PA):o()}notifyListeners(t,r){this.localCache[t]=r;const l=this.listeners[t];if(l)for(const o of Array.from(l))o(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,r,l)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:r,newValue:l}),!0)})},LA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,r){await super._set(t,r),this.localCache[t]=JSON.stringify(r)}async _get(t){const r=await super._get(t);return this.localCache[t]=JSON.stringify(r),r}async _remove(t){await super._remove(t),delete this.localCache[t]}}a_.type="LOCAL";const Sd=a_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_ extends i_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,r){}_removeListener(t,r){}}r_.type="SESSION";const Zi=r_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(i){return Promise.all(i.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const r=this.receivers.find(o=>o.isListeningto(t));if(r)return r;const l=new jo(t);return this.receivers.push(l),l}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const r=t,{eventId:l,eventType:o,data:f}=r.data,d=this.handlersMap[o];if(!(d!=null&&d.size))return;r.ports[0].postMessage({status:"ack",eventId:l,eventType:o});const m=Array.from(d).map(async g=>g(r.origin,f)),h=await zA(m);r.ports[0].postMessage({status:"done",eventId:l,eventType:o,response:h})}_subscribe(t,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(r)}_unsubscribe(t,r){this.handlersMap[t]&&r&&this.handlersMap[t].delete(r),(!r||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(i="",t=10){let r="";for(let l=0;l<t;l++)r+=Math.floor(Math.random()*10);return i+r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,r,l=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let f,d;return new Promise((m,h)=>{const g=Gs("",20);o.port1.start();const y=setTimeout(()=>{h(new Error("unsupported_event"))},l);d={messageChannel:o,onMessage(b){const S=b;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(y),f=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(f),m(S.data.response);break;default:clearTimeout(y),clearTimeout(f),h(new Error("invalid_response"));break}}},this.handlers.add(d),o.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:t,eventId:g,data:r},[o.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return window}function BA(i){Ge().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function jA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qA(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function VA(){return wd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="firebaseLocalStorageDb",GA=1,Io="firebaseLocalStorage",l_="fbase_key";class Ys{constructor(t){this.request=t}toPromise(){return new Promise((t,r)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function qo(i,t){return i.transaction([Io],t?"readwrite":"readonly").objectStore(Io)}function YA(){const i=indexedDB.deleteDatabase(s_);return new Ys(i).toPromise()}function Hf(){const i=indexedDB.open(s_,GA);return new Promise((t,r)=>{i.addEventListener("error",()=>{r(i.error)}),i.addEventListener("upgradeneeded",()=>{const l=i.result;try{l.createObjectStore(Io,{keyPath:l_})}catch(o){r(o)}}),i.addEventListener("success",async()=>{const l=i.result;l.objectStoreNames.contains(Io)?t(l):(l.close(),await YA(),t(await Hf()))})})}async function mv(i,t,r){const l=qo(i,!0).put({[l_]:t,value:r});return new Ys(l).toPromise()}async function FA(i,t){const r=qo(i,!1).get(t),l=await new Ys(r).toPromise();return l===void 0?null:l.value}function gv(i,t){const r=qo(i,!0).delete(t);return new Ys(r).toPromise()}const XA=800,$A=3;class o_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hf(),this.db)}async _withRetries(t){let r=0;for(;;)try{const l=await this._openDb();return await t(l)}catch(l){if(r++>$A)throw l;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jo._getInstance(VA()),this.receiver._subscribe("keyChanged",async(t,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(t,r)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await jA(),!this.activeServiceWorker)return;this.sender=new HA(this.activeServiceWorker);const l=await this.sender._send("ping",{},800);l&&!((t=l[0])===null||t===void 0)&&t.fulfilled&&!((r=l[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||qA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Hf();return await mv(t,Oo,"1"),await gv(t,Oo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,r){return this._withPendingWrite(async()=>(await this._withRetries(l=>mv(l,t,r)),this.localCache[t]=r,this.notifyServiceWorker(t)))}async _get(t){const r=await this._withRetries(l=>FA(l,t));return this.localCache[t]=r,r}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(r=>gv(r,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const f=qo(o,!1).getAll();return new Ys(f).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const r=[],l=new Set;if(t.length!==0)for(const{fbase_key:o,value:f}of t)l.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(f)&&(this.notifyListeners(o,f),r.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!l.has(o)&&(this.notifyListeners(o,null),r.push(o));return r}notifyListeners(t,r){this.localCache[t]=r;const l=this.listeners[t];if(l)for(const o of Array.from(l))o(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}o_.type="LOCAL";const Ls=o_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(i,t){return He(i,"POST","/v2/accounts/mfaSignIn:start",ze(i,t))}function KA(i,t){return He(i,"POST","/v2/accounts/mfaSignIn:finalize",ze(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af=Vy("rcb"),QA=new Hs(3e4,6e4);class WA{constructor(){var t;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((t=Ge().grecaptcha)===null||t===void 0)&&t.render)}load(t,r=""){return V(ZA(r),t,"argument-error"),this.shouldResolveImmediately(r)&&rv(Ge().grecaptcha)?Promise.resolve(Ge().grecaptcha):new Promise((l,o)=>{const f=Ge().setTimeout(()=>{o($e(t,"network-request-failed"))},QA.get());Ge()[Af]=()=>{Ge().clearTimeout(f),delete Ge()[Af];const m=Ge().grecaptcha;if(!m||!rv(m)){o($e(t,"internal-error"));return}const h=m.render;m.render=(g,y)=>{const b=h(g,y);return this.counter++,b},this.hostLanguage=r,l(m)};const d=`${wR()}?${lr({onload:Af,render:"explicit",hl:r})}`;gd(d).catch(()=>{clearTimeout(f),o($e(t,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(t){var r;return!!(!((r=Ge().grecaptcha)===null||r===void 0)&&r.render)&&(t===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function ZA(i){return i.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(i)}class JA{async load(t){return new IR(t)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws="recaptcha",eC={theme:"light",type:"image"};let tC=class{constructor(t,r,l=Object.assign({},eC)){this.parameters=l,this.type=ws,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Me(t),this.isInvisible=this.parameters.size==="invisible",V(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const o=typeof r=="string"?document.getElementById(r):r;V(o,this.auth,"argument-error"),this.container=o,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new JA:new WA,this.validateStartingState()}async verify(){this.assertNotDestroyed();const t=await this.render(),r=this.getAssertedRecaptcha(),l=r.getResponse(t);return l||new Promise(o=>{const f=d=>{d&&(this.tokenChangeListeners.delete(f),o(d))};this.tokenChangeListeners.add(f),this.isInvisible&&r.execute(t)})}render(){try{this.assertNotDestroyed()}catch(t){return Promise.reject(t)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(t=>{throw this.renderPromise=null,t}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(t=>{this.container.removeChild(t)})}validateStartingState(){V(!this.parameters.sitekey,this.auth,"argument-error"),V(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),V(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(t){return r=>{if(this.tokenChangeListeners.forEach(l=>l(r)),typeof t=="function")t(r);else if(typeof t=="string"){const l=Ge()[t];typeof l=="function"&&l(r)}}}assertNotDestroyed(){V(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let t=this.container;if(!this.isInvisible){const r=document.createElement("div");t.appendChild(r),t=r}this.widgetId=this.getAssertedRecaptcha().render(t,this.parameters)}return this.widgetId}async init(){V(pd()&&!wd(),this.auth,"internal-error"),await nC(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const t=await rR(this.auth);V(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return V(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function nC(){let i=null;return new Promise(t=>{if(document.readyState==="complete"){t();return}i=()=>t(),window.addEventListener("load",i)}).catch(t=>{throw i&&window.removeEventListener("load",i),t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(t,r){this.verificationId=t,this.onConfirmation=r}confirm(t){const r=Qi._fromVerification(this.verificationId,t);return this.onConfirmation(r)}}async function iC(i,t,r){if(Ce(i.app))return Promise.reject(tt(i));const l=Me(i),o=await Vo(l,t,ie(r));return new Rd(o,f=>Ho(l,f))}async function aC(i,t,r){const l=ie(i);await zo(!1,l,"phone");const o=await Vo(l.auth,t,ie(r));return new Rd(o,f=>Zy(l,f))}async function rC(i,t,r){const l=ie(i);if(Ce(l.auth.app))return Promise.reject(tt(l.auth));const o=await Vo(l.auth,t,ie(r));return new Rd(o,f=>Jy(l,f))}async function Vo(i,t,r){var l;if(!i._getRecaptchaConfig())try{await xR(i)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let o;if(typeof t=="string"?o={phoneNumber:t}:o=t,"session"in o){const f=o.session;if("phoneNumber"in o){V(f.type==="enroll",i,"internal-error");const d={idToken:f.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Ti(i,d,"mfaSmsEnrollment",async(y,b)=>{if(b.phoneEnrollmentInfo.captchaResponse===Ss){V((r==null?void 0:r.type)===ws,y,"argument-error");const S=await Cf(y,b,r);return pv(y,S)}return pv(y,b)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).phoneSessionInfo.sessionInfo}else{V(f.type==="signin",i,"internal-error");const d=((l=o.multiFactorHint)===null||l===void 0?void 0:l.uid)||o.multiFactorUid;V(d,i,"missing-multi-factor-info");const m={mfaPendingCredential:f.credential,mfaEnrollmentId:d,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Ti(i,m,"mfaSmsSignIn",async(b,S)=>{if(S.phoneSignInInfo.captchaResponse===Ss){V((r==null?void 0:r.type)===ws,b,"argument-error");const D=await Cf(b,S,r);return vv(b,D)}return vv(b,S)},"PHONE_PROVIDER").catch(b=>Promise.reject(b))).phoneResponseInfo.sessionInfo}}else{const f={phoneNumber:o.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Ti(i,f,"sendVerificationCode",async(g,y)=>{if(y.captchaResponse===Ss){V((r==null?void 0:r.type)===ws,g,"argument-error");const b=await Cf(g,y,r);return dv(g,b)}return dv(g,y)},"PHONE_PROVIDER").catch(g=>Promise.reject(g))).sessionInfo}}finally{r==null||r._reset()}}async function sC(i,t){const r=ie(i);if(Ce(r.auth.app))return Promise.reject(tt(r.auth));await vd(r,t)}async function Cf(i,t,r){V(r.type===ws,i,"argument-error");const l=await r.verify();V(typeof l=="string",i,"argument-error");const o=Object.assign({},t);if("phoneEnrollmentInfo"in o){const f=o.phoneEnrollmentInfo.phoneNumber,d=o.phoneEnrollmentInfo.captchaResponse,m=o.phoneEnrollmentInfo.clientType,h=o.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:l,captchaResponse:d,clientType:m,recaptchaVersion:h}}),o}else if("phoneSignInInfo"in o){const f=o.phoneSignInInfo.captchaResponse,d=o.phoneSignInInfo.clientType,m=o.phoneSignInInfo.recaptchaVersion;return Object.assign(o,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:f,clientType:d,recaptchaVersion:m}}),o}else return Object.assign(o,{recaptchaToken:l}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji=class go{constructor(t){this.providerId=go.PROVIDER_ID,this.auth=Me(t)}verifyPhoneNumber(t,r){return Vo(this.auth,t,ie(r))}static credential(t,r){return Qi._fromVerification(t,r)}static credentialFromResult(t){const r=t;return go.credentialFromTaggedObject(r)}static credentialFromError(t){return go.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:r,temporaryProof:l}=t;return r&&l?Qi._fromTokenResponse(r,l):null}};Ji.PROVIDER_ID="phone";Ji.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(i,t){return t?Mt(t):(V(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad extends ur{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return zn(t,this._buildIdpRequest())}_linkToIdToken(t,r){return zn(t,this._buildIdpRequest(r))}_getReauthenticationResolver(t){return zn(t,this._buildIdpRequest())}_buildIdpRequest(t){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(r.idToken=t),r}}function lC(i){return Wy(i.auth,new Ad(i),i.bypassAuthState)}function oC(i){const{auth:t,user:r}=i;return V(r,t,"internal-error"),Qy(r,new Ad(i),i.bypassAuthState)}async function uC(i){const{auth:t,user:r}=i;return V(r,t,"internal-error"),vd(r,new Ad(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(t,r,l,o,f=!1){this.auth=t,this.resolver=l,this.user=o,this.bypassAuthState=f,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(t,r)=>{this.pendingPromise={resolve:t,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(l){this.reject(l)}})}async onAuthEvent(t){const{urlResponse:r,sessionId:l,postBody:o,tenantId:f,error:d,type:m}=t;if(d){this.reject(d);return}const h={auth:this.auth,requestUri:r,sessionId:l,tenantId:f||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(h))}catch(g){this.reject(g)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return lC;case"linkViaPopup":case"linkViaRedirect":return uC;case"reauthViaPopup":case"reauthViaRedirect":return oC;default:rt(this.auth,"internal-error")}}resolve(t){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=new Hs(2e3,1e4);async function fC(i,t,r){if(Ce(i.app))return Promise.reject($e(i,"operation-not-supported-in-this-environment"));const l=Me(i);or(i,t,Fn);const o=ia(l,r);return new xn(l,"signInViaPopup",t,o).executeNotNull()}async function dC(i,t,r){const l=ie(i);if(Ce(l.auth.app))return Promise.reject($e(l.auth,"operation-not-supported-in-this-environment"));or(l.auth,t,Fn);const o=ia(l.auth,r);return new xn(l.auth,"reauthViaPopup",t,o,l).executeNotNull()}async function hC(i,t,r){const l=ie(i);or(l.auth,t,Fn);const o=ia(l.auth,r);return new xn(l.auth,"linkViaPopup",t,o,l).executeNotNull()}class xn extends u_{constructor(t,r,l,o,f){super(t,r,o,f),this.provider=l,this.authWindow=null,this.pollId=null,xn.currentPopupAction&&xn.currentPopupAction.cancel(),xn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return V(t,this.auth,"internal-error"),t}async onExecution(){en(this.filter.length===1,"Popup operations only handle one event");const t=Gs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject($e(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject($e(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var r,l;if(!((l=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||l===void 0)&&l.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($e(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,cC.get())};t()}}xn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC="pendingRedirect",Rs=new Map;class mC extends u_{constructor(t,r,l=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,l),this.eventId=null}async execute(){let t=Rs.get(this.auth._key());if(!t){try{const l=await gC(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(l)}catch(r){t=()=>Promise.reject(r)}Rs.set(this.auth._key(),t)}return this.bypassAuthState||Rs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const r=await this.auth._redirectUserForId(t.eventId);if(r)return this.user=r,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gC(i,t){const r=f_(t),l=c_(i);if(!await l._isAvailable())return!1;const o=await l._get(r)==="true";return await l._remove(r),o}async function Cd(i,t){return c_(i)._set(f_(t),"true")}function vC(){Rs.clear()}function Od(i,t){Rs.set(i._key(),t)}function c_(i){return Mt(i._redirectPersistence)}function f_(i){return Ki(pC,i.config.apiKey,i.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(i,t,r){return _C(i,t,r)}async function _C(i,t,r){if(Ce(i.app))return Promise.reject(tt(i));const l=Me(i);or(i,t,Fn),await l._initializationPromise;const o=ia(l,r);return await Cd(o,l),o._openRedirect(l,t,"signInViaRedirect")}function bC(i,t,r){return EC(i,t,r)}async function EC(i,t,r){const l=ie(i);if(or(l.auth,t,Fn),Ce(l.auth.app))return Promise.reject(tt(l.auth));await l.auth._initializationPromise;const o=ia(l.auth,r);await Cd(o,l.auth);const f=await d_(l);return o._openRedirect(l.auth,t,"reauthViaRedirect",f)}function TC(i,t,r){return SC(i,t,r)}async function SC(i,t,r){const l=ie(i);or(l.auth,t,Fn),await l.auth._initializationPromise;const o=ia(l.auth,r);await zo(!1,l,t.providerId),await Cd(o,l.auth);const f=await d_(l);return o._openRedirect(l.auth,t,"linkViaRedirect",f)}async function wC(i,t){return await Me(i)._initializationPromise,Go(i,t,!1)}async function Go(i,t,r=!1){if(Ce(i.app))return Promise.reject(tt(i));const l=Me(i),o=ia(l,t),d=await new mC(l,o,r).execute();return d&&!r&&(delete d.user._redirectEventId,await l._persistUserIfCurrent(d.user),await l._setRedirectUser(null,t)),d}async function d_(i){const t=Gs(`${i.uid}:::`);return i._redirectEventId=t,await i.auth._setRedirectUser(i),await i.auth._persistUserIfCurrent(i),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC=10*60*1e3;class h_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let r=!1;return this.consumers.forEach(l=>{this.isEventForConsumer(t,l)&&(r=!0,this.sendToConsumer(t,l),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!AC(t)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=t,r=!0)),r}sendToConsumer(t,r){var l;if(t.error&&!p_(t)){const o=((l=t.error.code)===null||l===void 0?void 0:l.split("auth/")[1])||"internal-error";r.onError($e(this.auth,o))}else r.onAuthEvent(t)}isEventForConsumer(t,r){const l=r.eventId===null||!!t.eventId&&t.eventId===r.eventId;return r.filter.includes(t.type)&&l}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=RC&&this.cachedEventUids.clear(),this.cachedEventUids.has(yv(t))}saveEventToCache(t){this.cachedEventUids.add(yv(t)),this.lastProcessedEventTime=Date.now()}}function yv(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(t=>t).join("-")}function p_({type:i,error:t}){return i==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function AC(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return p_(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m_(i,t={}){return He(i,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OC=/^https?/;async function IC(i){if(i.config.emulator)return;const{authorizedDomains:t}=await m_(i);for(const r of t)try{if(NC(r))return}catch{}rt(i,"unauthorized-domain")}function NC(i){const t=Us(),{protocol:r,hostname:l}=new URL(t);if(i.startsWith("chrome-extension://")){const d=new URL(i);return d.hostname===""&&l===""?r==="chrome-extension:"&&i.replace("chrome-extension://","")===t.replace("chrome-extension://",""):r==="chrome-extension:"&&d.hostname===l}if(!OC.test(r))return!1;if(CC.test(i))return l===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(l)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC=new Hs(3e4,6e4);function _v(){const i=Ge().___jsl;if(i!=null&&i.H){for(const t of Object.keys(i.H))if(i.H[t].r=i.H[t].r||[],i.H[t].L=i.H[t].L||[],i.H[t].r=[...i.H[t].L],i.CP)for(let r=0;r<i.CP.length;r++)i.CP[r]=null}}function kC(i){return new Promise((t,r)=>{var l,o,f;function d(){_v(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{_v(),r($e(i,"network-request-failed"))},timeout:DC.get()})}if(!((o=(l=Ge().gapi)===null||l===void 0?void 0:l.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((f=Ge().gapi)===null||f===void 0)&&f.load)d();else{const m=Vy("iframefcb");return Ge()[m]=()=>{gapi.load?d():r($e(i,"network-request-failed"))},gd(`${AR()}?onload=${m}`).catch(h=>r(h))}}).catch(t=>{throw vo=null,t})}let vo=null;function UC(i){return vo=vo||kC(i),vo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC=new Hs(5e3,15e3),xC="__/auth/iframe",LC="emulator/auth/iframe",PC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HC(i){const t=i.config;V(t.authDomain,i,"auth-domain-config-required");const r=t.emulator?md(t,LC):`https://${i.config.authDomain}/${xC}`,l={apiKey:t.apiKey,appName:i.name,v:Ri},o=zC.get(i.config.apiHost);o&&(l.eid=o);const f=i._getFrameworks();return f.length&&(l.fw=f.join(",")),`${r}?${lr(l).slice(1)}`}async function BC(i){const t=await UC(i),r=Ge().gapi;return V(r,i,"internal-error"),t.open({where:document.body,url:HC(i),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PC,dontclear:!0},l=>new Promise(async(o,f)=>{await l.restyle({setHideOnLeave:!1});const d=$e(i,"network-request-failed"),m=Ge().setTimeout(()=>{f(d)},MC.get());function h(){Ge().clearTimeout(m),o(l)}l.ping(h).then(h,()=>{f(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qC=500,VC=600,GC="_blank",YC="http://localhost";class bv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FC(i,t,r,l=qC,o=VC){const f=Math.max((window.screen.availHeight-o)/2,0).toString(),d=Math.max((window.screen.availWidth-l)/2,0).toString();let m="";const h=Object.assign(Object.assign({},jC),{width:l.toString(),height:o.toString(),top:f,left:d}),g=Ke().toLowerCase();r&&(m=Py(g)?GC:r),xy(g)&&(t=t||YC,h.scrollbars="yes");const y=Object.entries(h).reduce((S,[D,C])=>`${S}${D}=${C},`,"");if(gR(g)&&m!=="_self")return XC(t||"",m),new bv(null);const b=window.open(t||"",m,y);V(b,i,"popup-blocked");try{b.focus()}catch{}return new bv(b)}function XC(i,t){const r=document.createElement("a");r.href=i,r.target=t;const l=document.createEvent("MouseEvent");l.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(l)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C="__/auth/handler",KC="emulator/auth/handler",QC=encodeURIComponent("fac");async function Bf(i,t,r,l,o,f){V(i.config.authDomain,i,"auth-domain-config-required"),V(i.config.apiKey,i,"invalid-api-key");const d={apiKey:i.config.apiKey,appName:i.name,authType:r,redirectUrl:l,v:Ri,eventId:o};if(t instanceof Fn){t.setDefaultLanguage(i.languageCode),d.providerId=t.providerId||"",SS(t.getCustomParameters())||(d.customParameters=JSON.stringify(t.getCustomParameters()));for(const[y,b]of Object.entries(f||{}))d[y]=b}if(t instanceof cr){const y=t.getScopes().filter(b=>b!=="");y.length>0&&(d.scopes=y.join(","))}i.tenantId&&(d.tid=i.tenantId);const m=d;for(const y of Object.keys(m))m[y]===void 0&&delete m[y];const h=await i._getAppCheckToken(),g=h?`#${QC}=${encodeURIComponent(h)}`:"";return`${WC(i)}?${lr(m).slice(1)}${g}`}function WC({config:i}){return i.emulator?md(i,KC):`https://${i.authDomain}/${$C}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="webStorageSupport";class ZC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zi,this._completeRedirectFn=Go,this._overrideRedirectResult=Od}async _openPopup(t,r,l,o){var f;en((f=this.eventManagers[t._key()])===null||f===void 0?void 0:f.manager,"_initialize() not called before _openPopup()");const d=await Bf(t,r,l,Us(),o);return FC(t,d,Gs())}async _openRedirect(t,r,l,o){await this._originValidation(t);const f=await Bf(t,r,l,Us(),o);return BA(f),new Promise(()=>{})}_initialize(t){const r=t._key();if(this.eventManagers[r]){const{manager:o,promise:f}=this.eventManagers[r];return o?Promise.resolve(o):(en(f,"If manager is not set, promise should be"),f)}const l=this.initAndGetManager(t);return this.eventManagers[r]={promise:l},l.catch(()=>{delete this.eventManagers[r]}),l}async initAndGetManager(t){const r=await BC(t),l=new h_(t);return r.register("authEvent",o=>(V(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:l.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:l},this.iframes[t._key()]=r,l}_isIframeWebStorageSupported(t,r){this.iframes[t._key()].send(Of,{type:Of},o=>{var f;const d=(f=o==null?void 0:o[0])===null||f===void 0?void 0:f[Of];d!==void 0&&r(!!d),rt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const r=t._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=IC(t)),this.originValidationPromises[r]}get _shouldInitProactively(){return jy()||Ly()||js()}}const JC=ZC;class eO{constructor(t){this.factorId=t}_process(t,r,l){switch(r.type){case"enroll":return this._finalizeEnroll(t,r.credential,l);case"signin":return this._finalizeSignIn(t,r.credential);default:return mn("unexpected MultiFactorSessionType")}}}class Id extends eO{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new Id(t)}_finalizeEnroll(t,r,l){return UA(t,{idToken:r,displayName:l,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,r){return KA(t,{mfaPendingCredential:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class g_{constructor(){}static assertion(t){return Id._fromCredential(t)}}g_.FACTOR_ID="phone";var Ev="@firebase/auth",Tv="1.10.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const r=this.auth.onIdTokenChanged(l=>{t((l==null?void 0:l.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,r),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const r=this.internalListeners.get(t);r&&(this.internalListeners.delete(t),r(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nO(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iO(i){qn(new Xt("auth",(t,{options:r})=>{const l=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),f=t.getProvider("app-check-internal"),{apiKey:d,authDomain:m}=l.options;V(d&&!d.includes(":"),"invalid-api-key",{appName:l.name});const h={apiKey:d,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qy(i)},g=new TR(l,o,f,h);return LR(g,r),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,r,l)=>{t.getProvider("auth-internal").initialize()})),qn(new Xt("auth-internal",t=>{const r=Me(t.getProvider("auth").getImmediate());return(l=>new tO(l))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(Ev,Tv,nO(i)),xt(Ev,Tv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aO=5*60;hS("authIdTokenMaxAge");function rO(){var i,t;return(t=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&t!==void 0?t:document}SR({loadJS(i){return new Promise((t,r)=>{const l=document.createElement("script");l.setAttribute("src",i),l.onload=t,l.onerror=o=>{const f=$e("internal-error");f.customData=o,r(f)},l.type="text/javascript",l.charset="UTF-8",rO().appendChild(l)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iO("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sO=2e3;async function lO(i,t,r){var l;const{BuildInfo:o}=ea();en(t.sessionId,"AuthEvent did not contain a session ID");const f=await dO(t.sessionId),d={};return js()?d.ibi=o.packageName:Bs()?d.apn=o.packageName:rt(i,"operation-not-supported-in-this-environment"),o.displayName&&(d.appDisplayName=o.displayName),d.sessionId=f,Bf(i,r,t.type,void 0,(l=t.eventId)!==null&&l!==void 0?l:void 0,d)}async function oO(i){const{BuildInfo:t}=ea(),r={};js()?r.iosBundleId=t.packageName:Bs()?r.androidPackageName=t.packageName:rt(i,"operation-not-supported-in-this-environment"),await m_(i,r)}function uO(i){const{cordova:t}=ea();return new Promise(r=>{t.plugins.browsertab.isAvailable(l=>{let o=null;l?t.plugins.browsertab.openUrl(i):o=t.InAppBrowser.open(i,mR()?"_blank":"_system","location=yes"),r(o)})})}async function cO(i,t,r){const{cordova:l}=ea();let o=()=>{};try{await new Promise((f,d)=>{let m=null;function h(){var b;f();const S=(b=l.plugins.browsertab)===null||b===void 0?void 0:b.close;typeof S=="function"&&S(),typeof(r==null?void 0:r.close)=="function"&&r.close()}function g(){m||(m=window.setTimeout(()=>{d($e(i,"redirect-cancelled-by-user"))},sO))}function y(){(document==null?void 0:document.visibilityState)==="visible"&&g()}t.addPassiveListener(h),document.addEventListener("resume",g,!1),Bs()&&document.addEventListener("visibilitychange",y,!1),o=()=>{t.removePassiveListener(h),document.removeEventListener("resume",g,!1),document.removeEventListener("visibilitychange",y,!1),m&&window.clearTimeout(m)}})}finally{o()}}function fO(i){var t,r,l,o,f,d,m,h,g,y;const b=ea();V(typeof((t=b==null?void 0:b.universalLinks)===null||t===void 0?void 0:t.subscribe)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),V(typeof((r=b==null?void 0:b.BuildInfo)===null||r===void 0?void 0:r.packageName)<"u",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),V(typeof((f=(o=(l=b==null?void 0:b.cordova)===null||l===void 0?void 0:l.plugins)===null||o===void 0?void 0:o.browsertab)===null||f===void 0?void 0:f.openUrl)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),V(typeof((h=(m=(d=b==null?void 0:b.cordova)===null||d===void 0?void 0:d.plugins)===null||m===void 0?void 0:m.browsertab)===null||h===void 0?void 0:h.isAvailable)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),V(typeof((y=(g=b==null?void 0:b.cordova)===null||g===void 0?void 0:g.InAppBrowser)===null||y===void 0?void 0:y.open)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function dO(i){const t=hO(i),r=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(r)).map(o=>o.toString(16).padStart(2,"0")).join("")}function hO(i){if(en(/[0-9a-zA-Z]+/.test(i),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(i);const t=new ArrayBuffer(i.length),r=new Uint8Array(t);for(let l=0;l<i.length;l++)r[l]=i.charCodeAt(l);return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO=20;class mO extends h_{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(t=>{this.resolveInitialized=t})}addPassiveListener(t){this.passiveListeners.add(t)}removePassiveListener(t){this.passiveListeners.delete(t)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(t){return this.resolveInitialized(),this.passiveListeners.forEach(r=>r(t)),super.onEvent(t)}async initialized(){await this.initPromise}}function gO(i,t,r=null){return{type:t,eventId:r,urlResponse:null,sessionId:_O(),postBody:null,tenantId:i.tenantId,error:$e(i,"no-auth-event")}}function vO(i,t){return jf()._set(qf(i),t)}async function Sv(i){const t=await jf()._get(qf(i));return t&&await jf()._remove(qf(i)),t}function yO(i,t){var r,l;const o=EO(t);if(o.includes("/__/auth/callback")){const f=yo(o),d=f.firebaseError?bO(decodeURIComponent(f.firebaseError)):null,m=(l=(r=d==null?void 0:d.code)===null||r===void 0?void 0:r.split("auth/"))===null||l===void 0?void 0:l[1],h=m?$e(m):null;return h?{type:i.type,eventId:i.eventId,tenantId:i.tenantId,error:h,urlResponse:null,sessionId:null,postBody:null}:{type:i.type,eventId:i.eventId,tenantId:i.tenantId,sessionId:i.sessionId,urlResponse:o,postBody:null}}return null}function _O(){const i=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<pO;r++){const l=Math.floor(Math.random()*t.length);i.push(t.charAt(l))}return i.join("")}function jf(){return Mt(Sd)}function qf(i){return Ki("authEvent",i.config.apiKey,i.name)}function bO(i){try{return JSON.parse(i)}catch{return null}}function EO(i){const t=yo(i),r=t.link?decodeURIComponent(t.link):void 0,l=yo(r).link,o=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return yo(o).link||o||l||r||i}function yo(i){if(!(i!=null&&i.includes("?")))return{};const[t,...r]=i.split("?");return Ya(r.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO=500;class SO{constructor(){this._redirectPersistence=Zi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Go,this._overrideRedirectResult=Od}async _initialize(t){const r=t._key();let l=this.eventManagers.get(r);return l||(l=new mO(t),this.eventManagers.set(r,l),this.attachCallbackListeners(t,l)),l}_openPopup(t){rt(t,"operation-not-supported-in-this-environment")}async _openRedirect(t,r,l,o){fO(t);const f=await this._initialize(t);await f.initialized(),f.resetRedirect(),vC(),await this._originValidation(t);const d=gO(t,l,o);await vO(t,d);const m=await lO(t,d,r),h=await uO(m);return cO(t,f,h)}_isIframeWebStorageSupported(t,r){throw new Error("Method not implemented.")}_originValidation(t){const r=t._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=oO(t)),this.originValidationPromises[r]}attachCallbackListeners(t,r){const{universalLinks:l,handleOpenURL:o,BuildInfo:f}=ea(),d=setTimeout(async()=>{await Sv(t),r.onEvent(wv())},TO),m=async y=>{clearTimeout(d);const b=await Sv(t);let S=null;b&&(y!=null&&y.url)&&(S=yO(b,y.url)),r.onEvent(S||wv())};typeof l<"u"&&typeof l.subscribe=="function"&&l.subscribe(null,m);const h=o,g=`${f.packageName.toLowerCase()}://`;ea().handleOpenURL=async y=>{if(y.toLowerCase().startsWith(g)&&m({url:y}),typeof h=="function")try{h(y)}catch(b){console.error(b)}}}}const wO=SO;function wv(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:$e("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RO(i,t){Me(i)._logFramework(t)}var AO="@firebase/auth-compat",CO="0.5.21";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO=1e3;function As(){var i;return((i=self==null?void 0:self.location)===null||i===void 0?void 0:i.protocol)||null}function IO(){return As()==="http:"||As()==="https:"}function v_(i=Ke()){return!!((As()==="file:"||As()==="ionic:"||As()==="capacitor:")&&i.toLowerCase().match(/iphone|ipad|ipod|android/))}function NO(){return rd()||oy()}function DO(){return fy()&&(document==null?void 0:document.documentMode)===11}function kO(i=Ke()){return/Edge\/\d+/.test(i)}function UO(i=Ke()){return DO()||kO(i)}function y_(){try{const i=self.localStorage,t=Gs();if(i)return i.setItem(t,"1"),i.removeItem(t),UO()?To():!0}catch{return Nd()&&To()}return!1}function Nd(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function If(){return(IO()||cy()||v_())&&!NO()&&y_()&&!Nd()}function __(){return v_()&&typeof document<"u"}async function MO(){return __()?new Promise(i=>{const t=setTimeout(()=>{i(!1)},OO);document.addEventListener("deviceready",()=>{clearTimeout(t),i(!0)})}):!1}function xO(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut={LOCAL:"local",NONE:"none",SESSION:"session"},gs=V,b_="persistence";function LO(i,t){if(gs(Object.values(Ut).includes(t),i,"invalid-persistence-type"),rd()){gs(t!==Ut.SESSION,i,"unsupported-persistence-type");return}if(oy()){gs(t===Ut.NONE,i,"unsupported-persistence-type");return}if(Nd()){gs(t===Ut.NONE||t===Ut.LOCAL&&To(),i,"unsupported-persistence-type");return}gs(t===Ut.NONE||y_(),i,"unsupported-persistence-type")}async function Vf(i){await i._initializationPromise;const t=E_(),r=Ki(b_,i.config.apiKey,i.name);t&&t.setItem(r,i._getPersistenceType())}function PO(i,t){const r=E_();if(!r)return[];const l=Ki(b_,i,t);switch(r.getItem(l)){case Ut.NONE:return[er];case Ut.LOCAL:return[Ls,Zi];case Ut.SESSION:return[Zi];default:return[]}}function E_(){var i;try{return((i=xO())===null||i===void 0?void 0:i.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO=V;class bi{constructor(){this.browserResolver=Mt(JC),this.cordovaResolver=Mt(wO),this.underlyingResolver=null,this._redirectPersistence=Zi,this._completeRedirectFn=Go,this._overrideRedirectResult=Od}async _initialize(t){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(t)}async _openPopup(t,r,l,o){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(t,r,l,o)}async _openRedirect(t,r,l,o){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(t,r,l,o)}_isIframeWebStorageSupported(t,r){this.assertedUnderlyingResolver._isIframeWebStorageSupported(t,r)}_originValidation(t){return this.assertedUnderlyingResolver._originValidation(t)}get _shouldInitProactively(){return __()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return zO(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const t=await MO();this.underlyingResolver=t?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(i){return i.unwrap()}function HO(i){return i.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BO(i){return S_(i)}function jO(i,t){var r;const l=(r=t.customData)===null||r===void 0?void 0:r._tokenResponse;if((t==null?void 0:t.code)==="auth/multi-factor-auth-required"){const o=t;o.resolver=new qO(i,kA(i,t))}else if(l){const o=S_(t),f=t;o&&(f.credential=o,f.tenantId=l.tenantId||void 0,f.email=l.email||void 0,f.phoneNumber=l.phoneNumber||void 0)}}function S_(i){const{_tokenResponse:t}=i instanceof et?i.customData:i;if(!t)return null;if(!(i instanceof et)&&"temporaryProof"in t&&"phoneNumber"in t)return Ji.credentialFromResult(i);const r=t.providerId;if(!r||r===ps.PASSWORD)return null;let l;switch(r){case ps.GOOGLE:l=fn;break;case ps.FACEBOOK:l=cn;break;case ps.GITHUB:l=dn;break;case ps.TWITTER:l=hn;break;default:const{oauthIdToken:o,oauthAccessToken:f,oauthTokenSecret:d,pendingToken:m,nonce:h}=t;return!f&&!d&&!o&&!m?null:m?r.startsWith("saml.")?tr._create(r,m):vn._fromParams({providerId:r,signInMethod:r,pendingToken:m,idToken:o,accessToken:f}):new Ka(r).credential({idToken:o,accessToken:f,rawNonce:h})}return i instanceof et?l.credentialFromError(i):l.credentialFromResult(i)}function Et(i,t){return t.catch(r=>{throw r instanceof et&&jO(i,r),r}).then(r=>{const l=r.operationType,o=r.user;return{operationType:l,credential:BO(r),additionalUserInfo:DA(r),user:Ln.getOrCreate(o)}})}async function Gf(i,t){const r=await t;return{verificationId:r.verificationId,confirm:l=>Et(i,r.confirm(l))}}class qO{constructor(t,r){this.resolver=r,this.auth=HO(t)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(t){return Et(T_(this.auth),this.resolver.resolveSignIn(t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(t){this._delegate=t,this.multiFactor=xA(t)}static getOrCreate(t){return Ln.USER_MAP.has(t)||Ln.USER_MAP.set(t,new Ln(t)),Ln.USER_MAP.get(t)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(t){return this._delegate.getIdTokenResult(t)}getIdToken(t){return this._delegate.getIdToken(t)}linkAndRetrieveDataWithCredential(t){return this.linkWithCredential(t)}async linkWithCredential(t){return Et(this.auth,Zy(this._delegate,t))}async linkWithPhoneNumber(t,r){return Gf(this.auth,aC(this._delegate,t,r))}async linkWithPopup(t){return Et(this.auth,hC(this._delegate,t,bi))}async linkWithRedirect(t){return await Vf(Me(this.auth)),TC(this._delegate,t,bi)}reauthenticateAndRetrieveDataWithCredential(t){return this.reauthenticateWithCredential(t)}async reauthenticateWithCredential(t){return Et(this.auth,Jy(this._delegate,t))}reauthenticateWithPhoneNumber(t,r){return Gf(this.auth,rC(this._delegate,t,r))}reauthenticateWithPopup(t){return Et(this.auth,dC(this._delegate,t,bi))}async reauthenticateWithRedirect(t){return await Vf(Me(this.auth)),bC(this._delegate,t,bi)}sendEmailVerification(t){return bA(this._delegate,t)}async unlink(t){return await sA(this._delegate,t),this}updateEmail(t){return wA(this._delegate,t)}updatePassword(t){return RA(this._delegate,t)}updatePhoneNumber(t){return sC(this._delegate,t)}updateProfile(t){return SA(this._delegate,t)}verifyBeforeUpdateEmail(t,r){return EA(this._delegate,t,r)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Ln.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=V;class Yf{constructor(t,r){if(this.app=t,r.isInitialized()){this._delegate=r.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:l}=t.options;vs(l,"invalid-api-key",{appName:t.name}),vs(l,"invalid-api-key",{appName:t.name});const o=typeof window<"u"?bi:void 0;this._delegate=r.initialize({options:{persistence:VO(l,t.name),popupRedirectResolver:o}}),this._delegate._updateErrorMap(Kw),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Ln.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(t){this._delegate.languageCode=t}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(t){this._delegate.tenantId=t}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(t,r){PR(this._delegate,t,r)}applyActionCode(t){return fA(this._delegate,t)}checkActionCode(t){return e_(this._delegate,t)}confirmPasswordReset(t,r){return cA(this._delegate,t,r)}async createUserWithEmailAndPassword(t,r){return Et(this._delegate,hA(this._delegate,t,r))}fetchProvidersForEmail(t){return this.fetchSignInMethodsForEmail(t)}fetchSignInMethodsForEmail(t){return _A(this._delegate,t)}isSignInWithEmailLink(t){return gA(this._delegate,t)}async getRedirectResult(){vs(If(),this._delegate,"operation-not-supported-in-this-environment");const t=await wC(this._delegate,bi);return t?Et(this._delegate,Promise.resolve(t)):{credential:null,user:null}}addFrameworkForLogging(t){RO(this._delegate,t)}onAuthStateChanged(t,r,l){const{next:o,error:f,complete:d}=Rv(t,r,l);return this._delegate.onAuthStateChanged(o,f,d)}onIdTokenChanged(t,r,l){const{next:o,error:f,complete:d}=Rv(t,r,l);return this._delegate.onIdTokenChanged(o,f,d)}sendSignInLinkToEmail(t,r){return mA(this._delegate,t,r)}sendPasswordResetEmail(t,r){return uA(this._delegate,t,r||void 0)}async setPersistence(t){LO(this._delegate,t);let r;switch(t){case Ut.SESSION:r=Zi;break;case Ut.LOCAL:r=await Mt(Ls)._isAvailable()?Ls:Sd;break;case Ut.NONE:r=er;break;default:return rt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(r)}signInAndRetrieveDataWithCredential(t){return this.signInWithCredential(t)}signInAnonymously(){return Et(this._delegate,rA(this._delegate))}signInWithCredential(t){return Et(this._delegate,Ho(this._delegate,t))}signInWithCustomToken(t){return Et(this._delegate,oA(this._delegate,t))}signInWithEmailAndPassword(t,r){return Et(this._delegate,pA(this._delegate,t,r))}signInWithEmailLink(t,r){return Et(this._delegate,vA(this._delegate,t,r))}signInWithPhoneNumber(t,r){return Gf(this._delegate,iC(this._delegate,t,r))}async signInWithPopup(t){return vs(If(),this._delegate,"operation-not-supported-in-this-environment"),Et(this._delegate,fC(this._delegate,t,bi))}async signInWithRedirect(t){return vs(If(),this._delegate,"operation-not-supported-in-this-environment"),await Vf(this._delegate),yC(this._delegate,t,bi)}updateCurrentUser(t){return this._delegate.updateCurrentUser(t)}verifyPasswordResetCode(t){return dA(this._delegate,t)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Yf.Persistence=Ut;function Rv(i,t,r){let l=i;typeof i!="function"&&({next:l,error:t,complete:r}=i);const o=l;return{next:d=>o(d&&Ln.getOrCreate(d)),error:t,complete:r}}function VO(i,t){const r=PO(i,t);if(typeof self<"u"&&!r.includes(Ls)&&r.push(Ls),typeof window<"u")for(const l of[Sd,Zi])r.includes(l)||r.push(l);return r.includes(er)||r.push(er),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{static credential(t,r){return Ji.credential(t,r)}constructor(){this.providerId="phone",this._delegate=new Ji(T_(pt.auth()))}verifyPhoneNumber(t,r){return this._delegate.verifyPhoneNumber(t,r)}unwrap(){return this._delegate}}Dd.PHONE_SIGN_IN_METHOD=Ji.PHONE_SIGN_IN_METHOD;Dd.PROVIDER_ID=Ji.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO=V;class YO{constructor(t,r,l=pt.app()){var o;GO((o=l.options)===null||o===void 0?void 0:o.apiKey,"invalid-api-key",{appName:l.name}),this._delegate=new tC(l.auth(),t,r),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO="auth-compat";function XO(i){i.INTERNAL.registerComponent(new Xt(FO,t=>{const r=t.getProvider("app-compat").getImmediate(),l=t.getProvider("auth");return new Yf(r,l)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Va.EMAIL_SIGNIN,PASSWORD_RESET:Va.PASSWORD_RESET,RECOVER_EMAIL:Va.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Va.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Va.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Va.VERIFY_EMAIL}},EmailAuthProvider:Ai,FacebookAuthProvider:cn,GithubAuthProvider:dn,GoogleAuthProvider:fn,OAuthProvider:Ka,SAMLAuthProvider:Ao,PhoneAuthProvider:Dd,PhoneMultiFactorGenerator:g_,RecaptchaVerifier:YO,TwitterAuthProvider:hn,Auth:Yf,AuthCredential:ur,Error:et}).setInstantiationMode("LAZY").setMultipleInstances(!1)),i.registerVersion(AO,CO)}XO(pt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_="firebasestorage.googleapis.com",R_="storageBucket",$O=2*60*1e3,KO=10*60*1e3,QO=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends et{constructor(t,r,l=0){super(Nf(t),`Firebase Storage: ${r} (${Nf(t)})`),this.status_=l,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,xe.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Nf(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Oe;(function(i){i.UNKNOWN="unknown",i.OBJECT_NOT_FOUND="object-not-found",i.BUCKET_NOT_FOUND="bucket-not-found",i.PROJECT_NOT_FOUND="project-not-found",i.QUOTA_EXCEEDED="quota-exceeded",i.UNAUTHENTICATED="unauthenticated",i.UNAUTHORIZED="unauthorized",i.UNAUTHORIZED_APP="unauthorized-app",i.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",i.INVALID_CHECKSUM="invalid-checksum",i.CANCELED="canceled",i.INVALID_EVENT_NAME="invalid-event-name",i.INVALID_URL="invalid-url",i.INVALID_DEFAULT_BUCKET="invalid-default-bucket",i.NO_DEFAULT_BUCKET="no-default-bucket",i.CANNOT_SLICE_BLOB="cannot-slice-blob",i.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",i.NO_DOWNLOAD_URL="no-download-url",i.INVALID_ARGUMENT="invalid-argument",i.INVALID_ARGUMENT_COUNT="invalid-argument-count",i.APP_DELETED="app-deleted",i.INVALID_ROOT_OPERATION="invalid-root-operation",i.INVALID_FORMAT="invalid-format",i.INTERNAL_ERROR="internal-error",i.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Oe||(Oe={}));function Nf(i){return"storage/"+i}function kd(){const i="An unknown error occurred, please check the error payload for server response.";return new xe(Oe.UNKNOWN,i)}function WO(i){return new xe(Oe.OBJECT_NOT_FOUND,"Object '"+i+"' does not exist.")}function ZO(i){return new xe(Oe.QUOTA_EXCEEDED,"Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function JO(){const i="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new xe(Oe.UNAUTHENTICATED,i)}function e1(){return new xe(Oe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function t1(i){return new xe(Oe.UNAUTHORIZED,"User does not have permission to access '"+i+"'.")}function A_(){return new xe(Oe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function C_(){return new xe(Oe.CANCELED,"User canceled the upload/download.")}function n1(i){return new xe(Oe.INVALID_URL,"Invalid URL '"+i+"'.")}function i1(i){return new xe(Oe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+i+"'.")}function a1(){return new xe(Oe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+R_+"' property when initializing the app?")}function O_(){return new xe(Oe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function r1(){return new xe(Oe.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function s1(){return new xe(Oe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function l1(i){return new xe(Oe.UNSUPPORTED_ENVIRONMENT,`${i} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Wa(i){return new xe(Oe.INVALID_ARGUMENT,i)}function I_(){return new xe(Oe.APP_DELETED,"The Firebase app was deleted.")}function N_(i){return new xe(Oe.INVALID_ROOT_OPERATION,"The operation '"+i+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Cs(i,t){return new xe(Oe.INVALID_FORMAT,"String does not match format '"+i+"': "+t)}function ys(i){throw new xe(Oe.INTERNAL_ERROR,"Internal error: "+i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t,r){this.bucket=t,this.path_=r}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,r){let l;try{l=ct.makeFromUrl(t,r)}catch{return new ct(t,"")}if(l.path==="")return l;throw i1(t)}static makeFromUrl(t,r){let l=null;const o="([A-Za-z0-9.\\-_]+)";function f(G){G.path.charAt(G.path.length-1)==="/"&&(G.path_=G.path_.slice(0,-1))}const d="(/(.*))?$",m=new RegExp("^gs://"+o+d,"i"),h={bucket:1,path:3};function g(G){G.path_=decodeURIComponent(G.path)}const y="v[A-Za-z0-9_]+",b=r.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",D=new RegExp(`^https?://${b}/${y}/b/${o}/o${S}`,"i"),C={bucket:1,path:3},q=r===w_?"(?:storage.googleapis.com|storage.cloud.google.com)":r,M="([^?#]*)",H=new RegExp(`^https?://${q}/${o}/${M}`,"i"),L=[{regex:m,indices:h,postModify:f},{regex:D,indices:C,postModify:g},{regex:H,indices:{bucket:1,path:2},postModify:g}];for(let G=0;G<L.length;G++){const j=L[G],se=j.regex.exec(t);if(se){const pe=se[j.indices.bucket];let me=se[j.indices.path];me||(me=""),l=new ct(pe,me),j.postModify(l);break}}if(l==null)throw n1(t);return l}}class o1{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(i,t,r){let l=1,o=null,f=null,d=!1,m=0;function h(){return m===2}let g=!1;function y(...M){g||(g=!0,t.apply(null,M))}function b(M){o=setTimeout(()=>{o=null,i(D,h())},M)}function S(){f&&clearTimeout(f)}function D(M,...H){if(g){S();return}if(M){S(),y.call(null,M,...H);return}if(h()||d){S(),y.call(null,M,...H);return}l<64&&(l*=2);let L;m===1?(m=2,L=0):L=(l+Math.random())*1e3,b(L)}let C=!1;function q(M){C||(C=!0,S(),!g&&(o!==null?(M||(m=2),clearTimeout(o),b(0)):M||(m=1)))}return b(0),f=setTimeout(()=>{d=!0,q(!0)},r),q}function c1(i){i(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(i){return i!==void 0}function d1(i){return typeof i=="function"}function h1(i){return typeof i=="object"&&!Array.isArray(i)}function Yo(i){return typeof i=="string"||i instanceof String}function Av(i){return Ud()&&i instanceof Blob}function Ud(){return typeof Blob<"u"}function Ff(i,t,r,l){if(l<t)throw Wa(`Invalid value for '${i}'. Expected ${t} or greater.`);if(l>r)throw Wa(`Invalid value for '${i}'. Expected ${r} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(i,t,r){let l=t;return r==null&&(l=`https://${t}`),`${r}://${l}/v0${i}`}function D_(i){const t=encodeURIComponent;let r="?";for(const l in i)if(i.hasOwnProperty(l)){const o=t(l)+"="+t(i[l]);r=r+o+"&"}return r=r.slice(0,-1),r}var Wi;(function(i){i[i.NO_ERROR=0]="NO_ERROR",i[i.NETWORK_ERROR=1]="NETWORK_ERROR",i[i.ABORT=2]="ABORT"})(Wi||(Wi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(i,t){const r=i>=500&&i<600,o=[408,429].indexOf(i)!==-1,f=t.indexOf(i)!==-1;return r||o||f}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(t,r,l,o,f,d,m,h,g,y,b,S=!0){this.url_=t,this.method_=r,this.headers_=l,this.body_=o,this.successCodes_=f,this.additionalRetryCodes_=d,this.callback_=m,this.errorCallback_=h,this.timeout_=g,this.progressCallback_=y,this.connectionFactory_=b,this.retry=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((D,C)=>{this.resolve_=D,this.reject_=C,this.start_()})}start_(){const t=(l,o)=>{if(o){l(!1,new uo(!1,null,!0));return}const f=this.connectionFactory_();this.pendingConnection_=f;const d=m=>{const h=m.loaded,g=m.lengthComputable?m.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,g)};this.progressCallback_!==null&&f.addUploadProgressListener(d),f.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&f.removeUploadProgressListener(d),this.pendingConnection_=null;const m=f.getErrorCode()===Wi.NO_ERROR,h=f.getStatus();if(!m||k_(h,this.additionalRetryCodes_)&&this.retry){const y=f.getErrorCode()===Wi.ABORT;l(!1,new uo(!1,null,y));return}const g=this.successCodes_.indexOf(h)!==-1;l(!0,new uo(g,f))})},r=(l,o)=>{const f=this.resolve_,d=this.reject_,m=o.connection;if(o.wasSuccessCode)try{const h=this.callback_(m,m.getResponse());f1(h)?f(h):f()}catch(h){d(h)}else if(m!==null){const h=kd();h.serverResponse=m.getErrorText(),this.errorCallback_?d(this.errorCallback_(m,h)):d(h)}else if(o.canceled){const h=this.appDelete_?I_():C_();d(h)}else{const h=A_();d(h)}};this.canceled_?r(!1,new uo(!1,null,!0)):this.backoffId_=u1(t,r,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&c1(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class uo{constructor(t,r,l){this.wasSuccessCode=t,this.connection=r,this.canceled=!!l}}function m1(i,t){t!==null&&t.length>0&&(i.Authorization="Firebase "+t)}function g1(i,t){i["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function v1(i,t){t&&(i["X-Firebase-GMPID"]=t)}function y1(i,t){t!==null&&(i["X-Firebase-AppCheck"]=t)}function _1(i,t,r,l,o,f,d=!0){const m=D_(i.urlParams),h=i.url+m,g=Object.assign({},i.headers);return v1(g,t),m1(g,r),g1(g,f),y1(g,l),new p1(h,i.method,g,i.body,i.successCodes,i.additionalRetryCodes,i.handler,i.errorHandler,i.timeout,i.progressCallback,o,d)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function E1(...i){const t=b1();if(t!==void 0){const r=new t;for(let l=0;l<i.length;l++)r.append(i[l]);return r.getBlob()}else{if(Ud())return new Blob(i);throw new xe(Oe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function T1(i,t,r){return i.webkitSlice?i.webkitSlice(t,r):i.mozSlice?i.mozSlice(t,r):i.slice?i.slice(t,r):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(i){if(typeof atob>"u")throw l1("base-64");return atob(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Df{constructor(t,r){this.data=t,this.contentType=r||null}}function U_(i,t){switch(i){case Yt.RAW:return new Df(M_(t));case Yt.BASE64:case Yt.BASE64URL:return new Df(x_(i,t));case Yt.DATA_URL:return new Df(R1(t),A1(t))}throw kd()}function M_(i){const t=[];for(let r=0;r<i.length;r++){let l=i.charCodeAt(r);if(l<=127)t.push(l);else if(l<=2047)t.push(192|l>>6,128|l&63);else if((l&64512)===55296)if(!(r<i.length-1&&(i.charCodeAt(r+1)&64512)===56320))t.push(239,191,189);else{const f=l,d=i.charCodeAt(++r);l=65536|(f&1023)<<10|d&1023,t.push(240|l>>18,128|l>>12&63,128|l>>6&63,128|l&63)}else(l&64512)===56320?t.push(239,191,189):t.push(224|l>>12,128|l>>6&63,128|l&63)}return new Uint8Array(t)}function w1(i){let t;try{t=decodeURIComponent(i)}catch{throw Cs(Yt.DATA_URL,"Malformed data URL.")}return M_(t)}function x_(i,t){switch(i){case Yt.BASE64:{const o=t.indexOf("-")!==-1,f=t.indexOf("_")!==-1;if(o||f)throw Cs(i,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case Yt.BASE64URL:{const o=t.indexOf("+")!==-1,f=t.indexOf("/")!==-1;if(o||f)throw Cs(i,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let r;try{r=S1(t)}catch(o){throw o.message.includes("polyfill")?o:Cs(i,"Invalid character found")}const l=new Uint8Array(r.length);for(let o=0;o<r.length;o++)l[o]=r.charCodeAt(o);return l}class L_{constructor(t){this.base64=!1,this.contentType=null;const r=t.match(/^data:([^,]+)?,/);if(r===null)throw Cs(Yt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const l=r[1]||null;l!=null&&(this.base64=C1(l,";base64"),this.contentType=this.base64?l.substring(0,l.length-7):l),this.rest=t.substring(t.indexOf(",")+1)}}function R1(i){const t=new L_(i);return t.base64?x_(Yt.BASE64,t.rest):w1(t.rest)}function A1(i){return new L_(i).contentType}function C1(i,t){return i.length>=t.length?i.substring(i.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t,r){let l=0,o="";Av(t)?(this.data_=t,l=t.size,o=t.type):t instanceof ArrayBuffer?(r?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),l=this.data_.length):t instanceof Uint8Array&&(r?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),l=t.length),this.size_=l,this.type_=o}size(){return this.size_}type(){return this.type_}slice(t,r){if(Av(this.data_)){const l=this.data_,o=T1(l,t,r);return o===null?null:new Mn(o)}else{const l=new Uint8Array(this.data_.buffer,t,r-t);return new Mn(l,!0)}}static getBlob(...t){if(Ud()){const r=t.map(l=>l instanceof Mn?l.data_:l);return new Mn(E1.apply(null,r))}else{const r=t.map(d=>Yo(d)?U_(Yt.RAW,d).data:d.data_);let l=0;r.forEach(d=>{l+=d.byteLength});const o=new Uint8Array(l);let f=0;return r.forEach(d=>{for(let m=0;m<d.length;m++)o[f++]=d[m]}),new Mn(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(i){let t;try{t=JSON.parse(i)}catch{return null}return h1(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(i){if(i.length===0)return null;const t=i.lastIndexOf("/");return t===-1?"":i.slice(0,t)}function I1(i,t){const r=t.split("/").filter(l=>l.length>0).join("/");return i.length===0?r:i+"/"+r}function P_(i){const t=i.lastIndexOf("/",i.length-2);return t===-1?i:i.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(i,t){return t}class dt{constructor(t,r,l,o){this.server=t,this.local=r||t,this.writable=!!l,this.xform=o||N1}}let co=null;function D1(i){return!Yo(i)||i.length<2?i:P_(i)}function Fo(){if(co)return co;const i=[];i.push(new dt("bucket")),i.push(new dt("generation")),i.push(new dt("metageneration")),i.push(new dt("name","fullPath",!0));function t(f,d){return D1(d)}const r=new dt("name");r.xform=t,i.push(r);function l(f,d){return d!==void 0?Number(d):d}const o=new dt("size");return o.xform=l,i.push(o),i.push(new dt("timeCreated")),i.push(new dt("updated")),i.push(new dt("md5Hash",null,!0)),i.push(new dt("cacheControl",null,!0)),i.push(new dt("contentDisposition",null,!0)),i.push(new dt("contentEncoding",null,!0)),i.push(new dt("contentLanguage",null,!0)),i.push(new dt("contentType",null,!0)),i.push(new dt("metadata","customMetadata",!0)),co=i,co}function k1(i,t){function r(){const l=i.bucket,o=i.fullPath,f=new ct(l,o);return t._makeStorageReference(f)}Object.defineProperty(i,"ref",{get:r})}function U1(i,t,r){const l={};l.type="file";const o=r.length;for(let f=0;f<o;f++){const d=r[f];l[d.local]=d.xform(l,t[d.server])}return k1(l,i),l}function z_(i,t,r){const l=Md(t);return l===null?null:U1(i,l,r)}function M1(i,t,r,l){const o=Md(t);if(o===null||!Yo(o.downloadTokens))return null;const f=o.downloadTokens;if(f.length===0)return null;const d=encodeURIComponent;return f.split(",").map(g=>{const y=i.bucket,b=i.fullPath,S="/b/"+d(y)+"/o/"+d(b),D=Ci(S,r,l),C=D_({alt:"media",token:g});return D+C})[0]}function xd(i,t){const r={},l=t.length;for(let o=0;o<l;o++){const f=t[o];f.writable&&(r[f.server]=i[f.local])}return JSON.stringify(r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv="prefixes",Ov="items";function x1(i,t,r){const l={prefixes:[],items:[],nextPageToken:r.nextPageToken};if(r[Cv])for(const o of r[Cv]){const f=o.replace(/\/$/,""),d=i._makeStorageReference(new ct(t,f));l.prefixes.push(d)}if(r[Ov])for(const o of r[Ov]){const f=i._makeStorageReference(new ct(t,o.name));l.items.push(f)}return l}function L1(i,t,r){const l=Md(r);return l===null?null:x1(i,t,l)}class Xn{constructor(t,r,l,o){this.url=t,this.method=r,this.handler=l,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(i){if(!i)throw kd()}function Xo(i,t){function r(l,o){const f=z_(i,o,t);return gn(f!==null),f}return r}function P1(i,t){function r(l,o){const f=L1(i,t,o);return gn(f!==null),f}return r}function z1(i,t){function r(l,o){const f=z_(i,o,t);return gn(f!==null),M1(f,o,i.host,i._protocol)}return r}function fr(i){function t(r,l){let o;return r.getStatus()===401?r.getErrorText().includes("Firebase App Check token is invalid")?o=e1():o=JO():r.getStatus()===402?o=ZO(i.bucket):r.getStatus()===403?o=t1(i.path):o=l,o.status=r.getStatus(),o.serverResponse=l.serverResponse,o}return t}function $o(i){const t=fr(i);function r(l,o){let f=t(l,o);return l.getStatus()===404&&(f=WO(i.path)),f.serverResponse=o.serverResponse,f}return r}function H_(i,t,r){const l=t.fullServerUrl(),o=Ci(l,i.host,i._protocol),f="GET",d=i.maxOperationRetryTime,m=new Xn(o,f,Xo(i,r),d);return m.errorHandler=$o(t),m}function H1(i,t,r,l,o){const f={};t.isRoot?f.prefix="":f.prefix=t.path+"/",r.length>0&&(f.delimiter=r),l&&(f.pageToken=l),o&&(f.maxResults=o);const d=t.bucketOnlyServerUrl(),m=Ci(d,i.host,i._protocol),h="GET",g=i.maxOperationRetryTime,y=new Xn(m,h,P1(i,t.bucket),g);return y.urlParams=f,y.errorHandler=fr(t),y}function B1(i,t,r){const l=t.fullServerUrl(),o=Ci(l,i.host,i._protocol),f="GET",d=i.maxOperationRetryTime,m=new Xn(o,f,z1(i,r),d);return m.errorHandler=$o(t),m}function j1(i,t,r,l){const o=t.fullServerUrl(),f=Ci(o,i.host,i._protocol),d="PATCH",m=xd(r,l),h={"Content-Type":"application/json; charset=utf-8"},g=i.maxOperationRetryTime,y=new Xn(f,d,Xo(i,l),g);return y.headers=h,y.body=m,y.errorHandler=$o(t),y}function q1(i,t){const r=t.fullServerUrl(),l=Ci(r,i.host,i._protocol),o="DELETE",f=i.maxOperationRetryTime;function d(h,g){}const m=new Xn(l,o,d,f);return m.successCodes=[200,204],m.errorHandler=$o(t),m}function V1(i,t){return i&&i.contentType||t&&t.type()||"application/octet-stream"}function B_(i,t,r){const l=Object.assign({},r);return l.fullPath=i.path,l.size=t.size(),l.contentType||(l.contentType=V1(null,t)),l}function G1(i,t,r,l,o){const f=t.bucketOnlyServerUrl(),d={"X-Goog-Upload-Protocol":"multipart"};function m(){let L="";for(let G=0;G<2;G++)L=L+Math.random().toString().slice(2);return L}const h=m();d["Content-Type"]="multipart/related; boundary="+h;const g=B_(t,l,o),y=xd(g,r),b="--"+h+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+y+`\r
--`+h+`\r
Content-Type: `+g.contentType+`\r
\r
`,S=`\r
--`+h+"--",D=Mn.getBlob(b,l,S);if(D===null)throw O_();const C={name:g.fullPath},q=Ci(f,i.host,i._protocol),M="POST",H=i.maxUploadRetryTime,X=new Xn(q,M,Xo(i,r),H);return X.urlParams=C,X.headers=d,X.body=D.uploadData(),X.errorHandler=fr(t),X}class No{constructor(t,r,l,o){this.current=t,this.total=r,this.finalized=!!l,this.metadata=o||null}}function Ld(i,t){let r=null;try{r=i.getResponseHeader("X-Goog-Upload-Status")}catch{gn(!1)}return gn(!!r&&(t||["active"]).indexOf(r)!==-1),r}function Y1(i,t,r,l,o){const f=t.bucketOnlyServerUrl(),d=B_(t,l,o),m={name:d.fullPath},h=Ci(f,i.host,i._protocol),g="POST",y={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${l.size()}`,"X-Goog-Upload-Header-Content-Type":d.contentType,"Content-Type":"application/json; charset=utf-8"},b=xd(d,r),S=i.maxUploadRetryTime;function D(q){Ld(q);let M;try{M=q.getResponseHeader("X-Goog-Upload-URL")}catch{gn(!1)}return gn(Yo(M)),M}const C=new Xn(h,g,D,S);return C.urlParams=m,C.headers=y,C.body=b,C.errorHandler=fr(t),C}function F1(i,t,r,l){const o={"X-Goog-Upload-Command":"query"};function f(g){const y=Ld(g,["active","final"]);let b=null;try{b=g.getResponseHeader("X-Goog-Upload-Size-Received")}catch{gn(!1)}b||gn(!1);const S=Number(b);return gn(!isNaN(S)),new No(S,l.size(),y==="final")}const d="POST",m=i.maxUploadRetryTime,h=new Xn(r,d,f,m);return h.headers=o,h.errorHandler=fr(t),h}const Iv=256*1024;function X1(i,t,r,l,o,f,d,m){const h=new No(0,0);if(d?(h.current=d.current,h.total=d.total):(h.current=0,h.total=l.size()),l.size()!==h.total)throw r1();const g=h.total-h.current;let y=g;o>0&&(y=Math.min(y,o));const b=h.current,S=b+y;let D="";y===0?D="finalize":g===y?D="upload, finalize":D="upload";const C={"X-Goog-Upload-Command":D,"X-Goog-Upload-Offset":`${h.current}`},q=l.slice(b,S);if(q===null)throw O_();function M(G,j){const se=Ld(G,["active","final"]),pe=h.current+y,me=l.size();let ce;return se==="final"?ce=Xo(t,f)(G,j):ce=null,new No(pe,me,se==="final",ce)}const H="POST",X=t.maxUploadRetryTime,L=new Xn(r,H,M,X);return L.headers=C,L.body=q.uploadData(),L.progressCallback=m||null,L.errorHandler=fr(i),L}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1={STATE_CHANGED:"state_changed"},ht={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function kf(i){switch(i){case"running":case"pausing":case"canceling":return ht.RUNNING;case"paused":return ht.PAUSED;case"success":return ht.SUCCESS;case"canceled":return ht.CANCELED;case"error":return ht.ERROR;default:return ht.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(t,r,l){if(d1(t)||r!=null||l!=null)this.next=t,this.error=r??void 0,this.complete=l??void 0;else{const f=t;this.next=f.next,this.error=f.error,this.complete=f.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(i){return(...t)=>{Promise.resolve().then(()=>i(...t))}}class Q1{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Wi.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Wi.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Wi.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,r,l,o){if(this.sent_)throw ys("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(r,t,!0),o!==void 0)for(const f in o)o.hasOwnProperty(f)&&this.xhr_.setRequestHeader(f,o[f].toString());return l!==void 0?this.xhr_.send(l):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ys("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ys("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ys("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ys("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class W1 extends Q1{initXhr(){this.xhr_.responseType="text"}}function pn(){return new W1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(t,r,l=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=r,this._metadata=l,this._mappings=Fo(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=o=>{if(this._request=void 0,this._chunkMultiplier=1,o._codeEquals(Oe.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const f=this.isExponentialBackoffExpired();if(k_(o.status,[]))if(f)o=A_();else{this.sleepTime=Math.max(this.sleepTime*2,QO),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=o,this._transition("error")}},this._metadataErrorHandler=o=>{this._request=void 0,o._codeEquals(Oe.CANCELED)?this.completeTransitions_():(this._error=o,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((o,f)=>{this._resolve=o,this._reject=f,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const t=this._transferred;return r=>this._updateProgress(t+r)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([r,l])=>{switch(this._state){case"running":t(r,l);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,r)=>{const l=Y1(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),o=this._ref.storage._makeRequest(l,pn,t,r);this._request=o,o.getPromise().then(f=>{this._request=void 0,this._uploadUrl=f,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((r,l)=>{const o=F1(this._ref.storage,this._ref._location,t,this._blob),f=this._ref.storage._makeRequest(o,pn,r,l);this._request=f,f.getPromise().then(d=>{d=d,this._request=void 0,this._updateProgress(d.current),this._needToFetchStatus=!1,d.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=Iv*this._chunkMultiplier,r=new No(this._transferred,this._blob.size()),l=this._uploadUrl;this._resolveToken((o,f)=>{let d;try{d=X1(this._ref._location,this._ref.storage,l,this._blob,t,this._mappings,r,this._makeProgressCallback())}catch(h){this._error=h,this._transition("error");return}const m=this._ref.storage._makeRequest(d,pn,o,f,!1);this._request=m,m.getPromise().then(h=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(h.current),h.finalized?(this._metadata=h.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Iv*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,r)=>{const l=H_(this._ref.storage,this._ref._location,this._mappings),o=this._ref.storage._makeRequest(l,pn,t,r);this._request=o,o.getPromise().then(f=>{this._request=void 0,this._metadata=f,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,r)=>{const l=G1(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),o=this._ref.storage._makeRequest(l,pn,t,r);this._request=o,o.getPromise().then(f=>{this._request=void 0,this._metadata=f,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const r=this._transferred;this._transferred=t,this._transferred!==r&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const r=this._state==="paused";this._state=t,r&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=C_(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=kf(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,r,l,o){const f=new K1(r||void 0,l||void 0,o||void 0);return this._addObserver(f),()=>{this._removeObserver(f)}}then(t,r){return this._promise.then(t,r)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const r=this._observers.indexOf(t);r!==-1&&this._observers.splice(r,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(r=>{this._notifyObserver(r)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(kf(this._state)){case ht.SUCCESS:Ga(this._resolve.bind(null,this.snapshot))();break;case ht.CANCELED:case ht.ERROR:const r=this._reject;Ga(r.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(kf(this._state)){case ht.RUNNING:case ht.PAUSED:t.next&&Ga(t.next.bind(t,this.snapshot))();break;case ht.SUCCESS:t.complete&&Ga(t.complete.bind(t))();break;case ht.CANCELED:case ht.ERROR:t.error&&Ga(t.error.bind(t,this._error))();break;default:t.error&&Ga(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(t,r){this._service=t,r instanceof ct?this._location=r:this._location=ct.makeFromUrl(r,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,r){return new ta(t,r)}get root(){const t=new ct(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return P_(this._location.path)}get storage(){return this._service}get parent(){const t=O1(this._location.path);if(t===null)return null;const r=new ct(this._location.bucket,t);return new ta(this._service,r)}_throwIfRoot(t){if(this._location.path==="")throw N_(t)}}function Z1(i,t,r){return i._throwIfRoot("uploadBytesResumable"),new j_(i,new Mn(t),r)}function J1(i){const t={prefixes:[],items:[]};return q_(i,t).then(()=>t)}async function q_(i,t,r){const o=await V_(i,{pageToken:r});t.prefixes.push(...o.prefixes),t.items.push(...o.items),o.nextPageToken!=null&&await q_(i,t,o.nextPageToken)}function V_(i,t){t!=null&&typeof t.maxResults=="number"&&Ff("options.maxResults",1,1e3,t.maxResults);const r=t||{},l=H1(i.storage,i._location,"/",r.pageToken,r.maxResults);return i.storage.makeRequestWithTokens(l,pn)}function eI(i){i._throwIfRoot("getMetadata");const t=H_(i.storage,i._location,Fo());return i.storage.makeRequestWithTokens(t,pn)}function tI(i,t){i._throwIfRoot("updateMetadata");const r=j1(i.storage,i._location,t,Fo());return i.storage.makeRequestWithTokens(r,pn)}function nI(i){i._throwIfRoot("getDownloadURL");const t=B1(i.storage,i._location,Fo());return i.storage.makeRequestWithTokens(t,pn).then(r=>{if(r===null)throw s1();return r})}function iI(i){i._throwIfRoot("deleteObject");const t=q1(i.storage,i._location);return i.storage.makeRequestWithTokens(t,pn)}function G_(i,t){const r=I1(i._location.path,t),l=new ct(i._location.bucket,r);return new ta(i.storage,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(i){return/^[A-Za-z]+:\/\//.test(i)}function rI(i,t){return new ta(i,t)}function Y_(i,t){if(i instanceof Pd){const r=i;if(r._bucket==null)throw a1();const l=new ta(r,r._bucket);return t!=null?Y_(l,t):l}else return t!==void 0?G_(i,t):i}function sI(i,t){if(t&&aI(t)){if(i instanceof Pd)return rI(i,t);throw Wa("To use ref(service, url), the first argument must be a Storage instance.")}else return Y_(i,t)}function Nv(i,t){const r=t==null?void 0:t[R_];return r==null?null:ct.makeFromBucketSpec(r,i)}function lI(i,t,r,l={}){i.host=`${t}:${r}`,i._protocol="http";const{mockUserToken:o}=l;o&&(i._overrideAuthToken=typeof o=="string"?o:mS(o,i.app.options.projectId))}class Pd{constructor(t,r,l,o,f){this.app=t,this._authProvider=r,this._appCheckProvider=l,this._url=o,this._firebaseVersion=f,this._bucket=null,this._host=w_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$O,this._maxUploadRetryTime=KO,this._requests=new Set,o!=null?this._bucket=ct.makeFromBucketSpec(o,this._host):this._bucket=Nv(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ct.makeFromBucketSpec(this._url,t):this._bucket=Nv(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Ff("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Ff("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const r=await t.getToken();if(r!==null)return r.accessToken}return null}async _getAppCheckToken(){if(Ce(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ta(this,t)}_makeRequest(t,r,l,o,f=!0){if(this._deleted)return new o1(I_());{const d=_1(t,this._appId,l,o,r,this._firebaseVersion,f);return this._requests.add(d),d.getPromise().then(()=>this._requests.delete(d),()=>this._requests.delete(d)),d}}async makeRequestWithTokens(t,r){const[l,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,r,l,o).getPromise()}}const Dv="@firebase/storage",kv="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI="storage";function uI(i,t,r){return i=ie(i),Z1(i,t,r)}function cI(i){return i=ie(i),eI(i)}function fI(i,t){return i=ie(i),tI(i,t)}function dI(i,t){return i=ie(i),V_(i,t)}function hI(i){return i=ie(i),J1(i)}function pI(i){return i=ie(i),nI(i)}function mI(i){return i=ie(i),iI(i)}function Uv(i,t){return i=ie(i),sI(i,t)}function gI(i,t){return G_(i,t)}function vI(i,t,r,l={}){lI(i,t,r,l)}function yI(i,{instanceIdentifier:t}){const r=i.getProvider("app").getImmediate(),l=i.getProvider("auth-internal"),o=i.getProvider("app-check-internal");return new Pd(r,l,o,t,Ri)}function _I(){qn(new Xt(oI,yI,"PUBLIC").setMultipleInstances(!0)),xt(Dv,kv,""),xt(Dv,kv,"esm2017")}_I();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(t,r,l){this._delegate=t,this.task=r,this.ref=l}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(t,r){this._delegate=t,this._ref=r,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new fo(this._delegate.snapshot,this,this._ref)}then(t,r){return this._delegate.then(l=>{if(t)return t(new fo(l,this,this._ref))},r)}on(t,r,l,o){let f;return r&&(typeof r=="function"?f=d=>r(new fo(d,this,this._ref)):f={next:r.next?d=>r.next(new fo(d,this,this._ref)):void 0,complete:r.complete||void 0,error:r.error||void 0}),this._delegate.on(t,f,l||void 0,o||void 0)}}class xv{constructor(t,r){this._delegate=t,this._service=r}get prefixes(){return this._delegate.prefixes.map(t=>new Hn(t,this._service))}get items(){return this._delegate.items.map(t=>new Hn(t,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t,r){this._delegate=t,this.storage=r}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(t){const r=gI(this._delegate,t);return new Hn(r,this.storage)}get root(){return new Hn(this._delegate.root,this.storage)}get parent(){const t=this._delegate.parent;return t==null?null:new Hn(t,this.storage)}put(t,r){return this._throwIfRoot("put"),new Mv(uI(this._delegate,t,r),this)}putString(t,r=Yt.RAW,l){this._throwIfRoot("putString");const o=U_(r,t),f=Object.assign({},l);return f.contentType==null&&o.contentType!=null&&(f.contentType=o.contentType),new Mv(new j_(this._delegate,new Mn(o.data,!0),f),this)}listAll(){return hI(this._delegate).then(t=>new xv(t,this.storage))}list(t){return dI(this._delegate,t||void 0).then(r=>new xv(r,this.storage))}getMetadata(){return cI(this._delegate)}updateMetadata(t){return fI(this._delegate,t)}getDownloadURL(){return pI(this._delegate)}delete(){return this._throwIfRoot("delete"),mI(this._delegate)}_throwIfRoot(t){if(this._delegate._location.path==="")throw N_(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(t,r){this.app=t,this._delegate=r}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(t){if(Lv(t))throw Wa("ref() expected a child path but got a URL, use refFromURL instead.");return new Hn(Uv(this._delegate,t),this)}refFromURL(t){if(!Lv(t))throw Wa("refFromURL() expected a full URL but got a child path, use ref() instead.");try{ct.makeFromUrl(t,this._delegate.host)}catch{throw Wa("refFromUrl() expected a valid full URL but got an invalid one.")}return new Hn(Uv(this._delegate,t),this)}setMaxUploadRetryTime(t){this._delegate.maxUploadRetryTime=t}setMaxOperationRetryTime(t){this._delegate.maxOperationRetryTime=t}useEmulator(t,r,l={}){vI(this._delegate,t,r,l)}}function Lv(i){return/^[A-Za-z]+:\/\//.test(i)}const bI="@firebase/storage-compat",EI="0.3.17";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI="storage-compat";function SI(i,{instanceIdentifier:t}){const r=i.getProvider("app-compat").getImmediate(),l=i.getProvider("storage").getImmediate({identifier:t});return new F_(r,l)}function wI(i){const t={TaskState:ht,TaskEvent:$1,StringFormat:Yt,Storage:F_,Reference:Hn};i.INTERNAL.registerComponent(new Xt(TI,SI,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),i.registerVersion(bI,EI)}wI(pt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI="type.googleapis.com/google.protobuf.Int64Value",AI="type.googleapis.com/google.protobuf.UInt64Value";function X_(i,t){const r={};for(const l in i)i.hasOwnProperty(l)&&(r[l]=t(i[l]));return r}function Do(i){if(i==null)return null;if(i instanceof Number&&(i=i.valueOf()),typeof i=="number"&&isFinite(i)||i===!0||i===!1||Object.prototype.toString.call(i)==="[object String]")return i;if(i instanceof Date)return i.toISOString();if(Array.isArray(i))return i.map(t=>Do(t));if(typeof i=="function"||typeof i=="object")return X_(i,t=>Do(t));throw new Error("Data cannot be encoded in JSON: "+i)}function nr(i){if(i==null)return i;if(i["@type"])switch(i["@type"]){case RI:case AI:{const t=Number(i.value);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+i);return t}default:throw new Error("Data cannot be decoded from JSON: "+i)}return Array.isArray(i)?i.map(t=>nr(t)):typeof i=="function"||typeof i=="object"?X_(i,t=>nr(t)):i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Tt extends et{constructor(t,r,l){super(`${$_}/${t}`,r||""),this.details=l,Object.setPrototypeOf(this,Tt.prototype)}}function CI(i){if(i>=200&&i<300)return"ok";switch(i){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function ko(i,t){let r=CI(i),l=r,o;try{const f=t&&t.error;if(f){const d=f.status;if(typeof d=="string"){if(!Pv[d])return new Tt("internal","internal");r=Pv[d],l=d}const m=f.message;typeof m=="string"&&(l=m),o=f.details,o!==void 0&&(o=nr(o))}}catch{}return r==="ok"?null:new Tt(r,l,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(t,r,l,o){this.app=t,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Ce(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.auth=r.getImmediate({optional:!0}),this.messaging=l.getImmediate({optional:!0}),this.auth||r.get().then(f=>this.auth=f,()=>{}),this.messaging||l.get().then(f=>this.messaging=f,()=>{}),this.appCheck||o==null||o.get().then(f=>this.appCheck=f,()=>{})}async getAuthToken(){if(this.auth)try{const t=await this.auth.getToken();return t==null?void 0:t.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(t){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const r=t?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return r.error?null:r.token}return null}async getContext(t){const r=await this.getAuthToken(),l=await this.getMessagingToken(),o=await this.getAppCheckToken(t);return{authToken:r,messagingToken:l,appCheckToken:o}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv="us-central1",II=/^data: (.*?)(?:\n|$)/;function NI(i){let t=null;return{promise:new Promise((r,l)=>{t=setTimeout(()=>{l(new Tt("deadline-exceeded","deadline-exceeded"))},i)}),cancel:()=>{t&&clearTimeout(t)}}}let DI=class{constructor(t,r,l,o,f=zv,d=(...m)=>fetch(...m)){this.app=t,this.fetchImpl=d,this.emulatorOrigin=null,this.contextProvider=new OI(t,r,l,o),this.cancelAllRequests=new Promise(m=>{this.deleteService=()=>Promise.resolve(m())});try{const m=new URL(f);this.customDomain=m.origin+(m.pathname==="/"?"":m.pathname),this.region=zv}catch{this.customDomain=null,this.region=f}}_delete(){return this.deleteService()}_url(t){const r=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${r}/${this.region}/${t}`:this.customDomain!==null?`${this.customDomain}/${t}`:`https://${this.region}-${r}.cloudfunctions.net/${t}`}};function kI(i,t,r){i.emulatorOrigin=`http://${t}:${r}`}function UI(i,t,r){const l=o=>LI(i,t,o,r||{});return l.stream=(o,f)=>PI(i,t,o,f),l}function MI(i,t,r){const l=o=>Q_(i,t,o,r||{});return l.stream=(o,f)=>W_(i,t,o,f||{}),l}async function xI(i,t,r,l){r["Content-Type"]="application/json";let o;try{o=await l(i,{method:"POST",body:JSON.stringify(t),headers:r})}catch{return{status:0,json:null}}let f=null;try{f=await o.json()}catch{}return{status:o.status,json:f}}async function K_(i,t){const r={},l=await i.contextProvider.getContext(t.limitedUseAppCheckTokens);return l.authToken&&(r.Authorization="Bearer "+l.authToken),l.messagingToken&&(r["Firebase-Instance-ID-Token"]=l.messagingToken),l.appCheckToken!==null&&(r["X-Firebase-AppCheck"]=l.appCheckToken),r}function LI(i,t,r,l){const o=i._url(t);return Q_(i,o,r,l)}async function Q_(i,t,r,l){r=Do(r);const o={data:r},f=await K_(i,l),d=l.timeout||7e4,m=NI(d),h=await Promise.race([xI(t,o,f,i.fetchImpl),m.promise,i.cancelAllRequests]);if(m.cancel(),!h)throw new Tt("cancelled","Firebase Functions instance was deleted.");const g=ko(h.status,h.json);if(g)throw g;if(!h.json)throw new Tt("internal","Response is not valid JSON object.");let y=h.json.data;if(typeof y>"u"&&(y=h.json.result),typeof y>"u")throw new Tt("internal","Response is missing data field.");return{data:nr(y)}}function PI(i,t,r,l){const o=i._url(t);return W_(i,o,r,l||{})}async function W_(i,t,r,l){var o;r=Do(r);const f={data:r},d=await K_(i,l);d["Content-Type"]="application/json",d.Accept="text/event-stream";let m;try{m=await i.fetchImpl(t,{method:"POST",body:JSON.stringify(f),headers:d,signal:l==null?void 0:l.signal})}catch(D){if(D instanceof Error&&D.name==="AbortError"){const q=new Tt("cancelled","Request was cancelled.");return{data:Promise.reject(q),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(q)}}}}}}const C=ko(0,null);return{data:Promise.reject(C),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(C)}}}}}}let h,g;const y=new Promise((D,C)=>{h=D,g=C});(o=l==null?void 0:l.signal)===null||o===void 0||o.addEventListener("abort",()=>{const D=new Tt("cancelled","Request was cancelled.");g(D)});const b=m.body.getReader(),S=zI(b,h,g,l==null?void 0:l.signal);return{stream:{[Symbol.asyncIterator](){const D=S.getReader();return{async next(){const{value:C,done:q}=await D.read();return{value:C,done:q}},async return(){return await D.cancel(),{done:!0,value:void 0}}}}},data:y}}function zI(i,t,r,l){const o=(d,m)=>{const h=d.match(II);if(!h)return;const g=h[1];try{const y=JSON.parse(g);if("result"in y){t(nr(y.result));return}if("message"in y){m.enqueue(nr(y.message));return}if("error"in y){const b=ko(0,y);m.error(b),r(b);return}}catch(y){if(y instanceof Tt){m.error(y),r(y);return}}},f=new TextDecoder;return new ReadableStream({start(d){let m="";return h();async function h(){if(l!=null&&l.aborted){const g=new Tt("cancelled","Request was cancelled");return d.error(g),r(g),Promise.resolve()}try{const{value:g,done:y}=await i.read();if(y){m.trim()&&o(m.trim(),d),d.close();return}if(l!=null&&l.aborted){const S=new Tt("cancelled","Request was cancelled");d.error(S),r(S),await i.cancel();return}m+=f.decode(g,{stream:!0});const b=m.split(`
`);m=b.pop()||"";for(const S of b)S.trim()&&o(S.trim(),d);return h()}catch(g){const y=g instanceof Tt?g:ko(0,null);d.error(y),r(y)}}},cancel(){return i.cancel()}})}const Hv="@firebase/functions",Bv="0.12.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI="auth-internal",BI="app-check-internal",jI="messaging-internal";function qI(i){const t=(r,{instanceIdentifier:l})=>{const o=r.getProvider("app").getImmediate(),f=r.getProvider(HI),d=r.getProvider(jI),m=r.getProvider(BI);return new DI(o,f,d,m,l)};qn(new Xt($_,t,"PUBLIC").setMultipleInstances(!0)),xt(Hv,Bv,i),xt(Hv,Bv,"esm2017")}function jv(i,t,r){kI(ie(i),t,r)}function VI(i,t,r){return UI(ie(i),t,r)}function GI(i,t,r){return MI(ie(i),t,r)}qI();const YI="@firebase/functions-compat",FI="0.3.20";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(t,r){this.app=t,this._delegate=r,this._region=this._delegate.region,this._customDomain=this._delegate.customDomain}httpsCallable(t,r){return VI(this._delegate,t,r)}httpsCallableFromURL(t,r){return GI(this._delegate,t,r)}useFunctionsEmulator(t){const r=t.match("[a-zA-Z]+://([a-zA-Z0-9.-]+)(?::([0-9]+))?");if(r==null)throw new et("functions","No origin provided to useFunctionsEmulator()");if(r[2]==null)throw new et("functions","Port missing in origin provided to useFunctionsEmulator()");return jv(this._delegate,r[1],Number(r[2]))}useEmulator(t,r){return jv(this._delegate,t,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI="us-central1",$I=(i,{instanceIdentifier:t})=>{const r=i.getProvider("app-compat").getImmediate(),l=i.getProvider("functions").getImmediate({identifier:t??XI});return new Z_(r,l)};function KI(){const i={Functions:Z_};pt.INTERNAL.registerComponent(new Xt("functions-compat",$I,"PUBLIC").setServiceProps(i).setMultipleInstances(!0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */KI();pt.registerVersion(YI,FI);const QI={apiKey:"AIzaSyA0iVwY44v9lokoS2Zm_jl9pYc8pV6Nje8",authDomain:"smartglot.firebaseapp.com",projectId:"smartglot",storageBucket:"smartglot.firebasestorage.app",messagingSenderId:"516870202505",appId:"1:516870202505:web:377f047b4883a84fd69366",measurementId:"G-F0531X25FB"};pt.apps.length?pt.app():pt.initializeApp(QI);const _s=pt.auth(),qv=pt.storage(),WI=pt.functions(),J_=N.createContext();function dr(){return N.useContext(J_)}function ZI({children:i}){const[t,r]=N.useState(null),[l,o]=N.useState(!0),[f,d]=N.useState(null),[m,h]=N.useState(null),g=new pt.auth.GoogleAuthProvider;async function y(L,G){d(null);try{const j=await _s.createUserWithEmailAndPassword(L,G);return await j.user.sendEmailVerification(),h("회원가입이 거의 완료되었습니다! 이메일을 확인하여 계정을 인증해주세요. 인증 후 로그인할 수 있습니다."),j.user}catch(j){throw console.error("Signup failed:",j),d(j.message),j}}async function b(L,G){d(null);try{return(await _s.signInWithEmailAndPassword(L,G)).user}catch(j){throw console.error("Login failed:",j),d(j.message),j}}async function S(){d(null);try{return(await _s.signInWithPopup(g)).user}catch(L){throw console.error("Google login failed:",L),d(L.message),L}}async function D(){d(null),h(null);try{await _s.signOut()}catch(L){throw console.error("Logout failed:",L),d(L.message),L}}async function C(L){if(L)try{await L.sendEmailVerification(),h("인증 이메일이 다시 전송되었습니다. 이메일함을 확인해주세요.")}catch(G){throw console.error("Error resending verification email:",G),d("인증 이메일 재전송에 실패했습니다: "+G.message),G}}async function q(L,G){if(d(null),!t)throw new Error("User not logged in");try{const j=pt.auth.EmailAuthProvider.credential(t.email,L);return await t.reauthenticateWithCredential(j),await t.updatePassword(G),"비밀번호가 성공적으로 변경되었습니다."}catch(j){throw console.error("Password change failed:",j),d(j.message),j}}async function M(){if(d(null),!t)throw new Error("User not logged in");try{await t.delete()}catch(L){throw console.error("Account deletion failed:",L),d(L.message),L}}async function H(L){if(!t)throw new Error("User not logged in for PDF analysis.");try{return(await WI.httpsCallable("analyzePdf")({storagePath:L})).data}catch(G){throw console.error("PDF analysis function call failed:",G),G}}N.useEffect(()=>_s.onAuthStateChanged(async G=>{d(null),h(null),G?(await G.reload(),G.emailVerified||G.providerData.some(j=>j.providerId!=="password")?r(G):(r(null),h(`계정 인증이 필요합니다. ${G.email} 주소로 발송된 인증 메일을 확인해주세요. 인증이 확인되면 자동으로 로그인됩니다.`))):r(null),o(!1)}),[]);const X={currentUser:t,loading:l,error:f,setError:d,emailVerificationNotice:m,setEmailVerificationNotice:h,signup:y,login:b,loginWithGoogle:S,logout:D,sendVerificationEmail:C,changeUserPassword:q,deleteUserAccount:M,analyzePdfWithCloudFunction:H};return k.jsxs(J_.Provider,{value:X,children:[!l&&i," "]})}function JI(){var f;const{currentUser:i,logout:t}=dr(),r=sr(),l=async()=>{try{await t(),r("/")}catch(d){console.error("Failed to log out",d)}},o=()=>{r("/profile")};return k.jsxs("header",{children:[k.jsx("h1",{children:k.jsx(Fa,{to:i?"/analysis":"/",style:{textDecoration:"none",color:"inherit",display:"flex",alignItems:"center"},children:k.jsx("img",{src:"/smartglot.svg",alt:"Smartglot Logo",style:{height:"40px"}})})}),k.jsx("nav",{children:i?k.jsxs(k.Fragment,{children:[k.jsx("button",{onClick:o,className:"profile-icon",title:i.email,children:((f=i.email)==null?void 0:f.substring(0,2).toUpperCase())||"P"}),k.jsx("button",{id:"headerLogoutButton",onClick:l,children:"Logout"})]}):k.jsxs(k.Fragment,{children:[k.jsx(Fa,{to:"/auth?mode=login",children:k.jsx("button",{id:"headerLoginButton",style:{backgroundColor:"#004aad"},children:"Login"})}),k.jsx(Fa,{to:"/auth?mode=signup",children:k.jsx("button",{id:"headerSignupButton",style:{backgroundColor:"#004aad"},children:"Sign Up"})})]})})]})}function eN(){const i=sr(),t=()=>{i("/auth?mode=login")};return k.jsxs("div",{id:"welcome-container",children:[" ",k.jsx("h2",{children:"Welcome to Smartglot!"}),k.jsx("p",{children:"Just put in a document and get your own glossary."}),k.jsx("p",{children:"Log in or sign up to start analyzing your text."}),k.jsx("button",{id:"getStartedButton",onClick:t,children:"Get Started"})]})}function Os({id:i,placeholder:t,value:r,onChange:l,className:o=""}){const[f,d]=N.useState(!1),m=()=>{d(!f)};return k.jsxs("div",{className:`password-wrapper ${o}`,children:[" ",k.jsx("input",{type:f?"text":"password",id:i,placeholder:t,value:r,onChange:l}),k.jsx("button",{type:"button",className:"toggle-password","aria-label":f?"Hide password":"Show password",onClick:m,children:k.jsx("img",{src:f?"/eye-password-show.svg":"/eye-password-hide.svg",alt:f?"Hide password":"Show password"})})]})}function tN(){const i=sr(),t=Gn(),{currentUser:r,login:l,signup:o,loginWithGoogle:f,error:d,setError:m,emailVerificationNotice:h,setEmailVerificationNotice:g,sendVerificationEmail:y,loading:b}=dr(),[S,D]=N.useState(!0),[C,q]=N.useState(""),[M,H]=N.useState(""),[X,L]=N.useState(""),[G,j]=N.useState(""),se=N.useCallback(()=>{q(""),H(""),L(""),j(""),m(null),g(null)},[m,g]);N.useEffect(()=>{const Ie=new URLSearchParams(t.search).get("mode"),mt=Ie!=="signup";console.log("Current mode in useEffect:",Ie,"New isLoginMode:",mt,"Old isLoginMode:",S),S!==mt&&(console.log("Mode changed! Clearing inputs and setting new mode."),D(mt),se()),m(null),j("")},[t.search,S,se,m]),N.useEffect(()=>{j(d?d.message||String(d):"")},[d]);const pe=()=>C.trim()?M?!S&&M.length<6?"비밀번호는 6자 이상이어야 합니다.":!S&&M!==X?"비밀번호가 일치하지 않습니다.":null:"비밀번호를 입력해주세요.":"이메일을 입력해주세요.",me=async Se=>{Se.preventDefault(),j(""),m(null);const Ie=pe();if(Ie){j(Ie);return}try{S?await l(C,M):await o(C,M)&&i("/auth?mode=login")}catch(mt){console.log(mt)}},ce=async()=>{j(""),m(null);try{await f()}catch(Se){console.log(Se)}},Ye=async Se=>{if(Se.preventDefault(),r&&!r.emailVerified)try{await y(r)}catch(Ie){console.log(Ie)}};return b&&!r?k.jsx("div",{id:"auth-container",style:{textAlign:"center"},children:k.jsx("p",{children:"Loading..."})}):k.jsxs("div",{id:"auth-container",children:[" ",k.jsx("h2",{children:S?"Login":"Sign Up"}),h&&k.jsxs("div",{id:"email-verification-notice",children:[k.jsx("span",{dangerouslySetInnerHTML:{__html:h.split(". ")[0]+"."}}),r&&!r.emailVerified&&(h.includes("인증 메일을 확인해주세요")||h.includes("계정 인증이 필요합니다"))&&k.jsxs(k.Fragment,{children:[k.jsx("br",{}),k.jsx("a",{href:"#",onClick:Ye,style:{fontSize:"0.9em"},children:"인증 이메일 재전송"})]})]}),G&&k.jsx("div",{id:"error-message",children:G}),k.jsxs("form",{onSubmit:me,className:`auth-section ${S?"login-form":"signup-form"}`,children:[k.jsx("input",{type:"email",id:S?"loginEmail":"signupEmail",placeholder:"Email",value:C,onChange:Se=>q(Se.target.value),className:G&&!C.trim()?"input-error":"",autoComplete:"email",disabled:b}),k.jsx(Os,{id:S?"loginPassword":"signupPassword",placeholder:"Password",value:M,onChange:Se=>H(Se.target.value),className:G&&!M?"input-error":"",autoComplete:S?"current-password":"new-password",disabled:b}),!S&&k.jsx(Os,{id:"signupPasswordConfirm",placeholder:"Confirm Password",value:X,onChange:Se=>L(Se.target.value),className:G&&M!==X?"input-error":"",autoComplete:"new-password",disabled:b}),k.jsx("button",{type:"submit",disabled:b,style:{backgroundColor:"#004aad"},children:S?"Login":"Sign Up"}),k.jsx("div",{style:{marginTop:"10px"},children:k.jsxs("button",{type:"button",onClick:ce,className:"gsi-material-button",disabled:b,children:[k.jsx("div",{className:"gsi-material-button-state"}),k.jsxs("div",{className:"gsi-material-button-content-wrapper",children:[k.jsx("div",{className:"gsi-material-button-icon",children:k.jsxs("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{display:"block"},children:[k.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),k.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),k.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),k.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"}),k.jsx("path",{fill:"none",d:"M0 0h48v48H0z"})]})}),k.jsx("span",{className:"gsi-material-button-contents",children:"Sign in with Google"}),k.jsx("span",{style:{display:"none"},children:"Sign in with Google"})]})]})})]}),k.jsxs("p",{style:{textAlign:"center",marginTop:"20px"},children:[S?"Don't have an account? ":"Already have an account? ",k.jsx(Fa,{to:S?"/auth?mode=signup":"/auth?mode=login",onClick:Se=>{b&&Se.preventDefault()},style:b?{pointerEvents:"none",opacity:.6,cursor:"default"}:{},"aria-disabled":b,children:S?"Sign Up":"Login"})]})]})}function nN(){const{currentUser:i,analyzePdfWithCloudFunction:t}=dr(),[r,l]=N.useState(null),[o,f]=N.useState(null),[d,m]=N.useState(""),[h,g]=N.useState(""),[y,b]=N.useState(!1),S=C=>{const q=C.target.files[0];q&&q.type==="application/pdf"?(l(q),m(`Selected: ${q.name}`),f(null),g("")):(l(null),m("Please select a PDF file."),C.target.value=null)},D=async()=>{if(!r){g("Please select a PDF file first.");return}if(!i){g("Please log in to analyze PDF files.");return}b(!0),m("Uploading PDF..."),g(""),f(null);let C=null;try{C=`uploads/${i.uid}/${Date.now()}_${r.name}`,await qv.ref(C).put(r),console.log("File uploaded to:",C),m("Processing PDF with Vision AI...");const M=await t(C);M&&M.length>0?f(M):f([]),m("Analysis complete.")}catch(q){if(console.error("PDF analysis process failed:",q),g(`Error during PDF analysis: ${q.message||"Unknown error"}`),m("Error during analysis."),C)try{await qv.ref(C).delete(),console.log("Cleaned up failed upload from storage.")}catch(M){console.error("Failed to cleanup storage:",M)}}finally{b(!1)}};return k.jsxs("div",{id:"analysis-container",children:[" ",k.jsx("h2",{children:"Upload PDF to Analyze"}),k.jsx("hr",{style:{margin:"20px 0"}}),k.jsxs("div",{id:"pdf-analysis-section",children:[k.jsx("label",{htmlFor:"pdfInput",children:"Upload a PDF:"}),k.jsx("input",{type:"file",id:"pdfInput",accept:".pdf",onChange:S,style:{display:"block",marginTop:"5px",marginBottom:"10px"},disabled:y}),k.jsx("button",{id:"analyzePdfButton",onClick:D,disabled:!r||y,children:y?"Analyzing...":"Analyze PDF"}),d&&k.jsx("span",{id:"pdf-upload-status",style:{marginLeft:"10px",fontSize:"0.9em"},children:d})]}),k.jsx("h2",{children:"Top Terms"}),h&&k.jsx("div",{style:{color:"red",marginTop:"10px"},children:h}),k.jsx("div",{id:"results",children:o?o.length>0?o.map((C,q)=>k.jsxs("div",{className:"result-item",children:[k.jsx("span",{className:"term",children:C.term}),k.jsxs("span",{className:"freq",children:["(Frequency: ",C.frequency,")"]})]},q)):k.jsx("p",{children:"No significant terms found (or only stop words/numbers)."}):k.jsx("p",{children:'Upload a PDF and click "Analyze PDF" to see results.'})})]})}function iN(){const i=sr(),{currentUser:t,changeUserPassword:r,deleteUserAccount:l,error:o,setError:f,loading:d}=dr(),[m,h]=N.useState(""),[g,y]=N.useState(""),[b,S]=N.useState(""),[D,C]=N.useState(""),[q,M]=N.useState("");N.useEffect(()=>{o?(M(o.message||String(o)),C("")):M("")},[o]),N.useEffect(()=>()=>{f(null),C(""),M("")},[f]);const H=async j=>{if(j.preventDefault(),M(""),C(""),f(null),!m||!g||!b){M("모든 비밀번호 필드를 입력해주세요.");return}if(g!==b){M("새 비밀번호가 일치하지 않습니다.");return}if(g.length<6){M("새 비밀번호는 6자 이상이어야 합니다.");return}try{const se=await r(m,g);C(se||"비밀번호가 성공적으로 변경되었습니다."),h(""),y(""),S("")}catch(se){console.error("Password change failed on page:",se)}},X=async()=>{if(M(""),C(""),f(null),window.confirm("정말 계정을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다."))try{await l()}catch(j){console.error("Account deletion failed on page:",j)}};if(d||!t)return k.jsx("div",{className:"container",style:{textAlign:"center"},children:k.jsx("p",{children:"Loading profile..."})});const G=t.providerData.some(j=>j.providerId==="password")&&!t.emailVerified;return k.jsxs("div",{id:"profile-container",children:[" ",k.jsx("h2",{children:"Profile"}),k.jsxs("p",{id:"profile-email",children:["Email: ",t.email]}),G&&k.jsx("p",{style:{color:"orange",border:"1px solid orange",padding:"10px",borderRadius:"4px"},children:"비밀번호 변경 또는 계정 삭제를 위해서는 먼저 이메일 인증을 완료해주세요."}),k.jsxs("div",{style:{marginTop:"20px",paddingTop:"15px",borderTop:"1px solid #eee"},children:[k.jsx("h3",{children:"Change Password"}),k.jsxs("form",{onSubmit:H,children:[k.jsx(Os,{id:"currentPassword",placeholder:"Current Password",value:m,onChange:j=>h(j.target.value),disabled:d||G}),k.jsx(Os,{id:"newPassword",placeholder:"New Password",value:g,onChange:j=>y(j.target.value),disabled:d||G}),k.jsx(Os,{id:"newPasswordConfirm",placeholder:"Confirm New Password",value:b,onChange:j=>S(j.target.value),disabled:d||G}),k.jsx("button",{id:"changePasswordButton",type:"submit",disabled:d||G,children:"Change Password"})]}),D&&k.jsx("p",{style:{color:"green",marginTop:"10px"},children:D}),q&&k.jsx("p",{id:"password-change-message",style:{color:"red",marginTop:"10px"},children:q})]}),k.jsx("button",{id:"backToAnalysisButton",onClick:()=>i("/analysis"),style:{marginTop:"20px"},disabled:d,children:"Back to Analysis"}),k.jsx("button",{id:"deleteAccountButton",onClick:X,style:{backgroundColor:"#dc3545",color:"white",marginTop:"20px",marginLeft:"10px"},disabled:d||G,children:"Delete Account"})]})}const aN=()=>k.jsxs(k.Fragment,{children:[k.jsx(JI,{}),k.jsx("main",{className:"container",children:k.jsx(ed,{})})]});function rN(){const{currentUser:i,loading:t}=dr();return t?k.jsx("div",{className:"container",style:{textAlign:"center"},children:k.jsx("p",{children:"Loading user..."})}):i?k.jsx(ed,{}):k.jsx(Jf,{to:"/auth",replace:!0})}function sN(){const{currentUser:i,loading:t}=dr();return t?k.jsx("div",{className:"container",style:{textAlign:"center"},children:k.jsx("p",{children:"Loading user..."})}):i?k.jsx(Jf,{to:"/analysis",replace:!0}):k.jsx(ed,{})}function lN(){return k.jsx(ZI,{children:k.jsx(KT,{children:k.jsxs(RT,{children:[k.jsxs(Un,{element:k.jsx(aN,{}),children:[k.jsxs(Un,{element:k.jsx(sN,{}),children:[k.jsx(Un,{path:"/",element:k.jsx(eN,{})}),k.jsx(Un,{path:"/auth",element:k.jsx(tN,{})})]}),k.jsxs(Un,{element:k.jsx(rN,{}),children:[k.jsx(Un,{path:"/analysis",element:k.jsx(nN,{})}),k.jsx(Un,{path:"/profile",element:k.jsx(iN,{})})]})]}),k.jsx(Un,{path:"*",element:k.jsx(Jf,{to:"/",replace:!0})})]})})})}U0.createRoot(document.getElementById("root")).render(k.jsx(R0.StrictMode,{children:k.jsx(lN,{})}));
