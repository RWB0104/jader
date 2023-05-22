(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[849],{5978:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(5893),r=n(9144),a=function(e){let{name:t="ContentStack",alignItems:n="center",justifyContent:a="center",maxWidth:o=1200,minWidth:s=320,spacing:l=2,width:c="100%",...u}=e;return(0,i.jsx)(r.Z,{alignItems:n,"data-component":t,justifyContent:a,maxWidth:o,minWidth:s,spacing:l,width:c,...u})}},4794:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(5893),r=n(2097),a=n(1225),o=n(9144),s=function(e){let{point:t,mobileProps:n,...s}=e,l=(0,r.Z)(),c=(0,a.Z)(l.breakpoints.up(t||"lg"));return(0,i.jsx)(o.Z,{"data-component":"ResponsiveStack",...c?s:{...s,...n}})}},849:function(e,t,n){"use strict";n.d(t,{Z:function(){return eo}});var i=n(5893),r=n(1955),a=n(5710),o=n(5978),s=n(4794),l=n(6211),c=n(891),u=n(5449),d=n(8005),m=n(1953),h=n(4373),j=n(562),x=n(9144),p=n(9630),g=n(1664),w=n.n(g),f=function(){return(0,i.jsxs)(x.Z,{alignItems:"center",component:"footer","data-component":"Footer",justifyContent:"center",width:"100%",children:[(0,i.jsx)(m.Z,{width:"100%",children:(0,i.jsx)(h.Z,{sx:{width:"100%"}})}),(0,i.jsx)(o.Z,{children:(0,i.jsxs)(s.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",paddingBottom:4,paddingLeft:2,paddingRight:2,paddingTop:4,width:"100%",mobileProps:{direction:void 0,justifyContent:"center",spacing:4},children:[(0,i.jsxs)(x.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,i.jsx)(l.Z,{borderRadius:2,height:24,width:24}),(0,i.jsx)(p.Z,{color:"dimgray",variant:"caption",children:"Developed by RWB 2022.10"})]}),(0,i.jsxs)(x.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,i.jsx)(w(),{href:"https://ehr.jadehr.co.kr",target:"_blank",children:(0,i.jsx)(j.Z,{children:(0,i.jsx)("img",{alt:"JADE",height:24,src:"/jader/assets/images/jadehr.png",width:24})})}),(0,i.jsx)(w(),{href:"https://github.com/RWB0104",target:"_blank",children:(0,i.jsx)(j.Z,{children:(0,i.jsx)(u.Z,{})})}),(0,i.jsx)(w(),{href:"mailto:psj2716@rsquare.co.kr",target:"_blank",children:(0,i.jsx)(j.Z,{children:(0,i.jsx)(c.Z,{})})}),(0,i.jsx)(w(),{href:"https://www.linkedin.com/in/itcode/",target:"_blank",children:(0,i.jsx)(j.Z,{children:(0,i.jsx)(d.Z,{})})})]})]})})]})},Z=n(2097),y=n(4225),v=n(1655),k=n(5820),b=n(3602),C=function(e){let{user:t,onClick:n}=e,{palette:{primary:r,text:a}}=(0,Z.Z)();return(0,i.jsx)(x.Z,{alignItems:"center",color:"white","data-component":"UserCard",direction:"row",spacing:2,children:(0,i.jsx)(k.M,{children:(0,i.jsx)(b.E.div,{animate:"show",exit:"init",initial:"init",transition:{duration:1},variants:{init:{opacity:0},show:{opacity:1}},children:t?(0,i.jsx)(b.E.div,{animate:"show",exit:"init",initial:"init",children:(0,i.jsx)(y.Z,{onClick:n,children:(0,i.jsxs)(x.Z,{children:[(0,i.jsx)(p.Z,{color:r.main,fontSize:"0.6rem",children:t.team}),(0,i.jsx)(p.Z,{color:a.primary,children:t.name})]})})}):(0,i.jsx)(b.E.div,{animate:"show",exit:"init",initial:"init",children:(0,i.jsx)(y.Z,{children:(0,i.jsxs)(x.Z,{children:[(0,i.jsx)(v.Z,{height:10,width:70}),(0,i.jsx)(v.Z,{width:70})]})})})})})})},I=n(4803),H=n(60),W=n(7294),P=function(e){let{user:t,list:n}=e,[r,a]=(0,W.useState)(null),o=(0,W.useCallback)(e=>{let{currentTarget:t}=e;a(e=>e?null:t)},[a]),s=(0,W.useCallback)(()=>{a(null)},[a]);return(0,i.jsxs)(m.Z,{"data-component":"UserMenuCard",children:[(0,i.jsx)(C,{user:t,onClick:o}),(0,i.jsx)(I.Z,{anchorEl:r,open:null!==r,sx:{marginTop:1},onClose:s,children:null==n?void 0:n.map((e,t)=>{let{icon:n,title:r,link:a}=e;return(0,i.jsx)(H.Z,{children:(0,i.jsx)(w(),{color:"inherit",href:a||"#",children:(0,i.jsxs)(x.Z,{alignItems:"center",direction:"row",justifyContent:"center",spacing:1,children:[n,(0,i.jsx)(p.Z,{variant:"body2",children:r})]})})},t)})})]})},T=n(5573),M=n(3540),$=n(326),E=n(5050),F=n(784),_=function(e){let{user:t,onMenuClick:n}=e,r=[{icon:(0,i.jsx)(T.Z,{color:"primary",fontSize:"small"}),link:"/mypage",title:"마이페이지"},{icon:(0,i.jsx)(M.Z,{color:"primary",fontSize:"small"}),link:"/logout",title:"로그아웃"}];return(0,i.jsx)(E.Z,{color:"default","data-component":"Header",position:"sticky",sx:{transition:"0.3s background-color",zIndex:1250},children:(0,i.jsx)(F.Z,{children:(0,i.jsxs)(x.Z,{alignItems:"center",direction:"row",spacing:2,width:"100%",children:[(0,i.jsxs)(x.Z,{alignItems:"center",direction:"row",flex:1,spacing:2,children:[(0,i.jsx)(j.Z,{color:"inherit",onClick:n,children:(0,i.jsx)($.Z,{})}),(0,i.jsx)(w(),{href:"/home",children:(0,i.jsxs)(x.Z,{alignItems:"center",direction:"row",spacing:2,children:[(0,i.jsx)(l.Z,{borderRadius:2,height:32,width:32}),(0,i.jsx)(p.Z,{fontWeight:"bold",variant:"h5",children:"JADER"})]})})]}),(0,i.jsx)(P,{list:r,user:t})]})})})},D=n(1027),S=n(5629),U=n(9078),L=n(6646),Q=function(){let{theme:e,setTheme:t}=(0,W.useContext)(D.f),n=(0,W.useCallback)(()=>{t&&t(e=>{let t={...e};return t.mode=(null==e?void 0:e.mode)==="light"?"dark":"light",(0,S.PZ)("jader","parameter",t),t})},[t]);return(0,i.jsx)(y.Z,{color:"inherit","data-component":"ThemeSwitch",onClick:n,children:(0,i.jsxs)(x.Z,{direction:"row",spacing:2,children:[(0,i.jsx)(L.Z,{htmlColor:(null==e?void 0:e.mode)==="light"?"orange":"grey"}),(0,i.jsx)(U.Z,{htmlColor:(null==e?void 0:e.mode)==="dark"?"yellow":"gainsboro"})]})})},A=n(4631),Y=n(1163),R=function(e){let{list:t,...n}=e,{pathname:r}=(0,Y.useRouter)();return(0,i.jsx)(A.ZP,{"data-component":"Sidebar",...n,children:(0,i.jsxs)(x.Z,{color:"grey",marginBottom:4,marginTop:8,minWidth:256,children:[(0,i.jsx)(m.Z,{alignItems:"center",display:"flex",justifyContent:"center",padding:"30px 0px",children:(0,i.jsx)(l.Z,{height:64,width:64})}),(0,i.jsx)(h.Z,{sx:{marginBottom:"10px",marginTop:"10px"},variant:"middle"}),null==t?void 0:t.map((e,t)=>{let n=e.map((e,t)=>{let{icon:n,title:a,link:o,disabled:s}=e;return(0,i.jsx)(w(),{href:o||"#",children:(0,i.jsx)(y.Z,{color:r===o?"primary":"inherit",disabled:s,size:"large",startIcon:n,sx:{justifyContent:"initial",padding:"10px 25px",textAlign:"start"},fullWidth:!0,children:a})},t)});return n.push((0,i.jsx)(h.Z,{sx:{marginBottom:"10px",marginTop:"10px"},variant:"middle"},"sub-".concat(t))),n}),(0,i.jsx)(Q,{})]})})},z=n(4364),G=n(160),O=n(4814),V=n.n(O),B=function(){let[e,t]=(0,W.useState)(!0),n=(0,W.useCallback)(()=>{window&&window.scrollTo({top:0})},[]);return(0,W.useEffect)(()=>{let e=()=>{t(0!==window.scrollY)};return document&&document.addEventListener("scroll",e),()=>{document&&document.removeEventListener("scroll",e)}},[t]),(0,i.jsx)(k.M,{children:e?(0,i.jsx)(b.E.div,{animate:"animate",className:V().box,exit:"initial",initial:"initial",transition:{duration:.3},variants:{animate:{opacity:1},initial:{opacity:0}},children:(0,i.jsx)(x.Z,{direction:"row",justifyContent:"end",padding:2,children:(0,i.jsx)(G.Z,{"aria-label":"add",color:"primary",size:"small",onClick:n,children:(0,i.jsx)(z.Z,{})})})}):null})},N=n(3927),J=n(6299),q=n(3147),K=n(5771),X=n(3570),ee=n(2585),et=n(6638),en=n(5433),ei=n(8570),er=n(9317),ea=n(9089);function eo(e){var t;let{mode:n="auth",children:o}=e,s=(0,Y.useRouter)(),[l,c]=(0,W.useState)(!1),{data:u}=r.Z.useUserInfo({onSuccess(e){var t,n;ea.ZP.gtag("set","user_properties",{JADER_NAME:null===(t=e.body)||void 0===t?void 0:t.name,JADER_UNIQUE:null===(n=e.body)||void 0===n?void 0:n.unique})}}),{data:d}=a.Z.useGetUser(),{data:h}=a.Z.useCheck({enabled:"auth"===n,onSuccess(e){var t;(null===(t=e.body)||void 0===t?void 0:t.valid)||s.push("/")}}),j=(0,W.useCallback)(()=>{c(e=>!e)},[c]),p=(0,W.useCallback)(()=>{c(!1)},[c]),g=(0,W.useMemo)(()=>{var e,t;let n=[[{icon:(0,i.jsx)(et.Z,{}),link:"/home",title:"홈"},{icon:(0,i.jsx)(N.Z,{}),link:"/notice",title:"공지사항"},{icon:(0,i.jsx)(er.Z,{}),link:"/about",title:"둘러보기"}],[{icon:(0,i.jsx)(q.Z,{}),link:"/calendar",title:"근태 현황"},{icon:(0,i.jsx)(X.Z,{}),link:"/schedule",title:"일정"}],[{icon:(0,i.jsx)(J.Z,{}),link:"/form",title:"신청 내역"},{icon:(0,i.jsx)(ee.Z,{}),link:"/form/vacation",title:"휴가 신청서"},{icon:(0,i.jsx)(K.Z,{}),link:"/form/worktime",title:"출퇴근시각 등록 요청"},{icon:(0,i.jsx)(ei.Z,{}),link:"/form/overtime",title:"연장근무 신청"},{icon:(0,i.jsx)(en.Z,{}),link:"/form/homeworking",title:"재택근무 변경/취소 신청"}],[{icon:(0,i.jsx)(T.Z,{}),link:"/mypage",title:"마이페이지"}]];return(null==d?void 0:null===(e=d.body)||void 0===e?void 0:null===(t=e.authorityList)||void 0===t?void 0:t.includes("ROLE_ADMIN"))&&n.push(),n},[d]);return(0,i.jsxs)(x.Z,{component:"section","data-component":"PageTemplate",minHeight:"100vh",children:[(0,i.jsx)(_,{user:null==u?void 0:u.body,onMenuClick:j}),(0,i.jsx)(R,{list:g,open:l,onClose:p}),(0,i.jsx)(m.Z,{flex:1,width:"100%",children:(null==h?void 0:null===(t=h.body)||void 0===t?void 0:t.valid)?o:null}),(0,i.jsx)(B,{}),(0,i.jsx)(f,{})]})}},1955:function(e,t,n){"use strict";var i=n(1473),r=n(9735),a=n(8767);t.Z={useDeleteForm:function(e){let t=(0,i.m)();return(0,a.useMutation)(["jade","deleteForm"],async e=>{await new r.$dH(await t).deleteForm(e)},e)},useGetApplInfiniteList:function(e,t){let n=(0,i.m)();return(0,a.useInfiniteQuery)(["jade","getApplList",e],async t=>{var i,a,o;let{pageParam:s=1}=t,l=await new r.$dH(await n).getApplList({...e,page:s});return{currentPage:s,list:(null===(i=l.body)||void 0===i?void 0:i.list)||[],totalCount:(null===(a=l.body)||void 0===a?void 0:a.total)||0,totalPage:Math.ceil(((null===(o=l.body)||void 0===o?void 0:o.total)||0)/e.size)}},{getNextPageParam(e){let{currentPage:t,totalPage:n}=e;return t===n?void 0:t+1},getPreviousPageParam(e){let{currentPage:t}=e;return 1===t?void 0:t-1},...t})},useGetApplUserList:function(e,t){let n=(0,i.m)();return(0,a.useQuery)(["jade","getApplUserList",e],async()=>{let t=await new r.$dH(await n).getApplUserList({type:e});return t},t)},useGetCalendar:function(e,t){let n=(0,i.m)();return(0,a.useQuery)(["jade","getCalendar",e.year,e.month],async()=>{let t=await new r.$dH(await n).getCalendar(e);return t},t)},useGetOrganization:function(e){let t=(0,i.m)();return(0,a.useQuery)(["jade","getOrganization"],async()=>{let e=await new r.$dH(await t).getOrganization();return e},e)},useGetSchedule:function(e,t){let n=(0,i.m)();return(0,a.useQuery)(["jade","getSchedule",e.year,e.month],async()=>{let t=await new r.$dH(await n).getSchedule(e);return t},t)},useGetVacationDate:function(e,t){let n=(0,i.m)(),o="".concat(e.startYmdYear,"-").concat(e.startYmdMonth,"-").concat(e.startYmdDay," ").concat(e.endYmdYear,"-").concat(e.endYmdMonth,"-").concat(e.endYmdDay);return(0,a.useQuery)(["jade","getVacationDate",o],async()=>{let t=await new r.$dH(await n).getVacationDate(e);return t},{enabled:4010===e.vacationType&&0!==e.startYmdYear&&0!==e.endYmdYear,...t})},useGetVacationTimeInfo:function(e,t){let n=(0,i.m)();return(0,a.useQuery)(["jade","getVacationTimeInfo"],async()=>{let t=await new r.$dH(await n).getVacationTimeInfo({type:e});return t},t)},useGetWorkTimeDetailInfo:function(e,t){let n=(0,i.m)();return(0,a.useQuery)(["jade","getWorkTimeDetailInfo",e.year,e.month],async()=>{let t=await new r.$dH(await n).getWorkTimeDetailInfo(e);return t},t)},useLogin:function(e){let t=(0,i.m)();return(0,a.useQuery)(["jade","login"],async()=>{let e=await new r.$dH(await t).postLogin();return e},e)},usePostCalendarPlan:function(e){let t=(0,i.m)();return(0,a.useMutation)(["jade","postCalendarPlan"],async e=>{let n=await new r.$dH(await t).postCalendarPlan(e);return n},e)},usePostHomeWorkingForm:function(e){let t=(0,i.m)();return(0,a.useMutation)(["jade","postHomeWorkingForm"],async e=>{await new r.$dH(await t).postHomeWorkingForm(e)},e)},usePostOvertimeForm:function(e){let t=(0,i.m)();return(0,a.useMutation)(["jade","postOvertimeForm"],async e=>{await new r.$dH(await t).postOvertimeForm(e)},e)},usePostVacationForm:function(e){let t=(0,i.m)();return(0,a.useMutation)(["jade","postVacationForm"],async e=>{await new r.$dH(await t).postVacationForm(e)},e)},usePostWorkIn:function(e){let t=(0,i.m)();return(0,a.useMutation)(["jade","postWorkIn"],async()=>{let e=await new r.$dH(await t).postWorkIn();return e},e)},usePostWorkOut:function(e){let t=(0,i.m)();return(0,a.useMutation)(["jade","postWorkOut"],async()=>{let e=await new r.$dH(await t).postWorkOut();return e},e)},usePostWorkTimeForm:function(e){let t=(0,i.m)();return(0,a.useMutation)(["jade","postWorkTimeForm"],async e=>{await new r.$dH(await t).postWorkTimeForm(e)},e)},useTime:function(e){let t=(0,i.m)();return(0,a.useQuery)(["jade","time"],async()=>{let e=await new r.$dH(await t).getWorkTimeInfo();return e},e)},useUserInfo:function(e){let t=(0,i.m)();return(0,a.useQuery)(["jade","userInfo"],async()=>{let e=await new r.$dH(await t).getUserInfo();return e},e)}}},5710:function(e,t,n){"use strict";var i=n(1473),r=n(9735),a=n(8767);t.Z={useCheck:function(e){let t=(0,i.m)();return(0,a.useQuery)(["user","check"],async()=>{let e=await new r.ii(await t).getValidUser();return e},e)},useGetUser:function(e){let t=(0,i.m)();return(0,a.useQuery)(["user","getUser"],async()=>{let e=await new r.ii(await t).getUser();return e},e)},useLogin:function(e){let t=(0,i.m)();return(0,a.useMutation)(["user","login"],async e=>{let n=await new r.ii(await t).login(e);return n},e)}}},4814:function(e){e.exports={box:"InteractionBox_box__J_TBN"}}}]);