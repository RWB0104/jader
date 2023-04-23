"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[52],{9217:function(e,t,n){var r=n(4836);t.Z=void 0;var l=r(n(4938)),a=n(5893),i=(0,l.default)((0,a.jsx)("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp");t.Z=i},1523:function(e,t,n){var r=n(4836);t.Z=void 0;var l=r(n(4938)),a=n(5893),i=(0,l.default)((0,a.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"}),"Article");t.Z=i},7036:function(e,t,n){var r=n(4836);t.Z=void 0;var l=r(n(4938)),a=n(5893),i=(0,l.default)((0,a.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.Z=i},1733:function(e,t,n){var r=n(4836);t.Z=void 0;var l=r(n(4938)),a=n(5893),i=(0,l.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=i},9369:function(e,t,n){var r=n(4836);t.Z=void 0;var l=r(n(4938)),a=n(5893),i=(0,l.default)((0,a.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");t.Z=i},1849:function(e,t,n){var r=n(4836);t.Z=void 0;var l=r(n(4938)),a=n(5893),i=(0,l.default)((0,a.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"Refresh");t.Z=i},6730:function(e,t,n){var r=n(4836);t.Z=void 0;var l=r(n(4938)),a=n(5893),i=(0,l.default)([(0,a.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"0"),(0,a.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"Schedule");t.Z=i},2761:function(e,t,n){var r=n(4836);t.Z=void 0;var l=r(n(4938)),a=n(5893),i=(0,l.default)((0,a.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.Z=i},6305:function(e,t,n){n.d(t,{H:function(){return P}});var r=n(6681),l=n(5411),a=n(5487);function i(e,t,n){var r;if("string"==typeof e){let l=document;t&&((0,a.k)(Boolean(t.current),"Scope provided, but no element detected."),l=t.current),n?(null!==(r=n[e])&&void 0!==r||(n[e]=l.querySelectorAll(e)),e=n[e]):e=l.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}var s=n(6955);class u{constructor(e){this.animations=e.filter(Boolean)}then(e,t){return Promise.all(this.animations).then(e).catch(t)}getAll(e){return this.animations[0][e]}setAll(e,t){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=t}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}stop(){this.runAll("stop")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}var o=n(8254),c=n(5194),f=n(5794),h=n(4547),d=n(1059),p=n(5086),m=n(2284),v=n(6917),y=n(599),g=n(6615),A=n(3967),E=n(406);function x(e,t,n,r){var l;return"number"==typeof t?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):"<"===t?n:null!==(l=r.get(t))&&void 0!==l?l:e}let z=(e,t,n)=>{let r=t-e;return((n-e)%r+r)%r+e};var M=n(3338),w=n(10),k=n(22);function C(e,t){return e.at!==t.at?e.at-t.at:null===e.value?1:null===t.value?-1:0}function R(e,t){return t.has(e)||t.set(e,{}),t.get(e)}function Z(e,t){return t[e]||(t[e]=[]),t[e]}let S=e=>"number"==typeof e,b=e=>e.every(S);function H(e,t,n,r){let l=i(e,r),d=l.length;(0,a.k)(Boolean(d),"No valid element provided.");let p=[];for(let m=0;m<d;m++){let v=l[m];s.R.has(v)||function(e){let t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=(0,c.v)(e)?new f.e(t,{enableHardwareAcceleration:!1}):new h.W(t,{enableHardwareAcceleration:!0});n.mount(e),s.R.set(e,n)}(v);let y=s.R.get(v),g={...n};"function"==typeof g.delay&&(g.delay=g.delay(m,d)),p.push(...(0,o.w)(y,{...t,transition:g},{}))}return new u(p)}let j=e=>Array.isArray(e)&&Array.isArray(e[0]),L=e=>function(t,n,r){let l;return l=j(t)?function(e,t,n){let r=[],l=function(e,{defaultTransition:t={},...n}={},r){let l=t.duration||.3,a=new Map,s=new Map,u={},o=new Map,c=0,f=0,h=0;for(let d=0;d<e.length;d++){let S=e[d];if("string"==typeof S){o.set(S,f);continue}if(!Array.isArray(S)){o.set(S.name,x(f,S.at,c,o));continue}let[H,j,L={}]=S;void 0!==L.at&&(f=x(f,L.at,c,o));let P=0,O=(e,n,r,a=0,i=0)=>{let s=Array.isArray(e)?e:[e],{delay:u=0,times:o=(0,y.Y)(s),type:c="keyframes",...d}=n,{ease:A=t.ease||"easeOut",duration:E}=n,x="function"==typeof u?u(a,i):u,C=s.length;if(C<=2&&"spring"===c){let R=100;if(2===C&&b(s)){let Z=s[1]-s[0];R=Math.abs(Z)}let S={...d};void 0!==E&&(S.duration=(0,v.w)(E));let H=function(e,t=100){let n=(0,p.S)({keyframes:[0,t],...e}),r=Math.min((0,m.i)(n),m.E);return{type:"keyframes",ease:e=>n.next(r*e).value/t,duration:(0,v.X)(r)}}(S,R);A=H.ease,E=H.duration}null!=E||(E=l);let j=f+x,L=j+E;1===o.length&&0===o[0]&&(o[1]=1);let O=o.length-s.length;O>0&&(0,g.c)(o,O),1===s.length&&s.unshift(null),function(e,t,n,r,l,a){!function(e,t,n){for(let r=0;r<e.length;r++){let l=e[r];l.at>t&&l.at<n&&((0,w.cl)(e,l),r--)}}(e,l,a);for(let i=0;i<t.length;i++){var s;e.push({value:t[i],at:(0,k.C)(l,a,r[i]),easing:(s=i,(0,M.N)(n)?n[z(0,n.length,s)]:n)})}}(r,s,A,o,j,L),P=Math.max(x+E,P),h=Math.max(L,h)};if((0,E.i)(H)){let V=R(H,s);O(j,L,Z("default",V))}else{let I=i(H,r,u),B=I.length;for(let D=0;D<B;D++){let $=I[D],_=R($,s);for(let N in j){var W;O(j[N],L[W=N]?{...L,...L[W]}:{...L},Z(N,_),D,B)}}c=f,f+=P}}return s.forEach((e,r)=>{for(let l in e){let i=e[l];i.sort(C);let s=[],u=[],o=[];for(let c=0;c<i.length;c++){let{at:f,value:d,easing:p}=i[c];s.push(d),u.push((0,A.Y)(0,h,f)),o.push(p||"easeOut")}0!==u[0]&&(u.unshift(0),s.unshift(s[0]),o.unshift("easeInOut")),1!==u[u.length-1]&&(u.push(1),s.push(null)),a.has(r)||a.set(r,{keyframes:{},transition:{}});let m=a.get(r);m.keyframes[l]=s,m.transition[l]={...t,duration:h,ease:o,times:u,...n}}}),a}(e,t,n);return l.forEach(({keyframes:e,transition:t},n)=>{let l;l=(0,E.i)(n)?(0,d.D)(n,e.default,t.default):H(n,e,t),r.push(l)}),new u(r)}(t,n,e):"object"!=typeof n||Array.isArray(n)?(0,d.D)(t,n,r):H(t,n,r,e),e&&e.animations.push(l),l};function P(){let e=(0,r.h)(()=>({current:null,animations:[]})),t=(0,r.h)(()=>L(e));return(0,l.z)(()=>{e.animations.forEach(e=>e.stop())}),[e,t]}L()},5820:function(e,t,n){n.d(t,{M:function(){return y}});var r=n(7294),l=n(6405),a=n(8868);function i(){let e=(0,r.useRef)(!1);return(0,a.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var s=n(240),u=n(6681);class o extends r.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let n=this.props.sizeRef.current;n.height=t.offsetHeight||0,n.width=t.offsetWidth||0,n.top=t.offsetTop,n.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function c({children:e,isPresent:t}){let n=(0,r.useId)(),l=(0,r.useRef)(null),a=(0,r.useRef)({width:0,height:0,top:0,left:0});return(0,r.useInsertionEffect)(()=>{let{width:e,height:r,top:i,left:s}=a.current;if(t||!l.current||!e||!r)return;l.current.dataset.motionPopId=n;let u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${i}px !important;
            left: ${s}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),r.createElement(o,{isPresent:t,childRef:l,sizeRef:a},r.cloneElement(e,{ref:l}))}let f=({children:e,initial:t,isPresent:n,onExitComplete:l,custom:a,presenceAffectsLayout:i,mode:o})=>{let f=(0,u.h)(h),d=(0,r.useId)(),p=(0,r.useMemo)(()=>({id:d,initial:t,isPresent:n,custom:a,onExitComplete(e){for(let t of(f.set(e,!0),f.values()))if(!t)return;l&&l()},register:e=>(f.set(e,!1),()=>f.delete(e))}),i?void 0:[n]);return(0,r.useMemo)(()=>{f.forEach((e,t)=>f.set(t,!1))},[n]),r.useEffect(()=>{n||f.size||!l||l()},[n]),"popLayout"===o&&(e=r.createElement(c,{isPresent:n},e)),r.createElement(s.O.Provider,{value:p},e)};function h(){return new Map}var d=n(5364),p=n(5411),m=n(5487);let v=e=>e.key||"",y=({children:e,custom:t,initial:n=!0,onExitComplete:s,exitBeforeEnter:u,presenceAffectsLayout:o=!0,mode:c="sync"})=>{(0,m.k)(!u,"Replace exitBeforeEnter with mode='wait'");let[h]=function(){let e=i(),[t,n]=(0,r.useState)(0),a=(0,r.useCallback)(()=>{e.current&&n(t+1)},[t]),s=(0,r.useCallback)(()=>l.Z_.postRender(a),[a]);return[s,t]}(),y=(0,r.useContext)(d.p).forceRender;y&&(h=y);let g=i(),A=function(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}(e),E=A,x=new Set,z=(0,r.useRef)(E),M=(0,r.useRef)(new Map).current,w=(0,r.useRef)(!0);if((0,a.L)(()=>{w.current=!1,function(e,t){e.forEach(e=>{let n=v(e);t.set(n,e)})}(A,M),z.current=E}),(0,p.z)(()=>{w.current=!0,M.clear(),x.clear()}),w.current)return r.createElement(r.Fragment,null,E.map(e=>r.createElement(f,{key:v(e),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:o,mode:c},e)));E=[...E];let k=z.current.map(v),C=A.map(v),R=k.length;for(let Z=0;Z<R;Z++){let S=k[Z];-1===C.indexOf(S)&&x.add(S)}return"wait"===c&&x.size&&(E=[]),x.forEach(e=>{if(-1!==C.indexOf(e))return;let n=M.get(e);if(!n)return;let l=k.indexOf(e),a=()=>{M.delete(e),x.delete(e);let t=z.current.findIndex(t=>t.key===e);if(z.current.splice(t,1),!x.size){if(z.current=A,!1===g.current)return;h(),s&&s()}};E.splice(l,0,r.createElement(f,{key:v(n),isPresent:!1,onExitComplete:a,custom:t,presenceAffectsLayout:o,mode:c},n))}),E=E.map(e=>{let t=e.key;return x.has(t)?e:r.createElement(f,{key:v(e),isPresent:!0,presenceAffectsLayout:o,mode:c},e)}),r.createElement(r.Fragment,null,x.size?E:E.map(e=>(0,r.cloneElement)(e)))}},5411:function(e,t,n){n.d(t,{z:function(){return l}});var r=n(7294);function l(e){return(0,r.useEffect)(()=>()=>e(),[])}}}]);