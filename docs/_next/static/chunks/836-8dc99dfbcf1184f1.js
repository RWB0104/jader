(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[836],{1901:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var i=t(5893),r=t(7536),c=function(e){let{form:n,onSubmit:t,...c}=e,o=(0,r.cI)(),a=n||o;return(0,i.jsx)(r.RV,{...a,children:(0,i.jsx)("form",{"data-component":"Form",onSubmit:a.handleSubmit(t),...c})})}},7679:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var i=t(5893),r=t(4184),c=t.n(r),o=t(2608),a=t.n(o),s=function(e){let{userId:n,src:t,...r}=e;return(0,i.jsx)("img",{alt:n,className:c()(a().profile),referrerPolicy:"no-referrer",src:n?"https://ehr.jadehr.co.kr/custom/c2202010/images/emp/".concat(n,".jpg"):t,onError(e){let{currentTarget:n}=e;n.src="/jader/assets/images/jader_transparent.png"},...r})}},4794:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var i=t(5893),r=t(2097),c=t(1225),o=t(9144),a=function(e){let{point:n,mobileProps:t,...a}=e,s=(0,r.Z)(),l=(0,c.Z)(s.breakpoints.up(n||"lg"));return(0,i.jsx)(o.Z,{"data-component":"ResponsiveStack",...l?a:{...a,...t}})}},413:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var i=t(5893),r=t(7836),c=t(7536),o=function(e){var n,t;let{name:o,error:a,helperText:s,options:l,...d}=e,{register:u,formState:h}=(0,c.Gc)();return(0,i.jsx)(r.Z,{"data-component":"TextFormField",error:a||void 0!==h.errors[o],helperText:(null===(n=h.errors[o])||void 0===n?void 0:null===(t=n.message)||void 0===t?void 0:t.toString())||s,...d,...u(o,l)})}},3017:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var i=t(5893),r=t(918),c=t(9144),o=t(9630),a=t(3602);function s(e){let{name:n="BoxPaper",icon:t,title:s,sx:l,children:d,...u}=e;return(0,i.jsx)(a.E.div,{"data-component":n,transition:{duration:.5},variants:{init:{opacity:0,translateY:50,width:"100%"},show:{opacity:1,translateY:0}},children:(0,i.jsx)(r.Z,{sx:{width:"100%",...l},...u,children:(0,i.jsxs)(c.Z,{borderRadius:5,padding:4,spacing:4,width:"100%",children:[(0,i.jsx)(c.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",width:"100%",children:(0,i.jsxs)(c.Z,{alignItems:"center",direction:"row",spacing:1,children:[t,(0,i.jsx)(o.Z,{fontWeight:"bold",variant:"h6",children:s})]})}),d]})})})}},1484:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var i=t(5893),r=t(2227),c=t(7679),o=t(1733),a=t(7957),s=t(2097),l=t(562),d=t(9144),u=t(9630),h=t(3602),x=t(7294),p=function(e){var n;let{item:t,onSelectClick:r,onDeleteClick:p,...m}=e,{palette:{primary:{main:j},divider:g}}=(0,s.Z)(),Z=(0,x.useCallback)(()=>{r&&r(t)},[t,r]),f=(0,x.useCallback)(()=>{p&&p(t)},[t,p]);return(0,i.jsx)(h.E.div,{animate:"show",exit:"hide",initial:"hide",transition:{duration:.3},variants:{hide:{opacity:0,scale:.5},show:{opacity:1,scale:1}},children:(0,i.jsxs)(d.Z,{alignItems:"center",border:"2px solid",borderColor:j,borderRadius:4,boxShadow:"3px 3px 16px ".concat(g),direction:"row",padding:2,spacing:2,...m,children:[(0,i.jsxs)(d.Z,{direction:"column",flex:1,spacing:2,children:[(0,i.jsx)(u.Z,{fontWeight:"bold",children:t.rowTitle}),(0,i.jsx)(d.Z,{direction:"row",spacing:2,children:(0,i.jsxs)(d.Z,{alignItems:"center",direction:"row",flex:1,spacing:1,children:[(0,i.jsx)(d.Z,{direction:"row",spacing:-1.5,children:null===(n=t.rowImages)||void 0===n?void 0:n.slice(0,3).map(e=>(0,i.jsx)(c.Z,{height:24,userId:e,width:24},e))}),(0,i.jsx)(u.Z,{fontSize:"0.8rem",children:t.rowImages&&t.rowImages.length>3?"+".concat(t.rowImages.length-3):""})]})})]}),(0,i.jsxs)(d.Z,{alignItems:"end",justifyContent:"space-between",spacing:2,children:[(0,i.jsxs)(d.Z,{alignItems:"center",direction:"row",spacing:1,children:[r?(0,i.jsx)(l.Z,{size:"small",onClick:Z,children:(0,i.jsx)(a.Z,{})}):null,p?(0,i.jsx)(l.Z,{size:"small",onClick:f,children:(0,i.jsx)(o.Z,{})}):null]}),(0,i.jsx)(u.Z,{variant:"caption",children:t.rowDate})]})]})})},m=t(1953),j=t(5820),g=function(e){let{list:n,onSelectClick:t,onDeleteClick:c,...o}=e,{palette:{divider:a}}=(0,s.Z)();return(0,i.jsx)(d.Z,{"data-component":"FormList",spacing:2,...o,children:(0,i.jsx)(j.M,{children:n&&n.length>0?n.map(e=>(0,i.jsx)(p,{item:e,onDeleteClick:c,onSelectClick:t},e.date)):(0,i.jsx)(h.E.div,{animate:"show",exit:"hide",initial:"hide",transition:{duration:.3},variants:{hide:{opacity:0,scale:.5},show:{opacity:1,scale:1}},children:(0,i.jsxs)(d.Z,{alignItems:"center",border:"1px solid",borderColor:a,borderRadius:2,justifyContent:"center",padding:2,spacing:2,children:[(0,i.jsx)(m.Z,{width:150,children:(0,i.jsx)(r.Z,{iconName:"add"})}),(0,i.jsx)(u.Z,{variant:"caption",children:"신청서 큐 등록을 눌러 신청서를 추가하세요!"})]})})})})}},9741:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var i=t(5893),r=t(9144),c=function(e){let{name:n="ContentStack",alignItems:t="center",justifyContent:c="center",maxWidth:o=1200,minWidth:a=320,spacing:s=2,width:l="100%",...d}=e;return(0,i.jsx)(r.Z,{alignItems:t,"data-component":n,justifyContent:c,maxWidth:o,minWidth:a,spacing:s,width:l,...d})},o=t(3602),a=function(e){let{name:n="TemplateStack",innerStackProps:t,children:a,...s}=e;return(0,i.jsx)(o.E.div,{animate:"show",initial:"init",style:{width:"100%"},transition:{staggerChildren:.3},children:(0,i.jsx)(r.Z,{alignItems:"center",component:"article","data-component":n,padding:2,...s,children:(0,i.jsx)(c,{...t,children:a})})})}},4839:function(e,n,t){"use strict";t.d(n,{Z:function(){return _}});var i=t(5893),r=t(4794),c=t(7679),o=t(594),a=t(562),s=t(9144),l=t(9630),d=t(7294),u=t(7536),h=function(e){let{name:n,unit:t,interactable:r,...h}=e,x=(0,u.Gc)(),p=(0,d.useCallback)(()=>{let e=x.getValues(n);x.setValue(n,e.filter(e=>{let{id:n}=e;return n!==t.id}))},[x,t,n]);return(0,i.jsxs)(s.Z,{alignItems:"center","data-component":"OrganizationSelectItem",direction:"row",padding:1,spacing:1,...h,children:[(0,i.jsx)(c.Z,{alt:t.id,height:24,userId:t.id,width:24}),(0,i.jsx)(l.Z,{flex:1,fontSize:"0.8rem",children:t.name}),r?(0,i.jsx)(a.Z,{sx:{height:24,width:24},onClick:p,children:(0,i.jsx)(o.Z,{sx:{height:18,width:18}})}):null]})},x=t(2097),p=function(e){let{name:n,units:t,interactable:r,...c}=e,{palette:{divider:o}}=(0,x.Z)(),a=(0,d.useMemo)(()=>"to"===n?"결재":"cc"===n?"참조":"ccc"===n?"최종 참조":null,[n]);return(0,i.jsxs)(s.Z,{border:"1px solid",borderColor:o,borderRadius:2,"data-component":"OrganizationSelectList",height:"100%",minHeight:70,width:"100%",...c,children:[(0,i.jsx)(s.Z,{alignItems:"center",borderBottom:"1px solid",borderColor:o,justifyContent:"center",padding:.5,children:(0,i.jsxs)(l.Z,{variant:"caption",children:[a," (",null==t?void 0:t.length,"명)"]})}),(0,i.jsx)(s.Z,{overflow:"auto",children:null==t?void 0:t.map(e=>(0,i.jsx)(h,{interactable:r,name:n,unit:e},"OrganizationSelectItem-".concat(e.id)))})]})},m=t(1901),j=t(1519),g=t(413),Z=t(1955),f=t(4957),w=t(1953),v=t(4225),b=t(2135);function C(e){let{unit:n,...t}=e,{palette:o}=(0,x.Z)(),a=(0,u.Gc)(),h=(0,d.useCallback)(e=>{let t=a.getValues(e);t.find(e=>{let{id:t}=e;return t===n.id})||a.setValue(e,[...t,n])},[n,a]);return(0,d.useEffect)(()=>{0===a.watch("to").length?a.setError("to",{message:"하나 이상의 결제자를 지정해주세요.",type:"required"}):a.clearErrors("to")},[a.watch("to")]),(0,i.jsx)(w.Z,{"data-component":"OrganizationCard",sx:{"&:hover":{background:o.action.disabledBackground}},...t,children:(0,i.jsxs)(r.Z,{alignItems:"center",direction:"row",mobileProps:{direction:"column"},padding:"10px 25px",point:"md",spacing:2,width:"100%",children:[(0,i.jsxs)(s.Z,{alignItems:"center",direction:"row",flex:1,spacing:2,children:[(0,i.jsx)(c.Z,{height:40,userId:n.id,width:40}),(0,i.jsxs)(s.Z,{alignItems:"start",flex:1,children:[(0,i.jsxs)(s.Z,{alignItems:"center",direction:"row",spacing:.5,children:[n.leader?(0,i.jsx)(f.Z,{color:"warning"}):null,(0,i.jsx)(l.Z,{fontWeight:"bold",variant:"body2",children:n.name})]}),(0,i.jsx)(l.Z,{variant:"caption",children:n.orgName}),(0,i.jsx)(g.Z,{name:"unit",sx:{display:"none"},type:"radio",value:n.id})]})]}),(0,i.jsxs)(b.Z,{size:"small",children:[(0,i.jsx)(v.Z,{onClick:()=>h("to"),children:"결재"}),(0,i.jsx)(v.Z,{onClick:()=>h("cc"),children:"참조"}),(0,i.jsx)(v.Z,{onClick:()=>h("ccc"),children:"최종 참조"})]})]})})}var I=function(e){let{units:n,...t}=e,{palette:r}=(0,x.Z)();return(0,i.jsx)(s.Z,{"data-component":"OrganizationCardList",sx:{border:"1px solid ".concat(r.action.disabled),borderRadius:2,height:"100%",overflow:"auto",width:"100%"},...t,children:null==n?void 0:n.map(e=>(0,i.jsx)(C,{unit:e},e.id))})},k=t(5111),y=t(1596),S=t(6452),z=t(4707),E=function(e){let{meta:n,...t}=e,{palette:r}=(0,x.Z)(),c=(0,d.useMemo)(()=>{if(n){let e=n.reduce((e,n)=>({...e,[n.id]:n}),{});return n.forEach(n=>{if(n.group){let t=e[n.group];t&&(t.children||(t.children=[]),0===t.children.filter(e=>{let{id:t}=e;return n.id===t}).length&&t.children.push(n))}}),Object.values(e).filter(e=>{let{level:n}=e;return 1===n})}return[]},[n]),o=e=>(0,i.jsx)(S.Z,{collapseIcon:(0,i.jsx)(k.Z,{}),expandIcon:(0,i.jsx)(y.Z,{}),label:(0,i.jsx)(l.Z,{fontSize:"0.8rem",children:e.name}),nodeId:e.id,children:e.children?e.children.map(e=>o(e)):null},e.id);return(0,i.jsx)(z.Z,{"data-component":"OrganizationTree",sx:{border:"1px solid ".concat(r.action.disabled),borderRadius:2,height:"100%",overflow:"auto",padding:2,width:"100%"},...t,children:c.map(e=>o(e))})},V=t(2761),W=t(9041),P=function(){var e,n;let{palette:{error:{main:t}}}=(0,x.Z)(),c=(0,u.Gc)(),{data:o}=Z.Z.useGetOrganization(),a=(0,d.useCallback)(()=>{var e,n;let t=c.watch("search");return t&&t.length>1?null==o?void 0:null===(n=o.body)||void 0===n?void 0:n.organizationUnit.filter(e=>{let{name:n,orgName:i}=e;return n.includes(t)||i.includes(t)}):null==o?void 0:null===(e=o.body)||void 0===e?void 0:e.organizationUnit.filter(e=>{let{orgId:n}=e;return n===c.watch("meta")})},[o,c]);return(0,i.jsxs)(s.Z,{height:"100%",spacing:2,children:[(0,i.jsx)(w.Z,{width:"100%",children:(0,i.jsx)(g.Z,{helperText:"두 글자 이상의 키워드 입력 (이름, 부서)",label:"검색",name:"search",size:"small",InputProps:{startAdornment:(0,i.jsx)(W.Z,{position:"start",children:(0,i.jsx)(V.Z,{})})},fullWidth:!0})}),(0,i.jsxs)(r.Z,{direction:"row",flex:1,mobileProps:{direction:"column",overflow:void 0},overflow:"auto",point:"md",spacing:4,children:[(0,i.jsx)(r.Z,{maxWidth:230,point:"md",width:"100%",mobileProps:{height:150,maxWidth:"100%"},children:(0,i.jsx)(E,{defaultExpanded:["RS0000"],meta:null==o?void 0:null===(e=o.body)||void 0===e?void 0:e.organizationMeta,selected:"RS0000",onNodeSelect(e,n){c.resetField("unit"),c.setValue("meta",n)}})}),(0,i.jsx)(r.Z,{flex:1,mobileProps:{flex:void 0,height:250},point:"md",children:(0,i.jsx)(I,{units:a()})}),(0,i.jsxs)(r.Z,{direction:"column",maxWidth:180,point:"md",spacing:4,width:"100%",mobileProps:{height:350,maxWidth:void 0},children:[(0,i.jsx)(p,{name:"to",units:c.watch("to"),interactable:!0}),(0,i.jsx)(p,{name:"cc",units:c.watch("cc"),interactable:!0}),(0,i.jsx)(p,{name:"ccc",units:c.watch("ccc"),interactable:!0})]})]}),(0,i.jsx)(l.Z,{color:t,variant:"caption",children:null===(n=c.formState.errors.to)||void 0===n?void 0:n.message})]})},O=function(e){let{to:n,cc:t,ccc:r,...c}=e,o=(0,u.Gc)(),a=(0,u.cI)({defaultValues:{cc:t,ccc:r,to:n}});(0,d.useEffect)(()=>{c.open&&(a.setValue("to",n),a.setValue("cc",t),a.setValue("ccc",r))},[c.open,a]);let s=(0,d.useCallback)(e=>{o.setValue("to",e.to),o.setValue("cc",e.cc),o.setValue("ccc",e.ccc),c.onClose&&c.onClose({},"backdropClick")},[o]),l=()=>{a.handleSubmit(s)()};return(0,i.jsx)(j.Z,{confirm:{onClick:l},"data-component":"OrganizationModal",maxWidth:"lg",title:"조직도",type:"info",fullWidth:!0,...c,children:(0,i.jsx)(m.Z,{form:a,onSubmit:s,children:(0,i.jsx)(w.Z,{height:600,paddingTop:1,children:(0,i.jsx)(P,{})})})})},R=t(1715);function _(){let e=(0,u.Gc)(),[n,t]=(0,d.useState)(!1),c=(0,d.useCallback)(()=>{t(!0)},[t]),o=(0,d.useCallback)(()=>{t(!1)},[t]);return(0,i.jsxs)(s.Z,{"data-component":"OrganizationBoard",spacing:2,children:[(0,i.jsx)(s.Z,{alignItems:"end",children:(0,i.jsx)(v.Z,{startIcon:(0,i.jsx)(R.Z,{}),variant:"outlined",onClick:c,children:"변경"})}),(0,i.jsxs)(r.Z,{direction:"row",mobileProps:{direction:"column"},point:"md",spacing:4,children:[(0,i.jsx)(p,{name:"to",units:e.watch("to")||[]}),(0,i.jsx)(p,{name:"cc",units:e.watch("cc")||[]}),(0,i.jsx)(p,{name:"ccc",units:e.watch("ccc")||[]})]}),(0,i.jsx)(O,{cc:e.watch("cc")||[],ccc:e.watch("ccc")||[],open:n,to:e.watch("to")||[],onClose:o})]})}},9958:function(e,n,t){"use strict";var i=t(7412);n.Z=i.Z},2608:function(e){e.exports={profile:"Profile_profile__vXYCP"}}}]);