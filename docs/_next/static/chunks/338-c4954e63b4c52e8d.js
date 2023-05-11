"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[338],{692:function(e,t,a){a.d(t,{VKt:function(){return i},$dH:function(){return F},ii:function(){return L}});let r="https://api.itcode.dev/jader".replace(/\/+$/,"");class i{set config(e){this.configuration=e}get basePath(){return null!=this.configuration.basePath?this.configuration.basePath:r}get fetchApi(){return this.configuration.fetchApi}get middleware(){return this.configuration.middleware||[]}get queryParamsStringify(){return this.configuration.queryParamsStringify||function e(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object.keys(t).map(r=>(function t(a,r){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=i+(i.length?"[".concat(a,"]"):a);if(r instanceof Array){let o=r.map(e=>encodeURIComponent(String(e))).join("&".concat(encodeURIComponent(n),"="));return"".concat(encodeURIComponent(n),"=").concat(o)}if(r instanceof Set){let s=Array.from(r);return t(a,s,i)}return r instanceof Date?"".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(r.toISOString())):r instanceof Object?e(r,n):"".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(String(r)))})(r,t[r],a)).filter(e=>e.length>0).join("&")}}get username(){return this.configuration.username}get password(){return this.configuration.password}get apiKey(){let e=this.configuration.apiKey;if(e)return"function"==typeof e?e:()=>e}get accessToken(){let e=this.configuration.accessToken;if(e)return"function"==typeof e?e:async()=>e}get headers(){return this.configuration.headers}get credentials(){return this.configuration.credentials}constructor(e={}){this.configuration=e}}let n=new i;class o{withMiddleware(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];let r=this.clone();return r.middleware=r.middleware.concat(...t),r}withPreMiddleware(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];let r=t.map(e=>({pre:e}));return this.withMiddleware(...r)}withPostMiddleware(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];let r=t.map(e=>({post:e}));return this.withMiddleware(...r)}async request(e,t){let{url:a,init:r}=await this.createFetchParams(e,t),i=await this.fetchApi(a,r);if(i&&i.status>=200&&i.status<300)return i;throw new s(i,"Response returned an error code")}async createFetchParams(e,t){var a,r;let i=this.configuration.basePath+e.path;void 0!==e.query&&0!==Object.keys(e.query).length&&(i+="?"+this.configuration.queryParamsStringify(e.query));let n=Object.assign({},this.configuration.headers,e.headers);Object.keys(n).forEach(e=>void 0===n[e]?delete n[e]:{});let o={method:e.method,headers:n,body:e.body,credentials:this.configuration.credentials},s={...o,...await ("function"==typeof t?t:async()=>t)({init:o,context:e})},l={...s,body:(a=s.body,"undefined"!=typeof FormData&&a instanceof FormData||s.body instanceof URLSearchParams||(r=s.body,"undefined"!=typeof Blob&&r instanceof Blob))?s.body:JSON.stringify(s.body)};return{url:i,init:l}}clone(){let e=this.constructor,t=new e(this.configuration);return t.middleware=this.middleware.slice(),t}constructor(e=n){this.configuration=e,this.fetchApi=async(e,t)=>{let a,r={url:e,init:t};for(let i of this.middleware)i.pre&&(r=await i.pre({fetch:this.fetchApi,...r})||r);try{a=await (this.configuration.fetchApi||fetch)(r.url,r.init)}catch(o){for(let n of this.middleware)n.onError&&(a=await n.onError({fetch:this.fetchApi,url:r.url,init:r.init,error:o,response:a?a.clone():void 0})||a);if(void 0===a){if(o instanceof Error)throw new l(o,"The request failed and the interceptors did not return an alternative response");throw o}}for(let s of this.middleware)s.post&&(a=await s.post({fetch:this.fetchApi,url:r.url,init:r.init,response:a.clone()})||a);return a},this.middleware=e.middleware}}class s extends Error{constructor(e,t){super(t),this.response=e,this.name="ResponseError"}}class l extends Error{constructor(e,t){super(t),this.cause=e,this.name="FetchError"}}class u extends Error{constructor(e,t){super(t),this.field=e,this.name="RequiredError"}}function d(e,t){let a=e[t];return null!=a}class c{async value(){return this.transformer(await this.raw.json())}constructor(e,t=e=>e){this.raw=e,this.transformer=t}}function m(e){return null==e?e:{hour:e.hour,minute:e.minute,milliseconds:d(e,"milliseconds")?e.milliseconds:void 0}}function h(e,t){return null==e?e:{time:d(e,"time")?m(e.time):void 0,checked:d(e,"checked")?e.checked:void 0}}function p(e){return void 0===e?void 0:null===e?null:{code:e.code,name:e.name}}function w(e,t){return null==e?e:{year:e.year,month:e.month,day:e.day,milliseconds:d(e,"milliseconds")?e.milliseconds:void 0}}function g(e){return void 0===e?void 0:null===e?null:{year:e.year,month:e.month,day:e.day,milliseconds:e.milliseconds}}function f(e){return function(e,t){var a;return null==e?e:{ymd:w(e.ymd,!1),dayType:d(e,"dayType")?e.dayType:void 0,dayName:e.dayName,workType:null==(a=e.workType)?a:{code:a.code,name:d(a,"name")?a.name:void 0},startTime:d(e,"startTime")?h(e.startTime,!1):void 0,endTime:d(e,"endTime")?h(e.endTime,!1):void 0,workList:d(e,"workList")?e.workList:void 0,past:d(e,"past")?e.past:void 0,otherMonth:d(e,"otherMonth")?e.otherMonth:void 0,today:d(e,"today")?e.today:void 0,holiday:d(e,"holiday")?e.holiday:void 0,future:d(e,"future")?e.future:void 0,selectable:d(e,"selectable")?e.selectable:void 0}}(e,0)}function y(e){return void 0===e?void 0:null===e?null:{hour:e.hour,minute:e.minute,type:e.type,milliseconds:e.milliseconds}}function v(e){return void 0===e?void 0:null===e?null:{applUserList:e.applUserList,refUserList:e.refUserList,completeRefUserList:e.completeRefUserList,date:g(e.date),workType:p(e.workType),newWorkType:p(e.newWorkType),reason:e.reason}}function T(e){return void 0===e?void 0:null===e?null:{applUserList:e.applUserList,refUserList:e.refUserList,completeRefUserList:e.completeRefUserList,date:g(e.date),workType:p(e.workType),startTime:y(e.startTime),endTime:y(e.endTime),reason:e.reason,endDate:e.endDate,startDate:e.startDate,betweenMonthDate:e.betweenMonthDate}}function D(e){return void 0===e?void 0:null===e?null:{date:g(e.date),start:y(e.start),end:y(e.end),allday:e.allday}}function k(e){return void 0===e?void 0:null===e?null:{applUserList:e.applUserList,refUserList:e.refUserList,completeRefUserList:e.completeRefUserList,type:e.type,start:g(e.start),end:g(e.end),reason:e.reason,list:e.list.map(D)}}function q(e){return void 0===e?void 0:null===e?null:{applUserList:e.applUserList,refUserList:e.refUserList,completeRefUserList:e.completeRefUserList,date:g(e.date),workType:p(e.workType),type:e.type,startTime:y(e.startTime),endTime:y(e.endTime),reason:e.reason,endDate:e.endDate,startDate:e.startDate}}function R(e){return null==e?e:{code:e.code,level:e.level,id:e.id,name:e.name,group:e.group}}function A(e){return null==e?e:{id:e.id,name:e.name,orgId:e.orgId,orgName:e.orgName,leader:d(e,"leader")?e.leader:void 0}}function P(e){return void 0===e?void 0:null===e?null:{applCode:e.applCode,applId:e.applId}}function b(e){return null==e?e:{id:e.id,category:e.category,applType:e.applType,applName:e.applName,timestamp:e.timestamp,status:e.status,reason:e.reason}}function Y(e){return null==e?e:{type:e.type,text:e.text}}function U(e){return null==e?e:{ymd:w(e.ymd,!1),list:e.list.map(Y)}}function j(e){return null==e?e:{flag:e.flag,status:e.status,title:d(e,"title")?e.title:void 0,error:d(e,"error")?e.error:void 0,path:d(e,"path")?e.path:void 0,message:d(e,"message")?e.message:void 0,body:d(e,"body")?e.body:void 0,timestamp:new Date(e.timestamp)}}class F extends o{async deleteFormRaw(e,t){if(null===e.openApiRequestDeleteFormProps||void 0===e.openApiRequestDeleteFormProps)throw new u("openApiRequestDeleteFormProps","Required parameter requestParameters.openApiRequestDeleteFormProps was null or undefined when calling deleteForm.");let a={};if(a["Content-Type"]="application/json",this.configuration&&this.configuration.accessToken){let r=this.configuration.accessToken,i=await r("auth",[]);i&&(a.Authorization="Bearer ".concat(i))}let n=await this.request({path:"/api/jade/appl",method:"DELETE",headers:a,query:{},body:e.openApiRequestDeleteFormProps.map(P)},t);return new c(n,e=>j(e))}async deleteForm(e,t){let a=await this.deleteFormRaw(e,t);return await a.value()}async getApplListRaw(e,t){if(null===e.startYear||void 0===e.startYear)throw new u("startYear","Required parameter requestParameters.startYear was null or undefined when calling getApplList.");if(null===e.startMonth||void 0===e.startMonth)throw new u("startMonth","Required parameter requestParameters.startMonth was null or undefined when calling getApplList.");if(null===e.startDay||void 0===e.startDay)throw new u("startDay","Required parameter requestParameters.startDay was null or undefined when calling getApplList.");if(null===e.endYear||void 0===e.endYear)throw new u("endYear","Required parameter requestParameters.endYear was null or undefined when calling getApplList.");if(null===e.endMonth||void 0===e.endMonth)throw new u("endMonth","Required parameter requestParameters.endMonth was null or undefined when calling getApplList.");if(null===e.endDay||void 0===e.endDay)throw new u("endDay","Required parameter requestParameters.endDay was null or undefined when calling getApplList.");if(null===e.page||void 0===e.page)throw new u("page","Required parameter requestParameters.page was null or undefined when calling getApplList.");if(null===e.size||void 0===e.size)throw new u("size","Required parameter requestParameters.size was null or undefined when calling getApplList.");let a={};void 0!==e.type&&(a.type=e.type),e.status&&(a.status=e.status),void 0!==e.keyword&&(a.keyword=e.keyword),void 0!==e.startYear&&(a["start.year"]=e.startYear),void 0!==e.startMonth&&(a["start.month"]=e.startMonth),void 0!==e.startDay&&(a["start.day"]=e.startDay),void 0!==e.endYear&&(a["end.year"]=e.endYear),void 0!==e.endMonth&&(a["end.month"]=e.endMonth),void 0!==e.endDay&&(a["end.day"]=e.endDay),void 0!==e.page&&(a.page=e.page),void 0!==e.size&&(a.size=e.size);let r={};if(this.configuration&&this.configuration.accessToken){let i=this.configuration.accessToken,n=await i("auth",[]);n&&(r.Authorization="Bearer ".concat(n))}let o=await this.request({path:"/api/jade/appl/list",method:"GET",headers:r,query:a},t);return new c(o,e=>(function(e,t){var a;return null==e?e:{flag:e.flag,status:e.status,title:d(e,"title")?e.title:void 0,error:d(e,"error")?e.error:void 0,path:d(e,"path")?e.path:void 0,message:d(e,"message")?e.message:void 0,body:d(e,"body")?null==(a=e.body)?a:{total:a.total,current:a.current,list:a.list.map(b)}:void 0,timestamp:new Date(e.timestamp)}})(e,0))}async getApplList(e,t){let a=await this.getApplListRaw(e,t);return await a.value()}async getApplUserListRaw(e,t){if(null===e.type||void 0===e.type)throw new u("type","Required parameter requestParameters.type was null or undefined when calling getApplUserList.");let a={};if(this.configuration&&this.configuration.accessToken){let r=this.configuration.accessToken,i=await r("auth",[]);i&&(a.Authorization="Bearer ".concat(i))}let n=await this.request({path:"/api/jade/appl/user/{type}".replace("{type}",encodeURIComponent(String(e.type))),method:"GET",headers:a,query:{}},t);return new c(n,e=>null==e?e:{flag:e.flag,status:e.status,title:d(e,"title")?e.title:void 0,error:d(e,"error")?e.error:void 0,path:d(e,"path")?e.path:void 0,message:d(e,"message")?e.message:void 0,body:d(e,"body")?e.body.map(A):void 0,timestamp:new Date(e.timestamp)})}async getApplUserList(e,t){let a=await this.getApplUserListRaw(e,t);return await a.value()}async getCalendarRaw(e,t){if(null===e.year||void 0===e.year)throw new u("year","Required parameter requestParameters.year was null or undefined when calling getCalendar.");if(null===e.month||void 0===e.month)throw new u("month","Required parameter requestParameters.month was null or undefined when calling getCalendar.");let a={};if(this.configuration&&this.configuration.accessToken){let r=this.configuration.accessToken,i=await r("auth",[]);i&&(a.Authorization="Bearer ".concat(i))}let n=await this.request({path:"/api/jade/calendar/{year}/{month}".replace("{year}",encodeURIComponent(String(e.year))).replace("{month}",encodeURIComponent(String(e.month))),method:"GET",headers:a,query:{}},t);return new c(n,e=>(function(e,t){var a;return null==e?e:{flag:e.flag,status:e.status,title:d(e,"title")?e.title:void 0,error:d(e,"error")?e.error:void 0,path:d(e,"path")?e.path:void 0,message:d(e,"message")?e.message:void 0,body:d(e,"body")?null==(a=e.body)?a:{year:a.year,month:a.month,calendarItems:a.calendarItems.map(f)}:void 0,timestamp:new Date(e.timestamp)}})(e,0))}async getCalendar(e,t){let a=await this.getCalendarRaw(e,t);return await a.value()}async getOrganizationRaw(e){let t={};if(this.configuration&&this.configuration.accessToken){let a=this.configuration.accessToken,r=await a("auth",[]);r&&(t.Authorization="Bearer ".concat(r))}let i=await this.request({path:"/api/jade/organization",method:"GET",headers:t,query:{}},e);return new c(i,e=>(function(e,t){var a;return null==e?e:{flag:e.flag,status:e.status,title:d(e,"title")?e.title:void 0,error:d(e,"error")?e.error:void 0,path:d(e,"path")?e.path:void 0,message:d(e,"message")?e.message:void 0,body:d(e,"body")?null==(a=e.body)?a:{organizationMeta:a.organizationMeta.map(R),organizationUnit:a.organizationUnit.map(A)}:void 0,timestamp:new Date(e.timestamp)}})(e,0))}async getOrganization(e){let t=await this.getOrganizationRaw(e);return await t.value()}async getScheduleRaw(e,t){if(null===e.year||void 0===e.year)throw new u("year","Required parameter requestParameters.year was null or undefined when calling getSchedule.");if(null===e.month||void 0===e.month)throw new u("month","Required parameter requestParameters.month was null or undefined when calling getSchedule.");let a={};if(this.configuration&&this.configuration.accessToken){let r=this.configuration.accessToken,i=await r("auth",[]);i&&(a.Authorization="Bearer ".concat(i))}let n=await this.request({path:"/api/jade/schedule/{year}/{month}".replace("{year}",encodeURIComponent(String(e.year))).replace("{month}",encodeURIComponent(String(e.month))),method:"GET",headers:a,query:{}},t);return new c(n,e=>null==e?e:{flag:e.flag,status:e.status,title:d(e,"title")?e.title:void 0,error:d(e,"error")?e.error:void 0,path:d(e,"path")?e.path:void 0,message:d(e,"message")?e.message:void 0,body:d(e,"body")?e.body.map(U):void 0,timestamp:new Date(e.timestamp)})}async getSchedule(e,t){let a=await this.getScheduleRaw(e,t);return await a.value()}async getUserInfoRaw(e){let t={};if(this.configuration&&this.configuration.accessToken){let a=this.configuration.accessToken,r=await a("auth",[]);r&&(t.Authorization="Bearer ".concat(r))}let i=await this.request({path:"/api/jade/user",method:"GET",headers:t,query:{}},e);return new c(i,e=>(function(e,t){var a;return null==e?e:{flag:e.flag,status:e.status,title:d(e,"title")?e.title:void 0,error:d(e,"error")?e.error:void 0,path:d(e,"path")?e.path:void 0,message:d(e,"message")?e.message:void 0,body:d(e,"body")?null==(a=e.body)?a:{code:a.code,unique:a.unique,name:a.name,team:d(a,"team")?a.team:void 0,role:d(a,"role")?a.role:void 0,subRole:d(a,"subRole")?a.subRole:void 0,profileUrl:d(a,"profileUrl")?a.profileUrl:void 0}:void 0,timestamp:new Date(e.timestamp)}})(e,0))}async getUserInfo(e){let t=await this.getUserInfoRaw(e);return await t.value()}async getVacationDateRaw(e,t){if(null===e.vacationType||void 0===e.vacationType)throw new u("vacationType","Required parameter requestParameters.vacationType was null or undefined when calling getVacationDate.");if(null===e.startYmdYear||void 0===e.startYmdYear)throw new u("startYmdYear","Required parameter requestParameters.startYmdYear was null or undefined when calling getVacationDate.");if(null===e.startYmdMonth||void 0===e.startYmdMonth)throw new u("startYmdMonth","Required parameter requestParameters.startYmdMonth was null or undefined when calling getVacationDate.");if(null===e.startYmdDay||void 0===e.startYmdDay)throw new u("startYmdDay","Required parameter requestParameters.startYmdDay was null or undefined when calling getVacationDate.");if(null===e.endYmdYear||void 0===e.endYmdYear)throw new u("endYmdYear","Required parameter requestParameters.endYmdYear was null or undefined when calling getVacationDate.");if(null===e.endYmdMonth||void 0===e.endYmdMonth)throw new u("endYmdMonth","Required parameter requestParameters.endYmdMonth was null or undefined when calling getVacationDate.");if(null===e.endYmdDay||void 0===e.endYmdDay)throw new u("endYmdDay","Required parameter requestParameters.endYmdDay was null or undefined when calling getVacationDate.");let a={};void 0!==e.vacationType&&(a.vacationType=e.vacationType),void 0!==e.startYmdYear&&(a["startYmd.year"]=e.startYmdYear),void 0!==e.startYmdMonth&&(a["startYmd.month"]=e.startYmdMonth),void 0!==e.startYmdDay&&(a["startYmd.day"]=e.startYmdDay),void 0!==e.endYmdYear&&(a["endYmd.year"]=e.endYmdYear),void 0!==e.endYmdMonth&&(a["endYmd.month"]=e.endYmdMonth),void 0!==e.endYmdDay&&(a["endYmd.day"]=e.endYmdDay);let r={};if(this.configuration&&this.configuration.accessToken){let i=this.configuration.accessToken,n=await i("auth",[]);n&&(r.Authorization="Bearer ".concat(n))}let o=await this.request({path:"/api/jade/appl/vaction/date",method:"GET",headers:r,query:a},t);return new c(o,e=>null==e?e:{flag:e.flag,status:e.status,title:d(e,"title")?e.title:void 0,error:d(e,"error")?e.error:void 0,path:d(e,"path")?e.path:void 0,message:d(e,"message")?e.message:void 0,body:d(e,"body")?e.body:void 0,timestamp:new Date(e.timestamp)})}async getVacationDate(e,t){let a=await this.getVacationDateRaw(e,t);return await a.value()}async getVacationTimeInfoRaw(e){let t={};if(this.configuration&&this.configuration.accessToken){let a=this.configuration.accessToken,r=await a("auth",[]);r&&(t.Authorization="Bearer ".concat(r))}let i=await this.request({path:"/api/jade/appl/vaction/time",method:"GET",headers:t,query:{}},e);return new c(i,e=>(function(e,t){var a;return null==e?e:{flag:e.flag,status:e.status,title:d(e,"title")?e.title:void 0,error:d(e,"error")?e.error:void 0,path:d(e,"path")?e.path:void 0,message:d(e,"message")?e.message:void 0,body:d(e,"body")?null==(a=e.body)?a:{total:a.total,use:a.use,avail:a.avail}:void 0,timestamp:new Date(e.timestamp)}})(e,0))}async getVacationTimeInfo(e){let t=await this.getVacationTimeInfoRaw(e);return await t.value()}async getWorkTimeDetailInfoRaw(e,t){if(null===e.year||void 0===e.year)throw new u("year","Required parameter requestParameters.year was null or undefined when calling getWorkTimeDetailInfo.");if(null===e.month||void 0===e.month)throw new u("month","Required parameter requestParameters.month was null or undefined when calling getWorkTimeDetailInfo.");let a={};if(this.configuration&&this.configuration.accessToken){let r=this.configuration.accessToken,i=await r("auth",[]);i&&(a.Authorization="Bearer ".concat(i))}let n=await this.request({path:"/api/jade/work-detail/{year}/{month}".replace("{year}",encodeURIComponent(String(e.year))).replace("{month}",encodeURIComponent(String(e.month))),method:"GET",headers:a,query:{}},t);return new c(n,e=>(function(e,t){var a;return null==e?e:{flag:e.flag,status:e.status,title:d(e,"title")?e.title:void 0,error:d(e,"error")?e.error:void 0,path:d(e,"path")?e.path:void 0,message:d(e,"message")?e.message:void 0,body:d(e,"body")?null==(a=e.body)?a:{refWorkTime:a.refWorkTime,maxWorkTime:a.maxWorkTime,minWorkTime:a.minWorkTime,workTimePercent:a.workTimePercent,overTime:a.overTime,maxOverTime:a.maxOverTime,overWorkTimePercent:a.overWorkTimePercent,workedTime:m(a.workedTime),remainWorkTime:m(a.remainWorkTime),homeWorkTime:a.homeWorkTime,status:a.status,totalOverTime:m(a.totalOverTime),dayOverTime:m(a.dayOverTime),dayNightOverTime:m(a.dayNightOverTime),holydayWorkTime:m(a.holydayWorkTime),holydayOverTime:m(a.holydayOverTime),holydayNightOverTime:m(a.holydayNightOverTime)}:void 0,timestamp:new Date(e.timestamp)}})(e,0))}async getWorkTimeDetailInfo(e,t){let a=await this.getWorkTimeDetailInfoRaw(e,t);return await a.value()}async getWorkTimeInfoRaw(e){let t={};if(this.configuration&&this.configuration.accessToken){let a=this.configuration.accessToken,r=await a("auth",[]);r&&(t.Authorization="Bearer ".concat(r))}let i=await this.request({path:"/api/jade/time",method:"GET",headers:t,query:{}},e);return new c(i,e=>(function(e,t){var a;return null==e?e:{flag:e.flag,status:e.status,title:d(e,"title")?e.title:void 0,error:d(e,"error")?e.error:void 0,path:d(e,"path")?e.path:void 0,message:d(e,"message")?e.message:void 0,body:d(e,"body")?null==(a=e.body)?a:{inDate:d(a,"inDate")?w(a.inDate,!1):void 0,outDate:d(a,"outDate")?w(a.outDate,!1):void 0,inTime:d(a,"inTime")?m(a.inTime):void 0,outTime:d(a,"outTime")?m(a.outTime):void 0,workTime:d(a,"workTime")?m(a.workTime):void 0}:void 0,timestamp:new Date(e.timestamp)}})(e,0))}async getWorkTimeInfo(e){let t=await this.getWorkTimeInfoRaw(e);return await t.value()}async postCalendarPlanRaw(e,t){var a;if(null===e.openApiCalendarPlanProps||void 0===e.openApiCalendarPlanProps)throw new u("openApiCalendarPlanProps","Required parameter requestParameters.openApiCalendarPlanProps was null or undefined when calling postCalendarPlan.");let r={};if(r["Content-Type"]="application/json",this.configuration&&this.configuration.accessToken){let i=this.configuration.accessToken,n=await i("auth",[]);n&&(r.Authorization="Bearer ".concat(n))}let o=await this.request({path:"/api/jade/calendar",method:"POST",headers:r,query:{},body:void 0===(a=e.openApiCalendarPlanProps)?void 0:null===a?null:{year:a.year,month:a.month,list:a.list,start:a.start,end:a.end}},t);return new c(o,e=>j(e))}async postCalendarPlan(e,t){let a=await this.postCalendarPlanRaw(e,t);return await a.value()}async postHomeWorkingFormRaw(e,t){if(null===e.openApiJadeHomeWorkingFormProps||void 0===e.openApiJadeHomeWorkingFormProps)throw new u("openApiJadeHomeWorkingFormProps","Required parameter requestParameters.openApiJadeHomeWorkingFormProps was null or undefined when calling postHomeWorkingForm.");let a={};if(a["Content-Type"]="application/json",this.configuration&&this.configuration.accessToken){let r=this.configuration.accessToken,i=await r("auth",[]);i&&(a.Authorization="Bearer ".concat(i))}let n=await this.request({path:"/api/jade/appl/homework",method:"POST",headers:a,query:{},body:e.openApiJadeHomeWorkingFormProps.map(v)},t);return new c(n,e=>j(e))}async postHomeWorkingForm(e,t){let a=await this.postHomeWorkingFormRaw(e,t);return await a.value()}async postLoginRaw(e){let t={};if(this.configuration&&this.configuration.accessToken){let a=this.configuration.accessToken,r=await a("auth",[]);r&&(t.Authorization="Bearer ".concat(r))}let i=await this.request({path:"/api/jade/login",method:"POST",headers:t,query:{}},e);return new c(i,e=>null==e?e:{flag:e.flag,status:e.status,title:d(e,"title")?e.title:void 0,error:d(e,"error")?e.error:void 0,path:d(e,"path")?e.path:void 0,message:d(e,"message")?e.message:void 0,body:d(e,"body")?e.body:void 0,timestamp:new Date(e.timestamp)})}async postLogin(e){let t=await this.postLoginRaw(e);return await t.value()}async postOvertimeFormRaw(e,t){if(null===e.openApiJadeOvertimeFormProps||void 0===e.openApiJadeOvertimeFormProps)throw new u("openApiJadeOvertimeFormProps","Required parameter requestParameters.openApiJadeOvertimeFormProps was null or undefined when calling postOvertimeForm.");let a={};if(a["Content-Type"]="application/json",this.configuration&&this.configuration.accessToken){let r=this.configuration.accessToken,i=await r("auth",[]);i&&(a.Authorization="Bearer ".concat(i))}let n=await this.request({path:"/api/jade/appl/overtime",method:"POST",headers:a,query:{},body:e.openApiJadeOvertimeFormProps.map(T)},t);return new c(n,e=>j(e))}async postOvertimeForm(e,t){let a=await this.postOvertimeFormRaw(e,t);return await a.value()}async postVacationFormRaw(e,t){if(null===e.openApiJadeVacationFormProps||void 0===e.openApiJadeVacationFormProps)throw new u("openApiJadeVacationFormProps","Required parameter requestParameters.openApiJadeVacationFormProps was null or undefined when calling postVacationForm.");let a={};if(a["Content-Type"]="application/json",this.configuration&&this.configuration.accessToken){let r=this.configuration.accessToken,i=await r("auth",[]);i&&(a.Authorization="Bearer ".concat(i))}let n=await this.request({path:"/api/jade/appl/vacation",method:"POST",headers:a,query:{},body:e.openApiJadeVacationFormProps.map(k)},t);return new c(n,e=>j(e))}async postVacationForm(e,t){let a=await this.postVacationFormRaw(e,t);return await a.value()}async postWorkInRaw(e){let t={};if(this.configuration&&this.configuration.accessToken){let a=this.configuration.accessToken,r=await a("auth",[]);r&&(t.Authorization="Bearer ".concat(r))}let i=await this.request({path:"/api/jade/time/in",method:"POST",headers:t,query:{}},e);return new c(i,e=>j(e))}async postWorkIn(e){let t=await this.postWorkInRaw(e);return await t.value()}async postWorkOutRaw(e){let t={};if(this.configuration&&this.configuration.accessToken){let a=this.configuration.accessToken,r=await a("auth",[]);r&&(t.Authorization="Bearer ".concat(r))}let i=await this.request({path:"/api/jade/time/out",method:"POST",headers:t,query:{}},e);return new c(i,e=>j(e))}async postWorkOut(e){let t=await this.postWorkOutRaw(e);return await t.value()}async postWorkTimeFormRaw(e,t){if(null===e.openApiJadeWorkTimeFormProps||void 0===e.openApiJadeWorkTimeFormProps)throw new u("openApiJadeWorkTimeFormProps","Required parameter requestParameters.openApiJadeWorkTimeFormProps was null or undefined when calling postWorkTimeForm.");let a={};if(a["Content-Type"]="application/json",this.configuration&&this.configuration.accessToken){let r=this.configuration.accessToken,i=await r("auth",[]);i&&(a.Authorization="Bearer ".concat(i))}let n=await this.request({path:"/api/jade/appl/worktime",method:"POST",headers:a,query:{},body:e.openApiJadeWorkTimeFormProps.map(q)},t);return new c(n,e=>j(e))}async postWorkTimeForm(e,t){let a=await this.postWorkTimeFormRaw(e,t);return await a.value()}}class L extends o{async getUserRaw(e){let t={};if(this.configuration&&this.configuration.accessToken){let a=this.configuration.accessToken,r=await a("auth",[]);r&&(t.Authorization="Bearer ".concat(r))}let i=await this.request({path:"/api/user",method:"GET",headers:t,query:{}},e);return new c(i,e=>(function(e,t){var a;return null==e?e:{flag:e.flag,status:e.status,title:d(e,"title")?e.title:void 0,error:d(e,"error")?e.error:void 0,path:d(e,"path")?e.path:void 0,message:d(e,"message")?e.message:void 0,body:d(e,"body")?null==(a=e.body)?a:{username:a.username,authorityList:d(a,"authorityList")?a.authorityList:void 0}:void 0,timestamp:new Date(e.timestamp)}})(e,0))}async getUser(e){let t=await this.getUserRaw(e);return await t.value()}async getValidUserRaw(e,t){let a={};if(void 0!==e.authorization&&null!==e.authorization&&(a.Authorization=String(e.authorization)),this.configuration&&this.configuration.accessToken){let r=this.configuration.accessToken,i=await r("auth",[]);i&&(a.Authorization="Bearer ".concat(i))}let n=await this.request({path:"/api/user/check",method:"GET",headers:a,query:{}},t);return new c(n,e=>(function(e,t){var a;return null==e?e:{flag:e.flag,status:e.status,title:d(e,"title")?e.title:void 0,error:d(e,"error")?e.error:void 0,path:d(e,"path")?e.path:void 0,message:d(e,"message")?e.message:void 0,body:d(e,"body")?null==(a=e.body)?a:{valid:d(a,"valid")?a.valid:void 0}:void 0,timestamp:new Date(e.timestamp)}})(e,0))}async getValidUser(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=await this.getValidUserRaw(e,t);return await a.value()}async loginRaw(e,t){var a;if(null===e.openApiAccountProps||void 0===e.openApiAccountProps)throw new u("openApiAccountProps","Required parameter requestParameters.openApiAccountProps was null or undefined when calling login.");let r={};if(r["Content-Type"]="application/json",this.configuration&&this.configuration.accessToken){let i=this.configuration.accessToken,n=await i("auth",[]);n&&(r.Authorization="Bearer ".concat(n))}let o=await this.request({path:"/api/user/login",method:"POST",headers:r,query:{},body:void 0===(a=e.openApiAccountProps)?void 0:null===a?null:{id:a.id,password:a.password}},t);return new c(o,e=>null==e?e:{flag:e.flag,status:e.status,title:d(e,"title")?e.title:void 0,error:d(e,"error")?e.error:void 0,path:d(e,"path")?e.path:void 0,message:d(e,"message")?e.message:void 0,body:d(e,"body")?e.body:void 0,timestamp:new Date(e.timestamp)})}async login(e,t){let a=await this.loginRaw(e,t);return await a.value()}}},1473:function(e,t,a){a.d(t,{m:function(){return s}});var r=a(692),i=a(5629),n=a(5865);async function o(e){let t;if((null==e?void 0:e.authorization)!==!1){let a=await (0,i.qe)("jader","token","access");if(a){let r="Bearer ".concat(a.token);t?t.Authorization=r:t={Authorization:r}}}if((null==e?void 0:e.hash)!==!1){let o=await (0,n.HI)("".concat(new Date().getTime(),"-").concat(Math.ceil(1e4*Math.random())));o&&(t?t.hash=o:t={hash:o})}return t}async function s(e){let t=await (0,i.qe)("jader","token","access");return new r.VKt({accessToken:null==t?void 0:t.token,headers:await o(e)})}},6211:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(5893),i=a(918),n=function(e){let{backgroundColor:t,borderRadius:a=5,width:n=64,height:o=64,origin:s}=e;return(0,r.jsx)(i.Z,{"data-component":"JaderLogo",elevation:8,sx:{backgroundColor:t,borderRadius:a,height:o,transition:"0.3s background-color",width:n},children:(0,r.jsx)("img",{alt:"JADER",height:n,src:"/jader/assets/images/jader_transparent".concat(s?"":"_logo",".png"),width:n})})}},4626:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(5893),i=a(9008),n=a.n(i),o=function(e){let{title:t,description:a="짜증나서 그냥 내가 만든 JADE 연동 서비스",type:i="website",url:o="",image:s="/jader/assets/images/jader.png",locale:l="ko_KR"}=e;return(0,r.jsxs)(n(),{children:[(0,r.jsx)("title",{children:"".concat(t," - ").concat("JADER")}),(0,r.jsx)("meta",{content:a,name:"description"}),(0,r.jsx)("meta",{content:"JADER",property:"og:site_name"}),(0,r.jsx)("meta",{content:"".concat(t," - ").concat("JADER"),property:"og:title"}),(0,r.jsx)("meta",{content:a,property:"og:description"}),(0,r.jsx)("meta",{content:i,property:"og:type"}),(0,r.jsx)("meta",{content:"".concat("https://project.itcode.dev/jader").concat(o),property:"og:url"}),(0,r.jsx)("meta",{content:s,property:"og:image"}),(0,r.jsx)("meta",{content:l,property:"og:locale"}),(0,r.jsx)("link",{href:"".concat("https://project.itcode.dev/jader").concat(o),rel:"canonical"})]})}},5865:function(e,t,a){function r(e){var t;let a;return{day:{text:i((a=e||0===e?"object"==typeof e?e:new Date(e):new Date).getDate()),value:a.getDate()},hour:{text:i(a.getHours()),value:a.getHours()},minute:{text:i(a.getMinutes()),value:a.getMinutes()},month:{text:i(a.getMonth()+1),value:a.getMonth()+1},second:{text:i(a.getSeconds()),value:a.getSeconds()},weekday:{text:0===(t=a.getDay())?"일":1===t?"월":2===t?"화":3===t?"수":4===t?"목":5===t?"금":6===t?"토":"",value:a.getDay()},year:a.getFullYear()}}function i(e){return e<10?"0".concat(e):e.toString()}async function n(e){let{JSEncrypt:t}=await a.e(246).then(a.bind(a,5246)),r=new t;return r.setPublicKey("-----BEGIN RSA PUBLIC KEY-----\n	MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA5AG4o8FsdfCTAU0QhOy1\n	uWgnE7oNq+JKrr8AOayTg6r78v5Lc0lNsn1x5NOvJr1HvRTqbbNWBlV2Jky2+FG6\n	AsnBnSp6iOqxoRJShFH0KISXMZaV2dHywW7lV2ygaercxcVFbXNU4+oEbhD4lqze\n	sWsTJj0APpT2Psrw/wM0VxIZKWOR0htKIXz2c4CVbRA6+i7KYLIphmqcA4tm9ZbZ\n	T8ExzI+FXsvPCdsQrE5TJinlulrVPu8F73J3Lgak+HNL5kDSlmY1z38nTlDFp2s5\n	81cRpAOuDb01sxjjnHnxtn9veTphBHsYVOOV8aiyOXlwxENiz9VPo5RcLS6o8dZF\n	ZCmcFal+SZQGw2FUa+wAL0zDs3FyRB2HPy9EOjCcDGcCVNEpfa+XnOgIeP74Zr2S\n	yTsOBTYVXBJpN96o2sFGDf1gaV0FV3wMXdjNMM9xzCfebK0uTLl2Q7/B9sROIrql\n	G1zBici5eSGeiuqrWEUialrqVNHL8Ak9Kkt2eaOJXNoPx/f/REk7BB+cqhRt68BZ\n	Rmj19HSJo7kZM0VS3JLiIBzSPJP1MIt0oCdnjivxpK/sGKqCTdW3NoMd5JsXs3f7\n	1EWc0Cd7co1GfOsMGFSlEPcSfLvdeIMIKBpdeOjPr1/t7nDmOrFjSh+a13BUpY+7\n	zDaS5Ixa8oN3VS1EI8ZplvUCAwEAAQ==\n	-----END RSA PUBLIC KEY-----"),r.encrypt(e)||void 0}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a="string"==typeof e?parseInt(e,10):e,r=10**t;return Math.ceil(a*r)/r}function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return l(e,t,a)-l(9)}function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return(3600*e+60*t+a)*1e3}a.d(t,{FP:function(){return l},HI:function(){return n},K0:function(){return r},WK:function(){return s},WL:function(){return o}}),a(3223)},3223:function(e,t,a){a.d(t,{Iv:function(){return i},Sz:function(){return r}});let r={dateTimeDelete:/^([01][0-9]|2[0-3]):$/,dateTimeWrite:/^([01][0-9]|2[0-3])([0-5])$/,endTime:/^(1[7-9]:[0-5][0-9])|(2[0-1]:[0-5][0-9])|(22:[0-2][0-9])$/,hh:/^([01][0-9]|2[0-3])$/,hh2:/^([01][0-9]|2[0-3]):$/,hhmm:/^([01][0-9]|2[0-3]):([0-5][0-9])$/,holiday:/.*(sat|sun).*/,num:/^[0-9]$/,startTime:/^(06:3[1-9])|(06:[4-5][0-9])|(0[7-9]:[0-5][0-9])|(10:[0-5][0-9])|(11:00)$/,yyyymmdd:/(\d\d\d\d)(\d\d)(\d\d)/,yyyymmddDash:/(\d\d\d\d)-(\d\d)-(\d\d)/},i=[{content:[{article:["출/퇴근을 등록하고 캘린더를 확인하면, 정보가 제때 반영되지 않아 새로고침을 해줘야하는 현상을 수정했습니다."],subtitle:"\uD83D\uDC1B 출/퇴근 시 근태 현황 정보가 갱신됩니다."},{article:["JADE가 05.11 22:00을 기준으로 업데이트 됐습니다.","이로 인해, 근태현황 등록 시 등록은 이루어지나 예외가 뜨는 현상을 개선했습니다.","놀래라."],subtitle:"\uD83D\uDC1B 근태현황 등록 시 예외가 발생하는 현상이 개선됩니다."}],timestamp:1683829949665,title:"JADER 버그 수정 및 개선"},{content:[{article:["새벽까지 야근을 잘 안 하다보니, 최근에서야 알게 됐습니다. 연장근무 신청 시 익일 신청이 제대로 되고 있지 않다는 사실을요."],subtitle:"\uD83D\uDC1B 연장근무 신청 시, 익일 타입이 제대로 지정되지 않는 버그를 수정했습니다."},{article:["모바일 화면은 그 특유의 좁아터진 화면 때문에 의도적인 정보의 누락을 야기하곤 합니다.","모바일에서 재택근무를 표현하고자, 주황색 원으로 표시하도록 바꿔줬었는데 이게 생각보다 나쁘지 않은 것 같습니다.","그래서 데스크탑 버전에다가도 적용했습니다. 이런게 역수출이죠."],subtitle:"\uD83D\uDD28 데스크탑 버전의 캘린더가 재택근무를 좀 더 직관적으로 보여줍니다."},{article:["내겐 너무나도 당연한 것들이, 타인에겐 그렇지 않은 경우가 왕왕 있습니다. 이를테면 개발자와 사용자처럼 말이죠.","최대한 사용자의 시각으로 바라보려고 하지만, 사용자 이전에 개발자로써 개발 과정에서 이미 내제된 정보를 배제할 순 없었던 모양입니다.","캘린더의 정보들은 직관적이라고 생각했지만, 빨간색 시간이 뭐냐는 질문을 받고 생각을 고쳐먹었습니다"],subtitle:"\uD83D\uDD28 캘린더에 범례가 추가됩니다."}],timestamp:1683484222272,title:"JADER 버그 수정 및 개선"},{content:[{article:["살짝 당황스런 버그였습니다. 다른 시간은 잘 되는데, 09:00을 등록할 때만 생기는 버그??","대한민국의 시계는 세계 기준보다 9시간 빠른 탓에, 09:00의 밀리초는 0이 됩니다.","우리 똑똑한 자바스크립트는 조건식에 0을 집어넣으면 false로 인식해주는 덕분에 의도하지 않은 분기로 처리되어 발생하는 버그였습니다.","불행 중 다행히, 프론트의 후처리 과정에서 발생한 것으로, 엉뚱한 시간이 등록되진 않은 것 같군요..."],subtitle:"\uD83D\uDC1B 캘린더의 일정 등록 시 09:00을 등록하면 발생하는 버그를 수정했습니다."}],timestamp:1683135616402,title:"JADER 버그 수정 및 검증로직 개선"},{content:[{article:['법인카드 정책 변경으로 저녁식대/교통비 신청이 훨씬 수월해졌습니다"만", 여전히 귀찮은 건 사실입니다.',"생각해보니, 캘린더의 출퇴근 기록을 활용하면 이런 내역을 한 눈에 볼 수 있을 것만 같네요?"],subtitle:"\uD83D\uDD28 캘린더가 저녁식대, 교통비 제공 가능한 날짜를 더 직관적으로 보여줍니다."}],timestamp:1682616453662,title:"JADER 캘린더 부가기능 추가"},{content:[{article:["전 제 사진을 보는 걸 정말 싫어합니다. 여러분들도 그런가요?"],subtitle:"\uD83D\uDD28 헤더 계정 카드의 UI가 프로필 사진에서 텍스트 기반으로 변경됩니다."},{article:["행복한 연차 사용! 이젠 얼마나 남았는지 직접 보면서 사용하세요!","물론 본다고 3일 깎일거 하루 깎이는 건 아니지만요."],subtitle:"\uD83D\uDD28 연차 신청 페이지에서 남은 연차를 보여드립니다."}],timestamp:1682531575031,title:"JADER 시스템 기능추가 및 개선"},{content:[{article:["뚜.... 뚜.... 뚜.... 띵!\uD83D\uDD14"],subtitle:"\uD83D\uDD28 출퇴근 시간 등록에서 현재 시각을 알려드립니다."},{article:["근데 어차피 23시 고정이잖아...?"],subtitle:"\uD83D\uDD28 출퇴근 시간 등록에서 교통비 나오는 시간을 표시해줍니다."},{article:["때때로 데이터를 별도로 가공하는 작업은 예기치 못할 사이드 이펙트를 유발하곤 합니다. 특히 이딴거 만드는 주니어 개발자라면 더더욱 말이죠.","기존의 근무 시간 상세 정보는 재택 포함/미포함 두 가지로 나눠 표현하고 있었습니다. 초기 목적은 JADE의 근무 시간 정보를 그대로 표현해주면서, 재택 시간을 별도로 계산한 정보를 다시 한 번 표현해 줌으로써 신뢰성을 주고자 했다네요.","하지만 곧 재택 미포함 컴포넌트는 아무도 눈여겨보지 않는다는 걸 깨달았습니다."],subtitle:"\uD83D\uDD25 근무 시간 상세 정보의 재택 미포함된 타임 테이블이 제거됩니다."},{article:["대부분의 직장인은 적게 일하고, 많이 일하길 바랍니다. 하지만 안타깝게도 근무 시간 상세 정보는 언제나 우리에게 눈치없이 최대 근무시간만을 기준으로 더 많은 노오력, 더 많은 근무일수를 요구했습니다.","이제 트렌트를 따라가고자 합니다."],subtitle:"\uD83D\uDD28 근무 시간 상세 정보에서 최소 근무에 대한 추가적인 정보를 제공해줍니다."},{article:["바쁜 현대인은 시간 따위로 날짜 같은거 일일히 역계산하고 그럴 시간이 없습니다. 이거 만든 개발자놈은 그거 조금 계산하는 코드 좀 치기 어려웠던 걸까요??","어려웠는지 귀찮았는지 모르겠지만, 아무튼 이젠 된다고 하네요!"],subtitle:"\uD83D\uDD28 근무 시간 상세 정보에서 최소 근무시간을 달성하기 위한 일자를 보여줍니다."}],timestamp:1682445704970,title:"JADER 시스템 기능추가 및 개선"}]},5710:function(e,t,a){var r=a(1473),i=a(692),n=a(8767);t.Z={useCheck:function(e){let t=(0,r.m)();return(0,n.useQuery)(["user","check"],async()=>{let e=await new i.ii(await t).getValidUser();return e},e)},useGetUser:function(e){let t=(0,r.m)();return(0,n.useQuery)(["user","getUser"],async()=>{let e=await new i.ii(await t).getUser();return e},e)},useLogin:function(e){let t=(0,r.m)();return(0,n.useMutation)(["user","login"],async e=>{let a=await new i.ii(await t).login(e);return a},e)}}}}]);