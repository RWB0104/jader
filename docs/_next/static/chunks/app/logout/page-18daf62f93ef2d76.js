(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5805],{2992:function(t,e,n){Promise.resolve().then(n.bind(n,15146))},50805:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var a=n(72976),o=n(38941),r=function(t){let{backgroundColor:e,width:n=64,height:r=64,origin:i}=t;return(0,a.jsx)(o.Z,{"data-component":"JaderLogo",elevation:8,sx:{backgroundColor:e,height:r,transition:"0.3s background-color",width:n},children:(0,a.jsx)("img",{alt:"JADER",height:n,src:"/jader/assets/images/jader_transparent".concat(i?"":"_logo",".png"),width:n})})}},15146:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return c}});var a=n(72976),o=n(10811),r=n(50805),i=n(4260),u=n(37919),s=n(90828);function c(){return o.Z.useLogout({onSettled:()=>{window.location.href="/jader"}}),(0,a.jsx)(s.Z,{alignItems:"center","data-component":"LogoutTemplate",height:"100vh",justifyContent:"center",children:(0,a.jsxs)(s.Z,{alignItems:"center",direction:"column",justifyContent:"center",spacing:4,children:[(0,a.jsx)(r.Z,{height:128,width:128}),(0,a.jsx)(i.Z,{height:20,width:"100%",children:(0,a.jsx)(u.Z,{})})]})})}},10811:function(t,e,n){"use strict";var a=n(49935),o=n(57987),r=n(38233),i=n(54307),u=n(46552);e.Z={useEvent:function(t){let{data:e}=o.Z.useUserInfo();return(0,i.D)(["custom","event"],async t=>{var n,a,o;let r=e?"".concat((null==e?void 0:null===(n=e.body)||void 0===n?void 0:n.unique)||"-"," / ").concat((null==e?void 0:null===(a=e.body)||void 0===a?void 0:a.team)||"-"," / ").concat((null==e?void 0:null===(o=e.body)||void 0===o?void 0:o.name)||"-"):"익명";u.ZP.event(t,{jader_unique:r})},t)},useLogout:function(t){return(0,r.a)(["custom","logout"],async()=>{await (0,a.PS)("jader","token")},t)}}},57987:function(t,e,n){"use strict";var a=n(20647),o=n(85800),r=n(38233),i=n(54307),u=n(30775);e.Z={useDeleteForm:function(t){let e=(0,a.m)();return(0,i.D)(["jade","deleteForm"],async t=>{await new o.$dH(await e).deleteForm(t)},t)},useGetApplInfiniteList:function(t,e){let n=(0,a.m)();return(0,u.N)(["jade","getApplList",t],async e=>{var a,r,i;let{pageParam:u=1}=e,s=await new o.$dH(await n).getApplList({...t,page:u});return{currentPage:u,list:(null===(a=s.body)||void 0===a?void 0:a.list)||[],totalCount:(null===(r=s.body)||void 0===r?void 0:r.total)||0,totalPage:Math.ceil(((null===(i=s.body)||void 0===i?void 0:i.total)||0)/t.size)}},{getNextPageParam:t=>{let{currentPage:e,totalPage:n}=t;return e===n?void 0:e+1},getPreviousPageParam:t=>{let{currentPage:e}=t;return 1===e?void 0:e-1},...e})},useGetApplUserList:function(t,e){let n=(0,a.m)();return(0,r.a)(["jade","getApplUserList",t],async()=>{let e=await new o.$dH(await n).getApplUserList({type:t});return e},e)},useGetCalendar:function(t,e){let n=(0,a.m)();return(0,r.a)(["jade","getCalendar",t.year,t.month],async()=>{let e=await new o.$dH(await n).getCalendar(t);return e},e)},useGetOrganization:function(t){let e=(0,a.m)();return(0,r.a)(["jade","getOrganization"],async()=>{let t=await new o.$dH(await e).getOrganization();return t},t)},useGetSchedule:function(t,e){let n=(0,a.m)();return(0,r.a)(["jade","getSchedule",t.year,t.month],async()=>{let e=await new o.$dH(await n).getSchedule(t);return e},e)},useGetVacationDate:function(t,e){let n=(0,a.m)(),i="".concat(t.startYmdYear,"-").concat(t.startYmdMonth,"-").concat(t.startYmdDay," ").concat(t.endYmdYear,"-").concat(t.endYmdMonth,"-").concat(t.endYmdDay);return(0,r.a)(["jade","getVacationDate",i],async()=>{let e=await new o.$dH(await n).getVacationDate(t);return e},{enabled:4010===t.vacationType&&0!==t.startYmdYear&&0!==t.endYmdYear,...e})},useGetVacationTimeInfo:function(t,e){let n=(0,a.m)();return(0,r.a)(["jade","getVacationTimeInfo"],async()=>{let e=await new o.$dH(await n).getVacationTimeInfo({type:t});return e},e)},useGetWorkTimeDetailInfo:function(t,e){let n=(0,a.m)();return(0,r.a)(["jade","getWorkTimeDetailInfo",t.year,t.month],async()=>{let e=await new o.$dH(await n).getWorkTimeDetailInfo(t);return e},e)},useLogin:function(t){let e=(0,a.m)();return(0,r.a)(["jade","login"],async()=>{let t=await new o.$dH(await e).postLogin();return t},t)},usePostCalendarPlan:function(t){let e=(0,a.m)();return(0,i.D)(["jade","postCalendarPlan"],async t=>{let n=await new o.$dH(await e).postCalendarPlan(t);return n},t)},usePostHomeWorkingForm:function(t){let e=(0,a.m)();return(0,i.D)(["jade","postHomeWorkingForm"],async t=>{await new o.$dH(await e).postHomeWorkingForm(t)},t)},usePostOvertimeForm:function(t){let e=(0,a.m)();return(0,i.D)(["jade","postOvertimeForm"],async t=>{await new o.$dH(await e).postOvertimeForm(t)},t)},usePostVacationForm:function(t){let e=(0,a.m)();return(0,i.D)(["jade","postVacationForm"],async t=>{await new o.$dH(await e).postVacationForm(t)},t)},usePostWorkIn:function(t){let e=(0,a.m)();return(0,i.D)(["jade","postWorkIn"],async()=>{let t=await new o.$dH(await e).postWorkIn();return t},t)},usePostWorkOut:function(t){let e=(0,a.m)();return(0,i.D)(["jade","postWorkOut"],async()=>{let t=await new o.$dH(await e).postWorkOut();return t},t)},usePostWorkTimeForm:function(t){let e=(0,a.m)();return(0,i.D)(["jade","postWorkTimeForm"],async t=>{await new o.$dH(await e).postWorkTimeForm(t)},t)},useTime:function(t){let e=(0,a.m)();return(0,r.a)(["jade","time"],async()=>{let t=await new o.$dH(await e).getWorkTimeInfo();return t},t)},useUserInfo:function(t){let e=(0,a.m)();return(0,r.a)(["jade","userInfo"],async()=>{let t=await new o.$dH(await e).getUserInfo();return t},t)}}}},function(t){t.O(0,[5173,1675,9497,8180,647,4207,8802,1744],function(){return t(t.s=2992)}),_N_E=t.O()}]);