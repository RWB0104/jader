(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[328],{2223:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notice",function(){return e(4987)}])},4794:function(t,n,e){"use strict";e.d(n,{Z:function(){return s}});var i=e(5893),c=e(2097),r=e(1225),o=e(9144),s=function(t){let{point:n,mobileProps:e,...s}=t,a=(0,c.Z)(),l=(0,r.Z)(a.breakpoints.up(n||"lg"));return(0,i.jsx)(o.Z,{"data-component":"ResponsiveStack",...l?s:{...s,...e}})}},3017:function(t,n,e){"use strict";e.d(n,{Z:function(){return a}});var i=e(5893),c=e(918),r=e(9144),o=e(9630),s=e(3602);function a(t){let{name:n="BoxPaper",icon:e,title:a,sx:l,children:d,...u}=t;return(0,i.jsx)(s.E.div,{"data-component":n,transition:{duration:.5},variants:{init:{opacity:0,translateY:50,width:"100%"},show:{opacity:1,translateY:0}},children:(0,i.jsx)(c.Z,{sx:{width:"100%",...l},...u,children:(0,i.jsxs)(r.Z,{borderRadius:5,padding:4,spacing:4,width:"100%",children:[(0,i.jsx)(r.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",width:"100%",children:(0,i.jsxs)(r.Z,{alignItems:"center",direction:"row",spacing:1,children:[e,(0,i.jsx)(o.Z,{fontWeight:"bold",variant:"h6",children:a})]})}),d]})})})}},9741:function(t,n,e){"use strict";e.d(n,{Z:function(){return s}});var i=e(5893),c=e(9144),r=function(t){let{name:n="ContentStack",alignItems:e="center",justifyContent:r="center",maxWidth:o=1200,minWidth:s=320,spacing:a=2,width:l="100%",...d}=t;return(0,i.jsx)(c.Z,{alignItems:e,"data-component":n,justifyContent:r,maxWidth:o,minWidth:s,spacing:a,width:l,...d})},o=e(3602),s=function(t){let{name:n="TemplateStack",innerStackProps:e,children:s,...a}=t;return(0,i.jsx)(o.E.div,{animate:"show",initial:"init",style:{width:"100%"},transition:{staggerChildren:.3},children:(0,i.jsx)(c.Z,{alignItems:"center",component:"article","data-component":n,padding:2,...a,children:(0,i.jsx)(r,{...e,children:s})})})}},9776:function(t,n,e){"use strict";e.d(n,{Z:function(){return _}});var i=e(5893),c=e(7294),r=e(3223),o=e(3017),s=e(4794),a=e(5865),l=e(3508),d=e(2097),u=e(6992),h=e(7028),x=e(9618),p=e(1953),Z=e(9144),j=e(9630),f=function(t){let{title:n,content:e,timestamp:r}=t,{palette:{warning:o}}=(0,d.Z)(),{year:f,month:m,day:g,weekday:w,hour:v,minute:b,second:_}=(0,a.K0)(r),k="".concat(f,"-").concat(m.text,"-").concat(g.text," (").concat(w.text,") ").concat(v.text,":").concat(b.text,":").concat(_.text),y=(0,c.useMemo)(()=>new Date().getTime()<=r+6048e5,[r]);return(0,i.jsxs)(u.Z,{elevation:4,children:[(0,i.jsx)(x.Z,{expandIcon:(0,i.jsx)(l.Z,{}),children:(0,i.jsxs)(s.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",mobileProps:{alignItems:void 0,direction:void 0},paddingRight:1,width:"100%",children:[(0,i.jsx)(p.Z,{children:(0,i.jsxs)(p.Z,{display:"inline-block",position:"relative",children:[(0,i.jsx)(j.Z,{fontWeight:"bold",children:n}),y?(0,i.jsx)(p.Z,{bgcolor:o.main,borderRadius:"50%",height:5,position:"absolute",right:-7,top:3,width:5}):null]})}),(0,i.jsx)(j.Z,{color:"GrayText",variant:"caption",children:k})]})}),(0,i.jsx)(h.Z,{children:(0,i.jsx)(Z.Z,{spacing:4,children:e.map((t,n)=>{let{article:e,subtitle:c}=t;return(0,i.jsxs)(Z.Z,{spacing:1,children:[(0,i.jsx)(j.Z,{color:"primary",children:c}),(0,i.jsx)(Z.Z,{spacing:.5,children:e.map(t=>(0,i.jsx)(j.Z,{variant:"caption",children:t},t))})]},"subnotice-".concat(n,"-").concat(r))})})})]},"notice-".concat(r))},m=e(5111),g=e(3927),w=e(4225),v=e(1664),b=e.n(v),_=function(t){let{mode:n="default"}=t,e="default"===n?r.Iv:r.Iv.slice(0,3);return(0,i.jsxs)(o.Z,{icon:(0,i.jsx)(g.Z,{color:"warning"}),name:"NoticeBox",title:"공지사항",children:[(0,i.jsx)(Z.Z,{children:e.map(t=>(0,c.createElement)(f,{...t,key:t.timestamp}))}),"preview"===n?(0,i.jsx)(b(),{href:"/notice",children:(0,i.jsx)(w.Z,{startIcon:(0,i.jsx)(m.Z,{}),fullWidth:!0,children:"전체 보기"})}):null]})}},9958:function(t,n,e){"use strict";var i=e(7412);n.Z=i.Z},4987:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return l}});var i=e(5893),c=e(4626),r=e(9958),o=e(9741),s=e(9776),a=function(){return(0,i.jsx)(o.Z,{name:"NoticeTemplate",children:(0,i.jsx)(s.Z,{})})};function l(){return(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(c.Z,{title:"공지사항",url:"/notice"}),(0,i.jsx)(a,{})]})}}},function(t){t.O(0,[928,664,181,831,338,412,774,888,179],function(){return t(t.s=2223)}),_N_E=t.O()}]);