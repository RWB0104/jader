"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[149],{5149:function(e,t,o){o.d(t,{Z:function(){return e7}});var r,n,i,a,s,p=o(32060),l=o(40767),c=o(39953),u=o(64923),f=o(52102),d=o(47689),m=o(32991),h=o(51108),v=o(19385),g=o(76793),y=o(97046),b=o(41490),w=o(29846),x=o(46098),O=o(88101);function T(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Z(e){var t=T(e).Element;return e instanceof t||e instanceof Element}function R(e){var t=T(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function P(e){if("undefined"==typeof ShadowRoot)return!1;var t=T(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var E=Math.max,j=Math.min,M=Math.round;function k(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function L(){return!/^((?!chrome|android).)*safari/i.test(k())}function A(e,t,o){void 0===t&&(t=!1),void 0===o&&(o=!1);var r=e.getBoundingClientRect(),n=1,i=1;t&&R(e)&&(n=e.offsetWidth>0&&M(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&M(r.height)/e.offsetHeight||1);var a=(Z(e)?T(e):window).visualViewport,s=!L()&&o,p=(r.left+(s&&a?a.offsetLeft:0))/n,l=(r.top+(s&&a?a.offsetTop:0))/i,c=r.width/n,u=r.height/i;return{width:c,height:u,top:l,right:p+c,bottom:l+u,left:p,x:p,y:l}}function D(e){var t=T(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function S(e){return e?(e.nodeName||"").toLowerCase():null}function W(e){return((Z(e)?e.ownerDocument:e.document)||window.document).documentElement}function B(e){return A(W(e)).left+D(e).scrollLeft}function C(e){return T(e).getComputedStyle(e)}function N(e){var t=C(e),o=t.overflow,r=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+n+r)}function H(e){var t=A(e),o=e.offsetWidth,r=e.offsetHeight;return 1>=Math.abs(t.width-o)&&(o=t.width),1>=Math.abs(t.height-r)&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:r}}function F(e){return"html"===S(e)?e:e.assignedSlot||e.parentNode||(P(e)?e.host:null)||W(e)}function I(e,t){void 0===t&&(t=[]);var o,r=function e(t){return["html","body","#document"].indexOf(S(t))>=0?t.ownerDocument.body:R(t)&&N(t)?t:e(F(t))}(e),n=r===(null==(o=e.ownerDocument)?void 0:o.body),i=T(r),a=n?[i].concat(i.visualViewport||[],N(r)?r:[]):r,s=t.concat(a);return n?s:s.concat(I(F(a)))}function q(e){return R(e)&&"fixed"!==C(e).position?e.offsetParent:null}function U(e){for(var t=T(e),o=q(e);o&&["table","td","th"].indexOf(S(o))>=0&&"static"===C(o).position;)o=q(o);return o&&("html"===S(o)||"body"===S(o)&&"static"===C(o).position)?t:o||function(e){var t=/firefox/i.test(k());if(/Trident/i.test(k())&&R(e)&&"fixed"===C(e).position)return null;var o=F(e);for(P(o)&&(o=o.host);R(o)&&0>["html","body"].indexOf(S(o));){var r=C(o);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return o;o=o.parentNode}return null}(e)||t}var V="bottom",$="right",z="left",_="auto",X=["top",V,$,z],Y="start",G="viewport",J="popper",K=X.reduce(function(e,t){return e.concat([t+"-"+Y,t+"-end"])},[]),Q=[].concat(X,[_]).reduce(function(e,t){return e.concat([t,t+"-"+Y,t+"-end"])},[]),ee=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"],et={placement:"bottom",modifiers:[],strategy:"absolute"};function eo(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}var er={passive:!0};function en(e){return e.split("-")[0]}function ei(e){return e.split("-")[1]}function ea(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function es(e){var t,o=e.reference,r=e.element,n=e.placement,i=n?en(n):null,a=n?ei(n):null,s=o.x+o.width/2-r.width/2,p=o.y+o.height/2-r.height/2;switch(i){case"top":t={x:s,y:o.y-r.height};break;case V:t={x:s,y:o.y+o.height};break;case $:t={x:o.x+o.width,y:p};break;case z:t={x:o.x-r.width,y:p};break;default:t={x:o.x,y:o.y}}var l=i?ea(i):null;if(null!=l){var c="y"===l?"height":"width";switch(a){case Y:t[l]=t[l]-(o[c]/2-r[c]/2);break;case"end":t[l]=t[l]+(o[c]/2-r[c]/2)}}return t}var ep={top:"auto",right:"auto",bottom:"auto",left:"auto"};function el(e){var t,o,r,n,i,a,s=e.popper,p=e.popperRect,l=e.placement,c=e.variation,u=e.offsets,f=e.position,d=e.gpuAcceleration,m=e.adaptive,h=e.roundOffsets,v=e.isFixed,g=u.x,y=void 0===g?0:g,b=u.y,w=void 0===b?0:b,x="function"==typeof h?h({x:y,y:w}):{x:y,y:w};y=x.x,w=x.y;var O=u.hasOwnProperty("x"),Z=u.hasOwnProperty("y"),R=z,P="top",E=window;if(m){var j=U(s),k="clientHeight",L="clientWidth";j===T(s)&&"static"!==C(j=W(s)).position&&"absolute"===f&&(k="scrollHeight",L="scrollWidth"),("top"===l||(l===z||l===$)&&"end"===c)&&(P=V,w-=(v&&j===E&&E.visualViewport?E.visualViewport.height:j[k])-p.height,w*=d?1:-1),(l===z||("top"===l||l===V)&&"end"===c)&&(R=$,y-=(v&&j===E&&E.visualViewport?E.visualViewport.width:j[L])-p.width,y*=d?1:-1)}var A=Object.assign({position:f},m&&ep),D=!0===h?(o=(t={x:y,y:w}).x,r=t.y,{x:M(o*(n=window.devicePixelRatio||1))/n||0,y:M(r*n)/n||0}):{x:y,y:w};return(y=D.x,w=D.y,d)?Object.assign({},A,((a={})[P]=Z?"0":"",a[R]=O?"0":"",a.transform=1>=(E.devicePixelRatio||1)?"translate("+y+"px, "+w+"px)":"translate3d("+y+"px, "+w+"px, 0)",a)):Object.assign({},A,((i={})[P]=Z?w+"px":"",i[R]=O?y+"px":"",i.transform="",i))}var ec={left:"right",right:"left",bottom:"top",top:"bottom"};function eu(e){return e.replace(/left|right|bottom|top/g,function(e){return ec[e]})}var ef={start:"end",end:"start"};function ed(e){return e.replace(/start|end/g,function(e){return ef[e]})}function em(e,t){var o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&P(o)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function eh(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ev(e,t,o){var r,n,i,a,s,p,l,c,u,f;return t===G?eh(function(e,t){var o=T(e),r=W(e),n=o.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,p=0;if(n){i=n.width,a=n.height;var l=L();(l||!l&&"fixed"===t)&&(s=n.offsetLeft,p=n.offsetTop)}return{width:i,height:a,x:s+B(e),y:p}}(e,o)):Z(t)?((r=A(t,!1,"fixed"===o)).top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r):eh((n=W(e),a=W(n),s=D(n),p=null==(i=n.ownerDocument)?void 0:i.body,l=E(a.scrollWidth,a.clientWidth,p?p.scrollWidth:0,p?p.clientWidth:0),c=E(a.scrollHeight,a.clientHeight,p?p.scrollHeight:0,p?p.clientHeight:0),u=-s.scrollLeft+B(n),f=-s.scrollTop,"rtl"===C(p||a).direction&&(u+=E(a.clientWidth,p?p.clientWidth:0)-l),{width:l,height:c,x:u,y:f}))}function eg(){return{top:0,right:0,bottom:0,left:0}}function ey(e){return Object.assign({},eg(),e)}function eb(e,t){return t.reduce(function(t,o){return t[o]=e,t},{})}function ew(e,t){void 0===t&&(t={});var o,r,n,i,a,s,p,l=t,c=l.placement,u=void 0===c?e.placement:c,f=l.strategy,d=void 0===f?e.strategy:f,m=l.boundary,h=l.rootBoundary,v=l.elementContext,g=void 0===v?J:v,y=l.altBoundary,b=l.padding,w=void 0===b?0:b,x=ey("number"!=typeof w?w:eb(w,X)),O=e.rects.popper,T=e.elements[void 0!==y&&y?g===J?"reference":J:g],P=(o=Z(T)?T:T.contextElement||W(e.elements.popper),s=(a=[].concat("clippingParents"===(r=void 0===m?"clippingParents":m)?(n=I(F(o)),Z(i=["absolute","fixed"].indexOf(C(o).position)>=0&&R(o)?U(o):o)?n.filter(function(e){return Z(e)&&em(e,i)&&"body"!==S(e)}):[]):[].concat(r),[void 0===h?G:h]))[0],(p=a.reduce(function(e,t){var r=ev(o,t,d);return e.top=E(r.top,e.top),e.right=j(r.right,e.right),e.bottom=j(r.bottom,e.bottom),e.left=E(r.left,e.left),e},ev(o,s,d))).width=p.right-p.left,p.height=p.bottom-p.top,p.x=p.left,p.y=p.top,p),M=A(e.elements.reference),k=es({reference:M,element:O,strategy:"absolute",placement:u}),L=eh(Object.assign({},O,k)),D=g===J?L:M,B={top:P.top-D.top+x.top,bottom:D.bottom-P.bottom+x.bottom,left:P.left-D.left+x.left,right:D.right-P.right+x.right},N=e.modifiersData.offset;if(g===J&&N){var H=N[u];Object.keys(B).forEach(function(e){var t=[$,V].indexOf(e)>=0?1:-1,o=["top",V].indexOf(e)>=0?"y":"x";B[e]+=H[o]*t})}return B}function ex(e,t,o){return E(e,j(t,o))}function eO(e,t,o){return void 0===o&&(o={x:0,y:0}),{top:e.top-t.height-o.y,right:e.right-t.width+o.x,bottom:e.bottom-t.height+o.y,left:e.left-t.width-o.x}}function eT(e){return["top",$,V,z].some(function(t){return e[t]>=0})}var eZ=(i=void 0===(n=(r={defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,o=e.instance,r=e.options,n=r.scroll,i=void 0===n||n,a=r.resize,s=void 0===a||a,p=T(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&l.forEach(function(e){e.addEventListener("scroll",o.update,er)}),s&&p.addEventListener("resize",o.update,er),function(){i&&l.forEach(function(e){e.removeEventListener("scroll",o.update,er)}),s&&p.removeEventListener("resize",o.update,er)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,o=e.name;t.modifiersData[o]=es({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,o=e.options,r=o.gpuAcceleration,n=o.adaptive,i=o.roundOffsets,a=void 0===i||i,s={placement:en(t.placement),variation:ei(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===r||r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,el(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===n||n,roundOffsets:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,el(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var o=t.styles[e]||{},r=t.attributes[e]||{},n=t.elements[e];R(n)&&S(n)&&(Object.assign(n.style,o),Object.keys(r).forEach(function(e){var t=r[e];!1===t?n.removeAttribute(e):n.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach(function(e){var r=t.elements[e],n=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:o[e]).reduce(function(e,t){return e[t]="",e},{});R(r)&&S(r)&&(Object.assign(r.style,i),Object.keys(n).forEach(function(e){r.removeAttribute(e)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,o=e.options,r=e.name,n=o.offset,i=void 0===n?[0,0]:n,a=Q.reduce(function(e,o){var r,n,a,s,p,l;return e[o]=(r=t.rects,a=[z,"top"].indexOf(n=en(o))>=0?-1:1,p=(s="function"==typeof i?i(Object.assign({},r,{placement:o})):i)[0],l=s[1],p=p||0,l=(l||0)*a,[z,$].indexOf(n)>=0?{x:l,y:p}:{x:p,y:l}),e},{}),s=a[t.placement],p=s.x,l=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=p,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var n=o.mainAxis,i=void 0===n||n,a=o.altAxis,s=void 0===a||a,p=o.fallbackPlacements,l=o.padding,c=o.boundary,u=o.rootBoundary,f=o.altBoundary,d=o.flipVariations,m=void 0===d||d,h=o.allowedAutoPlacements,v=t.options.placement,g=en(v),y=[v].concat(p||(g!==v&&m?function(e){if(en(e)===_)return[];var t=eu(e);return[ed(e),t,ed(t)]}(v):[eu(v)])).reduce(function(e,o){var r,n,i,a,s,p,f,d,v,g,y,b;return e.concat(en(o)===_?(n=(r={placement:o,boundary:c,rootBoundary:u,padding:l,flipVariations:m,allowedAutoPlacements:h}).placement,i=r.boundary,a=r.rootBoundary,s=r.padding,p=r.flipVariations,d=void 0===(f=r.allowedAutoPlacements)?Q:f,0===(y=(g=(v=ei(n))?p?K:K.filter(function(e){return ei(e)===v}):X).filter(function(e){return d.indexOf(e)>=0})).length&&(y=g),Object.keys(b=y.reduce(function(e,o){return e[o]=ew(t,{placement:o,boundary:i,rootBoundary:a,padding:s})[en(o)],e},{})).sort(function(e,t){return b[e]-b[t]})):o)},[]),b=t.rects.reference,w=t.rects.popper,x=new Map,O=!0,T=y[0],Z=0;Z<y.length;Z++){var R=y[Z],P=en(R),E=ei(R)===Y,j=["top",V].indexOf(P)>=0,M=j?"width":"height",k=ew(t,{placement:R,boundary:c,rootBoundary:u,altBoundary:f,padding:l}),L=j?E?$:z:E?V:"top";b[M]>w[M]&&(L=eu(L));var A=eu(L),D=[];if(i&&D.push(k[P]<=0),s&&D.push(k[L]<=0,k[A]<=0),D.every(function(e){return e})){T=R,O=!1;break}x.set(R,D)}if(O)for(var S=m?3:1,W=function(e){var t=y.find(function(t){var o=x.get(t);if(o)return o.slice(0,e).every(function(e){return e})});if(t)return T=t,"break"},B=S;B>0&&"break"!==W(B);B--);t.placement!==T&&(t.modifiersData[r]._skip=!0,t.placement=T,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,r=e.name,n=o.mainAxis,i=o.altAxis,a=o.boundary,s=o.rootBoundary,p=o.altBoundary,l=o.padding,c=o.tether,u=void 0===c||c,f=o.tetherOffset,d=void 0===f?0:f,m=ew(t,{boundary:a,rootBoundary:s,padding:l,altBoundary:p}),h=en(t.placement),v=ei(t.placement),g=!v,y=ea(h),b="x"===y?"y":"x",w=t.modifiersData.popperOffsets,x=t.rects.reference,O=t.rects.popper,T="function"==typeof d?d(Object.assign({},t.rects,{placement:t.placement})):d,Z="number"==typeof T?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),R=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,P={x:0,y:0};if(w){if(void 0===n||n){var M,k="y"===y?"top":z,L="y"===y?V:$,A="y"===y?"height":"width",D=w[y],S=D+m[k],W=D-m[L],B=u?-O[A]/2:0,C=v===Y?x[A]:O[A],N=v===Y?-O[A]:-x[A],F=t.elements.arrow,I=u&&F?H(F):{width:0,height:0},q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:eg(),_=q[k],X=q[L],G=ex(0,x[A],I[A]),J=g?x[A]/2-B-G-_-Z.mainAxis:C-G-_-Z.mainAxis,K=g?-x[A]/2+B+G+X+Z.mainAxis:N+G+X+Z.mainAxis,Q=t.elements.arrow&&U(t.elements.arrow),ee=Q?"y"===y?Q.clientTop||0:Q.clientLeft||0:0,et=null!=(M=null==R?void 0:R[y])?M:0,eo=ex(u?j(S,D+J-et-ee):S,D,u?E(W,D+K-et):W);w[y]=eo,P[y]=eo-D}if(void 0!==i&&i){var er,es,ep=w[b],el="y"===b?"height":"width",ec=ep+m["x"===y?"top":z],eu=ep-m["x"===y?V:$],ef=-1!==["top",z].indexOf(h),ed=null!=(er=null==R?void 0:R[b])?er:0,em=ef?ec:ep-x[el]-O[el]-ed+Z.altAxis,eh=ef?ep+x[el]+O[el]-ed-Z.altAxis:eu,ev=u&&ef?(es=ex(em,ep,eh))>eh?eh:es:ex(u?em:ec,ep,u?eh:eu);w[b]=ev,P[b]=ev-ep}t.modifiersData[r]=P}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,o,r=e.state,n=e.name,i=e.options,a=r.elements.arrow,s=r.modifiersData.popperOffsets,p=en(r.placement),l=ea(p),c=[z,$].indexOf(p)>=0?"height":"width";if(a&&s){var u=ey("number"!=typeof(t="function"==typeof(t=i.padding)?t(Object.assign({},r.rects,{placement:r.placement})):t)?t:eb(t,X)),f=H(a),d=r.rects.reference[c]+r.rects.reference[l]-s[l]-r.rects.popper[c],m=s[l]-r.rects.reference[l],h=U(a),v=h?"y"===l?h.clientHeight||0:h.clientWidth||0:0,g=u["y"===l?"top":z],y=v-f[c]-u["y"===l?V:$],b=v/2-f[c]/2+(d/2-m/2),w=ex(g,b,y);r.modifiersData[n]=((o={})[l]=w,o.centerOffset=w-b,o)}},effect:function(e){var t=e.state,o=e.options.element,r=void 0===o?"[data-popper-arrow]":o;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&em(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,o=e.name,r=t.rects.reference,n=t.rects.popper,i=t.modifiersData.preventOverflow,a=ew(t,{elementContext:"reference"}),s=ew(t,{altBoundary:!0}),p=eO(a,r),l=eO(s,n,i),c=eT(p),u=eT(l);t.modifiersData[o]={referenceClippingOffsets:p,popperEscapeOffsets:l,isReferenceHidden:c,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":u})}}]}).defaultModifiers)?[]:n,s=void 0===(a=r.defaultOptions)?et:a,function(e,t,o){void 0===o&&(o=s);var r,n={placement:"bottom",orderedModifiers:[],options:Object.assign({},et,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],p=!1,l={state:n,setOptions:function(o){var r,p,u,f,d,m="function"==typeof o?o(n.options):o;c(),n.options=Object.assign({},s,n.options,m),n.scrollParents={reference:Z(e)?I(e):e.contextElement?I(e.contextElement):[],popper:I(t)};var h=(p=Object.keys(r=[].concat(i,n.options.modifiers).reduce(function(e,t){var o=e[t.name];return e[t.name]=o?Object.assign({},o,t,{options:Object.assign({},o.options,t.options),data:Object.assign({},o.data,t.data)}):t,e},{})).map(function(e){return r[e]}),u=new Map,f=new Set,d=[],p.forEach(function(e){u.set(e.name,e)}),p.forEach(function(e){f.has(e.name)||function e(t){f.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!f.has(t)){var o=u.get(t);o&&e(o)}}),d.push(t)}(e)}),ee.reduce(function(e,t){return e.concat(d.filter(function(e){return e.phase===t}))},[]));return n.orderedModifiers=h.filter(function(e){return e.enabled}),n.orderedModifiers.forEach(function(e){var t=e.name,o=e.options,r=e.effect;if("function"==typeof r){var i=r({state:n,name:t,instance:l,options:void 0===o?{}:o}),s=function(){};a.push(i||s)}}),l.update()},forceUpdate:function(){if(!p){var e,t,o,r,i,a,s,c,u,f,d,m,h=n.elements,v=h.reference,g=h.popper;if(eo(v,g)){n.rects={reference:(t=U(g),o="fixed"===n.options.strategy,r=R(t),c=R(t)&&(a=M((i=t.getBoundingClientRect()).width)/t.offsetWidth||1,s=M(i.height)/t.offsetHeight||1,1!==a||1!==s),u=W(t),f=A(v,c,o),d={scrollLeft:0,scrollTop:0},m={x:0,y:0},(r||!r&&!o)&&(("body"!==S(t)||N(u))&&(d=(e=t)!==T(e)&&R(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:D(e)),R(t)?(m=A(t,!0),m.x+=t.clientLeft,m.y+=t.clientTop):u&&(m.x=B(u))),{x:f.left+d.scrollLeft-m.x,y:f.top+d.scrollTop-m.y,width:f.width,height:f.height}),popper:H(g)},n.reset=!1,n.placement=n.options.placement,n.orderedModifiers.forEach(function(e){return n.modifiersData[e.name]=Object.assign({},e.data)});for(var y=0;y<n.orderedModifiers.length;y++){if(!0===n.reset){n.reset=!1,y=-1;continue}var b=n.orderedModifiers[y],w=b.fn,x=b.options,O=void 0===x?{}:x,Z=b.name;"function"==typeof w&&(n=w({state:n,options:O,name:Z,instance:l})||n)}}}},update:function(){return r||(r=new Promise(function(e){Promise.resolve().then(function(){r=void 0,e(new Promise(function(e){l.forceUpdate(),e(n)}))})})),r},destroy:function(){c(),p=!0}};if(!eo(e,t))return l;function c(){a.forEach(function(e){return e()}),a=[]}return l.setOptions(o).then(function(e){!p&&o.onFirstUpdate&&o.onFirstUpdate(e)}),l}),eR=o(14858),eP=o(3176),eE=o(25528);function ej(e){return(0,eP.Z)("MuiPopperUnstyled",e)}(0,eE.Z)("MuiPopperUnstyled",["root"]);var eM=o(30469),ek=o(91874);let eL=["anchorEl","children","component","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","slotProps","slots","TransitionProps"],eA=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function eD(e){return"function"==typeof e?e():e}let eS=()=>(0,f.Z)({root:["root"]},ej,{}),eW={},eB=c.forwardRef(function(e,t){var o;let{anchorEl:r,children:n,component:i,direction:a,disablePortal:s,modifiers:u,open:f,ownerState:d,placement:m,popperOptions:h,popperRef:v,slotProps:g={},slots:y={},TransitionProps:b}=e,O=(0,p.Z)(e,eL),T=c.useRef(null),Z=(0,w.Z)(T,t),R=c.useRef(null),P=(0,w.Z)(R,v),E=c.useRef(P);(0,x.Z)(()=>{E.current=P},[P]),c.useImperativeHandle(v,()=>R.current,[]);let j=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(m,a),[M,k]=c.useState(j);c.useEffect(()=>{R.current&&R.current.forceUpdate()}),(0,x.Z)(()=>{if(!r||!f)return;let e=e=>{k(e.placement)};eD(r);let t=[{name:"preventOverflow",options:{altBoundary:s}},{name:"flip",options:{altBoundary:s}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn({state:t}){e(t)}}];null!=u&&(t=t.concat(u)),h&&null!=h.modifiers&&(t=t.concat(h.modifiers));let o=eZ(eD(r),T.current,(0,l.Z)({placement:j},h,{modifiers:t}));return E.current(o),()=>{o.destroy(),E.current(null)}},[r,s,u,f,h,j]);let L={placement:M};null!==b&&(L.TransitionProps=b);let A=eS(),D=null!=(o=null!=i?i:y.root)?o:"div",S=(0,eM.Z)({elementType:D,externalSlotProps:g.root,externalForwardedProps:O,additionalProps:{role:"tooltip",ref:Z},ownerState:(0,l.Z)({},e,d),className:A.root});return(0,ek.jsx)(D,(0,l.Z)({},S,{children:"function"==typeof n?n(L):n}))}),eC=c.forwardRef(function(e,t){let{anchorEl:o,children:r,container:n,direction:i="ltr",disablePortal:a=!1,keepMounted:s=!1,modifiers:u,open:f,placement:d="bottom",popperOptions:m=eW,popperRef:h,style:v,transition:g=!1}=e,y=(0,p.Z)(e,eA),[b,w]=c.useState(!0),x=()=>{w(!1)},T=()=>{w(!0)};if(!s&&!f&&(!g||b))return null;let Z=n||(o?(0,O.Z)(eD(o)).body:void 0);return(0,ek.jsx)(eR.Z,{disablePortal:a,container:Z,children:(0,ek.jsx)(eB,(0,l.Z)({anchorEl:o,direction:i,disablePortal:a,modifiers:u,ref:t,open:g?!b:f,placement:d,popperOptions:m,popperRef:h},y,{style:(0,l.Z)({position:"fixed",top:0,left:0,display:!f&&s&&(!g||b)?"none":null},v),TransitionProps:g?{in:f,onEnter:x,onExited:T}:null,children:r}))})});var eN=o(30579);let eH=["components","componentsProps","slots","slotProps"],eF=(0,h.ZP)(eC,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),eI=c.forwardRef(function(e,t){var o;let r=(0,eN.Z)(),n=(0,g.Z)({props:e,name:"MuiPopper"}),{components:i,componentsProps:a,slots:s,slotProps:c}=n,u=(0,p.Z)(n,eH),f=null!=(o=null==s?void 0:s.root)?o:null==i?void 0:i.Root;return(0,ek.jsx)(eF,(0,l.Z)({direction:null==r?void 0:r.direction,slots:{root:f},slotProps:null!=c?c:a},u,{ref:t}))});var eq=o(58618),eU=o(76842),eV=o(28569),e$=o(20541),ez=o(78437);function e_(e){return(0,eP.Z)("MuiTooltip",e)}let eX=(0,eE.Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),eY=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"],eG=e=>{let{classes:t,disableInteractive:o,arrow:r,touch:n,placement:i}=e,a={popper:["popper",!o&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",n&&"touch",`tooltipPlacement${(0,y.Z)(i.split("-")[0])}`],arrow:["arrow"]};return(0,f.Z)(a,e_,t)},eJ=(0,h.ZP)(eI,{name:"MuiTooltip",slot:"Popper",overridesResolver(e,t){let{ownerState:o}=e;return[t.popper,!o.disableInteractive&&t.popperInteractive,o.arrow&&t.popperArrow,!o.open&&t.popperClose]}})(({theme:e,ownerState:t,open:o})=>(0,l.Z)({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!o&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${eX.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${eX.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${eX.arrow}`]:(0,l.Z)({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${eX.arrow}`]:(0,l.Z)({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),eK=(0,h.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver(e,t){let{ownerState:o}=e;return[t.tooltip,o.touch&&t.touch,o.arrow&&t.tooltipArrow,t[`tooltipPlacement${(0,y.Z)(o.placement.split("-")[0])}`]]}})(({theme:e,ownerState:t})=>(0,l.Z)({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:(0,m.Fq)(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${Math.round(1e5*(16/14))/1e5}em`,fontWeight:e.typography.fontWeightRegular},{[`.${eX.popper}[data-popper-placement*="left"] &`]:(0,l.Z)({transformOrigin:"right center"},t.isRtl?(0,l.Z)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):(0,l.Z)({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${eX.popper}[data-popper-placement*="right"] &`]:(0,l.Z)({transformOrigin:"left center"},t.isRtl?(0,l.Z)({marginRight:"14px"},t.touch&&{marginRight:"24px"}):(0,l.Z)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${eX.popper}[data-popper-placement*="top"] &`]:(0,l.Z)({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${eX.popper}[data-popper-placement*="bottom"] &`]:(0,l.Z)({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})})),eQ=(0,h.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:(0,m.Fq)(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})),e0=!1,e1=null;function e2(e,t){return o=>{t&&t(o),e(o)}}let e4=c.forwardRef(function(e,t){var o,r,n,i,a,s;let f=(0,g.Z)({props:e,name:"MuiTooltip"}),{arrow:m=!1,children:h,components:y={},componentsProps:w={},describeChild:x=!1,disableFocusListener:O=!1,disableHoverListener:T=!1,disableInteractive:Z=!1,disableTouchListener:R=!1,enterDelay:P=100,enterNextDelay:E=0,enterTouchDelay:j=700,followCursor:M=!1,id:k,leaveDelay:L=0,leaveTouchDelay:A=1500,onClose:D,onOpen:S,open:W,placement:B="bottom",PopperComponent:C,PopperProps:N={},title:H,TransitionComponent:F=b.Z,TransitionProps:I}=f,q=(0,p.Z)(f,eY),U=(0,v.Z)(),V="rtl"===U.direction,[$,z]=c.useState(),[_,X]=c.useState(null),Y=c.useRef(!1),G=Z||M,J=c.useRef(),K=c.useRef(),Q=c.useRef(),ee=c.useRef(),[et,eo]=(0,ez.Z)({controlled:W,default:!1,name:"Tooltip",state:"open"}),er=et,en=(0,eV.Z)(k),ei=c.useRef(),ea=c.useCallback(()=>{void 0!==ei.current&&(document.body.style.WebkitUserSelect=ei.current,ei.current=void 0),clearTimeout(ee.current)},[]);c.useEffect(()=>()=>{clearTimeout(J.current),clearTimeout(K.current),clearTimeout(Q.current),ea()},[ea]);let es=e=>{clearTimeout(e1),e0=!0,eo(!0),S&&!er&&S(e)},ep=(0,eq.Z)(e=>{clearTimeout(e1),e1=setTimeout(()=>{e0=!1},800+L),eo(!1),D&&er&&D(e),clearTimeout(J.current),J.current=setTimeout(()=>{Y.current=!1},U.transitions.duration.shortest)}),el=e=>{Y.current&&"touchstart"!==e.type||($&&$.removeAttribute("title"),clearTimeout(K.current),clearTimeout(Q.current),P||e0&&E?K.current=setTimeout(()=>{es(e)},e0?E:P):es(e))},ec=e=>{clearTimeout(K.current),clearTimeout(Q.current),Q.current=setTimeout(()=>{ep(e)},L)},{isFocusVisibleRef:eu,onBlur:ef,onFocus:ed,ref:em}=(0,e$.Z)(),[,eh]=c.useState(!1),ev=e=>{ef(e),!1===eu.current&&(eh(!1),ec(e))},eg=e=>{$||z(e.currentTarget),ed(e),!0===eu.current&&(eh(!0),el(e))},ey=e=>{Y.current=!0;let t=h.props;t.onTouchStart&&t.onTouchStart(e)},eb=e=>{ey(e),clearTimeout(Q.current),clearTimeout(J.current),ea(),ei.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",ee.current=setTimeout(()=>{document.body.style.WebkitUserSelect=ei.current,el(e)},j)},ew=e=>{h.props.onTouchEnd&&h.props.onTouchEnd(e),ea(),clearTimeout(Q.current),Q.current=setTimeout(()=>{ep(e)},A)};c.useEffect(()=>{if(er)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){("Escape"===e.key||"Esc"===e.key)&&ep(e)}},[ep,er]);let ex=(0,eU.Z)(h.ref,em,z,t);"number"==typeof H||H||(er=!1);let eO=c.useRef({x:0,y:0}),eT=c.useRef(),eZ=e=>{let t=h.props;t.onMouseMove&&t.onMouseMove(e),eO.current={x:e.clientX,y:e.clientY},eT.current&&eT.current.update()},eR={},eP="string"==typeof H;x?(eR.title=er||!eP||T?null:H,eR["aria-describedby"]=er?en:null):(eR["aria-label"]=eP?H:null,eR["aria-labelledby"]=er&&!eP?en:null);let eE=(0,l.Z)({},eR,q,h.props,{className:(0,u.Z)(q.className,h.props.className),onTouchStart:ey,ref:ex},M?{onMouseMove:eZ}:{}),ej={};R||(eE.onTouchStart=eb,eE.onTouchEnd=ew),T||(eE.onMouseOver=e2(el,eE.onMouseOver),eE.onMouseLeave=e2(ec,eE.onMouseLeave),G||(ej.onMouseOver=el,ej.onMouseLeave=ec)),O||(eE.onFocus=e2(eg,eE.onFocus),eE.onBlur=e2(ev,eE.onBlur),G||(ej.onFocus=eg,ej.onBlur=ev));let eM=c.useMemo(()=>{var e;let t=[{name:"arrow",enabled:Boolean(_),options:{element:_,padding:4}}];return null!=(e=N.popperOptions)&&e.modifiers&&(t=t.concat(N.popperOptions.modifiers)),(0,l.Z)({},N.popperOptions,{modifiers:t})},[_,N]),eL=(0,l.Z)({},f,{isRtl:V,arrow:m,disableInteractive:G,placement:B,PopperComponentProp:C,touch:Y.current}),eA=eG(eL),eD=null!=(o=y.Popper)?o:eJ,eS=null!=(r=null!=(n=y.Transition)?n:F)?r:b.Z,eW=null!=(i=y.Tooltip)?i:eK,eB=null!=(a=y.Arrow)?a:eQ,eC=(0,d.Z)(eD,(0,l.Z)({},N,w.popper),eL),eN=(0,d.Z)(eS,(0,l.Z)({},I,w.transition),eL),eH=(0,d.Z)(eW,(0,l.Z)({},w.tooltip),eL),eF=(0,d.Z)(eB,(0,l.Z)({},w.arrow),eL);return(0,ek.jsxs)(c.Fragment,{children:[c.cloneElement(h,eE),(0,ek.jsx)(eD,(0,l.Z)({as:null!=C?C:eI,placement:B,anchorEl:M?{getBoundingClientRect:()=>({top:eO.current.y,left:eO.current.x,right:eO.current.x,bottom:eO.current.y,width:0,height:0})}:$,popperRef:eT,open:!!$&&er,id:en,transition:!0},ej,eC,{className:(0,u.Z)(eA.popper,null==N?void 0:N.className,null==(s=w.popper)?void 0:s.className),popperOptions:eM,children({TransitionProps:e}){var t,o;return(0,ek.jsx)(eS,(0,l.Z)({timeout:U.transitions.duration.shorter},e,eN,{children:(0,ek.jsxs)(eW,(0,l.Z)({},eH,{className:(0,u.Z)(eA.tooltip,null==(t=w.tooltip)?void 0:t.className),children:[H,m?(0,ek.jsx)(eB,(0,l.Z)({},eF,{className:(0,u.Z)(eA.arrow,null==(o=w.arrow)?void 0:o.className),ref:X})):null]}))}))}}))]})});var e7=e4}}]);