(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[372],{5761:function(e,t,n){"use strict";var i=n(2819);t.Z=void 0;var r=i(n(531)),a=n(1874),l=(0,r.default)([(0,a.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"0"),(0,a.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime");t.Z=l},422:function(e,t,n){"use strict";var i=n(2819);t.Z=void 0;var r=i(n(531)),a=n(1874),l=(0,r.default)((0,a.jsx)("path",{d:"M14 6v15H3v-2h2V3h9v1h5v15h2v2h-4V6h-3zm-4 5v2h2v-2h-2z"}),"MeetingRoom");t.Z=l},5827:function(e,t,n){"use strict";var i=n(2819);t.Z=void 0;var r=i(n(531)),a=n(1874),l=(0,r.default)((0,a.jsx)("path",{d:"M11 11h-1v2h2v-1l9.73 9.73L20.46 23 14 16.54V21H3v-2h2V7.54l-4-4 1.27-1.27L11 11zm3 .49L5.51 3H14v1h5v12.49l-2-2V6h-3v5.49z"}),"NoMeetingRoom");t.Z=l},3691:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/overtime",function(){return n(8745)}])},9591:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(1874),r=n(9445),a=n(7972),l=function(e){let{onChange:t,options:n,...l}=e,s=e=>{if(a.Sz.dateTimeWrite.test(e.currentTarget.value)){let n=a.Sz.dateTimeWrite.exec(e.currentTarget.value);n&&(e.currentTarget.value="".concat(n[1],":").concat(n[2]))}else a.Sz.dateTimeDelete.test(e.currentTarget.value)&&(e.currentTarget.value=e.currentTarget.value.replace(":",""));t&&t(e)};return(0,i.jsx)(r.Z,{inputProps:{inputMode:"numeric"},options:{onChange:s,...n},...l})}},9498:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var i=n(1874),r=n(118),a=n(6521),l=n(8344),s=n(8453),o=n(4813),d=function(e){var t,n;let{name:d,error:c,helperText:u,...m}=e,{formState:p,control:v}=(0,o.Gc)();return(0,i.jsxs)(r.Z,{"data-component":"FormSelect",fullWidth:m.fullWidth,children:[(0,i.jsx)(l.Z,{error:c||void 0!==p.errors[d],required:!0,children:m.label}),(0,i.jsx)(o.Qr,{control:v,name:d,render(e){let{field:t}=e;return(0,i.jsx)(s.Z,{...t,...m})}}),(0,i.jsx)(a.Z,{error:c||void 0!==p.errors[d],children:(null===(t=p.errors[d])||void 0===t?void 0:null===(n=t.message)||void 0===n?void 0:n.toString())||u})]})}},2142:function(e,t,n){"use strict";var i=n(8034);t.Z=i.Z},8745:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var i=n(1874),r=n(8861),a=n(6938),l=n(4035),s=n(1473),o=n(8032),d=n(5048),c=n(6183),u=n(9799),m=n(498),p=n(458),v=n(3057),h=n(7981),x=n(2099),Z=n(2206),j=n(1336),y=n(9918),T=n(4293),f=n(686),g=n(2261),w=n(9953),b=n(4813),V=n(5),k=n(1868),C=function(){let e=(0,b.cI)({defaultValues:{dates:[]}}),t=(0,V.useQueryClient)(),n=(0,k.Zl)(d.Cw),r=(0,k.Zl)(d.zK),a=(0,k.Zl)(d.fU),{data:l,refetch:s}=u.Z.useGetApplUserList("overtime"),C=u.Z.usePostOvertimeForm({onMutate(e){r({children:"연장근무 신청 ".concat(e.openApiJadeOvertimeFormProps.length,"건 등록 중"),open:!0})},onSettled(){r(void 0)},onSuccess(){var n;let r=null===(n=e.getValues("list"))||void 0===n?void 0:n.length;e.reset(),s(),t.invalidateQueries(["jade","getApplList"]),a({children:(0,i.jsx)(f.Z,{children:(0,i.jsxs)(g.Z,{variant:"caption",children:[r,"건의 연장근무 신청이 완료됐습니다."]})}),severity:"success",title:"연장근무 신청 완료"})}});(0,w.useEffect)(()=>{e.setValue("to",(null==l?void 0:l.body)||[])},[l]);let z=()=>{let t=e.getValues("list");if(!t||0===t.length)return;let n=null==t?void 0:t.map(e=>{var t,n;let i=(0,c.K0)("".concat(e.date,"T").concat(e.startTime)),r=(0,c.K0)("".concat(e.date,"T").concat(e.endTime));return{applUserList:e.to.map(e=>{let{id:t}=e;return t}),completeRefUserList:null===(t=e.ccc)||void 0===t?void 0:t.map(e=>{let{id:t}=e;return t}),date:{day:i.day.value,month:i.month.value,year:i.year},endTime:{hour:r.hour.value,minute:r.minute.value,type:e.endType||2},reason:e.reason,refUserList:null===(n=e.cc)||void 0===n?void 0:n.map(e=>{let{id:t}=e;return t}),startTime:{hour:i.hour.value,minute:i.minute.value,type:e.startType||2},workType:e.workType}});C.mutate({openApiJadeOvertimeFormProps:n})},P=(0,w.useCallback)(()=>{n({body:"연장근무를 신청하시겠습니까?",confirm:{icon:(0,i.jsx)(h.Z,{}),onClick(){z(),n(void 0)},text:"신청"},title:"연장근무 신청",type:"info"})},[z,n]),A=(0,w.useCallback)(t=>{let n=e.getValues("list")||[],i=e.getValues("dates"),r=(0,c.K0)(t.date),a=n.filter(e=>e.date!==t.date),l=i.filter(e=>e.ymd.milliseconds!==r.epoch);e.setValue("dates",l),e.setValue("list",a)},[e]),I=(0,w.useCallback)(t=>{if(t.length>10){a({children:(0,i.jsx)(f.Z,{children:(0,i.jsx)(g.Z,{variant:"caption",children:"신청서는 한 번에 10개까지 가능합니다."})}),severity:"error",title:"리스트가 꽉 찼습니다."});return}let n=t.map(e=>{var t;let n=(0,c.K0)(e.ymd.milliseconds),i="".concat(n.year,"-").concat(n.month.text,"-").concat(n.day.text);return{date:i,endTime:"02:00",endType:3,reason:"연장근무 소요로 인한 연장근무 신청",rowDate:"".concat(i," (").concat(n.weekday.text,")"),rowImages:(null==l?void 0:null===(t=l.body)||void 0===t?void 0:t.map(e=>{let{id:t}=e;return t}))||[],rowTitle:"연장근무 신청 (09:30 ~ 익일 02:00)",startTime:"09:30",startType:2,to:(null==l?void 0:l.body)||[],workType:e.workType}});e.setValue("dates",t),e.setValue("list",n)},[e,l,a]);return(0,i.jsx)(m.Z,{icon:(0,i.jsx)(x.Z,{color:"primary"}),name:"EasyOverTimeBox",title:"연장근무 신청",children:(0,i.jsx)(o.Z,{form:e,onSubmit:P,children:(0,i.jsxs)(f.Z,{spacing:4,children:[(0,i.jsx)(f.Z,{alignItems:"center",justifyContent:"center",children:(0,i.jsx)(v.Z,{selects:e.watch("dates"),type:"overtime",onSelect:I})}),(0,i.jsx)(T.Z,{}),(0,i.jsx)(p.Z,{list:e.watch("list"),onDeleteClick:A}),(0,i.jsx)(f.Z,{direction:"row",justifyContent:"end",spacing:2,children:(0,i.jsx)(y.Z,{disabled:0===(e.watch("list")||[]).length,startIcon:(0,i.jsx)(h.Z,{}),type:"submit",variant:"outlined",children:"등록"})}),(0,i.jsxs)(Z.Z,{severity:"info",children:[(0,i.jsx)(j.Z,{children:"안내"}),(0,i.jsx)(f.Z,{children:(0,i.jsx)(g.Z,{variant:"caption",children:"휴일 연장 근무 신청은 지원하지 않습니다."})})]})]})})})},z=n(1004),P=n(9445),A=n(9591),I=n(7972),S=n(9498),O=n(2142),K=n(5761),L=n(4601),W=n(2525),_=n(2773),q=n(3140),D=n(422),M=n(5827),U=n(5706),E=n(2842),F=n(1049),N=function(){var e,t;let n=(0,b.cI)({defaultValues:{endType:2,startType:2}}),r=(0,V.useQueryClient)(),a=(0,k.Zl)(d.Cw),l=(0,k.Zl)(d.zK),s=(0,k.Zl)(d.fU),{data:v}=u.Z.useUserInfo(),{data:C,isSuccess:N}=u.Z.useGetCalendar({month:(0,c.K0)(n.watch("date")).month.text,year:(0,c.K0)(n.watch("date")).year.toString()}),{data:Q,refetch:R}=u.Z.useGetApplUserList("overtime"),G=u.Z.usePostOvertimeForm({onMutate(e){l({children:"연장근무 신청 ".concat(e.openApiJadeOvertimeFormProps.length,"건 등록 중"),open:!0})},onSettled(){l(void 0)},onSuccess(){var e;let t=null===(e=n.getValues("list"))||void 0===e?void 0:e.length;n.reset(),R(),r.invalidateQueries(["jade","getApplList"]),s({children:(0,i.jsx)(f.Z,{children:(0,i.jsxs)(g.Z,{variant:"caption",children:[t,"건의 연장근무 신청이 완료됐습니다."]})}),severity:"success",title:"연장근무 신청 완료"})}}),H=(0,w.useMemo)(()=>{let{year:e,month:t,day:n}=(0,c.K0)();return"".concat(e,"-").concat(t.text,"-").concat(n.text)},[]),J=(0,w.useCallback)(e=>{if(N){var t;let n=null===(t=C.body)||void 0===t?void 0:t.calendarItems.flat();return null==n?void 0:n.find(t=>{let{ymd:n}=t;return n.milliseconds===new Date(e).getTime()})}},[C,N]),B=(0,w.useCallback)(e=>{var t;let i=J(n.getValues("date")),r="startTime"===e?null==i?void 0:i.startTime:null==i?void 0:i.endTime,a=(0,c.K0)(null==r?void 0:null===(t=r.time)||void 0===t?void 0:t.milliseconds);return(null==r?void 0:r.time)?"".concat(a.hour.text,":").concat(a.minute.text):""},[C]),X=()=>{let e=n.getValues("list");if(!e||0===e.length)return;let t=null==e?void 0:e.map(e=>{var t,n;let i=(0,c.K0)("".concat(e.date,"T").concat(e.startTime)),r=(0,c.K0)("".concat(e.date,"T").concat(e.endTime));return{applUserList:e.to.map(e=>{let{id:t}=e;return t}),completeRefUserList:null===(t=e.ccc)||void 0===t?void 0:t.map(e=>{let{id:t}=e;return t}),date:{day:i.day.value,month:i.month.value,year:i.year},endTime:{hour:r.hour.value,minute:r.minute.value,type:e.endType||2},reason:e.reason,refUserList:null===(n=e.cc)||void 0===n?void 0:n.map(e=>{let{id:t}=e;return t}),startTime:{hour:i.hour.value,minute:i.minute.value,type:e.startType||2},workType:e.workType}});G.mutate({openApiJadeOvertimeFormProps:t})},Y=()=>{a({body:"연장근무를 신청하시겠습니까?",confirm:{icon:(0,i.jsx)(h.Z,{}),onClick(){X(),a(void 0)},text:"신청"},title:"연장근무 신청",type:"info"})},$=(0,w.useCallback)(e=>{let t=n.getValues("list")||[];if(t.length>10){s({children:(0,i.jsx)(f.Z,{children:(0,i.jsx)(g.Z,{variant:"caption",children:"신청서는 한 번에 10개까지 가능합니다."})}),severity:"error",title:"리스트가 꽉 찼습니다."});return}let r=(0,c.K0)(e.date),a={cc:e.cc,ccc:e.ccc,date:e.date,endTime:e.endTime,endType:e.endType,reason:e.reason,rowDate:"".concat(e.date," (").concat(r.weekday.text,")"),rowImages:e.to.map(e=>e.id),rowTitle:"연장근무 신청 (".concat(e.startTime," ~ ").concat(e.endTime,")"),startTime:e.startTime,startType:e.startType,to:e.to,workType:e.workType};t=t.filter(e=>{let{date:t}=e;return t!==a.date});let l=[...t,a].sort((e,t)=>new Date(e.date).getTime()-new Date(t.date).getTime());n.setValue("list",l)},[n,G,s]),ee=(0,w.useCallback)(e=>{n.setValue("cc",e.cc),n.setValue("ccc",e.ccc),n.setValue("date",e.date),n.setValue("reason",e.reason),n.setValue("startType",e.startType),n.setValue("startTime",e.startTime),n.setValue("endType",e.endType),n.setValue("endTime",e.endTime),n.setValue("to",e.to),n.setValue("workType",e.workType)},[n]),et=(0,w.useCallback)(e=>{let t=n.getValues("list")||[],i=t.filter(t=>t.date!==e.date);n.setValue("list",i)},[n]),en=(0,w.useCallback)(e=>{let t=n.getValues("startType"),i=n.getValues("endType"),r=n.getValues("startTime"),a=new Date("1970-01-0".concat(t,"T").concat(r,":00")),l=new Date("1970-01-0".concat(i,"T").concat(e,":00"));return a.getTime()<l.getTime()?void 0:"퇴근시간은 출근시간보다 늦어야합니다."},[n]);return(0,w.useEffect)(()=>{var e;n.setValue("workType",(null===(e=J(n.watch("date")))||void 0===e?void 0:e.workType)||{code:9900})},[n,J,n.watch("date")]),(0,w.useEffect)(()=>{n.setValue("to",(null==Q?void 0:Q.body)||[])},[Q]),(0,i.jsx)(m.Z,{icon:(0,i.jsx)(x.Z,{color:"primary"}),name:"OverTimeBox",title:"연장근무 신청",children:(0,i.jsx)(o.Z,{form:n,onSubmit:$,children:(0,i.jsxs)(f.Z,{spacing:4,children:[(0,i.jsx)(f.Z,{direction:"row",justifyContent:"end",spacing:2,children:(0,i.jsx)(y.Z,{disabled:0===(n.watch("to")||[]).length,startIcon:(0,i.jsx)(h.Z,{}),type:"submit",variant:"outlined",children:"신청서 큐 등록"})}),(0,i.jsxs)(z.Z,{direction:"row",mobileProps:{direction:void 0},point:"sm",spacing:4,children:[(0,i.jsx)(F.Z,{label:"이름",name:"name",size:"small",value:(null==v?void 0:null===(e=v.body)||void 0===e?void 0:e.name)||"",InputProps:{readOnly:!0,startAdornment:(0,i.jsx)(U.Z,{position:"start",children:(0,i.jsx)(L.Z,{})})},fullWidth:!0}),(0,i.jsx)(P.Z,{defaultValue:H,helperText:"".concat(H,"부터 선택 가능"),label:"날짜",name:"date",size:"small",type:"date",InputProps:{inputProps:{min:H},startAdornment:(0,i.jsx)(U.Z,{position:"start",children:(0,i.jsx)(W.Z,{})})},options:{min:{message:"".concat(H," 이전 날짜는 입력할 수 없습니다."),value:H},pattern:{message:"유효한 날짜를 입력해주세요.",value:I.Sz.yyyymmddDash},required:{message:"날짜를 입력해주세요.",value:!0},validate:{holiday(e){var t;return(null===(t=J(e))||void 0===t?void 0:t.holiday)?"휴일은 선택할 수 없습니다.":void 0}}},fullWidth:!0,required:!0})]}),(0,i.jsxs)(z.Z,{direction:"row",mobileProps:{direction:void 0},point:"sm",spacing:4,children:[(0,i.jsx)(F.Z,{label:"출근",size:"small",value:B("startTime"),InputProps:{readOnly:!0,startAdornment:(0,i.jsx)(U.Z,{position:"start",children:(0,i.jsx)(K.Z,{})})},fullWidth:!0}),(0,i.jsx)(F.Z,{label:"퇴근",size:"small",value:B("endTime"),InputProps:{readOnly:!0,startAdornment:(0,i.jsx)(U.Z,{position:"start",children:(0,i.jsx)(K.Z,{})})},fullWidth:!0})]}),(0,i.jsx)(F.Z,{label:"근무 유형",name:"workType",size:"small",value:(null===(t=J(n.watch("date")))||void 0===t?void 0:t.dayName)||"",InputProps:{readOnly:!0,startAdornment:(0,i.jsx)(U.Z,{position:"start",children:(0,i.jsx)(_.Z,{})})},fullWidth:!0}),(0,i.jsx)(T.Z,{}),(0,i.jsxs)(z.Z,{direction:"row",mobileProps:{direction:void 0},point:"sm",spacing:4,children:[(0,i.jsxs)(S.Z,{defaultValue:2,label:"출근 타입",name:"startType",size:"small",startAdornment:(0,i.jsx)(U.Z,{position:"start",children:(0,i.jsx)(D.Z,{})}),fullWidth:!0,required:!0,children:[(0,i.jsx)(E.Z,{value:"2",children:"당일"}),(0,i.jsx)(E.Z,{value:"3",children:"익일"})]}),(0,i.jsx)(A.Z,{defaultValue:"09:30",label:"출근시간",name:"startTime",size:"small",InputProps:{startAdornment:(0,i.jsx)(U.Z,{position:"start",children:(0,i.jsx)(K.Z,{})})},options:{pattern:{message:"유효한 시간을 입력해주세요.",value:I.Sz.hhmm},required:{message:"시간을 입력해주세요.",value:!0}},fullWidth:!0,required:!0})]}),(0,i.jsxs)(z.Z,{direction:"row",mobileProps:{direction:void 0},point:"sm",spacing:4,children:[(0,i.jsxs)(S.Z,{defaultValue:2,label:"퇴근 타입",name:"endType",size:"small",startAdornment:(0,i.jsx)(U.Z,{position:"start",children:(0,i.jsx)(M.Z,{})}),fullWidth:!0,required:!0,children:[(0,i.jsx)(E.Z,{value:"2",children:"당일"}),(0,i.jsx)(E.Z,{value:"3",children:"익일"})]}),(0,i.jsx)(A.Z,{defaultValue:"18:30",label:"퇴근시간",name:"endTime",size:"small",InputProps:{startAdornment:(0,i.jsx)(U.Z,{position:"start",children:(0,i.jsx)(K.Z,{})})},options:{pattern:{message:"유효한 시간을 입력해주세요.",value:I.Sz.hhmm},required:{message:"시간을 입력해주세요.",value:!0},validate:{time:en}},fullWidth:!0,required:!0})]}),(0,i.jsx)(P.Z,{defaultValue:"연장근무 소요로 인한 연장근무 신청",label:"사유",minRows:2,name:"reason",size:"small",InputProps:{startAdornment:(0,i.jsx)(U.Z,{position:"start",children:(0,i.jsx)(q.Z,{})})},options:{required:{message:"사유를 입력해주세요.",value:!0}},multiline:!0,required:!0}),(0,i.jsx)(T.Z,{}),(0,i.jsx)(O.Z,{}),(0,i.jsx)(T.Z,{}),(0,i.jsx)(f.Z,{direction:"row",justifyContent:"end",spacing:2,children:(0,i.jsx)(y.Z,{disabled:0===(n.watch("to")||[]).length,startIcon:(0,i.jsx)(h.Z,{}),type:"submit",variant:"outlined",children:"신청서 큐 등록"})}),(0,i.jsx)(p.Z,{list:n.watch("list"),onDeleteClick:et,onSelectClick:ee}),(0,i.jsx)(f.Z,{direction:"row",justifyContent:"end",spacing:2,children:(0,i.jsx)(y.Z,{disabled:0===(n.watch("list")||[]).length,startIcon:(0,i.jsx)(h.Z,{}),type:"button",variant:"outlined",onClick:Y,children:"등록"})}),(0,i.jsxs)(Z.Z,{severity:"info",children:[(0,i.jsx)(j.Z,{children:"안내"}),(0,i.jsx)(f.Z,{children:(0,i.jsx)(g.Z,{variant:"caption",children:"휴일 연장 근무 신청은 지원하지 않습니다."})})]})]})})})},Q=function(){return(0,i.jsx)(s.Z,{name:"OverTimeTemplate",children:(0,i.jsx)(l.Z,{basicPanel:(0,i.jsx)(N,{}),easyPanel:(0,i.jsx)(C,{})})})};function R(){return(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(r.Z,{title:"연장근무 신청",url:"/form/overtime"}),(0,i.jsx)(Q,{})]})}}},function(e){e.O(0,[644,47,384,950,479,49,149,813,955,129,901,891,812,853,306,774,888,179],function(){return e(e.s=3691)}),_N_E=e.O()}]);