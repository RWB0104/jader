(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[853],{8032:function(e,n,i){"use strict";i.d(n,{Z:function(){return c}});var t=i(1874),r=i(4813),c=function(e){let{form:n,onSubmit:i,...c}=e,o=(0,r.cI)(),a=n||o;return(0,t.jsx)(r.RV,{...a,children:(0,t.jsx)("form",{"data-component":"Form",onSubmit:a.handleSubmit(i),...c})})}},7887:function(e,n,i){"use strict";i.d(n,{Z:function(){return l}});var t=i(1874),r=i(7814),c=i.n(r),o=i(8202),a=i.n(o),l=function(e){let{userId:n,src:i,...r}=e;return(0,t.jsx)("img",{alt:n,className:c()(a().profile),referrerPolicy:"no-referrer",src:n?"https://ehr.jadehr.co.kr/custom/c2202010/images/emp/".concat(n,".jpg"):i,onError(e){let{currentTarget:n}=e;n.src="/jader/assets/images/jader_transparent.png"},...r})}},9445:function(e,n,i){"use strict";i.d(n,{Z:function(){return o}});var t=i(1874),r=i(1049),c=i(4813),o=function(e){var n,i;let{name:o,error:a,helperText:l,options:s,...d}=e,{register:h,formState:u}=(0,c.Gc)();return(0,t.jsx)(r.Z,{"data-component":"TextFormField",error:a||void 0!==u.errors[o],helperText:(null===(n=u.errors[o])||void 0===n?void 0:null===(i=n.message)||void 0===i?void 0:i.toString())||l,...d,...h(o,s)})}},498:function(e,n,i){"use strict";i.d(n,{Z:function(){return l}});var t=i(1874),r=i(7309),c=i(686),o=i(2261),a=i(7959);function l(e){let{name:n="BoxPaper",icon:i,title:l,sx:s,children:d,...h}=e;return(0,t.jsx)(a.E.div,{"data-component":n,transition:{duration:.5},variants:{init:{opacity:0,translateY:50,width:"100%"},show:{opacity:1,translateY:0}},children:(0,t.jsx)(r.Z,{sx:{width:"100%",...s},...h,children:(0,t.jsxs)(c.Z,{borderRadius:5,padding:4,spacing:4,width:"100%",children:[(0,t.jsx)(c.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",width:"100%",children:(0,t.jsxs)(c.Z,{alignItems:"center",direction:"row",spacing:1,children:[i,(0,t.jsx)(o.Z,{fontWeight:"bold",variant:"h6",children:l})]})}),d]})})})}},458:function(e,n,i){"use strict";i.d(n,{Z:function(){return f}});var t=i(1874),r=i(3812),c=i(7887),o=i(5048),a=i(7997),l=i(5728),s=i(9385),d=i(8281),h=i(686),u=i(2261),x=i(7959),p=i(9953),m=i(1868),j=function(e){var n;let{item:i,onSelectClick:r,onDeleteClick:j,...g}=e,{palette:{primary:{main:Z},divider:f}}=(0,s.Z)(),w=(0,m.Zl)(o.fU),v=(0,p.useCallback)(()=>{r&&(r(i),w({children:(0,t.jsx)(h.Z,{spacing:1,children:(0,t.jsxs)(u.Z,{variant:"caption",children:[i.rowDate," 데이터를 적용했습니다."]})}),severity:"info",title:"신청서 적용"}))},[i,r]),b=(0,p.useCallback)(()=>{j&&(j(i),w({children:(0,t.jsx)(h.Z,{spacing:1,children:(0,t.jsxs)(u.Z,{variant:"caption",children:[i.rowDate," 데이터를 삭제했습니다."]})}),severity:"info",title:"신청서 삭제"}))},[i,j]);return(0,t.jsx)(x.E.div,{animate:"show",exit:"hide",initial:"hide",transition:{duration:.3},variants:{hide:{opacity:0,scale:.5},show:{opacity:1,scale:1}},children:(0,t.jsxs)(h.Z,{alignItems:"center",border:"2px solid",borderColor:Z,borderRadius:4,boxShadow:"3px 3px 16px ".concat(f),direction:"row",padding:2,spacing:2,...g,children:[(0,t.jsxs)(h.Z,{direction:"column",flex:1,spacing:2,children:[(0,t.jsx)(u.Z,{fontWeight:"bold",children:i.rowTitle}),(0,t.jsx)(h.Z,{direction:"row",spacing:2,children:(0,t.jsxs)(h.Z,{alignItems:"center",direction:"row",flex:1,spacing:1,children:[(0,t.jsx)(h.Z,{direction:"row",spacing:-1.5,children:null===(n=i.rowImages)||void 0===n?void 0:n.slice(0,3).map(e=>(0,t.jsx)(c.Z,{height:24,userId:e,width:24},e))}),(0,t.jsx)(u.Z,{fontSize:"0.8rem",children:i.rowImages&&i.rowImages.length>3?"+".concat(i.rowImages.length-3):""})]})})]}),(0,t.jsxs)(h.Z,{alignItems:"end",justifyContent:"space-between",spacing:2,children:[(0,t.jsxs)(h.Z,{alignItems:"center",direction:"row",spacing:1,children:[r?(0,t.jsx)(d.Z,{size:"small",onClick:v,children:(0,t.jsx)(l.Z,{})}):null,j?(0,t.jsx)(d.Z,{size:"small",onClick:b,children:(0,t.jsx)(a.Z,{})}):null]}),(0,t.jsx)(u.Z,{variant:"caption",children:i.rowDate})]})]})})},g=i(8543),Z=i(2890),f=function(e){let{list:n,onSelectClick:i,onDeleteClick:c,...o}=e,{palette:{divider:a}}=(0,s.Z)();return(0,t.jsx)(h.Z,{"data-component":"FormList",spacing:2,...o,children:(0,t.jsx)(Z.M,{children:n&&n.length>0?n.map(e=>(0,t.jsx)(j,{item:e,onDeleteClick:c,onSelectClick:i},e.date)):(0,t.jsx)(x.E.div,{animate:"show",exit:"hide",initial:"hide",transition:{duration:.3},variants:{hide:{opacity:0,scale:.5},show:{opacity:1,scale:1}},children:(0,t.jsxs)(h.Z,{alignItems:"center",border:"1px solid",borderColor:a,borderRadius:2,justifyContent:"center",padding:2,spacing:2,children:[(0,t.jsx)(g.Z,{width:150,children:(0,t.jsx)(r.Z,{iconName:"add"})}),(0,t.jsx)(u.Z,{variant:"caption",children:"신청서 큐 등록을 눌러 신청서를 추가하세요!"})]})})})})}},1473:function(e,n,i){"use strict";i.d(n,{Z:function(){return a}});var t=i(1874),r=i(1337),c=i(686),o=i(7959),a=function(e){let{name:n="TemplateStack",innerStackProps:i,children:a,...l}=e;return(0,t.jsx)(o.E.div,{animate:"show",initial:"init",style:{width:"100%"},transition:{staggerChildren:.3},children:(0,t.jsx)(c.Z,{alignItems:"center",component:"article","data-component":n,padding:2,...l,children:(0,t.jsx)(r.Z,{...i,children:a})})})}},8034:function(e,n,i){"use strict";i.d(n,{Z:function(){return _}});var t=i(1874),r=i(1004),c=i(7887),o=i(7674),a=i(8281),l=i(686),s=i(2261),d=i(9953),h=i(4813),u=function(e){let{name:n,unit:i,interactable:r,...u}=e,x=(0,h.Gc)(),p=(0,d.useCallback)(()=>{let e=x.getValues(n);x.setValue(n,e.filter(e=>{let{id:n}=e;return n!==i.id}))},[x,i,n]);return(0,t.jsxs)(l.Z,{alignItems:"center","data-component":"OrganizationSelectItem",direction:"row",padding:1,spacing:1,...u,children:[(0,t.jsx)(c.Z,{alt:i.id,height:24,userId:i.id,width:24}),(0,t.jsx)(s.Z,{flex:1,fontSize:"0.8rem",children:i.name}),r?(0,t.jsx)(a.Z,{sx:{height:24,width:24},onClick:p,children:(0,t.jsx)(o.Z,{sx:{height:18,width:18}})}):null]})},x=i(9385),p=function(e){let{name:n,units:i,interactable:r,...c}=e,{palette:{divider:o}}=(0,x.Z)(),a=(0,d.useMemo)(()=>"to"===n?"결재":"cc"===n?"참조":"ccc"===n?"최종 참조":null,[n]);return(0,t.jsxs)(l.Z,{border:"1px solid",borderColor:o,borderRadius:2,"data-component":"OrganizationSelectList",height:"100%",minHeight:70,width:"100%",...c,children:[(0,t.jsx)(l.Z,{alignItems:"center",borderBottom:"1px solid",borderColor:o,justifyContent:"center",padding:.5,children:(0,t.jsxs)(s.Z,{variant:"caption",children:[a," (",null==i?void 0:i.length,"명)"]})}),(0,t.jsx)(l.Z,{overflow:"auto",children:null==i?void 0:i.map(e=>(0,t.jsx)(u,{interactable:r,name:n,unit:e},"OrganizationSelectItem-".concat(e.id)))})]})},m=i(8032),j=i(7760),g=i(9445),Z=i(9799),f=i(2671),w=i(8543),v=i(9918),b=i(8998);function C(e){let{unit:n,...i}=e,{palette:o}=(0,x.Z)(),a=(0,h.Gc)(),u=(0,d.useCallback)(e=>{let i=a.getValues(e);i.find(e=>{let{id:i}=e;return i===n.id})||a.setValue(e,[...i,n])},[n,a]);return(0,d.useEffect)(()=>{0===a.watch("to").length?a.setError("to",{message:"하나 이상의 결제자를 지정해주세요.",type:"required"}):a.clearErrors("to")},[a.watch("to")]),(0,t.jsx)(w.Z,{"data-component":"OrganizationCard",sx:{"&:hover":{background:o.action.disabledBackground}},...i,children:(0,t.jsxs)(r.Z,{alignItems:"center",direction:"row",mobileProps:{direction:"column"},padding:"10px 25px",point:"md",spacing:2,width:"100%",children:[(0,t.jsxs)(l.Z,{alignItems:"center",direction:"row",flex:1,spacing:2,children:[(0,t.jsx)(c.Z,{height:40,userId:n.id,width:40}),(0,t.jsxs)(l.Z,{alignItems:"start",flex:1,children:[(0,t.jsxs)(l.Z,{alignItems:"center",direction:"row",spacing:.5,children:[n.leader?(0,t.jsx)(f.Z,{color:"warning"}):null,(0,t.jsx)(s.Z,{fontWeight:"bold",variant:"body2",children:n.name})]}),(0,t.jsx)(s.Z,{variant:"caption",children:n.orgName}),(0,t.jsx)(g.Z,{name:"unit",sx:{display:"none"},type:"radio",value:n.id})]})]}),(0,t.jsxs)(b.Z,{size:"small",children:[(0,t.jsx)(v.Z,{onClick:()=>u("to"),children:"결재"}),(0,t.jsx)(v.Z,{onClick:()=>u("cc"),children:"참조"}),(0,t.jsx)(v.Z,{onClick:()=>u("ccc"),children:"최종 참조"})]})]})})}var I=function(e){let{units:n,...i}=e,{palette:r}=(0,x.Z)();return(0,t.jsx)(l.Z,{"data-component":"OrganizationCardList",sx:{border:"1px solid ".concat(r.action.disabled),borderRadius:2,height:"100%",overflow:"auto",width:"100%"},...i,children:null==n?void 0:n.map(e=>(0,t.jsx)(C,{unit:e},e.id))})},k=i(5468),y=i(1212),z=i(9542),S=i(5516),E=function(e){let{meta:n,...i}=e,{palette:r}=(0,x.Z)(),c=(0,d.useMemo)(()=>{if(n){let e=n.reduce((e,n)=>({...e,[n.id]:n}),{});return n.forEach(n=>{if(n.group){let i=e[n.group];i&&(i.children||(i.children=[]),0===i.children.filter(e=>{let{id:i}=e;return n.id===i}).length&&i.children.push(n))}}),Object.values(e).filter(e=>{let{level:n}=e;return 1===n})}return[]},[n]),o=e=>(0,t.jsx)(z.Z,{collapseIcon:(0,t.jsx)(k.Z,{}),expandIcon:(0,t.jsx)(y.Z,{}),label:(0,t.jsx)(s.Z,{fontSize:"0.8rem",children:e.name}),nodeId:e.id,children:e.children?e.children.map(e=>o(e)):null},e.id);return(0,t.jsx)(S.Z,{"data-component":"OrganizationTree",sx:{border:"1px solid ".concat(r.action.disabled),borderRadius:2,height:"100%",overflow:"auto",padding:2,width:"100%"},...i,children:c.map(e=>o(e))})},V=i(6042),P=i(5706),O=function(){var e,n;let{palette:{error:{main:i}}}=(0,x.Z)(),c=(0,h.Gc)(),{data:o}=Z.Z.useGetOrganization(),a=(0,d.useCallback)(()=>{var e,n;let i=c.watch("search");return i&&i.length>1?null==o?void 0:null===(n=o.body)||void 0===n?void 0:n.organizationUnit.filter(e=>{let{name:n,orgName:t}=e;return n.includes(i)||t.includes(i)}):null==o?void 0:null===(e=o.body)||void 0===e?void 0:e.organizationUnit.filter(e=>{let{orgId:n}=e;return n===c.watch("meta")})},[o,c]);return(0,t.jsxs)(l.Z,{height:"100%",spacing:2,children:[(0,t.jsx)(w.Z,{width:"100%",children:(0,t.jsx)(g.Z,{helperText:"두 글자 이상의 키워드 입력 (이름, 부서)",label:"검색",name:"search",size:"small",InputProps:{startAdornment:(0,t.jsx)(P.Z,{position:"start",children:(0,t.jsx)(V.Z,{})})},fullWidth:!0})}),(0,t.jsxs)(r.Z,{direction:"row",flex:1,mobileProps:{direction:"column",overflow:void 0},overflow:"auto",point:"md",spacing:4,children:[(0,t.jsx)(r.Z,{maxWidth:230,point:"md",width:"100%",mobileProps:{height:150,maxWidth:"100%"},children:(0,t.jsx)(E,{defaultExpanded:["RS0000"],meta:null==o?void 0:null===(e=o.body)||void 0===e?void 0:e.organizationMeta,selected:"RS0000",onNodeSelect(e,n){c.resetField("unit"),c.setValue("meta",n)}})}),(0,t.jsx)(r.Z,{flex:1,mobileProps:{flex:void 0,height:250},point:"md",children:(0,t.jsx)(I,{units:a()})}),(0,t.jsxs)(r.Z,{direction:"column",maxWidth:180,point:"md",spacing:4,width:"100%",mobileProps:{height:350,maxWidth:void 0},children:[(0,t.jsx)(p,{name:"to",units:c.watch("to"),interactable:!0}),(0,t.jsx)(p,{name:"cc",units:c.watch("cc"),interactable:!0}),(0,t.jsx)(p,{name:"ccc",units:c.watch("ccc"),interactable:!0})]})]}),(0,t.jsx)(s.Z,{color:i,variant:"caption",children:null===(n=c.formState.errors.to)||void 0===n?void 0:n.message})]})},W=function(e){let{to:n,cc:i,ccc:r,...c}=e,o=(0,h.Gc)(),a=(0,h.cI)({defaultValues:{cc:i,ccc:r,to:n}});(0,d.useEffect)(()=>{c.open&&(a.setValue("to",n),a.setValue("cc",i),a.setValue("ccc",r))},[c.open,a]);let l=(0,d.useCallback)(e=>{o.setValue("to",e.to),o.setValue("cc",e.cc),o.setValue("ccc",e.ccc),c.onClose&&c.onClose({},"backdropClick")},[o]),s=()=>{a.handleSubmit(l)()};return(0,t.jsx)(j.Z,{confirm:{onClick:s},"data-component":"OrganizationModal",maxWidth:"lg",title:"조직도",type:"info",fullWidth:!0,...c,children:(0,t.jsx)(m.Z,{form:a,onSubmit:l,children:(0,t.jsx)(w.Z,{height:600,paddingTop:1,children:(0,t.jsx)(O,{})})})})},R=i(7360);function _(){let e=(0,h.Gc)(),[n,i]=(0,d.useState)(!1),c=(0,d.useCallback)(()=>{i(!0)},[i]),o=(0,d.useCallback)(()=>{i(!1)},[i]);return(0,t.jsxs)(l.Z,{"data-component":"OrganizationBoard",spacing:2,children:[(0,t.jsx)(l.Z,{alignItems:"end",children:(0,t.jsx)(v.Z,{startIcon:(0,t.jsx)(R.Z,{}),variant:"outlined",onClick:c,children:"변경"})}),(0,t.jsxs)(r.Z,{direction:"row",mobileProps:{direction:"column"},point:"md",spacing:4,children:[(0,t.jsx)(p,{name:"to",units:e.watch("to")||[]}),(0,t.jsx)(p,{name:"cc",units:e.watch("cc")||[]}),(0,t.jsx)(p,{name:"ccc",units:e.watch("ccc")||[]})]}),(0,t.jsx)(W,{cc:e.watch("cc")||[],ccc:e.watch("ccc")||[],open:n,to:e.watch("to")||[],onClose:o})]})}},6938:function(e,n,i){"use strict";var t=i(4891);n.Z=t.Z},8202:function(e){e.exports={profile:"Profile_profile__vXYCP"}}}]);