(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{4731:function(e,t,r){"use strict";r.d(t,{Z:function(){return Z}});var n=r(3366),a=r(7462),o=r(7294),i=r(6010),s=r(4780),l=r(7074),u=r(6446),c=r(8175),d=r(5893),f=(0,c.Z)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),p=r(1588),h=r(4867);function m(e){return(0,h.Z)("MuiAvatar",e)}(0,p.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);let v=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=e=>{let{classes:t,variant:r,colorDefault:n}=e;return(0,s.Z)({root:["root",r,n&&"colorDefault"],img:["img"],fallback:["fallback"]},m,t)},w=(0,l.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})(({theme:e,ownerState:t})=>(0,a.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,a.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))),y=(0,l.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),x=(0,l.ZP)(f,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"}),b=o.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiAvatar"}),{alt:s,children:l,className:c,component:f="div",imgProps:p,sizes:h,src:m,srcSet:b,variant:Z="circular"}=r,j=(0,n.Z)(r,v),k=null,F=function({crossOrigin:e,referrerPolicy:t,src:r,srcSet:n}){let[a,i]=o.useState(!1);return o.useEffect(()=>{if(!r&&!n)return;i(!1);let a=!0,o=new Image;return o.onload=()=>{a&&i("loaded")},o.onerror=()=>{a&&i("error")},o.crossOrigin=e,o.referrerPolicy=t,o.src=r,n&&(o.srcset=n),()=>{a=!1}},[e,t,r,n]),a}((0,a.Z)({},p,{src:m,srcSet:b})),_=m||b,P=_&&"error"!==F,R=(0,a.Z)({},r,{colorDefault:!P,component:f,variant:Z}),A=g(R);return k=P?(0,d.jsx)(y,(0,a.Z)({alt:s,src:m,srcSet:b,sizes:h,ownerState:R,className:A.img},p)):null!=l?l:_&&s?s[0]:(0,d.jsx)(x,{className:A.fallback}),(0,d.jsx)(w,(0,a.Z)({as:f,ownerState:R,className:(0,i.Z)(A.root,c),ref:t},j,{children:k}))});var Z=b},3700:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(338)}])},8333:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(5893),a=r(5629),o=r(7294),i=r(544),s=r(4677),l=function(){var e,t,r;let[l,u]=(0,o.useState)(a.De),c=(0,o.useCallback)(async()=>{let e=await (0,a.qe)("jader","parameter","palette");e&&u(e)},[]);(0,o.useEffect)(()=>{c()},[]);let d=(0,o.useCallback)(async e=>{await (0,s.O)(e)},[]);return(0,n.jsx)(i.Z,{"data-component":"LineParticles",init:d,options:{background:{color:(null===(e=l.login)||void 0===e?void 0:e.primary)||"#0D47A1"},fpsLimit:120,fullScreen:{enable:!0,zIndex:-1},particles:{color:{value:(null===(t=l.login)||void 0===t?void 0:t.secondary)||"#FFFFFF"},line_linked:{color:(null===(r=l.login)||void 0===r?void 0:r.secondary)||"#FFFFFF",distance:150,enable:!0,opacity:1,warp:!0,width:1},move:{attract:{enable:!1,rotateX:600,rotateY:1200},direction:"none",enable:!0,out_mode:"out",random:!1,speed:.5,straight:!1,warp:!0},number:{density:{enable:!0,value_area:800},value:80},opacity:{anim:{enable:!1,opacity_min:.1,speed:3,sync:!1},random:!1,value:.5},shape:{type:"circle"},size:{anim:{enable:!1,size_min:.1,speed:20,sync:!1},random:!0,value:3}},retina_detect:!0}})}},2418:function(e,t,r){"use strict";var n=r(1254),a=r(5629),o=r(5710),i=r(8767),s=r(4480);t.Z={useAuth:function(e){let[t,r]=(0,s.FV)(n.ax),{data:l,isSuccess:u}=o.Z.useCheck();return(0,i.useQuery)(["custom","auth"],async()=>{let e=await (0,a.qe)("jader","token","refresh");if(t||e){var n,o,i;let s=null==l?void 0:null===(n=l.body)||void 0===n?void 0:n.access,u=null==l?void 0:null===(o=l.body)||void 0===o?void 0:o.refresh,c=new Date;return s&&r(s),u&&await (0,a.PZ)("jader","token",{id:"refresh",timestamp:c,token:u}),null==l?void 0:null===(i=l.body)||void 0===i?void 0:i.valid}return!1},{enabled:u,...e})},useLogout:function(e){let t=(0,s.Zl)(n.ax);return(0,i.useQuery)(["custom","logout"],async()=>{t(void 0),await (0,a.PS)("jader","token")},{...e})}}},5710:function(e,t,r){"use strict";var n=r(1473),a=r(4191),o=r(8767);t.Z={useCheck:function(e){let t=(0,n.m)();return(0,o.useQuery)(["user","check"],async()=>{let e=await new a.ii(await t).getValidUser();return e},e)},useDeleteUser:function(e){let t=(0,n.m)();return(0,o.useMutation)(["user","deleteUser"],async()=>(await new a.ii(await t).deleteUserRaw(),!0),e)},useGetUser:function(e){let t=(0,n.m)();return(0,o.useQuery)(["user","getUser"],async()=>{let e=await new a.ii(await t).getUser();return e},e)},useUpdateByJadePassword:function(e){let t=(0,n.m)();return(0,o.useMutation)(["user","updateByJadePassword"],async e=>(await new a.ii(await t).updateByJadePasswordRaw({openApiJadePasswordProps:{jadePassword:e}}),!0),e)}}},338:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(5893),a=r(4626),o=r(8333),i=r(2418),s=r(6211),l=r(4731),u=r(5084),c=r(9144),d=r(9630),f=r(4850),p=function(){return(0,n.jsx)(f.Z,{in:!0,children:(0,n.jsx)(c.Z,{alignItems:"center","data-component":"LoginForm",direction:"column",justifyContent:"center",spacing:10,children:(0,n.jsxs)(c.Z,{alignItems:"center",direction:"column",justifyContent:"space-between",spacing:20,children:[(0,n.jsxs)(c.Z,{alignItems:"center",direction:"column",spacing:4,children:[(0,n.jsx)(s.Z,{backgroundColor:"white",height:96,width:96}),(0,n.jsx)(d.Z,{color:"white",fontWeight:"bolder",sx:{textShadow:"3px 3px 10px black"},variant:"h2",children:"JADER"})]}),(0,n.jsx)(u.Z,{color:"customWhite",href:"".concat("https://api.itcode.dev/jader","/oauth2/authorization/google"),size:"large",sx:{padding:"10px 25px"},variant:"contained",startIcon:(0,n.jsx)(l.Z,{alt:"Google",src:"/jader/assets/images/google.png",sx:{border:"1px solid gainsboro",height:24,width:24}}),children:(0,n.jsx)(d.Z,{color:"black",fontSize:"1.2rem",variant:"button",children:"RSQUARE 계정으로 시작하기"})})]})})})},h=r(1163),m=r(7294),v=function(){let e=(0,h.useRouter)(),{data:t}=i.Z.useAuth();return(0,m.useEffect)(()=>{t&&e.push({pathname:"/"})},[t]),(0,n.jsxs)(c.Z,{alignItems:"center",component:"section","data-component":"LoginTemplate",direction:"column",height:"100vh",justifyContent:"center",width:"100%",children:[(0,n.jsx)(p,{}),(0,n.jsx)(o.Z,{})]})};function g(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{title:"로그인",url:"/login"}),(0,n.jsx)(v,{})]})}},9008:function(e,t,r){e.exports=r(3121)},1163:function(e,t,r){e.exports=r(880)}},function(e){e.O(0,[353,132,774,888,179],function(){return e(e.s=3700)}),_N_E=e.O()}]);