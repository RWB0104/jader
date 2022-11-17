(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[765],{6070:function(t,e,r){"use strict";r.d(e,{Z:function(){return q}});var n=r(3366),a=r(7462),o=r(7294),i=r(6010),s=r(4780),c=r(917),l=r(1796),u=r(6622),d=r(2097),f=r(1719),p=r(8884),h=r(1588),m=r(4867);function g(t){return(0,m.Z)("MuiLinearProgress",t)}(0,h.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var b=r(5893);let v=["className","color","value","valueBuffer","variant"],j=t=>t,y,x,w,Z,k,C,P=(0,c.F4)(y||(y=j`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),E=(0,c.F4)(x||(x=j`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),R=(0,c.F4)(w||(w=j`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),$=t=>{let{classes:e,variant:r,color:n}=t,a={root:["root",`color${(0,u.Z)(n)}`,r],dashed:["dashed",`dashedColor${(0,u.Z)(n)}`],bar1:["bar",`barColor${(0,u.Z)(n)}`,("indeterminate"===r||"query"===r)&&"bar1Indeterminate","determinate"===r&&"bar1Determinate","buffer"===r&&"bar1Buffer"],bar2:["bar","buffer"!==r&&`barColor${(0,u.Z)(n)}`,"buffer"===r&&`color${(0,u.Z)(n)}`,("indeterminate"===r||"query"===r)&&"bar2Indeterminate","buffer"===r&&"bar2Buffer"]};return(0,s.Z)(a,g,e)},D=(t,e)=>"inherit"===e?"currentColor":t.vars?t.vars.palette.LinearProgress[`${e}Bg`]:"light"===t.palette.mode?(0,l.$n)(t.palette[e].main,.62):(0,l._j)(t.palette[e].main,.5),M=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver(t,e){let{ownerState:r}=t;return[e.root,e[`color${(0,u.Z)(r.color)}`],e[r.variant]]}})(({ownerState:t,theme:e})=>(0,a.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:D(e,t.color)},"inherit"===t.color&&"buffer"!==t.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===t.variant&&{backgroundColor:"transparent"},"query"===t.variant&&{transform:"rotate(180deg)"})),_=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver(t,e){let{ownerState:r}=t;return[e.dashed,e[`dashedColor${(0,u.Z)(r.color)}`]]}})(({ownerState:t,theme:e})=>{let r=D(e,t.color);return(0,a.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===t.color&&{opacity:.3},{backgroundImage:`radial-gradient(${r} 0%, ${r} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},(0,c.iv)(Z||(Z=j`
    animation: ${0} 3s infinite linear;
  `),R)),B=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver(t,e){let{ownerState:r}=t;return[e.bar,e[`barColor${(0,u.Z)(r.color)}`],("indeterminate"===r.variant||"query"===r.variant)&&e.bar1Indeterminate,"determinate"===r.variant&&e.bar1Determinate,"buffer"===r.variant&&e.bar1Buffer]}})(({ownerState:t,theme:e})=>(0,a.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===t.color?"currentColor":(e.vars||e).palette[t.color].main},"determinate"===t.variant&&{transition:"transform .4s linear"},"buffer"===t.variant&&{zIndex:1,transition:"transform .4s linear"}),({ownerState:t})=>("indeterminate"===t.variant||"query"===t.variant)&&(0,c.iv)(k||(k=j`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),P)),S=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver(t,e){let{ownerState:r}=t;return[e.bar,e[`barColor${(0,u.Z)(r.color)}`],("indeterminate"===r.variant||"query"===r.variant)&&e.bar2Indeterminate,"buffer"===r.variant&&e.bar2Buffer]}})(({ownerState:t,theme:e})=>(0,a.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==t.variant&&{backgroundColor:"inherit"===t.color?"currentColor":(e.vars||e).palette[t.color].main},"inherit"===t.color&&{opacity:.3},"buffer"===t.variant&&{backgroundColor:D(e,t.color),transition:"transform .4s linear"}),({ownerState:t})=>("indeterminate"===t.variant||"query"===t.variant)&&(0,c.iv)(C||(C=j`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),E)),I=o.forwardRef(function(t,e){let r=(0,p.Z)({props:t,name:"MuiLinearProgress"}),{className:o,color:s="primary",value:c,valueBuffer:l,variant:u="indeterminate"}=r,f=(0,n.Z)(r,v),h=(0,a.Z)({},r,{color:s,variant:u}),m=$(h),g=(0,d.Z)(),j={},y={bar1:{},bar2:{}};if(("determinate"===u||"buffer"===u)&&void 0!==c){j["aria-valuenow"]=Math.round(c),j["aria-valuemin"]=0,j["aria-valuemax"]=100;let x=c-100;"rtl"===g.direction&&(x=-x),y.bar1.transform=`translateX(${x}%)`}if("buffer"===u&&void 0!==l){let w=(l||0)-100;"rtl"===g.direction&&(w=-w),y.bar2.transform=`translateX(${w}%)`}return(0,b.jsxs)(M,(0,a.Z)({className:(0,i.Z)(m.root,o),ownerState:h,role:"progressbar"},j,{ref:e},f,{children:["buffer"===u?(0,b.jsx)(_,{className:m.dashed,ownerState:h}):null,(0,b.jsx)(B,{className:m.bar1,ownerState:h,style:y.bar1}),"determinate"===u?null:(0,b.jsx)(S,{className:m.bar2,ownerState:h,style:y.bar2})]}))});var q=I},3116:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/logout",function(){return r(2078)}])},3892:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var n=r(7213),a=r(1307);class o{async send(t,e){let r;try{let a="";if(e){let o=Object.entries(e).map(t=>{let[e,r]=t;return"".concat(e,"=").concat(encodeURIComponent(r))}).join("&");a="?".concat(o)}let i=await (0,n.qe)("jader","token","access"),s=await (0,n.qe)("jader","token","refresh"),c=await fetch("".concat("https://api.itcode.dev/jader").concat(this.endPoint).concat(t).concat(a),{headers:{Authorization:i?"Bearer ".concat(i.token):"",Hash:"".concat(new Date().getTime(),"-").concat(Math.ceil(1e4*Math.random())),ReAuthorization:s?"Bearer ".concat(s.token):""},method:"GET"}),l=await c.json();r=l}catch(u){r=u instanceof Error?this.getErrorResponse(u):this.getErrorResponse()}return r}async sendWithBody(t,e,r){let a;try{let o=await (0,n.qe)("jader","token","access"),i=await (0,n.qe)("jader","token","refresh"),s={headers:{Authorization:o?"Bearer ".concat(o.token):"","Content-Type":"application/json",Hash:"".concat(new Date().getTime(),"-").concat(Math.ceil(1e4*Math.random())),ReAuthorization:i?"Bearer ".concat(i.token):""},method:e};r&&(s.body=JSON.stringify(r));let c=await fetch("".concat("https://api.itcode.dev/jader").concat(this.endPoint).concat(t),s),l=await c.json();a=l}catch(u){a=u instanceof Error?this.getErrorResponse(u):this.getErrorResponse()}return a}getErrorResponse(t){let e;if(t){let{name:r,message:n,stack:o}=t;e={message:n,stack:o,status:!1,timestamp:(0,a.ej)(),title:r}}else e={status:!1,timestamp:(0,a.ej)(),title:"Error"};return e}constructor(t){this.endPoint="",this.endPoint=t||""}}},7324:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var n=r(5893),a=r(918),o=function(t){let{backgroundColor:e,borderRadius:r=5,width:o=64,height:i=64}=t;return(0,n.jsx)(a.Z,{"data-component":"JaderLogo",elevation:8,sx:{backgroundColor:e,borderRadius:r,height:i,transition:"0.3s background-color",width:o},children:(0,n.jsx)("img",{alt:"JADER",height:o,src:"/jader/assets/images/jader_transparent.png",width:o})})}},2537:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var n=r(5893),a=r(9008),o=r.n(a),i=function(t){let{title:e,description:r="짜증나서 그냥 내가 만든 JADE 연동 서비스",type:a="website",url:i="",image:s="/jader/assets/images/jader.png",locale:c="ko_KR"}=t;return(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:"".concat(e," - ").concat("JADER")}),(0,n.jsx)("meta",{content:r,name:"description"}),(0,n.jsx)("meta",{content:"JADER",property:"og:site_name"}),(0,n.jsx)("meta",{content:"".concat(e," - ").concat("JADER"),property:"og:title"}),(0,n.jsx)("meta",{content:r,property:"og:description"}),(0,n.jsx)("meta",{content:a,property:"og:type"}),(0,n.jsx)("meta",{content:"".concat("https://api.itcode.dev/jader").concat(i),property:"og:url"}),(0,n.jsx)("meta",{content:s,property:"og:image"}),(0,n.jsx)("meta",{content:c,property:"og:locale"}),(0,n.jsx)("link",{href:"".concat("https://project.itcode.dev/jader").concat(i),rel:"canonical"})]})}},1307:function(t,e,r){"use strict";function n(t){let e;return{day:{text:o((e=t?"object"==typeof t?t:new Date(t):new Date).getDate()),value:e.getDate()},hour:{text:o(e.getHours()),value:e.getHours()},minute:{text:o(e.getMinutes()),value:e.getMinutes()},month:{text:o(e.getMonth()+1),value:e.getMonth()+1},second:{text:o(e.getSeconds()),value:e.getSeconds()},year:e.getFullYear()}}function a(t){let e;return e=t?"object"==typeof t?t:new Date(t):new Date,new Date(e.getTime()+324e5).toISOString().replace(/Z$/,"+09:00")}function o(t){return t<10?"0".concat(t):t.toString()}function i(t){return 1===t?"일":2===t?"월":3===t?"화":4===t?"수":5===t?"목":6===t?"금":7===t?"토":""}r.d(e,{K0:function(){return n},O8:function(){return i},ej:function(){return a}})},2078:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return m}});var n=r(5893),a=r(2537),o=r(3892);class i extends o.Z{async postLogout(){await this.send("")}constructor(){super("/logout")}}var s=r(7213),c=r(7324),l=r(1953),u=r(6070),d=r(9144),f=r(1163),p=r(7294),h=function(){let t=(0,f.useRouter)();(0,p.useEffect)(()=>{(async()=>{await (0,s.PS)("jader","token"),await e(),t.push("/login")})()},[]);let e=(0,p.useCallback)(async()=>{let t=new i;await t.postLogout()},[]);return(0,n.jsx)(d.Z,{alignItems:"center","data-component":"CallbackTemplate",height:"100vh",justifyContent:"center",children:(0,n.jsxs)(d.Z,{alignItems:"center",direction:"column",justifyContent:"center",spacing:4,children:[(0,n.jsx)(c.Z,{height:128,width:128}),(0,n.jsx)(l.Z,{height:20,width:"100%",children:(0,n.jsx)(u.Z,{})})]})})};function m(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{title:"로그아웃",url:"/logout"}),(0,n.jsx)(h,{})]})}},9008:function(t,e,r){t.exports=r(3121)},1163:function(t,e,r){t.exports=r(880)}},function(t){t.O(0,[774,888,179],function(){return t(t.s=3116)}),_N_E=t.O()}]);