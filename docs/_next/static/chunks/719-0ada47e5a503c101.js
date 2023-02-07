"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[719],{722:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(5893),r=t(2418),o=t(1163),l=function(e){let{children:n}=e,t=(0,o.useRouter)(),{data:l}=r.Z.useAuth({onSuccess(e){e||t.push("/login")}});return l?(0,i.jsx)(i.Fragment,{children:n}):null}},8646:function(e,n,t){t.d(n,{Z:function(){return q}});var i=t(5893),r=t(1254),o=t(5710),l=t(6211),s=t(4731),a=t(5084),u=t(1655),c=t(9144),d=function(e){let{user:n,onClick:t}=e;return(0,i.jsx)(c.Z,{alignItems:"center",color:"white","data-component":"UserCard",direction:"row",spacing:2,children:n?(0,i.jsx)(a.Z,{sx:{height:36,width:36},onClick:t,children:(0,i.jsx)(s.Z,{alt:null==n?void 0:n.name,src:null==n?void 0:n.picture,sx:{height:36,width:36}})}):(0,i.jsx)(a.Z,{children:(0,i.jsx)(u.Z,{height:36,variant:"circular",width:36})})})},h=t(1953),x=t(8346),p=t(4803),m=t(60),j=t(9630),Z=t(7294),g=function(e){let{user:n,list:t}=e,[r,o]=(0,Z.useState)(null),l=(0,Z.useCallback)(e=>{let{currentTarget:n}=e;o(e=>e?null:n)},[o]),s=(0,Z.useCallback)(()=>{o(null)},[o]);return(0,i.jsxs)(h.Z,{"data-component":"UserMenuCard",children:[(0,i.jsx)(d,{user:n,onClick:l}),(0,i.jsx)(p.Z,{anchorEl:r,open:null!==r,sx:{marginTop:1},onClose:s,children:null==t?void 0:t.map((e,n)=>{let{icon:t,title:r,link:o}=e;return(0,i.jsx)(m.Z,{children:(0,i.jsx)(x.Z,{color:"inherit",href:o,underline:"none",children:(0,i.jsxs)(c.Z,{alignItems:"center",direction:"row",justifyContent:"center",spacing:1,children:[t,(0,i.jsx)(j.Z,{variant:"body2",children:r})]})})},n)})})]})},w=t(5573),f=t(3540),k=t(326),v=t(5050),y=t(562),b=t(784),C=function(e){let{user:n,onMenuClick:t}=e,r=[{icon:(0,i.jsx)(w.Z,{color:"primary",fontSize:"small"}),link:"/jader/mypage",title:"마이페이지"},{icon:(0,i.jsx)(f.Z,{color:"primary",fontSize:"small"}),link:"/jader/logout",title:"로그아웃"}];return(0,i.jsx)(v.Z,{"data-component":"Header",position:"fixed",sx:{transition:"0.3s background-color",zIndex:1250},children:(0,i.jsx)(b.Z,{children:(0,i.jsxs)(c.Z,{alignItems:"center",color:"white",direction:"row",spacing:2,width:"100%",children:[(0,i.jsxs)(c.Z,{alignItems:"center",color:"white",direction:"row",flex:1,spacing:2,children:[(0,i.jsx)(y.Z,{color:"inherit",onClick:t,children:(0,i.jsx)(k.Z,{})}),(0,i.jsx)(l.Z,{borderRadius:2,height:32,width:32}),(0,i.jsx)(j.Z,{fontWeight:"bold",variant:"h5",children:"JADER"})]}),(0,i.jsx)(g,{list:r,user:n})]})})})},U=t(1027),P=t(5629),S=t(9078),I=t(6646),T=function(){let{theme:e,setTheme:n}=(0,Z.useContext)(U.f),t=(0,Z.useCallback)(()=>{n&&n(e=>{let n={...e};return n.mode=(null==e?void 0:e.mode)==="light"?"dark":"light",(0,P.PZ)("jader","parameter",n),n})},[n]);return(0,i.jsx)(a.Z,{color:"inherit","data-component":"ThemeSwitch",onClick:t,children:(0,i.jsxs)(c.Z,{direction:"row",spacing:2,children:[(0,i.jsx)(I.Z,{htmlColor:(null==e?void 0:e.mode)==="light"?"orange":"grey"}),(0,i.jsx)(S.Z,{htmlColor:(null==e?void 0:e.mode)==="dark"?"yellow":"gainsboro"})]})})},J=t(2097),R=t(1225),A=t(4373),B=t(4631),z=t(1664),E=t.n(z),M=t(1163),Q=function(e){let{list:n,...t}=e,r=(0,J.Z)(),{pathname:o}=(0,M.useRouter)(),s=(0,R.Z)(r.breakpoints.up("sm"));return(0,i.jsx)(B.ZP,{"data-component":"Sidebar",...t,children:(0,i.jsxs)(c.Z,{color:"grey",minWidth:256,paddingTop:s?"64px":"56px",children:[(0,i.jsx)(h.Z,{alignItems:"center",display:"flex",justifyContent:"center",padding:"30px 0px",children:(0,i.jsx)(l.Z,{height:64,width:64})}),(0,i.jsx)(A.Z,{sx:{marginBottom:"10px",marginTop:"10px"},variant:"middle"}),null==n?void 0:n.map((e,n)=>{let t=e.map((e,n)=>{let{icon:t,title:r,link:l,disabled:s}=e;return(0,i.jsx)(E(),{href:l||"#",children:(0,i.jsx)(a.Z,{color:o===l?"primary":"inherit",disabled:s,size:"large",startIcon:t,sx:{justifyContent:"initial",padding:"10px 25px",textAlign:"start"},fullWidth:!0,children:r})},n)});return t.push((0,i.jsx)(A.Z,{sx:{marginBottom:"10px",marginTop:"10px"},variant:"middle"},"sub-".concat(n))),t}),(0,i.jsx)(T,{})]})})},_=t(3147),D=t(5771),W=t(6638),F=t(5433),G=t(8570),N=t(9317),V=t(4480),q=function(e){let{children:n}=e,t=(0,J.Z)(),l=(0,R.Z)(t.breakpoints.up("sm")),[s,a]=(0,Z.useState)(!1),u=(0,V.sJ)(r.ax),{data:c}=o.Z.useGetUser({enabled:void 0!==u}),d=(0,Z.useCallback)(()=>{a(e=>!e)},[a]),x=(0,Z.useCallback)(()=>{a(!1)},[a]),p=[[{icon:(0,i.jsx)(W.Z,{}),link:"/",title:"홈"},{icon:(0,i.jsx)(_.Z,{}),link:"/calendar",title:"근태 현황"}],[{icon:(0,i.jsx)(D.Z,{}),link:"/form/worktime",title:"출퇴근시각 등록 요청"},{icon:(0,i.jsx)(G.Z,{}),link:"/form/overtime",title:"연장근무 신청"},{icon:(0,i.jsx)(F.Z,{}),link:"/form/homeworking",title:"재택근무 변경/취소 신청"}],[{icon:(0,i.jsx)(w.Z,{}),link:"/mypage",title:"마이페이지"}],[{icon:(0,i.jsx)(N.Z,{}),link:"/about",title:"둘러보기"}]];return(0,i.jsxs)(h.Z,{component:"section","data-component":"PageTemplate",paddingTop:l?"64px":"56px",children:[(0,i.jsx)(C,{user:null==c?void 0:c.body,onMenuClick:d}),(0,i.jsx)(Q,{list:p,open:s,onClose:x}),n]})}},2418:function(e,n,t){var i=t(1254),r=t(5629),o=t(5710),l=t(8767),s=t(4480);n.Z={useAuth:function(e){let[n,t]=(0,s.FV)(i.ax),{data:a,isSuccess:u}=o.Z.useCheck();return(0,l.useQuery)(["custom","auth"],async()=>{let e=await (0,r.qe)("jader","token","refresh");if(n||e){var i,o,l;let s=null==a?void 0:null===(i=a.body)||void 0===i?void 0:i.access,u=null==a?void 0:null===(o=a.body)||void 0===o?void 0:o.refresh,c=new Date;return s&&t(s),u&&await (0,r.PZ)("jader","token",{id:"refresh",timestamp:c,token:u}),null==a?void 0:null===(l=a.body)||void 0===l?void 0:l.valid}return!1},{enabled:u,...e})},useLogout:function(e){let n=(0,s.Zl)(i.ax);return(0,l.useQuery)(["custom","logout"],async()=>{n(void 0),await (0,r.PS)("jader","token")},{...e})}}},5710:function(e,n,t){var i=t(1473),r=t(4191),o=t(8767);n.Z={useCheck:function(e){let n=(0,i.m)();return(0,o.useQuery)(["user","check"],async()=>{let e=await new r.ii(await n).getValidUser();return e},e)},useDeleteUser:function(e){let n=(0,i.m)();return(0,o.useMutation)(["user","deleteUser"],async()=>(await new r.ii(await n).deleteUserRaw(),!0),e)},useGetUser:function(e){let n=(0,i.m)();return(0,o.useQuery)(["user","getUser"],async()=>{let e=await new r.ii(await n).getUser();return e},e)},useUpdateByJadePassword:function(e){let n=(0,i.m)();return(0,o.useMutation)(["user","updateByJadePassword"],async e=>(await new r.ii(await n).updateByJadePasswordRaw({openApiJadePasswordProps:{jadePassword:e}}),!0),e)}}}}]);