(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{7183:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return n(9152)}])},9152:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return Q}});var l=n(5893),o=n(4626),r=n(2320),t=n(7412),s=n(9741),c=n(1254),d=n(5865),a=n(1955),h=n(3017),x=n(244),j=n(1671),Z=n(6638),u=n(4270),g=n(6547),v=n(2097),m=n(1953),b=n(9144),p=n(1893),f=n(9630),y=n(7294),k=function(e){let{start:i,end:n,total:o,loading:r}=e,{palette:{mode:t,grey:s,primary:c,warning:a,error:h}}=(0,v.Z)(),k={height:10,radius:100},w={dinner:(0,d.WL)(.8846153846153846*100,2),end:(0,d.WL)(.6923076923076923*100,2)},W=(0,y.useMemo)(()=>(0,d.K0)(new Date(1e3*(0,d.NB)(i))),[i]),T=(0,y.useMemo)(()=>(0,d.K0)(new Date(((0,d.NB)(i)+10800-1800)*1e3)),[i]),I=(0,y.useMemo)(()=>"".concat(W.hour.text,":").concat(W.minute.text),[W]),C=(0,y.useMemo)(()=>"".concat(T.hour.text,":").concat(T.minute.text),[T]),N=(0,y.useCallback)(()=>{if(i&&"--:--"!==i){if(n&&"--:--"!==n){if(23400>(0,d.NB)(n))return 100;let e=((0,d.NB)(n)-(0,d.NB)(i))*100/46800;return(0,d.WL)(e,2)}let l=(0,d.K0)();if(23400>(0,d.NB)("".concat(l.hour.text,":").concat(l.month.text)))return 100;let o=((0,d.NB)("".concat(l.hour.text,":").concat(l.minute.text))-(0,d.NB)(i))*100/46800;return(0,d.WL)(o,2)}return 0},[i,n]);return(0,l.jsxs)(b.Z,{"data-component":"TimeGraph",direction:"column",spacing:5,children:[(0,l.jsx)(m.Z,{position:"relative",children:(0,l.jsxs)(b.Z,{borderRadius:k.radius,direction:"row",height:k.height,overflow:"hidden",sx:{backgroundImage:"linear-gradient(to right, ".concat(c.light," 0%, ").concat(c.dark," ").concat(w.end,"%, ").concat(a.light," ").concat(w.end,"%, ").concat(a.main," ").concat(w.dinner,"%, ").concat(h.light," ").concat(w.dinner,"%, ").concat(h.dark," 99.8%, gainsboro)")},width:"100%",children:[(0,l.jsx)(m.Z,{height:k.height,left:0,position:"absolute",top:0,width:"100%",sx:{animation:"progress 1s linear infinite",backgroundImage:"linear-gradient(45deg, hsla(0, 0%, 100%, 0.15) 25%, transparent 0, transparent 50%, hsla(0, 0%, 100%, 0.15) 0, hsla(0, 0%, 100%, 0.15) 75%, transparent 0, transparent)",backgroundSize:"1rem 1rem"}}),(0,l.jsx)(m.Z,{bgcolor:"transparent",height:k.height,sx:{transition:"1s cubic-bezier(0.25, 0.46, 0.45, 0.94)"},width:r?"0%":"".concat(N(),"%")}),(0,l.jsx)(m.Z,{bgcolor:"light"===t?s[200]:"black",flex:1,height:k.height}),(0,l.jsx)(p.Z,{title:I,arrow:!0,children:(0,l.jsx)(m.Z,{bgcolor:"white",borderRadius:"50%",boxShadow:"0px 0px 3px grey inset",display:N()<w.end?"none":"initial",height:k.height+5,left:"calc(".concat(w.end,"% - 7px)"),position:"absolute",top:-3,width:k.height+5,zIndex:2})}),(0,l.jsx)(p.Z,{title:C,arrow:!0,children:(0,l.jsx)(m.Z,{bgcolor:"white",borderRadius:"50%",boxShadow:"0px 0px 3px grey inset",display:N()<w.dinner?"none":"initial",height:k.height+5,left:"calc(".concat(w.dinner,"% - 7px)"),position:"absolute",top:-3,width:k.height+5,zIndex:2})})]})}),(0,l.jsxs)(b.Z,{alignSelf:"center",direction:"column",maxWidth:300,spacing:2,width:"100%",children:[(0,l.jsx)(b.Z,{children:(0,l.jsxs)(b.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",children:[(0,l.jsxs)(b.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,l.jsx)(x.Z,{color:"primary"}),(0,l.jsx)(f.Z,{alignItems:"center",children:"근무시간"})]}),(0,l.jsx)(f.Z,{fontWeight:"bold",variant:"h5",children:o})]})}),(0,l.jsxs)(b.Z,{children:[(0,l.jsxs)(b.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",children:[(0,l.jsxs)(b.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,l.jsx)(j.Z,{color:"primary"}),(0,l.jsx)(f.Z,{alignItems:"center",children:"출근"})]}),(0,l.jsx)(f.Z,{fontWeight:"bold",variant:"h5",children:i})]}),(0,l.jsxs)(b.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",children:[(0,l.jsxs)(b.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,l.jsx)(Z.Z,{color:"primary"}),(0,l.jsx)(f.Z,{alignItems:"center",children:"퇴근"})]}),(0,l.jsx)(f.Z,{fontWeight:"bold",variant:"h5",children:n})]})]}),(0,l.jsxs)(b.Z,{children:[(0,l.jsxs)(b.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",children:[(0,l.jsxs)(b.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,l.jsx)(g.Z,{color:"primary"}),(0,l.jsx)(f.Z,{alignItems:"center",children:"정시퇴근"})]}),(0,l.jsx)(f.Z,{fontWeight:"bold",variant:"h5",children:i&&"--:--"!==i?I:"--:--"})]}),(0,l.jsxs)(b.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",children:[(0,l.jsxs)(b.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,l.jsx)(u.Z,{color:"primary"}),(0,l.jsx)(f.Z,{alignItems:"center",children:"저녁식대"})]}),(0,l.jsx)(f.Z,{fontWeight:"bold",variant:"h5",children:i&&"--:--"!==i?C:"--:--"})]})]})]})]})},w=n(8384),W=n(594),T=n(1885),I=n(9452),C=n(1107),N=n(1812),B=n(2741),_=n(8391),O=n(8767),S=n(4480),D=function(){var e,i,n;let o=(0,v.Z)(),r=(0,O.useQueryClient)(),t=(0,S.Zl)(c.Cw),{data:s,isLoading:x,refetch:j}=a.Z.useTime(),Z={onMutate(){t(void 0)},onSuccess(){j()}},u=a.Z.usePostWorkIn(Z),g=a.Z.usePostWorkOut(Z),m=(0,y.useCallback)(()=>{t({body:(0,l.jsxs)(b.Z,{spacing:2,children:[(0,l.jsx)(f.Z,{children:"출근 시간을 등록하시겠습니까?"}),(0,l.jsx)(f.Z,{color:o.palette.error.main,variant:"caption",children:"※ 중복해서 등록할 경우, 가장 마지막에 등록된 시간으로 반영됩니다."})]}),close:{icon:(0,l.jsx)(W.Z,{})},confirm:{icon:(0,l.jsx)(w.Z,{}),onClick(){u.mutateAsync()},text:"등록"},title:"출근 등록",type:"info"})},[t,o]),p=(0,y.useCallback)(()=>{t({body:(0,l.jsxs)(b.Z,{spacing:2,children:[(0,l.jsx)(f.Z,{children:"퇴근 시간을 등록하시겠습니까?"}),(0,l.jsxs)(b.Z,{children:[(0,l.jsx)(f.Z,{color:o.palette.error.main,variant:"caption",children:"※ 중복해서 등록할 경우, 가장 마지막에 등록된 시간으로 반영됩니다."}),(0,l.jsx)(f.Z,{color:o.palette.success.main,variant:"caption",children:"※ 22:29가 넘어도 퇴근 등록이 가능합니다."})]})]}),close:{icon:(0,l.jsx)(W.Z,{})},confirm:{icon:(0,l.jsx)(w.Z,{}),onClick(){g.mutateAsync(),r.invalidateQueries(["jade","getWorkTimeDetailInfo",(0,d.K0)().year.toString(),(0,d.K0)().month.text])},text:"등록"},title:"퇴근 등록",type:"info"})},[t,o]);return(0,l.jsxs)(h.Z,{icon:(0,l.jsx)(C.Z,{color:"primary"}),name:"HomeBox",title:"출퇴근 시간 등록",children:[(0,l.jsx)(k,{end:null==s?void 0:null===(e=s.body)||void 0===e?void 0:e.workOutTime,loading:x,start:null==s?void 0:null===(i=s.body)||void 0===i?void 0:i.workInTime,total:null==s?void 0:null===(n=s.body)||void 0===n?void 0:n.workingTime}),(0,l.jsxs)(b.Z,{direction:"row",spacing:4,children:[(0,l.jsx)(N.Z,{loading:u.isLoading,size:"large",startIcon:(0,l.jsx)(I.Z,{}),variant:"contained",fullWidth:!0,onClick:m,children:"출근"}),(0,l.jsx)(N.Z,{loading:g.isLoading,size:"large",startIcon:(0,l.jsx)(T.Z,{}),variant:"contained",fullWidth:!0,onClick:p,children:"퇴근"})]}),(0,l.jsxs)(B.Z,{severity:"info",children:[(0,l.jsx)(_.Z,{children:"안내"}),(0,l.jsxs)(b.Z,{children:[(0,l.jsxs)(f.Z,{variant:"caption",children:["출/퇴근을 중복으로 등록할 경우, ",(0,l.jsx)("b",{children:"가장 마지막에 등록된 시간으로 기록"}),"됩니다."]}),(0,l.jsx)(f.Z,{variant:"caption",children:"연장 근무 신청을 하지 않은채 22시 29분을 넘어도 00시 이전까지 퇴근 등록이 가능합니다. (최대 22시 29분으로 등록됨)"}),(0,l.jsx)(f.Z,{variant:"caption",children:"익일(새벽) 퇴근 신청은 아직 지원하지 않습니다. (하려면 익일 퇴근 해야해요...)"})]})]})]})},E=n(923),K=n(5158),P=n(4373),z=n(2841),L=n(2416),R=function(){return(0,l.jsx)(h.Z,{"data-component":"TodoBox",icon:(0,l.jsx)(E.Z,{color:"primary"}),title:"기능 리스트",children:(0,l.jsxs)(b.Z,{spacing:2,children:[(0,l.jsx)(f.Z,{fontWeight:"bold",children:"홈"}),(0,l.jsxs)(L.Z,{children:[(0,l.jsx)(z.Z,{control:(0,l.jsx)(K.Z,{}),label:"근무 시간 현황 (2022)",checked:!0}),(0,l.jsx)(z.Z,{control:(0,l.jsx)(K.Z,{}),label:"출/퇴근 등록 (2022)",checked:!0}),(0,l.jsx)(z.Z,{control:(0,l.jsx)(K.Z,{}),label:"근무 시간 상세 정보 (2023.03.20)",checked:!0})]}),(0,l.jsx)(P.Z,{}),(0,l.jsx)(f.Z,{fontWeight:"bold",children:"근태 현황"}),(0,l.jsxs)(L.Z,{children:[(0,l.jsx)(z.Z,{control:(0,l.jsx)(K.Z,{}),label:"캘린더 등록 (2022)",checked:!0}),(0,l.jsx)(z.Z,{control:(0,l.jsx)(K.Z,{}),label:"근무 계획 등록 (2022)",checked:!0})]}),(0,l.jsx)(P.Z,{}),(0,l.jsx)(f.Z,{fontWeight:"bold",children:"신청서 등록"}),(0,l.jsxs)(L.Z,{children:[(0,l.jsx)(z.Z,{control:(0,l.jsx)(K.Z,{}),label:"조직도 (2023)",checked:!0}),(0,l.jsx)(z.Z,{control:(0,l.jsx)(K.Z,{}),label:"신청서 일괄 등록 로직(2023.03.11)",checked:!0}),(0,l.jsx)(z.Z,{control:(0,l.jsx)(K.Z,{}),label:"연차 신청서 (2023.04.08)",checked:!0}),(0,l.jsx)(z.Z,{checked:!1,control:(0,l.jsx)(K.Z,{}),label:"기타 연차 신청서"}),(0,l.jsx)(z.Z,{control:(0,l.jsx)(K.Z,{}),label:"출퇴근시각 등록 요청 (2023.03.25)",checked:!0}),(0,l.jsx)(z.Z,{control:(0,l.jsx)(K.Z,{}),label:"연장근무 신청 (2023.03.23)",checked:!0}),(0,l.jsx)(z.Z,{control:(0,l.jsx)(K.Z,{}),label:"재택근무 변경/취소 신청 (2023.03.19) <-- 추가 개선 여지 있음",checked:!0}),(0,l.jsx)(z.Z,{control:(0,l.jsx)(K.Z,{}),label:"신청 내역 (2023.04.16)",checked:!0}),(0,l.jsx)(z.Z,{control:(0,l.jsx)(K.Z,{}),label:"신청 내역 취소 기능...? (2023.04.17)",checked:!0})]}),(0,l.jsx)(P.Z,{}),(0,l.jsx)(f.Z,{fontWeight:"bold",children:"마이페이지"}),(0,l.jsx)(L.Z,{children:(0,l.jsx)(z.Z,{control:(0,l.jsx)(K.Z,{}),label:"JADE 정보 (2022)",checked:!0})}),(0,l.jsx)(P.Z,{}),(0,l.jsx)(f.Z,{fontWeight:"bold",children:"관리자 메뉴"}),(0,l.jsx)(L.Z,{children:(0,l.jsx)(z.Z,{checked:!1,control:(0,l.jsx)(K.Z,{}),label:"그건 이제 니가 만들어야지 <-- 필요성 검토해야함"})})]})})},M=n(2227),A=n(4913),G=n(6070),H=function(){var e,i,n,o,r,t,s,c,x,j,Z,u,g,v,p,k,w,W,T,I,C;let{data:N,isSuccess:O}=a.Z.useGetWorkTimeDetailInfo({month:(0,d.K0)().month.text,year:(0,d.K0)().year.toString()}),S=(0,y.useCallback)(function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e?"".concat(e.hour+8*i,"시간").concat(0===e.minute?"":" ".concat(e.minute,"분")):"0시간"},[]);return(0,l.jsxs)(h.Z,{"data-component":"WorkTimeDetailInfoBox",icon:(0,l.jsx)(A.Z,{color:"primary"}),title:"근무 시간 상세 정보",children:[O?(0,l.jsxs)(b.Z,{alignSelf:"center",maxWidth:300,spacing:2,width:"100%",children:[(0,l.jsxs)(m.Z,{display:"grid",gridTemplateColumns:"120px 1fr",children:[(0,l.jsx)(f.Z,{children:"권장 근무시간"}),(0,l.jsxs)(f.Z,{align:"right",children:[null==N?void 0:null===(e=N.body)||void 0===e?void 0:e.refWorkTime,"시간"]}),(0,l.jsx)(f.Z,{children:"최대 근무시간"}),(0,l.jsxs)(f.Z,{align:"right",children:[null==N?void 0:null===(i=N.body)||void 0===i?void 0:i.maxWorkTime,"시간"]}),(0,l.jsx)(f.Z,{children:"최소 근무시간"}),(0,l.jsxs)(f.Z,{align:"right",children:[null==N?void 0:null===(n=N.body)||void 0===n?void 0:n.minWorkTime,"시간"]})]}),(0,l.jsx)(P.Z,{}),(0,l.jsx)(G.Z,{color:"success",sx:{borderRadius:16,height:8},value:(null==N?void 0:null===(o=N.body)||void 0===o?void 0:o.workTimePercent)||0,valueBuffer:100,variant:"buffer"}),(0,l.jsxs)(m.Z,{display:"grid",gridTemplateColumns:"120px 1fr",children:[(0,l.jsx)(f.Z,{fontWeight:"bold",gridColumn:2,children:"재택 포함"}),(0,l.jsx)(f.Z,{fontWeight:"bold",children:"총 근무시간"}),(0,l.jsx)(f.Z,{align:"right",fontWeight:"bold",children:S(null==N?void 0:null===(r=N.body)||void 0===r?void 0:r.workedTime,null===(t=N.body)||void 0===t?void 0:t.homeWorkTime)}),(0,l.jsx)(f.Z,{children:"누적 근무시간"}),(0,l.jsx)(f.Z,{align:"right",children:S(null==N?void 0:null===(s=N.body)||void 0===s?void 0:s.workedTime)}),(0,l.jsx)(f.Z,{children:"재택 근무시간"}),(0,l.jsxs)(f.Z,{align:"right",children:[8*((null==N?void 0:null===(c=N.body)||void 0===c?void 0:c.homeWorkTime)||0),"시간"]}),(0,l.jsx)(f.Z,{children:"잔여 근무시간"}),(0,l.jsx)(f.Z,{align:"right",children:S(null==N?void 0:null===(x=N.body)||void 0===x?void 0:x.remainWorkTime,-1*((null==N?void 0:null===(j=N.body)||void 0===j?void 0:j.homeWorkTime)||0))})]}),(0,l.jsx)(P.Z,{}),(0,l.jsx)(G.Z,{color:"success",sx:{borderRadius:16,height:8},value:(null==N?void 0:null===(Z=N.body)||void 0===Z?void 0:Z.workTimePercent)||0,valueBuffer:100,variant:"buffer"}),(0,l.jsxs)(m.Z,{display:"grid",gridTemplateColumns:"120px 1fr",children:[(0,l.jsx)(f.Z,{fontWeight:"bold",children:"총 근무시간"}),(0,l.jsx)(f.Z,{align:"right",fontWeight:"bold",children:S(null==N?void 0:null===(u=N.body)||void 0===u?void 0:u.workedTime)}),(0,l.jsx)(f.Z,{children:"누적 근무시간"}),(0,l.jsx)(f.Z,{align:"right",children:S(null==N?void 0:null===(g=N.body)||void 0===g?void 0:g.workedTime)}),(0,l.jsx)(f.Z,{children:"잔여 근무시간"}),(0,l.jsx)(f.Z,{align:"right",children:S(null==N?void 0:null===(v=N.body)||void 0===v?void 0:v.remainWorkTime)})]}),(0,l.jsx)(P.Z,{}),(0,l.jsx)(G.Z,{color:"warning",sx:{borderRadius:16,height:8},value:(null==N?void 0:null===(p=N.body)||void 0===p?void 0:p.overWorkTimePercent)||0,valueBuffer:100,variant:"buffer"}),(0,l.jsxs)(m.Z,{display:"grid",gridTemplateColumns:"120px 1fr",children:[(0,l.jsx)(f.Z,{children:"시간 외 근무시간"}),(0,l.jsx)(f.Z,{align:"right",children:S(null==N?void 0:null===(k=N.body)||void 0===k?void 0:k.totalOverTime)}),(0,l.jsx)(f.Z,{children:"평일 연장"}),(0,l.jsx)(f.Z,{align:"right",children:S(null==N?void 0:null===(w=N.body)||void 0===w?void 0:w.dayOverTime)}),(0,l.jsx)(f.Z,{children:"평일 야간"}),(0,l.jsx)(f.Z,{align:"right",children:S(null==N?void 0:null===(W=N.body)||void 0===W?void 0:W.dayNightOverTime)}),(0,l.jsx)(f.Z,{children:"휴일 근무"}),(0,l.jsx)(f.Z,{align:"right",children:S(null==N?void 0:null===(T=N.body)||void 0===T?void 0:T.holydayWorkTime)}),(0,l.jsx)(f.Z,{children:"휴일 연장"}),(0,l.jsx)(f.Z,{align:"right",children:S(null==N?void 0:null===(I=N.body)||void 0===I?void 0:I.holydayOverTime)}),(0,l.jsx)(f.Z,{children:"휴일 야간"}),(0,l.jsx)(f.Z,{align:"right",children:S(null==N?void 0:null===(C=N.body)||void 0===C?void 0:C.holydayNightOverTime)})]})]}):(0,l.jsx)(b.Z,{alignItems:"center",justifyContent:"center",width:"100%",children:(0,l.jsx)(m.Z,{height:150,width:150,children:(0,l.jsx)(M.Z,{iconName:"loading"})})}),(0,l.jsxs)(B.Z,{severity:"warning",children:[(0,l.jsx)(_.Z,{children:"주의"}),(0,l.jsxs)(b.Z,{children:[(0,l.jsx)(f.Z,{variant:"caption",children:"재택근무 시간의 경우, 인사팀을 통해 매 월 말일에 일괄 등록되고 있습니다."}),(0,l.jsxs)(f.Z,{variant:"caption",children:["당월의 경우, ",(0,l.jsx)("b",{children:"해당 시스템에서 별도로 재택근무 일자를 확인하여 추가로 산정(일 당 8시간)"}),"해주지만, 실제 근무시간과 다소 차이가 있을 수 있으니, 계산 시 참고하시기 바랍니다."]}),(0,l.jsx)(f.Z,{variant:"caption",children:"(ex. 재택근무에도 JADE에 근무시간을 등록할 경우, 시간이 이중으로 산정됨)"})]})]})]})},J=function(){return(0,l.jsxs)(s.Z,{name:"HomeTemplate",children:[(0,l.jsx)(D,{}),(0,l.jsx)(H,{}),(0,l.jsx)(R,{})]})};function Q(){return(0,l.jsxs)(t.Z,{children:[(0,l.jsx)(o.Z,{title:"홈",url:"/home"}),(0,l.jsx)(r.Z,{children:(0,l.jsx)(J,{})})]})}}},function(e){e.O(0,[296,362,417,664,260,108,249,422,338,60,444,774,888,179],function(){return e(e.s=7183)}),_N_E=e.O()}]);