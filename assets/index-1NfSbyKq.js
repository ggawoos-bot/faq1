(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Pb(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var e_={exports:{}},Ac={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dI;function TD(){if(dI)return Ac;dI=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(n,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var f in a)f!=="key"&&(l[f]=a[f])}else l=a;return a=l.ref,{$$typeof:i,type:n,key:c,ref:a!==void 0?a:null,props:l}}return Ac.Fragment=e,Ac.jsx=t,Ac.jsxs=t,Ac}var fI;function wD(){return fI||(fI=1,e_.exports=TD()),e_.exports}var J=wD(),t_={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mI;function ID(){if(mI)return De;mI=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),T=Symbol.iterator;function I(N){return N===null||typeof N!="object"?null:(N=T&&N[T]||N["@@iterator"],typeof N=="function"?N:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,W={};function Y(N,ee,ue){this.props=N,this.context=ee,this.refs=W,this.updater=ue||x}Y.prototype.isReactComponent={},Y.prototype.setState=function(N,ee){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ee,"setState")},Y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function ge(){}ge.prototype=Y.prototype;function de(N,ee,ue){this.props=N,this.context=ee,this.refs=W,this.updater=ue||x}var ne=de.prototype=new ge;ne.constructor=de,G(ne,Y.prototype),ne.isPureReactComponent=!0;var _e=Array.isArray,he={H:null,A:null,T:null,S:null,V:null},Te=Object.prototype.hasOwnProperty;function D(N,ee,ue,se,we,Pe){return ue=Pe.ref,{$$typeof:i,type:N,key:ee,ref:ue!==void 0?ue:null,props:Pe}}function b(N,ee){return D(N.type,ee,void 0,void 0,void 0,N.props)}function R(N){return typeof N=="object"&&N!==null&&N.$$typeof===i}function V(N){var ee={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ue){return ee[ue]})}var O=/\/+/g;function M(N,ee){return typeof N=="object"&&N!==null&&N.key!=null?V(""+N.key):ee.toString(36)}function C(){}function Vt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(C,C):(N.status="pending",N.then(function(ee){N.status==="pending"&&(N.status="fulfilled",N.value=ee)},function(ee){N.status==="pending"&&(N.status="rejected",N.reason=ee)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ut(N,ee,ue,se,we){var Pe=typeof N;(Pe==="undefined"||Pe==="boolean")&&(N=null);var Se=!1;if(N===null)Se=!0;else switch(Pe){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(N.$$typeof){case i:case e:Se=!0;break;case y:return Se=N._init,ut(Se(N._payload),ee,ue,se,we)}}if(Se)return we=we(N),Se=se===""?"."+M(N,0):se,_e(we)?(ue="",Se!=null&&(ue=Se.replace(O,"$&/")+"/"),ut(we,ee,ue,"",function(Ar){return Ar})):we!=null&&(R(we)&&(we=b(we,ue+(we.key==null||N&&N.key===we.key?"":(""+we.key).replace(O,"$&/")+"/")+Se)),ee.push(we)),1;Se=0;var Qt=se===""?".":se+":";if(_e(N))for(var st=0;st<N.length;st++)se=N[st],Pe=Qt+M(se,st),Se+=ut(se,ee,ue,Pe,we);else if(st=I(N),typeof st=="function")for(N=st.call(N),st=0;!(se=N.next()).done;)se=se.value,Pe=Qt+M(se,st++),Se+=ut(se,ee,ue,Pe,we);else if(Pe==="object"){if(typeof N.then=="function")return ut(Vt(N),ee,ue,se,we);throw ee=String(N),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return Se}function K(N,ee,ue){if(N==null)return N;var se=[],we=0;return ut(N,se,"","",function(Pe){return ee.call(ue,Pe,we++)}),se}function ie(N){if(N._status===-1){var ee=N._result;ee=ee(),ee.then(function(ue){(N._status===0||N._status===-1)&&(N._status=1,N._result=ue)},function(ue){(N._status===0||N._status===-1)&&(N._status=2,N._result=ue)}),N._status===-1&&(N._status=0,N._result=ee)}if(N._status===1)return N._result.default;throw N._result}var pe=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function Le(){}return De.Children={map:K,forEach:function(N,ee,ue){K(N,function(){ee.apply(this,arguments)},ue)},count:function(N){var ee=0;return K(N,function(){ee++}),ee},toArray:function(N){return K(N,function(ee){return ee})||[]},only:function(N){if(!R(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},De.Component=Y,De.Fragment=t,De.Profiler=a,De.PureComponent=de,De.StrictMode=n,De.Suspense=m,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=he,De.__COMPILER_RUNTIME={__proto__:null,c:function(N){return he.H.useMemoCache(N)}},De.cache=function(N){return function(){return N.apply(null,arguments)}},De.cloneElement=function(N,ee,ue){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var se=G({},N.props),we=N.key,Pe=void 0;if(ee!=null)for(Se in ee.ref!==void 0&&(Pe=void 0),ee.key!==void 0&&(we=""+ee.key),ee)!Te.call(ee,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&ee.ref===void 0||(se[Se]=ee[Se]);var Se=arguments.length-2;if(Se===1)se.children=ue;else if(1<Se){for(var Qt=Array(Se),st=0;st<Se;st++)Qt[st]=arguments[st+2];se.children=Qt}return D(N.type,we,void 0,void 0,Pe,se)},De.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},De.createElement=function(N,ee,ue){var se,we={},Pe=null;if(ee!=null)for(se in ee.key!==void 0&&(Pe=""+ee.key),ee)Te.call(ee,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(we[se]=ee[se]);var Se=arguments.length-2;if(Se===1)we.children=ue;else if(1<Se){for(var Qt=Array(Se),st=0;st<Se;st++)Qt[st]=arguments[st+2];we.children=Qt}if(N&&N.defaultProps)for(se in Se=N.defaultProps,Se)we[se]===void 0&&(we[se]=Se[se]);return D(N,Pe,void 0,void 0,null,we)},De.createRef=function(){return{current:null}},De.forwardRef=function(N){return{$$typeof:f,render:N}},De.isValidElement=R,De.lazy=function(N){return{$$typeof:y,_payload:{_status:-1,_result:N},_init:ie}},De.memo=function(N,ee){return{$$typeof:g,type:N,compare:ee===void 0?null:ee}},De.startTransition=function(N){var ee=he.T,ue={};he.T=ue;try{var se=N(),we=he.S;we!==null&&we(ue,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(Le,pe)}catch(Pe){pe(Pe)}finally{he.T=ee}},De.unstable_useCacheRefresh=function(){return he.H.useCacheRefresh()},De.use=function(N){return he.H.use(N)},De.useActionState=function(N,ee,ue){return he.H.useActionState(N,ee,ue)},De.useCallback=function(N,ee){return he.H.useCallback(N,ee)},De.useContext=function(N){return he.H.useContext(N)},De.useDebugValue=function(){},De.useDeferredValue=function(N,ee){return he.H.useDeferredValue(N,ee)},De.useEffect=function(N,ee,ue){var se=he.H;if(typeof ue=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return se.useEffect(N,ee)},De.useId=function(){return he.H.useId()},De.useImperativeHandle=function(N,ee,ue){return he.H.useImperativeHandle(N,ee,ue)},De.useInsertionEffect=function(N,ee){return he.H.useInsertionEffect(N,ee)},De.useLayoutEffect=function(N,ee){return he.H.useLayoutEffect(N,ee)},De.useMemo=function(N,ee){return he.H.useMemo(N,ee)},De.useOptimistic=function(N,ee){return he.H.useOptimistic(N,ee)},De.useReducer=function(N,ee,ue){return he.H.useReducer(N,ee,ue)},De.useRef=function(N){return he.H.useRef(N)},De.useState=function(N){return he.H.useState(N)},De.useSyncExternalStore=function(N,ee,ue){return he.H.useSyncExternalStore(N,ee,ue)},De.useTransition=function(){return he.H.useTransition()},De.version="19.1.1",De}var pI;function py(){return pI||(pI=1,t_.exports=ID()),t_.exports}var Qe=py();const AD=Pb(Qe);var n_={exports:{}},bc={},r_={exports:{}},i_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gI;function bD(){return gI||(gI=1,(function(i){function e(K,ie){var pe=K.length;K.push(ie);e:for(;0<pe;){var Le=pe-1>>>1,N=K[Le];if(0<a(N,ie))K[Le]=ie,K[pe]=N,pe=Le;else break e}}function t(K){return K.length===0?null:K[0]}function n(K){if(K.length===0)return null;var ie=K[0],pe=K.pop();if(pe!==ie){K[0]=pe;e:for(var Le=0,N=K.length,ee=N>>>1;Le<ee;){var ue=2*(Le+1)-1,se=K[ue],we=ue+1,Pe=K[we];if(0>a(se,pe))we<N&&0>a(Pe,se)?(K[Le]=Pe,K[we]=pe,Le=we):(K[Le]=se,K[ue]=pe,Le=ue);else if(we<N&&0>a(Pe,pe))K[Le]=Pe,K[we]=pe,Le=we;else break e}}return ie}function a(K,ie){var pe=K.sortIndex-ie.sortIndex;return pe!==0?pe:K.id-ie.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();i.unstable_now=function(){return c.now()-f}}var m=[],g=[],y=1,T=null,I=3,x=!1,G=!1,W=!1,Y=!1,ge=typeof setTimeout=="function"?setTimeout:null,de=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;function _e(K){for(var ie=t(g);ie!==null;){if(ie.callback===null)n(g);else if(ie.startTime<=K)n(g),ie.sortIndex=ie.expirationTime,e(m,ie);else break;ie=t(g)}}function he(K){if(W=!1,_e(K),!G)if(t(m)!==null)G=!0,Te||(Te=!0,M());else{var ie=t(g);ie!==null&&ut(he,ie.startTime-K)}}var Te=!1,D=-1,b=5,R=-1;function V(){return Y?!0:!(i.unstable_now()-R<b)}function O(){if(Y=!1,Te){var K=i.unstable_now();R=K;var ie=!0;try{e:{G=!1,W&&(W=!1,de(D),D=-1),x=!0;var pe=I;try{t:{for(_e(K),T=t(m);T!==null&&!(T.expirationTime>K&&V());){var Le=T.callback;if(typeof Le=="function"){T.callback=null,I=T.priorityLevel;var N=Le(T.expirationTime<=K);if(K=i.unstable_now(),typeof N=="function"){T.callback=N,_e(K),ie=!0;break t}T===t(m)&&n(m),_e(K)}else n(m);T=t(m)}if(T!==null)ie=!0;else{var ee=t(g);ee!==null&&ut(he,ee.startTime-K),ie=!1}}break e}finally{T=null,I=pe,x=!1}ie=void 0}}finally{ie?M():Te=!1}}}var M;if(typeof ne=="function")M=function(){ne(O)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,Vt=C.port2;C.port1.onmessage=O,M=function(){Vt.postMessage(null)}}else M=function(){ge(O,0)};function ut(K,ie){D=ge(function(){K(i.unstable_now())},ie)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(K){K.callback=null},i.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<K?Math.floor(1e3/K):5},i.unstable_getCurrentPriorityLevel=function(){return I},i.unstable_next=function(K){switch(I){case 1:case 2:case 3:var ie=3;break;default:ie=I}var pe=I;I=ie;try{return K()}finally{I=pe}},i.unstable_requestPaint=function(){Y=!0},i.unstable_runWithPriority=function(K,ie){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var pe=I;I=K;try{return ie()}finally{I=pe}},i.unstable_scheduleCallback=function(K,ie,pe){var Le=i.unstable_now();switch(typeof pe=="object"&&pe!==null?(pe=pe.delay,pe=typeof pe=="number"&&0<pe?Le+pe:Le):pe=Le,K){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=pe+N,K={id:y++,callback:ie,priorityLevel:K,startTime:pe,expirationTime:N,sortIndex:-1},pe>Le?(K.sortIndex=pe,e(g,K),t(m)===null&&K===t(g)&&(W?(de(D),D=-1):W=!0,ut(he,pe-Le))):(K.sortIndex=N,e(m,K),G||x||(G=!0,Te||(Te=!0,M()))),K},i.unstable_shouldYield=V,i.unstable_wrapCallback=function(K){var ie=I;return function(){var pe=I;I=ie;try{return K.apply(this,arguments)}finally{I=pe}}}})(i_)),i_}var _I;function SD(){return _I||(_I=1,r_.exports=bD()),r_.exports}var s_={exports:{}},pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yI;function RD(){if(yI)return pn;yI=1;var i=py();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var n={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(m,g,y){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:m,containerInfo:g,implementation:y}}var c=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=n,pn.createPortal=function(m,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(m,g,null,y)},pn.flushSync=function(m){var g=c.T,y=n.p;try{if(c.T=null,n.p=2,m)return m()}finally{c.T=g,n.p=y,n.d.f()}},pn.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,n.d.C(m,g))},pn.prefetchDNS=function(m){typeof m=="string"&&n.d.D(m)},pn.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var y=g.as,T=f(y,g.crossOrigin),I=typeof g.integrity=="string"?g.integrity:void 0,x=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?n.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:I,fetchPriority:x}):y==="script"&&n.d.X(m,{crossOrigin:T,integrity:I,fetchPriority:x,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},pn.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=f(g.as,g.crossOrigin);n.d.M(m,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&n.d.M(m)},pn.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,T=f(y,g.crossOrigin);n.d.L(m,y,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},pn.preloadModule=function(m,g){if(typeof m=="string")if(g){var y=f(g.as,g.crossOrigin);n.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else n.d.m(m)},pn.requestFormReset=function(m){n.d.r(m)},pn.unstable_batchedUpdates=function(m,g){return m(g)},pn.useFormState=function(m,g,y){return c.H.useFormState(m,g,y)},pn.useFormStatus=function(){return c.H.useHostTransitionStatus()},pn.version="19.1.1",pn}var vI;function CD(){if(vI)return s_.exports;vI=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),s_.exports=RD(),s_.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var EI;function DD(){if(EI)return bc;EI=1;var i=SD(),e=py(),t=CD();function n(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var s=r,o=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(o=s.return),r=s.return;while(r)}return s.tag===3?o:null}function c(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function f(r){if(l(r)!==r)throw Error(n(188))}function m(r){var s=r.alternate;if(!s){if(s=l(r),s===null)throw Error(n(188));return s!==r?null:r}for(var o=r,u=s;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return f(d),r;if(p===u)return f(d),s;p=p.sibling}throw Error(n(188))}if(o.return!==u.return)o=d,u=p;else{for(var E=!1,w=d.child;w;){if(w===o){E=!0,o=d,u=p;break}if(w===u){E=!0,u=d,o=p;break}w=w.sibling}if(!E){for(w=p.child;w;){if(w===o){E=!0,o=p,u=d;break}if(w===u){E=!0,u=p,o=d;break}w=w.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?r:s}function g(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=g(r),s!==null)return s;r=r.sibling}return null}var y=Object.assign,T=Symbol.for("react.element"),I=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),ge=Symbol.for("react.provider"),de=Symbol.for("react.consumer"),ne=Symbol.for("react.context"),_e=Symbol.for("react.forward_ref"),he=Symbol.for("react.suspense"),Te=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function M(r){return r===null||typeof r!="object"?null:(r=O&&r[O]||r["@@iterator"],typeof r=="function"?r:null)}var C=Symbol.for("react.client.reference");function Vt(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===C?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case G:return"Fragment";case Y:return"Profiler";case W:return"StrictMode";case he:return"Suspense";case Te:return"SuspenseList";case R:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case x:return"Portal";case ne:return(r.displayName||"Context")+".Provider";case de:return(r._context.displayName||"Context")+".Consumer";case _e:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case D:return s=r.displayName||null,s!==null?s:Vt(r.type)||"Memo";case b:s=r._payload,r=r._init;try{return Vt(r(s))}catch{}}return null}var ut=Array.isArray,K=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pe={pending:!1,data:null,method:null,action:null},Le=[],N=-1;function ee(r){return{current:r}}function ue(r){0>N||(r.current=Le[N],Le[N]=null,N--)}function se(r,s){N++,Le[N]=r.current,r.current=s}var we=ee(null),Pe=ee(null),Se=ee(null),Qt=ee(null);function st(r,s){switch(se(Se,s),se(Pe,r),se(we,null),s.nodeType){case 9:case 11:r=(r=s.documentElement)&&(r=r.namespaceURI)?zw(r):0;break;default:if(r=s.tagName,s=s.namespaceURI)s=zw(s),r=Fw(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}ue(we),se(we,r)}function Ar(){ue(we),ue(Pe),ue(Se)}function Ki(r){r.memoizedState!==null&&se(Qt,r);var s=we.current,o=Fw(s,r.type);s!==o&&(se(Pe,r),se(we,o))}function ii(r){Pe.current===r&&(ue(we),ue(Pe)),Qt.current===r&&(ue(Qt),vc._currentValue=pe)}var ta=Object.prototype.hasOwnProperty,na=i.unstable_scheduleCallback,ra=i.unstable_cancelCallback,gu=i.unstable_shouldYield,Qh=i.unstable_requestPaint,Wn=i.unstable_now,ep=i.unstable_getCurrentPriorityLevel,_u=i.unstable_ImmediatePriority,vo=i.unstable_UserBlockingPriority,ia=i.unstable_NormalPriority,tp=i.unstable_LowPriority,Eo=i.unstable_IdlePriority,yu=i.log,Yh=i.unstable_setDisableYieldValue,Et=null,$e=null;function Mn(r){if(typeof yu=="function"&&Yh(r),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(Et,r)}catch{}}var fn=Math.clz32?Math.clz32:sa,$h=Math.log,np=Math.LN2;function sa(r){return r>>>=0,r===0?32:31-($h(r)/np|0)|0}var aa=256,oa=4194304;function dr(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function To(r,s,o){var u=r.pendingLanes;if(u===0)return 0;var d=0,p=r.suspendedLanes,E=r.pingedLanes;r=r.warmLanes;var w=u&134217727;return w!==0?(u=w&~p,u!==0?d=dr(u):(E&=w,E!==0?d=dr(E):o||(o=w&~r,o!==0&&(d=dr(o))))):(w=u&~p,w!==0?d=dr(w):E!==0?d=dr(E):o||(o=u&~r,o!==0&&(d=dr(o)))),d===0?0:s!==0&&s!==d&&(s&p)===0&&(p=d&-d,o=s&-s,p>=o||p===32&&(o&4194048)!==0)?s:d}function la(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function vu(r,s){switch(r){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Eu(){var r=aa;return aa<<=1,(aa&4194048)===0&&(aa=256),r}function Tu(){var r=oa;return oa<<=1,(oa&62914560)===0&&(oa=4194304),r}function si(r){for(var s=[],o=0;31>o;o++)s.push(r);return s}function ai(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function wu(r,s,o,u,d,p){var E=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var w=r.entanglements,S=r.expirationTimes,z=r.hiddenUpdates;for(o=E&~o;0<o;){var Q=31-fn(o),X=1<<Q;w[Q]=0,S[Q]=-1;var F=z[Q];if(F!==null)for(z[Q]=null,Q=0;Q<F.length;Q++){var q=F[Q];q!==null&&(q.lane&=-536870913)}o&=~X}u!==0&&br(r,u,0),p!==0&&d===0&&r.tag!==0&&(r.suspendedLanes|=p&~(E&~s))}function br(r,s,o){r.pendingLanes|=s,r.suspendedLanes&=~s;var u=31-fn(s);r.entangledLanes|=s,r.entanglements[u]=r.entanglements[u]|1073741824|o&4194090}function Iu(r,s){var o=r.entangledLanes|=s;for(r=r.entanglements;o;){var u=31-fn(o),d=1<<u;d&s|r[u]&s&&(r[u]|=s),o&=~d}}function Qi(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function wo(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function Yi(){var r=ie.p;return r!==0?r:(r=window.event,r===void 0?32:aI(r.type))}function Wh(r,s){var o=ie.p;try{return ie.p=r,s()}finally{ie.p=o}}var ht=Math.random().toString(36).slice(2),zt="__reactFiber$"+ht,xt="__reactProps$"+ht,Xn="__reactContainer$"+ht,Au="__reactEvents$"+ht,rp="__reactListeners$"+ht,$i="__reactHandles$"+ht,Xh="__reactResources$"+ht,ua="__reactMarker$"+ht;function Wi(r){delete r[zt],delete r[xt],delete r[Au],delete r[rp],delete r[$i]}function oi(r){var s=r[zt];if(s)return s;for(var o=r.parentNode;o;){if(s=o[Xn]||o[zt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(r=Gw(r);r!==null;){if(o=r[zt])return o;r=Gw(r)}return s}r=o,o=r.parentNode}return null}function Sr(r){if(r=r[zt]||r[Xn]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function Rr(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(n(33))}function En(r){var s=r[Xh];return s||(s=r[Xh]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Rt(r){r[ua]=!0}var bu=new Set,Io={};function fr(r,s){li(r,s),li(r+"Capture",s)}function li(r,s){for(Io[r]=s,r=0;r<s.length;r++)bu.add(s[r])}var Jh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zh={},ca={};function ed(r){return ta.call(ca,r)?!0:ta.call(Zh,r)?!1:Jh.test(r)?ca[r]=!0:(Zh[r]=!0,!1)}function Xi(r,s,o){if(ed(s))if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+o)}}function Cr(r,s,o){if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+o)}}function rn(r,s,o,u){if(u===null)r.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}r.setAttributeNS(s,o,""+u)}}var ha,td;function ui(r){if(ha===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);ha=s&&s[1]||"",td=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ha+r+td}var Ao=!1;function bo(r,s){if(!r||Ao)return"";Ao=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(q){var F=q}Reflect.construct(r,[],X)}else{try{X.call()}catch(q){F=q}r.call(X.prototype)}}else{try{throw Error()}catch(q){F=q}(X=r())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(q){if(q&&F&&typeof q.stack=="string")return[q.stack,F.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=u.DetermineComponentFrameRoot(),E=p[0],w=p[1];if(E&&w){var S=E.split(`
`),z=w.split(`
`);for(d=u=0;u<S.length&&!S[u].includes("DetermineComponentFrameRoot");)u++;for(;d<z.length&&!z[d].includes("DetermineComponentFrameRoot");)d++;if(u===S.length||d===z.length)for(u=S.length-1,d=z.length-1;1<=u&&0<=d&&S[u]!==z[d];)d--;for(;1<=u&&0<=d;u--,d--)if(S[u]!==z[d]){if(u!==1||d!==1)do if(u--,d--,0>d||S[u]!==z[d]){var Q=`
`+S[u].replace(" at new "," at ");return r.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",r.displayName)),Q}while(1<=u&&0<=d);break}}}finally{Ao=!1,Error.prepareStackTrace=o}return(o=r?r.displayName||r.name:"")?ui(o):""}function Su(r){switch(r.tag){case 26:case 27:case 5:return ui(r.type);case 16:return ui("Lazy");case 13:return ui("Suspense");case 19:return ui("SuspenseList");case 0:case 15:return bo(r.type,!1);case 11:return bo(r.type.render,!1);case 1:return bo(r.type,!0);case 31:return ui("Activity");default:return""}}function So(r){try{var s="";do s+=Su(r),r=r.return;while(r);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Tn(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Ru(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ip(r){var s=Ru(r)?"checked":"value",o=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),u=""+r[s];if(!r.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(E){u=""+E,p.call(this,E)}}),Object.defineProperty(r,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Ro(r){r._valueTracker||(r._valueTracker=ip(r))}function Cu(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return r&&(u=Ru(r)?r.checked?"true":"false":r.value),r=u,r!==o?(s.setValue(r),!0):!1}function da(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var sp=/[\n"\\]/g;function Ot(r){return r.replace(sp,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Ln(r,s,o,u,d,p,E,w){r.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?r.type=E:r.removeAttribute("type"),s!=null?E==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+Tn(s)):r.value!==""+Tn(s)&&(r.value=""+Tn(s)):E!=="submit"&&E!=="reset"||r.removeAttribute("value"),s!=null?Ji(r,E,Tn(s)):o!=null?Ji(r,E,Tn(o)):u!=null&&r.removeAttribute("value"),d==null&&p!=null&&(r.defaultChecked=!!p),d!=null&&(r.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?r.name=""+Tn(w):r.removeAttribute("name")}function fa(r,s,o,u,d,p,E,w){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(r.type=p),s!=null||o!=null){if(!(p!=="submit"&&p!=="reset"||s!=null))return;o=o!=null?""+Tn(o):"",s=s!=null?""+Tn(s):o,w||s===r.value||(r.value=s),r.defaultValue=s}u=u??d,u=typeof u!="function"&&typeof u!="symbol"&&!!u,r.checked=w?r.checked:!!u,r.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(r.name=E)}function Ji(r,s,o){s==="number"&&da(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function ci(r,s,o,u){if(r=r.options,s){s={};for(var d=0;d<o.length;d++)s["$"+o[d]]=!0;for(o=0;o<r.length;o++)d=s.hasOwnProperty("$"+r[o].value),r[o].selected!==d&&(r[o].selected=d),d&&u&&(r[o].defaultSelected=!0)}else{for(o=""+Tn(o),s=null,d=0;d<r.length;d++){if(r[d].value===o){r[d].selected=!0,u&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function et(r,s,o){if(s!=null&&(s=""+Tn(s),s!==r.value&&(r.value=s),o==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=o!=null?""+Tn(o):""}function ma(r,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(n(92));if(ut(u)){if(1<u.length)throw Error(n(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=Tn(s),r.defaultValue=o,u=r.textContent,u===o&&u!==""&&u!==null&&(r.value=u)}function Jn(r,s){if(s){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=s;return}}r.textContent=s}var pa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nd(r,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":u?r.setProperty(s,o):typeof o!="number"||o===0||pa.has(s)?s==="float"?r.cssFloat=o:r[s]=(""+o).trim():r[s]=o+"px"}function Du(r,s,o){if(s!=null&&typeof s!="object")throw Error(n(62));if(r=r.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?r.setProperty(u,""):u==="float"?r.cssFloat="":r[u]="");for(var d in s)u=s[d],s.hasOwnProperty(d)&&o[d]!==u&&nd(r,d,u)}else for(var p in s)s.hasOwnProperty(p)&&nd(r,p,s[p])}function Nu(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ap=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),op=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Co(r){return op.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var hi=null;function Zn(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var di=null,fi=null;function Pu(r){var s=Sr(r);if(s&&(r=s.stateNode)){var o=r[xt]||null;e:switch(r=s.stateNode,s.type){case"input":if(Ln(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=r;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Ot(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==r&&u.form===r.form){var d=u[xt]||null;if(!d)throw Error(n(90));Ln(u,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===r.form&&Cu(u)}break e;case"textarea":et(r,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&ci(r,!!o.multiple,s,!1)}}}var Dr=!1;function rd(r,s,o){if(Dr)return r(s,o);Dr=!0;try{var u=r(s);return u}finally{if(Dr=!1,(di!==null||fi!==null)&&(Wd(),di&&(s=di,r=fi,fi=di=null,Pu(s),r)))for(s=0;s<r.length;s++)Pu(r[s])}}function ga(r,s){var o=r.stateNode;if(o===null)return null;var u=o[xt]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break e;default:r=!1}if(r)return null;if(o&&typeof o!="function")throw Error(n(231,s,typeof o));return o}var mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),er=!1;if(mr)try{var _a={};Object.defineProperty(_a,"passive",{get:function(){er=!0}}),window.addEventListener("test",_a,_a),window.removeEventListener("test",_a,_a)}catch{er=!1}var Nr=null,Zi=null,mi=null;function Vu(){if(mi)return mi;var r,s=Zi,o=s.length,u,d="value"in Nr?Nr.value:Nr.textContent,p=d.length;for(r=0;r<o&&s[r]===d[r];r++);var E=o-r;for(u=1;u<=E&&s[o-u]===d[p-u];u++);return mi=d.slice(r,1<u?1-u:void 0)}function Pr(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Vr(){return!0}function xu(){return!1}function Yt(r){function s(o,u,d,p,E){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=E,this.currentTarget=null;for(var w in r)r.hasOwnProperty(w)&&(o=r[w],this[w]=o?o(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Vr:xu,this.isPropagationStopped=xu,this}return y(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Vr)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Vr)},persist:function(){},isPersistent:Vr}),s}var Ke={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Do=Yt(Ke),ya=y({},Ke,{view:0,detail:0}),id=Yt(ya),No,Po,xr,va=y({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wa,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==xr&&(xr&&r.type==="mousemove"?(No=r.screenX-xr.screenX,Po=r.screenY-xr.screenY):Po=No=0,xr=r),No)},movementY:function(r){return"movementY"in r?r.movementY:Po}}),tr=Yt(va),sd=y({},va,{dataTransfer:0}),lp=Yt(sd),Ea=y({},ya,{relatedTarget:0}),Vo=Yt(Ea),Ou=y({},Ke,{animationName:0,elapsedTime:0,pseudoElement:0}),xo=Yt(Ou),ad=y({},Ke,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Oo=Yt(ad),up=y({},Ke,{data:0}),ku=Yt(up),Ta={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},od={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ld={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=ld[r])?!!s[r]:!1}function wa(){return Mu}var ud=y({},ya,{key:function(r){if(r.key){var s=Ta[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Pr(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?od[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wa,charCode:function(r){return r.type==="keypress"?Pr(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Pr(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),ko=Yt(ud),cd=y({},va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lu=Yt(cd),pi=y({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wa}),hd=Yt(pi),dd=y({},Ke,{propertyName:0,elapsedTime:0,pseudoElement:0}),fd=Yt(dd),md=y({},va,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Mo=Yt(md),wn=y({},Ke,{newState:0,oldState:0}),pd=Yt(wn),gd=[9,13,27,32],Or=mr&&"CompositionEvent"in window,h=null;mr&&"documentMode"in document&&(h=document.documentMode);var _=mr&&"TextEvent"in window&&!h,v=mr&&(!Or||h&&8<h&&11>=h),A=" ",L=!1;function H(r,s){switch(r){case"keyup":return gd.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ae(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Be=!1;function Ft(r,s){switch(r){case"compositionend":return ae(s);case"keypress":return s.which!==32?null:(L=!0,A);case"textInput":return r=s.data,r===A&&L?null:r;default:return null}}function ze(r,s){if(Be)return r==="compositionend"||!Or&&H(r,s)?(r=Vu(),mi=Zi=Nr=null,Be=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return v&&s.locale!=="ko"?null:s.data;default:return null}}var $t={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qt(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!$t[r.type]:s==="textarea"}function gi(r,s,o,u){di?fi?fi.push(u):fi=[u]:di=u,s=nf(s,"onChange"),0<s.length&&(o=new Do("onChange","change",null,o,u),r.push({event:o,listeners:s}))}var sn=null,kr=null;function Uu(r){kw(r,0)}function _d(r){var s=Rr(r);if(Cu(s))return r}function nE(r,s){if(r==="change")return s}var rE=!1;if(mr){var cp;if(mr){var hp="oninput"in document;if(!hp){var iE=document.createElement("div");iE.setAttribute("oninput","return;"),hp=typeof iE.oninput=="function"}cp=hp}else cp=!1;rE=cp&&(!document.documentMode||9<document.documentMode)}function sE(){sn&&(sn.detachEvent("onpropertychange",aE),kr=sn=null)}function aE(r){if(r.propertyName==="value"&&_d(kr)){var s=[];gi(s,kr,r,Zn(r)),rd(Uu,s)}}function X1(r,s,o){r==="focusin"?(sE(),sn=s,kr=o,sn.attachEvent("onpropertychange",aE)):r==="focusout"&&sE()}function J1(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return _d(kr)}function Z1(r,s){if(r==="click")return _d(s)}function eC(r,s){if(r==="input"||r==="change")return _d(s)}function tC(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Un=typeof Object.is=="function"?Object.is:tC;function Bu(r,s){if(Un(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var o=Object.keys(r),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!ta.call(s,d)||!Un(r[d],s[d]))return!1}return!0}function oE(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function lE(r,s){var o=oE(r);r=0;for(var u;o;){if(o.nodeType===3){if(u=r+o.textContent.length,r<=s&&u>=s)return{node:o,offset:s-r};r=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=oE(o)}}function uE(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?uE(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function cE(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=da(r.document);s instanceof r.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)r=s.contentWindow;else break;s=da(r.document)}return s}function dp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}var nC=mr&&"documentMode"in document&&11>=document.documentMode,Lo=null,fp=null,zu=null,mp=!1;function hE(r,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;mp||Lo==null||Lo!==da(u)||(u=Lo,"selectionStart"in u&&dp(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),zu&&Bu(zu,u)||(zu=u,u=nf(fp,"onSelect"),0<u.length&&(s=new Do("onSelect","select",null,s,o),r.push({event:s,listeners:u}),s.target=Lo)))}function Ia(r,s){var o={};return o[r.toLowerCase()]=s.toLowerCase(),o["Webkit"+r]="webkit"+s,o["Moz"+r]="moz"+s,o}var Uo={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionrun:Ia("Transition","TransitionRun"),transitionstart:Ia("Transition","TransitionStart"),transitioncancel:Ia("Transition","TransitionCancel"),transitionend:Ia("Transition","TransitionEnd")},pp={},dE={};mr&&(dE=document.createElement("div").style,"AnimationEvent"in window||(delete Uo.animationend.animation,delete Uo.animationiteration.animation,delete Uo.animationstart.animation),"TransitionEvent"in window||delete Uo.transitionend.transition);function Aa(r){if(pp[r])return pp[r];if(!Uo[r])return r;var s=Uo[r],o;for(o in s)if(s.hasOwnProperty(o)&&o in dE)return pp[r]=s[o];return r}var fE=Aa("animationend"),mE=Aa("animationiteration"),pE=Aa("animationstart"),rC=Aa("transitionrun"),iC=Aa("transitionstart"),sC=Aa("transitioncancel"),gE=Aa("transitionend"),_E=new Map,gp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gp.push("scrollEnd");function pr(r,s){_E.set(r,s),fr(s,[r])}var yE=new WeakMap;function nr(r,s){if(typeof r=="object"&&r!==null){var o=yE.get(r);return o!==void 0?o:(s={value:r,source:s,stack:So(s)},yE.set(r,s),s)}return{value:r,source:s,stack:So(s)}}var rr=[],Bo=0,_p=0;function yd(){for(var r=Bo,s=_p=Bo=0;s<r;){var o=rr[s];rr[s++]=null;var u=rr[s];rr[s++]=null;var d=rr[s];rr[s++]=null;var p=rr[s];if(rr[s++]=null,u!==null&&d!==null){var E=u.pending;E===null?d.next=d:(d.next=E.next,E.next=d),u.pending=d}p!==0&&vE(o,d,p)}}function vd(r,s,o,u){rr[Bo++]=r,rr[Bo++]=s,rr[Bo++]=o,rr[Bo++]=u,_p|=u,r.lanes|=u,r=r.alternate,r!==null&&(r.lanes|=u)}function yp(r,s,o,u){return vd(r,s,o,u),Ed(r)}function zo(r,s){return vd(r,null,null,s),Ed(r)}function vE(r,s,o){r.lanes|=o;var u=r.alternate;u!==null&&(u.lanes|=o);for(var d=!1,p=r.return;p!==null;)p.childLanes|=o,u=p.alternate,u!==null&&(u.childLanes|=o),p.tag===22&&(r=p.stateNode,r===null||r._visibility&1||(d=!0)),r=p,p=p.return;return r.tag===3?(p=r.stateNode,d&&s!==null&&(d=31-fn(o),r=p.hiddenUpdates,u=r[d],u===null?r[d]=[s]:u.push(s),s.lane=o|536870912),p):null}function Ed(r){if(50<hc)throw hc=0,Ag=null,Error(n(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var Fo={};function aC(r,s,o,u){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(r,s,o,u){return new aC(r,s,o,u)}function vp(r){return r=r.prototype,!(!r||!r.isReactComponent)}function _i(r,s){var o=r.alternate;return o===null?(o=Bn(r.tag,s,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o.alternate=r,r.alternate=o):(o.pendingProps=s,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,s=r.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o}function EE(r,s){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,s=o.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function Td(r,s,o,u,d,p){var E=0;if(u=r,typeof r=="function")vp(r)&&(E=1);else if(typeof r=="string")E=lD(r,o,we.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case R:return r=Bn(31,o,s,d),r.elementType=R,r.lanes=p,r;case G:return ba(o.children,d,p,s);case W:E=8,d|=24;break;case Y:return r=Bn(12,o,s,d|2),r.elementType=Y,r.lanes=p,r;case he:return r=Bn(13,o,s,d),r.elementType=he,r.lanes=p,r;case Te:return r=Bn(19,o,s,d),r.elementType=Te,r.lanes=p,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ge:case ne:E=10;break e;case de:E=9;break e;case _e:E=11;break e;case D:E=14;break e;case b:E=16,u=null;break e}E=29,o=Error(n(130,r===null?"null":typeof r,"")),u=null}return s=Bn(E,o,s,d),s.elementType=r,s.type=u,s.lanes=p,s}function ba(r,s,o,u){return r=Bn(7,r,u,s),r.lanes=o,r}function Ep(r,s,o){return r=Bn(6,r,null,s),r.lanes=o,r}function Tp(r,s,o){return s=Bn(4,r.children!==null?r.children:[],r.key,s),s.lanes=o,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}var qo=[],jo=0,wd=null,Id=0,ir=[],sr=0,Sa=null,yi=1,vi="";function Ra(r,s){qo[jo++]=Id,qo[jo++]=wd,wd=r,Id=s}function TE(r,s,o){ir[sr++]=yi,ir[sr++]=vi,ir[sr++]=Sa,Sa=r;var u=yi;r=vi;var d=32-fn(u)-1;u&=~(1<<d),o+=1;var p=32-fn(s)+d;if(30<p){var E=d-d%5;p=(u&(1<<E)-1).toString(32),u>>=E,d-=E,yi=1<<32-fn(s)+d|o<<d|u,vi=p+r}else yi=1<<p|o<<d|u,vi=r}function wp(r){r.return!==null&&(Ra(r,1),TE(r,1,0))}function Ip(r){for(;r===wd;)wd=qo[--jo],qo[jo]=null,Id=qo[--jo],qo[jo]=null;for(;r===Sa;)Sa=ir[--sr],ir[sr]=null,vi=ir[--sr],ir[sr]=null,yi=ir[--sr],ir[sr]=null}var In=null,Tt=null,Ge=!1,Ca=null,Mr=!1,Ap=Error(n(519));function Da(r){var s=Error(n(418,""));throw ju(nr(s,r)),Ap}function wE(r){var s=r.stateNode,o=r.type,u=r.memoizedProps;switch(s[zt]=r,s[xt]=u,o){case"dialog":Oe("cancel",s),Oe("close",s);break;case"iframe":case"object":case"embed":Oe("load",s);break;case"video":case"audio":for(o=0;o<fc.length;o++)Oe(fc[o],s);break;case"source":Oe("error",s);break;case"img":case"image":case"link":Oe("error",s),Oe("load",s);break;case"details":Oe("toggle",s);break;case"input":Oe("invalid",s),fa(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Ro(s);break;case"select":Oe("invalid",s);break;case"textarea":Oe("invalid",s),ma(s,u.value,u.defaultValue,u.children),Ro(s)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||Bw(s.textContent,o)?(u.popover!=null&&(Oe("beforetoggle",s),Oe("toggle",s)),u.onScroll!=null&&Oe("scroll",s),u.onScrollEnd!=null&&Oe("scrollend",s),u.onClick!=null&&(s.onclick=rf),s=!0):s=!1,s||Da(r)}function IE(r){for(In=r.return;In;)switch(In.tag){case 5:case 13:Mr=!1;return;case 27:case 3:Mr=!0;return;default:In=In.return}}function Fu(r){if(r!==In)return!1;if(!Ge)return IE(r),Ge=!0,!1;var s=r.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=r.type,o=!(o!=="form"&&o!=="button")||zg(r.type,r.memoizedProps)),o=!o),o&&Tt&&Da(r),IE(r),s===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(n(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(o=r.data,o==="/$"){if(s===0){Tt=_r(r.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;r=r.nextSibling}Tt=null}}else s===27?(s=Tt,ps(r.type)?(r=Hg,Hg=null,Tt=r):Tt=s):Tt=In?_r(r.stateNode.nextSibling):null;return!0}function qu(){Tt=In=null,Ge=!1}function AE(){var r=Ca;return r!==null&&(Pn===null?Pn=r:Pn.push.apply(Pn,r),Ca=null),r}function ju(r){Ca===null?Ca=[r]:Ca.push(r)}var bp=ee(null),Na=null,Ei=null;function es(r,s,o){se(bp,s._currentValue),s._currentValue=o}function Ti(r){r._currentValue=bp.current,ue(bp)}function Sp(r,s,o){for(;r!==null;){var u=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),r===o)break;r=r.return}}function Rp(r,s,o,u){var d=r.child;for(d!==null&&(d.return=r);d!==null;){var p=d.dependencies;if(p!==null){var E=d.child;p=p.firstContext;e:for(;p!==null;){var w=p;p=d;for(var S=0;S<s.length;S++)if(w.context===s[S]){p.lanes|=o,w=p.alternate,w!==null&&(w.lanes|=o),Sp(p.return,o,r),u||(E=null);break e}p=w.next}}else if(d.tag===18){if(E=d.return,E===null)throw Error(n(341));E.lanes|=o,p=E.alternate,p!==null&&(p.lanes|=o),Sp(E,o,r),E=null}else E=d.child;if(E!==null)E.return=d;else for(E=d;E!==null;){if(E===r){E=null;break}if(d=E.sibling,d!==null){d.return=E.return,E=d;break}E=E.return}d=E}}function Hu(r,s,o,u){r=null;for(var d=s,p=!1;d!==null;){if(!p){if((d.flags&524288)!==0)p=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var E=d.alternate;if(E===null)throw Error(n(387));if(E=E.memoizedProps,E!==null){var w=d.type;Un(d.pendingProps.value,E.value)||(r!==null?r.push(w):r=[w])}}else if(d===Qt.current){if(E=d.alternate,E===null)throw Error(n(387));E.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(r!==null?r.push(vc):r=[vc])}d=d.return}r!==null&&Rp(s,r,o,u),s.flags|=262144}function Ad(r){for(r=r.firstContext;r!==null;){if(!Un(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function Pa(r){Na=r,Ei=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function mn(r){return bE(Na,r)}function bd(r,s){return Na===null&&Pa(r),bE(r,s)}function bE(r,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Ei===null){if(r===null)throw Error(n(308));Ei=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else Ei=Ei.next=s;return o}var oC=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(o,u){r.push(u)}};this.abort=function(){s.aborted=!0,r.forEach(function(o){return o()})}},lC=i.unstable_scheduleCallback,uC=i.unstable_NormalPriority,jt={$$typeof:ne,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cp(){return{controller:new oC,data:new Map,refCount:0}}function Gu(r){r.refCount--,r.refCount===0&&lC(uC,function(){r.controller.abort()})}var Ku=null,Dp=0,Ho=0,Go=null;function cC(r,s){if(Ku===null){var o=Ku=[];Dp=0,Ho=Pg(),Go={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Dp++,s.then(SE,SE),s}function SE(){if(--Dp===0&&Ku!==null){Go!==null&&(Go.status="fulfilled");var r=Ku;Ku=null,Ho=0,Go=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function hC(r,s){var o=[],u={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return r.then(function(){u.status="fulfilled",u.value=s;for(var d=0;d<o.length;d++)(0,o[d])(s)},function(d){for(u.status="rejected",u.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),u}var RE=K.S;K.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&cC(r,s),RE!==null&&RE(r,s)};var Va=ee(null);function Np(){var r=Va.current;return r!==null?r:at.pooledCache}function Sd(r,s){s===null?se(Va,Va.current):se(Va,s.pool)}function CE(){var r=Np();return r===null?null:{parent:jt._currentValue,pool:r}}var Qu=Error(n(460)),DE=Error(n(474)),Rd=Error(n(542)),Pp={then:function(){}};function NE(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Cd(){}function PE(r,s,o){switch(o=r[o],o===void 0?r.push(s):o!==s&&(s.then(Cd,Cd),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,xE(r),r;default:if(typeof s.status=="string")s.then(Cd,Cd);else{if(r=at,r!==null&&100<r.shellSuspendCounter)throw Error(n(482));r=s,r.status="pending",r.then(function(u){if(s.status==="pending"){var d=s;d.status="fulfilled",d.value=u}},function(u){if(s.status==="pending"){var d=s;d.status="rejected",d.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,xE(r),r}throw Yu=s,Qu}}var Yu=null;function VE(){if(Yu===null)throw Error(n(459));var r=Yu;return Yu=null,r}function xE(r){if(r===Qu||r===Rd)throw Error(n(483))}var ts=!1;function Vp(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xp(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function ns(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function rs(r,s,o){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,(We&2)!==0){var d=u.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s,s=Ed(r),vE(r,null,o),s}return vd(r,u,s,o),Ed(r)}function $u(r,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,Iu(r,o)}}function Op(r,s){var o=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};p===null?d=p=E:p=p.next=E,o=o.next}while(o!==null);p===null?d=p=s:p=p.next=s}else d=p=s;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,callbacks:u.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=s:r.next=s,o.lastBaseUpdate=s}var kp=!1;function Wu(){if(kp){var r=Go;if(r!==null)throw r}}function Xu(r,s,o,u){kp=!1;var d=r.updateQueue;ts=!1;var p=d.firstBaseUpdate,E=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var S=w,z=S.next;S.next=null,E===null?p=z:E.next=z,E=S;var Q=r.alternate;Q!==null&&(Q=Q.updateQueue,w=Q.lastBaseUpdate,w!==E&&(w===null?Q.firstBaseUpdate=z:w.next=z,Q.lastBaseUpdate=S))}if(p!==null){var X=d.baseState;E=0,Q=z=S=null,w=p;do{var F=w.lane&-536870913,q=F!==w.lane;if(q?(Fe&F)===F:(u&F)===F){F!==0&&F===Ho&&(kp=!0),Q!==null&&(Q=Q.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var be=r,Ie=w;F=s;var rt=o;switch(Ie.tag){case 1:if(be=Ie.payload,typeof be=="function"){X=be.call(rt,X,F);break e}X=be;break e;case 3:be.flags=be.flags&-65537|128;case 0:if(be=Ie.payload,F=typeof be=="function"?be.call(rt,X,F):be,F==null)break e;X=y({},X,F);break e;case 2:ts=!0}}F=w.callback,F!==null&&(r.flags|=64,q&&(r.flags|=8192),q=d.callbacks,q===null?d.callbacks=[F]:q.push(F))}else q={lane:F,tag:w.tag,payload:w.payload,callback:w.callback,next:null},Q===null?(z=Q=q,S=X):Q=Q.next=q,E|=F;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;q=w,w=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);Q===null&&(S=X),d.baseState=S,d.firstBaseUpdate=z,d.lastBaseUpdate=Q,p===null&&(d.shared.lanes=0),hs|=E,r.lanes=E,r.memoizedState=X}}function OE(r,s){if(typeof r!="function")throw Error(n(191,r));r.call(s)}function kE(r,s){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)OE(o[r],s)}var Ko=ee(null),Dd=ee(0);function ME(r,s){r=Ci,se(Dd,r),se(Ko,s),Ci=r|s.baseLanes}function Mp(){se(Dd,Ci),se(Ko,Ko.current)}function Lp(){Ci=Dd.current,ue(Ko),ue(Dd)}var is=0,Ne=null,tt=null,kt=null,Nd=!1,Qo=!1,xa=!1,Pd=0,Ju=0,Yo=null,dC=0;function Ct(){throw Error(n(321))}function Up(r,s){if(s===null)return!1;for(var o=0;o<s.length&&o<r.length;o++)if(!Un(r[o],s[o]))return!1;return!0}function Bp(r,s,o,u,d,p){return is=p,Ne=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,K.H=r===null||r.memoizedState===null?vT:ET,xa=!1,p=o(u,d),xa=!1,Qo&&(p=UE(s,o,u,d)),LE(r),p}function LE(r){K.H=Ld;var s=tt!==null&&tt.next!==null;if(is=0,kt=tt=Ne=null,Nd=!1,Ju=0,Yo=null,s)throw Error(n(300));r===null||Wt||(r=r.dependencies,r!==null&&Ad(r)&&(Wt=!0))}function UE(r,s,o,u){Ne=r;var d=0;do{if(Qo&&(Yo=null),Ju=0,Qo=!1,25<=d)throw Error(n(301));if(d+=1,kt=tt=null,r.updateQueue!=null){var p=r.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}K.H=vC,p=s(o,u)}while(Qo);return p}function fC(){var r=K.H,s=r.useState()[0];return s=typeof s.then=="function"?Zu(s):s,r=r.useState()[0],(tt!==null?tt.memoizedState:null)!==r&&(Ne.flags|=1024),s}function zp(){var r=Pd!==0;return Pd=0,r}function Fp(r,s,o){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~o}function qp(r){if(Nd){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Nd=!1}is=0,kt=tt=Ne=null,Qo=!1,Ju=Pd=0,Yo=null}function Dn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?Ne.memoizedState=kt=r:kt=kt.next=r,kt}function Mt(){if(tt===null){var r=Ne.alternate;r=r!==null?r.memoizedState:null}else r=tt.next;var s=kt===null?Ne.memoizedState:kt.next;if(s!==null)kt=s,tt=r;else{if(r===null)throw Ne.alternate===null?Error(n(467)):Error(n(310));tt=r,r={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},kt===null?Ne.memoizedState=kt=r:kt=kt.next=r}return kt}function jp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zu(r){var s=Ju;return Ju+=1,Yo===null&&(Yo=[]),r=PE(Yo,r,s),s=Ne,(kt===null?s.memoizedState:kt.next)===null&&(s=s.alternate,K.H=s===null||s.memoizedState===null?vT:ET),r}function Vd(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Zu(r);if(r.$$typeof===ne)return mn(r)}throw Error(n(438,String(r)))}function Hp(r){var s=null,o=Ne.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=Ne.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(d){return d.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=jp(),Ne.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(r),u=0;u<r;u++)o[u]=V;return s.index++,o}function wi(r,s){return typeof s=="function"?s(r):s}function xd(r){var s=Mt();return Gp(s,tt,r)}function Gp(r,s,o){var u=r.queue;if(u===null)throw Error(n(311));u.lastRenderedReducer=o;var d=r.baseQueue,p=u.pending;if(p!==null){if(d!==null){var E=d.next;d.next=p.next,p.next=E}s.baseQueue=d=p,u.pending=null}if(p=r.baseState,d===null)r.memoizedState=p;else{s=d.next;var w=E=null,S=null,z=s,Q=!1;do{var X=z.lane&-536870913;if(X!==z.lane?(Fe&X)===X:(is&X)===X){var F=z.revertLane;if(F===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),X===Ho&&(Q=!0);else if((is&F)===F){z=z.next,F===Ho&&(Q=!0);continue}else X={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},S===null?(w=S=X,E=p):S=S.next=X,Ne.lanes|=F,hs|=F;X=z.action,xa&&o(p,X),p=z.hasEagerState?z.eagerState:o(p,X)}else F={lane:X,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},S===null?(w=S=F,E=p):S=S.next=F,Ne.lanes|=X,hs|=X;z=z.next}while(z!==null&&z!==s);if(S===null?E=p:S.next=w,!Un(p,r.memoizedState)&&(Wt=!0,Q&&(o=Go,o!==null)))throw o;r.memoizedState=p,r.baseState=E,r.baseQueue=S,u.lastRenderedState=p}return d===null&&(u.lanes=0),[r.memoizedState,u.dispatch]}function Kp(r){var s=Mt(),o=s.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=r;var u=o.dispatch,d=o.pending,p=s.memoizedState;if(d!==null){o.pending=null;var E=d=d.next;do p=r(p,E.action),E=E.next;while(E!==d);Un(p,s.memoizedState)||(Wt=!0),s.memoizedState=p,s.baseQueue===null&&(s.baseState=p),o.lastRenderedState=p}return[p,u]}function BE(r,s,o){var u=Ne,d=Mt(),p=Ge;if(p){if(o===void 0)throw Error(n(407));o=o()}else o=s();var E=!Un((tt||d).memoizedState,o);E&&(d.memoizedState=o,Wt=!0),d=d.queue;var w=qE.bind(null,u,d,r);if(ec(2048,8,w,[r]),d.getSnapshot!==s||E||kt!==null&&kt.memoizedState.tag&1){if(u.flags|=2048,$o(9,Od(),FE.bind(null,u,d,o,s),null),at===null)throw Error(n(349));p||(is&124)!==0||zE(u,s,o)}return o}function zE(r,s,o){r.flags|=16384,r={getSnapshot:s,value:o},s=Ne.updateQueue,s===null?(s=jp(),Ne.updateQueue=s,s.stores=[r]):(o=s.stores,o===null?s.stores=[r]:o.push(r))}function FE(r,s,o,u){s.value=o,s.getSnapshot=u,jE(s)&&HE(r)}function qE(r,s,o){return o(function(){jE(s)&&HE(r)})}function jE(r){var s=r.getSnapshot;r=r.value;try{var o=s();return!Un(r,o)}catch{return!0}}function HE(r){var s=zo(r,2);s!==null&&Hn(s,r,2)}function Qp(r){var s=Dn();if(typeof r=="function"){var o=r;if(r=o(),xa){Mn(!0);try{o()}finally{Mn(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wi,lastRenderedState:r},s}function GE(r,s,o,u){return r.baseState=o,Gp(r,tt,typeof u=="function"?u:wi)}function mC(r,s,o,u,d){if(Md(r))throw Error(n(485));if(r=s.action,r!==null){var p={payload:d,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){p.listeners.push(E)}};K.T!==null?o(!0):p.isTransition=!1,u(p),o=s.pending,o===null?(p.next=s.pending=p,KE(s,p)):(p.next=o.next,s.pending=o.next=p)}}function KE(r,s){var o=s.action,u=s.payload,d=r.state;if(s.isTransition){var p=K.T,E={};K.T=E;try{var w=o(d,u),S=K.S;S!==null&&S(E,w),QE(r,s,w)}catch(z){Yp(r,s,z)}finally{K.T=p}}else try{p=o(d,u),QE(r,s,p)}catch(z){Yp(r,s,z)}}function QE(r,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){YE(r,s,u)},function(u){return Yp(r,s,u)}):YE(r,s,o)}function YE(r,s,o){s.status="fulfilled",s.value=o,$E(s),r.state=o,s=r.pending,s!==null&&(o=s.next,o===s?r.pending=null:(o=o.next,s.next=o,KE(r,o)))}function Yp(r,s,o){var u=r.pending;if(r.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,$E(s),s=s.next;while(s!==u)}r.action=null}function $E(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function WE(r,s){return s}function XE(r,s){if(Ge){var o=at.formState;if(o!==null){e:{var u=Ne;if(Ge){if(Tt){t:{for(var d=Tt,p=Mr;d.nodeType!==8;){if(!p){d=null;break t}if(d=_r(d.nextSibling),d===null){d=null;break t}}p=d.data,d=p==="F!"||p==="F"?d:null}if(d){Tt=_r(d.nextSibling),u=d.data==="F!";break e}}Da(u)}u=!1}u&&(s=o[0])}}return o=Dn(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:WE,lastRenderedState:s},o.queue=u,o=gT.bind(null,Ne,u),u.dispatch=o,u=Qp(!1),p=Zp.bind(null,Ne,!1,u.queue),u=Dn(),d={state:s,dispatch:null,action:r,pending:null},u.queue=d,o=mC.bind(null,Ne,d,p,o),d.dispatch=o,u.memoizedState=r,[s,o,!1]}function JE(r){var s=Mt();return ZE(s,tt,r)}function ZE(r,s,o){if(s=Gp(r,s,WE)[0],r=xd(wi)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=Zu(s)}catch(E){throw E===Qu?Rd:E}else u=s;s=Mt();var d=s.queue,p=d.dispatch;return o!==s.memoizedState&&(Ne.flags|=2048,$o(9,Od(),pC.bind(null,d,o),null)),[u,p,r]}function pC(r,s){r.action=s}function eT(r){var s=Mt(),o=tt;if(o!==null)return ZE(s,o,r);Mt(),s=s.memoizedState,o=Mt();var u=o.queue.dispatch;return o.memoizedState=r,[s,u,!1]}function $o(r,s,o,u){return r={tag:r,create:o,deps:u,inst:s,next:null},s=Ne.updateQueue,s===null&&(s=jp(),Ne.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=r.next=r:(u=o.next,o.next=r,r.next=u,s.lastEffect=r),r}function Od(){return{destroy:void 0,resource:void 0}}function tT(){return Mt().memoizedState}function kd(r,s,o,u){var d=Dn();u=u===void 0?null:u,Ne.flags|=r,d.memoizedState=$o(1|s,Od(),o,u)}function ec(r,s,o,u){var d=Mt();u=u===void 0?null:u;var p=d.memoizedState.inst;tt!==null&&u!==null&&Up(u,tt.memoizedState.deps)?d.memoizedState=$o(s,p,o,u):(Ne.flags|=r,d.memoizedState=$o(1|s,p,o,u))}function nT(r,s){kd(8390656,8,r,s)}function rT(r,s){ec(2048,8,r,s)}function iT(r,s){return ec(4,2,r,s)}function sT(r,s){return ec(4,4,r,s)}function aT(r,s){if(typeof s=="function"){r=r();var o=s(r);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function oT(r,s,o){o=o!=null?o.concat([r]):null,ec(4,4,aT.bind(null,s,r),o)}function $p(){}function lT(r,s){var o=Mt();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&Up(s,u[1])?u[0]:(o.memoizedState=[r,s],r)}function uT(r,s){var o=Mt();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&Up(s,u[1]))return u[0];if(u=r(),xa){Mn(!0);try{r()}finally{Mn(!1)}}return o.memoizedState=[u,s],u}function Wp(r,s,o){return o===void 0||(is&1073741824)!==0?r.memoizedState=s:(r.memoizedState=o,r=dw(),Ne.lanes|=r,hs|=r,o)}function cT(r,s,o,u){return Un(o,s)?o:Ko.current!==null?(r=Wp(r,o,u),Un(r,s)||(Wt=!0),r):(is&42)===0?(Wt=!0,r.memoizedState=o):(r=dw(),Ne.lanes|=r,hs|=r,s)}function hT(r,s,o,u,d){var p=ie.p;ie.p=p!==0&&8>p?p:8;var E=K.T,w={};K.T=w,Zp(r,!1,s,o);try{var S=d(),z=K.S;if(z!==null&&z(w,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var Q=hC(S,u);tc(r,s,Q,jn(r))}else tc(r,s,u,jn(r))}catch(X){tc(r,s,{then:function(){},status:"rejected",reason:X},jn())}finally{ie.p=p,K.T=E}}function gC(){}function Xp(r,s,o,u){if(r.tag!==5)throw Error(n(476));var d=dT(r).queue;hT(r,d,s,pe,o===null?gC:function(){return fT(r),o(u)})}function dT(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:pe,baseState:pe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wi,lastRenderedState:pe},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wi,lastRenderedState:o},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function fT(r){var s=dT(r).next.queue;tc(r,s,{},jn())}function Jp(){return mn(vc)}function mT(){return Mt().memoizedState}function pT(){return Mt().memoizedState}function _C(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var o=jn();r=ns(o);var u=rs(s,r,o);u!==null&&(Hn(u,s,o),$u(u,s,o)),s={cache:Cp()},r.payload=s;return}s=s.return}}function yC(r,s,o){var u=jn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Md(r)?_T(s,o):(o=yp(r,s,o,u),o!==null&&(Hn(o,r,u),yT(o,s,u)))}function gT(r,s,o){var u=jn();tc(r,s,o,u)}function tc(r,s,o,u){var d={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Md(r))_T(s,d);else{var p=r.alternate;if(r.lanes===0&&(p===null||p.lanes===0)&&(p=s.lastRenderedReducer,p!==null))try{var E=s.lastRenderedState,w=p(E,o);if(d.hasEagerState=!0,d.eagerState=w,Un(w,E))return vd(r,s,d,0),at===null&&yd(),!1}catch{}finally{}if(o=yp(r,s,d,u),o!==null)return Hn(o,r,u),yT(o,s,u),!0}return!1}function Zp(r,s,o,u){if(u={lane:2,revertLane:Pg(),action:u,hasEagerState:!1,eagerState:null,next:null},Md(r)){if(s)throw Error(n(479))}else s=yp(r,o,u,2),s!==null&&Hn(s,r,2)}function Md(r){var s=r.alternate;return r===Ne||s!==null&&s===Ne}function _T(r,s){Qo=Nd=!0;var o=r.pending;o===null?s.next=s:(s.next=o.next,o.next=s),r.pending=s}function yT(r,s,o){if((o&4194048)!==0){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,Iu(r,o)}}var Ld={readContext:mn,use:Vd,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useLayoutEffect:Ct,useInsertionEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useDeferredValue:Ct,useTransition:Ct,useSyncExternalStore:Ct,useId:Ct,useHostTransitionStatus:Ct,useFormState:Ct,useActionState:Ct,useOptimistic:Ct,useMemoCache:Ct,useCacheRefresh:Ct},vT={readContext:mn,use:Vd,useCallback:function(r,s){return Dn().memoizedState=[r,s===void 0?null:s],r},useContext:mn,useEffect:nT,useImperativeHandle:function(r,s,o){o=o!=null?o.concat([r]):null,kd(4194308,4,aT.bind(null,s,r),o)},useLayoutEffect:function(r,s){return kd(4194308,4,r,s)},useInsertionEffect:function(r,s){kd(4,2,r,s)},useMemo:function(r,s){var o=Dn();s=s===void 0?null:s;var u=r();if(xa){Mn(!0);try{r()}finally{Mn(!1)}}return o.memoizedState=[u,s],u},useReducer:function(r,s,o){var u=Dn();if(o!==void 0){var d=o(s);if(xa){Mn(!0);try{o(s)}finally{Mn(!1)}}}else d=s;return u.memoizedState=u.baseState=d,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:d},u.queue=r,r=r.dispatch=yC.bind(null,Ne,r),[u.memoizedState,r]},useRef:function(r){var s=Dn();return r={current:r},s.memoizedState=r},useState:function(r){r=Qp(r);var s=r.queue,o=gT.bind(null,Ne,s);return s.dispatch=o,[r.memoizedState,o]},useDebugValue:$p,useDeferredValue:function(r,s){var o=Dn();return Wp(o,r,s)},useTransition:function(){var r=Qp(!1);return r=hT.bind(null,Ne,r.queue,!0,!1),Dn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,o){var u=Ne,d=Dn();if(Ge){if(o===void 0)throw Error(n(407));o=o()}else{if(o=s(),at===null)throw Error(n(349));(Fe&124)!==0||zE(u,s,o)}d.memoizedState=o;var p={value:o,getSnapshot:s};return d.queue=p,nT(qE.bind(null,u,p,r),[r]),u.flags|=2048,$o(9,Od(),FE.bind(null,u,p,o,s),null),o},useId:function(){var r=Dn(),s=at.identifierPrefix;if(Ge){var o=vi,u=yi;o=(u&~(1<<32-fn(u)-1)).toString(32)+o,s="«"+s+"R"+o,o=Pd++,0<o&&(s+="H"+o.toString(32)),s+="»"}else o=dC++,s="«"+s+"r"+o.toString(32)+"»";return r.memoizedState=s},useHostTransitionStatus:Jp,useFormState:XE,useActionState:XE,useOptimistic:function(r){var s=Dn();s.memoizedState=s.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Zp.bind(null,Ne,!0,o),o.dispatch=s,[r,s]},useMemoCache:Hp,useCacheRefresh:function(){return Dn().memoizedState=_C.bind(null,Ne)}},ET={readContext:mn,use:Vd,useCallback:lT,useContext:mn,useEffect:rT,useImperativeHandle:oT,useInsertionEffect:iT,useLayoutEffect:sT,useMemo:uT,useReducer:xd,useRef:tT,useState:function(){return xd(wi)},useDebugValue:$p,useDeferredValue:function(r,s){var o=Mt();return cT(o,tt.memoizedState,r,s)},useTransition:function(){var r=xd(wi)[0],s=Mt().memoizedState;return[typeof r=="boolean"?r:Zu(r),s]},useSyncExternalStore:BE,useId:mT,useHostTransitionStatus:Jp,useFormState:JE,useActionState:JE,useOptimistic:function(r,s){var o=Mt();return GE(o,tt,r,s)},useMemoCache:Hp,useCacheRefresh:pT},vC={readContext:mn,use:Vd,useCallback:lT,useContext:mn,useEffect:rT,useImperativeHandle:oT,useInsertionEffect:iT,useLayoutEffect:sT,useMemo:uT,useReducer:Kp,useRef:tT,useState:function(){return Kp(wi)},useDebugValue:$p,useDeferredValue:function(r,s){var o=Mt();return tt===null?Wp(o,r,s):cT(o,tt.memoizedState,r,s)},useTransition:function(){var r=Kp(wi)[0],s=Mt().memoizedState;return[typeof r=="boolean"?r:Zu(r),s]},useSyncExternalStore:BE,useId:mT,useHostTransitionStatus:Jp,useFormState:eT,useActionState:eT,useOptimistic:function(r,s){var o=Mt();return tt!==null?GE(o,tt,r,s):(o.baseState=r,[r,o.queue.dispatch])},useMemoCache:Hp,useCacheRefresh:pT},Wo=null,nc=0;function Ud(r){var s=nc;return nc+=1,Wo===null&&(Wo=[]),PE(Wo,r,s)}function rc(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function Bd(r,s){throw s.$$typeof===T?Error(n(525)):(r=Object.prototype.toString.call(s),Error(n(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function TT(r){var s=r._init;return s(r._payload)}function wT(r){function s(k,P){if(r){var B=k.deletions;B===null?(k.deletions=[P],k.flags|=16):B.push(P)}}function o(k,P){if(!r)return null;for(;P!==null;)s(k,P),P=P.sibling;return null}function u(k){for(var P=new Map;k!==null;)k.key!==null?P.set(k.key,k):P.set(k.index,k),k=k.sibling;return P}function d(k,P){return k=_i(k,P),k.index=0,k.sibling=null,k}function p(k,P,B){return k.index=B,r?(B=k.alternate,B!==null?(B=B.index,B<P?(k.flags|=67108866,P):B):(k.flags|=67108866,P)):(k.flags|=1048576,P)}function E(k){return r&&k.alternate===null&&(k.flags|=67108866),k}function w(k,P,B,$){return P===null||P.tag!==6?(P=Ep(B,k.mode,$),P.return=k,P):(P=d(P,B),P.return=k,P)}function S(k,P,B,$){var fe=B.type;return fe===G?Q(k,P,B.props.children,$,B.key):P!==null&&(P.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===b&&TT(fe)===P.type)?(P=d(P,B.props),rc(P,B),P.return=k,P):(P=Td(B.type,B.key,B.props,null,k.mode,$),rc(P,B),P.return=k,P)}function z(k,P,B,$){return P===null||P.tag!==4||P.stateNode.containerInfo!==B.containerInfo||P.stateNode.implementation!==B.implementation?(P=Tp(B,k.mode,$),P.return=k,P):(P=d(P,B.children||[]),P.return=k,P)}function Q(k,P,B,$,fe){return P===null||P.tag!==7?(P=ba(B,k.mode,$,fe),P.return=k,P):(P=d(P,B),P.return=k,P)}function X(k,P,B){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=Ep(""+P,k.mode,B),P.return=k,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case I:return B=Td(P.type,P.key,P.props,null,k.mode,B),rc(B,P),B.return=k,B;case x:return P=Tp(P,k.mode,B),P.return=k,P;case b:var $=P._init;return P=$(P._payload),X(k,P,B)}if(ut(P)||M(P))return P=ba(P,k.mode,B,null),P.return=k,P;if(typeof P.then=="function")return X(k,Ud(P),B);if(P.$$typeof===ne)return X(k,bd(k,P),B);Bd(k,P)}return null}function F(k,P,B,$){var fe=P!==null?P.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return fe!==null?null:w(k,P,""+B,$);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case I:return B.key===fe?S(k,P,B,$):null;case x:return B.key===fe?z(k,P,B,$):null;case b:return fe=B._init,B=fe(B._payload),F(k,P,B,$)}if(ut(B)||M(B))return fe!==null?null:Q(k,P,B,$,null);if(typeof B.then=="function")return F(k,P,Ud(B),$);if(B.$$typeof===ne)return F(k,P,bd(k,B),$);Bd(k,B)}return null}function q(k,P,B,$,fe){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return k=k.get(B)||null,w(P,k,""+$,fe);if(typeof $=="object"&&$!==null){switch($.$$typeof){case I:return k=k.get($.key===null?B:$.key)||null,S(P,k,$,fe);case x:return k=k.get($.key===null?B:$.key)||null,z(P,k,$,fe);case b:var Ve=$._init;return $=Ve($._payload),q(k,P,B,$,fe)}if(ut($)||M($))return k=k.get(B)||null,Q(P,k,$,fe,null);if(typeof $.then=="function")return q(k,P,B,Ud($),fe);if($.$$typeof===ne)return q(k,P,B,bd(P,$),fe);Bd(P,$)}return null}function be(k,P,B,$){for(var fe=null,Ve=null,ve=P,Ae=P=0,Jt=null;ve!==null&&Ae<B.length;Ae++){ve.index>Ae?(Jt=ve,ve=null):Jt=ve.sibling;var He=F(k,ve,B[Ae],$);if(He===null){ve===null&&(ve=Jt);break}r&&ve&&He.alternate===null&&s(k,ve),P=p(He,P,Ae),Ve===null?fe=He:Ve.sibling=He,Ve=He,ve=Jt}if(Ae===B.length)return o(k,ve),Ge&&Ra(k,Ae),fe;if(ve===null){for(;Ae<B.length;Ae++)ve=X(k,B[Ae],$),ve!==null&&(P=p(ve,P,Ae),Ve===null?fe=ve:Ve.sibling=ve,Ve=ve);return Ge&&Ra(k,Ae),fe}for(ve=u(ve);Ae<B.length;Ae++)Jt=q(ve,k,Ae,B[Ae],$),Jt!==null&&(r&&Jt.alternate!==null&&ve.delete(Jt.key===null?Ae:Jt.key),P=p(Jt,P,Ae),Ve===null?fe=Jt:Ve.sibling=Jt,Ve=Jt);return r&&ve.forEach(function(Es){return s(k,Es)}),Ge&&Ra(k,Ae),fe}function Ie(k,P,B,$){if(B==null)throw Error(n(151));for(var fe=null,Ve=null,ve=P,Ae=P=0,Jt=null,He=B.next();ve!==null&&!He.done;Ae++,He=B.next()){ve.index>Ae?(Jt=ve,ve=null):Jt=ve.sibling;var Es=F(k,ve,He.value,$);if(Es===null){ve===null&&(ve=Jt);break}r&&ve&&Es.alternate===null&&s(k,ve),P=p(Es,P,Ae),Ve===null?fe=Es:Ve.sibling=Es,Ve=Es,ve=Jt}if(He.done)return o(k,ve),Ge&&Ra(k,Ae),fe;if(ve===null){for(;!He.done;Ae++,He=B.next())He=X(k,He.value,$),He!==null&&(P=p(He,P,Ae),Ve===null?fe=He:Ve.sibling=He,Ve=He);return Ge&&Ra(k,Ae),fe}for(ve=u(ve);!He.done;Ae++,He=B.next())He=q(ve,k,Ae,He.value,$),He!==null&&(r&&He.alternate!==null&&ve.delete(He.key===null?Ae:He.key),P=p(He,P,Ae),Ve===null?fe=He:Ve.sibling=He,Ve=He);return r&&ve.forEach(function(ED){return s(k,ED)}),Ge&&Ra(k,Ae),fe}function rt(k,P,B,$){if(typeof B=="object"&&B!==null&&B.type===G&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case I:e:{for(var fe=B.key;P!==null;){if(P.key===fe){if(fe=B.type,fe===G){if(P.tag===7){o(k,P.sibling),$=d(P,B.props.children),$.return=k,k=$;break e}}else if(P.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===b&&TT(fe)===P.type){o(k,P.sibling),$=d(P,B.props),rc($,B),$.return=k,k=$;break e}o(k,P);break}else s(k,P);P=P.sibling}B.type===G?($=ba(B.props.children,k.mode,$,B.key),$.return=k,k=$):($=Td(B.type,B.key,B.props,null,k.mode,$),rc($,B),$.return=k,k=$)}return E(k);case x:e:{for(fe=B.key;P!==null;){if(P.key===fe)if(P.tag===4&&P.stateNode.containerInfo===B.containerInfo&&P.stateNode.implementation===B.implementation){o(k,P.sibling),$=d(P,B.children||[]),$.return=k,k=$;break e}else{o(k,P);break}else s(k,P);P=P.sibling}$=Tp(B,k.mode,$),$.return=k,k=$}return E(k);case b:return fe=B._init,B=fe(B._payload),rt(k,P,B,$)}if(ut(B))return be(k,P,B,$);if(M(B)){if(fe=M(B),typeof fe!="function")throw Error(n(150));return B=fe.call(B),Ie(k,P,B,$)}if(typeof B.then=="function")return rt(k,P,Ud(B),$);if(B.$$typeof===ne)return rt(k,P,bd(k,B),$);Bd(k,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,P!==null&&P.tag===6?(o(k,P.sibling),$=d(P,B),$.return=k,k=$):(o(k,P),$=Ep(B,k.mode,$),$.return=k,k=$),E(k)):o(k,P)}return function(k,P,B,$){try{nc=0;var fe=rt(k,P,B,$);return Wo=null,fe}catch(ve){if(ve===Qu||ve===Rd)throw ve;var Ve=Bn(29,ve,null,k.mode);return Ve.lanes=$,Ve.return=k,Ve}finally{}}}var Xo=wT(!0),IT=wT(!1),ar=ee(null),Lr=null;function ss(r){var s=r.alternate;se(Ht,Ht.current&1),se(ar,r),Lr===null&&(s===null||Ko.current!==null||s.memoizedState!==null)&&(Lr=r)}function AT(r){if(r.tag===22){if(se(Ht,Ht.current),se(ar,r),Lr===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&(Lr=r)}}else as()}function as(){se(Ht,Ht.current),se(ar,ar.current)}function Ii(r){ue(ar),Lr===r&&(Lr=null),ue(Ht)}var Ht=ee(0);function zd(r){for(var s=r;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||jg(o)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function eg(r,s,o,u){s=r.memoizedState,o=o(u,s),o=o==null?s:y({},s,o),r.memoizedState=o,r.lanes===0&&(r.updateQueue.baseState=o)}var tg={enqueueSetState:function(r,s,o){r=r._reactInternals;var u=jn(),d=ns(u);d.payload=s,o!=null&&(d.callback=o),s=rs(r,d,u),s!==null&&(Hn(s,r,u),$u(s,r,u))},enqueueReplaceState:function(r,s,o){r=r._reactInternals;var u=jn(),d=ns(u);d.tag=1,d.payload=s,o!=null&&(d.callback=o),s=rs(r,d,u),s!==null&&(Hn(s,r,u),$u(s,r,u))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var o=jn(),u=ns(o);u.tag=2,s!=null&&(u.callback=s),s=rs(r,u,o),s!==null&&(Hn(s,r,o),$u(s,r,o))}};function bT(r,s,o,u,d,p,E){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,p,E):s.prototype&&s.prototype.isPureReactComponent?!Bu(o,u)||!Bu(d,p):!0}function ST(r,s,o,u){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==r&&tg.enqueueReplaceState(s,s.state,null)}function Oa(r,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(r=r.defaultProps){o===s&&(o=y({},o));for(var d in r)o[d]===void 0&&(o[d]=r[d])}return o}var Fd=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function RT(r){Fd(r)}function CT(r){console.error(r)}function DT(r){Fd(r)}function qd(r,s){try{var o=r.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function NT(r,s,o){try{var u=r.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function ng(r,s,o){return o=ns(o),o.tag=3,o.payload={element:null},o.callback=function(){qd(r,s)},o}function PT(r){return r=ns(r),r.tag=3,r}function VT(r,s,o,u){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var p=u.value;r.payload=function(){return d(p)},r.callback=function(){NT(s,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(r.callback=function(){NT(s,o,u),typeof d!="function"&&(ds===null?ds=new Set([this]):ds.add(this));var w=u.stack;this.componentDidCatch(u.value,{componentStack:w!==null?w:""})})}function EC(r,s,o,u,d){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&Hu(s,o,d,!0),o=ar.current,o!==null){switch(o.tag){case 13:return Lr===null?Sg():o.alternate===null&&wt===0&&(wt=3),o.flags&=-257,o.flags|=65536,o.lanes=d,u===Pp?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),Cg(r,u,d)),!1;case 22:return o.flags|=65536,u===Pp?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),Cg(r,u,d)),!1}throw Error(n(435,o.tag))}return Cg(r,u,d),Sg(),!1}if(Ge)return s=ar.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=d,u!==Ap&&(r=Error(n(422),{cause:u}),ju(nr(r,o)))):(u!==Ap&&(s=Error(n(423),{cause:u}),ju(nr(s,o))),r=r.current.alternate,r.flags|=65536,d&=-d,r.lanes|=d,u=nr(u,o),d=ng(r.stateNode,u,d),Op(r,d),wt!==4&&(wt=2)),!1;var p=Error(n(520),{cause:u});if(p=nr(p,o),cc===null?cc=[p]:cc.push(p),wt!==4&&(wt=2),s===null)return!0;u=nr(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,r=d&-d,o.lanes|=r,r=ng(o.stateNode,u,r),Op(o,r),!1;case 1:if(s=o.type,p=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ds===null||!ds.has(p))))return o.flags|=65536,d&=-d,o.lanes|=d,d=PT(d),VT(d,r,o,u),Op(o,d),!1}o=o.return}while(o!==null);return!1}var xT=Error(n(461)),Wt=!1;function an(r,s,o,u){s.child=r===null?IT(s,null,o,u):Xo(s,r.child,o,u)}function OT(r,s,o,u,d){o=o.render;var p=s.ref;if("ref"in u){var E={};for(var w in u)w!=="ref"&&(E[w]=u[w])}else E=u;return Pa(s),u=Bp(r,s,o,E,p,d),w=zp(),r!==null&&!Wt?(Fp(r,s,d),Ai(r,s,d)):(Ge&&w&&wp(s),s.flags|=1,an(r,s,u,d),s.child)}function kT(r,s,o,u,d){if(r===null){var p=o.type;return typeof p=="function"&&!vp(p)&&p.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=p,MT(r,s,p,u,d)):(r=Td(o.type,null,u,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(p=r.child,!cg(r,d)){var E=p.memoizedProps;if(o=o.compare,o=o!==null?o:Bu,o(E,u)&&r.ref===s.ref)return Ai(r,s,d)}return s.flags|=1,r=_i(p,u),r.ref=s.ref,r.return=s,s.child=r}function MT(r,s,o,u,d){if(r!==null){var p=r.memoizedProps;if(Bu(p,u)&&r.ref===s.ref)if(Wt=!1,s.pendingProps=u=p,cg(r,d))(r.flags&131072)!==0&&(Wt=!0);else return s.lanes=r.lanes,Ai(r,s,d)}return rg(r,s,o,u,d)}function LT(r,s,o){var u=s.pendingProps,d=u.children,p=r!==null?r.memoizedState:null;if(u.mode==="hidden"){if((s.flags&128)!==0){if(u=p!==null?p.baseLanes|o:o,r!==null){for(d=s.child=r.child,p=0;d!==null;)p=p|d.lanes|d.childLanes,d=d.sibling;s.childLanes=p&~u}else s.childLanes=0,s.child=null;return UT(r,s,u,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&Sd(s,p!==null?p.cachePool:null),p!==null?ME(s,p):Mp(),AT(s);else return s.lanes=s.childLanes=536870912,UT(r,s,p!==null?p.baseLanes|o:o,o)}else p!==null?(Sd(s,p.cachePool),ME(s,p),as(),s.memoizedState=null):(r!==null&&Sd(s,null),Mp(),as());return an(r,s,d,o),s.child}function UT(r,s,o,u){var d=Np();return d=d===null?null:{parent:jt._currentValue,pool:d},s.memoizedState={baseLanes:o,cachePool:d},r!==null&&Sd(s,null),Mp(),AT(s),r!==null&&Hu(r,s,u,!0),null}function jd(r,s){var o=s.ref;if(o===null)r!==null&&r.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(n(284));(r===null||r.ref!==o)&&(s.flags|=4194816)}}function rg(r,s,o,u,d){return Pa(s),o=Bp(r,s,o,u,void 0,d),u=zp(),r!==null&&!Wt?(Fp(r,s,d),Ai(r,s,d)):(Ge&&u&&wp(s),s.flags|=1,an(r,s,o,d),s.child)}function BT(r,s,o,u,d,p){return Pa(s),s.updateQueue=null,o=UE(s,u,o,d),LE(r),u=zp(),r!==null&&!Wt?(Fp(r,s,p),Ai(r,s,p)):(Ge&&u&&wp(s),s.flags|=1,an(r,s,o,p),s.child)}function zT(r,s,o,u,d){if(Pa(s),s.stateNode===null){var p=Fo,E=o.contextType;typeof E=="object"&&E!==null&&(p=mn(E)),p=new o(u,p),s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=tg,s.stateNode=p,p._reactInternals=s,p=s.stateNode,p.props=u,p.state=s.memoizedState,p.refs={},Vp(s),E=o.contextType,p.context=typeof E=="object"&&E!==null?mn(E):Fo,p.state=s.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(eg(s,o,E,u),p.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(E=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),E!==p.state&&tg.enqueueReplaceState(p,p.state,null),Xu(s,u,p,d),Wu(),p.state=s.memoizedState),typeof p.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(r===null){p=s.stateNode;var w=s.memoizedProps,S=Oa(o,w);p.props=S;var z=p.context,Q=o.contextType;E=Fo,typeof Q=="object"&&Q!==null&&(E=mn(Q));var X=o.getDerivedStateFromProps;Q=typeof X=="function"||typeof p.getSnapshotBeforeUpdate=="function",w=s.pendingProps!==w,Q||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(w||z!==E)&&ST(s,p,u,E),ts=!1;var F=s.memoizedState;p.state=F,Xu(s,u,p,d),Wu(),z=s.memoizedState,w||F!==z||ts?(typeof X=="function"&&(eg(s,o,X,u),z=s.memoizedState),(S=ts||bT(s,o,S,u,F,z,E))?(Q||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(s.flags|=4194308)):(typeof p.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=z),p.props=u,p.state=z,p.context=E,u=S):(typeof p.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{p=s.stateNode,xp(r,s),E=s.memoizedProps,Q=Oa(o,E),p.props=Q,X=s.pendingProps,F=p.context,z=o.contextType,S=Fo,typeof z=="object"&&z!==null&&(S=mn(z)),w=o.getDerivedStateFromProps,(z=typeof w=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(E!==X||F!==S)&&ST(s,p,u,S),ts=!1,F=s.memoizedState,p.state=F,Xu(s,u,p,d),Wu();var q=s.memoizedState;E!==X||F!==q||ts||r!==null&&r.dependencies!==null&&Ad(r.dependencies)?(typeof w=="function"&&(eg(s,o,w,u),q=s.memoizedState),(Q=ts||bT(s,o,Q,u,F,q,S)||r!==null&&r.dependencies!==null&&Ad(r.dependencies))?(z||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(u,q,S),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(u,q,S)),typeof p.componentDidUpdate=="function"&&(s.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof p.componentDidUpdate!="function"||E===r.memoizedProps&&F===r.memoizedState||(s.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||E===r.memoizedProps&&F===r.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=q),p.props=u,p.state=q,p.context=S,u=Q):(typeof p.componentDidUpdate!="function"||E===r.memoizedProps&&F===r.memoizedState||(s.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||E===r.memoizedProps&&F===r.memoizedState||(s.flags|=1024),u=!1)}return p=u,jd(r,s),u=(s.flags&128)!==0,p||u?(p=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:p.render(),s.flags|=1,r!==null&&u?(s.child=Xo(s,r.child,null,d),s.child=Xo(s,null,o,d)):an(r,s,o,d),s.memoizedState=p.state,r=s.child):r=Ai(r,s,d),r}function FT(r,s,o,u){return qu(),s.flags|=256,an(r,s,o,u),s.child}var ig={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sg(r){return{baseLanes:r,cachePool:CE()}}function ag(r,s,o){return r=r!==null?r.childLanes&~o:0,s&&(r|=or),r}function qT(r,s,o){var u=s.pendingProps,d=!1,p=(s.flags&128)!==0,E;if((E=p)||(E=r!==null&&r.memoizedState===null?!1:(Ht.current&2)!==0),E&&(d=!0,s.flags&=-129),E=(s.flags&32)!==0,s.flags&=-33,r===null){if(Ge){if(d?ss(s):as(),Ge){var w=Tt,S;if(S=w){e:{for(S=w,w=Mr;S.nodeType!==8;){if(!w){w=null;break e}if(S=_r(S.nextSibling),S===null){w=null;break e}}w=S}w!==null?(s.memoizedState={dehydrated:w,treeContext:Sa!==null?{id:yi,overflow:vi}:null,retryLane:536870912,hydrationErrors:null},S=Bn(18,null,null,0),S.stateNode=w,S.return=s,s.child=S,In=s,Tt=null,S=!0):S=!1}S||Da(s)}if(w=s.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return jg(w)?s.lanes=32:s.lanes=536870912,null;Ii(s)}return w=u.children,u=u.fallback,d?(as(),d=s.mode,w=Hd({mode:"hidden",children:w},d),u=ba(u,d,o,null),w.return=s,u.return=s,w.sibling=u,s.child=w,d=s.child,d.memoizedState=sg(o),d.childLanes=ag(r,E,o),s.memoizedState=ig,u):(ss(s),og(s,w))}if(S=r.memoizedState,S!==null&&(w=S.dehydrated,w!==null)){if(p)s.flags&256?(ss(s),s.flags&=-257,s=lg(r,s,o)):s.memoizedState!==null?(as(),s.child=r.child,s.flags|=128,s=null):(as(),d=u.fallback,w=s.mode,u=Hd({mode:"visible",children:u.children},w),d=ba(d,w,o,null),d.flags|=2,u.return=s,d.return=s,u.sibling=d,s.child=u,Xo(s,r.child,null,o),u=s.child,u.memoizedState=sg(o),u.childLanes=ag(r,E,o),s.memoizedState=ig,s=d);else if(ss(s),jg(w)){if(E=w.nextSibling&&w.nextSibling.dataset,E)var z=E.dgst;E=z,u=Error(n(419)),u.stack="",u.digest=E,ju({value:u,source:null,stack:null}),s=lg(r,s,o)}else if(Wt||Hu(r,s,o,!1),E=(o&r.childLanes)!==0,Wt||E){if(E=at,E!==null&&(u=o&-o,u=(u&42)!==0?1:Qi(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==S.retryLane))throw S.retryLane=u,zo(r,u),Hn(E,r,u),xT;w.data==="$?"||Sg(),s=lg(r,s,o)}else w.data==="$?"?(s.flags|=192,s.child=r.child,s=null):(r=S.treeContext,Tt=_r(w.nextSibling),In=s,Ge=!0,Ca=null,Mr=!1,r!==null&&(ir[sr++]=yi,ir[sr++]=vi,ir[sr++]=Sa,yi=r.id,vi=r.overflow,Sa=s),s=og(s,u.children),s.flags|=4096);return s}return d?(as(),d=u.fallback,w=s.mode,S=r.child,z=S.sibling,u=_i(S,{mode:"hidden",children:u.children}),u.subtreeFlags=S.subtreeFlags&65011712,z!==null?d=_i(z,d):(d=ba(d,w,o,null),d.flags|=2),d.return=s,u.return=s,u.sibling=d,s.child=u,u=d,d=s.child,w=r.child.memoizedState,w===null?w=sg(o):(S=w.cachePool,S!==null?(z=jt._currentValue,S=S.parent!==z?{parent:z,pool:z}:S):S=CE(),w={baseLanes:w.baseLanes|o,cachePool:S}),d.memoizedState=w,d.childLanes=ag(r,E,o),s.memoizedState=ig,u):(ss(s),o=r.child,r=o.sibling,o=_i(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,r!==null&&(E=s.deletions,E===null?(s.deletions=[r],s.flags|=16):E.push(r)),s.child=o,s.memoizedState=null,o)}function og(r,s){return s=Hd({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function Hd(r,s){return r=Bn(22,r,null,s),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function lg(r,s,o){return Xo(s,r.child,null,o),r=og(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function jT(r,s,o){r.lanes|=s;var u=r.alternate;u!==null&&(u.lanes|=s),Sp(r.return,s,o)}function ug(r,s,o,u,d){var p=r.memoizedState;p===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(p.isBackwards=s,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=d)}function HT(r,s,o){var u=s.pendingProps,d=u.revealOrder,p=u.tail;if(an(r,s,u.children,o),u=Ht.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&jT(r,o,s);else if(r.tag===19)jT(r,o,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}switch(se(Ht,u),d){case"forwards":for(o=s.child,d=null;o!==null;)r=o.alternate,r!==null&&zd(r)===null&&(d=o),o=o.sibling;o=d,o===null?(d=s.child,s.child=null):(d=o.sibling,o.sibling=null),ug(s,!1,d,o,p);break;case"backwards":for(o=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&zd(r)===null){s.child=d;break}r=d.sibling,d.sibling=o,o=d,d=r}ug(s,!0,o,null,p);break;case"together":ug(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Ai(r,s,o){if(r!==null&&(s.dependencies=r.dependencies),hs|=s.lanes,(o&s.childLanes)===0)if(r!==null){if(Hu(r,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(n(153));if(s.child!==null){for(r=s.child,o=_i(r,r.pendingProps),s.child=o,o.return=s;r.sibling!==null;)r=r.sibling,o=o.sibling=_i(r,r.pendingProps),o.return=s;o.sibling=null}return s.child}function cg(r,s){return(r.lanes&s)!==0?!0:(r=r.dependencies,!!(r!==null&&Ad(r)))}function TC(r,s,o){switch(s.tag){case 3:st(s,s.stateNode.containerInfo),es(s,jt,r.memoizedState.cache),qu();break;case 27:case 5:Ki(s);break;case 4:st(s,s.stateNode.containerInfo);break;case 10:es(s,s.type,s.memoizedProps.value);break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(ss(s),s.flags|=128,null):(o&s.child.childLanes)!==0?qT(r,s,o):(ss(s),r=Ai(r,s,o),r!==null?r.sibling:null);ss(s);break;case 19:var d=(r.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(Hu(r,s,o,!1),u=(o&s.childLanes)!==0),d){if(u)return HT(r,s,o);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),se(Ht,Ht.current),u)break;return null;case 22:case 23:return s.lanes=0,LT(r,s,o);case 24:es(s,jt,r.memoizedState.cache)}return Ai(r,s,o)}function GT(r,s,o){if(r!==null)if(r.memoizedProps!==s.pendingProps)Wt=!0;else{if(!cg(r,o)&&(s.flags&128)===0)return Wt=!1,TC(r,s,o);Wt=(r.flags&131072)!==0}else Wt=!1,Ge&&(s.flags&1048576)!==0&&TE(s,Id,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var u=s.elementType,d=u._init;if(u=d(u._payload),s.type=u,typeof u=="function")vp(u)?(r=Oa(u,r),s.tag=1,s=zT(null,s,u,r,o)):(s.tag=0,s=rg(null,s,u,r,o));else{if(u!=null){if(d=u.$$typeof,d===_e){s.tag=11,s=OT(null,s,u,r,o);break e}else if(d===D){s.tag=14,s=kT(null,s,u,r,o);break e}}throw s=Vt(u)||u,Error(n(306,s,""))}}return s;case 0:return rg(r,s,s.type,s.pendingProps,o);case 1:return u=s.type,d=Oa(u,s.pendingProps),zT(r,s,u,d,o);case 3:e:{if(st(s,s.stateNode.containerInfo),r===null)throw Error(n(387));u=s.pendingProps;var p=s.memoizedState;d=p.element,xp(r,s),Xu(s,u,null,o);var E=s.memoizedState;if(u=E.cache,es(s,jt,u),u!==p.cache&&Rp(s,[jt],o,!0),Wu(),u=E.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:E.cache},s.updateQueue.baseState=p,s.memoizedState=p,s.flags&256){s=FT(r,s,u,o);break e}else if(u!==d){d=nr(Error(n(424)),s),ju(d),s=FT(r,s,u,o);break e}else{switch(r=s.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(Tt=_r(r.firstChild),In=s,Ge=!0,Ca=null,Mr=!0,o=IT(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(qu(),u===d){s=Ai(r,s,o);break e}an(r,s,u,o)}s=s.child}return s;case 26:return jd(r,s),r===null?(o=$w(s.type,null,s.pendingProps,null))?s.memoizedState=o:Ge||(o=s.type,r=s.pendingProps,u=sf(Se.current).createElement(o),u[zt]=s,u[xt]=r,ln(u,o,r),Rt(u),s.stateNode=u):s.memoizedState=$w(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return Ki(s),r===null&&Ge&&(u=s.stateNode=Kw(s.type,s.pendingProps,Se.current),In=s,Mr=!0,d=Tt,ps(s.type)?(Hg=d,Tt=_r(u.firstChild)):Tt=d),an(r,s,s.pendingProps.children,o),jd(r,s),r===null&&(s.flags|=4194304),s.child;case 5:return r===null&&Ge&&((d=u=Tt)&&(u=$C(u,s.type,s.pendingProps,Mr),u!==null?(s.stateNode=u,In=s,Tt=_r(u.firstChild),Mr=!1,d=!0):d=!1),d||Da(s)),Ki(s),d=s.type,p=s.pendingProps,E=r!==null?r.memoizedProps:null,u=p.children,zg(d,p)?u=null:E!==null&&zg(d,E)&&(s.flags|=32),s.memoizedState!==null&&(d=Bp(r,s,fC,null,null,o),vc._currentValue=d),jd(r,s),an(r,s,u,o),s.child;case 6:return r===null&&Ge&&((r=o=Tt)&&(o=WC(o,s.pendingProps,Mr),o!==null?(s.stateNode=o,In=s,Tt=null,r=!0):r=!1),r||Da(s)),null;case 13:return qT(r,s,o);case 4:return st(s,s.stateNode.containerInfo),u=s.pendingProps,r===null?s.child=Xo(s,null,u,o):an(r,s,u,o),s.child;case 11:return OT(r,s,s.type,s.pendingProps,o);case 7:return an(r,s,s.pendingProps,o),s.child;case 8:return an(r,s,s.pendingProps.children,o),s.child;case 12:return an(r,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,es(s,s.type,u.value),an(r,s,u.children,o),s.child;case 9:return d=s.type._context,u=s.pendingProps.children,Pa(s),d=mn(d),u=u(d),s.flags|=1,an(r,s,u,o),s.child;case 14:return kT(r,s,s.type,s.pendingProps,o);case 15:return MT(r,s,s.type,s.pendingProps,o);case 19:return HT(r,s,o);case 31:return u=s.pendingProps,o=s.mode,u={mode:u.mode,children:u.children},r===null?(o=Hd(u,o),o.ref=s.ref,s.child=o,o.return=s,s=o):(o=_i(r.child,u),o.ref=s.ref,s.child=o,o.return=s,s=o),s;case 22:return LT(r,s,o);case 24:return Pa(s),u=mn(jt),r===null?(d=Np(),d===null&&(d=at,p=Cp(),d.pooledCache=p,p.refCount++,p!==null&&(d.pooledCacheLanes|=o),d=p),s.memoizedState={parent:u,cache:d},Vp(s),es(s,jt,d)):((r.lanes&o)!==0&&(xp(r,s),Xu(s,null,null,o),Wu()),d=r.memoizedState,p=s.memoizedState,d.parent!==u?(d={parent:u,cache:u},s.memoizedState=d,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=d),es(s,jt,u)):(u=p.cache,es(s,jt,u),u!==d.cache&&Rp(s,[jt],o,!0))),an(r,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(n(156,s.tag))}function bi(r){r.flags|=4}function KT(r,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!eI(s)){if(s=ar.current,s!==null&&((Fe&4194048)===Fe?Lr!==null:(Fe&62914560)!==Fe&&(Fe&536870912)===0||s!==Lr))throw Yu=Pp,DE;r.flags|=8192}}function Gd(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?Tu():536870912,r.lanes|=s,tl|=s)}function ic(r,s){if(!Ge)switch(r.tailMode){case"hidden":s=r.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function _t(r){var s=r.alternate!==null&&r.alternate.child===r.child,o=0,u=0;if(s)for(var d=r.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&65011712,u|=d.flags&65011712,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=u,r.childLanes=o,s}function wC(r,s,o){var u=s.pendingProps;switch(Ip(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(s),null;case 1:return _t(s),null;case 3:return o=s.stateNode,u=null,r!==null&&(u=r.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),Ti(jt),Ar(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(Fu(s)?bi(s):r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,AE())),_t(s),null;case 26:return o=s.memoizedState,r===null?(bi(s),o!==null?(_t(s),KT(s,o)):(_t(s),s.flags&=-16777217)):o?o!==r.memoizedState?(bi(s),_t(s),KT(s,o)):(_t(s),s.flags&=-16777217):(r.memoizedProps!==u&&bi(s),_t(s),s.flags&=-16777217),null;case 27:ii(s),o=Se.current;var d=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==u&&bi(s);else{if(!u){if(s.stateNode===null)throw Error(n(166));return _t(s),null}r=we.current,Fu(s)?wE(s):(r=Kw(d,u,o),s.stateNode=r,bi(s))}return _t(s),null;case 5:if(ii(s),o=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==u&&bi(s);else{if(!u){if(s.stateNode===null)throw Error(n(166));return _t(s),null}if(r=we.current,Fu(s))wE(s);else{switch(d=sf(Se.current),r){case 1:r=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=d.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof u.is=="string"?d.createElement("select",{is:u.is}):d.createElement("select"),u.multiple?r.multiple=!0:u.size&&(r.size=u.size);break;default:r=typeof u.is=="string"?d.createElement(o,{is:u.is}):d.createElement(o)}}r[zt]=s,r[xt]=u;e:for(d=s.child;d!==null;){if(d.tag===5||d.tag===6)r.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===s)break e;for(;d.sibling===null;){if(d.return===null||d.return===s)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}s.stateNode=r;e:switch(ln(r,o,u),o){case"button":case"input":case"select":case"textarea":r=!!u.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&bi(s)}}return _t(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==u&&bi(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(n(166));if(r=Se.current,Fu(s)){if(r=s.stateNode,o=s.memoizedProps,u=null,d=In,d!==null)switch(d.tag){case 27:case 5:u=d.memoizedProps}r[zt]=s,r=!!(r.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||Bw(r.nodeValue,o)),r||Da(s)}else r=sf(r).createTextNode(u),r[zt]=s,s.stateNode=r}return _t(s),null;case 13:if(u=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(d=Fu(s),u!==null&&u.dehydrated!==null){if(r===null){if(!d)throw Error(n(318));if(d=s.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(n(317));d[zt]=s}else qu(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;_t(s),d=!1}else d=AE(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=d),d=!0;if(!d)return s.flags&256?(Ii(s),s):(Ii(s),null)}if(Ii(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=u!==null,r=r!==null&&r.memoizedState!==null,o){u=s.child,d=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(d=u.alternate.memoizedState.cachePool.pool);var p=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(p=u.memoizedState.cachePool.pool),p!==d&&(u.flags|=2048)}return o!==r&&o&&(s.child.flags|=8192),Gd(s,s.updateQueue),_t(s),null;case 4:return Ar(),r===null&&kg(s.stateNode.containerInfo),_t(s),null;case 10:return Ti(s.type),_t(s),null;case 19:if(ue(Ht),d=s.memoizedState,d===null)return _t(s),null;if(u=(s.flags&128)!==0,p=d.rendering,p===null)if(u)ic(d,!1);else{if(wt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(p=zd(r),p!==null){for(s.flags|=128,ic(d,!1),r=p.updateQueue,s.updateQueue=r,Gd(s,r),s.subtreeFlags=0,r=o,o=s.child;o!==null;)EE(o,r),o=o.sibling;return se(Ht,Ht.current&1|2),s.child}r=r.sibling}d.tail!==null&&Wn()>Yd&&(s.flags|=128,u=!0,ic(d,!1),s.lanes=4194304)}else{if(!u)if(r=zd(p),r!==null){if(s.flags|=128,u=!0,r=r.updateQueue,s.updateQueue=r,Gd(s,r),ic(d,!0),d.tail===null&&d.tailMode==="hidden"&&!p.alternate&&!Ge)return _t(s),null}else 2*Wn()-d.renderingStartTime>Yd&&o!==536870912&&(s.flags|=128,u=!0,ic(d,!1),s.lanes=4194304);d.isBackwards?(p.sibling=s.child,s.child=p):(r=d.last,r!==null?r.sibling=p:s.child=p,d.last=p)}return d.tail!==null?(s=d.tail,d.rendering=s,d.tail=s.sibling,d.renderingStartTime=Wn(),s.sibling=null,r=Ht.current,se(Ht,u?r&1|2:r&1),s):(_t(s),null);case 22:case 23:return Ii(s),Lp(),u=s.memoizedState!==null,r!==null?r.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(_t(s),s.subtreeFlags&6&&(s.flags|=8192)):_t(s),o=s.updateQueue,o!==null&&Gd(s,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),r!==null&&ue(Va),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Ti(jt),_t(s),null;case 25:return null;case 30:return null}throw Error(n(156,s.tag))}function IC(r,s){switch(Ip(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Ti(jt),Ar(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return ii(s),null;case 13:if(Ii(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(n(340));qu()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return ue(Ht),null;case 4:return Ar(),null;case 10:return Ti(s.type),null;case 22:case 23:return Ii(s),Lp(),r!==null&&ue(Va),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return Ti(jt),null;case 25:return null;default:return null}}function QT(r,s){switch(Ip(s),s.tag){case 3:Ti(jt),Ar();break;case 26:case 27:case 5:ii(s);break;case 4:Ar();break;case 13:Ii(s);break;case 19:ue(Ht);break;case 10:Ti(s.type);break;case 22:case 23:Ii(s),Lp(),r!==null&&ue(Va);break;case 24:Ti(jt)}}function sc(r,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&r)===r){u=void 0;var p=o.create,E=o.inst;u=p(),E.destroy=u}o=o.next}while(o!==d)}}catch(w){it(s,s.return,w)}}function os(r,s,o){try{var u=s.updateQueue,d=u!==null?u.lastEffect:null;if(d!==null){var p=d.next;u=p;do{if((u.tag&r)===r){var E=u.inst,w=E.destroy;if(w!==void 0){E.destroy=void 0,d=s;var S=o,z=w;try{z()}catch(Q){it(d,S,Q)}}}u=u.next}while(u!==p)}}catch(Q){it(s,s.return,Q)}}function YT(r){var s=r.updateQueue;if(s!==null){var o=r.stateNode;try{kE(s,o)}catch(u){it(r,r.return,u)}}}function $T(r,s,o){o.props=Oa(r.type,r.memoizedProps),o.state=r.memoizedState;try{o.componentWillUnmount()}catch(u){it(r,s,u)}}function ac(r,s){try{var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var u=r.stateNode;break;case 30:u=r.stateNode;break;default:u=r.stateNode}typeof o=="function"?r.refCleanup=o(u):o.current=u}}catch(d){it(r,s,d)}}function Ur(r,s){var o=r.ref,u=r.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(d){it(r,s,d)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){it(r,s,d)}else o.current=null}function WT(r){var s=r.type,o=r.memoizedProps,u=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(d){it(r,r.return,d)}}function hg(r,s,o){try{var u=r.stateNode;HC(u,r.type,o,s),u[xt]=s}catch(d){it(r,r.return,d)}}function XT(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&ps(r.type)||r.tag===4}function dg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||XT(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&ps(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function fg(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(r),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=rf));else if(u!==4&&(u===27&&ps(r.type)&&(o=r.stateNode,s=null),r=r.child,r!==null))for(fg(r,s,o),r=r.sibling;r!==null;)fg(r,s,o),r=r.sibling}function Kd(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?o.insertBefore(r,s):o.appendChild(r);else if(u!==4&&(u===27&&ps(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(Kd(r,s,o),r=r.sibling;r!==null;)Kd(r,s,o),r=r.sibling}function JT(r){var s=r.stateNode,o=r.memoizedProps;try{for(var u=r.type,d=s.attributes;d.length;)s.removeAttributeNode(d[0]);ln(s,u,o),s[zt]=r,s[xt]=o}catch(p){it(r,r.return,p)}}var Si=!1,Dt=!1,mg=!1,ZT=typeof WeakSet=="function"?WeakSet:Set,Xt=null;function AC(r,s){if(r=r.containerInfo,Ug=hf,r=cE(r),dp(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else e:{o=(o=r.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var E=0,w=-1,S=-1,z=0,Q=0,X=r,F=null;t:for(;;){for(var q;X!==o||d!==0&&X.nodeType!==3||(w=E+d),X!==p||u!==0&&X.nodeType!==3||(S=E+u),X.nodeType===3&&(E+=X.nodeValue.length),(q=X.firstChild)!==null;)F=X,X=q;for(;;){if(X===r)break t;if(F===o&&++z===d&&(w=E),F===p&&++Q===u&&(S=E),(q=X.nextSibling)!==null)break;X=F,F=X.parentNode}X=q}o=w===-1||S===-1?null:{start:w,end:S}}else o=null}o=o||{start:0,end:0}}else o=null;for(Bg={focusedElem:r,selectionRange:o},hf=!1,Xt=s;Xt!==null;)if(s=Xt,r=s.child,(s.subtreeFlags&1024)!==0&&r!==null)r.return=s,Xt=r;else for(;Xt!==null;){switch(s=Xt,p=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&p!==null){r=void 0,o=s,d=p.memoizedProps,p=p.memoizedState,u=o.stateNode;try{var be=Oa(o.type,d,o.elementType===o.type);r=u.getSnapshotBeforeUpdate(be,p),u.__reactInternalSnapshotBeforeUpdate=r}catch(Ie){it(o,o.return,Ie)}}break;case 3:if((r&1024)!==0){if(r=s.stateNode.containerInfo,o=r.nodeType,o===9)qg(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":qg(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(n(163))}if(r=s.sibling,r!==null){r.return=s.return,Xt=r;break}Xt=s.return}}function ew(r,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:ls(r,o),u&4&&sc(5,o);break;case 1:if(ls(r,o),u&4)if(r=o.stateNode,s===null)try{r.componentDidMount()}catch(E){it(o,o.return,E)}else{var d=Oa(o.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(d,s,r.__reactInternalSnapshotBeforeUpdate)}catch(E){it(o,o.return,E)}}u&64&&YT(o),u&512&&ac(o,o.return);break;case 3:if(ls(r,o),u&64&&(r=o.updateQueue,r!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{kE(r,s)}catch(E){it(o,o.return,E)}}break;case 27:s===null&&u&4&&JT(o);case 26:case 5:ls(r,o),s===null&&u&4&&WT(o),u&512&&ac(o,o.return);break;case 12:ls(r,o);break;case 13:ls(r,o),u&4&&rw(r,o),u&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(o=xC.bind(null,o),XC(r,o))));break;case 22:if(u=o.memoizedState!==null||Si,!u){s=s!==null&&s.memoizedState!==null||Dt,d=Si;var p=Dt;Si=u,(Dt=s)&&!p?us(r,o,(o.subtreeFlags&8772)!==0):ls(r,o),Si=d,Dt=p}break;case 30:break;default:ls(r,o)}}function tw(r){var s=r.alternate;s!==null&&(r.alternate=null,tw(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&Wi(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var dt=null,Nn=!1;function Ri(r,s,o){for(o=o.child;o!==null;)nw(r,s,o),o=o.sibling}function nw(r,s,o){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Et,o)}catch{}switch(o.tag){case 26:Dt||Ur(o,s),Ri(r,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Dt||Ur(o,s);var u=dt,d=Nn;ps(o.type)&&(dt=o.stateNode,Nn=!1),Ri(r,s,o),pc(o.stateNode),dt=u,Nn=d;break;case 5:Dt||Ur(o,s);case 6:if(u=dt,d=Nn,dt=null,Ri(r,s,o),dt=u,Nn=d,dt!==null)if(Nn)try{(dt.nodeType===9?dt.body:dt.nodeName==="HTML"?dt.ownerDocument.body:dt).removeChild(o.stateNode)}catch(p){it(o,s,p)}else try{dt.removeChild(o.stateNode)}catch(p){it(o,s,p)}break;case 18:dt!==null&&(Nn?(r=dt,Hw(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),Ic(r)):Hw(dt,o.stateNode));break;case 4:u=dt,d=Nn,dt=o.stateNode.containerInfo,Nn=!0,Ri(r,s,o),dt=u,Nn=d;break;case 0:case 11:case 14:case 15:Dt||os(2,o,s),Dt||os(4,o,s),Ri(r,s,o);break;case 1:Dt||(Ur(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&$T(o,s,u)),Ri(r,s,o);break;case 21:Ri(r,s,o);break;case 22:Dt=(u=Dt)||o.memoizedState!==null,Ri(r,s,o),Dt=u;break;default:Ri(r,s,o)}}function rw(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{Ic(r)}catch(o){it(s,s.return,o)}}function bC(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new ZT),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new ZT),s;default:throw Error(n(435,r.tag))}}function pg(r,s){var o=bC(r);s.forEach(function(u){var d=OC.bind(null,r,u);o.has(u)||(o.add(u),u.then(d,d))})}function zn(r,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u],p=r,E=s,w=E;e:for(;w!==null;){switch(w.tag){case 27:if(ps(w.type)){dt=w.stateNode,Nn=!1;break e}break;case 5:dt=w.stateNode,Nn=!1;break e;case 3:case 4:dt=w.stateNode.containerInfo,Nn=!0;break e}w=w.return}if(dt===null)throw Error(n(160));nw(p,E,d),dt=null,Nn=!1,p=d.alternate,p!==null&&(p.return=null),d.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)iw(s,r),s=s.sibling}var gr=null;function iw(r,s){var o=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:zn(s,r),Fn(r),u&4&&(os(3,r,r.return),sc(3,r),os(5,r,r.return));break;case 1:zn(s,r),Fn(r),u&512&&(Dt||o===null||Ur(o,o.return)),u&64&&Si&&(r=r.updateQueue,r!==null&&(u=r.callbacks,u!==null&&(o=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var d=gr;if(zn(s,r),Fn(r),u&512&&(Dt||o===null||Ur(o,o.return)),u&4){var p=o!==null?o.memoizedState:null;if(u=r.memoizedState,o===null)if(u===null)if(r.stateNode===null){e:{u=r.type,o=r.memoizedProps,d=d.ownerDocument||d;t:switch(u){case"title":p=d.getElementsByTagName("title")[0],(!p||p[ua]||p[zt]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=d.createElement(u),d.head.insertBefore(p,d.querySelector("head > title"))),ln(p,u,o),p[zt]=r,Rt(p),u=p;break e;case"link":var E=Jw("link","href",d).get(u+(o.href||""));if(E){for(var w=0;w<E.length;w++)if(p=E[w],p.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&p.getAttribute("rel")===(o.rel==null?null:o.rel)&&p.getAttribute("title")===(o.title==null?null:o.title)&&p.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(w,1);break t}}p=d.createElement(u),ln(p,u,o),d.head.appendChild(p);break;case"meta":if(E=Jw("meta","content",d).get(u+(o.content||""))){for(w=0;w<E.length;w++)if(p=E[w],p.getAttribute("content")===(o.content==null?null:""+o.content)&&p.getAttribute("name")===(o.name==null?null:o.name)&&p.getAttribute("property")===(o.property==null?null:o.property)&&p.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&p.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(w,1);break t}}p=d.createElement(u),ln(p,u,o),d.head.appendChild(p);break;default:throw Error(n(468,u))}p[zt]=r,Rt(p),u=p}r.stateNode=u}else Zw(d,r.type,r.stateNode);else r.stateNode=Xw(d,u,r.memoizedProps);else p!==u?(p===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):p.count--,u===null?Zw(d,r.type,r.stateNode):Xw(d,u,r.memoizedProps)):u===null&&r.stateNode!==null&&hg(r,r.memoizedProps,o.memoizedProps)}break;case 27:zn(s,r),Fn(r),u&512&&(Dt||o===null||Ur(o,o.return)),o!==null&&u&4&&hg(r,r.memoizedProps,o.memoizedProps);break;case 5:if(zn(s,r),Fn(r),u&512&&(Dt||o===null||Ur(o,o.return)),r.flags&32){d=r.stateNode;try{Jn(d,"")}catch(q){it(r,r.return,q)}}u&4&&r.stateNode!=null&&(d=r.memoizedProps,hg(r,d,o!==null?o.memoizedProps:d)),u&1024&&(mg=!0);break;case 6:if(zn(s,r),Fn(r),u&4){if(r.stateNode===null)throw Error(n(162));u=r.memoizedProps,o=r.stateNode;try{o.nodeValue=u}catch(q){it(r,r.return,q)}}break;case 3:if(lf=null,d=gr,gr=af(s.containerInfo),zn(s,r),gr=d,Fn(r),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Ic(s.containerInfo)}catch(q){it(r,r.return,q)}mg&&(mg=!1,sw(r));break;case 4:u=gr,gr=af(r.stateNode.containerInfo),zn(s,r),Fn(r),gr=u;break;case 12:zn(s,r),Fn(r);break;case 13:zn(s,r),Fn(r),r.child.flags&8192&&r.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Tg=Wn()),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,pg(r,u)));break;case 22:d=r.memoizedState!==null;var S=o!==null&&o.memoizedState!==null,z=Si,Q=Dt;if(Si=z||d,Dt=Q||S,zn(s,r),Dt=Q,Si=z,Fn(r),u&8192)e:for(s=r.stateNode,s._visibility=d?s._visibility&-2:s._visibility|1,d&&(o===null||S||Si||Dt||ka(r)),o=null,s=r;;){if(s.tag===5||s.tag===26){if(o===null){S=o=s;try{if(p=S.stateNode,d)E=p.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{w=S.stateNode;var X=S.memoizedProps.style,F=X!=null&&X.hasOwnProperty("display")?X.display:null;w.style.display=F==null||typeof F=="boolean"?"":(""+F).trim()}}catch(q){it(S,S.return,q)}}}else if(s.tag===6){if(o===null){S=s;try{S.stateNode.nodeValue=d?"":S.memoizedProps}catch(q){it(S,S.return,q)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=r.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,pg(r,o))));break;case 19:zn(s,r),Fn(r),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,pg(r,u)));break;case 30:break;case 21:break;default:zn(s,r),Fn(r)}}function Fn(r){var s=r.flags;if(s&2){try{for(var o,u=r.return;u!==null;){if(XT(u)){o=u;break}u=u.return}if(o==null)throw Error(n(160));switch(o.tag){case 27:var d=o.stateNode,p=dg(r);Kd(r,p,d);break;case 5:var E=o.stateNode;o.flags&32&&(Jn(E,""),o.flags&=-33);var w=dg(r);Kd(r,w,E);break;case 3:case 4:var S=o.stateNode.containerInfo,z=dg(r);fg(r,z,S);break;default:throw Error(n(161))}}catch(Q){it(r,r.return,Q)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function sw(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;sw(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function ls(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)ew(r,s.alternate,s),s=s.sibling}function ka(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:os(4,s,s.return),ka(s);break;case 1:Ur(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&$T(s,s.return,o),ka(s);break;case 27:pc(s.stateNode);case 26:case 5:Ur(s,s.return),ka(s);break;case 22:s.memoizedState===null&&ka(s);break;case 30:ka(s);break;default:ka(s)}r=r.sibling}}function us(r,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,d=r,p=s,E=p.flags;switch(p.tag){case 0:case 11:case 15:us(d,p,o),sc(4,p);break;case 1:if(us(d,p,o),u=p,d=u.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(z){it(u,u.return,z)}if(u=p,d=u.updateQueue,d!==null){var w=u.stateNode;try{var S=d.shared.hiddenCallbacks;if(S!==null)for(d.shared.hiddenCallbacks=null,d=0;d<S.length;d++)OE(S[d],w)}catch(z){it(u,u.return,z)}}o&&E&64&&YT(p),ac(p,p.return);break;case 27:JT(p);case 26:case 5:us(d,p,o),o&&u===null&&E&4&&WT(p),ac(p,p.return);break;case 12:us(d,p,o);break;case 13:us(d,p,o),o&&E&4&&rw(d,p);break;case 22:p.memoizedState===null&&us(d,p,o),ac(p,p.return);break;case 30:break;default:us(d,p,o)}s=s.sibling}}function gg(r,s){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(r!=null&&r.refCount++,o!=null&&Gu(o))}function _g(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&Gu(r))}function Br(r,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)aw(r,s,o,u),s=s.sibling}function aw(r,s,o,u){var d=s.flags;switch(s.tag){case 0:case 11:case 15:Br(r,s,o,u),d&2048&&sc(9,s);break;case 1:Br(r,s,o,u);break;case 3:Br(r,s,o,u),d&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&Gu(r)));break;case 12:if(d&2048){Br(r,s,o,u),r=s.stateNode;try{var p=s.memoizedProps,E=p.id,w=p.onPostCommit;typeof w=="function"&&w(E,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(S){it(s,s.return,S)}}else Br(r,s,o,u);break;case 13:Br(r,s,o,u);break;case 23:break;case 22:p=s.stateNode,E=s.alternate,s.memoizedState!==null?p._visibility&2?Br(r,s,o,u):oc(r,s):p._visibility&2?Br(r,s,o,u):(p._visibility|=2,Jo(r,s,o,u,(s.subtreeFlags&10256)!==0)),d&2048&&gg(E,s);break;case 24:Br(r,s,o,u),d&2048&&_g(s.alternate,s);break;default:Br(r,s,o,u)}}function Jo(r,s,o,u,d){for(d=d&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var p=r,E=s,w=o,S=u,z=E.flags;switch(E.tag){case 0:case 11:case 15:Jo(p,E,w,S,d),sc(8,E);break;case 23:break;case 22:var Q=E.stateNode;E.memoizedState!==null?Q._visibility&2?Jo(p,E,w,S,d):oc(p,E):(Q._visibility|=2,Jo(p,E,w,S,d)),d&&z&2048&&gg(E.alternate,E);break;case 24:Jo(p,E,w,S,d),d&&z&2048&&_g(E.alternate,E);break;default:Jo(p,E,w,S,d)}s=s.sibling}}function oc(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=r,u=s,d=u.flags;switch(u.tag){case 22:oc(o,u),d&2048&&gg(u.alternate,u);break;case 24:oc(o,u),d&2048&&_g(u.alternate,u);break;default:oc(o,u)}s=s.sibling}}var lc=8192;function Zo(r){if(r.subtreeFlags&lc)for(r=r.child;r!==null;)ow(r),r=r.sibling}function ow(r){switch(r.tag){case 26:Zo(r),r.flags&lc&&r.memoizedState!==null&&cD(gr,r.memoizedState,r.memoizedProps);break;case 5:Zo(r);break;case 3:case 4:var s=gr;gr=af(r.stateNode.containerInfo),Zo(r),gr=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=lc,lc=16777216,Zo(r),lc=s):Zo(r));break;default:Zo(r)}}function lw(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function uc(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];Xt=u,cw(u,r)}lw(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)uw(r),r=r.sibling}function uw(r){switch(r.tag){case 0:case 11:case 15:uc(r),r.flags&2048&&os(9,r,r.return);break;case 3:uc(r);break;case 12:uc(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&2&&(r.return===null||r.return.tag!==13)?(s._visibility&=-3,Qd(r)):uc(r);break;default:uc(r)}}function Qd(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];Xt=u,cw(u,r)}lw(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:os(8,s,s.return),Qd(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,Qd(s));break;default:Qd(s)}r=r.sibling}}function cw(r,s){for(;Xt!==null;){var o=Xt;switch(o.tag){case 0:case 11:case 15:os(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Gu(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Xt=u;else e:for(o=r;Xt!==null;){u=Xt;var d=u.sibling,p=u.return;if(tw(u),u===o){Xt=null;break e}if(d!==null){d.return=p,Xt=d;break e}Xt=p}}}var SC={getCacheForType:function(r){var s=mn(jt),o=s.data.get(r);return o===void 0&&(o=r(),s.data.set(r,o)),o}},RC=typeof WeakMap=="function"?WeakMap:Map,We=0,at=null,xe=null,Fe=0,Xe=0,qn=null,cs=!1,el=!1,yg=!1,Ci=0,wt=0,hs=0,Ma=0,vg=0,or=0,tl=0,cc=null,Pn=null,Eg=!1,Tg=0,Yd=1/0,$d=null,ds=null,on=0,fs=null,nl=null,rl=0,wg=0,Ig=null,hw=null,hc=0,Ag=null;function jn(){if((We&2)!==0&&Fe!==0)return Fe&-Fe;if(K.T!==null){var r=Ho;return r!==0?r:Pg()}return Yi()}function dw(){or===0&&(or=(Fe&536870912)===0||Ge?Eu():536870912);var r=ar.current;return r!==null&&(r.flags|=32),or}function Hn(r,s,o){(r===at&&(Xe===2||Xe===9)||r.cancelPendingCommit!==null)&&(il(r,0),ms(r,Fe,or,!1)),ai(r,o),((We&2)===0||r!==at)&&(r===at&&((We&2)===0&&(Ma|=o),wt===4&&ms(r,Fe,or,!1)),zr(r))}function fw(r,s,o){if((We&6)!==0)throw Error(n(327));var u=!o&&(s&124)===0&&(s&r.expiredLanes)===0||la(r,s),d=u?NC(r,s):Rg(r,s,!0),p=u;do{if(d===0){el&&!u&&ms(r,s,0,!1);break}else{if(o=r.current.alternate,p&&!CC(o)){d=Rg(r,s,!1),p=!1;continue}if(d===2){if(p=s,r.errorRecoveryDisabledLanes&p)var E=0;else E=r.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){s=E;e:{var w=r;d=cc;var S=w.current.memoizedState.isDehydrated;if(S&&(il(w,E).flags|=256),E=Rg(w,E,!1),E!==2){if(yg&&!S){w.errorRecoveryDisabledLanes|=p,Ma|=p,d=4;break e}p=Pn,Pn=d,p!==null&&(Pn===null?Pn=p:Pn.push.apply(Pn,p))}d=E}if(p=!1,d!==2)continue}}if(d===1){il(r,0),ms(r,s,0,!0);break}e:{switch(u=r,p=d,p){case 0:case 1:throw Error(n(345));case 4:if((s&4194048)!==s)break;case 6:ms(u,s,or,!cs);break e;case 2:Pn=null;break;case 3:case 5:break;default:throw Error(n(329))}if((s&62914560)===s&&(d=Tg+300-Wn(),10<d)){if(ms(u,s,or,!cs),To(u,0,!0)!==0)break e;u.timeoutHandle=qw(mw.bind(null,u,o,Pn,$d,Eg,s,or,Ma,tl,cs,p,2,-0,0),d);break e}mw(u,o,Pn,$d,Eg,s,or,Ma,tl,cs,p,0,-0,0)}}break}while(!0);zr(r)}function mw(r,s,o,u,d,p,E,w,S,z,Q,X,F,q){if(r.timeoutHandle=-1,X=s.subtreeFlags,(X&8192||(X&16785408)===16785408)&&(yc={stylesheets:null,count:0,unsuspend:uD},ow(s),X=hD(),X!==null)){r.cancelPendingCommit=X(Tw.bind(null,r,s,p,o,u,d,E,w,S,Q,1,F,q)),ms(r,p,E,!z);return}Tw(r,s,p,o,u,d,E,w,S)}function CC(r){for(var s=r;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var d=o[u],p=d.getSnapshot;d=d.value;try{if(!Un(p(),d))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ms(r,s,o,u){s&=~vg,s&=~Ma,r.suspendedLanes|=s,r.pingedLanes&=~s,u&&(r.warmLanes|=s),u=r.expirationTimes;for(var d=s;0<d;){var p=31-fn(d),E=1<<p;u[p]=-1,d&=~E}o!==0&&br(r,o,s)}function Wd(){return(We&6)===0?(dc(0),!1):!0}function bg(){if(xe!==null){if(Xe===0)var r=xe.return;else r=xe,Ei=Na=null,qp(r),Wo=null,nc=0,r=xe;for(;r!==null;)QT(r.alternate,r),r=r.return;xe=null}}function il(r,s){var o=r.timeoutHandle;o!==-1&&(r.timeoutHandle=-1,KC(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),bg(),at=r,xe=o=_i(r.current,null),Fe=s,Xe=0,qn=null,cs=!1,el=la(r,s),yg=!1,tl=or=vg=Ma=hs=wt=0,Pn=cc=null,Eg=!1,(s&8)!==0&&(s|=s&32);var u=r.entangledLanes;if(u!==0)for(r=r.entanglements,u&=s;0<u;){var d=31-fn(u),p=1<<d;s|=r[d],u&=~p}return Ci=s,yd(),o}function pw(r,s){Ne=null,K.H=Ld,s===Qu||s===Rd?(s=VE(),Xe=3):s===DE?(s=VE(),Xe=4):Xe=s===xT?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,qn=s,xe===null&&(wt=1,qd(r,nr(s,r.current)))}function gw(){var r=K.H;return K.H=Ld,r===null?Ld:r}function _w(){var r=K.A;return K.A=SC,r}function Sg(){wt=4,cs||(Fe&4194048)!==Fe&&ar.current!==null||(el=!0),(hs&134217727)===0&&(Ma&134217727)===0||at===null||ms(at,Fe,or,!1)}function Rg(r,s,o){var u=We;We|=2;var d=gw(),p=_w();(at!==r||Fe!==s)&&($d=null,il(r,s)),s=!1;var E=wt;e:do try{if(Xe!==0&&xe!==null){var w=xe,S=qn;switch(Xe){case 8:bg(),E=6;break e;case 3:case 2:case 9:case 6:ar.current===null&&(s=!0);var z=Xe;if(Xe=0,qn=null,sl(r,w,S,z),o&&el){E=0;break e}break;default:z=Xe,Xe=0,qn=null,sl(r,w,S,z)}}DC(),E=wt;break}catch(Q){pw(r,Q)}while(!0);return s&&r.shellSuspendCounter++,Ei=Na=null,We=u,K.H=d,K.A=p,xe===null&&(at=null,Fe=0,yd()),E}function DC(){for(;xe!==null;)yw(xe)}function NC(r,s){var o=We;We|=2;var u=gw(),d=_w();at!==r||Fe!==s?($d=null,Yd=Wn()+500,il(r,s)):el=la(r,s);e:do try{if(Xe!==0&&xe!==null){s=xe;var p=qn;t:switch(Xe){case 1:Xe=0,qn=null,sl(r,s,p,1);break;case 2:case 9:if(NE(p)){Xe=0,qn=null,vw(s);break}s=function(){Xe!==2&&Xe!==9||at!==r||(Xe=7),zr(r)},p.then(s,s);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:NE(p)?(Xe=0,qn=null,vw(s)):(Xe=0,qn=null,sl(r,s,p,7));break;case 5:var E=null;switch(xe.tag){case 26:E=xe.memoizedState;case 5:case 27:var w=xe;if(!E||eI(E)){Xe=0,qn=null;var S=w.sibling;if(S!==null)xe=S;else{var z=w.return;z!==null?(xe=z,Xd(z)):xe=null}break t}}Xe=0,qn=null,sl(r,s,p,5);break;case 6:Xe=0,qn=null,sl(r,s,p,6);break;case 8:bg(),wt=6;break e;default:throw Error(n(462))}}PC();break}catch(Q){pw(r,Q)}while(!0);return Ei=Na=null,K.H=u,K.A=d,We=o,xe!==null?0:(at=null,Fe=0,yd(),wt)}function PC(){for(;xe!==null&&!gu();)yw(xe)}function yw(r){var s=GT(r.alternate,r,Ci);r.memoizedProps=r.pendingProps,s===null?Xd(r):xe=s}function vw(r){var s=r,o=s.alternate;switch(s.tag){case 15:case 0:s=BT(o,s,s.pendingProps,s.type,void 0,Fe);break;case 11:s=BT(o,s,s.pendingProps,s.type.render,s.ref,Fe);break;case 5:qp(s);default:QT(o,s),s=xe=EE(s,Ci),s=GT(o,s,Ci)}r.memoizedProps=r.pendingProps,s===null?Xd(r):xe=s}function sl(r,s,o,u){Ei=Na=null,qp(s),Wo=null,nc=0;var d=s.return;try{if(EC(r,d,s,o,Fe)){wt=1,qd(r,nr(o,r.current)),xe=null;return}}catch(p){if(d!==null)throw xe=d,p;wt=1,qd(r,nr(o,r.current)),xe=null;return}s.flags&32768?(Ge||u===1?r=!0:el||(Fe&536870912)!==0?r=!1:(cs=r=!0,(u===2||u===9||u===3||u===6)&&(u=ar.current,u!==null&&u.tag===13&&(u.flags|=16384))),Ew(s,r)):Xd(s)}function Xd(r){var s=r;do{if((s.flags&32768)!==0){Ew(s,cs);return}r=s.return;var o=wC(s.alternate,s,Ci);if(o!==null){xe=o;return}if(s=s.sibling,s!==null){xe=s;return}xe=s=r}while(s!==null);wt===0&&(wt=5)}function Ew(r,s){do{var o=IC(r.alternate,r);if(o!==null){o.flags&=32767,xe=o;return}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(r=r.sibling,r!==null)){xe=r;return}xe=r=o}while(r!==null);wt=6,xe=null}function Tw(r,s,o,u,d,p,E,w,S){r.cancelPendingCommit=null;do Jd();while(on!==0);if((We&6)!==0)throw Error(n(327));if(s!==null){if(s===r.current)throw Error(n(177));if(p=s.lanes|s.childLanes,p|=_p,wu(r,o,p,E,w,S),r===at&&(xe=at=null,Fe=0),nl=s,fs=r,rl=o,wg=p,Ig=d,hw=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,kC(ia,function(){return Sw(),null})):(r.callbackNode=null,r.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=K.T,K.T=null,d=ie.p,ie.p=2,E=We,We|=4;try{AC(r,s,o)}finally{We=E,ie.p=d,K.T=u}}on=1,ww(),Iw(),Aw()}}function ww(){if(on===1){on=0;var r=fs,s=nl,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=K.T,K.T=null;var u=ie.p;ie.p=2;var d=We;We|=4;try{iw(s,r);var p=Bg,E=cE(r.containerInfo),w=p.focusedElem,S=p.selectionRange;if(E!==w&&w&&w.ownerDocument&&uE(w.ownerDocument.documentElement,w)){if(S!==null&&dp(w)){var z=S.start,Q=S.end;if(Q===void 0&&(Q=z),"selectionStart"in w)w.selectionStart=z,w.selectionEnd=Math.min(Q,w.value.length);else{var X=w.ownerDocument||document,F=X&&X.defaultView||window;if(F.getSelection){var q=F.getSelection(),be=w.textContent.length,Ie=Math.min(S.start,be),rt=S.end===void 0?Ie:Math.min(S.end,be);!q.extend&&Ie>rt&&(E=rt,rt=Ie,Ie=E);var k=lE(w,Ie),P=lE(w,rt);if(k&&P&&(q.rangeCount!==1||q.anchorNode!==k.node||q.anchorOffset!==k.offset||q.focusNode!==P.node||q.focusOffset!==P.offset)){var B=X.createRange();B.setStart(k.node,k.offset),q.removeAllRanges(),Ie>rt?(q.addRange(B),q.extend(P.node,P.offset)):(B.setEnd(P.node,P.offset),q.addRange(B))}}}}for(X=[],q=w;q=q.parentNode;)q.nodeType===1&&X.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<X.length;w++){var $=X[w];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}hf=!!Ug,Bg=Ug=null}finally{We=d,ie.p=u,K.T=o}}r.current=s,on=2}}function Iw(){if(on===2){on=0;var r=fs,s=nl,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=K.T,K.T=null;var u=ie.p;ie.p=2;var d=We;We|=4;try{ew(r,s.alternate,s)}finally{We=d,ie.p=u,K.T=o}}on=3}}function Aw(){if(on===4||on===3){on=0,Qh();var r=fs,s=nl,o=rl,u=hw;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?on=5:(on=0,nl=fs=null,bw(r,r.pendingLanes));var d=r.pendingLanes;if(d===0&&(ds=null),wo(o),s=s.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Et,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=K.T,d=ie.p,ie.p=2,K.T=null;try{for(var p=r.onRecoverableError,E=0;E<u.length;E++){var w=u[E];p(w.value,{componentStack:w.stack})}}finally{K.T=s,ie.p=d}}(rl&3)!==0&&Jd(),zr(r),d=r.pendingLanes,(o&4194090)!==0&&(d&42)!==0?r===Ag?hc++:(hc=0,Ag=r):hc=0,dc(0)}}function bw(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,Gu(s)))}function Jd(r){return ww(),Iw(),Aw(),Sw()}function Sw(){if(on!==5)return!1;var r=fs,s=wg;wg=0;var o=wo(rl),u=K.T,d=ie.p;try{ie.p=32>o?32:o,K.T=null,o=Ig,Ig=null;var p=fs,E=rl;if(on=0,nl=fs=null,rl=0,(We&6)!==0)throw Error(n(331));var w=We;if(We|=4,uw(p.current),aw(p,p.current,E,o),We=w,dc(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Et,p)}catch{}return!0}finally{ie.p=d,K.T=u,bw(r,s)}}function Rw(r,s,o){s=nr(o,s),s=ng(r.stateNode,s,2),r=rs(r,s,2),r!==null&&(ai(r,2),zr(r))}function it(r,s,o){if(r.tag===3)Rw(r,r,o);else for(;s!==null;){if(s.tag===3){Rw(s,r,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ds===null||!ds.has(u))){r=nr(o,r),o=PT(2),u=rs(s,o,2),u!==null&&(VT(o,u,s,r),ai(u,2),zr(u));break}}s=s.return}}function Cg(r,s,o){var u=r.pingCache;if(u===null){u=r.pingCache=new RC;var d=new Set;u.set(s,d)}else d=u.get(s),d===void 0&&(d=new Set,u.set(s,d));d.has(o)||(yg=!0,d.add(o),r=VC.bind(null,r,s,o),s.then(r,r))}function VC(r,s,o){var u=r.pingCache;u!==null&&u.delete(s),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,at===r&&(Fe&o)===o&&(wt===4||wt===3&&(Fe&62914560)===Fe&&300>Wn()-Tg?(We&2)===0&&il(r,0):vg|=o,tl===Fe&&(tl=0)),zr(r)}function Cw(r,s){s===0&&(s=Tu()),r=zo(r,s),r!==null&&(ai(r,s),zr(r))}function xC(r){var s=r.memoizedState,o=0;s!==null&&(o=s.retryLane),Cw(r,o)}function OC(r,s){var o=0;switch(r.tag){case 13:var u=r.stateNode,d=r.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=r.stateNode;break;case 22:u=r.stateNode._retryCache;break;default:throw Error(n(314))}u!==null&&u.delete(s),Cw(r,o)}function kC(r,s){return na(r,s)}var Zd=null,al=null,Dg=!1,ef=!1,Ng=!1,La=0;function zr(r){r!==al&&r.next===null&&(al===null?Zd=al=r:al=al.next=r),ef=!0,Dg||(Dg=!0,LC())}function dc(r,s){if(!Ng&&ef){Ng=!0;do for(var o=!1,u=Zd;u!==null;){if(r!==0){var d=u.pendingLanes;if(d===0)var p=0;else{var E=u.suspendedLanes,w=u.pingedLanes;p=(1<<31-fn(42|r)+1)-1,p&=d&~(E&~w),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(o=!0,Vw(u,p))}else p=Fe,p=To(u,u===at?p:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(p&3)===0||la(u,p)||(o=!0,Vw(u,p));u=u.next}while(o);Ng=!1}}function MC(){Dw()}function Dw(){ef=Dg=!1;var r=0;La!==0&&(GC()&&(r=La),La=0);for(var s=Wn(),o=null,u=Zd;u!==null;){var d=u.next,p=Nw(u,s);p===0?(u.next=null,o===null?Zd=d:o.next=d,d===null&&(al=o)):(o=u,(r!==0||(p&3)!==0)&&(ef=!0)),u=d}dc(r)}function Nw(r,s){for(var o=r.suspendedLanes,u=r.pingedLanes,d=r.expirationTimes,p=r.pendingLanes&-62914561;0<p;){var E=31-fn(p),w=1<<E,S=d[E];S===-1?((w&o)===0||(w&u)!==0)&&(d[E]=vu(w,s)):S<=s&&(r.expiredLanes|=w),p&=~w}if(s=at,o=Fe,o=To(r,r===s?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u=r.callbackNode,o===0||r===s&&(Xe===2||Xe===9)||r.cancelPendingCommit!==null)return u!==null&&u!==null&&ra(u),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||la(r,o)){if(s=o&-o,s===r.callbackPriority)return s;switch(u!==null&&ra(u),wo(o)){case 2:case 8:o=vo;break;case 32:o=ia;break;case 268435456:o=Eo;break;default:o=ia}return u=Pw.bind(null,r),o=na(o,u),r.callbackPriority=s,r.callbackNode=o,s}return u!==null&&u!==null&&ra(u),r.callbackPriority=2,r.callbackNode=null,2}function Pw(r,s){if(on!==0&&on!==5)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(Jd()&&r.callbackNode!==o)return null;var u=Fe;return u=To(r,r===at?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u===0?null:(fw(r,u,s),Nw(r,Wn()),r.callbackNode!=null&&r.callbackNode===o?Pw.bind(null,r):null)}function Vw(r,s){if(Jd())return null;fw(r,s,!0)}function LC(){QC(function(){(We&6)!==0?na(_u,MC):Dw()})}function Pg(){return La===0&&(La=Eu()),La}function xw(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:Co(""+r)}function Ow(r,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,r.id&&o.setAttribute("form",r.id),s.parentNode.insertBefore(o,s),r=new FormData(r),o.parentNode.removeChild(o),r}function UC(r,s,o,u,d){if(s==="submit"&&o&&o.stateNode===d){var p=xw((d[xt]||null).action),E=u.submitter;E&&(s=(s=E[xt]||null)?xw(s.formAction):E.getAttribute("formAction"),s!==null&&(p=s,E=null));var w=new Do("action","action",null,u,d);r.push({event:w,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(La!==0){var S=E?Ow(d,E):new FormData(d);Xp(o,{pending:!0,data:S,method:d.method,action:p},null,S)}}else typeof p=="function"&&(w.preventDefault(),S=E?Ow(d,E):new FormData(d),Xp(o,{pending:!0,data:S,method:d.method,action:p},p,S))},currentTarget:d}]})}}for(var Vg=0;Vg<gp.length;Vg++){var xg=gp[Vg],BC=xg.toLowerCase(),zC=xg[0].toUpperCase()+xg.slice(1);pr(BC,"on"+zC)}pr(fE,"onAnimationEnd"),pr(mE,"onAnimationIteration"),pr(pE,"onAnimationStart"),pr("dblclick","onDoubleClick"),pr("focusin","onFocus"),pr("focusout","onBlur"),pr(rC,"onTransitionRun"),pr(iC,"onTransitionStart"),pr(sC,"onTransitionCancel"),pr(gE,"onTransitionEnd"),li("onMouseEnter",["mouseout","mouseover"]),li("onMouseLeave",["mouseout","mouseover"]),li("onPointerEnter",["pointerout","pointerover"]),li("onPointerLeave",["pointerout","pointerover"]),fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fr("onBeforeInput",["compositionend","keypress","textInput","paste"]),fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fc));function kw(r,s){s=(s&4)!==0;for(var o=0;o<r.length;o++){var u=r[o],d=u.event;u=u.listeners;e:{var p=void 0;if(s)for(var E=u.length-1;0<=E;E--){var w=u[E],S=w.instance,z=w.currentTarget;if(w=w.listener,S!==p&&d.isPropagationStopped())break e;p=w,d.currentTarget=z;try{p(d)}catch(Q){Fd(Q)}d.currentTarget=null,p=S}else for(E=0;E<u.length;E++){if(w=u[E],S=w.instance,z=w.currentTarget,w=w.listener,S!==p&&d.isPropagationStopped())break e;p=w,d.currentTarget=z;try{p(d)}catch(Q){Fd(Q)}d.currentTarget=null,p=S}}}}function Oe(r,s){var o=s[Au];o===void 0&&(o=s[Au]=new Set);var u=r+"__bubble";o.has(u)||(Mw(s,r,2,!1),o.add(u))}function Og(r,s,o){var u=0;s&&(u|=4),Mw(o,r,u,s)}var tf="_reactListening"+Math.random().toString(36).slice(2);function kg(r){if(!r[tf]){r[tf]=!0,bu.forEach(function(o){o!=="selectionchange"&&(FC.has(o)||Og(o,!1,r),Og(o,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[tf]||(s[tf]=!0,Og("selectionchange",!1,s))}}function Mw(r,s,o,u){switch(aI(s)){case 2:var d=mD;break;case 8:d=pD;break;default:d=$g}o=d.bind(null,s,o,r),d=void 0,!er||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),u?d!==void 0?r.addEventListener(s,o,{capture:!0,passive:d}):r.addEventListener(s,o,!0):d!==void 0?r.addEventListener(s,o,{passive:d}):r.addEventListener(s,o,!1)}function Mg(r,s,o,u,d){var p=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var w=u.stateNode.containerInfo;if(w===d)break;if(E===4)for(E=u.return;E!==null;){var S=E.tag;if((S===3||S===4)&&E.stateNode.containerInfo===d)return;E=E.return}for(;w!==null;){if(E=oi(w),E===null)return;if(S=E.tag,S===5||S===6||S===26||S===27){u=p=E;continue e}w=w.parentNode}}u=u.return}rd(function(){var z=p,Q=Zn(o),X=[];e:{var F=_E.get(r);if(F!==void 0){var q=Do,be=r;switch(r){case"keypress":if(Pr(o)===0)break e;case"keydown":case"keyup":q=ko;break;case"focusin":be="focus",q=Vo;break;case"focusout":be="blur",q=Vo;break;case"beforeblur":case"afterblur":q=Vo;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=tr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=lp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=hd;break;case fE:case mE:case pE:q=xo;break;case gE:q=fd;break;case"scroll":case"scrollend":q=id;break;case"wheel":q=Mo;break;case"copy":case"cut":case"paste":q=Oo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Lu;break;case"toggle":case"beforetoggle":q=pd}var Ie=(s&4)!==0,rt=!Ie&&(r==="scroll"||r==="scrollend"),k=Ie?F!==null?F+"Capture":null:F;Ie=[];for(var P=z,B;P!==null;){var $=P;if(B=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||B===null||k===null||($=ga(P,k),$!=null&&Ie.push(mc(P,$,B))),rt)break;P=P.return}0<Ie.length&&(F=new q(F,be,null,o,Q),X.push({event:F,listeners:Ie}))}}if((s&7)===0){e:{if(F=r==="mouseover"||r==="pointerover",q=r==="mouseout"||r==="pointerout",F&&o!==hi&&(be=o.relatedTarget||o.fromElement)&&(oi(be)||be[Xn]))break e;if((q||F)&&(F=Q.window===Q?Q:(F=Q.ownerDocument)?F.defaultView||F.parentWindow:window,q?(be=o.relatedTarget||o.toElement,q=z,be=be?oi(be):null,be!==null&&(rt=l(be),Ie=be.tag,be!==rt||Ie!==5&&Ie!==27&&Ie!==6)&&(be=null)):(q=null,be=z),q!==be)){if(Ie=tr,$="onMouseLeave",k="onMouseEnter",P="mouse",(r==="pointerout"||r==="pointerover")&&(Ie=Lu,$="onPointerLeave",k="onPointerEnter",P="pointer"),rt=q==null?F:Rr(q),B=be==null?F:Rr(be),F=new Ie($,P+"leave",q,o,Q),F.target=rt,F.relatedTarget=B,$=null,oi(Q)===z&&(Ie=new Ie(k,P+"enter",be,o,Q),Ie.target=B,Ie.relatedTarget=rt,$=Ie),rt=$,q&&be)t:{for(Ie=q,k=be,P=0,B=Ie;B;B=ol(B))P++;for(B=0,$=k;$;$=ol($))B++;for(;0<P-B;)Ie=ol(Ie),P--;for(;0<B-P;)k=ol(k),B--;for(;P--;){if(Ie===k||k!==null&&Ie===k.alternate)break t;Ie=ol(Ie),k=ol(k)}Ie=null}else Ie=null;q!==null&&Lw(X,F,q,Ie,!1),be!==null&&rt!==null&&Lw(X,rt,be,Ie,!0)}}e:{if(F=z?Rr(z):window,q=F.nodeName&&F.nodeName.toLowerCase(),q==="select"||q==="input"&&F.type==="file")var fe=nE;else if(qt(F))if(rE)fe=eC;else{fe=J1;var Ve=X1}else q=F.nodeName,!q||q.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?z&&Nu(z.elementType)&&(fe=nE):fe=Z1;if(fe&&(fe=fe(r,z))){gi(X,fe,o,Q);break e}Ve&&Ve(r,F,z),r==="focusout"&&z&&F.type==="number"&&z.memoizedProps.value!=null&&Ji(F,"number",F.value)}switch(Ve=z?Rr(z):window,r){case"focusin":(qt(Ve)||Ve.contentEditable==="true")&&(Lo=Ve,fp=z,zu=null);break;case"focusout":zu=fp=Lo=null;break;case"mousedown":mp=!0;break;case"contextmenu":case"mouseup":case"dragend":mp=!1,hE(X,o,Q);break;case"selectionchange":if(nC)break;case"keydown":case"keyup":hE(X,o,Q)}var ve;if(Or)e:{switch(r){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else Be?H(r,o)&&(Ae="onCompositionEnd"):r==="keydown"&&o.keyCode===229&&(Ae="onCompositionStart");Ae&&(v&&o.locale!=="ko"&&(Be||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Be&&(ve=Vu()):(Nr=Q,Zi="value"in Nr?Nr.value:Nr.textContent,Be=!0)),Ve=nf(z,Ae),0<Ve.length&&(Ae=new ku(Ae,r,null,o,Q),X.push({event:Ae,listeners:Ve}),ve?Ae.data=ve:(ve=ae(o),ve!==null&&(Ae.data=ve)))),(ve=_?Ft(r,o):ze(r,o))&&(Ae=nf(z,"onBeforeInput"),0<Ae.length&&(Ve=new ku("onBeforeInput","beforeinput",null,o,Q),X.push({event:Ve,listeners:Ae}),Ve.data=ve)),UC(X,r,z,o,Q)}kw(X,s)})}function mc(r,s,o){return{instance:r,listener:s,currentTarget:o}}function nf(r,s){for(var o=s+"Capture",u=[];r!==null;){var d=r,p=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||p===null||(d=ga(r,o),d!=null&&u.unshift(mc(r,d,p)),d=ga(r,s),d!=null&&u.push(mc(r,d,p))),r.tag===3)return u;r=r.return}return[]}function ol(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function Lw(r,s,o,u,d){for(var p=s._reactName,E=[];o!==null&&o!==u;){var w=o,S=w.alternate,z=w.stateNode;if(w=w.tag,S!==null&&S===u)break;w!==5&&w!==26&&w!==27||z===null||(S=z,d?(z=ga(o,p),z!=null&&E.unshift(mc(o,z,S))):d||(z=ga(o,p),z!=null&&E.push(mc(o,z,S)))),o=o.return}E.length!==0&&r.push({event:s,listeners:E})}var qC=/\r\n?/g,jC=/\u0000|\uFFFD/g;function Uw(r){return(typeof r=="string"?r:""+r).replace(qC,`
`).replace(jC,"")}function Bw(r,s){return s=Uw(s),Uw(r)===s}function rf(){}function nt(r,s,o,u,d,p){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||Jn(r,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&Jn(r,""+u);break;case"className":Cr(r,"class",u);break;case"tabIndex":Cr(r,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Cr(r,o,u);break;case"style":Du(r,u,p);break;case"data":if(s!=="object"){Cr(r,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){r.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=Co(""+u),r.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(o==="formAction"?(s!=="input"&&nt(r,s,"name",d.name,d,null),nt(r,s,"formEncType",d.formEncType,d,null),nt(r,s,"formMethod",d.formMethod,d,null),nt(r,s,"formTarget",d.formTarget,d,null)):(nt(r,s,"encType",d.encType,d,null),nt(r,s,"method",d.method,d,null),nt(r,s,"target",d.target,d,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=Co(""+u),r.setAttribute(o,u);break;case"onClick":u!=null&&(r.onclick=rf);break;case"onScroll":u!=null&&Oe("scroll",r);break;case"onScrollEnd":u!=null&&Oe("scrollend",r);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(n(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(n(60));r.innerHTML=o}}break;case"multiple":r.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":r.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){r.removeAttribute("xlink:href");break}o=Co(""+u),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""+u):r.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":u===!0?r.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,u):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?r.setAttribute(o,u):r.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?r.removeAttribute(o):r.setAttribute(o,u);break;case"popover":Oe("beforetoggle",r),Oe("toggle",r),Xi(r,"popover",u);break;case"xlinkActuate":rn(r,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":rn(r,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":rn(r,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":rn(r,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":rn(r,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":rn(r,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":rn(r,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":rn(r,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":rn(r,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Xi(r,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=ap.get(o)||o,Xi(r,o,u))}}function Lg(r,s,o,u,d,p){switch(o){case"style":Du(r,u,p);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(n(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(n(60));r.innerHTML=o}}break;case"children":typeof u=="string"?Jn(r,u):(typeof u=="number"||typeof u=="bigint")&&Jn(r,""+u);break;case"onScroll":u!=null&&Oe("scroll",r);break;case"onScrollEnd":u!=null&&Oe("scrollend",r);break;case"onClick":u!=null&&(r.onclick=rf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Io.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),s=o.slice(2,d?o.length-7:void 0),p=r[xt]||null,p=p!=null?p[o]:null,typeof p=="function"&&r.removeEventListener(s,p,d),typeof u=="function")){typeof p!="function"&&p!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(s,u,d);break e}o in r?r[o]=u:u===!0?r.setAttribute(o,""):Xi(r,o,u)}}}function ln(r,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Oe("error",r),Oe("load",r);var u=!1,d=!1,p;for(p in o)if(o.hasOwnProperty(p)){var E=o[p];if(E!=null)switch(p){case"src":u=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(n(137,s));default:nt(r,s,p,E,o,null)}}d&&nt(r,s,"srcSet",o.srcSet,o,null),u&&nt(r,s,"src",o.src,o,null);return;case"input":Oe("invalid",r);var w=p=E=d=null,S=null,z=null;for(u in o)if(o.hasOwnProperty(u)){var Q=o[u];if(Q!=null)switch(u){case"name":d=Q;break;case"type":E=Q;break;case"checked":S=Q;break;case"defaultChecked":z=Q;break;case"value":p=Q;break;case"defaultValue":w=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(n(137,s));break;default:nt(r,s,u,Q,o,null)}}fa(r,p,w,S,z,E,d,!1),Ro(r);return;case"select":Oe("invalid",r),u=E=p=null;for(d in o)if(o.hasOwnProperty(d)&&(w=o[d],w!=null))switch(d){case"value":p=w;break;case"defaultValue":E=w;break;case"multiple":u=w;default:nt(r,s,d,w,o,null)}s=p,o=E,r.multiple=!!u,s!=null?ci(r,!!u,s,!1):o!=null&&ci(r,!!u,o,!0);return;case"textarea":Oe("invalid",r),p=d=u=null;for(E in o)if(o.hasOwnProperty(E)&&(w=o[E],w!=null))switch(E){case"value":u=w;break;case"defaultValue":d=w;break;case"children":p=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(n(91));break;default:nt(r,s,E,w,o,null)}ma(r,u,d,p),Ro(r);return;case"option":for(S in o)if(o.hasOwnProperty(S)&&(u=o[S],u!=null))switch(S){case"selected":r.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:nt(r,s,S,u,o,null)}return;case"dialog":Oe("beforetoggle",r),Oe("toggle",r),Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":Oe("load",r);break;case"video":case"audio":for(u=0;u<fc.length;u++)Oe(fc[u],r);break;case"image":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"embed":case"source":case"link":Oe("error",r),Oe("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in o)if(o.hasOwnProperty(z)&&(u=o[z],u!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(n(137,s));default:nt(r,s,z,u,o,null)}return;default:if(Nu(s)){for(Q in o)o.hasOwnProperty(Q)&&(u=o[Q],u!==void 0&&Lg(r,s,Q,u,o,void 0));return}}for(w in o)o.hasOwnProperty(w)&&(u=o[w],u!=null&&nt(r,s,w,u,o,null))}function HC(r,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,p=null,E=null,w=null,S=null,z=null,Q=null;for(q in o){var X=o[q];if(o.hasOwnProperty(q)&&X!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":S=X;default:u.hasOwnProperty(q)||nt(r,s,q,null,u,X)}}for(var F in u){var q=u[F];if(X=o[F],u.hasOwnProperty(F)&&(q!=null||X!=null))switch(F){case"type":p=q;break;case"name":d=q;break;case"checked":z=q;break;case"defaultChecked":Q=q;break;case"value":E=q;break;case"defaultValue":w=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(n(137,s));break;default:q!==X&&nt(r,s,F,q,u,X)}}Ln(r,E,w,S,z,Q,p,d);return;case"select":q=E=w=F=null;for(p in o)if(S=o[p],o.hasOwnProperty(p)&&S!=null)switch(p){case"value":break;case"multiple":q=S;default:u.hasOwnProperty(p)||nt(r,s,p,null,u,S)}for(d in u)if(p=u[d],S=o[d],u.hasOwnProperty(d)&&(p!=null||S!=null))switch(d){case"value":F=p;break;case"defaultValue":w=p;break;case"multiple":E=p;default:p!==S&&nt(r,s,d,p,u,S)}s=w,o=E,u=q,F!=null?ci(r,!!o,F,!1):!!u!=!!o&&(s!=null?ci(r,!!o,s,!0):ci(r,!!o,o?[]:"",!1));return;case"textarea":q=F=null;for(w in o)if(d=o[w],o.hasOwnProperty(w)&&d!=null&&!u.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:nt(r,s,w,null,u,d)}for(E in u)if(d=u[E],p=o[E],u.hasOwnProperty(E)&&(d!=null||p!=null))switch(E){case"value":F=d;break;case"defaultValue":q=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(n(91));break;default:d!==p&&nt(r,s,E,d,u,p)}et(r,F,q);return;case"option":for(var be in o)if(F=o[be],o.hasOwnProperty(be)&&F!=null&&!u.hasOwnProperty(be))switch(be){case"selected":r.selected=!1;break;default:nt(r,s,be,null,u,F)}for(S in u)if(F=u[S],q=o[S],u.hasOwnProperty(S)&&F!==q&&(F!=null||q!=null))switch(S){case"selected":r.selected=F&&typeof F!="function"&&typeof F!="symbol";break;default:nt(r,s,S,F,u,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ie in o)F=o[Ie],o.hasOwnProperty(Ie)&&F!=null&&!u.hasOwnProperty(Ie)&&nt(r,s,Ie,null,u,F);for(z in u)if(F=u[z],q=o[z],u.hasOwnProperty(z)&&F!==q&&(F!=null||q!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(n(137,s));break;default:nt(r,s,z,F,u,q)}return;default:if(Nu(s)){for(var rt in o)F=o[rt],o.hasOwnProperty(rt)&&F!==void 0&&!u.hasOwnProperty(rt)&&Lg(r,s,rt,void 0,u,F);for(Q in u)F=u[Q],q=o[Q],!u.hasOwnProperty(Q)||F===q||F===void 0&&q===void 0||Lg(r,s,Q,F,u,q);return}}for(var k in o)F=o[k],o.hasOwnProperty(k)&&F!=null&&!u.hasOwnProperty(k)&&nt(r,s,k,null,u,F);for(X in u)F=u[X],q=o[X],!u.hasOwnProperty(X)||F===q||F==null&&q==null||nt(r,s,X,F,u,q)}var Ug=null,Bg=null;function sf(r){return r.nodeType===9?r:r.ownerDocument}function zw(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fw(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function zg(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Fg=null;function GC(){var r=window.event;return r&&r.type==="popstate"?r===Fg?!1:(Fg=r,!0):(Fg=null,!1)}var qw=typeof setTimeout=="function"?setTimeout:void 0,KC=typeof clearTimeout=="function"?clearTimeout:void 0,jw=typeof Promise=="function"?Promise:void 0,QC=typeof queueMicrotask=="function"?queueMicrotask:typeof jw<"u"?function(r){return jw.resolve(null).then(r).catch(YC)}:qw;function YC(r){setTimeout(function(){throw r})}function ps(r){return r==="head"}function Hw(r,s){var o=s,u=0,d=0;do{var p=o.nextSibling;if(r.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"){if(0<u&&8>u){o=u;var E=r.ownerDocument;if(o&1&&pc(E.documentElement),o&2&&pc(E.body),o&4)for(o=E.head,pc(o),E=o.firstChild;E;){var w=E.nextSibling,S=E.nodeName;E[ua]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=w}}if(d===0){r.removeChild(p),Ic(s);return}d--}else o==="$"||o==="$?"||o==="$!"?d++:u=o.charCodeAt(0)-48;else u=0;o=p}while(o);Ic(s)}function qg(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":qg(o),Wi(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function $C(r,s,o,u){for(;r.nodeType===1;){var d=o;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(u){if(!r[ua])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(p=r.getAttribute("rel"),p==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(p!==d.rel||r.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||r.getAttribute("title")!==(d.title==null?null:d.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(p=r.getAttribute("src"),(p!==(d.src==null?null:d.src)||r.getAttribute("type")!==(d.type==null?null:d.type)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&p&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var p=d.name==null?null:""+d.name;if(d.type==="hidden"&&r.getAttribute("name")===p)return r}else return r;if(r=_r(r.nextSibling),r===null)break}return null}function WC(r,s,o){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o||(r=_r(r.nextSibling),r===null))return null;return r}function jg(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function XC(r,s){var o=r.ownerDocument;if(r.data!=="$?"||o.readyState==="complete")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),r._reactRetry=u}}function _r(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}var Hg=null;function Gw(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var o=r.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return r;s--}else o==="/$"&&s++}r=r.previousSibling}return null}function Kw(r,s,o){switch(s=sf(o),r){case"html":if(r=s.documentElement,!r)throw Error(n(452));return r;case"head":if(r=s.head,!r)throw Error(n(453));return r;case"body":if(r=s.body,!r)throw Error(n(454));return r;default:throw Error(n(451))}}function pc(r){for(var s=r.attributes;s.length;)r.removeAttributeNode(s[0]);Wi(r)}var lr=new Map,Qw=new Set;function af(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var Di=ie.d;ie.d={f:JC,r:ZC,D:eD,C:tD,L:nD,m:rD,X:sD,S:iD,M:aD};function JC(){var r=Di.f(),s=Wd();return r||s}function ZC(r){var s=Sr(r);s!==null&&s.tag===5&&s.type==="form"?fT(s):Di.r(r)}var ll=typeof document>"u"?null:document;function Yw(r,s,o){var u=ll;if(u&&typeof s=="string"&&s){var d=Ot(s);d='link[rel="'+r+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),Qw.has(d)||(Qw.add(d),r={rel:r,crossOrigin:o,href:s},u.querySelector(d)===null&&(s=u.createElement("link"),ln(s,"link",r),Rt(s),u.head.appendChild(s)))}}function eD(r){Di.D(r),Yw("dns-prefetch",r,null)}function tD(r,s){Di.C(r,s),Yw("preconnect",r,s)}function nD(r,s,o){Di.L(r,s,o);var u=ll;if(u&&r&&s){var d='link[rel="preload"][as="'+Ot(s)+'"]';s==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+Ot(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+Ot(o.imageSizes)+'"]')):d+='[href="'+Ot(r)+'"]';var p=d;switch(s){case"style":p=ul(r);break;case"script":p=cl(r)}lr.has(p)||(r=y({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:r,as:s},o),lr.set(p,r),u.querySelector(d)!==null||s==="style"&&u.querySelector(gc(p))||s==="script"&&u.querySelector(_c(p))||(s=u.createElement("link"),ln(s,"link",r),Rt(s),u.head.appendChild(s)))}}function rD(r,s){Di.m(r,s);var o=ll;if(o&&r){var u=s&&typeof s.as=="string"?s.as:"script",d='link[rel="modulepreload"][as="'+Ot(u)+'"][href="'+Ot(r)+'"]',p=d;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=cl(r)}if(!lr.has(p)&&(r=y({rel:"modulepreload",href:r},s),lr.set(p,r),o.querySelector(d)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(_c(p)))return}u=o.createElement("link"),ln(u,"link",r),Rt(u),o.head.appendChild(u)}}}function iD(r,s,o){Di.S(r,s,o);var u=ll;if(u&&r){var d=En(u).hoistableStyles,p=ul(r);s=s||"default";var E=d.get(p);if(!E){var w={loading:0,preload:null};if(E=u.querySelector(gc(p)))w.loading=5;else{r=y({rel:"stylesheet",href:r,"data-precedence":s},o),(o=lr.get(p))&&Gg(r,o);var S=E=u.createElement("link");Rt(S),ln(S,"link",r),S._p=new Promise(function(z,Q){S.onload=z,S.onerror=Q}),S.addEventListener("load",function(){w.loading|=1}),S.addEventListener("error",function(){w.loading|=2}),w.loading|=4,of(E,s,u)}E={type:"stylesheet",instance:E,count:1,state:w},d.set(p,E)}}}function sD(r,s){Di.X(r,s);var o=ll;if(o&&r){var u=En(o).hoistableScripts,d=cl(r),p=u.get(d);p||(p=o.querySelector(_c(d)),p||(r=y({src:r,async:!0},s),(s=lr.get(d))&&Kg(r,s),p=o.createElement("script"),Rt(p),ln(p,"link",r),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(d,p))}}function aD(r,s){Di.M(r,s);var o=ll;if(o&&r){var u=En(o).hoistableScripts,d=cl(r),p=u.get(d);p||(p=o.querySelector(_c(d)),p||(r=y({src:r,async:!0,type:"module"},s),(s=lr.get(d))&&Kg(r,s),p=o.createElement("script"),Rt(p),ln(p,"link",r),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(d,p))}}function $w(r,s,o,u){var d=(d=Se.current)?af(d):null;if(!d)throw Error(n(446));switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=ul(o.href),o=En(d).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){r=ul(o.href);var p=En(d).hoistableStyles,E=p.get(r);if(E||(d=d.ownerDocument||d,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(r,E),(p=d.querySelector(gc(r)))&&!p._p&&(E.instance=p,E.state.loading=5),lr.has(r)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},lr.set(r,o),p||oD(d,r,o,E.state))),s&&u===null)throw Error(n(528,""));return E}if(s&&u!==null)throw Error(n(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=cl(o),o=En(d).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(n(444,r))}}function ul(r){return'href="'+Ot(r)+'"'}function gc(r){return'link[rel="stylesheet"]['+r+"]"}function Ww(r){return y({},r,{"data-precedence":r.precedence,precedence:null})}function oD(r,s,o,u){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=r.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),ln(s,"link",o),Rt(s),r.head.appendChild(s))}function cl(r){return'[src="'+Ot(r)+'"]'}function _c(r){return"script[async]"+r}function Xw(r,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=r.querySelector('style[data-href~="'+Ot(o.href)+'"]');if(u)return s.instance=u,Rt(u),u;var d=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(r.ownerDocument||r).createElement("style"),Rt(u),ln(u,"style",d),of(u,o.precedence,r),s.instance=u;case"stylesheet":d=ul(o.href);var p=r.querySelector(gc(d));if(p)return s.state.loading|=4,s.instance=p,Rt(p),p;u=Ww(o),(d=lr.get(d))&&Gg(u,d),p=(r.ownerDocument||r).createElement("link"),Rt(p);var E=p;return E._p=new Promise(function(w,S){E.onload=w,E.onerror=S}),ln(p,"link",u),s.state.loading|=4,of(p,o.precedence,r),s.instance=p;case"script":return p=cl(o.src),(d=r.querySelector(_c(p)))?(s.instance=d,Rt(d),d):(u=o,(d=lr.get(p))&&(u=y({},o),Kg(u,d)),r=r.ownerDocument||r,d=r.createElement("script"),Rt(d),ln(d,"link",u),r.head.appendChild(d),s.instance=d);case"void":return null;default:throw Error(n(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,of(u,o.precedence,r));return s.instance}function of(r,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=u.length?u[u.length-1]:null,p=d,E=0;E<u.length;E++){var w=u[E];if(w.dataset.precedence===s)p=w;else if(p!==d)break}p?p.parentNode.insertBefore(r,p.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(r,s.firstChild))}function Gg(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function Kg(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var lf=null;function Jw(r,s,o){if(lf===null){var u=new Map,d=lf=new Map;d.set(o,u)}else d=lf,u=d.get(o),u||(u=new Map,d.set(o,u));if(u.has(r))return u;for(u.set(r,null),o=o.getElementsByTagName(r),d=0;d<o.length;d++){var p=o[d];if(!(p[ua]||p[zt]||r==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var E=p.getAttribute(s)||"";E=r+E;var w=u.get(E);w?w.push(p):u.set(E,[p])}}return u}function Zw(r,s,o){r=r.ownerDocument||r,r.head.insertBefore(o,s==="title"?r.querySelector("head > title"):null)}function lD(r,s,o){if(o===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function eI(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var yc=null;function uD(){}function cD(r,s,o){if(yc===null)throw Error(n(475));var u=yc;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var d=ul(o.href),p=r.querySelector(gc(d));if(p){r=p._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(u.count++,u=uf.bind(u),r.then(u,u)),s.state.loading|=4,s.instance=p,Rt(p);return}p=r.ownerDocument||r,o=Ww(o),(d=lr.get(d))&&Gg(o,d),p=p.createElement("link"),Rt(p);var E=p;E._p=new Promise(function(w,S){E.onload=w,E.onerror=S}),ln(p,"link",o),s.instance=p}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(u.count++,s=uf.bind(u),r.addEventListener("load",s),r.addEventListener("error",s))}}function hD(){if(yc===null)throw Error(n(475));var r=yc;return r.stylesheets&&r.count===0&&Qg(r,r.stylesheets),0<r.count?function(s){var o=setTimeout(function(){if(r.stylesheets&&Qg(r,r.stylesheets),r.unsuspend){var u=r.unsuspend;r.unsuspend=null,u()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(o)}}:null}function uf(){if(this.count--,this.count===0){if(this.stylesheets)Qg(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var cf=null;function Qg(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,cf=new Map,s.forEach(dD,r),cf=null,uf.call(r))}function dD(r,s){if(!(s.state.loading&4)){var o=cf.get(r);if(o)var u=o.get(null);else{o=new Map,cf.set(r,o);for(var d=r.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<d.length;p++){var E=d[p];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}d=s.instance,E=d.getAttribute("data-precedence"),p=o.get(E)||u,p===u&&o.set(null,d),o.set(E,d),this.count++,u=uf.bind(this),d.addEventListener("load",u),d.addEventListener("error",u),p?p.parentNode.insertBefore(d,p.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(d,r.firstChild)),s.state.loading|=4}}var vc={$$typeof:ne,Provider:null,Consumer:null,_currentValue:pe,_currentValue2:pe,_threadCount:0};function fD(r,s,o,u,d,p,E,w){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=si(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=si(0),this.hiddenUpdates=si(null),this.identifierPrefix=u,this.onUncaughtError=d,this.onCaughtError=p,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function tI(r,s,o,u,d,p,E,w,S,z,Q,X){return r=new fD(r,s,o,E,w,S,z,X),s=1,p===!0&&(s|=24),p=Bn(3,null,null,s),r.current=p,p.stateNode=r,s=Cp(),s.refCount++,r.pooledCache=s,s.refCount++,p.memoizedState={element:u,isDehydrated:o,cache:s},Vp(p),r}function nI(r){return r?(r=Fo,r):Fo}function rI(r,s,o,u,d,p){d=nI(d),u.context===null?u.context=d:u.pendingContext=d,u=ns(s),u.payload={element:o},p=p===void 0?null:p,p!==null&&(u.callback=p),o=rs(r,u,s),o!==null&&(Hn(o,r,s),$u(o,r,s))}function iI(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<s?o:s}}function Yg(r,s){iI(r,s),(r=r.alternate)&&iI(r,s)}function sI(r){if(r.tag===13){var s=zo(r,67108864);s!==null&&Hn(s,r,67108864),Yg(r,67108864)}}var hf=!0;function mD(r,s,o,u){var d=K.T;K.T=null;var p=ie.p;try{ie.p=2,$g(r,s,o,u)}finally{ie.p=p,K.T=d}}function pD(r,s,o,u){var d=K.T;K.T=null;var p=ie.p;try{ie.p=8,$g(r,s,o,u)}finally{ie.p=p,K.T=d}}function $g(r,s,o,u){if(hf){var d=Wg(u);if(d===null)Mg(r,s,u,df,o),oI(r,u);else if(_D(d,r,s,o,u))u.stopPropagation();else if(oI(r,u),s&4&&-1<gD.indexOf(r)){for(;d!==null;){var p=Sr(d);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var E=dr(p.pendingLanes);if(E!==0){var w=p;for(w.pendingLanes|=2,w.entangledLanes|=2;E;){var S=1<<31-fn(E);w.entanglements[1]|=S,E&=~S}zr(p),(We&6)===0&&(Yd=Wn()+500,dc(0))}}break;case 13:w=zo(p,2),w!==null&&Hn(w,p,2),Wd(),Yg(p,2)}if(p=Wg(u),p===null&&Mg(r,s,u,df,o),p===d)break;d=p}d!==null&&u.stopPropagation()}else Mg(r,s,u,null,o)}}function Wg(r){return r=Zn(r),Xg(r)}var df=null;function Xg(r){if(df=null,r=oi(r),r!==null){var s=l(r);if(s===null)r=null;else{var o=s.tag;if(o===13){if(r=c(s),r!==null)return r;r=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return df=r,null}function aI(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ep()){case _u:return 2;case vo:return 8;case ia:case tp:return 32;case Eo:return 268435456;default:return 32}default:return 32}}var Jg=!1,gs=null,_s=null,ys=null,Ec=new Map,Tc=new Map,vs=[],gD="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function oI(r,s){switch(r){case"focusin":case"focusout":gs=null;break;case"dragenter":case"dragleave":_s=null;break;case"mouseover":case"mouseout":ys=null;break;case"pointerover":case"pointerout":Ec.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tc.delete(s.pointerId)}}function wc(r,s,o,u,d,p){return r===null||r.nativeEvent!==p?(r={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},s!==null&&(s=Sr(s),s!==null&&sI(s)),r):(r.eventSystemFlags|=u,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function _D(r,s,o,u,d){switch(s){case"focusin":return gs=wc(gs,r,s,o,u,d),!0;case"dragenter":return _s=wc(_s,r,s,o,u,d),!0;case"mouseover":return ys=wc(ys,r,s,o,u,d),!0;case"pointerover":var p=d.pointerId;return Ec.set(p,wc(Ec.get(p)||null,r,s,o,u,d)),!0;case"gotpointercapture":return p=d.pointerId,Tc.set(p,wc(Tc.get(p)||null,r,s,o,u,d)),!0}return!1}function lI(r){var s=oi(r.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=c(o),s!==null){r.blockedOn=s,Wh(r.priority,function(){if(o.tag===13){var u=jn();u=Qi(u);var d=zo(o,u);d!==null&&Hn(d,o,u),Yg(o,u)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function ff(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var o=Wg(r.nativeEvent);if(o===null){o=r.nativeEvent;var u=new o.constructor(o.type,o);hi=u,o.target.dispatchEvent(u),hi=null}else return s=Sr(o),s!==null&&sI(s),r.blockedOn=o,!1;s.shift()}return!0}function uI(r,s,o){ff(r)&&o.delete(s)}function yD(){Jg=!1,gs!==null&&ff(gs)&&(gs=null),_s!==null&&ff(_s)&&(_s=null),ys!==null&&ff(ys)&&(ys=null),Ec.forEach(uI),Tc.forEach(uI)}function mf(r,s){r.blockedOn===s&&(r.blockedOn=null,Jg||(Jg=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,yD)))}var pf=null;function cI(r){pf!==r&&(pf=r,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){pf===r&&(pf=null);for(var s=0;s<r.length;s+=3){var o=r[s],u=r[s+1],d=r[s+2];if(typeof u!="function"){if(Xg(u||o)===null)continue;break}var p=Sr(o);p!==null&&(r.splice(s,3),s-=3,Xp(p,{pending:!0,data:d,method:o.method,action:u},u,d))}}))}function Ic(r){function s(S){return mf(S,r)}gs!==null&&mf(gs,r),_s!==null&&mf(_s,r),ys!==null&&mf(ys,r),Ec.forEach(s),Tc.forEach(s);for(var o=0;o<vs.length;o++){var u=vs[o];u.blockedOn===r&&(u.blockedOn=null)}for(;0<vs.length&&(o=vs[0],o.blockedOn===null);)lI(o),o.blockedOn===null&&vs.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var d=o[u],p=o[u+1],E=d[xt]||null;if(typeof p=="function")E||cI(o);else if(E){var w=null;if(p&&p.hasAttribute("formAction")){if(d=p,E=p[xt]||null)w=E.formAction;else if(Xg(d)!==null)continue}else w=E.action;typeof w=="function"?o[u+1]=w:(o.splice(u,3),u-=3),cI(o)}}}function Zg(r){this._internalRoot=r}gf.prototype.render=Zg.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(n(409));var o=s.current,u=jn();rI(o,u,r,s,null,null)},gf.prototype.unmount=Zg.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;rI(r.current,2,null,r,null,null),Wd(),s[Xn]=null}};function gf(r){this._internalRoot=r}gf.prototype.unstable_scheduleHydration=function(r){if(r){var s=Yi();r={blockedOn:null,target:r,priority:s};for(var o=0;o<vs.length&&s!==0&&s<vs[o].priority;o++);vs.splice(o,0,r),o===0&&lI(r)}};var hI=e.version;if(hI!=="19.1.1")throw Error(n(527,hI,"19.1.1"));ie.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(n(188)):(r=Object.keys(r).join(","),Error(n(268,r)));return r=m(s),r=r!==null?g(r):null,r=r===null?null:r.stateNode,r};var vD={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:K,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _f=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_f.isDisabled&&_f.supportsFiber)try{Et=_f.inject(vD),$e=_f}catch{}}return bc.createRoot=function(r,s){if(!a(r))throw Error(n(299));var o=!1,u="",d=RT,p=CT,E=DT,w=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(p=s.onCaughtError),s.onRecoverableError!==void 0&&(E=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(w=s.unstable_transitionCallbacks)),s=tI(r,1,!1,null,null,o,u,d,p,E,w,null),r[Xn]=s.current,kg(r),new Zg(s)},bc.hydrateRoot=function(r,s,o){if(!a(r))throw Error(n(299));var u=!1,d="",p=RT,E=CT,w=DT,S=null,z=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(p=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(w=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(S=o.unstable_transitionCallbacks),o.formState!==void 0&&(z=o.formState)),s=tI(r,1,!0,s,o??null,u,d,p,E,w,S,z),s.context=nI(null),o=s.current,u=jn(),u=Qi(u),d=ns(u),d.callback=null,rs(o,d,u),o=u,s.current.lanes=o,ai(s,o),zr(s),r[Xn]=s.current,kg(r),new gf(s)},bc.version="19.1.1",bc}var TI;function ND(){if(TI)return n_.exports;TI=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),n_.exports=DD(),n_.exports}var PD=ND();const VD=Pb(PD),xD=()=>{};var wI={};/**
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
 */const Vb=function(i){const e=[];let t=0;for(let n=0;n<i.length;n++){let a=i.charCodeAt(n);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++n)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},OD=function(i){const e=[];let t=0,n=0;for(;t<i.length;){const a=i[t++];if(a<128)e[n++]=String.fromCharCode(a);else if(a>191&&a<224){const l=i[t++];e[n++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=i[t++],c=i[t++],f=i[t++],m=((a&7)<<18|(l&63)<<12|(c&63)<<6|f&63)-65536;e[n++]=String.fromCharCode(55296+(m>>10)),e[n++]=String.fromCharCode(56320+(m&1023))}else{const l=i[t++],c=i[t++];e[n++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},xb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let a=0;a<i.length;a+=3){const l=i[a],c=a+1<i.length,f=c?i[a+1]:0,m=a+2<i.length,g=m?i[a+2]:0,y=l>>2,T=(l&3)<<4|f>>4;let I=(f&15)<<2|g>>6,x=g&63;m||(x=64,c||(I=64)),n.push(t[y],t[T],t[I],t[x])}return n.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Vb(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):OD(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let a=0;a<i.length;){const l=t[i.charAt(a++)],f=a<i.length?t[i.charAt(a)]:0;++a;const g=a<i.length?t[i.charAt(a)]:64;++a;const T=a<i.length?t[i.charAt(a)]:64;if(++a,l==null||f==null||g==null||T==null)throw new kD;const I=l<<2|f>>4;if(n.push(I),g!==64){const x=f<<4&240|g>>2;if(n.push(x),T!==64){const G=g<<6&192|T;n.push(G)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class kD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const MD=function(i){const e=Vb(i);return xb.encodeByteArray(e,!0)},Ff=function(i){return MD(i).replace(/\./g,"")},gy=function(i){try{return xb.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function qf(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!LD(t)||(i[t]=qf(i[t],e[t]));return i}function LD(i){return i!=="__proto__"}/**
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
 */function _y(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const UD=()=>_y().__FIREBASE_DEFAULTS__,BD=()=>{if(typeof process>"u"||typeof wI>"u")return;const i=wI.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},zD=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&gy(i[1]);return e&&JSON.parse(e)},fm=()=>{try{return xD()||UD()||BD()||zD()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Ob=i=>{var e,t;return(t=(e=fm())==null?void 0:e.emulatorHosts)==null?void 0:t[i]},FD=i=>{const e=Ob(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},yy=()=>{var i;return(i=fm())==null?void 0:i.config},kb=i=>{var e;return(e=fm())==null?void 0:e[`_${i}`]};/**
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
 */class qD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function tu(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Mb(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function jD(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",a=i.iat||0,l=i.sub||i.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${n}`,aud:n,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Ff(JSON.stringify(t)),Ff(JSON.stringify(c)),""].join(".")}const qc={};function HD(){const i={prod:[],emulator:[]};for(const e of Object.keys(qc))qc[e]?i.emulator.push(e):i.prod.push(e);return i}function GD(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let II=!1;function Lb(i,e){if(typeof window>"u"||typeof document>"u"||!tu(window.location.host)||qc[i]===e||qc[i]||II)return;qc[i]=e;function t(I){return`__firebase__banner__${I}`}const n="__firebase__banner",l=HD().prod.length>0;function c(){const I=document.getElementById(n);I&&I.remove()}function f(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function m(I,x){I.setAttribute("width","24"),I.setAttribute("id",x),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function g(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{II=!0,c()},I}function y(I,x){I.setAttribute("id",x),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function T(){const I=GD(n),x=t("text"),G=document.getElementById(x)||document.createElement("span"),W=t("learnmore"),Y=document.getElementById(W)||document.createElement("a"),ge=t("preprendIcon"),de=document.getElementById(ge)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const ne=I.element;f(ne),y(Y,W);const _e=g();m(de,ge),ne.append(de,G,Y,_e),document.body.appendChild(ne)}l?(G.innerText="Preview backend disconnected.",de.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(de.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,G.innerText="Preview backend running in this workspace."),G.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KD(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function mm(){var e;const i=(e=fm())==null?void 0:e.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function QD(){return typeof window<"u"||Ub()}function Ub(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function YD(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Bb(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function vy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zb(){const i=yt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Fb(){return!mm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qb(){return!mm()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function rh(){try{return typeof indexedDB=="object"}catch{return!1}}function $D(){return new Promise((i,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(n),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const WD="FirebaseError";class Sn extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=WD,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fo.prototype.create)}}class fo{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?XD(l,n):"Error",f=`${this.serviceName}: ${c} (${a}).`;return new Sn(a,f,n)}}function XD(i,e){return i.replace(JD,(t,n)=>{const a=e[n];return a!=null?String(a):`<${n}?>`})}const JD=/\{\$([^}]+)}/g;/**
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
 */function AI(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function ZD(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function ki(i,e){if(i===e)return!0;const t=Object.keys(i),n=Object.keys(e);for(const a of t){if(!n.includes(a))return!1;const l=i[a],c=e[a];if(bI(l)&&bI(c)){if(!ki(l,c))return!1}else if(l!==c)return!1}for(const a of n)if(!t.includes(a))return!1;return!0}function bI(i){return i!==null&&typeof i=="object"}/**
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
 */function nu(i){const e=[];for(const[t,n]of Object.entries(i))Array.isArray(n)?n.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Il(i){const e={};return i.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[a,l]=n.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function kc(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function jb(i,e){const t=new eN(i,e);return t.subscribe.bind(t)}class eN{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let a;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");tN(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:n},a.next===void 0&&(a.next=a_),a.error===void 0&&(a.error=a_),a.complete===void 0&&(a.complete=a_);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tN(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function a_(){}/**
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
 */function Ee(i){return i&&i._delegate?i._delegate:i}class ei{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ba="[DEFAULT]";/**
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
 */class nN{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new qD;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&n.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(n)return null;throw a}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iN(e))try{this.getOrInitializeService({instanceIdentifier:Ba})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});n.resolve(l)}catch{}}}}clearInstance(e=Ba){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ba){return this.instances.has(e)}getOptions(e=Ba){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[l,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);n===f&&c.resolve(a)}return a}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(n)??new Set;a.add(e),this.onInitCallbacks.set(n,a);const l=this.instances.get(n);return l&&e(l,n),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const a of n)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:rN(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Ba){return this.component?this.component.multipleInstances?e:Ba:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rN(i){return i===Ba?void 0:i}function iN(i){return i.instantiationMode==="EAGER"}/**
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
 */class Hb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new nN(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Ey=[];var ke;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ke||(ke={}));const Gb={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},sN=ke.INFO,aN={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},oN=(i,e,...t)=>{if(e<i.logLevel)return;const n=new Date().toISOString(),a=aN[e];if(a)console[a](`[${n}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pm{constructor(e){this.name=e,this._logLevel=sN,this._logHandler=oN,this._userLogHandler=null,Ey.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}function lN(i){Ey.forEach(e=>{e.setLogLevel(i)})}function uN(i,e){for(const t of Ey){let n=null;e&&e.level&&(n=Gb[e.level]),i===null?t.userLogHandler=null:t.userLogHandler=(a,l,...c)=>{const f=c.map(m=>{if(m==null)return null;if(typeof m=="string")return m;if(typeof m=="number"||typeof m=="boolean")return m.toString();if(m instanceof Error)return m.message;try{return JSON.stringify(m)}catch{return null}}).filter(m=>m).join(" ");l>=(n??a.logLevel)&&i({level:ke[l].toLowerCase(),message:f,args:c,type:a.name})}}}const cN=(i,e)=>e.some(t=>i instanceof t);let SI,RI;function hN(){return SI||(SI=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dN(){return RI||(RI=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kb=new WeakMap,S_=new WeakMap,Qb=new WeakMap,o_=new WeakMap,Ty=new WeakMap;function fN(i){const e=new Promise((t,n)=>{const a=()=>{i.removeEventListener("success",l),i.removeEventListener("error",c)},l=()=>{t(Ps(i.result)),a()},c=()=>{n(i.error),a()};i.addEventListener("success",l),i.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Kb.set(t,i)}).catch(()=>{}),Ty.set(e,i),e}function mN(i){if(S_.has(i))return;const e=new Promise((t,n)=>{const a=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",c),i.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{n(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",l),i.addEventListener("error",c),i.addEventListener("abort",c)});S_.set(i,e)}let R_={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return S_.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Qb.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ps(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function pN(i){R_=i(R_)}function gN(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=i.call(l_(this),e,...t);return Qb.set(n,e.sort?e.sort():[e]),Ps(n)}:dN().includes(i)?function(...e){return i.apply(l_(this),e),Ps(Kb.get(this))}:function(...e){return Ps(i.apply(l_(this),e))}}function _N(i){return typeof i=="function"?gN(i):(i instanceof IDBTransaction&&mN(i),cN(i,hN())?new Proxy(i,R_):i)}function Ps(i){if(i instanceof IDBRequest)return fN(i);if(o_.has(i))return o_.get(i);const e=_N(i);return e!==i&&(o_.set(i,e),Ty.set(e,i)),e}const l_=i=>Ty.get(i);function yN(i,e,{blocked:t,upgrade:n,blocking:a,terminated:l}={}){const c=indexedDB.open(i,e),f=Ps(c);return n&&c.addEventListener("upgradeneeded",m=>{n(Ps(c.result),m.oldVersion,m.newVersion,Ps(c.transaction),m)}),t&&c.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),f.then(m=>{l&&m.addEventListener("close",()=>l()),a&&m.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const vN=["get","getKey","getAll","getAllKeys","count"],EN=["put","add","delete","clear"],u_=new Map;function CI(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(u_.get(e))return u_.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,a=EN.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(a||vN.includes(t)))return;const l=async function(c,...f){const m=this.transaction(c,a?"readwrite":"readonly");let g=m.store;return n&&(g=g.index(f.shift())),(await Promise.all([g[t](...f),a&&m.done]))[0]};return u_.set(e,l),l}pN(i=>({...i,get:(e,t,n)=>CI(e,t)||i.get(e,t,n),has:(e,t)=>!!CI(e,t)||i.has(e,t)}));/**
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
 */class TN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(wN(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function wN(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jf="@firebase/app",C_="0.14.2";/**
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
 */const Mi=new pm("@firebase/app"),IN="@firebase/app-compat",AN="@firebase/analytics-compat",bN="@firebase/analytics",SN="@firebase/app-check-compat",RN="@firebase/app-check",CN="@firebase/auth",DN="@firebase/auth-compat",NN="@firebase/database",PN="@firebase/data-connect",VN="@firebase/database-compat",xN="@firebase/functions",ON="@firebase/functions-compat",kN="@firebase/installations",MN="@firebase/installations-compat",LN="@firebase/messaging",UN="@firebase/messaging-compat",BN="@firebase/performance",zN="@firebase/performance-compat",FN="@firebase/remote-config",qN="@firebase/remote-config-compat",jN="@firebase/storage",HN="@firebase/storage-compat",GN="@firebase/firestore",KN="@firebase/ai",QN="@firebase/firestore-compat",YN="firebase",$N="12.2.0";/**
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
 */const Ms="[DEFAULT]",WN={[jf]:"fire-core",[IN]:"fire-core-compat",[bN]:"fire-analytics",[AN]:"fire-analytics-compat",[RN]:"fire-app-check",[SN]:"fire-app-check-compat",[CN]:"fire-auth",[DN]:"fire-auth-compat",[NN]:"fire-rtdb",[PN]:"fire-data-connect",[VN]:"fire-rtdb-compat",[xN]:"fire-fn",[ON]:"fire-fn-compat",[kN]:"fire-iid",[MN]:"fire-iid-compat",[LN]:"fire-fcm",[UN]:"fire-fcm-compat",[BN]:"fire-perf",[zN]:"fire-perf-compat",[FN]:"fire-rc",[qN]:"fire-rc-compat",[jN]:"fire-gcs",[HN]:"fire-gcs-compat",[GN]:"fire-fst",[QN]:"fire-fst-compat",[KN]:"fire-vertex","fire-js":"fire-js",[YN]:"fire-js-all"};/**
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
 */const Ls=new Map,Pl=new Map,Vl=new Map;function ih(i,e){try{i.container.addComponent(e)}catch(t){Mi.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Yb(i,e){i.container.addOrOverwriteComponent(e)}function Us(i){const e=i.name;if(Vl.has(e))return Mi.debug(`There were multiple attempts to register component ${e}.`),!1;Vl.set(e,i);for(const t of Ls.values())ih(t,i);for(const t of Pl.values())ih(t,i);return!0}function bh(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function XN(i,e,t=Ms){bh(i,e).clearInstance(t)}function wy(i){return i.options!==void 0}function $b(i){return wy(i)?!1:"authIdToken"in i||"appCheckToken"in i||"releaseOnDeref"in i||"automaticDataCollectionEnabled"in i}function mt(i){return i==null?!1:i.settings!==void 0}function JN(){Vl.clear()}/**
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
 */const ZN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yn=new fo("app","Firebase",ZN);/**
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
 */let Wb=class{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ei("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yn.create("app-deleted",{appName:this._name})}};/**
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
 */function DI(i,e){const t=gy(i.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const a=JSON.parse(t).exp*1e3,l=new Date().getTime();a-l<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class eP extends Wb{constructor(e,t,n,a){const l=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!0,c={name:n,automaticDataCollectionEnabled:l};if(e.apiKey!==void 0)super(e,c,a);else{const f=e;super(f.options,c,a)}this._serverConfig={automaticDataCollectionEnabled:l,...t},this._serverConfig.authIdToken&&DI(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&DI(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Er(jf,C_,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){by(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Yn.create("server-app-deleted")}}/**
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
 */const Ys=$N;function Iy(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const n={name:Ms,automaticDataCollectionEnabled:!0,...e},a=n.name;if(typeof a!="string"||!a)throw Yn.create("bad-app-name",{appName:String(a)});if(t||(t=yy()),!t)throw Yn.create("no-options");const l=Ls.get(a);if(l){if(ki(t,l.options)&&ki(n,l.config))return l;throw Yn.create("duplicate-app",{appName:a})}const c=new Hb(a);for(const m of Vl.values())c.addComponent(m);const f=new Wb(t,n,c);return Ls.set(a,f),f}function tP(i,e={}){if(QD()&&!Ub())throw Yn.create("invalid-server-app-environment");let t,n=e||{};if(i&&(wy(i)?t=i.options:$b(i)?n=i:t=i),n.automaticDataCollectionEnabled===void 0&&(n.automaticDataCollectionEnabled=!0),t||(t=yy()),!t)throw Yn.create("no-options");const a={...n,...t};a.releaseOnDeref!==void 0&&delete a.releaseOnDeref;const l=y=>[...y].reduce((T,I)=>Math.imul(31,T)+I.charCodeAt(0)|0,0);if(n.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Yn.create("finalization-registry-not-supported",{});const c=""+l(JSON.stringify(a)),f=Pl.get(c);if(f)return f.incRefCount(n.releaseOnDeref),f;const m=new Hb(c);for(const y of Vl.values())m.addComponent(y);const g=new eP(t,n,c,m);return Pl.set(c,g),g}function Ay(i=Ms){const e=Ls.get(i);if(!e&&i===Ms&&yy())return Iy();if(!e)throw Yn.create("no-app",{appName:i});return e}function nP(){return Array.from(Ls.values())}async function by(i){let e=!1;const t=i.name;Ls.has(t)?(e=!0,Ls.delete(t)):Pl.has(t)&&i.decRefCount()<=0&&(Pl.delete(t),e=!0),e&&(await Promise.all(i.container.getProviders().map(n=>n.delete())),i.isDeleted=!0)}function Er(i,e,t){let n=WN[i]??i;t&&(n+=`-${t}`);const a=n.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${n}" with version "${e}":`];a&&c.push(`library name "${n}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mi.warn(c.join(" "));return}Us(new ei(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}function Xb(i,e){if(i!==null&&typeof i!="function")throw Yn.create("invalid-log-argument");uN(i,e)}function Jb(i){lN(i)}/**
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
 */const rP="firebase-heartbeat-database",iP=1,sh="firebase-heartbeat-store";let c_=null;function Zb(){return c_||(c_=yN(rP,iP,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(sh)}catch(t){console.warn(t)}}}}).catch(i=>{throw Yn.create("idb-open",{originalErrorMessage:i.message})})),c_}async function sP(i){try{const t=(await Zb()).transaction(sh),n=await t.objectStore(sh).get(eS(i));return await t.done,n}catch(e){if(e instanceof Sn)Mi.warn(e.message);else{const t=Yn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mi.warn(t.message)}}}async function NI(i,e){try{const n=(await Zb()).transaction(sh,"readwrite");await n.objectStore(sh).put(e,eS(i)),await n.done}catch(t){if(t instanceof Sn)Mi.warn(t.message);else{const n=Yn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Mi.warn(n.message)}}}function eS(i){return`${i.name}!${i.options.appId}`}/**
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
 */const aP=1024,oP=30;class lP{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new cP(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=PI();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>oP){const c=hP(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Mi.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=PI(),{heartbeatsToSend:n,unsentEntries:a}=uP(this._heartbeatsCache.heartbeats),l=Ff(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Mi.warn(t),""}}}function PI(){return new Date().toISOString().substring(0,10)}function uP(i,e=aP){const t=[];let n=i.slice();for(const a of i){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),VI(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),VI(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class cP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rh()?$D().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await sP(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return NI(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return NI(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function VI(i){return Ff(JSON.stringify({version:2,heartbeats:i})).length}function hP(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let n=1;n<i.length;n++)i[n].date<t&&(t=i[n].date,e=n);return e}/**
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
 */function dP(i){Us(new ei("platform-logger",e=>new TN(e),"PRIVATE")),Us(new ei("heartbeat",e=>new lP(e),"PRIVATE")),Er(jf,C_,i),Er(jf,C_,"esm2020"),Er("fire-js","")}dP("");const fP=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Sn,SDK_VERSION:Ys,_DEFAULT_ENTRY_NAME:Ms,_addComponent:ih,_addOrOverwriteComponent:Yb,_apps:Ls,_clearComponents:JN,_components:Vl,_getProvider:bh,_isFirebaseApp:wy,_isFirebaseServerApp:mt,_isFirebaseServerAppSettings:$b,_registerComponent:Us,_removeServiceInstance:XN,_serverApps:Pl,deleteApp:by,getApp:Ay,getApps:nP,initializeApp:Iy,initializeServerApp:tP,onLog:Xb,registerVersion:Er,setLogLevel:Jb},Symbol.toStringTag,{value:"Module"})),Sc={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},hl={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function mP(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function tS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pP=mP,gP=tS,nS=new fo("auth","Firebase",tS());/**
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
 */const Hf=new pm("@firebase/auth");function _P(i,...e){Hf.logLevel<=ke.WARN&&Hf.warn(`Auth (${Ys}): ${i}`,...e)}function Sf(i,...e){Hf.logLevel<=ke.ERROR&&Hf.error(`Auth (${Ys}): ${i}`,...e)}/**
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
 */function nn(i,...e){throw Ry(i,...e)}function Gt(i,...e){return Ry(i,...e)}function Sy(i,e,t){const n={...gP(),[e]:t};return new fo("auth","Firebase",n).create(e,{appName:i.name})}function tn(i){return Sy(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ru(i,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&nn(i,"argument-error"),Sy(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ry(i,...e){if(typeof i!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=i.name),i._errorFactory.create(t,...n)}return nS.create(i,...e)}function re(i,e,...t){if(!i)throw Ry(e,...t)}function Yr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Sf(e),new Error(e)}function Ir(i,e){i||Yr(e)}/**
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
 */function ah(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function Cy(){return xI()==="http:"||xI()==="https:"}function xI(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
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
 */function yP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Cy()||Bb()||"connection"in navigator)?navigator.onLine:!0}function vP(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Sh{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ir(t>e,"Short delay should be less than long delay!"),this.isMobile=KD()||vy()}get(){return yP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Dy(i,e){Ir(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class rS{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const EP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const TP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],wP=new Sh(3e4,6e4);function bt(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function St(i,e,t,n,a={}){return iS(i,a,async()=>{let l={},c={};n&&(e==="GET"?c=n:l={body:JSON.stringify(n)});const f=nu({key:i.config.apiKey,...c}).slice(1),m=await i._getAdditionalHeaders();m["Content-Type"]="application/json",i.languageCode&&(m["X-Firebase-Locale"]=i.languageCode);const g={method:e,headers:m,...l};return YD()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&tu(i.emulatorConfig.host)&&(g.credentials="include"),rS.fetch()(await sS(i,i.config.apiHost,t,f),g)})}async function iS(i,e,t){i._canInitEmulator=!1;const n={...EP,...e};try{const a=new AP(i),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Mc(i,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const f=l.ok?c.errorMessage:c.error.message,[m,g]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mc(i,"credential-already-in-use",c);if(m==="EMAIL_EXISTS")throw Mc(i,"email-already-in-use",c);if(m==="USER_DISABLED")throw Mc(i,"user-disabled",c);const y=n[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Sy(i,y,g);nn(i,y)}}catch(a){if(a instanceof Sn)throw a;nn(i,"network-request-failed",{message:String(a)})}}async function zi(i,e,t,n,a={}){const l=await St(i,e,t,n,a);return"mfaPendingCredential"in l&&nn(i,"multi-factor-auth-required",{_serverResponse:l}),l}async function sS(i,e,t,n){const a=`${e}${t}?${n}`,l=i,c=l.config.emulator?Dy(i.config,a):`${i.config.apiScheme}://${a}`;return TP.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function IP(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class AP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Gt(this.auth,"network-request-failed")),wP.get())})}}function Mc(i,e,t){const n={appName:i.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const a=Gt(i,e,n);return a.customData._tokenResponse=t,a}/**
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
 */function OI(i){return i!==void 0&&i.getResponse!==void 0}function kI(i){return i!==void 0&&i.enterprise!==void 0}class aS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return IP(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function bP(i){return(await St(i,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function oS(i,e){return St(i,"GET","/v2/recaptchaConfig",bt(i,e))}/**
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
 */async function SP(i,e){return St(i,"POST","/v1/accounts:delete",e)}async function RP(i,e){return St(i,"POST","/v1/accounts:update",e)}async function Gf(i,e){return St(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function jc(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CP(i,e=!1){const t=Ee(i),n=await t.getIdToken(e),a=gm(n);re(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:n,authTime:jc(h_(a.auth_time)),issuedAtTime:jc(h_(a.iat)),expirationTime:jc(h_(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function h_(i){return Number(i)*1e3}function gm(i){const[e,t,n]=i.split(".");if(e===void 0||t===void 0||n===void 0)return Sf("JWT malformed, contained fewer than 3 sections"),null;try{const a=gy(t);return a?JSON.parse(a):(Sf("Failed to decode base64 JWT payload"),null)}catch(a){return Sf("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function MI(i){const e=gm(i);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Li(i,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Sn&&DP(n)&&i.auth.currentUser===i&&await i.auth.signOut(),n}}function DP({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class NP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class D_{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=jc(this.lastLoginAt),this.creationTime=jc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function oh(i){var T;const e=i.auth,t=await i.getIdToken(),n=await Li(i,Gf(e,{idToken:t}));re(n==null?void 0:n.users.length,e,"internal-error");const a=n.users[0];i._notifyReloadListener(a);const l=(T=a.providerUserInfo)!=null&&T.length?lS(a.providerUserInfo):[],c=VP(i.providerData,l),f=i.isAnonymous,m=!(i.email&&a.passwordHash)&&!(c!=null&&c.length),g=f?m:!1,y={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new D_(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(i,y)}async function PP(i){const e=Ee(i);await oh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function VP(i,e){return[...i.filter(n=>!e.some(a=>a.providerId===n.providerId)),...e]}function lS(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function xP(i,e){const t=await iS(i,{},async()=>{const n=nu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,c=await sS(i,a,"/v1/token",`key=${l}`),f=await i._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:f,body:n};return i.emulatorConfig&&tu(i.emulatorConfig.host)&&(m.credentials="include"),rS.fetch()(c,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function OP(i,e){return St(i,"POST","/v2/accounts:revokeToken",bt(i,e))}/**
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
 */class Al{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):MI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){re(e.length!==0,"internal-error");const t=MI(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:a,expiresIn:l}=await xP(e,t);this.updateTokensAndExpiration(n,a,Number(l))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:a,expirationTime:l}=t,c=new Al;return n&&(re(typeof n=="string","internal-error",{appName:e}),c.refreshToken=n),a&&(re(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(re(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Al,this.toJSON())}_performRefresh(){return Yr("not implemented")}}/**
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
 */function Ts(i,e){re(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class vr{constructor({uid:e,auth:t,stsTokenManager:n,...a}){this.providerId="firebase",this.proactiveRefresh=new NP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new D_(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Li(this,this.stsTokenManager.getToken(this.auth,e));return re(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return CP(this,e)}reload(){return PP(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vr({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await oh(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(tn(this.auth));const e=await this.getIdToken();return await Li(this,SP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,a=t.email??void 0,l=t.phoneNumber??void 0,c=t.photoURL??void 0,f=t.tenantId??void 0,m=t._redirectEventId??void 0,g=t.createdAt??void 0,y=t.lastLoginAt??void 0,{uid:T,emailVerified:I,isAnonymous:x,providerData:G,stsTokenManager:W}=t;re(T&&W,e,"internal-error");const Y=Al.fromJSON(this.name,W);re(typeof T=="string",e,"internal-error"),Ts(n,e.name),Ts(a,e.name),re(typeof I=="boolean",e,"internal-error"),re(typeof x=="boolean",e,"internal-error"),Ts(l,e.name),Ts(c,e.name),Ts(f,e.name),Ts(m,e.name),Ts(g,e.name),Ts(y,e.name);const ge=new vr({uid:T,auth:e,email:a,emailVerified:I,displayName:n,isAnonymous:x,photoURL:c,phoneNumber:l,tenantId:f,stsTokenManager:Y,createdAt:g,lastLoginAt:y});return G&&Array.isArray(G)&&(ge.providerData=G.map(de=>({...de}))),m&&(ge._redirectEventId=m),ge}static async _fromIdTokenResponse(e,t,n=!1){const a=new Al;a.updateFromServerResponse(t);const l=new vr({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:n});return await oh(l),l}static async _fromGetAccountInfoResponse(e,t,n){const a=t.users[0];re(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?lS(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),f=new Al;f.updateFromIdToken(n);const m=new vr({uid:a.localId,auth:e,stsTokenManager:f,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new D_(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(m,g),m}}/**
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
 */const LI=new Map;function Qn(i){Ir(i instanceof Function,"Expected a class definition");let e=LI.get(i);return e?(Ir(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,LI.set(i,e),e)}/**
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
 */class uS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}uS.type="NONE";const xl=uS;/**
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
 */function Ja(i,e,t){return`firebase:${i}:${e}:${t}`}class bl{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:a,name:l}=this.auth;this.fullUserKey=Ja(this.userKey,a.apiKey,l),this.fullPersistenceKey=Ja("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Gf(this.auth,{idToken:e}).catch(()=>{});return t?vr._fromGetAccountInfoResponse(this.auth,t,e):null}return vr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new bl(Qn(xl),e,n);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||Qn(xl);const c=Ja(n,e.config.apiKey,e.name);let f=null;for(const g of t)try{const y=await g._get(c);if(y){let T;if(typeof y=="string"){const I=await Gf(e,{idToken:y}).catch(()=>{});if(!I)break;T=await vr._fromGetAccountInfoResponse(e,I,y)}else T=vr._fromJSON(e,y);g!==l&&(f=T),l=g;break}}catch{}const m=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new bl(l,e,n):(l=m[0],f&&await l._set(c,f.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new bl(l,e,n))}}/**
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
 */function UI(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mS(e))return"Blackberry";if(pS(e))return"Webos";if(hS(e))return"Safari";if((e.includes("chrome/")||dS(e))&&!e.includes("edge/"))return"Chrome";if(Rh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=i.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function cS(i=yt()){return/firefox\//i.test(i)}function hS(i=yt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dS(i=yt()){return/crios\//i.test(i)}function fS(i=yt()){return/iemobile/i.test(i)}function Rh(i=yt()){return/android/i.test(i)}function mS(i=yt()){return/blackberry/i.test(i)}function pS(i=yt()){return/webos/i.test(i)}function Ch(i=yt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function kP(i=yt()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(i)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(i)}function MP(i=yt()){var e;return Ch(i)&&!!((e=window.navigator)!=null&&e.standalone)}function LP(){return zb()&&document.documentMode===10}function gS(i=yt()){return Ch(i)||Rh(i)||pS(i)||mS(i)||/windows phone/i.test(i)||fS(i)}/**
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
 */function _S(i,e=[]){let t;switch(i){case"Browser":t=UI(yt());break;case"Worker":t=`${UI(yt())}-${i}`;break;default:t=i}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ys}/${n}`}/**
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
 */class UP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=l=>new Promise((c,f)=>{try{const m=e(l);c(m)}catch(m){f(m)}});n.onAbort=t,this.queue.push(n);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function BP(i,e={}){return St(i,"GET","/v2/passwordPolicy",bt(i,e))}/**
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
 */const zP=6;class FP{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??zP,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let a=0;a<e.length;a++)n=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class qP{constructor(e,t,n,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new BI(this),this.idTokenSubscription=new BI(this),this.beforeStateQueue=new UP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Qn(t)),this._initializationPromise=this.queue(async()=>{var n,a,l;if(!this._deleted&&(this.persistenceManager=await bl.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Gf(this,{idToken:e}),n=await vr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(mt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)==null?void 0:l._redirectEventId,f=n==null?void 0:n._redirectEventId,m=await this.tryRedirectSignIn(e);(!c||c===f)&&(m!=null&&m.user)&&(n=m.user,a=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(n)}catch(c){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await oh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mt(this.app))return Promise.reject(tn(this));const t=e?Ee(e):null;return t&&re(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mt(this.app)?Promise.reject(tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BP(this),t=new FP(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fo("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await OP(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Qn(e)||this._popupRedirectResolver;re(t,this,"argument-error"),this.redirectPersistenceManager=await bl.create(this,[Qn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(f,this,"internal-error"),f.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,n,a);return()=>{c=!0,m()}}else{const m=e.addObserver(t);return()=>{c=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_S(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&_P(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function vt(i){return Ee(i)}class BI{constructor(e){this.auth=e,this.observer=null,this.addObserver=jb(t=>this.observer=t)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Dh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jP(i){Dh=i}function Ny(i){return Dh.loadJS(i)}function HP(){return Dh.recaptchaV2Script}function GP(){return Dh.recaptchaEnterpriseScript}function KP(){return Dh.gapiScript}function yS(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */const QP=500,YP=6e4,yf=1e12;class $P{constructor(e){this.auth=e,this.counter=yf,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new JP(e,this.auth.name,t||{})),this.counter++,n}reset(e){var n;const t=e||yf;(n=this._widgets.get(t))==null||n.delete(),this._widgets.delete(t)}getResponse(e){var n;const t=e||yf;return((n=this._widgets.get(t))==null?void 0:n.getResponse())||""}async execute(e){var n;const t=e||yf;return(n=this._widgets.get(t))==null||n.execute(),""}}class WP{constructor(){this.enterprise=new XP}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class XP{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class JP{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a=typeof e=="string"?document.getElementById(e):e;re(a,"argument-error",{appName:t}),this.container=a,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=ZP(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},YP)},QP))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function ZP(i){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<i;n++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const eV="recaptcha-enterprise",Hc="NO_RECAPTCHA";class vS{constructor(e){this.type=eV,this.auth=vt(e)}async verify(e="verify",t=!1){async function n(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,f)=>{oS(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new aS(m);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(m=>{f(m)})})}function a(l,c,f){const m=window.grecaptcha;kI(m)?m.enterprise.ready(()=>{m.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(Hc)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new WP().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{n(this.auth).then(f=>{if(!t&&kI(window.grecaptcha))a(f,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let m=GP();m.length!==0&&(m+=f),Ny(m).then(()=>{a(f,l,c)}).catch(g=>{c(g)})}}).catch(f=>{c(f)})})}}async function Rc(i,e,t,n=!1,a=!1){const l=new vS(i);let c;if(a)c=Hc;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const f={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const m=f.phoneEnrollmentInfo.phoneNumber,g=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const m=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return n?Object.assign(f,{captchaResp:c}):Object.assign(f,{captchaResponse:c}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Vs(i,e,t,n,a){var l,c;if(a==="EMAIL_PASSWORD_PROVIDER")if((l=i._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await Rc(i,e,t,t==="getOobCode");return n(i,f)}else return n(i,e).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await Rc(i,e,t,t==="getOobCode");return n(i,m)}else return Promise.reject(f)});else if(a==="PHONE_PROVIDER")if((c=i._getRecaptchaConfig())!=null&&c.isProviderEnabled("PHONE_PROVIDER")){const f=await Rc(i,e,t);return n(i,f).catch(async m=>{var g;if(((g=i._getRecaptchaConfig())==null?void 0:g.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(m.code==="auth/missing-recaptcha-token"||m.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const y=await Rc(i,e,t,!1,!0);return n(i,y)}return Promise.reject(m)})}else{const f=await Rc(i,e,t,!1,!0);return n(i,f)}else return Promise.reject(a+" provider is not supported.")}async function tV(i){const e=vt(i),t=await oS(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new aS(t);e.tenantId==null?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,n.isAnyProviderEnabled()&&new vS(e).verify()}/**
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
 */function nV(i,e){const t=bh(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(ki(l,e??{}))return a;nn(a,"already-initialized")}return t.initialize({options:e})}function rV(i,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(Qn);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function ES(i,e,t){const n=vt(i);re(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const a=!!(t!=null&&t.disableWarnings),l=TS(e),{host:c,port:f}=iV(e),m=f===null?"":`:${f}`,g={url:`${l}//${c}${m}/`},y=Object.freeze({host:c,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!n._canInitEmulator){re(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),re(ki(g,n.config.emulator)&&ki(y,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=g,n.emulatorConfig=y,n.settings.appVerificationDisabledForTesting=!0,tu(c)?(Mb(`${l}//${c}${m}`),Lb("Auth",!0)):a||sV()}function TS(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function iV(i){const e=TS(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(n);if(a){const l=a[1];return{host:l,port:zI(n.substr(l.length+1))}}else{const[l,c]=n.split(":");return{host:l,port:zI(c)}}}function zI(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function sV(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class iu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Yr("not implemented")}_getIdTokenResponse(e){return Yr("not implemented")}_linkToIdToken(e,t){return Yr("not implemented")}_getReauthenticationResolver(e){return Yr("not implemented")}}/**
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
 */async function wS(i,e){return St(i,"POST","/v1/accounts:resetPassword",bt(i,e))}async function aV(i,e){return St(i,"POST","/v1/accounts:update",e)}async function oV(i,e){return St(i,"POST","/v1/accounts:signUp",e)}async function lV(i,e){return St(i,"POST","/v1/accounts:update",bt(i,e))}/**
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
 */async function uV(i,e){return zi(i,"POST","/v1/accounts:signInWithPassword",bt(i,e))}async function _m(i,e){return St(i,"POST","/v1/accounts:sendOobCode",bt(i,e))}async function cV(i,e){return _m(i,e)}async function hV(i,e){return _m(i,e)}async function dV(i,e){return _m(i,e)}async function fV(i,e){return _m(i,e)}/**
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
 */async function mV(i,e){return zi(i,"POST","/v1/accounts:signInWithEmailLink",bt(i,e))}async function pV(i,e){return zi(i,"POST","/v1/accounts:signInWithEmailLink",bt(i,e))}/**
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
 */class lh extends iu{constructor(e,t,n,a=null){super("password",n),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new lh(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new lh(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vs(e,t,"signInWithPassword",uV,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return mV(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vs(e,n,"signUpPassword",oV,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return pV(e,{idToken:t,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Oi(i,e){return zi(i,"POST","/v1/accounts:signInWithIdp",bt(i,e))}/**
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
 */const gV="http://localhost";class ti extends iu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ti(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):nn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:a,...l}=t;if(!n||!a)return null;const c=new ti(n,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Oi(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Oi(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Oi(e,t)}buildRequest(){const e={requestUri:gV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=nu(t)}return e}}/**
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
 */async function FI(i,e){return St(i,"POST","/v1/accounts:sendVerificationCode",bt(i,e))}async function _V(i,e){return zi(i,"POST","/v1/accounts:signInWithPhoneNumber",bt(i,e))}async function yV(i,e){const t=await zi(i,"POST","/v1/accounts:signInWithPhoneNumber",bt(i,e));if(t.temporaryProof)throw Mc(i,"account-exists-with-different-credential",t);return t}const vV={USER_NOT_FOUND:"user-not-found"};async function EV(i,e){const t={...e,operation:"REAUTH"};return zi(i,"POST","/v1/accounts:signInWithPhoneNumber",bt(i,t),vV)}/**
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
 */class Za extends iu{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Za({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Za({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return _V(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return yV(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return EV(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:a}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:a}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:a,temporaryProof:l}=e;return!n&&!t&&!a&&!l?null:new Za({verificationId:t,verificationCode:n,phoneNumber:a,temporaryProof:l})}}/**
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
 */function TV(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wV(i){const e=Il(kc(i)).link,t=e?Il(kc(e)).deep_link_id:null,n=Il(kc(i)).deep_link_id;return(n?Il(kc(n)).link:null)||n||t||e||i}class ym{constructor(e){const t=Il(kc(e)),n=t.apiKey??null,a=t.oobCode??null,l=TV(t.mode??null);re(n&&a&&l,"argument-error"),this.apiKey=n,this.operation=l,this.code=a,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=wV(e);try{return new ym(t)}catch{return null}}}/**
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
 */class $s{constructor(){this.providerId=$s.PROVIDER_ID}static credential(e,t){return lh._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ym.parseLink(t);return re(n,"argument-error"),lh._fromEmailAndCode(e,n.code,n.tenantId)}}$s.PROVIDER_ID="password";$s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Fi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class su extends Fi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Sl extends su{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return re("providerId"in t&&"signInMethod"in t,"argument-error"),ti._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return re(e.idToken||e.accessToken,"argument-error"),ti._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Sl.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Sl.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:a,pendingToken:l,nonce:c,providerId:f}=e;if(!n&&!a&&!t&&!l||!f)return null;try{return new Sl(f)._credential({idToken:t,accessToken:n,nonce:c,pendingToken:l})}catch{return null}}}/**
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
 */class Hr extends su{constructor(){super("facebook.com")}static credential(e){return ti._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hr.credential(e.oauthAccessToken)}catch{return null}}}Hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hr.PROVIDER_ID="facebook.com";/**
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
 */class Gr extends su{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ti._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Gr.credential(t,n)}catch{return null}}}Gr.GOOGLE_SIGN_IN_METHOD="google.com";Gr.PROVIDER_ID="google.com";/**
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
 */class Kr extends su{constructor(){super("github.com")}static credential(e){return ti._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kr.credential(e.oauthAccessToken)}catch{return null}}}Kr.GITHUB_SIGN_IN_METHOD="github.com";Kr.PROVIDER_ID="github.com";/**
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
 */const IV="http://localhost";class Ol extends iu{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Oi(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Oi(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Oi(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:a,pendingToken:l}=t;return!n||!a||!l||n!==a?null:new Ol(n,l)}static _create(e,t){return new Ol(e,t)}buildRequest(){return{requestUri:IV,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const AV="saml.";class Kf extends Fi{constructor(e){re(e.startsWith(AV),"argument-error"),super(e)}static credentialFromResult(e){return Kf.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Kf.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Ol.fromJSON(e);return re(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Ol._create(n,t)}catch{return null}}}/**
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
 */class Qr extends su{constructor(){super("twitter.com")}static credential(e,t){return ti._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Qr.credential(t,n)}catch{return null}}}Qr.TWITTER_SIGN_IN_METHOD="twitter.com";Qr.PROVIDER_ID="twitter.com";/**
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
 */async function IS(i,e){return zi(i,"POST","/v1/accounts:signUp",bt(i,e))}/**
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
 */class hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,a=!1){const l=await vr._fromIdTokenResponse(e,n,a),c=qI(n);return new hr({user:l,providerId:c,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const a=qI(n);return new hr({user:e,providerId:a,_tokenResponse:n,operationType:t})}}function qI(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */async function bV(i){var a;if(mt(i.app))return Promise.reject(tn(i));const e=vt(i);if(await e._initializationPromise,(a=e.currentUser)!=null&&a.isAnonymous)return new hr({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await IS(e,{returnSecureToken:!0}),n=await hr._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(n.user),n}/**
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
 */class Qf extends Sn{constructor(e,t,n,a){super(t.code,t.message),this.operationType=n,this.user=a,Object.setPrototypeOf(this,Qf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,a){return new Qf(e,t,n,a)}}function AS(i,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Qf._fromErrorAndOperation(i,l,e,n):l})}/**
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
 */function bS(i){return new Set(i.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function SV(i,e){const t=Ee(i);await vm(!0,t,e);const{providerUserInfo:n}=await RP(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),a=bS(n||[]);return t.providerData=t.providerData.filter(l=>a.has(l.providerId)),a.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Py(i,e,t=!1){const n=await Li(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return hr._forOperation(i,"link",n)}async function vm(i,e,t){await oh(e);const n=bS(e.providerData),a=i===!1?"provider-already-linked":"no-such-provider";re(n.has(t)===i,e.auth,a)}/**
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
 */async function SS(i,e,t=!1){const{auth:n}=i;if(mt(n.app))return Promise.reject(tn(n));const a="reauthenticate";try{const l=await Li(i,AS(n,a,e,i),t);re(l.idToken,n,"internal-error");const c=gm(l.idToken);re(c,n,"internal-error");const{sub:f}=c;return re(i.uid===f,n,"user-mismatch"),hr._forOperation(i,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&nn(n,"user-mismatch"),l}}/**
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
 */async function RS(i,e,t=!1){if(mt(i.app))return Promise.reject(tn(i));const n="signIn",a=await AS(i,n,e),l=await hr._fromIdTokenResponse(i,n,a);return t||await i._updateCurrentUser(l.user),l}async function Em(i,e){return RS(vt(i),e)}async function CS(i,e){const t=Ee(i);return await vm(!1,t,e.providerId),Py(t,e)}async function DS(i,e){return SS(Ee(i),e)}/**
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
 */async function RV(i,e){return zi(i,"POST","/v1/accounts:signInWithCustomToken",bt(i,e))}/**
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
 */async function CV(i,e){if(mt(i.app))return Promise.reject(tn(i));const t=vt(i),n=await RV(t,{token:e,returnSecureToken:!0}),a=await hr._fromIdTokenResponse(t,"signIn",n);return await t._updateCurrentUser(a.user),a}/**
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
 */class Nh{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Vy._fromServerResponse(e,t):"totpInfo"in t?xy._fromServerResponse(e,t):nn(e,"internal-error")}}class Vy extends Nh{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Vy(t)}}class xy extends Nh{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new xy(t)}}/**
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
 */function Tm(i,e,t){var n;re(((n=t.url)==null?void 0:n.length)>0,i,"invalid-continue-uri"),re(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,i,"invalid-dynamic-link-domain"),re(typeof t.linkDomain>"u"||t.linkDomain.length>0,i,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(re(t.iOS.bundleId.length>0,i,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(re(t.android.packageName.length>0,i,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function Oy(i){const e=vt(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function DV(i,e,t){const n=vt(i),a={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Tm(n,a,t),await Vs(n,a,"getOobCode",hV,"EMAIL_PASSWORD_PROVIDER")}async function NV(i,e,t){await wS(Ee(i),{oobCode:e,newPassword:t}).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Oy(i),n})}async function PV(i,e){await lV(Ee(i),{oobCode:e})}async function NS(i,e){const t=Ee(i),n=await wS(t,{oobCode:e}),a=n.requestType;switch(re(a,t,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":re(n.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":re(n.mfaInfo,t,"internal-error");default:re(n.email,t,"internal-error")}let l=null;return n.mfaInfo&&(l=Nh._fromServerResponse(vt(t),n.mfaInfo)),{data:{email:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.newEmail:n.email)||null,previousEmail:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.email:n.newEmail)||null,multiFactorInfo:l},operation:a}}async function VV(i,e){const{data:t}=await NS(Ee(i),e);return t.email}async function xV(i,e,t){if(mt(i.app))return Promise.reject(tn(i));const n=vt(i),c=await Vs(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",IS,"EMAIL_PASSWORD_PROVIDER").catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&Oy(i),m}),f=await hr._fromIdTokenResponse(n,"signIn",c);return await n._updateCurrentUser(f.user),f}function PS(i,e,t){return mt(i.app)?Promise.reject(tn(i)):Em(Ee(i),$s.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Oy(i),n})}/**
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
 */async function OV(i,e,t){const n=vt(i),a={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function l(c,f){re(f.handleCodeInApp,n,"argument-error"),f&&Tm(n,c,f)}l(a,t),await Vs(n,a,"getOobCode",dV,"EMAIL_PASSWORD_PROVIDER")}function kV(i,e){const t=ym.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function MV(i,e,t){if(mt(i.app))return Promise.reject(tn(i));const n=Ee(i),a=$s.credentialWithLink(e,t||ah());return re(a._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),Em(n,a)}/**
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
 */async function LV(i,e){return St(i,"POST","/v1/accounts:createAuthUri",bt(i,e))}/**
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
 */async function UV(i,e){const t=Cy()?ah():"http://localhost",n={identifier:e,continueUri:t},{signinMethods:a}=await LV(Ee(i),n);return a||[]}async function BV(i,e){const t=Ee(i),a={requestType:"VERIFY_EMAIL",idToken:await i.getIdToken()};e&&Tm(t.auth,a,e);const{email:l}=await cV(t.auth,a);l!==i.email&&await i.reload()}async function zV(i,e,t){const n=Ee(i),l={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await i.getIdToken(),newEmail:e};t&&Tm(n.auth,l,t);const{email:c}=await fV(n.auth,l);c!==i.email&&await i.reload()}/**
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
 */async function FV(i,e){return St(i,"POST","/v1/accounts:update",e)}/**
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
 */async function qV(i,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const n=Ee(i),l={idToken:await n.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await Li(n,FV(n.auth,l));n.displayName=c.displayName||null,n.photoURL=c.photoUrl||null;const f=n.providerData.find(({providerId:m})=>m==="password");f&&(f.displayName=n.displayName,f.photoURL=n.photoURL),await n._updateTokensIfNecessary(c)}function jV(i,e){const t=Ee(i);return mt(t.auth.app)?Promise.reject(tn(t.auth)):VS(t,e,null)}function HV(i,e){return VS(Ee(i),null,e)}async function VS(i,e,t){const{auth:n}=i,l={idToken:await i.getIdToken(),returnSecureToken:!0};e&&(l.email=e),t&&(l.password=t);const c=await Li(i,aV(n,l));await i._updateTokensIfNecessary(c,!0)}/**
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
 */function GV(i){var a,l;if(!i)return null;const{providerId:e}=i,t=i.rawUserInfo?JSON.parse(i.rawUserInfo):{},n=i.isNewUser||i.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(i!=null&&i.idToken)){const c=(l=(a=gm(i.idToken))==null?void 0:a.firebase)==null?void 0:l.sign_in_provider;if(c){const f=c!=="anonymous"&&c!=="custom"?c:null;return new Rl(n,f)}}if(!e)return null;switch(e){case"facebook.com":return new KV(n,t);case"github.com":return new QV(n,t);case"google.com":return new YV(n,t);case"twitter.com":return new $V(n,t,i.screenName||null);case"custom":case"anonymous":return new Rl(n,null);default:return new Rl(n,e,t)}}class Rl{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class xS extends Rl{constructor(e,t,n,a){super(e,t,n),this.username=a}}class KV extends Rl{constructor(e,t){super(e,"facebook.com",t)}}class QV extends xS{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class YV extends Rl{constructor(e,t){super(e,"google.com",t)}}class $V extends xS{constructor(e,t,n){super(e,"twitter.com",t,n)}}function WV(i){const{user:e,_tokenResponse:t}=i;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:GV(t)}function XV(i,e,t,n){return Ee(i).onIdTokenChanged(e,t,n)}function JV(i,e,t){return Ee(i).beforeAuthStateChanged(e,t)}function ZV(i,e,t,n){return Ee(i).onAuthStateChanged(e,t,n)}function ex(i){return Ee(i).signOut()}/**
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
 */class Ya{constructor(e,t,n){this.type=e,this.credential=t,this.user=n}static _fromIdtoken(e,t){return new Ya("enroll",e,t)}static _fromMfaPendingCredential(e){return new Ya("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(e!=null&&e.multiFactorSession){if((t=e.multiFactorSession)!=null&&t.pendingCredential)return Ya._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((n=e.multiFactorSession)!=null&&n.idToken)return Ya._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class ky{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=vt(e),a=t.customData._serverResponse,l=(a.mfaInfo||[]).map(f=>Nh._fromServerResponse(n,f));re(a.mfaPendingCredential,n,"internal-error");const c=Ya._fromMfaPendingCredential(a.mfaPendingCredential);return new ky(c,l,async f=>{const m=await f._process(n,c);delete a.mfaInfo,delete a.mfaPendingCredential;const g={...a,idToken:m.idToken,refreshToken:m.refreshToken};switch(t.operationType){case"signIn":const y=await hr._fromIdTokenResponse(n,t.operationType,g);return await n._updateCurrentUser(y.user),y;case"reauthenticate":return re(t.user,n,"internal-error"),hr._forOperation(t.user,t.operationType,g);default:nn(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function tx(i,e){var a;const t=Ee(i),n=e;return re(e.customData.operationType,t,"argument-error"),re((a=n.customData._serverResponse)==null?void 0:a.mfaPendingCredential,t,"argument-error"),ky._fromError(t,n)}/**
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
 */function jI(i,e){return St(i,"POST","/v2/accounts/mfaEnrollment:start",bt(i,e))}function nx(i,e){return St(i,"POST","/v2/accounts/mfaEnrollment:finalize",bt(i,e))}function rx(i,e){return St(i,"POST","/v2/accounts/mfaEnrollment:withdraw",bt(i,e))}class My{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(n=>Nh._fromServerResponse(e.auth,n)))})}static _fromUser(e){return new My(e)}async getSession(){return Ya._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const n=e,a=await this.getSession(),l=await Li(this.user,n._process(this.user.auth,a,t));return await this.user._updateTokensIfNecessary(l),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,n=await this.user.getIdToken();try{const a=await Li(this.user,rx(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:l})=>l!==t),await this.user._updateTokensIfNecessary(a),await this.user.reload()}catch(a){throw a}}}const d_=new WeakMap;function ix(i){const e=Ee(i);return d_.has(e)||d_.set(e,My._fromUser(e)),d_.get(e)}const Yf="__sak";/**
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
 */class OS{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Yf,"1"),this.storage.removeItem(Yf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const sx=1e3,ax=10;class kS extends OS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),a=this.localCache[t];n!==a&&e(t,a,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,m)=>{this.notifyListeners(c,m)});return}const n=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(n);!t&&this.localCache[n]===c||this.notifyListeners(n,c)},l=this.storage.getItem(n);LP()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,ax):a()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const a of Array.from(n))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},sx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}kS.type="LOCAL";const wm=kS;/**
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
 */class MS extends OS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}MS.type="SESSION";const Bs=MS;/**
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
 */function ox(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Im{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const n=new Im(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:a});const f=Array.from(c).map(async g=>g(t.origin,l)),m=await ox(f);t.ports[0].postMessage({status:"done",eventId:n,eventType:a,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Im.receivers=[];/**
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
 */function Ph(i="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class lx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((f,m)=>{const g=Ph("",20);a.port1.start();const y=setTimeout(()=>{m(new Error("unsupported_event"))},n);c={messageChannel:a,onMessage(T){const I=T;if(I.data.eventId===g)switch(I.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(I.data.response);break;default:clearTimeout(y),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function Ut(){return window}function ux(i){Ut().location.href=i}/**
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
 */function Ly(){return typeof Ut().WorkerGlobalScope<"u"&&typeof Ut().importScripts=="function"}async function cx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hx(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function dx(){return Ly()?self:null}/**
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
 */const LS="firebaseLocalStorageDb",fx=1,$f="firebaseLocalStorage",US="fbase_key";class Vh{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Am(i,e){return i.transaction([$f],e?"readwrite":"readonly").objectStore($f)}function mx(){const i=indexedDB.deleteDatabase(LS);return new Vh(i).toPromise()}function N_(){const i=indexedDB.open(LS,fx);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const n=i.result;try{n.createObjectStore($f,{keyPath:US})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const n=i.result;n.objectStoreNames.contains($f)?e(n):(n.close(),await mx(),e(await N_()))})})}async function HI(i,e,t){const n=Am(i,!0).put({[US]:e,value:t});return new Vh(n).toPromise()}async function px(i,e){const t=Am(i,!1).get(e),n=await new Vh(t).toPromise();return n===void 0?null:n.value}function GI(i,e){const t=Am(i,!0).delete(e);return new Vh(t).toPromise()}const gx=800,_x=3;class BS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await N_(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>_x)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ly()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Im._getInstance(dx()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await cx(),!this.activeServiceWorker)return;this.sender=new lx(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await N_();return await HI(e,Yf,"1"),await GI(e,Yf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>HI(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>px(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>GI(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Am(a,!1).getAll();return new Vh(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)n.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!n.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const a of Array.from(n))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}BS.type="LOCAL";const kl=BS;/**
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
 */function KI(i,e){return St(i,"POST","/v2/accounts/mfaSignIn:start",bt(i,e))}function yx(i,e){return St(i,"POST","/v2/accounts/mfaSignIn:finalize",bt(i,e))}/**
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
 */const f_=yS("rcb"),vx=new Sh(3e4,6e4);class Ex{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Ut().grecaptcha)!=null&&e.render)}load(e,t=""){return re(Tx(t),e,"argument-error"),this.shouldResolveImmediately(t)&&OI(Ut().grecaptcha)?Promise.resolve(Ut().grecaptcha):new Promise((n,a)=>{const l=Ut().setTimeout(()=>{a(Gt(e,"network-request-failed"))},vx.get());Ut()[f_]=()=>{Ut().clearTimeout(l),delete Ut()[f_];const f=Ut().grecaptcha;if(!f||!OI(f)){a(Gt(e,"internal-error"));return}const m=f.render;f.render=(g,y)=>{const T=m(g,y);return this.counter++,T},this.hostLanguage=t,n(f)};const c=`${HP()}?${nu({onload:f_,render:"explicit",hl:t})}`;Ny(c).catch(()=>{clearTimeout(l),a(Gt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=Ut().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Tx(i){return i.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(i)}class wx{async load(e){return new $P(e)}clearedOneInstance(){}}/**
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
 */const Gc="recaptcha",Ix={theme:"light",type:"image"};let Ax=class{constructor(e,t,n={...Ix}){this.parameters=n,this.type=Gc,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=vt(e),this.isInvisible=this.parameters.size==="invisible",re(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const a=typeof t=="string"?document.getElementById(t):t;re(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new wx:new Ex,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(a=>{const l=c=>{c&&(this.tokenChangeListeners.delete(l),a(c))};this.tokenChangeListeners.add(l),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){re(!this.parameters.sitekey,this.auth,"argument-error"),re(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),re(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(n=>n(t)),typeof e=="function")e(t);else if(typeof e=="string"){const n=Ut()[e];typeof n=="function"&&n(t)}}}assertNotDestroyed(){re(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){re(Cy()&&!Ly(),this.auth,"internal-error"),await bx(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await bP(this.auth);re(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return re(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function bx(){let i=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}i=()=>e(),window.addEventListener("load",i)}).catch(e=>{throw i&&window.removeEventListener("load",i),e})}/**
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
 */class Uy{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Za._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Sx(i,e,t){if(mt(i.app))return Promise.reject(tn(i));const n=vt(i),a=await bm(n,e,Ee(t));return new Uy(a,l=>Em(n,l))}async function Rx(i,e,t){const n=Ee(i);await vm(!1,n,"phone");const a=await bm(n.auth,e,Ee(t));return new Uy(a,l=>CS(n,l))}async function Cx(i,e,t){const n=Ee(i);if(mt(n.auth.app))return Promise.reject(tn(n.auth));const a=await bm(n.auth,e,Ee(t));return new Uy(a,l=>DS(n,l))}async function bm(i,e,t){var n;if(!i._getRecaptchaConfig())try{await tV(i)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let a;if(typeof e=="string"?a={phoneNumber:e}:a=e,"session"in a){const l=a.session;if("phoneNumber"in a){re(l.type==="enroll",i,"internal-error");const c={idToken:l.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Vs(i,c,"mfaSmsEnrollment",async(y,T)=>{if(T.phoneEnrollmentInfo.captchaResponse===Hc){re((t==null?void 0:t.type)===Gc,y,"argument-error");const I=await m_(y,T,t);return jI(y,I)}return jI(y,T)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).phoneSessionInfo.sessionInfo}else{re(l.type==="signin",i,"internal-error");const c=((n=a.multiFactorHint)==null?void 0:n.uid)||a.multiFactorUid;re(c,i,"missing-multi-factor-info");const f={mfaPendingCredential:l.credential,mfaEnrollmentId:c,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Vs(i,f,"mfaSmsSignIn",async(T,I)=>{if(I.phoneSignInInfo.captchaResponse===Hc){re((t==null?void 0:t.type)===Gc,T,"argument-error");const x=await m_(T,I,t);return KI(T,x)}return KI(T,I)},"PHONE_PROVIDER").catch(T=>Promise.reject(T))).phoneResponseInfo.sessionInfo}}else{const l={phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Vs(i,l,"sendVerificationCode",async(g,y)=>{if(y.captchaResponse===Hc){re((t==null?void 0:t.type)===Gc,g,"argument-error");const T=await m_(g,y,t);return FI(g,T)}return FI(g,y)},"PHONE_PROVIDER").catch(g=>Promise.reject(g))).sessionInfo}}finally{t==null||t._reset()}}async function Dx(i,e){const t=Ee(i);if(mt(t.auth.app))return Promise.reject(tn(t.auth));await Py(t,e)}async function m_(i,e,t){re(t.type===Gc,i,"argument-error");const n=await t.verify();re(typeof n=="string",i,"argument-error");const a={...e};if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.captchaResponse,f=a.phoneEnrollmentInfo.clientType,m=a.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:n,captchaResponse:c,clientType:f,recaptchaVersion:m}}),a}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.captchaResponse,c=a.phoneSignInInfo.clientType,f=a.phoneSignInInfo.recaptchaVersion;return Object.assign(a,{phoneSignInInfo:{recaptchaToken:n,captchaResponse:l,clientType:c,recaptchaVersion:f}}),a}else return Object.assign(a,{recaptchaToken:n}),a}/**
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
 */let to=class Rf{constructor(e){this.providerId=Rf.PROVIDER_ID,this.auth=vt(e)}verifyPhoneNumber(e,t){return bm(this.auth,e,Ee(t))}static credential(e,t){return Za._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Rf.credentialFromTaggedObject(t)}static credentialFromError(e){return Rf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Za._fromTokenResponse(t,n):null}};to.PROVIDER_ID="phone";to.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function mo(i,e){return e?Qn(e):(re(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class By extends iu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Oi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Oi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Nx(i){return RS(i.auth,new By(i),i.bypassAuthState)}function Px(i){const{auth:e,user:t}=i;return re(t,e,"internal-error"),SS(t,new By(i),i.bypassAuthState)}async function Vx(i){const{auth:e,user:t}=i;return re(t,e,"internal-error"),Py(t,new By(i),i.bypassAuthState)}/**
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
 */class zS{constructor(e,t,n,a,l=!1){this.auth=e,this.resolver=n,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:a,tenantId:l,error:c,type:f}=e;if(c){this.reject(c);return}const m={auth:this.auth,requestUri:t,sessionId:n,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Nx;case"linkViaPopup":case"linkViaRedirect":return Vx;case"reauthViaPopup":case"reauthViaRedirect":return Px;default:nn(this.auth,"internal-error")}}resolve(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const xx=new Sh(2e3,1e4);async function Ox(i,e,t){if(mt(i.app))return Promise.reject(Gt(i,"operation-not-supported-in-this-environment"));const n=vt(i);ru(i,e,Fi);const a=mo(n,t);return new Pi(n,"signInViaPopup",e,a).executeNotNull()}async function kx(i,e,t){const n=Ee(i);if(mt(n.auth.app))return Promise.reject(Gt(n.auth,"operation-not-supported-in-this-environment"));ru(n.auth,e,Fi);const a=mo(n.auth,t);return new Pi(n.auth,"reauthViaPopup",e,a,n).executeNotNull()}async function Mx(i,e,t){const n=Ee(i);ru(n.auth,e,Fi);const a=mo(n.auth,t);return new Pi(n.auth,"linkViaPopup",e,a,n).executeNotNull()}class Pi extends zS{constructor(e,t,n,a,l){super(e,t,a,l),this.provider=n,this.authWindow=null,this.pollId=null,Pi.currentPopupAction&&Pi.currentPopupAction.cancel(),Pi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Ir(this.filter.length===1,"Popup operations only handle one event");const e=Ph();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xx.get())};e()}}Pi.currentPopupAction=null;/**
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
 */const Lx="pendingRedirect",Kc=new Map;class Ux extends zS{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Kc.get(this.auth._key());if(!e){try{const n=await Bx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Kc.set(this.auth._key(),e)}return this.bypassAuthState||Kc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bx(i,e){const t=qS(e),n=FS(i);if(!await n._isAvailable())return!1;const a=await n._get(t)==="true";return await n._remove(t),a}async function zy(i,e){return FS(i)._set(qS(e),"true")}function zx(){Kc.clear()}function Fy(i,e){Kc.set(i._key(),e)}function FS(i){return Qn(i._redirectPersistence)}function qS(i){return Ja(Lx,i.config.apiKey,i.name)}/**
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
 */function Fx(i,e,t){return qx(i,e,t)}async function qx(i,e,t){if(mt(i.app))return Promise.reject(tn(i));const n=vt(i);ru(i,e,Fi),await n._initializationPromise;const a=mo(n,t);return await zy(a,n),a._openRedirect(n,e,"signInViaRedirect")}function jx(i,e,t){return Hx(i,e,t)}async function Hx(i,e,t){const n=Ee(i);if(ru(n.auth,e,Fi),mt(n.auth.app))return Promise.reject(tn(n.auth));await n.auth._initializationPromise;const a=mo(n.auth,t);await zy(a,n.auth);const l=await jS(n);return a._openRedirect(n.auth,e,"reauthViaRedirect",l)}function Gx(i,e,t){return Kx(i,e,t)}async function Kx(i,e,t){const n=Ee(i);ru(n.auth,e,Fi),await n.auth._initializationPromise;const a=mo(n.auth,t);await vm(!1,n,e.providerId),await zy(a,n.auth);const l=await jS(n);return a._openRedirect(n.auth,e,"linkViaRedirect",l)}async function Qx(i,e){return await vt(i)._initializationPromise,Sm(i,e,!1)}async function Sm(i,e,t=!1){if(mt(i.app))return Promise.reject(tn(i));const n=vt(i),a=mo(n,e),c=await new Ux(n,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await n._persistUserIfCurrent(c.user),await n._setRedirectUser(null,e)),c}async function jS(i){const e=Ph(`${i.uid}:::`);return i._redirectEventId=e,await i.auth._setRedirectUser(i),await i.auth._persistUserIfCurrent(i),e}/**
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
 */const Yx=600*1e3;class HS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$x(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!GS(e)){const a=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(Gt(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yx&&this.cachedEventUids.clear(),this.cachedEventUids.has(QI(e))}saveEventToCache(e){this.cachedEventUids.add(QI(e)),this.lastProcessedEventTime=Date.now()}}function QI(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function GS({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $x(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return GS(i);default:return!1}}/**
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
 */async function KS(i,e={}){return St(i,"GET","/v1/projects",e)}/**
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
 */const Wx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xx=/^https?/;async function Jx(i){if(i.config.emulator)return;const{authorizedDomains:e}=await KS(i);for(const t of e)try{if(Zx(t))return}catch{}nn(i,"unauthorized-domain")}function Zx(i){const e=ah(),{protocol:t,hostname:n}=new URL(e);if(i.startsWith("chrome-extension://")){const c=new URL(i);return c.hostname===""&&n===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===n}if(!Xx.test(t))return!1;if(Wx.test(i))return n===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(n)}/**
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
 */const eO=new Sh(3e4,6e4);function YI(){const i=Ut().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function tO(i){return new Promise((e,t)=>{var a,l,c;function n(){YI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{YI(),t(Gt(i,"network-request-failed"))},timeout:eO.get()})}if((l=(a=Ut().gapi)==null?void 0:a.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((c=Ut().gapi)!=null&&c.load)n();else{const f=yS("iframefcb");return Ut()[f]=()=>{gapi.load?n():t(Gt(i,"network-request-failed"))},Ny(`${KP()}?onload=${f}`).catch(m=>t(m))}}).catch(e=>{throw Cf=null,e})}let Cf=null;function nO(i){return Cf=Cf||tO(i),Cf}/**
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
 */const rO=new Sh(5e3,15e3),iO="__/auth/iframe",sO="emulator/auth/iframe",aO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lO(i){const e=i.config;re(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Dy(e,sO):`https://${i.config.authDomain}/${iO}`,n={apiKey:e.apiKey,appName:i.name,v:Ys},a=oO.get(i.config.apiHost);a&&(n.eid=a);const l=i._getFrameworks();return l.length&&(n.fw=l.join(",")),`${t}?${nu(n).slice(1)}`}async function uO(i){const e=await nO(i),t=Ut().gapi;return re(t,i,"internal-error"),e.open({where:document.body,url:lO(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aO,dontclear:!0},n=>new Promise(async(a,l)=>{await n.restyle({setHideOnLeave:!1});const c=Gt(i,"network-request-failed"),f=Ut().setTimeout(()=>{l(c)},rO.get());function m(){Ut().clearTimeout(f),a(n)}n.ping(m).then(m,()=>{l(c)})}))}/**
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
 */const cO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hO=500,dO=600,fO="_blank",mO="http://localhost";class $I{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pO(i,e,t,n=hO,a=dO){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-n)/2,0).toString();let f="";const m={...cO,width:n.toString(),height:a.toString(),top:l,left:c},g=yt().toLowerCase();t&&(f=dS(g)?fO:t),cS(g)&&(e=e||mO,m.scrollbars="yes");const y=Object.entries(m).reduce((I,[x,G])=>`${I}${x}=${G},`,"");if(MP(g)&&f!=="_self")return gO(e||"",f),new $I(null);const T=window.open(e||"",f,y);re(T,i,"popup-blocked");try{T.focus()}catch{}return new $I(T)}function gO(i,e){const t=document.createElement("a");t.href=i,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const _O="__/auth/handler",yO="emulator/auth/handler",vO=encodeURIComponent("fac");async function P_(i,e,t,n,a,l){re(i.config.authDomain,i,"auth-domain-config-required"),re(i.config.apiKey,i,"invalid-api-key");const c={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:n,v:Ys,eventId:a};if(e instanceof Fi){e.setDefaultLanguage(i.languageCode),c.providerId=e.providerId||"",ZD(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,T]of Object.entries(l||{}))c[y]=T}if(e instanceof su){const y=e.getScopes().filter(T=>T!=="");y.length>0&&(c.scopes=y.join(","))}i.tenantId&&(c.tid=i.tenantId);const f=c;for(const y of Object.keys(f))f[y]===void 0&&delete f[y];const m=await i._getAppCheckToken(),g=m?`#${vO}=${encodeURIComponent(m)}`:"";return`${EO(i)}?${nu(f).slice(1)}${g}`}function EO({config:i}){return i.emulator?Dy(i,yO):`https://${i.authDomain}/${_O}`}/**
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
 */const p_="webStorageSupport";class TO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bs,this._completeRedirectFn=Sm,this._overrideRedirectResult=Fy}async _openPopup(e,t,n,a){var c;Ir((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await P_(e,t,n,ah(),a);return pO(e,l,Ph())}async _openRedirect(e,t,n,a){await this._originValidation(e);const l=await P_(e,t,n,ah(),a);return ux(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Ir(l,"If manager is not set, promise should be"),l)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await uO(e),n=new HS(e);return t.register("authEvent",a=>(re(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:n.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(p_,{type:p_},a=>{var c;const l=(c=a==null?void 0:a[0])==null?void 0:c[p_];l!==void 0&&t(!!l),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Jx(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return gS()||hS()||Ch()}}const QS=TO;class wO{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return Yr("unexpected MultiFactorSessionType")}}}class qy extends wO{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new qy(e)}_finalizeEnroll(e,t,n){return nx(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return yx(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class YS{constructor(){}static assertion(e){return qy._fromCredential(e)}}YS.FACTOR_ID="phone";var WI="@firebase/auth",XI="1.11.0";/**
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
 */class IO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function AO(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bO(i){Us(new ei("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=n.options;re(c&&!c.includes(":"),"invalid-api-key",{appName:n.name});const m={apiKey:c,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_S(i)},g=new qP(n,a,l,m);return rV(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Us(new ei("auth-internal",e=>{const t=vt(e.getProvider("auth").getImmediate());return(n=>new IO(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Er(WI,XI,AO(i)),Er(WI,XI,"esm2020")}/**
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
 */const SO=300,RO=kb("authIdTokenMaxAge")||SO;let JI=null;const CO=i=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>RO)return;const a=t==null?void 0:t.token;JI!==a&&(JI=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function DO(i=Ay()){const e=bh(i,"auth");if(e.isInitialized())return e.getImmediate();const t=nV(i,{popupRedirectResolver:QS,persistence:[kl,wm,Bs]}),n=kb("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(n,location.origin);if(location.origin===l.origin){const c=CO(l.toString());JV(t,c,()=>c(t.currentUser)),XV(t,f=>c(f))}}const a=Ob("auth");return a&&ES(t,`http://${a}`),t}function NO(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}jP({loadJS(i){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",i),n.onload=e,n.onerror=a=>{const l=Gt("internal-error");l.customData=a,t(l)},n.type="text/javascript",n.charset="UTF-8",NO().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bO("Browser");/**
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
 */class PO{constructor(e,t){this._delegate=e,this.firebase=t,ih(e,new ei("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),by(this._delegate)))}_getService(e,t=Ms){var a;this._delegate.checkDestroyed();const n=this._delegate.container.getProvider(e);return!n.isInitialized()&&((a=n.getComponent())==null?void 0:a.instantiationMode)==="EXPLICIT"&&n.initialize(),n.getImmediate({identifier:t})}_removeServiceInstance(e,t=Ms){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){ih(this._delegate,e)}_addOrOverwriteComponent(e){Yb(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const VO={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},ZI=new fo("app-compat","Firebase",VO);/**
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
 */function xO(i){const e={},t={__esModule:!0,initializeApp:l,app:a,registerVersion:Er,setLogLevel:Jb,onLog:Xb,apps:null,SDK_VERSION:Ys,INTERNAL:{registerComponent:f,removeApp:n,useAsService:m,modularAPIs:fP}};t.default=t,Object.defineProperty(t,"apps",{get:c});function n(g){delete e[g]}function a(g){if(g=g||Ms,!AI(e,g))throw ZI.create("no-app",{appName:g});return e[g]}a.App=i;function l(g,y={}){const T=Iy(g,y);if(AI(e,T.name))return e[T.name];const I=new i(T,t);return e[T.name]=I,I}function c(){return Object.keys(e).map(g=>e[g])}function f(g){const y=g.name,T=y.replace("-compat","");if(Us(g)&&g.type==="PUBLIC"){const I=(x=a())=>{if(typeof x[T]!="function")throw ZI.create("invalid-app-argument",{appName:y});return x[T]()};g.serviceProps!==void 0&&qf(I,g.serviceProps),t[T]=I,i.prototype[T]=function(...x){return this._getService.bind(this,y).apply(this,g.multipleInstances?x:[])}}return g.type==="PUBLIC"?t[T]:null}function m(g,y){return y==="serverAuth"?null:y}return t}/**
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
 */function $S(){const i=xO(PO);i.INTERNAL={...i.INTERNAL,createFirebaseNamespace:$S,extendNamespace:e,createSubscribe:jb,ErrorFactory:fo,deepExtend:qf};function e(t){qf(i,t)}return i}const OO=$S();/**
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
 */const eA=new pm("@firebase/app-compat"),kO="@firebase/app-compat",MO="0.5.2";/**
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
 */function LO(i){Er(kO,MO,i)}/**
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
 */try{const i=_y();if(i.firebase!==void 0){eA.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=i.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&eA.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const au=OO;LO();var UO="firebase",BO="12.2.1";/**
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
 */au.registerVersion(UO,BO,"app-compat");var tA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xs,WS;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,b){function R(){}R.prototype=b.prototype,D.D=b.prototype,D.prototype=new R,D.prototype.constructor=D,D.C=function(V,O,M){for(var C=Array(arguments.length-2),Vt=2;Vt<arguments.length;Vt++)C[Vt-2]=arguments[Vt];return b.prototype[O].apply(V,C)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(D,b,R){R||(R=0);var V=Array(16);if(typeof b=="string")for(var O=0;16>O;++O)V[O]=b.charCodeAt(R++)|b.charCodeAt(R++)<<8|b.charCodeAt(R++)<<16|b.charCodeAt(R++)<<24;else for(O=0;16>O;++O)V[O]=b[R++]|b[R++]<<8|b[R++]<<16|b[R++]<<24;b=D.g[0],R=D.g[1],O=D.g[2];var M=D.g[3],C=b+(M^R&(O^M))+V[0]+3614090360&4294967295;b=R+(C<<7&4294967295|C>>>25),C=M+(O^b&(R^O))+V[1]+3905402710&4294967295,M=b+(C<<12&4294967295|C>>>20),C=O+(R^M&(b^R))+V[2]+606105819&4294967295,O=M+(C<<17&4294967295|C>>>15),C=R+(b^O&(M^b))+V[3]+3250441966&4294967295,R=O+(C<<22&4294967295|C>>>10),C=b+(M^R&(O^M))+V[4]+4118548399&4294967295,b=R+(C<<7&4294967295|C>>>25),C=M+(O^b&(R^O))+V[5]+1200080426&4294967295,M=b+(C<<12&4294967295|C>>>20),C=O+(R^M&(b^R))+V[6]+2821735955&4294967295,O=M+(C<<17&4294967295|C>>>15),C=R+(b^O&(M^b))+V[7]+4249261313&4294967295,R=O+(C<<22&4294967295|C>>>10),C=b+(M^R&(O^M))+V[8]+1770035416&4294967295,b=R+(C<<7&4294967295|C>>>25),C=M+(O^b&(R^O))+V[9]+2336552879&4294967295,M=b+(C<<12&4294967295|C>>>20),C=O+(R^M&(b^R))+V[10]+4294925233&4294967295,O=M+(C<<17&4294967295|C>>>15),C=R+(b^O&(M^b))+V[11]+2304563134&4294967295,R=O+(C<<22&4294967295|C>>>10),C=b+(M^R&(O^M))+V[12]+1804603682&4294967295,b=R+(C<<7&4294967295|C>>>25),C=M+(O^b&(R^O))+V[13]+4254626195&4294967295,M=b+(C<<12&4294967295|C>>>20),C=O+(R^M&(b^R))+V[14]+2792965006&4294967295,O=M+(C<<17&4294967295|C>>>15),C=R+(b^O&(M^b))+V[15]+1236535329&4294967295,R=O+(C<<22&4294967295|C>>>10),C=b+(O^M&(R^O))+V[1]+4129170786&4294967295,b=R+(C<<5&4294967295|C>>>27),C=M+(R^O&(b^R))+V[6]+3225465664&4294967295,M=b+(C<<9&4294967295|C>>>23),C=O+(b^R&(M^b))+V[11]+643717713&4294967295,O=M+(C<<14&4294967295|C>>>18),C=R+(M^b&(O^M))+V[0]+3921069994&4294967295,R=O+(C<<20&4294967295|C>>>12),C=b+(O^M&(R^O))+V[5]+3593408605&4294967295,b=R+(C<<5&4294967295|C>>>27),C=M+(R^O&(b^R))+V[10]+38016083&4294967295,M=b+(C<<9&4294967295|C>>>23),C=O+(b^R&(M^b))+V[15]+3634488961&4294967295,O=M+(C<<14&4294967295|C>>>18),C=R+(M^b&(O^M))+V[4]+3889429448&4294967295,R=O+(C<<20&4294967295|C>>>12),C=b+(O^M&(R^O))+V[9]+568446438&4294967295,b=R+(C<<5&4294967295|C>>>27),C=M+(R^O&(b^R))+V[14]+3275163606&4294967295,M=b+(C<<9&4294967295|C>>>23),C=O+(b^R&(M^b))+V[3]+4107603335&4294967295,O=M+(C<<14&4294967295|C>>>18),C=R+(M^b&(O^M))+V[8]+1163531501&4294967295,R=O+(C<<20&4294967295|C>>>12),C=b+(O^M&(R^O))+V[13]+2850285829&4294967295,b=R+(C<<5&4294967295|C>>>27),C=M+(R^O&(b^R))+V[2]+4243563512&4294967295,M=b+(C<<9&4294967295|C>>>23),C=O+(b^R&(M^b))+V[7]+1735328473&4294967295,O=M+(C<<14&4294967295|C>>>18),C=R+(M^b&(O^M))+V[12]+2368359562&4294967295,R=O+(C<<20&4294967295|C>>>12),C=b+(R^O^M)+V[5]+4294588738&4294967295,b=R+(C<<4&4294967295|C>>>28),C=M+(b^R^O)+V[8]+2272392833&4294967295,M=b+(C<<11&4294967295|C>>>21),C=O+(M^b^R)+V[11]+1839030562&4294967295,O=M+(C<<16&4294967295|C>>>16),C=R+(O^M^b)+V[14]+4259657740&4294967295,R=O+(C<<23&4294967295|C>>>9),C=b+(R^O^M)+V[1]+2763975236&4294967295,b=R+(C<<4&4294967295|C>>>28),C=M+(b^R^O)+V[4]+1272893353&4294967295,M=b+(C<<11&4294967295|C>>>21),C=O+(M^b^R)+V[7]+4139469664&4294967295,O=M+(C<<16&4294967295|C>>>16),C=R+(O^M^b)+V[10]+3200236656&4294967295,R=O+(C<<23&4294967295|C>>>9),C=b+(R^O^M)+V[13]+681279174&4294967295,b=R+(C<<4&4294967295|C>>>28),C=M+(b^R^O)+V[0]+3936430074&4294967295,M=b+(C<<11&4294967295|C>>>21),C=O+(M^b^R)+V[3]+3572445317&4294967295,O=M+(C<<16&4294967295|C>>>16),C=R+(O^M^b)+V[6]+76029189&4294967295,R=O+(C<<23&4294967295|C>>>9),C=b+(R^O^M)+V[9]+3654602809&4294967295,b=R+(C<<4&4294967295|C>>>28),C=M+(b^R^O)+V[12]+3873151461&4294967295,M=b+(C<<11&4294967295|C>>>21),C=O+(M^b^R)+V[15]+530742520&4294967295,O=M+(C<<16&4294967295|C>>>16),C=R+(O^M^b)+V[2]+3299628645&4294967295,R=O+(C<<23&4294967295|C>>>9),C=b+(O^(R|~M))+V[0]+4096336452&4294967295,b=R+(C<<6&4294967295|C>>>26),C=M+(R^(b|~O))+V[7]+1126891415&4294967295,M=b+(C<<10&4294967295|C>>>22),C=O+(b^(M|~R))+V[14]+2878612391&4294967295,O=M+(C<<15&4294967295|C>>>17),C=R+(M^(O|~b))+V[5]+4237533241&4294967295,R=O+(C<<21&4294967295|C>>>11),C=b+(O^(R|~M))+V[12]+1700485571&4294967295,b=R+(C<<6&4294967295|C>>>26),C=M+(R^(b|~O))+V[3]+2399980690&4294967295,M=b+(C<<10&4294967295|C>>>22),C=O+(b^(M|~R))+V[10]+4293915773&4294967295,O=M+(C<<15&4294967295|C>>>17),C=R+(M^(O|~b))+V[1]+2240044497&4294967295,R=O+(C<<21&4294967295|C>>>11),C=b+(O^(R|~M))+V[8]+1873313359&4294967295,b=R+(C<<6&4294967295|C>>>26),C=M+(R^(b|~O))+V[15]+4264355552&4294967295,M=b+(C<<10&4294967295|C>>>22),C=O+(b^(M|~R))+V[6]+2734768916&4294967295,O=M+(C<<15&4294967295|C>>>17),C=R+(M^(O|~b))+V[13]+1309151649&4294967295,R=O+(C<<21&4294967295|C>>>11),C=b+(O^(R|~M))+V[4]+4149444226&4294967295,b=R+(C<<6&4294967295|C>>>26),C=M+(R^(b|~O))+V[11]+3174756917&4294967295,M=b+(C<<10&4294967295|C>>>22),C=O+(b^(M|~R))+V[2]+718787259&4294967295,O=M+(C<<15&4294967295|C>>>17),C=R+(M^(O|~b))+V[9]+3951481745&4294967295,D.g[0]=D.g[0]+b&4294967295,D.g[1]=D.g[1]+(O+(C<<21&4294967295|C>>>11))&4294967295,D.g[2]=D.g[2]+O&4294967295,D.g[3]=D.g[3]+M&4294967295}n.prototype.u=function(D,b){b===void 0&&(b=D.length);for(var R=b-this.blockSize,V=this.B,O=this.h,M=0;M<b;){if(O==0)for(;M<=R;)a(this,D,M),M+=this.blockSize;if(typeof D=="string"){for(;M<b;)if(V[O++]=D.charCodeAt(M++),O==this.blockSize){a(this,V),O=0;break}}else for(;M<b;)if(V[O++]=D[M++],O==this.blockSize){a(this,V),O=0;break}}this.h=O,this.o+=b},n.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var b=1;b<D.length-8;++b)D[b]=0;var R=8*this.o;for(b=D.length-8;b<D.length;++b)D[b]=R&255,R/=256;for(this.u(D),D=Array(16),b=R=0;4>b;++b)for(var V=0;32>V;V+=8)D[R++]=this.g[b]>>>V&255;return D};function l(D,b){var R=f;return Object.prototype.hasOwnProperty.call(R,D)?R[D]:R[D]=b(D)}function c(D,b){this.h=b;for(var R=[],V=!0,O=D.length-1;0<=O;O--){var M=D[O]|0;V&&M==b||(R[O]=M,V=!1)}this.g=R}var f={};function m(D){return-128<=D&&128>D?l(D,function(b){return new c([b|0],0>b?-1:0)}):new c([D|0],0>D?-1:0)}function g(D){if(isNaN(D)||!isFinite(D))return T;if(0>D)return Y(g(-D));for(var b=[],R=1,V=0;D>=R;V++)b[V]=D/R|0,R*=4294967296;return new c(b,0)}function y(D,b){if(D.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(D.charAt(0)=="-")return Y(y(D.substring(1),b));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=g(Math.pow(b,8)),V=T,O=0;O<D.length;O+=8){var M=Math.min(8,D.length-O),C=parseInt(D.substring(O,O+M),b);8>M?(M=g(Math.pow(b,M)),V=V.j(M).add(g(C))):(V=V.j(R),V=V.add(g(C)))}return V}var T=m(0),I=m(1),x=m(16777216);i=c.prototype,i.m=function(){if(W(this))return-Y(this).m();for(var D=0,b=1,R=0;R<this.g.length;R++){var V=this.i(R);D+=(0<=V?V:4294967296+V)*b,b*=4294967296}return D},i.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(G(this))return"0";if(W(this))return"-"+Y(this).toString(D);for(var b=g(Math.pow(D,6)),R=this,V="";;){var O=_e(R,b).g;R=ge(R,O.j(b));var M=((0<R.g.length?R.g[0]:R.h)>>>0).toString(D);if(R=O,G(R))return M+V;for(;6>M.length;)M="0"+M;V=M+V}},i.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function G(D){if(D.h!=0)return!1;for(var b=0;b<D.g.length;b++)if(D.g[b]!=0)return!1;return!0}function W(D){return D.h==-1}i.l=function(D){return D=ge(this,D),W(D)?-1:G(D)?0:1};function Y(D){for(var b=D.g.length,R=[],V=0;V<b;V++)R[V]=~D.g[V];return new c(R,~D.h).add(I)}i.abs=function(){return W(this)?Y(this):this},i.add=function(D){for(var b=Math.max(this.g.length,D.g.length),R=[],V=0,O=0;O<=b;O++){var M=V+(this.i(O)&65535)+(D.i(O)&65535),C=(M>>>16)+(this.i(O)>>>16)+(D.i(O)>>>16);V=C>>>16,M&=65535,C&=65535,R[O]=C<<16|M}return new c(R,R[R.length-1]&-2147483648?-1:0)};function ge(D,b){return D.add(Y(b))}i.j=function(D){if(G(this)||G(D))return T;if(W(this))return W(D)?Y(this).j(Y(D)):Y(Y(this).j(D));if(W(D))return Y(this.j(Y(D)));if(0>this.l(x)&&0>D.l(x))return g(this.m()*D.m());for(var b=this.g.length+D.g.length,R=[],V=0;V<2*b;V++)R[V]=0;for(V=0;V<this.g.length;V++)for(var O=0;O<D.g.length;O++){var M=this.i(V)>>>16,C=this.i(V)&65535,Vt=D.i(O)>>>16,ut=D.i(O)&65535;R[2*V+2*O]+=C*ut,de(R,2*V+2*O),R[2*V+2*O+1]+=M*ut,de(R,2*V+2*O+1),R[2*V+2*O+1]+=C*Vt,de(R,2*V+2*O+1),R[2*V+2*O+2]+=M*Vt,de(R,2*V+2*O+2)}for(V=0;V<b;V++)R[V]=R[2*V+1]<<16|R[2*V];for(V=b;V<2*b;V++)R[V]=0;return new c(R,0)};function de(D,b){for(;(D[b]&65535)!=D[b];)D[b+1]+=D[b]>>>16,D[b]&=65535,b++}function ne(D,b){this.g=D,this.h=b}function _e(D,b){if(G(b))throw Error("division by zero");if(G(D))return new ne(T,T);if(W(D))return b=_e(Y(D),b),new ne(Y(b.g),Y(b.h));if(W(b))return b=_e(D,Y(b)),new ne(Y(b.g),b.h);if(30<D.g.length){if(W(D)||W(b))throw Error("slowDivide_ only works with positive integers.");for(var R=I,V=b;0>=V.l(D);)R=he(R),V=he(V);var O=Te(R,1),M=Te(V,1);for(V=Te(V,2),R=Te(R,2);!G(V);){var C=M.add(V);0>=C.l(D)&&(O=O.add(R),M=C),V=Te(V,1),R=Te(R,1)}return b=ge(D,O.j(b)),new ne(O,b)}for(O=T;0<=D.l(b);){for(R=Math.max(1,Math.floor(D.m()/b.m())),V=Math.ceil(Math.log(R)/Math.LN2),V=48>=V?1:Math.pow(2,V-48),M=g(R),C=M.j(b);W(C)||0<C.l(D);)R-=V,M=g(R),C=M.j(b);G(M)&&(M=I),O=O.add(M),D=ge(D,C)}return new ne(O,D)}i.A=function(D){return _e(this,D).h},i.and=function(D){for(var b=Math.max(this.g.length,D.g.length),R=[],V=0;V<b;V++)R[V]=this.i(V)&D.i(V);return new c(R,this.h&D.h)},i.or=function(D){for(var b=Math.max(this.g.length,D.g.length),R=[],V=0;V<b;V++)R[V]=this.i(V)|D.i(V);return new c(R,this.h|D.h)},i.xor=function(D){for(var b=Math.max(this.g.length,D.g.length),R=[],V=0;V<b;V++)R[V]=this.i(V)^D.i(V);return new c(R,this.h^D.h)};function he(D){for(var b=D.g.length+1,R=[],V=0;V<b;V++)R[V]=D.i(V)<<1|D.i(V-1)>>>31;return new c(R,D.h)}function Te(D,b){var R=b>>5;b%=32;for(var V=D.g.length-R,O=[],M=0;M<V;M++)O[M]=0<b?D.i(M+R)>>>b|D.i(M+R+1)<<32-b:D.i(M+R);return new c(O,D.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,WS=n,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=y,xs=c}).apply(typeof tA<"u"?tA:typeof self<"u"?self:typeof window<"u"?window:{});var vf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var XS,Lc,JS,Df,V_,ZS,e0,t0;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof vf=="object"&&vf];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var n=t(this);function a(h,_){if(_)e:{var v=n;h=h.split(".");for(var A=0;A<h.length-1;A++){var L=h[A];if(!(L in v))break e;v=v[L]}h=h[h.length-1],A=v[h],_=_(A),_!=A&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var v=0,A=!1,L={next:function(){if(!A&&v<h.length){var H=v++;return{value:_(H,h[H]),done:!1}}return A=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},f=this||self;function m(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function T(h,_,v){if(!h)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,A),h.apply(_,L)}}return function(){return h.apply(_,arguments)}}function I(h,_,v){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:T,I.apply(null,arguments)}function x(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),h.apply(this,A)}}function G(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(A,L,H){for(var ae=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)ae[Be-2]=arguments[Be];return _.prototype[L].apply(A,ae)}}function W(h){const _=h.length;if(0<_){const v=Array(_);for(let A=0;A<_;A++)v[A]=h[A];return v}return[]}function Y(h,_){for(let v=1;v<arguments.length;v++){const A=arguments[v];if(m(A)){const L=h.length||0,H=A.length||0;h.length=L+H;for(let ae=0;ae<H;ae++)h[L+ae]=A[ae]}else h.push(A)}}class ge{constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function de(h){return/^[\s\xa0]*$/.test(h)}function ne(){var h=f.navigator;return h&&(h=h.userAgent)?h:""}function _e(h){return _e[" "](h),h}_e[" "]=function(){};var he=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function Te(h,_,v){for(const A in h)_.call(v,h[A],A,h)}function D(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function b(h){const _={};for(const v in h)_[v]=h[v];return _}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V(h,_){let v,A;for(let L=1;L<arguments.length;L++){A=arguments[L];for(v in A)h[v]=A[v];for(let H=0;H<R.length;H++)v=R[H],Object.prototype.hasOwnProperty.call(A,v)&&(h[v]=A[v])}}function O(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function M(h){f.setTimeout(()=>{throw h},0)}function C(){var h=Le;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class Vt{constructor(){this.h=this.g=null}add(_,v){const A=ut.get();A.set(_,v),this.h?this.h.next=A:this.g=A,this.h=A}}var ut=new ge(()=>new K,h=>h.reset());class K{constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ie,pe=!1,Le=new Vt,N=()=>{const h=f.Promise.resolve(void 0);ie=()=>{h.then(ee)}};var ee=()=>{for(var h;h=C();){try{h.h.call(h.g)}catch(v){M(v)}var _=ut;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}pe=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var we=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};f.addEventListener("test",v,_),f.removeEventListener("test",v,_)}catch{}return h})();function Pe(h,_){if(se.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,A=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(he){e:{try{_e(_.nodeName);var L=!0;break e}catch{}L=!1}L||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Se[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Pe.aa.h.call(this)}}G(Pe,se);var Se={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Qt="closure_listenable_"+(1e6*Math.random()|0),st=0;function Ar(h,_,v,A,L){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!A,this.ha=L,this.key=++st,this.da=this.fa=!1}function Ki(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function ii(h){this.src=h,this.g={},this.h=0}ii.prototype.add=function(h,_,v,A,L){var H=h.toString();h=this.g[H],h||(h=this.g[H]=[],this.h++);var ae=na(h,_,A,L);return-1<ae?(_=h[ae],v||(_.fa=!1)):(_=new Ar(_,this.src,H,!!A,L),_.fa=v,h.push(_)),_};function ta(h,_){var v=_.type;if(v in h.g){var A=h.g[v],L=Array.prototype.indexOf.call(A,_,void 0),H;(H=0<=L)&&Array.prototype.splice.call(A,L,1),H&&(Ki(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function na(h,_,v,A){for(var L=0;L<h.length;++L){var H=h[L];if(!H.da&&H.listener==_&&H.capture==!!v&&H.ha==A)return L}return-1}var ra="closure_lm_"+(1e6*Math.random()|0),gu={};function Qh(h,_,v,A,L){if(Array.isArray(_)){for(var H=0;H<_.length;H++)Qh(h,_[H],v,A,L);return null}return v=Yh(v),h&&h[Qt]?h.K(_,v,g(A)?!!A.capture:!1,L):Wn(h,_,v,!1,A,L)}function Wn(h,_,v,A,L,H){if(!_)throw Error("Invalid event type");var ae=g(L)?!!L.capture:!!L,Be=Eo(h);if(Be||(h[ra]=Be=new ii(h)),v=Be.add(_,v,A,ae,H),v.proxy)return v;if(A=ep(),v.proxy=A,A.src=h,A.listener=v,h.addEventListener)we||(L=ae),L===void 0&&(L=!1),h.addEventListener(_.toString(),A,L);else if(h.attachEvent)h.attachEvent(ia(_.toString()),A);else if(h.addListener&&h.removeListener)h.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function ep(){function h(v){return _.call(h.src,h.listener,v)}const _=tp;return h}function _u(h,_,v,A,L){if(Array.isArray(_))for(var H=0;H<_.length;H++)_u(h,_[H],v,A,L);else A=g(A)?!!A.capture:!!A,v=Yh(v),h&&h[Qt]?(h=h.i,_=String(_).toString(),_ in h.g&&(H=h.g[_],v=na(H,v,A,L),-1<v&&(Ki(H[v]),Array.prototype.splice.call(H,v,1),H.length==0&&(delete h.g[_],h.h--)))):h&&(h=Eo(h))&&(_=h.g[_.toString()],h=-1,_&&(h=na(_,v,A,L)),(v=-1<h?_[h]:null)&&vo(v))}function vo(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Qt])ta(_.i,h);else{var v=h.type,A=h.proxy;_.removeEventListener?_.removeEventListener(v,A,h.capture):_.detachEvent?_.detachEvent(ia(v),A):_.addListener&&_.removeListener&&_.removeListener(A),(v=Eo(_))?(ta(v,h),v.h==0&&(v.src=null,_[ra]=null)):Ki(h)}}}function ia(h){return h in gu?gu[h]:gu[h]="on"+h}function tp(h,_){if(h.da)h=!0;else{_=new Pe(_,this);var v=h.listener,A=h.ha||h.src;h.fa&&vo(h),h=v.call(A,_)}return h}function Eo(h){return h=h[ra],h instanceof ii?h:null}var yu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yh(h){return typeof h=="function"?h:(h[yu]||(h[yu]=function(_){return h.handleEvent(_)}),h[yu])}function Et(){ue.call(this),this.i=new ii(this),this.M=this,this.F=null}G(Et,ue),Et.prototype[Qt]=!0,Et.prototype.removeEventListener=function(h,_,v,A){_u(this,h,_,v,A)};function $e(h,_){var v,A=h.F;if(A)for(v=[];A;A=A.F)v.push(A);if(h=h.M,A=_.type||_,typeof _=="string")_=new se(_,h);else if(_ instanceof se)_.target=_.target||h;else{var L=_;_=new se(A,h),V(_,L)}if(L=!0,v)for(var H=v.length-1;0<=H;H--){var ae=_.g=v[H];L=Mn(ae,A,!0,_)&&L}if(ae=_.g=h,L=Mn(ae,A,!0,_)&&L,L=Mn(ae,A,!1,_)&&L,v)for(H=0;H<v.length;H++)ae=_.g=v[H],L=Mn(ae,A,!1,_)&&L}Et.prototype.N=function(){if(Et.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],A=0;A<v.length;A++)Ki(v[A]);delete h.g[_],h.h--}}this.F=null},Et.prototype.K=function(h,_,v,A){return this.i.add(String(h),_,!1,v,A)},Et.prototype.L=function(h,_,v,A){return this.i.add(String(h),_,!0,v,A)};function Mn(h,_,v,A){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var L=!0,H=0;H<_.length;++H){var ae=_[H];if(ae&&!ae.da&&ae.capture==v){var Be=ae.listener,Ft=ae.ha||ae.src;ae.fa&&ta(h.i,ae),L=Be.call(Ft,A)!==!1&&L}}return L&&!A.defaultPrevented}function fn(h,_,v){if(typeof h=="function")v&&(h=I(h,v));else if(h&&typeof h.handleEvent=="function")h=I(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:f.setTimeout(h,_||0)}function $h(h){h.g=fn(()=>{h.g=null,h.i&&(h.i=!1,$h(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class np extends ue{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:$h(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function sa(h){ue.call(this),this.h=h,this.g={}}G(sa,ue);var aa=[];function oa(h){Te(h.g,function(_,v){this.g.hasOwnProperty(v)&&vo(_)},h),h.g={}}sa.prototype.N=function(){sa.aa.N.call(this),oa(this)},sa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dr=f.JSON.stringify,To=f.JSON.parse,la=class{stringify(h){return f.JSON.stringify(h,void 0)}parse(h){return f.JSON.parse(h,void 0)}};function vu(){}vu.prototype.h=null;function Eu(h){return h.h||(h.h=h.i())}function Tu(){}var si={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ai(){se.call(this,"d")}G(ai,se);function wu(){se.call(this,"c")}G(wu,se);var br={},Iu=null;function Qi(){return Iu=Iu||new Et}br.La="serverreachability";function wo(h){se.call(this,br.La,h)}G(wo,se);function Yi(h){const _=Qi();$e(_,new wo(_))}br.STAT_EVENT="statevent";function Wh(h,_){se.call(this,br.STAT_EVENT,h),this.stat=_}G(Wh,se);function ht(h){const _=Qi();$e(_,new Wh(_,h))}br.Ma="timingevent";function zt(h,_){se.call(this,br.Ma,h),this.size=_}G(zt,se);function xt(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){h()},_)}function Xn(){this.g=!0}Xn.prototype.xa=function(){this.g=!1};function Au(h,_,v,A,L,H){h.info(function(){if(h.g)if(H)for(var ae="",Be=H.split("&"),Ft=0;Ft<Be.length;Ft++){var ze=Be[Ft].split("=");if(1<ze.length){var $t=ze[0];ze=ze[1];var qt=$t.split("_");ae=2<=qt.length&&qt[1]=="type"?ae+($t+"="+ze+"&"):ae+($t+"=redacted&")}}else ae=null;else ae=H;return"XMLHTTP REQ ("+A+") [attempt "+L+"]: "+_+`
`+v+`
`+ae})}function rp(h,_,v,A,L,H,ae){h.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+L+"]: "+_+`
`+v+`
`+H+" "+ae})}function $i(h,_,v,A){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+ua(h,v)+(A?" "+A:"")})}function Xh(h,_){h.info(function(){return"TIMEOUT: "+_})}Xn.prototype.info=function(){};function ua(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var A=v[h];if(!(2>A.length)){var L=A[1];if(Array.isArray(L)&&!(1>L.length)){var H=L[0];if(H!="noop"&&H!="stop"&&H!="close")for(var ae=1;ae<L.length;ae++)L[ae]=""}}}}return dr(v)}catch{return _}}var Wi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},oi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sr;function Rr(){}G(Rr,vu),Rr.prototype.g=function(){return new XMLHttpRequest},Rr.prototype.i=function(){return{}},Sr=new Rr;function En(h,_,v,A){this.j=h,this.i=_,this.l=v,this.R=A||1,this.U=new sa(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Rt}function Rt(){this.i=null,this.g="",this.h=!1}var bu={},Io={};function fr(h,_,v){h.L=1,h.v=ma(Ln(_)),h.m=v,h.P=!0,li(h,null)}function li(h,_){h.F=Date.now(),ca(h),h.A=Ln(h.v);var v=h.A,A=h.R;Array.isArray(A)||(A=[String(A)]),Pu(v.i,"t",A),h.C=0,v=h.j.J,h.h=new Rt,h.g=fd(h.j,v?_:null,!h.m),0<h.O&&(h.M=new np(I(h.Y,h,h.g),h.O)),_=h.U,v=h.g,A=h.ca;var L="readystatechange";Array.isArray(L)||(L&&(aa[0]=L.toString()),L=aa);for(var H=0;H<L.length;H++){var ae=Qh(v,L[H],A||_.handleEvent,!1,_.h||_);if(!ae)break;_.g[ae.key]=ae}_=h.H?b(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),Yi(),Au(h.i,h.u,h.A,h.l,h.R,h.m)}En.prototype.ca=function(h){h=h.target;const _=this.M;_&&tr(h)==3?_.j():this.Y(h)},En.prototype.Y=function(h){try{if(h==this.g)e:{const qt=tr(this.g);var _=this.g.Ba();const gi=this.g.Z();if(!(3>qt)&&(qt!=3||this.g&&(this.h.h||this.g.oa()||sd(this.g)))){this.J||qt!=4||_==7||(_==8||0>=gi?Yi(3):Yi(2)),Xi(this);var v=this.g.Z();this.X=v;t:if(Jh(this)){var A=sd(this.g);h="";var L=A.length,H=tr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rn(this),Cr(this);var ae="";break t}this.h.i=new f.TextDecoder}for(_=0;_<L;_++)this.h.h=!0,h+=this.h.i.decode(A[_],{stream:!(H&&_==L-1)});A.length=0,this.h.g+=h,this.C=0,ae=this.h.g}else ae=this.g.oa();if(this.o=v==200,rp(this.i,this.u,this.A,this.l,this.R,qt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,Ft=this.g;if((Be=Ft.g?Ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!de(Be)){var ze=Be;break t}}ze=null}if(v=ze)$i(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ha(this,v);else{this.o=!1,this.s=3,ht(12),rn(this),Cr(this);break e}}if(this.P){v=!0;let sn;for(;!this.J&&this.C<ae.length;)if(sn=Zh(this,ae),sn==Io){qt==4&&(this.s=4,ht(14),v=!1),$i(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==bu){this.s=4,ht(15),$i(this.i,this.l,ae,"[Invalid Chunk]"),v=!1;break}else $i(this.i,this.l,sn,null),ha(this,sn);if(Jh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),qt!=4||ae.length!=0||this.h.h||(this.s=1,ht(16),v=!1),this.o=this.o&&v,!v)$i(this.i,this.l,ae,"[Invalid Chunked Response]"),rn(this),Cr(this);else if(0<ae.length&&!this.W){this.W=!0;var $t=this.j;$t.g==this&&$t.ba&&!$t.M&&($t.j.info("Great, no buffering proxy detected. Bytes received: "+ae.length),wa($t),$t.M=!0,ht(11))}}else $i(this.i,this.l,ae,null),ha(this,ae);qt==4&&rn(this),this.o&&!this.J&&(qt==4?cd(this.j,this):(this.o=!1,ca(this)))}else lp(this.g),v==400&&0<ae.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),rn(this),Cr(this)}}}catch{}finally{}};function Jh(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Zh(h,_){var v=h.C,A=_.indexOf(`
`,v);return A==-1?Io:(v=Number(_.substring(v,A)),isNaN(v)?bu:(A+=1,A+v>_.length?Io:(_=_.slice(A,A+v),h.C=A+v,_)))}En.prototype.cancel=function(){this.J=!0,rn(this)};function ca(h){h.S=Date.now()+h.I,ed(h,h.I)}function ed(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=xt(I(h.ba,h),_)}function Xi(h){h.B&&(f.clearTimeout(h.B),h.B=null)}En.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Xh(this.i,this.A),this.L!=2&&(Yi(),ht(17)),rn(this),this.s=2,Cr(this)):ed(this,this.S-h)};function Cr(h){h.j.G==0||h.J||cd(h.j,h)}function rn(h){Xi(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,oa(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function ha(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||Su(v.h,h))){if(!h.K&&Su(v.h,h)&&v.G==3){try{var A=v.Da.g.parse(_)}catch{A=null}if(Array.isArray(A)&&A.length==3){var L=A;if(L[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)ko(v),xo(v);else break e;Mu(v),ht(18)}}else v.za=L[1],0<v.za-v.T&&37500>L[2]&&v.F&&v.v==0&&!v.C&&(v.C=xt(I(v.Za,v),6e3));if(1>=bo(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else pi(v,11)}else if((h.K||v.g==h)&&ko(v),!de(_))for(L=v.Da.g.parse(_),_=0;_<L.length;_++){let ze=L[_];if(v.T=ze[0],ze=ze[1],v.G==2)if(ze[0]=="c"){v.K=ze[1],v.ia=ze[2];const $t=ze[3];$t!=null&&(v.la=$t,v.j.info("VER="+v.la));const qt=ze[4];qt!=null&&(v.Aa=qt,v.j.info("SVER="+v.Aa));const gi=ze[5];gi!=null&&typeof gi=="number"&&0<gi&&(A=1.5*gi,v.L=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const sn=h.g;if(sn){const kr=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(kr){var H=A.h;H.g||kr.indexOf("spdy")==-1&&kr.indexOf("quic")==-1&&kr.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(So(H,H.h),H.h=null))}if(A.D){const Uu=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;Uu&&(A.ya=Uu,et(A.I,A.D,Uu))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),A=v;var ae=h;if(A.qa=dd(A,A.J?A.ia:null,A.W),ae.K){Tn(A.h,ae);var Be=ae,Ft=A.L;Ft&&(Be.I=Ft),Be.B&&(Xi(Be),ca(Be)),A.g=ae}else ld(A);0<v.i.length&&Oo(v)}else ze[0]!="stop"&&ze[0]!="close"||pi(v,7);else v.G==3&&(ze[0]=="stop"||ze[0]=="close"?ze[0]=="stop"?pi(v,7):Ou(v):ze[0]!="noop"&&v.l&&v.l.ta(ze),v.v=0)}}Yi(4)}catch{}}var td=class{constructor(h,_){this.g=h,this.map=_}};function ui(h){this.l=h||10,f.PerformanceNavigationTiming?(h=f.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ao(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function bo(h){return h.h?1:h.g?h.g.size:0}function Su(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function So(h,_){h.g?h.g.add(_):h.h=_}function Tn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}ui.prototype.cancel=function(){if(this.i=Ru(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Ru(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return W(h.i)}function ip(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(m(h)){for(var _=[],v=h.length,A=0;A<v;A++)_.push(h[A]);return _}_=[],v=0;for(A in h)_[v++]=h[A];return _}function Ro(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(m(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const A in h)_[v++]=A;return _}}}function Cu(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(m(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=Ro(h),A=ip(h),L=A.length,H=0;H<L;H++)_.call(void 0,A[H],v&&v[H],h)}var da=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sp(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var A=h[v].indexOf("="),L=null;if(0<=A){var H=h[v].substring(0,A);L=h[v].substring(A+1)}else H=h[v];_(H,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Ot(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Ot){this.h=h.h,fa(this,h.j),this.o=h.o,this.g=h.g,Ji(this,h.s),this.l=h.l;var _=h.i,v=new hi;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),ci(this,v),this.m=h.m}else h&&(_=String(h).match(da))?(this.h=!1,fa(this,_[1]||"",!0),this.o=Jn(_[2]||""),this.g=Jn(_[3]||"",!0),Ji(this,_[4]),this.l=Jn(_[5]||"",!0),ci(this,_[6]||"",!0),this.m=Jn(_[7]||"")):(this.h=!1,this.i=new hi(null,this.h))}Ot.prototype.toString=function(){var h=[],_=this.j;_&&h.push(pa(_,Du,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(pa(_,Du,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(pa(v,v.charAt(0)=="/"?ap:Nu,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",pa(v,Co)),h.join("")};function Ln(h){return new Ot(h)}function fa(h,_,v){h.j=v?Jn(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Ji(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function ci(h,_,v){_ instanceof hi?(h.i=_,rd(h.i,h.h)):(v||(_=pa(_,op)),h.i=new hi(_,h.h))}function et(h,_,v){h.i.set(_,v)}function ma(h){return et(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Jn(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function pa(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,nd),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function nd(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Du=/[#\/\?@]/g,Nu=/[#\?:]/g,ap=/[#\?]/g,op=/[#\?@]/g,Co=/#/g;function hi(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function Zn(h){h.g||(h.g=new Map,h.h=0,h.i&&sp(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}i=hi.prototype,i.add=function(h,_){Zn(this),this.i=null,h=Dr(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function di(h,_){Zn(h),_=Dr(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function fi(h,_){return Zn(h),_=Dr(h,_),h.g.has(_)}i.forEach=function(h,_){Zn(this),this.g.forEach(function(v,A){v.forEach(function(L){h.call(_,L,A,this)},this)},this)},i.na=function(){Zn(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let A=0;A<_.length;A++){const L=h[A];for(let H=0;H<L.length;H++)v.push(_[A])}return v},i.V=function(h){Zn(this);let _=[];if(typeof h=="string")fi(this,h)&&(_=_.concat(this.g.get(Dr(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},i.set=function(h,_){return Zn(this),this.i=null,h=Dr(this,h),fi(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},i.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Pu(h,_,v){di(h,_),0<v.length&&(h.i=null,h.g.set(Dr(h,_),W(v)),h.h+=v.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var A=_[v];const H=encodeURIComponent(String(A)),ae=this.V(A);for(A=0;A<ae.length;A++){var L=H;ae[A]!==""&&(L+="="+encodeURIComponent(String(ae[A]))),h.push(L)}}return this.i=h.join("&")};function Dr(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function rd(h,_){_&&!h.j&&(Zn(h),h.i=null,h.g.forEach(function(v,A){var L=A.toLowerCase();A!=L&&(di(this,A),Pu(this,L,v))},h)),h.j=_}function ga(h,_){const v=new Xn;if(f.Image){const A=new Image;A.onload=x(er,v,"TestLoadImage: loaded",!0,_,A),A.onerror=x(er,v,"TestLoadImage: error",!1,_,A),A.onabort=x(er,v,"TestLoadImage: abort",!1,_,A),A.ontimeout=x(er,v,"TestLoadImage: timeout",!1,_,A),f.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=h}else _(!1)}function mr(h,_){const v=new Xn,A=new AbortController,L=setTimeout(()=>{A.abort(),er(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:A.signal}).then(H=>{clearTimeout(L),H.ok?er(v,"TestPingServer: ok",!0,_):er(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(L),er(v,"TestPingServer: error",!1,_)})}function er(h,_,v,A,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),A(v)}catch{}}function _a(){this.g=new la}function Nr(h,_,v){const A=v||"";try{Cu(h,function(L,H){let ae=L;g(L)&&(ae=dr(L)),_.push(A+H+"="+encodeURIComponent(ae))})}catch(L){throw _.push(A+"type="+encodeURIComponent("_badmap")),L}}function Zi(h){this.l=h.Ub||null,this.j=h.eb||!1}G(Zi,vu),Zi.prototype.g=function(){return new mi(this.l,this.j)},Zi.prototype.i=(function(h){return function(){return h}})({});function mi(h,_){Et.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}G(mi,Et),i=mi.prototype,i.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Vr(this)},i.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||f).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pr(this)),this.readyState=0},i.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Vr(this)),this.g&&(this.readyState=3,Vr(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vu(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vu(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}i.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Pr(this):Vr(this),this.readyState==3&&Vu(this)}},i.Ra=function(h){this.g&&(this.response=this.responseText=h,Pr(this))},i.Qa=function(h){this.g&&(this.response=h,Pr(this))},i.ga=function(){this.g&&Pr(this)};function Pr(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Vr(h)}i.setRequestHeader=function(h,_){this.u.append(h,_)},i.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function Vr(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(mi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function xu(h){let _="";return Te(h,function(v,A){_+=A,_+=":",_+=v,_+=`\r
`}),_}function Yt(h,_,v){e:{for(A in v){var A=!1;break e}A=!0}A||(v=xu(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):et(h,_,v))}function Ke(h){Et.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}G(Ke,Et);var Do=/^https?$/i,ya=["POST","PUT"];i=Ke.prototype,i.Ha=function(h){this.J=h},i.ea=function(h,_,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sr.g(),this.v=this.o?Eu(this.o):Eu(Sr),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(H){id(this,H);return}if(h=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var L in A)v.set(L,A[L]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const H of A.keys())v.set(H,A.get(H));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(H=>H.toLowerCase()=="content-type"),L=f.FormData&&h instanceof f.FormData,!(0<=Array.prototype.indexOf.call(ya,_,void 0))||A||L||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,ae]of v)this.g.setRequestHeader(H,ae);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{va(this),this.u=!0,this.g.send(h),this.u=!1}catch(H){id(this,H)}};function id(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,No(h),xr(h)}function No(h){h.A||(h.A=!0,$e(h,"complete"),$e(h,"error"))}i.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,$e(this,"complete"),$e(this,"abort"),xr(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xr(this,!0)),Ke.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Po(this):this.bb())},i.bb=function(){Po(this)};function Po(h){if(h.h&&typeof c<"u"&&(!h.v[1]||tr(h)!=4||h.Z()!=2)){if(h.u&&tr(h)==4)fn(h.Ea,0,h);else if($e(h,"readystatechange"),tr(h)==4){h.h=!1;try{const ae=h.Z();e:switch(ae){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var A;if(A=ae===0){var L=String(h.D).match(da)[1]||null;!L&&f.self&&f.self.location&&(L=f.self.location.protocol.slice(0,-1)),A=!Do.test(L?L.toLowerCase():"")}v=A}if(v)$e(h,"complete"),$e(h,"success");else{h.m=6;try{var H=2<tr(h)?h.g.statusText:""}catch{H=""}h.l=H+" ["+h.Z()+"]",No(h)}}finally{xr(h)}}}}function xr(h,_){if(h.g){va(h);const v=h.g,A=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||$e(h,"ready");try{v.onreadystatechange=A}catch{}}}function va(h){h.I&&(f.clearTimeout(h.I),h.I=null)}i.isActive=function(){return!!this.g};function tr(h){return h.g?h.g.readyState:0}i.Z=function(){try{return 2<tr(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),To(_)}};function sd(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function lp(h){const _={};h=(h.g&&2<=tr(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<h.length;A++){if(de(h[A]))continue;var v=O(h[A]);const L=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const H=_[L]||[];_[L]=H,H.push(v)}D(_,function(A){return A.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ea(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function Vo(h){this.Aa=0,this.i=[],this.j=new Xn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ea("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ea("baseRetryDelayMs",5e3,h),this.cb=Ea("retryDelaySeedMs",1e4,h),this.Wa=Ea("forwardChannelMaxRetries",2,h),this.wa=Ea("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new ui(h&&h.concurrentRequestLimit),this.Da=new _a,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Vo.prototype,i.la=8,i.G=1,i.connect=function(h,_,v,A){ht(0),this.W=h,this.H=_||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.I=dd(this,null,this.W),Oo(this)};function Ou(h){if(ad(h),h.G==3){var _=h.U++,v=Ln(h.I);if(et(v,"SID",h.K),et(v,"RID",_),et(v,"TYPE","terminate"),Ta(h,v),_=new En(h,h.j,_),_.L=2,_.v=ma(Ln(v)),v=!1,f.navigator&&f.navigator.sendBeacon)try{v=f.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&f.Image&&(new Image().src=_.v,v=!0),v||(_.g=fd(_.j,null),_.g.ea(_.v)),_.F=Date.now(),ca(_)}hd(h)}function xo(h){h.g&&(wa(h),h.g.cancel(),h.g=null)}function ad(h){xo(h),h.u&&(f.clearTimeout(h.u),h.u=null),ko(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&f.clearTimeout(h.s),h.s=null)}function Oo(h){if(!Ao(h.h)&&!h.s){h.s=!0;var _=h.Ga;ie||N(),pe||(ie(),pe=!0),Le.add(_,h),h.B=0}}function up(h,_){return bo(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=xt(I(h.Ga,h,_),Lu(h,h.B)),h.B++,!0)}i.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const L=new En(this,this.j,h);let H=this.o;if(this.S&&(H?(H=b(H),V(H,this.S)):H=this.S),this.m!==null||this.O||(L.H=H,H=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(_+=A,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=od(this,L,_),v=Ln(this.I),et(v,"RID",h),et(v,"CVER",22),this.D&&et(v,"X-HTTP-Session-Id",this.D),Ta(this,v),H&&(this.O?_="headers="+encodeURIComponent(String(xu(H)))+"&"+_:this.m&&Yt(v,this.m,H)),So(this.h,L),this.Ua&&et(v,"TYPE","init"),this.P?(et(v,"$req",_),et(v,"SID","null"),L.T=!0,fr(L,v,null)):fr(L,v,_),this.G=2}}else this.G==3&&(h?ku(this,h):this.i.length==0||Ao(this.h)||ku(this))};function ku(h,_){var v;_?v=_.l:v=h.U++;const A=Ln(h.I);et(A,"SID",h.K),et(A,"RID",v),et(A,"AID",h.T),Ta(h,A),h.m&&h.o&&Yt(A,h.m,h.o),v=new En(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=od(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),So(h.h,v),fr(v,A,_)}function Ta(h,_){h.H&&Te(h.H,function(v,A){et(_,A,v)}),h.l&&Cu({},function(v,A){et(_,A,v)})}function od(h,_,v){v=Math.min(h.i.length,v);var A=h.l?I(h.l.Na,h.l,h):null;e:{var L=h.i;let H=-1;for(;;){const ae=["count="+v];H==-1?0<v?(H=L[0].g,ae.push("ofs="+H)):H=0:ae.push("ofs="+H);let Be=!0;for(let Ft=0;Ft<v;Ft++){let ze=L[Ft].g;const $t=L[Ft].map;if(ze-=H,0>ze)H=Math.max(0,L[Ft].g-100),Be=!1;else try{Nr($t,ae,"req"+ze+"_")}catch{A&&A($t)}}if(Be){A=ae.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,A}function ld(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;ie||N(),pe||(ie(),pe=!0),Le.add(_,h),h.v=0}}function Mu(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=xt(I(h.Fa,h),Lu(h,h.v)),h.v++,!0)}i.Fa=function(){if(this.u=null,ud(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=xt(I(this.ab,this),h)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ht(10),xo(this),ud(this))};function wa(h){h.A!=null&&(f.clearTimeout(h.A),h.A=null)}function ud(h){h.g=new En(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Ln(h.qa);et(_,"RID","rpc"),et(_,"SID",h.K),et(_,"AID",h.T),et(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&et(_,"TO",h.ja),et(_,"TYPE","xmlhttp"),Ta(h,_),h.m&&h.o&&Yt(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=ma(Ln(_)),v.m=null,v.P=!0,li(v,h)}i.Za=function(){this.C!=null&&(this.C=null,xo(this),Mu(this),ht(19))};function ko(h){h.C!=null&&(f.clearTimeout(h.C),h.C=null)}function cd(h,_){var v=null;if(h.g==_){ko(h),wa(h),h.g=null;var A=2}else if(Su(h.h,_))v=_.D,Tn(h.h,_),A=1;else return;if(h.G!=0){if(_.o)if(A==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var L=h.B;A=Qi(),$e(A,new zt(A,v)),Oo(h)}else ld(h);else if(L=_.s,L==3||L==0&&0<_.X||!(A==1&&up(h,_)||A==2&&Mu(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),L){case 1:pi(h,5);break;case 4:pi(h,10);break;case 3:pi(h,6);break;default:pi(h,2)}}}function Lu(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function pi(h,_){if(h.j.info("Error code "+_),_==2){var v=I(h.fb,h),A=h.Xa;const L=!A;A=new Ot(A||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||fa(A,"https"),ma(A),L?ga(A.toString(),v):mr(A.toString(),v)}else ht(2);h.G=0,h.l&&h.l.sa(_),hd(h),ad(h)}i.fb=function(h){h?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function hd(h){if(h.G=0,h.ka=[],h.l){const _=Ru(h.h);(_.length!=0||h.i.length!=0)&&(Y(h.ka,_),Y(h.ka,h.i),h.h.i.length=0,W(h.i),h.i.length=0),h.l.ra()}}function dd(h,_,v){var A=v instanceof Ot?Ln(v):new Ot(v);if(A.g!="")_&&(A.g=_+"."+A.g),Ji(A,A.s);else{var L=f.location;A=L.protocol,_=_?_+"."+L.hostname:L.hostname,L=+L.port;var H=new Ot(null);A&&fa(H,A),_&&(H.g=_),L&&Ji(H,L),v&&(H.l=v),A=H}return v=h.D,_=h.ya,v&&_&&et(A,v,_),et(A,"VER",h.la),Ta(h,A),A}function fd(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Ke(new Zi({eb:v})):new Ke(h.pa),_.Ha(h.J),_}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function md(){}i=md.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Mo(){}Mo.prototype.g=function(h,_){return new wn(h,_)};function wn(h,_){Et.call(this),this.g=new Vo(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!de(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!de(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Or(this)}G(wn,Et),wn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wn.prototype.close=function(){Ou(this.g)},wn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=dr(h),h=v);_.i.push(new td(_.Ya++,h)),_.G==3&&Oo(_)},wn.prototype.N=function(){this.g.l=null,delete this.j,Ou(this.g),delete this.g,wn.aa.N.call(this)};function pd(h){ai.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}G(pd,ai);function gd(){wu.call(this),this.status=1}G(gd,wu);function Or(h){this.g=h}G(Or,md),Or.prototype.ua=function(){$e(this.g,"a")},Or.prototype.ta=function(h){$e(this.g,new pd(h))},Or.prototype.sa=function(h){$e(this.g,new gd)},Or.prototype.ra=function(){$e(this.g,"b")},Mo.prototype.createWebChannel=Mo.prototype.g,wn.prototype.send=wn.prototype.o,wn.prototype.open=wn.prototype.m,wn.prototype.close=wn.prototype.close,t0=function(){return new Mo},e0=function(){return Qi()},ZS=br,V_={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wi.NO_ERROR=0,Wi.TIMEOUT=8,Wi.HTTP_ERROR=6,Df=Wi,oi.COMPLETE="complete",JS=oi,Tu.EventType=si,si.OPEN="a",si.CLOSE="b",si.ERROR="c",si.MESSAGE="d",Et.prototype.listen=Et.prototype.K,Lc=Tu,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,XS=Ke}).apply(typeof vf<"u"?vf:typeof self<"u"?self:typeof window<"u"?window:{});const nA="@firebase/firestore",rA="4.9.1";/**
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
 */let en=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};en.UNAUTHENTICATED=new en(null),en.GOOGLE_CREDENTIALS=new en("google-credentials-uid"),en.FIRST_PARTY=new en("first-party-uid"),en.MOCK_USER=new en("mock-user");/**
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
 */let ou="12.2.0";/**
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
 */const zs=new pm("@firebase/firestore");function yl(){return zs.logLevel}function zO(i){zs.setLogLevel(i)}function te(i,...e){if(zs.logLevel<=ke.DEBUG){const t=e.map(jy);zs.debug(`Firestore (${ou}): ${i}`,...t)}}function Nt(i,...e){if(zs.logLevel<=ke.ERROR){const t=e.map(jy);zs.error(`Firestore (${ou}): ${i}`,...t)}}function ni(i,...e){if(zs.logLevel<=ke.WARN){const t=e.map(jy);zs.warn(`Firestore (${ou}): ${i}`,...t)}}function jy(i){if(typeof i=="string")return i;try{/**
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
*/return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
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
 */function ce(i,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,n0(i,n,t)}function n0(i,e,t){let n=`FIRESTORE (${ou}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Nt(n),new Error(n)}function me(i,e,t,n){let a="Unexpected state";typeof t=="string"?a=t:n=t,i||n0(e,a,n)}function FO(i,e){i||ce(57014,e)}function le(i,e){return i}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends Sn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class hn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class r0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(en.UNAUTHENTICATED)))}shutdown(){}}class jO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class HO{constructor(e){this.t=e,this.currentUser=en.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){me(this.o===void 0,42304);let n=this.i;const a=m=>this.i!==n?(n=this.i,t(m)):Promise.resolve();let l=new hn;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new hn,e.enqueueRetryable((()=>a(this.currentUser)))};const c=()=>{const m=l;e.enqueueRetryable((async()=>{await m.promise,await a(this.currentUser)}))},f=m=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((m=>f(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?f(m):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new hn)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(me(typeof n.accessToken=="string",31837,{l:n}),new r0(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string",2055,{h:e}),new en(e)}}class GO{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=en.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class KO{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new GO(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(en.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class iA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QO{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,mt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){me(this.o===void 0,3512);const n=l=>{l.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,te("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>n(l)))};const a=l=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new iA(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(me(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new iA(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function YO(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<i;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class Hy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const a=YO(40);for(let l=0;l<a.length;++l)n.length<20&&a[l]<t&&(n+=e.charAt(a[l]%62))}return n}}function Re(i,e){return i<e?-1:i>e?1:0}function x_(i,e){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++){const a=i.charAt(n),l=e.charAt(n);if(a!==l)return g_(a)===g_(l)?Re(a,l):g_(a)?1:-1}return Re(i.length,e.length)}const $O=55296,WO=57343;function g_(i){const e=i.charCodeAt(0);return e>=$O&&e<=WO}function Ml(i,e,t){return i.length===e.length&&i.every(((n,a)=>t(n,e[a])))}function i0(i){return i+"\0"}/**
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
 */const sA="__name__";class qr{constructor(e,t,n){t===void 0?t=0:t>e.length&&ce(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&ce(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return qr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof qr?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let a=0;a<n;a++){const l=qr.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Re(e.length,t.length)}static compareSegments(e,t){const n=qr.isNumericId(e),a=qr.isNumericId(t);return n&&!a?-1:!n&&a?1:n&&a?qr.extractNumericId(e).compare(qr.extractNumericId(t)):x_(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return xs.fromString(e.substring(4,e.length-2))}}class Me extends qr{construct(e,t,n){return new Me(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Z(j.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((a=>a.length>0)))}return new Me(t)}static emptyPath(){return new Me([])}}const XO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends qr{construct(e,t,n){return new pt(e,t,n)}static isValidIdentifier(e){return XO.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===sA}static keyField(){return new pt([sA])}static fromServerFormat(e){const t=[];let n="",a=0;const l=()=>{if(n.length===0)throw new Z(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let c=!1;for(;a<e.length;){const f=e[a];if(f==="\\"){if(a+1===e.length)throw new Z(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[a+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new Z(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=m,a+=2}else f==="`"?(c=!c,a++):f!=="."||c?(n+=f,a++):(l(),a++)}if(l(),c)throw new Z(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(t)}static emptyPath(){return new pt([])}}/**
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
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(Me.fromString(e))}static fromName(e){return new oe(Me.fromString(e).popFirst(5))}static empty(){return new oe(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Me.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new Me(e.slice()))}}/**
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
 */function Gy(i,e,t){if(!t)throw new Z(j.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function s0(i,e,t,n){if(e===!0&&n===!0)throw new Z(j.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function aA(i){if(!oe.isDocumentKey(i))throw new Z(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function oA(i){if(oe.isDocumentKey(i))throw new Z(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function a0(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Rm(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ce(12329,{type:typeof i})}function je(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new Z(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Rm(i);throw new Z(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}function o0(i,e){if(e<=0)throw new Z(j.INVALID_ARGUMENT,`Function ${i}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Bt(i,e){const t={typeString:i};return e&&(t.value=e),t}function xh(i,e){if(!a0(i))throw new Z(j.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const a=e[n].typeString,l="value"in e[n]?{value:e[n].value}:void 0;if(!(n in i)){t=`JSON missing required field: '${n}'`;break}const c=i[n];if(a&&typeof c!==a){t=`JSON field '${n}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${n}' field to equal '${l.value}'`;break}}if(t)throw new Z(j.INVALID_ARGUMENT,t);return!0}/**
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
 */const lA=-62135596800,uA=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*uA);return new Ye(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Z(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Z(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<lA)throw new Z(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/uA}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(xh(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-lA;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:Bt("string",Ye._jsonSchemaVersion),seconds:Bt("number"),nanoseconds:Bt("number")};/**
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
 */class ye{static fromTimestamp(e){return new ye(e)}static min(){return new ye(new Ye(0,0))}static max(){return new ye(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ll=-1;class Wf{constructor(e,t,n,a){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=a}}function O_(i){return i.fields.find((e=>e.kind===2))}function za(i){return i.fields.filter((e=>e.kind!==2))}Wf.UNKNOWN_ID=-1;class Nf{constructor(e,t){this.fieldPath=e,this.kind=t}}class uh{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new uh(0,$n.min())}}function l0(i,e){const t=i.toTimestamp().seconds,n=i.toTimestamp().nanoseconds+1,a=ye.fromTimestamp(n===1e9?new Ye(t+1,0):new Ye(t,n));return new $n(a,oe.empty(),e)}function u0(i){return new $n(i.readTime,i.key,Ll)}class $n{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new $n(ye.min(),oe.empty(),Ll)}static max(){return new $n(ye.max(),oe.empty(),Ll)}}function Ky(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=oe.comparator(i.documentKey,e.documentKey),t!==0?t:Re(i.largestBatchId,e.largestBatchId))}/**
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
 */const c0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class h0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ws(i){if(i.code!==j.FAILED_PRECONDITION||i.message!==c0)throw i;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new U(((n,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(n,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(n,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof U?t:U.resolve(t)}catch(t){return U.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):U.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):U.reject(t)}static resolve(e){return new U(((t,n)=>{t(e)}))}static reject(e){return new U(((t,n)=>{n(e)}))}static waitFor(e){return new U(((t,n)=>{let a=0,l=0,c=!1;e.forEach((f=>{++a,f.next((()=>{++l,c&&l===a&&t()}),(m=>n(m)))})),c=!0,l===a&&t()}))}static or(e){let t=U.resolve(!1);for(const n of e)t=t.next((a=>a?U.resolve(a):n()));return t}static forEach(e,t){const n=[];return e.forEach(((a,l)=>{n.push(t.call(this,a,l))})),this.waitFor(n)}static mapArray(e,t){return new U(((n,a)=>{const l=e.length,c=new Array(l);let f=0;for(let m=0;m<l;m++){const g=m;t(e[g]).next((y=>{c[g]=y,++f,f===l&&n(c)}),(y=>a(y)))}}))}static doWhile(e,t){return new U(((n,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):n()};l()}))}}/**
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
 */const Gn="SimpleDb";class Cm{static open(e,t,n,a){try{return new Cm(t,e.transaction(a,n))}catch(l){throw new Qc(t,l)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new hn,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Qc(e,t.error)):this.S.resolve()},this.transaction.onerror=n=>{const a=Qy(n.target.error);this.S.reject(new Qc(e,a))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(te(Gn,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new ZO(t)}}class Xr{static delete(e){return te(Gn,"Removing database:",e),ja(_y().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!rh())return!1;if(Xr.F())return!0;const e=yt(),t=Xr.M(e),n=0<t&&t<10,a=d0(e),l=0<a&&a<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||l)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.N=n,this.B=null,Xr.M(yt())===12.2&&Nt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(te(Gn,"Opening database:",this.name),this.db=await new Promise(((t,n)=>{const a=indexedDB.open(this.name,this.version);a.onsuccess=l=>{const c=l.target.result;t(c)},a.onblocked=()=>{n(new Qc(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},a.onerror=l=>{const c=l.target.error;c.name==="VersionError"?n(new Z(j.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):c.name==="InvalidStateError"?n(new Z(j.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+c)):n(new Qc(e,c))},a.onupgradeneeded=l=>{te(Gn,'Database "'+this.name+'" requires upgrade from version:',l.oldVersion);const c=l.target.result;this.N.k(c,a.transaction,l.oldVersion,this.version).next((()=>{te(Gn,"Database upgrade to version "+this.version+" complete")}))}}))),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db}$(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,a){const l=t==="readonly";let c=0;for(;;){++c;try{this.db=await this.L(e);const f=Cm.open(this.db,e,l?"readonly":"readwrite",n),m=a(f).next((g=>(f.C(),g))).catch((g=>(f.abort(g),U.reject(g)))).toPromise();return m.catch((()=>{})),await f.D,m}catch(f){const m=f,g=m.name!=="FirebaseError"&&c<3;if(te(Gn,"Transaction failed with error:",m.message,"Retrying:",g),this.close(),!g)return Promise.reject(m)}}}close(){this.db&&this.db.close(),this.db=void 0}}function d0(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class JO{constructor(e){this.U=e,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(e){this.U=e}done(){this.K=!0}j(e){this.W=e}delete(){return ja(this.U.delete())}}class Qc extends Z{constructor(e,t){super(j.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Xs(i){return i.name==="IndexedDbTransactionError"}class ZO{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(te(Gn,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(te(Gn,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),ja(n)}add(e){return te(Gn,"ADD",this.store.name,e,e),ja(this.store.add(e))}get(e){return ja(this.store.get(e)).next((t=>(t===void 0&&(t=null),te(Gn,"GET",this.store.name,e,t),t)))}delete(e){return te(Gn,"DELETE",this.store.name,e),ja(this.store.delete(e))}count(){return te(Gn,"COUNT",this.store.name),ja(this.store.count())}J(e,t){const n=this.options(e,t),a=n.index?this.store.index(n.index):this.store;if(typeof a.getAll=="function"){const l=a.getAll(n.range);return new U(((c,f)=>{l.onerror=m=>{f(m.target.error)},l.onsuccess=m=>{c(m.target.result)}}))}{const l=this.cursor(n),c=[];return this.H(l,((f,m)=>{c.push(m)})).next((()=>c))}}Y(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new U(((a,l)=>{n.onerror=c=>{l(c.target.error)},n.onsuccess=c=>{a(c.target.result)}}))}Z(e,t){te(Gn,"DELETE ALL",this.store.name);const n=this.options(e,t);n.X=!1;const a=this.cursor(n);return this.H(a,((l,c,f)=>f.delete()))}ee(e,t){let n;t?n=e:(n={},t=e);const a=this.cursor(n);return this.H(a,t)}te(e){const t=this.cursor({});return new U(((n,a)=>{t.onerror=l=>{const c=Qy(l.target.error);a(c)},t.onsuccess=l=>{const c=l.target.result;c?e(c.primaryKey,c.value).next((f=>{f?c.continue():n()})):n()}}))}H(e,t){const n=[];return new U(((a,l)=>{e.onerror=c=>{l(c.target.error)},e.onsuccess=c=>{const f=c.target.result;if(!f)return void a();const m=new JO(f),g=t(f.primaryKey,f.value,m);if(g instanceof U){const y=g.catch((T=>(m.done(),U.reject(T))));n.push(y)}m.isDone?a():m.G===null?f.continue():f.continue(m.G)}})).next((()=>U.waitFor(n)))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.X?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function ja(i){return new U(((e,t)=>{i.onsuccess=n=>{const a=n.target.result;e(a)},i.onerror=n=>{const a=Qy(n.target.error);t(a)}}))}let cA=!1;function Qy(i){const e=Xr.M(yt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(i.message.indexOf(t)>=0){const n=new Z("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return cA||(cA=!0,setTimeout((()=>{throw n}),0)),n}}return i}const Yc="IndexBackfiller";class e2{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){te(Yc,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.ne.ie();te(Yc,`Documents written: ${t}`)}catch(t){Xs(t)?te(Yc,"Ignoring IndexedDB error during index backfill: ",t):await Ws(t)}await this.re(6e4)}))}}class t2{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.se(t,e)))}se(e,t){const n=new Set;let a=t,l=!0;return U.doWhile((()=>l===!0&&a>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((c=>{if(c!==null&&!n.has(c))return te(Yc,`Processing collection: ${c}`),this.oe(e,c,a).next((f=>{a-=f,n.add(c)}));l=!1})))).next((()=>t-a))}oe(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((a=>this.localStore.localDocuments.getNextDocuments(e,t,a,n).next((l=>{const c=l.changes;return this.localStore.indexManager.updateIndexEntries(e,c).next((()=>this._e(a,l))).next((f=>(te(Yc,`Updating offset: ${f}`),this.localStore.indexManager.updateCollectionGroup(e,t,f)))).next((()=>c.size))}))))}_e(e,t){let n=e;return t.changes.forEach(((a,l)=>{const c=u0(l);Ky(c,n)>0&&(n=c)})),new $n(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class xn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}xn.ce=-1;/**
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
 */const Os=-1;function Oh(i){return i==null}function ch(i){return i===0&&1/i==-1/0}function f0(i){return typeof i=="number"&&Number.isInteger(i)&&!ch(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const Xf="";function vn(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=hA(e)),e=n2(i.get(t),e);return hA(e)}function n2(i,e){let t=e;const n=i.length;for(let a=0;a<n;a++){const l=i.charAt(a);switch(l){case"\0":t+="";break;case Xf:t+="";break;default:t+=l}}return t}function hA(i){return i+Xf+""}function $r(i){const e=i.length;if(me(e>=2,64408,{path:i}),e===2)return me(i.charAt(0)===Xf&&i.charAt(1)==="",56145,{path:i}),Me.emptyPath();const t=e-2,n=[];let a="";for(let l=0;l<e;){const c=i.indexOf(Xf,l);switch((c<0||c>t)&&ce(50515,{path:i}),i.charAt(c+1)){case"":const f=i.substring(l,c);let m;a.length===0?m=f:(a+=f,m=a,a=""),n.push(m);break;case"":a+=i.substring(l,c),a+="\0";break;case"":a+=i.substring(l,c+1);break;default:ce(61167,{path:i})}l=c+2}return new Me(n)}/**
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
 */const Fa="remoteDocuments",kh="owner",dl="owner",hh="mutationQueues",r2="userId",yr="mutations",dA="batchId",$a="userMutationsIndex",fA=["userId","batchId"];/**
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
 */function Pf(i,e){return[i,vn(e)]}function m0(i,e,t){return[i,vn(e),t]}const i2={},Ul="documentMutations",Jf="remoteDocumentsV14",s2=["prefixPath","collectionGroup","readTime","documentId"],Vf="documentKeyIndex",a2=["prefixPath","collectionGroup","documentId"],p0="collectionGroupIndex",o2=["collectionGroup","readTime","prefixPath","documentId"],dh="remoteDocumentGlobal",k_="remoteDocumentGlobalKey",Bl="targets",g0="queryTargetsIndex",l2=["canonicalId","targetId"],zl="targetDocuments",u2=["targetId","path"],Yy="documentTargetsIndex",c2=["path","targetId"],Zf="targetGlobalKey",eo="targetGlobal",fh="collectionParents",h2=["collectionId","parent"],Fl="clientMetadata",d2="clientId",Dm="bundles",f2="bundleId",Nm="namedQueries",m2="name",$y="indexConfiguration",p2="indexId",M_="collectionGroupIndex",g2="collectionGroup",$c="indexState",_2=["indexId","uid"],_0="sequenceNumberIndex",y2=["uid","sequenceNumber"],Wc="indexEntries",v2=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],y0="documentKeyIndex",E2=["indexId","uid","orderedDocumentKey"],Pm="documentOverlays",T2=["userId","collectionPath","documentId"],L_="collectionPathOverlayIndex",w2=["userId","collectionPath","largestBatchId"],v0="collectionGroupOverlayIndex",I2=["userId","collectionGroup","largestBatchId"],Wy="globals",A2="name",E0=[hh,yr,Ul,Fa,Bl,kh,eo,zl,Fl,dh,fh,Dm,Nm],b2=[...E0,Pm],T0=[hh,yr,Ul,Jf,Bl,kh,eo,zl,Fl,dh,fh,Dm,Nm,Pm],w0=T0,Xy=[...w0,$y,$c,Wc],S2=Xy,I0=[...Xy,Wy],R2=I0;/**
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
 */class U_ extends h0{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function Kt(i,e){const t=le(i);return Xr.O(t.le,e)}/**
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
 */function mA(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Js(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function A0(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class lt{constructor(e,t){this.comparator=e,this.root=t||un.EMPTY}insert(e,t){return new lt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,un.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,un.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const a=this.comparator(e,n.key);if(a===0)return t+n.left.size;a<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ef(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ef(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ef(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ef(this.root,e,this.comparator,!0)}}class Ef{constructor(e,t,n,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?n(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class un{constructor(e,t,n,a,l){this.key=e,this.value=t,this.color=n??un.RED,this.left=a??un.EMPTY,this.right=l??un.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,a,l){return new un(e??this.key,t??this.value,n??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let a=this;const l=n(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,n),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,n)),a.fixUp()}removeMin(){if(this.left.isEmpty())return un.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return un.EMPTY;n=a.right.min(),a=a.copy(n.key,n.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,un.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,un.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ce(27949);return e+(this.isRed()?0:1)}}un.EMPTY=null,un.RED=!0,un.BLACK=!1;un.EMPTY=new class{constructor(){this.size=0}get key(){throw ce(57766)}get value(){throw ce(16141)}get color(){throw ce(16727)}get left(){throw ce(29726)}get right(){throw ce(36894)}copy(e,t,n,a,l){return this}insert(e,t,n){return new un(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ze{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const a=n.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new pA(this.data.getIterator())}getIteratorFrom(e){return new pA(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=n.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ze(this.comparator);return t.data=e,t}}class pA{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function fl(i){return i.hasNext()?i.getNext():void 0}/**
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
 */class On{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new On([])}unionWith(e){let t=new Ze(pt.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new On(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ml(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
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
 */class b0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function C2(){return typeof atob<"u"}/**
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
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new b0("Invalid base64 string: "+l):l}})(e);return new It(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l})(e);return new It(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let a=0;a<t.length;a++)n[a]=t.charCodeAt(a);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const D2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ui(i){if(me(!!i,39018),typeof i=="string"){let e=0;const t=D2.exec(i);if(me(!!t,46558,{timestamp:i}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const n=new Date(i);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ft(i.seconds),nanos:ft(i.nanos)}}function ft(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Bi(i){return typeof i=="string"?It.fromBase64String(i):It.fromUint8Array(i)}/**
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
 */const S0="server_timestamp",R0="__type__",C0="__previous_value__",D0="__local_write_time__";function Vm(i){var t,n;return((n=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[R0])==null?void 0:n.stringValue)===S0}function xm(i){const e=i.mapValue.fields[C0];return Vm(e)?xm(e):e}function mh(i){const e=Ui(i.mapValue.fields[D0].timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */class N2{constructor(e,t,n,a,l,c,f,m,g,y){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=f,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=y}}const em="(default)";class Fs{constructor(e,t){this.projectId=e,this.database=t||em}static empty(){return new Fs("","")}get isDefaultDatabase(){return this.database===em}isEqual(e){return e instanceof Fs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Jy="__type__",N0="__max__",Rs={mapValue:{fields:{__type__:{stringValue:N0}}}},Zy="__vector__",ql="value",xf={nullValue:"NULL_VALUE"};function qs(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Vm(i)?4:P0(i)?9007199254740991:Om(i)?10:11:ce(28295,{value:i})}function ri(i,e){if(i===e)return!0;const t=qs(i);if(t!==qs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return mh(i).isEqual(mh(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Ui(a.timestampValue),f=Ui(l.timestampValue);return c.seconds===f.seconds&&c.nanos===f.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(a,l){return Bi(a.bytesValue).isEqual(Bi(l.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(a,l){return ft(a.geoPointValue.latitude)===ft(l.geoPointValue.latitude)&&ft(a.geoPointValue.longitude)===ft(l.geoPointValue.longitude)})(i,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return ft(a.integerValue)===ft(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=ft(a.doubleValue),f=ft(l.doubleValue);return c===f?ch(c)===ch(f):isNaN(c)&&isNaN(f)}return!1})(i,e);case 9:return Ml(i.arrayValue.values||[],e.arrayValue.values||[],ri);case 10:case 11:return(function(a,l){const c=a.mapValue.fields||{},f=l.mapValue.fields||{};if(mA(c)!==mA(f))return!1;for(const m in c)if(c.hasOwnProperty(m)&&(f[m]===void 0||!ri(c[m],f[m])))return!1;return!0})(i,e);default:return ce(52216,{left:i})}}function ph(i,e){return(i.values||[]).find((t=>ri(t,e)))!==void 0}function js(i,e){if(i===e)return 0;const t=qs(i),n=qs(e);if(t!==n)return Re(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(i.booleanValue,e.booleanValue);case 2:return(function(l,c){const f=ft(l.integerValue||l.doubleValue),m=ft(c.integerValue||c.doubleValue);return f<m?-1:f>m?1:f===m?0:isNaN(f)?isNaN(m)?0:-1:1})(i,e);case 3:return gA(i.timestampValue,e.timestampValue);case 4:return gA(mh(i),mh(e));case 5:return x_(i.stringValue,e.stringValue);case 6:return(function(l,c){const f=Bi(l),m=Bi(c);return f.compareTo(m)})(i.bytesValue,e.bytesValue);case 7:return(function(l,c){const f=l.split("/"),m=c.split("/");for(let g=0;g<f.length&&g<m.length;g++){const y=Re(f[g],m[g]);if(y!==0)return y}return Re(f.length,m.length)})(i.referenceValue,e.referenceValue);case 8:return(function(l,c){const f=Re(ft(l.latitude),ft(c.latitude));return f!==0?f:Re(ft(l.longitude),ft(c.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return _A(i.arrayValue,e.arrayValue);case 10:return(function(l,c){var I,x,G,W;const f=l.fields||{},m=c.fields||{},g=(I=f[ql])==null?void 0:I.arrayValue,y=(x=m[ql])==null?void 0:x.arrayValue,T=Re(((G=g==null?void 0:g.values)==null?void 0:G.length)||0,((W=y==null?void 0:y.values)==null?void 0:W.length)||0);return T!==0?T:_A(g,y)})(i.mapValue,e.mapValue);case 11:return(function(l,c){if(l===Rs.mapValue&&c===Rs.mapValue)return 0;if(l===Rs.mapValue)return 1;if(c===Rs.mapValue)return-1;const f=l.fields||{},m=Object.keys(f),g=c.fields||{},y=Object.keys(g);m.sort(),y.sort();for(let T=0;T<m.length&&T<y.length;++T){const I=x_(m[T],y[T]);if(I!==0)return I;const x=js(f[m[T]],g[y[T]]);if(x!==0)return x}return Re(m.length,y.length)})(i.mapValue,e.mapValue);default:throw ce(23264,{he:t})}}function gA(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Re(i,e);const t=Ui(i),n=Ui(e),a=Re(t.seconds,n.seconds);return a!==0?a:Re(t.nanos,n.nanos)}function _A(i,e){const t=i.values||[],n=e.values||[];for(let a=0;a<t.length&&a<n.length;++a){const l=js(t[a],n[a]);if(l)return l}return Re(t.length,n.length)}function jl(i){return B_(i)}function B_(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const n=Ui(t);return`time(${n.seconds},${n.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Bi(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return oe.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let n="[",a=!0;for(const l of t.values||[])a?a=!1:n+=",",n+=B_(l);return n+"]"})(i.arrayValue):"mapValue"in i?(function(t){const n=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of n)l?l=!1:a+=",",a+=`${c}:${B_(t.fields[c])}`;return a+"}"})(i.mapValue):ce(61005,{value:i})}function Of(i){switch(qs(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=xm(i);return e?16+Of(e):16;case 5:return 2*i.stringValue.length;case 6:return Bi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((a,l)=>a+Of(l)),0)})(i.arrayValue);case 10:case 11:return(function(n){let a=0;return Js(n.fields,((l,c)=>{a+=l.length+Of(c)})),a})(i.mapValue);default:throw ce(13486,{value:i})}}function no(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function z_(i){return!!i&&"integerValue"in i}function gh(i){return!!i&&"arrayValue"in i}function yA(i){return!!i&&"nullValue"in i}function vA(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function kf(i){return!!i&&"mapValue"in i}function Om(i){var t,n;return((n=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[Jy])==null?void 0:n.stringValue)===Zy}function Xc(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return Js(i.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Xc(n))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Xc(i.arrayValue.values[t]);return e}return{...i}}function P0(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===N0}const V0={mapValue:{fields:{[Jy]:{stringValue:Zy},[ql]:{arrayValue:{}}}}};function P2(i){return"nullValue"in i?xf:"booleanValue"in i?{booleanValue:!1}:"integerValue"in i||"doubleValue"in i?{doubleValue:NaN}:"timestampValue"in i?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in i?{stringValue:""}:"bytesValue"in i?{bytesValue:""}:"referenceValue"in i?no(Fs.empty(),oe.empty()):"geoPointValue"in i?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in i?{arrayValue:{}}:"mapValue"in i?Om(i)?V0:{mapValue:{}}:ce(35942,{value:i})}function V2(i){return"nullValue"in i?{booleanValue:!1}:"booleanValue"in i?{doubleValue:NaN}:"integerValue"in i||"doubleValue"in i?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in i?{stringValue:""}:"stringValue"in i?{bytesValue:""}:"bytesValue"in i?no(Fs.empty(),oe.empty()):"referenceValue"in i?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in i?{arrayValue:{}}:"arrayValue"in i?V0:"mapValue"in i?Om(i)?{mapValue:{}}:Rs:ce(61959,{value:i})}function EA(i,e){const t=js(i.value,e.value);return t!==0?t:i.inclusive&&!e.inclusive?-1:!i.inclusive&&e.inclusive?1:0}function TA(i,e){const t=js(i.value,e.value);return t!==0?t:i.inclusive&&!e.inclusive?1:!i.inclusive&&e.inclusive?-1:0}/**
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
 */class cn{constructor(e){this.value=e}static empty(){return new cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!kf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xc(t)}setAll(e){let t=pt.emptyPath(),n={},a=[];e.forEach(((c,f)=>{if(!t.isImmediateParentOf(f)){const m=this.getFieldsMap(t);this.applyChanges(m,n,a),n={},a=[],t=f.popLast()}c?n[f.lastSegment()]=Xc(c):a.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,n,a)}delete(e){const t=this.field(e.popLast());kf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ri(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let a=t.mapValue.fields[e.get(n)];kf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,n){Js(t,((a,l)=>e[a]=l));for(const a of n)delete e[a]}clone(){return new cn(Xc(this.value))}}function x0(i){const e=[];return Js(i.fields,((t,n)=>{const a=new pt([t]);if(kf(n)){const l=x0(n.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)})),new On(e)}/**
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
 */class ct{constructor(e,t,n,a,l,c,f){this.key=e,this.documentType=t,this.version=n,this.readTime=a,this.createTime=l,this.data=c,this.documentState=f}static newInvalidDocument(e){return new ct(e,0,ye.min(),ye.min(),ye.min(),cn.empty(),0)}static newFoundDocument(e,t,n,a){return new ct(e,1,t,ye.min(),n,a,0)}static newNoDocument(e,t){return new ct(e,2,t,ye.min(),ye.min(),cn.empty(),0)}static newUnknownDocument(e,t){return new ct(e,3,t,ye.min(),ye.min(),cn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=cn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hs{constructor(e,t){this.position=e,this.inclusive=t}}function wA(i,e,t){let n=0;for(let a=0;a<i.position.length;a++){const l=e[a],c=i.position[a];if(l.field.isKeyField()?n=oe.comparator(oe.fromName(c.referenceValue),t.key):n=js(c,t.data.field(l.field)),l.dir==="desc"&&(n*=-1),n!==0)break}return n}function IA(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!ri(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class _h{constructor(e,t="asc"){this.field=e,this.dir=t}}function x2(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class O0{}class Ue extends O0{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new O2(e,t,n):t==="array-contains"?new L2(e,n):t==="in"?new z0(e,n):t==="not-in"?new U2(e,n):t==="array-contains-any"?new B2(e,n):new Ue(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new k2(e,n):new M2(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(js(t,this.value)):t!==null&&qs(this.value)===qs(t)&&this.matchesComparison(js(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Je extends O0{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Je(e,t)}matches(e){return Hl(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Hl(i){return i.op==="and"}function F_(i){return i.op==="or"}function ev(i){return k0(i)&&Hl(i)}function k0(i){for(const e of i.filters)if(e instanceof Je)return!1;return!0}function q_(i){if(i instanceof Ue)return i.field.canonicalString()+i.op.toString()+jl(i.value);if(ev(i))return i.filters.map((e=>q_(e))).join(",");{const e=i.filters.map((t=>q_(t))).join(",");return`${i.op}(${e})`}}function M0(i,e){return i instanceof Ue?(function(n,a){return a instanceof Ue&&n.op===a.op&&n.field.isEqual(a.field)&&ri(n.value,a.value)})(i,e):i instanceof Je?(function(n,a){return a instanceof Je&&n.op===a.op&&n.filters.length===a.filters.length?n.filters.reduce(((l,c,f)=>l&&M0(c,a.filters[f])),!0):!1})(i,e):void ce(19439)}function L0(i,e){const t=i.filters.concat(e);return Je.create(t,i.op)}function U0(i){return i instanceof Ue?(function(t){return`${t.field.canonicalString()} ${t.op} ${jl(t.value)}`})(i):i instanceof Je?(function(t){return t.op.toString()+" {"+t.getFilters().map(U0).join(" ,")+"}"})(i):"Filter"}class O2 extends Ue{constructor(e,t,n){super(e,t,n),this.key=oe.fromName(n.referenceValue)}matches(e){const t=oe.comparator(e.key,this.key);return this.matchesComparison(t)}}class k2 extends Ue{constructor(e,t){super(e,"in",t),this.keys=B0("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class M2 extends Ue{constructor(e,t){super(e,"not-in",t),this.keys=B0("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function B0(i,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((n=>oe.fromName(n.referenceValue)))}class L2 extends Ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return gh(t)&&ph(t.arrayValue,this.value)}}class z0 extends Ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ph(this.value.arrayValue,t)}}class U2 extends Ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(ph(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ph(this.value.arrayValue,t)}}class B2 extends Ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!gh(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>ph(this.value.arrayValue,n)))}}/**
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
 */class z2{constructor(e,t=null,n=[],a=[],l=null,c=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=a,this.limit=l,this.startAt=c,this.endAt=f,this.Te=null}}function j_(i,e=null,t=[],n=[],a=null,l=null,c=null){return new z2(i,e,t,n,a,l,c)}function ro(i){const e=le(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>q_(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(l){return l.field.canonicalString()+l.dir})(n))).join(","),Oh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>jl(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>jl(n))).join(",")),e.Te=t}return e.Te}function Mh(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!x2(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!M0(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!IA(i.startAt,e.startAt)&&IA(i.endAt,e.endAt)}function tm(i){return oe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}function nm(i,e){return i.filters.filter((t=>t instanceof Ue&&t.field.isEqual(e)))}function AA(i,e,t){let n=xf,a=!0;for(const l of nm(i,e)){let c=xf,f=!0;switch(l.op){case"<":case"<=":c=P2(l.value);break;case"==":case"in":case">=":c=l.value;break;case">":c=l.value,f=!1;break;case"!=":case"not-in":c=xf}EA({value:n,inclusive:a},{value:c,inclusive:f})<0&&(n=c,a=f)}if(t!==null){for(let l=0;l<i.orderBy.length;++l)if(i.orderBy[l].field.isEqual(e)){const c=t.position[l];EA({value:n,inclusive:a},{value:c,inclusive:t.inclusive})<0&&(n=c,a=t.inclusive);break}}return{value:n,inclusive:a}}function bA(i,e,t){let n=Rs,a=!0;for(const l of nm(i,e)){let c=Rs,f=!0;switch(l.op){case">=":case">":c=V2(l.value),f=!1;break;case"==":case"in":case"<=":c=l.value;break;case"<":c=l.value,f=!1;break;case"!=":case"not-in":c=Rs}TA({value:n,inclusive:a},{value:c,inclusive:f})>0&&(n=c,a=f)}if(t!==null){for(let l=0;l<i.orderBy.length;++l)if(i.orderBy[l].field.isEqual(e)){const c=t.position[l];TA({value:n,inclusive:a},{value:c,inclusive:t.inclusive})>0&&(n=c,a=t.inclusive);break}}return{value:n,inclusive:a}}/**
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
 */class qi{constructor(e,t=null,n=[],a=[],l=null,c="F",f=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=a,this.limit=l,this.limitType=c,this.startAt=f,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function F0(i,e,t,n,a,l,c,f){return new qi(i,e,t,n,a,l,c,f)}function lu(i){return new qi(i)}function SA(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function tv(i){return i.collectionGroup!==null}function Cl(i){const e=le(i);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let f=new Ze(pt.comparator);return c.filters.forEach((m=>{m.getFlattenedFilters().forEach((g=>{g.isInequality()&&(f=f.add(g.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new _h(l,n))})),t.has(pt.keyField().canonicalString())||e.Ie.push(new _h(pt.keyField(),n))}return e.Ie}function Rn(i){const e=le(i);return e.Ee||(e.Ee=F2(e,Cl(i))),e.Ee}function F2(i,e){if(i.limitType==="F")return j_(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new _h(a.field,l)}));const t=i.endAt?new Hs(i.endAt.position,i.endAt.inclusive):null,n=i.startAt?new Hs(i.startAt.position,i.startAt.inclusive):null;return j_(i.path,i.collectionGroup,e,i.filters,i.limit,t,n)}}function H_(i,e){const t=i.filters.concat([e]);return new qi(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function rm(i,e,t){return new qi(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Lh(i,e){return Mh(Rn(i),Rn(e))&&i.limitType===e.limitType}function q0(i){return`${ro(Rn(i))}|lt:${i.limitType}`}function vl(i){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((a=>U0(a))).join(", ")}]`),Oh(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((a=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(a))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((a=>jl(a))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((a=>jl(a))).join(",")),`Target(${n})`})(Rn(i))}; limitType=${i.limitType})`}function Uh(i,e){return e.isFoundDocument()&&(function(n,a){const l=a.key.path;return n.collectionGroup!==null?a.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(l):oe.isDocumentKey(n.path)?n.path.isEqual(l):n.path.isImmediateParentOf(l)})(i,e)&&(function(n,a){for(const l of Cl(n))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(i,e)&&(function(n,a){for(const l of n.filters)if(!l.matches(a))return!1;return!0})(i,e)&&(function(n,a){return!(n.startAt&&!(function(c,f,m){const g=wA(c,f,m);return c.inclusive?g<=0:g<0})(n.startAt,Cl(n),a)||n.endAt&&!(function(c,f,m){const g=wA(c,f,m);return c.inclusive?g>=0:g>0})(n.endAt,Cl(n),a))})(i,e)}function j0(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function H0(i){return(e,t)=>{let n=!1;for(const a of Cl(i)){const l=q2(a,e,t);if(l!==0)return l;n=n||a.field.isKeyField()}return 0}}function q2(i,e,t){const n=i.field.isKeyField()?oe.comparator(e.key,t.key):(function(l,c,f){const m=c.data.field(l),g=f.data.field(l);return m!==null&&g!==null?js(m,g):ce(42886)})(i.field,e,t);switch(i.dir){case"asc":return n;case"desc":return-1*n;default:return ce(19790,{direction:i.dir})}}/**
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
 */class ji{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[a,l]of n)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),a=this.inner[n];if(a===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let a=0;a<n.length;a++)if(this.equalsFn(n[a][0],e))return n.length===1?delete this.inner[t]:n.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Js(this.inner,((t,n)=>{for(const[a,l]of n)e(a,l)}))}isEmpty(){return A0(this.inner)}size(){return this.innerSize}}/**
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
 */const j2=new lt(oe.comparator);function kn(){return j2}const G0=new lt(oe.comparator);function Uc(...i){let e=G0;for(const t of i)e=e.insert(t.key,t);return e}function K0(i){let e=G0;return i.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Wr(){return Jc()}function Q0(){return Jc()}function Jc(){return new ji((i=>i.toString()),((i,e)=>i.isEqual(e)))}const H2=new lt(oe.comparator),G2=new Ze(oe.comparator);function Ce(...i){let e=G2;for(const t of i)e=e.add(t);return e}const K2=new Ze(Re);function nv(){return K2}/**
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
 */function rv(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ch(e)?"-0":e}}function Y0(i){return{integerValue:""+i}}function $0(i,e){return f0(e)?Y0(e):rv(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class km{constructor(){this._=void 0}}function Q2(i,e,t){return i instanceof Gl?(function(a,l){const c={fields:{[R0]:{stringValue:S0},[D0]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&Vm(l)&&(l=xm(l)),l&&(c.fields[C0]=l),{mapValue:c}})(t,e):i instanceof io?X0(i,e):i instanceof so?J0(i,e):(function(a,l){const c=W0(a,l),f=RA(c)+RA(a.Ae);return z_(c)&&z_(a.Ae)?Y0(f):rv(a.serializer,f)})(i,e)}function Y2(i,e,t){return i instanceof io?X0(i,e):i instanceof so?J0(i,e):t}function W0(i,e){return i instanceof Kl?(function(n){return z_(n)||(function(l){return!!l&&"doubleValue"in l})(n)})(e)?e:{integerValue:0}:null}class Gl extends km{}class io extends km{constructor(e){super(),this.elements=e}}function X0(i,e){const t=Z0(e);for(const n of i.elements)t.some((a=>ri(a,n)))||t.push(n);return{arrayValue:{values:t}}}class so extends km{constructor(e){super(),this.elements=e}}function J0(i,e){let t=Z0(e);for(const n of i.elements)t=t.filter((a=>!ri(a,n)));return{arrayValue:{values:t}}}class Kl extends km{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function RA(i){return ft(i.integerValue||i.doubleValue)}function Z0(i){return gh(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
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
 */class Bh{constructor(e,t){this.field=e,this.transform=t}}function $2(i,e){return i.field.isEqual(e.field)&&(function(n,a){return n instanceof io&&a instanceof io||n instanceof so&&a instanceof so?Ml(n.elements,a.elements,ri):n instanceof Kl&&a instanceof Kl?ri(n.Ae,a.Ae):n instanceof Gl&&a instanceof Gl})(i.transform,e.transform)}class W2{constructor(e,t){this.version=e,this.transformResults=t}}class gt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new gt}static exists(e){return new gt(void 0,e)}static updateTime(e){return new gt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Mf(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Mm{}function eR(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new cu(i.key,gt.none()):new uu(i.key,i.data,gt.none());{const t=i.data,n=cn.empty();let a=new Ze(pt.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?n.delete(l):n.set(l,c),a=a.add(l)}return new Hi(i.key,n,new On(a.toArray()),gt.none())}}function X2(i,e,t){i instanceof uu?(function(a,l,c){const f=a.value.clone(),m=DA(a.fieldTransforms,l,c.transformResults);f.setAll(m),l.convertToFoundDocument(c.version,f).setHasCommittedMutations()})(i,e,t):i instanceof Hi?(function(a,l,c){if(!Mf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const f=DA(a.fieldTransforms,l,c.transformResults),m=l.data;m.setAll(tR(a)),m.setAll(f),l.convertToFoundDocument(c.version,m).setHasCommittedMutations()})(i,e,t):(function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function Zc(i,e,t,n){return i instanceof uu?(function(l,c,f,m){if(!Mf(l.precondition,c))return f;const g=l.value.clone(),y=NA(l.fieldTransforms,m,c);return g.setAll(y),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null})(i,e,t,n):i instanceof Hi?(function(l,c,f,m){if(!Mf(l.precondition,c))return f;const g=NA(l.fieldTransforms,m,c),y=c.data;return y.setAll(tR(l)),y.setAll(g),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(i,e,t,n):(function(l,c,f){return Mf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):f})(i,e,t)}function J2(i,e){let t=null;for(const n of i.fieldTransforms){const a=e.data.field(n.field),l=W0(n.transform,a||null);l!=null&&(t===null&&(t=cn.empty()),t.set(n.field,l))}return t||null}function CA(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(n,a){return n===void 0&&a===void 0||!(!n||!a)&&Ml(n,a,((l,c)=>$2(l,c)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class uu extends Mm{constructor(e,t,n,a=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Hi extends Mm{constructor(e,t,n,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function tR(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=i.data.field(t);e.set(t,n)}})),e}function DA(i,e,t){const n=new Map;me(i.length===t.length,32656,{Re:t.length,Ve:i.length});for(let a=0;a<t.length;a++){const l=i[a],c=l.transform,f=e.data.field(l.field);n.set(l.field,Y2(c,f,t[a]))}return n}function NA(i,e,t){const n=new Map;for(const a of i){const l=a.transform,c=t.data.field(a.field);n.set(a.field,Q2(l,c,e))}return n}class cu extends Mm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iv extends Mm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class sv{constructor(e,t,n,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=a}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&X2(l,e,n[a])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Zc(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Zc(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Q0();return this.mutations.forEach((a=>{const l=e.get(a.key),c=l.overlayedDocument;let f=this.applyToLocalView(c,l.mutatedFields);f=t.has(a.key)?null:f;const m=eR(c,f);m!==null&&n.set(a.key,m),c.isValidDocument()||c.convertToNoDocument(ye.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ce())}isEqual(e){return this.batchId===e.batchId&&Ml(this.mutations,e.mutations,((t,n)=>CA(t,n)))&&Ml(this.baseMutations,e.baseMutations,((t,n)=>CA(t,n)))}}class av{constructor(e,t,n,a){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=a}static from(e,t,n){me(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let a=(function(){return H2})();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,n[c].version);return new av(e,t,n,a)}}/**
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
 */class ov{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Z2{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Lt,qe;function nR(i){switch(i){case j.OK:return ce(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return ce(15467,{code:i})}}function rR(i){if(i===void 0)return Nt("GRPC error has no .code"),j.UNKNOWN;switch(i){case Lt.OK:return j.OK;case Lt.CANCELLED:return j.CANCELLED;case Lt.UNKNOWN:return j.UNKNOWN;case Lt.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Lt.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Lt.INTERNAL:return j.INTERNAL;case Lt.UNAVAILABLE:return j.UNAVAILABLE;case Lt.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Lt.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Lt.NOT_FOUND:return j.NOT_FOUND;case Lt.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Lt.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Lt.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Lt.ABORTED:return j.ABORTED;case Lt.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Lt.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Lt.DATA_LOSS:return j.DATA_LOSS;default:return ce(39323,{code:i})}}(qe=Lt||(Lt={}))[qe.OK=0]="OK",qe[qe.CANCELLED=1]="CANCELLED",qe[qe.UNKNOWN=2]="UNKNOWN",qe[qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qe[qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qe[qe.NOT_FOUND=5]="NOT_FOUND",qe[qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",qe[qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",qe[qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",qe[qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qe[qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qe[qe.ABORTED=10]="ABORTED",qe[qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",qe[qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",qe[qe.INTERNAL=13]="INTERNAL",qe[qe.UNAVAILABLE=14]="UNAVAILABLE",qe[qe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function iR(){return new TextEncoder}/**
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
 */const ek=new xs([4294967295,4294967295],0);function PA(i){const e=iR().encode(i),t=new WS;return t.update(e),new Uint8Array(t.digest())}function VA(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new xs([t,n],0),new xs([a,l],0)]}class lv{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Bc(`Invalid padding: ${t}`);if(n<0)throw new Bc(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Bc(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Bc(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=xs.fromNumber(this.ge)}ye(e,t,n){let a=e.add(t.multiply(xs.fromNumber(n)));return a.compare(ek)===1&&(a=new xs([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=PA(e),[n,a]=VA(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(n,a,l);if(!this.we(c))return!1}return!0}static create(e,t,n){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new lv(l,a,t);return n.forEach((f=>c.insert(f))),c}insert(e){if(this.ge===0)return;const t=PA(e),[n,a]=VA(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(n,a,l);this.Se(c)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Bc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class zh{constructor(e,t,n,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const a=new Map;return a.set(e,Fh.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new zh(ye.min(),a,new lt(Re),kn(),Ce())}}class Fh{constructor(e,t,n,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Fh(n,t,Ce(),Ce(),Ce())}}/**
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
 */class Lf{constructor(e,t,n,a){this.be=e,this.removedTargetIds=t,this.key=n,this.De=a}}class sR{constructor(e,t){this.targetId=e,this.Ce=t}}class aR{constructor(e,t,n=It.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=a}}class xA{constructor(){this.ve=0,this.Fe=OA(),this.Me=It.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ce(),t=Ce(),n=Ce();return this.Fe.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:n=n.add(a);break;default:ce(38017,{changeType:l})}})),new Fh(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=OA()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,me(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class tk{constructor(e){this.Ge=e,this.ze=new Map,this.je=kn(),this.Je=Tf(),this.He=Tf(),this.Ye=new lt(Re)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:ce(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((n,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,n=e.Ce.count,a=this.ot(t);if(a){const l=a.target;if(tm(l))if(n===0){const c=new oe(l.path);this.et(t,c,ct.newNoDocument(c,ye.min()))}else me(n===1,20013,{expectedCount:n});else{const c=this._t(t);if(c!==n){const f=this.ut(e),m=f?this.ct(f,e,c):1;if(m!==0){this.it(t);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:a=0},hashCount:l=0}=t;let c,f;try{c=Bi(n).toUint8Array()}catch(m){if(m instanceof b0)return ni("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{f=new lv(c,a,l)}catch(m){return ni(m instanceof Bc?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return f.ge===0?null:f}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let a=0;return n.forEach((l=>{const c=this.Ge.ht(),f=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((l,c)=>{const f=this.ot(c);if(f){if(l.current&&tm(f.target)){const m=new oe(f.target.path);this.It(m).has(c)||this.Et(c,m)||this.et(c,m,ct.newNoDocument(m,e))}l.Be&&(t.set(c,l.ke()),l.qe())}}));let n=Ce();this.He.forEach(((l,c)=>{let f=!0;c.forEachWhile((m=>{const g=this.ot(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(n=n.add(l))})),this.je.forEach(((l,c)=>c.setReadTime(e)));const a=new zh(e,t,this.Ye,this.je,n);return this.je=kn(),this.Je=Tf(),this.He=Tf(),this.Ye=new lt(Re),a}Xe(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,t)?a.Qe(t,1):a.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new xA,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Ze(Re),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ze(Re),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||te("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new xA),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Tf(){return new lt(oe.comparator)}function OA(){return new lt(oe.comparator)}const nk={asc:"ASCENDING",desc:"DESCENDING"},rk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ik={and:"AND",or:"OR"};class sk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function G_(i,e){return i.useProto3Json||Oh(e)?e:{value:e}}function Ql(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function oR(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function ak(i,e){return Ql(i,e.toTimestamp())}function Pt(i){return me(!!i,49232),ye.fromTimestamp((function(t){const n=Ui(t);return new Ye(n.seconds,n.nanos)})(i))}function uv(i,e){return K_(i,e).canonicalString()}function K_(i,e){const t=(function(a){return new Me(["projects",a.projectId,"databases",a.database])})(i).child("documents");return e===void 0?t:t.child(e)}function lR(i){const e=Me.fromString(i);return me(yR(e),10190,{key:e.toString()}),e}function yh(i,e){return uv(i.databaseId,e.path)}function Jr(i,e){const t=lR(e);if(t.get(1)!==i.databaseId.projectId)throw new Z(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new Z(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new oe(hR(t))}function uR(i,e){return uv(i.databaseId,e)}function cR(i){const e=lR(i);return e.length===4?Me.emptyPath():hR(e)}function Q_(i){return new Me(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function hR(i){return me(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function kA(i,e,t){return{name:yh(i,e),fields:t.value.mapValue.fields}}function dR(i,e,t){const n=Jr(i,e.name),a=Pt(e.updateTime),l=e.createTime?Pt(e.createTime):ye.min(),c=new cn({mapValue:{fields:e.fields}}),f=ct.newFoundDocument(n,a,l,c);return t&&f.setHasCommittedMutations(),t?f.setHasCommittedMutations():f}function ok(i,e){return"found"in e?(function(n,a){me(!!a.found,43571),a.found.name,a.found.updateTime;const l=Jr(n,a.found.name),c=Pt(a.found.updateTime),f=a.found.createTime?Pt(a.found.createTime):ye.min(),m=new cn({mapValue:{fields:a.found.fields}});return ct.newFoundDocument(l,c,f,m)})(i,e):"missing"in e?(function(n,a){me(!!a.missing,3894),me(!!a.readTime,22933);const l=Jr(n,a.missing),c=Pt(a.readTime);return ct.newNoDocument(l,c)})(i,e):ce(7234,{result:e})}function lk(i,e){let t;if("targetChange"in e){e.targetChange;const n=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:ce(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,y){return g.useProto3Json?(me(y===void 0||typeof y=="string",58123),It.fromBase64String(y||"")):(me(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),It.fromUint8Array(y||new Uint8Array))})(i,e.targetChange.resumeToken),c=e.targetChange.cause,f=c&&(function(g){const y=g.code===void 0?j.UNKNOWN:rR(g.code);return new Z(y,g.message||"")})(c);t=new aR(n,a,l,f||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const a=Jr(i,n.document.name),l=Pt(n.document.updateTime),c=n.document.createTime?Pt(n.document.createTime):ye.min(),f=new cn({mapValue:{fields:n.document.fields}}),m=ct.newFoundDocument(a,l,c,f),g=n.targetIds||[],y=n.removedTargetIds||[];t=new Lf(g,y,m.key,m)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const a=Jr(i,n.document),l=n.readTime?Pt(n.readTime):ye.min(),c=ct.newNoDocument(a,l),f=n.removedTargetIds||[];t=new Lf([],f,c.key,c)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const a=Jr(i,n.document),l=n.removedTargetIds||[];t=new Lf([],l,a,null)}else{if(!("filter"in e))return ce(11601,{Rt:e});{e.filter;const n=e.filter;n.targetId;const{count:a=0,unchangedNames:l}=n,c=new Z2(a,l),f=n.targetId;t=new sR(f,c)}}return t}function vh(i,e){let t;if(e instanceof uu)t={update:kA(i,e.key,e.value)};else if(e instanceof cu)t={delete:yh(i,e.key)};else if(e instanceof Hi)t={update:kA(i,e.key,e.data),updateMask:mk(e.fieldMask)};else{if(!(e instanceof iv))return ce(16599,{Vt:e.type});t={verify:yh(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(l,c){const f=c.transform;if(f instanceof Gl)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof io)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof so)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Kl)return{fieldPath:c.field.canonicalString(),increment:f.Ae};throw ce(20930,{transform:c.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:ak(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ce(27497)})(i,e.precondition)),t}function Y_(i,e){const t=e.currentDocument?(function(l){return l.updateTime!==void 0?gt.updateTime(Pt(l.updateTime)):l.exists!==void 0?gt.exists(l.exists):gt.none()})(e.currentDocument):gt.none(),n=e.updateTransforms?e.updateTransforms.map((a=>(function(c,f){let m=null;if("setToServerValue"in f)me(f.setToServerValue==="REQUEST_TIME",16630,{proto:f}),m=new Gl;else if("appendMissingElements"in f){const y=f.appendMissingElements.values||[];m=new io(y)}else if("removeAllFromArray"in f){const y=f.removeAllFromArray.values||[];m=new so(y)}else"increment"in f?m=new Kl(c,f.increment):ce(16584,{proto:f});const g=pt.fromServerFormat(f.fieldPath);return new Bh(g,m)})(i,a))):[];if(e.update){e.update.name;const a=Jr(i,e.update.name),l=new cn({mapValue:{fields:e.update.fields}});if(e.updateMask){const c=(function(m){const g=m.fieldPaths||[];return new On(g.map((y=>pt.fromServerFormat(y))))})(e.updateMask);return new Hi(a,l,c,t,n)}return new uu(a,l,t,n)}if(e.delete){const a=Jr(i,e.delete);return new cu(a,t)}if(e.verify){const a=Jr(i,e.verify);return new iv(a,t)}return ce(1463,{proto:e})}function uk(i,e){return i&&i.length>0?(me(e!==void 0,14353),i.map((t=>(function(a,l){let c=a.updateTime?Pt(a.updateTime):Pt(l);return c.isEqual(ye.min())&&(c=Pt(l)),new W2(c,a.transformResults||[])})(t,e)))):[]}function fR(i,e){return{documents:[uR(i,e.path)]}}function mR(i,e){const t={structuredQuery:{}},n=e.path;let a;e.collectionGroup!==null?(a=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=uR(i,a);const l=(function(g){if(g.length!==0)return _R(Je.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(g){if(g.length!==0)return g.map((y=>(function(I){return{field:El(I.field),direction:hk(I.dir)}})(y)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const f=G_(i,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:t,parent:a}}function pR(i){let e=cR(i.parent);const t=i.structuredQuery,n=t.from?t.from.length:0;let a=null;if(n>0){me(n===1,65062);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=(function(T){const I=gR(T);return I instanceof Je&&ev(I)?I.getFilters():[I]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((I=>(function(G){return new _h(Tl(G.field),(function(Y){switch(Y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(G.direction))})(I)))})(t.orderBy));let f=null;t.limit&&(f=(function(T){let I;return I=typeof T=="object"?T.value:T,Oh(I)?null:I})(t.limit));let m=null;t.startAt&&(m=(function(T){const I=!!T.before,x=T.values||[];return new Hs(x,I)})(t.startAt));let g=null;return t.endAt&&(g=(function(T){const I=!T.before,x=T.values||[];return new Hs(x,I)})(t.endAt)),F0(e,a,c,l,f,"F",m,g)}function ck(i,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function gR(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Tl(t.unaryFilter.field);return Ue.create(n,"==",{doubleValue:NaN});case"IS_NULL":const a=Tl(t.unaryFilter.field);return Ue.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Tl(t.unaryFilter.field);return Ue.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Tl(t.unaryFilter.field);return Ue.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ce(61313);default:return ce(60726)}})(i):i.fieldFilter!==void 0?(function(t){return Ue.create(Tl(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ce(58110);default:return ce(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return Je.create(t.compositeFilter.filters.map((n=>gR(n))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return ce(1026)}})(t.compositeFilter.op))})(i):ce(30097,{filter:i})}function hk(i){return nk[i]}function dk(i){return rk[i]}function fk(i){return ik[i]}function El(i){return{fieldPath:i.canonicalString()}}function Tl(i){return pt.fromServerFormat(i.fieldPath)}function _R(i){return i instanceof Ue?(function(t){if(t.op==="=="){if(vA(t.value))return{unaryFilter:{field:El(t.field),op:"IS_NAN"}};if(yA(t.value))return{unaryFilter:{field:El(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(vA(t.value))return{unaryFilter:{field:El(t.field),op:"IS_NOT_NAN"}};if(yA(t.value))return{unaryFilter:{field:El(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:El(t.field),op:dk(t.op),value:t.value}}})(i):i instanceof Je?(function(t){const n=t.getFilters().map((a=>_R(a)));return n.length===1?n[0]:{compositeFilter:{op:fk(t.op),filters:n}}})(i):ce(54877,{filter:i})}function mk(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function yR(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class Vi{constructor(e,t,n,a,l=ye.min(),c=ye.min(),f=It.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=f,this.expectedCount=m}withSequenceNumber(e){return new Vi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Vi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class vR{constructor(e){this.yt=e}}function pk(i,e){let t;if(e.document)t=dR(i.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=oe.fromSegments(e.noDocument.path),a=oo(e.noDocument.readTime);t=ct.newNoDocument(n,a),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return ce(56709);{const n=oe.fromSegments(e.unknownDocument.path),a=oo(e.unknownDocument.version);t=ct.newUnknownDocument(n,a)}}return e.readTime&&t.setReadTime((function(a){const l=new Ye(a[0],a[1]);return ye.fromTimestamp(l)})(e.readTime)),t}function MA(i,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:im(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=(function(l,c){return{name:yh(l,c.key),fields:c.data.value.mapValue.fields,updateTime:Ql(l,c.version.toTimestamp()),createTime:Ql(l,c.createTime.toTimestamp())}})(i.yt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:ao(e.version)};else{if(!e.isUnknownDocument())return ce(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:ao(e.version)}}return n}function im(i){const e=i.toTimestamp();return[e.seconds,e.nanoseconds]}function ao(i){const e=i.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function oo(i){const e=new Ye(i.seconds,i.nanoseconds);return ye.fromTimestamp(e)}function Ha(i,e){const t=(e.baseMutations||[]).map((l=>Y_(i.yt,l)));for(let l=0;l<e.mutations.length-1;++l){const c=e.mutations[l];if(l+1<e.mutations.length&&e.mutations[l+1].transform!==void 0){const f=e.mutations[l+1];c.updateTransforms=f.transform.fieldTransforms,e.mutations.splice(l+1,1),++l}}const n=e.mutations.map((l=>Y_(i.yt,l))),a=Ye.fromMillis(e.localWriteTimeMs);return new sv(e.batchId,a,t,n)}function zc(i){const e=oo(i.readTime),t=i.lastLimboFreeSnapshotVersion!==void 0?oo(i.lastLimboFreeSnapshotVersion):ye.min();let n;return n=(function(l){return l.documents!==void 0})(i.query)?(function(l){const c=l.documents.length;return me(c===1,1966,{count:c}),Rn(lu(cR(l.documents[0])))})(i.query):(function(l){return Rn(pR(l))})(i.query),new Vi(n,i.targetId,"TargetPurposeListen",i.lastListenSequenceNumber,e,t,It.fromBase64String(i.resumeToken))}function ER(i,e){const t=ao(e.snapshotVersion),n=ao(e.lastLimboFreeSnapshotVersion);let a;a=tm(e.target)?fR(i.yt,e.target):mR(i.yt,e.target).ft;const l=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ro(e.target),readTime:t,resumeToken:l,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:a}}function cv(i){const e=pR({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?rm(e,e.limit,"L"):e}function __(i,e){return new ov(e.largestBatchId,Y_(i.yt,e.overlayMutation))}function LA(i,e){const t=e.path.lastSegment();return[i,vn(e.path.popLast()),t]}function UA(i,e,t,n){return{indexId:i,uid:e,sequenceNumber:t,readTime:ao(n.readTime),documentKey:vn(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class gk{getBundleMetadata(e,t){return BA(e).get(t).next((n=>{if(n)return(function(l){return{id:l.bundleId,createTime:oo(l.createTime),version:l.version}})(n)}))}saveBundleMetadata(e,t){return BA(e).put((function(a){return{bundleId:a.id,createTime:ao(Pt(a.createTime)),version:a.version}})(t))}getNamedQuery(e,t){return zA(e).get(t).next((n=>{if(n)return(function(l){return{name:l.name,query:cv(l.bundledQuery),readTime:oo(l.readTime)}})(n)}))}saveNamedQuery(e,t){return zA(e).put((function(a){return{name:a.name,readTime:ao(Pt(a.readTime)),bundledQuery:a.bundledQuery}})(t))}}function BA(i){return Kt(i,Dm)}function zA(i){return Kt(i,Nm)}/**
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
 */class Lm{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const n=t.uid||"";return new Lm(e,n)}getOverlay(e,t){return Cc(e).get(LA(this.userId,t)).next((n=>n?__(this.serializer,n):null))}getOverlays(e,t){const n=Wr();return U.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&n.set(a,l)})))).next((()=>n))}saveOverlays(e,t,n){const a=[];return n.forEach(((l,c)=>{const f=new ov(t,c);a.push(this.St(e,f))})),U.waitFor(a)}removeOverlaysForBatchId(e,t,n){const a=new Set;t.forEach((c=>a.add(vn(c.getCollectionPath()))));const l=[];return a.forEach((c=>{const f=IDBKeyRange.bound([this.userId,c,n],[this.userId,c,n+1],!1,!0);l.push(Cc(e).Z(L_,f))})),U.waitFor(l)}getOverlaysForCollection(e,t,n){const a=Wr(),l=vn(t),c=IDBKeyRange.bound([this.userId,l,n],[this.userId,l,Number.POSITIVE_INFINITY],!0);return Cc(e).J(L_,c).next((f=>{for(const m of f){const g=__(this.serializer,m);a.set(g.getKey(),g)}return a}))}getOverlaysForCollectionGroup(e,t,n,a){const l=Wr();let c;const f=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Cc(e).ee({index:v0,range:f},((m,g,y)=>{const T=__(this.serializer,g);l.size()<a||T.largestBatchId===c?(l.set(T.getKey(),T),c=T.largestBatchId):y.done()})).next((()=>l))}St(e,t){return Cc(e).put((function(a,l,c){const[f,m,g]=LA(l,c.mutation.key);return{userId:l,collectionPath:m,documentId:g,collectionGroup:c.mutation.key.getCollectionGroup(),largestBatchId:c.largestBatchId,overlayMutation:vh(a.yt,c.mutation)}})(this.serializer,this.userId,t))}}function Cc(i){return Kt(i,Pm)}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class _k{bt(e){return Kt(e,Wy)}getSessionToken(e){return this.bt(e).get("sessionToken").next((t=>{const n=t==null?void 0:t.value;return n?It.fromUint8Array(n):It.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Ga{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(ft(e.integerValue));else if("doubleValue"in e){const n=ft(e.doubleValue);isNaN(n)?this.Ft(t,13):(this.Ft(t,15),ch(n)?t.Mt(0):t.Mt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ft(t,20),typeof n=="string"&&(n=Ui(n)),t.xt(`${n.seconds||""}`),t.Mt(n.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(Bi(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ft(t,45),t.Mt(n.latitude||0),t.Mt(n.longitude||0)}else"mapValue"in e?P0(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):Om(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Qt(e.arrayValue,t),this.Nt(t)):ce(19022,{$t:e})}Ot(e,t){this.Ft(t,25),this.Ut(e,t)}Ut(e,t){t.xt(e)}qt(e,t){const n=e.fields||{};this.Ft(t,55);for(const a of Object.keys(n))this.Ot(a,t),this.Ct(n[a],t)}kt(e,t){var c,f;const n=e.fields||{};this.Ft(t,53);const a=ql,l=((f=(c=n[a].arrayValue)==null?void 0:c.values)==null?void 0:f.length)||0;this.Ft(t,15),t.Mt(ft(l)),this.Ot(a,t),this.Ct(n[a],t)}Qt(e,t){const n=e.values||[];this.Ft(t,50);for(const a of n)this.Ct(a,t)}Lt(e,t){this.Ft(t,37),oe.fromName(e).path.forEach((n=>{this.Ft(t,60),this.Ut(n,t)}))}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}Ga.Kt=new Ga;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=255;function yk(i){if(i===0)return 8;let e=0;return i>>4||(e+=4,i<<=4),i>>6||(e+=2,i<<=2),i>>7||(e+=1),e}function FA(i){const e=64-(function(n){let a=0;for(let l=0;l<8;++l){const c=yk(255&n[l]);if(a+=c,c!==8)break}return a})(i);return Math.ceil(e/8)}class vk{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Gt(n.value),n=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Jt(n.value),n=t.next();this.Ht()}Yt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Gt(n);else if(n<2048)this.Gt(960|n>>>6),this.Gt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|n>>>12),this.Gt(128|63&n>>>6),this.Gt(128|63&n);else{const a=t.codePointAt(0);this.Gt(240|a>>>18),this.Gt(128|63&a>>>12),this.Gt(128|63&a>>>6),this.Gt(128|63&a)}}this.zt()}Zt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const a=t.codePointAt(0);this.Jt(240|a>>>18),this.Jt(128|63&a>>>12),this.Jt(128|63&a>>>6),this.Jt(128|63&a)}}this.Ht()}Xt(e){const t=this.en(e),n=FA(t);this.tn(1+n),this.buffer[this.position++]=255&n;for(let a=t.length-n;a<t.length;++a)this.buffer[this.position++]=255&t[a]}nn(e){const t=this.en(e),n=FA(t);this.tn(1+n),this.buffer[this.position++]=~(255&n);for(let a=t.length-n;a<t.length;++a)this.buffer[this.position++]=~(255&t[a])}rn(){this.sn(ml),this.sn(255)}_n(){this.an(ml),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=(function(l){const c=new DataView(new ArrayBuffer(8));return c.setFloat64(0,l,!1),new Uint8Array(c.buffer)})(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let a=1;a<t.length;++a)t[a]^=n?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===ml?(this.sn(ml),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===ml?(this.an(ml),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const a=new Uint8Array(n);a.set(this.buffer),this.buffer=a}}class Ek{constructor(e){this.cn=e}Bt(e){this.cn.Wt(e)}xt(e){this.cn.Yt(e)}Mt(e){this.cn.Xt(e)}vt(){this.cn.rn()}}class Tk{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class Dc{constructor(){this.cn=new vk,this.ln=new Ek(this.cn),this.hn=new Tk(this.cn)}seed(e){this.cn.seed(e)}Pn(e){return e===0?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class Ka{constructor(e,t,n,a){this.Tn=e,this.In=t,this.En=n,this.dn=a}An(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.dn,0),t!==e?n.set([0],this.dn.length):++n[n.length-1],new Ka(this.Tn,this.In,this.En,n)}Rn(e,t,n){return{indexId:this.Tn,uid:e,arrayValue:Uf(this.En),directionalValue:Uf(this.dn),orderedDocumentKey:Uf(t),documentKey:n.path.toArray()}}Vn(e,t,n){const a=this.Rn(e,t,n);return[a.indexId,a.uid,a.arrayValue,a.directionalValue,a.orderedDocumentKey,a.documentKey]}}function ws(i,e){let t=i.Tn-e.Tn;return t!==0?t:(t=qA(i.En,e.En),t!==0?t:(t=qA(i.dn,e.dn),t!==0?t:oe.comparator(i.In,e.In)))}function qA(i,e){for(let t=0;t<i.length&&t<e.length;++t){const n=i[t]-e[t];if(n!==0)return n}return i.length-e.length}function Uf(i){return qb()?(function(t){let n="";for(let a=0;a<t.length;a++)n+=String.fromCharCode(t[a]);return n})(i):i}function jA(i){return typeof i!="string"?i:(function(t){const n=new Uint8Array(t.length);for(let a=0;a<t.length;a++)n[a]=t.charCodeAt(a);return n})(i)}class HA{constructor(e){this.mn=new Ze(((t,n)=>pt.comparator(t.field,n.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.fn=e.orderBy,this.gn=[];for(const t of e.filters){const n=t;n.isInequality()?this.mn=this.mn.add(n):this.gn.push(n)}}get pn(){return this.mn.size>1}yn(e){if(me(e.collectionGroup===this.collectionId,49279),this.pn)return!1;const t=O_(e);if(t!==void 0&&!this.wn(t))return!1;const n=za(e);let a=new Set,l=0,c=0;for(;l<n.length&&this.wn(n[l]);++l)a=a.add(n[l].fieldPath.canonicalString());if(l===n.length)return!0;if(this.mn.size>0){const f=this.mn.getIterator().getNext();if(!a.has(f.field.canonicalString())){const m=n[l];if(!this.Sn(f,m)||!this.bn(this.fn[c++],m))return!1}++l}for(;l<n.length;++l){const f=n[l];if(c>=this.fn.length||!this.bn(this.fn[c++],f))return!1}return!0}Dn(){if(this.pn)return null;let e=new Ze(pt.comparator);const t=[];for(const n of this.gn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new Nf(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Nf(n.field,0))}for(const n of this.fn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Nf(n.field,n.dir==="asc"?0:1)));return new Wf(Wf.UNKNOWN_ID,this.collectionId,t,uh.empty())}wn(e){for(const t of this.gn)if(this.Sn(t,e))return!0;return!1}Sn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}bn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function TR(i){var t,n;if(me(i instanceof Ue||i instanceof Je,20012),i instanceof Ue){if(i instanceof z0){const a=((n=(t=i.value.arrayValue)==null?void 0:t.values)==null?void 0:n.map((l=>Ue.create(i.field,"==",l))))||[];return Je.create(a,"or")}return i}const e=i.filters.map((a=>TR(a)));return Je.create(e,i.op)}function wk(i){if(i.getFilters().length===0)return[];const e=X_(TR(i));return me(wR(e),7391),$_(e)||W_(e)?[e]:e.getFilters()}function $_(i){return i instanceof Ue}function W_(i){return i instanceof Je&&ev(i)}function wR(i){return $_(i)||W_(i)||(function(t){if(t instanceof Je&&F_(t)){for(const n of t.getFilters())if(!$_(n)&&!W_(n))return!1;return!0}return!1})(i)}function X_(i){if(me(i instanceof Ue||i instanceof Je,34018),i instanceof Ue)return i;if(i.filters.length===1)return X_(i.filters[0]);const e=i.filters.map((n=>X_(n)));let t=Je.create(e,i.op);return t=sm(t),wR(t)?t:(me(t instanceof Je,64498),me(Hl(t),40251),me(t.filters.length>1,57927),t.filters.reduce(((n,a)=>hv(n,a))))}function hv(i,e){let t;return me(i instanceof Ue||i instanceof Je,38388),me(e instanceof Ue||e instanceof Je,25473),t=i instanceof Ue?e instanceof Ue?(function(a,l){return Je.create([a,l],"and")})(i,e):GA(i,e):e instanceof Ue?GA(e,i):(function(a,l){if(me(a.filters.length>0&&l.filters.length>0,48005),Hl(a)&&Hl(l))return L0(a,l.getFilters());const c=F_(a)?a:l,f=F_(a)?l:a,m=c.filters.map((g=>hv(g,f)));return Je.create(m,"or")})(i,e),sm(t)}function GA(i,e){if(Hl(e))return L0(e,i.getFilters());{const t=e.filters.map((n=>hv(i,n)));return Je.create(t,"or")}}function sm(i){if(me(i instanceof Ue||i instanceof Je,11850),i instanceof Ue)return i;const e=i.getFilters();if(e.length===1)return sm(e[0]);if(k0(i))return i;const t=e.map((a=>sm(a))),n=[];return t.forEach((a=>{a instanceof Ue?n.push(a):a instanceof Je&&(a.op===i.op?n.push(...a.filters):n.push(a))})),n.length===1?n[0]:Je.create(n,i.op)}/**
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
 */class Ik{constructor(){this.Cn=new dv}addToCollectionParentIndex(e,t){return this.Cn.add(t),U.resolve()}getCollectionParents(e,t){return U.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return U.resolve()}deleteFieldIndex(e,t){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,t){return U.resolve()}getDocumentsMatchingTarget(e,t){return U.resolve(null)}getIndexType(e,t){return U.resolve(0)}getFieldIndexes(e,t){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,t){return U.resolve($n.min())}getMinOffsetFromCollectionGroup(e,t){return U.resolve($n.min())}updateCollectionGroup(e,t,n){return U.resolve()}updateIndexEntries(e,t){return U.resolve()}}class dv{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),a=this.index[t]||new Ze(Me.comparator),l=!a.has(n);return this.index[t]=a.add(n),l}has(e){const t=e.lastSegment(),n=e.popLast(),a=this.index[t];return a&&a.has(n)}getEntries(e){return(this.index[e]||new Ze(Me.comparator)).toArray()}}/**
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
 */const KA="IndexedDbIndexManager",wf=new Uint8Array(0);class Ak{constructor(e,t){this.databaseId=t,this.vn=new dv,this.Fn=new ji((n=>ro(n)),((n,a)=>Mh(n,a))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const n=t.lastSegment(),a=t.popLast();e.addOnCommittedListener((()=>{this.vn.add(t)}));const l={collectionId:n,parent:vn(a)};return QA(e).put(l)}return U.resolve()}getCollectionParents(e,t){const n=[],a=IDBKeyRange.bound([t,""],[i0(t),""],!1,!0);return QA(e).J(a).next((l=>{for(const c of l){if(c.collectionId!==t)break;n.push($r(c.parent))}return n}))}addFieldIndex(e,t){const n=Nc(e),a=(function(f){return{indexId:f.indexId,collectionGroup:f.collectionGroup,fields:f.fields.map((m=>[m.fieldPath.canonicalString(),m.kind]))}})(t);delete a.indexId;const l=n.add(a);if(t.indexState){const c=gl(e);return l.next((f=>{c.put(UA(f,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return l.next()}deleteFieldIndex(e,t){const n=Nc(e),a=gl(e),l=pl(e);return n.delete(t.indexId).next((()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>l.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=Nc(e),n=pl(e),a=gl(e);return t.Z().next((()=>n.Z())).next((()=>a.Z()))}createTargetIndexes(e,t){return U.forEach(this.Mn(t),(n=>this.getIndexType(e,n).next((a=>{if(a===0||a===1){const l=new HA(n).Dn();if(l!=null)return this.addFieldIndex(e,l)}}))))}getDocumentsMatchingTarget(e,t){const n=pl(e);let a=!0;const l=new Map;return U.forEach(this.Mn(t),(c=>this.xn(e,c).next((f=>{a&&(a=!!f),l.set(c,f)})))).next((()=>{if(a){let c=Ce();const f=[];return U.forEach(l,((m,g)=>{te(KA,`Using index ${(function(ne){return`id=${ne.indexId}|cg=${ne.collectionGroup}|f=${ne.fields.map((_e=>`${_e.fieldPath}:${_e.kind}`)).join(",")}`})(m)} to execute ${ro(t)}`);const y=(function(ne,_e){const he=O_(_e);if(he===void 0)return null;for(const Te of nm(ne,he.fieldPath))switch(Te.op){case"array-contains-any":return Te.value.arrayValue.values||[];case"array-contains":return[Te.value]}return null})(g,m),T=(function(ne,_e){const he=new Map;for(const Te of za(_e))for(const D of nm(ne,Te.fieldPath))switch(D.op){case"==":case"in":he.set(Te.fieldPath.canonicalString(),D.value);break;case"not-in":case"!=":return he.set(Te.fieldPath.canonicalString(),D.value),Array.from(he.values())}return null})(g,m),I=(function(ne,_e){const he=[];let Te=!0;for(const D of za(_e)){const b=D.kind===0?AA(ne,D.fieldPath,ne.startAt):bA(ne,D.fieldPath,ne.startAt);he.push(b.value),Te&&(Te=b.inclusive)}return new Hs(he,Te)})(g,m),x=(function(ne,_e){const he=[];let Te=!0;for(const D of za(_e)){const b=D.kind===0?bA(ne,D.fieldPath,ne.endAt):AA(ne,D.fieldPath,ne.endAt);he.push(b.value),Te&&(Te=b.inclusive)}return new Hs(he,Te)})(g,m),G=this.On(m,g,I),W=this.On(m,g,x),Y=this.Nn(m,g,T),ge=this.Bn(m.indexId,y,G,I.inclusive,W,x.inclusive,Y);return U.forEach(ge,(de=>n.Y(de,t.limit).next((ne=>{ne.forEach((_e=>{const he=oe.fromSegments(_e.documentKey);c.has(he)||(c=c.add(he),f.push(he))}))}))))})).next((()=>f))}return U.resolve(null)}))}Mn(e){let t=this.Fn.get(e);return t||(e.filters.length===0?t=[e]:t=wk(Je.create(e.filters,"and")).map((n=>j_(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt))),this.Fn.set(e,t),t)}Bn(e,t,n,a,l,c,f){const m=(t!=null?t.length:1)*Math.max(n.length,l.length),g=m/(t!=null?t.length:1),y=[];for(let T=0;T<m;++T){const I=t?this.Ln(t[T/g]):wf,x=this.kn(e,I,n[T%g],a),G=this.qn(e,I,l[T%g],c),W=f.map((Y=>this.kn(e,I,Y,!0)));y.push(...this.createRange(x,G,W))}return y}kn(e,t,n,a){const l=new Ka(e,oe.empty(),t,n);return a?l:l.An()}qn(e,t,n,a){const l=new Ka(e,oe.empty(),t,n);return a?l.An():l}xn(e,t){const n=new HA(t),a=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,a).next((l=>{let c=null;for(const f of l)n.yn(f)&&(!c||f.fields.length>c.fields.length)&&(c=f);return c}))}getIndexType(e,t){let n=2;const a=this.Mn(t);return U.forEach(a,(l=>this.xn(e,l).next((c=>{c?n!==0&&c.fields.length<(function(m){let g=new Ze(pt.comparator),y=!1;for(const T of m.filters)for(const I of T.getFlattenedFilters())I.field.isKeyField()||(I.op==="array-contains"||I.op==="array-contains-any"?y=!0:g=g.add(I.field));for(const T of m.orderBy)T.field.isKeyField()||(g=g.add(T.field));return g.size+(y?1:0)})(l)&&(n=1):n=0})))).next((()=>(function(c){return c.limit!==null})(t)&&a.length>1&&n===2?1:n))}Qn(e,t){const n=new Dc;for(const a of za(e)){const l=t.data.field(a.fieldPath);if(l==null)return null;const c=n.Pn(a.kind);Ga.Kt.Dt(l,c)}return n.un()}Ln(e){const t=new Dc;return Ga.Kt.Dt(e,t.Pn(0)),t.un()}$n(e,t){const n=new Dc;return Ga.Kt.Dt(no(this.databaseId,t),n.Pn((function(l){const c=za(l);return c.length===0?0:c[c.length-1].kind})(e))),n.un()}Nn(e,t,n){if(n===null)return[];let a=[];a.push(new Dc);let l=0;for(const c of za(e)){const f=n[l++];for(const m of a)if(this.Un(t,c.fieldPath)&&gh(f))a=this.Kn(a,c,f);else{const g=m.Pn(c.kind);Ga.Kt.Dt(f,g)}}return this.Wn(a)}On(e,t,n){return this.Nn(e,t,n.position)}Wn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].un();return t}Kn(e,t,n){const a=[...e],l=[];for(const c of n.arrayValue.values||[])for(const f of a){const m=new Dc;m.seed(f.un()),Ga.Kt.Dt(c,m.Pn(t.kind)),l.push(m)}return l}Un(e,t){return!!e.filters.find((n=>n instanceof Ue&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in")))}getFieldIndexes(e,t){const n=Nc(e),a=gl(e);return(t?n.J(M_,IDBKeyRange.bound(t,t)):n.J()).next((l=>{const c=[];return U.forEach(l,(f=>a.get([f.indexId,this.uid]).next((m=>{c.push((function(y,T){const I=T?new uh(T.sequenceNumber,new $n(oo(T.readTime),new oe($r(T.documentKey)),T.largestBatchId)):uh.empty(),x=y.fields.map((([G,W])=>new Nf(pt.fromServerFormat(G),W)));return new Wf(y.indexId,y.collectionGroup,x,I)})(f,m))})))).next((()=>c))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((n,a)=>{const l=n.indexState.sequenceNumber-a.indexState.sequenceNumber;return l!==0?l:Re(n.collectionGroup,a.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,n){const a=Nc(e),l=gl(e);return this.Gn(e).next((c=>a.J(M_,IDBKeyRange.bound(t,t)).next((f=>U.forEach(f,(m=>l.put(UA(m.indexId,this.uid,c,n))))))))}updateIndexEntries(e,t){const n=new Map;return U.forEach(t,((a,l)=>{const c=n.get(a.collectionGroup);return(c?U.resolve(c):this.getFieldIndexes(e,a.collectionGroup)).next((f=>(n.set(a.collectionGroup,f),U.forEach(f,(m=>this.zn(e,a,m).next((g=>{const y=this.jn(l,m);return g.isEqual(y)?U.resolve():this.Jn(e,l,m,g,y)})))))))}))}Hn(e,t,n,a){return pl(e).put(a.Rn(this.uid,this.$n(n,t.key),t.key))}Yn(e,t,n,a){return pl(e).delete(a.Vn(this.uid,this.$n(n,t.key),t.key))}zn(e,t,n){const a=pl(e);let l=new Ze(ws);return a.ee({index:y0,range:IDBKeyRange.only([n.indexId,this.uid,Uf(this.$n(n,t))])},((c,f)=>{l=l.add(new Ka(n.indexId,t,jA(f.arrayValue),jA(f.directionalValue)))})).next((()=>l))}jn(e,t){let n=new Ze(ws);const a=this.Qn(t,e);if(a==null)return n;const l=O_(t);if(l!=null){const c=e.data.field(l.fieldPath);if(gh(c))for(const f of c.arrayValue.values||[])n=n.add(new Ka(t.indexId,e.key,this.Ln(f),a))}else n=n.add(new Ka(t.indexId,e.key,wf,a));return n}Jn(e,t,n,a,l){te(KA,"Updating index entries for document '%s'",t.key);const c=[];return(function(m,g,y,T,I){const x=m.getIterator(),G=g.getIterator();let W=fl(x),Y=fl(G);for(;W||Y;){let ge=!1,de=!1;if(W&&Y){const ne=y(W,Y);ne<0?de=!0:ne>0&&(ge=!0)}else W!=null?de=!0:ge=!0;ge?(T(Y),Y=fl(G)):de?(I(W),W=fl(x)):(W=fl(x),Y=fl(G))}})(a,l,ws,(f=>{c.push(this.Hn(e,t,n,f))}),(f=>{c.push(this.Yn(e,t,n,f))})),U.waitFor(c)}Gn(e){let t=1;return gl(e).ee({index:_0,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((n,a,l)=>{l.done(),t=a.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((c,f)=>ws(c,f))).filter(((c,f,m)=>!f||ws(c,m[f-1])!==0));const a=[];a.push(e);for(const c of n){const f=ws(c,e),m=ws(c,t);if(f===0)a[0]=e.An();else if(f>0&&m<0)a.push(c),a.push(c.An());else if(m>0)break}a.push(t);const l=[];for(let c=0;c<a.length;c+=2){if(this.Zn(a[c],a[c+1]))return[];const f=a[c].Vn(this.uid,wf,oe.empty()),m=a[c+1].Vn(this.uid,wf,oe.empty());l.push(IDBKeyRange.bound(f,m))}return l}Zn(e,t){return ws(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(YA)}getMinOffset(e,t){return U.mapArray(this.Mn(t),(n=>this.xn(e,n).next((a=>a||ce(44426))))).next(YA)}}function QA(i){return Kt(i,fh)}function pl(i){return Kt(i,Wc)}function Nc(i){return Kt(i,$y)}function gl(i){return Kt(i,$c)}function YA(i){me(i.length!==0,28825);let e=i[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<i.length;n++){const a=i[n].indexState.offset;Ky(a,e)<0&&(e=a),t<a.largestBatchId&&(t=a.largestBatchId)}return new $n(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const $A={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},IR=41943040;class _n{static withCacheSize(e){return new _n(e,_n.DEFAULT_COLLECTION_PERCENTILE,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
 */function AR(i,e,t){const n=i.store(yr),a=i.store(Ul),l=[],c=IDBKeyRange.only(t.batchId);let f=0;const m=n.ee({range:c},((y,T,I)=>(f++,I.delete())));l.push(m.next((()=>{me(f===1,47070,{batchId:t.batchId})})));const g=[];for(const y of t.mutations){const T=m0(e,y.key.path,t.batchId);l.push(a.delete(T)),g.push(y.key)}return U.waitFor(l).next((()=>g))}function am(i){if(!i)return 0;let e;if(i.document)e=i.document;else if(i.unknownDocument)e=i.unknownDocument;else{if(!i.noDocument)throw ce(14731);e=i.noDocument}return JSON.stringify(e).length}/**
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
 */_n.DEFAULT_COLLECTION_PERCENTILE=10,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_n.DEFAULT=new _n(IR,_n.DEFAULT_COLLECTION_PERCENTILE,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_n.DISABLED=new _n(-1,0,0);class Um{constructor(e,t,n,a){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=a,this.Xn={}}static wt(e,t,n,a){me(e.uid!=="",64387);const l=e.isAuthenticated()?e.uid:"";return new Um(l,t,n,a)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Is(e).ee({index:$a,range:n},((a,l,c)=>{t=!1,c.done()})).next((()=>t))}addMutationBatch(e,t,n,a){const l=wl(e),c=Is(e);return c.add({}).next((f=>{me(typeof f=="number",49019);const m=new sv(f,t,n,a),g=(function(x,G,W){const Y=W.baseMutations.map((de=>vh(x.yt,de))),ge=W.mutations.map((de=>vh(x.yt,de)));return{userId:G,batchId:W.batchId,localWriteTimeMs:W.localWriteTime.toMillis(),baseMutations:Y,mutations:ge}})(this.serializer,this.userId,m),y=[];let T=new Ze(((I,x)=>Re(I.canonicalString(),x.canonicalString())));for(const I of a){const x=m0(this.userId,I.key.path,f);T=T.add(I.key.path.popLast()),y.push(c.put(g)),y.push(l.put(x,i2))}return T.forEach((I=>{y.push(this.indexManager.addToCollectionParentIndex(e,I))})),e.addOnCommittedListener((()=>{this.Xn[f]=m.keys()})),U.waitFor(y).next((()=>m))}))}lookupMutationBatch(e,t){return Is(e).get(t).next((n=>n?(me(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),Ha(this.serializer,n)):null))}er(e,t){return this.Xn[t]?U.resolve(this.Xn[t]):this.lookupMutationBatch(e,t).next((n=>{if(n){const a=n.keys();return this.Xn[t]=a,a}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,a=IDBKeyRange.lowerBound([this.userId,n]);let l=null;return Is(e).ee({index:$a,range:a},((c,f,m)=>{f.userId===this.userId&&(me(f.batchId>=n,47524,{tr:n}),l=Ha(this.serializer,f)),m.done()})).next((()=>l))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Os;return Is(e).ee({index:$a,range:t,reverse:!0},((a,l,c)=>{n=l.batchId,c.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Os],[this.userId,Number.POSITIVE_INFINITY]);return Is(e).J($a,t).next((n=>n.map((a=>Ha(this.serializer,a)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Pf(this.userId,t.path),a=IDBKeyRange.lowerBound(n),l=[];return wl(e).ee({range:a},((c,f,m)=>{const[g,y,T]=c,I=$r(y);if(g===this.userId&&t.path.isEqual(I))return Is(e).get(T).next((x=>{if(!x)throw ce(61480,{nr:c,batchId:T});me(x.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:x.userId,batchId:T}),l.push(Ha(this.serializer,x))}));m.done()})).next((()=>l))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ze(Re);const a=[];return t.forEach((l=>{const c=Pf(this.userId,l.path),f=IDBKeyRange.lowerBound(c),m=wl(e).ee({range:f},((g,y,T)=>{const[I,x,G]=g,W=$r(x);I===this.userId&&l.path.isEqual(W)?n=n.add(G):T.done()}));a.push(m)})),U.waitFor(a).next((()=>this.rr(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,a=n.length+1,l=Pf(this.userId,n),c=IDBKeyRange.lowerBound(l);let f=new Ze(Re);return wl(e).ee({range:c},((m,g,y)=>{const[T,I,x]=m,G=$r(I);T===this.userId&&n.isPrefixOf(G)?G.length===a&&(f=f.add(x)):y.done()})).next((()=>this.rr(e,f)))}rr(e,t){const n=[],a=[];return t.forEach((l=>{a.push(Is(e).get(l).next((c=>{if(c===null)throw ce(35274,{batchId:l});me(c.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:c.userId,batchId:l}),n.push(Ha(this.serializer,c))})))})),U.waitFor(a).next((()=>n))}removeMutationBatch(e,t){return AR(e.le,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.ir(t.batchId)})),U.forEach(n,(a=>this.referenceDelegate.markPotentiallyOrphaned(e,a))))))}ir(e){delete this.Xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return U.resolve();const n=IDBKeyRange.lowerBound((function(c){return[c]})(this.userId)),a=[];return wl(e).ee({range:n},((l,c,f)=>{if(l[0]===this.userId){const m=$r(l[1]);a.push(m)}else f.done()})).next((()=>{me(a.length===0,56720,{sr:a.map((l=>l.canonicalString()))})}))}))}containsKey(e,t){return bR(e,this.userId,t)}_r(e){return SR(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:Os,lastStreamToken:""}))}}function bR(i,e,t){const n=Pf(e,t.path),a=n[1],l=IDBKeyRange.lowerBound(n);let c=!1;return wl(i).ee({range:l,X:!0},((f,m,g)=>{const[y,T,I]=f;y===e&&T===a&&(c=!0),g.done()})).next((()=>c))}function Is(i){return Kt(i,yr)}function wl(i){return Kt(i,Ul)}function SR(i){return Kt(i,hh)}/**
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
 */class lo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new lo(0)}static cr(){return new lo(-1)}}/**
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
 */class bk{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.lr(e).next((t=>{const n=new lo(t.highestTargetId);return t.highestTargetId=n.next(),this.hr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.lr(e).next((t=>ye.fromTimestamp(new Ye(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.lr(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.lr(e).next((a=>(a.highestListenSequenceNumber=t,n&&(a.lastRemoteSnapshotVersion=n.toTimestamp()),t>a.highestListenSequenceNumber&&(a.highestListenSequenceNumber=t),this.hr(e,a))))}addTargetData(e,t){return this.Pr(e,t).next((()=>this.lr(e).next((n=>(n.targetCount+=1,this.Tr(t,n),this.hr(e,n))))))}updateTargetData(e,t){return this.Pr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>_l(e).delete(t.targetId))).next((()=>this.lr(e))).next((n=>(me(n.targetCount>0,8065),n.targetCount-=1,this.hr(e,n))))}removeTargets(e,t,n){let a=0;const l=[];return _l(e).ee(((c,f)=>{const m=zc(f);m.sequenceNumber<=t&&n.get(m.targetId)===null&&(a++,l.push(this.removeTargetData(e,m)))})).next((()=>U.waitFor(l))).next((()=>a))}forEachTarget(e,t){return _l(e).ee(((n,a)=>{const l=zc(a);t(l)}))}lr(e){return WA(e).get(Zf).next((t=>(me(t!==null,2888),t)))}hr(e,t){return WA(e).put(Zf,t)}Pr(e,t){return _l(e).put(ER(this.serializer,t))}Tr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.lr(e).next((t=>t.targetCount))}getTargetData(e,t){const n=ro(t),a=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let l=null;return _l(e).ee({range:a,index:g0},((c,f,m)=>{const g=zc(f);Mh(t,g.target)&&(l=g,m.done())})).next((()=>l))}addMatchingKeys(e,t,n){const a=[],l=Ss(e);return t.forEach((c=>{const f=vn(c.path);a.push(l.put({targetId:n,path:f})),a.push(this.referenceDelegate.addReference(e,n,c))})),U.waitFor(a)}removeMatchingKeys(e,t,n){const a=Ss(e);return U.forEach(t,(l=>{const c=vn(l.path);return U.waitFor([a.delete([n,c]),this.referenceDelegate.removeReference(e,n,l)])}))}removeMatchingKeysForTargetId(e,t){const n=Ss(e),a=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(a)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),a=Ss(e);let l=Ce();return a.ee({range:n,X:!0},((c,f,m)=>{const g=$r(c[1]),y=new oe(g);l=l.add(y)})).next((()=>l))}containsKey(e,t){const n=vn(t.path),a=IDBKeyRange.bound([n],[i0(n)],!1,!0);let l=0;return Ss(e).ee({index:Yy,X:!0,range:a},(([c,f],m,g)=>{c!==0&&(l++,g.done())})).next((()=>l>0))}At(e,t){return _l(e).get(t).next((n=>n?zc(n):null))}}function _l(i){return Kt(i,Bl)}function WA(i){return Kt(i,eo)}function Ss(i){return Kt(i,zl)}/**
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
 */const XA="LruGarbageCollector",Sk=1048576;function JA([i,e],[t,n]){const a=Re(i,t);return a===0?Re(e,n):a}class Rk{constructor(e){this.Ir=e,this.buffer=new Ze(JA),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();JA(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class RR{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){te(XA,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Xs(t)?te(XA,"Ignoring IndexedDB error during garbage collection: ",t):await Ws(t)}await this.Vr(3e5)}))}}class Ck{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return U.resolve(xn.ce);const n=new Rk(t);return this.mr.forEachTarget(e,(a=>n.Ar(a.sequenceNumber))).next((()=>this.mr.pr(e,(a=>n.Ar(a))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve($A)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$A):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,a,l,c,f,m,g;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a)))).next((T=>(n=T,f=Date.now(),this.removeTargets(e,n,t)))).next((T=>(l=T,m=Date.now(),this.removeOrphanedDocuments(e,n)))).next((T=>(g=Date.now(),yl()<=ke.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${a} in `+(f-c)+`ms
	Removed ${l} targets in `+(m-f)+`ms
	Removed ${T} documents in `+(g-m)+`ms
Total Duration: ${g-y}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T}))))}}function CR(i,e){return new Ck(i,e)}/**
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
 */class Dk{constructor(e,t){this.db=e,this.garbageCollector=CR(this,t)}gr(e){const t=this.wr(e);return this.db.getTargetCache().getTargetCount(e).next((n=>t.next((a=>n+a))))}wr(e){let t=0;return this.pr(e,(n=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}pr(e,t){return this.Sr(e,((n,a)=>t(a)))}addReference(e,t,n){return If(e,n)}removeReference(e,t,n){return If(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return If(e,t)}br(e,t){return(function(a,l){let c=!1;return SR(a).te((f=>bR(a,f,l).next((m=>(m&&(c=!0),U.resolve(!m)))))).next((()=>c))})(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),a=[];let l=0;return this.Sr(e,((c,f)=>{if(f<=t){const m=this.br(e,c).next((g=>{if(!g)return l++,n.getEntry(e,c).next((()=>(n.removeEntry(c,ye.min()),Ss(e).delete((function(T){return[0,vn(T.path)]})(c)))))}));a.push(m)}})).next((()=>U.waitFor(a))).next((()=>n.apply(e))).next((()=>l))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return If(e,t)}Sr(e,t){const n=Ss(e);let a,l=xn.ce;return n.ee({index:Yy},(([c,f],{path:m,sequenceNumber:g})=>{c===0?(l!==xn.ce&&t(new oe($r(a)),l),l=g,a=m):l=xn.ce})).next((()=>{l!==xn.ce&&t(new oe($r(a)),l)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function If(i,e){return Ss(i).put((function(n,a){return{targetId:0,path:vn(n.path),sequenceNumber:a}})(e,i.currentSequenceNumber))}/**
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
 */class DR{constructor(){this.changes=new ji((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?U.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Nk{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Ua(e).put(n)}removeEntry(e,t,n){return Ua(e).delete((function(l,c){const f=l.path.toArray();return[f.slice(0,f.length-2),f[f.length-2],im(c),f[f.length-1]]})(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Dr(e,n))))}getEntry(e,t){let n=ct.newInvalidDocument(t);return Ua(e).ee({index:Vf,range:IDBKeyRange.only(Pc(t))},((a,l)=>{n=this.Cr(t,l)})).next((()=>n))}vr(e,t){let n={size:0,document:ct.newInvalidDocument(t)};return Ua(e).ee({index:Vf,range:IDBKeyRange.only(Pc(t))},((a,l)=>{n={document:this.Cr(t,l),size:am(l)}})).next((()=>n))}getEntries(e,t){let n=kn();return this.Fr(e,t,((a,l)=>{const c=this.Cr(a,l);n=n.insert(a,c)})).next((()=>n))}Mr(e,t){let n=kn(),a=new lt(oe.comparator);return this.Fr(e,t,((l,c)=>{const f=this.Cr(l,c);n=n.insert(l,f),a=a.insert(l,am(c))})).next((()=>({documents:n,Or:a})))}Fr(e,t,n){if(t.isEmpty())return U.resolve();let a=new Ze(tb);t.forEach((m=>a=a.add(m)));const l=IDBKeyRange.bound(Pc(a.first()),Pc(a.last())),c=a.getIterator();let f=c.getNext();return Ua(e).ee({index:Vf,range:l},((m,g,y)=>{const T=oe.fromSegments([...g.prefixPath,g.collectionGroup,g.documentId]);for(;f&&tb(f,T)<0;)n(f,null),f=c.getNext();f&&f.isEqual(T)&&(n(f,g),f=c.hasNext()?c.getNext():null),f?y.j(Pc(f)):y.done()})).next((()=>{for(;f;)n(f,null),f=c.hasNext()?c.getNext():null}))}getDocumentsMatchingQuery(e,t,n,a,l){const c=t.path,f=[c.popLast().toArray(),c.lastSegment(),im(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],m=[c.popLast().toArray(),c.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ua(e).J(IDBKeyRange.bound(f,m,!0)).next((g=>{l==null||l.incrementDocumentReadCount(g.length);let y=kn();for(const T of g){const I=this.Cr(oe.fromSegments(T.prefixPath.concat(T.collectionGroup,T.documentId)),T);I.isFoundDocument()&&(Uh(t,I)||a.has(I.key))&&(y=y.insert(I.key,I))}return y}))}getAllFromCollectionGroup(e,t,n,a){let l=kn();const c=eb(t,n),f=eb(t,$n.max());return Ua(e).ee({index:p0,range:IDBKeyRange.bound(c,f,!0)},((m,g,y)=>{const T=this.Cr(oe.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);l=l.insert(T.key,T),l.size===a&&y.done()})).next((()=>l))}newChangeBuffer(e){return new Pk(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return ZA(e).get(k_).next((t=>(me(!!t,20021),t)))}Dr(e,t){return ZA(e).put(k_,t)}Cr(e,t){if(t){const n=pk(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(ye.min())))return n}return ct.newInvalidDocument(e)}}function NR(i){return new Nk(i)}class Pk extends DR{constructor(e,t){super(),this.Nr=e,this.trackRemovals=t,this.Br=new ji((n=>n.toString()),((n,a)=>n.isEqual(a)))}applyChanges(e){const t=[];let n=0,a=new Ze(((l,c)=>Re(l.canonicalString(),c.canonicalString())));return this.changes.forEach(((l,c)=>{const f=this.Br.get(l);if(t.push(this.Nr.removeEntry(e,l,f.readTime)),c.isValidDocument()){const m=MA(this.Nr.serializer,c);a=a.add(l.path.popLast());const g=am(m);n+=g-f.size,t.push(this.Nr.addEntry(e,l,m))}else if(n-=f.size,this.trackRemovals){const m=MA(this.Nr.serializer,c.convertToNoDocument(ye.min()));t.push(this.Nr.addEntry(e,l,m))}})),a.forEach((l=>{t.push(this.Nr.indexManager.addToCollectionParentIndex(e,l))})),t.push(this.Nr.updateMetadata(e,n)),U.waitFor(t)}getFromCache(e,t){return this.Nr.vr(e,t).next((n=>(this.Br.set(t,{size:n.size,readTime:n.document.readTime}),n.document)))}getAllFromCache(e,t){return this.Nr.Mr(e,t).next((({documents:n,Or:a})=>(a.forEach(((l,c)=>{this.Br.set(l,{size:c,readTime:n.get(l).readTime})})),n)))}}function ZA(i){return Kt(i,dh)}function Ua(i){return Kt(i,Jf)}function Pc(i){const e=i.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function eb(i,e){const t=e.documentKey.path.toArray();return[i,im(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function tb(i,e){const t=i.path.toArray(),n=e.path.toArray();let a=0;for(let l=0;l<t.length-2&&l<n.length-2;++l)if(a=Re(t[l],n[l]),a)return a;return a=Re(t.length,n.length),a||(a=Re(t[t.length-2],n[n.length-2]),a||Re(t[t.length-1],n[n.length-1]))}/**
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
 *//**
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
 */class Vk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class PR{constructor(e,t,n,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=a}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(n=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(n!==null&&Zc(n.mutation,a,On.empty(),Ye.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,Ce()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=Ce()){const a=Wr();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,n).next((l=>{let c=Uc();return l.forEach(((f,m)=>{c=c.insert(f,m.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const n=Wr();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Ce())))}populateOverlays(e,t,n){const a=[];return n.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((c,f)=>{t.set(c,f)}))}))}computeViews(e,t,n,a){let l=kn();const c=Jc(),f=(function(){return Jc()})();return t.forEach(((m,g)=>{const y=n.get(g.key);a.has(g.key)&&(y===void 0||y.mutation instanceof Hi)?l=l.insert(g.key,g):y!==void 0?(c.set(g.key,y.mutation.getFieldMask()),Zc(y.mutation,g,y.mutation.getFieldMask(),Ye.now())):c.set(g.key,On.empty())})),this.recalculateAndSaveOverlays(e,l).next((m=>(m.forEach(((g,y)=>c.set(g,y))),t.forEach(((g,y)=>f.set(g,new Vk(y,c.get(g)??null)))),f)))}recalculateAndSaveOverlays(e,t){const n=Jc();let a=new lt(((c,f)=>c-f)),l=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const f of c)f.keys().forEach((m=>{const g=t.get(m);if(g===null)return;let y=n.get(m)||On.empty();y=f.applyToLocalView(g,y),n.set(m,y);const T=(a.get(f.batchId)||Ce()).add(m);a=a.insert(f.batchId,T)}))})).next((()=>{const c=[],f=a.getReverseIterator();for(;f.hasNext();){const m=f.getNext(),g=m.key,y=m.value,T=Q0();y.forEach((I=>{if(!l.has(I)){const x=eR(t.get(I),n.get(I));x!==null&&T.set(I,x),l=l.add(I)}})),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return U.waitFor(c)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,a){return(function(c){return oe.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):tv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,a):this.getDocumentsMatchingCollectionQuery(e,t,n,a)}getNextDocuments(e,t,n,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,a).next((l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,a-l.size):U.resolve(Wr());let f=Ll,m=l;return c.next((g=>U.forEach(g,((y,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(y)?U.resolve():this.remoteDocumentCache.getEntry(e,y).next((I=>{m=m.insert(y,I)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,m,g,Ce()))).next((y=>({batchId:f,changes:K0(y)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new oe(t)).next((n=>{let a=Uc();return n.isFoundDocument()&&(a=a.insert(n.key,n)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,a){const l=t.collectionGroup;let c=Uc();return this.indexManager.getCollectionParents(e,l).next((f=>U.forEach(f,(m=>{const g=(function(T,I){return new qi(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,n,a).next((y=>{y.forEach(((T,I)=>{c=c.insert(T,I)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,n,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,l,a)))).next((c=>{l.forEach(((m,g)=>{const y=g.getKey();c.get(y)===null&&(c=c.insert(y,ct.newInvalidDocument(y)))}));let f=Uc();return c.forEach(((m,g)=>{const y=l.get(m);y!==void 0&&Zc(y.mutation,g,On.empty(),Ye.now()),Uh(t,g)&&(f=f.insert(m,g))})),f}))}}/**
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
 */class xk{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return U.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:Pt(a.createTime)}})(t)),U.resolve()}getNamedQuery(e,t){return U.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(a){return{name:a.name,query:cv(a.bundledQuery),readTime:Pt(a.readTime)}})(t)),U.resolve()}}/**
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
 */class Ok{constructor(){this.overlays=new lt(oe.comparator),this.qr=new Map}getOverlay(e,t){return U.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Wr();return U.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&n.set(a,l)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((a,l)=>{this.St(e,t,l)})),U.resolve()}removeOverlaysForBatchId(e,t,n){const a=this.qr.get(n);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(n)),U.resolve()}getOverlaysForCollection(e,t,n){const a=Wr(),l=t.length+1,c=new oe(t.child("")),f=this.overlays.getIteratorFrom(c);for(;f.hasNext();){const m=f.getNext().value,g=m.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&m.largestBatchId>n&&a.set(m.getKey(),m)}return U.resolve(a)}getOverlaysForCollectionGroup(e,t,n,a){let l=new lt(((g,y)=>g-y));const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>n){let y=l.get(g.largestBatchId);y===null&&(y=Wr(),l=l.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const f=Wr(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach(((g,y)=>f.set(g,y))),!(f.size()>=a)););return U.resolve(f)}St(e,t,n){const a=this.overlays.get(n.key);if(a!==null){const c=this.qr.get(a.largestBatchId).delete(n.key);this.qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(n.key,new ov(t,n));let l=this.qr.get(t);l===void 0&&(l=Ce(),this.qr.set(t,l)),this.qr.set(t,l.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class kk{constructor(){this.sessionToken=It.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,U.resolve()}}/**
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
 */class fv{constructor(){this.Qr=new Ze(Zt.$r),this.Ur=new Ze(Zt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new Zt(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Gr(new Zt(e,t))}zr(e,t){e.forEach((n=>this.removeReference(n,t)))}jr(e){const t=new oe(new Me([])),n=new Zt(t,e),a=new Zt(t,e+1),l=[];return this.Ur.forEachInRange([n,a],(c=>{this.Gr(c),l.push(c.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new oe(new Me([])),n=new Zt(t,e),a=new Zt(t,e+1);let l=Ce();return this.Ur.forEachInRange([n,a],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new Zt(e,0),n=this.Qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Zt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return oe.comparator(e.key,t.key)||Re(e.Yr,t.Yr)}static Kr(e,t){return Re(e.Yr,t.Yr)||oe.comparator(e.key,t.key)}}/**
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
 */class Mk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Ze(Zt.$r)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new sv(l,t,n,a);this.mutationQueue.push(c);for(const f of a)this.Zr=this.Zr.add(new Zt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return U.resolve(c)}lookupMutationBatch(e,t){return U.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,a=this.ei(n),l=a<0?0:a;return U.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?Os:this.tr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Zt(t,0),a=new Zt(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([n,a],(c=>{const f=this.Xr(c.Yr);l.push(f)})),U.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ze(Re);return t.forEach((a=>{const l=new Zt(a,0),c=new Zt(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],(f=>{n=n.add(f.Yr)}))})),U.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,a=n.length+1;let l=n;oe.isDocumentKey(l)||(l=l.child(""));const c=new Zt(new oe(l),0);let f=new Ze(Re);return this.Zr.forEachWhile((m=>{const g=m.key.path;return!!n.isPrefixOf(g)&&(g.length===a&&(f=f.add(m.Yr)),!0)}),c),U.resolve(this.ti(f))}ti(e){const t=[];return e.forEach((n=>{const a=this.Xr(n);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){me(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return U.forEach(t.mutations,(a=>{const l=new Zt(a.key,t.batchId);return n=n.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Zr=n}))}ir(e){}containsKey(e,t){const n=new Zt(t,0),a=this.Zr.firstAfterOrEqual(n);return U.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Lk{constructor(e){this.ri=e,this.docs=(function(){return new lt(oe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,a=this.docs.get(n),l=a?a.size:0,c=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return U.resolve(n?n.document.mutableCopy():ct.newInvalidDocument(t))}getEntries(e,t){let n=kn();return t.forEach((a=>{const l=this.docs.get(a);n=n.insert(a,l?l.document.mutableCopy():ct.newInvalidDocument(a))})),U.resolve(n)}getDocumentsMatchingQuery(e,t,n,a){let l=kn();const c=t.path,f=new oe(c.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(f);for(;m.hasNext();){const{key:g,value:{document:y}}=m.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||Ky(u0(y),n)<=0||(a.has(y.key)||Uh(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return U.resolve(l)}getAllFromCollectionGroup(e,t,n,a){ce(9500)}ii(e,t){return U.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new Uk(this)}getSize(e){return U.resolve(this.size)}}class Uk extends DR{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,a)=>{a.isValidDocument()?t.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(n)})),U.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class Bk{constructor(e){this.persistence=e,this.si=new ji((t=>ro(t)),Mh),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.oi=0,this._i=new fv,this.targetCount=0,this.ai=lo.ur()}forEachTarget(e,t){return this.si.forEach(((n,a)=>t(a))),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),U.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new lo(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,U.resolve()}updateTargetData(e,t){return this.Pr(t),U.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,t,n){let a=0;const l=[];return this.si.forEach(((c,f)=>{f.sequenceNumber<=t&&n.get(f.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),a++)})),U.waitFor(l).next((()=>a))}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return U.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),U.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((c=>{l.push(a.markPotentiallyOrphaned(e,c))})),U.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),U.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return U.resolve(n)}containsKey(e,t){return U.resolve(this._i.containsKey(t))}}/**
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
 */class mv{constructor(e,t){this.ui={},this.overlays={},this.ci=new xn(0),this.li=!1,this.li=!0,this.hi=new kk,this.referenceDelegate=e(this),this.Pi=new Bk(this),this.indexManager=new Ik,this.remoteDocumentCache=(function(a){return new Lk(a)})((n=>this.referenceDelegate.Ti(n))),this.serializer=new vR(t),this.Ii=new xk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ok,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new Mk(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){te("MemoryPersistence","Starting transaction:",e);const a=new zk(this.ci.next());return this.referenceDelegate.Ei(),n(a).next((l=>this.referenceDelegate.di(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Ai(e,t){return U.or(Object.values(this.ui).map((n=>()=>n.containsKey(e,t))))}}class zk extends h0{constructor(e){super(),this.currentSequenceNumber=e}}class Bm{constructor(e){this.persistence=e,this.Ri=new fv,this.Vi=null}static mi(e){return new Bm(e)}get fi(){if(this.Vi)return this.Vi;throw ce(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),U.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),U.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),U.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((a=>this.fi.add(a.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.fi.add(l.toString())))})).next((()=>n.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.fi,(n=>{const a=oe.fromPath(n);return this.gi(e,a).next((l=>{l||t.removeEntry(a,ye.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((n=>{n?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return U.or([()=>U.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class om{constructor(e,t){this.persistence=e,this.pi=new ji((n=>vn(n.path)),((n,a)=>n.isEqual(a))),this.garbageCollector=CR(this,t)}static mi(e,t){return new om(e,t)}Ei(){}di(e){return U.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((a=>n+a))))}wr(e){let t=0;return this.pr(e,(n=>{t++})).next((()=>t))}pr(e,t){return U.forEach(this.pi,((n,a)=>this.br(e,n,a).next((l=>l?U.resolve():t(a)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,(c=>this.br(e,c,t).next((f=>{f||(n++,l.removeEntry(c,ye.min()))})))).next((()=>l.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),U.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),U.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),U.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Of(e.data.value)),t}br(e,t,n){return U.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.pi.get(t);return U.resolve(a!==void 0&&a>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Fk{constructor(e){this.serializer=e}k(e,t,n,a){const l=new Cm("createOrUpgrade",t);n<1&&a>=1&&((function(m){m.createObjectStore(kh)})(e),(function(m){m.createObjectStore(hh,{keyPath:r2}),m.createObjectStore(yr,{keyPath:dA,autoIncrement:!0}).createIndex($a,fA,{unique:!0}),m.createObjectStore(Ul)})(e),nb(e),(function(m){m.createObjectStore(Fa)})(e));let c=U.resolve();return n<3&&a>=3&&(n!==0&&((function(m){m.deleteObjectStore(zl),m.deleteObjectStore(Bl),m.deleteObjectStore(eo)})(e),nb(e)),c=c.next((()=>(function(m){const g=m.store(eo),y={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ye.min().toTimestamp(),targetCount:0};return g.put(Zf,y)})(l)))),n<4&&a>=4&&(n!==0&&(c=c.next((()=>(function(m,g){return g.store(yr).J().next((T=>{m.deleteObjectStore(yr),m.createObjectStore(yr,{keyPath:dA,autoIncrement:!0}).createIndex($a,fA,{unique:!0});const I=g.store(yr),x=T.map((G=>I.put(G)));return U.waitFor(x)}))})(e,l)))),c=c.next((()=>{(function(m){m.createObjectStore(Fl,{keyPath:d2})})(e)}))),n<5&&a>=5&&(c=c.next((()=>this.yi(l)))),n<6&&a>=6&&(c=c.next((()=>((function(m){m.createObjectStore(dh)})(e),this.wi(l))))),n<7&&a>=7&&(c=c.next((()=>this.Si(l)))),n<8&&a>=8&&(c=c.next((()=>this.bi(e,l)))),n<9&&a>=9&&(c=c.next((()=>{(function(m){m.objectStoreNames.contains("remoteDocumentChanges")&&m.deleteObjectStore("remoteDocumentChanges")})(e)}))),n<10&&a>=10&&(c=c.next((()=>this.Di(l)))),n<11&&a>=11&&(c=c.next((()=>{(function(m){m.createObjectStore(Dm,{keyPath:f2})})(e),(function(m){m.createObjectStore(Nm,{keyPath:m2})})(e)}))),n<12&&a>=12&&(c=c.next((()=>{(function(m){const g=m.createObjectStore(Pm,{keyPath:T2});g.createIndex(L_,w2,{unique:!1}),g.createIndex(v0,I2,{unique:!1})})(e)}))),n<13&&a>=13&&(c=c.next((()=>(function(m){const g=m.createObjectStore(Jf,{keyPath:s2});g.createIndex(Vf,a2),g.createIndex(p0,o2)})(e))).next((()=>this.Ci(e,l))).next((()=>e.deleteObjectStore(Fa)))),n<14&&a>=14&&(c=c.next((()=>this.Fi(e,l)))),n<15&&a>=15&&(c=c.next((()=>(function(m){m.createObjectStore($y,{keyPath:p2,autoIncrement:!0}).createIndex(M_,g2,{unique:!1}),m.createObjectStore($c,{keyPath:_2}).createIndex(_0,y2,{unique:!1}),m.createObjectStore(Wc,{keyPath:v2}).createIndex(y0,E2,{unique:!1})})(e)))),n<16&&a>=16&&(c=c.next((()=>{t.objectStore($c).clear()})).next((()=>{t.objectStore(Wc).clear()}))),n<17&&a>=17&&(c=c.next((()=>{(function(m){m.createObjectStore(Wy,{keyPath:A2})})(e)}))),n<18&&a>=18&&qb()&&(c=c.next((()=>{t.objectStore($c).clear()})).next((()=>{t.objectStore(Wc).clear()}))),c}wi(e){let t=0;return e.store(Fa).ee(((n,a)=>{t+=am(a)})).next((()=>{const n={byteSize:t};return e.store(dh).put(k_,n)}))}yi(e){const t=e.store(hh),n=e.store(yr);return t.J().next((a=>U.forEach(a,(l=>{const c=IDBKeyRange.bound([l.userId,Os],[l.userId,l.lastAcknowledgedBatchId]);return n.J($a,c).next((f=>U.forEach(f,(m=>{me(m.userId===l.userId,18650,"Cannot process batch from unexpected user",{batchId:m.batchId});const g=Ha(this.serializer,m);return AR(e,l.userId,g).next((()=>{}))}))))}))))}Si(e){const t=e.store(zl),n=e.store(Fa);return e.store(eo).get(Zf).next((a=>{const l=[];return n.ee(((c,f)=>{const m=new Me(c),g=(function(T){return[0,vn(T)]})(m);l.push(t.get(g).next((y=>y?U.resolve():(T=>t.put({targetId:0,path:vn(T),sequenceNumber:a.highestListenSequenceNumber}))(m))))})).next((()=>U.waitFor(l)))}))}bi(e,t){e.createObjectStore(fh,{keyPath:h2});const n=t.store(fh),a=new dv,l=c=>{if(a.add(c)){const f=c.lastSegment(),m=c.popLast();return n.put({collectionId:f,parent:vn(m)})}};return t.store(Fa).ee({X:!0},((c,f)=>{const m=new Me(c);return l(m.popLast())})).next((()=>t.store(Ul).ee({X:!0},(([c,f,m],g)=>{const y=$r(f);return l(y.popLast())}))))}Di(e){const t=e.store(Bl);return t.ee(((n,a)=>{const l=zc(a),c=ER(this.serializer,l);return t.put(c)}))}Ci(e,t){const n=t.store(Fa),a=[];return n.ee(((l,c)=>{const f=t.store(Jf),m=(function(T){return T.document?new oe(Me.fromString(T.document.name).popFirst(5)):T.noDocument?oe.fromSegments(T.noDocument.path):T.unknownDocument?oe.fromSegments(T.unknownDocument.path):ce(36783)})(c).path.toArray(),g={prefixPath:m.slice(0,m.length-2),collectionGroup:m[m.length-2],documentId:m[m.length-1],readTime:c.readTime||[0,0],unknownDocument:c.unknownDocument,noDocument:c.noDocument,document:c.document,hasCommittedMutations:!!c.hasCommittedMutations};a.push(f.put(g))})).next((()=>U.waitFor(a)))}Fi(e,t){const n=t.store(yr),a=NR(this.serializer),l=new mv(Bm.mi,this.serializer.yt);return n.J().next((c=>{const f=new Map;return c.forEach((m=>{let g=f.get(m.userId)??Ce();Ha(this.serializer,m).keys().forEach((y=>g=g.add(y))),f.set(m.userId,g)})),U.forEach(f,((m,g)=>{const y=new en(g),T=Lm.wt(this.serializer,y),I=l.getIndexManager(y),x=Um.wt(y,this.serializer,I,l.referenceDelegate);return new PR(a,x,T,I).recalculateAndSaveOverlaysForDocumentKeys(new U_(t,xn.ce),m).next()}))}))}}function nb(i){i.createObjectStore(zl,{keyPath:u2}).createIndex(Yy,c2,{unique:!0}),i.createObjectStore(Bl,{keyPath:"targetId"}).createIndex(g0,l2,{unique:!0}),i.createObjectStore(eo)}const As="IndexedDbPersistence",y_=18e5,v_=5e3,E_="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",VR="main";class pv{constructor(e,t,n,a,l,c,f,m,g,y,T=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Mi=l,this.window=c,this.document=f,this.xi=g,this.Oi=y,this.Ni=T,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=I=>Promise.resolve(),!pv.v())throw new Z(j.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Dk(this,a),this.$i=t+VR,this.serializer=new vR(m),this.Ui=new Xr(this.$i,this.Ni,new Fk(this.serializer)),this.hi=new _k,this.Pi=new bk(this.referenceDelegate,this.serializer),this.remoteDocumentCache=NR(this.serializer),this.Ii=new gk,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,y===!1&&Nt(As,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new Z(j.FAILED_PRECONDITION,E_);return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Pi.getHighestSequenceNumber(e)))})).then((e=>{this.ci=new xn(e,this.xi)})).then((()=>{this.li=!0})).catch((e=>(this.Ui&&this.Ui.close(),Promise.reject(e))))}Ji(e){return this.Qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ui.$((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Mi.enqueueAndForget((async()=>{this.started&&await this.Wi()})))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Af(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Hi(e).next((t=>{t||(this.isPrimary=!1,this.Mi.enqueueRetryable((()=>this.Qi(!1))))}))})).next((()=>this.Yi(e))).next((t=>this.isPrimary&&!t?this.Zi(e).next((()=>!1)):!!t&&this.Xi(e).next((()=>!0)))))).catch((e=>{if(Xs(e))return te(As,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return te(As,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Mi.enqueueRetryable((()=>this.Qi(e))),this.isPrimary=e}))}Hi(e){return Vc(e).get(dl).next((t=>U.resolve(this.es(t))))}ts(e){return Af(e).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.rs(this.qi,y_)){this.qi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const n=Kt(t,Fl);return n.J().next((a=>{const l=this.ss(a,y_),c=a.filter((f=>l.indexOf(f)===-1));return U.forEach(c,(f=>n.delete(f.clientId))).next((()=>c))}))})).catch((()=>[]));if(this.Ki)for(const t of e)this.Ki.removeItem(this._s(t.clientId))}}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Wi().then((()=>this.ns())).then((()=>this.ji()))))}es(e){return!!e&&e.ownerId===this.clientId}Yi(e){return this.Oi?U.resolve(!0):Vc(e).get(dl).next((t=>{if(t!==null&&this.rs(t.leaseTimestampMs,v_)&&!this.us(t.ownerId)){if(this.es(t)&&this.networkEnabled)return!0;if(!this.es(t)){if(!t.allowTabSynchronization)throw new Z(j.FAILED_PRECONDITION,E_);return!1}}return!(!this.networkEnabled||!this.inForeground)||Af(e).J().next((n=>this.ss(n,v_).find((a=>{if(this.clientId!==a.clientId){const l=!this.networkEnabled&&a.networkEnabled,c=!this.inForeground&&a.inForeground,f=this.networkEnabled===a.networkEnabled;if(l||c&&f)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&te(As,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),await this.Ui.runTransaction("shutdown","readwrite",[kh,Fl],(e=>{const t=new U_(e,xn.ce);return this.Zi(t).next((()=>this.ts(t)))})),this.Ui.close(),this.Ps()}ss(e,t){return e.filter((n=>this.rs(n.updateTimeMs,t)&&!this.us(n.clientId)))}Ts(){return this.runTransaction("getActiveClients","readonly",(e=>Af(e).J().next((t=>this.ss(t,y_).map((n=>n.clientId))))))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(e,t){return Um.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Ak(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return Lm.wt(this.serializer,e)}getBundleCache(){return this.Ii}runTransaction(e,t,n){te(As,"Starting transaction:",e);const a=t==="readonly"?"readonly":"readwrite",l=(function(m){return m===18?R2:m===17?I0:m===16?S2:m===15?Xy:m===14?w0:m===13?T0:m===12?b2:m===11?E0:void ce(60245)})(this.Ni);let c;return this.Ui.runTransaction(e,a,l,(f=>(c=new U_(f,this.ci?this.ci.next():xn.ce),t==="readwrite-primary"?this.Hi(c).next((m=>!!m||this.Yi(c))).next((m=>{if(!m)throw Nt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable((()=>this.Qi(!1))),new Z(j.FAILED_PRECONDITION,c0);return n(c)})).next((m=>this.Xi(c).next((()=>m)))):this.Is(c).next((()=>n(c)))))).then((f=>(c.raiseOnCommittedEvent(),f)))}Is(e){return Vc(e).get(dl).next((t=>{if(t!==null&&this.rs(t.leaseTimestampMs,v_)&&!this.us(t.ownerId)&&!this.es(t)&&!(this.Oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new Z(j.FAILED_PRECONDITION,E_)}))}Xi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Vc(e).put(dl,t)}static v(){return Xr.v()}Zi(e){const t=Vc(e);return t.get(dl).next((n=>this.es(n)?(te(As,"Releasing primary lease."),t.delete(dl)):U.resolve()))}rs(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Nt(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Li=()=>{this.Mi.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Wi())))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground=this.document.visibilityState==="visible")}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Bi=()=>{this.cs();const t=/(?:Version|Mobile)\/1[456]/;Fb()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(e){var t;try{const n=((t=this.Ki)==null?void 0:t.getItem(this._s(e)))!==null;return te(As,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return Nt(As,"Failed to get zombied client id.",n),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(e){Nt("Failed to set zombie client id.",e)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch{}}_s(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Vc(i){return Kt(i,kh)}function Af(i){return Kt(i,Fl)}function gv(i,e){let t=i.projectId;return i.isDefaultDatabase||(t+="."+i.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class _v{constructor(e,t,n,a){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=a}static As(e,t){let n=Ce(),a=Ce();for(const l of t.docChanges)switch(l.type){case 0:n=n.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new _v(e,t.fromCache,n,a)}}/**
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
 */class qk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class xR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Fb()?8:d0(yt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,a){const l={result:null};return this.ys(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ws(e,t,a,n).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new qk;return this.Ss(e,t,c).next((f=>{if(l.result=f,this.Vs)return this.bs(e,t,c,f.size)}))})).next((()=>l.result))}bs(e,t,n,a){return n.documentReadCount<this.fs?(yl()<=ke.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",vl(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),U.resolve()):(yl()<=ke.DEBUG&&te("QueryEngine","Query:",vl(t),"scans",n.documentReadCount,"local documents and returns",a,"documents as results."),n.documentReadCount>this.gs*a?(yl()<=ke.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",vl(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rn(t))):U.resolve())}ys(e,t){if(SA(t))return U.resolve(null);let n=Rn(t);return this.indexManager.getIndexType(e,n).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=rm(t,null,"F"),n=Rn(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((l=>{const c=Ce(...l);return this.ps.getDocuments(e,c).next((f=>this.indexManager.getMinOffset(e,n).next((m=>{const g=this.Ds(t,f);return this.Cs(t,g,c,m.readTime)?this.ys(e,rm(t,null,"F")):this.vs(e,g,t,m)}))))})))))}ws(e,t,n,a){return SA(t)||a.isEqual(ye.min())?U.resolve(null):this.ps.getDocuments(e,n).next((l=>{const c=this.Ds(t,l);return this.Cs(t,c,n,a)?U.resolve(null):(yl()<=ke.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),vl(t)),this.vs(e,c,t,l0(a,Ll)).next((f=>f)))}))}Ds(e,t){let n=new Ze(H0(e));return t.forEach(((a,l)=>{Uh(e,l)&&(n=n.add(l))})),n}Cs(e,t,n,a){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,t,n){return yl()<=ke.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",vl(t)),this.ps.getDocumentsMatchingQuery(e,t,$n.min(),n)}vs(e,t,n,a){return this.ps.getDocumentsMatchingQuery(e,n,a).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
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
 */const yv="LocalStore",jk=3e8;class Hk{constructor(e,t,n,a){this.persistence=e,this.Fs=t,this.serializer=a,this.Ms=new lt(Re),this.xs=new ji((l=>ro(l)),Mh),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new PR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function OR(i,e,t,n){return new Hk(i,e,t,n)}async function kR(i,e){const t=le(i);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let a;return t.mutationQueue.getAllMutationBatches(n).next((l=>(a=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(n)))).next((l=>{const c=[],f=[];let m=Ce();for(const g of a){c.push(g.batchId);for(const y of g.mutations)m=m.add(y.key)}for(const g of l){f.push(g.batchId);for(const y of g.mutations)m=m.add(y.key)}return t.localDocuments.getDocuments(n,m).next((g=>({Ls:g,removedBatchIds:c,addedBatchIds:f})))}))}))}function Gk(i,e){const t=le(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const a=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(f,m,g,y){const T=g.batch,I=T.keys();let x=U.resolve();return I.forEach((G=>{x=x.next((()=>y.getEntry(m,G))).next((W=>{const Y=g.docVersions.get(G);me(Y!==null,48541),W.version.compareTo(Y)<0&&(T.applyToRemoteDocument(W,g),W.isValidDocument()&&(W.setReadTime(g.commitVersion),y.addEntry(W)))}))})),x.next((()=>f.mutationQueue.removeMutationBatch(m,T)))})(t,n,e,l).next((()=>l.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(f){let m=Ce();for(let g=0;g<f.mutationResults.length;++g)f.mutationResults[g].transformResults.length>0&&(m=m.add(f.batch.mutations[g].key));return m})(e)))).next((()=>t.localDocuments.getDocuments(n,a)))}))}function MR(i){const e=le(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function Kk(i,e){const t=le(i),n=e.snapshotVersion;let a=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});a=t.Ms;const f=[];e.targetChanges.forEach(((y,T)=>{const I=a.get(T);if(!I)return;f.push(t.Pi.removeMatchingKeys(l,y.removedDocuments,T).next((()=>t.Pi.addMatchingKeys(l,y.addedDocuments,T))));let x=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?x=x.withResumeToken(It.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):y.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(y.resumeToken,n)),a=a.insert(T,x),(function(W,Y,ge){return W.resumeToken.approximateByteSize()===0||Y.snapshotVersion.toMicroseconds()-W.snapshotVersion.toMicroseconds()>=jk?!0:ge.addedDocuments.size+ge.modifiedDocuments.size+ge.removedDocuments.size>0})(I,x,y)&&f.push(t.Pi.updateTargetData(l,x))}));let m=kn(),g=Ce();if(e.documentUpdates.forEach((y=>{e.resolvedLimboDocuments.has(y)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))})),f.push(LR(l,c,e.documentUpdates).next((y=>{m=y.ks,g=y.qs}))),!n.isEqual(ye.min())){const y=t.Pi.getLastRemoteSnapshotVersion(l).next((T=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,n)));f.push(y)}return U.waitFor(f).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,m,g))).next((()=>m))})).then((l=>(t.Ms=a,l)))}function LR(i,e,t){let n=Ce(),a=Ce();return t.forEach((l=>n=n.add(l))),e.getEntries(i,n).next((l=>{let c=kn();return t.forEach(((f,m)=>{const g=l.get(f);m.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(f)),m.isNoDocument()&&m.version.isEqual(ye.min())?(e.removeEntry(f,m.readTime),c=c.insert(f,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(m),c=c.insert(f,m)):te(yv,"Ignoring outdated watch update for ",f,". Current version:",g.version," Watch version:",m.version)})),{ks:c,qs:a}}))}function Qk(i,e){const t=le(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=Os),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function Yl(i,e){const t=le(i);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let a;return t.Pi.getTargetData(n,e).next((l=>l?(a=l,U.resolve(a)):t.Pi.allocateTargetId(n).next((c=>(a=new Vi(e,c,"TargetPurposeListen",n.currentSequenceNumber),t.Pi.addTargetData(n,a).next((()=>a)))))))})).then((n=>{const a=t.Ms.get(n.targetId);return(a===null||n.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(n.targetId,n),t.xs.set(e,n.targetId)),n}))}async function $l(i,e,t){const n=le(i),a=n.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",l,(c=>n.persistence.referenceDelegate.removeTarget(c,a)))}catch(c){if(!Xs(c))throw c;te(yv,`Failed to update sequence numbers for target ${e}: ${c}`)}n.Ms=n.Ms.remove(e),n.xs.delete(a.target)}function lm(i,e,t){const n=le(i);let a=ye.min(),l=Ce();return n.persistence.runTransaction("Execute query","readwrite",(c=>(function(m,g,y){const T=le(m),I=T.xs.get(y);return I!==void 0?U.resolve(T.Ms.get(I)):T.Pi.getTargetData(g,y)})(n,c,Rn(e)).next((f=>{if(f)return a=f.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(c,f.targetId).next((m=>{l=m}))})).next((()=>n.Fs.getDocumentsMatchingQuery(c,e,t?a:ye.min(),t?l:Ce()))).next((f=>(zR(n,j0(e),f),{documents:f,Qs:l})))))}function UR(i,e){const t=le(i),n=le(t.Pi),a=t.Ms.get(e);return a?Promise.resolve(a.target):t.persistence.runTransaction("Get target data","readonly",(l=>n.At(l,e).next((c=>c?c.target:null))))}function BR(i,e){const t=le(i),n=t.Os.get(e)||ye.min();return t.persistence.runTransaction("Get new document changes","readonly",(a=>t.Ns.getAllFromCollectionGroup(a,e,l0(n,Ll),Number.MAX_SAFE_INTEGER))).then((a=>(zR(t,e,a),a)))}function zR(i,e,t){let n=i.Os.get(e)||ye.min();t.forEach(((a,l)=>{l.readTime.compareTo(n)>0&&(n=l.readTime)})),i.Os.set(e,n)}async function Yk(i,e,t,n){const a=le(i);let l=Ce(),c=kn();for(const g of t){const y=e.$s(g.metadata.name);g.document&&(l=l.add(y));const T=e.Us(g);T.setReadTime(e.Ks(g.metadata.readTime)),c=c.insert(y,T)}const f=a.Ns.newChangeBuffer({trackRemovals:!0}),m=await Yl(a,(function(y){return Rn(lu(Me.fromString(`__bundle__/docs/${y}`)))})(n));return a.persistence.runTransaction("Apply bundle documents","readwrite",(g=>LR(g,f,c).next((y=>(f.apply(g),y))).next((y=>a.Pi.removeMatchingKeysForTargetId(g,m.targetId).next((()=>a.Pi.addMatchingKeys(g,l,m.targetId))).next((()=>a.localDocuments.getLocalViewOfDocuments(g,y.ks,y.qs))).next((()=>y.ks))))))}async function $k(i,e,t=Ce()){const n=await Yl(i,Rn(cv(e.bundledQuery))),a=le(i);return a.persistence.runTransaction("Save named query","readwrite",(l=>{const c=Pt(e.readTime);if(n.snapshotVersion.compareTo(c)>=0)return a.Ii.saveNamedQuery(l,e);const f=n.withResumeToken(It.EMPTY_BYTE_STRING,c);return a.Ms=a.Ms.insert(f.targetId,f),a.Pi.updateTargetData(l,f).next((()=>a.Pi.removeMatchingKeysForTargetId(l,n.targetId))).next((()=>a.Pi.addMatchingKeys(l,t,n.targetId))).next((()=>a.Ii.saveNamedQuery(l,e)))}))}/**
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
 */const FR="firestore_clients";function rb(i,e){return`${FR}_${i}_${e}`}const qR="firestore_mutations";function ib(i,e,t){let n=`${qR}_${i}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}const jR="firestore_targets";function T_(i,e){return`${jR}_${i}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const jr="SharedClientState";class um{constructor(e,t,n,a){this.user=e,this.batchId=t,this.state=n,this.error=a}static Ws(e,t,n){const a=JSON.parse(n);let l,c=typeof a=="object"&&["pending","acknowledged","rejected"].indexOf(a.state)!==-1&&(a.error===void 0||typeof a.error=="object");return c&&a.error&&(c=typeof a.error.message=="string"&&typeof a.error.code=="string",c&&(l=new Z(a.error.code,a.error.message))),c?new um(e,t,a.state,l):(Nt(jr,`Failed to parse mutation state for ID '${t}': ${n}`),null)}Gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class eh{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Ws(e,t){const n=JSON.parse(t);let a,l=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return l&&n.error&&(l=typeof n.error.message=="string"&&typeof n.error.code=="string",l&&(a=new Z(n.error.code,n.error.message))),l?new eh(e,n.state,a):(Nt(jr,`Failed to parse target state for ID '${e}': ${t}`),null)}Gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class cm{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ws(e,t){const n=JSON.parse(t);let a=typeof n=="object"&&n.activeTargetIds instanceof Array,l=nv();for(let c=0;a&&c<n.activeTargetIds.length;++c)a=f0(n.activeTargetIds[c]),l=l.add(n.activeTargetIds[c]);return a?new cm(e,l):(Nt(jr,`Failed to parse client data for instance '${e}': ${t}`),null)}}class vv{constructor(e,t){this.clientId=e,this.onlineState=t}static Ws(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new vv(t.clientId,t.onlineState):(Nt(jr,`Failed to parse online state: ${e}`),null)}}class J_{constructor(){this.activeTargetIds=nv()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class w_{constructor(e,t,n,a,l){this.window=e,this.Mi=t,this.persistenceKey=n,this.Js=a,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Hs=this.Ys.bind(this),this.Zs=new lt(Re),this.started=!1,this.Xs=[];const c=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=l,this.eo=rb(this.persistenceKey,this.Js),this.no=(function(m){return`firestore_sequence_number_${m}`})(this.persistenceKey),this.Zs=this.Zs.insert(this.Js,new J_),this.ro=new RegExp(`^${FR}_${c}_([^_]*)$`),this.io=new RegExp(`^${qR}_${c}_(\\d+)(?:_(.*))?$`),this.so=new RegExp(`^${jR}_${c}_(\\d+)$`),this.oo=(function(m){return`firestore_online_state_${m}`})(this.persistenceKey),this._o=(function(m){return`firestore_bundle_loaded_v2_${m}`})(this.persistenceKey),this.window.addEventListener("storage",this.Hs)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ts();for(const n of e){if(n===this.Js)continue;const a=this.getItem(rb(this.persistenceKey,n));if(a){const l=cm.Ws(n,a);l&&(this.Zs=this.Zs.insert(l.clientId,l))}}this.ao();const t=this.storage.getItem(this.oo);if(t){const n=this.uo(t);n&&this.co(n)}for(const n of this.Xs)this.Ys(n);this.Xs=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.no,JSON.stringify(e))}getAllActiveQueryTargets(){return this.lo(this.Zs)}isActiveQueryTarget(e){let t=!1;return this.Zs.forEach(((n,a)=>{a.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.ho(e,"pending")}updateMutationState(e,t,n){this.ho(e,t,n),this.Po(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const a=this.storage.getItem(T_(this.persistenceKey,e));if(a){const l=eh.Ws(e,a);l&&(n=l.state)}}return t&&this.To.zs(e),this.ao(),n}removeLocalQueryTarget(e){this.To.js(e),this.ao()}isLocalQueryTarget(e){return this.To.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(T_(this.persistenceKey,e))}updateQueryState(e,t,n){this.Io(e,t,n)}handleUserChange(e,t,n){t.forEach((a=>{this.Po(a)})),this.currentUser=e,n.forEach((a=>{this.addPendingMutation(a)}))}setOnlineState(e){this.Eo(e)}notifyBundleLoaded(e){this.Ao(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Hs),this.removeItem(this.eo),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return te(jr,"READ",e,t),t}setItem(e,t){te(jr,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){te(jr,"REMOVE",e),this.storage.removeItem(e)}Ys(e){const t=e;if(t.storageArea===this.storage){if(te(jr,"EVENT",t.key,t.newValue),t.key===this.eo)return void Nt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Mi.enqueueRetryable((async()=>{if(this.started){if(t.key!==null){if(this.ro.test(t.key)){if(t.newValue==null){const n=this.Ro(t.key);return this.Vo(n,null)}{const n=this.mo(t.key,t.newValue);if(n)return this.Vo(n.clientId,n)}}else if(this.io.test(t.key)){if(t.newValue!==null){const n=this.fo(t.key,t.newValue);if(n)return this.po(n)}}else if(this.so.test(t.key)){if(t.newValue!==null){const n=this.yo(t.key,t.newValue);if(n)return this.wo(n)}}else if(t.key===this.oo){if(t.newValue!==null){const n=this.uo(t.newValue);if(n)return this.co(n)}}else if(t.key===this.no){const n=(function(l){let c=xn.ce;if(l!=null)try{const f=JSON.parse(l);me(typeof f=="number",30636,{So:l}),c=f}catch(f){Nt(jr,"Failed to read sequence number from WebStorage",f)}return c})(t.newValue);n!==xn.ce&&this.sequenceNumberHandler(n)}else if(t.key===this._o){const n=this.bo(t.newValue);await Promise.all(n.map((a=>this.syncEngine.Do(a))))}}}else this.Xs.push(t)}))}}get To(){return this.Zs.get(this.Js)}ao(){this.setItem(this.eo,this.To.Gs())}ho(e,t,n){const a=new um(this.currentUser,e,t,n),l=ib(this.persistenceKey,this.currentUser,e);this.setItem(l,a.Gs())}Po(e){const t=ib(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Eo(e){const t={clientId:this.Js,onlineState:e};this.storage.setItem(this.oo,JSON.stringify(t))}Io(e,t,n){const a=T_(this.persistenceKey,e),l=new eh(e,t,n);this.setItem(a,l.Gs())}Ao(e){const t=JSON.stringify(Array.from(e));this.setItem(this._o,t)}Ro(e){const t=this.ro.exec(e);return t?t[1]:null}mo(e,t){const n=this.Ro(e);return cm.Ws(n,t)}fo(e,t){const n=this.io.exec(e),a=Number(n[1]),l=n[2]!==void 0?n[2]:null;return um.Ws(new en(l),a,t)}yo(e,t){const n=this.so.exec(e),a=Number(n[1]);return eh.Ws(a,t)}uo(e){return vv.Ws(e)}bo(e){return JSON.parse(e)}async po(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Co(e.batchId,e.state,e.error);te(jr,`Ignoring mutation for non-active user ${e.user.uid}`)}wo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Vo(e,t){const n=t?this.Zs.insert(e,t):this.Zs.remove(e),a=this.lo(this.Zs),l=this.lo(n),c=[],f=[];return l.forEach((m=>{a.has(m)||c.push(m)})),a.forEach((m=>{l.has(m)||f.push(m)})),this.syncEngine.Fo(c,f).then((()=>{this.Zs=n}))}co(e){this.Zs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}lo(e){let t=nv();return e.forEach(((n,a)=>{t=t.unionWith(a.activeTargetIds)})),t}}class HR{constructor(){this.Mo=new J_,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new J_,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Wk{Oo(e){}shutdown(){}}/**
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
 */const sb="ConnectivityMonitor";class ab{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){te(sb,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){te(sb,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let bf=null;function Z_(){return bf===null?bf=(function(){return 268435456+Math.round(2147483648*Math.random())})():bf++,"0x"+bf.toString(16)}/**
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
 */const I_="RestConnection",Xk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Jk{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${a}`,this.Wo=this.databaseId.database===em?`project_id=${n}`:`project_id=${n}&database_id=${a}`}Go(e,t,n,a,l){const c=Z_(),f=this.zo(e,t.toUriEncodedString());te(I_,`Sending RPC '${e}' ${c}:`,f,n);const m={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(m,a,l);const{host:g}=new URL(f),y=tu(g);return this.Jo(e,f,m,n,y).then((T=>(te(I_,`Received RPC '${e}' ${c}: `,T),T)),(T=>{throw ni(I_,`RPC '${e}' ${c} failed with error: `,T,"url: ",f,"request:",n),T}))}Ho(e,t,n,a,l,c){return this.Go(e,t,n,a,l)}jo(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ou})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,l)=>e[l]=a)),n&&n.headers.forEach(((a,l)=>e[l]=a))}zo(e,t){const n=Xk[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}/**
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
 */class Zk{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const gn="WebChannelConnection";class eM extends Jk{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,a,l){const c=Z_();return new Promise(((f,m)=>{const g=new XS;g.setWithCredentials(!0),g.listenOnce(JS.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Df.NO_ERROR:const T=g.getResponseJson();te(gn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),f(T);break;case Df.TIMEOUT:te(gn,`RPC '${e}' ${c} timed out`),m(new Z(j.DEADLINE_EXCEEDED,"Request time out"));break;case Df.HTTP_ERROR:const I=g.getStatus();if(te(gn,`RPC '${e}' ${c} failed with status:`,I,"response text:",g.getResponseText()),I>0){let x=g.getResponseJson();Array.isArray(x)&&(x=x[0]);const G=x==null?void 0:x.error;if(G&&G.status&&G.message){const W=(function(ge){const de=ge.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(de)>=0?de:j.UNKNOWN})(G.status);m(new Z(W,G.message))}else m(new Z(j.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new Z(j.UNAVAILABLE,"Connection failed."));break;default:ce(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{te(gn,`RPC '${e}' ${c} completed.`)}}));const y=JSON.stringify(a);te(gn,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",y,n,15)}))}T_(e,t,n){const a=Z_(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=t0(),f=e0(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.jo(m.initMessageHeaders,t,n),m.encodeInitMessageHeaders=!0;const y=l.join("");te(gn,`Creating RPC '${e}' stream ${a}: ${y}`,m);const T=c.createWebChannel(y,m);this.I_(T);let I=!1,x=!1;const G=new Zk({Yo:Y=>{x?te(gn,`Not sending because RPC '${e}' stream ${a} is closed:`,Y):(I||(te(gn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),I=!0),te(gn,`RPC '${e}' stream ${a} sending:`,Y),T.send(Y))},Zo:()=>T.close()}),W=(Y,ge,de)=>{Y.listen(ge,(ne=>{try{de(ne)}catch(_e){setTimeout((()=>{throw _e}),0)}}))};return W(T,Lc.EventType.OPEN,(()=>{x||(te(gn,`RPC '${e}' stream ${a} transport opened.`),G.o_())})),W(T,Lc.EventType.CLOSE,(()=>{x||(x=!0,te(gn,`RPC '${e}' stream ${a} transport closed`),G.a_(),this.E_(T))})),W(T,Lc.EventType.ERROR,(Y=>{x||(x=!0,ni(gn,`RPC '${e}' stream ${a} transport errored. Name:`,Y.name,"Message:",Y.message),G.a_(new Z(j.UNAVAILABLE,"The operation could not be completed")))})),W(T,Lc.EventType.MESSAGE,(Y=>{var ge;if(!x){const de=Y.data[0];me(!!de,16349);const ne=de,_e=(ne==null?void 0:ne.error)||((ge=ne[0])==null?void 0:ge.error);if(_e){te(gn,`RPC '${e}' stream ${a} received error:`,_e);const he=_e.status;let Te=(function(R){const V=Lt[R];if(V!==void 0)return rR(V)})(he),D=_e.message;Te===void 0&&(Te=j.INTERNAL,D="Unknown error status: "+he+" with message "+_e.message),x=!0,G.a_(new Z(Te,D)),T.close()}else te(gn,`RPC '${e}' stream ${a} received:`,de),G.u_(de)}})),W(f,ZS.STAT_EVENT,(Y=>{Y.stat===V_.PROXY?te(gn,`RPC '${e}' stream ${a} detected buffering proxy`):Y.stat===V_.NOPROXY&&te(gn,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{G.__()}),0),G}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}/**
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
 *//**
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
 */function GR(){return typeof window<"u"?window:null}function Bf(){return typeof document<"u"?document:null}/**
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
 */function qh(i){return new sk(i,!0)}/**
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
 */class Ev{constructor(e,t,n=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-n);a>0&&te("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const ob="PersistentStream";class KR{constructor(e,t,n,a,l,c,f,m){this.Mi=e,this.S_=n,this.b_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=f,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ev(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===j.RESOURCE_EXHAUSTED?(Nt(t.toString()),Nt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,a])=>{this.D_===t&&this.G_(n,a)}),(n=>{e((()=>{const a=new Z(j.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(a)}))}))}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{n((()=>this.listener.Xo()))})),this.stream.t_((()=>{n((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((a=>{n((()=>this.z_(a)))})),this.stream.onMessage((a=>{n((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return te(ob,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(te(ob,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class tM extends KR{constructor(e,t,n,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,a,c),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=lk(this.serializer,e),n=(function(l){if(!("targetChange"in l))return ye.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?ye.min():c.readTime?Pt(c.readTime):ye.min()})(e);return this.listener.H_(t,n)}Y_(e){const t={};t.database=Q_(this.serializer),t.addTarget=(function(l,c){let f;const m=c.target;if(f=tm(m)?{documents:fR(l,m)}:{query:mR(l,m).ft},f.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){f.resumeToken=oR(l,c.resumeToken);const g=G_(l,c.expectedCount);g!==null&&(f.expectedCount=g)}else if(c.snapshotVersion.compareTo(ye.min())>0){f.readTime=Ql(l,c.snapshotVersion.toTimestamp());const g=G_(l,c.expectedCount);g!==null&&(f.expectedCount=g)}return f})(this.serializer,e);const n=ck(this.serializer,e);n&&(t.labels=n),this.q_(t)}Z_(e){const t={};t.database=Q_(this.serializer),t.removeTarget=e,this.q_(t)}}class nM extends KR{constructor(e,t,n,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,a,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return me(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){me(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=uk(e.writeResults,e.commitTime),n=Pt(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=Q_(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>vh(this.serializer,n)))};this.q_(t)}}/**
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
 */class rM{}class iM extends rM{constructor(e,t,n,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new Z(j.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Go(e,K_(t,n),a,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new Z(j.UNKNOWN,l.toString())}))}Ho(e,t,n,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,f])=>this.connection.Ho(e,K_(t,n),a,c,f,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new Z(j.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class sM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Nt(t),this.aa=!1):te("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const uo="RemoteStore";class aM{constructor(e,t,n,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((c=>{n.enqueueAndForget((async()=>{Zs(this)&&(te(uo,"Restarting streams for network reachability change."),await(async function(m){const g=le(m);g.Ea.add(4),await hu(g),g.Ra.set("Unknown"),g.Ea.delete(4),await jh(g)})(this))}))})),this.Ra=new sM(n,a)}}async function jh(i){if(Zs(i))for(const e of i.da)await e(!0)}async function hu(i){for(const e of i.da)await e(!1)}function zm(i,e){const t=le(i);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Iv(t)?wv(t):fu(t).O_()&&Tv(t,e))}function Wl(i,e){const t=le(i),n=fu(t);t.Ia.delete(e),n.O_()&&QR(t,e),t.Ia.size===0&&(n.O_()?n.L_():Zs(t)&&t.Ra.set("Unknown"))}function Tv(i,e){if(i.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}fu(i).Y_(e)}function QR(i,e){i.Va.Ue(e),fu(i).Z_(e)}function wv(i){i.Va=new tk({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),fu(i).start(),i.Ra.ua()}function Iv(i){return Zs(i)&&!fu(i).x_()&&i.Ia.size>0}function Zs(i){return le(i).Ea.size===0}function YR(i){i.Va=void 0}async function oM(i){i.Ra.set("Online")}async function lM(i){i.Ia.forEach(((e,t)=>{Tv(i,e)}))}async function uM(i,e){YR(i),Iv(i)?(i.Ra.ha(e),wv(i)):i.Ra.set("Unknown")}async function cM(i,e,t){if(i.Ra.set("Online"),e instanceof aR&&e.state===2&&e.cause)try{await(async function(a,l){const c=l.cause;for(const f of l.targetIds)a.Ia.has(f)&&(await a.remoteSyncer.rejectListen(f,c),a.Ia.delete(f),a.Va.removeTarget(f))})(i,e)}catch(n){te(uo,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await hm(i,n)}else if(e instanceof Lf?i.Va.Ze(e):e instanceof sR?i.Va.st(e):i.Va.tt(e),!t.isEqual(ye.min()))try{const n=await MR(i.localStore);t.compareTo(n)>=0&&await(function(l,c){const f=l.Va.Tt(c);return f.targetChanges.forEach(((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const y=l.Ia.get(g);y&&l.Ia.set(g,y.withResumeToken(m.resumeToken,c))}})),f.targetMismatches.forEach(((m,g)=>{const y=l.Ia.get(m);if(!y)return;l.Ia.set(m,y.withResumeToken(It.EMPTY_BYTE_STRING,y.snapshotVersion)),QR(l,m);const T=new Vi(y.target,m,g,y.sequenceNumber);Tv(l,T)})),l.remoteSyncer.applyRemoteEvent(f)})(i,t)}catch(n){te(uo,"Failed to raise snapshot:",n),await hm(i,n)}}async function hm(i,e,t){if(!Xs(e))throw e;i.Ea.add(1),await hu(i),i.Ra.set("Offline"),t||(t=()=>MR(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{te(uo,"Retrying IndexedDB access"),await t(),i.Ea.delete(1),await jh(i)}))}function $R(i,e){return e().catch((t=>hm(i,t,e)))}async function du(i){const e=le(i),t=Gs(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Os;for(;hM(e);)try{const a=await Qk(e.localStore,n);if(a===null){e.Ta.length===0&&t.L_();break}n=a.batchId,dM(e,a)}catch(a){await hm(e,a)}WR(e)&&XR(e)}function hM(i){return Zs(i)&&i.Ta.length<10}function dM(i,e){i.Ta.push(e);const t=Gs(i);t.O_()&&t.X_&&t.ea(e.mutations)}function WR(i){return Zs(i)&&!Gs(i).x_()&&i.Ta.length>0}function XR(i){Gs(i).start()}async function fM(i){Gs(i).ra()}async function mM(i){const e=Gs(i);for(const t of i.Ta)e.ea(t.mutations)}async function pM(i,e,t){const n=i.Ta.shift(),a=av.from(n,e,t);await $R(i,(()=>i.remoteSyncer.applySuccessfulWrite(a))),await du(i)}async function gM(i,e){e&&Gs(i).X_&&await(async function(n,a){if((function(c){return nR(c)&&c!==j.ABORTED})(a.code)){const l=n.Ta.shift();Gs(n).B_(),await $R(n,(()=>n.remoteSyncer.rejectFailedWrite(l.batchId,a))),await du(n)}})(i,e),WR(i)&&XR(i)}async function lb(i,e){const t=le(i);t.asyncQueue.verifyOperationInProgress(),te(uo,"RemoteStore received new credentials");const n=Zs(t);t.Ea.add(3),await hu(t),n&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await jh(t)}async function ey(i,e){const t=le(i);e?(t.Ea.delete(2),await jh(t)):e||(t.Ea.add(2),await hu(t),t.Ra.set("Unknown"))}function fu(i){return i.ma||(i.ma=(function(t,n,a){const l=le(t);return l.sa(),new tM(n,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(i.datastore,i.asyncQueue,{Xo:oM.bind(null,i),t_:lM.bind(null,i),r_:uM.bind(null,i),H_:cM.bind(null,i)}),i.da.push((async e=>{e?(i.ma.B_(),Iv(i)?wv(i):i.Ra.set("Unknown")):(await i.ma.stop(),YR(i))}))),i.ma}function Gs(i){return i.fa||(i.fa=(function(t,n,a){const l=le(t);return l.sa(),new nM(n,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(i.datastore,i.asyncQueue,{Xo:()=>Promise.resolve(),t_:fM.bind(null,i),r_:gM.bind(null,i),ta:mM.bind(null,i),na:pM.bind(null,i)}),i.da.push((async e=>{e?(i.fa.B_(),await du(i)):(await i.fa.stop(),i.Ta.length>0&&(te(uo,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
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
 */class Av{constructor(e,t,n,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=a,this.removalCallback=l,this.deferred=new hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,a,l){const c=Date.now()+n,f=new Av(e,t,c,a,l);return f.start(n),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mu(i,e){if(Nt("AsyncQueue",`${e}: ${i}`),Xs(i))return new Z(j.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class Dl{static emptySet(e){return new Dl(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||oe.comparator(t.key,n.key):(t,n)=>oe.comparator(t.key,n.key),this.keyedMap=Uc(),this.sortedSet=new lt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Dl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=n.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Dl;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class ub{constructor(){this.ga=new lt(oe.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ce(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Xl{constructor(e,t,n,a,l,c,f,m,g){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=f,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(e,t,n,a,l){const c=[];return t.forEach((f=>{c.push({type:0,doc:f})})),new Xl(e,t,Dl.emptySet(t),c,n,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==n[a].type||!t[a].doc.isEqual(n[a].doc))return!1;return!0}}/**
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
 */class _M{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class yM{constructor(){this.queries=cb(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const a=le(t),l=a.queries;a.queries=cb(),l.forEach(((c,f)=>{for(const m of f.Sa)m.onError(n)}))})(this,new Z(j.ABORTED,"Firestore shutting down"))}}function cb(){return new ji((i=>q0(i)),Lh)}async function bv(i,e){const t=le(i);let n=3;const a=e.query;let l=t.queries.get(a);l?!l.ba()&&e.Da()&&(n=2):(l=new _M,n=e.Da()?0:1);try{switch(n){case 0:l.wa=await t.onListen(a,!0);break;case 1:l.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const f=mu(c,`Initialization of query '${vl(e.query)}' failed`);return void e.onError(f)}t.queries.set(a,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&Rv(t)}async function Sv(i,e){const t=le(i),n=e.query;let a=3;const l=t.queries.get(n);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function vM(i,e){const t=le(i);let n=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const f of c.Sa)f.Fa(a)&&(n=!0);c.wa=a}}n&&Rv(t)}function EM(i,e,t){const n=le(i),a=n.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);n.queries.delete(e)}function Rv(i){i.Ca.forEach((e=>{e.next()}))}var ty,hb;(hb=ty||(ty={})).Ma="default",hb.Cache="cache";class Cv{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const a of e.docChanges)a.type!==3&&n.push(a);e=new Xl(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Xl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ty.Cache}}/**
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
 */class TM{constructor(e,t){this.Qa=e,this.byteLength=t}$a(){return"metadata"in this.Qa}}/**
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
 */class db{constructor(e){this.serializer=e}$s(e){return Jr(this.serializer,e)}Us(e){return e.metadata.exists?dR(this.serializer,e.document,!1):ct.newNoDocument(this.$s(e.metadata.name),this.Ks(e.metadata.readTime))}Ks(e){return Pt(e)}}class wM{constructor(e,t){this.Ua=e,this.serializer=t,this.Ka=[],this.Wa=[],this.collectionGroups=new Set,this.progress=JR(e)}get queries(){return this.Ka}get documents(){return this.Wa}Ga(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Qa.namedQuery)this.Ka.push(e.Qa.namedQuery);else if(e.Qa.documentMetadata){this.Wa.push({metadata:e.Qa.documentMetadata}),e.Qa.documentMetadata.exists||++t;const n=Me.fromString(e.Qa.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Qa.document&&(this.Wa[this.Wa.length-1].document=e.Qa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,{...this.progress}):null}za(e){const t=new Map,n=new db(this.serializer);for(const a of e)if(a.metadata.queries){const l=n.$s(a.metadata.name);for(const c of a.metadata.queries){const f=(t.get(c)||Ce()).add(l);t.set(c,f)}}return t}async ja(e){const t=await Yk(e,new db(this.serializer),this.Wa,this.Ua.id),n=this.za(this.documents);for(const a of this.Ka)await $k(e,a,n.get(a.name));return this.progress.taskState="Success",{progress:this.progress,Ja:this.collectionGroups,Ha:t}}}function JR(i){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:i.totalDocuments,totalBytes:i.totalBytes}}/**
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
 */class ZR{constructor(e){this.key=e}}class e1{constructor(e){this.key=e}}class t1{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ce(),this.mutatedKeys=Ce(),this.eu=H0(e),this.tu=new Dl(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new ub,a=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,f=!1;const m=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((y,T)=>{const I=a.get(y),x=Uh(this.query,T)?T:null,G=!!I&&this.mutatedKeys.has(I.key),W=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let Y=!1;I&&x?I.data.isEqual(x.data)?G!==W&&(n.track({type:3,doc:x}),Y=!0):this.su(I,x)||(n.track({type:2,doc:x}),Y=!0,(m&&this.eu(x,m)>0||g&&this.eu(x,g)<0)&&(f=!0)):!I&&x?(n.track({type:0,doc:x}),Y=!0):I&&!x&&(n.track({type:1,doc:I}),Y=!0,(m||g)&&(f=!0)),Y&&(x?(c=c.add(x),l=W?l.add(y):l.delete(y)):(c=c.delete(y),l=l.delete(y)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),l=l.delete(y.key),n.track({type:1,doc:y})}return{tu:c,iu:n,Cs:f,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((y,T)=>(function(x,G){const W=Y=>{switch(Y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce(20277,{Rt:Y})}};return W(x)-W(G)})(y.type,T.type)||this.eu(y.doc,T.doc))),this.ou(n),a=a??!1;const f=t&&!a?this._u():[],m=this.Xa.size===0&&this.current&&!a?1:0,g=m!==this.Za;return this.Za=m,c.length!==0||g?{snapshot:new Xl(this.query,e.tu,l,c,e.mutatedKeys,m===0,g,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ub,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ce(),this.tu.forEach((n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))}));const t=[];return e.forEach((n=>{this.Xa.has(n)||t.push(new e1(n))})),this.Xa.forEach((n=>{e.has(n)||t.push(new ZR(n))})),t}cu(e){this.Ya=e.Qs,this.Xa=Ce();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Xl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ea="SyncEngine";class IM{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class AM{constructor(e){this.key=e,this.hu=!1}}class bM{constructor(e,t,n,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new ji((f=>q0(f)),Lh),this.Iu=new Map,this.Eu=new Set,this.du=new lt(oe.comparator),this.Au=new Map,this.Ru=new fv,this.Vu={},this.mu=new Map,this.fu=lo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function SM(i,e,t=!0){const n=Fm(i);let a;const l=n.Tu.get(e);return l?(n.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await n1(n,e,t,!0),a}async function RM(i,e){const t=Fm(i);await n1(t,e,!0,!1)}async function n1(i,e,t,n){const a=await Yl(i.localStore,Rn(e)),l=a.targetId,c=i.sharedClientState.addLocalQueryTarget(l,t);let f;return n&&(f=await Dv(i,e,l,c==="current",a.resumeToken)),i.isPrimaryClient&&t&&zm(i.remoteStore,a),f}async function Dv(i,e,t,n,a){i.pu=(T,I,x)=>(async function(W,Y,ge,de){let ne=Y.view.ru(ge);ne.Cs&&(ne=await lm(W.localStore,Y.query,!1).then((({documents:D})=>Y.view.ru(D,ne))));const _e=de&&de.targetChanges.get(Y.targetId),he=de&&de.targetMismatches.get(Y.targetId)!=null,Te=Y.view.applyChanges(ne,W.isPrimaryClient,_e,he);return ny(W,Y.targetId,Te.au),Te.snapshot})(i,T,I,x);const l=await lm(i.localStore,e,!0),c=new t1(e,l.Qs),f=c.ru(l.documents),m=Fh.createSynthesizedTargetChangeForCurrentChange(t,n&&i.onlineState!=="Offline",a),g=c.applyChanges(f,i.isPrimaryClient,m);ny(i,t,g.au);const y=new IM(e,t,c);return i.Tu.set(e,y),i.Iu.has(t)?i.Iu.get(t).push(e):i.Iu.set(t,[e]),g.snapshot}async function CM(i,e,t){const n=le(i),a=n.Tu.get(e),l=n.Iu.get(a.targetId);if(l.length>1)return n.Iu.set(a.targetId,l.filter((c=>!Lh(c,e)))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(a.targetId),n.sharedClientState.isActiveQueryTarget(a.targetId)||await $l(n.localStore,a.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(a.targetId),t&&Wl(n.remoteStore,a.targetId),Jl(n,a.targetId)})).catch(Ws)):(Jl(n,a.targetId),await $l(n.localStore,a.targetId,!0))}async function DM(i,e){const t=le(i),n=t.Tu.get(e),a=t.Iu.get(n.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Wl(t.remoteStore,n.targetId))}async function NM(i,e,t){const n=xv(i);try{const a=await(function(c,f){const m=le(c),g=Ye.now(),y=f.reduce(((x,G)=>x.add(G.key)),Ce());let T,I;return m.persistence.runTransaction("Locally write mutations","readwrite",(x=>{let G=kn(),W=Ce();return m.Ns.getEntries(x,y).next((Y=>{G=Y,G.forEach(((ge,de)=>{de.isValidDocument()||(W=W.add(ge))}))})).next((()=>m.localDocuments.getOverlayedDocuments(x,G))).next((Y=>{T=Y;const ge=[];for(const de of f){const ne=J2(de,T.get(de.key).overlayedDocument);ne!=null&&ge.push(new Hi(de.key,ne,x0(ne.value.mapValue),gt.exists(!0)))}return m.mutationQueue.addMutationBatch(x,g,ge,f)})).next((Y=>{I=Y;const ge=Y.applyToLocalDocumentSet(T,W);return m.documentOverlayCache.saveOverlays(x,Y.batchId,ge)}))})).then((()=>({batchId:I.batchId,changes:K0(T)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(a.batchId),(function(c,f,m){let g=c.Vu[c.currentUser.toKey()];g||(g=new lt(Re)),g=g.insert(f,m),c.Vu[c.currentUser.toKey()]=g})(n,a.batchId,t),await Gi(n,a.changes),await du(n.remoteStore)}catch(a){const l=mu(a,"Failed to persist write");t.reject(l)}}async function r1(i,e){const t=le(i);try{const n=await Kk(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const c=t.Au.get(l);c&&(me(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.hu=!0:a.modifiedDocuments.size>0?me(c.hu,14607):a.removedDocuments.size>0&&(me(c.hu,42227),c.hu=!1))})),await Gi(t,n,e)}catch(n){await Ws(n)}}function fb(i,e,t){const n=le(i);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const a=[];n.Tu.forEach(((l,c)=>{const f=c.view.va(e);f.snapshot&&a.push(f.snapshot)})),(function(c,f){const m=le(c);m.onlineState=f;let g=!1;m.queries.forEach(((y,T)=>{for(const I of T.Sa)I.va(f)&&(g=!0)})),g&&Rv(m)})(n.eventManager,e),a.length&&n.Pu.H_(a),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function PM(i,e,t){const n=le(i);n.sharedClientState.updateQueryState(e,"rejected",t);const a=n.Au.get(e),l=a&&a.key;if(l){let c=new lt(oe.comparator);c=c.insert(l,ct.newNoDocument(l,ye.min()));const f=Ce().add(l),m=new zh(ye.min(),new Map,new lt(Re),c,f);await r1(n,m),n.du=n.du.remove(l),n.Au.delete(e),Vv(n)}else await $l(n.localStore,e,!1).then((()=>Jl(n,e,t))).catch(Ws)}async function VM(i,e){const t=le(i),n=e.batch.batchId;try{const a=await Gk(t.localStore,e);Pv(t,n,null),Nv(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Gi(t,a)}catch(a){await Ws(a)}}async function xM(i,e,t){const n=le(i);try{const a=await(function(c,f){const m=le(c);return m.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let y;return m.mutationQueue.lookupMutationBatch(g,f).next((T=>(me(T!==null,37113),y=T.keys(),m.mutationQueue.removeMutationBatch(g,T)))).next((()=>m.mutationQueue.performConsistencyCheck(g))).next((()=>m.documentOverlayCache.removeOverlaysForBatchId(g,y,f))).next((()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y))).next((()=>m.localDocuments.getDocuments(g,y)))}))})(n.localStore,e);Pv(n,e,t),Nv(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Gi(n,a)}catch(a){await Ws(a)}}async function OM(i,e){const t=le(i);Zs(t.remoteStore)||te(ea,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await(function(c){const f=le(c);return f.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(m=>f.mutationQueue.getHighestUnacknowledgedBatchId(m)))})(t.localStore);if(n===Os)return void e.resolve();const a=t.mu.get(n)||[];a.push(e),t.mu.set(n,a)}catch(n){const a=mu(n,"Initialization of waitForPendingWrites() operation failed");e.reject(a)}}function Nv(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function Pv(i,e,t){const n=le(i);let a=n.Vu[n.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),n.Vu[n.currentUser.toKey()]=a}}function Jl(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const n of i.Iu.get(e))i.Tu.delete(n),t&&i.Pu.yu(n,t);i.Iu.delete(e),i.isPrimaryClient&&i.Ru.jr(e).forEach((n=>{i.Ru.containsKey(n)||i1(i,n)}))}function i1(i,e){i.Eu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(Wl(i.remoteStore,t),i.du=i.du.remove(e),i.Au.delete(t),Vv(i))}function ny(i,e,t){for(const n of t)n instanceof ZR?(i.Ru.addReference(n.key,e),kM(i,n)):n instanceof e1?(te(ea,"Document no longer in limbo: "+n.key),i.Ru.removeReference(n.key,e),i.Ru.containsKey(n.key)||i1(i,n.key)):ce(19791,{wu:n})}function kM(i,e){const t=e.key,n=t.path.canonicalString();i.du.get(t)||i.Eu.has(n)||(te(ea,"New document in limbo: "+t),i.Eu.add(n),Vv(i))}function Vv(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const t=new oe(Me.fromString(e)),n=i.fu.next();i.Au.set(n,new AM(t)),i.du=i.du.insert(t,n),zm(i.remoteStore,new Vi(Rn(lu(t.path)),n,"TargetPurposeLimboResolution",xn.ce))}}async function Gi(i,e,t){const n=le(i),a=[],l=[],c=[];n.Tu.isEmpty()||(n.Tu.forEach(((f,m)=>{c.push(n.pu(m,e,t).then((g=>{var y;if((g||t)&&n.isPrimaryClient){const T=g?!g.fromCache:(y=t==null?void 0:t.targetChanges.get(m.targetId))==null?void 0:y.current;n.sharedClientState.updateQueryState(m.targetId,T?"current":"not-current")}if(g){a.push(g);const T=_v.As(m.targetId,g);l.push(T)}})))})),await Promise.all(c),n.Pu.H_(a),await(async function(m,g){const y=le(m);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>U.forEach(g,(I=>U.forEach(I.Es,(x=>y.persistence.referenceDelegate.addReference(T,I.targetId,x))).next((()=>U.forEach(I.ds,(x=>y.persistence.referenceDelegate.removeReference(T,I.targetId,x)))))))))}catch(T){if(!Xs(T))throw T;te(yv,"Failed to update sequence numbers: "+T)}for(const T of g){const I=T.targetId;if(!T.fromCache){const x=y.Ms.get(I),G=x.snapshotVersion,W=x.withLastLimboFreeSnapshotVersion(G);y.Ms=y.Ms.insert(I,W)}}})(n.localStore,l))}async function MM(i,e){const t=le(i);if(!t.currentUser.isEqual(e)){te(ea,"User change. New user:",e.toKey());const n=await kR(t.localStore,e);t.currentUser=e,(function(l,c){l.mu.forEach((f=>{f.forEach((m=>{m.reject(new Z(j.CANCELLED,c))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Gi(t,n.Ls)}}function LM(i,e){const t=le(i),n=t.Au.get(e);if(n&&n.hu)return Ce().add(n.key);{let a=Ce();const l=t.Iu.get(e);if(!l)return a;for(const c of l){const f=t.Tu.get(c);a=a.unionWith(f.view.nu)}return a}}async function UM(i,e){const t=le(i),n=await lm(t.localStore,e.query,!0),a=e.view.cu(n);return t.isPrimaryClient&&ny(t,e.targetId,a.au),a}async function BM(i,e){const t=le(i);return BR(t.localStore,e).then((n=>Gi(t,n)))}async function zM(i,e,t,n){const a=le(i),l=await(function(f,m){const g=le(f),y=le(g.mutationQueue);return g.persistence.runTransaction("Lookup mutation documents","readonly",(T=>y.er(T,m).next((I=>I?g.localDocuments.getDocuments(T,I):U.resolve(null)))))})(a.localStore,e);l!==null?(t==="pending"?await du(a.remoteStore):t==="acknowledged"||t==="rejected"?(Pv(a,e,n||null),Nv(a,e),(function(f,m){le(le(f).mutationQueue).ir(m)})(a.localStore,e)):ce(6720,"Unknown batchState",{Su:t}),await Gi(a,l)):te(ea,"Cannot apply mutation batch with id: "+e)}async function FM(i,e){const t=le(i);if(Fm(t),xv(t),e===!0&&t.gu!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),a=await mb(t,n.toArray());t.gu=!0,await ey(t.remoteStore,!0);for(const l of a)zm(t.remoteStore,l)}else if(e===!1&&t.gu!==!1){const n=[];let a=Promise.resolve();t.Iu.forEach(((l,c)=>{t.sharedClientState.isLocalQueryTarget(c)?n.push(c):a=a.then((()=>(Jl(t,c),$l(t.localStore,c,!0)))),Wl(t.remoteStore,c)})),await a,await mb(t,n),(function(c){const f=le(c);f.Au.forEach(((m,g)=>{Wl(f.remoteStore,g)})),f.Ru.Jr(),f.Au=new Map,f.du=new lt(oe.comparator)})(t),t.gu=!1,await ey(t.remoteStore,!1)}}async function mb(i,e,t){const n=le(i),a=[],l=[];for(const c of e){let f;const m=n.Iu.get(c);if(m&&m.length!==0){f=await Yl(n.localStore,Rn(m[0]));for(const g of m){const y=n.Tu.get(g),T=await UM(n,y);T.snapshot&&l.push(T.snapshot)}}else{const g=await UR(n.localStore,c);f=await Yl(n.localStore,g),await Dv(n,s1(g),c,!1,f.resumeToken)}a.push(f)}return n.Pu.H_(l),a}function s1(i){return F0(i.path,i.collectionGroup,i.orderBy,i.filters,i.limit,"F",i.startAt,i.endAt)}function qM(i){return(function(t){return le(le(t).persistence).Ts()})(le(i).localStore)}async function jM(i,e,t,n){const a=le(i);if(a.gu)return void te(ea,"Ignoring unexpected query state notification.");const l=a.Iu.get(e);if(l&&l.length>0)switch(t){case"current":case"not-current":{const c=await BR(a.localStore,j0(l[0])),f=zh.createSynthesizedRemoteEventForCurrentChange(e,t==="current",It.EMPTY_BYTE_STRING);await Gi(a,c,f);break}case"rejected":await $l(a.localStore,e,!0),Jl(a,e,n);break;default:ce(64155,t)}}async function HM(i,e,t){const n=Fm(i);if(n.gu){for(const a of e){if(n.Iu.has(a)&&n.sharedClientState.isActiveQueryTarget(a)){te(ea,"Adding an already active target "+a);continue}const l=await UR(n.localStore,a),c=await Yl(n.localStore,l);await Dv(n,s1(l),c.targetId,!1,c.resumeToken),zm(n.remoteStore,c)}for(const a of t)n.Iu.has(a)&&await $l(n.localStore,a,!1).then((()=>{Wl(n.remoteStore,a),Jl(n,a)})).catch(Ws)}}function Fm(i){const e=le(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=r1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=PM.bind(null,e),e.Pu.H_=vM.bind(null,e.eventManager),e.Pu.yu=EM.bind(null,e.eventManager),e}function xv(i){const e=le(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=VM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xM.bind(null,e),e}function GM(i,e,t){const n=le(i);(async function(l,c,f){try{const m=await c.getMetadata();if(await(function(x,G){const W=le(x),Y=Pt(G.createTime);return W.persistence.runTransaction("hasNewerBundle","readonly",(ge=>W.Ii.getBundleMetadata(ge,G.id))).then((ge=>!!ge&&ge.createTime.compareTo(Y)>=0))})(l.localStore,m))return await c.close(),f._completeWith((function(x){return{taskState:"Success",documentsLoaded:x.totalDocuments,bytesLoaded:x.totalBytes,totalDocuments:x.totalDocuments,totalBytes:x.totalBytes}})(m)),Promise.resolve(new Set);f._updateProgress(JR(m));const g=new wM(m,c.serializer);let y=await c.bu();for(;y;){const I=await g.Ga(y);I&&f._updateProgress(I),y=await c.bu()}const T=await g.ja(l.localStore);return await Gi(l,T.Ha,void 0),await(function(x,G){const W=le(x);return W.persistence.runTransaction("Save bundle","readwrite",(Y=>W.Ii.saveBundleMetadata(Y,G)))})(l.localStore,m),f._completeWith(T.progress),Promise.resolve(T.Ja)}catch(m){return ni(ea,`Loading bundle failed with ${m}`),f._failWith(m),Promise.resolve(new Set)}})(n,e,t).then((a=>{n.sharedClientState.notifyBundleLoaded(a)}))}class Eh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return OR(this.persistence,new xR,e.initialUser,this.serializer)}Cu(e){return new mv(Bm.mi,this.serializer)}Du(e){return new HR}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Eh.provider={build:()=>new Eh};class KM extends Eh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){me(this.persistence.referenceDelegate instanceof om,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new RR(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?_n.withCacheSize(this.cacheSizeBytes):_n.DEFAULT;return new mv((n=>om.mi(n,t)),this.serializer)}}class a1 extends Eh{constructor(e,t,n){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await xv(this.xu.syncEngine),await du(this.xu.remoteStore),await this.persistence.Ji((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(e){return OR(this.persistence,new xR,e.initialUser,this.serializer)}Fu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new RR(n,e.asyncQueue,t)}Mu(e,t){const n=new t2(t,this.persistence);return new e2(e.asyncQueue,n)}Cu(e){const t=gv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?_n.withCacheSize(this.cacheSizeBytes):_n.DEFAULT;return new pv(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,GR(),Bf(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new HR}}class QM extends a1{constructor(e,t){super(e,t,!1),this.xu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.xu.syncEngine;this.sharedClientState instanceof w_&&(this.sharedClientState.syncEngine={Co:zM.bind(null,t),vo:jM.bind(null,t),Fo:HM.bind(null,t),Ts:qM.bind(null,t),Do:BM.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ji((async n=>{await FM(this.xu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())}))}Du(e){const t=GR();if(!w_.v(t))throw new Z(j.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=gv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new w_(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Th{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>fb(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=MM.bind(null,this.syncEngine),await ey(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new yM})()}createDatastore(e){const t=qh(e.databaseInfo.databaseId),n=(function(l){return new eM(l)})(e.databaseInfo);return(function(l,c,f,m){return new iM(l,c,f,m)})(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,a,l,c,f){return new aM(n,a,l,c,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>fb(this.syncEngine,t,0)),(function(){return ab.v()?new ab:new Wk})())}createSyncEngine(e,t){return(function(a,l,c,f,m,g,y){const T=new bM(a,l,c,f,m,g);return y&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(a){const l=le(a);te(uo,"RemoteStore shutting down."),l.Ea.add(5),await hu(l),l.Aa.shutdown(),l.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Th.provider={build:()=>new Th};function pb(i,e=10240){let t=0;return{async read(){if(t<i.byteLength){const n={value:i.slice(t,t+e),done:!1};return t+=e,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 *//**
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
 */class qm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Nt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */class YM{constructor(e,t){this.Bu=e,this.serializer=t,this.metadata=new hn,this.buffer=new Uint8Array,this.Lu=(function(){return new TextDecoder("utf-8")})(),this.ku().then((n=>{n&&n.$a()?this.metadata.resolve(n.Qa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.Qa)}`))}),(n=>this.metadata.reject(n)))}close(){return this.Bu.cancel()}async getMetadata(){return this.metadata.promise}async bu(){return await this.getMetadata(),this.ku()}async ku(){const e=await this.qu();if(e===null)return null;const t=this.Lu.decode(e),n=Number(t);isNaN(n)&&this.Qu(`length string (${t}) is not valid number`);const a=await this.$u(n);return new TM(JSON.parse(a),e.length+n)}Uu(){return this.buffer.findIndex((e=>e===123))}async qu(){for(;this.Uu()<0&&!await this.Ku(););if(this.buffer.length===0)return null;const e=this.Uu();e<0&&this.Qu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $u(e){for(;this.buffer.length<e;)await this.Ku()&&this.Qu("Reached the end of bundle when more is expected.");const t=this.Lu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Qu(e){throw this.Bu.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ku(){const e=await this.Bu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class $M{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new Z(j.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(a,l){const c=le(a),f={documents:l.map((T=>yh(c.serializer,T)))},m=await c.Ho("BatchGetDocuments",c.serializer.databaseId,Me.emptyPath(),f,l.length),g=new Map;m.forEach((T=>{const I=ok(c.serializer,T);g.set(I.key.toString(),I)}));const y=[];return l.forEach((T=>{const I=g.get(T.toString());me(!!I,55234,{key:T}),y.push(I)})),y})(this.datastore,e);return t.forEach((n=>this.recordVersion(n))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new cu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,n)=>{const a=oe.fromPath(n);this.mutations.push(new iv(a,this.precondition(a)))})),await(async function(n,a){const l=le(n),c={writes:a.map((f=>vh(l.serializer,f)))};await l.Go("Commit",l.serializer.databaseId,Me.emptyPath(),c)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw ce(50498,{Gu:e.constructor.name});t=ye.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new Z(j.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ye.min())?gt.exists(!1):gt.updateTime(t):gt.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ye.min()))throw new Z(j.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return gt.updateTime(t)}return gt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class WM{constructor(e,t,n,a,l){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=a,this.deferred=l,this.zu=n.maxAttempts,this.M_=new Ev(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_((async()=>{const e=new $M(this.datastore),t=this.Hu(e);t&&t.then((n=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(n)})).catch((a=>{this.Yu(a)}))))})).catch((n=>{this.Yu(n)}))}))}Hu(e){try{const t=this.updateFunction(e);return!Oh(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Yu(e){this.zu>0&&this.Zu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Ju(),Promise.resolve())))):this.deferred.reject(e)}Zu(e){if((e==null?void 0:e.name)==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!nR(t)}return!1}}/**
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
 */const Ks="FirestoreClient";class XM{constructor(e,t,n,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=a,this.user=en.UNAUTHENTICATED,this.clientId=Hy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(n,(async c=>{te(Ks,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(n,(c=>(te(Ks,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=mu(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function A_(i,e){i.asyncQueue.verifyOperationInProgress(),te(Ks,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let n=t.initialUser;i.setCredentialChangeListener((async a=>{n.isEqual(a)||(await kR(e.localStore,a),n=a)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function gb(i,e){i.asyncQueue.verifyOperationInProgress();const t=await Ov(i);te(Ks,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((n=>lb(e.remoteStore,n))),i.setAppCheckTokenChangeListener(((n,a)=>lb(e.remoteStore,a))),i._onlineComponents=e}async function Ov(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){te(Ks,"Using user provided OfflineComponentProvider");try{await A_(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===j.FAILED_PRECONDITION||a.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;ni("Error using user provided cache. Falling back to memory cache: "+t),await A_(i,new Eh)}}else te(Ks,"Using default OfflineComponentProvider"),await A_(i,new KM(void 0));return i._offlineComponents}async function jm(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(te(Ks,"Using user provided OnlineComponentProvider"),await gb(i,i._uninitializedComponentsProvider._online)):(te(Ks,"Using default OnlineComponentProvider"),await gb(i,new Th))),i._onlineComponents}function o1(i){return Ov(i).then((e=>e.persistence))}function kv(i){return Ov(i).then((e=>e.localStore))}function l1(i){return jm(i).then((e=>e.remoteStore))}function Mv(i){return jm(i).then((e=>e.syncEngine))}function JM(i){return jm(i).then((e=>e.datastore))}async function Zl(i){const e=await jm(i),t=e.eventManager;return t.onListen=SM.bind(null,e.syncEngine),t.onUnlisten=CM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=RM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=DM.bind(null,e.syncEngine),t}function ZM(i){return i.asyncQueue.enqueue((async()=>{const e=await o1(i),t=await l1(i);return e.setNetworkEnabled(!0),(function(a){const l=le(a);return l.Ea.delete(0),jh(l)})(t)}))}function e4(i){return i.asyncQueue.enqueue((async()=>{const e=await o1(i),t=await l1(i);return e.setNetworkEnabled(!1),(async function(a){const l=le(a);l.Ea.add(0),await hu(l),l.Ra.set("Offline")})(t)}))}function t4(i,e){const t=new hn;return i.asyncQueue.enqueueAndForget((async()=>(async function(a,l,c){try{const f=await(function(g,y){const T=le(g);return T.persistence.runTransaction("read document","readonly",(I=>T.localDocuments.getDocument(I,y)))})(a,l);f.isFoundDocument()?c.resolve(f):f.isNoDocument()?c.resolve(null):c.reject(new Z(j.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(f){const m=mu(f,`Failed to get document '${l} from cache`);c.reject(m)}})(await kv(i),e,t))),t.promise}function u1(i,e,t={}){const n=new hn;return i.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,m,g){const y=new qm({next:I=>{y.Nu(),c.enqueueAndForget((()=>Sv(l,T)));const x=I.docs.has(f);!x&&I.fromCache?g.reject(new Z(j.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&I.fromCache&&m&&m.source==="server"?g.reject(new Z(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(I)},error:I=>g.reject(I)}),T=new Cv(lu(f.path),y,{includeMetadataChanges:!0,qa:!0});return bv(l,T)})(await Zl(i),i.asyncQueue,e,t,n))),n.promise}function n4(i,e){const t=new hn;return i.asyncQueue.enqueueAndForget((async()=>(async function(a,l,c){try{const f=await lm(a,l,!0),m=new t1(l,f.Qs),g=m.ru(f.documents),y=m.applyChanges(g,!1);c.resolve(y.snapshot)}catch(f){const m=mu(f,`Failed to execute query '${l} against cache`);c.reject(m)}})(await kv(i),e,t))),t.promise}function c1(i,e,t={}){const n=new hn;return i.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,m,g){const y=new qm({next:I=>{y.Nu(),c.enqueueAndForget((()=>Sv(l,T))),I.fromCache&&m.source==="server"?g.reject(new Z(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(I)},error:I=>g.reject(I)}),T=new Cv(f,y,{includeMetadataChanges:!0,qa:!0});return bv(l,T)})(await Zl(i),i.asyncQueue,e,t,n))),n.promise}function r4(i,e){const t=new qm(e);return i.asyncQueue.enqueueAndForget((async()=>(function(a,l){le(a).Ca.add(l),l.next()})(await Zl(i),t))),()=>{t.Nu(),i.asyncQueue.enqueueAndForget((async()=>(function(a,l){le(a).Ca.delete(l)})(await Zl(i),t)))}}function i4(i,e,t,n){const a=(function(c,f){let m;return m=typeof c=="string"?iR().encode(c):c,(function(y,T){return new YM(y,T)})((function(y,T){if(y instanceof Uint8Array)return pb(y,T);if(y instanceof ArrayBuffer)return pb(new Uint8Array(y),T);if(y instanceof ReadableStream)return y.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")})(m),f)})(t,qh(e));i.asyncQueue.enqueueAndForget((async()=>{GM(await Mv(i),a,n)}))}function s4(i,e){return i.asyncQueue.enqueue((async()=>(function(n,a){const l=le(n);return l.persistence.runTransaction("Get named query","readonly",(c=>l.Ii.getNamedQuery(c,a)))})(await kv(i),e)))}/**
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
 */function h1(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const _b=new Map;/**
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
 */const d1="firestore.googleapis.com",yb=!0;class vb{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Z(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=d1,this.ssl=yb}else this.host=e.host,this.ssl=e.ssl??yb;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=IR;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Sk)throw new Z(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}s0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=h1(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new Z(j.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new Z(j.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new Z(j.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,a){return n.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hh{constructor(e,t,n,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vb({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vb(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new qO;switch(n.type){case"firstParty":return new KO(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Z(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=_b.get(t);n&&(te("ComponentProvider","Removing Datastore"),_b.delete(t),n.terminate())})(this),Promise.resolve()}}function f1(i,e,t,n={}){var g;i=je(i,Hh);const a=tu(e),l=i._getSettings(),c={...l,emulatorOptions:i._getEmulatorOptions()},f=`${e}:${t}`;a&&(Mb(`https://${f}`),Lb("Firestore",!0)),l.host!==d1&&l.host!==f&&ni("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...l,host:f,ssl:a,emulatorOptions:n};if(!ki(m,c)&&(i._setSettings(m),n.mockUserToken)){let y,T;if(typeof n.mockUserToken=="string")y=n.mockUserToken,T=en.MOCK_USER;else{y=jD(n.mockUserToken,(g=i._app)==null?void 0:g.options.projectId);const I=n.mockUserToken.sub||n.mockUserToken.user_id;if(!I)throw new Z(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new en(I)}i._authCredentials=new jO(new r0(y,T))}}/**
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
 */let Cn=class m1{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new m1(this.firestore,e,this._query)}},ot=class Fc{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ks(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fc(this.firestore,e,this._key)}toJSON(){return{type:Fc._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(xh(t,Fc._jsonSchema))return new Fc(e,n||null,new oe(Me.fromString(t.referencePath)))}};ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:Bt("string",ot._jsonSchemaVersion),referencePath:Bt("string")};let ks=class p1 extends Cn{constructor(e,t,n){super(e,t,lu(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new oe(e))}withConverter(e){return new p1(this.firestore,e,this._path)}};function Nl(i,e,...t){if(i=Ee(i),Gy("collection","path",e),i instanceof Hh){const n=Me.fromString(e,...t);return oA(n),new ks(i,null,n)}{if(!(i instanceof ot||i instanceof ks))throw new Z(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Me.fromString(e,...t));return oA(n),new ks(i.firestore,null,n)}}function a4(i,e){if(i=je(i,Hh),Gy("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new Z(j.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Cn(i,null,(function(n){return new qi(Me.emptyPath(),n)})(e))}function Cs(i,e,...t){if(i=Ee(i),arguments.length===1&&(e=Hy.newId()),Gy("doc","path",e),i instanceof Hh){const n=Me.fromString(e,...t);return aA(n),new ot(i,null,new oe(n))}{if(!(i instanceof ot||i instanceof ks))throw new Z(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Me.fromString(e,...t));return aA(n),new ot(i.firestore,i instanceof ks?i.converter:null,new oe(n))}}function g1(i,e){return i=Ee(i),e=Ee(e),(i instanceof ot||i instanceof ks)&&(e instanceof ot||e instanceof ks)&&i.firestore===e.firestore&&i.path===e.path&&i.converter===e.converter}function _1(i,e){return i=Ee(i),e=Ee(e),i instanceof Cn&&e instanceof Cn&&i.firestore===e.firestore&&Lh(i._query,e._query)&&i.converter===e.converter}/**
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
 */const Eb="AsyncQueue";class Tb{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ev(this,"async_queue_retry"),this._c=()=>{const n=Bf();n&&te(Eb,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=Bf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Bf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new hn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Xs(e))throw e;te(Eb,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((n=>{throw this.nc=n,this.rc=!1,Nt("INTERNAL UNHANDLED ERROR: ",wb(n)),n})).then((n=>(this.rc=!1,n))))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=Av.createAndSchedule(this,e,t,n,(l=>this.hc(l)));return this.tc.push(a),a}uc(){this.nc&&ce(47125,{Pc:wb(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function wb(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}/**
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
 */function ry(i){return(function(t,n){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of n)if(l in a&&typeof a[l]=="function")return!0;return!1})(i,["next","error","complete"])}class o4{constructor(){this._progressObserver={},this._taskCompletionResolver=new hn,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const l4=-1;let At=class extends Hh{constructor(e,t,n,a){super(e,t,n,a),this.type="firestore",this._queue=new Tb,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tb(e),this._firestoreClient=void 0,await e}}};function u4(i,e){const t=Ay(),n=em,a=bh(t,"firestore").getImmediate({identifier:n});if(!a._initialized){const l=FD("firestore");l&&f1(a,...l)}return a}function dn(i){if(i._terminated)throw new Z(j.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||y1(i),i._firestoreClient}function y1(i){var n,a,l;const e=i._freezeSettings(),t=(function(f,m,g,y){return new N2(f,m,g,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,h1(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)})(i._databaseId,((n=i._app)==null?void 0:n.options.appId)||"",i._persistenceKey,e);i._componentsProvider||(a=e.localCache)!=null&&a._offlineComponentProvider&&((l=e.localCache)!=null&&l._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new XM(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(f){const m=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(m),_online:m}})(i._componentsProvider))}function c4(i,e){ni("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=i._freezeSettings();return v1(i,Th.provider,{build:n=>new a1(n,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function h4(i){ni("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=i._freezeSettings();v1(i,Th.provider,{build:t=>new QM(t,e.cacheSizeBytes)})}function v1(i,e,t){if((i=je(i,At))._firestoreClient||i._terminated)throw new Z(j.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(i._componentsProvider||i._getSettings().localCache)throw new Z(j.FAILED_PRECONDITION,"SDK cache is already specified.");i._componentsProvider={_online:e,_offline:t},y1(i)}function d4(i){if(i._initialized&&!i._terminated)throw new Z(j.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new hn;return i._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await(async function(n){if(!Xr.v())return Promise.resolve();const a=n+VR;await Xr.delete(a)})(gv(i._databaseId,i._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function f4(i){return(function(t){const n=new hn;return t.asyncQueue.enqueueAndForget((async()=>OM(await Mv(t),n))),n.promise})(dn(i=je(i,At)))}function m4(i){return ZM(dn(i=je(i,At)))}function p4(i){return e4(dn(i=je(i,At)))}function g4(i,e){const t=dn(i=je(i,At)),n=new o4;return i4(t,i._databaseId,e,n),n}function _4(i,e){return s4(dn(i=je(i,At)),e).then((t=>t?new Cn(i,null,t.query):null))}/**
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
 */class yn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yn(It.fromBase64String(e))}catch(t){throw new Z(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new yn(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:yn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(xh(e,yn._jsonSchema))return yn.fromBase64String(e.bytes)}}yn._jsonSchemaVersion="firestore/bytes/1.0",yn._jsonSchema={type:Bt("string",yn._jsonSchemaVersion),bytes:Bt("string")};/**
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
 */let Qs=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Z(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let po=class{constructor(e){this._methodName=e}};/**
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
 */class Tr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Z(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Z(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Tr._jsonSchemaVersion}}static fromJSON(e){if(xh(e,Tr._jsonSchema))return new Tr(e.latitude,e.longitude)}}Tr._jsonSchemaVersion="firestore/geoPoint/1.0",Tr._jsonSchema={type:Bt("string",Tr._jsonSchemaVersion),latitude:Bt("number"),longitude:Bt("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Zr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,a){if(n.length!==a.length)return!1;for(let l=0;l<n.length;++l)if(n[l]!==a[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Zr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(xh(e,Zr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Zr(e.vectorValues);throw new Z(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Zr._jsonSchemaVersion="firestore/vectorValue/1.0",Zr._jsonSchema={type:Bt("string",Zr._jsonSchemaVersion),vectorValues:Bt("object")};/**
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
 */const y4=/^__.*__$/;class v4{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Hi(e,this.data,this.fieldMask,t,this.fieldTransforms):new uu(e,this.data,t,this.fieldTransforms)}}class E1{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Hi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function T1(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce(40011,{Ac:i})}}class Hm{constructor(e,t,n,a,l,c){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Hm({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var a;const t=(a=this.path)==null?void 0:a.child(e),n=this.Vc({path:t,fc:!1});return n.gc(e),n}yc(e){var a;const t=(a=this.path)==null?void 0:a.child(e),n=this.Vc({path:t,fc:!1});return n.Rc(),n}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return dm(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(T1(this.Ac)&&y4.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class E4{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||qh(e)}Cc(e,t,n,a=!1){return new Hm({Ac:e,methodName:t,Dc:n,path:pt.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function go(i){const e=i._freezeSettings(),t=qh(i._databaseId);return new E4(i._databaseId,!!e.ignoreUndefinedProperties,t)}function Gm(i,e,t,n,a,l={}){const c=i.Cc(l.merge||l.mergeFields?2:0,e,t,a);jv("Data must be an object, but it was:",c,n);const f=A1(n,c);let m,g;if(l.merge)m=new On(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const y=[];for(const T of l.mergeFields){const I=iy(e,T,t);if(!c.contains(I))throw new Z(j.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);S1(y,I)||y.push(I)}m=new On(y),g=c.fieldTransforms.filter((T=>m.covers(T.field)))}else m=null,g=c.fieldTransforms;return new v4(new cn(f),m,g)}class Gh extends po{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gh}}function w1(i,e,t){return new Hm({Ac:3,Dc:e.settings.Dc,methodName:i._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Lv extends po{_toFieldTransform(e){return new Bh(e.path,new Gl)}isEqual(e){return e instanceof Lv}}class Uv extends po{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=w1(this,e,!0),n=this.vc.map((l=>_o(l,t))),a=new io(n);return new Bh(e.path,a)}isEqual(e){return e instanceof Uv&&ki(this.vc,e.vc)}}class Bv extends po{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=w1(this,e,!0),n=this.vc.map((l=>_o(l,t))),a=new so(n);return new Bh(e.path,a)}isEqual(e){return e instanceof Bv&&ki(this.vc,e.vc)}}class zv extends po{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){const t=new Kl(e.serializer,$0(e.serializer,this.Fc));return new Bh(e.path,t)}isEqual(e){return e instanceof zv&&this.Fc===e.Fc}}function Fv(i,e,t,n){const a=i.Cc(1,e,t);jv("Data must be an object, but it was:",a,n);const l=[],c=cn.empty();Js(n,((m,g)=>{const y=Hv(e,m,t);g=Ee(g);const T=a.yc(y);if(g instanceof Gh)l.push(y);else{const I=_o(g,T);I!=null&&(l.push(y),c.set(y,I))}}));const f=new On(l);return new E1(c,f,a.fieldTransforms)}function qv(i,e,t,n,a,l){const c=i.Cc(1,e,t),f=[iy(e,n,t)],m=[a];if(l.length%2!=0)throw new Z(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<l.length;I+=2)f.push(iy(e,l[I])),m.push(l[I+1]);const g=[],y=cn.empty();for(let I=f.length-1;I>=0;--I)if(!S1(g,f[I])){const x=f[I];let G=m[I];G=Ee(G);const W=c.yc(x);if(G instanceof Gh)g.push(x);else{const Y=_o(G,W);Y!=null&&(g.push(x),y.set(x,Y))}}const T=new On(g);return new E1(y,T,c.fieldTransforms)}function I1(i,e,t,n=!1){return _o(t,i.Cc(n?4:3,e))}function _o(i,e){if(b1(i=Ee(i)))return jv("Unsupported field value:",e,i),A1(i,e);if(i instanceof po)return(function(n,a){if(!T1(a.Ac))throw a.Sc(`${n._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${n._methodName}() is not currently supported inside arrays`);const l=n._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(n,a){const l=[];let c=0;for(const f of n){let m=_o(f,a.wc(c));m==null&&(m={nullValue:"NULL_VALUE"}),l.push(m),c++}return{arrayValue:{values:l}}})(i,e)}return(function(n,a){if((n=Ee(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return $0(a.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const l=Ye.fromDate(n);return{timestampValue:Ql(a.serializer,l)}}if(n instanceof Ye){const l=new Ye(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ql(a.serializer,l)}}if(n instanceof Tr)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof yn)return{bytesValue:oR(a.serializer,n._byteString)};if(n instanceof ot){const l=a.databaseId,c=n.firestore._databaseId;if(!c.isEqual(l))throw a.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:uv(n.firestore._databaseId||a.databaseId,n._key.path)}}if(n instanceof Zr)return(function(c,f){return{mapValue:{fields:{[Jy]:{stringValue:Zy},[ql]:{arrayValue:{values:c.toArray().map((g=>{if(typeof g!="number")throw f.Sc("VectorValues must only contain numeric values.");return rv(f.serializer,g)}))}}}}}})(n,a);throw a.Sc(`Unsupported field value: ${Rm(n)}`)})(i,e)}function A1(i,e){const t={};return A0(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Js(i,((n,a)=>{const l=_o(a,e.mc(n));l!=null&&(t[n]=l)})),{mapValue:{fields:t}}}function b1(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ye||i instanceof Tr||i instanceof yn||i instanceof ot||i instanceof po||i instanceof Zr)}function jv(i,e,t){if(!b1(t)||!a0(t)){const n=Rm(t);throw n==="an object"?e.Sc(i+" a custom object"):e.Sc(i+" "+n)}}function iy(i,e,t){if((e=Ee(e))instanceof Qs)return e._internalPath;if(typeof e=="string")return Hv(i,e);throw dm("Field path arguments must be of type string or ",i,!1,void 0,t)}const T4=new RegExp("[~\\*/\\[\\]]");function Hv(i,e,t){if(e.search(T4)>=0)throw dm(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Qs(...e.split("."))._internalPath}catch{throw dm(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function dm(i,e,t,n,a){const l=n&&!n.isEmpty(),c=a!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let m="";return(l||c)&&(m+=" (found",l&&(m+=` in field ${n}`),c&&(m+=` in document ${a}`),m+=")"),new Z(j.INVALID_ARGUMENT,f+i+m)}function S1(i,e){return i.some((t=>t.isEqual(e)))}/**
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
 */class wh{constructor(e,t,n,a,l){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new w4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Km("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class w4 extends wh{data(){return super.data()}}function Km(i,e){return typeof e=="string"?Hv(i,e):e instanceof Qs?e._internalPath:e._delegate._internalPath}/**
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
 */function R1(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new Z(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gv{}class Kh extends Gv{}function Fr(i,e,...t){let n=[];e instanceof Gv&&n.push(e),n=n.concat(t),(function(l){const c=l.filter((m=>m instanceof Kv)).length,f=l.filter((m=>m instanceof Qm)).length;if(c>1||c>0&&f>0)throw new Z(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const a of n)i=a._apply(i);return i}class Qm extends Kh{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Qm(e,t,n)}_apply(e){const t=this._parse(e);return D1(e._query,t),new Cn(e.firestore,e.converter,H_(e._query,t))}_parse(e){const t=go(e.firestore);return(function(l,c,f,m,g,y,T){let I;if(g.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new Z(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){Ab(T,y);const G=[];for(const W of T)G.push(Ib(m,l,W));I={arrayValue:{values:G}}}else I=Ib(m,l,T)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||Ab(T,y),I=I1(f,c,T,y==="in"||y==="not-in");return Ue.create(g,y,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function I4(i,e,t){const n=e,a=Km("where",i);return Qm._create(a,n,t)}class Kv extends Gv{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Kv(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:Je.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let c=a;const f=l.getFlattenedFilters();for(const m of f)D1(c,m),c=H_(c,m)})(e._query,t),new Cn(e.firestore,e.converter,H_(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qv extends Kh{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Qv(e,t)}_apply(e){const t=(function(a,l,c){if(a.startAt!==null)throw new Z(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new Z(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new _h(l,c)})(e._query,this._field,this._direction);return new Cn(e.firestore,e.converter,(function(a,l){const c=a.explicitOrderBy.concat([l]);return new qi(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)})(e._query,t))}}function sy(i,e="asc"){const t=e,n=Km("orderBy",i);return Qv._create(n,t)}class Ym extends Kh{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Ym(e,t,n)}_apply(e){return new Cn(e.firestore,e.converter,rm(e._query,this._limit,this._limitType))}}function A4(i){return o0("limit",i),Ym._create("limit",i,"F")}function b4(i){return o0("limitToLast",i),Ym._create("limitToLast",i,"L")}class $m extends Kh{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new $m(e,t,n)}_apply(e){const t=C1(e,this.type,this._docOrFields,this._inclusive);return new Cn(e.firestore,e.converter,(function(a,l){return new qi(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,l,a.endAt)})(e._query,t))}}function S4(...i){return $m._create("startAt",i,!0)}function R4(...i){return $m._create("startAfter",i,!1)}class Wm extends Kh{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Wm(e,t,n)}_apply(e){const t=C1(e,this.type,this._docOrFields,this._inclusive);return new Cn(e.firestore,e.converter,(function(a,l){return new qi(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,l)})(e._query,t))}}function C4(...i){return Wm._create("endBefore",i,!1)}function D4(...i){return Wm._create("endAt",i,!0)}function C1(i,e,t,n){if(t[0]=Ee(t[0]),t[0]instanceof wh)return(function(l,c,f,m,g){if(!m)throw new Z(j.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${f}().`);const y=[];for(const T of Cl(l))if(T.field.isKeyField())y.push(no(c,m.key));else{const I=m.data.field(T.field);if(Vm(I))throw new Z(j.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+T.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(I===null){const x=T.field.canonicalString();throw new Z(j.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${x}' (used as the orderBy) does not exist.`)}y.push(I)}return new Hs(y,g)})(i._query,i.firestore._databaseId,e,t[0]._document,n);{const a=go(i.firestore);return(function(c,f,m,g,y,T){const I=c.explicitOrderBy;if(y.length>I.length)throw new Z(j.INVALID_ARGUMENT,`Too many arguments provided to ${g}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const x=[];for(let G=0;G<y.length;G++){const W=y[G];if(I[G].field.isKeyField()){if(typeof W!="string")throw new Z(j.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${g}(), but got a ${typeof W}`);if(!tv(c)&&W.indexOf("/")!==-1)throw new Z(j.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${g}() must be a plain document ID, but '${W}' contains a slash.`);const Y=c.path.child(Me.fromString(W));if(!oe.isDocumentKey(Y))throw new Z(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${g}() must result in a valid document path, but '${Y}' is not because it contains an odd number of segments.`);const ge=new oe(Y);x.push(no(f,ge))}else{const Y=I1(m,g,W);x.push(Y)}}return new Hs(x,T)})(i._query,i.firestore._databaseId,a,e,t,n)}}function Ib(i,e,t){if(typeof(t=Ee(t))=="string"){if(t==="")throw new Z(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tv(e)&&t.indexOf("/")!==-1)throw new Z(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(Me.fromString(t));if(!oe.isDocumentKey(n))throw new Z(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return no(i,new oe(n))}if(t instanceof ot)return no(i,t._key);throw new Z(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Rm(t)}.`)}function Ab(i,e){if(!Array.isArray(i)||i.length===0)throw new Z(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function D1(i,e){const t=(function(a,l){for(const c of a)for(const f of c.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(i.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new Z(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Yv{convertValue(e,t="none"){switch(qs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ft(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ce(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Js(e,((a,l)=>{n[a]=this.convertValue(l,t)})),n}convertVectorValue(e){var n,a,l;const t=(l=(a=(n=e.fields)==null?void 0:n[ql].arrayValue)==null?void 0:a.values)==null?void 0:l.map((c=>ft(c.doubleValue)));return new Zr(t)}convertGeoPoint(e){return new Tr(ft(e.latitude),ft(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=xm(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(mh(e));default:return null}}convertTimestamp(e){const t=Ui(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Me.fromString(e);me(yR(n),9688,{name:e});const a=new Fs(n.get(1),n.get(3)),l=new oe(n.popFirst(5));return a.isEqual(t)||Nt(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function Xm(i,e,t){let n;return n=i?t&&(t.merge||t.mergeFields)?i.toFirestore(e,t):i.toFirestore(e):e,n}class N4 extends Yv{constructor(e){super(),this.firestore=e}convertBytes(e){return new yn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,t)}}class Wa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let cr=class N1 extends wh{constructor(e,t,n,a,l,c){super(e,t,n,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new th(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Km("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=N1._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}};cr._jsonSchemaVersion="firestore/documentSnapshot/1.0",cr._jsonSchema={type:Bt("string",cr._jsonSchemaVersion),bundleSource:Bt("string","DocumentSnapshot"),bundleName:Bt("string"),bundle:Bt("string")};let th=class extends cr{data(e={}){return super.data(e)}},wr=class P1{constructor(e,t,n,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Wa(a.hasPendingWrites,a.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new th(this._firestore,this._userDataWriter,n.key,n,new Wa(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Z(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map((f=>{const m=new th(a._firestore,a._userDataWriter,f.doc.key,f.doc,new Wa(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);return f.doc,{type:"added",doc:m,oldIndex:-1,newIndex:c++}}))}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const m=new th(a._firestore,a._userDataWriter,f.doc.key,f.doc,new Wa(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,y=-1;return f.type!==0&&(g=c.indexOf(f.doc.key),c=c.delete(f.doc.key)),f.type!==1&&(c=c.add(f.doc),y=c.indexOf(f.doc.key)),{type:P4(f.type),doc:m,oldIndex:g,newIndex:y}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=P1._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Hy.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],a=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),n.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}};function P4(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce(61501,{type:i})}}function V1(i,e){return i instanceof cr&&e instanceof cr?i._firestore===e._firestore&&i._key.isEqual(e._key)&&(i._document===null?e._document===null:i._document.isEqual(e._document))&&i._converter===e._converter:i instanceof wr&&e instanceof wr&&i._firestore===e._firestore&&_1(i.query,e.query)&&i.metadata.isEqual(e.metadata)&&i._snapshot.isEqual(e._snapshot)}/**
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
 */function V4(i){i=je(i,ot);const e=je(i.firestore,At);return u1(dn(e),i._key).then((t=>$v(e,i,t)))}wr._jsonSchemaVersion="firestore/querySnapshot/1.0",wr._jsonSchema={type:Bt("string",wr._jsonSchemaVersion),bundleSource:Bt("string","QuerySnapshot"),bundleName:Bt("string"),bundle:Bt("string")};class yo extends Yv{constructor(e){super(),this.firestore=e}convertBytes(e){return new yn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,t)}}function x4(i){i=je(i,ot);const e=je(i.firestore,At),t=dn(e),n=new yo(e);return t4(t,i._key).then((a=>new cr(e,n,i._key,a,new Wa(a!==null&&a.hasLocalMutations,!0),i.converter)))}function O4(i){i=je(i,ot);const e=je(i.firestore,At);return u1(dn(e),i._key,{source:"server"}).then((t=>$v(e,i,t)))}function k4(i){i=je(i,Cn);const e=je(i.firestore,At),t=dn(e),n=new yo(e);return R1(i._query),c1(t,i._query).then((a=>new wr(e,n,i,a)))}function M4(i){i=je(i,Cn);const e=je(i.firestore,At),t=dn(e),n=new yo(e);return n4(t,i._query).then((a=>new wr(e,n,i,a)))}function L4(i){i=je(i,Cn);const e=je(i.firestore,At),t=dn(e),n=new yo(e);return c1(t,i._query,{source:"server"}).then((a=>new wr(e,n,i,a)))}function bb(i,e,t){i=je(i,ot);const n=je(i.firestore,At),a=Xm(i.converter,e,t);return pu(n,[Gm(go(n),"setDoc",i._key,a,i.converter!==null,t).toMutation(i._key,gt.none())])}function ay(i,e,t,...n){i=je(i,ot);const a=je(i.firestore,At),l=go(a);let c;return c=typeof(e=Ee(e))=="string"||e instanceof Qs?qv(l,"updateDoc",i._key,e,t,n):Fv(l,"updateDoc",i._key,e),pu(a,[c.toMutation(i._key,gt.exists(!0))])}function x1(i){return pu(je(i.firestore,At),[new cu(i._key,gt.none())])}function O1(i,e){const t=je(i.firestore,At),n=Cs(i),a=Xm(i.converter,e);return pu(t,[Gm(go(i.firestore),"addDoc",n._key,a,i.converter!==null,{}).toMutation(n._key,gt.exists(!1))]).then((()=>n))}function Jm(i,...e){var m,g,y;i=Ee(i);let t={includeMetadataChanges:!1,source:"default"},n=0;typeof e[n]!="object"||ry(e[n])||(t=e[n++]);const a={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(ry(e[n])){const T=e[n];e[n]=(m=T.next)==null?void 0:m.bind(T),e[n+1]=(g=T.error)==null?void 0:g.bind(T),e[n+2]=(y=T.complete)==null?void 0:y.bind(T)}let l,c,f;if(i instanceof ot)c=je(i.firestore,At),f=lu(i._key.path),l={next:T=>{e[n]&&e[n]($v(c,i,T))},error:e[n+1],complete:e[n+2]};else{const T=je(i,Cn);c=je(T.firestore,At),f=T._query;const I=new yo(c);l={next:x=>{e[n]&&e[n](new wr(c,I,T,x))},error:e[n+1],complete:e[n+2]},R1(i._query)}return(function(I,x,G,W){const Y=new qm(W),ge=new Cv(x,Y,G);return I.asyncQueue.enqueueAndForget((async()=>bv(await Zl(I),ge))),()=>{Y.Nu(),I.asyncQueue.enqueueAndForget((async()=>Sv(await Zl(I),ge)))}})(dn(c),f,a,l)}function U4(i,e){return r4(dn(i=je(i,At)),ry(e)?e:{next:e})}function pu(i,e){return(function(n,a){const l=new hn;return n.asyncQueue.enqueueAndForget((async()=>NM(await Mv(n),a,l))),l.promise})(dn(i),e)}function $v(i,e,t){const n=t.docs.get(e._key),a=new yo(i);return new cr(i,a,e._key,n,new Wa(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const B4={maxAttempts:5};/**
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
 */let k1=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=go(e)}set(e,t,n){this._verifyNotCommitted();const a=Ds(e,this._firestore),l=Xm(a.converter,t,n),c=Gm(this._dataReader,"WriteBatch.set",a._key,l,a.converter!==null,n);return this._mutations.push(c.toMutation(a._key,gt.none())),this}update(e,t,n,...a){this._verifyNotCommitted();const l=Ds(e,this._firestore);let c;return c=typeof(t=Ee(t))=="string"||t instanceof Qs?qv(this._dataReader,"WriteBatch.update",l._key,t,n,a):Fv(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(c.toMutation(l._key,gt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ds(e,this._firestore);return this._mutations=this._mutations.concat(new cu(t._key,gt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Z(j.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Ds(i,e){if((i=Ee(i)).firestore!==e)throw new Z(j.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return i}/**
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
 */class z4{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=go(e)}get(e){const t=Ds(e,this._firestore),n=new N4(this._firestore);return this._transaction.lookup([t._key]).then((a=>{if(!a||a.length!==1)return ce(24041);const l=a[0];if(l.isFoundDocument())return new wh(this._firestore,n,l.key,l,t.converter);if(l.isNoDocument())return new wh(this._firestore,n,t._key,null,t.converter);throw ce(18433,{doc:l})}))}set(e,t,n){const a=Ds(e,this._firestore),l=Xm(a.converter,t,n),c=Gm(this._dataReader,"Transaction.set",a._key,l,a.converter!==null,n);return this._transaction.set(a._key,c),this}update(e,t,n,...a){const l=Ds(e,this._firestore);let c;return c=typeof(t=Ee(t))=="string"||t instanceof Qs?qv(this._dataReader,"Transaction.update",l._key,t,n,a):Fv(this._dataReader,"Transaction.update",l._key,t),this._transaction.update(l._key,c),this}delete(e){const t=Ds(e,this._firestore);return this._transaction.delete(t._key),this}}/**
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
 */let F4=class extends z4{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Ds(e,this._firestore),n=new yo(this._firestore);return super.get(e).then((a=>new cr(this._firestore,n,t._key,a._document,new Wa(!1,!1),t.converter)))}};function q4(i,e,t){i=je(i,At);const n={...B4,...t};return(function(l){if(l.maxAttempts<1)throw new Z(j.INVALID_ARGUMENT,"Max attempts must be at least 1")})(n),(function(l,c,f){const m=new hn;return l.asyncQueue.enqueueAndForget((async()=>{const g=await JM(l);new WM(l.asyncQueue,g,f,c,m).ju()})),m.promise})(dn(i),(a=>e(new F4(i,a))),n)}/**
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
 */function j4(){return new Gh("deleteField")}function H4(){return new Lv("serverTimestamp")}function G4(...i){return new Uv("arrayUnion",i)}function K4(...i){return new Bv("arrayRemove",i)}function Q4(i){return new zv("increment",i)}/**
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
 */function Y4(i){return dn(i=je(i,At)),new k1(i,(e=>pu(i,e)))}(function(e,t=!0){(function(a){ou=a})(Ys),Us(new ei("firestore",((n,{instanceIdentifier:a,options:l})=>{const c=n.getProvider("app").getImmediate(),f=new At(new HO(n.getProvider("auth-internal")),new QO(c,n.getProvider("app-check-internal")),(function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new Z(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fs(g.options.projectId,y)})(c,a),c);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),Er(nA,rA,e),Er(nA,rA,"esm2020")})();const $4="@firebase/firestore-compat",W4="0.4.1";/**
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
 */function Wv(i,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new Z("invalid-argument",`Invalid options passed to function ${i}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function Sb(){if(typeof Uint8Array>"u")throw new Z("unimplemented","Uint8Arrays are not available in this environment.")}function Rb(){if(!C2())throw new Z("unimplemented","Blobs are unavailable in Firestore in this environment.")}let M1=class oy{constructor(e){this._delegate=e}static fromBase64String(e){return Rb(),new oy(yn.fromBase64String(e))}static fromUint8Array(e){return Sb(),new oy(yn.fromUint8Array(e))}toBase64(){return Rb(),this._delegate.toBase64()}toUint8Array(){return Sb(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
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
 */function ly(i){return X4(i,["next","error","complete"])}function X4(i,e){if(typeof i!="object"||i===null)return!1;const t=i;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}/**
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
 */class J4{enableIndexedDbPersistence(e,t){return c4(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return h4(e._delegate)}clearIndexedDbPersistence(e){return d4(e._delegate)}}class L1{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Fs||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&ni("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e={...t,...e},delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){f1(this._delegate,e,t,n)}enableNetwork(){return m4(this._delegate)}disableNetwork(){return p4(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,s0("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return f4(this._delegate)}onSnapshotsInSync(e){return U4(this._delegate,e)}get app(){if(!this._appCompat)throw new Z("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new eu(this,Nl(this._delegate,e))}catch(t){throw bn(t,"collection()","Firestore.collection()")}}doc(e){try{return new ur(this,Cs(this._delegate,e))}catch(t){throw bn(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new An(this,a4(this._delegate,e))}catch(t){throw bn(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return q4(this._delegate,t=>e(new U1(this,t)))}batch(){return dn(this._delegate),new B1(new k1(this._delegate,e=>pu(this._delegate,e)))}loadBundle(e){return g4(this._delegate,e)}namedQuery(e){return _4(this._delegate,e).then(t=>t?new An(this,t):null)}}class Zm extends Yv{constructor(e){super(),this.firestore=e}convertBytes(e){return new M1(new yn(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return ur.forKey(t,this.firestore,null)}}function Z4(i){zO(i)}class U1{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Zm(e)}get(e){const t=Xa(e);return this._delegate.get(t).then(n=>new Ih(this._firestore,new cr(this._firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,t.converter)))}set(e,t,n){const a=Xa(e);return n?(Wv("Transaction.set",n),this._delegate.set(a,t,n)):this._delegate.set(a,t),this}update(e,t,n,...a){const l=Xa(e);return arguments.length===2?this._delegate.update(l,t):this._delegate.update(l,t,n,...a),this}delete(e){const t=Xa(e);return this._delegate.delete(t),this}}class B1{constructor(e){this._delegate=e}set(e,t,n){const a=Xa(e);return n?(Wv("WriteBatch.set",n),this._delegate.set(a,t,n)):this._delegate.set(a,t),this}update(e,t,n,...a){const l=Xa(e);return arguments.length===2?this._delegate.update(l,t):this._delegate.update(l,t,n,...a),this}delete(e){const t=Xa(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class co{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new th(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ah(this._firestore,n),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=co.INSTANCES;let a=n.get(e);a||(a=new WeakMap,n.set(e,a));let l=a.get(t);return l||(l=new co(e,new Zm(e),t),a.set(t,l)),l}}co.INSTANCES=new WeakMap;class ur{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Zm(e)}static forPath(e,t,n){if(e.length%2!==0)throw new Z("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new ur(t,new ot(t._delegate,n,new oe(e)))}static forKey(e,t,n){return new ur(t,new ot(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new eu(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new eu(this.firestore,Nl(this._delegate,e))}catch(t){throw bn(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Ee(e),e instanceof ot?g1(this._delegate,e):!1}set(e,t){t=Wv("DocumentReference.set",t);try{return t?bb(this._delegate,e,t):bb(this._delegate,e)}catch(n){throw bn(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return arguments.length===1?ay(this._delegate,e):ay(this._delegate,e,t,...n)}catch(a){throw bn(a,"updateDoc()","DocumentReference.update()")}}delete(){return x1(this._delegate)}onSnapshot(...e){const t=z1(e),n=F1(e,a=>new Ih(this.firestore,new cr(this.firestore._delegate,this._userDataWriter,a._key,a._document,a.metadata,this._delegate.converter)));return Jm(this._delegate,t,n)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=x4(this._delegate):(e==null?void 0:e.source)==="server"?t=O4(this._delegate):t=V4(this._delegate),t.then(n=>new Ih(this.firestore,new cr(this.firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,this._delegate.converter)))}withConverter(e){return new ur(this.firestore,e?this._delegate.withConverter(co.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function bn(i,e,t){return i.message=i.message.replace(e,t),i}function z1(i){for(const e of i)if(typeof e=="object"&&!ly(e))return e;return{}}function F1(i,e){var n,a;let t;return ly(i[0])?t=i[0]:ly(i[1])?t=i[1]:typeof i[0]=="function"?t={next:i[0],error:i[1],complete:i[2]}:t={next:i[1],error:i[2],complete:i[3]},{next:l=>{t.next&&t.next(e(l))},error:(n=t.error)==null?void 0:n.bind(t),complete:(a=t.complete)==null?void 0:a.bind(t)}}class Ih{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new ur(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return V1(this._delegate,e._delegate)}}class Ah extends Ih{data(e){const t=this._delegate.data(e);return this._delegate._converter||FO(t!==void 0,"Document in a QueryDocumentSnapshot should exist"),t}}class An{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Zm(e)}where(e,t,n){try{return new An(this.firestore,Fr(this._delegate,I4(e,t,n)))}catch(a){throw bn(a,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new An(this.firestore,Fr(this._delegate,sy(e,t)))}catch(n){throw bn(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new An(this.firestore,Fr(this._delegate,A4(e)))}catch(t){throw bn(t,"limit()","Query.limit()")}}limitToLast(e){try{return new An(this.firestore,Fr(this._delegate,b4(e)))}catch(t){throw bn(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new An(this.firestore,Fr(this._delegate,S4(...e)))}catch(t){throw bn(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new An(this.firestore,Fr(this._delegate,R4(...e)))}catch(t){throw bn(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new An(this.firestore,Fr(this._delegate,C4(...e)))}catch(t){throw bn(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new An(this.firestore,Fr(this._delegate,D4(...e)))}catch(t){throw bn(t,"endAt()","Query.endAt()")}}isEqual(e){return _1(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=M4(this._delegate):(e==null?void 0:e.source)==="server"?t=L4(this._delegate):t=k4(this._delegate),t.then(n=>new uy(this.firestore,new wr(this.firestore._delegate,this._userDataWriter,this._delegate,n._snapshot)))}onSnapshot(...e){const t=z1(e),n=F1(e,a=>new uy(this.firestore,new wr(this.firestore._delegate,this._userDataWriter,this._delegate,a._snapshot)));return Jm(this._delegate,t,n)}withConverter(e){return new An(this.firestore,e?this._delegate.withConverter(co.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class eL{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Ah(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class uy{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new An(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Ah(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new eL(this._firestore,t))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new Ah(this._firestore,n))})}isEqual(e){return V1(this._delegate,e._delegate)}}class eu extends An{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new ur(this.firestore,e):null}doc(e){try{return e===void 0?new ur(this.firestore,Cs(this._delegate)):new ur(this.firestore,Cs(this._delegate,e))}catch(t){throw bn(t,"doc()","CollectionReference.doc()")}}add(e){return O1(this._delegate,e).then(t=>new ur(this.firestore,t))}isEqual(e){return g1(this._delegate,e._delegate)}withConverter(e){return new eu(this.firestore,e?this._delegate.withConverter(co.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Xa(i){return je(i,ot)}/**
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
 */class Xv{constructor(...e){this._delegate=new Qs(...e)}static documentId(){return new Xv(pt.keyField().canonicalString())}isEqual(e){return e=Ee(e),e instanceof Qs?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class Qa{static serverTimestamp(){const e=H4();return e._methodName="FieldValue.serverTimestamp",new Qa(e)}static delete(){const e=j4();return e._methodName="FieldValue.delete",new Qa(e)}static arrayUnion(...e){const t=G4(...e);return t._methodName="FieldValue.arrayUnion",new Qa(t)}static arrayRemove(...e){const t=K4(...e);return t._methodName="FieldValue.arrayRemove",new Qa(t)}static increment(e){const t=Q4(e);return t._methodName="FieldValue.increment",new Qa(t)}constructor(e){this._delegate=e}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const tL={Firestore:L1,GeoPoint:Tr,Timestamp:Ye,Blob:M1,Transaction:U1,WriteBatch:B1,DocumentReference:ur,DocumentSnapshot:Ih,Query:An,QueryDocumentSnapshot:Ah,QuerySnapshot:uy,CollectionReference:eu,FieldPath:Xv,FieldValue:Qa,setLogLevel:Z4,CACHE_SIZE_UNLIMITED:l4};function nL(i,e){i.INTERNAL.registerComponent(new ei("firestore-compat",t=>{const n=t.getProvider("app-compat").getImmediate(),a=t.getProvider("firestore").getImmediate();return e(n,a)},"PUBLIC").setServiceProps({...tL}))}/**
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
 */function rL(i){nL(i,(e,t)=>new L1(e,t,new J4)),i.registerVersion($4,W4)}rL(au);/**
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
 */function ho(){return window}/**
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
 */const iL=2e3;async function sL(i,e,t){const{BuildInfo:n}=ho();Ir(e.sessionId,"AuthEvent did not contain a session ID");const a=await cL(e.sessionId),l={};return Ch()?l.ibi=n.packageName:Rh()?l.apn=n.packageName:nn(i,"operation-not-supported-in-this-environment"),n.displayName&&(l.appDisplayName=n.displayName),l.sessionId=a,P_(i,t,e.type,void 0,e.eventId??void 0,l)}async function aL(i){const{BuildInfo:e}=ho(),t={};Ch()?t.iosBundleId=e.packageName:Rh()?t.androidPackageName=e.packageName:nn(i,"operation-not-supported-in-this-environment"),await KS(i,t)}function oL(i){const{cordova:e}=ho();return new Promise(t=>{e.plugins.browsertab.isAvailable(n=>{let a=null;n?e.plugins.browsertab.openUrl(i):a=e.InAppBrowser.open(i,kP()?"_blank":"_system","location=yes"),t(a)})})}async function lL(i,e,t){const{cordova:n}=ho();let a=()=>{};try{await new Promise((l,c)=>{let f=null;function m(){var I;l();const T=(I=n.plugins.browsertab)==null?void 0:I.close;typeof T=="function"&&T(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function g(){f||(f=window.setTimeout(()=>{c(Gt(i,"redirect-cancelled-by-user"))},iL))}function y(){(document==null?void 0:document.visibilityState)==="visible"&&g()}e.addPassiveListener(m),document.addEventListener("resume",g,!1),Rh()&&document.addEventListener("visibilitychange",y,!1),a=()=>{e.removePassiveListener(m),document.removeEventListener("resume",g,!1),document.removeEventListener("visibilitychange",y,!1),f&&window.clearTimeout(f)}})}finally{a()}}function uL(i){var t,n,a,l,c,f,m,g,y,T;const e=ho();re(typeof((t=e==null?void 0:e.universalLinks)==null?void 0:t.subscribe)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),re(typeof((n=e==null?void 0:e.BuildInfo)==null?void 0:n.packageName)<"u",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),re(typeof((c=(l=(a=e==null?void 0:e.cordova)==null?void 0:a.plugins)==null?void 0:l.browsertab)==null?void 0:c.openUrl)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),re(typeof((g=(m=(f=e==null?void 0:e.cordova)==null?void 0:f.plugins)==null?void 0:m.browsertab)==null?void 0:g.isAvailable)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),re(typeof((T=(y=e==null?void 0:e.cordova)==null?void 0:y.InAppBrowser)==null?void 0:T.open)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function cL(i){const e=hL(i),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(a=>a.toString(16).padStart(2,"0")).join("")}function hL(i){if(Ir(/[0-9a-zA-Z]+/.test(i),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(i);const e=new ArrayBuffer(i.length),t=new Uint8Array(e);for(let n=0;n<i.length;n++)t[n]=i.charCodeAt(n);return t}/**
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
 */const dL=20;class fL extends HS{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function mL(i,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:_L(),postBody:null,tenantId:i.tenantId,error:Gt(i,"no-auth-event")}}function pL(i,e){return cy()._set(hy(i),e)}async function Cb(i){const e=await cy()._get(hy(i));return e&&await cy()._remove(hy(i)),e}function gL(i,e){var n,a;const t=vL(e);if(t.includes("/__/auth/callback")){const l=zf(t),c=l.firebaseError?yL(decodeURIComponent(l.firebaseError)):null,f=(a=(n=c==null?void 0:c.code)==null?void 0:n.split("auth/"))==null?void 0:a[1],m=f?Gt(f):null;return m?{type:i.type,eventId:i.eventId,tenantId:i.tenantId,error:m,urlResponse:null,sessionId:null,postBody:null}:{type:i.type,eventId:i.eventId,tenantId:i.tenantId,sessionId:i.sessionId,urlResponse:t,postBody:null}}return null}function _L(){const i=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<dL;t++){const n=Math.floor(Math.random()*e.length);i.push(e.charAt(n))}return i.join("")}function cy(){return Qn(wm)}function hy(i){return Ja("authEvent",i.config.apiKey,i.name)}function yL(i){try{return JSON.parse(i)}catch{return null}}function vL(i){const e=zf(i),t=e.link?decodeURIComponent(e.link):void 0,n=zf(t).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return zf(a).link||a||n||t||i}function zf(i){if(!(i!=null&&i.includes("?")))return{};const[e,...t]=i.split("?");return Il(t.join("?"))}/**
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
 */const EL=500;class TL{constructor(){this._redirectPersistence=Bs,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Sm,this._overrideRedirectResult=Fy}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new fL(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){nn(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,a){uL(e);const l=await this._initialize(e);await l.initialized(),l.resetRedirect(),zx(),await this._originValidation(e);const c=mL(e,n,a);await pL(e,c);const f=await sL(e,c,t),m=await oL(f);return lL(e,l,m)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=aL(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:a,BuildInfo:l}=ho(),c=setTimeout(async()=>{await Cb(e),t.onEvent(Db())},EL),f=async y=>{clearTimeout(c);const T=await Cb(e);let I=null;T&&(y!=null&&y.url)&&(I=gL(T,y.url)),t.onEvent(I||Db())};typeof n<"u"&&typeof n.subscribe=="function"&&n.subscribe(null,f);const m=a,g=`${l.packageName.toLowerCase()}://`;ho().handleOpenURL=async y=>{if(y.toLowerCase().startsWith(g)&&f({url:y}),typeof m=="function")try{m(y)}catch(T){console.error(T)}}}}const wL=TL;function Db(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Gt("no-auth-event")}}/**
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
 */function IL(i,e){vt(i)._logFramework(e)}var AL="@firebase/auth-compat",bL="0.6.0";/**
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
 */const SL=1e3;function nh(){var i;return((i=self==null?void 0:self.location)==null?void 0:i.protocol)||null}function RL(){return nh()==="http:"||nh()==="https:"}function q1(i=yt()){return!!((nh()==="file:"||nh()==="ionic:"||nh()==="capacitor:")&&i.toLowerCase().match(/iphone|ipad|ipod|android/))}function CL(){return vy()||mm()}function DL(){return zb()&&(document==null?void 0:document.documentMode)===11}function NL(i=yt()){return/Edge\/\d+/.test(i)}function PL(i=yt()){return DL()||NL(i)}function j1(){try{const i=self.localStorage,e=Ph();if(i)return i.setItem(e,"1"),i.removeItem(e),PL()?rh():!0}catch{return Jv()&&rh()}return!1}function Jv(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function b_(){return(RL()||Bb()||q1())&&!CL()&&j1()&&!Jv()}function H1(){return q1()&&typeof document<"u"}async function VL(){return H1()?new Promise(i=>{const e=setTimeout(()=>{i(!1)},SL);document.addEventListener("deviceready",()=>{clearTimeout(e),i(!0)})}):!1}function xL(){return typeof window<"u"?window:null}/**
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
 */const Kn={LOCAL:"local",NONE:"none",SESSION:"session"},xc=re,G1="persistence";function OL(i,e){if(xc(Object.values(Kn).includes(e),i,"invalid-persistence-type"),vy()){xc(e!==Kn.SESSION,i,"unsupported-persistence-type");return}if(mm()){xc(e===Kn.NONE,i,"unsupported-persistence-type");return}if(Jv()){xc(e===Kn.NONE||e===Kn.LOCAL&&rh(),i,"unsupported-persistence-type");return}xc(e===Kn.NONE||j1(),i,"unsupported-persistence-type")}async function dy(i){await i._initializationPromise;const e=K1(),t=Ja(G1,i.config.apiKey,i.name);e&&e.setItem(t,i._getPersistenceType())}function kL(i,e){const t=K1();if(!t)return[];const n=Ja(G1,i,e);switch(t.getItem(n)){case Kn.NONE:return[xl];case Kn.LOCAL:return[kl,Bs];case Kn.SESSION:return[Bs];default:return[]}}function K1(){var i;try{return((i=xL())==null?void 0:i.sessionStorage)||null}catch{return null}}/**
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
 */const ML=re;class Ns{constructor(){this.browserResolver=Qn(QS),this.cordovaResolver=Qn(wL),this.underlyingResolver=null,this._redirectPersistence=Bs,this._completeRedirectFn=Sm,this._overrideRedirectResult=Fy}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,a)}async _openRedirect(e,t,n,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,a)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return H1()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return ML(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await VL();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function Q1(i){return i.unwrap()}function LL(i){return i.wrapped()}/**
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
 */function UL(i){return Y1(i)}function BL(i,e){var n;const t=(n=e.customData)==null?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const a=e;a.resolver=new zL(i,tx(i,e))}else if(t){const a=Y1(e),l=e;a&&(l.credential=a,l.tenantId=t.tenantId||void 0,l.email=t.email||void 0,l.phoneNumber=t.phoneNumber||void 0)}}function Y1(i){const{_tokenResponse:e}=i instanceof Sn?i.customData:i;if(!e)return null;if(!(i instanceof Sn)&&"temporaryProof"in e&&"phoneNumber"in e)return to.credentialFromResult(i);const t=e.providerId;if(!t||t===Sc.PASSWORD)return null;let n;switch(t){case Sc.GOOGLE:n=Gr;break;case Sc.FACEBOOK:n=Hr;break;case Sc.GITHUB:n=Kr;break;case Sc.TWITTER:n=Qr;break;default:const{oauthIdToken:a,oauthAccessToken:l,oauthTokenSecret:c,pendingToken:f,nonce:m}=e;return!l&&!c&&!a&&!f?null:f?t.startsWith("saml.")?Ol._create(t,f):ti._fromParams({providerId:t,signInMethod:t,pendingToken:f,idToken:a,accessToken:l}):new Sl(t).credential({idToken:a,accessToken:l,rawNonce:m})}return i instanceof Sn?n.credentialFromError(i):n.credentialFromResult(i)}function Vn(i,e){return e.catch(t=>{throw t instanceof Sn&&BL(i,t),t}).then(t=>{const n=t.operationType,a=t.user;return{operationType:n,credential:UL(t),additionalUserInfo:WV(t),user:xi.getOrCreate(a)}})}async function fy(i,e){const t=await e;return{verificationId:t.verificationId,confirm:n=>Vn(i,t.confirm(n))}}class zL{constructor(e,t){this.resolver=t,this.auth=LL(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Vn(Q1(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class xi{constructor(e){this._delegate=e,this.multiFactor=ix(e)}static getOrCreate(e){return xi.USER_MAP.has(e)||xi.USER_MAP.set(e,new xi(e)),xi.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Vn(this.auth,CS(this._delegate,e))}async linkWithPhoneNumber(e,t){return fy(this.auth,Rx(this._delegate,e,t))}async linkWithPopup(e){return Vn(this.auth,Mx(this._delegate,e,Ns))}async linkWithRedirect(e){return await dy(vt(this.auth)),Gx(this._delegate,e,Ns)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Vn(this.auth,DS(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return fy(this.auth,Cx(this._delegate,e,t))}reauthenticateWithPopup(e){return Vn(this.auth,kx(this._delegate,e,Ns))}async reauthenticateWithRedirect(e){return await dy(vt(this.auth)),jx(this._delegate,e,Ns)}sendEmailVerification(e){return BV(this._delegate,e)}async unlink(e){return await SV(this._delegate,e),this}updateEmail(e){return jV(this._delegate,e)}updatePassword(e){return HV(this._delegate,e)}updatePhoneNumber(e){return Dx(this._delegate,e)}updateProfile(e){return qV(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return zV(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}xi.USER_MAP=new WeakMap;/**
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
 */const Oc=re;class my{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:n}=e.options;Oc(n,"invalid-api-key",{appName:e.name}),Oc(n,"invalid-api-key",{appName:e.name});const a=typeof window<"u"?Ns:void 0;this._delegate=t.initialize({options:{persistence:FL(n,e.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(pP),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?xi.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){ES(this._delegate,e,t)}applyActionCode(e){return PV(this._delegate,e)}checkActionCode(e){return NS(this._delegate,e)}confirmPasswordReset(e,t){return NV(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Vn(this._delegate,xV(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return UV(this._delegate,e)}isSignInWithEmailLink(e){return kV(this._delegate,e)}async getRedirectResult(){Oc(b_(),this._delegate,"operation-not-supported-in-this-environment");const e=await Qx(this._delegate,Ns);return e?Vn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){IL(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:a,error:l,complete:c}=Nb(e,t,n);return this._delegate.onAuthStateChanged(a,l,c)}onIdTokenChanged(e,t,n){const{next:a,error:l,complete:c}=Nb(e,t,n);return this._delegate.onIdTokenChanged(a,l,c)}sendSignInLinkToEmail(e,t){return OV(this._delegate,e,t)}sendPasswordResetEmail(e,t){return DV(this._delegate,e,t||void 0)}async setPersistence(e){OL(this._delegate,e);let t;switch(e){case Kn.SESSION:t=Bs;break;case Kn.LOCAL:t=await Qn(kl)._isAvailable()?kl:wm;break;case Kn.NONE:t=xl;break;default:return nn("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Vn(this._delegate,bV(this._delegate))}signInWithCredential(e){return Vn(this._delegate,Em(this._delegate,e))}signInWithCustomToken(e){return Vn(this._delegate,CV(this._delegate,e))}signInWithEmailAndPassword(e,t){return Vn(this._delegate,PS(this._delegate,e,t))}signInWithEmailLink(e,t){return Vn(this._delegate,MV(this._delegate,e,t))}signInWithPhoneNumber(e,t){return fy(this._delegate,Sx(this._delegate,e,t))}async signInWithPopup(e){return Oc(b_(),this._delegate,"operation-not-supported-in-this-environment"),Vn(this._delegate,Ox(this._delegate,e,Ns))}async signInWithRedirect(e){return Oc(b_(),this._delegate,"operation-not-supported-in-this-environment"),await dy(this._delegate),Fx(this._delegate,e,Ns)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return VV(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}my.Persistence=Kn;function Nb(i,e,t){let n=i;typeof i!="function"&&({next:n,error:e,complete:t}=i);const a=n;return{next:c=>a(c&&xi.getOrCreate(c)),error:e,complete:t}}function FL(i,e){const t=kL(i,e);if(typeof self<"u"&&!t.includes(kl)&&t.push(kl),typeof window<"u")for(const n of[wm,Bs])t.includes(n)||t.push(n);return t.includes(xl)||t.push(xl),t}/**
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
 */class Zv{static credential(e,t){return to.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new to(Q1(au.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Zv.PHONE_SIGN_IN_METHOD=to.PHONE_SIGN_IN_METHOD;Zv.PROVIDER_ID=to.PROVIDER_ID;/**
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
 */const qL=re;class jL{constructor(e,t,n=au.app()){var a;qL((a=n.options)==null?void 0:a.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new Ax(n.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const HL="auth-compat";function GL(i){i.INTERNAL.registerComponent(new ei(HL,e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new my(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:hl.EMAIL_SIGNIN,PASSWORD_RESET:hl.PASSWORD_RESET,RECOVER_EMAIL:hl.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:hl.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:hl.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:hl.VERIFY_EMAIL}},EmailAuthProvider:$s,FacebookAuthProvider:Hr,GithubAuthProvider:Kr,GoogleAuthProvider:Gr,OAuthProvider:Sl,SAMLAuthProvider:Kf,PhoneAuthProvider:Zv,PhoneMultiFactorGenerator:YS,RecaptchaVerifier:jL,TwitterAuthProvider:Qr,Auth:my,AuthCredential:iu,Error:Sn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),i.registerVersion(AL,bL)}GL(au);const KL={apiKey:"AIzaSyBh3m3KMuVVIC53DkKpJaQyjZoRnCOS6iQ",authDomain:"faq1-a8fa2.firebaseapp.com",projectId:"faq1-a8fa2",storageBucket:"faq1-a8fa2.appspot.com",messagingSenderId:"265196948796",appId:"1:265196948796:web:04ab2bc201e171d945a239"};au.initializeApp(KL);const bs=u4(),eE=DO();var Ni=(i=>(i.USER="USER",i.ADMIN="ADMIN",i))(Ni||{});const QL=({currentView:i,setView:e,user:t})=>{const n=async()=>{try{await ex(eE),e(Ni.USER)}catch(l){console.error("Error signing out: ",l),alert("Failed to sign out.")}},a=l=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${i===l?"bg-primary-600 text-white":"text-white hover:bg-primary-700"}`;return J.jsx("header",{className:"bg-primary-800 shadow-md",children:J.jsxs("div",{className:"container mx-auto px-4 py-4 flex justify-between items-center",children:[J.jsxs("div",{className:"flex items-center space-x-2",children:[J.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:J.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),J.jsx("h1",{className:"text-2xl font-bold text-white",children:"FAQ System"})]}),J.jsxs("nav",{className:"flex items-center space-x-4",children:[J.jsx("button",{onClick:()=>e(Ni.USER),className:a(Ni.USER),children:"User View"}),J.jsx("button",{onClick:()=>e(Ni.ADMIN),className:a(Ni.ADMIN),children:"Admin Panel"}),t&&i===Ni.ADMIN&&J.jsxs("div",{className:"flex items-center space-x-3 pl-4 border-l border-primary-600",children:[J.jsx("span",{className:"text-white text-sm hidden sm:block",children:t.email}),J.jsx("button",{onClick:n,className:"bg-red-500 text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-red-600 transition-colors",children:"Logout"})]})]})]})})},qa="faqs";function $1(i,e){const[t,n]=Qe.useState(i);return Qe.useEffect(()=>{const a=setTimeout(()=>{n(i)},e);return()=>{clearTimeout(a)}},[i,e]),t}const YL=({faq:i})=>{const[e,t]=Qe.useState(!1);return J.jsxs("div",{className:"border-b border-gray-200",children:[J.jsxs("button",{onClick:()=>t(!e),className:"w-full flex justify-between items-center text-left py-4 px-2 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition-colors",children:[J.jsxs("div",{className:"flex-1",children:[J.jsx("p",{className:"text-xs font-semibold text-primary-600 uppercase tracking-wide",children:i.category}),J.jsx("h3",{className:"mt-1 font-semibold text-gray-800",children:i.question})]}),J.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:`h-5 w-5 text-gray-500 transform transition-transform ${e?"rotate-180":""}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:J.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),e&&J.jsx("div",{className:"px-4 pb-4 text-gray-600 bg-gray-50",children:J.jsx("p",{className:"whitespace-pre-wrap",children:i.answer})})]})},tE=()=>J.jsx("div",{className:"flex justify-center items-center",children:J.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"})}),$L=()=>{const[i,e]=Qe.useState([]),[t,n]=Qe.useState(!0),[a,l]=Qe.useState(""),[c,f]=Qe.useState("All"),m=$1(a,300);Qe.useEffect(()=>{const T=Fr(Nl(bs,qa),sy("category"),sy("question")),I=Jm(T,x=>{const G=x.docs.map(W=>({id:W.id,...W.data()}));e(G),n(!1)},x=>{console.error("Error fetching FAQs in real-time:",x),n(!1)});return()=>I()},[]);const g=Qe.useMemo(()=>["All",...Array.from(new Set(i.map(T=>T.category)))],[i]),y=Qe.useMemo(()=>i.filter(T=>{const I=c==="All"||T.category===c,x=m?T.question.toLowerCase().includes(m.toLowerCase())||T.answer.toLowerCase().includes(m.toLowerCase()):!0;return I&&x}),[i,c,m]);return J.jsxs("div",{className:"max-w-4xl mx-auto",children:[J.jsxs("div",{className:"text-center mb-8",children:[J.jsx("h1",{className:"text-4xl font-extrabold text-gray-900 mb-2",children:"Frequently Asked Questions"}),J.jsx("p",{className:"text-lg text-gray-600",children:"Find answers to the most common questions."})]}),J.jsx("div",{className:"mb-8 sticky top-4 bg-gray-50/80 backdrop-blur-sm p-4 rounded-lg shadow-sm z-10",children:J.jsx("input",{type:"text",placeholder:"Search for a question...",value:a,onChange:T=>l(T.target.value),className:"w-full px-5 py-3 text-lg border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"})}),J.jsx("div",{className:"mb-8 flex flex-wrap justify-center gap-2",children:g.map(T=>J.jsx("button",{onClick:()=>f(T),className:`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${c===T?"bg-primary-600 text-white shadow":"bg-white text-gray-700 hover:bg-gray-200 border"}`,children:T},T))}),t?J.jsx("div",{className:"flex justify-center items-center py-10",children:J.jsx(tE,{})}):J.jsx("div",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:y.length>0?y.map(T=>J.jsx(YL,{faq:T},T.id)):J.jsxs("div",{className:"text-center py-10 text-gray-500",children:[J.jsx("p",{className:"text-xl",children:"No FAQs found"}),J.jsx("p",{children:"Try adjusting your search or filter."})]})})]})},WL=({isOpen:i,onClose:e,title:t,children:n})=>i?J.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center",onClick:e,children:J.jsxs("div",{className:"bg-white rounded-lg shadow-xl w-full max-w-lg m-4",onClick:a=>a.stopPropagation(),children:[J.jsxs("div",{className:"flex justify-between items-center p-4 border-b",children:[J.jsx("h3",{className:"text-xl font-semibold text-gray-800",children:t}),J.jsx("button",{onClick:e,className:"text-gray-400 hover:text-gray-600",children:J.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:J.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),J.jsx("div",{className:"p-6",children:n})]})}):null,XL=({onSubmit:i,existingFaq:e})=>{const[t,n]=Qe.useState(""),[a,l]=Qe.useState(""),[c,f]=Qe.useState("");Qe.useEffect(()=>{e?(n(e.category),l(e.question),f(e.answer)):(n(""),l(""),f(""))},[e]);const m=g=>{g.preventDefault();const y={category:t,question:a,answer:c};i(e?{...y,id:e.id}:y)};return J.jsxs("form",{onSubmit:m,className:"space-y-4",children:[J.jsxs("div",{children:[J.jsx("label",{htmlFor:"category",className:"block text-sm font-medium text-gray-700",children:"Category"}),J.jsx("input",{type:"text",id:"category",value:t,onChange:g=>n(g.target.value),className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500",required:!0})]}),J.jsxs("div",{children:[J.jsx("label",{htmlFor:"question",className:"block text-sm font-medium text-gray-700",children:"Question"}),J.jsx("input",{type:"text",id:"question",value:a,onChange:g=>l(g.target.value),className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500",required:!0})]}),J.jsxs("div",{children:[J.jsx("label",{htmlFor:"answer",className:"block text-sm font-medium text-gray-700",children:"Answer"}),J.jsx("textarea",{id:"answer",rows:5,value:c,onChange:g=>f(g.target.value),className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500",required:!0})]}),J.jsx("div",{className:"flex justify-end",children:J.jsx("button",{type:"submit",className:"bg-primary-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-primary-700 transition-colors",children:e?"Update FAQ":"Add FAQ"})})]})},JL=()=>{const[i,e]=Qe.useState([]),[t,n]=Qe.useState(!0),[a,l]=Qe.useState(!1),[c,f]=Qe.useState(null),[m,g]=Qe.useState(""),y=$1(m,300);Qe.useEffect(()=>{n(!0);const ne=Fr(Nl(bs,qa)),_e=Jm(ne,he=>{const Te=he.docs.map(D=>({id:D.id,...D.data()}));e(Te),n(!1)},he=>{console.error("Error fetching FAQs: ",he),alert("Could not fetch FAQs."),n(!1)});return()=>_e()},[]);const T=Qe.useMemo(()=>{if(!y)return i;const ne=y.toLowerCase();return i.filter(_e=>_e.question.toLowerCase().includes(ne)||_e.answer.toLowerCase().includes(ne)||_e.category.toLowerCase().includes(ne))},[i,y]),I=()=>{f(null),l(!0)},x=ne=>{f(ne),l(!0)},G=()=>{l(!1),f(null)},W=async ne=>{try{if("id"in ne){const _e=Cs(bs,qa,ne.id);await ay(_e,{...ne})}else await O1(Nl(bs,qa),ne);G()}catch(_e){console.error("Error saving FAQ: ",_e),alert("Failed to save FAQ.")}},Y=async ne=>{if(window.confirm("Are you sure you want to delete this FAQ?"))try{await x1(Cs(bs,qa,ne))}catch(_e){console.error("Error deleting FAQ: ",_e),alert("Failed to delete FAQ.")}},ge=()=>{const he=[["id","category","question","answer"].join(","),...i.map(R=>[`"${R.id}"`,`"${R.category.replace(/"/g,'""')}"`,`"${R.question.replace(/"/g,'""')}"`,`"${R.answer.replace(/"/g,'""')}"`].join(","))].join(`
`),Te=new Blob([he],{type:"text/csv;charset=utf-8;"}),D=document.createElement("a"),b=URL.createObjectURL(Te);D.setAttribute("href",b),D.setAttribute("download","faqs.csv"),D.style.visibility="hidden",document.body.appendChild(D),D.click(),document.body.removeChild(D)},de=ne=>{var Te;const _e=(Te=ne.target.files)==null?void 0:Te[0];if(!_e)return;const he=new FileReader;he.onload=async D=>{var K;const R=((K=D.target)==null?void 0:K.result).split(`
`).filter(ie=>ie.trim()!==""),V=R[0].split(",").map(ie=>ie.trim().replace(/"/g,"")),O=V.indexOf("id"),M=V.indexOf("category"),C=V.indexOf("question"),Vt=V.indexOf("answer");if(M===-1||C===-1||Vt===-1){alert('CSV must contain "category", "question", and "answer" headers.');return}const ut=R.slice(1).map(ie=>{const pe=ie.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(Le=>Le.trim().replace(/^"|"$/g,"").replace(/""/g,'"'));return{id:O>-1?pe[O]:void 0,category:pe[M],question:pe[C],answer:pe[Vt]}});if(window.confirm(`Are you sure you want to upsert ${ut.length} FAQs? This may overwrite existing data.`))try{const ie=Y4(bs);for(const pe of ut){const{id:Le,...N}=pe;if(Le){const ee=Cs(bs,qa,Le);ie.set(ee,N,{merge:!0})}else{const ee=Cs(Nl(bs,qa));ie.set(ee,N)}}await ie.commit(),alert("CSV data uploaded successfully!")}catch(ie){console.error("Error uploading CSV: ",ie),alert("Failed to upload CSV data.")}},he.readAsText(_e),ne.target.value=""};return t?J.jsx("div",{className:"flex justify-center items-center h-64",children:J.jsx(tE,{})}):J.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg",children:[J.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center mb-6 gap-4",children:[J.jsx("h2",{className:"text-3xl font-bold text-gray-800",children:"Manage FAQs"}),J.jsxs("div",{className:"flex items-center gap-2 flex-wrap justify-center",children:[J.jsx("button",{onClick:I,className:"bg-primary-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-primary-700 transition-colors",children:"Add New FAQ"}),J.jsx("button",{onClick:ge,className:"bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition-colors",children:"Download CSV"}),J.jsxs("label",{className:"bg-yellow-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-yellow-600 transition-colors cursor-pointer",children:["Upload CSV",J.jsx("input",{type:"file",accept:".csv",onChange:de,className:"hidden"})]})]})]}),J.jsx("div",{className:"mb-4",children:J.jsx("input",{type:"text",placeholder:"Search FAQs...",value:m,onChange:ne=>g(ne.target.value),className:"w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"})}),J.jsxs("div",{className:"overflow-x-auto",children:[J.jsxs("table",{className:"min-w-full bg-white",children:[J.jsx("thead",{className:"bg-gray-100",children:J.jsxs("tr",{children:[J.jsx("th",{className:"text-left py-3 px-4 uppercase font-semibold text-sm",children:"Category"}),J.jsx("th",{className:"text-left py-3 px-4 uppercase font-semibold text-sm",children:"Question"}),J.jsx("th",{className:"text-left py-3 px-4 uppercase font-semibold text-sm",children:"Actions"})]})}),J.jsx("tbody",{className:"text-gray-700",children:T.map(ne=>J.jsxs("tr",{className:"border-b border-gray-200 hover:bg-gray-50",children:[J.jsx("td",{className:"py-3 px-4",children:ne.category}),J.jsx("td",{className:"py-3 px-4",children:ne.question}),J.jsx("td",{className:"py-3 px-4",children:J.jsxs("div",{className:"flex items-center space-x-2",children:[J.jsx("button",{onClick:()=>x(ne),className:"text-blue-500 hover:text-blue-700",children:"Edit"}),J.jsx("button",{onClick:()=>Y(ne.id),className:"text-red-500 hover:text-red-700",children:"Delete"})]})})]},ne.id))})]}),T.length===0&&J.jsx("p",{className:"text-center py-4 text-gray-500",children:"No FAQs found."})]}),J.jsx(WL,{isOpen:a,onClose:G,title:c?"Edit FAQ":"Add New FAQ",children:J.jsx(XL,{onSubmit:W,existingFaq:c})})]})},ZL=()=>{const[i,e]=Qe.useState(""),[t,n]=Qe.useState(""),[a,l]=Qe.useState(null),[c,f]=Qe.useState(!1),m=async g=>{g.preventDefault(),f(!0),l(null);try{await PS(eE,i,t)}catch(y){l("Failed to sign in. Please check your credentials."),console.error(y)}finally{f(!1)}};return J.jsxs("div",{className:"max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg",children:[J.jsx("h2",{className:"text-2xl font-bold text-center text-gray-800 mb-6",children:"Admin Login"}),J.jsxs("form",{onSubmit:m,children:[a&&J.jsx("p",{className:"bg-red-100 text-red-700 p-3 rounded-md mb-4",children:a}),J.jsxs("div",{className:"mb-4",children:[J.jsx("label",{htmlFor:"email",className:"block text-gray-700 font-medium mb-2",children:"Email"}),J.jsx("input",{type:"email",id:"email",value:i,onChange:g=>e(g.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500",required:!0})]}),J.jsxs("div",{className:"mb-6",children:[J.jsx("label",{htmlFor:"password",className:"block text-gray-700 font-medium mb-2",children:"Password"}),J.jsx("input",{type:"password",id:"password",value:t,onChange:g=>n(g.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500",required:!0})]}),J.jsx("button",{type:"submit",disabled:c,className:"w-full bg-primary-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-primary-700 transition-colors disabled:bg-primary-300",children:c?"Signing In...":"Sign In"})]})]})},eU=()=>{const[i,e]=Qe.useState(Ni.USER),[t,n]=Qe.useState(null),[a,l]=Qe.useState(!0);Qe.useEffect(()=>{const f=ZV(eE,m=>{n(m),l(!1)});return()=>f()},[]);const c=()=>a?J.jsx("div",{className:"flex justify-center items-center h-screen",children:J.jsx(tE,{})}):i===Ni.ADMIN?t?J.jsx(JL,{}):J.jsx(ZL,{}):J.jsx($L,{});return J.jsxs("div",{className:"min-h-screen bg-gray-50 font-sans text-gray-800",children:[J.jsx(QL,{currentView:i,setView:e,user:t}),J.jsx("main",{className:"container mx-auto px-4 py-8",children:c()}),J.jsx("footer",{className:"text-center py-4 text-gray-500 text-sm",children:J.jsx("p",{children:"© 2024 FAQ System. All rights reserved."})})]})},W1=document.getElementById("root");if(!W1)throw new Error("Could not find root element to mount to");const tU=VD.createRoot(W1);tU.render(J.jsx(AD.StrictMode,{children:J.jsx(eU,{})}));
