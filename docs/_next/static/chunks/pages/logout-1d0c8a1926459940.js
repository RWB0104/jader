(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[765],{3116:function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/logout",function(){return t(4495)}])},6211:function(r,e,t){"use strict";t.d(e,{Z:function(){return a}});var n=t(5893),o=t(918),a=function(r){let{backgroundColor:e,borderRadius:t=5,width:a=64,height:i=64,origin:s}=r;return(0,n.jsx)(o.Z,{"data-component":"JaderLogo",elevation:8,sx:{backgroundColor:e,borderRadius:t,height:i,transition:"0.3s background-color",width:a},children:(0,n.jsx)("img",{alt:"JADER",height:a,src:"/jader/assets/images/jader_transparent".concat(s?"":"_logo",".png"),width:a})})}},4626:function(r,e,t){"use strict";t.d(e,{Z:function(){return i}});var n=t(5893),o=t(9008),a=t.n(o),i=function(r){let{title:e,description:t="짜증나서 그냥 내가 만든 JADE 연동 서비스",type:o="website",url:i="",image:s="/jader/assets/images/jader.png",locale:l="ko_KR"}=r;return(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"".concat(e," - ").concat("JADER")}),(0,n.jsx)("meta",{content:t,name:"description"}),(0,n.jsx)("meta",{content:"JADER",property:"og:site_name"}),(0,n.jsx)("meta",{content:"".concat(e," - ").concat("JADER"),property:"og:title"}),(0,n.jsx)("meta",{content:t,property:"og:description"}),(0,n.jsx)("meta",{content:o,property:"og:type"}),(0,n.jsx)("meta",{content:"".concat("https://project.itcode.dev/jader").concat(i),property:"og:url"}),(0,n.jsx)("meta",{content:s,property:"og:image"}),(0,n.jsx)("meta",{content:l,property:"og:locale"}),(0,n.jsx)("link",{href:"".concat("https://project.itcode.dev/jader").concat(i),rel:"canonical"})]})}},4495:function(r,e,t){"use strict";t.r(e),t.d(e,{default:function(){return X}});var n=t(5893),o=t(4626),a=t(5629),i=t(8767),s={useLogout:function(r){return(0,i.useQuery)(["custom","logout"],async()=>{await (0,a.PS)("jader","token")},{...r})}},l=t(6211),c=t(1953),u=t(3366),d=t(7462),f=t(7294),m=t(6010),b=t(4780),p=t(917),g=t(1796),h=t(6622),v=t(2097),x=t(7074),j=t(6446),y=t(1588),Z=t(4867);function C(r){return(0,Z.Z)("MuiLinearProgress",r)}(0,y.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);let w=["className","color","value","valueBuffer","variant"],k=r=>r,P,$,_,L,R,I,B=(0,p.F4)(P||(P=k`
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
`)),E=(0,p.F4)($||($=k`
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
`)),N=(0,p.F4)(_||(_=k`
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
`)),S=r=>{let{classes:e,variant:t,color:n}=r,o={root:["root",`color${(0,h.Z)(n)}`,t],dashed:["dashed",`dashedColor${(0,h.Z)(n)}`],bar1:["bar",`barColor${(0,h.Z)(n)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&`barColor${(0,h.Z)(n)}`,"buffer"===t&&`color${(0,h.Z)(n)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,b.Z)(o,C,e)},D=(r,e)=>"inherit"===e?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:"light"===r.palette.mode?(0,g.$n)(r.palette[e].main,.62):(0,g._j)(r.palette[e].main,.5),q=(0,x.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver(r,e){let{ownerState:t}=r;return[e.root,e[`color${(0,h.Z)(t.color)}`],e[t.variant]]}})(({ownerState:r,theme:e})=>(0,d.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:D(e,r.color)},"inherit"===r.color&&"buffer"!==r.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===r.variant&&{backgroundColor:"transparent"},"query"===r.variant&&{transform:"rotate(180deg)"})),M=(0,x.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver(r,e){let{ownerState:t}=r;return[e.dashed,e[`dashedColor${(0,h.Z)(t.color)}`]]}})(({ownerState:r,theme:e})=>{let t=D(e,r.color);return(0,d.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===r.color&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},(0,p.iv)(L||(L=k`
    animation: ${0} 3s infinite linear;
  `),N)),A=(0,x.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver(r,e){let{ownerState:t}=r;return[e.bar,e[`barColor${(0,h.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar1Indeterminate,"determinate"===t.variant&&e.bar1Determinate,"buffer"===t.variant&&e.bar1Buffer]}})(({ownerState:r,theme:e})=>(0,d.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"determinate"===r.variant&&{transition:"transform .4s linear"},"buffer"===r.variant&&{zIndex:1,transition:"transform .4s linear"}),({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,p.iv)(R||(R=k`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),B)),J=(0,x.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver(r,e){let{ownerState:t}=r;return[e.bar,e[`barColor${(0,h.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar2Indeterminate,"buffer"===t.variant&&e.bar2Buffer]}})(({ownerState:r,theme:e})=>(0,d.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==r.variant&&{backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"inherit"===r.color&&{opacity:.3},"buffer"===r.variant&&{backgroundColor:D(e,r.color),transition:"transform .4s linear"}),({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,p.iv)(I||(I=k`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),E)),z=f.forwardRef(function(r,e){let t=(0,j.Z)({props:r,name:"MuiLinearProgress"}),{className:o,color:a="primary",value:i,valueBuffer:s,variant:l="indeterminate"}=t,c=(0,u.Z)(t,w),f=(0,d.Z)({},t,{color:a,variant:l}),b=S(f),p=(0,v.Z)(),g={},h={bar1:{},bar2:{}};if(("determinate"===l||"buffer"===l)&&void 0!==i){g["aria-valuenow"]=Math.round(i),g["aria-valuemin"]=0,g["aria-valuemax"]=100;let x=i-100;"rtl"===p.direction&&(x=-x),h.bar1.transform=`translateX(${x}%)`}if("buffer"===l&&void 0!==s){let y=(s||0)-100;"rtl"===p.direction&&(y=-y),h.bar2.transform=`translateX(${y}%)`}return(0,n.jsxs)(q,(0,d.Z)({className:(0,m.Z)(b.root,o),ownerState:f,role:"progressbar"},g,{ref:e},c,{children:["buffer"===l?(0,n.jsx)(M,{className:b.dashed,ownerState:f}):null,(0,n.jsx)(A,{className:b.bar1,ownerState:f,style:h.bar1}),"determinate"===l?null:(0,n.jsx)(J,{className:b.bar2,ownerState:f,style:h.bar2})]}))});var F=t(9144),O=t(1163),T=function(){let r=(0,O.useRouter)();return s.useLogout({onSettled(){r.push("/login")}}),(0,n.jsx)(F.Z,{alignItems:"center","data-component":"LogoutTemplate",height:"100vh",justifyContent:"center",children:(0,n.jsxs)(F.Z,{alignItems:"center",direction:"column",justifyContent:"center",spacing:4,children:[(0,n.jsx)(l.Z,{height:128,width:128}),(0,n.jsx)(c.Z,{height:20,width:"100%",children:(0,n.jsx)(z,{})})]})})};function X(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{title:"로그아웃",url:"/logout"}),(0,n.jsx)(T,{})]})}},9008:function(r,e,t){r.exports=t(3121)},1163:function(r,e,t){r.exports=t(880)}},function(r){r.O(0,[774,888,179],function(){return r(r.s=3116)}),_N_E=r.O()}]);