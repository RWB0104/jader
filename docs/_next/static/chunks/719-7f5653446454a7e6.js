"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[719],{722:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(5893),r=n(5710),o=n(1163),a=function(e){let{children:t}=e,n=(0,o.useRouter)(),{data:a}=r.Z.useCheck({onSuccess(e){var t;(null===(t=e.body)||void 0===t?void 0:t.valid)||n.push("/login")}});return a?(0,i.jsx)(i.Fragment,{children:t}):null}},8646:function(e,t,n){n.d(t,{Z:function(){return D}});var i=n(5893),r=n(1955),o=n(5710),a=n(6211),l=n(4225),s=n(1655),u=n(9144),c=n(7294),d=function(e){let{user:t,onClick:n}=e,r=(0,c.useCallback)(e=>{e.currentTarget.src="/jader/assets/icon/icon-192x192.png"},[]);return(0,i.jsx)(u.Z,{alignItems:"center",color:"white","data-component":"UserCard",direction:"row",spacing:2,children:t?(0,i.jsx)(l.Z,{sx:{height:36,width:36},onClick:n,children:(0,i.jsx)("img",{alt:t.name,className:"jade-info-box-profile",height:36,referrerPolicy:"no-referrer",src:"https://ehr.jadehr.co.kr".concat(t.profileUrl),width:36,onError:r})}):(0,i.jsx)(l.Z,{children:(0,i.jsx)(s.Z,{height:36,variant:"circular",width:36})})})},m=n(1953),h=n(4803),x=n(60),j=n(9630),p=n(1664),g=n.n(p),f=function(e){let{user:t,list:n}=e,[r,o]=(0,c.useState)(null),a=(0,c.useCallback)(e=>{let{currentTarget:t}=e;o(e=>e?null:t)},[o]),l=(0,c.useCallback)(()=>{o(null)},[o]);return(0,i.jsxs)(m.Z,{"data-component":"UserMenuCard",children:[(0,i.jsx)(d,{user:t,onClick:a}),(0,i.jsx)(h.Z,{anchorEl:r,open:null!==r,sx:{marginTop:1},onClose:l,children:null==n?void 0:n.map((e,t)=>{let{icon:n,title:r,link:o}=e;return(0,i.jsx)(x.Z,{children:(0,i.jsx)(g(),{color:"inherit",href:o||"#",children:(0,i.jsxs)(u.Z,{alignItems:"center",direction:"row",justifyContent:"center",spacing:1,children:[n,(0,i.jsx)(j.Z,{variant:"body2",children:r})]})})},t)})})]})},w=n(5573),Z=n(3540),k=n(326),y=n(5050),C=n(562),v=n(784),b=function(e){let{user:t,onMenuClick:n}=e,r=[{icon:(0,i.jsx)(w.Z,{color:"primary",fontSize:"small"}),link:"/mypage",title:"마이페이지"},{icon:(0,i.jsx)(Z.Z,{color:"primary",fontSize:"small"}),link:"/logout",title:"로그아웃"}];return(0,i.jsx)(y.Z,{color:"default","data-component":"Header",position:"sticky",sx:{transition:"0.3s background-color",zIndex:1250},children:(0,i.jsx)(v.Z,{children:(0,i.jsxs)(u.Z,{alignItems:"center",direction:"row",spacing:2,width:"100%",children:[(0,i.jsxs)(u.Z,{alignItems:"center",direction:"row",flex:1,spacing:2,children:[(0,i.jsx)(C.Z,{color:"inherit",onClick:n,children:(0,i.jsx)(k.Z,{})}),(0,i.jsx)(g(),{href:"/",children:(0,i.jsxs)(u.Z,{alignItems:"center",direction:"row",spacing:2,children:[(0,i.jsx)(a.Z,{borderRadius:2,height:32,width:32}),(0,i.jsx)(j.Z,{fontWeight:"bold",variant:"h5",children:"JADER"})]})})]}),(0,i.jsx)(f,{list:r,user:t})]})})})},I=n(1027),W=n(5629),P=n(9078),T=n(6646),$=function(){let{theme:e,setTheme:t}=(0,c.useContext)(I.f),n=(0,c.useCallback)(()=>{t&&t(e=>{let t={...e};return t.mode=(null==e?void 0:e.mode)==="light"?"dark":"light",(0,W.PZ)("jader","parameter",t),t})},[t]);return(0,i.jsx)(l.Z,{color:"inherit","data-component":"ThemeSwitch",onClick:n,children:(0,i.jsxs)(u.Z,{direction:"row",spacing:2,children:[(0,i.jsx)(T.Z,{htmlColor:(null==e?void 0:e.mode)==="light"?"orange":"grey"}),(0,i.jsx)(P.Z,{htmlColor:(null==e?void 0:e.mode)==="dark"?"yellow":"gainsboro"})]})})},O=n(4373),U=n(4631),M=n(1163),z=function(e){let{list:t,...n}=e,{pathname:r}=(0,M.useRouter)();return(0,i.jsx)(U.ZP,{"data-component":"Sidebar",...n,children:(0,i.jsxs)(u.Z,{color:"grey",marginBottom:4,marginTop:8,minWidth:256,children:[(0,i.jsx)(m.Z,{alignItems:"center",display:"flex",justifyContent:"center",padding:"30px 0px",children:(0,i.jsx)(a.Z,{height:64,width:64})}),(0,i.jsx)(O.Z,{sx:{marginBottom:"10px",marginTop:"10px"},variant:"middle"}),null==t?void 0:t.map((e,t)=>{let n=e.map((e,t)=>{let{icon:n,title:o,link:a,disabled:s}=e;return(0,i.jsx)(g(),{href:a||"#",children:(0,i.jsx)(l.Z,{color:r===a?"primary":"inherit",disabled:s,size:"large",startIcon:n,sx:{justifyContent:"initial",padding:"10px 25px",textAlign:"start"},fullWidth:!0,children:o})},t)});return n.push((0,i.jsx)(O.Z,{sx:{marginBottom:"10px",marginTop:"10px"},variant:"middle"},"sub-".concat(t))),n}),(0,i.jsx)($,{})]})})},F=n(3147),Q=n(5771),S=n(6638),A=n(5433),E=n(8570),L=n(9317),D=function(e){let{children:t}=e,[n,a]=(0,c.useState)(!1),{data:l}=r.Z.useUserInfo(),{data:s}=o.Z.useGetUser(),u=(0,c.useCallback)(()=>{a(e=>!e)},[a]),d=(0,c.useCallback)(()=>{a(!1)},[a]),h=(0,c.useMemo)(()=>{var e,t;let n=[[{icon:(0,i.jsx)(S.Z,{}),link:"/",title:"홈"},{icon:(0,i.jsx)(F.Z,{}),link:"/calendar",title:"근태 현황"}],[{icon:(0,i.jsx)(Q.Z,{}),link:"/form/worktime",title:"출퇴근시각 등록 요청"},{icon:(0,i.jsx)(E.Z,{}),link:"/form/overtime",title:"연장근무 신청"},{icon:(0,i.jsx)(A.Z,{}),link:"/form/homeworking",title:"재택근무 변경/취소 신청"}],[{icon:(0,i.jsx)(w.Z,{}),link:"/mypage",title:"마이페이지"}],[{icon:(0,i.jsx)(L.Z,{}),link:"/about",title:"둘러보기"}]];return(null==s?void 0:null===(e=s.body)||void 0===e?void 0:null===(t=e.authorityList)||void 0===t?void 0:t.includes("ROLE_ADMIN"))&&n.push([{icon:(0,i.jsx)(L.Z,{}),link:"/about",title:"관리자 테스트 1"},{icon:(0,i.jsx)(L.Z,{}),link:"/about",title:"관리자 테스트 2"},{icon:(0,i.jsx)(L.Z,{}),link:"/about",title:"관리자 테스트 3"},{icon:(0,i.jsx)(L.Z,{}),link:"/about",title:"관리자 테스트 4"}]),n},[s]);return(0,i.jsxs)(m.Z,{component:"section","data-component":"PageTemplate",children:[(0,i.jsx)(b,{user:null==l?void 0:l.body,onMenuClick:u}),(0,i.jsx)(z,{list:h,open:n,onClose:d}),t]})}},1955:function(e,t,n){var i=n(1473),r=n(386),o=n(8767);t.Z={useGetApplUserList:function(e,t){let n=(0,i.m)();return(0,o.useQuery)(["jade","getApplUserList",e],async()=>{let t=await new r.$d(await n).getApplUser({type:e});return t},t)},useGetCalendar:function(e,t){let n=(0,i.m)();return(0,o.useQuery)(["jade","getCalendar",e.year,e.month],async()=>{let t=await new r.$d(await n).getCalendar(e);return t},t)},useGetOrganization:function(e){let t=(0,i.m)();return(0,o.useQuery)(["jade","getOrganization"],async()=>{let e=await new r.$d(await t).getOrganization();return e},e)},useGetWorkTimeDetailInfo:function(e,t){let n=(0,i.m)();return(0,o.useQuery)(["jade","getWorkTimeDetailInfo",e.year,e.month],async()=>{let t=await new r.$d(await n).getWorkTimeDetailInfo(e);return t},t)},useLogin:function(e){let t=(0,i.m)();return(0,o.useQuery)(["jade","login"],async()=>{let e=await new r.$d(await t).postLogin();return e},e)},usePostCalendarPlan:function(e){let t=(0,i.m)();return(0,o.useMutation)(["jade","postCalendarPlan"],async e=>{let n=await new r.$d(await t).postCalendarPlan(e);return n},e)},usePostHomeWorkingForm:function(e){let t=(0,i.m)();return(0,o.useMutation)(["jade","postHomeWorkingForm"],async e=>{await new r.$d(await t).postHomeWorkingForm(e)},e)},usePostOvertimeForm:function(e){let t=(0,i.m)();return(0,o.useMutation)(["jade","postOvertimeForm"],async e=>{await new r.$d(await t).postOvertimeForm(e)},e)},usePostWorkIn:function(e){let t=(0,i.m)();return(0,o.useMutation)(["jade","postWorkIn"],async()=>{let e=await new r.$d(await t).postWorkIn();return e},e)},usePostWorkOut:function(e){let t=(0,i.m)();return(0,o.useMutation)(["jade","postWorkOut"],async()=>{let e=await new r.$d(await t).postWorkOut();return e},e)},useTime:function(e){let t=(0,i.m)();return(0,o.useQuery)(["jade","time"],async()=>{let e=await new r.$d(await t).getWorkTimeInfo();return e},e)},useUserInfo:function(e){let t=(0,i.m)();return(0,o.useQuery)(["jade","userInfo"],async()=>{let e=await new r.$d(await t).getUserInfo();return e},e)}}}}]);