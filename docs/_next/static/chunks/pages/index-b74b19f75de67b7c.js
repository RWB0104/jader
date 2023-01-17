(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8384:function(n,t,i){"use strict";var a=i(4836);t.Z=void 0;var o=a(i(4938)),e=i(5893),r=(0,o.default)((0,e.jsx)("path",{d:"m22 5.72-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39 6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"}),"AlarmOn");t.Z=r},1885:function(n,t,i){"use strict";var a=i(4836);t.Z=void 0;var o=a(i(4938)),e=i(5893),r=(0,o.default)((0,e.jsx)("path",{d:"M12 3 6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h7v-6h2v6h7v-9.38l1.79 1.36L23 11.4 12 3zm-2-2c0 1.66-1.34 3-3 3-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3 .55 0 1-.45 1-1h2z"}),"Cottage");t.Z=r},9452:function(n,t,i){"use strict";var a=i(4836);t.Z=void 0;var o=a(i(4938)),e=i(5893),r=(0,o.default)((0,e.jsx)("path",{d:"M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"}),"LaptopMac");t.Z=r},8312:function(n,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(5707)}])},1751:function(n,t,i){"use strict";i.d(t,{Z:function(){return e}});var a=i(5893),o=i(9144),e=function(n){let{name:t,alignItems:i="center",justifyContent:e="center",maxWidth:r=1200,minWidth:s=320,spacing:d=4,width:l="100%",...c}=n;return(0,a.jsx)(o.Z,{alignItems:i,"data-component":t,justifyContent:e,maxWidth:r,minWidth:s,spacing:d,width:l,...c})}},7545:function(n,t,i){"use strict";var a=i(3892),o=i(5349),e=i(8767);t.Z={useGetCalendar:function(n,t){return(0,e.useQuery)(["jade-v2","getCalendar"],async()=>{let t=await new o.$d(await (0,a.P)()).getCalendarV2(n);return t},t)},useLogin:function(n){return(0,e.useQuery)(["jade-v2","login"],async()=>{let n=await new o.$d(await (0,a.P)()).loginV2();return n},n)},usePostCalendarPlan:function(n){return(0,e.useMutation)(["jade-v2","postCalendarPlan"],async n=>{let t=await new o.$d(await (0,a.P)()).postCalendarPlanV2(n);return t},n)},usePostWorkIn:function(n){return(0,e.useMutation)(["jade-v2","postWorkIn"],async()=>{let n=await new o.$d(await (0,a.P)()).postWorkInV2();return n},n)},usePostWorkOut:function(n){return(0,e.useMutation)(["jade-v2","postWorkOut"],async()=>{let n=await new o.$d(await (0,a.P)()).postWorkOutV2();return n},n)},useTime:function(n){return(0,e.useQuery)(["jade-v2","time"],async()=>{let n=await new o.$d(await (0,a.P)()).getWorkTimeInfoV2();return n},n)}}},5707:function(n,t,i){"use strict";i.r(t),i.d(t,{default:function(){return X}});var a=i(5893),o=i(2537),e=i(8310),r=i(9113),s=i(1751),d=i(3108),l=i(7545),c=i(1953),u=i(754),g=i(918),h=i(9144),x=i(9630),Z=function(n){let{timeInfo:t,loading:i}=n;return(0,a.jsxs)(h.Z,{alignItems:"center","data-component":"JadeTimeCard",direction:"row",justifyContent:"center",spacing:3,children:[(0,a.jsx)(g.Z,{sx:{borderRadius:3},children:(0,a.jsx)(c.Z,{padding:"10px 40px",children:(0,a.jsxs)(h.Z,{alignItems:"center",children:[(0,a.jsx)(x.Z,{variant:"caption",children:"출근 시간"}),i?(0,a.jsx)(u.Z,{color:"primary",size:40}):(0,a.jsx)(x.Z,{variant:"h4",children:(null==t?void 0:t.workInTime)||"--:--"})]})})}),(0,a.jsx)(g.Z,{sx:{borderRadius:3},children:(0,a.jsx)(c.Z,{padding:"10px 40px",children:(0,a.jsxs)(h.Z,{alignItems:"center",children:[(0,a.jsx)(x.Z,{variant:"caption",children:"퇴근 시간"}),i?(0,a.jsx)(u.Z,{color:"primary",size:40}):(0,a.jsx)(x.Z,{variant:"h4",children:(null==t?void 0:t.workOutTime)||"--:--"})]})})})]})},p=i(2097),j=function(){let{palette:{mode:n,grey:t}}=(0,p.Z)(),i={height:10,radius:100};return(0,a.jsxs)(h.Z,{borderRadius:i.radius,direction:"row",height:i.height,overflow:"hidden",position:"relative",sx:{backgroundImage:"linear-gradient(to right, dodgerblue, crimson)"},width:"100%",children:[(0,a.jsx)(c.Z,{height:i.height,left:0,position:"absolute",top:0,width:"100%",sx:{animation:"progress 1s linear infinite",backgroundImage:"linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)",backgroundSize:"1rem 1rem"}}),(0,a.jsx)(c.Z,{bgcolor:"transparent",height:i.height,width:"100%",zIndex:1}),(0,a.jsx)(c.Z,{bgcolor:"light"===n?t[200]:"black",flex:1,height:i.height,paddingLeft:-100,zIndex:1})]})},f=i(8384),m=i(594),v=i(1885),I=i(9452),w=i(1107),b=i(2177),L=i(3366),P=i(7462),y=i(7294),k=i(6622),C=i(9669),z=i(4780),W=i(7074),$=i(6446),M=i(5084),E=i(4867),S=i(1588);function _(n){return(0,E.Z)("MuiLoadingButton",n)}let R=(0,S.Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),T=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],V=n=>{let{loading:t,loadingPosition:i,classes:a}=n,o={root:["root",t&&"loading"],startIcon:[t&&`startIconLoading${(0,k.Z)(i)}`],endIcon:[t&&`endIconLoading${(0,k.Z)(i)}`],loadingIndicator:["loadingIndicator",t&&`loadingIndicator${(0,k.Z)(i)}`]},e=(0,z.Z)(o,_,a);return(0,P.Z)({},a,e)},H=n=>"ownerState"!==n&&"theme"!==n&&"sx"!==n&&"as"!==n&&"classes"!==n,O=(0,W.ZP)(M.Z,{shouldForwardProp:n=>H(n)||"classes"===n,name:"MuiLoadingButton",slot:"Root",overridesResolver:(n,t)=>[t.root,t.startIconLoadingStart&&{[`& .${R.startIconLoadingStart}`]:t.startIconLoadingStart},t.endIconLoadingEnd&&{[`& .${R.endIconLoadingEnd}`]:t.endIconLoadingEnd}]})(({ownerState:n,theme:t})=>(0,P.Z)({[`& .${R.startIconLoadingStart}, & .${R.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0}},"center"===n.loadingPosition&&{transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),[`&.${R.loading}`]:{color:"transparent"}},"start"===n.loadingPosition&&n.fullWidth&&{[`& .${R.startIconLoadingStart}, & .${R.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===n.loadingPosition&&n.fullWidth&&{[`& .${R.startIconLoadingStart}, & .${R.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginLeft:-8}})),B=(0,W.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver(n,t){let{ownerState:i}=n;return[t.loadingIndicator,t[`loadingIndicator${(0,k.Z)(i.loadingPosition)}`]]}})(({theme:n,ownerState:t})=>(0,P.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{left:"small"===t.size?10:14},"start"===t.loadingPosition&&"text"===t.variant&&{left:6},"center"===t.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(n.vars||n).palette.action.disabled},"end"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{right:"small"===t.size?10:14},"end"===t.loadingPosition&&"text"===t.variant&&{right:6},"start"===t.loadingPosition&&t.fullWidth&&{position:"relative",left:-10},"end"===t.loadingPosition&&t.fullWidth&&{position:"relative",right:-10})),N=y.forwardRef(function(n,t){let i=(0,$.Z)({props:n,name:"MuiLoadingButton"}),{children:o,disabled:e=!1,id:r,loading:s=!1,loadingIndicator:d,loadingPosition:l="center",variant:c="text"}=i,g=(0,L.Z)(i,T),h=(0,C.Z)(r),x=null!=d?d:(0,a.jsx)(u.Z,{"aria-labelledby":h,color:"inherit",size:16}),Z=(0,P.Z)({},i,{disabled:e,loading:s,loadingIndicator:x,loadingPosition:l,variant:c}),p=V(Z),j=s?(0,a.jsx)(B,{className:p.loadingIndicator,ownerState:Z,children:x}):null;return(0,a.jsxs)(O,(0,P.Z)({disabled:e||s,id:h,ref:t},g,{variant:c,classes:p,ownerState:Z,children:["end"===Z.loadingPosition?o:j,"end"===Z.loadingPosition?j:o]}))});var A=i(4480),F=function(){let n=(0,A.Zl)(d.Cw),{data:t,refetch:i}=l.Z.useTime(),o={onMutate(){n(void 0)},onSuccess(){i()}},e=l.Z.usePostWorkIn(o),r=l.Z.usePostWorkOut(o),s=(0,y.useCallback)(()=>{n({body:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.Z,{children:"출근 시간을 등록하시겠습니까?"}),(0,a.jsx)("br",{}),(0,a.jsxs)(x.Z,{fontWeight:"bold",children:[(0,a.jsx)(b.Z,{sx:{verticalAlign:"middle"}}),"중복해서 등록할 경우, 가장 마지막에 등록된 시간으로 반영됩니다."]})]}),close:{icon:(0,a.jsx)(m.Z,{})},confirm:{icon:(0,a.jsx)(f.Z,{}),onClick(){e.mutateAsync({})},text:"등록"},title:"출근 등록",type:"info"})},[n]),c=(0,y.useCallback)(()=>{n({body:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.Z,{children:"퇴근 시간을 등록하시겠습니까?"}),(0,a.jsx)("br",{}),(0,a.jsxs)(x.Z,{fontWeight:"bold",children:[(0,a.jsx)(b.Z,{sx:{verticalAlign:"middle"}}),"중복해서 등록할 경우, 가장 마지막에 등록된 시간으로 반영됩니다."]})]}),close:{icon:(0,a.jsx)(m.Z,{})},confirm:{icon:(0,a.jsx)(f.Z,{}),onClick(){r.mutateAsync({})},text:"등록"},title:"퇴근 등록",type:"info"})},[n]);return(0,a.jsx)(g.Z,{"data-component":"HomeBanner",sx:{width:"100%"},children:(0,a.jsxs)(h.Z,{borderRadius:5,"data-component":"HomeBanner",padding:4,spacing:4,width:"100%",children:[(0,a.jsx)(h.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",width:"100%",children:(0,a.jsxs)(h.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,a.jsx)(w.Z,{color:"primary"}),(0,a.jsx)(x.Z,{fontWeight:"bold",variant:"h6",children:"출퇴근 시간 등록"})]})}),(0,a.jsx)(Z,{loading:e.isLoading||r.isLoading,timeInfo:null==t?void 0:t.body}),(0,a.jsx)(j,{}),(0,a.jsxs)(h.Z,{direction:"row",spacing:4,children:[(0,a.jsx)(N,{loading:e.isLoading,size:"large",startIcon:(0,a.jsx)(I.Z,{}),variant:"contained",fullWidth:!0,onClick:s,children:"출근"}),(0,a.jsx)(N,{loading:r.isLoading,size:"large",startIcon:(0,a.jsx)(v.Z,{}),variant:"contained",fullWidth:!0,onClick:c,children:"퇴근"})]})]})})},Q=function(){let{palette:{mode:n,grey:t}}=(0,p.Z)(),i=(0,y.useCallback)(()=>"light"===n?t[200]:"black",[n]);return(0,a.jsx)(h.Z,{alignItems:"center",bgcolor:i(),component:"article","data-component":"HomeTemplate",padding:4,children:(0,a.jsx)(s.Z,{children:(0,a.jsx)(F,{})})})};function X(){return(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(o.Z,{title:"홈"}),(0,a.jsx)(e.Z,{children:(0,a.jsx)(Q,{})})]})}}},function(n){n.O(0,[699,547,583,817,774,888,179],function(){return n(n.s=8312)}),_N_E=n.O()}]);