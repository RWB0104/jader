(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{4731:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(3366),a=r(7462),o=r(7294),i=r(6010),l=r(4780),s=r(7074),c=r(6446),u=r(8175),d=r(5893),f=(0,u.Z)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),h=r(1588),p=r(4867);function v(e){return(0,p.Z)("MuiAvatar",e)}(0,h.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);let m=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=e=>{let{classes:t,variant:r,colorDefault:n}=e;return(0,l.Z)({root:["root",r,n&&"colorDefault"],img:["img"],fallback:["fallback"]},v,t)},w=(0,s.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})(({theme:e,ownerState:t})=>(0,a.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,a.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))),x=(0,s.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,s.ZP)(f,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"}),Z=o.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiAvatar"}),{alt:l,children:s,className:u,component:f="div",imgProps:h,sizes:p,src:v,srcSet:Z,variant:y="circular"}=r,j=(0,n.Z)(r,m),k=null,F=function({crossOrigin:e,referrerPolicy:t,src:r,srcSet:n}){let[a,i]=o.useState(!1);return o.useEffect(()=>{if(!r&&!n)return;i(!1);let a=!0,o=new Image;return o.onload=()=>{a&&i("loaded")},o.onerror=()=>{a&&i("error")},o.crossOrigin=e,o.referrerPolicy=t,o.src=r,n&&(o.srcset=n),()=>{a=!1}},[e,t,r,n]),a}((0,a.Z)({},h,{src:v,srcSet:Z})),_=v||Z,R=_&&"error"!==F,S=(0,a.Z)({},r,{colorDefault:!R,component:f,variant:y}),P=g(S);return k=R?(0,d.jsx)(x,(0,a.Z)({alt:l,src:v,srcSet:Z,sizes:p,ownerState:S,className:P.img},h)):null!=s?s:_&&l?l[0]:(0,d.jsx)(b,{className:P.fallback}),(0,d.jsx)(w,(0,a.Z)({as:f,ownerState:S,className:(0,i.Z)(P.root,u),ref:t},j,{children:k}))});var y=Z},3700:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(5409)}])},6970:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(5893),a=r(7213),o=r(7294),i=r(544),l=r(4677),s=function(){var e,t,r;let[s,c]=(0,o.useState)(a.De);(0,o.useEffect)(()=>{(async()=>{let e=await (0,a.qe)("jader","parameter","palette");e&&c(e)})()},[]);let u=(0,o.useCallback)(async e=>{await (0,l.O)(e)},[]);return(0,n.jsx)(i.Z,{"data-component":"LineParticles",init:u,options:{background:{color:(null===(e=s.login)||void 0===e?void 0:e.primary)||"#0D47A1"},fpsLimit:120,fullScreen:{enable:!0,zIndex:-1},particles:{color:{value:(null===(t=s.login)||void 0===t?void 0:t.secondary)||"#FFFFFF"},line_linked:{color:(null===(r=s.login)||void 0===r?void 0:r.secondary)||"#FFFFFF",distance:150,enable:!0,opacity:1,warp:!0,width:1},move:{attract:{enable:!1,rotateX:600,rotateY:1200},direction:"none",enable:!0,out_mode:"out",random:!1,speed:.5,straight:!1,warp:!0},number:{density:{enable:!0,value_area:800},value:80},opacity:{anim:{enable:!1,opacity_min:.1,speed:3,sync:!1},random:!1,value:.5},shape:{type:"circle"},size:{anim:{enable:!1,size_min:.1,speed:20,sync:!1},random:!0,value:3}},retina_detect:!0}})}},3243:function(e,t,r){"use strict";var n=r(3892),a=r(9166),o=r(8767);t.Z={useCheck:function(e){return(0,o.useQuery)(["user","check"],async()=>{let e=await new a.ii(await (0,n.P)()).getValidUser();return e},e)},useGetUser:function(e){return(0,o.useQuery)(["user","getUser"],async()=>{let e=await new a.ii(await (0,n.P)()).getUser();return e},e)}}},5409:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var n=r(5893),a=r(2537),o=r(6970),i=r(7213),l=r(3243),s=r(7294),c=r(7324),u=r(4731),d=r(5084),f=r(9144),h=r(9630),p=r(4850),v=function(){return(0,n.jsx)(p.Z,{in:!0,children:(0,n.jsx)(f.Z,{alignItems:"center","data-component":"LoginForm",direction:"column",justifyContent:"center",spacing:10,children:(0,n.jsxs)(f.Z,{alignItems:"center",direction:"column",justifyContent:"space-between",spacing:20,children:[(0,n.jsxs)(f.Z,{alignItems:"center",direction:"column",spacing:4,children:[(0,n.jsx)(c.Z,{backgroundColor:"white",height:96,width:96}),(0,n.jsx)(h.Z,{color:"white",fontWeight:"bolder",sx:{textShadow:"3px 3px 10px black"},variant:"h2",children:"JADER"})]}),(0,n.jsx)(d.Z,{color:"customWhite",href:"".concat("https://api.itcode.dev/jader","/oauth2/authorization/google"),size:"large",startIcon:(0,n.jsx)(u.Z,{alt:"Google",src:"/jader/assets/images/google.png",sx:{height:24,width:24}}),variant:"contained",sx:{borderRadius:100,padding:"10px 25px"},children:(0,n.jsx)(h.Z,{color:"black",fontSize:"1.2rem",variant:"button",children:"RSQUARE 계정으로 시작하기"})})]})})})},m=r(1163),g=function(){let e=(0,m.useRouter)(),t=function(){let[e,t]=(0,s.useState)(void 0),{data:r}=l.Z.useCheck();return(0,s.useEffect)(()=>{(async()=>{let e=await (0,i.qe)("jader","token","access"),n=await (0,i.qe)("jader","token","refresh");if(e||n){var a,o,l;let s=null==r?void 0:null===(a=r.body)||void 0===a?void 0:a.access,c=null==r?void 0:null===(o=r.body)||void 0===o?void 0:o.refresh,u=new Date;s&&await (0,i.PZ)("jader","token",{id:"access",timestamp:u,token:s}),c&&await (0,i.PZ)("jader","token",{id:"refresh",timestamp:u,token:c}),t(null==r?void 0:null===(l=r.body)||void 0===l?void 0:l.valid)}else t(!1)})()},[r,t]),e}();return(0,s.useEffect)(()=>{t&&e.push({pathname:"/"})},[t]),(0,n.jsxs)(f.Z,{alignItems:"center",component:"section","data-component":"LoginTemplate",direction:"column",height:"100vh",justifyContent:"center",width:"100%",children:[(0,n.jsx)(v,{}),(0,n.jsx)(o.Z,{})]})};function w(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{title:"로그인",url:"/login"}),(0,n.jsx)(g,{})]})}},9008:function(e,t,r){e.exports=r(3121)},1163:function(e,t,r){e.exports=r(880)}},function(e){e.O(0,[353,583,774,888,179],function(){return e(e.s=3700)}),_N_E=e.O()}]);