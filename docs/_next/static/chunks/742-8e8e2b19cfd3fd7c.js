(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[742],{1760:function(e,t,r){"use strict";var n=r(7462),o=r(3366),i=r(7294),a=r(8662),l=r(2097),s=r(3566),u=r(4771),c=r(5893);let d=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function p(e){return`scale(${e}, ${e**2})`}let f={entering:{opacity:1,transform:p(1)},entered:{opacity:1,transform:"none"}},m="undefined"!=typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),h=i.forwardRef(function(e,t){let{addEndListener:r,appear:h=!0,children:v,easing:g,in:Z,onEnter:y,onEntered:b,onEntering:x,onExit:E,onExited:P,onExiting:M,style:w,timeout:S="auto",TransitionComponent:C=a.ZP}=e,R=(0,o.Z)(e,d),T=i.useRef(),k=i.useRef(),D=(0,l.Z)(),z=i.useRef(null),j=(0,u.Z)(z,v.ref,t),H=e=>t=>{if(e){let r=z.current;void 0===t?e(r):e(r,t)}},L=H(x),N=H((e,t)=>{let r;(0,s.n)(e);let{duration:n,delay:o,easing:i}=(0,s.C)({style:w,timeout:S,easing:g},{mode:"enter"});"auto"===S?(r=D.transitions.getAutoHeightDuration(e.clientHeight),k.current=r):r=n,e.style.transition=[D.transitions.create("opacity",{duration:r,delay:o}),D.transitions.create("transform",{duration:m?r:.666*r,delay:o,easing:i})].join(","),y&&y(e,t)}),F=H(b),A=H(M),O=H(e=>{let t;let{duration:r,delay:n,easing:o}=(0,s.C)({style:w,timeout:S,easing:g},{mode:"exit"});"auto"===S?(t=D.transitions.getAutoHeightDuration(e.clientHeight),k.current=t):t=r,e.style.transition=[D.transitions.create("opacity",{duration:t,delay:n}),D.transitions.create("transform",{duration:m?t:.666*t,delay:m?n:n||.333*t,easing:o})].join(","),e.style.opacity=0,e.style.transform=p(.75),E&&E(e)}),I=H(P),_=e=>{"auto"===S&&(T.current=setTimeout(e,k.current||0)),r&&r(z.current,e)};return i.useEffect(()=>()=>{clearTimeout(T.current)},[]),(0,c.jsx)(C,(0,n.Z)({appear:h,in:Z,nodeRef:z,onEnter:N,onEntered:F,onEntering:L,onExit:O,onExited:I,onExiting:A,addEndListener:_,timeout:"auto"===S?null:S},R,{children:(e,t)=>i.cloneElement(v,(0,n.Z)({style:(0,n.Z)({opacity:0,transform:p(.75),visibility:"exited"!==e||Z?void 0:"hidden"},f[e],w,v.props.style),ref:j},t))}))});h.muiSupportAuto=!0,t.Z=h},7742:function(e,t,r){"use strict";var n=r(7294);let o=n.createContext({});t.Z=o},4803:function(e,t,r){"use strict";r.d(t,{Z:function(){return er}});var n=r(7462),o=r(3366),i=r(7294);r(9864);var a=r(6010),l=r(4780),s=r(7505),u=r(7074),c=r(6446),d=r(7742),p=r(1588),f=r(4867);function m(e){return(0,f.Z)("MuiList",e)}(0,p.Z)("MuiList",["root","padding","dense","subheader"]);var h=r(5893);let v=["children","className","component","dense","disablePadding","subheader"],g=e=>{let{classes:t,disablePadding:r,dense:n,subheader:o}=e;return(0,l.Z)({root:["root",!r&&"padding",n&&"dense",o&&"subheader"]},m,t)},Z=(0,u.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,!r.disablePadding&&t.padding,r.dense&&t.dense,r.subheader&&t.subheader]}})(({ownerState:e})=>(0,n.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),y=i.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiList"}),{children:l,className:s,component:u="ul",dense:p=!1,disablePadding:f=!1,subheader:m}=r,y=(0,o.Z)(r,v),b=i.useMemo(()=>({dense:p}),[p]),x=(0,n.Z)({},r,{component:u,dense:p,disablePadding:f}),E=g(x);return(0,h.jsx)(d.Z.Provider,{value:b,children:(0,h.jsxs)(Z,(0,n.Z)({as:u,className:(0,a.Z)(E.root,s),ref:t,ownerState:x},y,{children:[m,l]}))})});var b=r(5806).Z,x=r(4771),E=r(3289);let P=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function M(e,t,r){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:r?null:e.firstChild}function w(e,t,r){return e===t?r?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:r?null:e.lastChild}function S(e,t){if(void 0===t)return!0;let r=e.innerText;return void 0===r&&(r=e.textContent),0!==(r=r.trim().toLowerCase()).length&&(t.repeating?r[0]===t.keys[0]:0===r.indexOf(t.keys.join("")))}function C(e,t,r,n,o,i){let a=!1,l=o(e,t,!!t&&r);for(;l;){if(l===e.firstChild){if(a)return!1;a=!0}let s=!n&&(l.disabled||"true"===l.getAttribute("aria-disabled"));if(l.hasAttribute("tabindex")&&S(l,i)&&!s)return l.focus(),!0;l=o(e,l,r)}return!1}let R=i.forwardRef(function(e,t){let{actions:r,autoFocus:a=!1,autoFocusItem:l=!1,children:u,className:c,disabledItemsFocusable:d=!1,disableListWrap:p=!1,onKeyDown:f,variant:m="selectedMenu"}=e,v=(0,o.Z)(e,P),g=i.useRef(null),Z=i.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});(0,E.Z)(()=>{a&&g.current.focus()},[a]),i.useImperativeHandle(r,()=>({adjustStyleForScrollbar(e,t){let r=!g.current.style.width;if(e.clientHeight<g.current.clientHeight&&r){let n=`${b((0,s.Z)(e))}px`;g.current.style["rtl"===t.direction?"paddingLeft":"paddingRight"]=n,g.current.style.width=`calc(100% + ${n})`}return g.current}}),[]);let R=e=>{let t=g.current,r=e.key,n=(0,s.Z)(t).activeElement;if("ArrowDown"===r)e.preventDefault(),C(t,n,p,d,M);else if("ArrowUp"===r)e.preventDefault(),C(t,n,p,d,w);else if("Home"===r)e.preventDefault(),C(t,null,p,d,M);else if("End"===r)e.preventDefault(),C(t,null,p,d,w);else if(1===r.length){let o=Z.current,i=r.toLowerCase(),a=performance.now();o.keys.length>0&&(a-o.lastTime>500?(o.keys=[],o.repeating=!0,o.previousKeyMatched=!0):o.repeating&&i!==o.keys[0]&&(o.repeating=!1)),o.lastTime=a,o.keys.push(i);let l=n&&!o.repeating&&S(n,o);o.previousKeyMatched&&(l||C(t,n,!1,d,M,o))?e.preventDefault():o.previousKeyMatched=!1}f&&f(e)},T=(0,x.Z)(g,t),k=-1;i.Children.forEach(u,(e,t)=>{i.isValidElement(e)&&(e.props.disabled||("selectedMenu"===m&&e.props.selected?k=t:-1!==k||(k=t)))});let D=i.Children.map(u,(e,t)=>{if(t===k){let r={};return l&&(r.autoFocus=!0),void 0===e.props.tabIndex&&"selectedMenu"===m&&(r.tabIndex=0),i.cloneElement(e,r)}return e});return(0,h.jsx)(y,(0,n.Z)({role:"menu",ref:T,className:c,onKeyDown:R,tabIndex:a?0:-1},v,{children:D}))});var T=r(918),k=r(5400),D=r(7577),z=r(1760),j=r(1568);function H(e){return(0,f.Z)("MuiPopover",e)}(0,p.Z)("MuiPopover",["root","paper"]);let L=["onEntering"],N=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function F(e,t){let r=0;return"number"==typeof t?r=t:"center"===t?r=e.height/2:"bottom"===t&&(r=e.height),r}function A(e,t){let r=0;return"number"==typeof t?r=t:"center"===t?r=e.width/2:"right"===t&&(r=e.width),r}function O(e){return[e.horizontal,e.vertical].map(e=>"number"==typeof e?`${e}px`:e).join(" ")}function I(e){return"function"==typeof e?e():e}let _=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"],paper:["paper"]},H,t)},K=(0,u.ZP)(j.Z,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),$=(0,u.ZP)(T.Z,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),W=i.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiPopover"}),{action:l,anchorEl:u,anchorOrigin:d={vertical:"top",horizontal:"left"},anchorPosition:p,anchorReference:f="anchorEl",children:m,className:v,container:g,elevation:Z=8,marginThreshold:y=16,open:b,PaperProps:E={},transformOrigin:P={vertical:"top",horizontal:"left"},TransitionComponent:M=z.Z,transitionDuration:w="auto",TransitionProps:{onEntering:S}={}}=r,C=(0,o.Z)(r.TransitionProps,L),R=(0,o.Z)(r,N),T=i.useRef(),j=(0,x.Z)(T,E.ref),H=(0,n.Z)({},r,{anchorOrigin:d,anchorReference:f,elevation:Z,marginThreshold:y,PaperProps:E,transformOrigin:P,TransitionComponent:M,transitionDuration:w,TransitionProps:C}),W=_(H),B=i.useCallback(()=>{if("anchorPosition"===f)return p;let e=I(u),t=e&&1===e.nodeType?e:(0,s.Z)(T.current).body,r=t.getBoundingClientRect();return{top:r.top+F(r,d.vertical),left:r.left+A(r,d.horizontal)}},[u,d.horizontal,d.vertical,p,f]),V=i.useCallback(e=>({vertical:F(e,P.vertical),horizontal:A(e,P.horizontal)}),[P.horizontal,P.vertical]),U=i.useCallback(e=>{let t={width:e.offsetWidth,height:e.offsetHeight},r=V(t);if("none"===f)return{top:null,left:null,transformOrigin:O(r)};let n=B(),o=n.top-r.vertical,i=n.left-r.horizontal,a=o+t.height,l=i+t.width,s=(0,D.Z)(I(u)),c=s.innerHeight-y,d=s.innerWidth-y;if(o<y){let p=o-y;o-=p,r.vertical+=p}else if(a>c){let m=a-c;o-=m,r.vertical+=m}if(i<y){let h=i-y;i-=h,r.horizontal+=h}else if(l>d){let v=l-d;i-=v,r.horizontal+=v}return{top:`${Math.round(o)}px`,left:`${Math.round(i)}px`,transformOrigin:O(r)}},[u,f,B,V,y]),[X,Y]=i.useState(b),q=i.useCallback(()=>{let e=T.current;if(!e)return;let t=U(e);null!==t.top&&(e.style.top=t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin,Y(!0)},[U]),G=(e,t)=>{S&&S(e,t),q()},J=()=>{Y(!1)};i.useEffect(()=>{b&&q()}),i.useImperativeHandle(l,()=>b?{updatePosition(){q()}}:null,[b,q]),i.useEffect(()=>{if(!b)return;let e=(0,k.Z)(()=>{q()}),t=(0,D.Z)(u);return t.addEventListener("resize",e),()=>{e.clear(),t.removeEventListener("resize",e)}},[u,b,q]);let Q=w;"auto"!==w||M.muiSupportAuto||(Q=void 0);let ee=g||(u?(0,s.Z)(I(u)).body:void 0);return(0,h.jsx)(K,(0,n.Z)({BackdropProps:{invisible:!0},className:(0,a.Z)(W.root,v),container:ee,open:b,ref:t,ownerState:H},R,{children:(0,h.jsx)(M,(0,n.Z)({appear:!0,in:b,onEntering:G,onExited:J,timeout:Q},C,{children:(0,h.jsx)($,(0,n.Z)({elevation:Z},E,{ref:j,className:(0,a.Z)(W.paper,E.className)},X?void 0:{style:(0,n.Z)({},E.style,{opacity:0})},{ownerState:H,children:m}))}))}))});var B=r(2097);function V(e){return(0,f.Z)("MuiMenu",e)}(0,p.Z)("MuiMenu",["root","paper","list"]);let U=["onEntering"],X=["autoFocus","children","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant"],Y={vertical:"top",horizontal:"right"},q={vertical:"top",horizontal:"left"},G=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"],paper:["paper"],list:["list"]},V,t)},J=(0,u.ZP)(W,{shouldForwardProp:e=>(0,u.FO)(e)||"classes"===e,name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Q=(0,u.ZP)(T.Z,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),ee=(0,u.ZP)(R,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),et=i.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiMenu"}),{autoFocus:l=!0,children:s,disableAutoFocusItem:u=!1,MenuListProps:d={},onClose:p,open:f,PaperProps:m={},PopoverClasses:v,transitionDuration:g="auto",TransitionProps:{onEntering:Z}={},variant:y="selectedMenu"}=r,b=(0,o.Z)(r.TransitionProps,U),x=(0,o.Z)(r,X),E=(0,B.Z)(),P="rtl"===E.direction,M=(0,n.Z)({},r,{autoFocus:l,disableAutoFocusItem:u,MenuListProps:d,onEntering:Z,PaperProps:m,transitionDuration:g,TransitionProps:b,variant:y}),w=G(M),S=i.useRef(null),C=(e,t)=>{S.current&&S.current.adjustStyleForScrollbar(e,E),Z&&Z(e,t)},R=e=>{"Tab"===e.key&&(e.preventDefault(),p&&p(e,"tabKeyDown"))},T=-1;return i.Children.map(s,(e,t)=>{i.isValidElement(e)&&(e.props.disabled||("selectedMenu"===y&&e.props.selected?T=t:-1!==T||(T=t)))}),(0,h.jsx)(J,(0,n.Z)({classes:v,onClose:p,anchorOrigin:{vertical:"bottom",horizontal:P?"right":"left"},transformOrigin:P?Y:q,PaperProps:(0,n.Z)({component:Q},m,{classes:(0,n.Z)({},m.classes,{root:w.paper})}),className:w.root,open:f,ref:t,transitionDuration:g,TransitionProps:(0,n.Z)({onEntering:C},b),ownerState:M},x,{children:(0,h.jsx)(ee,(0,n.Z)({onKeyDown:R,actions:S,autoFocus:l&&(-1===T||u),autoFocusItem:l&&!u&&f,variant:y},d,{className:(0,a.Z)(w.list,d.className),children:s}))}))});var er=et},9008:function(e,t,r){e.exports=r(3121)},1163:function(e,t,r){e.exports=r(880)},9921:function(e,t){"use strict";Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.module.reference")},9864:function(e,t,r){"use strict";r(9921)}}]);