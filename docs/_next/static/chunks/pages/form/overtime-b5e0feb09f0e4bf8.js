(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[372],{244:function(e,t,n){"use strict";var a=n(4836);t.Z=void 0;var i=a(n(4938)),r=n(5893),l=(0,i.default)([(0,r.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"0"),(0,r.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime");t.Z=l},4918:function(e,t,n){"use strict";var a=n(4836);t.Z=void 0;var i=a(n(4938)),r=n(5893),l=(0,i.default)((0,r.jsx)("path",{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"}),"CalendarToday");t.Z=l},2109:function(e,t,n){"use strict";var a=n(4836);t.Z=void 0;var i=a(n(4938)),r=n(5893),l=(0,i.default)((0,r.jsx)("path",{d:"M14 6v15H3v-2h2V3h9v1h5v15h2v2h-4V6h-3zm-4 5v2h2v-2h-2z"}),"MeetingRoom");t.Z=l},4114:function(e,t,n){"use strict";var a=n(4836);t.Z=void 0;var i=a(n(4938)),r=n(5893),l=(0,i.default)((0,r.jsx)("path",{d:"M11 11h-1v2h2v-1l9.73 9.73L20.46 23 14 16.54V21H3v-2h2V7.54l-4-4 1.27-1.27L11 11zm3 .49L5.51 3H14v1h5v12.49l-2-2V6h-3v5.49z"}),"NoMeetingRoom");t.Z=l},8791:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/overtime",function(){return n(4159)}])},6270:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(5893),i=n(413),r=n(3223),l=function(e){let{onChange:t,options:n,...l}=e,s=e=>{if(r.Sz.dateTimeWrite.test(e.currentTarget.value)){let n=r.Sz.dateTimeWrite.exec(e.currentTarget.value);n&&(e.currentTarget.value="".concat(n[1],":").concat(n[2]))}else r.Sz.dateTimeDelete.test(e.currentTarget.value)&&(e.currentTarget.value=e.currentTarget.value.replace(":",""));t&&t(e)};return(0,a.jsx)(i.Z,{inputProps:{inputMode:"numeric"},options:{onChange:s,...n},...l})}},6142:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(5893),i=n(5343),r=n(2631),l=n(8316),s=n(6541),o=n(7536),d=function(e){var t,n;let{name:d,error:u,helperText:c,...m}=e,{formState:v,control:p}=(0,o.Gc)();return(0,a.jsxs)(i.Z,{"data-component":"FormSelect",fullWidth:m.fullWidth,children:[(0,a.jsx)(l.Z,{error:u||void 0!==v.errors[d],required:!0,children:m.label}),(0,a.jsx)(o.Qr,{control:p,name:d,render(e){let{field:t}=e;return(0,a.jsx)(s.Z,{...t,...m})}}),(0,a.jsx)(r.Z,{error:u||void 0!==v.errors[d],children:(null===(t=v.errors[d])||void 0===t?void 0:null===(n=t.message)||void 0===n?void 0:n.toString())||c})]})}},3873:function(e,t,n){"use strict";var a=n(4839);t.Z=a.Z},4159:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var a=n(5893),i=n(4626),r=n(9958),l=n(1500),s=n(1901),o=n(4794),d=n(413),u=n(6270),c=n(1254),m=n(5865),v=n(3223),p=n(1955),h=n(3017),Z=n(1484),x=n(6142),j=n(3873),f=n(244),T=n(8201),y=n(6540),g=n(3147),w=n(4918),V=n(4603),b=n(2109),z=n(4114),k=n(8570),C=n(2741),P=n(8391),I=n(4225),A=n(4373),S=n(9041),W=n(60),_=n(9144),q=n(7836),M=n(9630),O=n(7294),D=n(7536),H=n(8767),K=n(4480),L=function(){var e,t;let n=(0,D.cI)({defaultValues:{endType:2,startType:2}}),i=(0,H.useQueryClient)(),r=(0,K.Zl)(c.Cw),l=(0,K.Zl)(c.zK),L=(0,K.Zl)(c.fU),{data:E}=p.Z.useUserInfo(),{data:N,isSuccess:U}=p.Z.useGetCalendar({month:(0,m.K0)(n.watch("date")).month.text,year:(0,m.K0)(n.watch("date")).year.toString()}),{data:F,refetch:R}=p.Z.useGetApplUserList("overtime"),G=p.Z.usePostOvertimeForm({onMutate(e){l({children:"연장근무 신청 ".concat(e.openApiJadeOvertimeFormProps.length,"건 등록 중"),open:!0})},onSettled(){l(void 0)},onSuccess(){var e;let t=null===(e=n.getValues("list"))||void 0===e?void 0:e.length;n.reset(),R(),i.invalidateQueries(["jade","getApplList"]),L({children:(0,a.jsx)(_.Z,{children:(0,a.jsxs)(M.Z,{variant:"caption",children:[t,"건의 연장근무 신청이 완료됐습니다."]})}),severity:"success",title:"연장근무 신청 완료"})}});(0,O.useEffect)(()=>{var e;let t=null==N?void 0:null===(e=N.body)||void 0===e?void 0:e.calendarItems.flat(),a=null==t?void 0:t.find(e=>{let{ymd:t}=e;return t.milliseconds===new Date(n.watch("date")).getTime()});n.setValue("worktype",(null==a?void 0:a.workType.code)||9900)},[N,n.watch("date")]),(0,O.useEffect)(()=>{n.setValue("to",(null==F?void 0:F.body)||[])},[F]);let Q=(0,O.useMemo)(()=>{let{year:e,month:t,day:n}=(0,m.K0)();return"".concat(e,"-").concat(t.text,"-").concat(n.text)},[]),J=(0,O.useCallback)(e=>{if(U){var t;let n=null===(t=N.body)||void 0===t?void 0:t.calendarItems.flat();return null==n?void 0:n.find(t=>{let{ymd:n}=t;return n.milliseconds===new Date(e).getTime()})}},[N,U]),X=(0,O.useCallback)(e=>{var t;let a=J(n.getValues("date")),i="startTime"===e?null==a?void 0:a.startTime:null==a?void 0:a.endTime,r=(0,m.K0)(null==i?void 0:null===(t=i.time)||void 0===t?void 0:t.milliseconds);return(null==i?void 0:i.time)?"".concat(r.hour.text,":").concat(r.minute.text):""},[N]),B=()=>{let e=n.getValues("list");if(!e||0===e.length)return;let t=null==e?void 0:e.map(e=>{var t,n;let a=(0,m.K0)("".concat(e.date,"T").concat(e.startTime)),i=(0,m.K0)("".concat(e.date,"T").concat(e.endTime));return{applUserList:e.to.map(e=>{let{id:t}=e;return t}),completeRefUserList:null===(t=e.ccc)||void 0===t?void 0:t.map(e=>{let{id:t}=e;return t}),date:{day:a.day.value,month:a.month.value,year:a.year},endTime:{hour:i.hour.value,minute:i.minute.value,type:e.endType||2},reason:e.reason,refUserList:null===(n=e.cc)||void 0===n?void 0:n.map(e=>{let{id:t}=e;return t}),startTime:{hour:a.hour.value,minute:a.minute.value,type:e.startType||2},workType:{code:e.worktype}}});G.mutate({openApiJadeOvertimeFormProps:t})},Y=()=>{r({body:"연장근무를 신청하시겠습니까?",confirm:{icon:(0,a.jsx)(y.Z,{}),onClick(){B(),r(void 0)},text:"신청"},title:"연장근무 신청",type:"info"})},$=(0,O.useCallback)(e=>{let t=n.getValues("list")||[],a=(0,m.K0)(e.date),i={cc:e.cc,ccc:e.ccc,date:e.date,endTime:e.endTime,endType:e.endType,reason:e.reason,rowDate:"".concat(e.date," (").concat(a.weekday.text,")"),rowImages:e.to.map(e=>e.id),rowTitle:"연장근무 신청 (".concat(e.startTime," ~ ").concat(e.endTime,")"),startTime:e.startTime,startType:e.startType,to:e.to,worktype:e.worktype};t&&(t=t.filter(e=>{let{date:t}=e;return t!==i.date}));let r=[...t,i].sort((e,t)=>new Date(e.date).getTime()-new Date(t.date).getTime());n.setValue("list",r)},[n,G]),ee=(0,O.useCallback)(e=>{n.setValue("cc",e.cc),n.setValue("ccc",e.ccc),n.setValue("date",e.date),n.setValue("reason",e.reason),n.setValue("startType",e.startType),n.setValue("startTime",e.startTime),n.setValue("endType",e.endType),n.setValue("endTime",e.endTime),n.setValue("to",e.to),n.setValue("worktype",e.worktype)},[n]),et=(0,O.useCallback)(e=>{let t=n.getValues("list")||[],a=t.filter(t=>t.date!==e.date);n.setValue("list",a)},[n]),en=(0,O.useCallback)(e=>{let t=n.getValues("startType"),a=n.getValues("endType"),i=n.getValues("startTime"),r=new Date("1970-01-0".concat(t,"T").concat(i,":00")),l=new Date("1970-01-0".concat(a,"T").concat(e,":00"));return r.getTime()<l.getTime()?void 0:"퇴근시간은 출근시간보다 늦어야합니다."},[n]);return(0,a.jsx)(h.Z,{icon:(0,a.jsx)(k.Z,{color:"primary"}),name:"OverTimeBox",title:"연장근무 신청",children:(0,a.jsx)(s.Z,{form:n,onSubmit:$,children:(0,a.jsxs)(_.Z,{spacing:4,children:[(0,a.jsx)(_.Z,{direction:"row",justifyContent:"end",spacing:2,children:(0,a.jsx)(I.Z,{disabled:0===(n.watch("to")||[]).length,startIcon:(0,a.jsx)(y.Z,{}),type:"submit",variant:"outlined",children:"신청서 큐 등록"})}),(0,a.jsxs)(o.Z,{direction:"row",mobileProps:{direction:void 0},point:"sm",spacing:4,children:[(0,a.jsx)(q.Z,{label:"이름",name:"name",size:"small",value:(null==E?void 0:null===(e=E.body)||void 0===e?void 0:e.name)||"",InputProps:{readOnly:!0,startAdornment:(0,a.jsx)(S.Z,{position:"start",children:(0,a.jsx)(T.Z,{})})},fullWidth:!0}),(0,a.jsx)(d.Z,{defaultValue:Q,helperText:"".concat(Q,"부터 선택 가능"),label:"날짜",name:"date",size:"small",type:"date",InputProps:{inputProps:{min:Q},startAdornment:(0,a.jsx)(S.Z,{position:"start",children:(0,a.jsx)(g.Z,{})})},options:{min:{message:"".concat(Q," 이전 날짜는 입력할 수 없습니다."),value:Q},pattern:{message:"유효한 날짜를 입력해주세요.",value:v.Sz.yyyymmddDash},required:{message:"날짜를 입력해주세요.",value:!0},validate:{holiday(e){var t;return(null===(t=J(e))||void 0===t?void 0:t.holiday)?"휴일은 선택할 수 없습니다.":void 0}}},fullWidth:!0,required:!0})]}),(0,a.jsxs)(o.Z,{direction:"row",mobileProps:{direction:void 0},point:"sm",spacing:4,children:[(0,a.jsx)(q.Z,{label:"출근",size:"small",value:X("startTime"),InputProps:{readOnly:!0,startAdornment:(0,a.jsx)(S.Z,{position:"start",children:(0,a.jsx)(f.Z,{})})},fullWidth:!0}),(0,a.jsx)(q.Z,{label:"퇴근",size:"small",value:X("endTime"),InputProps:{readOnly:!0,startAdornment:(0,a.jsx)(S.Z,{position:"start",children:(0,a.jsx)(f.Z,{})})},fullWidth:!0})]}),(0,a.jsx)(q.Z,{label:"근무 유형",name:"workType",size:"small",value:(null===(t=J(n.watch("date")))||void 0===t?void 0:t.dayName)||"",InputProps:{readOnly:!0,startAdornment:(0,a.jsx)(S.Z,{position:"start",children:(0,a.jsx)(w.Z,{})})},fullWidth:!0}),(0,a.jsx)(A.Z,{}),(0,a.jsxs)(o.Z,{direction:"row",mobileProps:{direction:void 0},point:"sm",spacing:4,children:[(0,a.jsxs)(x.Z,{defaultValue:2,label:"출근 타입",name:"startType",size:"small",startAdornment:(0,a.jsx)(S.Z,{position:"start",children:(0,a.jsx)(b.Z,{})}),fullWidth:!0,required:!0,children:[(0,a.jsx)(W.Z,{value:"2",children:"당일"}),(0,a.jsx)(W.Z,{value:"3",children:"익일"})]}),(0,a.jsx)(u.Z,{defaultValue:"09:30",label:"출근시간",name:"startTime",size:"small",InputProps:{startAdornment:(0,a.jsx)(S.Z,{position:"start",children:(0,a.jsx)(f.Z,{})})},options:{pattern:{message:"유효한 시간을 입력해주세요.",value:v.Sz.hhmm},required:{message:"시간을 입력해주세요.",value:!0}},fullWidth:!0,required:!0})]}),(0,a.jsxs)(o.Z,{direction:"row",mobileProps:{direction:void 0},point:"sm",spacing:4,children:[(0,a.jsxs)(x.Z,{defaultValue:2,label:"퇴근 타입",name:"endType",size:"small",startAdornment:(0,a.jsx)(S.Z,{position:"start",children:(0,a.jsx)(z.Z,{})}),fullWidth:!0,required:!0,children:[(0,a.jsx)(W.Z,{value:"2",children:"당일"}),(0,a.jsx)(W.Z,{value:"3",children:"익일"})]}),(0,a.jsx)(u.Z,{defaultValue:"18:30",label:"퇴근시간",name:"endTime",size:"small",InputProps:{startAdornment:(0,a.jsx)(S.Z,{position:"start",children:(0,a.jsx)(f.Z,{})})},options:{pattern:{message:"유효한 시간을 입력해주세요.",value:v.Sz.hhmm},required:{message:"시간을 입력해주세요.",value:!0},validate:{time:en}},fullWidth:!0,required:!0})]}),(0,a.jsx)(d.Z,{defaultValue:"연장근무 소요로 인한 연장근무 신청",label:"사유",minRows:2,name:"reason",size:"small",InputProps:{startAdornment:(0,a.jsx)(S.Z,{position:"start",children:(0,a.jsx)(V.Z,{})})},options:{required:{message:"사유를 입력해주세요.",value:!0}},multiline:!0,required:!0}),(0,a.jsx)(A.Z,{}),(0,a.jsx)(j.Z,{}),(0,a.jsx)(A.Z,{}),(0,a.jsx)(_.Z,{direction:"row",justifyContent:"end",spacing:2,children:(0,a.jsx)(I.Z,{disabled:0===(n.watch("to")||[]).length,startIcon:(0,a.jsx)(y.Z,{}),type:"submit",variant:"outlined",children:"신청서 큐 등록"})}),(0,a.jsx)(Z.Z,{list:n.watch("list"),onDeleteClick:et,onSelectClick:ee}),(0,a.jsx)(_.Z,{direction:"row",justifyContent:"end",spacing:2,children:(0,a.jsx)(I.Z,{disabled:0===(n.watch("list")||[]).length,startIcon:(0,a.jsx)(y.Z,{}),type:"button",variant:"outlined",onClick:Y,children:"등록"})}),(0,a.jsxs)(C.Z,{severity:"info",children:[(0,a.jsx)(P.Z,{children:"안내"}),(0,a.jsx)(_.Z,{children:(0,a.jsx)(M.Z,{variant:"caption",children:"휴일 연장 근무 신청은 지원하지 않습니다."})})]})]})})})},E=function(){return(0,a.jsx)(l.Z,{name:"OverTimeTemplate",children:(0,a.jsx)(L,{})})};function N(){return(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(i.Z,{title:"연장근무 신청",url:"/form/overtime"}),(0,a.jsx)(E,{})]})}}},function(e){e.O(0,[296,743,664,437,260,836,536,633,132,849,227,273,774,888,179],function(){return e(e.s=8791)}),_N_E=e.O()}]);