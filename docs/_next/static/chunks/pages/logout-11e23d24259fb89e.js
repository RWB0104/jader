(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[765],{6070:function(r,e,t){"use strict";t.d(e,{Z:function(){return D}});var n=t(3366),a=t(7462),o=t(7294),i=t(6010),s=t(4780),l=t(917),c=t(1796),u=t(6622),d=t(2097),f=t(7074),m=t(6446),b=t(1588),p=t(4867);function g(r){return(0,p.Z)("MuiLinearProgress",r)}(0,b.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var h=t(5893);let v=["className","color","value","valueBuffer","variant"],x=r=>r,j,y,Z,C,w,k,P=(0,l.F4)(j||(j=x`
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
`)),$=(0,l.F4)(y||(y=x`
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
`)),_=(0,l.F4)(Z||(Z=x`
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
`)),L=r=>{let{classes:e,variant:t,color:n}=r,a={root:["root",`color${(0,u.Z)(n)}`,t],dashed:["dashed",`dashedColor${(0,u.Z)(n)}`],bar1:["bar",`barColor${(0,u.Z)(n)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&`barColor${(0,u.Z)(n)}`,"buffer"===t&&`color${(0,u.Z)(n)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,s.Z)(a,g,e)},R=(r,e)=>"inherit"===e?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:"light"===r.palette.mode?(0,c.$n)(r.palette[e].main,.62):(0,c._j)(r.palette[e].main,.5),I=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver(r,e){let{ownerState:t}=r;return[e.root,e[`color${(0,u.Z)(t.color)}`],e[t.variant]]}})(({ownerState:r,theme:e})=>(0,a.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:R(e,r.color)},"inherit"===r.color&&"buffer"!==r.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===r.variant&&{backgroundColor:"transparent"},"query"===r.variant&&{transform:"rotate(180deg)"})),B=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver(r,e){let{ownerState:t}=r;return[e.dashed,e[`dashedColor${(0,u.Z)(t.color)}`]]}})(({ownerState:r,theme:e})=>{let t=R(e,r.color);return(0,a.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===r.color&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},(0,l.iv)(C||(C=x`
    animation: ${0} 3s infinite linear;
  `),_)),E=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver(r,e){let{ownerState:t}=r;return[e.bar,e[`barColor${(0,u.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar1Indeterminate,"determinate"===t.variant&&e.bar1Determinate,"buffer"===t.variant&&e.bar1Buffer]}})(({ownerState:r,theme:e})=>(0,a.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"determinate"===r.variant&&{transition:"transform .4s linear"},"buffer"===r.variant&&{zIndex:1,transition:"transform .4s linear"}),({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.iv)(w||(w=x`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),P)),N=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver(r,e){let{ownerState:t}=r;return[e.bar,e[`barColor${(0,u.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar2Indeterminate,"buffer"===t.variant&&e.bar2Buffer]}})(({ownerState:r,theme:e})=>(0,a.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==r.variant&&{backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"inherit"===r.color&&{opacity:.3},"buffer"===r.variant&&{backgroundColor:R(e,r.color),transition:"transform .4s linear"}),({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.iv)(k||(k=x`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),$)),S=o.forwardRef(function(r,e){let t=(0,m.Z)({props:r,name:"MuiLinearProgress"}),{className:o,color:s="primary",value:l,valueBuffer:c,variant:u="indeterminate"}=t,f=(0,n.Z)(t,v),b=(0,a.Z)({},t,{color:s,variant:u}),p=L(b),g=(0,d.Z)(),x={},j={bar1:{},bar2:{}};if(("determinate"===u||"buffer"===u)&&void 0!==l){x["aria-valuenow"]=Math.round(l),x["aria-valuemin"]=0,x["aria-valuemax"]=100;let y=l-100;"rtl"===g.direction&&(y=-y),j.bar1.transform=`translateX(${y}%)`}if("buffer"===u&&void 0!==c){let Z=(c||0)-100;"rtl"===g.direction&&(Z=-Z),j.bar2.transform=`translateX(${Z}%)`}return(0,h.jsxs)(I,(0,a.Z)({className:(0,i.Z)(p.root,o),ownerState:b,role:"progressbar"},x,{ref:e},f,{children:["buffer"===u?(0,h.jsx)(B,{className:p.dashed,ownerState:b}):null,(0,h.jsx)(E,{className:p.bar1,ownerState:b,style:j.bar1}),"determinate"===u?null:(0,h.jsx)(N,{className:p.bar2,ownerState:b,style:j.bar2})]}))});var D=S},3116:function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/logout",function(){return t(4139)}])},6211:function(r,e,t){"use strict";t.d(e,{Z:function(){return o}});var n=t(5893),a=t(918),o=function(r){let{backgroundColor:e,borderRadius:t=5,width:o=64,height:i=64,origin:s}=r;return(0,n.jsx)(a.Z,{"data-component":"JaderLogo",elevation:8,sx:{backgroundColor:e,borderRadius:t,height:i,transition:"0.3s background-color",width:o},children:(0,n.jsx)("img",{alt:"JADER",height:o,src:"/jader/assets/images/jader_transparent".concat(s?"":"_logo",".png"),width:o})})}},4626:function(r,e,t){"use strict";t.d(e,{Z:function(){return i}});var n=t(5893),a=t(9008),o=t.n(a),i=function(r){let{title:e,description:t="짜증나서 그냥 내가 만든 JADE 연동 서비스",type:a="website",url:i="",image:s="/jader/assets/images/jader.png",locale:l="ko_KR"}=r;return(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:"".concat(e," - ").concat("JADER")}),(0,n.jsx)("meta",{content:t,name:"description"}),(0,n.jsx)("meta",{content:"JADER",property:"og:site_name"}),(0,n.jsx)("meta",{content:"".concat(e," - ").concat("JADER"),property:"og:title"}),(0,n.jsx)("meta",{content:t,property:"og:description"}),(0,n.jsx)("meta",{content:a,property:"og:type"}),(0,n.jsx)("meta",{content:"".concat("https://project.itcode.dev/jader").concat(i),property:"og:url"}),(0,n.jsx)("meta",{content:s,property:"og:image"}),(0,n.jsx)("meta",{content:l,property:"og:locale"}),(0,n.jsx)("link",{href:"".concat("https://project.itcode.dev/jader").concat(i),rel:"canonical"})]})}},4139:function(r,e,t){"use strict";t.r(e),t.d(e,{default:function(){return b}});var n=t(5893),a=t(4626),o=t(5629),i=t(8767),s={useLogout:function(r){return(0,i.useQuery)(["custom","logout"],async()=>{await (0,o.PS)("jader","token")},{...r})}},l=t(6211),c=t(1953),u=t(6070),d=t(9144),f=t(1163),m=function(){let r=(0,f.useRouter)();return s.useLogout({onSettled(){r.push("/")}}),(0,n.jsx)(d.Z,{alignItems:"center","data-component":"LogoutTemplate",height:"100vh",justifyContent:"center",children:(0,n.jsxs)(d.Z,{alignItems:"center",direction:"column",justifyContent:"center",spacing:4,children:[(0,n.jsx)(l.Z,{height:128,width:128}),(0,n.jsx)(c.Z,{height:20,width:"100%",children:(0,n.jsx)(u.Z,{})})]})})};function b(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{title:"로그아웃",url:"/logout"}),(0,n.jsx)(m,{})]})}},9008:function(r,e,t){r.exports=t(3121)},1163:function(r,e,t){r.exports=t(880)}},function(r){r.O(0,[774,888,179],function(){return r(r.s=3116)}),_N_E=r.O()}]);