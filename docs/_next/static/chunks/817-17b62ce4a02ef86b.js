"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[817],{8310:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(5893),r=t(8493),o=t(1163),l=function(e){let{children:n}=e,t=(0,o.useRouter)(),{data:l}=r.Z.useAuth({onSuccess(e){e||t.push("/login")}});return l?(0,i.jsx)(i.Fragment,{children:n}):null}},9113:function(e,n,t){t.d(n,{Z:function(){return F}});var i=t(5893),r=t(3243),o=t(7324),l=t(4731),s=t(5084),a=t(1655),c=t(9144),u=function(e){let{user:n,onClick:t}=e;return(0,i.jsx)(c.Z,{alignItems:"center",color:"white","data-component":"UserCard",direction:"row",spacing:2,children:n?(0,i.jsx)(s.Z,{sx:{height:36,width:36},onClick:t,children:(0,i.jsx)(l.Z,{alt:null==n?void 0:n.name,src:null==n?void 0:n.picture,sx:{height:36,width:36}})}):(0,i.jsx)(s.Z,{children:(0,i.jsx)(a.Z,{height:36,variant:"circular",width:36})})})},d=t(1953),h=t(8346),x=t(4803),j=t(60),p=t(9630),Z=t(7294),m=function(e){let{user:n,list:t}=e,[r,o]=(0,Z.useState)(null),l=(0,Z.useCallback)(e=>{let{currentTarget:n}=e;o(e=>e?null:n)},[o]),s=(0,Z.useCallback)(()=>{o(null)},[o]);return(0,i.jsxs)(d.Z,{"data-component":"UserMenuCard",children:[(0,i.jsx)(u,{user:n,onClick:l}),(0,i.jsx)(x.Z,{anchorEl:r,open:null!==r,sx:{marginTop:1},onClose:s,children:null==t?void 0:t.map((e,n)=>{let{icon:t,title:r,link:o}=e;return(0,i.jsx)(j.Z,{children:(0,i.jsx)(h.Z,{color:"inherit",href:o,underline:"none",children:(0,i.jsxs)(c.Z,{alignItems:"center",direction:"row",justifyContent:"center",spacing:2,children:[t,(0,i.jsx)(p.Z,{children:r})]})})},n)})})]})},g=t(5573),k=t(3540),f=t(326),w=t(5050),v=t(562),C=t(784),b=function(e){let{user:n,onMenuClick:t}=e,r=[{icon:(0,i.jsx)(g.Z,{}),link:"",title:"마이페이지"},{icon:(0,i.jsx)(k.Z,{}),link:"/jader/logout",title:"로그아웃"}];return(0,i.jsx)(w.Z,{"data-component":"Header",position:"fixed",sx:{transition:"0.3s background-color",zIndex:1250},children:(0,i.jsx)(C.Z,{children:(0,i.jsxs)(c.Z,{alignItems:"center",color:"white",direction:"row",spacing:2,width:"100%",children:[(0,i.jsxs)(c.Z,{alignItems:"center",color:"white",direction:"row",flex:1,spacing:2,children:[(0,i.jsx)(v.Z,{color:"inherit",onClick:t,children:(0,i.jsx)(f.Z,{})}),(0,i.jsx)(o.Z,{borderRadius:2,height:32,width:32}),(0,i.jsx)(p.Z,{fontWeight:"bold",variant:"h5",children:"JADER"})]}),(0,i.jsx)(m,{list:r,user:n})]})})})},y=t(6820),P=t(7213),I=t(9078),T=t(6646),U=function(){let{theme:e,setTheme:n}=(0,Z.useContext)(y.f),t=(0,Z.useCallback)(()=>{n&&n(e=>{let n={...e};return n.mode=(null==e?void 0:e.mode)==="light"?"dark":"light",(0,P.PZ)("jader","parameter",n),n})},[n]);return(0,i.jsx)(s.Z,{color:"inherit","data-component":"ThemeSwitch",onClick:t,children:(0,i.jsxs)(c.Z,{direction:"row",spacing:2,children:[(0,i.jsx)(T.Z,{htmlColor:(null==e?void 0:e.mode)==="light"?"orange":"grey"}),(0,i.jsx)(I.Z,{htmlColor:(null==e?void 0:e.mode)==="dark"?"yellow":"gainsboro"})]})})},S=t(2097),A=t(1225),E=t(4373),Q=t(4631),R=t(1664),_=t.n(R),W=t(1163),q=function(e){let{list:n,...t}=e,r=(0,S.Z)(),{pathname:l}=(0,W.useRouter)(),a=(0,A.Z)(r.breakpoints.up("sm"));return(0,i.jsx)(Q.ZP,{...t,"data-component":"Sidebar",children:(0,i.jsxs)(c.Z,{color:"grey",minWidth:256,paddingTop:a?"64px":"56px",children:[(0,i.jsx)(d.Z,{alignItems:"center",display:"flex",justifyContent:"center",padding:"30px 0px",children:(0,i.jsx)(o.Z,{height:64,width:64})}),(0,i.jsx)(E.Z,{sx:{marginBottom:"10px",marginTop:"10px"},variant:"middle"}),null==n?void 0:n.map((e,n)=>{let t=e.map((e,n)=>{let{icon:t,title:r,link:o,disabled:a}=e;return(0,i.jsx)(_(),{href:o||"#",children:(0,i.jsx)(s.Z,{color:l===o?"primary":"inherit",disabled:a,size:"large",startIcon:t,sx:{justifyContent:"initial",padding:"10px 25px",textAlign:"start"},fullWidth:!0,children:r})},n)});return t.push((0,i.jsx)(E.Z,{sx:{marginBottom:"10px",marginTop:"10px"},variant:"middle"},"sub-".concat(n))),t}),(0,i.jsx)(U,{})]})})},z=t(3147),B=t(5771),D=t(6638),G=t(5433),M=t(8570),N=t(9317),F=function(e){let{children:n}=e,t=(0,S.Z)(),o=(0,A.Z)(t.breakpoints.up("sm")),[l,s]=(0,Z.useState)(!1),{data:a}=r.Z.useGetUser(),c=(0,Z.useCallback)(()=>{s(e=>!e)},[s]),u=(0,Z.useCallback)(()=>{s(!1)},[s]),h=[[{icon:(0,i.jsx)(D.Z,{}),link:"/",title:"홈"},{icon:(0,i.jsx)(z.Z,{}),link:"/calendar",title:"근태 현황"}],[{icon:(0,i.jsx)(B.Z,{}),link:"/form/worktime",title:"출퇴근시각 등록 요청"},{icon:(0,i.jsx)(M.Z,{}),link:"/form/overtime",title:"연장근무 신청"},{icon:(0,i.jsx)(G.Z,{}),link:"/form/homeworking",title:"재택근무 변경/취소 신청"}],[{icon:(0,i.jsx)(g.Z,{}),link:"/mypage",title:"마이페이지"}],[{icon:(0,i.jsx)(N.Z,{}),link:"/about",title:"둘러보기"}]];return(0,i.jsxs)(d.Z,{component:"section","data-component":"PageTemplate",paddingTop:o?"64px":"56px",children:[(0,i.jsx)(b,{user:null==a?void 0:a.body,onMenuClick:c}),(0,i.jsx)(q,{list:h,open:l,onClose:u}),n]})}},8493:function(e,n,t){var i=t(7213),r=t(3243),o=t(8767);n.Z={useAuth:function(e){let{data:n,isSuccess:t}=r.Z.useCheck();return(0,o.useQuery)(["custom","auth"],async()=>{let e=await (0,i.qe)("jader","token","access"),t=await (0,i.qe)("jader","token","refresh");if(e||t){var r,o,l;let s=null==n?void 0:null===(r=n.body)||void 0===r?void 0:r.access,a=null==n?void 0:null===(o=n.body)||void 0===o?void 0:o.refresh,c=new Date;return s&&await (0,i.PZ)("jader","token",{id:"access",timestamp:c,token:s}),a&&await (0,i.PZ)("jader","token",{id:"refresh",timestamp:c,token:a}),null==n?void 0:null===(l=n.body)||void 0===l?void 0:l.valid}return!1},{enabled:t,...e})},useLogout:function(e){return(0,o.useQuery)(["custom","logout"],async()=>{await (0,i.PS)("jader","token")},{...e})}}},3243:function(e,n,t){var i=t(3892),r=t(5349),o=t(8767);n.Z={useCheck:function(e){return(0,o.useQuery)(["user","check"],async()=>{let e=await new r.ii(await (0,i.P)()).getValidUser();return e},e)},useGetUser:function(e){return(0,o.useQuery)(["user","getUser"],async()=>{let e=await new r.ii(await (0,i.P)()).getUser();return e},e)}}}}]);