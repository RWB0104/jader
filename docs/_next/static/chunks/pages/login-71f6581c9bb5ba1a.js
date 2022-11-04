(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{3700:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(3181)}])},5116:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});class r{async getUser(){let e=await fetch("".concat("https://api.itcode.dev/jader","/").concat(this.context),{credentials:"include",headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("access"))},method:"GET"}),t=await e.json();return t}async check(){let e=await fetch("".concat("https://api.itcode.dev/jader","/").concat(this.context,"/check"),{credentials:"include",headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("access"))},method:"GET"}),t=await e.json();return t}constructor(){this.context="user"}}},7324:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),o=n(918),i=function(e){let{borderRadius:t=5,width:n=64,height:i=64}=e;return(0,r.jsx)(o.Z,{"data-component":"JaderLogo",elevation:8,sx:{borderRadius:t,height:i,transition:"0.3s background-color",width:n},children:(0,r.jsx)("img",{alt:"JADER",height:n,src:"/jader/assets/images/jader_transparent.png",width:n})})}},2537:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),o=n(9008),i=n.n(o),c=function(e){let{title:t,description:n="짜증나서 그냥 내가 만든 JADE 연동 서비스",type:o="website",url:c="",image:s="/jader/assets/images/jader.png",locale:a="ko_KR"}=e;return(0,r.jsxs)(i(),{children:[(0,r.jsxs)("title",{children:[t," - ","JADER"]}),(0,r.jsx)("meta",{content:n,name:"description"}),(0,r.jsx)("meta",{content:"JADER",property:"og:site_name"}),(0,r.jsx)("meta",{content:"".concat(t," - ").concat("JADER"),property:"og:title"}),(0,r.jsx)("meta",{content:n,property:"og:description"}),(0,r.jsx)("meta",{content:o,property:"og:type"}),(0,r.jsx)("meta",{content:"".concat("https://api.itcode.dev/jader").concat(c),property:"og:url"}),(0,r.jsx)("meta",{content:s,property:"og:image"}),(0,r.jsx)("meta",{content:a,property:"og:locale"}),(0,r.jsx)("link",{href:"".concat("https://project.itcode.dev/jader").concat(c),rel:"canonical"})]})}},2347:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(5893),o=n(6820),i=n(9078),c=n(6646),s=n(5084),a=n(9144),l=n(7294),d=function(){let{theme:e,setTheme:t}=(0,l.useContext)(o.f),n=(0,l.useCallback)(()=>{t&&t(e=>{let t="light"===e?"dark":"light";return localStorage.setItem("theme",t),t})},[t]);return(0,r.jsx)(s.Z,{color:"inherit","data-component":"ThemeSwitch",onClick:n,children:(0,r.jsxs)(a.Z,{direction:"row",spacing:2,children:[(0,r.jsx)(c.Z,{htmlColor:"light"===e?"orange":"grey"}),(0,r.jsx)(i.Z,{htmlColor:"dark"===e?"yellow":"gainsboro"})]})})}},5080:function(e,t,n){"use strict";n.d(t,{h:function(){return c}});var r=n(5116),o=n(7041),i=n(7294);function c(){let[e,t]=(0,i.useState)(void 0);return(0,i.useEffect)(()=>{(async()=>{let e=sessionStorage.getItem("access"),n=(0,o.getCookie)("refresh");if(e||n){var i,c;let s=new r.Z,a=await s.check();t(null===(i=a.body)||void 0===i?void 0:i.valid);let l=null===(c=a.body)||void 0===c?void 0:c.access;l&&sessionStorage.setItem("access",l)}else t(!1)})()},[t]),e}},3181:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r=n(5893),o=n(2537),i=n(5080),c=n(2347),s=n(7324),a=n(5449),l=n(2097),d=n(1225),h=n(4731),u=n(5084),g=n(562),m=n(9144),p=n(1645),j=n(9630),x=n(4850);function f(){return(0,r.jsxs)("svg",{"data-component":"IoRocket",fill:"currentColor",height:"1em",stroke:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M328.85 156.79a26.69 26.69 0 1018.88 7.81 26.6 26.6 0 00-18.88-7.81z"}),(0,r.jsx)("path",{d:"M477.44 50.06a.29.29 0 010-.09 20.4 20.4 0 00-15.13-15.3c-29.8-7.27-76.68.48-128.63 21.28-52.36 21-101.42 52-134.58 85.22A320.7 320.7 0 00169.55 175c-22.33-1-42 2.18-58.57 9.41-57.74 25.41-74.23 90.44-78.62 117.14a25 25 0 0027.19 29h.13l64.32-7.02c.08.82.17 1.57.24 2.26a34.36 34.36 0 009.9 20.72l31.39 31.41a34.27 34.27 0 0020.71 9.91l2.15.23-7 64.24v.13A25 25 0 00206 480a25.25 25.25 0 004.15-.34C237 475.34 302 459.05 327.34 401c7.17-16.46 10.34-36.05 9.45-58.34a314.78 314.78 0 0033.95-29.55c33.43-33.26 64.53-81.92 85.31-133.52 20.69-51.36 28.48-98.59 21.39-129.53zM370.38 224.94a58.77 58.77 0 110-83.07 58.3 58.3 0 010 83.07z"}),(0,r.jsx)("path",{d:"M161.93 386.44a16 16 0 00-11 2.67c-6.39 4.37-12.81 8.69-19.29 12.9-13.11 8.52-28.79-6.44-21-20l12.15-21a16 16 0 00-15.16-24.91A61.25 61.25 0 0072 353.56c-3.66 3.67-14.79 14.81-20.78 57.26A357.94 357.94 0 0048 447.59 16 16 0 0064 464h.4a359.87 359.87 0 0036.8-3.2c42.47-6 53.61-17.14 57.27-20.8a60.49 60.49 0 0017.39-35.74 16 16 0 00-13.93-17.82z"})]})}function w(){return(0,r.jsx)("svg",{"data-component":"SiGmail",fill:"currentColor",height:"1em",role:"img",stroke:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"})})}function v(){return(0,r.jsx)("svg",{"data-component":"SiReact",fill:"currentColor",height:"1em",role:"img",stroke:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"})})}var Z=function(){let e=(0,l.Z)(),t=(0,d.Z)(e.breakpoints.up("md"));return(0,r.jsx)(x.Z,{in:!0,children:(0,r.jsxs)(m.Z,{alignItems:"center","data-component":"LoginForm",direction:"column",height:"100%",justifyContent:"center",spacing:10,children:[(0,r.jsxs)(m.Z,{alignItems:"center",direction:"column",height:t?"initial":"calc(100% - 300px)",justifyContent:"space-between",spacing:10,children:[(0,r.jsxs)(m.Z,{alignItems:"center",direction:"row",spacing:4,children:[(0,r.jsx)(s.Z,{height:96,width:96}),(0,r.jsx)(j.Z,{fontWeight:"bolder",variant:"h3",children:"JADER"})]}),(0,r.jsx)(u.Z,{color:"inherit",href:"".concat("https://api.itcode.dev/jader","/oauth2/authorization/google"),size:"large",startIcon:(0,r.jsx)(h.Z,{alt:"Google",src:"/jader/assets/images/google.png",sx:{height:24,width:24}}),sx:{fontSize:"1.2rem",textTransform:"none"},variant:"outlined",children:"Google 계정으로 시작하기"})]}),(0,r.jsxs)(m.Z,{alignItems:"center",direction:"column",justifyContent:"center",spacing:3,children:[(0,r.jsxs)(m.Z,{color:"grey",direction:"row",spacing:2,children:[(0,r.jsx)(u.Z,{color:"inherit",href:"https://www.rsquare.co.kr/",startIcon:(0,r.jsx)("img",{alt:"RSQUARE",height:24,src:"/jader/assets/images/rsquare.png",width:24}),target:"_blank",title:"RSQUARE",children:"RSQUARE"}),(0,r.jsx)(u.Z,{color:"inherit",href:"https://ehr.jadehr.co.kr/",startIcon:(0,r.jsx)("img",{alt:"JADE",height:24,src:"/jader/assets/images/jadehr.png",width:24}),target:"_blank",title:"JADE",children:"JADE"})]}),(0,r.jsxs)(m.Z,{color:"grey",direction:"row",spacing:2,children:[(0,r.jsx)(g.Z,{color:"inherit",href:"https://github.com/RWB0104",target:"_blank",title:"GitHub",children:(0,r.jsx)(a.Z,{})}),(0,r.jsx)(g.Z,{color:"inherit",href:"mailto:psj2716@rsquare.co.kr",target:"_blank",title:"GMail",children:(0,r.jsx)(p.Z,{children:(0,r.jsx)(w,{})})}),(0,r.jsx)(g.Z,{color:"inherit",href:"https://itcode.dev",target:"_blank",title:"Indroduce",children:(0,r.jsx)(p.Z,{children:(0,r.jsx)(f,{})})}),(0,r.jsx)(g.Z,{color:"inherit",href:"https://blog.itcode.dev",target:"_blank",title:"Blog",children:(0,r.jsx)(p.Z,{children:(0,r.jsx)(v,{})})})]}),(0,r.jsx)(j.Z,{color:"grey",variant:"caption",children:"Developed by RWB 2022.10"})]})]})})},k=n(120),b=n(1163),y=n(7294),z=n(544),_=n(4677),C=function(){let e=(0,b.useRouter)(),t=(0,l.Z)(),n=(0,i.h)();(0,y.useEffect)(()=>{n&&e.push({pathname:"/"})},[n]);let o=(0,y.useCallback)(async e=>{await (0,_.O)(e)},[]);return(0,r.jsxs)(m.Z,{alignItems:"center","data-component":"LoginTemplate",direction:"column",height:"100vh",justifyContent:"center",width:"100%",children:[(0,r.jsx)(k.Z,{bgcolor:t.palette.background.default,borderRadius:10,padding:"60px",sx:{transition:"0.3s background-color"},children:(0,r.jsxs)(m.Z,{alignItems:"center",direction:"column",justifyContent:"center",spacing:4,children:[(0,r.jsx)(Z,{}),(0,r.jsx)(c.Z,{})]})}),(0,r.jsx)(z.Z,{init:o,options:{background:{color:"#0D47A1"},fpsLimit:120,fullScreen:{enable:!0,zIndex:-1},particles:{color:{value:"#ffffff"},line_linked:{color:"#ffffff",distance:150,enable:!0,opacity:1,warp:!0,width:1},move:{attract:{enable:!1,rotateX:600,rotateY:1200},direction:"none",enable:!0,out_mode:"out",random:!1,speed:.5,straight:!1,warp:!0},number:{density:{enable:!0,value_area:800},value:80},opacity:{anim:{enable:!1,opacity_min:.1,speed:3,sync:!1},random:!1,value:.5},shape:{type:"circle"},size:{anim:{enable:!1,size_min:.1,speed:20,sync:!1},random:!0,value:3}},retina_detect:!0}})]})};function E(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{title:"로그인",url:"/login"}),(0,r.jsx)(C,{})]})}}},function(e){e.O(0,[541,150,971,774,888,179],function(){return e(e.s=3700)}),_N_E=e.O()}]);