(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[89],{1901:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(5893),r=n(7536),a=function(e){let{form:t,onSubmit:n,...a}=e,o=(0,r.cI)(),c=t||o;return(0,i.jsx)(r.RV,{...c,children:(0,i.jsx)("form",{"data-component":"Form",onSubmit:c.handleSubmit(n),...a})})}},7679:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(5893),r=n(4184),a=n.n(r),o=n(2608),c=n.n(o),l=function(e){let{userId:t,src:n,...r}=e;return(0,i.jsx)("img",{alt:t,className:a()(c().profile),referrerPolicy:"no-referrer",src:t?"https://ehr.jadehr.co.kr/custom/c2202010/images/emp/".concat(t,".jpg"):n,onError(e){let{currentTarget:t}=e;t.src="/jader/assets/images/jader_transparent.png"},...r})}},4794:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(5893),r=n(2097),a=n(1225),o=n(9144),c=function(e){let{point:t,mobileProps:n,...c}=e,l=(0,r.Z)(),s=(0,a.Z)(l.breakpoints.up(t||"lg"));return(0,i.jsx)(o.Z,{"data-component":"ResponsiveStack",...s?c:{...c,...n}})}},413:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=n(5893),r=n(7836),a=n(7536),o=function(e){var t,n;let{name:o,error:c,helperText:l,options:s,...d}=e,{register:u,formState:h}=(0,a.Gc)();return(0,i.jsx)(r.Z,{"data-component":"TextFormField",error:c||void 0!==h.errors[o],helperText:(null===(t=h.errors[o])||void 0===t?void 0:null===(n=t.message)||void 0===n?void 0:n.toString())||l,...d,...u(o,s)})}},3017:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(5893),r=n(918),a=n(9144),o=n(9630);function c(e){let{name:t="BoxPaper",icon:n,title:c,sx:l,children:s,...d}=e;return(0,i.jsx)(r.Z,{"data-component":t,sx:{width:"100%",...l},...d,children:(0,i.jsxs)(a.Z,{borderRadius:5,padding:4,spacing:4,width:"100%",children:[(0,i.jsx)(a.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",width:"100%",children:(0,i.jsxs)(a.Z,{alignItems:"center",direction:"row",spacing:1,children:[n,(0,i.jsx)(o.Z,{fontWeight:"bold",variant:"h6",children:c})]})}),s]})})}},9741:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(5893),r=n(9144),a=function(e){let{name:t="ContentStack",alignItems:n="center",justifyContent:a="center",maxWidth:o=1200,minWidth:c=320,spacing:l=2,width:s="100%",...d}=e;return(0,i.jsx)(r.Z,{alignItems:n,"data-component":t,justifyContent:a,maxWidth:o,minWidth:c,spacing:l,width:s,...d})},o=n(2097),c=n(7294),l=function(e){let{name:t="TemplateStack",innerStackProps:n,children:l,...s}=e,{palette:{mode:d,grey:u}}=(0,o.Z)(),h=(0,c.useCallback)(()=>"light"===d?u[100]:"#161616",[d]);return(0,i.jsx)(r.Z,{alignItems:"center",bgcolor:h(),component:"article","data-component":t,padding:2,...s,children:(0,i.jsx)(a,{...n,children:l})})}},4839:function(e,t,n){"use strict";n.d(t,{Z:function(){return T}});var i=n(5893),r=n(4794),a=n(7679),o=n(594),c=n(562),l=n(9144),s=n(9630),d=n(7294),u=n(7536),h=function(e){let{name:t,unit:n,interactable:r,...h}=e,m=(0,u.Gc)(),x=(0,d.useCallback)(()=>{let e=m.getValues(t);m.setValue(t,e.filter(e=>{let{id:t}=e;return t!==n.id}))},[m,n,t]);return(0,i.jsxs)(l.Z,{alignItems:"center","data-component":"OrganizationSelectItem",direction:"row",padding:1,spacing:1,...h,children:[(0,i.jsx)(a.Z,{alt:n.id,height:24,userId:n.id,width:24}),(0,i.jsx)(s.Z,{flex:1,fontSize:"0.8rem",children:n.name}),r?(0,i.jsx)(c.Z,{sx:{height:24,width:24},onClick:x,children:(0,i.jsx)(o.Z,{sx:{height:18,width:18}})}):null]})},m=n(2097),x=function(e){let{name:t,units:n,interactable:r,...a}=e,{palette:o}=(0,m.Z)(),c=(0,d.useMemo)(()=>"to"===t?"결재":"cc"===t?"참조":"ccc"===t?"최종 참조":null,[t]);return(0,i.jsxs)(l.Z,{border:"1px solid ".concat(o.action.disabled),borderRadius:2,"data-component":"OrganizationSelectList",height:"100%",minHeight:70,width:"100%",...a,children:[(0,i.jsx)(l.Z,{alignItems:"center",borderBottom:"1px solid ".concat(o.action.disabled),justifyContent:"center",padding:.5,children:(0,i.jsxs)(s.Z,{variant:"caption",children:[c," (",null==n?void 0:n.length,"명)"]})}),(0,i.jsx)(l.Z,{overflow:"auto",children:null==n?void 0:n.map(e=>(0,i.jsx)(h,{interactable:r,name:t,unit:e},"OrganizationSelectItem-".concat(e.id)))})]})},p=n(1901),g=n(1519),f=n(413),j=n(1970),Z=n(4957),w=n(1953),v=n(4225),b=n(2135);function k(e){let{unit:t,...n}=e,{palette:o}=(0,m.Z)(),c=(0,u.Gc)(),h=(0,d.useCallback)(e=>{let n=c.getValues(e);n.find(e=>{let{id:n}=e;return n===t.id})||c.setValue(e,[...n,t])},[t,c]);return(0,i.jsx)(w.Z,{"data-component":"OrganizationCard",sx:{"&:hover":{background:o.action.disabledBackground}},...n,children:(0,i.jsxs)(r.Z,{alignItems:"center",direction:"row",mobileProps:{direction:"column"},padding:"10px 25px",point:"md",spacing:2,width:"100%",children:[(0,i.jsxs)(l.Z,{alignItems:"center",direction:"row",flex:1,spacing:2,children:[(0,i.jsx)(a.Z,{height:40,userId:t.id,width:40}),(0,i.jsxs)(l.Z,{alignItems:"start",flex:1,children:[(0,i.jsxs)(l.Z,{alignItems:"center",direction:"row",spacing:.5,children:[t.leader?(0,i.jsx)(Z.Z,{color:"warning"}):null,(0,i.jsx)(s.Z,{fontWeight:"bold",variant:"body2",children:t.name})]}),(0,i.jsx)(s.Z,{variant:"caption",children:t.orgName}),(0,i.jsx)(f.Z,{name:"unit",sx:{display:"none"},type:"radio",value:t.id})]})]}),(0,i.jsxs)(b.Z,{size:"small",children:[(0,i.jsx)(v.Z,{onClick:()=>h("to"),children:"결재"}),(0,i.jsx)(v.Z,{onClick:()=>h("cc"),children:"참조"}),(0,i.jsx)(v.Z,{onClick:()=>h("ccc"),children:"최종 참조"})]})]})})}var C=function(e){let{units:t,...n}=e,{palette:r}=(0,m.Z)();return(0,i.jsx)(l.Z,{"data-component":"OrganizationCardList",sx:{border:"1px solid ".concat(r.action.disabled),borderRadius:2,height:"100%",overflow:"auto",width:"100%"},...n,children:null==t?void 0:t.map(e=>(0,i.jsx)(k,{unit:e},e.id))})},I=n(5111),y=n(1596),V=n(9524),z=n(4707),W=function(e){let{meta:t,...n}=e,{palette:r}=(0,m.Z)(),a=(0,d.useMemo)(()=>{if(t){let e=t.reduce((e,t)=>({...e,[t.id]:t}),{});return t.forEach(t=>{if(t.group){let n=e[t.group];n&&(n.children||(n.children=[]),0===n.children.filter(e=>{let{id:n}=e;return t.id===n}).length&&n.children.push(t))}}),Object.values(e).filter(e=>{let{level:t}=e;return 1===t})}return[]},[t]),o=e=>(0,i.jsx)(V.Z,{collapseIcon:(0,i.jsx)(I.Z,{}),expandIcon:(0,i.jsx)(y.Z,{}),label:(0,i.jsx)(s.Z,{fontSize:"0.8rem",children:e.name}),nodeId:e.id,children:e.children?e.children.map(e=>o(e)):null},e.id);return(0,i.jsx)(z.Z,{"data-component":"OrganizationTree",sx:{border:"1px solid ".concat(r.action.disabled),borderRadius:2,height:"100%",overflow:"auto",padding:2,width:"100%"},...n,children:a.map(e=>o(e))})},P=n(2761),S=n(9041),O=function(){var e;let t=(0,u.Gc)(),{data:n}=j.Z.useGetOrganization(),a=(0,d.useCallback)(()=>{var e,i;let r=t.watch("search");return r&&r.length>1?null==n?void 0:null===(i=n.body)||void 0===i?void 0:i.organizationUnit.filter(e=>{let{name:t,orgName:n}=e;return t.includes(r)||n.includes(r)}):null==n?void 0:null===(e=n.body)||void 0===e?void 0:e.organizationUnit.filter(e=>{let{orgId:n}=e;return n===t.watch("meta")})},[n,t]);return(0,i.jsxs)(l.Z,{height:"100%",spacing:2,children:[(0,i.jsx)(w.Z,{width:"100%",children:(0,i.jsx)(f.Z,{helperText:"두 글자 이상의 키워드 입력 (이름, 부서)",label:"검색",name:"search",size:"small",InputProps:{startAdornment:(0,i.jsx)(S.Z,{position:"start",children:(0,i.jsx)(P.Z,{})})},fullWidth:!0})}),(0,i.jsxs)(r.Z,{direction:"row",flex:1,mobileProps:{direction:"column",overflow:void 0},overflow:"auto",point:"md",spacing:4,children:[(0,i.jsx)(r.Z,{maxWidth:230,point:"md",width:"100%",mobileProps:{height:150,maxWidth:"100%"},children:(0,i.jsx)(W,{defaultExpanded:["RS0000"],meta:null==n?void 0:null===(e=n.body)||void 0===e?void 0:e.organizationMeta,selected:"RS0000",onNodeSelect(e,n){t.resetField("unit"),t.setValue("meta",n)}})}),(0,i.jsx)(r.Z,{flex:1,mobileProps:{flex:void 0,height:250},point:"md",children:(0,i.jsx)(C,{units:a()})}),(0,i.jsxs)(r.Z,{direction:"column",maxWidth:180,point:"md",spacing:4,width:"100%",mobileProps:{height:350,maxWidth:void 0},children:[(0,i.jsx)(x,{name:"to",units:t.watch("to"),interactable:!0}),(0,i.jsx)(x,{name:"cc",units:t.watch("cc"),interactable:!0}),(0,i.jsx)(x,{name:"ccc",units:t.watch("ccc"),interactable:!0})]})]})]})},G=function(e){let{to:t,cc:n,ccc:r,...a}=e,o=(0,u.Gc)(),c=(0,u.cI)({defaultValues:{cc:n,ccc:r,to:t}});(0,d.useEffect)(()=>{a.open&&(c.setValue("to",t),c.setValue("cc",n),c.setValue("ccc",r))},[a.open,c]);let l=(0,d.useCallback)(e=>{o.setValue("to",e.to),o.setValue("cc",e.cc),o.setValue("ccc",e.ccc),a.onClose&&a.onClose({},"backdropClick")},[o]),s=()=>{c.handleSubmit(l)()};return(0,i.jsx)(g.Z,{confirm:{onClick:s},"data-component":"OrganizationModal",maxWidth:"lg",title:"조직도",type:"info",fullWidth:!0,...a,children:(0,i.jsx)(p.Z,{form:c,onSubmit:l,children:(0,i.jsx)(w.Z,{height:600,paddingTop:1,children:(0,i.jsx)(O,{})})})})},R=n(1715);function T(){let e=(0,u.Gc)(),[t,n]=(0,d.useState)(!1),a=(0,d.useCallback)(()=>{n(!0)},[n]),o=(0,d.useCallback)(()=>{n(!1)},[n]);return(0,i.jsxs)(l.Z,{spacing:2,children:[(0,i.jsx)(l.Z,{alignItems:"end",children:(0,i.jsx)(v.Z,{startIcon:(0,i.jsx)(R.Z,{}),variant:"outlined",onClick:a,children:"변경"})}),(0,i.jsxs)(r.Z,{direction:"row",mobileProps:{direction:"column"},point:"md",spacing:4,children:[(0,i.jsx)(x,{name:"to",units:e.watch("to")||[]}),(0,i.jsx)(x,{name:"cc",units:e.watch("cc")||[]}),(0,i.jsx)(x,{name:"ccc",units:e.watch("ccc")||[]})]}),(0,i.jsx)(G,{cc:e.watch("cc")||[],ccc:e.watch("ccc")||[],open:t,to:e.watch("to")||[],onClose:o})]})}},1970:function(e,t,n){"use strict";var i=n(1473),r=n(4191),a=n(8767);t.Z={useGetCalendar:function(e,t){let n=(0,i.m)();return(0,a.useQuery)(["jade-v2","getCalendar","".concat(e.year,"-").concat(e.month)],async()=>{let t=await new r.$d(await n).getCalendarV2(e);return t},t)},useGetOrganization:function(e){let t=(0,i.m)();return(0,a.useQuery)(["jade-v2","getOrganization"],async()=>{let e=await new r.$d(await t).getOrganizationV2();return e},e)},useLogin:function(e){let t=(0,i.m)();return(0,a.useQuery)(["jade-v2","login"],async()=>{let e=await new r.$d(await t).loginV2();return e},e)},usePostCalendarPlan:function(e){let t=(0,i.m)();return(0,a.useMutation)(["jade-v2","postCalendarPlan"],async e=>{let n=await new r.$d(await t).postCalendarPlanV2(e);return n},e)},usePostWorkIn:function(e){let t=(0,i.m)();return(0,a.useMutation)(["jade-v2","postWorkIn"],async()=>{let e=await new r.$d(await t).postWorkInV2();return e},e)},usePostWorkOut:function(e){let t=(0,i.m)();return(0,a.useMutation)(["jade-v2","postWorkOut"],async()=>{let e=await new r.$d(await t).postWorkOutV2();return e},e)},useTime:function(e){let t=(0,i.m)();return(0,a.useQuery)(["jade-v2","time"],async()=>{let e=await new r.$d(await t).getWorkTimeInfoV2();return e},e)},useUserInfo:function(e){let t=(0,i.m)();return(0,a.useQuery)(["jade-v2","userInfo"],async()=>{let e=await new r.$d(await t).getUserInfoV2();return e},e)}}},2608:function(e){e.exports={profile:"Profile_profile__vXYCP"}}}]);