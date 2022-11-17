(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[339],{6070:function(r,e,t){"use strict";t.d(e,{Z:function(){return S}});var n=t(3366),a=t(7462),o=t(7294),i=t(6010),s=t(4780),l=t(917),c=t(1796),u=t(6622),d=t(2097),f=t(1719),m=t(8884),b=t(1588),p=t(4867);function h(r){return(0,p.Z)("MuiLinearProgress",r)}(0,b.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var g=t(5893);let v=["className","color","value","valueBuffer","variant"],x=r=>r,j,Z,y,k,C,w,P=(0,l.F4)(j||(j=x`
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
`)),$=(0,l.F4)(Z||(Z=x`
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
`)),_=(0,l.F4)(y||(y=x`
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
`)),R=r=>{let{classes:e,variant:t,color:n}=r,a={root:["root",`color${(0,u.Z)(n)}`,t],dashed:["dashed",`dashedColor${(0,u.Z)(n)}`],bar1:["bar",`barColor${(0,u.Z)(n)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&`barColor${(0,u.Z)(n)}`,"buffer"===t&&`color${(0,u.Z)(n)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,s.Z)(a,h,e)},E=(r,e)=>"inherit"===e?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:"light"===r.palette.mode?(0,c.$n)(r.palette[e].main,.62):(0,c._j)(r.palette[e].main,.5),I=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver(r,e){let{ownerState:t}=r;return[e.root,e[`color${(0,u.Z)(t.color)}`],e[t.variant]]}})(({ownerState:r,theme:e})=>(0,a.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:E(e,r.color)},"inherit"===r.color&&"buffer"!==r.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===r.variant&&{backgroundColor:"transparent"},"query"===r.variant&&{transform:"rotate(180deg)"})),q=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver(r,e){let{ownerState:t}=r;return[e.dashed,e[`dashedColor${(0,u.Z)(t.color)}`]]}})(({ownerState:r,theme:e})=>{let t=E(e,r.color);return(0,a.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===r.color&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},(0,l.iv)(k||(k=x`
    animation: ${0} 3s infinite linear;
  `),_)),B=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver(r,e){let{ownerState:t}=r;return[e.bar,e[`barColor${(0,u.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar1Indeterminate,"determinate"===t.variant&&e.bar1Determinate,"buffer"===t.variant&&e.bar1Buffer]}})(({ownerState:r,theme:e})=>(0,a.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"determinate"===r.variant&&{transition:"transform .4s linear"},"buffer"===r.variant&&{zIndex:1,transition:"transform .4s linear"}),({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.iv)(C||(C=x`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),P)),D=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver(r,e){let{ownerState:t}=r;return[e.bar,e[`barColor${(0,u.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar2Indeterminate,"buffer"===t.variant&&e.bar2Buffer]}})(({ownerState:r,theme:e})=>(0,a.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==r.variant&&{backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"inherit"===r.color&&{opacity:.3},"buffer"===r.variant&&{backgroundColor:E(e,r.color),transition:"transform .4s linear"}),({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.iv)(w||(w=x`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),$)),N=o.forwardRef(function(r,e){let t=(0,m.Z)({props:r,name:"MuiLinearProgress"}),{className:o,color:s="primary",value:l,valueBuffer:c,variant:u="indeterminate"}=t,f=(0,n.Z)(t,v),b=(0,a.Z)({},t,{color:s,variant:u}),p=R(b),h=(0,d.Z)(),x={},j={bar1:{},bar2:{}};if(("determinate"===u||"buffer"===u)&&void 0!==l){x["aria-valuenow"]=Math.round(l),x["aria-valuemin"]=0,x["aria-valuemax"]=100;let Z=l-100;"rtl"===h.direction&&(Z=-Z),j.bar1.transform=`translateX(${Z}%)`}if("buffer"===u&&void 0!==c){let y=(c||0)-100;"rtl"===h.direction&&(y=-y),j.bar2.transform=`translateX(${y}%)`}return(0,g.jsxs)(I,(0,a.Z)({className:(0,i.Z)(p.root,o),ownerState:b,role:"progressbar"},x,{ref:e},f,{children:["buffer"===u?(0,g.jsx)(q,{className:p.dashed,ownerState:b}):null,(0,g.jsx)(B,{className:p.bar1,ownerState:b,style:j.bar1}),"determinate"===u?null:(0,g.jsx)(D,{className:p.bar2,ownerState:b,style:j.bar2})]}))});var S=N},1898:function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login/callback",function(){return t(6948)}])},7324:function(r,e,t){"use strict";t.d(e,{Z:function(){return o}});var n=t(5893),a=t(918),o=function(r){let{backgroundColor:e,borderRadius:t=5,width:o=64,height:i=64}=r;return(0,n.jsx)(a.Z,{"data-component":"JaderLogo",elevation:8,sx:{backgroundColor:e,borderRadius:t,height:i,transition:"0.3s background-color",width:o},children:(0,n.jsx)("img",{alt:"JADER",height:o,src:"/jader/assets/images/jader_transparent.png",width:o})})}},2537:function(r,e,t){"use strict";t.d(e,{Z:function(){return i}});var n=t(5893),a=t(9008),o=t.n(a),i=function(r){let{title:e,description:t="짜증나서 그냥 내가 만든 JADE 연동 서비스",type:a="website",url:i="",image:s="/jader/assets/images/jader.png",locale:l="ko_KR"}=r;return(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:"".concat(e," - ").concat("JADER")}),(0,n.jsx)("meta",{content:t,name:"description"}),(0,n.jsx)("meta",{content:"JADER",property:"og:site_name"}),(0,n.jsx)("meta",{content:"".concat(e," - ").concat("JADER"),property:"og:title"}),(0,n.jsx)("meta",{content:t,property:"og:description"}),(0,n.jsx)("meta",{content:a,property:"og:type"}),(0,n.jsx)("meta",{content:"".concat("https://api.itcode.dev/jader").concat(i),property:"og:url"}),(0,n.jsx)("meta",{content:s,property:"og:image"}),(0,n.jsx)("meta",{content:l,property:"og:locale"}),(0,n.jsx)("link",{href:"".concat("https://project.itcode.dev/jader").concat(i),rel:"canonical"})]})}},6948:function(r,e,t){"use strict";t.r(e),t.d(e,{default:function(){return h}});var n=t(5893),a=t(2537),o=t(3108),i=t(7213),s=t(7324),l=t(1953),c=t(6070),u=t(9144),d=t(9630),f=t(1163),m=t(7294),b=t(4480),p=function(){let r=(0,f.useRouter)(),e=(0,b.Zl)(o.Cw);return(0,m.useEffect)(()=>{(async()=>{let{access:t,refresh:a,email:o}=r.query;if(t&&a){let s=new Date,l={id:"access",timestamp:s,token:t.toString()},c={id:"refresh",timestamp:s,token:a.toString()};await (0,i.PZ)("jader","token",l),await (0,i.PZ)("jader","token",c),r.push("/")}else o&&(e({body:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("b",{children:"".concat(o)}),"로 가입할 수 없습니다."]}),(0,n.jsxs)(d.Z,{children:["사내 구글계정 ",(0,n.jsx)("b",{children:"@rsquare.co.kr"}),"로 가입해주세요."]})]}),title:"가입 에러",type:"error"}),r.push("/login"))})()},[r]),(0,n.jsx)(u.Z,{alignItems:"center","data-component":"CallbackTemplate",height:"100vh",justifyContent:"center",children:(0,n.jsxs)(u.Z,{alignItems:"center",direction:"column",justifyContent:"center",spacing:4,children:[(0,n.jsx)(s.Z,{height:128,width:128}),(0,n.jsx)(l.Z,{height:20,width:"100%",children:(0,n.jsx)(c.Z,{})})]})})};function h(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{title:"로그인 콜백",url:"/login/callback"}),(0,n.jsx)(p,{})]})}},9008:function(r,e,t){r.exports=t(3121)},1163:function(r,e,t){r.exports=t(880)}},function(r){r.O(0,[774,888,179],function(){return r(r.s=1898)}),_N_E=r.O()}]);