(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7301],{32937:function(t,e,n){Promise.resolve().then(n.bind(n,96705)),Promise.resolve().then(n.bind(n,49420)),Promise.resolve().then(n.bind(n,69392)),Promise.resolve().then(n.bind(n,50209)),Promise.resolve().then(n.bind(n,83377)),Promise.resolve().then(n.bind(n,87800)),Promise.resolve().then(n.bind(n,49988)),Promise.resolve().then(n.bind(n,51716)),Promise.resolve().then(n.bind(n,79593)),Promise.resolve().then(n.bind(n,98742))},34504:function(t,e,n){"use strict";var i=n(65624);e.Z=i.default},87800:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return c}});var i=n(72976),r=n(79543),o=n(79266),s=n(4260),a=n(90828),l=n(85031),d=n(54639);function c(){return(0,i.jsxs)(s.Z,{className:"fullpage",component:"section","data-component":"AboutBanner",position:"relative",width:"100%",children:[(0,i.jsx)(a.Z,{alignItems:"center",bgcolor:"#00000077",direction:"row",height:"100%",justifyContent:"center",position:"absolute",width:"100%",children:(0,i.jsx)(d.E.div,{animate:"ani",initial:"init",transition:{staggerChildren:.2},variants:{ani:{height:"60%",width:"60%"},init:{height:"60%",width:"60%"}},children:(0,i.jsxs)(a.Z,{border:(0,r.LR)({md:"5px solid white",xl:"10px solid white"}),boxShadow:"5px 5px 20px black",height:"100%",justifyContent:"end",overflow:"hidden",padding:(0,r.LR)({md:2,xl:3}),sx:{backdropFilter:"blur(5px)"},width:"100%",children:[(0,i.jsx)(d.E.div,{transition:{duration:3,type:"spring"},variants:{ani:{transform:"translateX(0px)"},init:{transform:"translateX(-300px)"}},children:(0,i.jsx)(l.Z,{color:"white",fontFamily:o.M8.style.fontFamily,fontWeight:"bold",sx:{textShadow:"5px 5px 5px black"},variant:(0,r.LR)({md:"h5",xl:"h3"}),children:"KEEP CALM"})}),(0,i.jsx)(d.E.div,{transition:{duration:3,type:"spring"},variants:{ani:{transform:"translateX(0px)"},init:{transform:"translateX(-300px)"}},children:(0,i.jsx)(l.Z,{color:"white",fontFamily:o.M8.style.fontFamily,fontWeight:"bold",sx:{textShadow:"5px 5px 5px black"},variant:(0,r.LR)({md:"h5",xl:"h3"}),children:"AND"})}),(0,i.jsx)(d.E.div,{transition:{duration:3,type:"spring"},variants:{ani:{transform:"translateX(0px)"},init:{transform:"translateX(-300px)"}},children:(0,i.jsx)(l.Z,{color:"white",fontFamily:o.M8.style.fontFamily,fontWeight:"bold",sx:{textShadow:"5px 5px 5px black"},variant:(0,r.LR)({md:"h5",xl:"h3"}),children:"JUST DO"})}),(0,i.jsx)(d.E.div,{transition:{duration:3,type:"spring"},variants:{ani:{transform:"translateX(0px)"},init:{transform:"translateX(-300px)"}},children:(0,i.jsxs)(l.Z,{color:"white",fontFamily:o.M8.style.fontFamily,fontWeight:"bold",sx:{textShadow:"5px 5px 5px black"},variant:(0,r.LR)({md:"h5",xl:"h3"}),children:["JADE",(0,i.jsx)(l.Z,{color:"#C9252C",component:"span",fontFamily:o.M8.style.fontFamily,fontWeight:"bold",sx:{textShadow:"5px 5px 5px black"},variant:(0,r.LR)({md:"h5",xl:"h3"}),children:"R"})]})})]})})}),(0,i.jsx)("video",{className:"banner",height:"100%",src:"/jader/assets/video/banner.mp4",width:"100%",autoPlay:!0,loop:!0,muted:!0})]})}},49988:function(t,e,n){"use strict";let i,r;n.r(e),n.d(e,{default:function(){return T}});var o=n(72976),s=n(34504),a=n(79543),l=n(97669),d=n(10237),c=n(4260),h=n(90828),g=n(85031),u=n(4316),f=n(60812),x=n(39664),p=n(18979),m=n(82382);let b=new WeakMap;function v({target:t,contentRect:e,borderBoxSize:n}){var i;null===(i=b.get(t))||void 0===i||i.forEach(i=>{i({target:t,contentSize:e,get size(){return function(t,e){if(e){let{inlineSize:t,blockSize:n}=e[0];return{width:t,height:n}}return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}(t,n)}})})}function j(t){t.forEach(v)}let w=new Set;var y=n(89879),Z=n(91632);let E=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),k=()=>({time:0,x:E(),y:E()}),L={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function R(t,e,n,i){let r=n[e],{length:o,position:s}=L[e],a=r.current,l=n.time;r.current=t["scroll"+s],r.scrollLength=t["scroll"+o]-t["client"+o],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=(0,y.Y)(0,r.scrollLength,r.current);let d=i-l;r.velocity=d>50?0:(0,Z.R)(r.current-a,d)}let F={All:[[0,0],[1,1]]},W={start:0,center:.5,end:1};function A(t,e,n=0){let i=0;if(void 0!==W[t]&&(t=W[t]),"string"==typeof t){let e=parseFloat(t);t.endsWith("px")?i=e:t.endsWith("%")?t=e/100:t.endsWith("vw")?i=e/100*document.documentElement.clientWidth:t.endsWith("vh")?i=e/100*document.documentElement.clientHeight:t=e}return"number"==typeof t&&(i=e*t),n+i}let S=[0,0];var C=n(52202),B=n(84067);let I={x:0,y:0};var P=n(28001);let z=new WeakMap,D=new WeakMap,X=new WeakMap,O=t=>t===document.documentElement?window:t;var J=n(52128);function N(t,e){(0,p.K)(!!(!e||e.current),`You have defined a ${t} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let M=()=>({scrollX:(0,u.BX)(0),scrollY:(0,u.BX)(0),scrollXProgress:(0,u.BX)(0),scrollYProgress:(0,u.BX)(0)});var Y=n(54639),H=n(35672);function T(){let[t,e]=(0,x.useState)("anywhere"),n=(0,x.useRef)(null),u=(0,x.useRef)(null),{scrollY:p,scrollYProgress:v}=function({container:t,target:e,layoutEffect:n=!0,...o}={}){let s=(0,f.h)(M),a=n?J.L:x.useEffect;return a(()=>(N("target",e),N("container",t),function(t,{container:e=document.documentElement,...n}={}){let o=X.get(e);o||(o=new Set,X.set(e,o));let s=k(),a=function(t,e,n,i={}){return{measure:()=>(function(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let i=e;for(;i&&i!==t;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight})(t,i.target,n),update:e=>{R(t,"x",n,e),R(t,"y",n,e),n.time=e,(i.offset||i.target)&&function(t,e,n){let{offset:i=F.All}=n,{target:r=t,axis:o="y"}=n,s="y"===o?"height":"width",a=r!==t?function(t,e){let n={x:0,y:0},i=t;for(;i&&i!==e;)if(i instanceof HTMLElement)n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if("svg"===i.tagName){let t=i.getBoundingClientRect();i=i.parentElement;let e=i.getBoundingClientRect();n.x+=t.left-e.left,n.y+=t.top-e.top}else if(i instanceof SVGGraphicsElement){let{x:t,y:e}=i.getBBox();n.x+=t,n.y+=e;let r=null,o=i.parentNode;for(;!r;)"svg"===o.tagName&&(r=o),o=i.parentNode;i=r}else break;return n}(r,t):I,l=r===t?{width:t.scrollWidth,height:t.scrollHeight}:"getBBox"in r&&"svg"!==r.tagName?r.getBBox():{width:r.clientWidth,height:r.clientHeight},d={width:t.clientWidth,height:t.clientHeight};e[o].offset.length=0;let c=!e[o].interpolate,h=i.length;for(let t=0;t<h;t++){let n=function(t,e,n,i){let r=Array.isArray(t)?t:S,o=0;return"number"==typeof t?r=[t,t]:"string"==typeof t&&(r=(t=t.trim()).includes(" ")?t.split(" "):[t,W[t]?t:"0"]),A(r[0],n,i)-A(r[1],e)}(i[t],d[s],l[s],a[o]);c||n===e[o].interpolatorOffsets[t]||(c=!0),e[o].offset[t]=n}c&&(e[o].interpolate=(0,C.s)(e[o].offset,(0,B.Y)(i)),e[o].interpolatorOffsets=[...e[o].offset]),e[o].progress=e[o].interpolate(e[o].current)}(t,n,i)},notify:()=>e(n)}}(e,t,s,n);if(o.add(a),!z.has(e)){let t=()=>{for(let t of o)t.measure()},n=()=>{for(let t of o)t.update(P.frameData.timestamp)},s=()=>{for(let t of o)t.notify()},a=()=>{P.Wi.read(t,!1,!0),P.Wi.update(n,!1,!0),P.Wi.update(s,!1,!0)};z.set(e,a);let l=O(e);window.addEventListener("resize",a,{passive:!0}),e!==document.documentElement&&D.set(e,"function"==typeof e?(w.add(e),r||(r=()=>{let t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};w.forEach(t=>t(e))},window.addEventListener("resize",r)),()=>{w.delete(e),!w.size&&r&&(r=void 0)}):function(t,e){i||"undefined"==typeof ResizeObserver||(i=new ResizeObserver(j));let n=(0,m.I)(t);return n.forEach(t=>{let n=b.get(t);n||(n=new Set,b.set(t,n)),n.add(e),null==i||i.observe(t)}),()=>{n.forEach(t=>{let n=b.get(t);null==n||n.delete(e),(null==n?void 0:n.size)||null==i||i.unobserve(t)})}}(e,a)),l.addEventListener("scroll",a,{passive:!0})}let l=z.get(e);return P.Wi.read(l,!1,!0),()=>{var t;(0,P.Pn)(l);let n=X.get(e);if(!n||(n.delete(a),n.size))return;let i=z.get(e);z.delete(e),i&&(O(e).removeEventListener("scroll",i),null===(t=D.get(e))||void 0===t||t(),window.removeEventListener("resize",i))}}(({x:t,y:e})=>{s.scrollX.set(t.current),s.scrollXProgress.set(t.progress),s.scrollY.set(e.current),s.scrollYProgress.set(e.progress)},{...o,container:(null==t?void 0:t.current)||void 0,target:(null==e?void 0:e.current)||void 0})),[t,e,JSON.stringify(o.offset)]),s}({target:n}),y={anywhere:{icon:"it",text:[["기존의 JADE는 데스크탑 환경에 최적화되어 있습니다.","모바일 전용 앱이 제공되긴 하지만, 데스크탑과는 전혀 상이한 UX 및 기능은 매우 아쉽습니다.",'심지어 모바일로 JADE 웹에 접속하면, 스크롤 없이 잘려버리는 괴상한 디자인은 사용자로 하여금 "데스크탑 전용"이라는 사전적 의미를 상기시킵니다.'],["JADER는 데스크탑은 물론, 모바일 환경에서도 동일한 UX를 제공합니다.","반응형 기반의 웹 서비스를 통해, 어떤 환경에서든 동일한 기능을 제공받을 수 있습니다."],["또한 JADER는 PWA가 적용되어 있어, 모바일 환경에서 앱처럼 간편하게 사용하실 수도 있습니다."],["안드로이드 지원 / 아이폰은 iOS 16 업데이트에 PWA 지원이 예정됨"]],title:"어디서나"},easy:{icon:"homeWork",text:[["재택, 휴가 등 각종 근태에 변동사항이 있을 때, 우린 JADE를 통해 신청서를 제출해야 합니다.","매 월마다 발생하는 각종 신청서를 번번히 하나씩 신청하는 것은 썩 좋지 않네요.","이는 느린 사이트와 맞물려 환상의 듀엣을 보여주곤 합니다."],["JADER를 통해 신청서를 일괄 등록해보세요!","자주 쓰일만한 4가지 신청서를 일괄등록 할 수 있도록 기능을 제공하고 있습니다.","그 뿐만 아니라, 데이터의 추가 가공을 통해 사용자에게 좀 더 다양한 정보를 제공하거나, JADE에 있었으면 하는 몇 가지 추가 기능도 확인해보세요!"]],title:"간편하게"},fast:{icon:"rocket",text:[["여러분의 업무의 시작과 끝엔 언제나 JADE가 함께하고 있었다는 걸 아시나요?",'JADE가 가지는 의미에 비해, JADE가 보여주는 속도는 기대에 미치지 못 했습니다. 정말 답답한 제 "속도" 모르는 걸까요?'],["JADER는 웹 페이지, API가 가급적 빠른 속도를 낼 수 있도록 최대한 간결하게 구성되었습니다.","또한, 데이터 통신 간에 필연적으로 발생하는 지연요소엔 처리가 진행 중임을 알 수 있도록 구성했습니다."],["좋아하는 이성에게 문자를 보내며 느꼈던 아날로그식 감성. 이젠 작별할 시간입니다."]],title:"빠르게"}},{breakpoints:{up:Z}}=(0,l.Z)(),E=(0,d.Z)(Z("md")),L=(0,a.LR)({md:"caption"}),T=(0,a.LR)({md:"end",xl:"center"});return(0,x.useEffect)(()=>(p.on("change",()=>{v.get()<=1/3?e("anywhere"):v.get()<=2/3?e("easy"):e("fast")}),()=>{p.clearListeners()}),[p,v]),(0,o.jsx)(h.Z,{"data-component":"AboutMotivationBox",height:"600vh",ref:n,sx:{backgroundImage:"linear-gradient(0deg, #D16BA5, #86A8E7, #5FFBF1)"},width:"100%",children:(0,o.jsx)(c.Z,{height:"calc(100vh - ".concat((0,a.FW)(),"px)"),left:0,overflow:"hidden",padding:4,position:"sticky",ref:u,top:(0,a.FW)(),width:"100%",children:(0,o.jsxs)(h.Z,{alignItems:"center",direction:"row",height:"100%",justifyContent:"center",position:"relative",width:"100%",children:[(0,o.jsx)(h.Z,{height:"100%",justifyContent:(0,a.LR)({md:"start",xl:"center"}),left:(0,a.LR)({md:"50%",xl:0}),position:"absolute",sx:{transform:(0,a.LR)({md:"translateX(-50%)",xl:void 0})},top:0,children:Object.entries(y).map(e=>{let[n,{title:i}]=e;return E||t===n?(0,o.jsx)(g.Z,{color:t===n?"white":"gainsboro",fontSize:"3rem",fontStyle:"italic",fontWeight:"bold",sx:{textShadow:"3px 3px 0px #FFFFFF55",transition:"0.5s"},variant:"h2",children:i},"title-".concat(n)):null})}),Object.entries(y).map(e=>{let[n,{icon:i}]=e;return t===n?(0,o.jsx)(Y.E.div,{animate:"ani",exit:"init",initial:"init",transition:{duration:.5,type:"spring"},variants:{ani:{scale:1},init:{scale:0}},children:(0,o.jsx)(h.Z,{justifyContent:"center",maxWidth:400,width:"100%",children:(0,o.jsx)(H.M,{mode:"wait",children:(0,o.jsx)(s.Z,{iconName:i})})})},"icon-".concat(n)):null}),E?(0,o.jsx)(h.Z,{alignItems:"center",height:"100%",justifyContent:T,position:"absolute",right:0,top:0,children:Object.entries(y).map(e=>{let[n,{text:i}]=e;return t===n?(0,o.jsx)(Y.E.div,{animate:"ani",exit:"init",initial:"init",transition:{duration:.5,type:"spring"},variants:{ani:{translateX:0},init:{translateX:500}},children:(0,o.jsx)(h.Z,{bgcolor:"#FFFFFF99",maxWidth:400,padding:4,spacing:2,width:"100%",children:i.map((t,e)=>(0,o.jsx)(h.Z,{children:t.map((t,e)=>(0,o.jsx)(g.Z,{color:"black",variant:L,children:t},e))},e))})},"text-".concat(n)):null})}):null]})})})}},51716:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return g}});var i=n(72976),r=n(86414),o=n(34504),s=n(79543),a=n(97669),l=n(4260),d=n(38941),c=n(90828),h=n(85031);function g(){let{palette:{primary:{main:t},text:e}}=(0,a.Z)(),n=(0,s.LR)({md:"column",xl:"row"});return(0,i.jsx)(c.Z,{alignItems:"center","data-component":"AboutServiceBox",children:(0,i.jsxs)(r.Z,{alignItems:"initial",padding:4,children:[(0,i.jsx)(h.Z,{fontSize:"2rem",fontWeight:"bold",children:"기능"}),(0,i.jsx)(c.Z,{width:"100%",children:[{contents:["출/퇴근 시간을 간편하게 등록할 수 있습니다.","연장 근무를 별도로 등록하지 않아도, 22:29 이후 퇴근 등록이 가능합니다.","(JADE에서 연장 근무 신청서가 없는 날짜의 경우, 22:29 이후의 퇴근 등록이 불가능함)","출근 시간을 기준으로, 정시퇴근, 저녁식대, 교통비 시간을 직관적으로 표시합니다."],lottie:"timeCheck",title:"근무 시간 등록 기능"},{contents:["실제 근무시간의 근사치를 계산하여 보여줍니다.","출/퇴근 시간이 입력되지 않은 재택시간을 포함하여 계산합니다.","여유 근무 시간을 표시하여, 더 유연한 근무가 가능합니다."],lottie:"timeDetail",title:"근무 시간 상세 정보 표시"},{contents:["출/퇴근 시간 및 근무 계획을 확인할 수 있습니다.","아이콘을 통해 정시퇴근, 야근식대, 교통비가 제공되는 날을 직관적으로 표시합니다."],lottie:"calendarTime",title:"근태 현황 표시"},{contents:["원하는 날짜를 선택하여 근태 계획을 일괄등록할 수 있습니다."],lottie:"calendarPost",title:"근태 계획 등록"},{contents:["소속한 팀 내의 생일, 휴가자를 표시해줍니다."],lottie:"confetti",title:"일정 표시"},{contents:["등록한 신청 내역 목록을 보여줍니다.","승인, 진행, 반려 상태에 따른 신청서의 상태를 직관적으로 표시해줍니다.","진행 상태의 신청서를 일괄 삭제할 수 있습니다."],lottie:"findingDocuments",title:"신청 내역"},{contents:["지원하는 신청서를 일괄 등록할 수 있습니다.","지원 목록: 휴가, 출퇴근시각 등록, 연장근무, 재택근무 변경/취소","출퇴근시각 등록, 연장근무, 재택근무 변경/취소 신청의 경우 날짜만 선택하여 등록하는 간편 등록을 지원합니다."],lottie:"signDigital",title:"신청서 등록"}].map(r=>{let{title:s,contents:a,lottie:g}=r;return(0,i.jsxs)(c.Z,{direction:"row",children:[(0,i.jsxs)(c.Z,{alignItems:"center",justifyContent:"center",position:"relative",children:[(0,i.jsx)(l.Z,{bgcolor:t,borderRadius:"50%",height:20,width:20,zIndex:2}),(0,i.jsx)(l.Z,{bgcolor:e.primary,height:"100%",position:"absolute",sx:{opacity:.3},width:2})]}),(0,i.jsx)(l.Z,{padding:4,paddingRight:0,position:"relative",width:"100%",children:(0,i.jsx)(d.Z,{sx:{padding:2,width:"100%"},children:(0,i.jsxs)(c.Z,{direction:n,spacing:2,children:[(0,i.jsx)(c.Z,{alignSelf:"center",justifyContent:"center",width:128,children:(0,i.jsx)(o.Z,{height:"100%",iconName:g,width:"100%"})}),(0,i.jsxs)(c.Z,{spacing:2,children:[(0,i.jsx)(h.Z,{fontSize:"1.2rem",fontWeight:"bold",children:s}),(0,i.jsx)(c.Z,{children:a.map((t,e)=>(0,i.jsx)(h.Z,{variant:"caption",children:t},"".concat(s,"-").concat(e)))})]})]})})})]},s)})})]})})}},79593:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var i=n(72976),r=n(79543),o=n(68644),s=n(49935),a=n(4260),l=n(42734),d=n(90828),c=n(54639),h=n(39664),g=function(){let{theme:t,setTheme:e}=(0,h.useContext)(o.f),n=(0,h.useCallback)(()=>{e&&e(t=>{let e={...t};return e.mode="light"===e.mode?"dark":"light",(0,s.PZ)("jader","parameter",e),e})},[e]);return(0,i.jsx)(l.Z,{"data-component":"AboutThemeSwitch",sx:{border:"5px solid #FFFFFFAA",borderRadius:100,overflow:"hidden"},onClick:n,children:(0,i.jsxs)(d.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",padding:2,position:"relative",sx:{backdropFilter:"blur(10px)"},width:150,children:[(0,i.jsx)("img",{alt:"sun",height:24,src:"https://user-images.githubusercontent.com/50317129/243126698-53e94830-fd00-4f7c-bd6a-8758c30999b4.png",width:24}),(0,i.jsx)("img",{alt:"moon",height:24,src:"https://user-images.githubusercontent.com/50317129/243126799-36856dee-1584-4acb-9063-704930f45c49.png",width:24}),(0,i.jsx)(c.E.div,{animate:(null==t?void 0:t.mode)||"light",transition:{duration:1},variants:{dark:{left:100,position:"absolute",right:10},light:{left:10,position:"absolute",right:100}},children:(0,i.jsx)(a.Z,{bgcolor:"white",borderRadius:"50%",height:40,width:40})})]})})},u=n(85031);function f(){let t=(0,h.useCallback)((t,e)=>({background:"light"===t?"linear-gradient(0deg, #14A6EF, #96DCFF)":"linear-gradient(0deg, #F97281, #7B589E, #171F85)",height:"100%",left:0,opacity:e?1:0,position:"absolute",top:0,width:"100%"}),[]),e=(0,h.useCallback)((t,e)=>({backgroundImage:"url(".concat("light"===t?"https://user-images.githubusercontent.com/50317129/243145837-22926e41-a1dc-4a68-b248-6624954f77f4.png":"https://user-images.githubusercontent.com/50317129/243124240-83ecab48-3eb5-4e30-a557-949ca54d0169.png",")"),backgroundPosition:"bottom",backgroundRepeat:"repeat-x",backgroundSize:"contain",bottom:0,filter:"drop-shadow(4px -4px 8px ".concat("light"===t?"#0077C0":"black",")"),height:"100%",left:0,maxHeight:500,opacity:e?1:0,overflow:"hidden",position:"absolute",width:"100%"}),[]);return(0,i.jsxs)(a.Z,{className:"fullpage","data-component":"AboutThemeBox",padding:4,position:"relative",children:[(0,i.jsxs)(d.Z,{alignItems:"center",justifyContent:"center",spacing:4,children:[(0,i.jsxs)(d.Z,{direction:"row",height:(0,r.LR)({sm:75,xl:150}),justifyContent:"space-between",maxWidth:"md",position:"relative",width:"100%",zIndex:1,children:[(0,i.jsx)(c.E.div,{animate:(0,r.rB)("light","dark"),transition:{duration:1},variants:{dark:{height:"100%",opacity:0,translateY:150},light:{height:"100%",opacity:1,translateY:0}},children:(0,i.jsx)(a.Z,{borderRadius:"50%",height:(0,r.LR)({sm:75,xl:150}),padding:(0,r.LR)({sm:2,xl:4}),sx:{background:"radial-gradient(closest-side, orange, transparent)"},width:(0,r.LR)({sm:75,xl:150}),children:(0,i.jsx)("img",{alt:"sun",height:"100%",src:"https://user-images.githubusercontent.com/50317129/243126698-53e94830-fd00-4f7c-bd6a-8758c30999b4.png",style:{zIndex:1},width:"100%"})})}),(0,i.jsx)(c.E.div,{animate:(0,r.rB)("light","dark"),transition:{duration:1},variants:{dark:{height:"100%",opacity:1,translateY:0},light:{height:"100%",opacity:0,translateY:150}},children:(0,i.jsx)(a.Z,{borderRadius:"50%",height:(0,r.LR)({sm:75,xl:150}),padding:(0,r.LR)({sm:2,xl:4}),style:{zIndex:1},sx:{background:"radial-gradient(closest-side, yellow, transparent)"},width:(0,r.LR)({sm:75,xl:150}),children:(0,i.jsx)("img",{alt:"moon",height:"100%",src:"https://user-images.githubusercontent.com/50317129/243126799-36856dee-1584-4acb-9063-704930f45c49.png",style:{zIndex:1},width:"100%"})})})]}),(0,i.jsxs)(d.Z,{alignItems:"center",justifyContent:"center",position:"relative",spacing:(0,r.LR)({md:5,xl:10}),zIndex:1,children:[(0,i.jsx)(u.Z,{color:"white",fontSize:(0,r.LR)({md:"2rem",xl:"4rem"}),fontWeight:"bold",children:"노안을 위한 사이트는 없다"}),(0,i.jsxs)(d.Z,{alignItems:"center",color:"white",justifyContent:"center",spacing:3,children:[(0,i.jsxs)(d.Z,{alignItems:"center",justifyContent:"center",children:[(0,i.jsx)(u.Z,{children:"보통의 사이트는 대부분 하얀색이였습니다. 21세기에 아직도 화이트 워싱이라니. 정말이지 용납할 수가 없군요."}),(0,i.jsx)(u.Z,{children:"저희 사이트에선 다크모드를 지원하여 사이트의 다양성을 존중합니다."})]}),(0,i.jsxs)(d.Z,{alignItems:"center",justifyContent:"center",children:[(0,i.jsx)(u.Z,{children:"당장 다크모드를 사용하여 어둠의 자식들이 되어보세요!"}),(0,i.jsx)(u.Z,{children:"다크모드는 이따위 조잡한 사이트 때문에 화면밝기를 조절해야하는 수고를 덜어줍니다."}),(0,i.jsx)(u.Z,{children:"또한 빨리 하루가 끝나, 퇴근하고 싶은 여러분의 마음을 표현하는덴 더더욱 좋습니다!"})]}),(0,i.jsx)(u.Z,{children:"지금 아래의 버튼을 눌러 테마를 체험해보세요!"}),(0,i.jsx)(u.Z,{children:"테마 스위치 버튼은 사이드바에서 만나보실 수 있습니다."}),(0,i.jsx)(a.Z,{paddingTop:4,children:(0,i.jsx)(g,{})})]})]})]}),(0,i.jsxs)(a.Z,{height:"100%",left:0,position:"absolute",top:0,width:"100%",children:[(0,i.jsx)(c.E.div,{animate:(0,r.rB)("light","dark"),transition:{duration:1},variants:{dark:t("light",!1),light:t("light",!0)}}),(0,i.jsx)(c.E.div,{animate:(0,r.rB)("light","dark"),transition:{duration:1},variants:{dark:t("dark",!0),light:t("dark",!1)}}),(0,i.jsx)(c.E.div,{animate:(0,r.rB)("light","dark"),transition:{duration:1},variants:{dark:e("light",!1),light:e("light",!0)}}),(0,i.jsx)(c.E.div,{animate:(0,r.rB)("light","dark"),transition:{duration:1},variants:{dark:e("dark",!0),light:e("dark",!1)}})]})]})}},98742:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return g}});var i=n(72976),r=n(34504),o=n(79543),s=n(50805),a=n(79266),l=n(4260),d=n(90828),c=n(85031),h=n(54639);function g(){return(0,i.jsxs)(d.Z,{alignItems:"center",bgcolor:(0,o.rB)("white","black"),component:"section","data-component":"AboutWelcomeBox",justifyContent:"center",padding:8,spacing:10,children:[(0,i.jsxs)(d.Z,{alignItems:"center",justifyContent:"center",spacing:(0,o.LR)({md:2,xl:4}),children:[(0,i.jsx)(c.Z,{letterSpacing:3,children:"Introduce"}),(0,i.jsxs)(d.Z,{alignItems:"center",direction:"row",justifyContent:"center",spacing:(0,o.LR)({md:2,xl:4}),children:[(0,i.jsx)(s.Z,{height:(0,o.LR)({md:50,xl:100}),width:(0,o.LR)({md:50,xl:100}),origin:!0}),(0,i.jsx)(c.Z,{fontFamily:a.M8.style.fontFamily,fontSize:(0,o.LR)({md:"3rem",xl:"5rem"}),fontWeight:"bold",letterSpacing:10,children:"JADER"})]}),(0,i.jsx)(c.Z,{fontSize:(0,o.LR)({md:void 0,xl:"1.5rem"}),children:"약간 빠르거나. 살짝 편하거나."})]}),(0,i.jsx)(l.Z,{borderRadius:4,boxShadow:"3px 3px 10px black",maxWidth:"sm",minWidth:200,overflow:"hidden",sx:{backgroundImage:"linear-gradient(to right top, #051937, #161d4b, #301e5b, #4e1967, #6f006c)"},width:"100%",children:(0,i.jsx)(h.E.div,{initial:"initial",transition:{duration:1},viewport:{amount:.2},whileInView:"animate",variants:{animate:{opacity:1,translateY:0},initial:{opacity:0,translateY:(0,o.LR)({sm:100,xl:200})}},children:(0,i.jsx)(r.Z,{iconName:"programming"})})})]})}},79543:function(t,e,n){"use strict";n.d(e,{FW:function(){return a},LR:function(){return o},rB:function(){return s}});var i=n(97669),r=n(10237);function o(t){let{xs:e,sm:n,md:o,lg:s,xl:a}=t,{breakpoints:{up:l}}=(0,i.Z)(),d=(0,r.Z)(l("sm")),c=(0,r.Z)(l("md")),h=(0,r.Z)(l("lg")),g=(0,r.Z)(l("xl"));return g?a:h?s||a:c?o||s||a:d?n||o||s||a:e||n||o||s||a}function s(t,e){let{palette:{mode:n}}=(0,i.Z)();return"light"===n?t:e}function a(){return o({md:56,xl:64})}},82382:function(t,e,n){"use strict";n.d(e,{I:function(){return r}});var i=n(18979);function r(t,e,n){var r;if("string"==typeof t){let o=document;e&&((0,i.k)(!!e.current,"Scope provided, but no element detected."),o=e.current),n?(null!==(r=n[t])&&void 0!==r||(n[t]=o.querySelectorAll(t)),t=n[t]):t=o.querySelectorAll(t)}else t instanceof Element&&(t=[t]);return Array.from(t||[])}}},function(t){t.O(0,[6765,8119,5173,5641,4786,5748,9420,9497,7604,4017,3119,7257,3577,1040,1511,9813,5624,4207,8802,1744],function(){return t(t.s=32937)}),_N_E=t.O()}]);