import{g as Ka,r as kt,R as zh,_ as Hh}from"./index-pSqMUyT8.js";import{o as Gh,m as Vh,a as Wh,P as F}from"./ordinal-lviChniW.js";function jh(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,o,s,a=[],c=!0,l=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=o.call(t)).done)&&(a.push(i.value),a.length!==e);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(l)throw r}}return a}}function Xh(n,e,t){return e=ef(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Ds(n,e){return Yh(n)||jh(n,e)||ou(n,e)||Jh()}function $h(n){return qh(n)||Kh(n)||ou(n)||Zh()}function qh(n){if(Array.isArray(n))return xa(n)}function Yh(n){if(Array.isArray(n))return n}function Kh(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ou(n,e){if(n){if(typeof n=="string")return xa(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return xa(n,e)}}function xa(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function Zh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jh(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qh(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function ef(n){var e=Qh(n,"string");return typeof e=="symbol"?e:String(e)}var tf=function(e,t){var i=new Set(t);return Object.assign.apply(Object,[{}].concat($h(Object.entries(e).filter(function(r){var o=Ds(r,1),s=o[0];return!i.has(s)}).map(function(r){var o=Ds(r,2),s=o[0],a=o[1];return Xh({},s,a)}))))};/*! fromentries. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */var nf=function(e){return[...e].reduce((t,[i,r])=>(t[i]=r,t),{})};const Is=Ka(nf);function rf(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,o,s,a=[],c=!0,l=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=o.call(t)).done)&&(a.push(i.value),a.length!==e);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(l)throw r}}return a}}function Ma(n){"@babel/helpers - typeof";return Ma=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ma(n)}function au(n,e){return af(n)||rf(n,e)||su(n,e)||lf()}function Ns(n){return of(n)||sf(n)||su(n)||cf()}function of(n){if(Array.isArray(n))return Sa(n)}function af(n){if(Array.isArray(n))return n}function sf(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function su(n,e){if(n){if(typeof n=="string")return Sa(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Sa(n,e)}}function Sa(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function cf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function uf(n,e){var t=Ma(e)==="object"?e:{wrapperElementType:e,methodNames:(arguments.length<=2?void 0:arguments[2])||void 0,initPropNames:(arguments.length<=3?void 0:arguments[3])||void 0},i=t.wrapperElementType,r=i===void 0?"div":i,o=t.nodeMapper,s=o===void 0?function(h){return h}:o,a=t.methodNames,c=a===void 0?[]:a,l=t.initPropNames,u=l===void 0?[]:l;return kt.forwardRef(function(h,d){var p=kt.useRef(),g=kt.useState({}),v=au(g,2),m=v[0],f=v[1];kt.useEffect(function(){return f(h)});var x=kt.useMemo(function(){var y=Is(u.filter(function(S){return h.hasOwnProperty(S)}).map(function(S){return[S,h[S]]}));return n(y)},[]);Us(function(){x(s(p.current))},kt.useLayoutEffect),Us(function(){return x._destructor instanceof Function?x._destructor:void 0});var _=kt.useCallback(function(y){for(var S=arguments.length,E=new Array(S>1?S-1:0),C=1;C<S;C++)E[C-1]=arguments[C];return x[y]instanceof Function?x[y].apply(x,E):void 0},[x]),b=tf(h,[].concat(Ns(c),Ns(u)));return Object.keys(b).filter(function(y){return m[y]!==h[y]}).forEach(function(y){return _(y,h[y])}),kt.useImperativeHandle(d,function(){return Is(c.map(function(y){return[y,function(){for(var S=arguments.length,E=new Array(S),C=0;C<S;C++)E[C]=arguments[C];return _.apply(void 0,[y].concat(E))}]}))}),zh.createElement(r,{ref:p})})}function Us(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:kt.useEffect,t=kt.useRef(),i=kt.useRef(!1),r=kt.useRef(!1),o=kt.useState(0),s=au(o,2);s[0];var a=s[1];i.current&&(r.current=!0),e(function(){return i.current||(t.current=n(),i.current=!0),a(function(c){return c+1}),function(){r.current&&t.current&&t.current()}},[])}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Za="158",an={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ii={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hf=0,Fs=1,ff=2,cu=1,df=2,vn=3,Bn=0,Ct=1,bn=2,Sn=0,Ai=1,ks=2,Bs=3,zs=4,pf=5,Yn=100,mf=101,gf=102,Hs=103,Gs=104,vf=200,_f=201,yf=202,bf=203,Ea=204,wa=205,xf=206,Mf=207,Sf=208,Ef=209,wf=210,Tf=211,Af=212,Rf=213,Cf=214,Pf=0,Lf=1,Of=2,Jr=3,Df=4,If=5,Nf=6,Uf=7,Ja=0,Ff=1,kf=2,Fn=0,Bf=1,zf=2,Hf=3,Gf=4,Vf=5,lu=300,Ci=301,Pi=302,Ta=303,Aa=304,ho=306,Ra=1e3,Zt=1001,Ca=1002,At=1003,Vs=1004,Co=1005,Gt=1006,Wf=1007,sr=1008,kn=1009,jf=1010,Xf=1011,Qa=1012,uu=1013,Nn=1014,Un=1015,Li=1016,hu=1017,fu=1018,Zn=1020,$f=1021,Jt=1023,qf=1024,Yf=1025,Jn=1026,Oi=1027,Kf=1028,du=1029,Zf=1030,pu=1031,mu=1033,Po=33776,Lo=33777,Oo=33778,Do=33779,Ws=35840,js=35841,Xs=35842,$s=35843,Jf=36196,qs=37492,Ys=37496,Ks=37808,Zs=37809,Js=37810,Qs=37811,ec=37812,tc=37813,nc=37814,ic=37815,rc=37816,oc=37817,ac=37818,sc=37819,cc=37820,lc=37821,Io=36492,uc=36494,hc=36495,Qf=36283,fc=36284,dc=36285,pc=36286,gu=3e3,Qn=3001,ed=3200,td=3201,vu=0,nd=1,Wt="",gt="srgb",wn="srgb-linear",es="display-p3",fo="display-p3-linear",Qr="linear",Qe="srgb",eo="rec709",to="p3",ri=7680,mc=519,id=512,rd=513,od=514,ad=515,sd=516,cd=517,ld=518,ud=519,gc=35044,vc="300 es",Pa=1035,xn=2e3,no=2001;class rn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _c=1234567;const nr=Math.PI/180,cr=180/Math.PI;function Ni(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]).toLowerCase()}function vt(n,e,t){return Math.max(e,Math.min(t,n))}function ts(n,e){return(n%e+e)%e}function hd(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function fd(n,e,t){return n!==e?(t-n)/(e-n):0}function ir(n,e,t){return(1-t)*n+t*e}function dd(n,e,t,i){return ir(n,e,1-Math.exp(-t*i))}function pd(n,e=1){return e-Math.abs(ts(n,e*2)-e)}function md(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function gd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function vd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function _d(n,e){return n+Math.random()*(e-n)}function yd(n){return n*(.5-Math.random())}function bd(n){n!==void 0&&(_c=n);let e=_c+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xd(n){return n*nr}function Md(n){return n*cr}function La(n){return(n&n-1)===0&&n!==0}function Sd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function io(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ed(n,e,t,i,r){const o=Math.cos,s=Math.sin,a=o(t/2),c=s(t/2),l=o((e+i)/2),u=s((e+i)/2),h=o((e-i)/2),d=s((e-i)/2),p=o((i-e)/2),g=s((i-e)/2);switch(r){case"XYX":n.set(a*u,c*h,c*d,a*l);break;case"YZY":n.set(c*d,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*d,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Mi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Oa={DEG2RAD:nr,RAD2DEG:cr,generateUUID:Ni,clamp:vt,euclideanModulo:ts,mapLinear:hd,inverseLerp:fd,lerp:ir,damp:dd,pingpong:pd,smoothstep:md,smootherstep:gd,randInt:vd,randFloat:_d,randFloatSpread:yd,seededRandom:bd,degToRad:xd,radToDeg:Md,isPowerOfTwo:La,ceilPowerOfTwo:Sd,floorPowerOfTwo:io,setQuaternionFromProperEuler:Ed,normalize:wt,denormalize:Mi};class ge{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,r,o,s,a,c,l){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,c,l)}set(e,t,i,r,o,s,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=c,u[6]=i,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],v=r[0],m=r[3],f=r[6],x=r[1],_=r[4],b=r[7],y=r[2],S=r[5],E=r[8];return o[0]=s*v+a*x+c*y,o[3]=s*m+a*_+c*S,o[6]=s*f+a*b+c*E,o[1]=l*v+u*x+h*y,o[4]=l*m+u*_+h*S,o[7]=l*f+u*b+h*E,o[2]=d*v+p*x+g*y,o[5]=d*m+p*_+g*S,o[8]=d*f+p*b+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*a*l-i*o*u+i*a*c+r*o*l-r*s*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*s-a*l,d=a*c-u*o,p=l*o-s*c,g=t*h+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*s)*v,e[3]=d*v,e[4]=(u*t-r*c)*v,e[5]=(r*o-a*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(s*t-i*o)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,s,a){const c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*s+l*a)+s+e,-r*l,r*c,-r*(-l*s+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(No.makeScale(e,t)),this}rotate(e){return this.premultiply(No.makeRotation(-e)),this}translate(e,t){return this.premultiply(No.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const No=new Ge;function _u(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function lr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wd(){const n=lr("canvas");return n.style.display="block",n}const yc={};function rr(n){n in yc||(yc[n]=!0,console.warn(n))}const bc=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xc=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vr={[wn]:{transfer:Qr,primaries:eo,toReference:n=>n,fromReference:n=>n},[gt]:{transfer:Qe,primaries:eo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[fo]:{transfer:Qr,primaries:to,toReference:n=>n.applyMatrix3(xc),fromReference:n=>n.applyMatrix3(bc)},[es]:{transfer:Qe,primaries:to,toReference:n=>n.convertSRGBToLinear().applyMatrix3(xc),fromReference:n=>n.applyMatrix3(bc).convertLinearToSRGB()}},Td=new Set([wn,fo]),Ke={enabled:!0,_workingColorSpace:wn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Td.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=vr[e].toReference,r=vr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return vr[n].primaries},getTransfer:function(n){return n===Wt?Qr:vr[n].transfer}};function Ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Uo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let oi;class yu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{oi===void 0&&(oi=lr("canvas")),oi.width=e.width,oi.height=e.height;const i=oi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Ri(o[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ri(t[i]/255)*255):t[i]=Ri(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ad=0;class bu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Ni(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Fo(r[s].image)):o.push(Fo(r[s]))}else o=Fo(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function Fo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rd=0;class Lt extends rn{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=Zt,r=Zt,o=Gt,s=sr,a=Jt,c=kn,l=Lt.DEFAULT_ANISOTROPY,u=Wt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Ni(),this.name="",this.source=new bu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Qn?gt:Wt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ra:e.x=e.x-Math.floor(e.x);break;case Zt:e.x=e.x<0?0:1;break;case Ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ra:e.y=e.y-Math.floor(e.y);break;case Zt:e.y=e.y<0?0:1;break;case Ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===gt?Qn:gu}set encoding(e){rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Qn?gt:Wt}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=lu;Lt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,b=(p+1)/2,y=(f+1)/2,S=(u+d)/4,E=(h+v)/4,C=(g+m)/4;return _>b&&_>y?_<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(_),r=S/i,o=E/i):b>y?b<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(b),i=S/r,o=C/r):y<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(y),i=E/o,r=C/o),this.set(i,r,o,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-v)/x,this.z=(d-u)/x,this.w=Math.acos((l+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cd extends rn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(rr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Qn?gt:Wt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Lt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends Cd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class xu extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pd extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,s,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const d=o[s+0],p=o[s+1],g=o[s+2],v=o[s+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||c!==d||l!==p||u!==g){let m=1-a;const f=c*d+l*p+u*g+h*v,x=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const y=Math.sqrt(_),S=Math.atan2(y,f*x);m=Math.sin(m*S)/y,a=Math.sin(a*S)/y}const b=a*x;if(c=c*m+d*b,l=l*m+p*b,u=u*m+g*b,h=h*m+v*b,m===1-a){const y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,o,s){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=o[s],d=o[s+1],p=o[s+2],g=o[s+3];return e[t]=a*g+u*h+c*p-l*d,e[t+1]=c*g+u*d+l*h-a*p,e[t+2]=l*g+u*p+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(o/2),d=c(i/2),p=c(r/2),g=c(o/2);switch(s){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],s=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(o-l)*p,this._z=(s-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(o-l)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(s-r)/p,this._x=(o+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,s=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+s*a+r*l-o*c,this._y=r*u+s*c+o*a-i*l,this._z=o*u+s*l+i*c-r*a,this._w=s*u-i*a-r*c-o*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=s*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=o*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(o),i*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,c=e.w,l=2*(s*r-a*i),u=2*(a*t-o*r),h=2*(o*i-s*t);return this.x=t+c*l+s*h-a*u,this.y=i+c*u+a*l-o*h,this.z=r+c*h+o*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,s=t.x,a=t.y,c=t.z;return this.x=r*c-o*a,this.y=o*s-i*c,this.z=i*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ko.copy(this).projectOnVector(e),this.sub(ko)}reflect(e){return this.sub(ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ko=new I,Mc=new nn;class ni{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,jt):jt.fromBufferAttribute(o,s),jt.applyMatrix4(e.matrixWorld),this.expandByPoint(jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_r.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_r.copy(i.boundingBox)),_r.applyMatrix4(e.matrixWorld),this.union(_r)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zi),yr.subVectors(this.max,zi),ai.subVectors(e.a,zi),si.subVectors(e.b,zi),ci.subVectors(e.c,zi),Rn.subVectors(si,ai),Cn.subVectors(ci,si),Wn.subVectors(ai,ci);let t=[0,-Rn.z,Rn.y,0,-Cn.z,Cn.y,0,-Wn.z,Wn.y,Rn.z,0,-Rn.x,Cn.z,0,-Cn.x,Wn.z,0,-Wn.x,-Rn.y,Rn.x,0,-Cn.y,Cn.x,0,-Wn.y,Wn.x,0];return!Bo(t,ai,si,ci,yr)||(t=[1,0,0,0,1,0,0,0,1],!Bo(t,ai,si,ci,yr))?!1:(br.crossVectors(Rn,Cn),t=[br.x,br.y,br.z],Bo(t,ai,si,ci,yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const un=[new I,new I,new I,new I,new I,new I,new I,new I],jt=new I,_r=new ni,ai=new I,si=new I,ci=new I,Rn=new I,Cn=new I,Wn=new I,zi=new I,yr=new I,br=new I,jn=new I;function Bo(n,e,t,i,r){for(let o=0,s=n.length-3;o<=s;o+=3){jn.fromArray(n,o);const a=r.x*Math.abs(jn.x)+r.y*Math.abs(jn.y)+r.z*Math.abs(jn.z),c=e.dot(jn),l=t.dot(jn),u=i.dot(jn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ld=new ni,Hi=new I,zo=new I;class po{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ld.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hi.subVectors(e,this.center);const t=Hi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Hi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hi.copy(e.center).add(zo)),this.expandByPoint(Hi.copy(e.center).sub(zo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new I,Ho=new I,xr=new I,Pn=new I,Go=new I,Mr=new I,Vo=new I;class mo{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ho.copy(e).add(t).multiplyScalar(.5),xr.copy(t).sub(e).normalize(),Pn.copy(this.origin).sub(Ho);const o=e.distanceTo(t)*.5,s=-this.direction.dot(xr),a=Pn.dot(this.direction),c=-Pn.dot(xr),l=Pn.lengthSq(),u=Math.abs(1-s*s);let h,d,p,g;if(u>0)if(h=s*c-a,d=s*a-c,g=o*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,p=h*(h+s*d+2*a)+d*(s*h+d+2*c)+l}else d=o,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*c)+l;else d=-o,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-s*o+a)),d=h>0?-o:Math.min(Math.max(-o,-c),o),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-o,-c),o),p=d*(d+2*c)+l):(h=Math.max(0,-(s*o+a)),d=h>0?o:Math.min(Math.max(-o,-c),o),p=-h*h+d*(d+2*c)+l);else d=s>0?-o:o,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ho).addScaledVector(xr,d),p}intersectSphere(e,t){hn.subVectors(e.center,this.origin);const i=hn.dot(this.direction),r=hn.dot(hn)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,c=i+s;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,s,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(o=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(o=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,i,r,o){Go.subVectors(t,e),Mr.subVectors(i,e),Vo.crossVectors(Go,Mr);let s=this.direction.dot(Vo),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Pn.subVectors(this.origin,e);const c=a*this.direction.dot(Mr.crossVectors(Pn,Mr));if(c<0)return null;const l=a*this.direction.dot(Go.cross(Pn));if(l<0||c+l>s)return null;const u=-a*Pn.dot(Vo);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,i,r,o,s,a,c,l,u,h,d,p,g,v,m){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,c,l,u,h,d,p,g,v,m)}set(e,t,i,r,o,s,a,c,l,u,h,d,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=o,f[5]=s,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/li.setFromMatrixColumn(e,0).length(),o=1/li.setFromMatrixColumn(e,1).length(),s=1/li.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const d=s*u,p=s*h,g=a*u,v=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=g+p*l,t[10]=s*c}else if(e.order==="YXZ"){const d=c*u,p=c*h,g=l*u,v=l*h;t[0]=d+v*a,t[4]=g*a-p,t[8]=s*l,t[1]=s*h,t[5]=s*u,t[9]=-a,t[2]=p*a-g,t[6]=v+d*a,t[10]=s*c}else if(e.order==="ZXY"){const d=c*u,p=c*h,g=l*u,v=l*h;t[0]=d-v*a,t[4]=-s*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=s*u,t[9]=v-d*a,t[2]=-s*l,t[6]=a,t[10]=s*c}else if(e.order==="ZYX"){const d=s*u,p=s*h,g=a*u,v=a*h;t[0]=c*u,t[4]=g*l-p,t[8]=d*l+v,t[1]=c*h,t[5]=v*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=s*c}else if(e.order==="YZX"){const d=s*c,p=s*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-d*h,t[8]=g*h+p,t[1]=h,t[5]=s*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=s*c,p=s*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+v,t[5]=s*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Od,e,Dd)}lookAt(e,t,i){const r=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Ln.crossVectors(i,Nt),Ln.lengthSq()===0&&(Math.abs(i.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Ln.crossVectors(i,Nt)),Ln.normalize(),Sr.crossVectors(Nt,Ln),r[0]=Ln.x,r[4]=Sr.x,r[8]=Nt.x,r[1]=Ln.y,r[5]=Sr.y,r[9]=Nt.y,r[2]=Ln.z,r[6]=Sr.z,r[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],x=i[3],_=i[7],b=i[11],y=i[15],S=r[0],E=r[4],C=r[8],M=r[12],T=r[1],B=r[5],G=r[9],J=r[13],R=r[2],L=r[6],U=r[10],X=r[14],ie=r[3],te=r[7],H=r[11],O=r[15];return o[0]=s*S+a*T+c*R+l*ie,o[4]=s*E+a*B+c*L+l*te,o[8]=s*C+a*G+c*U+l*H,o[12]=s*M+a*J+c*X+l*O,o[1]=u*S+h*T+d*R+p*ie,o[5]=u*E+h*B+d*L+p*te,o[9]=u*C+h*G+d*U+p*H,o[13]=u*M+h*J+d*X+p*O,o[2]=g*S+v*T+m*R+f*ie,o[6]=g*E+v*B+m*L+f*te,o[10]=g*C+v*G+m*U+f*H,o[14]=g*M+v*J+m*X+f*O,o[3]=x*S+_*T+b*R+y*ie,o[7]=x*E+_*B+b*L+y*te,o[11]=x*C+_*G+b*U+y*H,o[15]=x*M+_*J+b*X+y*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+o*c*h-r*l*h-o*a*d+i*l*d+r*a*p-i*c*p)+v*(+t*c*p-t*l*d+o*s*d-r*s*p+r*l*u-o*c*u)+m*(+t*l*h-t*a*p-o*s*h+i*s*p+o*a*u-i*l*u)+f*(-r*a*u-t*c*h+t*a*d+r*s*h-i*s*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],x=h*m*l-v*d*l+v*c*p-a*m*p-h*c*f+a*d*f,_=g*d*l-u*m*l-g*c*p+s*m*p+u*c*f-s*d*f,b=u*v*l-g*h*l+g*a*p-s*v*p-u*a*f+s*h*f,y=g*h*c-u*v*c-g*a*d+s*v*d+u*a*m-s*h*m,S=t*x+i*_+r*b+o*y;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=x*E,e[1]=(v*d*o-h*m*o-v*r*p+i*m*p+h*r*f-i*d*f)*E,e[2]=(a*m*o-v*c*o+v*r*l-i*m*l-a*r*f+i*c*f)*E,e[3]=(h*c*o-a*d*o-h*r*l+i*d*l+a*r*p-i*c*p)*E,e[4]=_*E,e[5]=(u*m*o-g*d*o+g*r*p-t*m*p-u*r*f+t*d*f)*E,e[6]=(g*c*o-s*m*o-g*r*l+t*m*l+s*r*f-t*c*f)*E,e[7]=(s*d*o-u*c*o+u*r*l-t*d*l-s*r*p+t*c*p)*E,e[8]=b*E,e[9]=(g*h*o-u*v*o-g*i*p+t*v*p+u*i*f-t*h*f)*E,e[10]=(s*v*o-g*a*o+g*i*l-t*v*l-s*i*f+t*a*f)*E,e[11]=(u*a*o-s*h*o-u*i*l+t*h*l+s*i*p-t*a*p)*E,e[12]=y*E,e[13]=(u*v*r-g*h*r+g*i*d-t*v*d-u*i*m+t*h*m)*E,e[14]=(g*a*r-s*v*r-g*i*c+t*v*c+s*i*m-t*a*m)*E,e[15]=(s*h*r-u*a*r+u*i*c-t*h*c-s*i*d+t*a*d)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,s=e.x,a=e.y,c=e.z,l=o*s,u=o*a;return this.set(l*s+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*s,0,l*c-r*a,u*c+r*s,o*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,s=t._y,a=t._z,c=t._w,l=o+o,u=s+s,h=a+a,d=o*l,p=o*u,g=o*h,v=s*u,m=s*h,f=a*h,x=c*l,_=c*u,b=c*h,y=i.x,S=i.y,E=i.z;return r[0]=(1-(v+f))*y,r[1]=(p+b)*y,r[2]=(g-_)*y,r[3]=0,r[4]=(p-b)*S,r[5]=(1-(d+f))*S,r[6]=(m+x)*S,r[7]=0,r[8]=(g+_)*E,r[9]=(m-x)*E,r[10]=(1-(d+v))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=li.set(r[0],r[1],r[2]).length();const s=li.set(r[4],r[5],r[6]).length(),a=li.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Xt.copy(this);const l=1/o,u=1/s,h=1/a;return Xt.elements[0]*=l,Xt.elements[1]*=l,Xt.elements[2]*=l,Xt.elements[4]*=u,Xt.elements[5]*=u,Xt.elements[6]*=u,Xt.elements[8]*=h,Xt.elements[9]*=h,Xt.elements[10]*=h,t.setFromRotationMatrix(Xt),i.x=o,i.y=s,i.z=a,this}makePerspective(e,t,i,r,o,s,a=xn){const c=this.elements,l=2*o/(t-e),u=2*o/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let p,g;if(a===xn)p=-(s+o)/(s-o),g=-2*s*o/(s-o);else if(a===no)p=-s/(s-o),g=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,o,s,a=xn){const c=this.elements,l=1/(t-e),u=1/(i-r),h=1/(s-o),d=(t+e)*l,p=(i+r)*u;let g,v;if(a===xn)g=(s+o)*h,v=-2*h;else if(a===no)g=o*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const li=new I,Xt=new it,Od=new I(0,0,0),Dd=new I(1,1,1),Ln=new I,Sr=new I,Nt=new I,Sc=new it,Ec=new nn;class go{constructor(e=0,t=0,i=0,r=go.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-vt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ec.setFromEuler(this),this.setFromQuaternion(Ec,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}go.DEFAULT_ORDER="XYZ";class ns{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Id=0;const wc=new I,ui=new nn,fn=new it,Er=new I,Gi=new I,Nd=new I,Ud=new nn,Tc=new I(1,0,0),Ac=new I(0,1,0),Rc=new I(0,0,1),Fd={type:"added"},kd={type:"removed"};class yt extends rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new I,t=new go,i=new nn,r=new I(1,1,1);function o(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new Ge}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ns,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.multiply(ui),this}rotateOnWorldAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.premultiply(ui),this}rotateX(e){return this.rotateOnAxis(Tc,e)}rotateY(e){return this.rotateOnAxis(Ac,e)}rotateZ(e){return this.rotateOnAxis(Rc,e)}translateOnAxis(e,t){return wc.copy(e).applyQuaternion(this.quaternion),this.position.add(wc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tc,e)}translateY(e){return this.translateOnAxis(Ac,e)}translateZ(e){return this.translateOnAxis(Rc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Er.copy(e):Er.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Gi,Er,this.up):fn.lookAt(Er,Gi,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),ui.setFromRotationMatrix(fn),this.quaternion.premultiply(ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Fd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectsByProperty(e,t);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,e,Nd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,Ud,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const o=t[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];o(e.shapes,h)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(e.materials,this.material[c]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(o(e.animations,c))}}if(t){const a=s(e.geometries),c=s(e.materials),l=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),p=s(e.animations),g=s(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}yt.DEFAULT_UP=new I(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new I,dn=new I,Wo=new I,pn=new I,hi=new I,fi=new I,Cc=new I,jo=new I,Xo=new I,$o=new I;let wr=!1;class Kt{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),$t.subVectors(e,t),r.cross($t);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){$t.subVectors(r,t),dn.subVectors(i,t),Wo.subVectors(e,t);const s=$t.dot($t),a=$t.dot(dn),c=$t.dot(Wo),l=dn.dot(dn),u=dn.dot(Wo),h=s*l-a*a;if(h===0)return o.set(-2,-1,-1);const d=1/h,p=(l*c-a*u)*d,g=(s*u-a*c)*d;return o.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,pn),pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getUV(e,t,i,r,o,s,a,c){return wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wr=!0),this.getInterpolation(e,t,i,r,o,s,a,c)}static getInterpolation(e,t,i,r,o,s,a,c){return this.getBarycoord(e,t,i,r,pn),c.setScalar(0),c.addScaledVector(o,pn.x),c.addScaledVector(s,pn.y),c.addScaledVector(a,pn.z),c}static isFrontFacing(e,t,i,r){return $t.subVectors(i,t),dn.subVectors(e,t),$t.cross(dn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),$t.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,o){return wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wr=!0),Kt.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}getInterpolation(e,t,i,r,o){return Kt.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let s,a;hi.subVectors(r,i),fi.subVectors(o,i),jo.subVectors(e,i);const c=hi.dot(jo),l=fi.dot(jo);if(c<=0&&l<=0)return t.copy(i);Xo.subVectors(e,r);const u=hi.dot(Xo),h=fi.dot(Xo);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(i).addScaledVector(hi,s);$o.subVectors(e,o);const p=hi.dot($o),g=fi.dot($o);if(g>=0&&p<=g)return t.copy(o);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(fi,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Cc.subVectors(o,r),a=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(Cc,a);const f=1/(m+v+d);return s=v*f,a=d*f,t.copy(i).addScaledVector(hi,s).addScaledVector(fi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function qo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=ts(e,1),t=vt(t,0,1),i=vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,s=2*i-o;this.r=qo(s,o,e+1/3),this.g=qo(s,o,e),this.b=qo(s,o,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,t=gt){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){const i=Mu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Uo(e.r),this.g=Uo(e.g),this.b=Uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return Ke.fromWorkingColorSpace(xt.copy(this),e),Math.round(vt(xt.r*255,0,255))*65536+Math.round(vt(xt.g*255,0,255))*256+Math.round(vt(xt.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(xt.copy(this),t);const i=xt.r,r=xt.g,o=xt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let c,l;const u=(a+s)/2;if(a===s)c=0,l=0;else{const h=s-a;switch(l=u<=.5?h/(s+a):h/(2-s-a),s){case i:c=(r-o)/h+(r<o?6:0);break;case r:c=(o-i)/h+2;break;case o:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=gt){Ke.fromWorkingColorSpace(xt.copy(this),e);const t=xt.r,i=xt.g,r=xt.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(Tr);const i=ir(On.h,Tr.h,t),r=ir(On.s,Tr.s,t),o=ir(On.l,Tr.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xt=new Xe;Xe.NAMES=Mu;let Bd=0;class Ui extends rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=Ai,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ea,this.blendDst=wa,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(i.blending=this.blending),this.side!==Bn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ea&&(i.blendSrc=this.blendSrc),this.blendDst!==wa&&(i.blendDst=this.blendDst),this.blendEquation!==Yn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Jr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const c=o[a];delete c.metadata,s.push(c)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class is extends Ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new I,Ar=new ge;class tn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gc,this.updateRange={offset:0,count:-1},this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix3(e),this.setXY(t,Ar.x,Ar.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array),o=wt(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Su extends tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Eu extends tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ut extends tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let zd=0;const Ht=new it,Yo=new yt,di=new I,Ut=new ni,Vi=new ni,mt=new I;class Bt extends rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_u(e)?Eu:Su)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Ge().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,i){return Ht.makeTranslation(e,t,i),this.applyMatrix4(Ht),this}scale(e,t,i){return Ht.makeScale(e,t,i),this.applyMatrix4(Ht),this}lookAt(e){return Yo.lookAt(e),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new ut(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];Ut.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];Vi.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Ut.min,Vi.min),Ut.expandByPoint(mt),mt.addVectors(Ut.max,Vi.max),Ut.expandByPoint(mt)):(Ut.expandByPoint(Vi.min),Ut.expandByPoint(Vi.max))}Ut.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)mt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(mt));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)mt.fromBufferAttribute(a,l),c&&(di.fromBufferAttribute(e,l),mt.add(di)),r=Math.max(r,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,o=t.normal.array,s=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let T=0;T<a;T++)l[T]=new I,u[T]=new I;const h=new I,d=new I,p=new I,g=new ge,v=new ge,m=new ge,f=new I,x=new I;function _(T,B,G){h.fromArray(r,T*3),d.fromArray(r,B*3),p.fromArray(r,G*3),g.fromArray(s,T*2),v.fromArray(s,B*2),m.fromArray(s,G*2),d.sub(h),p.sub(h),v.sub(g),m.sub(g);const J=1/(v.x*m.y-m.x*v.y);isFinite(J)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(J),x.copy(p).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(J),l[T].add(f),l[B].add(f),l[G].add(f),u[T].add(x),u[B].add(x),u[G].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let T=0,B=b.length;T<B;++T){const G=b[T],J=G.start,R=G.count;for(let L=J,U=J+R;L<U;L+=3)_(i[L+0],i[L+1],i[L+2])}const y=new I,S=new I,E=new I,C=new I;function M(T){E.fromArray(o,T*3),C.copy(E);const B=l[T];y.copy(B),y.sub(E.multiplyScalar(E.dot(B))).normalize(),S.crossVectors(C,B);const J=S.dot(u[T])<0?-1:1;c[T*4]=y.x,c[T*4+1]=y.y,c[T*4+2]=y.z,c[T*4+3]=J}for(let T=0,B=b.length;T<B;++T){const G=b[T],J=G.start,R=G.count;for(let L=J,U=J+R;L<U;L+=3)M(i[L+0]),M(i[L+1]),M(i[L+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new I,o=new I,s=new I,a=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,v),s.fromBufferAttribute(t,m),u.subVectors(s,o),h.subVectors(r,o),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),o.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,o),h.subVectors(r,o),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new tn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=e(d,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,c=s.length;a<c;a++){const l=s[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const o=e.morphAttributes;for(const l in o){const u=[],h=o[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,u=s.length;l<u;l++){const h=s[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pc=new it,Xn=new mo,Rr=new po,Lc=new I,pi=new I,mi=new I,gi=new I,Ko=new I,Cr=new I,Pr=new ge,Lr=new ge,Or=new ge,Oc=new I,Dc=new I,Ic=new I,Dr=new I,Ir=new I;class Qt extends yt{constructor(e=new Bt,t=new is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Cr.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const u=a[c],h=o[c];u!==0&&(Ko.fromBufferAttribute(h,e),s?Cr.addScaledVector(Ko,u):Cr.addScaledVector(Ko.sub(t),u))}t.add(Cr)}return t}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere),Rr.applyMatrix4(o),Xn.copy(e.ray).recast(e.near),!(Rr.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(Rr,Lc)===null||Xn.origin.distanceToSquared(Lc)>(e.far-e.near)**2))&&(Pc.copy(o).invert(),Xn.copy(e.ray).applyMatrix4(Pc),!(i.boundingBox!==null&&Xn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xn)))}_computeIntersections(e,t,i){let r;const o=this.geometry,s=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,d=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=s[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=x,y=_;b<y;b+=3){const S=a.getX(b),E=a.getX(b+1),C=a.getX(b+2);r=Nr(this,f,e,i,l,u,h,S,E,C),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const x=a.getX(m),_=a.getX(m+1),b=a.getX(m+2);r=Nr(this,s,e,i,l,u,h,x,_,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=s[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let b=x,y=_;b<y;b+=3){const S=b,E=b+1,C=b+2;r=Nr(this,f,e,i,l,u,h,S,E,C),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const x=m,_=m+1,b=m+2;r=Nr(this,s,e,i,l,u,h,x,_,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Hd(n,e,t,i,r,o,s,a){let c;if(e.side===Ct?c=i.intersectTriangle(s,o,r,!0,a):c=i.intersectTriangle(r,o,s,e.side===Bn,a),c===null)return null;Ir.copy(a),Ir.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ir);return l<t.near||l>t.far?null:{distance:l,point:Ir.clone(),object:n}}function Nr(n,e,t,i,r,o,s,a,c,l){n.getVertexPosition(a,pi),n.getVertexPosition(c,mi),n.getVertexPosition(l,gi);const u=Hd(n,e,t,i,pi,mi,gi,Dr);if(u){r&&(Pr.fromBufferAttribute(r,a),Lr.fromBufferAttribute(r,c),Or.fromBufferAttribute(r,l),u.uv=Kt.getInterpolation(Dr,pi,mi,gi,Pr,Lr,Or,new ge)),o&&(Pr.fromBufferAttribute(o,a),Lr.fromBufferAttribute(o,c),Or.fromBufferAttribute(o,l),u.uv1=Kt.getInterpolation(Dr,pi,mi,gi,Pr,Lr,Or,new ge),u.uv2=u.uv1),s&&(Oc.fromBufferAttribute(s,a),Dc.fromBufferAttribute(s,c),Ic.fromBufferAttribute(s,l),u.normal=Kt.getInterpolation(Dr,pi,mi,gi,Oc,Dc,Ic,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new I,materialIndex:0};Kt.getNormal(pi,mi,gi,h.normal),u.face=h}return u}class fr extends Bt{constructor(e=1,t=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const c=[],l=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,s,o,0),g("z","y","x",1,-1,i,t,-e,s,o,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,o,4),g("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(h,2));function g(v,m,f,x,_,b,y,S,E,C,M){const T=b/E,B=y/C,G=b/2,J=y/2,R=S/2,L=E+1,U=C+1;let X=0,ie=0;const te=new I;for(let H=0;H<U;H++){const O=H*B-J;for(let W=0;W<L;W++){const oe=W*T-G;te[v]=oe*x,te[m]=O*_,te[f]=R,l.push(te.x,te.y,te.z),te[v]=0,te[m]=0,te[f]=S>0?1:-1,u.push(te.x,te.y,te.z),h.push(W/E),h.push(1-H/C),X+=1}}for(let H=0;H<C;H++)for(let O=0;O<E;O++){const W=d+O+L*H,oe=d+O+L*(H+1),Q=d+(O+1)+L*(H+1),j=d+(O+1)+L*H;c.push(W,oe,j),c.push(oe,Q,j),ie+=6}a.addGroup(p,ie,M),p+=ie,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Di(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Tt(n){const e={};for(let t=0;t<n.length;t++){const i=Di(n[t]);for(const r in i)e[r]=i[r]}return e}function Gd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wu(n){return n.getRenderTarget()===null?n.outputColorSpace:Ke.workingColorSpace}const Tu={clone:Di,merge:Tt};var Vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends Ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vd,this.fragmentShader=Wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=Gd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Au extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vt extends Au{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;o+=s.offsetX*r/c,t-=s.offsetY*i/l,r*=s.width/c,i*=s.height/l}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vi=-90,_i=1;class jd extends yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vt(vi,_i,e,t);r.layers=this.layers,this.add(r);const o=new Vt(vi,_i,e,t);o.layers=this.layers,this.add(o);const s=new Vt(vi,_i,e,t);s.layers=this.layers,this.add(s);const a=new Vt(vi,_i,e,t);a.layers=this.layers,this.add(a);const c=new Vt(vi,_i,e,t);c.layers=this.layers,this.add(c);const l=new Vt(vi,_i,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,o,s,a,c]=t;for(const l of t)this.remove(l);if(e===xn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===no)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,o),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ru extends Lt{constructor(e,t,i,r,o,s,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ci,super(e,t,i,r,o,s,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xd extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(rr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Qn?gt:Wt),this.texture=new Ru(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fr(5,5,5),o=new Tn({name:"CubemapFromEquirect",uniforms:Di(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ct,blending:Sn});o.uniforms.tEquirect.value=t;const s=new Qt(r,o),a=t.minFilter;return t.minFilter===sr&&(t.minFilter=Gt),new jd(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(o)}}const Zo=new I,$d=new I,qd=new Ge;class _n{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Zo.subVectors(i,t).cross($d.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Zo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||qd.getNormalMatrix(e),r=this.coplanarPoint(Zo).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $n=new po,Ur=new I;class rs{constructor(e=new _n,t=new _n,i=new _n,r=new _n,o=new _n,s=new _n){this.planes=[e,t,i,r,o,s]}set(e,t,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xn){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],p=r[8],g=r[9],v=r[10],m=r[11],f=r[12],x=r[13],_=r[14],b=r[15];if(i[0].setComponents(c-o,d-l,m-p,b-f).normalize(),i[1].setComponents(c+o,d+l,m+p,b+f).normalize(),i[2].setComponents(c+s,d+u,m+g,b+x).normalize(),i[3].setComponents(c-s,d-u,m-g,b-x).normalize(),i[4].setComponents(c-a,d-h,m-v,b-_).normalize(),t===xn)i[5].setComponents(c+a,d+h,m+v,b+_).normalize();else if(t===no)i[5].setComponents(a,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(e){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(e.matrixWorld),this.intersectsSphere($n)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ur.x=r.normal.x>0?e.max.x:e.min.x,Ur.y=r.normal.y>0?e.max.y:e.min.y,Ur.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cu(){let n=null,e=!1,t=null,i=null;function r(o,s){t(o,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function Yd(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,u){const h=l.array,d=l.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,h,d),l.onUploadCallback();let g;if(h instanceof Float32Array)g=n.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=n.SHORT;else if(h instanceof Uint32Array)g=n.UNSIGNED_INT;else if(h instanceof Int32Array)g=n.INT;else if(h instanceof Int8Array)g=n.BYTE;else if(h instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function o(l,u,h){const d=u.array,p=u.updateRange;n.bindBuffer(h,l),p.count===-1?n.bufferSubData(h,0,d):(t?n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h===void 0?i.set(l,r(l,u)):h.version<l.version&&(o(h.buffer,l,u),h.version=l.version)}return{get:s,remove:a,update:c}}class os extends Bt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,s=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=e/a,d=t/c,p=[],g=[],v=[],m=[];for(let f=0;f<u;f++){const x=f*d-s;for(let _=0;_<l;_++){const b=_*h-o;g.push(b,-x,0),v.push(0,0,1),m.push(_/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let x=0;x<a;x++){const _=x+l*f,b=x+l*(f+1),y=x+1+l*(f+1),S=x+1+l*f;p.push(_,b,S),p.push(b,y,S)}this.setIndex(p),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(v,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.width,e.height,e.widthSegments,e.heightSegments)}}var Kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,np=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ap=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_p=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",wp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Tp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Op=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Np=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Up=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Hp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,$p=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,em=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,lm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Om=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Im=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Um=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,tg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ng=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ag=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sg=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ug=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_g=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Kd,alphahash_pars_fragment:Zd,alphamap_fragment:Jd,alphamap_pars_fragment:Qd,alphatest_fragment:ep,alphatest_pars_fragment:tp,aomap_fragment:np,aomap_pars_fragment:ip,begin_vertex:rp,beginnormal_vertex:op,bsdfs:ap,iridescence_fragment:sp,bumpmap_pars_fragment:cp,clipping_planes_fragment:lp,clipping_planes_pars_fragment:up,clipping_planes_pars_vertex:hp,clipping_planes_vertex:fp,color_fragment:dp,color_pars_fragment:pp,color_pars_vertex:mp,color_vertex:gp,common:vp,cube_uv_reflection_fragment:_p,defaultnormal_vertex:yp,displacementmap_pars_vertex:bp,displacementmap_vertex:xp,emissivemap_fragment:Mp,emissivemap_pars_fragment:Sp,colorspace_fragment:Ep,colorspace_pars_fragment:wp,envmap_fragment:Tp,envmap_common_pars_fragment:Ap,envmap_pars_fragment:Rp,envmap_pars_vertex:Cp,envmap_physical_pars_fragment:Hp,envmap_vertex:Pp,fog_vertex:Lp,fog_pars_vertex:Op,fog_fragment:Dp,fog_pars_fragment:Ip,gradientmap_pars_fragment:Np,lightmap_fragment:Up,lightmap_pars_fragment:Fp,lights_lambert_fragment:kp,lights_lambert_pars_fragment:Bp,lights_pars_begin:zp,lights_toon_fragment:Gp,lights_toon_pars_fragment:Vp,lights_phong_fragment:Wp,lights_phong_pars_fragment:jp,lights_physical_fragment:Xp,lights_physical_pars_fragment:$p,lights_fragment_begin:qp,lights_fragment_maps:Yp,lights_fragment_end:Kp,logdepthbuf_fragment:Zp,logdepthbuf_pars_fragment:Jp,logdepthbuf_pars_vertex:Qp,logdepthbuf_vertex:em,map_fragment:tm,map_pars_fragment:nm,map_particle_fragment:im,map_particle_pars_fragment:rm,metalnessmap_fragment:om,metalnessmap_pars_fragment:am,morphcolor_vertex:sm,morphnormal_vertex:cm,morphtarget_pars_vertex:lm,morphtarget_vertex:um,normal_fragment_begin:hm,normal_fragment_maps:fm,normal_pars_fragment:dm,normal_pars_vertex:pm,normal_vertex:mm,normalmap_pars_fragment:gm,clearcoat_normal_fragment_begin:vm,clearcoat_normal_fragment_maps:_m,clearcoat_pars_fragment:ym,iridescence_pars_fragment:bm,opaque_fragment:xm,packing:Mm,premultiplied_alpha_fragment:Sm,project_vertex:Em,dithering_fragment:wm,dithering_pars_fragment:Tm,roughnessmap_fragment:Am,roughnessmap_pars_fragment:Rm,shadowmap_pars_fragment:Cm,shadowmap_pars_vertex:Pm,shadowmap_vertex:Lm,shadowmask_pars_fragment:Om,skinbase_vertex:Dm,skinning_pars_vertex:Im,skinning_vertex:Nm,skinnormal_vertex:Um,specularmap_fragment:Fm,specularmap_pars_fragment:km,tonemapping_fragment:Bm,tonemapping_pars_fragment:zm,transmission_fragment:Hm,transmission_pars_fragment:Gm,uv_pars_fragment:Vm,uv_pars_vertex:Wm,uv_vertex:jm,worldpos_vertex:Xm,background_vert:$m,background_frag:qm,backgroundCube_vert:Ym,backgroundCube_frag:Km,cube_vert:Zm,cube_frag:Jm,depth_vert:Qm,depth_frag:eg,distanceRGBA_vert:tg,distanceRGBA_frag:ng,equirect_vert:ig,equirect_frag:rg,linedashed_vert:og,linedashed_frag:ag,meshbasic_vert:sg,meshbasic_frag:cg,meshlambert_vert:lg,meshlambert_frag:ug,meshmatcap_vert:hg,meshmatcap_frag:fg,meshnormal_vert:dg,meshnormal_frag:pg,meshphong_vert:mg,meshphong_frag:gg,meshphysical_vert:vg,meshphysical_frag:_g,meshtoon_vert:yg,meshtoon_frag:bg,points_vert:xg,points_frag:Mg,shadow_vert:Sg,shadow_frag:Eg,sprite_vert:wg,sprite_frag:Tg},me={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},sn={basic:{uniforms:Tt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Tt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Xe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Tt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Tt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Tt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Xe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Tt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Tt([me.points,me.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Tt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Tt([me.common,me.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Tt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Tt([me.sprite,me.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Tt([me.common,me.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Tt([me.lights,me.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};sn.physical={uniforms:Tt([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Fr={r:0,b:0,g:0};function Ag(n,e,t,i,r,o,s){const a=new Xe(0);let c=o===!0?0:1,l,u,h=null,d=0,p=null;function g(m,f){let x=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?t:e).get(_)),_===null?v(a,c):_&&_.isColor&&(v(_,1),x=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ho)?(u===void 0&&(u=new Qt(new fr(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Di(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(y,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=Ke.getTransfer(_.colorSpace)!==Qe,(h!==_||d!==_.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Qt(new os(2,2),new Tn({name:"BackgroundMaterial",uniforms:Di(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(_.colorSpace)!==Qe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,f){m.getRGB(Fr,wu(n)),i.buffers.color.setClear(Fr.r,Fr.g,Fr.b,f,s)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),c=f,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(a,c)},render:g}}function Rg(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},c=m(null);let l=c,u=!1;function h(R,L,U,X,ie){let te=!1;if(s){const H=v(X,U,L);l!==H&&(l=H,p(l.object)),te=f(R,X,U,ie),te&&x(R,X,U,ie)}else{const H=L.wireframe===!0;(l.geometry!==X.id||l.program!==U.id||l.wireframe!==H)&&(l.geometry=X.id,l.program=U.id,l.wireframe=H,te=!0)}ie!==null&&t.update(ie,n.ELEMENT_ARRAY_BUFFER),(te||u)&&(u=!1,C(R,L,U,X),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ie).buffer))}function d(){return i.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function p(R){return i.isWebGL2?n.bindVertexArray(R):o.bindVertexArrayOES(R)}function g(R){return i.isWebGL2?n.deleteVertexArray(R):o.deleteVertexArrayOES(R)}function v(R,L,U){const X=U.wireframe===!0;let ie=a[R.id];ie===void 0&&(ie={},a[R.id]=ie);let te=ie[L.id];te===void 0&&(te={},ie[L.id]=te);let H=te[X];return H===void 0&&(H=m(d()),te[X]=H),H}function m(R){const L=[],U=[],X=[];for(let ie=0;ie<r;ie++)L[ie]=0,U[ie]=0,X[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:X,object:R,attributes:{},index:null}}function f(R,L,U,X){const ie=l.attributes,te=L.attributes;let H=0;const O=U.getAttributes();for(const W in O)if(O[W].location>=0){const Q=ie[W];let j=te[W];if(j===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(j=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(j=R.instanceColor)),Q===void 0||Q.attribute!==j||j&&Q.data!==j.data)return!0;H++}return l.attributesNum!==H||l.index!==X}function x(R,L,U,X){const ie={},te=L.attributes;let H=0;const O=U.getAttributes();for(const W in O)if(O[W].location>=0){let Q=te[W];Q===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor));const j={};j.attribute=Q,Q&&Q.data&&(j.data=Q.data),ie[W]=j,H++}l.attributes=ie,l.attributesNum=H,l.index=X}function _(){const R=l.newAttributes;for(let L=0,U=R.length;L<U;L++)R[L]=0}function b(R){y(R,0)}function y(R,L){const U=l.newAttributes,X=l.enabledAttributes,ie=l.attributeDivisors;U[R]=1,X[R]===0&&(n.enableVertexAttribArray(R),X[R]=1),ie[R]!==L&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,L),ie[R]=L)}function S(){const R=l.newAttributes,L=l.enabledAttributes;for(let U=0,X=L.length;U<X;U++)L[U]!==R[U]&&(n.disableVertexAttribArray(U),L[U]=0)}function E(R,L,U,X,ie,te,H){H===!0?n.vertexAttribIPointer(R,L,U,ie,te):n.vertexAttribPointer(R,L,U,X,ie,te)}function C(R,L,U,X){if(i.isWebGL2===!1&&(R.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const ie=X.attributes,te=U.getAttributes(),H=L.defaultAttributeValues;for(const O in te){const W=te[O];if(W.location>=0){let oe=ie[O];if(oe===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor)),oe!==void 0){const Q=oe.normalized,j=oe.itemSize,re=t.get(oe);if(re===void 0)continue;const k=re.buffer,Z=re.type,fe=re.bytesPerElement,Me=i.isWebGL2===!0&&(Z===n.INT||Z===n.UNSIGNED_INT||oe.gpuType===uu);if(oe.isInterleavedBufferAttribute){const ve=oe.data,z=ve.stride,nt=oe.offset;if(ve.isInstancedInterleavedBuffer){for(let ye=0;ye<W.locationSize;ye++)y(W.location+ye,ve.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ye=0;ye<W.locationSize;ye++)b(W.location+ye);n.bindBuffer(n.ARRAY_BUFFER,k);for(let ye=0;ye<W.locationSize;ye++)E(W.location+ye,j/W.locationSize,Z,Q,z*fe,(nt+j/W.locationSize*ye)*fe,Me)}else{if(oe.isInstancedBufferAttribute){for(let ve=0;ve<W.locationSize;ve++)y(W.location+ve,oe.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ve=0;ve<W.locationSize;ve++)b(W.location+ve);n.bindBuffer(n.ARRAY_BUFFER,k);for(let ve=0;ve<W.locationSize;ve++)E(W.location+ve,j/W.locationSize,Z,Q,j*fe,j/W.locationSize*ve*fe,Me)}}else if(H!==void 0){const Q=H[O];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(W.location,Q);break;case 3:n.vertexAttrib3fv(W.location,Q);break;case 4:n.vertexAttrib4fv(W.location,Q);break;default:n.vertexAttrib1fv(W.location,Q)}}}}S()}function M(){G();for(const R in a){const L=a[R];for(const U in L){const X=L[U];for(const ie in X)g(X[ie].object),delete X[ie];delete L[U]}delete a[R]}}function T(R){if(a[R.id]===void 0)return;const L=a[R.id];for(const U in L){const X=L[U];for(const ie in X)g(X[ie].object),delete X[ie];delete L[U]}delete a[R.id]}function B(R){for(const L in a){const U=a[L];if(U[R.id]===void 0)continue;const X=U[R.id];for(const ie in X)g(X[ie].object),delete X[ie];delete U[R.id]}}function G(){J(),u=!0,l!==c&&(l=c,p(l.object))}function J(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:G,resetDefaultState:J,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:B,initAttributes:_,enableAttribute:b,disableUnusedAttributes:S}}function Cg(n,e,t,i){const r=i.isWebGL2;let o;function s(l){o=l}function a(l,u){n.drawArrays(o,l,u),t.update(u,o,1)}function c(l,u,h){if(h===0)return;let d,p;if(r)d=n,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](o,l,u,h),t.update(u,o,h)}this.setMode=s,this.render=a,this.renderInstances=c}function Pg(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=o(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,b=s||e.has("OES_texture_float"),y=_&&b,S=s?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:y,maxSamples:S}}function Lg(n){const e=this;let t=null,i=0,r=!1,o=!1;const s=new _n,a=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||g===null||g.length===0||o&&!m)o?u(null):l();else{const x=o?0:i,_=x*4;let b=f.clippingState||null;c.value=b,b=u(g,d,_,p);for(let y=0;y!==_;++y)b[y]=t[y];f.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const f=p+v*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,b=p;_!==v;++_,b+=4)s.copy(h[_]).applyMatrix4(x,a),s.normal.toArray(m,b),m[b+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Og(n){let e=new WeakMap;function t(s,a){return a===Ta?s.mapping=Ci:a===Aa&&(s.mapping=Pi),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Ta||a===Aa)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new Xd(c.height/2);return l.fromEquirectangularTexture(n,s),e.set(s,l),s.addEventListener("dispose",r),t(l.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class as extends Au{constructor(e=-1,t=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,s=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Si=4,Nc=[.125,.215,.35,.446,.526,.582],Kn=20,Jo=new as,Uc=new Xe;let Qo=null,ea=0,ta=0;const qn=(1+Math.sqrt(5))/2,yi=1/qn,Fc=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,qn,yi),new I(0,qn,-yi),new I(yi,0,qn),new I(-yi,0,qn),new I(qn,yi,0),new I(-qn,yi,0)];class kc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Qo=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qo,ea,ta),e.scissorTest=!1,kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ci||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qo=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Li,format:Jt,colorSpace:wn,depthBuffer:!1},r=Bc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bc(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dg(o)),this._blurMaterial=Ig(o,e,t)}return r}_compileMaterial(e){const t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,Jo)}_sceneToCubeUV(e,t,i,r){const a=new Vt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Uc),u.toneMapping=Fn,u.autoClear=!1;const p=new is({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),g=new Qt(new fr,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Uc),v=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):x===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const _=this._cubeSize;kr(r,x*_,f>2?_:0,_,_),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ci||e.mapping===Pi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zc());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Qt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const c=this._cubeSize;kr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,Jo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Fc[(r-1)%Fc.length];this._blur(e,r-1,r,o,s)}t.autoClear=i}_blur(e,t,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,s,a){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Qt(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Kn-1),v=o/g,m=isFinite(o)?1+Math.floor(u*v):Kn;m>Kn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kn}`);const f=[];let x=0;for(let E=0;E<Kn;++E){const C=E/v,M=Math.exp(-C*C/2);f.push(M),E===0?x+=M:E<m&&(x+=2*M)}for(let E=0;E<f.length;E++)f[E]=f[E]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;const b=this._sizeLods[r],y=3*b*(r>_-Si?r-_+Si:0),S=4*(this._cubeSize-b);kr(t,y,S,3*b,2*b),c.setRenderTarget(t),c.render(h,Jo)}}function Dg(n){const e=[],t=[],i=[];let r=n;const o=n-Si+1+Nc.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);t.push(a);let c=1/a;s>n-Si?c=Nc[s-n+Si-1]:s===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,f=1,x=new Float32Array(v*g*p),_=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let S=0;S<p;S++){const E=S%3*2/3-1,C=S>2?0:-1,M=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];x.set(M,v*g*S),_.set(d,m*g*S);const T=[S,S,S,S,S,S];b.set(T,f*g*S)}const y=new Bt;y.setAttribute("position",new tn(x,v)),y.setAttribute("uv",new tn(_,m)),y.setAttribute("faceIndex",new tn(b,f)),e.push(y),r>Si&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Bc(n,e,t){const i=new zn(n,e,t);return i.texture.mapping=ho,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function kr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ig(n,e,t){const i=new Float32Array(Kn),r=new I(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ss(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function zc(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ss(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Hc(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ss(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function ss(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ng(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ta||c===Aa,u=c===Ci||c===Pi;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new kc(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new kc(n));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",o),d.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function Ug(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Fg(n,e,t,i){const r={},o=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}d.removeEventListener("dispose",s),delete r[d.id];const p=o.get(d);p&&(e.remove(p),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],n.ARRAY_BUFFER)}}function l(h){const d=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const x=p.array;v=p.version;for(let _=0,b=x.length;_<b;_+=3){const y=x[_+0],S=x[_+1],E=x[_+2];d.push(y,S,S,E,E,y)}}else if(g!==void 0){const x=g.array;v=g.version;for(let _=0,b=x.length/3-1;_<b;_+=3){const y=_+0,S=_+1,E=_+2;d.push(y,S,S,E,E,y)}}else return;const m=new(_u(d)?Eu:Su)(d,1);m.version=v;const f=o.get(h);f&&e.remove(f),o.set(h,m)}function u(h){const d=o.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return o.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function kg(n,e,t,i){const r=i.isWebGL2;let o;function s(d){o=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,p){n.drawElements(o,p,a,d*c),t.update(p,o,1)}function h(d,p,g){if(g===0)return;let v,m;if(r)v=n,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](o,p,a,d*c,g),t.update(p,o,g)}this.setMode=s,this.setIndex=l,this.render=u,this.renderInstances=h}function Bg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function zg(n,e){return n[0]-e[0]}function Hg(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Gg(n,e,t){const i={},r=new Float32Array(8),o=new WeakMap,s=new _t,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let v=o.get(u);if(v===void 0||v.count!==g){let x=function(){J.dispose(),o.delete(u),u.removeEventListener("dispose",x)};v!==void 0&&v.texture.dispose();const _=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let M=0;_===!0&&(M=1),b===!0&&(M=2),y===!0&&(M=3);let T=u.attributes.position.count*M,B=1;T>e.maxTextureSize&&(B=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const G=new Float32Array(T*B*4*g),J=new xu(G,T,B,g);J.type=Un,J.needsUpdate=!0;const R=M*4;for(let L=0;L<g;L++){const U=S[L],X=E[L],ie=C[L],te=T*B*4*L;for(let H=0;H<U.count;H++){const O=H*R;_===!0&&(s.fromBufferAttribute(U,H),G[te+O+0]=s.x,G[te+O+1]=s.y,G[te+O+2]=s.z,G[te+O+3]=0),b===!0&&(s.fromBufferAttribute(X,H),G[te+O+4]=s.x,G[te+O+5]=s.y,G[te+O+6]=s.z,G[te+O+7]=0),y===!0&&(s.fromBufferAttribute(ie,H),G[te+O+8]=s.x,G[te+O+9]=s.y,G[te+O+10]=s.z,G[te+O+11]=ie.itemSize===4?s.w:1)}}v={count:g,texture:J,size:new ge(T,B)},o.set(u,v),u.addEventListener("dispose",x)}let m=0;for(let x=0;x<d.length;x++)m+=d[x];const f=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(n,"morphTargetBaseInfluence",f),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const p=d===void 0?0:d.length;let g=i[u.id];if(g===void 0||g.length!==p){g=[];for(let _=0;_<p;_++)g[_]=[_,0];i[u.id]=g}for(let _=0;_<p;_++){const b=g[_];b[0]=_,b[1]=d[_]}g.sort(Hg);for(let _=0;_<8;_++)_<p&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(zg);const v=u.morphAttributes.position,m=u.morphAttributes.normal;let f=0;for(let _=0;_<8;_++){const b=a[_],y=b[0],S=b[1];y!==Number.MAX_SAFE_INTEGER&&S?(v&&u.getAttribute("morphTarget"+_)!==v[y]&&u.setAttribute("morphTarget"+_,v[y]),m&&u.getAttribute("morphNormal"+_)!==m[y]&&u.setAttribute("morphNormal"+_,m[y]),r[_]=S,f+=S):(v&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),m&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),r[_]=0)}const x=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(n,"morphTargetBaseInfluence",x),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function Vg(n,e,t,i){let r=new WeakMap;function o(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function s(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:o,dispose:s}}const Pu=new Lt,Lu=new xu,Ou=new Pd,Du=new Ru,Gc=[],Vc=[],Wc=new Float32Array(16),jc=new Float32Array(9),Xc=new Float32Array(4);function Fi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=Gc[r];if(o===void 0&&(o=new Float32Array(r),Gc[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(o,a)}return o}function ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function vo(n,e){let t=Vc[e];t===void 0&&(t=new Int32Array(e),Vc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Wg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2fv(this.addr,e),ft(t,e)}}function Xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;n.uniform3fv(this.addr,e),ft(t,e)}}function $g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4fv(this.addr,e),ft(t,e)}}function qg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,i))return;Xc.set(i),n.uniformMatrix2fv(this.addr,!1,Xc),ft(t,i)}}function Yg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,i))return;jc.set(i),n.uniformMatrix3fv(this.addr,!1,jc),ft(t,i)}}function Kg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,i))return;Wc.set(i),n.uniformMatrix4fv(this.addr,!1,Wc),ft(t,i)}}function Zg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2iv(this.addr,e),ft(t,e)}}function Qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3iv(this.addr,e),ft(t,e)}}function ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4iv(this.addr,e),ft(t,e)}}function tv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function nv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2uiv(this.addr,e),ft(t,e)}}function iv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3uiv(this.addr,e),ft(t,e)}}function rv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4uiv(this.addr,e),ft(t,e)}}function ov(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Pu,r)}function av(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ou,r)}function sv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Du,r)}function cv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Lu,r)}function lv(n){switch(n){case 5126:return Wg;case 35664:return jg;case 35665:return Xg;case 35666:return $g;case 35674:return qg;case 35675:return Yg;case 35676:return Kg;case 5124:case 35670:return Zg;case 35667:case 35671:return Jg;case 35668:case 35672:return Qg;case 35669:case 35673:return ev;case 5125:return tv;case 36294:return nv;case 36295:return iv;case 36296:return rv;case 35678:case 36198:case 36298:case 36306:case 35682:return ov;case 35679:case 36299:case 36307:return av;case 35680:case 36300:case 36308:case 36293:return sv;case 36289:case 36303:case 36311:case 36292:return cv}}function uv(n,e){n.uniform1fv(this.addr,e)}function hv(n,e){const t=Fi(e,this.size,2);n.uniform2fv(this.addr,t)}function fv(n,e){const t=Fi(e,this.size,3);n.uniform3fv(this.addr,t)}function dv(n,e){const t=Fi(e,this.size,4);n.uniform4fv(this.addr,t)}function pv(n,e){const t=Fi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function mv(n,e){const t=Fi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function gv(n,e){const t=Fi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function vv(n,e){n.uniform1iv(this.addr,e)}function _v(n,e){n.uniform2iv(this.addr,e)}function yv(n,e){n.uniform3iv(this.addr,e)}function bv(n,e){n.uniform4iv(this.addr,e)}function xv(n,e){n.uniform1uiv(this.addr,e)}function Mv(n,e){n.uniform2uiv(this.addr,e)}function Sv(n,e){n.uniform3uiv(this.addr,e)}function Ev(n,e){n.uniform4uiv(this.addr,e)}function wv(n,e,t){const i=this.cache,r=e.length,o=vo(t,r);ht(i,o)||(n.uniform1iv(this.addr,o),ft(i,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Pu,o[s])}function Tv(n,e,t){const i=this.cache,r=e.length,o=vo(t,r);ht(i,o)||(n.uniform1iv(this.addr,o),ft(i,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Ou,o[s])}function Av(n,e,t){const i=this.cache,r=e.length,o=vo(t,r);ht(i,o)||(n.uniform1iv(this.addr,o),ft(i,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Du,o[s])}function Rv(n,e,t){const i=this.cache,r=e.length,o=vo(t,r);ht(i,o)||(n.uniform1iv(this.addr,o),ft(i,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Lu,o[s])}function Cv(n){switch(n){case 5126:return uv;case 35664:return hv;case 35665:return fv;case 35666:return dv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return vv;case 35667:case 35671:return _v;case 35668:case 35672:return yv;case 35669:case 35673:return bv;case 5125:return xv;case 36294:return Mv;case 36295:return Sv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return Rv}}class Pv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=lv(t.type)}}class Lv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Cv(t.type)}}class Ov{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,t[a.id],i)}}}const na=/(\w+)(\])?(\[|\.)?/g;function $c(n,e){n.seq.push(e),n.map[e.id]=e}function Dv(n,e,t){const i=n.name,r=i.length;for(na.lastIndex=0;;){const o=na.exec(i),s=na.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&s+2===r){$c(t,l===void 0?new Pv(a,n,e):new Lv(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Ov(a),$c(t,h)),t=h}}}class $r{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);Dv(o,s,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function qc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Iv=37297;let Nv=0;function Uv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}function Fv(n){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(n);let i;switch(e===t?i="":e===to&&t===eo?i="LinearDisplayP3ToLinearSRGB":e===eo&&t===to&&(i="LinearSRGBToLinearDisplayP3"),n){case wn:case fo:return[i,"LinearTransferOETF"];case gt:case es:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Yc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Uv(n.getShaderSource(e),s)}else return r}function kv(n,e){const t=Fv(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Bv(n,e){let t;switch(e){case Bf:t="Linear";break;case zf:t="Reinhard";break;case Hf:t="OptimizedCineon";break;case Gf:t="ACESFilmic";break;case Vf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zv(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zi).join(`
`)}function Hv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Gv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),s=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function Zi(n){return n!==""}function Kc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(n){return n.replace(Vv,jv)}const Wv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function jv(n,e){let t=ze[e];if(t===void 0){const i=Wv.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Da(t)}const Xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jc(n){return n.replace(Xv,$v)}function $v(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Qc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===cu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===df?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vn&&(e="SHADOWMAP_TYPE_VSM"),e}function Yv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ci:case Pi:e="ENVMAP_TYPE_CUBE";break;case ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Pi:e="ENVMAP_MODE_REFRACTION";break}return e}function Zv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ja:e="ENVMAP_BLENDING_MULTIPLY";break;case Ff:e="ENVMAP_BLENDING_MIX";break;case kf:e="ENVMAP_BLENDING_ADD";break}return e}function Jv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Qv(n,e,t,i){const r=n.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const c=qv(t),l=Yv(t),u=Kv(t),h=Zv(t),d=Jv(t),p=t.isWebGL2?"":zv(t),g=Hv(o),v=r.createProgram();let m,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zi).join(`
`),m.length>0&&(m+=`
`),f=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zi).join(`
`),f.length>0&&(f+=`
`)):(m=[Qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),f=[p,Qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Fn?Bv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,kv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zi).join(`
`)),s=Da(s),s=Kc(s,t),s=Zc(s,t),a=Da(a),a=Kc(a,t),a=Zc(a,t),s=Jc(s),a=Jc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=x+m+s,b=x+f+a,y=qc(r,r.VERTEX_SHADER,_),S=qc(r,r.FRAGMENT_SHADER,b);r.attachShader(v,y),r.attachShader(v,S),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function E(B){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(v).trim(),J=r.getShaderInfoLog(y).trim(),R=r.getShaderInfoLog(S).trim();let L=!0,U=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(L=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,y,S);else{const X=Yc(r,y,"vertex"),ie=Yc(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+G+`
`+X+`
`+ie)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(J===""||R==="")&&(U=!1);U&&(B.diagnostics={runnable:L,programLog:G,vertexShader:{log:J,prefix:m},fragmentShader:{log:R,prefix:f}})}r.deleteShader(y),r.deleteShader(S),C=new $r(r,v),M=Gv(r,v)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(v,Iv)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=S,this}let e_=0;class t_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new n_(e),t.set(e,i)),i}}class n_{constructor(e){this.id=e_++,this.code=e,this.usedTimes=0}}function i_(n,e,t,i,r,o,s){const a=new ns,c=new t_,l=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function m(M,T,B,G,J){const R=G.fog,L=J.geometry,U=M.isMeshStandardMaterial?G.environment:null,X=(M.isMeshStandardMaterial?t:e).get(M.envMap||U),ie=X&&X.mapping===ho?X.image.height:null,te=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const H=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,O=H!==void 0?H.length:0;let W=0;L.morphAttributes.position!==void 0&&(W=1),L.morphAttributes.normal!==void 0&&(W=2),L.morphAttributes.color!==void 0&&(W=3);let oe,Q,j,re;if(te){const st=sn[te];oe=st.vertexShader,Q=st.fragmentShader}else oe=M.vertexShader,Q=M.fragmentShader,c.update(M),j=c.getVertexShaderID(M),re=c.getFragmentShaderID(M);const k=n.getRenderTarget(),Z=J.isInstancedMesh===!0,fe=!!M.map,Me=!!M.matcap,ve=!!X,z=!!M.aoMap,nt=!!M.lightMap,ye=!!M.bumpMap,Ce=!!M.normalMap,Ae=!!M.displacementMap,$e=!!M.emissiveMap,Ne=!!M.metalnessMap,Fe=!!M.roughnessMap,qe=M.anisotropy>0,at=M.clearcoat>0,dt=M.iridescence>0,P=M.sheen>0,w=M.transmission>0,$=qe&&!!M.anisotropyMap,ce=at&&!!M.clearcoatMap,ae=at&&!!M.clearcoatNormalMap,le=at&&!!M.clearcoatRoughnessMap,we=dt&&!!M.iridescenceMap,de=dt&&!!M.iridescenceThicknessMap,_e=P&&!!M.sheenColorMap,D=P&&!!M.sheenRoughnessMap,he=!!M.specularMap,ne=!!M.specularColorMap,De=!!M.specularIntensityMap,Te=w&&!!M.transmissionMap,Le=w&&!!M.thicknessMap,Se=!!M.gradientMap,xe=!!M.alphaMap,Ve=M.alphaTest>0,N=!!M.alphaHash,pe=!!M.extensions,se=!!L.attributes.uv1,ee=!!L.attributes.uv2,ue=!!L.attributes.uv3;let Pe=Fn;return M.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Pe=n.toneMapping),{isWebGL2:u,shaderID:te,shaderType:M.type,shaderName:M.name,vertexShader:oe,fragmentShader:Q,defines:M.defines,customVertexShaderID:j,customFragmentShaderID:re,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:Z,instancingColor:Z&&J.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:k===null?n.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:wn,map:fe,matcap:Me,envMap:ve,envMapMode:ve&&X.mapping,envMapCubeUVHeight:ie,aoMap:z,lightMap:nt,bumpMap:ye,normalMap:Ce,displacementMap:d&&Ae,emissiveMap:$e,normalMapObjectSpace:Ce&&M.normalMapType===nd,normalMapTangentSpace:Ce&&M.normalMapType===vu,metalnessMap:Ne,roughnessMap:Fe,anisotropy:qe,anisotropyMap:$,clearcoat:at,clearcoatMap:ce,clearcoatNormalMap:ae,clearcoatRoughnessMap:le,iridescence:dt,iridescenceMap:we,iridescenceThicknessMap:de,sheen:P,sheenColorMap:_e,sheenRoughnessMap:D,specularMap:he,specularColorMap:ne,specularIntensityMap:De,transmission:w,transmissionMap:Te,thicknessMap:Le,gradientMap:Se,opaque:M.transparent===!1&&M.blending===Ai,alphaMap:xe,alphaTest:Ve,alphaHash:N,combine:M.combine,mapUv:fe&&v(M.map.channel),aoMapUv:z&&v(M.aoMap.channel),lightMapUv:nt&&v(M.lightMap.channel),bumpMapUv:ye&&v(M.bumpMap.channel),normalMapUv:Ce&&v(M.normalMap.channel),displacementMapUv:Ae&&v(M.displacementMap.channel),emissiveMapUv:$e&&v(M.emissiveMap.channel),metalnessMapUv:Ne&&v(M.metalnessMap.channel),roughnessMapUv:Fe&&v(M.roughnessMap.channel),anisotropyMapUv:$&&v(M.anisotropyMap.channel),clearcoatMapUv:ce&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:ae&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:de&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:D&&v(M.sheenRoughnessMap.channel),specularMapUv:he&&v(M.specularMap.channel),specularColorMapUv:ne&&v(M.specularColorMap.channel),specularIntensityMapUv:De&&v(M.specularIntensityMap.channel),transmissionMapUv:Te&&v(M.transmissionMap.channel),thicknessMapUv:Le&&v(M.thicknessMap.channel),alphaMapUv:xe&&v(M.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Ce||qe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:se,vertexUv2s:ee,vertexUv3s:ue,pointsUvs:J.isPoints===!0&&!!L.attributes.uv&&(fe||xe),fog:!!R,useFog:M.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:J.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:W,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:fe&&M.map.isVideoTexture===!0&&Ke.getTransfer(M.map.colorSpace)===Qe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===bn,flipSided:M.side===Ct,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:pe&&M.extensions.derivatives===!0,extensionFragDepth:pe&&M.extensions.fragDepth===!0,extensionDrawBuffers:pe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)T.push(B),T.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(x(T,M),_(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function x(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function _(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function b(M){const T=g[M.type];let B;if(T){const G=sn[T];B=Tu.clone(G.uniforms)}else B=M.uniforms;return B}function y(M,T){let B;for(let G=0,J=l.length;G<J;G++){const R=l[G];if(R.cacheKey===T){B=R,++B.usedTimes;break}}return B===void 0&&(B=new Qv(n,T,M,o),l.push(B)),B}function S(M){if(--M.usedTimes===0){const T=l.indexOf(M);l[T]=l[l.length-1],l.pop(),M.destroy()}}function E(M){c.remove(M)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:y,releaseProgram:S,releaseShaderCache:E,programs:l,dispose:C}}function r_(){let n=new WeakMap;function e(o){let s=n.get(o);return s===void 0&&(s={},n.set(o,s)),s}function t(o){n.delete(o)}function i(o,s,a){n.get(o)[s]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function o_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function el(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function tl(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function s(h,d,p,g,v,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=m),e++,f}function a(h,d,p,g,v,m){const f=s(h,d,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function c(h,d,p,g,v,m){const f=s(h,d,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||o_),i.length>1&&i.sort(d||el),r.length>1&&r.sort(d||el)}function u(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:a,unshift:c,finish:u,sort:l}}function a_(){let n=new WeakMap;function e(i,r){const o=n.get(i);let s;return o===void 0?(s=new tl,n.set(i,[s])):r>=o.length?(s=new tl,o.push(s)):s=o[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function s_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Xe};break;case"SpotLight":t={position:new I,direction:new I,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function c_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let l_=0;function u_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function h_(n,e){const t=new s_,i=c_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new I);const o=new I,s=new it,a=new it;function c(u,h){let d=0,p=0,g=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let v=0,m=0,f=0,x=0,_=0,b=0,y=0,S=0,E=0,C=0,M=0;u.sort(u_);const T=h===!0?Math.PI:1;for(let G=0,J=u.length;G<J;G++){const R=u[G],L=R.color,U=R.intensity,X=R.distance,ie=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=L.r*U*T,p+=L.g*U*T,g+=L.b*U*T;else if(R.isLightProbe){for(let te=0;te<9;te++)r.probe[te].addScaledVector(R.sh.coefficients[te],U);M++}else if(R.isDirectionalLight){const te=t.get(R);if(te.color.copy(R.color).multiplyScalar(R.intensity*T),R.castShadow){const H=R.shadow,O=i.get(R);O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,r.directionalShadow[v]=O,r.directionalShadowMap[v]=ie,r.directionalShadowMatrix[v]=R.shadow.matrix,b++}r.directional[v]=te,v++}else if(R.isSpotLight){const te=t.get(R);te.position.setFromMatrixPosition(R.matrixWorld),te.color.copy(L).multiplyScalar(U*T),te.distance=X,te.coneCos=Math.cos(R.angle),te.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),te.decay=R.decay,r.spot[f]=te;const H=R.shadow;if(R.map&&(r.spotLightMap[E]=R.map,E++,H.updateMatrices(R),R.castShadow&&C++),r.spotLightMatrix[f]=H.matrix,R.castShadow){const O=i.get(R);O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,r.spotShadow[f]=O,r.spotShadowMap[f]=ie,S++}f++}else if(R.isRectAreaLight){const te=t.get(R);te.color.copy(L).multiplyScalar(U),te.halfWidth.set(R.width*.5,0,0),te.halfHeight.set(0,R.height*.5,0),r.rectArea[x]=te,x++}else if(R.isPointLight){const te=t.get(R);if(te.color.copy(R.color).multiplyScalar(R.intensity*T),te.distance=R.distance,te.decay=R.decay,R.castShadow){const H=R.shadow,O=i.get(R);O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,O.shadowCameraNear=H.camera.near,O.shadowCameraFar=H.camera.far,r.pointShadow[m]=O,r.pointShadowMap[m]=ie,r.pointShadowMatrix[m]=R.shadow.matrix,y++}r.point[m]=te,m++}else if(R.isHemisphereLight){const te=t.get(R);te.skyColor.copy(R.color).multiplyScalar(U*T),te.groundColor.copy(R.groundColor).multiplyScalar(U*T),r.hemi[_]=te,_++}}x>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=g;const B=r.hash;(B.directionalLength!==v||B.pointLength!==m||B.spotLength!==f||B.rectAreaLength!==x||B.hemiLength!==_||B.numDirectionalShadows!==b||B.numPointShadows!==y||B.numSpotShadows!==S||B.numSpotMaps!==E||B.numLightProbes!==M)&&(r.directional.length=v,r.spot.length=f,r.rectArea.length=x,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=y,r.pointShadowMap.length=y,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=y,r.spotLightMatrix.length=S+E-C,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=C,r.numLightProbes=M,B.directionalLength=v,B.pointLength=m,B.spotLength=f,B.rectAreaLength=x,B.hemiLength=_,B.numDirectionalShadows=b,B.numPointShadows=y,B.numSpotShadows=S,B.numSpotMaps=E,B.numLightProbes=M,r.version=l_++)}function l(u,h){let d=0,p=0,g=0,v=0,m=0;const f=h.matrixWorldInverse;for(let x=0,_=u.length;x<_;x++){const b=u[x];if(b.isDirectionalLight){const y=r.directional[d];y.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(o),y.direction.transformDirection(f),d++}else if(b.isSpotLight){const y=r.spot[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(o),y.direction.transformDirection(f),g++}else if(b.isRectAreaLight){const y=r.rectArea[v];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(f),a.identity(),s.copy(b.matrixWorld),s.premultiply(f),a.extractRotation(s),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const y=r.point[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(f),p++}else if(b.isHemisphereLight){const y=r.hemi[m];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:r}}function nl(n,e){const t=new h_(n,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(h){i.push(h)}function a(h){r.push(h)}function c(h){t.setup(i,h)}function l(h){t.setupView(i,h)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:s,pushShadow:a}}function f_(n,e){let t=new WeakMap;function i(o,s=0){const a=t.get(o);let c;return a===void 0?(c=new nl(n,e),t.set(o,[c])):s>=a.length?(c=new nl(n,e),a.push(c)):c=a[s],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class d_ extends Ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class p_ extends Ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const m_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function v_(n,e,t){let i=new rs;const r=new ge,o=new ge,s=new _t,a=new d_({depthPacking:td}),c=new p_,l={},u=t.maxTextureSize,h={[Bn]:Ct,[Ct]:Bn,[bn]:bn},d=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:m_,fragmentShader:g_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Qt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cu;let f=this.type;this.render=function(y,S,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const C=n.getRenderTarget(),M=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Sn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const G=f!==vn&&this.type===vn,J=f===vn&&this.type!==vn;for(let R=0,L=y.length;R<L;R++){const U=y[R],X=U.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const ie=X.getFrameExtents();if(r.multiply(ie),o.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/ie.x),r.x=o.x*ie.x,X.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/ie.y),r.y=o.y*ie.y,X.mapSize.y=o.y)),X.map===null||G===!0||J===!0){const H=this.type!==vn?{minFilter:At,magFilter:At}:{};X.map!==null&&X.map.dispose(),X.map=new zn(r.x,r.y,H),X.map.texture.name=U.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const te=X.getViewportCount();for(let H=0;H<te;H++){const O=X.getViewport(H);s.set(o.x*O.x,o.y*O.y,o.x*O.z,o.y*O.w),B.viewport(s),X.updateMatrices(U,H),i=X.getFrustum(),b(S,E,X.camera,U,this.type)}X.isPointLightShadow!==!0&&this.type===vn&&x(X,E),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(C,M,T)};function x(y,S){const E=e.update(v);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new zn(r.x,r.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(S,null,E,d,v,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(S,null,E,p,v,null)}function _(y,S,E,C){let M=null;const T=E.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(T!==void 0)M=T;else if(M=E.isPointLight===!0?c:a,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const B=M.uuid,G=S.uuid;let J=l[B];J===void 0&&(J={},l[B]=J);let R=J[G];R===void 0&&(R=M.clone(),J[G]=R),M=R}if(M.visible=S.visible,M.wireframe=S.wireframe,C===vn?M.side=S.shadowSide!==null?S.shadowSide:S.side:M.side=S.shadowSide!==null?S.shadowSide:h[S.side],M.alphaMap=S.alphaMap,M.alphaTest=S.alphaTest,M.map=S.map,M.clipShadows=S.clipShadows,M.clippingPlanes=S.clippingPlanes,M.clipIntersection=S.clipIntersection,M.displacementMap=S.displacementMap,M.displacementScale=S.displacementScale,M.displacementBias=S.displacementBias,M.wireframeLinewidth=S.wireframeLinewidth,M.linewidth=S.linewidth,E.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=n.properties.get(M);B.light=E}return M}function b(y,S,E,C,M){if(y.visible===!1)return;if(y.layers.test(S.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&M===vn)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,y.matrixWorld);const G=e.update(y),J=y.material;if(Array.isArray(J)){const R=G.groups;for(let L=0,U=R.length;L<U;L++){const X=R[L],ie=J[X.materialIndex];if(ie&&ie.visible){const te=_(y,ie,C,M);n.renderBufferDirect(E,null,G,te,y,X)}}}else if(J.visible){const R=_(y,J,C,M);n.renderBufferDirect(E,null,G,R,y,null)}}const B=y.children;for(let G=0,J=B.length;G<J;G++)b(B[G],S,E,C,M)}}function __(n,e,t){const i=t.isWebGL2;function r(){let N=!1;const pe=new _t;let se=null;const ee=new _t(0,0,0,0);return{setMask:function(ue){se!==ue&&!N&&(n.colorMask(ue,ue,ue,ue),se=ue)},setLocked:function(ue){N=ue},setClear:function(ue,Pe,We,st,zt){zt===!0&&(ue*=st,Pe*=st,We*=st),pe.set(ue,Pe,We,st),ee.equals(pe)===!1&&(n.clearColor(ue,Pe,We,st),ee.copy(pe))},reset:function(){N=!1,se=null,ee.set(-1,0,0,0)}}}function o(){let N=!1,pe=null,se=null,ee=null;return{setTest:function(ue){ue?fe(n.DEPTH_TEST):Me(n.DEPTH_TEST)},setMask:function(ue){pe!==ue&&!N&&(n.depthMask(ue),pe=ue)},setFunc:function(ue){if(se!==ue){switch(ue){case Pf:n.depthFunc(n.NEVER);break;case Lf:n.depthFunc(n.ALWAYS);break;case Of:n.depthFunc(n.LESS);break;case Jr:n.depthFunc(n.LEQUAL);break;case Df:n.depthFunc(n.EQUAL);break;case If:n.depthFunc(n.GEQUAL);break;case Nf:n.depthFunc(n.GREATER);break;case Uf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}se=ue}},setLocked:function(ue){N=ue},setClear:function(ue){ee!==ue&&(n.clearDepth(ue),ee=ue)},reset:function(){N=!1,pe=null,se=null,ee=null}}}function s(){let N=!1,pe=null,se=null,ee=null,ue=null,Pe=null,We=null,st=null,zt=null;return{setTest:function(Je){N||(Je?fe(n.STENCIL_TEST):Me(n.STENCIL_TEST))},setMask:function(Je){pe!==Je&&!N&&(n.stencilMask(Je),pe=Je)},setFunc:function(Je,St,on){(se!==Je||ee!==St||ue!==on)&&(n.stencilFunc(Je,St,on),se=Je,ee=St,ue=on)},setOp:function(Je,St,on){(Pe!==Je||We!==St||st!==on)&&(n.stencilOp(Je,St,on),Pe=Je,We=St,st=on)},setLocked:function(Je){N=Je},setClear:function(Je){zt!==Je&&(n.clearStencil(Je),zt=Je)},reset:function(){N=!1,pe=null,se=null,ee=null,ue=null,Pe=null,We=null,st=null,zt=null}}}const a=new r,c=new o,l=new s,u=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,v=[],m=null,f=!1,x=null,_=null,b=null,y=null,S=null,E=null,C=null,M=new Xe(0,0,0),T=0,B=!1,G=null,J=null,R=null,L=null,U=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,te=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(H)[1]),ie=te>=1):H.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ie=te>=2);let O=null,W={};const oe=n.getParameter(n.SCISSOR_BOX),Q=n.getParameter(n.VIEWPORT),j=new _t().fromArray(oe),re=new _t().fromArray(Q);function k(N,pe,se,ee){const ue=new Uint8Array(4),Pe=n.createTexture();n.bindTexture(N,Pe),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<se;We++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(pe,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(pe+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return Pe}const Z={};Z[n.TEXTURE_2D]=k(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=k(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Z[n.TEXTURE_2D_ARRAY]=k(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=k(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),fe(n.DEPTH_TEST),c.setFunc(Jr),Ne(!1),Fe(Fs),fe(n.CULL_FACE),Ae(Sn);function fe(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function Me(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function ve(N,pe){return p[N]!==pe?(n.bindFramebuffer(N,pe),p[N]=pe,i&&(N===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=pe),N===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=pe)),!0):!1}function z(N,pe){let se=v,ee=!1;if(N)if(se=g.get(pe),se===void 0&&(se=[],g.set(pe,se)),N.isWebGLMultipleRenderTargets){const ue=N.texture;if(se.length!==ue.length||se[0]!==n.COLOR_ATTACHMENT0){for(let Pe=0,We=ue.length;Pe<We;Pe++)se[Pe]=n.COLOR_ATTACHMENT0+Pe;se.length=ue.length,ee=!0}}else se[0]!==n.COLOR_ATTACHMENT0&&(se[0]=n.COLOR_ATTACHMENT0,ee=!0);else se[0]!==n.BACK&&(se[0]=n.BACK,ee=!0);ee&&(t.isWebGL2?n.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function nt(N){return m!==N?(n.useProgram(N),m=N,!0):!1}const ye={[Yn]:n.FUNC_ADD,[mf]:n.FUNC_SUBTRACT,[gf]:n.FUNC_REVERSE_SUBTRACT};if(i)ye[Hs]=n.MIN,ye[Gs]=n.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(ye[Hs]=N.MIN_EXT,ye[Gs]=N.MAX_EXT)}const Ce={[vf]:n.ZERO,[_f]:n.ONE,[yf]:n.SRC_COLOR,[Ea]:n.SRC_ALPHA,[wf]:n.SRC_ALPHA_SATURATE,[Sf]:n.DST_COLOR,[xf]:n.DST_ALPHA,[bf]:n.ONE_MINUS_SRC_COLOR,[wa]:n.ONE_MINUS_SRC_ALPHA,[Ef]:n.ONE_MINUS_DST_COLOR,[Mf]:n.ONE_MINUS_DST_ALPHA,[Tf]:n.CONSTANT_COLOR,[Af]:n.ONE_MINUS_CONSTANT_COLOR,[Rf]:n.CONSTANT_ALPHA,[Cf]:n.ONE_MINUS_CONSTANT_ALPHA};function Ae(N,pe,se,ee,ue,Pe,We,st,zt,Je){if(N===Sn){f===!0&&(Me(n.BLEND),f=!1);return}if(f===!1&&(fe(n.BLEND),f=!0),N!==pf){if(N!==x||Je!==B){if((_!==Yn||S!==Yn)&&(n.blendEquation(n.FUNC_ADD),_=Yn,S=Yn),Je)switch(N){case Ai:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ks:n.blendFunc(n.ONE,n.ONE);break;case Bs:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zs:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ai:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ks:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Bs:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zs:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}b=null,y=null,E=null,C=null,M.set(0,0,0),T=0,x=N,B=Je}return}ue=ue||pe,Pe=Pe||se,We=We||ee,(pe!==_||ue!==S)&&(n.blendEquationSeparate(ye[pe],ye[ue]),_=pe,S=ue),(se!==b||ee!==y||Pe!==E||We!==C)&&(n.blendFuncSeparate(Ce[se],Ce[ee],Ce[Pe],Ce[We]),b=se,y=ee,E=Pe,C=We),(st.equals(M)===!1||zt!==T)&&(n.blendColor(st.r,st.g,st.b,zt),M.copy(st),T=zt),x=N,B=!1}function $e(N,pe){N.side===bn?Me(n.CULL_FACE):fe(n.CULL_FACE);let se=N.side===Ct;pe&&(se=!se),Ne(se),N.blending===Ai&&N.transparent===!1?Ae(Sn):Ae(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),a.setMask(N.colorWrite);const ee=N.stencilWrite;l.setTest(ee),ee&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),at(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):Me(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(N){G!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),G=N)}function Fe(N){N!==hf?(fe(n.CULL_FACE),N!==J&&(N===Fs?n.cullFace(n.BACK):N===ff?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Me(n.CULL_FACE),J=N}function qe(N){N!==R&&(ie&&n.lineWidth(N),R=N)}function at(N,pe,se){N?(fe(n.POLYGON_OFFSET_FILL),(L!==pe||U!==se)&&(n.polygonOffset(pe,se),L=pe,U=se)):Me(n.POLYGON_OFFSET_FILL)}function dt(N){N?fe(n.SCISSOR_TEST):Me(n.SCISSOR_TEST)}function P(N){N===void 0&&(N=n.TEXTURE0+X-1),O!==N&&(n.activeTexture(N),O=N)}function w(N,pe,se){se===void 0&&(O===null?se=n.TEXTURE0+X-1:se=O);let ee=W[se];ee===void 0&&(ee={type:void 0,texture:void 0},W[se]=ee),(ee.type!==N||ee.texture!==pe)&&(O!==se&&(n.activeTexture(se),O=se),n.bindTexture(N,pe||Z[N]),ee.type=N,ee.texture=pe)}function $(){const N=W[O];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ce(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function D(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(N){j.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),j.copy(N))}function Le(N){re.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),re.copy(N))}function Se(N,pe){let se=h.get(pe);se===void 0&&(se=new WeakMap,h.set(pe,se));let ee=se.get(N);ee===void 0&&(ee=n.getUniformBlockIndex(pe,N.name),se.set(N,ee))}function xe(N,pe){const ee=h.get(pe).get(N);u.get(pe)!==ee&&(n.uniformBlockBinding(pe,ee,N.__bindingPointIndex),u.set(pe,ee))}function Ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},O=null,W={},p={},g=new WeakMap,v=[],m=null,f=!1,x=null,_=null,b=null,y=null,S=null,E=null,C=null,M=new Xe(0,0,0),T=0,B=!1,G=null,J=null,R=null,L=null,U=null,j.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:fe,disable:Me,bindFramebuffer:ve,drawBuffers:z,useProgram:nt,setBlending:Ae,setMaterial:$e,setFlipSided:Ne,setCullFace:Fe,setLineWidth:qe,setPolygonOffset:at,setScissorTest:dt,activeTexture:P,bindTexture:w,unbindTexture:$,compressedTexImage2D:ce,compressedTexImage3D:ae,texImage2D:ne,texImage3D:De,updateUBOMapping:Se,uniformBlockBinding:xe,texStorage2D:D,texStorage3D:he,texSubImage2D:le,texSubImage3D:we,compressedTexSubImage2D:de,compressedTexSubImage3D:_e,scissor:Te,viewport:Le,reset:Ve}}function y_(n,e,t,i,r,o,s){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,w){return f?new OffscreenCanvas(P,w):lr("canvas")}function _(P,w,$,ce){let ae=1;if((P.width>ce||P.height>ce)&&(ae=ce/Math.max(P.width,P.height)),ae<1||w===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const le=w?io:Math.floor,we=le(ae*P.width),de=le(ae*P.height);v===void 0&&(v=x(we,de));const _e=$?x(we,de):v;return _e.width=we,_e.height=de,_e.getContext("2d").drawImage(P,0,0,we,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+we+"x"+de+")."),_e}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function b(P){return La(P.width)&&La(P.height)}function y(P){return a?!1:P.wrapS!==Zt||P.wrapT!==Zt||P.minFilter!==At&&P.minFilter!==Gt}function S(P,w){return P.generateMipmaps&&w&&P.minFilter!==At&&P.minFilter!==Gt}function E(P){n.generateMipmap(P)}function C(P,w,$,ce,ae=!1){if(a===!1)return w;if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let le=w;if(w===n.RED&&($===n.FLOAT&&(le=n.R32F),$===n.HALF_FLOAT&&(le=n.R16F),$===n.UNSIGNED_BYTE&&(le=n.R8)),w===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(le=n.R8UI),$===n.UNSIGNED_SHORT&&(le=n.R16UI),$===n.UNSIGNED_INT&&(le=n.R32UI),$===n.BYTE&&(le=n.R8I),$===n.SHORT&&(le=n.R16I),$===n.INT&&(le=n.R32I)),w===n.RG&&($===n.FLOAT&&(le=n.RG32F),$===n.HALF_FLOAT&&(le=n.RG16F),$===n.UNSIGNED_BYTE&&(le=n.RG8)),w===n.RGBA){const we=ae?Qr:Ke.getTransfer(ce);$===n.FLOAT&&(le=n.RGBA32F),$===n.HALF_FLOAT&&(le=n.RGBA16F),$===n.UNSIGNED_BYTE&&(le=we===Qe?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(le=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(le=n.RGB5_A1)}return(le===n.R16F||le===n.R32F||le===n.RG16F||le===n.RG32F||le===n.RGBA16F||le===n.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function M(P,w,$){return S(P,$)===!0||P.isFramebufferTexture&&P.minFilter!==At&&P.minFilter!==Gt?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function T(P){return P===At||P===Vs||P===Co?n.NEAREST:n.LINEAR}function B(P){const w=P.target;w.removeEventListener("dispose",B),J(w),w.isVideoTexture&&g.delete(w)}function G(P){const w=P.target;w.removeEventListener("dispose",G),L(w)}function J(P){const w=i.get(P);if(w.__webglInit===void 0)return;const $=P.source,ce=m.get($);if(ce){const ae=ce[w.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&R(P),Object.keys(ce).length===0&&m.delete($)}i.remove(P)}function R(P){const w=i.get(P);n.deleteTexture(w.__webglTexture);const $=P.source,ce=m.get($);delete ce[w.__cacheKey],s.memory.textures--}function L(P){const w=P.texture,$=i.get(P),ce=i.get(w);if(ce.__webglTexture!==void 0&&(n.deleteTexture(ce.__webglTexture),s.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray($.__webglFramebuffer[ae]))for(let le=0;le<$.__webglFramebuffer[ae].length;le++)n.deleteFramebuffer($.__webglFramebuffer[ae][le]);else n.deleteFramebuffer($.__webglFramebuffer[ae]);$.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer[ae])}else{if(Array.isArray($.__webglFramebuffer))for(let ae=0;ae<$.__webglFramebuffer.length;ae++)n.deleteFramebuffer($.__webglFramebuffer[ae]);else n.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&n.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let ae=0;ae<$.__webglColorRenderbuffer.length;ae++)$.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer($.__webglColorRenderbuffer[ae]);$.__webglDepthRenderbuffer&&n.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ae=0,le=w.length;ae<le;ae++){const we=i.get(w[ae]);we.__webglTexture&&(n.deleteTexture(we.__webglTexture),s.memory.textures--),i.remove(w[ae])}i.remove(w),i.remove(P)}let U=0;function X(){U=0}function ie(){const P=U;return P>=c&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+c),U+=1,P}function te(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function H(P,w){const $=i.get(P);if(P.isVideoTexture&&at(P),P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){const ce=P.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe($,P,w);return}}t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+w)}function O(P,w){const $=i.get(P);if(P.version>0&&$.__version!==P.version){fe($,P,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+w)}function W(P,w){const $=i.get(P);if(P.version>0&&$.__version!==P.version){fe($,P,w);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+w)}function oe(P,w){const $=i.get(P);if(P.version>0&&$.__version!==P.version){Me($,P,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+w)}const Q={[Ra]:n.REPEAT,[Zt]:n.CLAMP_TO_EDGE,[Ca]:n.MIRRORED_REPEAT},j={[At]:n.NEAREST,[Vs]:n.NEAREST_MIPMAP_NEAREST,[Co]:n.NEAREST_MIPMAP_LINEAR,[Gt]:n.LINEAR,[Wf]:n.LINEAR_MIPMAP_NEAREST,[sr]:n.LINEAR_MIPMAP_LINEAR},re={[id]:n.NEVER,[ud]:n.ALWAYS,[rd]:n.LESS,[ad]:n.LEQUAL,[od]:n.EQUAL,[ld]:n.GEQUAL,[sd]:n.GREATER,[cd]:n.NOTEQUAL};function k(P,w,$){if($?(n.texParameteri(P,n.TEXTURE_WRAP_S,Q[w.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,Q[w.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,Q[w.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,j[w.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,j[w.minFilter])):(n.texParameteri(P,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(P,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(w.wrapS!==Zt||w.wrapT!==Zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(P,n.TEXTURE_MAG_FILTER,T(w.magFilter)),n.texParameteri(P,n.TEXTURE_MIN_FILTER,T(w.minFilter)),w.minFilter!==At&&w.minFilter!==Gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,re[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ce=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===At||w.minFilter!==Co&&w.minFilter!==sr||w.type===Un&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===Li&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(P,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Z(P,w){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",B));const ce=w.source;let ae=m.get(ce);ae===void 0&&(ae={},m.set(ce,ae));const le=te(w);if(le!==P.__cacheKey){ae[le]===void 0&&(ae[le]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,$=!0),ae[le].usedTimes++;const we=ae[P.__cacheKey];we!==void 0&&(ae[P.__cacheKey].usedTimes--,we.usedTimes===0&&R(w)),P.__cacheKey=le,P.__webglTexture=ae[le].texture}return $}function fe(P,w,$){let ce=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ce=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ce=n.TEXTURE_3D);const ae=Z(P,w),le=w.source;t.bindTexture(ce,P.__webglTexture,n.TEXTURE0+$);const we=i.get(le);if(le.version!==we.__version||ae===!0){t.activeTexture(n.TEXTURE0+$);const de=Ke.getPrimaries(Ke.workingColorSpace),_e=w.colorSpace===Wt?null:Ke.getPrimaries(w.colorSpace),D=w.colorSpace===Wt||de===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,D);const he=y(w)&&b(w.image)===!1;let ne=_(w.image,he,!1,u);ne=dt(w,ne);const De=b(ne)||a,Te=o.convert(w.format,w.colorSpace);let Le=o.convert(w.type),Se=C(w.internalFormat,Te,Le,w.colorSpace,w.isVideoTexture);k(ce,w,De);let xe;const Ve=w.mipmaps,N=a&&w.isVideoTexture!==!0,pe=we.__version===void 0||ae===!0,se=M(w,ne,De);if(w.isDepthTexture)Se=n.DEPTH_COMPONENT,a?w.type===Un?Se=n.DEPTH_COMPONENT32F:w.type===Nn?Se=n.DEPTH_COMPONENT24:w.type===Zn?Se=n.DEPTH24_STENCIL8:Se=n.DEPTH_COMPONENT16:w.type===Un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Jn&&Se===n.DEPTH_COMPONENT&&w.type!==Qa&&w.type!==Nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Nn,Le=o.convert(w.type)),w.format===Oi&&Se===n.DEPTH_COMPONENT&&(Se=n.DEPTH_STENCIL,w.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Zn,Le=o.convert(w.type))),pe&&(N?t.texStorage2D(n.TEXTURE_2D,1,Se,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Se,ne.width,ne.height,0,Te,Le,null));else if(w.isDataTexture)if(Ve.length>0&&De){N&&pe&&t.texStorage2D(n.TEXTURE_2D,se,Se,Ve[0].width,Ve[0].height);for(let ee=0,ue=Ve.length;ee<ue;ee++)xe=Ve[ee],N?t.texSubImage2D(n.TEXTURE_2D,ee,0,0,xe.width,xe.height,Te,Le,xe.data):t.texImage2D(n.TEXTURE_2D,ee,Se,xe.width,xe.height,0,Te,Le,xe.data);w.generateMipmaps=!1}else N?(pe&&t.texStorage2D(n.TEXTURE_2D,se,Se,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,Te,Le,ne.data)):t.texImage2D(n.TEXTURE_2D,0,Se,ne.width,ne.height,0,Te,Le,ne.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){N&&pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,Se,Ve[0].width,Ve[0].height,ne.depth);for(let ee=0,ue=Ve.length;ee<ue;ee++)xe=Ve[ee],w.format!==Jt?Te!==null?N?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,xe.width,xe.height,ne.depth,Te,xe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,Se,xe.width,xe.height,ne.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,xe.width,xe.height,ne.depth,Te,Le,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,Se,xe.width,xe.height,ne.depth,0,Te,Le,xe.data)}else{N&&pe&&t.texStorage2D(n.TEXTURE_2D,se,Se,Ve[0].width,Ve[0].height);for(let ee=0,ue=Ve.length;ee<ue;ee++)xe=Ve[ee],w.format!==Jt?Te!==null?N?t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,xe.width,xe.height,Te,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,Se,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?t.texSubImage2D(n.TEXTURE_2D,ee,0,0,xe.width,xe.height,Te,Le,xe.data):t.texImage2D(n.TEXTURE_2D,ee,Se,xe.width,xe.height,0,Te,Le,xe.data)}else if(w.isDataArrayTexture)N?(pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,Se,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Te,Le,ne.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,ne.width,ne.height,ne.depth,0,Te,Le,ne.data);else if(w.isData3DTexture)N?(pe&&t.texStorage3D(n.TEXTURE_3D,se,Se,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Te,Le,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Se,ne.width,ne.height,ne.depth,0,Te,Le,ne.data);else if(w.isFramebufferTexture){if(pe)if(N)t.texStorage2D(n.TEXTURE_2D,se,Se,ne.width,ne.height);else{let ee=ne.width,ue=ne.height;for(let Pe=0;Pe<se;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,Se,ee,ue,0,Te,Le,null),ee>>=1,ue>>=1}}else if(Ve.length>0&&De){N&&pe&&t.texStorage2D(n.TEXTURE_2D,se,Se,Ve[0].width,Ve[0].height);for(let ee=0,ue=Ve.length;ee<ue;ee++)xe=Ve[ee],N?t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Te,Le,xe):t.texImage2D(n.TEXTURE_2D,ee,Se,Te,Le,xe);w.generateMipmaps=!1}else N?(pe&&t.texStorage2D(n.TEXTURE_2D,se,Se,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Le,ne)):t.texImage2D(n.TEXTURE_2D,0,Se,Te,Le,ne);S(w,De)&&E(ce),we.__version=le.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Me(P,w,$){if(w.image.length!==6)return;const ce=Z(P,w),ae=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+$);const le=i.get(ae);if(ae.version!==le.__version||ce===!0){t.activeTexture(n.TEXTURE0+$);const we=Ke.getPrimaries(Ke.workingColorSpace),de=w.colorSpace===Wt?null:Ke.getPrimaries(w.colorSpace),_e=w.colorSpace===Wt||we===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const D=w.isCompressedTexture||w.image[0].isCompressedTexture,he=w.image[0]&&w.image[0].isDataTexture,ne=[];for(let ee=0;ee<6;ee++)!D&&!he?ne[ee]=_(w.image[ee],!1,!0,l):ne[ee]=he?w.image[ee].image:w.image[ee],ne[ee]=dt(w,ne[ee]);const De=ne[0],Te=b(De)||a,Le=o.convert(w.format,w.colorSpace),Se=o.convert(w.type),xe=C(w.internalFormat,Le,Se,w.colorSpace),Ve=a&&w.isVideoTexture!==!0,N=le.__version===void 0||ce===!0;let pe=M(w,De,Te);k(n.TEXTURE_CUBE_MAP,w,Te);let se;if(D){Ve&&N&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,xe,De.width,De.height);for(let ee=0;ee<6;ee++){se=ne[ee].mipmaps;for(let ue=0;ue<se.length;ue++){const Pe=se[ue];w.format!==Jt?Le!==null?Ve?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,0,0,Pe.width,Pe.height,Le,Pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,xe,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,0,0,Pe.width,Pe.height,Le,Se,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,xe,Pe.width,Pe.height,0,Le,Se,Pe.data)}}}else{se=w.mipmaps,Ve&&N&&(se.length>0&&pe++,t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,xe,ne[0].width,ne[0].height));for(let ee=0;ee<6;ee++)if(he){Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ne[ee].width,ne[ee].height,Le,Se,ne[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,xe,ne[ee].width,ne[ee].height,0,Le,Se,ne[ee].data);for(let ue=0;ue<se.length;ue++){const We=se[ue].image[ee].image;Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,0,0,We.width,We.height,Le,Se,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,xe,We.width,We.height,0,Le,Se,We.data)}}else{Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Le,Se,ne[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,xe,Le,Se,ne[ee]);for(let ue=0;ue<se.length;ue++){const Pe=se[ue];Ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,0,0,Le,Se,Pe.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,xe,Le,Se,Pe.image[ee])}}}S(w,Te)&&E(n.TEXTURE_CUBE_MAP),le.__version=ae.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ve(P,w,$,ce,ae,le){const we=o.convert($.format,$.colorSpace),de=o.convert($.type),_e=C($.internalFormat,we,de,$.colorSpace);if(!i.get(w).__hasExternalTextures){const he=Math.max(1,w.width>>le),ne=Math.max(1,w.height>>le);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,le,_e,he,ne,w.depth,0,we,de,null):t.texImage2D(ae,le,_e,he,ne,0,we,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),qe(w)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,ae,i.get($).__webglTexture,0,Fe(w)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ce,ae,i.get($).__webglTexture,le),t.bindFramebuffer(n.FRAMEBUFFER,null)}function z(P,w,$){if(n.bindRenderbuffer(n.RENDERBUFFER,P),w.depthBuffer&&!w.stencilBuffer){let ce=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if($||qe(w)){const ae=w.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Un?ce=n.DEPTH_COMPONENT32F:ae.type===Nn&&(ce=n.DEPTH_COMPONENT24));const le=Fe(w);qe(w)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,ce,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,le,ce,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,ce,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,P)}else if(w.depthBuffer&&w.stencilBuffer){const ce=Fe(w);$&&qe(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,n.DEPTH24_STENCIL8,w.width,w.height):qe(w)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,P)}else{const ce=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ae=0;ae<ce.length;ae++){const le=ce[ae],we=o.convert(le.format,le.colorSpace),de=o.convert(le.type),_e=C(le.internalFormat,we,de,le.colorSpace),D=Fe(w);$&&qe(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,D,_e,w.width,w.height):qe(w)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D,_e,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,_e,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function nt(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),H(w.depthTexture,0);const ce=i.get(w.depthTexture).__webglTexture,ae=Fe(w);if(w.depthTexture.format===Jn)qe(w)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0);else if(w.depthTexture.format===Oi)qe(w)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function ye(P){const w=i.get(P),$=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");nt(w.__webglFramebuffer,P)}else if($){w.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ce]),w.__webglDepthbuffer[ce]=n.createRenderbuffer(),z(w.__webglDepthbuffer[ce],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),z(w.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(P,w,$){const ce=i.get(P);w!==void 0&&ve(ce.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&ye(P)}function Ae(P){const w=P.texture,$=i.get(P),ce=i.get(w);P.addEventListener("dispose",G),P.isWebGLMultipleRenderTargets!==!0&&(ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture()),ce.__version=w.version,s.memory.textures++);const ae=P.isWebGLCubeRenderTarget===!0,le=P.isWebGLMultipleRenderTargets===!0,we=b(P)||a;if(ae){$.__webglFramebuffer=[];for(let de=0;de<6;de++)if(a&&w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer[de]=[];for(let _e=0;_e<w.mipmaps.length;_e++)$.__webglFramebuffer[de][_e]=n.createFramebuffer()}else $.__webglFramebuffer[de]=n.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer=[];for(let de=0;de<w.mipmaps.length;de++)$.__webglFramebuffer[de]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(le)if(r.drawBuffers){const de=P.texture;for(let _e=0,D=de.length;_e<D;_e++){const he=i.get(de[_e]);he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&qe(P)===!1){const de=le?w:[w];$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let _e=0;_e<de.length;_e++){const D=de[_e];$.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[_e]);const he=o.convert(D.format,D.colorSpace),ne=o.convert(D.type),De=C(D.internalFormat,he,ne,D.colorSpace,P.isXRRenderTarget===!0),Te=Fe(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,De,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,$.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),z($.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),k(n.TEXTURE_CUBE_MAP,w,we);for(let de=0;de<6;de++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let _e=0;_e<w.mipmaps.length;_e++)ve($.__webglFramebuffer[de][_e],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,_e);else ve($.__webglFramebuffer[de],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);S(w,we)&&E(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){const de=P.texture;for(let _e=0,D=de.length;_e<D;_e++){const he=de[_e],ne=i.get(he);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),k(n.TEXTURE_2D,he,we),ve($.__webglFramebuffer,P,he,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,0),S(he,we)&&E(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?de=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,ce.__webglTexture),k(de,w,we),a&&w.mipmaps&&w.mipmaps.length>0)for(let _e=0;_e<w.mipmaps.length;_e++)ve($.__webglFramebuffer[_e],P,w,n.COLOR_ATTACHMENT0,de,_e);else ve($.__webglFramebuffer,P,w,n.COLOR_ATTACHMENT0,de,0);S(w,we)&&E(de),t.unbindTexture()}P.depthBuffer&&ye(P)}function $e(P){const w=b(P)||a,$=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ce=0,ae=$.length;ce<ae;ce++){const le=$[ce];if(S(le,w)){const we=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,de=i.get(le).__webglTexture;t.bindTexture(we,de),E(we),t.unbindTexture()}}}function Ne(P){if(a&&P.samples>0&&qe(P)===!1){const w=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],$=P.width,ce=P.height;let ae=n.COLOR_BUFFER_BIT;const le=[],we=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(P),_e=P.isWebGLMultipleRenderTargets===!0;if(_e)for(let D=0;D<w.length;D++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let D=0;D<w.length;D++){le.push(n.COLOR_ATTACHMENT0+D),P.depthBuffer&&le.push(we);const he=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(he===!1&&(P.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),_e&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[D]),he===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[we]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[we])),_e){const ne=i.get(w[D]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,$,ce,0,0,$,ce,ae,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,le)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let D=0;D<w.length;D++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.RENDERBUFFER,de.__webglColorRenderbuffer[D]);const he=i.get(w[D]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.TEXTURE_2D,he,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function Fe(P){return Math.min(h,P.samples)}function qe(P){const w=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function at(P){const w=s.render.frame;g.get(P)!==w&&(g.set(P,w),P.update())}function dt(P,w){const $=P.colorSpace,ce=P.format,ae=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Pa||$!==wn&&$!==Wt&&(Ke.getTransfer($)===Qe?a===!1?e.has("EXT_sRGB")===!0&&ce===Jt?(P.format=Pa,P.minFilter=Gt,P.generateMipmaps=!1):w=yu.sRGBToLinear(w):(ce!==Jt||ae!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),w}this.allocateTextureUnit=ie,this.resetTextureUnits=X,this.setTexture2D=H,this.setTexture2DArray=O,this.setTexture3D=W,this.setTextureCube=oe,this.rebindTextures=Ce,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=qe}function b_(n,e,t){const i=t.isWebGL2;function r(o,s=Wt){let a;const c=Ke.getTransfer(s);if(o===kn)return n.UNSIGNED_BYTE;if(o===hu)return n.UNSIGNED_SHORT_4_4_4_4;if(o===fu)return n.UNSIGNED_SHORT_5_5_5_1;if(o===jf)return n.BYTE;if(o===Xf)return n.SHORT;if(o===Qa)return n.UNSIGNED_SHORT;if(o===uu)return n.INT;if(o===Nn)return n.UNSIGNED_INT;if(o===Un)return n.FLOAT;if(o===Li)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===$f)return n.ALPHA;if(o===Jt)return n.RGBA;if(o===qf)return n.LUMINANCE;if(o===Yf)return n.LUMINANCE_ALPHA;if(o===Jn)return n.DEPTH_COMPONENT;if(o===Oi)return n.DEPTH_STENCIL;if(o===Pa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===Kf)return n.RED;if(o===du)return n.RED_INTEGER;if(o===Zf)return n.RG;if(o===pu)return n.RG_INTEGER;if(o===mu)return n.RGBA_INTEGER;if(o===Po||o===Lo||o===Oo||o===Do)if(c===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Po)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Lo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Oo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Do)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Po)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Lo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Oo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Do)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Ws||o===js||o===Xs||o===$s)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Ws)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===js)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Xs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===$s)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Jf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===qs||o===Ys)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===qs)return c===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Ys)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Ks||o===Zs||o===Js||o===Qs||o===ec||o===tc||o===nc||o===ic||o===rc||o===oc||o===ac||o===sc||o===cc||o===lc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Ks)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Zs)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Js)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Qs)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===ec)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===tc)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===nc)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===ic)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===rc)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===oc)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===ac)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===sc)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===cc)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===lc)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Io||o===uc||o===hc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Io)return c===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===uc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===hc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===Qf||o===fc||o===dc||o===pc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Io)return a.COMPRESSED_RED_RGTC1_EXT;if(o===fc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===dc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===pc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Zn?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[o]!==void 0?n[o]:null}return{convert:r}}class x_ extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let Ei=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}};const M_={type:"move"};class ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,s=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(M_)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ei;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class S_ extends Lt{constructor(e,t,i,r,o,s,a,c,l,u){if(u=u!==void 0?u:Jn,u!==Jn&&u!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Jn&&(i=Nn),i===void 0&&u===Oi&&(i=Zn),super(null,r,o,s,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:At,this.minFilter=c!==void 0?c:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class E_ extends rn{constructor(e,t){super();const i=this;let r=null,o=1,s=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null;const v=t.getContextAttributes();let m=null,f=null;const x=[],_=[],b=new Vt;b.layers.enable(1),b.viewport=new _t;const y=new Vt;y.layers.enable(2),y.viewport=new _t;const S=[b,y],E=new x_;E.layers.enable(1),E.layers.enable(2);let C=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let W=x[O];return W===void 0&&(W=new ia,x[O]=W),W.getTargetRaySpace()},this.getControllerGrip=function(O){let W=x[O];return W===void 0&&(W=new ia,x[O]=W),W.getGripSpace()},this.getHand=function(O){let W=x[O];return W===void 0&&(W=new ia,x[O]=W),W.getHandSpace()};function T(O){const W=_.indexOf(O.inputSource);if(W===-1)return;const oe=x[W];oe!==void 0&&(oe.update(O.inputSource,O.frame,l||s),oe.dispatchEvent({type:O.type,data:O.inputSource}))}function B(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",G);for(let O=0;O<x.length;O++){const W=_[O];W!==null&&(_[O]=null,x[O].disconnect(W))}C=null,M=null,e.setRenderTarget(m),p=null,d=null,h=null,r=null,f=null,H.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){o=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",B),r.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,t,W),r.updateRenderState({baseLayer:p}),f=new zn(p.framebufferWidth,p.framebufferHeight,{format:Jt,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let W=null,oe=null,Q=null;v.depth&&(Q=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=v.stencil?Oi:Jn,oe=v.stencil?Zn:Nn);const j={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:o};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(j),r.updateRenderState({layers:[d]}),f=new zn(d.textureWidth,d.textureHeight,{format:Jt,type:kn,depthTexture:new S_(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const re=e.properties.get(f);re.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(a),H.setContext(r),H.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G(O){for(let W=0;W<O.removed.length;W++){const oe=O.removed[W],Q=_.indexOf(oe);Q>=0&&(_[Q]=null,x[Q].disconnect(oe))}for(let W=0;W<O.added.length;W++){const oe=O.added[W];let Q=_.indexOf(oe);if(Q===-1){for(let re=0;re<x.length;re++)if(re>=_.length){_.push(oe),Q=re;break}else if(_[re]===null){_[re]=oe,Q=re;break}if(Q===-1)break}const j=x[Q];j&&j.connect(oe)}}const J=new I,R=new I;function L(O,W,oe){J.setFromMatrixPosition(W.matrixWorld),R.setFromMatrixPosition(oe.matrixWorld);const Q=J.distanceTo(R),j=W.projectionMatrix.elements,re=oe.projectionMatrix.elements,k=j[14]/(j[10]-1),Z=j[14]/(j[10]+1),fe=(j[9]+1)/j[5],Me=(j[9]-1)/j[5],ve=(j[8]-1)/j[0],z=(re[8]+1)/re[0],nt=k*ve,ye=k*z,Ce=Q/(-ve+z),Ae=Ce*-ve;W.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Ae),O.translateZ(Ce),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const $e=k+Ce,Ne=Z+Ce,Fe=nt-Ae,qe=ye+(Q-Ae),at=fe*Z/Ne*$e,dt=Me*Z/Ne*$e;O.projectionMatrix.makePerspective(Fe,qe,at,dt,$e,Ne),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function U(O,W){W===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(W.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;E.near=y.near=b.near=O.near,E.far=y.far=b.far=O.far,(C!==E.near||M!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),C=E.near,M=E.far);const W=O.parent,oe=E.cameras;U(E,W);for(let Q=0;Q<oe.length;Q++)U(oe[Q],W);oe.length===2?L(E,b,y):E.projectionMatrix.copy(b.projectionMatrix),X(O,E,W)};function X(O,W,oe){oe===null?O.matrix.copy(W.matrixWorld):(O.matrix.copy(oe.matrixWorld),O.matrix.invert(),O.matrix.multiply(W.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(W.projectionMatrix),O.projectionMatrixInverse.copy(W.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=cr*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(O){c=O,d!==null&&(d.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)};let ie=null;function te(O,W){if(u=W.getViewerPose(l||s),g=W,u!==null){const oe=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let Q=!1;oe.length!==E.cameras.length&&(E.cameras.length=0,Q=!0);for(let j=0;j<oe.length;j++){const re=oe[j];let k=null;if(p!==null)k=p.getViewport(re);else{const fe=h.getViewSubImage(d,re);k=fe.viewport,j===0&&(e.setRenderTargetTextures(f,fe.colorTexture,d.ignoreDepthValues?void 0:fe.depthStencilTexture),e.setRenderTarget(f))}let Z=S[j];Z===void 0&&(Z=new Vt,Z.layers.enable(j),Z.viewport=new _t,S[j]=Z),Z.matrix.fromArray(re.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(re.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(k.x,k.y,k.width,k.height),j===0&&(E.matrix.copy(Z.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Q===!0&&E.cameras.push(Z)}}for(let oe=0;oe<x.length;oe++){const Q=_[oe],j=x[oe];Q!==null&&j!==void 0&&j.update(Q,W,l||s)}ie&&ie(O,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),g=null}const H=new Cu;H.setAnimationLoop(te),this.setAnimationLoop=function(O){ie=O},this.dispose=function(){}}}function w_(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,wu(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,x,_,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(m,f):f.isMeshToonMaterial?(o(m,f),h(m,f)):f.isMeshPhongMaterial?(o(m,f),u(m,f)):f.isMeshStandardMaterial?(o(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(o(m,f),g(m,f)):f.isMeshDepthMaterial?o(m,f):f.isMeshDistanceMaterial?(o(m,f),v(m,f)):f.isMeshNormalMaterial?o(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,x,_):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ct&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ct&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const _=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*_,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,x,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ct&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function T_(n,e,t,i){let r={},o={},s=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,_){const b=_.program;i.uniformBlockBinding(x,b)}function l(x,_){let b=r[x.id];b===void 0&&(g(x),b=u(x),r[x.id]=b,x.addEventListener("dispose",m));const y=_.program;i.updateUBOMapping(x,y);const S=e.render.frame;o[x.id]!==S&&(d(x),o[x.id]=S)}function u(x){const _=h();x.__bindingPointIndex=_;const b=n.createBuffer(),y=x.__size,S=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,y,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,b),b}function h(){for(let x=0;x<a;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=r[x.id],b=x.uniforms,y=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let S=0,E=b.length;S<E;S++){const C=b[S];if(p(C,S,y)===!0){const M=C.__offset,T=Array.isArray(C.value)?C.value:[C.value];let B=0;for(let G=0;G<T.length;G++){const J=T[G],R=v(J);typeof J=="number"?(C.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,M+B,C.__data)):J.isMatrix3?(C.__data[0]=J.elements[0],C.__data[1]=J.elements[1],C.__data[2]=J.elements[2],C.__data[3]=J.elements[0],C.__data[4]=J.elements[3],C.__data[5]=J.elements[4],C.__data[6]=J.elements[5],C.__data[7]=J.elements[0],C.__data[8]=J.elements[6],C.__data[9]=J.elements[7],C.__data[10]=J.elements[8],C.__data[11]=J.elements[0]):(J.toArray(C.__data,B),B+=R.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,C.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,_,b){const y=x.value;if(b[_]===void 0){if(typeof y=="number")b[_]=y;else{const S=Array.isArray(y)?y:[y],E=[];for(let C=0;C<S.length;C++)E.push(S[C].clone());b[_]=E}return!0}else if(typeof y=="number"){if(b[_]!==y)return b[_]=y,!0}else{const S=Array.isArray(b[_])?b[_]:[b[_]],E=Array.isArray(y)?y:[y];for(let C=0;C<S.length;C++){const M=S[C];if(M.equals(E[C])===!1)return M.copy(E[C]),!0}}return!1}function g(x){const _=x.uniforms;let b=0;const y=16;let S=0;for(let E=0,C=_.length;E<C;E++){const M=_[E],T={boundary:0,storage:0},B=Array.isArray(M.value)?M.value:[M.value];for(let G=0,J=B.length;G<J;G++){const R=B[G],L=v(R);T.boundary+=L.boundary,T.storage+=L.storage}if(M.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=b,E>0){S=b%y;const G=y-S;S!==0&&G-T.boundary<0&&(b+=y-S,M.__offset=b)}b+=T.storage}return S=b%y,S>0&&(b+=y-S),x.__size=b,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const b=s.indexOf(_.__bindingPointIndex);s.splice(b,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete o[_.id]}function f(){for(const x in r)n.deleteBuffer(r[x]);s=[],r={},o={}}return{bind:c,update:l,dispose:f}}class Iu{constructor(e={}){const{canvas:t=wd(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=s;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this._useLegacyLights=!1,this.toneMapping=Fn,this.toneMappingExposure=1;const _=this;let b=!1,y=0,S=0,E=null,C=-1,M=null;const T=new _t,B=new _t;let G=null;const J=new Xe(0);let R=0,L=t.width,U=t.height,X=1,ie=null,te=null;const H=new _t(0,0,L,U),O=new _t(0,0,L,U);let W=!1;const oe=new rs;let Q=!1,j=!1,re=null;const k=new it,Z=new ge,fe=new I,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return E===null?X:1}let z=i;function nt(A,V){for(let q=0;q<A.length;q++){const Y=A[q],K=t.getContext(Y,V);if(K!==null)return K}return null}try{const A={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Za}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",pe,!1),z===null){const V=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&V.shift(),z=nt(V,A),z===null)throw nt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ye,Ce,Ae,$e,Ne,Fe,qe,at,dt,P,w,$,ce,ae,le,we,de,_e,D,he,ne,De,Te,Le;function Se(){ye=new Ug(z),Ce=new Pg(z,ye,e),ye.init(Ce),De=new b_(z,ye,Ce),Ae=new __(z,ye,Ce),$e=new Bg(z),Ne=new r_,Fe=new y_(z,ye,Ae,Ne,Ce,De,$e),qe=new Og(_),at=new Ng(_),dt=new Yd(z,Ce),Te=new Rg(z,ye,dt,Ce),P=new Fg(z,dt,$e,Te),w=new Vg(z,P,dt,$e),D=new Gg(z,Ce,Fe),we=new Lg(Ne),$=new i_(_,qe,at,ye,Ce,Te,we),ce=new w_(_,Ne),ae=new a_,le=new f_(ye,Ce),_e=new Ag(_,qe,at,Ae,w,d,c),de=new v_(_,w,Ce),Le=new T_(z,$e,Ce,Ae),he=new Cg(z,ye,$e,Ce),ne=new kg(z,ye,$e,Ce),$e.programs=$.programs,_.capabilities=Ce,_.extensions=ye,_.properties=Ne,_.renderLists=ae,_.shadowMap=de,_.state=Ae,_.info=$e}Se();const xe=new E_(_,z);this.xr=xe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(L,U,!1))},this.getSize=function(A){return A.set(L,U)},this.setSize=function(A,V,q=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=A,U=V,t.width=Math.floor(A*X),t.height=Math.floor(V*X),q===!0&&(t.style.width=A+"px",t.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(L*X,U*X).floor()},this.setDrawingBufferSize=function(A,V,q){L=A,U=V,X=q,t.width=Math.floor(A*q),t.height=Math.floor(V*q),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(H)},this.setViewport=function(A,V,q,Y){A.isVector4?H.set(A.x,A.y,A.z,A.w):H.set(A,V,q,Y),Ae.viewport(T.copy(H).multiplyScalar(X).floor())},this.getScissor=function(A){return A.copy(O)},this.setScissor=function(A,V,q,Y){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,V,q,Y),Ae.scissor(B.copy(O).multiplyScalar(X).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(A){Ae.setScissorTest(W=A)},this.setOpaqueSort=function(A){ie=A},this.setTransparentSort=function(A){te=A},this.getClearColor=function(A){return A.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(A=!0,V=!0,q=!0){let Y=0;if(A){let K=!1;if(E!==null){const be=E.texture.format;K=be===mu||be===pu||be===du}if(K){const be=E.texture.type,Re=be===kn||be===Nn||be===Qa||be===Zn||be===hu||be===fu,Ie=_e.getClearColor(),Ue=_e.getClearAlpha(),He=Ie.r,ke=Ie.g,Be=Ie.b;Re?(p[0]=He,p[1]=ke,p[2]=Be,p[3]=Ue,z.clearBufferuiv(z.COLOR,0,p)):(g[0]=He,g[1]=ke,g[2]=Be,g[3]=Ue,z.clearBufferiv(z.COLOR,0,g))}else Y|=z.COLOR_BUFFER_BIT}V&&(Y|=z.DEPTH_BUFFER_BIT),q&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ae.dispose(),le.dispose(),Ne.dispose(),qe.dispose(),at.dispose(),w.dispose(),Te.dispose(),Le.dispose(),$.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",zt),xe.removeEventListener("sessionend",Je),re&&(re.dispose(),re=null),St.stop()};function Ve(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=$e.autoReset,V=de.enabled,q=de.autoUpdate,Y=de.needsUpdate,K=de.type;Se(),$e.autoReset=A,de.enabled=V,de.autoUpdate=q,de.needsUpdate=Y,de.type=K}function pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function se(A){const V=A.target;V.removeEventListener("dispose",se),ee(V)}function ee(A){ue(A),Ne.remove(A)}function ue(A){const V=Ne.get(A).programs;V!==void 0&&(V.forEach(function(q){$.releaseProgram(q)}),A.isShaderMaterial&&$.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,q,Y,K,be){V===null&&(V=Me);const Re=K.isMesh&&K.matrixWorld.determinant()<0,Ie=Uh(A,V,q,Y,K);Ae.setMaterial(Y,Re);let Ue=q.index,He=1;if(Y.wireframe===!0){if(Ue=P.getWireframeAttribute(q),Ue===void 0)return;He=2}const ke=q.drawRange,Be=q.attributes.position;let ot=ke.start*He,Dt=(ke.start+ke.count)*He;be!==null&&(ot=Math.max(ot,be.start*He),Dt=Math.min(Dt,(be.start+be.count)*He)),Ue!==null?(ot=Math.max(ot,0),Dt=Math.min(Dt,Ue.count)):Be!=null&&(ot=Math.max(ot,0),Dt=Math.min(Dt,Be.count));const pt=Dt-ot;if(pt<0||pt===1/0)return;Te.setup(K,Y,Ie,q,Ue);let ln,rt=he;if(Ue!==null&&(ln=dt.get(Ue),rt=ne,rt.setIndex(ln)),K.isMesh)Y.wireframe===!0?(Ae.setLineWidth(Y.wireframeLinewidth*ve()),rt.setMode(z.LINES)):rt.setMode(z.TRIANGLES);else if(K.isLine){let je=Y.linewidth;je===void 0&&(je=1),Ae.setLineWidth(je*ve()),K.isLineSegments?rt.setMode(z.LINES):K.isLineLoop?rt.setMode(z.LINE_LOOP):rt.setMode(z.LINE_STRIP)}else K.isPoints?rt.setMode(z.POINTS):K.isSprite&&rt.setMode(z.TRIANGLES);if(K.isInstancedMesh)rt.renderInstances(ot,pt,K.count);else if(q.isInstancedBufferGeometry){const je=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,wo=Math.min(q.instanceCount,je);rt.renderInstances(ot,pt,wo)}else rt.render(ot,pt)};function Pe(A,V,q){A.transparent===!0&&A.side===bn&&A.forceSinglePass===!1?(A.side=Ct,A.needsUpdate=!0,gr(A,V,q),A.side=Bn,A.needsUpdate=!0,gr(A,V,q),A.side=bn):gr(A,V,q)}this.compile=function(A,V,q=null){q===null&&(q=A),m=le.get(q),m.init(),x.push(m),q.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),A!==q&&A.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights(_._useLegacyLights);const Y=new Set;return A.traverse(function(K){const be=K.material;if(be)if(Array.isArray(be))for(let Re=0;Re<be.length;Re++){const Ie=be[Re];Pe(Ie,q,K),Y.add(Ie)}else Pe(be,q,K),Y.add(be)}),x.pop(),m=null,Y},this.compileAsync=function(A,V,q=null){const Y=this.compile(A,V,q);return new Promise(K=>{function be(){if(Y.forEach(function(Re){Ne.get(Re).currentProgram.isReady()&&Y.delete(Re)}),Y.size===0){K(A);return}setTimeout(be,10)}ye.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let We=null;function st(A){We&&We(A)}function zt(){St.stop()}function Je(){St.start()}const St=new Cu;St.setAnimationLoop(st),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(A){We=A,xe.setAnimationLoop(A),A===null?St.stop():St.start()},xe.addEventListener("sessionstart",zt),xe.addEventListener("sessionend",Je),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(V),V=xe.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,V,E),m=le.get(A,x.length),m.init(),x.push(m),k.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),oe.setFromProjectionMatrix(k),j=this.localClippingEnabled,Q=we.init(this.clippingPlanes,j),v=ae.get(A,f.length),v.init(),f.push(v),on(A,V,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(ie,te),this.info.render.frame++,Q===!0&&we.beginShadows();const q=m.state.shadowsArray;if(de.render(q,A,V),Q===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),_e.render(v,A),m.setupLights(_._useLegacyLights),V.isArrayCamera){const Y=V.cameras;for(let K=0,be=Y.length;K<be;K++){const Re=Y[K];As(v,A,Re,Re.viewport)}}else As(v,A,V);E!==null&&(Fe.updateMultisampleRenderTarget(E),Fe.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(_,A,V),Te.resetDefaultState(),C=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function on(A,V,q,Y){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||oe.intersectsSprite(A)){Y&&fe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(k);const Re=w.update(A),Ie=A.material;Ie.visible&&v.push(A,Re,Ie,q,fe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||oe.intersectsObject(A))){const Re=w.update(A),Ie=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),fe.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),fe.copy(Re.boundingSphere.center)),fe.applyMatrix4(A.matrixWorld).applyMatrix4(k)),Array.isArray(Ie)){const Ue=Re.groups;for(let He=0,ke=Ue.length;He<ke;He++){const Be=Ue[He],ot=Ie[Be.materialIndex];ot&&ot.visible&&v.push(A,Re,ot,q,fe.z,Be)}}else Ie.visible&&v.push(A,Re,Ie,q,fe.z,null)}}const be=A.children;for(let Re=0,Ie=be.length;Re<Ie;Re++)on(be[Re],V,q,Y)}function As(A,V,q,Y){const K=A.opaque,be=A.transmissive,Re=A.transparent;m.setupLightsView(q),Q===!0&&we.setGlobalState(_.clippingPlanes,q),be.length>0&&Nh(K,be,V,q),Y&&Ae.viewport(T.copy(Y)),K.length>0&&mr(K,V,q),be.length>0&&mr(be,V,q),Re.length>0&&mr(Re,V,q),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Nh(A,V,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const be=Ce.isWebGL2;re===null&&(re=new zn(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Li:kn,minFilter:sr,samples:be?4:0})),_.getDrawingBufferSize(Z),be?re.setSize(Z.x,Z.y):re.setSize(io(Z.x),io(Z.y));const Re=_.getRenderTarget();_.setRenderTarget(re),_.getClearColor(J),R=_.getClearAlpha(),R<1&&_.setClearColor(16777215,.5),_.clear();const Ie=_.toneMapping;_.toneMapping=Fn,mr(A,q,Y),Fe.updateMultisampleRenderTarget(re),Fe.updateRenderTargetMipmap(re);let Ue=!1;for(let He=0,ke=V.length;He<ke;He++){const Be=V[He],ot=Be.object,Dt=Be.geometry,pt=Be.material,ln=Be.group;if(pt.side===bn&&ot.layers.test(Y.layers)){const rt=pt.side;pt.side=Ct,pt.needsUpdate=!0,Rs(ot,q,Y,Dt,pt,ln),pt.side=rt,pt.needsUpdate=!0,Ue=!0}}Ue===!0&&(Fe.updateMultisampleRenderTarget(re),Fe.updateRenderTargetMipmap(re)),_.setRenderTarget(Re),_.setClearColor(J,R),_.toneMapping=Ie}function mr(A,V,q){const Y=V.isScene===!0?V.overrideMaterial:null;for(let K=0,be=A.length;K<be;K++){const Re=A[K],Ie=Re.object,Ue=Re.geometry,He=Y===null?Re.material:Y,ke=Re.group;Ie.layers.test(q.layers)&&Rs(Ie,V,q,Ue,He,ke)}}function Rs(A,V,q,Y,K,be){A.onBeforeRender(_,V,q,Y,K,be),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(_,V,q,Y,A,be),K.transparent===!0&&K.side===bn&&K.forceSinglePass===!1?(K.side=Ct,K.needsUpdate=!0,_.renderBufferDirect(q,V,Y,K,A,be),K.side=Bn,K.needsUpdate=!0,_.renderBufferDirect(q,V,Y,K,A,be),K.side=bn):_.renderBufferDirect(q,V,Y,K,A,be),A.onAfterRender(_,V,q,Y,K,be)}function gr(A,V,q){V.isScene!==!0&&(V=Me);const Y=Ne.get(A),K=m.state.lights,be=m.state.shadowsArray,Re=K.state.version,Ie=$.getParameters(A,K.state,be,V,q),Ue=$.getProgramCacheKey(Ie);let He=Y.programs;Y.environment=A.isMeshStandardMaterial?V.environment:null,Y.fog=V.fog,Y.envMap=(A.isMeshStandardMaterial?at:qe).get(A.envMap||Y.environment),He===void 0&&(A.addEventListener("dispose",se),He=new Map,Y.programs=He);let ke=He.get(Ue);if(ke!==void 0){if(Y.currentProgram===ke&&Y.lightsStateVersion===Re)return Ps(A,Ie),ke}else Ie.uniforms=$.getUniforms(A),A.onBuild(q,Ie,_),A.onBeforeCompile(Ie,_),ke=$.acquireProgram(Ie,Ue),He.set(Ue,ke),Y.uniforms=Ie.uniforms;const Be=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Be.clippingPlanes=we.uniform),Ps(A,Ie),Y.needsLights=kh(A),Y.lightsStateVersion=Re,Y.needsLights&&(Be.ambientLightColor.value=K.state.ambient,Be.lightProbe.value=K.state.probe,Be.directionalLights.value=K.state.directional,Be.directionalLightShadows.value=K.state.directionalShadow,Be.spotLights.value=K.state.spot,Be.spotLightShadows.value=K.state.spotShadow,Be.rectAreaLights.value=K.state.rectArea,Be.ltc_1.value=K.state.rectAreaLTC1,Be.ltc_2.value=K.state.rectAreaLTC2,Be.pointLights.value=K.state.point,Be.pointLightShadows.value=K.state.pointShadow,Be.hemisphereLights.value=K.state.hemi,Be.directionalShadowMap.value=K.state.directionalShadowMap,Be.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Be.spotShadowMap.value=K.state.spotShadowMap,Be.spotLightMatrix.value=K.state.spotLightMatrix,Be.spotLightMap.value=K.state.spotLightMap,Be.pointShadowMap.value=K.state.pointShadowMap,Be.pointShadowMatrix.value=K.state.pointShadowMatrix),Y.currentProgram=ke,Y.uniformsList=null,ke}function Cs(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=$r.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function Ps(A,V){const q=Ne.get(A);q.outputColorSpace=V.outputColorSpace,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function Uh(A,V,q,Y,K){V.isScene!==!0&&(V=Me),Fe.resetTextureUnits();const be=V.fog,Re=Y.isMeshStandardMaterial?V.environment:null,Ie=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:wn,Ue=(Y.isMeshStandardMaterial?at:qe).get(Y.envMap||Re),He=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ke=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Be=!!q.morphAttributes.position,ot=!!q.morphAttributes.normal,Dt=!!q.morphAttributes.color;let pt=Fn;Y.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(pt=_.toneMapping);const ln=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,rt=ln!==void 0?ln.length:0,je=Ne.get(Y),wo=m.state.lights;if(Q===!0&&(j===!0||A!==M)){const It=A===M&&Y.id===C;we.setState(Y,A,It)}let ct=!1;Y.version===je.__version?(je.needsLights&&je.lightsStateVersion!==wo.state.version||je.outputColorSpace!==Ie||K.isInstancedMesh&&je.instancing===!1||!K.isInstancedMesh&&je.instancing===!0||K.isSkinnedMesh&&je.skinning===!1||!K.isSkinnedMesh&&je.skinning===!0||K.isInstancedMesh&&je.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&je.instancingColor===!1&&K.instanceColor!==null||je.envMap!==Ue||Y.fog===!0&&je.fog!==be||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==we.numPlanes||je.numIntersection!==we.numIntersection)||je.vertexAlphas!==He||je.vertexTangents!==ke||je.morphTargets!==Be||je.morphNormals!==ot||je.morphColors!==Dt||je.toneMapping!==pt||Ce.isWebGL2===!0&&je.morphTargetsCount!==rt)&&(ct=!0):(ct=!0,je.__version=Y.version);let Gn=je.currentProgram;ct===!0&&(Gn=gr(Y,V,K));let Ls=!1,Bi=!1,To=!1;const Et=Gn.getUniforms(),Vn=je.uniforms;if(Ae.useProgram(Gn.program)&&(Ls=!0,Bi=!0,To=!0),Y.id!==C&&(C=Y.id,Bi=!0),Ls||M!==A){Et.setValue(z,"projectionMatrix",A.projectionMatrix),Et.setValue(z,"viewMatrix",A.matrixWorldInverse);const It=Et.map.cameraPosition;It!==void 0&&It.setValue(z,fe.setFromMatrixPosition(A.matrixWorld)),Ce.logarithmicDepthBuffer&&Et.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Et.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,Bi=!0,To=!0)}if(K.isSkinnedMesh){Et.setOptional(z,K,"bindMatrix"),Et.setOptional(z,K,"bindMatrixInverse");const It=K.skeleton;It&&(Ce.floatVertexTextures?(It.boneTexture===null&&It.computeBoneTexture(),Et.setValue(z,"boneTexture",It.boneTexture,Fe),Et.setValue(z,"boneTextureSize",It.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ao=q.morphAttributes;if((Ao.position!==void 0||Ao.normal!==void 0||Ao.color!==void 0&&Ce.isWebGL2===!0)&&D.update(K,q,Gn),(Bi||je.receiveShadow!==K.receiveShadow)&&(je.receiveShadow=K.receiveShadow,Et.setValue(z,"receiveShadow",K.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Vn.envMap.value=Ue,Vn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Bi&&(Et.setValue(z,"toneMappingExposure",_.toneMappingExposure),je.needsLights&&Fh(Vn,To),be&&Y.fog===!0&&ce.refreshFogUniforms(Vn,be),ce.refreshMaterialUniforms(Vn,Y,X,U,re),$r.upload(z,Cs(je),Vn,Fe)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&($r.upload(z,Cs(je),Vn,Fe),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Et.setValue(z,"center",K.center),Et.setValue(z,"modelViewMatrix",K.modelViewMatrix),Et.setValue(z,"normalMatrix",K.normalMatrix),Et.setValue(z,"modelMatrix",K.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const It=Y.uniformsGroups;for(let Ro=0,Bh=It.length;Ro<Bh;Ro++)if(Ce.isWebGL2){const Os=It[Ro];Le.update(Os,Gn),Le.bind(Os,Gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gn}function Fh(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function kh(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,V,q){Ne.get(A.texture).__webglTexture=V,Ne.get(A.depthTexture).__webglTexture=q;const Y=Ne.get(A);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,V){const q=Ne.get(A);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,q=0){E=A,y=V,S=q;let Y=!0,K=null,be=!1,Re=!1;if(A){const Ue=Ne.get(A);Ue.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(z.FRAMEBUFFER,null),Y=!1):Ue.__webglFramebuffer===void 0?Fe.setupRenderTarget(A):Ue.__hasExternalTextures&&Fe.rebindTextures(A,Ne.get(A.texture).__webglTexture,Ne.get(A.depthTexture).__webglTexture);const He=A.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Re=!0);const ke=Ne.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[V])?K=ke[V][q]:K=ke[V],be=!0):Ce.isWebGL2&&A.samples>0&&Fe.useMultisampledRTT(A)===!1?K=Ne.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?K=ke[q]:K=ke,T.copy(A.viewport),B.copy(A.scissor),G=A.scissorTest}else T.copy(H).multiplyScalar(X).floor(),B.copy(O).multiplyScalar(X).floor(),G=W;if(Ae.bindFramebuffer(z.FRAMEBUFFER,K)&&Ce.drawBuffers&&Y&&Ae.drawBuffers(A,K),Ae.viewport(T),Ae.scissor(B),Ae.setScissorTest(G),be){const Ue=Ne.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ue.__webglTexture,q)}else if(Re){const Ue=Ne.get(A.texture),He=V||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ue.__webglTexture,q||0,He)}C=-1},this.readRenderTargetPixels=function(A,V,q,Y,K,be,Re){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){Ae.bindFramebuffer(z.FRAMEBUFFER,Ie);try{const Ue=A.texture,He=Ue.format,ke=Ue.type;if(He!==Jt&&De.convert(He)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=ke===Li&&(ye.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&ye.has("EXT_color_buffer_float"));if(ke!==kn&&De.convert(ke)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===Un&&(Ce.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-Y&&q>=0&&q<=A.height-K&&z.readPixels(V,q,Y,K,De.convert(He),De.convert(ke),be)}finally{const Ue=E!==null?Ne.get(E).__webglFramebuffer:null;Ae.bindFramebuffer(z.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(A,V,q=0){const Y=Math.pow(2,-q),K=Math.floor(V.image.width*Y),be=Math.floor(V.image.height*Y);Fe.setTexture2D(V,0),z.copyTexSubImage2D(z.TEXTURE_2D,q,0,0,A.x,A.y,K,be),Ae.unbindTexture()},this.copyTextureToTexture=function(A,V,q,Y=0){const K=V.image.width,be=V.image.height,Re=De.convert(q.format),Ie=De.convert(q.type);Fe.setTexture2D(q,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment),V.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Y,A.x,A.y,K,be,Re,Ie,V.image.data):V.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Y,A.x,A.y,V.mipmaps[0].width,V.mipmaps[0].height,Re,V.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,Y,A.x,A.y,Re,Ie,V.image),Y===0&&q.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(A,V,q,Y,K=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=A.max.x-A.min.x+1,Re=A.max.y-A.min.y+1,Ie=A.max.z-A.min.z+1,Ue=De.convert(Y.format),He=De.convert(Y.type);let ke;if(Y.isData3DTexture)Fe.setTexture3D(Y,0),ke=z.TEXTURE_3D;else if(Y.isDataArrayTexture)Fe.setTexture2DArray(Y,0),ke=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment);const Be=z.getParameter(z.UNPACK_ROW_LENGTH),ot=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Dt=z.getParameter(z.UNPACK_SKIP_PIXELS),pt=z.getParameter(z.UNPACK_SKIP_ROWS),ln=z.getParameter(z.UNPACK_SKIP_IMAGES),rt=q.isCompressedTexture?q.mipmaps[0]:q.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,rt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,rt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,A.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,A.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,A.min.z),q.isDataTexture||q.isData3DTexture?z.texSubImage3D(ke,K,V.x,V.y,V.z,be,Re,Ie,Ue,He,rt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(ke,K,V.x,V.y,V.z,be,Re,Ie,Ue,rt.data)):z.texSubImage3D(ke,K,V.x,V.y,V.z,be,Re,Ie,Ue,He,rt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Be),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ot),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Dt),z.pixelStorei(z.UNPACK_SKIP_ROWS,pt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ln),K===0&&Y.generateMipmaps&&z.generateMipmap(ke),Ae.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Fe.setTextureCube(A,0):A.isData3DTexture?Fe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Fe.setTexture2DArray(A,0):Fe.setTexture2D(A,0),Ae.unbindTexture()},this.resetState=function(){y=0,S=0,E=null,Ae.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===es?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===fo?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===gt?Qn:gu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Qn?gt:wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class A_ extends Iu{}A_.prototype.isWebGL1Renderer=!0;class R_ extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Nu extends Ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const il=new I,rl=new I,ol=new it,ra=new mo,Br=new po;class C_ extends yt{constructor(e=new Bt,t=new Nu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,o=t.count;r<o;r++)il.fromBufferAttribute(t,r-1),rl.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=il.distanceTo(rl);e.setAttribute("lineDistance",new ut(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Br.copy(i.boundingSphere),Br.applyMatrix4(r),Br.radius+=o,e.ray.intersectsSphere(Br)===!1)return;ol.copy(r).invert(),ra.copy(e.ray).applyMatrix4(ol);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new I,u=new I,h=new I,d=new I,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const f=Math.max(0,s.start),x=Math.min(g.count,s.start+s.count);for(let _=f,b=x-1;_<b;_+=p){const y=g.getX(_),S=g.getX(_+1);if(l.fromBufferAttribute(m,y),u.fromBufferAttribute(m,S),ra.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,s.start),x=Math.min(m.count,s.start+s.count);for(let _=f,b=x-1;_<b;_+=p){if(l.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),ra.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||t.push({distance:S,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),o=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),o+=i.distanceTo(r),t.push(o),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const o=i.length;let s;t?s=t:s=e*i[o-1];let a=0,c=o-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-s,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===s)return r/(o-1);const u=i[r],d=i[r+1]-u,p=(s-u)/d;return(r+p)/(o-1)}getTangent(e,t){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);const s=this.getPoint(r),a=this.getPoint(o),c=t||(s.isVector2?new ge:new I);return c.copy(a).sub(s).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new I,r=[],o=[],s=[],a=new I,c=new it;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new I)}o[0]=new I,s[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),o[0].crossVectors(r[0],a),s[0].crossVectors(r[0],o[0]);for(let p=1;p<=e;p++){if(o[p]=o[p-1].clone(),s[p]=s[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(vt(r[p-1].dot(r[p]),-1,1));o[p].applyMatrix4(c.makeRotationAxis(a,g))}s[p].crossVectors(r[p],o[p])}if(t===!0){let p=Math.acos(vt(o[0].dot(o[e]),-1,1));p/=e,r[0].dot(a.crossVectors(o[0],o[e]))>0&&(p=-p);for(let g=1;g<=e;g++)o[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),s[g].crossVectors(r[g],o[g])}return{tangents:r,normals:o,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Uu extends An{constructor(e=0,t=0,i=1,r=1,o=0,s=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=s,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const i=t||new ge,r=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const s=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(s?o=0:o=r),this.aClockwise===!0&&!s&&(o===r?o=-r:o=o-r);const a=this.aStartAngle+e*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*u-p*h+this.aX,l=d*h+p*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class P_ extends Uu{constructor(e,t,i,r,o,s){super(e,t,i,i,r,o,s),this.isArcCurve=!0,this.type="ArcCurve"}}function cs(){let n=0,e=0,t=0,i=0;function r(o,s,a,c){n=o,e=a,t=-3*o+3*s-2*a-c,i=2*o-2*s+a+c}return{initCatmullRom:function(o,s,a,c,l){r(s,a,l*(a-o),l*(c-s))},initNonuniformCatmullRom:function(o,s,a,c,l,u,h){let d=(s-o)/l-(a-o)/(l+u)+(a-s)/u,p=(a-s)/u-(c-s)/(u+h)+(c-a)/h;d*=u,p*=u,r(s,a,d,p)},calc:function(o){const s=o*o,a=s*o;return n+e*o+t*s+i*a}}}const zr=new I,oa=new cs,aa=new cs,sa=new cs;class L_ extends An{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new I){const i=t,r=this.points,o=r.length,s=(o-(this.closed?0:1))*e;let a=Math.floor(s),c=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%o]:(zr.subVectors(r[0],r[1]).add(r[0]),l=zr);const h=r[a%o],d=r[(a+1)%o];if(this.closed||a+2<o?u=r[(a+2)%o]:(zr.subVectors(r[o-1],r[o-2]).add(r[o-1]),u=zr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),oa.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,v,m),aa.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,v,m),sa.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(oa.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),aa.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),sa.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(oa.calc(c),aa.calc(c),sa.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function al(n,e,t,i,r){const o=(i-e)*.5,s=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+o+s)*c+(-3*t+3*i-2*o-s)*a+o*n+t}function O_(n,e){const t=1-n;return t*t*e}function D_(n,e){return 2*(1-n)*n*e}function I_(n,e){return n*n*e}function or(n,e,t,i){return O_(n,e)+D_(n,t)+I_(n,i)}function N_(n,e){const t=1-n;return t*t*t*e}function U_(n,e){const t=1-n;return 3*t*t*n*e}function F_(n,e){return 3*(1-n)*n*n*e}function k_(n,e){return n*n*n*e}function ar(n,e,t,i,r){return N_(n,e)+U_(n,t)+F_(n,i)+k_(n,r)}class B_ extends An{constructor(e=new ge,t=new ge,i=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ge){const i=t,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return i.set(ar(e,r.x,o.x,s.x,a.x),ar(e,r.y,o.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fu extends An{constructor(e=new I,t=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new I){const i=t,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return i.set(ar(e,r.x,o.x,s.x,a.x),ar(e,r.y,o.y,s.y,a.y),ar(e,r.z,o.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class z_ extends An{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class H_ extends An{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class G_ extends An{constructor(e=new ge,t=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ge){const i=t,r=this.v0,o=this.v1,s=this.v2;return i.set(or(e,r.x,o.x,s.x),or(e,r.y,o.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ls extends An{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){const i=t,r=this.v0,o=this.v1,s=this.v2;return i.set(or(e,r.x,o.x,s.x),or(e,r.y,o.y,s.y),or(e,r.z,o.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class V_ extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){const i=t,r=this.points,o=(r.length-1)*e,s=Math.floor(o),a=o-s,c=r[s===0?s:s-1],l=r[s],u=r[s>r.length-2?r.length-1:s+1],h=r[s>r.length-3?r.length-1:s+2];return i.set(al(a,c.x,l.x,u.x,h.x),al(a,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ge().fromArray(r))}return this}}var W_=Object.freeze({__proto__:null,ArcCurve:P_,CatmullRomCurve3:L_,CubicBezierCurve:B_,CubicBezierCurve3:Fu,EllipseCurve:Uu,LineCurve:z_,LineCurve3:H_,QuadraticBezierCurve:G_,QuadraticBezierCurve3:ls,SplineCurve:V_});class _o extends Bt{constructor(e=1,t=1,i=1,r=32,o=1,s=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),o=Math.floor(o);const u=[],h=[],d=[],p=[];let g=0;const v=[],m=i/2;let f=0;x(),s===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new ut(h,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(p,2));function x(){const b=new I,y=new I;let S=0;const E=(t-e)/i;for(let C=0;C<=o;C++){const M=[],T=C/o,B=T*(t-e)+e;for(let G=0;G<=r;G++){const J=G/r,R=J*c+a,L=Math.sin(R),U=Math.cos(R);y.x=B*L,y.y=-T*i+m,y.z=B*U,h.push(y.x,y.y,y.z),b.set(L,E,U).normalize(),d.push(b.x,b.y,b.z),p.push(J,1-T),M.push(g++)}v.push(M)}for(let C=0;C<r;C++)for(let M=0;M<o;M++){const T=v[M][C],B=v[M+1][C],G=v[M+1][C+1],J=v[M][C+1];u.push(T,B,J),u.push(B,G,J),S+=6}l.addGroup(f,S,0),f+=S}function _(b){const y=g,S=new ge,E=new I;let C=0;const M=b===!0?e:t,T=b===!0?1:-1;for(let G=1;G<=r;G++)h.push(0,m*T,0),d.push(0,T,0),p.push(.5,.5),g++;const B=g;for(let G=0;G<=r;G++){const R=G/r*c+a,L=Math.cos(R),U=Math.sin(R);E.x=M*U,E.y=m*T,E.z=M*L,h.push(E.x,E.y,E.z),d.push(0,T,0),S.x=L*.5+.5,S.y=U*.5*T+.5,p.push(S.x,S.y),g++}for(let G=0;G<r;G++){const J=y+G,R=B+G;b===!0?u.push(R,R+1,J):u.push(R+1,R,J),C+=3}l.addGroup(f,C,b===!0?1:2),f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class us extends _o{constructor(e=1,t=1,i=32,r=1,o=!1,s=0,a=Math.PI*2){super(0,e,t,i,r,o,s,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:a}}static fromJSON(e){return new us(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yo extends Bt{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(s+a,Math.PI);let l=0;const u=[],h=new I,d=new I,p=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){const x=[],_=f/i;let b=0;f===0&&s===0?b=.5/t:f===i&&c===Math.PI&&(b=-.5/t);for(let y=0;y<=t;y++){const S=y/t;h.x=-e*Math.cos(r+S*o)*Math.sin(s+_*a),h.y=e*Math.cos(s+_*a),h.z=e*Math.sin(r+S*o)*Math.sin(s+_*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(S+b,1-_),x.push(l++)}u.push(x)}for(let f=0;f<i;f++)for(let x=0;x<t;x++){const _=u[f][x+1],b=u[f][x],y=u[f+1][x],S=u[f+1][x+1];(f!==0||s>0)&&p.push(_,b,S),(f!==i-1||c<Math.PI)&&p.push(b,y,S)}this.setIndex(p),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(v,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hs extends Bt{constructor(e=new ls(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,i=1,r=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:o};const s=e.computeFrenetFrames(t,o);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const a=new I,c=new I,l=new ge;let u=new I;const h=[],d=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new ut(h,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(p,2));function v(){for(let _=0;_<t;_++)m(_);m(o===!1?t:0),x(),f()}function m(_){u=e.getPointAt(_/t,u);const b=s.normals[_],y=s.binormals[_];for(let S=0;S<=r;S++){const E=S/r*Math.PI*2,C=Math.sin(E),M=-Math.cos(E);c.x=M*b.x+C*y.x,c.y=M*b.y+C*y.y,c.z=M*b.z+C*y.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,h.push(a.x,a.y,a.z)}}function f(){for(let _=1;_<=t;_++)for(let b=1;b<=r;b++){const y=(r+1)*(_-1)+(b-1),S=(r+1)*_+(b-1),E=(r+1)*_+b,C=(r+1)*(_-1)+b;g.push(y,S,C),g.push(S,E,C)}}function x(){for(let _=0;_<=t;_++)for(let b=0;b<=r;b++)l.x=_/t,l.y=b/r,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new hs(new W_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class j_ extends Ui{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vu,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const sl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class X_{constructor(e,t,i){const r=this;let o=!1,s=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const $_=new X_;class fs{constructor(e){this.manager=e!==void 0?e:$_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,o){i.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}fs.DEFAULT_MATERIAL_NAME="__DEFAULT";class q_ extends fs{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=sl.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0),s;const a=lr("img");function c(){u(),sl.add(e,this),t&&t(this),o.manager.itemEnd(e)}function l(h){u(),r&&r(h),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class Y_ extends fs{constructor(e){super(e)}load(e,t,i,r){const o=new Lt,s=new q_(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},i,r),o}}class ku extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ca=new it,cl=new I,ll=new I;class K_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rs,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;cl.setFromMatrixPosition(e.matrixWorld),t.position.copy(cl),ll.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ll),t.updateMatrixWorld(),ca.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ca),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ca)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Z_ extends K_{constructor(){super(new as(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class J_ extends ku{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Z_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Q_ extends ku{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ul(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ul();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ul(){return(typeof performance>"u"?Date:performance).now()}class zu{constructor(e,t,i=0,r=1/0){this.ray=new mo(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ns,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Ia(e,this,i,t),i.sort(hl),i}intersectObjects(e,t=!0,i=[]){for(let r=0,o=e.length;r<o;r++)Ia(e[r],this,i,t);return i.sort(hl),i}}function hl(n,e){return n.distance-e.distance}function Ia(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let o=0,s=r.length;o<s;o++)Ia(r[o],e,t,!0)}}class Na{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Za}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Za);const bi=new _n,Dn=new zu,Wi=new ge,fl=new I,Hr=new I,la=new I,dl=new it;class e0 extends rn{constructor(e,t,i){super(),i.style.touchAction="none";let r=null,o=null;const s=[],a=this;function c(){i.addEventListener("pointermove",p),i.addEventListener("pointerdown",g),i.addEventListener("pointerup",v),i.addEventListener("pointerleave",v)}function l(){i.removeEventListener("pointermove",p),i.removeEventListener("pointerdown",g),i.removeEventListener("pointerup",v),i.removeEventListener("pointerleave",v),i.style.cursor=""}function u(){l()}function h(){return e}function d(){return Dn}function p(f){if(a.enabled!==!1){if(m(f),Dn.setFromCamera(Wi,t),r){Dn.ray.intersectPlane(bi,Hr)&&r.position.copy(Hr.sub(fl).applyMatrix4(dl)),a.dispatchEvent({type:"drag",object:r});return}if(f.pointerType==="mouse"||f.pointerType==="pen")if(s.length=0,Dn.setFromCamera(Wi,t),Dn.intersectObjects(e,a.recursive,s),s.length>0){const x=s[0].object;bi.setFromNormalAndCoplanarPoint(t.getWorldDirection(bi.normal),la.setFromMatrixPosition(x.matrixWorld)),o!==x&&o!==null&&(a.dispatchEvent({type:"hoveroff",object:o}),i.style.cursor="auto",o=null),o!==x&&(a.dispatchEvent({type:"hoveron",object:x}),i.style.cursor="pointer",o=x)}else o!==null&&(a.dispatchEvent({type:"hoveroff",object:o}),i.style.cursor="auto",o=null)}}function g(f){a.enabled!==!1&&(m(f),s.length=0,Dn.setFromCamera(Wi,t),Dn.intersectObjects(e,a.recursive,s),s.length>0&&(r=a.transformGroup===!0?e[0]:s[0].object,bi.setFromNormalAndCoplanarPoint(t.getWorldDirection(bi.normal),la.setFromMatrixPosition(r.matrixWorld)),Dn.ray.intersectPlane(bi,Hr)&&(dl.copy(r.parent.matrixWorld).invert(),fl.copy(Hr).sub(la.setFromMatrixPosition(r.matrixWorld))),i.style.cursor="move",a.dispatchEvent({type:"dragstart",object:r})))}function v(){a.enabled!==!1&&(r&&(a.dispatchEvent({type:"dragend",object:r}),r=null),i.style.cursor=o?"pointer":"auto")}function m(f){const x=i.getBoundingClientRect();Wi.x=(f.clientX-x.left)/x.width*2-1,Wi.y=-(f.clientY-x.top)/x.height*2+1}c(),this.enabled=!0,this.recursive=!0,this.transformGroup=!1,this.activate=c,this.deactivate=l,this.dispose=u,this.getObjects=h,this.getRaycaster=d}}function t0(n,e,t){var i,r=1;n==null&&(n=0),e==null&&(e=0),t==null&&(t=0);function o(){var s,a=i.length,c,l=0,u=0,h=0;for(s=0;s<a;++s)c=i[s],l+=c.x||0,u+=c.y||0,h+=c.z||0;for(l=(l/a-n)*r,u=(u/a-e)*r,h=(h/a-t)*r,s=0;s<a;++s)c=i[s],l&&(c.x-=l),u&&(c.y-=u),h&&(c.z-=h)}return o.initialize=function(s){i=s},o.x=function(s){return arguments.length?(n=+s,o):n},o.y=function(s){return arguments.length?(e=+s,o):e},o.z=function(s){return arguments.length?(t=+s,o):t},o.strength=function(s){return arguments.length?(r=+s,o):r},o}function n0(n){const e=+this._x.call(null,n);return Hu(this.cover(e),e,n)}function Hu(n,e,t){if(isNaN(e))return n;var i,r=n._root,o={data:t},s=n._x0,a=n._x1,c,l,u,h,d;if(!r)return n._root=o,n;for(;r.length;)if((u=e>=(c=(s+a)/2))?s=c:a=c,i=r,!(r=r[h=+u]))return i[h]=o,n;if(l=+n._x.call(null,r.data),e===l)return o.next=r,i?i[h]=o:n._root=o,n;do i=i?i[h]=new Array(2):n._root=new Array(2),(u=e>=(c=(s+a)/2))?s=c:a=c;while((h=+u)==(d=+(l>=c)));return i[d]=r,i[h]=o,n}function i0(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e);let i=1/0,r=-1/0;for(let o=0,s;o<e;++o)isNaN(s=+this._x.call(null,n[o]))||(t[o]=s,s<i&&(i=s),s>r&&(r=s));if(i>r)return this;this.cover(i).cover(r);for(let o=0;o<e;++o)Hu(this,t[o],n[o]);return this}function r0(n){if(isNaN(n=+n))return this;var e=this._x0,t=this._x1;if(isNaN(e))t=(e=Math.floor(n))+1;else{for(var i=t-e||1,r=this._root,o,s;e>n||n>=t;)switch(s=+(n<e),o=new Array(2),o[s]=r,r=o,i*=2,s){case 0:t=e+i;break;case 1:e=t-i;break}this._root&&this._root.length&&(this._root=r)}return this._x0=e,this._x1=t,this}function o0(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function a0(n){return arguments.length?this.cover(+n[0][0]).cover(+n[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function En(n,e,t){this.node=n,this.x0=e,this.x1=t}function s0(n,e){var t,i=this._x0,r,o,s=this._x1,a=[],c=this._root,l,u;for(c&&a.push(new En(c,i,s)),e==null?e=1/0:(i=n-e,s=n+e);l=a.pop();)if(!(!(c=l.node)||(r=l.x0)>s||(o=l.x1)<i))if(c.length){var h=(r+o)/2;a.push(new En(c[1],h,o),new En(c[0],r,h)),(u=+(n>=h))&&(l=a[a.length-1],a[a.length-1]=a[a.length-1-u],a[a.length-1-u]=l)}else{var d=Math.abs(n-+this._x.call(null,c.data));d<e&&(e=d,i=n-d,s=n+d,t=c.data)}return t}function c0(n){if(isNaN(c=+this._x.call(null,n)))return this;var e,t=this._root,i,r,o,s=this._x0,a=this._x1,c,l,u,h,d;if(!t)return this;if(t.length)for(;;){if((u=c>=(l=(s+a)/2))?s=l:a=l,e=t,!(t=t[h=+u]))return this;if(!t.length)break;e[h+1&1]&&(i=e,d=h)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(o=t.next)&&delete t.next,r?(o?r.next=o:delete r.next,this):e?(o?e[h]=o:delete e[h],(t=e[0]||e[1])&&t===(e[1]||e[0])&&!t.length&&(i?i[d]=t:this._root=t),this):(this._root=o,this)}function l0(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function u0(){return this._root}function h0(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function f0(n){var e=[],t,i=this._root,r,o,s;for(i&&e.push(new En(i,this._x0,this._x1));t=e.pop();)if(!n(i=t.node,o=t.x0,s=t.x1)&&i.length){var a=(o+s)/2;(r=i[1])&&e.push(new En(r,a,s)),(r=i[0])&&e.push(new En(r,o,a))}return this}function d0(n){var e=[],t=[],i;for(this._root&&e.push(new En(this._root,this._x0,this._x1));i=e.pop();){var r=i.node;if(r.length){var o,s=i.x0,a=i.x1,c=(s+a)/2;(o=r[0])&&e.push(new En(o,s,c)),(o=r[1])&&e.push(new En(o,c,a))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.x1);return this}function p0(n){return n[0]}function m0(n){return arguments.length?(this._x=n,this):this._x}function Gu(n,e){var t=new ds(e??p0,NaN,NaN);return n==null?t:t.addAll(n)}function ds(n,e,t){this._x=n,this._x0=e,this._x1=t,this._root=void 0}function pl(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Ot=Gu.prototype=ds.prototype;Ot.copy=function(){var n=new ds(this._x,this._x0,this._x1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=pl(e),n;for(t=[{source:e,target:n._root=new Array(2)}];e=t.pop();)for(var r=0;r<2;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(2)}):e.target[r]=pl(i));return n};Ot.add=n0;Ot.addAll=i0;Ot.cover=r0;Ot.data=o0;Ot.extent=a0;Ot.find=s0;Ot.remove=c0;Ot.removeAll=l0;Ot.root=u0;Ot.size=h0;Ot.visit=f0;Ot.visitAfter=d0;Ot.x=m0;function g0(n){const e=+this._x.call(null,n),t=+this._y.call(null,n);return Vu(this.cover(e,t),e,t,n)}function Vu(n,e,t,i){if(isNaN(e)||isNaN(t))return n;var r,o=n._root,s={data:i},a=n._x0,c=n._y0,l=n._x1,u=n._y1,h,d,p,g,v,m,f,x;if(!o)return n._root=s,n;for(;o.length;)if((v=e>=(h=(a+l)/2))?a=h:l=h,(m=t>=(d=(c+u)/2))?c=d:u=d,r=o,!(o=o[f=m<<1|v]))return r[f]=s,n;if(p=+n._x.call(null,o.data),g=+n._y.call(null,o.data),e===p&&t===g)return s.next=o,r?r[f]=s:n._root=s,n;do r=r?r[f]=new Array(4):n._root=new Array(4),(v=e>=(h=(a+l)/2))?a=h:l=h,(m=t>=(d=(c+u)/2))?c=d:u=d;while((f=m<<1|v)===(x=(g>=d)<<1|p>=h));return r[x]=o,r[f]=s,n}function v0(n){var e,t,i=n.length,r,o,s=new Array(i),a=new Array(i),c=1/0,l=1/0,u=-1/0,h=-1/0;for(t=0;t<i;++t)isNaN(r=+this._x.call(null,e=n[t]))||isNaN(o=+this._y.call(null,e))||(s[t]=r,a[t]=o,r<c&&(c=r),r>u&&(u=r),o<l&&(l=o),o>h&&(h=o));if(c>u||l>h)return this;for(this.cover(c,l).cover(u,h),t=0;t<i;++t)Vu(this,s[t],a[t],n[t]);return this}function _0(n,e){if(isNaN(n=+n)||isNaN(e=+e))return this;var t=this._x0,i=this._y0,r=this._x1,o=this._y1;if(isNaN(t))r=(t=Math.floor(n))+1,o=(i=Math.floor(e))+1;else{for(var s=r-t||1,a=this._root,c,l;t>n||n>=r||i>e||e>=o;)switch(l=(e<i)<<1|n<t,c=new Array(4),c[l]=a,a=c,s*=2,l){case 0:r=t+s,o=i+s;break;case 1:t=r-s,o=i+s;break;case 2:r=t+s,i=o-s;break;case 3:t=r-s,i=o-s;break}this._root&&this._root.length&&(this._root=a)}return this._x0=t,this._y0=i,this._x1=r,this._y1=o,this}function y0(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function b0(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Rt(n,e,t,i,r){this.node=n,this.x0=e,this.y0=t,this.x1=i,this.y1=r}function x0(n,e,t){var i,r=this._x0,o=this._y0,s,a,c,l,u=this._x1,h=this._y1,d=[],p=this._root,g,v;for(p&&d.push(new Rt(p,r,o,u,h)),t==null?t=1/0:(r=n-t,o=e-t,u=n+t,h=e+t,t*=t);g=d.pop();)if(!(!(p=g.node)||(s=g.x0)>u||(a=g.y0)>h||(c=g.x1)<r||(l=g.y1)<o))if(p.length){var m=(s+c)/2,f=(a+l)/2;d.push(new Rt(p[3],m,f,c,l),new Rt(p[2],s,f,m,l),new Rt(p[1],m,a,c,f),new Rt(p[0],s,a,m,f)),(v=(e>=f)<<1|n>=m)&&(g=d[d.length-1],d[d.length-1]=d[d.length-1-v],d[d.length-1-v]=g)}else{var x=n-+this._x.call(null,p.data),_=e-+this._y.call(null,p.data),b=x*x+_*_;if(b<t){var y=Math.sqrt(t=b);r=n-y,o=e-y,u=n+y,h=e+y,i=p.data}}return i}function M0(n){if(isNaN(u=+this._x.call(null,n))||isNaN(h=+this._y.call(null,n)))return this;var e,t=this._root,i,r,o,s=this._x0,a=this._y0,c=this._x1,l=this._y1,u,h,d,p,g,v,m,f;if(!t)return this;if(t.length)for(;;){if((g=u>=(d=(s+c)/2))?s=d:c=d,(v=h>=(p=(a+l)/2))?a=p:l=p,e=t,!(t=t[m=v<<1|g]))return this;if(!t.length)break;(e[m+1&3]||e[m+2&3]||e[m+3&3])&&(i=e,f=m)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(o=t.next)&&delete t.next,r?(o?r.next=o:delete r.next,this):e?(o?e[m]=o:delete e[m],(t=e[0]||e[1]||e[2]||e[3])&&t===(e[3]||e[2]||e[1]||e[0])&&!t.length&&(i?i[f]=t:this._root=t),this):(this._root=o,this)}function S0(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function E0(){return this._root}function w0(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function T0(n){var e=[],t,i=this._root,r,o,s,a,c;for(i&&e.push(new Rt(i,this._x0,this._y0,this._x1,this._y1));t=e.pop();)if(!n(i=t.node,o=t.x0,s=t.y0,a=t.x1,c=t.y1)&&i.length){var l=(o+a)/2,u=(s+c)/2;(r=i[3])&&e.push(new Rt(r,l,u,a,c)),(r=i[2])&&e.push(new Rt(r,o,u,l,c)),(r=i[1])&&e.push(new Rt(r,l,s,a,u)),(r=i[0])&&e.push(new Rt(r,o,s,l,u))}return this}function A0(n){var e=[],t=[],i;for(this._root&&e.push(new Rt(this._root,this._x0,this._y0,this._x1,this._y1));i=e.pop();){var r=i.node;if(r.length){var o,s=i.x0,a=i.y0,c=i.x1,l=i.y1,u=(s+c)/2,h=(a+l)/2;(o=r[0])&&e.push(new Rt(o,s,a,u,h)),(o=r[1])&&e.push(new Rt(o,u,a,c,h)),(o=r[2])&&e.push(new Rt(o,s,h,u,l)),(o=r[3])&&e.push(new Rt(o,u,h,c,l))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.y0,i.x1,i.y1);return this}function R0(n){return n[0]}function C0(n){return arguments.length?(this._x=n,this):this._x}function P0(n){return n[1]}function L0(n){return arguments.length?(this._y=n,this):this._y}function Wu(n,e,t){var i=new ps(e??R0,t??P0,NaN,NaN,NaN,NaN);return n==null?i:i.addAll(n)}function ps(n,e,t,i,r,o){this._x=n,this._y=e,this._x0=t,this._y0=i,this._x1=r,this._y1=o,this._root=void 0}function ml(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Pt=Wu.prototype=ps.prototype;Pt.copy=function(){var n=new ps(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=ml(e),n;for(t=[{source:e,target:n._root=new Array(4)}];e=t.pop();)for(var r=0;r<4;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(4)}):e.target[r]=ml(i));return n};Pt.add=g0;Pt.addAll=v0;Pt.cover=_0;Pt.data=y0;Pt.extent=b0;Pt.find=x0;Pt.remove=M0;Pt.removeAll=S0;Pt.root=E0;Pt.size=w0;Pt.visit=T0;Pt.visitAfter=A0;Pt.x=C0;Pt.y=L0;function O0(n){const e=+this._x.call(null,n),t=+this._y.call(null,n),i=+this._z.call(null,n);return ju(this.cover(e,t,i),e,t,i,n)}function ju(n,e,t,i,r){if(isNaN(e)||isNaN(t)||isNaN(i))return n;var o,s=n._root,a={data:r},c=n._x0,l=n._y0,u=n._z0,h=n._x1,d=n._y1,p=n._z1,g,v,m,f,x,_,b,y,S,E,C;if(!s)return n._root=a,n;for(;s.length;)if((b=e>=(g=(c+h)/2))?c=g:h=g,(y=t>=(v=(l+d)/2))?l=v:d=v,(S=i>=(m=(u+p)/2))?u=m:p=m,o=s,!(s=s[E=S<<2|y<<1|b]))return o[E]=a,n;if(f=+n._x.call(null,s.data),x=+n._y.call(null,s.data),_=+n._z.call(null,s.data),e===f&&t===x&&i===_)return a.next=s,o?o[E]=a:n._root=a,n;do o=o?o[E]=new Array(8):n._root=new Array(8),(b=e>=(g=(c+h)/2))?c=g:h=g,(y=t>=(v=(l+d)/2))?l=v:d=v,(S=i>=(m=(u+p)/2))?u=m:p=m;while((E=S<<2|y<<1|b)===(C=(_>=m)<<2|(x>=v)<<1|f>=g));return o[C]=s,o[E]=a,n}function D0(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e),i=new Float64Array(e),r=new Float64Array(e);let o=1/0,s=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0;for(let h=0,d,p,g,v;h<e;++h)isNaN(p=+this._x.call(null,d=n[h]))||isNaN(g=+this._y.call(null,d))||isNaN(v=+this._z.call(null,d))||(t[h]=p,i[h]=g,r[h]=v,p<o&&(o=p),p>c&&(c=p),g<s&&(s=g),g>l&&(l=g),v<a&&(a=v),v>u&&(u=v));if(o>c||s>l||a>u)return this;this.cover(o,s,a).cover(c,l,u);for(let h=0;h<e;++h)ju(this,t[h],i[h],r[h],n[h]);return this}function I0(n,e,t){if(isNaN(n=+n)||isNaN(e=+e)||isNaN(t=+t))return this;var i=this._x0,r=this._y0,o=this._z0,s=this._x1,a=this._y1,c=this._z1;if(isNaN(i))s=(i=Math.floor(n))+1,a=(r=Math.floor(e))+1,c=(o=Math.floor(t))+1;else{for(var l=s-i||1,u=this._root,h,d;i>n||n>=s||r>e||e>=a||o>t||t>=c;)switch(d=(t<o)<<2|(e<r)<<1|n<i,h=new Array(8),h[d]=u,u=h,l*=2,d){case 0:s=i+l,a=r+l,c=o+l;break;case 1:i=s-l,a=r+l,c=o+l;break;case 2:s=i+l,r=a-l,c=o+l;break;case 3:i=s-l,r=a-l,c=o+l;break;case 4:s=i+l,a=r+l,o=c-l;break;case 5:i=s-l,a=r+l,o=c-l;break;case 6:s=i+l,r=a-l,o=c-l;break;case 7:i=s-l,r=a-l,o=c-l;break}this._root&&this._root.length&&(this._root=u)}return this._x0=i,this._y0=r,this._z0=o,this._x1=s,this._y1=a,this._z1=c,this}function N0(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function U0(n){return arguments.length?this.cover(+n[0][0],+n[0][1],+n[0][2]).cover(+n[1][0],+n[1][1],+n[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function Ze(n,e,t,i,r,o,s){this.node=n,this.x0=e,this.y0=t,this.z0=i,this.x1=r,this.y1=o,this.z1=s}function F0(n,e,t,i){var r,o=this._x0,s=this._y0,a=this._z0,c,l,u,h,d,p,g=this._x1,v=this._y1,m=this._z1,f=[],x=this._root,_,b;for(x&&f.push(new Ze(x,o,s,a,g,v,m)),i==null?i=1/0:(o=n-i,s=e-i,a=t-i,g=n+i,v=e+i,m=t+i,i*=i);_=f.pop();)if(!(!(x=_.node)||(c=_.x0)>g||(l=_.y0)>v||(u=_.z0)>m||(h=_.x1)<o||(d=_.y1)<s||(p=_.z1)<a))if(x.length){var y=(c+h)/2,S=(l+d)/2,E=(u+p)/2;f.push(new Ze(x[7],y,S,E,h,d,p),new Ze(x[6],c,S,E,y,d,p),new Ze(x[5],y,l,E,h,S,p),new Ze(x[4],c,l,E,y,S,p),new Ze(x[3],y,S,u,h,d,E),new Ze(x[2],c,S,u,y,d,E),new Ze(x[1],y,l,u,h,S,E),new Ze(x[0],c,l,u,y,S,E)),(b=(t>=E)<<2|(e>=S)<<1|n>=y)&&(_=f[f.length-1],f[f.length-1]=f[f.length-1-b],f[f.length-1-b]=_)}else{var C=n-+this._x.call(null,x.data),M=e-+this._y.call(null,x.data),T=t-+this._z.call(null,x.data),B=C*C+M*M+T*T;if(B<i){var G=Math.sqrt(i=B);o=n-G,s=e-G,a=t-G,g=n+G,v=e+G,m=t+G,r=x.data}}return r}function k0(n){if(isNaN(d=+this._x.call(null,n))||isNaN(p=+this._y.call(null,n))||isNaN(g=+this._z.call(null,n)))return this;var e,t=this._root,i,r,o,s=this._x0,a=this._y0,c=this._z0,l=this._x1,u=this._y1,h=this._z1,d,p,g,v,m,f,x,_,b,y,S;if(!t)return this;if(t.length)for(;;){if((x=d>=(v=(s+l)/2))?s=v:l=v,(_=p>=(m=(a+u)/2))?a=m:u=m,(b=g>=(f=(c+h)/2))?c=f:h=f,e=t,!(t=t[y=b<<2|_<<1|x]))return this;if(!t.length)break;(e[y+1&7]||e[y+2&7]||e[y+3&7]||e[y+4&7]||e[y+5&7]||e[y+6&7]||e[y+7&7])&&(i=e,S=y)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(o=t.next)&&delete t.next,r?(o?r.next=o:delete r.next,this):e?(o?e[y]=o:delete e[y],(t=e[0]||e[1]||e[2]||e[3]||e[4]||e[5]||e[6]||e[7])&&t===(e[7]||e[6]||e[5]||e[4]||e[3]||e[2]||e[1]||e[0])&&!t.length&&(i?i[S]=t:this._root=t),this):(this._root=o,this)}function B0(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function z0(){return this._root}function H0(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function G0(n){var e=[],t,i=this._root,r,o,s,a,c,l,u;for(i&&e.push(new Ze(i,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));t=e.pop();)if(!n(i=t.node,o=t.x0,s=t.y0,a=t.z0,c=t.x1,l=t.y1,u=t.z1)&&i.length){var h=(o+c)/2,d=(s+l)/2,p=(a+u)/2;(r=i[7])&&e.push(new Ze(r,h,d,p,c,l,u)),(r=i[6])&&e.push(new Ze(r,o,d,p,h,l,u)),(r=i[5])&&e.push(new Ze(r,h,s,p,c,d,u)),(r=i[4])&&e.push(new Ze(r,o,s,p,h,d,u)),(r=i[3])&&e.push(new Ze(r,h,d,a,c,l,p)),(r=i[2])&&e.push(new Ze(r,o,d,a,h,l,p)),(r=i[1])&&e.push(new Ze(r,h,s,a,c,d,p)),(r=i[0])&&e.push(new Ze(r,o,s,a,h,d,p))}return this}function V0(n){var e=[],t=[],i;for(this._root&&e.push(new Ze(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));i=e.pop();){var r=i.node;if(r.length){var o,s=i.x0,a=i.y0,c=i.z0,l=i.x1,u=i.y1,h=i.z1,d=(s+l)/2,p=(a+u)/2,g=(c+h)/2;(o=r[0])&&e.push(new Ze(o,s,a,c,d,p,g)),(o=r[1])&&e.push(new Ze(o,d,a,c,l,p,g)),(o=r[2])&&e.push(new Ze(o,s,p,c,d,u,g)),(o=r[3])&&e.push(new Ze(o,d,p,c,l,u,g)),(o=r[4])&&e.push(new Ze(o,s,a,g,d,p,h)),(o=r[5])&&e.push(new Ze(o,d,a,g,l,p,h)),(o=r[6])&&e.push(new Ze(o,s,p,g,d,u,h)),(o=r[7])&&e.push(new Ze(o,d,p,g,l,u,h))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.y0,i.z0,i.x1,i.y1,i.z1);return this}function W0(n){return n[0]}function j0(n){return arguments.length?(this._x=n,this):this._x}function X0(n){return n[1]}function $0(n){return arguments.length?(this._y=n,this):this._y}function q0(n){return n[2]}function Y0(n){return arguments.length?(this._z=n,this):this._z}function Xu(n,e,t,i){var r=new ms(e??W0,t??X0,i??q0,NaN,NaN,NaN,NaN,NaN,NaN);return n==null?r:r.addAll(n)}function ms(n,e,t,i,r,o,s,a,c){this._x=n,this._y=e,this._z=t,this._x0=i,this._y0=r,this._z0=o,this._x1=s,this._y1=a,this._z1=c,this._root=void 0}function gl(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Mt=Xu.prototype=ms.prototype;Mt.copy=function(){var n=new ms(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=gl(e),n;for(t=[{source:e,target:n._root=new Array(8)}];e=t.pop();)for(var r=0;r<8;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(8)}):e.target[r]=gl(i));return n};Mt.add=O0;Mt.addAll=D0;Mt.cover=I0;Mt.data=N0;Mt.extent=U0;Mt.find=F0;Mt.remove=k0;Mt.removeAll=B0;Mt.root=z0;Mt.size=H0;Mt.visit=G0;Mt.visitAfter=V0;Mt.x=j0;Mt.y=$0;Mt.z=Y0;function Mn(n){return function(){return n}}function yn(n){return(n()-.5)*1e-6}function K0(n){return n.index}function vl(n,e){var t=n.get(e);if(!t)throw new Error("node not found: "+e);return t}function Z0(n){var e=K0,t=d,i,r=Mn(30),o,s,a,c,l,u,h=1;n==null&&(n=[]);function d(f){return 1/Math.min(c[f.source.index],c[f.target.index])}function p(f){for(var x=0,_=n.length;x<h;++x)for(var b=0,y,S,E,C=0,M=0,T=0,B,G;b<_;++b)y=n[b],S=y.source,E=y.target,C=E.x+E.vx-S.x-S.vx||yn(u),a>1&&(M=E.y+E.vy-S.y-S.vy||yn(u)),a>2&&(T=E.z+E.vz-S.z-S.vz||yn(u)),B=Math.sqrt(C*C+M*M+T*T),B=(B-o[b])/B*f*i[b],C*=B,M*=B,T*=B,E.vx-=C*(G=l[b]),a>1&&(E.vy-=M*G),a>2&&(E.vz-=T*G),S.vx+=C*(G=1-G),a>1&&(S.vy+=M*G),a>2&&(S.vz+=T*G)}function g(){if(s){var f,x=s.length,_=n.length,b=new Map(s.map((S,E)=>[e(S,E,s),S])),y;for(f=0,c=new Array(x);f<_;++f)y=n[f],y.index=f,typeof y.source!="object"&&(y.source=vl(b,y.source)),typeof y.target!="object"&&(y.target=vl(b,y.target)),c[y.source.index]=(c[y.source.index]||0)+1,c[y.target.index]=(c[y.target.index]||0)+1;for(f=0,l=new Array(_);f<_;++f)y=n[f],l[f]=c[y.source.index]/(c[y.source.index]+c[y.target.index]);i=new Array(_),v(),o=new Array(_),m()}}function v(){if(s)for(var f=0,x=n.length;f<x;++f)i[f]=+t(n[f],f,n)}function m(){if(s)for(var f=0,x=n.length;f<x;++f)o[f]=+r(n[f],f,n)}return p.initialize=function(f,...x){s=f,u=x.find(_=>typeof _=="function")||Math.random,a=x.find(_=>[1,2,3].includes(_))||2,g()},p.links=function(f){return arguments.length?(n=f,g(),p):n},p.id=function(f){return arguments.length?(e=f,p):e},p.iterations=function(f){return arguments.length?(h=+f,p):h},p.strength=function(f){return arguments.length?(t=typeof f=="function"?f:Mn(+f),v(),p):t},p.distance=function(f){return arguments.length?(r=typeof f=="function"?f:Mn(+f),m(),p):r},p}var J0={value:()=>{}};function $u(){for(var n=0,e=arguments.length,t={},i;n<e;++n){if(!(i=arguments[n]+"")||i in t||/[\s.]/.test(i))throw new Error("illegal type: "+i);t[i]=[]}return new qr(t)}function qr(n){this._=n}function Q0(n,e){return n.trim().split(/^|\s+/).map(function(t){var i="",r=t.indexOf(".");if(r>=0&&(i=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:i}})}qr.prototype=$u.prototype={constructor:qr,on:function(n,e){var t=this._,i=Q0(n+"",t),r,o=-1,s=i.length;if(arguments.length<2){for(;++o<s;)if((r=(n=i[o]).type)&&(r=ey(t[r],n.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<s;)if(r=(n=i[o]).type)t[r]=_l(t[r],n.name,e);else if(e==null)for(r in t)t[r]=_l(t[r],n.name,null);return this},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new qr(n)},call:function(n,e){if((r=arguments.length-2)>0)for(var t=new Array(r),i=0,r,o;i<r;++i)t[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(o=this._[n],i=0,r=o.length;i<r;++i)o[i].value.apply(e,t)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var i=this._[n],r=0,o=i.length;r<o;++r)i[r].value.apply(e,t)}};function ey(n,e){for(var t=0,i=n.length,r;t<i;++t)if((r=n[t]).name===e)return r.value}function _l(n,e,t){for(var i=0,r=n.length;i<r;++i)if(n[i].name===e){n[i]=J0,n=n.slice(0,i).concat(n.slice(i+1));break}return t!=null&&n.push({name:e,value:t}),n}var Ii=0,Ji=0,ji=0,qu=1e3,ro,Qi,oo=0,ti=0,bo=0,ur=typeof performance=="object"&&performance.now?performance:Date,Yu=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Ku(){return ti||(Yu(ty),ti=ur.now()+bo)}function ty(){ti=0}function Ua(){this._call=this._time=this._next=null}Ua.prototype=Zu.prototype={constructor:Ua,restart:function(n,e,t){if(typeof n!="function")throw new TypeError("callback is not a function");t=(t==null?Ku():+t)+(e==null?0:+e),!this._next&&Qi!==this&&(Qi?Qi._next=this:ro=this,Qi=this),this._call=n,this._time=t,Fa()},stop:function(){this._call&&(this._call=null,this._time=1/0,Fa())}};function Zu(n,e,t){var i=new Ua;return i.restart(n,e,t),i}function ny(){Ku(),++Ii;for(var n=ro,e;n;)(e=ti-n._time)>=0&&n._call.call(void 0,e),n=n._next;--Ii}function yl(){ti=(oo=ur.now())+bo,Ii=Ji=0;try{ny()}finally{Ii=0,ry(),ti=0}}function iy(){var n=ur.now(),e=n-oo;e>qu&&(bo-=e,oo=n)}function ry(){for(var n,e=ro,t,i=1/0;e;)e._call?(i>e._time&&(i=e._time),n=e,e=e._next):(t=e._next,e._next=null,e=n?n._next=t:ro=t);Qi=n,Fa(i)}function Fa(n){if(!Ii){Ji&&(Ji=clearTimeout(Ji));var e=n-ti;e>24?(n<1/0&&(Ji=setTimeout(yl,n-ur.now()-bo)),ji&&(ji=clearInterval(ji))):(ji||(oo=ur.now(),ji=setInterval(iy,qu)),Ii=1,Yu(yl))}}const oy=1664525,ay=1013904223,bl=4294967296;function sy(){let n=1;return()=>(n=(oy*n+ay)%bl)/bl}var xl=3;function ua(n){return n.x}function Ml(n){return n.y}function cy(n){return n.z}var ly=10,uy=Math.PI*(3-Math.sqrt(5)),hy=Math.PI*20/(9+Math.sqrt(221));function fy(n,e){e=e||2;var t=Math.min(xl,Math.max(1,Math.round(e))),i,r=1,o=.001,s=1-Math.pow(o,1/300),a=0,c=.6,l=new Map,u=Zu(p),h=$u("tick","end"),d=sy();n==null&&(n=[]);function p(){g(),h.call("tick",i),r<o&&(u.stop(),h.call("end",i))}function g(f){var x,_=n.length,b;f===void 0&&(f=1);for(var y=0;y<f;++y)for(r+=(a-r)*s,l.forEach(function(S){S(r)}),x=0;x<_;++x)b=n[x],b.fx==null?b.x+=b.vx*=c:(b.x=b.fx,b.vx=0),t>1&&(b.fy==null?b.y+=b.vy*=c:(b.y=b.fy,b.vy=0)),t>2&&(b.fz==null?b.z+=b.vz*=c:(b.z=b.fz,b.vz=0));return i}function v(){for(var f=0,x=n.length,_;f<x;++f){if(_=n[f],_.index=f,_.fx!=null&&(_.x=_.fx),_.fy!=null&&(_.y=_.fy),_.fz!=null&&(_.z=_.fz),isNaN(_.x)||t>1&&isNaN(_.y)||t>2&&isNaN(_.z)){var b=ly*(t>2?Math.cbrt(.5+f):t>1?Math.sqrt(.5+f):f),y=f*uy,S=f*hy;t===1?_.x=b:t===2?(_.x=b*Math.cos(y),_.y=b*Math.sin(y)):(_.x=b*Math.sin(y)*Math.cos(S),_.y=b*Math.cos(y),_.z=b*Math.sin(y)*Math.sin(S))}(isNaN(_.vx)||t>1&&isNaN(_.vy)||t>2&&isNaN(_.vz))&&(_.vx=0,t>1&&(_.vy=0),t>2&&(_.vz=0))}}function m(f){return f.initialize&&f.initialize(n,d,t),f}return v(),i={tick:g,restart:function(){return u.restart(p),i},stop:function(){return u.stop(),i},numDimensions:function(f){return arguments.length?(t=Math.min(xl,Math.max(1,Math.round(f))),l.forEach(m),i):t},nodes:function(f){return arguments.length?(n=f,v(),l.forEach(m),i):n},alpha:function(f){return arguments.length?(r=+f,i):r},alphaMin:function(f){return arguments.length?(o=+f,i):o},alphaDecay:function(f){return arguments.length?(s=+f,i):+s},alphaTarget:function(f){return arguments.length?(a=+f,i):a},velocityDecay:function(f){return arguments.length?(c=1-f,i):1-c},randomSource:function(f){return arguments.length?(d=f,l.forEach(m),i):d},force:function(f,x){return arguments.length>1?(x==null?l.delete(f):l.set(f,m(x)),i):l.get(f)},find:function(){var f=Array.prototype.slice.call(arguments),x=f.shift()||0,_=(t>1?f.shift():null)||0,b=(t>2?f.shift():null)||0,y=f.shift()||1/0,S=0,E=n.length,C,M,T,B,G,J;for(y*=y,S=0;S<E;++S)G=n[S],C=x-G.x,M=_-(G.y||0),T=b-(G.z||0),B=C*C+M*M+T*T,B<y&&(J=G,y=B);return J},on:function(f,x){return arguments.length>1?(h.on(f,x),i):h.on(f)}}}function dy(){var n,e,t,i,r,o=Mn(-30),s,a=1,c=1/0,l=.81;function u(g){var v,m=n.length,f=(e===1?Gu(n,ua):e===2?Wu(n,ua,Ml):e===3?Xu(n,ua,Ml,cy):null).visitAfter(d);for(r=g,v=0;v<m;++v)t=n[v],f.visit(p)}function h(){if(n){var g,v=n.length,m;for(s=new Array(v),g=0;g<v;++g)m=n[g],s[m.index]=+o(m,g,n)}}function d(g){var v=0,m,f,x=0,_,b,y,S,E=g.length;if(E){for(_=b=y=S=0;S<E;++S)(m=g[S])&&(f=Math.abs(m.value))&&(v+=m.value,x+=f,_+=f*(m.x||0),b+=f*(m.y||0),y+=f*(m.z||0));v*=Math.sqrt(4/E),g.x=_/x,e>1&&(g.y=b/x),e>2&&(g.z=y/x)}else{m=g,m.x=m.data.x,e>1&&(m.y=m.data.y),e>2&&(m.z=m.data.z);do v+=s[m.data.index];while(m=m.next)}g.value=v}function p(g,v,m,f,x){if(!g.value)return!0;var _=[m,f,x][e-1],b=g.x-t.x,y=e>1?g.y-t.y:0,S=e>2?g.z-t.z:0,E=_-v,C=b*b+y*y+S*S;if(E*E/l<C)return C<c&&(b===0&&(b=yn(i),C+=b*b),e>1&&y===0&&(y=yn(i),C+=y*y),e>2&&S===0&&(S=yn(i),C+=S*S),C<a&&(C=Math.sqrt(a*C)),t.vx+=b*g.value*r/C,e>1&&(t.vy+=y*g.value*r/C),e>2&&(t.vz+=S*g.value*r/C)),!0;if(g.length||C>=c)return;(g.data!==t||g.next)&&(b===0&&(b=yn(i),C+=b*b),e>1&&y===0&&(y=yn(i),C+=y*y),e>2&&S===0&&(S=yn(i),C+=S*S),C<a&&(C=Math.sqrt(a*C)));do g.data!==t&&(E=s[g.data.index]*r/C,t.vx+=b*E,e>1&&(t.vy+=y*E),e>2&&(t.vz+=S*E));while(g=g.next)}return u.initialize=function(g,...v){n=g,i=v.find(m=>typeof m=="function")||Math.random,e=v.find(m=>[1,2,3].includes(m))||2,h()},u.strength=function(g){return arguments.length?(o=typeof g=="function"?g:Mn(+g),h(),u):o},u.distanceMin=function(g){return arguments.length?(a=g*g,u):Math.sqrt(a)},u.distanceMax=function(g){return arguments.length?(c=g*g,u):Math.sqrt(c)},u.theta=function(g){return arguments.length?(l=g*g,u):Math.sqrt(l)},u}function py(n,e,t,i){var r,o,s=Mn(.1),a,c;typeof n!="function"&&(n=Mn(+n)),e==null&&(e=0),t==null&&(t=0),i==null&&(i=0);function l(h){for(var d=0,p=r.length;d<p;++d){var g=r[d],v=g.x-e||1e-6,m=(g.y||0)-t||1e-6,f=(g.z||0)-i||1e-6,x=Math.sqrt(v*v+m*m+f*f),_=(c[d]-x)*a[d]*h/x;g.vx+=v*_,o>1&&(g.vy+=m*_),o>2&&(g.vz+=f*_)}}function u(){if(r){var h,d=r.length;for(a=new Array(d),c=new Array(d),h=0;h<d;++h)c[h]=+n(r[h],h,r),a[h]=isNaN(c[h])?0:+s(r[h],h,r)}}return l.initialize=function(h,...d){r=h,o=d.find(p=>[1,2,3].includes(p))||2,u()},l.strength=function(h){return arguments.length?(s=typeof h=="function"?h:Mn(+h),u(),l):s},l.radius=function(h){return arguments.length?(n=typeof h=="function"?h:Mn(+h),u(),l):n},l.x=function(h){return arguments.length?(e=+h,l):e},l.y=function(h){return arguments.length?(t=+h,l):t},l.z=function(h){return arguments.length?(i=+h,l):i},l}var gs=function(e){gy(e);var t=my(e);return e.on=t.on,e.off=t.off,e.fire=t.fire,e};function my(n){var e=Object.create(null);return{on:function(t,i,r){if(typeof i!="function")throw new Error("callback is expected to be a function");var o=e[t];return o||(o=e[t]=[]),o.push({callback:i,ctx:r}),n},off:function(t,i){var r=typeof t>"u";if(r)return e=Object.create(null),n;if(e[t]){var o=typeof i!="function";if(o)delete e[t];else for(var s=e[t],a=0;a<s.length;++a)s[a].callback===i&&s.splice(a,1)}return n},fire:function(t){var i=e[t];if(!i)return n;var r;arguments.length>1&&(r=Array.prototype.splice.call(arguments,1));for(var o=0;o<i.length;++o){var s=i[o];s.callback.apply(s.ctx,r)}return n}}}function gy(n){if(!n)throw new Error("Eventify cannot use falsy object as events subject");for(var e=["on","fire","off"],t=0;t<e.length;++t)if(n.hasOwnProperty(e[t]))throw new Error("Subject cannot be eventified, since it already has property '"+e[t]+"'")}var vy=yy,_y=gs;function yy(n){if(n=n||{},"uniqueLinkId"in n&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`),n.multigraph=n.uniqueLinkId),n.multigraph===void 0&&(n.multigraph=!1),typeof Map!="function")throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");var e=new Map,t=new Map,i={},r=0,o=n.multigraph?b:_,s=[],a=U,c=U,l=U,u=U,h={version:20,addNode:v,addLink:x,removeLink:C,removeNode:f,getNode:m,getNodeCount:y,getLinkCount:S,getEdgeCount:S,getLinksCount:S,getNodesCount:y,getLinks:E,forEachNode:te,forEachLinkedNode:J,forEachLink:G,beginUpdate:l,endUpdate:u,clear:B,hasLink:T,hasNode:m,getLink:T};return _y(h),d(),h;function d(){var H=h.on;h.on=O;function O(){return h.beginUpdate=l=X,h.endUpdate=u=ie,a=p,c=g,h.on=H,H.apply(h,arguments)}}function p(H,O){s.push({link:H,changeType:O})}function g(H,O){s.push({node:H,changeType:O})}function v(H,O){if(H===void 0)throw new Error("Invalid node identifier");l();var W=m(H);return W?(W.data=O,c(W,"update")):(W=new by(H,O),c(W,"add")),e.set(H,W),u(),W}function m(H){return e.get(H)}function f(H){var O=m(H);if(!O)return!1;l();var W=O.links;return W&&(W.forEach(M),O.links=null),e.delete(H),c(O,"remove"),u(),!0}function x(H,O,W){l();var oe=m(H)||v(H),Q=m(O)||v(O),j=o(H,O,W),re=t.has(j.id);return t.set(j.id,j),Sl(oe,j),H!==O&&Sl(Q,j),a(j,re?"update":"add"),u(),j}function _(H,O,W){var oe=Gr(H,O),Q=t.get(oe);return Q?(Q.data=W,Q):new El(H,O,W,oe)}function b(H,O,W){var oe=Gr(H,O),Q=i.hasOwnProperty(oe);if(Q||T(H,O)){Q||(i[oe]=0);var j="@"+ ++i[oe];oe=Gr(H+j,O+j)}return new El(H,O,W,oe)}function y(){return e.size}function S(){return t.size}function E(H){var O=m(H);return O?O.links:null}function C(H,O){return O!==void 0&&(H=T(H,O)),M(H)}function M(H){if(!H||!t.get(H.id))return!1;l(),t.delete(H.id);var O=m(H.fromId),W=m(H.toId);return O&&O.links.delete(H),W&&W.links.delete(H),a(H,"remove"),u(),!0}function T(H,O){if(!(H===void 0||O===void 0))return t.get(Gr(H,O))}function B(){l(),te(function(H){f(H.id)}),u()}function G(H){if(typeof H=="function")for(var O=t.values(),W=O.next();!W.done;){if(H(W.value))return!0;W=O.next()}}function J(H,O,W){var oe=m(H);if(oe&&oe.links&&typeof O=="function")return W?L(oe.links,H,O):R(oe.links,H,O)}function R(H,O,W){for(var oe,Q=H.values(),j=Q.next();!j.done;){var re=j.value,k=re.fromId===O?re.toId:re.fromId;if(oe=W(e.get(k),re),oe)return!0;j=Q.next()}}function L(H,O,W){for(var oe,Q=H.values(),j=Q.next();!j.done;){var re=j.value;if(re.fromId===O&&(oe=W(e.get(re.toId),re),oe))return!0;j=Q.next()}}function U(){}function X(){r+=1}function ie(){r-=1,r===0&&s.length>0&&(h.fire("changed",s),s.length=0)}function te(H){if(typeof H!="function")throw new Error("Function is expected to iterate over graph nodes. You passed "+H);for(var O=e.values(),W=O.next();!W.done;){if(H(W.value))return!0;W=O.next()}}}function by(n,e){this.id=n,this.links=null,this.data=e}function Sl(n,e){n.links?n.links.add(e):n.links=new Set([e])}function El(n,e,t,i){this.fromId=n,this.toId=e,this.data=t,this.id=i}function Gr(n,e){return n.toString()+"👉 "+e.toString()}const xy=Ka(vy);var vs={exports:{}},dr={exports:{}},Ju=function(e){return e===0?"x":e===1?"y":e===2?"z":"c"+(e+1)};const My=Ju;var ki=function(e){return t;function t(i,r){let o=r&&r.indent||0,s=r&&r.join!==void 0?r.join:`
`,a=Array(o+1).join(" "),c=[];for(let l=0;l<e;++l){let u=My(l),h=l===0?"":a;c.push(h+i.replace(/{var}/g,u))}return c.join(s)}};const Qu=ki;dr.exports=Sy;dr.exports.generateCreateBodyFunctionBody=eh;dr.exports.getVectorCode=nh;dr.exports.getBodyCode=th;function Sy(n,e){let t=eh(n,e),{Body:i}=new Function(t)();return i}function eh(n,e){return`
${nh(n,e)}
${th(n)}
return {Body: Body, Vector: Vector};
`}function th(n){let e=Qu(n),t=e("{var}",{join:", "});return`
function Body(${t}) {
  this.isPinned = false;
  this.pos = new Vector(${t});
  this.force = new Vector();
  this.velocity = new Vector();
  this.mass = 1;

  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.reset = function() {
  this.force.reset();
  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.setPosition = function (${t}) {
  ${e("this.pos.{var} = {var} || 0;",{indent:2})}
};`}function nh(n,e){let t=Qu(n),i="";return e&&(i=`${t(`
   var v{var};
Object.defineProperty(this, '{var}', {
  set: function(v) { 
    if (!Number.isFinite(v)) throw new Error('Cannot set non-numbers to {var}');
    v{var} = v; 
  },
  get: function() { return v{var}; }
});`)}`),`function Vector(${t("{var}",{join:", "})}) {
  ${i}
    if (typeof arguments[0] === 'object') {
      // could be another vector
      let v = arguments[0];
      ${t('if (!Number.isFinite(v.{var})) throw new Error("Expected value is not a finite number at Vector constructor ({var})");',{indent:4})}
      ${t("this.{var} = v.{var};",{indent:4})}
    } else {
      ${t('this.{var} = typeof {var} === "number" ? {var} : 0;',{indent:4})}
    }
  }
  
  Vector.prototype.reset = function () {
    ${t("this.{var} = ",{join:""})}0;
  };`}var Ey=dr.exports,Hn={exports:{}};const _s=ki,In=Ju;Hn.exports=wy;Hn.exports.generateQuadTreeFunctionBody=ih;Hn.exports.getInsertStackCode=ch;Hn.exports.getQuadNodeCode=sh;Hn.exports.isSamePosition=rh;Hn.exports.getChildBodyCode=ah;Hn.exports.setChildBodyCode=oh;function wy(n){let e=ih(n);return new Function(e)()}function ih(n){let e=_s(n),t=Math.pow(2,n);return`
${ch()}
${sh(n)}
${rh(n)}
${ah(n)}
${oh(n)}

function createQuadTree(options, random) {
  options = options || {};
  options.gravity = typeof options.gravity === 'number' ? options.gravity : -1;
  options.theta = typeof options.theta === 'number' ? options.theta : 0.8;

  var gravity = options.gravity;
  var updateQueue = [];
  var insertStack = new InsertStack();
  var theta = options.theta;

  var nodesCache = [];
  var currentInCache = 0;
  var root = newNode();

  return {
    insertBodies: insertBodies,

    /**
     * Gets root node if it is present
     */
    getRoot: function() {
      return root;
    },

    updateBodyForce: update,

    options: function(newOptions) {
      if (newOptions) {
        if (typeof newOptions.gravity === 'number') {
          gravity = newOptions.gravity;
        }
        if (typeof newOptions.theta === 'number') {
          theta = newOptions.theta;
        }

        return this;
      }

      return {
        gravity: gravity,
        theta: theta
      };
    }
  };

  function newNode() {
    // To avoid pressure on GC we reuse nodes.
    var node = nodesCache[currentInCache];
    if (node) {
${s("      node.")}
      node.body = null;
      node.mass = ${e("node.mass_{var} = ",{join:""})}0;
      ${e("node.min_{var} = node.max_{var} = ",{join:""})}0;
    } else {
      node = new QuadNode();
      nodesCache[currentInCache] = node;
    }

    ++currentInCache;
    return node;
  }

  function update(sourceBody) {
    var queue = updateQueue;
    var v;
    ${e("var d{var};",{indent:4})}
    var r; 
    ${e("var f{var} = 0;",{indent:4})}
    var queueLength = 1;
    var shiftIdx = 0;
    var pushIdx = 1;

    queue[0] = root;

    while (queueLength) {
      var node = queue[shiftIdx];
      var body = node.body;

      queueLength -= 1;
      shiftIdx += 1;
      var differentBody = (body !== sourceBody);
      if (body && differentBody) {
        // If the current node is a leaf node (and it is not source body),
        // calculate the force exerted by the current node on body, and add this
        // amount to body's net force.
        ${e("d{var} = body.pos.{var} - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Poor man's protection against zero distance.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }

        // This is standard gravitation force calculation but we divide
        // by r^3 to save two operations when normalizing force vector.
        v = gravity * body.mass * sourceBody.mass / (r * r * r);
        ${e("f{var} += v * d{var};",{indent:8})}
      } else if (differentBody) {
        // Otherwise, calculate the ratio s / r,  where s is the width of the region
        // represented by the internal node, and r is the distance between the body
        // and the node's center-of-mass
        ${e("d{var} = node.mass_{var} / node.mass - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Sorry about code duplication. I don't want to create many functions
          // right away. Just want to see performance first.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }
        // If s / r < θ, treat this internal node as a single body, and calculate the
        // force it exerts on sourceBody, and add this amount to sourceBody's net force.
        if ((node.max_${In(0)} - node.min_${In(0)}) / r < theta) {
          // in the if statement above we consider node's width only
          // because the region was made into square during tree creation.
          // Thus there is no difference between using width or height.
          v = gravity * node.mass * sourceBody.mass / (r * r * r);
          ${e("f{var} += v * d{var};",{indent:10})}
        } else {
          // Otherwise, run the procedure recursively on each of the current node's children.

          // I intentionally unfolded this loop, to save several CPU cycles.
${o()}
        }
      }
    }

    ${e("sourceBody.force.{var} += f{var};",{indent:4})}
  }

  function insertBodies(bodies) {
    ${e("var {var}min = Number.MAX_VALUE;",{indent:4})}
    ${e("var {var}max = Number.MIN_VALUE;",{indent:4})}
    var i = bodies.length;

    // To reduce quad tree depth we are looking for exact bounding box of all particles.
    while (i--) {
      var pos = bodies[i].pos;
      ${e("if (pos.{var} < {var}min) {var}min = pos.{var};",{indent:6})}
      ${e("if (pos.{var} > {var}max) {var}max = pos.{var};",{indent:6})}
    }

    // Makes the bounds square.
    var maxSideLength = -Infinity;
    ${e("if ({var}max - {var}min > maxSideLength) maxSideLength = {var}max - {var}min ;",{indent:4})}

    currentInCache = 0;
    root = newNode();
    ${e("root.min_{var} = {var}min;",{indent:4})}
    ${e("root.max_{var} = {var}min + maxSideLength;",{indent:4})}

    i = bodies.length - 1;
    if (i >= 0) {
      root.body = bodies[i];
    }
    while (i--) {
      insert(bodies[i], root);
    }
  }

  function insert(newBody) {
    insertStack.reset();
    insertStack.push(root, newBody);

    while (!insertStack.isEmpty()) {
      var stackItem = insertStack.pop();
      var node = stackItem.node;
      var body = stackItem.body;

      if (!node.body) {
        // This is internal node. Update the total mass of the node and center-of-mass.
        ${e("var {var} = body.pos.{var};",{indent:8})}
        node.mass += body.mass;
        ${e("node.mass_{var} += body.mass * {var};",{indent:8})}

        // Recursively insert the body in the appropriate quadrant.
        // But first find the appropriate quadrant.
        var quadIdx = 0; // Assume we are in the 0's quad.
        ${e("var min_{var} = node.min_{var};",{indent:8})}
        ${e("var max_{var} = (min_{var} + node.max_{var}) / 2;",{indent:8})}

${r(8)}

        var child = getChild(node, quadIdx);

        if (!child) {
          // The node is internal but this quadrant is not taken. Add
          // subnode to it.
          child = newNode();
          ${e("child.min_{var} = min_{var};",{indent:10})}
          ${e("child.max_{var} = max_{var};",{indent:10})}
          child.body = body;

          setChild(node, quadIdx, child);
        } else {
          // continue searching in this quadrant.
          insertStack.push(child, body);
        }
      } else {
        // We are trying to add to the leaf node.
        // We have to convert current leaf into internal node
        // and continue adding two nodes.
        var oldBody = node.body;
        node.body = null; // internal nodes do not cary bodies

        if (isSamePosition(oldBody.pos, body.pos)) {
          // Prevent infinite subdivision by bumping one node
          // anywhere in this quadrant
          var retriesCount = 3;
          do {
            var offset = random.nextDouble();
            ${e("var d{var} = (node.max_{var} - node.min_{var}) * offset;",{indent:12})}

            ${e("oldBody.pos.{var} = node.min_{var} + d{var};",{indent:12})}
            retriesCount -= 1;
            // Make sure we don't bump it out of the box. If we do, next iteration should fix it
          } while (retriesCount > 0 && isSamePosition(oldBody.pos, body.pos));

          if (retriesCount === 0 && isSamePosition(oldBody.pos, body.pos)) {
            // This is very bad, we ran out of precision.
            // if we do not return from the method we'll get into
            // infinite loop here. So we sacrifice correctness of layout, and keep the app running
            // Next layout iteration should get larger bounding box in the first step and fix this
            return;
          }
        }
        // Next iteration should subdivide node further.
        insertStack.push(node, oldBody);
        insertStack.push(node, body);
      }
    }
  }
}
return createQuadTree;

`;function r(a){let c=[],l=Array(a+1).join(" ");for(let u=0;u<n;++u)c.push(l+`if (${In(u)} > max_${In(u)}) {`),c.push(l+`  quadIdx = quadIdx + ${Math.pow(2,u)};`),c.push(l+`  min_${In(u)} = max_${In(u)};`),c.push(l+`  max_${In(u)} = node.max_${In(u)};`),c.push(l+"}");return c.join(`
`)}function o(){let a=Array(11).join(" "),c=[];for(let l=0;l<t;++l)c.push(a+`if (node.quad${l}) {`),c.push(a+`  queue[pushIdx] = node.quad${l};`),c.push(a+"  queueLength += 1;"),c.push(a+"  pushIdx += 1;"),c.push(a+"}");return c.join(`
`)}function s(a){let c=[];for(let l=0;l<t;++l)c.push(`${a}quad${l} = null;`);return c.join(`
`)}}function rh(n){let e=_s(n);return`
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${e("d{var} < 1e-8",{join:" && "})};
  }  
`}function oh(n){var e=Math.pow(2,n);return`
function setChild(node, idx, child) {
  ${t()}
}`;function t(){let i=[];for(let r=0;r<e;++r){let o=r===0?"  ":"  else ";i.push(`${o}if (idx === ${r}) node.quad${r} = child;`)}return i.join(`
`)}}function ah(n){return`function getChild(node, idx) {
${e()}
  return null;
}`;function e(){let t=[],i=Math.pow(2,n);for(let r=0;r<i;++r)t.push(`  if (idx === ${r}) return node.quad${r};`);return t.join(`
`)}}function sh(n){let e=_s(n),t=Math.pow(2,n);var i=`
function QuadNode() {
  // body stored inside this node. In quad tree only leaf nodes (by construction)
  // contain bodies:
  this.body = null;

  // Child nodes are stored in quads. Each quad is presented by number:
  // 0 | 1
  // -----
  // 2 | 3
${r("  this.")}

  // Total mass of current node
  this.mass = 0;

  // Center of mass coordinates
  ${e("this.mass_{var} = 0;",{indent:2})}

  // bounding box coordinates
  ${e("this.min_{var} = 0;",{indent:2})}
  ${e("this.max_{var} = 0;",{indent:2})}
}
`;return i;function r(o){let s=[];for(let a=0;a<t;++a)s.push(`${o}quad${a} = null;`);return s.join(`
`)}}function ch(){return`
/**
 * Our implementation of QuadTree is non-recursive to avoid GC hit
 * This data structure represent stack of elements
 * which we are trying to insert into quad tree.
 */
function InsertStack () {
    this.stack = [];
    this.popIdx = 0;
}

InsertStack.prototype = {
    isEmpty: function() {
        return this.popIdx === 0;
    },
    push: function (node, body) {
        var item = this.stack[this.popIdx];
        if (!item) {
            // we are trying to avoid memory pressure: create new element
            // only when absolutely necessary
            this.stack[this.popIdx] = new InsertStackElement(node, body);
        } else {
            item.node = node;
            item.body = body;
        }
        ++this.popIdx;
    },
    pop: function () {
        if (this.popIdx > 0) {
            return this.stack[--this.popIdx];
        }
    },
    reset: function () {
        this.popIdx = 0;
    }
};

function InsertStackElement(node, body) {
    this.node = node; // QuadTree node
    this.body = body; // physical body which needs to be inserted to node
}
`}var Ty=Hn.exports,ys={exports:{}};ys.exports=Ry;ys.exports.generateFunctionBody=lh;const Ay=ki;function Ry(n){let e=lh(n);return new Function("bodies","settings","random",e)}function lh(n){let e=Ay(n);return`
  var boundingBox = {
    ${e("min_{var}: 0, max_{var}: 0,",{indent:4})}
  };

  return {
    box: boundingBox,

    update: updateBoundingBox,

    reset: resetBoundingBox,

    getBestNewPosition: function (neighbors) {
      var ${e("base_{var} = 0",{join:", "})};

      if (neighbors.length) {
        for (var i = 0; i < neighbors.length; ++i) {
          let neighborPos = neighbors[i].pos;
          ${e("base_{var} += neighborPos.{var};",{indent:10})}
        }

        ${e("base_{var} /= neighbors.length;",{indent:8})}
      } else {
        ${e("base_{var} = (boundingBox.min_{var} + boundingBox.max_{var}) / 2;",{indent:8})}
      }

      var springLength = settings.springLength;
      return {
        ${e("{var}: base_{var} + (random.nextDouble() - 0.5) * springLength,",{indent:8})}
      };
    }
  };

  function updateBoundingBox() {
    var i = bodies.length;
    if (i === 0) return; // No bodies - no borders.

    ${e("var max_{var} = -Infinity;",{indent:4})}
    ${e("var min_{var} = Infinity;",{indent:4})}

    while(i--) {
      // this is O(n), it could be done faster with quadtree, if we check the root node bounds
      var bodyPos = bodies[i].pos;
      ${e("if (bodyPos.{var} < min_{var}) min_{var} = bodyPos.{var};",{indent:6})}
      ${e("if (bodyPos.{var} > max_{var}) max_{var} = bodyPos.{var};",{indent:6})}
    }

    ${e("boundingBox.min_{var} = min_{var};",{indent:4})}
    ${e("boundingBox.max_{var} = max_{var};",{indent:4})}
  }

  function resetBoundingBox() {
    ${e("boundingBox.min_{var} = boundingBox.max_{var} = 0;",{indent:4})}
  }
`}var Cy=ys.exports,bs={exports:{}};const Py=ki;bs.exports=Ly;bs.exports.generateCreateDragForceFunctionBody=uh;function Ly(n){let e=uh(n);return new Function("options",e)}function uh(n){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${Py(n)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var Oy=bs.exports,xs={exports:{}};const Dy=ki;xs.exports=Iy;xs.exports.generateCreateSpringForceFunctionBody=hh;function Iy(n){let e=hh(n);return new Function("options","random",e)}function hh(n){let e=Dy(n);return`
  if (!Number.isFinite(options.springCoefficient)) throw new Error('Spring coefficient is not a number');
  if (!Number.isFinite(options.springLength)) throw new Error('Spring length is not a number');

  return {
    /**
     * Updates forces acting on a spring
     */
    update: function (spring) {
      var body1 = spring.from;
      var body2 = spring.to;
      var length = spring.length < 0 ? options.springLength : spring.length;
      ${e("var d{var} = body2.pos.{var} - body1.pos.{var};",{indent:6})}
      var r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

      if (r === 0) {
        ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
      }

      var d = r - length;
      var coefficient = ((spring.coefficient > 0) ? spring.coefficient : options.springCoefficient) * d / r;

      ${e("body1.force.{var} += coefficient * d{var}",{indent:6})};
      body1.springCount += 1;
      body1.springLength += r;

      ${e("body2.force.{var} -= coefficient * d{var}",{indent:6})};
      body2.springCount += 1;
      body2.springLength += r;
    }
  };
`}var Ny=xs.exports,Ms={exports:{}};const Uy=ki;Ms.exports=Fy;Ms.exports.generateIntegratorFunctionBody=fh;function Fy(n){let e=fh(n);return new Function("bodies","timeStep","adaptiveTimeStepWeight",e)}function fh(n){let e=Uy(n);return`
  var length = bodies.length;
  if (length === 0) return 0;

  ${e("var d{var} = 0, t{var} = 0;",{indent:2})}

  for (var i = 0; i < length; ++i) {
    var body = bodies[i];
    if (body.isPinned) continue;

    if (adaptiveTimeStepWeight && body.springCount) {
      timeStep = (adaptiveTimeStepWeight * body.springLength/body.springCount);
    }

    var coeff = timeStep / body.mass;

    ${e("body.velocity.{var} += coeff * body.force.{var};",{indent:4})}
    ${e("var v{var} = body.velocity.{var};",{indent:4})}
    var v = Math.sqrt(${e("v{var} * v{var}",{join:" + "})});

    if (v > 1) {
      // We normalize it so that we move within timeStep range. 
      // for the case when v <= 1 - we let velocity to fade out.
      ${e("body.velocity.{var} = v{var} / v;",{indent:6})}
    }

    ${e("d{var} = timeStep * body.velocity.{var};",{indent:4})}

    ${e("body.pos.{var} += d{var};",{indent:4})}

    ${e("t{var} += Math.abs(d{var});",{indent:4})}
  }

  return (${e("t{var} * t{var}",{join:" + "})})/length;
`}var ky=Ms.exports,ha,wl;function By(){if(wl)return ha;wl=1,ha=n;function n(e,t,i,r){this.from=e,this.to=t,this.length=i,this.coefficient=r}return ha}var fa,Tl;function zy(){if(Tl)return fa;Tl=1,fa=n;function n(e,t){var i;if(e||(e={}),t){for(i in t)if(t.hasOwnProperty(i)){var r=e.hasOwnProperty(i),o=typeof t[i],s=!r||typeof e[i]!==o;s?e[i]=t[i]:o==="object"&&(e[i]=n(e[i],t[i]))}}return e}return fa}var Xi={exports:{}},Al;function Hy(){if(Al)return Xi.exports;Al=1,Xi.exports=n,Xi.exports.random=n,Xi.exports.randomIterator=a;function n(c){var l=typeof c=="number"?c:+new Date;return new e(l)}function e(c){this.seed=c}e.prototype.next=s,e.prototype.nextDouble=o,e.prototype.uniform=o,e.prototype.gaussian=t;function t(){var c,l,u;do l=this.nextDouble()*2-1,u=this.nextDouble()*2-1,c=l*l+u*u;while(c>=1||c===0);return l*Math.sqrt(-2*Math.log(c)/c)}e.prototype.levy=i;function i(){var c=1.5,l=Math.pow(r(1+c)*Math.sin(Math.PI*c/2)/(r((1+c)/2)*c*Math.pow(2,(c-1)/2)),1/c);return this.gaussian()*l/Math.pow(Math.abs(this.gaussian()),1/c)}function r(c){return Math.sqrt(2*Math.PI/c)*Math.pow(1/Math.E*(c+1/(12*c-1/(10*c))),c)}function o(){var c=this.seed;return c=c+2127912214+(c<<12)&4294967295,c=(c^3345072700^c>>>19)&4294967295,c=c+374761393+(c<<5)&4294967295,c=(c+3550635116^c<<9)&4294967295,c=c+4251993797+(c<<3)&4294967295,c=(c^3042594569^c>>>16)&4294967295,this.seed=c,(c&268435455)/268435456}function s(c){return Math.floor(this.nextDouble()*c)}function a(c,l){var u=l||n();if(typeof u.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:d,shuffle:h};function h(){var p,g,v;for(p=c.length-1;p>0;--p)g=u.next(p+1),v=c[g],c[g]=c[p],c[p]=v;return c}function d(p){var g,v,m;for(g=c.length-1;g>0;--g)v=u.next(g+1),m=c[v],c[v]=c[g],c[g]=m,p(m);c.length&&p(c[0])}}return Xi.exports}var dh=qy,Gy=Ey,Vy=Ty,Wy=Cy,jy=Oy,Xy=Ny,$y=ky,Rl={};function qy(n){var e=By(),t=zy(),i=gs;if(n){if(n.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(n.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}n=t(n,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var r=Rl[n.dimensions];if(!r){var o=n.dimensions;r={Body:Gy(o,n.debug),createQuadTree:Vy(o),createBounds:Wy(o),createDragForce:jy(o),createSpringForce:Xy(o),integrate:$y(o)},Rl[o]=r}var s=r.Body,a=r.createQuadTree,c=r.createBounds,l=r.createDragForce,u=r.createSpringForce,h=r.integrate,d=L=>new s(L),p=Hy().random(42),g=[],v=[],m=a(n,p),f=c(g,n,p),x=u(n,p),_=l(n),b=0,y=[],S=new Map,E=0;T("nbody",J),T("spring",R);var C={bodies:g,quadTree:m,springs:v,settings:n,addForce:T,removeForce:B,getForces:G,step:function(){for(var L=0;L<y.length;++L)y[L](E);var U=h(g,n.timeStep,n.adaptiveTimeStepWeight);return E+=1,U},addBody:function(L){if(!L)throw new Error("Body is required");return g.push(L),L},addBodyAt:function(L){if(!L)throw new Error("Body position is required");var U=d(L);return g.push(U),U},removeBody:function(L){if(L){var U=g.indexOf(L);if(!(U<0))return g.splice(U,1),g.length===0&&f.reset(),!0}},addSpring:function(L,U,X,ie){if(!L||!U)throw new Error("Cannot add null spring to force simulator");typeof X!="number"&&(X=-1);var te=new e(L,U,X,ie>=0?ie:-1);return v.push(te),te},getTotalMovement:function(){return b},removeSpring:function(L){if(L){var U=v.indexOf(L);if(U>-1)return v.splice(U,1),!0}},getBestNewBodyPosition:function(L){return f.getBestNewPosition(L)},getBBox:M,getBoundingBox:M,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(L){return L!==void 0?(n.gravity=L,m.options({gravity:L}),this):n.gravity},theta:function(L){return L!==void 0?(n.theta=L,m.options({theta:L}),this):n.theta},random:p};return Yy(n,C),i(C),C;function M(){return f.update(),f.box}function T(L,U){if(S.has(L))throw new Error("Force "+L+" is already added");S.set(L,U),y.push(U)}function B(L){var U=y.indexOf(S.get(L));U<0||(y.splice(U,1),S.delete(L))}function G(){return S}function J(){if(g.length!==0){m.insertBodies(g);for(var L=g.length;L--;){var U=g[L];U.isPinned||(U.reset(),m.updateBodyForce(U),_.update(U))}}}function R(){for(var L=v.length;L--;)x.update(v[L])}}function Yy(n,e){for(var t in n)Ky(n,e,t)}function Ky(n,e,t){if(n.hasOwnProperty(t)&&typeof e[t]!="function"){var i=Number.isFinite(n[t]);i?e[t]=function(r){if(r!==void 0){if(!Number.isFinite(r))throw new Error("Value of "+t+" should be a valid number.");return n[t]=r,e}return n[t]}:e[t]=function(r){return r!==void 0?(n[t]=r,e):n[t]}}}vs.exports=Jy;vs.exports.simulator=dh;var Zy=gs;function Jy(n,e){if(!n)throw new Error("Graph structure cannot be undefined");var t=e&&e.createSimulator||dh,i=t(e);if(Array.isArray(e))throw new Error("Physics settings is expected to be an object");var r=n.version>19?J:G;e&&typeof e.nodeMass=="function"&&(r=e.nodeMass);var o=new Map,s={},a=0,c=i.settings.springTransform||Qy;_(),m();var l=!1,u={step:function(){if(a===0)return h(!0),!0;var R=i.step();u.lastMove=R,u.fire("step");var L=R/a,U=L<=.01;return h(U),U},getNodePosition:function(R){return B(R).pos},setNodePosition:function(R){var L=B(R);L.setPosition.apply(L,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(R){var L=s[R];if(L)return{from:L.from.pos,to:L.to.pos}},getGraphRect:function(){return i.getBBox()},forEachBody:d,pinNode:function(R,L){var U=B(R.id);U.isPinned=!!L},isNodePinned:function(R){return B(R.id).isPinned},dispose:function(){n.off("changed",x),u.fire("disposed")},getBody:v,getSpring:g,getForceVectorLength:p,simulator:i,graph:n,lastMove:0};return Zy(u),u;function h(R){l!==R&&(l=R,f(R))}function d(R){o.forEach(R)}function p(){var R=0,L=0;return d(function(U){R+=Math.abs(U.force.x),L+=Math.abs(U.force.y)}),Math.sqrt(R*R+L*L)}function g(R,L){var U;if(L===void 0)typeof R!="object"?U=R:U=R.id;else{var X=n.hasLink(R,L);if(!X)return;U=X.id}return s[U]}function v(R){return o.get(R)}function m(){n.on("changed",x)}function f(R){u.fire("stable",R)}function x(R){for(var L=0;L<R.length;++L){var U=R[L];U.changeType==="add"?(U.node&&b(U.node.id),U.link&&S(U.link)):U.changeType==="remove"&&(U.node&&y(U.node),U.link&&E(U.link))}a=n.getNodesCount()}function _(){a=0,n.forEachNode(function(R){b(R.id),a+=1}),n.forEachLink(S)}function b(R){var L=o.get(R);if(!L){var U=n.getNode(R);if(!U)throw new Error("initBody() was called with unknown node id");var X=U.position;if(!X){var ie=C(U);X=i.getBestNewBodyPosition(ie)}L=i.addBodyAt(X),L.id=R,o.set(R,L),M(R),T(U)&&(L.isPinned=!0)}}function y(R){var L=R.id,U=o.get(L);U&&(o.delete(L),i.removeBody(U))}function S(R){M(R.fromId),M(R.toId);var L=o.get(R.fromId),U=o.get(R.toId),X=i.addSpring(L,U,R.length);c(R,X),s[R.id]=X}function E(R){var L=s[R.id];if(L){var U=n.getNode(R.fromId),X=n.getNode(R.toId);U&&M(U.id),X&&M(X.id),delete s[R.id],i.removeSpring(L)}}function C(R){var L=[];if(!R.links)return L;for(var U=Math.min(R.links.length,2),X=0;X<U;++X){var ie=R.links[X],te=ie.fromId!==R.id?o.get(ie.fromId):o.get(ie.toId);te&&te.pos&&L.push(te)}return L}function M(R){var L=o.get(R);if(L.mass=r(R),Number.isNaN(L.mass))throw new Error("Node mass should be a number")}function T(R){return R&&(R.isPinned||R.data&&R.data.isPinned)}function B(R){var L=o.get(R);return L||(b(R),L=o.get(R)),L}function G(R){var L=n.getLinks(R);return L?1+L.length/3:1}function J(R){var L=n.getLinks(R);return L?1+L.size/3:1}}function Qy(){}var eb=vs.exports;const tb=Ka(eb);function ka(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var Vr={},nb=typeof Vr=="object"&&Vr&&Vr.Object===Object&&Vr;const ib=nb;var rb=typeof self=="object"&&self&&self.Object===Object&&self,ob=ib||rb||Function("return this")();const ph=ob;var ab=function(){return ph.Date.now()};const da=ab;var sb=/\s/;function cb(n){for(var e=n.length;e--&&sb.test(n.charAt(e)););return e}var lb=/^\s+/;function ub(n){return n&&n.slice(0,cb(n)+1).replace(lb,"")}var hb=ph.Symbol;const ao=hb;var mh=Object.prototype,fb=mh.hasOwnProperty,db=mh.toString,$i=ao?ao.toStringTag:void 0;function pb(n){var e=fb.call(n,$i),t=n[$i];try{n[$i]=void 0;var i=!0}catch{}var r=db.call(n);return i&&(e?n[$i]=t:delete n[$i]),r}var mb=Object.prototype,gb=mb.toString;function vb(n){return gb.call(n)}var _b="[object Null]",yb="[object Undefined]",Cl=ao?ao.toStringTag:void 0;function bb(n){return n==null?n===void 0?yb:_b:Cl&&Cl in Object(n)?pb(n):vb(n)}function xb(n){return n!=null&&typeof n=="object"}var Mb="[object Symbol]";function Sb(n){return typeof n=="symbol"||xb(n)&&bb(n)==Mb}var Pl=0/0,Eb=/^[-+]0x[0-9a-f]+$/i,wb=/^0b[01]+$/i,Tb=/^0o[0-7]+$/i,Ab=parseInt;function Ll(n){if(typeof n=="number")return n;if(Sb(n))return Pl;if(ka(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=ka(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=ub(n);var t=wb.test(n);return t||Tb.test(n)?Ab(n.slice(2),t?2:8):Eb.test(n)?Pl:+n}var Rb="Expected a function",Cb=Math.max,Pb=Math.min;function Lb(n,e,t){var i,r,o,s,a,c,l=0,u=!1,h=!1,d=!0;if(typeof n!="function")throw new TypeError(Rb);e=Ll(e)||0,ka(t)&&(u=!!t.leading,h="maxWait"in t,o=h?Cb(Ll(t.maxWait)||0,e):o,d="trailing"in t?!!t.trailing:d);function p(S){var E=i,C=r;return i=r=void 0,l=S,s=n.apply(C,E),s}function g(S){return l=S,a=setTimeout(f,e),u?p(S):s}function v(S){var E=S-c,C=S-l,M=e-E;return h?Pb(M,o-C):M}function m(S){var E=S-c,C=S-l;return c===void 0||E>=e||E<0||h&&C>=o}function f(){var S=da();if(m(S))return x(S);a=setTimeout(f,v(S))}function x(S){return a=void 0,d&&i?p(S):(i=r=void 0,s)}function _(){a!==void 0&&clearTimeout(a),l=0,i=c=r=a=void 0}function b(){return a===void 0?s:x(da())}function y(){var S=da(),E=m(S);if(i=arguments,r=this,c=S,E){if(a===void 0)return g(c);if(h)return clearTimeout(a),a=setTimeout(f,e),p(c)}return a===void 0&&(a=setTimeout(f,e)),s}return y.cancel=_,y.flush=b,y}function Ob(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,o,s,a=[],c=!0,l=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=o.call(t)).done)&&(a.push(i.value),a.length!==e);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(l)throw r}}return a}}function Db(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Ol(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,zb(i.key),i)}}function Ib(n,e,t){return e&&Ol(n.prototype,e),t&&Ol(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function Nb(n,e){return Ub(n)||Ob(n,e)||Fb(n,e)||kb()}function Ub(n){if(Array.isArray(n))return n}function Fb(n,e){if(n){if(typeof n=="string")return Dl(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Dl(n,e)}}function Dl(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function kb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bb(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function zb(n){var e=Bb(n,"string");return typeof e=="symbol"?e:String(e)}var Hb=Ib(function n(e,t){var i=t.default,r=i===void 0?null:i,o=t.triggerUpdate,s=o===void 0?!0:o,a=t.onChange,c=a===void 0?function(l,u){}:a;Db(this,n),this.name=e,this.defaultVal=r,this.triggerUpdate=s,this.onChange=c});function Ss(n){var e=n.stateInit,t=e===void 0?function(){return{}}:e,i=n.props,r=i===void 0?{}:i,o=n.methods,s=o===void 0?{}:o,a=n.aliases,c=a===void 0?{}:a,l=n.init,u=l===void 0?function(){}:l,h=n.update,d=h===void 0?function(){}:h,p=Object.keys(r).map(function(g){return new Hb(g,r[g])});return function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=Object.assign({},t instanceof Function?t(g):t,{initialised:!1}),m={};function f(b){return x(b,g),_(),f}var x=function(y,S){u.call(f,y,v,S),v.initialised=!0},_=Lb(function(){v.initialised&&(d.call(f,v,m),m={})},1);return p.forEach(function(b){f[b.name]=y(b);function y(S){var E=S.name,C=S.triggerUpdate,M=C===void 0?!1:C,T=S.onChange,B=T===void 0?function(R,L){}:T,G=S.defaultVal,J=G===void 0?null:G;return function(R){var L=v[E];if(!arguments.length)return L;var U=R===void 0?J:R;return v[E]=U,B.call(f,U,v,L),!m.hasOwnProperty(E)&&(m[E]=L),M&&_(),f}}}),Object.keys(s).forEach(function(b){f[b]=function(){for(var y,S=arguments.length,E=new Array(S),C=0;C<S;C++)E[C]=arguments[C];return(y=s[b]).call.apply(y,[f,v].concat(E))}}),Object.entries(c).forEach(function(b){var y=Nb(b,2),S=y[0],E=y[1];return f[S]=f[E]}),f.resetProps=function(){return p.forEach(function(b){f[b.name](b.defaultVal)}),f},f.resetProps(),v._rerender=_,f}}var Ye=function(n){return typeof n=="function"?n:typeof n=="string"?function(e){return e[n]}:function(e){return n}};function Gb(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,o,s,a=[],c=!0,l=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=o.call(t)).done)&&(a.push(i.value),a.length!==e);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(l)throw r}}return a}}function Vb(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function Wb(n,e){if(n==null)return{};var t=Vb(n,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function jb(n,e){return qb(n)||Gb(n,e)||gh(n,e)||Zb()}function Xb(n){return $b(n)||Yb(n)||gh(n)||Kb()}function $b(n){if(Array.isArray(n))return Ba(n)}function qb(n){if(Array.isArray(n))return n}function Yb(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function gh(n,e){if(n){if(typeof n=="string")return Ba(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ba(n,e)}}function Ba(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function Kb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jb(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Qb(n){var e=Jb(n,"string");return typeof e=="symbol"?e:String(e)}var Il=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,r=(e instanceof Array?e.length?e:[void 0]:[e]).map(function(a){return{keyAccessor:a,isProp:!(a instanceof Function)}}),o=n.reduce(function(a,c){var l=a,u=c;return r.forEach(function(h,d){var p=h.keyAccessor,g=h.isProp,v;if(g){var m=u,f=m[p],x=Wb(m,[p].map(Qb));v=f,u=x}else v=p(u,d);d+1<r.length?(l.hasOwnProperty(v)||(l[v]={}),l=l[v]):t?(l.hasOwnProperty(v)||(l[v]=[]),l[v].push(u)):l[v]=u}),a},{});t instanceof Function&&function a(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;l===r.length?Object.keys(c).forEach(function(u){return c[u]=t(c[u])}):Object.values(c).forEach(function(u){return a(u,l+1)})}(o);var s=o;return i&&(s=[],function a(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];l.length===r.length?s.push({keys:l,vals:c}):Object.entries(c).forEach(function(u){var h=jb(u,2),d=h[0],p=h[1];return a(p,[].concat(Xb(l),[d]))})}(o),e instanceof Array&&e.length===0&&s.length===1&&(s[0].keys=[])),s};function ex(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,o,s,a=[],c=!0,l=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=o.call(t)).done)&&(a.push(i.value),a.length!==e);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(l)throw r}}return a}}function Nl(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function tx(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Nl(Object(t),!0).forEach(function(i){vh(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Nl(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function vh(n,e,t){return e=ux(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function nx(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function ix(n,e){if(n==null)return{};var t=nx(n,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function _h(n,e){return ox(n)||ex(n,e)||yh(n,e)||cx()}function so(n){return rx(n)||ax(n)||yh(n)||sx()}function rx(n){if(Array.isArray(n))return za(n)}function ox(n){if(Array.isArray(n))return n}function ax(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function yh(n,e){if(n){if(typeof n=="string")return za(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return za(n,e)}}function za(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function sx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lx(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function ux(n){var e=lx(n,"string");return typeof e=="symbol"?e:String(e)}var hx=["createObj","updateObj","exitObj","objBindAttr","dataBindAttr"];function fx(n,e,t){var i={enter:[],update:[],exit:[]};if(t){var s=Il(n,t,!1),a=Il(e,t,!1),c=Object.assign({},s,a);Object.entries(c).forEach(function(l){var u=_h(l,2),h=u[0],d=u[1],p=s.hasOwnProperty(h)?a.hasOwnProperty(h)?"update":"exit":"enter";i[p].push(p==="update"?[s[h],a[h]]:d)})}else{var r=new Set(n),o=new Set(e);new Set([].concat(so(r),so(o))).forEach(function(l){var u=r.has(l)?o.has(l)?"update":"exit":"enter";i[u].push(u==="update"?[l,l]:l)})}return i}function dx(n,e,t){var i=t.objBindAttr,r=i===void 0?"__obj":i,o=t.dataBindAttr,s=o===void 0?"__data":o,a=t.idAccessor,c=t.purge,l=c===void 0?!1:c,u=function(m){return m.hasOwnProperty(s)},h=e.filter(function(v){return!u(v)}),d=e.filter(u).map(function(v){return v[s]}),p=n,g=l?{enter:p,exit:d,update:[]}:fx(d,p,a);return g.update=g.update.map(function(v){var m=_h(v,2),f=m[0],x=m[1];return f!==x&&(x[r]=f[r],x[r][s]=x),x}),g.exit=g.exit.concat(h.map(function(v){return vh({},r,v)})),g}function px(n,e,t,i,r){var o=r.createObj,s=o===void 0?function(C){return{}}:o,a=r.updateObj,c=a===void 0?function(C,M){}:a,l=r.exitObj,u=l===void 0?function(C){}:l,h=r.objBindAttr,d=h===void 0?"__obj":h,p=r.dataBindAttr,g=p===void 0?"__data":p,v=ix(r,hx),m=dx(n,e,tx({objBindAttr:d,dataBindAttr:g},v)),f=m.enter,x=m.update,_=m.exit;_.forEach(function(C){var M=C[d];delete C[d],u(M),i(M)});var b=S(f),y=[].concat(so(f),so(x));E(y),b.forEach(t);function S(C){var M=[];return C.forEach(function(T){var B=s(T);B&&(B[g]=T,T[d]=B,M.push(B))}),M}function E(C){C.forEach(function(M){var T=M[d];T&&(T[g]=M,c(T,M))})}}function mx(n){for(var e=n.length/6|0,t=new Array(e),i=0;i<e;)t[i]="#"+n.slice(i*6,++i*6);return t}const gx=mx("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");function co(n){"@babel/helpers - typeof";return co=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},co(n)}var vx=/^\s+/,_x=/\s+$/;function Ee(n,e){if(n=n||"",e=e||{},n instanceof Ee)return n;if(!(this instanceof Ee))return new Ee(n,e);var t=yx(n);this._originalInput=n,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||t.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}Ee.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},getLuminance:function(){var e=this.toRgb(),t,i,r,o,s,a;return t=e.r/255,i=e.g/255,r=e.b/255,t<=.03928?o=t/12.92:o=Math.pow((t+.055)/1.055,2.4),i<=.03928?s=i/12.92:s=Math.pow((i+.055)/1.055,2.4),r<=.03928?a=r/12.92:a=Math.pow((r+.055)/1.055,2.4),.2126*o+.7152*s+.0722*a},setAlpha:function(e){return this._a=bh(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Fl(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Fl(this._r,this._g,this._b),t=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.v*100);return this._a==1?"hsv("+t+", "+i+"%, "+r+"%)":"hsva("+t+", "+i+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=Ul(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=Ul(this._r,this._g,this._b),t=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.l*100);return this._a==1?"hsl("+t+", "+i+"%, "+r+"%)":"hsla("+t+", "+i+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return kl(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return Sx(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(tt(this._r,255)*100)+"%",g:Math.round(tt(this._g,255)*100)+"%",b:Math.round(tt(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(tt(this._r,255)*100)+"%, "+Math.round(tt(this._g,255)*100)+"%, "+Math.round(tt(this._b,255)*100)+"%)":"rgba("+Math.round(tt(this._r,255)*100)+"%, "+Math.round(tt(this._g,255)*100)+"%, "+Math.round(tt(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:Nx[kl(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var t="#"+Bl(this._r,this._g,this._b,this._a),i=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var o=Ee(e);i="#"+Bl(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+i+")"},toString:function(e){var t=!!e;e=e||this._format;var i=!1,r=this._a<1&&this._a>=0,o=!t&&r&&(e==="hex"||e==="hex6"||e==="hex3"||e==="hex4"||e==="hex8"||e==="name");return o?e==="name"&&this._a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),i||this.toHexString())},clone:function(){return Ee(this.toString())},_applyModification:function(e,t){var i=e.apply(null,[this].concat([].slice.call(t)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(Ax,arguments)},brighten:function(){return this._applyModification(Rx,arguments)},darken:function(){return this._applyModification(Cx,arguments)},desaturate:function(){return this._applyModification(Ex,arguments)},saturate:function(){return this._applyModification(wx,arguments)},greyscale:function(){return this._applyModification(Tx,arguments)},spin:function(){return this._applyModification(Px,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(Dx,arguments)},complement:function(){return this._applyCombination(Lx,arguments)},monochromatic:function(){return this._applyCombination(Ix,arguments)},splitcomplement:function(){return this._applyCombination(Ox,arguments)},triad:function(){return this._applyCombination(zl,[3])},tetrad:function(){return this._applyCombination(zl,[4])}};Ee.fromRatio=function(n,e){if(co(n)=="object"){var t={};for(var i in n)n.hasOwnProperty(i)&&(i==="a"?t[i]=n[i]:t[i]=er(n[i]));n=t}return Ee(n,e)};function yx(n){var e={r:0,g:0,b:0},t=1,i=null,r=null,o=null,s=!1,a=!1;return typeof n=="string"&&(n=Bx(n)),co(n)=="object"&&(mn(n.r)&&mn(n.g)&&mn(n.b)?(e=bx(n.r,n.g,n.b),s=!0,a=String(n.r).substr(-1)==="%"?"prgb":"rgb"):mn(n.h)&&mn(n.s)&&mn(n.v)?(i=er(n.s),r=er(n.v),e=Mx(n.h,i,r),s=!0,a="hsv"):mn(n.h)&&mn(n.s)&&mn(n.l)&&(i=er(n.s),o=er(n.l),e=xx(n.h,i,o),s=!0,a="hsl"),n.hasOwnProperty("a")&&(t=n.a)),t=bh(t),{ok:s,format:n.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}function bx(n,e,t){return{r:tt(n,255)*255,g:tt(e,255)*255,b:tt(t,255)*255}}function Ul(n,e,t){n=tt(n,255),e=tt(e,255),t=tt(t,255);var i=Math.max(n,e,t),r=Math.min(n,e,t),o,s,a=(i+r)/2;if(i==r)o=s=0;else{var c=i-r;switch(s=a>.5?c/(2-i-r):c/(i+r),i){case n:o=(e-t)/c+(e<t?6:0);break;case e:o=(t-n)/c+2;break;case t:o=(n-e)/c+4;break}o/=6}return{h:o,s,l:a}}function xx(n,e,t){var i,r,o;n=tt(n,360),e=tt(e,100),t=tt(t,100);function s(l,u,h){return h<0&&(h+=1),h>1&&(h-=1),h<1/6?l+(u-l)*6*h:h<1/2?u:h<2/3?l+(u-l)*(2/3-h)*6:l}if(e===0)i=r=o=t;else{var a=t<.5?t*(1+e):t+e-t*e,c=2*t-a;i=s(c,a,n+1/3),r=s(c,a,n),o=s(c,a,n-1/3)}return{r:i*255,g:r*255,b:o*255}}function Fl(n,e,t){n=tt(n,255),e=tt(e,255),t=tt(t,255);var i=Math.max(n,e,t),r=Math.min(n,e,t),o,s,a=i,c=i-r;if(s=i===0?0:c/i,i==r)o=0;else{switch(i){case n:o=(e-t)/c+(e<t?6:0);break;case e:o=(t-n)/c+2;break;case t:o=(n-e)/c+4;break}o/=6}return{h:o,s,v:a}}function Mx(n,e,t){n=tt(n,360)*6,e=tt(e,100),t=tt(t,100);var i=Math.floor(n),r=n-i,o=t*(1-e),s=t*(1-r*e),a=t*(1-(1-r)*e),c=i%6,l=[t,s,o,o,a,t][c],u=[a,t,t,s,o,o][c],h=[o,o,a,t,t,s][c];return{r:l*255,g:u*255,b:h*255}}function kl(n,e,t,i){var r=[en(Math.round(n).toString(16)),en(Math.round(e).toString(16)),en(Math.round(t).toString(16))];return i&&r[0].charAt(0)==r[0].charAt(1)&&r[1].charAt(0)==r[1].charAt(1)&&r[2].charAt(0)==r[2].charAt(1)?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function Sx(n,e,t,i,r){var o=[en(Math.round(n).toString(16)),en(Math.round(e).toString(16)),en(Math.round(t).toString(16)),en(xh(i))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function Bl(n,e,t,i){var r=[en(xh(i)),en(Math.round(n).toString(16)),en(Math.round(e).toString(16)),en(Math.round(t).toString(16))];return r.join("")}Ee.equals=function(n,e){return!n||!e?!1:Ee(n).toRgbString()==Ee(e).toRgbString()};Ee.random=function(){return Ee.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function Ex(n,e){e=e===0?0:e||10;var t=Ee(n).toHsl();return t.s-=e/100,t.s=xo(t.s),Ee(t)}function wx(n,e){e=e===0?0:e||10;var t=Ee(n).toHsl();return t.s+=e/100,t.s=xo(t.s),Ee(t)}function Tx(n){return Ee(n).desaturate(100)}function Ax(n,e){e=e===0?0:e||10;var t=Ee(n).toHsl();return t.l+=e/100,t.l=xo(t.l),Ee(t)}function Rx(n,e){e=e===0?0:e||10;var t=Ee(n).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),Ee(t)}function Cx(n,e){e=e===0?0:e||10;var t=Ee(n).toHsl();return t.l-=e/100,t.l=xo(t.l),Ee(t)}function Px(n,e){var t=Ee(n).toHsl(),i=(t.h+e)%360;return t.h=i<0?360+i:i,Ee(t)}function Lx(n){var e=Ee(n).toHsl();return e.h=(e.h+180)%360,Ee(e)}function zl(n,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var t=Ee(n).toHsl(),i=[Ee(n)],r=360/e,o=1;o<e;o++)i.push(Ee({h:(t.h+o*r)%360,s:t.s,l:t.l}));return i}function Ox(n){var e=Ee(n).toHsl(),t=e.h;return[Ee(n),Ee({h:(t+72)%360,s:e.s,l:e.l}),Ee({h:(t+216)%360,s:e.s,l:e.l})]}function Dx(n,e,t){e=e||6,t=t||30;var i=Ee(n).toHsl(),r=360/t,o=[Ee(n)];for(i.h=(i.h-(r*e>>1)+720)%360;--e;)i.h=(i.h+r)%360,o.push(Ee(i));return o}function Ix(n,e){e=e||6;for(var t=Ee(n).toHsv(),i=t.h,r=t.s,o=t.v,s=[],a=1/e;e--;)s.push(Ee({h:i,s:r,v:o})),o=(o+a)%1;return s}Ee.mix=function(n,e,t){t=t===0?0:t||50;var i=Ee(n).toRgb(),r=Ee(e).toRgb(),o=t/100,s={r:(r.r-i.r)*o+i.r,g:(r.g-i.g)*o+i.g,b:(r.b-i.b)*o+i.b,a:(r.a-i.a)*o+i.a};return Ee(s)};Ee.readability=function(n,e){var t=Ee(n),i=Ee(e);return(Math.max(t.getLuminance(),i.getLuminance())+.05)/(Math.min(t.getLuminance(),i.getLuminance())+.05)};Ee.isReadable=function(n,e,t){var i=Ee.readability(n,e),r,o;switch(o=!1,r=zx(t),r.level+r.size){case"AAsmall":case"AAAlarge":o=i>=4.5;break;case"AAlarge":o=i>=3;break;case"AAAsmall":o=i>=7;break}return o};Ee.mostReadable=function(n,e,t){var i=null,r=0,o,s,a,c;t=t||{},s=t.includeFallbackColors,a=t.level,c=t.size;for(var l=0;l<e.length;l++)o=Ee.readability(n,e[l]),o>r&&(r=o,i=Ee(e[l]));return Ee.isReadable(n,i,{level:a,size:c})||!s?i:(t.includeFallbackColors=!1,Ee.mostReadable(n,["#fff","#000"],t))};var Ha=Ee.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Nx=Ee.hexNames=Ux(Ha);function Ux(n){var e={};for(var t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function bh(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function tt(n,e){Fx(n)&&(n="100%");var t=kx(n);return n=Math.min(e,Math.max(0,parseFloat(n))),t&&(n=parseInt(n*e,10)/100),Math.abs(n-e)<1e-6?1:n%e/parseFloat(e)}function xo(n){return Math.min(1,Math.max(0,n))}function Ft(n){return parseInt(n,16)}function Fx(n){return typeof n=="string"&&n.indexOf(".")!=-1&&parseFloat(n)===1}function kx(n){return typeof n=="string"&&n.indexOf("%")!=-1}function en(n){return n.length==1?"0"+n:""+n}function er(n){return n<=1&&(n=n*100+"%"),n}function xh(n){return Math.round(parseFloat(n)*255).toString(16)}function Hl(n){return Ft(n)/255}var qt=function(){var n="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",t="(?:"+e+")|(?:"+n+")",i="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+i),rgba:new RegExp("rgba"+r),hsl:new RegExp("hsl"+i),hsla:new RegExp("hsla"+r),hsv:new RegExp("hsv"+i),hsva:new RegExp("hsva"+r),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function mn(n){return!!qt.CSS_UNIT.exec(n)}function Bx(n){n=n.replace(vx,"").replace(_x,"").toLowerCase();var e=!1;if(Ha[n])n=Ha[n],e=!0;else if(n=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=qt.rgb.exec(n))?{r:t[1],g:t[2],b:t[3]}:(t=qt.rgba.exec(n))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=qt.hsl.exec(n))?{h:t[1],s:t[2],l:t[3]}:(t=qt.hsla.exec(n))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=qt.hsv.exec(n))?{h:t[1],s:t[2],v:t[3]}:(t=qt.hsva.exec(n))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=qt.hex8.exec(n))?{r:Ft(t[1]),g:Ft(t[2]),b:Ft(t[3]),a:Hl(t[4]),format:e?"name":"hex8"}:(t=qt.hex6.exec(n))?{r:Ft(t[1]),g:Ft(t[2]),b:Ft(t[3]),format:e?"name":"hex"}:(t=qt.hex4.exec(n))?{r:Ft(t[1]+""+t[1]),g:Ft(t[2]+""+t[2]),b:Ft(t[3]+""+t[3]),a:Hl(t[4]+""+t[4]),format:e?"name":"hex8"}:(t=qt.hex3.exec(n))?{r:Ft(t[1]+""+t[1]),g:Ft(t[2]+""+t[2]),b:Ft(t[3]+""+t[3]),format:e?"name":"hex"}:!1}function zx(n){var e,t;return n=n||{level:"AA",size:"small"},e=(n.level||"AA").toUpperCase(),t=(n.size||"small").toLowerCase(),e!=="AA"&&e!=="AAA"&&(e="AA"),t!=="small"&&t!=="large"&&(t="small"),{level:e,size:t}}function Hx(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,o,s,a=[],c=!0,l=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=o.call(t)).done)&&(a.push(i.value),a.length!==e);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(l)throw r}}return a}}function Gl(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Mh(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Gl(Object(t),!0).forEach(function(i){Es(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Gl(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Ga(n){"@babel/helpers - typeof";return Ga=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ga(n)}function Gx(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Vl(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,Th(i.key),i)}}function Vx(n,e,t){return e&&Vl(n.prototype,e),t&&Vl(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function Es(n,e,t){return e=Th(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Wx(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&uo(n,e)}function lo(n){return lo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},lo(n)}function uo(n,e){return uo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},uo(n,e)}function Sh(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Yr(n,e,t){return Sh()?Yr=Reflect.construct.bind():Yr=function(r,o,s){var a=[null];a.push.apply(a,o);var c=Function.bind.apply(r,a),l=new c;return s&&uo(l,s.prototype),l},Yr.apply(null,arguments)}function jx(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function Xx(n,e){if(n==null)return{};var t=jx(n,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function Eh(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function $x(n,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Eh(n)}function qx(n){var e=Sh();return function(){var i=lo(n),r;if(e){var o=lo(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return $x(this,r)}}function Wl(n,e){return Kx(n)||Hx(n,e)||wh(n,e)||Qx()}function Yt(n){return Yx(n)||Zx(n)||wh(n)||Jx()}function Yx(n){if(Array.isArray(n))return Va(n)}function Kx(n){if(Array.isArray(n))return n}function Zx(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function wh(n,e){if(n){if(typeof n=="string")return Va(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Va(n,e)}}function Va(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function Jx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function eM(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Th(n){var e=eM(n,"string");return typeof e=="symbol"?e:String(e)}var tM=function n(e){e instanceof Array?e.forEach(n):(e.map&&e.map.dispose(),e.dispose())},nM=function n(e){e.geometry&&e.geometry.dispose(),e.material&&tM(e.material),e.texture&&e.texture.dispose(),e.children&&e.children.forEach(n)},Wa=function(e){for(;e.children.length;){var t=e.children[0];e.remove(t),nM(t)}},iM=["objFilter"];function qi(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.objFilter,r=i===void 0?function(){return!0}:i,o=Xx(t,iM);return px(n,e.children.filter(r),function(s){return e.add(s)},function(s){e.remove(s),Wa(s)},Mh({objBindAttr:"__threeObj"},o))}var Yi=function(e){return isNaN(e)?parseInt(Ee(e).toHex(),16):e},pa=function(e){return isNaN(e)?Ee(e).getAlpha():1},rM=Gh(gx);function jl(n,e,t){!e||typeof t!="string"||n.filter(function(i){return!i[t]}).forEach(function(i){i[t]=rM(e(i))})}function oM(n,e){var t=n.nodes,i=n.links,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=r.nodeFilter,s=o===void 0?function(){return!0}:o,a=r.onLoopError,c=a===void 0?function(p){throw"Invalid DAG structure! Found cycle in node path: ".concat(p.join(" -> "),".")}:a,l={};t.forEach(function(p){return l[e(p)]={data:p,out:[],depth:-1,skip:!s(p)}}),i.forEach(function(p){var g=p.source,v=p.target,m=b(g),f=b(v);if(!l.hasOwnProperty(m))throw"Missing source node with id: ".concat(m);if(!l.hasOwnProperty(f))throw"Missing target node with id: ".concat(f);var x=l[m],_=l[f];x.out.push(_);function b(y){return Ga(y)==="object"?e(y):y}});var u=[];d(Object.values(l));var h=Object.assign.apply(Object,[{}].concat(Yt(Object.entries(l).filter(function(p){var g=Wl(p,2),v=g[1];return!v.skip}).map(function(p){var g=Wl(p,2),v=g[0],m=g[1];return Es({},v,m.depth)}))));return h;function d(p){for(var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,m=function(){var y=p[f];if(g.indexOf(y)!==-1){var S=[].concat(Yt(g.slice(g.indexOf(y))),[y]).map(function(E){return e(E.data)});return u.some(function(E){return E.length===S.length&&E.every(function(C,M){return C===S[M]})})||(u.push(S),c(S)),"continue"}v>y.depth&&(y.depth=v,d(y.out,[].concat(Yt(g),[y]),v+(y.skip?0:1)))},f=0,x=p.length;f<x;f++)var _=m()}}var Oe=window.THREE?window.THREE:{Group:Ei,Mesh:Qt,MeshLambertMaterial:j_,Color:Xe,BufferGeometry:Bt,BufferAttribute:tn,Matrix4:it,Vector3:I,SphereGeometry:yo,CylinderGeometry:_o,TubeGeometry:hs,ConeGeometry:us,Line:C_,LineBasicMaterial:Nu,QuadraticBezierCurve3:ls,CubicBezierCurve3:Fu,Box3:ni},Xl={graph:xy,forcelayout:tb},aM=2,$l=new Oe.BufferGeometry().setAttribute?"setAttribute":"addAttribute",Wr=new Oe.BufferGeometry().applyMatrix4?"applyMatrix4":"applyMatrix",sM=Ss({props:{jsonUrl:{onChange:function(e,t){var i=this;e&&!t.fetchingJson&&(t.fetchingJson=!0,t.onLoading(),fetch(e).then(function(r){return r.json()}).then(function(r){t.fetchingJson=!1,t.onFinishLoading(r),i.graphData(r)}))},triggerUpdate:!1},graphData:{default:{nodes:[],links:[]},onChange:function(e,t){t.engineRunning=!1}},numDimensions:{default:3,onChange:function(e,t){var i=t.d3ForceLayout.force("charge");i&&i.strength(e>2?-60:-30),e<3&&r(t.graphData.nodes,"z"),e<2&&r(t.graphData.nodes,"y");function r(o,s){o.forEach(function(a){delete a[s],delete a["v".concat(s)]})}}},dagMode:{onChange:function(e,t){!e&&t.forceEngine==="d3"&&(t.graphData.nodes||[]).forEach(function(i){return i.fx=i.fy=i.fz=void 0})}},dagLevelDistance:{},dagNodeFilter:{default:function(e){return!0}},onDagError:{triggerUpdate:!1},nodeRelSize:{default:4},nodeId:{default:"id"},nodeVal:{default:"val"},nodeResolution:{default:8},nodeColor:{default:"color"},nodeAutoColorBy:{},nodeOpacity:{default:.75},nodeVisibility:{default:!0},nodeThreeObject:{},nodeThreeObjectExtend:{default:!1},nodePositionUpdate:{triggerUpdate:!1},linkSource:{default:"source"},linkTarget:{default:"target"},linkVisibility:{default:!0},linkColor:{default:"color"},linkAutoColorBy:{},linkOpacity:{default:.2},linkWidth:{},linkResolution:{default:6},linkCurvature:{default:0,triggerUpdate:!1},linkCurveRotation:{default:0,triggerUpdate:!1},linkMaterial:{},linkThreeObject:{},linkThreeObjectExtend:{default:!1},linkPositionUpdate:{triggerUpdate:!1},linkDirectionalArrowLength:{default:0},linkDirectionalArrowColor:{},linkDirectionalArrowRelPos:{default:.5,triggerUpdate:!1},linkDirectionalArrowResolution:{default:8},linkDirectionalParticles:{default:0},linkDirectionalParticleSpeed:{default:.01,triggerUpdate:!1},linkDirectionalParticleWidth:{default:.5},linkDirectionalParticleColor:{},linkDirectionalParticleResolution:{default:4},forceEngine:{default:"d3"},d3AlphaMin:{default:0},d3AlphaDecay:{default:.0228,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaDecay(e)}},d3AlphaTarget:{default:0,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaTarget(e)}},d3VelocityDecay:{default:.4,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.velocityDecay(e)}},ngraphPhysics:{default:{timeStep:20,gravity:-1.2,theta:.8,springLength:30,springCoefficient:8e-4,dragCoefficient:.02}},warmupTicks:{default:0,triggerUpdate:!1},cooldownTicks:{default:1/0,triggerUpdate:!1},cooldownTime:{default:15e3,triggerUpdate:!1},onLoading:{default:function(){},triggerUpdate:!1},onFinishLoading:{default:function(){},triggerUpdate:!1},onUpdate:{default:function(){},triggerUpdate:!1},onFinishUpdate:{default:function(){},triggerUpdate:!1},onEngineTick:{default:function(){},triggerUpdate:!1},onEngineStop:{default:function(){},triggerUpdate:!1}},methods:{refresh:function(e){return e._flushObjects=!0,e._rerender(),this},d3Force:function(e,t,i){return i===void 0?e.d3ForceLayout.force(t):(e.d3ForceLayout.force(t,i),this)},d3ReheatSimulation:function(e){return e.d3ForceLayout.alpha(1),this.resetCountdown(),this},resetCountdown:function(e){return e.cntTicks=0,e.startTickTime=new Date,e.engineRunning=!0,this},tickFrame:function(e){var t=e.forceEngine!=="ngraph";return e.engineRunning&&i(),r(),o(),this;function i(){++e.cntTicks>e.cooldownTicks||new Date-e.startTickTime>e.cooldownTime||t&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin?(e.engineRunning=!1,e.onEngineStop()):(e.layout[t?"tick":"step"](),e.onEngineTick());var s=Ye(e.nodeThreeObjectExtend);e.graphData.nodes.forEach(function(d){var p=d.__threeObj;if(p){var g=t?d:e.layout.getNodePosition(d[e.nodeId]),v=s(d);(!e.nodePositionUpdate||!e.nodePositionUpdate(v?p.children[0]:p,{x:g.x,y:g.y,z:g.z},d)||v)&&(p.position.x=g.x,p.position.y=g.y||0,p.position.z=g.z||0)}});var a=Ye(e.linkWidth),c=Ye(e.linkCurvature),l=Ye(e.linkCurveRotation),u=Ye(e.linkThreeObjectExtend);e.graphData.links.forEach(function(d){var p=d.__lineObj;if(p){var g=t?d:e.layout.getLinkPosition(e.layout.graph.getLink(d.source,d.target).id),v=g[t?"source":"from"],m=g[t?"target":"to"];if(!(!v||!m||!v.hasOwnProperty("x")||!m.hasOwnProperty("x"))){h(d);var f=u(d);if(!(e.linkPositionUpdate&&e.linkPositionUpdate(f?p.children[1]:p,{start:{x:v.x,y:v.y,z:v.z},end:{x:m.x,y:m.y,z:m.z}},d)&&!f)){var x=30,_=d.__curve,b=p.children.length?p.children[0]:p;if(b.type==="Line"){if(_)b.geometry.setFromPoints(_.getPoints(x));else{var y=b.geometry.getAttribute("position");(!y||!y.array||y.array.length!==6)&&b.geometry[$l]("position",y=new Oe.BufferAttribute(new Float32Array(2*3),3)),y.array[0]=v.x,y.array[1]=v.y||0,y.array[2]=v.z||0,y.array[3]=m.x,y.array[4]=m.y||0,y.array[5]=m.z||0,y.needsUpdate=!0}b.geometry.computeBoundingSphere()}else if(b.type==="Mesh")if(_){b.geometry.type.match(/^Tube(Buffer)?Geometry$/)||(b.position.set(0,0,0),b.rotation.set(0,0,0),b.scale.set(1,1,1));var G=Math.ceil(a(d)*10)/10,J=G/2,R=new Oe.TubeGeometry(_,x,J,e.linkResolution,!1);b.geometry.dispose(),b.geometry=R}else{if(!b.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)){var S=Math.ceil(a(d)*10)/10,E=S/2,C=new Oe.CylinderGeometry(E,E,1,e.linkResolution,1,!1);C[Wr](new Oe.Matrix4().makeTranslation(0,1/2,0)),C[Wr](new Oe.Matrix4().makeRotationX(Math.PI/2)),b.geometry.dispose(),b.geometry=C}var M=new Oe.Vector3(v.x,v.y||0,v.z||0),T=new Oe.Vector3(m.x,m.y||0,m.z||0),B=M.distanceTo(T);b.position.x=M.x,b.position.y=M.y,b.position.z=M.z,b.scale.z=B,b.parent.localToWorld(T),b.lookAt(T)}}}}});function h(d){var p=t?d:e.layout.getLinkPosition(e.layout.graph.getLink(d.source,d.target).id),g=p[t?"source":"from"],v=p[t?"target":"to"];if(!(!g||!v||!g.hasOwnProperty("x")||!v.hasOwnProperty("x"))){var m=c(d);if(!m)d.__curve=null;else{var f=new Oe.Vector3(g.x,g.y||0,g.z||0),x=new Oe.Vector3(v.x,v.y||0,v.z||0),_=f.distanceTo(x),b,y=l(d);if(_>0){var S=v.x-g.x,E=v.y-g.y||0,C=new Oe.Vector3().subVectors(x,f),M=C.clone().multiplyScalar(m).cross(S!==0||E!==0?new Oe.Vector3(0,0,1):new Oe.Vector3(0,1,0)).applyAxisAngle(C.normalize(),y).add(new Oe.Vector3().addVectors(f,x).divideScalar(2));b=new Oe.QuadraticBezierCurve3(f,M,x)}else{var T=m*70,B=-y,G=B+Math.PI/2;b=new Oe.CubicBezierCurve3(f,new Oe.Vector3(T*Math.cos(G),T*Math.sin(G),0).add(f),new Oe.Vector3(T*Math.cos(B),T*Math.sin(B),0).add(f),x)}d.__curve=b}}}}function r(){var s=Ye(e.linkDirectionalArrowRelPos),a=Ye(e.linkDirectionalArrowLength),c=Ye(e.nodeVal);e.graphData.links.forEach(function(l){var u=l.__arrowObj;if(u){var h=t?l:e.layout.getLinkPosition(e.layout.graph.getLink(l.source,l.target).id),d=h[t?"source":"from"],p=h[t?"target":"to"];if(!(!d||!p||!d.hasOwnProperty("x")||!p.hasOwnProperty("x"))){var g=Math.cbrt(Math.max(0,c(d)||1))*e.nodeRelSize,v=Math.cbrt(Math.max(0,c(p)||1))*e.nodeRelSize,m=a(l),f=s(l),x=l.__curve?function(C){return l.__curve.getPoint(C)}:function(C){var M=function(B,G,J,R){return G[B]+(J[B]-G[B])*R||0};return{x:M("x",d,p,C),y:M("y",d,p,C),z:M("z",d,p,C)}},_=l.__curve?l.__curve.getLength():Math.sqrt(["x","y","z"].map(function(C){return Math.pow((p[C]||0)-(d[C]||0),2)}).reduce(function(C,M){return C+M},0)),b=g+m+(_-g-v-m)*f,y=x(b/_),S=x((b-m)/_);["x","y","z"].forEach(function(C){return u.position[C]=S[C]});var E=Yr(Oe.Vector3,Yt(["x","y","z"].map(function(C){return y[C]})));u.parent.localToWorld(E),u.lookAt(E)}}})}function o(){var s=Ye(e.linkDirectionalParticleSpeed);e.graphData.links.forEach(function(a){var c=a.__photonsObj&&a.__photonsObj.children,l=a.__singleHopPhotonsObj&&a.__singleHopPhotonsObj.children;if(!((!l||!l.length)&&(!c||!c.length))){var u=t?a:e.layout.getLinkPosition(e.layout.graph.getLink(a.source,a.target).id),h=u[t?"source":"from"],d=u[t?"target":"to"];if(!(!h||!d||!h.hasOwnProperty("x")||!d.hasOwnProperty("x"))){var p=s(a),g=a.__curve?function(m){return a.__curve.getPoint(m)}:function(m){var f=function(_,b,y,S){return b[_]+(y[_]-b[_])*S||0};return{x:f("x",h,d,m),y:f("y",h,d,m),z:f("z",h,d,m)}},v=[].concat(Yt(c||[]),Yt(l||[]));v.forEach(function(m,f){var x=m.parent.__linkThreeObjType==="singleHopPhotons";if(m.hasOwnProperty("__progressRatio")||(m.__progressRatio=x?0:f/c.length),m.__progressRatio+=p,m.__progressRatio>=1)if(!x)m.__progressRatio=m.__progressRatio%1;else{m.parent.remove(m),Wa(m);return}var _=m.__progressRatio,b=g(_);["x","y","z"].forEach(function(y){return m.position[y]=b[y]})})}}})}},emitParticle:function(e,t){if(t&&e.graphData.links.includes(t)){if(!t.__singleHopPhotonsObj){var i=new Oe.Group;i.__linkThreeObjType="singleHopPhotons",t.__singleHopPhotonsObj=i,e.graphScene.add(i)}var r=Ye(e.linkDirectionalParticleWidth),o=Math.ceil(r(t)*10)/10/2,s=e.linkDirectionalParticleResolution,a=new Oe.SphereGeometry(o,s,s),c=Ye(e.linkColor),l=Ye(e.linkDirectionalParticleColor),u=l(t)||c(t)||"#f0f0f0",h=new Oe.Color(Yi(u)),d=e.linkOpacity*3,p=new Oe.MeshLambertMaterial({color:h,transparent:!0,opacity:d});t.__singleHopPhotonsObj.add(new Oe.Mesh(a,p))}return this},getGraphBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0};if(!e.initialised)return null;var i=function r(o){var s=[];if(o.geometry){o.geometry.computeBoundingBox();var a=new Oe.Box3;a.copy(o.geometry.boundingBox).applyMatrix4(o.matrixWorld),s.push(a)}return s.concat.apply(s,Yt((o.children||[]).filter(function(c){return!c.hasOwnProperty("__graphObjType")||c.__graphObjType==="node"&&t(c.__data)}).map(r)))}(e.graphScene);return i.length?Object.assign.apply(Object,Yt(["x","y","z"].map(function(r){return Es({},r,[Vh(i,function(o){return o.min[r]}),Wh(i,function(o){return o.max[r]})])}))):null}},stateInit:function(){return{d3ForceLayout:fy().force("link",Z0()).force("charge",dy()).force("center",t0()).force("dagRadial",null).stop(),engineRunning:!1}},init:function(e,t){t.graphScene=e},update:function(e,t){var i=function(j){return j.some(function(re){return t.hasOwnProperty(re)})};if(e.engineRunning=!1,e.onUpdate(),e.nodeAutoColorBy!==null&&i(["nodeAutoColorBy","graphData","nodeColor"])&&jl(e.graphData.nodes,Ye(e.nodeAutoColorBy),e.nodeColor),e.linkAutoColorBy!==null&&i(["linkAutoColorBy","graphData","linkColor"])&&jl(e.graphData.links,Ye(e.linkAutoColorBy),e.linkColor),e._flushObjects||i(["graphData","nodeThreeObject","nodeThreeObjectExtend","nodeVal","nodeColor","nodeVisibility","nodeRelSize","nodeResolution","nodeOpacity"])){var r=Ye(e.nodeThreeObject),o=Ye(e.nodeThreeObjectExtend),s=Ye(e.nodeVal),a=Ye(e.nodeColor),c=Ye(e.nodeVisibility),l={},u={};qi(e.graphData.nodes.filter(c),e.graphScene,{purge:e._flushObjects||i(["nodeThreeObject","nodeThreeObjectExtend"]),objFilter:function(j){return j.__graphObjType==="node"},createObj:function(j){var re=r(j),k=o(j);re&&e.nodeThreeObject===re&&(re=re.clone());var Z;return re&&!k?Z=re:(Z=new Oe.Mesh,Z.__graphDefaultObj=!0,re&&k&&Z.add(re)),Z.__graphObjType="node",Z},updateObj:function(j,re){if(j.__graphDefaultObj){var k=s(re)||1,Z=Math.cbrt(k)*e.nodeRelSize,fe=e.nodeResolution;(!j.geometry.type.match(/^Sphere(Buffer)?Geometry$/)||j.geometry.parameters.radius!==Z||j.geometry.parameters.widthSegments!==fe)&&(l.hasOwnProperty(k)||(l[k]=new Oe.SphereGeometry(Z,fe,fe)),j.geometry.dispose(),j.geometry=l[k]);var Me=a(re),ve=new Oe.Color(Yi(Me||"#ffffaa")),z=e.nodeOpacity*pa(Me);(j.material.type!=="MeshLambertMaterial"||!j.material.color.equals(ve)||j.material.opacity!==z)&&(u.hasOwnProperty(Me)||(u[Me]=new Oe.MeshLambertMaterial({color:ve,transparent:!0,opacity:z})),j.material.dispose(),j.material=u[Me])}}})}if(e._flushObjects||i(["graphData","linkThreeObject","linkThreeObjectExtend","linkMaterial","linkColor","linkWidth","linkVisibility","linkResolution","linkOpacity","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution"])){var h=Ye(e.linkThreeObject),d=Ye(e.linkThreeObjectExtend),p=Ye(e.linkMaterial),g=Ye(e.linkVisibility),v=Ye(e.linkColor),m=Ye(e.linkWidth),f={},x={},_={},b=e.graphData.links.filter(g);if(qi(b,e.graphScene,{objBindAttr:"__lineObj",purge:e._flushObjects||i(["linkThreeObject","linkThreeObjectExtend","linkWidth"]),objFilter:function(j){return j.__graphObjType==="link"},exitObj:function(j){var re=j.__data&&j.__data.__singleHopPhotonsObj;re&&(re.parent.remove(re),Wa(re),delete j.__data.__singleHopPhotonsObj)},createObj:function(j){var re=h(j),k=d(j);re&&e.linkThreeObject===re&&(re=re.clone());var Z;if(!re||k){var fe=!!m(j);if(fe)Z=new Oe.Mesh;else{var Me=new Oe.BufferGeometry;Me[$l]("position",new Oe.BufferAttribute(new Float32Array(2*3),3)),Z=new Oe.Line(Me)}}var ve;return re?k?(ve=new Oe.Group,ve.__graphDefaultObj=!0,ve.add(Z),ve.add(re)):ve=re:(ve=Z,ve.__graphDefaultObj=!0),ve.renderOrder=10,ve.__graphObjType="link",ve},updateObj:function(j,re){if(j.__graphDefaultObj){var k=j.children.length?j.children[0]:j,Z=Math.ceil(m(re)*10)/10,fe=!!Z;if(fe){var Me=Z/2,ve=e.linkResolution;if(!k.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)||k.geometry.parameters.radiusTop!==Me||k.geometry.parameters.radialSegments!==ve){if(!f.hasOwnProperty(Z)){var z=new Oe.CylinderGeometry(Me,Me,1,ve,1,!1);z[Wr](new Oe.Matrix4().makeTranslation(0,1/2,0)),z[Wr](new Oe.Matrix4().makeRotationX(Math.PI/2)),f[Z]=z}k.geometry.dispose(),k.geometry=f[Z]}}var nt=p(re);if(nt)k.material=nt;else{var ye=v(re),Ce=new Oe.Color(Yi(ye||"#f0f0f0")),Ae=e.linkOpacity*pa(ye),$e=fe?"MeshLambertMaterial":"LineBasicMaterial";if(k.material.type!==$e||!k.material.color.equals(Ce)||k.material.opacity!==Ae){var Ne=fe?x:_;Ne.hasOwnProperty(ye)||(Ne[ye]=new Oe[$e]({color:Ce,transparent:Ae<1,opacity:Ae,depthWrite:Ae>=1})),k.material.dispose(),k.material=Ne[ye]}}}}}),e.linkDirectionalArrowLength||t.hasOwnProperty("linkDirectionalArrowLength")){var y=Ye(e.linkDirectionalArrowLength),S=Ye(e.linkDirectionalArrowColor);qi(b.filter(y),e.graphScene,{objBindAttr:"__arrowObj",objFilter:function(j){return j.__linkThreeObjType==="arrow"},createObj:function(){var j=new Oe.Mesh(void 0,new Oe.MeshLambertMaterial({transparent:!0}));return j.__linkThreeObjType="arrow",j},updateObj:function(j,re){var k=y(re),Z=e.linkDirectionalArrowResolution;if(!j.geometry.type.match(/^Cone(Buffer)?Geometry$/)||j.geometry.parameters.height!==k||j.geometry.parameters.radialSegments!==Z){var fe=new Oe.ConeGeometry(k*.25,k,Z);fe.translate(0,k/2,0),fe.rotateX(Math.PI/2),j.geometry.dispose(),j.geometry=fe}var Me=S(re)||v(re)||"#f0f0f0";j.material.color=new Oe.Color(Yi(Me)),j.material.opacity=e.linkOpacity*3*pa(Me)}})}if(e.linkDirectionalParticles||t.hasOwnProperty("linkDirectionalParticles")){var E=Ye(e.linkDirectionalParticles),C=Ye(e.linkDirectionalParticleWidth),M=Ye(e.linkDirectionalParticleColor),T={},B={};qi(b.filter(E),e.graphScene,{objBindAttr:"__photonsObj",objFilter:function(j){return j.__linkThreeObjType==="photons"},createObj:function(){var j=new Oe.Group;return j.__linkThreeObjType="photons",j},updateObj:function(j,re){var k=Math.round(Math.abs(E(re))),Z=!!j.children.length&&j.children[0],fe=Math.ceil(C(re)*10)/10/2,Me=e.linkDirectionalParticleResolution,ve;Z&&Z.geometry.parameters.radius===fe&&Z.geometry.parameters.widthSegments===Me?ve=Z.geometry:(B.hasOwnProperty(fe)||(B[fe]=new Oe.SphereGeometry(fe,Me,Me)),ve=B[fe],Z&&Z.geometry.dispose());var z=M(re)||v(re)||"#f0f0f0",nt=new Oe.Color(Yi(z)),ye=e.linkOpacity*3,Ce;Z&&Z.material.color.equals(nt)&&Z.material.opacity===ye?Ce=Z.material:(T.hasOwnProperty(z)||(T[z]=new Oe.MeshLambertMaterial({color:nt,transparent:!0,opacity:ye})),Ce=T[z],Z&&Z.material.dispose()),qi(Yt(new Array(k)).map(function(Ae,$e){return{idx:$e}}),j,{idAccessor:function($e){return $e.idx},createObj:function(){return new Oe.Mesh(ve,Ce)},updateObj:function($e){$e.geometry=ve,$e.material=Ce}})}})}}if(e._flushObjects=!1,i(["graphData","nodeId","linkSource","linkTarget","numDimensions","forceEngine","dagMode","dagNodeFilter","dagLevelDistance"])){e.engineRunning=!1,e.graphData.links.forEach(function(Q){Q.source=Q[e.linkSource],Q.target=Q[e.linkTarget]});var G=e.forceEngine!=="ngraph",J;if(G){(J=e.d3ForceLayout).stop().alpha(1).numDimensions(e.numDimensions).nodes(e.graphData.nodes);var R=e.d3ForceLayout.force("link");R&&R.id(function(Q){return Q[e.nodeId]}).links(e.graphData.links);var L=e.dagMode&&oM(e.graphData,function(Q){return Q[e.nodeId]},{nodeFilter:e.dagNodeFilter,onLoopError:e.onDagError||void 0}),U=Math.max.apply(Math,Yt(Object.values(L||[]))),X=e.dagLevelDistance||e.graphData.nodes.length/(U||1)*aM*(["radialin","radialout"].indexOf(e.dagMode)!==-1?.7:1);if(e.dagMode){var ie=function(j,re){return function(k){return j?(L[k[e.nodeId]]-U/2)*X*(re?-1:1):void 0}},te=ie(["lr","rl"].indexOf(e.dagMode)!==-1,e.dagMode==="rl"),H=ie(["td","bu"].indexOf(e.dagMode)!==-1,e.dagMode==="td"),O=ie(["zin","zout"].indexOf(e.dagMode)!==-1,e.dagMode==="zout");e.graphData.nodes.filter(e.dagNodeFilter).forEach(function(Q){Q.fx=te(Q),Q.fy=H(Q),Q.fz=O(Q)})}e.d3ForceLayout.force("dagRadial",["radialin","radialout"].indexOf(e.dagMode)!==-1?py(function(Q){var j=L[Q[e.nodeId]]||-1;return(e.dagMode==="radialin"?U-j:j)*X}).strength(function(Q){return e.dagNodeFilter(Q)?1:0}):null)}else{var W=Xl.graph();e.graphData.nodes.forEach(function(Q){W.addNode(Q[e.nodeId])}),e.graphData.links.forEach(function(Q){W.addLink(Q.source,Q.target)}),J=Xl.forcelayout(W,Mh({dimensions:e.numDimensions},e.ngraphPhysics)),J.graph=W}for(var oe=0;oe<e.warmupTicks&&!(G&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin);oe++)J[G?"tick":"step"]();e.layout=J,this.resetCountdown()}e.engineRunning=!0,e.onFinishUpdate()}});function cM(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Object,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,i=function(r){Wx(s,r);var o=qx(s);function s(){var a;Gx(this,s);for(var c=arguments.length,l=new Array(c),u=0;u<c;u++)l[u]=arguments[u];return a=o.call.apply(o,[this].concat(l)),a.__kapsuleInstance=n().apply(void 0,[].concat(Yt(t?[Eh(a)]:[]),l)),a}return Vx(s)}(e);return Object.keys(n()).forEach(function(r){return i.prototype[r]=function(){var o,s=(o=this.__kapsuleInstance)[r].apply(o,arguments);return s===this.__kapsuleInstance?this:s}}),i}var lM=window.THREE?window.THREE:{Group:Ei},Ah=cM(sM,lM.Group,!0);const ma={type:"change"},ga={type:"start"},va={type:"end"};class uM extends rn{constructor(e,t){super();const i=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:an.ROTATE,MIDDLE:an.DOLLY,RIGHT:an.PAN},this.target=new I;const o=1e-6,s=new I;let a=1,c=r.NONE,l=r.NONE,u=0,h=0,d=0;const p=new I,g=new ge,v=new ge,m=new I,f=new ge,x=new ge,_=new ge,b=new ge,y=[],S={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const k=i.domElement.getBoundingClientRect(),Z=i.domElement.ownerDocument.documentElement;i.screen.left=k.left+window.pageXOffset-Z.clientLeft,i.screen.top=k.top+window.pageYOffset-Z.clientTop,i.screen.width=k.width,i.screen.height=k.height};const E=function(){const k=new ge;return function(fe,Me){return k.set((fe-i.screen.left)/i.screen.width,(Me-i.screen.top)/i.screen.height),k}}(),C=function(){const k=new ge;return function(fe,Me){return k.set((fe-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-Me))/i.screen.width),k}}();this.rotateCamera=function(){const k=new I,Z=new nn,fe=new I,Me=new I,ve=new I,z=new I;return function(){z.set(v.x-g.x,v.y-g.y,0);let ye=z.length();ye?(p.copy(i.object.position).sub(i.target),fe.copy(p).normalize(),Me.copy(i.object.up).normalize(),ve.crossVectors(Me,fe).normalize(),Me.setLength(v.y-g.y),ve.setLength(v.x-g.x),z.copy(Me.add(ve)),k.crossVectors(z,p).normalize(),ye*=i.rotateSpeed,Z.setFromAxisAngle(k,ye),p.applyQuaternion(Z),i.object.up.applyQuaternion(Z),m.copy(k),d=ye):!i.staticMoving&&d&&(d*=Math.sqrt(1-i.dynamicDampingFactor),p.copy(i.object.position).sub(i.target),Z.setFromAxisAngle(m,d),p.applyQuaternion(Z),i.object.up.applyQuaternion(Z)),g.copy(v)}}(),this.zoomCamera=function(){let k;c===r.TOUCH_ZOOM_PAN?(k=u/h,u=h,i.object.isPerspectiveCamera?p.multiplyScalar(k):i.object.isOrthographicCamera?(i.object.zoom=Oa.clamp(i.object.zoom/k,i.minZoom,i.maxZoom),a!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(k=1+(x.y-f.y)*i.zoomSpeed,k!==1&&k>0&&(i.object.isPerspectiveCamera?p.multiplyScalar(k):i.object.isOrthographicCamera?(i.object.zoom=Oa.clamp(i.object.zoom/k,i.minZoom,i.maxZoom),a!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?f.copy(x):f.y+=(x.y-f.y)*this.dynamicDampingFactor)},this.panCamera=function(){const k=new ge,Z=new I,fe=new I;return function(){if(k.copy(b).sub(_),k.lengthSq()){if(i.object.isOrthographicCamera){const ve=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,z=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;k.x*=ve,k.y*=z}k.multiplyScalar(p.length()*i.panSpeed),fe.copy(p).cross(i.object.up).setLength(k.x),fe.add(Z.copy(i.object.up).setLength(k.y)),i.object.position.add(fe),i.target.add(fe),i.staticMoving?_.copy(b):_.add(k.subVectors(b,_).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(p.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,p.setLength(i.maxDistance)),f.copy(x)),p.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,p.setLength(i.minDistance)),f.copy(x)))},this.update=function(){p.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,p),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),s.distanceToSquared(i.object.position)>o&&(i.dispatchEvent(ma),s.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(s.distanceToSquared(i.object.position)>o||a!==i.object.zoom)&&(i.dispatchEvent(ma),s.copy(i.object.position),a=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){c=r.NONE,l=r.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),p.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(ma),s.copy(i.object.position),a=i.object.zoom};function M(k){i.enabled!==!1&&(y.length===0&&(i.domElement.setPointerCapture(k.pointerId),i.domElement.addEventListener("pointermove",T),i.domElement.addEventListener("pointerup",B)),oe(k),k.pointerType==="touch"?te(k):L(k))}function T(k){i.enabled!==!1&&(k.pointerType==="touch"?H(k):U(k))}function B(k){i.enabled!==!1&&(k.pointerType==="touch"?O(k):X(),Q(k),y.length===0&&(i.domElement.releasePointerCapture(k.pointerId),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",B)))}function G(k){Q(k)}function J(k){i.enabled!==!1&&(window.removeEventListener("keydown",J),l===r.NONE&&(k.code===i.keys[r.ROTATE]&&!i.noRotate?l=r.ROTATE:k.code===i.keys[r.ZOOM]&&!i.noZoom?l=r.ZOOM:k.code===i.keys[r.PAN]&&!i.noPan&&(l=r.PAN)))}function R(){i.enabled!==!1&&(l=r.NONE,window.addEventListener("keydown",J))}function L(k){if(c===r.NONE)switch(k.button){case i.mouseButtons.LEFT:c=r.ROTATE;break;case i.mouseButtons.MIDDLE:c=r.ZOOM;break;case i.mouseButtons.RIGHT:c=r.PAN;break}const Z=l!==r.NONE?l:c;Z===r.ROTATE&&!i.noRotate?(v.copy(C(k.pageX,k.pageY)),g.copy(v)):Z===r.ZOOM&&!i.noZoom?(f.copy(E(k.pageX,k.pageY)),x.copy(f)):Z===r.PAN&&!i.noPan&&(_.copy(E(k.pageX,k.pageY)),b.copy(_)),i.dispatchEvent(ga)}function U(k){const Z=l!==r.NONE?l:c;Z===r.ROTATE&&!i.noRotate?(g.copy(v),v.copy(C(k.pageX,k.pageY))):Z===r.ZOOM&&!i.noZoom?x.copy(E(k.pageX,k.pageY)):Z===r.PAN&&!i.noPan&&b.copy(E(k.pageX,k.pageY))}function X(){c=r.NONE,i.dispatchEvent(va)}function ie(k){if(i.enabled!==!1&&i.noZoom!==!0){switch(k.preventDefault(),k.deltaMode){case 2:f.y-=k.deltaY*.025;break;case 1:f.y-=k.deltaY*.01;break;default:f.y-=k.deltaY*25e-5;break}i.dispatchEvent(ga),i.dispatchEvent(va)}}function te(k){switch(j(k),y.length){case 1:c=r.TOUCH_ROTATE,v.copy(C(y[0].pageX,y[0].pageY)),g.copy(v);break;default:c=r.TOUCH_ZOOM_PAN;const Z=y[0].pageX-y[1].pageX,fe=y[0].pageY-y[1].pageY;h=u=Math.sqrt(Z*Z+fe*fe);const Me=(y[0].pageX+y[1].pageX)/2,ve=(y[0].pageY+y[1].pageY)/2;_.copy(E(Me,ve)),b.copy(_);break}i.dispatchEvent(ga)}function H(k){switch(j(k),y.length){case 1:g.copy(v),v.copy(C(k.pageX,k.pageY));break;default:const Z=re(k),fe=k.pageX-Z.x,Me=k.pageY-Z.y;h=Math.sqrt(fe*fe+Me*Me);const ve=(k.pageX+Z.x)/2,z=(k.pageY+Z.y)/2;b.copy(E(ve,z));break}}function O(k){switch(y.length){case 0:c=r.NONE;break;case 1:c=r.TOUCH_ROTATE,v.copy(C(k.pageX,k.pageY)),g.copy(v);break;case 2:c=r.TOUCH_ZOOM_PAN;for(let Z=0;Z<y.length;Z++)if(y[Z].pointerId!==k.pointerId){const fe=S[y[Z].pointerId];v.copy(C(fe.x,fe.y)),g.copy(v);break}break}i.dispatchEvent(va)}function W(k){i.enabled!==!1&&k.preventDefault()}function oe(k){y.push(k)}function Q(k){delete S[k.pointerId];for(let Z=0;Z<y.length;Z++)if(y[Z].pointerId==k.pointerId){y.splice(Z,1);return}}function j(k){let Z=S[k.pointerId];Z===void 0&&(Z=new ge,S[k.pointerId]=Z),Z.set(k.pageX,k.pageY)}function re(k){const Z=k.pointerId===y[0].pointerId?y[1]:y[0];return S[Z.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",W),i.domElement.removeEventListener("pointerdown",M),i.domElement.removeEventListener("pointercancel",G),i.domElement.removeEventListener("wheel",ie),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",B),window.removeEventListener("keydown",J),window.removeEventListener("keyup",R)},this.domElement.addEventListener("contextmenu",W),this.domElement.addEventListener("pointerdown",M),this.domElement.addEventListener("pointercancel",G),this.domElement.addEventListener("wheel",ie,{passive:!1}),window.addEventListener("keydown",J),window.addEventListener("keyup",R),this.handleResize(),this.update()}}const ql={type:"change"},_a={type:"start"},Yl={type:"end"},jr=new mo,Kl=new _n,hM=Math.cos(70*Oa.DEG2RAD);class fM extends rn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:an.ROTATE,MIDDLE:an.DOLLY,RIGHT:an.PAN},this.touches={ONE:ii.ROTATE,TWO:ii.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",w),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",w),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(ql),i.update(),o=r.NONE},this.update=function(){const D=new I,he=new nn().setFromUnitVectors(e.up,new I(0,1,0)),ne=he.clone().invert(),De=new I,Te=new nn,Le=new I,Se=2*Math.PI;return function(Ve=null){const N=i.object.position;D.copy(N).sub(i.target),D.applyQuaternion(he),a.setFromVector3(D),i.autoRotate&&o===r.NONE&&B(M(Ve)),i.enableDamping?(a.theta+=c.theta*i.dampingFactor,a.phi+=c.phi*i.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let pe=i.minAzimuthAngle,se=i.maxAzimuthAngle;isFinite(pe)&&isFinite(se)&&(pe<-Math.PI?pe+=Se:pe>Math.PI&&(pe-=Se),se<-Math.PI?se+=Se:se>Math.PI&&(se-=Se),pe<=se?a.theta=Math.max(pe,Math.min(se,a.theta)):a.theta=a.theta>(pe+se)/2?Math.max(pe,a.theta):Math.min(se,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&S||i.object.isOrthographicCamera?a.radius=te(a.radius):a.radius=te(a.radius*l),D.setFromSpherical(a),D.applyQuaternion(ne),N.copy(i.target).add(D),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let ee=!1;if(i.zoomToCursor&&S){let ue=null;if(i.object.isPerspectiveCamera){const Pe=D.length();ue=te(Pe*l);const We=Pe-ue;i.object.position.addScaledVector(b,We),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Pe=new I(y.x,y.y,0);Pe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),ee=!0;const We=new I(y.x,y.y,0);We.unproject(i.object),i.object.position.sub(We).add(Pe),i.object.updateMatrixWorld(),ue=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ue!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ue).add(i.object.position):(jr.origin.copy(i.object.position),jr.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(jr.direction))<hM?e.lookAt(i.target):(Kl.setFromNormalAndCoplanarPoint(i.object.up,i.target),jr.intersectPlane(Kl,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),ee=!0);return l=1,S=!1,ee||De.distanceToSquared(i.object.position)>s||8*(1-Te.dot(i.object.quaternion))>s||Le.distanceToSquared(i.target)>0?(i.dispatchEvent(ql),De.copy(i.object.position),Te.copy(i.object.quaternion),Le.copy(i.target),ee=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ae),i.domElement.removeEventListener("pointerdown",Ne),i.domElement.removeEventListener("pointercancel",qe),i.domElement.removeEventListener("wheel",P),i.domElement.removeEventListener("pointermove",Fe),i.domElement.removeEventListener("pointerup",qe),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",w),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const s=1e-6,a=new Na,c=new Na;let l=1;const u=new I,h=new ge,d=new ge,p=new ge,g=new ge,v=new ge,m=new ge,f=new ge,x=new ge,_=new ge,b=new I,y=new ge;let S=!1;const E=[],C={};function M(D){return D!==null?2*Math.PI/60*i.autoRotateSpeed*D:2*Math.PI/60/60*i.autoRotateSpeed}function T(){return Math.pow(.95,i.zoomSpeed)}function B(D){c.theta-=D}function G(D){c.phi-=D}const J=function(){const D=new I;return function(ne,De){D.setFromMatrixColumn(De,0),D.multiplyScalar(-ne),u.add(D)}}(),R=function(){const D=new I;return function(ne,De){i.screenSpacePanning===!0?D.setFromMatrixColumn(De,1):(D.setFromMatrixColumn(De,0),D.crossVectors(i.object.up,D)),D.multiplyScalar(ne),u.add(D)}}(),L=function(){const D=new I;return function(ne,De){const Te=i.domElement;if(i.object.isPerspectiveCamera){const Le=i.object.position;D.copy(Le).sub(i.target);let Se=D.length();Se*=Math.tan(i.object.fov/2*Math.PI/180),J(2*ne*Se/Te.clientHeight,i.object.matrix),R(2*De*Se/Te.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(J(ne*(i.object.right-i.object.left)/i.object.zoom/Te.clientWidth,i.object.matrix),R(De*(i.object.top-i.object.bottom)/i.object.zoom/Te.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function U(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ie(D){if(!i.zoomToCursor)return;S=!0;const he=i.domElement.getBoundingClientRect(),ne=D.clientX-he.left,De=D.clientY-he.top,Te=he.width,Le=he.height;y.x=ne/Te*2-1,y.y=-(De/Le)*2+1,b.set(y.x,y.y,1).unproject(i.object).sub(i.object.position).normalize()}function te(D){return Math.max(i.minDistance,Math.min(i.maxDistance,D))}function H(D){h.set(D.clientX,D.clientY)}function O(D){ie(D),f.set(D.clientX,D.clientY)}function W(D){g.set(D.clientX,D.clientY)}function oe(D){d.set(D.clientX,D.clientY),p.subVectors(d,h).multiplyScalar(i.rotateSpeed);const he=i.domElement;B(2*Math.PI*p.x/he.clientHeight),G(2*Math.PI*p.y/he.clientHeight),h.copy(d),i.update()}function Q(D){x.set(D.clientX,D.clientY),_.subVectors(x,f),_.y>0?U(T()):_.y<0&&X(T()),f.copy(x),i.update()}function j(D){v.set(D.clientX,D.clientY),m.subVectors(v,g).multiplyScalar(i.panSpeed),L(m.x,m.y),g.copy(v),i.update()}function re(D){ie(D),D.deltaY<0?X(T()):D.deltaY>0&&U(T()),i.update()}function k(D){let he=!1;switch(D.code){case i.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?G(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):L(0,i.keyPanSpeed),he=!0;break;case i.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?G(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):L(0,-i.keyPanSpeed),he=!0;break;case i.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?B(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):L(i.keyPanSpeed,0),he=!0;break;case i.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?B(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):L(-i.keyPanSpeed,0),he=!0;break}he&&(D.preventDefault(),i.update())}function Z(){if(E.length===1)h.set(E[0].pageX,E[0].pageY);else{const D=.5*(E[0].pageX+E[1].pageX),he=.5*(E[0].pageY+E[1].pageY);h.set(D,he)}}function fe(){if(E.length===1)g.set(E[0].pageX,E[0].pageY);else{const D=.5*(E[0].pageX+E[1].pageX),he=.5*(E[0].pageY+E[1].pageY);g.set(D,he)}}function Me(){const D=E[0].pageX-E[1].pageX,he=E[0].pageY-E[1].pageY,ne=Math.sqrt(D*D+he*he);f.set(0,ne)}function ve(){i.enableZoom&&Me(),i.enablePan&&fe()}function z(){i.enableZoom&&Me(),i.enableRotate&&Z()}function nt(D){if(E.length==1)d.set(D.pageX,D.pageY);else{const ne=_e(D),De=.5*(D.pageX+ne.x),Te=.5*(D.pageY+ne.y);d.set(De,Te)}p.subVectors(d,h).multiplyScalar(i.rotateSpeed);const he=i.domElement;B(2*Math.PI*p.x/he.clientHeight),G(2*Math.PI*p.y/he.clientHeight),h.copy(d)}function ye(D){if(E.length===1)v.set(D.pageX,D.pageY);else{const he=_e(D),ne=.5*(D.pageX+he.x),De=.5*(D.pageY+he.y);v.set(ne,De)}m.subVectors(v,g).multiplyScalar(i.panSpeed),L(m.x,m.y),g.copy(v)}function Ce(D){const he=_e(D),ne=D.pageX-he.x,De=D.pageY-he.y,Te=Math.sqrt(ne*ne+De*De);x.set(0,Te),_.set(0,Math.pow(x.y/f.y,i.zoomSpeed)),U(_.y),f.copy(x)}function Ae(D){i.enableZoom&&Ce(D),i.enablePan&&ye(D)}function $e(D){i.enableZoom&&Ce(D),i.enableRotate&&nt(D)}function Ne(D){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(D.pointerId),i.domElement.addEventListener("pointermove",Fe),i.domElement.addEventListener("pointerup",qe)),le(D),D.pointerType==="touch"?$(D):at(D))}function Fe(D){i.enabled!==!1&&(D.pointerType==="touch"?ce(D):dt(D))}function qe(D){we(D),E.length===0&&(i.domElement.releasePointerCapture(D.pointerId),i.domElement.removeEventListener("pointermove",Fe),i.domElement.removeEventListener("pointerup",qe)),i.dispatchEvent(Yl),o=r.NONE}function at(D){let he;switch(D.button){case 0:he=i.mouseButtons.LEFT;break;case 1:he=i.mouseButtons.MIDDLE;break;case 2:he=i.mouseButtons.RIGHT;break;default:he=-1}switch(he){case an.DOLLY:if(i.enableZoom===!1)return;O(D),o=r.DOLLY;break;case an.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enablePan===!1)return;W(D),o=r.PAN}else{if(i.enableRotate===!1)return;H(D),o=r.ROTATE}break;case an.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enableRotate===!1)return;H(D),o=r.ROTATE}else{if(i.enablePan===!1)return;W(D),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(_a)}function dt(D){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;oe(D);break;case r.DOLLY:if(i.enableZoom===!1)return;Q(D);break;case r.PAN:if(i.enablePan===!1)return;j(D);break}}function P(D){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(D.preventDefault(),i.dispatchEvent(_a),re(D),i.dispatchEvent(Yl))}function w(D){i.enabled===!1||i.enablePan===!1||k(D)}function $(D){switch(de(D),E.length){case 1:switch(i.touches.ONE){case ii.ROTATE:if(i.enableRotate===!1)return;Z(),o=r.TOUCH_ROTATE;break;case ii.PAN:if(i.enablePan===!1)return;fe(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case ii.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ve(),o=r.TOUCH_DOLLY_PAN;break;case ii.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;z(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(_a)}function ce(D){switch(de(D),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;nt(D),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ye(D),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ae(D),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;$e(D),i.update();break;default:o=r.NONE}}function ae(D){i.enabled!==!1&&D.preventDefault()}function le(D){E.push(D)}function we(D){delete C[D.pointerId];for(let he=0;he<E.length;he++)if(E[he].pointerId==D.pointerId){E.splice(he,1);return}}function de(D){let he=C[D.pointerId];he===void 0&&(he=new ge,C[D.pointerId]=he),he.set(D.pageX,D.pageY)}function _e(D){const he=D.pointerId===E[0].pointerId?E[1]:E[0];return C[he.pointerId]}i.domElement.addEventListener("contextmenu",ae),i.domElement.addEventListener("pointerdown",Ne),i.domElement.addEventListener("pointercancel",qe),i.domElement.addEventListener("wheel",P,{passive:!1}),this.update()}}const dM={type:"change"};class pM extends rn{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const i=this,r=1e-6,o=new nn,s=new I;this.tmpQuaternion=new nn,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new I(0,0,0),this.rotationVector=new I(0,0,0),this.keydown=function(g){if(!(g.altKey||this.enabled===!1)){switch(g.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(g){if(this.enabled!==!1){switch(g.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()}},this.pointerdown=function(g){if(this.enabled!==!1)if(this.dragToLook)this.status++;else{switch(g.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(g){if(this.enabled!==!1&&(!this.dragToLook||this.status>0)){const v=this.getContainerDimensions(),m=v.size[0]/2,f=v.size[1]/2;this.moveState.yawLeft=-(g.pageX-v.offset[0]-m)/m,this.moveState.pitchDown=(g.pageY-v.offset[1]-f)/f,this.updateRotationVector()}},this.pointerup=function(g){if(this.enabled!==!1){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(g.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()}},this.pointercancel=function(){this.enabled!==!1&&(this.dragToLook?(this.status=0,this.moveState.yawLeft=this.moveState.pitchDown=0):(this.moveState.forward=0,this.moveState.back=0,this.updateMovementVector()),this.updateRotationVector())},this.contextMenu=function(g){this.enabled!==!1&&g.preventDefault()},this.update=function(g){if(this.enabled===!1)return;const v=g*i.movementSpeed,m=g*i.rollSpeed;i.object.translateX(i.moveVector.x*v),i.object.translateY(i.moveVector.y*v),i.object.translateZ(i.moveVector.z*v),i.tmpQuaternion.set(i.rotationVector.x*m,i.rotationVector.y*m,i.rotationVector.z*m,1).normalize(),i.object.quaternion.multiply(i.tmpQuaternion),(s.distanceToSquared(i.object.position)>r||8*(1-o.dot(i.object.quaternion))>r)&&(i.dispatchEvent(dM),o.copy(i.object.quaternion),s.copy(i.object.position))},this.updateMovementVector=function(){const g=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-g+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",a),this.domElement.removeEventListener("pointerdown",l),this.domElement.removeEventListener("pointermove",c),this.domElement.removeEventListener("pointerup",u),this.domElement.removeEventListener("pointercancel",h),window.removeEventListener("keydown",d),window.removeEventListener("keyup",p)};const a=this.contextMenu.bind(this),c=this.pointermove.bind(this),l=this.pointerdown.bind(this),u=this.pointerup.bind(this),h=this.pointercancel.bind(this),d=this.keydown.bind(this),p=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",a),this.domElement.addEventListener("pointerdown",l),this.domElement.addEventListener("pointermove",c),this.domElement.addEventListener("pointerup",u),this.domElement.addEventListener("pointercancel",h),window.addEventListener("keydown",d),window.addEventListener("keyup",p),this.updateMovementVector(),this.updateRotationVector()}}const mM={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Mo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const gM=new as(-1,1,1,-1,0,1);class vM extends Bt{constructor(){super(),this.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ut([0,2,0,0,2,0],2))}}const _M=new vM;class yM{constructor(e){this._mesh=new Qt(_M,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,gM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class bM extends Mo{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Tn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Tu.clone(e.uniforms),this.material=new Tn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new yM(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Zl extends Mo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let s,a;this.inverse?(s=0,a=1):(s=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}}class xM extends Mo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class MM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ge);this._width=i.width,this._height=i.height,t=new zn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Li}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new bM(mM),this.copyPass.material.blending=Sn,this.clock=new Bu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,o=this.passes.length;r<o;r++){const s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Zl!==void 0&&(s instanceof Zl?i=!0:s instanceof xM&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ge);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class SM extends Mo{constructor(e,t,i=null,r=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xe}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let o,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=r}}function EM(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function hr(n,e){return hr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},hr(n,e)}function wM(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,hr(n,e)}function ja(n){return ja=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ja(n)}function TM(n){try{return Function.toString.call(n).indexOf("[native code]")!==-1}catch{return typeof n=="function"}}function AM(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Kr(n,e,t){return AM()?Kr=Reflect.construct.bind():Kr=function(r,o,s){var a=[null];a.push.apply(a,o);var c=Function.bind.apply(r,a),l=new c;return s&&hr(l,s.prototype),l},Kr.apply(null,arguments)}function Xa(n){var e=typeof Map=="function"?new Map:void 0;return Xa=function(i){if(i===null||!TM(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(i))return e.get(i);e.set(i,r)}function r(){return Kr(i,arguments,ja(this).constructor)}return r.prototype=Object.create(i.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),hr(r,i)},Xa(n)}var wi=function(n){wM(e,n);function e(t){var i;return i=n.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this,EM(i)}return e}(Xa(Error));function ya(n){return Math.round(n*255)}function RM(n,e,t){return ya(n)+","+ya(e)+","+ya(t)}function Jl(n,e,t,i){if(i===void 0&&(i=RM),e===0)return i(t,t,t);var r=(n%360+360)%360/60,o=(1-Math.abs(2*t-1))*e,s=o*(1-Math.abs(r%2-1)),a=0,c=0,l=0;r>=0&&r<1?(a=o,c=s):r>=1&&r<2?(a=s,c=o):r>=2&&r<3?(c=o,l=s):r>=3&&r<4?(c=s,l=o):r>=4&&r<5?(a=s,l=o):r>=5&&r<6&&(a=o,l=s);var u=t-o/2,h=a+u,d=c+u,p=l+u;return i(h,d,p)}var Ql={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function CM(n){if(typeof n!="string")return n;var e=n.toLowerCase();return Ql[e]?"#"+Ql[e]:n}var PM=/^#[a-fA-F0-9]{6}$/,LM=/^#[a-fA-F0-9]{8}$/,OM=/^#[a-fA-F0-9]{3}$/,DM=/^#[a-fA-F0-9]{4}$/,ba=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,IM=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,NM=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,UM=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function ws(n){if(typeof n!="string")throw new wi(3);var e=CM(n);if(e.match(PM))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(LM)){var t=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:t}}if(e.match(OM))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(DM)){var i=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:i}}var r=ba.exec(e);if(r)return{red:parseInt(""+r[1],10),green:parseInt(""+r[2],10),blue:parseInt(""+r[3],10)};var o=IM.exec(e.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var s=NM.exec(e);if(s){var a=parseInt(""+s[1],10),c=parseInt(""+s[2],10)/100,l=parseInt(""+s[3],10)/100,u="rgb("+Jl(a,c,l)+")",h=ba.exec(u);if(!h)throw new wi(4,e,u);return{red:parseInt(""+h[1],10),green:parseInt(""+h[2],10),blue:parseInt(""+h[3],10)}}var d=UM.exec(e.substring(0,50));if(d){var p=parseInt(""+d[1],10),g=parseInt(""+d[2],10)/100,v=parseInt(""+d[3],10)/100,m="rgb("+Jl(p,g,v)+")",f=ba.exec(m);if(!f)throw new wi(4,e,m);return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10),alpha:parseFloat(""+d[4])>1?parseFloat(""+d[4])/100:parseFloat(""+d[4])}}throw new wi(5)}var FM=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},eu=FM;function xi(n){var e=n.toString(16);return e.length===1?"0"+e:e}function tu(n,e,t){if(typeof n=="number"&&typeof e=="number"&&typeof t=="number")return eu("#"+xi(n)+xi(e)+xi(t));if(typeof n=="object"&&e===void 0&&t===void 0)return eu("#"+xi(n.red)+xi(n.green)+xi(n.blue));throw new wi(6)}function kM(n,e,t,i){if(typeof n=="string"&&typeof e=="number"){var r=ws(n);return"rgba("+r.red+","+r.green+","+r.blue+","+e+")"}else{if(typeof n=="number"&&typeof e=="number"&&typeof t=="number"&&typeof i=="number")return i>=1?tu(n,e,t):"rgba("+n+","+e+","+t+","+i+")";if(typeof n=="object"&&e===void 0&&t===void 0&&i===void 0)return n.alpha>=1?tu(n.red,n.green,n.blue):"rgba("+n.red+","+n.green+","+n.blue+","+n.alpha+")"}throw new wi(7)}function Rh(n,e,t){return function(){var r=t.concat(Array.prototype.slice.call(arguments));return r.length>=e?n.apply(this,r):Rh(n,e,r)}}function BM(n){return Rh(n,n.length,[])}function zM(n,e,t){return Math.max(n,Math.min(e,t))}function HM(n,e){if(e==="transparent")return e;var t=ws(e),i=typeof t.alpha=="number"?t.alpha:1,r=Hh({},t,{alpha:zM(0,1,(i*100+parseFloat(n)*100)/100)});return kM(r)}var GM=BM(HM),VM=GM,ei=Object.freeze({Linear:Object.freeze({None:function(n){return n},In:function(n){return this.None(n)},Out:function(n){return this.None(n)},InOut:function(n){return this.None(n)}}),Quadratic:Object.freeze({In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}}),Cubic:Object.freeze({In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}}),Quartic:Object.freeze({In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}}),Quintic:Object.freeze({In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}}),Sinusoidal:Object.freeze({In:function(n){return 1-Math.sin((1-n)*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.sin(Math.PI*(.5-n)))}}),Exponential:Object.freeze({In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}}),Circular:Object.freeze({In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}}),Elastic:Object.freeze({In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(n){var e=1.70158;return n===1?1:n*n*((e+1)*n-e)},Out:function(n){var e=1.70158;return n===0?0:--n*n*((e+1)*n+e)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)}}),Bounce:Object.freeze({In:function(n){return 1-ei.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?ei.Bounce.In(n*2)*.5:ei.Bounce.Out(n*2-1)*.5+.5}}),generatePow:function(n){return n===void 0&&(n=4),n=n<Number.EPSILON?Number.EPSILON:n,n=n>1e4?1e4:n,{In:function(e){return Math.pow(e,n)},Out:function(e){return 1-Math.pow(1-e,n)},InOut:function(e){return e<.5?Math.pow(e*2,n)/2:(1-Math.pow(2-e*2,n))/2+.5}}}}),tr=function(){return performance.now()},WM=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},n.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},n.prototype.update=function(e,t){e===void 0&&(e=tr()),t===void 0&&(t=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var o=this._tweens[i[r]],s=!t;o&&o.update(e,s)===!1&&!t&&delete this._tweens[i[r]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),Ti={Linear:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),o=Ti.Utils.Linear;return e<0?o(n[0],n[1],i):e>1?o(n[t],n[t-1],t-i):o(n[r],n[r+1>t?t:r+1],i-r)},Bezier:function(n,e){for(var t=0,i=n.length-1,r=Math.pow,o=Ti.Utils.Bernstein,s=0;s<=i;s++)t+=r(1-e,i-s)*r(e,s)*n[s]*o(i,s);return t},CatmullRom:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),o=Ti.Utils.CatmullRom;return n[0]===n[t]?(e<0&&(r=Math.floor(i=t*(1+e))),o(n[(r-1+t)%t],n[r],n[(r+1)%t],n[(r+2)%t],i-r)):e<0?n[0]-(o(n[0],n[0],n[1],n[1],-i)-n[0]):e>1?n[t]-(o(n[t],n[t],n[t-1],n[t-1],i-t)-n[t]):o(n[r?r-1:0],n[r],n[t<r+1?t:r+1],n[t<r+2?t:r+2],i-r)},Utils:{Linear:function(n,e,t){return(e-n)*t+n},Bernstein:function(n,e){var t=Ti.Utils.Factorial;return t(n)/t(e)/t(n-e)},Factorial:function(){var n=[1];return function(e){var t=1;if(n[e])return n[e];for(var i=e;i>1;i--)t*=i;return n[e]=t,t}}(),CatmullRom:function(n,e,t,i,r){var o=(t-n)*.5,s=(i-e)*.5,a=r*r,c=r*a;return(2*e-2*t+o+s)*c+(-3*e+3*t-2*o-s)*a+o*r+e}}},jM=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),$a=new WM,nu=function(){function n(e,t){t===void 0&&(t=$a),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=ei.Linear.None,this._interpolationFunction=Ti.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=jM.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t,this},n.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e,this},n.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},n.prototype.start=function(e,t){if(e===void 0&&(e=tr()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var o in this._valuesEnd)r[o]=this._valuesEnd[o];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},n.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},n.prototype._setupProperties=function(e,t,i,r,o){for(var s in i){var a=e[s],c=Array.isArray(a),l=c?"array":typeof a,u=!c&&Array.isArray(i[s]);if(!(l==="undefined"||l==="function")){if(u){var h=i[s];if(h.length===0)continue;for(var d=[a],p=0,g=h.length;p<g;p+=1){var v=this._handleRelativeValue(a,h[p]);if(isNaN(v)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}d.push(v)}u&&(i[s]=d)}if((l==="object"||c)&&a&&!u){t[s]=c?[]:{};var m=a;for(var f in m)t[s][f]=m[f];r[s]=c?[]:{};var h=i[s];if(!this._isDynamic){var x={};for(var f in h)x[f]=h[f];i[s]=h=x}this._setupProperties(m,t[s],h,r[s],o)}else(typeof t[s]>"u"||o)&&(t[s]=a),c||(t[s]*=1),u?r[s]=i[s].slice().reverse():r[s]=t[s]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(e){return e===void 0&&(e=tr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},n.prototype.resume=function(e){return e===void 0&&(e=tr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return e===void 0&&(e=$a),this._group=e,this},n.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},n.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},n.prototype.easing=function(e){return e===void 0&&(e=ei.Linear.None),this._easingFunction=e,this},n.prototype.interpolation=function(e){return e===void 0&&(e=Ti.Linear),this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){if(e===void 0&&(e=tr()),t===void 0&&(t=!0),this._isPaused)return!0;var i,r,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>o)return!1;t&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),r=(e-this._startTime)/this._duration,r=this._duration===0||r>1?1:r;var s=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,s),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),r===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,c=this._chainedTweens.length;a<c;a++)this._chainedTweens[a].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,i,r){for(var o in i)if(t[o]!==void 0){var s=t[o]||0,a=i[o],c=Array.isArray(e[o]),l=Array.isArray(a),u=!c&&l;u?e[o]=this._interpolationFunction(a,r):typeof a=="object"&&a?this._updateProperties(e[o],s,a,r):(a=this._handleRelativeValue(s,a),typeof a=="number"&&(e[o]=s+(a-s)*r))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n}(),cn=$a;cn.getAll.bind(cn);cn.removeAll.bind(cn);cn.add.bind(cn);cn.remove.bind(cn);var XM=cn.update.bind(cn);function $M(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}var qM=`.scene-nav-info {
  bottom: 5px;
  width: 100%;
  text-align: center;
  color: slategrey;
  opacity: 0.7;
  font-size: 10px;
}

.scene-tooltip {
  top: 0;
  color: lavender;
  font-size: 15px;
}

.scene-nav-info, .scene-tooltip {
  position: absolute;
  font-family: sans-serif;
  pointer-events: none;
  user-select: none;
}

.scene-container canvas:focus {
  outline: none;
}`;$M(qM);function YM(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,o,s,a=[],c=!0,l=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=o.call(t)).done)&&(a.push(i.value),a.length!==e);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(l)throw r}}return a}}function KM(n,e,t){return e=rS(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function ZM(n,e){return QM(n)||YM(n,e)||Ch(n,e)||nS()}function Ki(n){return JM(n)||eS(n)||Ch(n)||tS()}function JM(n){if(Array.isArray(n))return qa(n)}function QM(n){if(Array.isArray(n))return n}function eS(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Ch(n,e){if(n){if(typeof n=="string")return qa(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return qa(n,e)}}function qa(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function tS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function iS(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function rS(n){var e=iS(n,"string");return typeof e=="symbol"?e:String(e)}var et=window.THREE?window.THREE:{WebGLRenderer:Iu,Scene:R_,PerspectiveCamera:Vt,Raycaster:zu,SRGBColorSpace:gt,TextureLoader:Y_,Vector2:ge,Vector3:I,Box3:ni,Color:Xe,Mesh:Qt,SphereGeometry:yo,MeshBasicMaterial:is,BackSide:Ct,EventDispatcher:rn,MOUSE:an,Quaternion:nn,Spherical:Na,Clock:Bu},Ph=Ss({props:{width:{default:window.innerWidth,onChange:function(e,t,i){isNaN(e)&&(t.width=i)}},height:{default:window.innerHeight,onChange:function(e,t,i){isNaN(e)&&(t.height=i)}},backgroundColor:{default:"#000011"},backgroundImageUrl:{},onBackgroundImageLoaded:{},showNavInfo:{default:!0},skyRadius:{default:5e4},objects:{default:[]},lights:{default:[]},enablePointerInteraction:{default:!0,onChange:function(e,t){t.hoverObj=null,t.toolTipElem&&(t.toolTipElem.innerHTML="")},triggerUpdate:!1},lineHoverPrecision:{default:1,triggerUpdate:!1},hoverOrderComparator:{default:function(){return-1},triggerUpdate:!1},hoverFilter:{default:function(){return!0},triggerUpdate:!1},tooltipContent:{triggerUpdate:!1},hoverDuringDrag:{default:!1,triggerUpdate:!1},clickAfterDrag:{default:!1,triggerUpdate:!1},onHover:{default:function(){},triggerUpdate:!1},onClick:{default:function(){},triggerUpdate:!1},onRightClick:{triggerUpdate:!1}},methods:{tick:function(e){if(e.initialised){if(e.controls.update&&e.controls.update(e.clock.getDelta()),e.postProcessingComposer?e.postProcessingComposer.render():e.renderer.render(e.scene,e.camera),e.extraRenderers.forEach(function(o){return o.render(e.scene,e.camera)}),e.enablePointerInteraction){var t=null;if(e.hoverDuringDrag||!e.isPointerDragging){var i=this.intersectingObjects(e.pointerPos.x,e.pointerPos.y).filter(function(o){return e.hoverFilter(o.object)}).sort(function(o,s){return e.hoverOrderComparator(o.object,s.object)}),r=i.length?i[0]:null;t=r?r.object:null,e.intersectionPoint=r?r.point:null}t!==e.hoverObj&&(e.onHover(t,e.hoverObj),e.toolTipElem.innerHTML=t&&Ye(e.tooltipContent)(t)||"",e.hoverObj=t)}XM()}return this},getPointerPos:function(e){var t=e.pointerPos,i=t.x,r=t.y;return{x:i,y:r}},cameraPosition:function(e,t,i,r){var o=e.camera;if(t&&e.initialised){var s=t,a=i||{x:0,y:0,z:0};if(!r)u(s),h(a);else{var c=Object.assign({},o.position),l=d();new nu(c).to(s,r).easing(ei.Quadratic.Out).onUpdate(u).start(),new nu(l).to(a,r/3).easing(ei.Quadratic.Out).onUpdate(h).start()}return this}return Object.assign({},o.position,{lookAt:d()});function u(p){var g=p.x,v=p.y,m=p.z;g!==void 0&&(o.position.x=g),v!==void 0&&(o.position.y=v),m!==void 0&&(o.position.z=m)}function h(p){var g=new et.Vector3(p.x,p.y,p.z);e.controls.target?e.controls.target=g:o.lookAt(g)}function d(){return Object.assign(new et.Vector3(0,0,-1e3).applyQuaternion(o.quaternion).add(o.position))}},zoomToFit:function(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:10,r=arguments.length,o=new Array(r>3?r-3:0),s=3;s<r;s++)o[s-3]=arguments[s];return this.fitToBbox(this.getBbox.apply(this,o),t,i)},fitToBbox:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10,o=e.camera;if(t){var s=new et.Vector3(0,0,0),a=Math.max.apply(Math,Ki(Object.entries(t).map(function(p){var g=ZM(p,2),v=g[0],m=g[1];return Math.max.apply(Math,Ki(m.map(function(f){return Math.abs(s[v]-f)})))})))*2,c=(1-r*2/e.height)*o.fov,l=a/Math.atan(c*Math.PI/180),u=l/o.aspect,h=Math.max(l,u);if(h>0){var d=s.clone().sub(o.position).normalize().multiplyScalar(-h);this.cameraPosition(d,s,i)}}return this},getBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0},i=new et.Box3(new et.Vector3(0,0,0),new et.Vector3(0,0,0)),r=e.objects.filter(t);return r.length?(r.forEach(function(o){return i.expandByObject(o)}),Object.assign.apply(Object,Ki(["x","y","z"].map(function(o){return KM({},o,[i.min[o],i.max[o]])})))):null},getScreenCoords:function(e,t,i,r){var o=new et.Vector3(t,i,r);return o.project(this.camera()),{x:(o.x+1)*e.width/2,y:-(o.y-1)*e.height/2}},getSceneCoords:function(e,t,i){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=new et.Vector2(t/e.width*2-1,-(i/e.height)*2+1),s=new et.Raycaster;return s.setFromCamera(o,e.camera),Object.assign({},s.ray.at(r,new et.Vector3))},intersectingObjects:function(e,t,i){var r=new et.Vector2(t/e.width*2-1,-(i/e.height)*2+1),o=new et.Raycaster;return o.params.Line.threshold=e.lineHoverPrecision,o.setFromCamera(r,e.camera),o.intersectObjects(e.objects,!0)},renderer:function(e){return e.renderer},scene:function(e){return e.scene},camera:function(e){return e.camera},postProcessingComposer:function(e){return e.postProcessingComposer},controls:function(e){return e.controls},tbControls:function(e){return e.controls}},stateInit:function(){return{scene:new et.Scene,camera:new et.PerspectiveCamera,clock:new et.Clock}},init:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=i.controlType,o=r===void 0?"trackball":r,s=i.rendererConfig,a=s===void 0?{}:s,c=i.extraRenderers,l=c===void 0?[]:c,u=i.waitForLoadComplete,h=u===void 0?!0:u;e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.className="scene-container",t.container.style.position="relative",t.container.appendChild(t.navInfo=document.createElement("div")),t.navInfo.className="scene-nav-info",t.navInfo.textContent={orbit:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",trackball:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",fly:"WASD: move, R|F: up | down, Q|E: roll, up|down: pitch, left|right: yaw"}[o]||"",t.navInfo.style.display=t.showNavInfo?null:"none",t.toolTipElem=document.createElement("div"),t.toolTipElem.classList.add("scene-tooltip"),t.container.appendChild(t.toolTipElem),t.pointerPos=new et.Vector2,t.pointerPos.x=-2,t.pointerPos.y=-2,["pointermove","pointerdown"].forEach(function(d){return t.container.addEventListener(d,function(p){if(d==="pointerdown"&&(t.isPointerPressed=!0),!t.isPointerDragging&&p.type==="pointermove"&&(p.pressure>0||t.isPointerPressed)&&(p.pointerType!=="touch"||p.movementX===void 0||[p.movementX,p.movementY].some(function(m){return Math.abs(m)>1}))&&(t.isPointerDragging=!0),t.enablePointerInteraction){var g=v(t.container);t.pointerPos.x=p.pageX-g.left,t.pointerPos.y=p.pageY-g.top,t.toolTipElem.style.top="".concat(t.pointerPos.y,"px"),t.toolTipElem.style.left="".concat(t.pointerPos.x,"px"),t.toolTipElem.style.transform="translate(-".concat(t.pointerPos.x/t.width*100,"%, ").concat(t.height-t.pointerPos.y<100?"calc(-100% - 8px)":"21px",")")}function v(m){var f=m.getBoundingClientRect(),x=window.pageXOffset||document.documentElement.scrollLeft,_=window.pageYOffset||document.documentElement.scrollTop;return{top:f.top+_,left:f.left+x}}},{passive:!0})}),t.container.addEventListener("pointerup",function(d){t.isPointerPressed=!1,!(t.isPointerDragging&&(t.isPointerDragging=!1,!t.clickAfterDrag))&&requestAnimationFrame(function(){d.button===0&&t.onClick(t.hoverObj||null,d,t.intersectionPoint),d.button===2&&t.onRightClick&&t.onRightClick(t.hoverObj||null,d,t.intersectionPoint)})},{passive:!0,capture:!0}),t.container.addEventListener("contextmenu",function(d){t.onRightClick&&d.preventDefault()}),t.renderer=new et.WebGLRenderer(Object.assign({antialias:!0,alpha:!0},a)),t.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),t.container.appendChild(t.renderer.domElement),t.extraRenderers=l,t.extraRenderers.forEach(function(d){d.domElement.style.position="absolute",d.domElement.style.top="0px",d.domElement.style.pointerEvents="none",t.container.appendChild(d.domElement)}),t.postProcessingComposer=new MM(t.renderer),t.postProcessingComposer.addPass(new SM(t.scene,t.camera)),t.controls=new{trackball:uM,orbit:fM,fly:pM}[o](t.camera,t.renderer.domElement),o==="fly"&&(t.controls.movementSpeed=300,t.controls.rollSpeed=Math.PI/6,t.controls.dragToLook=!0),(o==="trackball"||o==="orbit")&&(t.controls.minDistance=.1,t.controls.maxDistance=t.skyRadius,t.controls.addEventListener("start",function(){t.controlsEngaged=!0}),t.controls.addEventListener("change",function(){t.controlsEngaged&&(t.controlsDragging=!0)}),t.controls.addEventListener("end",function(){t.controlsEngaged=!1,t.controlsDragging=!1})),[t.renderer,t.postProcessingComposer].concat(Ki(t.extraRenderers)).forEach(function(d){return d.setSize(t.width,t.height)}),t.camera.aspect=t.width/t.height,t.camera.updateProjectionMatrix(),t.camera.position.z=1e3,t.scene.add(t.skysphere=new et.Mesh),t.skysphere.visible=!1,t.loadComplete=t.scene.visible=!h,window.scene=t.scene},update:function(e,t){if(e.width&&e.height&&(t.hasOwnProperty("width")||t.hasOwnProperty("height"))&&(e.container.style.width="".concat(e.width,"px"),e.container.style.height="".concat(e.height,"px"),[e.renderer,e.postProcessingComposer].concat(Ki(e.extraRenderers)).forEach(function(o){return o.setSize(e.width,e.height)}),e.camera.aspect=e.width/e.height,e.camera.updateProjectionMatrix()),t.hasOwnProperty("skyRadius")&&e.skyRadius&&(e.controls.hasOwnProperty("maxDistance")&&t.skyRadius&&(e.controls.maxDistance=Math.min(e.controls.maxDistance,e.skyRadius)),e.camera.far=e.skyRadius*2.5,e.camera.updateProjectionMatrix(),e.skysphere.geometry=new et.SphereGeometry(e.skyRadius)),t.hasOwnProperty("backgroundColor")){var i=ws(e.backgroundColor).alpha;i===void 0&&(i=1),e.renderer.setClearColor(new et.Color(VM(1,e.backgroundColor)),i)}t.hasOwnProperty("backgroundImageUrl")&&(e.backgroundImageUrl?new et.TextureLoader().load(e.backgroundImageUrl,function(o){o.colorSpace=et.SRGBColorSpace,e.skysphere.material=new et.MeshBasicMaterial({map:o,side:et.BackSide}),e.skysphere.visible=!0,e.onBackgroundImageLoaded&&setTimeout(e.onBackgroundImageLoaded),!e.loadComplete&&r()}):(e.skysphere.visible=!1,e.skysphere.material.map=null,!e.loadComplete&&r())),t.hasOwnProperty("showNavInfo")&&(e.navInfo.style.display=e.showNavInfo?null:"none"),t.hasOwnProperty("lights")&&((t.lights||[]).forEach(function(o){return e.scene.remove(o)}),e.lights.forEach(function(o){return e.scene.add(o)})),t.hasOwnProperty("objects")&&((t.objects||[]).forEach(function(o){return e.scene.remove(o)}),e.objects.forEach(function(o){return e.scene.add(o)}));function r(){e.loadComplete=e.scene.visible=!0}}});function oS(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}var aS=`.graph-info-msg {
  top: 50%;
  width: 100%;
  text-align: center;
  color: lavender;
  opacity: 0.7;
  font-size: 22px;
  position: absolute;
  font-family: Sans-serif;
}

.scene-container .clickable {
  cursor: pointer;
}

.scene-container .grabbable {
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}

.scene-container .grabbable:active {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}`;oS(aS);function iu(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Xr(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?iu(Object(t),!0).forEach(function(i){pr(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):iu(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function pr(n,e,t){return e=fS(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function So(n){return sS(n)||cS(n)||lS(n)||uS()}function sS(n){if(Array.isArray(n))return Ya(n)}function cS(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function lS(n,e){if(n){if(typeof n=="string")return Ya(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ya(n,e)}}function Ya(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function uS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hS(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function fS(n){var e=hS(n,"string");return typeof e=="symbol"?e:String(e)}function Lh(n,e){var t=new e;return t._destructor&&t._destructor(),{linkProp:function(r){return{default:t[r](),onChange:function(s,a){a[n][r](s)},triggerUpdate:!1}},linkMethod:function(r){return function(o){for(var s=o[n],a=arguments.length,c=new Array(a>1?a-1:0),l=1;l<a;l++)c[l-1]=arguments[l];var u=s[r].apply(s,c);return u===s?this:u}}}}var ru=window.THREE?window.THREE:{AmbientLight:Q_,DirectionalLight:J_,Vector3:I},dS=170,Oh=Lh("forceGraph",Ah),pS=Object.assign.apply(Object,So(["jsonUrl","graphData","numDimensions","dagMode","dagLevelDistance","dagNodeFilter","onDagError","nodeRelSize","nodeId","nodeVal","nodeResolution","nodeColor","nodeAutoColorBy","nodeOpacity","nodeVisibility","nodeThreeObject","nodeThreeObjectExtend","linkSource","linkTarget","linkVisibility","linkColor","linkAutoColorBy","linkOpacity","linkWidth","linkResolution","linkCurvature","linkCurveRotation","linkMaterial","linkThreeObject","linkThreeObjectExtend","linkPositionUpdate","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowRelPos","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleSpeed","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution","forceEngine","d3AlphaDecay","d3VelocityDecay","d3AlphaMin","ngraphPhysics","warmupTicks","cooldownTicks","cooldownTime","onEngineTick","onEngineStop"].map(function(n){return pr({},n,Oh.linkProp(n))}))),mS=Object.assign.apply(Object,So(["refresh","getGraphBbox","d3Force","d3ReheatSimulation","emitParticle"].map(function(n){return pr({},n,Oh.linkMethod(n))}))),Zr=Lh("renderObjs",Ph),gS=Object.assign.apply(Object,So(["width","height","backgroundColor","showNavInfo","enablePointerInteraction"].map(function(n){return pr({},n,Zr.linkProp(n))}))),vS=Object.assign.apply(Object,So(["lights","cameraPosition","postProcessingComposer"].map(function(n){return pr({},n,Zr.linkMethod(n))})).concat([{graph2ScreenCoords:Zr.linkMethod("getScreenCoords"),screen2GraphCoords:Zr.linkMethod("getSceneCoords")}])),_S=Ss({props:Xr(Xr({nodeLabel:{default:"name",triggerUpdate:!1},linkLabel:{default:"name",triggerUpdate:!1},linkHoverPrecision:{default:1,onChange:function(e,t){return t.renderObjs.lineHoverPrecision(e)},triggerUpdate:!1},enableNavigationControls:{default:!0,onChange:function(e,t){var i=t.renderObjs.controls();i&&(i.enabled=e,e&&i.domElement&&i.domElement.dispatchEvent(new PointerEvent("pointerup")))},triggerUpdate:!1},enableNodeDrag:{default:!0,triggerUpdate:!1},onNodeDrag:{default:function(){},triggerUpdate:!1},onNodeDragEnd:{default:function(){},triggerUpdate:!1},onNodeClick:{triggerUpdate:!1},onNodeRightClick:{triggerUpdate:!1},onNodeHover:{triggerUpdate:!1},onLinkClick:{triggerUpdate:!1},onLinkRightClick:{triggerUpdate:!1},onLinkHover:{triggerUpdate:!1},onBackgroundClick:{triggerUpdate:!1},onBackgroundRightClick:{triggerUpdate:!1}},pS),gS),methods:Xr(Xr({zoomToFit:function(e,t,i){for(var r,o=arguments.length,s=new Array(o>3?o-3:0),a=3;a<o;a++)s[a-3]=arguments[a];return e.renderObjs.fitToBbox((r=e.forceGraph).getGraphBbox.apply(r,s),t,i),this},pauseAnimation:function(e){return e.animationFrameRequestId!==null&&(cancelAnimationFrame(e.animationFrameRequestId),e.animationFrameRequestId=null),this},resumeAnimation:function(e){return e.animationFrameRequestId===null&&this._animationCycle(),this},_animationCycle:function(e){e.enablePointerInteraction&&(this.renderer().domElement.style.cursor=null),e.forceGraph.tickFrame(),e.renderObjs.tick(),e.animationFrameRequestId=requestAnimationFrame(this._animationCycle)},scene:function(e){return e.renderObjs.scene()},camera:function(e){return e.renderObjs.camera()},renderer:function(e){return e.renderObjs.renderer()},controls:function(e){return e.renderObjs.controls()},tbControls:function(e){return e.renderObjs.tbControls()},_destructor:function(){this.pauseAnimation(),this.graphData({nodes:[],links:[]})}},mS),vS),stateInit:function(e){var t=e.controlType,i=e.rendererConfig,r=e.extraRenderers,o=new Ah;return{forceGraph:o,renderObjs:Ph({controlType:t,rendererConfig:i,extraRenderers:r}).objects([o]).lights([new ru.AmbientLight(13421772,Math.PI),new ru.DirectionalLight(16777215,.6*Math.PI)])}},init:function(e,t){e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.style.position="relative";var i=document.createElement("div");t.container.appendChild(i),t.renderObjs(i);var r=t.renderObjs.camera(),o=t.renderObjs.renderer(),s=t.renderObjs.controls();s.enabled=!!t.enableNavigationControls,t.lastSetCameraZ=r.position.z;var a;t.container.appendChild(a=document.createElement("div")),a.className="graph-info-msg",a.textContent="",t.forceGraph.onLoading(function(){a.textContent="Loading..."}).onFinishLoading(function(){a.textContent=""}).onUpdate(function(){t.graphData=t.forceGraph.graphData(),r.position.x===0&&r.position.y===0&&r.position.z===t.lastSetCameraZ&&t.graphData.nodes.length&&(r.lookAt(t.forceGraph.position),t.lastSetCameraZ=r.position.z=Math.cbrt(t.graphData.nodes.length)*dS)}).onFinishUpdate(function(){if(t._dragControls){var c=t.graphData.nodes.find(function(u){return u.__initialFixedPos&&!u.__disposeControlsAfterDrag});c?c.__disposeControlsAfterDrag=!0:t._dragControls.dispose(),t._dragControls=void 0}if(t.enableNodeDrag&&t.enablePointerInteraction&&t.forceEngine==="d3"){var l=t._dragControls=new e0(t.graphData.nodes.map(function(u){return u.__threeObj}).filter(function(u){return u}),r,o.domElement);l.addEventListener("dragstart",function(u){s.enabled=!1,u.object.__initialPos=u.object.position.clone(),u.object.__prevPos=u.object.position.clone();var h=gn(u.object).__data;!h.__initialFixedPos&&(h.__initialFixedPos={fx:h.fx,fy:h.fy,fz:h.fz}),!h.__initialPos&&(h.__initialPos={x:h.x,y:h.y,z:h.z}),["x","y","z"].forEach(function(d){return h["f".concat(d)]=h[d]}),o.domElement.classList.add("grabbable")}),l.addEventListener("drag",function(u){var h=gn(u.object);if(!u.object.hasOwnProperty("__graphObjType")){var d=u.object.__initialPos,p=u.object.__prevPos,g=u.object.position;h.position.add(g.clone().sub(p)),p.copy(g),g.copy(d)}var v=h.__data,m=h.position,f={x:m.x-v.x,y:m.y-v.y,z:m.z-v.z};["x","y","z"].forEach(function(x){return v["f".concat(x)]=v[x]=m[x]}),t.forceGraph.d3AlphaTarget(.3).resetCountdown(),v.__dragged=!0,t.onNodeDrag(v,f)}),l.addEventListener("dragend",function(u){delete u.object.__initialPos,delete u.object.__prevPos;var h=gn(u.object).__data;h.__disposeControlsAfterDrag&&(l.dispose(),delete h.__disposeControlsAfterDrag);var d=h.__initialFixedPos,p=h.__initialPos,g={x:p.x-h.x,y:p.y-h.y,z:p.z-h.z};d&&(["x","y","z"].forEach(function(v){var m="f".concat(v);d[m]===void 0&&delete h[m]}),delete h.__initialFixedPos,delete h.__initialPos,h.__dragged&&(delete h.__dragged,t.onNodeDragEnd(h,g))),t.forceGraph.d3AlphaTarget(0).resetCountdown(),t.enableNavigationControls&&(s.enabled=!0,s.domElement&&s.domElement.ownerDocument&&s.domElement.ownerDocument.dispatchEvent(new PointerEvent("pointerup",{pointerType:"touch"}))),o.domElement.classList.remove("grabbable")})}}),t.renderObjs.renderer().useLegacyLights=!1,t.renderObjs.hoverOrderComparator(function(c,l){var u=gn(c);if(!u)return 1;var h=gn(l);if(!h)return-1;var d=function(g){return g.__graphObjType==="node"};return d(h)-d(u)}).tooltipContent(function(c){var l=gn(c);return l&&Ye(t["".concat(l.__graphObjType,"Label")])(l.__data)||""}).hoverDuringDrag(!1).onHover(function(c){var l=gn(c);if(l!==t.hoverObj){var u=t.hoverObj?t.hoverObj.__graphObjType:null,h=t.hoverObj?t.hoverObj.__data:null,d=l?l.__graphObjType:null,p=l?l.__data:null;if(u&&u!==d){var g=t["on".concat(u==="node"?"Node":"Link","Hover")];g&&g(null,h)}if(d){var v=t["on".concat(d==="node"?"Node":"Link","Hover")];v&&v(p,u===d?h:null)}o.domElement.classList[l&&t["on".concat(d==="node"?"Node":"Link","Click")]||!l&&t.onBackgroundClick?"add":"remove"]("clickable"),t.hoverObj=l}}).clickAfterDrag(!1).onClick(function(c,l){var u=gn(c);if(u){var h=t["on".concat(u.__graphObjType==="node"?"Node":"Link","Click")];h&&h(u.__data,l)}else t.onBackgroundClick&&t.onBackgroundClick(l)}).onRightClick(function(c,l){var u=gn(c);if(u){var h=t["on".concat(u.__graphObjType==="node"?"Node":"Link","RightClick")];h&&h(u.__data,l)}else t.onBackgroundRightClick&&t.onBackgroundRightClick(l)}),this._animationCycle()}});function gn(n){for(var e=n;e&&!e.hasOwnProperty("__graphObjType");)e=e.parent;return e}const Eo={width:F.number,height:F.number,graphData:F.shape({nodes:F.arrayOf(F.object).isRequired,links:F.arrayOf(F.object).isRequired}),backgroundColor:F.string,nodeRelSize:F.number,nodeId:F.string,nodeLabel:F.oneOfType([F.string,F.func]),nodeVal:F.oneOfType([F.number,F.string,F.func]),nodeVisibility:F.oneOfType([F.bool,F.string,F.func]),nodeColor:F.oneOfType([F.string,F.func]),nodeAutoColorBy:F.oneOfType([F.string,F.func]),onNodeHover:F.func,onNodeClick:F.func,linkSource:F.string,linkTarget:F.string,linkLabel:F.oneOfType([F.string,F.func]),linkVisibility:F.oneOfType([F.bool,F.string,F.func]),linkColor:F.oneOfType([F.string,F.func]),linkAutoColorBy:F.oneOfType([F.string,F.func]),linkWidth:F.oneOfType([F.number,F.string,F.func]),linkCurvature:F.oneOfType([F.number,F.string,F.func]),linkDirectionalArrowLength:F.oneOfType([F.number,F.string,F.func]),linkDirectionalArrowColor:F.oneOfType([F.string,F.func]),linkDirectionalArrowRelPos:F.oneOfType([F.number,F.string,F.func]),linkDirectionalParticles:F.oneOfType([F.number,F.string,F.func]),linkDirectionalParticleSpeed:F.oneOfType([F.number,F.string,F.func]),linkDirectionalParticleWidth:F.oneOfType([F.number,F.string,F.func]),linkDirectionalParticleColor:F.oneOfType([F.string,F.func]),onLinkHover:F.func,onLinkClick:F.func,dagMode:F.oneOf(["td","bu","lr","rl","zin","zout","radialin","radialout"]),dagLevelDistance:F.number,dagNodeFilter:F.func,onDagError:F.func,d3AlphaMin:F.number,d3AlphaDecay:F.number,d3VelocityDecay:F.number,warmupTicks:F.number,cooldownTicks:F.number,cooldownTime:F.number,onEngineTick:F.func,onEngineStop:F.func,getGraphBbox:F.func},Dh={zoomToFit:F.func,onNodeRightClick:F.func,onNodeDrag:F.func,onNodeDragEnd:F.func,onLinkRightClick:F.func,linkHoverPrecision:F.number,onBackgroundClick:F.func,onBackgroundRightClick:F.func,enablePointerInteraction:F.bool,enableNodeDrag:F.bool},Ts={showNavInfo:F.bool,nodeOpacity:F.number,nodeResolution:F.number,nodeThreeObject:F.oneOfType([F.object,F.string,F.func]),nodeThreeObjectExtend:F.oneOfType([F.bool,F.string,F.func]),linkOpacity:F.number,linkResolution:F.number,linkCurveRotation:F.oneOfType([F.number,F.string,F.func]),linkMaterial:F.oneOfType([F.object,F.string,F.func]),linkThreeObject:F.oneOfType([F.object,F.string,F.func]),linkThreeObjectExtend:F.oneOfType([F.bool,F.string,F.func]),linkPositionUpdate:F.func,linkDirectionalArrowResolution:F.number,linkDirectionalParticleResolution:F.number,forceEngine:F.oneOf(["d3","ngraph"]),ngraphPhysics:F.object,numDimensions:F.oneOf([1,2,3])};Object.assign({},Eo,Dh,{linkLineDash:F.oneOfType([F.arrayOf(F.number),F.string,F.func]),nodeCanvasObjectMode:F.oneOfType([F.string,F.func]),nodeCanvasObject:F.func,nodePointerAreaPaint:F.func,linkCanvasObjectMode:F.oneOfType([F.string,F.func]),linkCanvasObject:F.func,linkPointerAreaPaint:F.func,autoPauseRedraw:F.bool,minZoom:F.number,maxZoom:F.number,enableZoomInteraction:F.bool,enablePanInteraction:F.bool,onZoom:F.func,onZoomEnd:F.func,onRenderFramePre:F.func,onRenderFramePost:F.func});const yS=Object.assign({},Eo,Dh,Ts,{enableNavigationControls:F.bool,controlType:F.oneOf(["trackball","orbit","fly"]),rendererConfig:F.object,extraRenderers:F.arrayOf(F.shape({render:F.func.isRequired}))});Object.assign({},Eo,Ts,{nodeDesc:F.oneOfType([F.string,F.func]),linkDesc:F.oneOfType([F.string,F.func])});Object.assign({},Eo,Ts,{markerAttrs:F.object,yOffset:F.number,glScale:F.number});const Ih=uf(_S,{methodNames:["emitParticle","d3Force","d3ReheatSimulation","stopAnimation","pauseAnimation","resumeAnimation","cameraPosition","zoomToFit","getGraphBbox","screen2GraphCoords","graph2ScreenCoords","postProcessingComposer","lights","scene","camera","renderer","controls","refresh"],initPropNames:["controlType","rendererConfig","extraRenderers"]});Ih.displayName="ForceGraph3D";Ih.propTypes=yS;export{Ih as default};
