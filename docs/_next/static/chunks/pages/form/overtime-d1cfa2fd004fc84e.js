(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[372],{244:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var i=n(r(4938)),s=r(5893),l=(0,i.default)([(0,s.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"0"),(0,s.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime");t.Z=l},4918:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var i=n(r(4938)),s=r(5893),l=(0,i.default)((0,s.jsx)("path",{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"}),"CalendarToday");t.Z=l},2109:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var i=n(r(4938)),s=r(5893),l=(0,i.default)((0,s.jsx)("path",{d:"M14 6v15H3v-2h2V3h9v1h5v15h2v2h-4V6h-3zm-4 5v2h2v-2h-2z"}),"MeetingRoom");t.Z=l},8317:function(e,t,r){"use strict";var n=r(4836);t.Z=void 0;var i=n(r(4938)),s=r(5893),l=(0,i.default)((0,s.jsx)("path",{d:"M11 11h-1v2h2v-1l9.73 9.73L20.46 23 14 16.54V21H3v-2h2V7.54l-4-4 1.27-1.27L11 11zm3 .49L5.51 3H14v1h5v12.49l-2-2V6h-3v5.49z"}),"NoMeetingRoom");t.Z=l},8791:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/overtime",function(){return r(4159)}])},6270:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(5893),i=r(413),s=r(3223),l=function(e){let{onChange:t,options:r,...l}=e,a=e=>{if(s.S.dateTimeWrite.test(e.currentTarget.value)){let r=s.S.dateTimeWrite.exec(e.currentTarget.value);r&&(e.currentTarget.value="".concat(r[1],":").concat(r[2]))}else s.S.dateTimeDelete.test(e.currentTarget.value)&&(e.currentTarget.value=e.currentTarget.value.replace(":",""));t&&t(e)};return(0,n.jsx)(i.Z,{inputProps:{inputMode:"numeric"},options:{onChange:a,...r},...l})}},6142:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(5893),i=r(5343),s=r(2631),l=r(8316),a=r(6541),o=r(7536),d=function(e){var t,r;let{name:d,error:u,helperText:c,...m}=e,{formState:v,register:h}=(0,o.Gc)();return(0,n.jsxs)(i.Z,{"data-component":"FormSelect",fullWidth:m.fullWidth,children:[(0,n.jsx)(l.Z,{error:u||void 0!==v.errors[d],required:!0,children:m.label}),(0,n.jsx)(a.Z,{error:u||void 0!==v.errors[d],...h(d),...m}),(0,n.jsx)(s.Z,{error:u||void 0!==v.errors[d],children:(null===(t=v.errors[d])||void 0===t?void 0:null===(r=t.message)||void 0===r?void 0:r.toString())||c})]})}},3873:function(e,t,r){"use strict";var n=r(4839);t.Z=n.Z},4159:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return k}});var n=r(5893),i=r(4626),s=r(722),l=r(8646),a=r(9741),o=r(1901),d=r(4794),u=r(413),c=r(6270),m=r(5865),v=r(3223),h=r(1955),p=r(3017),Z=r(6142),x=r(3873),j=r(244),f=r(8201),g=r(6540),T=r(3147),b=r(4918),y=r(4603),z=r(2109),V=r(8317),w=r(8570),P=r(4225),A=r(4373),W=r(9041),I=r(60),_=r(9144),q=r(7836),S=r(9630),C=r(7294),M=r(7536),H=function(){var e,t;let r=(0,M.cI)(),{data:i}=h.Z.useUserInfo(),{data:s}=h.Z.useGetCalendar({month:(0,m.K0)(r.watch("date")).month.text,year:(0,m.K0)(r.watch("date")).year.toString()}),{data:l}=h.Z.useGetApplUserList("overtime");(0,C.useEffect)(()=>{r.setValue("to",(null==l?void 0:l.body)||[])},[l]);let a=(0,C.useMemo)(()=>{let{year:e,month:t,day:r}=(0,m.K0)();return"".concat(e,"-").concat(t.text,"-").concat(r.text)},[]),H=(0,C.useCallback)(e=>{var t;let r=null==s?void 0:null===(t=s.body)||void 0===t?void 0:t.calendarItems.flat();return null==r?void 0:r.find(t=>{let{ymd:r}=t;return r===(null==e?void 0:e.replaceAll("-",""))})},[s]),O=(0,C.useCallback)(e=>{let t=H(r.getValues("date")),n="startTime"===e?null==t?void 0:t.startTime:null==t?void 0:t.endTime;return(null==n?void 0:n.time)?"".concat(null==n?void 0:n.time):""},[s]);return(0,n.jsx)(p.Z,{icon:(0,n.jsx)(w.Z,{color:"primary"}),name:"OverTimeBox",title:"연장근무 신청",children:(0,n.jsx)(o.Z,{form:r,onSubmit:console.dir,children:(0,n.jsxs)(_.Z,{spacing:4,children:[(0,n.jsxs)(d.Z,{direction:"row",mobileProps:{direction:void 0},point:"sm",spacing:4,children:[(0,n.jsx)(q.Z,{label:"이름",name:"name",size:"small",value:(null==i?void 0:null===(e=i.body)||void 0===e?void 0:e.name)||"",InputProps:{readOnly:!0,startAdornment:(0,n.jsx)(W.Z,{position:"start",children:(0,n.jsx)(f.Z,{})})},fullWidth:!0}),(0,n.jsx)(u.Z,{defaultValue:a,helperText:"".concat(a,"부터 선택 가능"),label:"날짜",name:"date",size:"small",type:"date",InputProps:{inputProps:{min:a},startAdornment:(0,n.jsx)(W.Z,{position:"start",children:(0,n.jsx)(T.Z,{})})},options:{min:{message:"".concat(a," 이전 날짜는 입력할 수 없습니다."),value:a},pattern:{message:"유효한 날짜를 입력해주세요.",value:v.S.yyyymmddDash},required:{message:"날짜를 입력해주세요.",value:!0},validate:{holiday(e){var t;return(null===(t=H(e))||void 0===t?void 0:t.holiday)?"휴일은 선택할 수 없습니다.":void 0}}},fullWidth:!0,required:!0})]}),(0,n.jsxs)(d.Z,{direction:"row",mobileProps:{direction:void 0},point:"sm",spacing:4,children:[(0,n.jsx)(q.Z,{label:"출근",size:"small",value:O("startTime"),InputProps:{readOnly:!0,startAdornment:(0,n.jsx)(W.Z,{position:"start",children:(0,n.jsx)(j.Z,{})})},fullWidth:!0}),(0,n.jsx)(q.Z,{label:"퇴근",size:"small",value:O("endTime"),InputProps:{readOnly:!0,startAdornment:(0,n.jsx)(W.Z,{position:"start",children:(0,n.jsx)(j.Z,{})})},fullWidth:!0})]}),(0,n.jsx)(q.Z,{label:"근무 유형",name:"workType",size:"small",value:(null===(t=H(r.watch("date")))||void 0===t?void 0:t.dayName)||"",InputProps:{readOnly:!0,startAdornment:(0,n.jsx)(W.Z,{position:"start",children:(0,n.jsx)(b.Z,{})})},fullWidth:!0}),(0,n.jsx)(A.Z,{}),(0,n.jsxs)(d.Z,{direction:"row",mobileProps:{direction:void 0},point:"sm",spacing:4,children:[(0,n.jsxs)(Z.Z,{defaultValue:"2",label:"출근 타입",name:"startType",size:"small",startAdornment:(0,n.jsx)(W.Z,{position:"start",children:(0,n.jsx)(z.Z,{})}),fullWidth:!0,required:!0,children:[(0,n.jsx)(I.Z,{value:"2",children:"당일"}),(0,n.jsx)(I.Z,{value:"3",children:"익일"})]}),(0,n.jsx)(c.Z,{defaultValue:"09:30",label:"출근시간",name:"startTime",size:"small",InputProps:{startAdornment:(0,n.jsx)(W.Z,{position:"start",children:(0,n.jsx)(j.Z,{})})},options:{pattern:{message:"유효한 시간을 입력해주세요.",value:v.S.hhmm},required:{message:"시간을 입력해주세요.",value:!0}},fullWidth:!0,required:!0})]}),(0,n.jsxs)(d.Z,{direction:"row",mobileProps:{direction:void 0},point:"sm",spacing:4,children:[(0,n.jsxs)(Z.Z,{defaultValue:"2",label:"퇴근 타입",name:"endType",size:"small",startAdornment:(0,n.jsx)(W.Z,{position:"start",children:(0,n.jsx)(V.Z,{})}),fullWidth:!0,required:!0,children:[(0,n.jsx)(I.Z,{value:"2",children:"당일"}),(0,n.jsx)(I.Z,{value:"3",children:"익일"})]}),(0,n.jsx)(c.Z,{defaultValue:"18:30",label:"퇴근시간",name:"endTime",size:"small",InputProps:{startAdornment:(0,n.jsx)(W.Z,{position:"start",children:(0,n.jsx)(j.Z,{})})},options:{pattern:{message:"유효한 시간을 입력해주세요.",value:v.S.hhmm},required:{message:"시간을 입력해주세요.",value:!0}},fullWidth:!0,required:!0})]}),(0,n.jsx)(u.Z,{defaultValue:"연장근무 소요로 인한 연장근무 신청",label:"사유",minRows:2,name:"reason",size:"small",InputProps:{startAdornment:(0,n.jsx)(W.Z,{position:"start",children:(0,n.jsx)(y.Z,{})})},options:{required:{message:"사유를 입력해주세요.",value:!0}},multiline:!0,required:!0}),(0,n.jsx)(S.Z,{color:"error",variant:"caption",children:"※ 휴일 연장근무 신청은 아직 지원하지 않습니다."}),(0,n.jsx)(A.Z,{}),(0,n.jsx)(x.Z,{}),(0,n.jsx)(_.Z,{direction:"row",justifyContent:"end",spacing:2,children:(0,n.jsx)(P.Z,{startIcon:(0,n.jsx)(g.Z,{}),type:"submit",variant:"outlined",children:"등록"})})]})})})},O=function(){return(0,n.jsx)(a.Z,{name:"OverTimeTemplate",children:(0,n.jsx)(H,{})})};function k(){return(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(i.Z,{title:"연장근무 신청",url:"/form/overtime"}),(0,n.jsx)(s.Z,{children:(0,n.jsx)(O,{})})]})}}},function(e){e.O(0,[742,335,444,536,154,338,719,89,774,888,179],function(){return e(e.s=8791)}),_N_E=e.O()}]);