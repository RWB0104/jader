(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{7183:function(i,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return n(2764)}])},4794:function(i,e,n){"use strict";n.d(e,{Z:function(){return c}});var t=n(5893),r=n(2097),o=n(1225),l=n(9144),c=function(i){let{point:e,mobileProps:n,...c}=i,d=(0,r.Z)(),a=(0,o.Z)(d.breakpoints.up(e||"lg"));return(0,t.jsx)(l.Z,{"data-component":"ResponsiveStack",...a?c:{...c,...n}})}},3017:function(i,e,n){"use strict";n.d(e,{Z:function(){return d}});var t=n(5893),r=n(918),o=n(9144),l=n(9630),c=n(3602);function d(i){let{name:e="BoxPaper",icon:n,title:d,sx:a,children:s,...h}=i;return(0,t.jsx)(c.E.div,{"data-component":e,transition:{duration:.5},variants:{init:{opacity:0,translateY:50,width:"100%"},show:{opacity:1,translateY:0}},children:(0,t.jsx)(r.Z,{sx:{width:"100%",...a},...h,children:(0,t.jsxs)(o.Z,{borderRadius:5,padding:4,spacing:4,width:"100%",children:[(0,t.jsx)(o.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",width:"100%",children:(0,t.jsxs)(o.Z,{alignItems:"center",direction:"row",spacing:1,children:[n,(0,t.jsx)(l.Z,{fontWeight:"bold",variant:"h6",children:d})]})}),s]})})})}},9741:function(i,e,n){"use strict";n.d(e,{Z:function(){return c}});var t=n(5893),r=n(9144),o=function(i){let{name:e="ContentStack",alignItems:n="center",justifyContent:o="center",maxWidth:l=1200,minWidth:c=320,spacing:d=2,width:a="100%",...s}=i;return(0,t.jsx)(r.Z,{alignItems:n,"data-component":e,justifyContent:o,maxWidth:l,minWidth:c,spacing:d,width:a,...s})},l=n(3602),c=function(i){let{name:e="TemplateStack",innerStackProps:n,children:c,...d}=i;return(0,t.jsx)(l.E.div,{animate:"show",initial:"init",style:{width:"100%"},transition:{staggerChildren:.3},children:(0,t.jsx)(r.Z,{alignItems:"center",component:"article","data-component":e,padding:2,...d,children:(0,t.jsx)(o,{...n,children:c})})})}},9776:function(i,e,n){"use strict";n.d(e,{Z:function(){return w}});var t=n(5893),r=n(7294),o=n(3223),l=n(3017),c=n(4794),d=n(5865),a=n(3508),s=n(2097),h=n(6992),x=n(7028),u=n(9618),j=n(1953),g=n(9144),Z=n(9630),m=function(i){let{title:e,content:n,timestamp:o}=i,{palette:{warning:l}}=(0,s.Z)(),{year:m,month:v,day:p,weekday:f,hour:b,minute:y,second:w}=(0,d.K0)(o),k="".concat(m,"-").concat(v.text,"-").concat(p.text," (").concat(f.text,") ").concat(b.text,":").concat(y.text,":").concat(w.text),W=(0,r.useMemo)(()=>new Date().getTime()<=o+6048e5,[o]);return(0,t.jsxs)(h.Z,{elevation:4,children:[(0,t.jsx)(u.Z,{expandIcon:(0,t.jsx)(a.Z,{}),children:(0,t.jsxs)(c.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",mobileProps:{alignItems:void 0,direction:void 0},paddingRight:1,width:"100%",children:[(0,t.jsxs)(j.Z,{position:"relative",children:[(0,t.jsx)(Z.Z,{fontWeight:"bold",children:e}),W?(0,t.jsx)(j.Z,{bgcolor:l.main,borderRadius:"50%",height:5,position:"absolute",right:-7,top:3,width:5}):null]}),(0,t.jsx)(Z.Z,{color:"GrayText",variant:"caption",children:k})]})}),(0,t.jsx)(x.Z,{children:(0,t.jsx)(g.Z,{spacing:4,children:n.map((i,e)=>{let{article:n,subtitle:r}=i;return(0,t.jsxs)(g.Z,{spacing:1,children:[(0,t.jsx)(Z.Z,{color:"primary",children:r}),(0,t.jsx)(g.Z,{spacing:.5,children:n.map(i=>(0,t.jsx)(Z.Z,{variant:"caption",children:i},i))})]},"subnotice-".concat(e,"-").concat(o))})})})]},"notice-".concat(o))},v=n(5111),p=n(3927),f=n(4225),b=n(1664),y=n.n(b),w=function(i){let{mode:e="default"}=i,n="default"===e?o.Iv:o.Iv.slice(0,3);return(0,t.jsxs)(l.Z,{icon:(0,t.jsx)(p.Z,{color:"warning"}),name:"NoticeBox",title:"공지사항",children:[(0,t.jsx)(g.Z,{children:n.map(i=>(0,r.createElement)(m,{...i,key:i.timestamp}))}),"preview"===e?(0,t.jsx)(y(),{href:"/notice",children:(0,t.jsx)(f.Z,{startIcon:(0,t.jsx)(v.Z,{}),fullWidth:!0,children:"전체 보기"})}):null]})}},2764:function(i,e,n){"use strict";n.r(e),n.d(e,{default:function(){return A}});var t=n(5893),r=n(4626),o=n(7412),l=n(9741),c=n(1254),d=n(5865),a=n(1955),s=n(3017),h=n(244),x=n(1671),u=n(6638),j=n(8402),g=n(4270),Z=n(6547),m=n(2097),v=n(1953),p=n(9144),f=n(1893),b=n(9630),y=n(7294),w=function(i){let{start:e=0,end:n,total:r,loading:o}=i,{palette:{mode:l,grey:c,primary:a,warning:s,error:w}}=(0,m.Z)(),[k,W]=(0,y.useState)(new Date),T={height:10,radius:100},I={dinner:(0,d.WL)(.8846153846153846*100,2),end:(0,d.WL)(.6923076923076923*100,2)},C=(0,y.useMemo)(()=>e+(0,d.FP)(9),[e]),K=(0,y.useMemo)(()=>e+(0,d.FP)(11,30),[e]),S=(0,y.useMemo)(()=>{let{year:i,month:{text:e},day:{text:n},weekday:{text:t}}=(0,d.K0)(k);return"".concat(i,"-").concat(e,"-").concat(n," (").concat(t,")")},[k]),_=(0,y.useMemo)(()=>{let{hour:{text:i},minute:{text:e},second:{text:n}}=(0,d.K0)(k);return"".concat(i,":").concat(e,":").concat(n)},[k]),E=(0,y.useCallback)(i=>{if(i){let{hour:{text:e},minute:{text:n}}=(0,d.K0)(i);return"".concat(e,":").concat(n)}return"--:--"},[]),P=(0,y.useCallback)(()=>{if(e){let i=(0,d.FP)(13);if(n)return n<(0,d.WK)(6,30)?100:(0,d.WL)((n-e)*100/i,2);let t=(0,d.K0)(k),r=(0,d.WK)(t.hour.value,t.minute.value,0);return r<(0,d.WK)(6,30)?100:(0,d.WL)((r-e)*100/i,2)}return 0},[k,e,n]);return(0,y.useEffect)(()=>{let i=setInterval(()=>{W(new Date)},500);return()=>{clearInterval(i)}},[]),(0,t.jsxs)(p.Z,{"data-component":"TimeGraph",direction:"column",spacing:5,children:[(0,t.jsx)(v.Z,{position:"relative",children:(0,t.jsxs)(p.Z,{borderRadius:T.radius,direction:"row",height:T.height,overflow:"hidden",sx:{backgroundImage:"linear-gradient(to right, ".concat(a.light," 0%, ").concat(a.dark," ").concat(I.end,"%, ").concat(s.light," ").concat(I.end,"%, ").concat(s.main," ").concat(I.dinner,"%, ").concat(w.light," ").concat(I.dinner,"%, ").concat(w.dark," 99.8%, gainsboro)")},width:"100%",children:[(0,t.jsx)(v.Z,{height:T.height,left:0,position:"absolute",top:0,width:"100%",sx:{animation:"progress 1s linear infinite",backgroundImage:"linear-gradient(45deg, hsla(0, 0%, 100%, 0.15) 25%, transparent 0, transparent 50%, hsla(0, 0%, 100%, 0.15) 0, hsla(0, 0%, 100%, 0.15) 75%, transparent 0, transparent)",backgroundSize:"1rem 1rem"}}),(0,t.jsx)(v.Z,{bgcolor:"transparent",height:T.height,sx:{transition:"1s cubic-bezier(0.25, 0.46, 0.45, 0.94)"},width:o?"0%":"".concat(P(),"%")}),(0,t.jsx)(v.Z,{bgcolor:"light"===l?c[200]:"black",flex:1,height:T.height}),(0,t.jsx)(f.Z,{title:E(C),arrow:!0,children:(0,t.jsx)(v.Z,{bgcolor:"white",borderRadius:"50%",boxShadow:"0px 0px 3px grey inset",display:P()<I.end?"none":"initial",height:T.height+5,left:"calc(".concat(I.end,"% - 7px)"),position:"absolute",top:-3,width:T.height+5,zIndex:2})}),(0,t.jsx)(f.Z,{title:E(K),arrow:!0,children:(0,t.jsx)(v.Z,{bgcolor:"white",borderRadius:"50%",boxShadow:"0px 0px 3px grey inset",display:P()<I.dinner?"none":"initial",height:T.height+5,left:"calc(".concat(I.dinner,"% - 7px)"),position:"absolute",top:-3,width:T.height+5,zIndex:2})})]})}),(0,t.jsxs)(p.Z,{alignSelf:"center",direction:"column",maxWidth:300,spacing:2,width:"100%",children:[(0,t.jsxs)(p.Z,{alignItems:"center",justifyContent:"center",children:[(0,t.jsx)(b.Z,{variant:"caption",children:S}),(0,t.jsx)(b.Z,{fontWeight:"bold",variant:"h5",children:_})]}),(0,t.jsx)(p.Z,{children:(0,t.jsxs)(p.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",children:[(0,t.jsxs)(p.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,t.jsx)(h.Z,{color:"primary"}),(0,t.jsx)(b.Z,{alignItems:"center",children:"근무시간"})]}),(0,t.jsx)(b.Z,{fontWeight:"bold",variant:"h5",children:E(r)})]})}),(0,t.jsxs)(p.Z,{children:[(0,t.jsxs)(p.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",children:[(0,t.jsxs)(p.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,t.jsx)(x.Z,{color:"primary"}),(0,t.jsx)(b.Z,{alignItems:"center",children:"출근"})]}),(0,t.jsx)(b.Z,{fontWeight:"bold",variant:"h5",children:E(e)})]}),(0,t.jsxs)(p.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",children:[(0,t.jsxs)(p.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,t.jsx)(u.Z,{color:"primary"}),(0,t.jsx)(b.Z,{alignItems:"center",children:"퇴근"})]}),(0,t.jsx)(b.Z,{fontWeight:"bold",variant:"h5",children:E(n)})]})]}),(0,t.jsxs)(p.Z,{children:[(0,t.jsxs)(p.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",children:[(0,t.jsxs)(p.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,t.jsx)(Z.Z,{color:"primary"}),(0,t.jsx)(b.Z,{alignItems:"center",children:"정시퇴근"})]}),(0,t.jsx)(b.Z,{fontWeight:"bold",variant:"h5",children:e?E(C):"--:--"})]}),(0,t.jsxs)(p.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",children:[(0,t.jsxs)(p.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,t.jsx)(g.Z,{color:"primary"}),(0,t.jsx)(b.Z,{alignItems:"center",children:"저녁식대"})]}),(0,t.jsx)(b.Z,{fontWeight:"bold",variant:"h5",children:e?E(K):"--:--"})]}),(0,t.jsxs)(p.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",children:[(0,t.jsxs)(p.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,t.jsx)(j.Z,{color:"primary"}),(0,t.jsx)(b.Z,{alignItems:"center",children:"교통비"})]}),(0,t.jsx)(b.Z,{fontWeight:"bold",variant:"h5",children:e?"23:00":"--:--"})]})]})]})]})},k=n(8384),W=n(594),T=n(1885),I=n(9452),C=n(1107),K=n(1812),S=n(2741),_=n(8391),E=n(8767),P=n(4480),N=function(){var i,e,n,r,o,l;let h=(0,m.Z)(),x=(0,E.useQueryClient)(),u=(0,P.Zl)(c.Cw),{data:j,isLoading:g,refetch:Z}=a.Z.useTime(),v={onMutate(){u(void 0)},onSuccess(){Z()}},f=a.Z.usePostWorkIn(v),N=a.Z.usePostWorkOut(v),R=(0,y.useCallback)(()=>{u({body:(0,t.jsxs)(p.Z,{spacing:2,children:[(0,t.jsx)(b.Z,{children:"출근 시간을 등록하시겠습니까?"}),(0,t.jsx)(b.Z,{color:h.palette.error.main,variant:"caption",children:"※ 중복해서 등록할 경우, 가장 마지막에 등록된 시간으로 반영됩니다."})]}),close:{icon:(0,t.jsx)(W.Z,{})},confirm:{icon:(0,t.jsx)(k.Z,{}),onClick(){f.mutateAsync(),x.invalidateQueries(["jade","getWorkTimeDetailInfo",(0,d.K0)().year.toString(),(0,d.K0)().month.text]),x.invalidateQueries(["jade","getCalendar",(0,d.K0)().year.toString(),(0,d.K0)().month.text])},text:"등록"},title:"출근 등록",type:"info"})},[u,h]),D=(0,y.useCallback)(()=>{u({body:(0,t.jsxs)(p.Z,{spacing:2,children:[(0,t.jsx)(b.Z,{children:"퇴근 시간을 등록하시겠습니까?"}),(0,t.jsxs)(p.Z,{children:[(0,t.jsx)(b.Z,{color:h.palette.error.main,variant:"caption",children:"※ 중복해서 등록할 경우, 가장 마지막에 등록된 시간으로 반영됩니다."}),(0,t.jsx)(b.Z,{color:h.palette.success.main,variant:"caption",children:"※ 22:29가 넘어도 퇴근 등록이 가능합니다."})]})]}),close:{icon:(0,t.jsx)(W.Z,{})},confirm:{icon:(0,t.jsx)(k.Z,{}),onClick(){N.mutateAsync(),x.invalidateQueries(["jade","getWorkTimeDetailInfo",(0,d.K0)().year.toString(),(0,d.K0)().month.text]),x.invalidateQueries(["jade","getCalendar",(0,d.K0)().year.toString(),(0,d.K0)().month.text])},text:"등록"},title:"퇴근 등록",type:"info"})},[u,h]);return(0,t.jsxs)(s.Z,{icon:(0,t.jsx)(C.Z,{color:"primary"}),name:"HomeBox",title:"출퇴근 시간 등록",children:[(0,t.jsx)(w,{end:null==j?void 0:null===(i=j.body)||void 0===i?void 0:null===(e=i.outTime)||void 0===e?void 0:e.milliseconds,loading:g,start:null==j?void 0:null===(n=j.body)||void 0===n?void 0:null===(r=n.inTime)||void 0===r?void 0:r.milliseconds,total:null==j?void 0:null===(o=j.body)||void 0===o?void 0:null===(l=o.workTime)||void 0===l?void 0:l.milliseconds}),(0,t.jsxs)(p.Z,{direction:"row",spacing:4,children:[(0,t.jsx)(K.Z,{loading:f.isLoading,size:"large",startIcon:(0,t.jsx)(I.Z,{}),variant:"contained",fullWidth:!0,onClick:R,children:"출근"}),(0,t.jsx)(K.Z,{loading:N.isLoading,size:"large",startIcon:(0,t.jsx)(T.Z,{}),variant:"contained",fullWidth:!0,onClick:D,children:"퇴근"})]}),(0,t.jsxs)(S.Z,{severity:"info",children:[(0,t.jsx)(_.Z,{children:"안내"}),(0,t.jsxs)(p.Z,{children:[(0,t.jsxs)(b.Z,{variant:"caption",children:["출/퇴근을 중복으로 등록할 경우, ",(0,t.jsx)("b",{children:"가장 마지막에 등록된 시간으로 기록"}),"됩니다."]}),(0,t.jsx)(b.Z,{variant:"caption",children:"연장 근무 신청을 하지 않은채 22시 29분을 넘어도 00시 이전까지 퇴근 등록이 가능합니다. (최대 22시 29분으로 등록됨)"}),(0,t.jsx)(b.Z,{variant:"caption",children:"익일(새벽) 퇴근 신청은 아직 지원하지 않습니다. (하려면 익일 퇴근 해야해요...)"})]})]})]})},R=n(2227),D=n(4913),O=n(4373),M=n(6070),z=function(){var i,e,n,r,o,l,c,h,x,u,j,g,Z,m,f,w,k,W,T,I,C,K,E,P,N;let{data:z,isSuccess:B}=a.Z.useGetWorkTimeDetailInfo({month:(0,d.K0)().month.text,year:(0,d.K0)().year.toString()}),L=(0,y.useCallback)(function(i){for(var e=arguments.length,n=Array(e>1?e-1:0),t=1;t<e;t++)n[t-1]=arguments[t];if(null==i?void 0:i.hour){let{hour:r}=i;return n.forEach(i=>{i&&(r+=i)}),{hour:r,minute:i.minute||0,text:"".concat(r,"시간").concat(0===i.minute?"":" ".concat(i.minute,"분"))}}return{hour:0,minute:0,text:"0시간"}},[]),A=(0,y.useCallback)(i=>{let{hour:e}=i,n=Math.ceil(e/8);return n<=0?"최소 근무 기준을 충족했습니다. 고생했어요!":"8시간 기준, 약 ".concat(n,"일 더 근무해야합니다. 힘내세요!")},[]);return(0,t.jsxs)(s.Z,{"data-component":"WorkTimeDetailInfoBox",icon:(0,t.jsx)(D.Z,{color:"primary"}),title:"근무 시간 상세 정보",children:[B?(0,t.jsxs)(p.Z,{alignSelf:"center",maxWidth:300,spacing:2,width:"100%",children:[(0,t.jsxs)(v.Z,{display:"grid",gridTemplateColumns:"120px 1fr",children:[(0,t.jsx)(b.Z,{children:"권장 근무시간"}),(0,t.jsxs)(b.Z,{align:"right",children:[null==z?void 0:null===(i=z.body)||void 0===i?void 0:i.refWorkTime,"시간"]}),(0,t.jsx)(b.Z,{children:"최대 근무시간"}),(0,t.jsxs)(b.Z,{align:"right",children:[null==z?void 0:null===(e=z.body)||void 0===e?void 0:e.maxWorkTime,"시간"]}),(0,t.jsx)(b.Z,{children:"최소 근무시간"}),(0,t.jsxs)(b.Z,{align:"right",children:[null==z?void 0:null===(n=z.body)||void 0===n?void 0:n.minWorkTime,"시간"]})]}),(0,t.jsx)(O.Z,{}),(0,t.jsx)(M.Z,{color:"success",sx:{borderRadius:16,height:8},value:(null==z?void 0:null===(r=z.body)||void 0===r?void 0:r.workTimePercent)||0,valueBuffer:100,variant:"buffer"}),(0,t.jsxs)(v.Z,{display:"grid",gridTemplateColumns:"150px 1fr",children:[(0,t.jsx)(b.Z,{fontWeight:"bold",children:"총 근무시간"}),(0,t.jsx)(b.Z,{align:"right",fontWeight:"bold",children:L(null==z?void 0:null===(o=z.body)||void 0===o?void 0:o.workedTime,null===(l=z.body)||void 0===l?void 0:l.homeWorkTime).text}),(0,t.jsx)(b.Z,{children:"누적 근무시간"}),(0,t.jsx)(b.Z,{align:"right",children:L(null==z?void 0:null===(c=z.body)||void 0===c?void 0:c.workedTime).text}),(0,t.jsx)(b.Z,{children:"재택 근무시간"}),(0,t.jsxs)(b.Z,{align:"right",children:[(null==z?void 0:null===(h=z.body)||void 0===h?void 0:h.homeWorkTime)||0,"시간"]}),(0,t.jsx)(b.Z,{children:"잔여 근무시간 (최대)"}),(0,t.jsx)(b.Z,{align:"right",children:L(null==z?void 0:null===(x=z.body)||void 0===x?void 0:x.remainWorkTime,-1*((null==z?void 0:null===(u=z.body)||void 0===u?void 0:u.homeWorkTime)||0)).text}),(0,t.jsx)(b.Z,{children:"잔여 근무시간 (최소)"}),(0,t.jsx)(b.Z,{align:"right",children:L(null==z?void 0:null===(j=z.body)||void 0===j?void 0:j.remainWorkTime,-1*((null==z?void 0:null===(g=z.body)||void 0===g?void 0:g.homeWorkTime)||0),-((((null==z?void 0:null===(Z=z.body)||void 0===Z?void 0:Z.maxWorkTime)||0)-((null==z?void 0:null===(m=z.body)||void 0===m?void 0:m.minWorkTime)||0))*1)).text}),(0,t.jsx)(b.Z,{color:"primary",gridColumn:"1 / span 2",marginTop:2,textAlign:"center",variant:"caption",children:A(L(null==z?void 0:null===(f=z.body)||void 0===f?void 0:f.remainWorkTime,-1*((null==z?void 0:null===(w=z.body)||void 0===w?void 0:w.homeWorkTime)||0),-((((null==z?void 0:null===(k=z.body)||void 0===k?void 0:k.maxWorkTime)||0)-((null==z?void 0:null===(W=z.body)||void 0===W?void 0:W.minWorkTime)||0))*1)))})]}),(0,t.jsx)(O.Z,{}),(0,t.jsx)(M.Z,{color:"warning",sx:{borderRadius:16,height:8},value:(null==z?void 0:null===(T=z.body)||void 0===T?void 0:T.overWorkTimePercent)||0,valueBuffer:100,variant:"buffer"}),(0,t.jsxs)(v.Z,{display:"grid",gridTemplateColumns:"120px 1fr",children:[(0,t.jsx)(b.Z,{children:"시간 외 근무시간"}),(0,t.jsx)(b.Z,{align:"right",children:L(null==z?void 0:null===(I=z.body)||void 0===I?void 0:I.totalOverTime).text}),(0,t.jsx)(b.Z,{children:"평일 연장"}),(0,t.jsx)(b.Z,{align:"right",children:L(null==z?void 0:null===(C=z.body)||void 0===C?void 0:C.dayOverTime).text}),(0,t.jsx)(b.Z,{children:"평일 야간"}),(0,t.jsx)(b.Z,{align:"right",children:L(null==z?void 0:null===(K=z.body)||void 0===K?void 0:K.dayNightOverTime).text}),(0,t.jsx)(b.Z,{children:"휴일 근무"}),(0,t.jsx)(b.Z,{align:"right",children:L(null==z?void 0:null===(E=z.body)||void 0===E?void 0:E.holydayWorkTime).text}),(0,t.jsx)(b.Z,{children:"휴일 연장"}),(0,t.jsx)(b.Z,{align:"right",children:L(null==z?void 0:null===(P=z.body)||void 0===P?void 0:P.holydayOverTime).text}),(0,t.jsx)(b.Z,{children:"휴일 야간"}),(0,t.jsx)(b.Z,{align:"right",children:L(null==z?void 0:null===(N=z.body)||void 0===N?void 0:N.holydayNightOverTime).text})]})]}):(0,t.jsx)(p.Z,{alignItems:"center",justifyContent:"center",width:"100%",children:(0,t.jsx)(v.Z,{height:150,width:150,children:(0,t.jsx)(R.Z,{iconName:"loading"})})}),(0,t.jsxs)(S.Z,{severity:"warning",children:[(0,t.jsx)(_.Z,{children:"주의"}),(0,t.jsxs)(p.Z,{children:[(0,t.jsx)(b.Z,{variant:"caption",children:"재택근무, 연차와 같이 근무시간이 인정되는 경우, 인사팀을 통해 일괄 등록되고 있습니다."}),(0,t.jsxs)(b.Z,{variant:"caption",children:["당월의 경우, ",(0,t.jsx)("b",{children:"해당 시스템에서 별도로 재택근무 일자를 확인하여 추가로 산정(일 당 8시간)"}),"해주지만, 실제 근무시간과 다소 차이가 있을 수 있으니, 계산 시 참고하시기 바랍니다."]}),(0,t.jsx)(b.Z,{variant:"caption",children:"연차의 경우, JADE에 반영되기 이전까지 위 시간에 반영되지 않습니다."})]})]})]})},B=n(9776),L=function(){return(0,t.jsxs)(l.Z,{name:"HomeTemplate",children:[(0,t.jsx)(B.Z,{mode:"preview"}),(0,t.jsx)(N,{}),(0,t.jsx)(z,{})]})};function A(){return(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(r.Z,{title:"홈",url:"/home"}),(0,t.jsx)(L,{})]})}}},function(i){i.O(0,[296,928,664,181,260,893,831,73,338,412,227,774,888,179],function(){return i(i.s=7183)}),_N_E=i.O()}]);