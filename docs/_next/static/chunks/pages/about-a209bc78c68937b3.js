(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{6484:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(137)}])},6938:function(t,e,n){"use strict";var i=n(4891);e.Z=i.Z},137:function(t,e,n){"use strict";let i,r;n.r(e),n.d(e,{default:function(){return td}});var o=n(1874),s=n(8861),a=n(9385),l=n(1370);function d(t){let{xs:e,sm:n,md:i,lg:r,xl:o}=t,{breakpoints:{up:s}}=(0,a.Z)(),d=(0,l.Z)(s("sm")),c=(0,l.Z)(s("md")),h=(0,l.Z)(s("lg")),g=(0,l.Z)(s("xl"));return g?o:h?r||o:c?i||r||o:d?n||i||r||o:e||n||i||r||o}function c(t,e){let{palette:{mode:n}}=(0,a.Z)();return"light"===n?t:e}function h(){return d({md:56,xl:64})}var g=n(8543),u=n(686),x=n(2261),f=n(7959),p=function(){return(0,o.jsxs)(g.Z,{className:"fullpage",component:"section","data-component":"AboutBanner",position:"relative",width:"100%",children:[(0,o.jsx)(u.Z,{alignItems:"center",bgcolor:"#00000077",direction:"row",height:"100%",justifyContent:"center",position:"absolute",width:"100%",children:(0,o.jsx)(f.E.div,{animate:"ani",initial:"init",transition:{staggerChildren:.2},variants:{ani:{height:"60%",width:"60%"},init:{height:"60%",width:"60%"}},children:(0,o.jsxs)(u.Z,{border:d({md:"5px solid white",xl:"10px solid white"}),boxShadow:"5px 5px 20px black",height:"100%",justifyContent:"end",overflow:"hidden",padding:d({md:2,xl:3}),sx:{backdropFilter:"blur(5px)"},width:"100%",children:[(0,o.jsx)(f.E.div,{transition:{duration:3,type:"spring"},variants:{ani:{transform:"translateX(0px)"},init:{transform:"translateX(-300px)"}},children:(0,o.jsx)(x.Z,{color:"white",fontWeight:"bold",sx:{textShadow:"5px 5px 5px black"},variant:d({md:"h5",xl:"h3"}),children:"KEEP CALM"})}),(0,o.jsx)(f.E.div,{transition:{duration:3,type:"spring"},variants:{ani:{transform:"translateX(0px)"},init:{transform:"translateX(-300px)"}},children:(0,o.jsx)(x.Z,{color:"white",fontWeight:"bold",sx:{textShadow:"5px 5px 5px black"},variant:d({md:"h5",xl:"h3"}),children:"AND"})}),(0,o.jsx)(f.E.div,{transition:{duration:3,type:"spring"},variants:{ani:{transform:"translateX(0px)"},init:{transform:"translateX(-300px)"}},children:(0,o.jsx)(x.Z,{color:"white",fontWeight:"bold",sx:{textShadow:"5px 5px 5px black"},variant:d({md:"h5",xl:"h3"}),children:"JUST DO"})}),(0,o.jsx)(f.E.div,{transition:{duration:3,type:"spring"},variants:{ani:{transform:"translateX(0px)"},init:{transform:"translateX(-300px)"}},children:(0,o.jsxs)(x.Z,{color:"white",fontWeight:"bold",sx:{textShadow:"5px 5px 5px black"},variant:d({md:"h5",xl:"h3"}),children:["JADE",(0,o.jsx)(x.Z,{color:"#C9252C",component:"span",fontWeight:"bold",sx:{textShadow:"5px 5px 5px black"},variant:d({md:"h5",xl:"h3"}),children:"R"})]})})]})})}),(0,o.jsx)("video",{className:"banner",height:"100%",src:"/jader/assets/video/banner.mp4",width:"100%",autoPlay:!0,loop:!0,muted:!0})]})},m=n(3812),j=n(6202),b=n(7450),w=n(9953),v=n(529),Z=n(2390),y=n(2150),E=n(5455);let k=new WeakMap;function A({target:t,contentRect:e,borderBoxSize:n}){var i;null===(i=k.get(t))||void 0===i||i.forEach(i=>{i({target:t,contentSize:e,get size(){return function(t,e){if(e){let{inlineSize:n,blockSize:i}=e[0];return{width:n,height:i}}return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}(t,n)}})})}function W(t){t.forEach(A)}let S=new Set;var C=n(3722),F=n(3685);let I=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),z=()=>({time:0,x:I(),y:I()}),B={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function L(t,e,n,i){let r=n[e],{length:o,position:s}=B[e],a=r.current,l=n.time;r.current=t["scroll"+s],r.scrollLength=t["scroll"+o]-t["client"+o],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=(0,C.Y)(0,r.scrollLength,r.current);let d=i-l;r.velocity=d>50?0:(0,F.R)(r.current-a,d)}let D={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},R={start:0,center:.5,end:1};function X(t,e,n=0){let i=0;if(void 0!==R[t]&&(t=R[t]),"string"==typeof t){let r=parseFloat(t);t.endsWith("px")?i=r:t.endsWith("%")?t=r/100:t.endsWith("vw")?i=r/100*document.documentElement.clientWidth:t.endsWith("vh")?i=r/100*document.documentElement.clientHeight:t=r}return"number"==typeof t&&(i=e*t),n+i}let O=[0,0];var P=n(8221),_=n(6490);let J={x:0,y:0},N=new WeakMap,Y=new WeakMap,T=new WeakMap,H=t=>t===document.documentElement?window:t;var M=n(2096);function q(t,e){(0,v.K)(Boolean(!e||e.current),`You have defined a ${t} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let G=()=>({scrollX:(0,j.B)(0),scrollY:(0,j.B)(0),scrollXProgress:(0,j.B)(0),scrollYProgress:(0,j.B)(0)});var U=n(2890),V=function(){let[t,e]=(0,w.useState)("anywhere"),n=(0,w.useRef)(null),s=(0,w.useRef)(null),{scrollY:c,scrollYProgress:p}=function({container:t,target:e,layoutEffect:n=!0,...o}={}){let s=(0,b.h)(G),a=n?M.L:w.useEffect;return a(()=>(q("target",e),q("container",t),function(t,{container:e=document.documentElement,...n}={}){let o=T.get(e);o||(o=new Set,T.set(e,o));let s=z(),a=function(t,e,n,i={}){return{measure:()=>(function(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let i=e;for(;i&&i!==t;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight})(t,i.target,n),update(e){var r;L(t,"x",r=n,e),L(t,"y",r,e),r.time=e,(i.offset||i.target)&&function(t,e,n){let{offset:i=D.All}=n,{target:r=t,axis:o="y"}=n,s="y"===o?"height":"width",a=r!==t?function(t,e){let n={x:0,y:0},i=t;for(;i&&i!==e;)if(i instanceof HTMLElement)n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if(i instanceof SVGGraphicsElement&&"getBBox"in i){let{top:r,left:o}=i.getBBox();for(n.x+=o,n.y+=r;i&&"svg"!==i.tagName;)i=i.parentNode}return n}(r,t):J,l=r===t?{width:t.scrollWidth,height:t.scrollHeight}:{width:r.clientWidth,height:r.clientHeight},d={width:t.clientWidth,height:t.clientHeight};e[o].offset.length=0;let c=!e[o].interpolate,h=i.length;for(let g=0;g<h;g++){let u=function(t,e,n,i){let r=Array.isArray(t)?t:O,o=0;return"number"==typeof t?r=[t,t]:"string"==typeof t&&(r=(t=t.trim()).includes(" ")?t.split(" "):[t,R[t]?t:"0"]),X(r[0],n,i)-X(r[1],e)}(i[g],d[s],l[s],a[o]);c||u===e[o].interpolatorOffsets[g]||(c=!0),e[o].offset[g]=u}c&&(e[o].interpolate=(0,P.s)(e[o].offset,(0,_.Y)(i)),e[o].interpolatorOffsets=[...e[o].offset]),e[o].progress=e[o].interpolate(e[o].current)}(t,n,i)},notify:()=>e(n)}}(e,t,s,n);if(o.add(a),!N.has(e)){let l=()=>{for(let t of o)t.measure()},d=()=>{for(let t of o)t.update(y.w.timestamp)},c=()=>{for(let t of o)t.notify()},h=()=>{Z.Z_.read(l,!1,!0),Z.Z_.update(d,!1,!0),Z.Z_.update(c,!1,!0)};N.set(e,h);let g=H(e);window.addEventListener("resize",h,{passive:!0}),e!==document.documentElement&&Y.set(e,"function"==typeof e?(S.add(e),r||(r=()=>{let t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};S.forEach(t=>t(e))},window.addEventListener("resize",r)),()=>{S.delete(e),!S.size&&r&&(r=void 0)}):function(t,e){i||"undefined"==typeof ResizeObserver||(i=new ResizeObserver(W));let n=(0,E.I)(t);return n.forEach(t=>{let n=k.get(t);n||(n=new Set,k.set(t,n)),n.add(e),null==i||i.observe(t)}),()=>{n.forEach(t=>{let n=k.get(t);null==n||n.delete(e),(null==n?void 0:n.size)||null==i||i.unobserve(t)})}}(e,h)),g.addEventListener("scroll",h,{passive:!0})}let u=N.get(e);return Z.Z_.read(u,!1,!0),()=>{var t;Z.qY.read(u);let n=T.get(e);if(!n||(n.delete(a),n.size))return;let i=N.get(e);N.delete(e),i&&(H(e).removeEventListener("scroll",i),null===(t=Y.get(e))||void 0===t||t(),window.removeEventListener("resize",i))}}(({x:t,y:e})=>{s.scrollX.set(t.current),s.scrollXProgress.set(t.progress),s.scrollY.set(e.current),s.scrollYProgress.set(e.progress)},{...o,container:(null==t?void 0:t.current)||void 0,target:(null==e?void 0:e.current)||void 0})),[]),s}({target:n}),j={anywhere:{icon:"it",text:[["기존의 JADE는 데스크탑 환경에 최적화되어 있습니다.","모바일 전용 앱이 제공되긴 하지만, 데스크탑과는 전혀 상이한 UX 및 기능은 매우 아쉽습니다.",'심지어 모바일로 JADE 웹에 접속하면, 스크롤 없이 잘려버리는 괴상한 디자인은 사용자로 하여금 "데스크탑 전용"이라는 사전적 의미를 상기시킵니다.'],["JADER는 데스크탑은 물론, 모바일 환경에서도 동일한 UX를 제공합니다.","반응형 기반의 웹 서비스를 통해, 어떤 환경에서든 동일한 기능을 제공받을 수 있습니다."],["또한 JADER는 PWA가 적용되어 있어, 모바일 환경에서 앱처럼 간편하게 사용하실 수도 있습니다."],["안드로이드 지원 / 아이폰은 iOS 16 업데이트에 PWA 지원이 예정됨"]],title:"어디서나"},easy:{icon:"homeWork",text:[["재택, 휴가 등 각종 근태에 변동사항이 있을 때, 우린 JADE를 통해 신청서를 제출해야 합니다.","매 월마다 발생하는 각종 신청서를 번번히 하나씩 신청하는 것은 썩 좋지 않네요.","이는 느린 사이트와 맞물려 환상의 듀엣을 보여주곤 합니다."],["JADER를 통해 신청서를 일괄 등록해보세요!","자주 쓰일만한 4가지 신청서를 일괄등록 할 수 있도록 기능을 제공하고 있습니다.","그 뿐만 아니라, 데이터의 추가 가공을 통해 사용자에게 좀 더 다양한 정보를 제공하거나, JADE에 있었으면 하는 몇 가지 추가 기능도 확인해보세요!"]],title:"간편하게"},fast:{icon:"rocket",text:[["여러분의 업무의 시작과 끝엔 언제나 JADE가 함께하고 있었다는 걸 아시나요?",'JADE가 가지는 의미에 비해, JADE가 보여주는 속도는 기대에 미치지 못 했습니다. 정말 답답한 제 "속도" 모르는 걸까요?'],["JADER는 웹 페이지, API가 가급적 빠른 속도를 낼 수 있도록 최대한 간결하게 구성되었습니다.","또한, 데이터 통신 간에 필연적으로 발생하는 지연요소엔 처리가 진행 중임을 알 수 있도록 구성했습니다."],["좋아하는 이성에게 문자를 보내며 느꼈던 아날로그식 감성. 이젠 작별할 시간입니다."]],title:"빠르게"}},{breakpoints:{up:v}}=(0,a.Z)(),A=(0,l.Z)(v("md")),C=d({md:"caption"}),F=d({md:"end",xl:"center"});return(0,w.useEffect)(()=>{let t=()=>{p.get()<=1/3?e("anywhere"):p.get()<=2/3?e("easy"):e("fast")};return c.on("change",t),()=>{c.clearListeners()}},[c,p]),(0,o.jsx)(u.Z,{"data-component":"AboutMotivationBox",height:"600vh",ref:n,sx:{backgroundImage:"linear-gradient(0deg, #D16BA5, #86A8E7, #5FFBF1)"},width:"100%",children:(0,o.jsx)(g.Z,{height:"calc(100vh - ".concat(h(),"px)"),left:0,overflow:"hidden",padding:4,position:"sticky",ref:s,top:h(),width:"100%",children:(0,o.jsxs)(u.Z,{alignItems:"center",direction:"row",height:"100%",justifyContent:"center",position:"relative",width:"100%",children:[(0,o.jsx)(u.Z,{height:"100%",justifyContent:d({md:"start",xl:"center"}),left:d({md:"50%",xl:0}),position:"absolute",sx:{transform:d({md:"translateX(-50%)",xl:void 0})},top:0,children:Object.entries(j).map(e=>{let[n,{title:i}]=e;return A||t===n?(0,o.jsx)(x.Z,{color:t===n?"white":"gainsboro",fontStyle:"italic",fontWeight:"bold",sx:{textShadow:"3px 3px 0px #FFFFFF55",transition:"0.5s"},variant:"h2",children:i},"title-".concat(n)):null})}),Object.entries(j).map(e=>{let[n,{icon:i}]=e;return t===n?(0,o.jsx)(f.E.div,{animate:"ani",exit:"init",initial:"init",transition:{duration:.5,type:"spring"},variants:{ani:{scale:1},init:{scale:0}},children:(0,o.jsx)(u.Z,{justifyContent:"center",maxWidth:400,width:"100%",children:(0,o.jsx)(U.M,{mode:"wait",children:(0,o.jsx)(m.Z,{iconName:i})})})},"icon-".concat(n)):null}),A?(0,o.jsx)(u.Z,{alignItems:"center",height:"100%",justifyContent:F,position:"absolute",right:0,top:0,children:Object.entries(j).map(e=>{let[n,{text:i}]=e;return t===n?(0,o.jsx)(f.E.div,{animate:"ani",exit:"init",initial:"init",transition:{duration:.5,type:"spring"},variants:{ani:{translateX:0},init:{translateX:500}},children:(0,o.jsx)(u.Z,{bgcolor:"#FFFFFF99",maxWidth:400,padding:4,spacing:2,width:"100%",children:i.map((t,e)=>(0,o.jsx)(u.Z,{children:t.map((t,e)=>(0,o.jsx)(x.Z,{color:"black",variant:C,children:t},e))},e))})},"text-".concat(n)):null})}):null]})})})},K=n(1337),$=n(7309),Q=function(){let{palette:{primary:{main:t}}}=(0,a.Z)();return(0,o.jsx)(u.Z,{alignItems:"center","data-component":"AboutServiceBox",children:(0,o.jsxs)(K.Z,{alignItems:"initial",padding:4,children:[(0,o.jsx)(x.Z,{fontSize:"2rem",fontWeight:"bold",children:"기능"}),(0,o.jsx)(u.Z,{width:"100%",children:[{contents:["출/퇴근 시간을 간편하게 등록할 수 있습니다.","연장 근무를 별도로 등록하지 않아도, 22:29 이후에도 퇴근 등록이 가능합니다.","출근 시간을 기준으로, 정시퇴근, 저녁식대, 교통비 시간을 직관적으로 표시합니다."],lottie:"timeCheck",title:"근무 시간 등록 기능"},{contents:["실제 근무시간의 근사치를 계산하여 보여줍니다.","출/퇴근 시간이 입력되지 않은 재택시간을 포함하여 계산합니다.","여유 근무 시간을 표시하여, 더 유연한 근무가 가능합니다."],lottie:"timeDetail",title:"근무 시간 상세 정보 표시"},{contents:["출/퇴근 시간 및 근무 계획을 확인할 수 있습니다.","아이콘을 통해 정시퇴근, 야근식대, 교통비가 제공되는 날을 직관적으로 표시합니다."],lottie:"calendarTime",title:"근태 현황 표시"},{contents:["원하는 날짜를 선택하여 근태 계획을 일괄등록할 수 있습니다."],lottie:"calendarPost",title:"근태 계획 등록"},{contents:["소속한 팀 내의 생일, 휴가자를 표시해줍니다."],lottie:"confetti",title:"일정 표시"},{contents:["등록한 신청 내역 목록을 보여줍니다.","승인, 진행, 반려 상태에 따른 신청서의 상태를 직관적으로 표시해줍니다.","진행 상태의 신청서를 일괄 삭제할 수 있습니다."],lottie:"findingDocuments",title:"신청 내역"},{contents:["지원하는 신청서를 일괄 등록할 수 있습니다.","지원 목록: 휴가, 출퇴근시각 등록, 연장근무, 재택근무 변경/취소","출퇴근시각 등록, 연장근무, 재택근무 변경/취소 신청의 경우 날짜만 선택하여 등록하는 간편 등록을 지원합니다."],lottie:"signDigital",title:"신청서 등록"}].map(e=>{let{title:n,contents:i,lottie:r}=e;return(0,o.jsxs)(u.Z,{direction:"row",children:[(0,o.jsxs)(u.Z,{alignItems:"center",justifyContent:"center",position:"relative",children:[(0,o.jsx)(g.Z,{bgcolor:t,borderRadius:"50%",height:32,width:32,zIndex:2}),(0,o.jsx)(g.Z,{bgcolor:"black",height:"100%",position:"absolute",width:2})]}),(0,o.jsx)(g.Z,{padding:4,paddingRight:0,position:"relative",width:"100%",children:(0,o.jsx)($.Z,{sx:{padding:2,width:"100%"},children:(0,o.jsxs)(u.Z,{direction:"row",spacing:2,children:[(0,o.jsx)(u.Z,{justifyContent:"center",width:200,children:(0,o.jsx)(m.Z,{height:"100%",iconName:r,width:"100%"})}),(0,o.jsxs)(u.Z,{spacing:2,children:[(0,o.jsx)(x.Z,{fontSize:"1.2rem",fontWeight:"bold",children:n}),(0,o.jsx)(u.Z,{children:i.map((t,e)=>(0,o.jsx)(x.Z,{variant:"caption",children:t},"".concat(n,"-").concat(e)))})]})]})})})]},n)})})]})})},tt=n(9536),te=n(6918),tn=n(9208),ti=function(){let{theme:t,setTheme:e}=(0,w.useContext)(tt.f),n=(0,w.useCallback)(()=>{e&&e(t=>{let e={...t};return e.mode="light"===e.mode?"dark":"light",(0,te.PZ)("jader","parameter",e),e})},[e]);return(0,o.jsx)(tn.Z,{"data-component":"AboutThemeSwitch",sx:{border:"5px solid #FFFFFFAA",borderRadius:100,overflow:"hidden"},onClick:n,children:(0,o.jsxs)(u.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",padding:2,position:"relative",sx:{backdropFilter:"blur(10px)"},width:150,children:[(0,o.jsx)("img",{alt:"sun",height:24,src:"https://user-images.githubusercontent.com/50317129/243126698-53e94830-fd00-4f7c-bd6a-8758c30999b4.png",width:24}),(0,o.jsx)("img",{alt:"moon",height:24,src:"https://user-images.githubusercontent.com/50317129/243126799-36856dee-1584-4acb-9063-704930f45c49.png",width:24}),(0,o.jsx)(f.E.div,{animate:(null==t?void 0:t.mode)||"light",transition:{duration:1},variants:{dark:{left:100,position:"absolute",right:10},light:{left:10,position:"absolute",right:100}},children:(0,o.jsx)(g.Z,{bgcolor:"white",borderRadius:"50%",height:40,width:40})})]})})},tr=function(){let t=(0,w.useCallback)((t,e)=>({background:"light"===t?"linear-gradient(0deg, #14A6EF, #96DCFF)":"linear-gradient(0deg, #F97281, #7B589E, #171F85)",height:"100%",left:0,opacity:e?1:0,position:"absolute",top:0,width:"100%"}),[]),e=(0,w.useCallback)((t,e)=>({backgroundImage:"url(".concat("light"===t?"https://user-images.githubusercontent.com/50317129/243145837-22926e41-a1dc-4a68-b248-6624954f77f4.png":"https://user-images.githubusercontent.com/50317129/243124240-83ecab48-3eb5-4e30-a557-949ca54d0169.png",")"),backgroundPosition:"bottom",backgroundRepeat:"repeat-x",backgroundSize:"contain",bottom:0,filter:"drop-shadow(4px -4px 8px ".concat("light"===t?"#0077C0":"black",")"),height:"100%",left:0,maxHeight:500,opacity:e?1:0,overflow:"hidden",position:"absolute",width:"100%"}),[]);return(0,o.jsxs)(g.Z,{className:"fullpage","data-component":"AboutThemeBox",padding:4,position:"relative",children:[(0,o.jsxs)(u.Z,{alignItems:"center",justifyContent:"center",spacing:4,children:[(0,o.jsxs)(u.Z,{direction:"row",height:d({sm:75,xl:150}),justifyContent:"space-between",maxWidth:"md",position:"relative",width:"100%",zIndex:1,children:[(0,o.jsx)(f.E.div,{animate:c("light","dark"),transition:{duration:1},variants:{dark:{height:"100%",opacity:0,translateY:150},light:{height:"100%",opacity:1,translateY:0}},children:(0,o.jsx)(g.Z,{borderRadius:"50%",height:d({sm:75,xl:150}),padding:d({sm:2,xl:4}),sx:{background:"radial-gradient(closest-side, orange, transparent)"},width:d({sm:75,xl:150}),children:(0,o.jsx)("img",{alt:"sun",height:"100%",src:"https://user-images.githubusercontent.com/50317129/243126698-53e94830-fd00-4f7c-bd6a-8758c30999b4.png",style:{zIndex:1},width:"100%"})})}),(0,o.jsx)(f.E.div,{animate:c("light","dark"),transition:{duration:1},variants:{dark:{height:"100%",opacity:1,translateY:0},light:{height:"100%",opacity:0,translateY:150}},children:(0,o.jsx)(g.Z,{borderRadius:"50%",height:d({sm:75,xl:150}),padding:d({sm:2,xl:4}),style:{zIndex:1},sx:{background:"radial-gradient(closest-side, yellow, transparent)"},width:d({sm:75,xl:150}),children:(0,o.jsx)("img",{alt:"moon",height:"100%",src:"https://user-images.githubusercontent.com/50317129/243126799-36856dee-1584-4acb-9063-704930f45c49.png",style:{zIndex:1},width:"100%"})})})]}),(0,o.jsxs)(u.Z,{alignItems:"center",justifyContent:"center",position:"relative",spacing:d({md:5,xl:10}),zIndex:1,children:[(0,o.jsx)(x.Z,{color:"white",fontSize:d({md:"2rem",xl:"4rem"}),fontWeight:"bold",children:"노안을 위한 사이트는 없다"}),(0,o.jsxs)(u.Z,{alignItems:"center",color:"white",justifyContent:"center",spacing:3,children:[(0,o.jsxs)(u.Z,{alignItems:"center",justifyContent:"center",children:[(0,o.jsx)(x.Z,{children:"보통의 사이트는 대부분 하얀색이였습니다. 21세기에 아직도 화이트 워싱이라니. 정말이지 용납할 수가 없군요."}),(0,o.jsx)(x.Z,{children:"저희 사이트에선 다크모드를 지원하여 사이트의 다양성을 존중합니다."})]}),(0,o.jsxs)(u.Z,{alignItems:"center",justifyContent:"center",children:[(0,o.jsx)(x.Z,{children:"당장 다크모드를 사용하여 어둠의 자식들이 되어보세요!"}),(0,o.jsx)(x.Z,{children:"다크모드는 이따위 조잡한 사이트 때문에 화면밝기를 조절해야하는 수고를 덜어줍니다."}),(0,o.jsx)(x.Z,{children:"또한 빨리 하루가 끝나, 퇴근하고 싶은 여러분의 마음을 표현하는덴 더더욱 좋습니다!"})]}),(0,o.jsx)(x.Z,{children:"지금 아래의 버튼을 눌러 테마를 체험해보세요!"}),(0,o.jsx)(x.Z,{children:"테마 스위치 버튼은 사이드바에서 만나보실 수 있습니다."}),(0,o.jsx)(g.Z,{paddingTop:4,children:(0,o.jsx)(ti,{})})]})]})]}),(0,o.jsxs)(g.Z,{height:"100%",left:0,position:"absolute",top:0,width:"100%",children:[(0,o.jsx)(f.E.div,{animate:c("light","dark"),transition:{duration:1},variants:{dark:t("light",!1),light:t("light",!0)}}),(0,o.jsx)(f.E.div,{animate:c("light","dark"),transition:{duration:1},variants:{dark:t("dark",!0),light:t("dark",!1)}}),(0,o.jsx)(f.E.div,{animate:c("light","dark"),transition:{duration:1},variants:{dark:e("light",!1),light:e("light",!0)}}),(0,o.jsx)(f.E.div,{animate:c("light","dark"),transition:{duration:1},variants:{dark:e("dark",!0),light:e("dark",!1)}})]})]})},to=n(3783),ts=function(){return(0,o.jsxs)(u.Z,{alignItems:"center",bgcolor:c("white","black"),component:"section","data-component":"AboutWelcomeBox",justifyContent:"center",padding:8,spacing:10,children:[(0,o.jsxs)(u.Z,{alignItems:"center",justifyContent:"center",spacing:d({md:2,xl:4}),children:[(0,o.jsx)(x.Z,{letterSpacing:3,children:"Introduce"}),(0,o.jsxs)(u.Z,{alignItems:"center",direction:"row",justifyContent:"center",spacing:d({md:2,xl:4}),children:[(0,o.jsx)(to.Z,{borderRadius:d({md:2,xl:4}),height:d({md:50,xl:100}),width:d({md:50,xl:100}),origin:!0}),(0,o.jsx)(x.Z,{fontSize:d({md:"3rem",xl:"5rem"}),fontWeight:"bold",letterSpacing:10,children:"JADER"})]}),(0,o.jsx)(x.Z,{fontSize:d({md:void 0,xl:"1.5rem"}),children:"약간 빠르거나. 살짝 편하거나."})]}),(0,o.jsx)(g.Z,{borderRadius:4,boxShadow:"3px 3px 10px black",maxWidth:"sm",minWidth:200,overflow:"hidden",sx:{backgroundImage:"linear-gradient(to right top, #051937, #161d4b, #301e5b, #4e1967, #6f006c)"},width:"100%",children:(0,o.jsx)(f.E.div,{initial:"initial",transition:{duration:1},viewport:{amount:.2},whileInView:"animate",variants:{animate:{opacity:1,translateY:0},initial:{opacity:0,translateY:d({sm:100,xl:200})}},children:(0,o.jsx)(m.Z,{iconName:"programming"})})})]})},ta=function(){return(0,o.jsxs)(u.Z,{"data-component":"AboutTemplate",width:"100%",children:[(0,o.jsx)(p,{}),(0,o.jsx)(ts,{}),(0,o.jsx)(V,{}),(0,o.jsx)(Q,{}),(0,o.jsx)(tr,{})]})},tl=n(6938);function td(){return(0,o.jsxs)(tl.Z,{children:[(0,o.jsx)(s.Z,{title:"둘러보기",url:"/about"}),(0,o.jsx)(ta,{})]})}},5455:function(t,e,n){"use strict";n.d(e,{I:function(){return r}});var i=n(529);function r(t,e,n){var r;if("string"==typeof t){let o=document;e&&((0,i.k)(Boolean(e.current),"Scope provided, but no element detected."),o=e.current),n?(null!==(r=n[t])&&void 0!==r||(n[t]=o.querySelectorAll(t)),t=n[t]):t=o.querySelectorAll(t)}else t instanceof Element&&(t=[t]);return Array.from(t||[])}}},function(t){t.O(0,[644,47,384,950,479,901,891,812,774,888,179],function(){return t(t.s=6484)}),_N_E=t.O()}]);