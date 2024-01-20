import{c as x,a as f,h,f as k,r as z,$ as D,B as Q,o as P,q as U,y as M,g as C,a0 as B,k as q,w as S,a1 as G,l as I,m as F,a2 as K,p as J,a3 as R,a4 as Y,b as Z}from"./index.a8db99c8.js";import{g as ee,e as te,f as ne,h as V}from"./use-prevent-scroll.7f0df072.js";var ce=x({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:i}){const n=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>h("div",{class:n.value},k(i.default))}}),de=x({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:i}){const n=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>h("div",{class:n.value,role:"toolbar"},k(i.default))}});function oe(){const e=z(!D.value);return e.value===!1&&Q(()=>{e.value=!0}),e}const X=typeof ResizeObserver!="undefined",W=X===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var N=x({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:i}){let n=null,t,r={width:-1,height:-1};function u(s){s===!0||e.debounce===0||e.debounce==="0"?c():n===null&&(n=setTimeout(c,e.debounce))}function c(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:s,offsetHeight:l}=t;(s!==r.width||l!==r.height)&&(r={width:s,height:l},i("resize",r))}}const{proxy:g}=C();if(g.trigger=u,X===!0){let s;const l=m=>{t=g.$el.parentNode,t?(s=new ResizeObserver(u),s.observe(t),c()):m!==!0&&M(()=>{l(!0)})};return Q(()=>{l()}),P(()=>{n!==null&&clearTimeout(n),s!==void 0&&(s.disconnect!==void 0?s.disconnect():t&&s.unobserve(t))}),U}else{let m=function(){n!==null&&(clearTimeout(n),n=null),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",u,B.passive),l=void 0)},b=function(){m(),t&&t.contentDocument&&(l=t.contentDocument.defaultView,l.addEventListener("resize",u,B.passive),c())};const s=oe();let l;return Q(()=>{M(()=>{t=g.$el,t&&b()})}),P(m),()=>{if(s.value===!0)return h("object",{style:W.style,tabindex:-1,type:"text/html",data:W.url,"aria-hidden":"true",onLoad:b})}}}}),fe=x({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:i,emit:n}){const{proxy:{$q:t}}=C(),r=I(F,q);if(r===q)return console.error("QHeader needs to be child of QLayout"),q;const u=z(parseInt(e.heightHint,10)),c=z(!0),g=f(()=>e.reveal===!0||r.view.value.indexOf("H")>-1||t.platform.is.ios&&r.isContainer.value===!0),s=f(()=>{if(e.modelValue!==!0)return 0;if(g.value===!0)return c.value===!0?u.value:0;const o=u.value-r.scroll.value.position;return o>0?o:0}),l=f(()=>e.modelValue!==!0||g.value===!0&&c.value!==!0),m=f(()=>e.modelValue===!0&&l.value===!0&&e.reveal===!0),b=f(()=>"q-header q-layout__section--marginal "+(g.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(l.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),w=f(()=>{const o=r.rows.value.top,p={};return o[0]==="l"&&r.left.space===!0&&(p[t.lang.rtl===!0?"right":"left"]=`${r.left.size}px`),o[2]==="r"&&r.right.space===!0&&(p[t.lang.rtl===!0?"left":"right"]=`${r.right.size}px`),p});function d(o,p){r.update("header",o,p)}function y(o,p){o.value!==p&&(o.value=p)}function O({height:o}){y(u,o),d("size",o)}function H(o){m.value===!0&&y(c,!0),n("focusin",o)}S(()=>e.modelValue,o=>{d("space",o),y(c,!0),r.animate()}),S(s,o=>{d("offset",o)}),S(()=>e.reveal,o=>{o===!1&&y(c,e.modelValue)}),S(c,o=>{r.animate(),n("reveal",o)}),S(r.scroll,o=>{e.reveal===!0&&y(c,o.direction==="up"||o.position<=e.revealOffset||o.position-o.inflectionPoint<100)});const L={};return r.instances.header=L,e.modelValue===!0&&d("size",u.value),d("space",e.modelValue),d("offset",s.value),P(()=>{r.instances.header===L&&(r.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const o=G(i.default,[]);return e.elevated===!0&&o.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(h(N,{debounce:0,onResize:O})),h("header",{class:b.value,style:w.value,onFocusin:H},o)}}}),ve=x({name:"QPageContainer",setup(e,{slots:i}){const{proxy:{$q:n}}=C(),t=I(F,q);if(t===q)return console.error("QPageContainer needs to be child of QLayout"),q;K(J,!0);const r=f(()=>{const u={};return t.header.space===!0&&(u.paddingTop=`${t.header.size}px`),t.right.space===!0&&(u[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(u.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(u[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),u});return()=>h("div",{class:"q-page-container",style:r.value},k(i.default))}});const{passive:A}=B,ie=["both","horizontal","vertical"];var re=x({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ie.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:i}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,r,u;S(()=>e.scrollTarget,()=>{s(),g()});function c(){t!==null&&t();const b=Math.max(0,te(r)),w=ne(r),d={top:b-n.position.top,left:w-n.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const y=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";n.position={top:b,left:w},n.directionChanged=n.direction!==y,n.delta=d,n.directionChanged===!0&&(n.direction=y,n.inflectionPoint=n.position),i("scroll",{...n})}function g(){r=ee(u,e.scrollTarget),r.addEventListener("scroll",l,A),l(!0)}function s(){r!==void 0&&(r.removeEventListener("scroll",l,A),r=void 0)}function l(b){if(b===!0||e.debounce===0||e.debounce==="0")c();else if(t===null){const[w,d]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];t=()=>{d(w),t=null}}}const{proxy:m}=C();return S(()=>m.$q.lang.rtl,c),Q(()=>{u=m.$el.parentNode,g()}),P(()=>{t!==null&&t(),s()}),Object.assign(m,{trigger:l,getPosition:()=>n}),U}}),he=x({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:i,emit:n}){const{proxy:{$q:t}}=C(),r=z(null),u=z(t.screen.height),c=z(e.container===!0?0:t.screen.width),g=z({position:0,direction:"down",inflectionPoint:0}),s=z(0),l=z(D.value===!0?0:V()),m=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=f(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),w=f(()=>l.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),d=f(()=>l.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function y(a){if(e.container===!0||document.qScrollPrevented!==!0){const v={position:a.position.top,direction:a.direction,directionChanged:a.directionChanged,inflectionPoint:a.inflectionPoint.top,delta:a.delta.top};g.value=v,e.onScroll!==void 0&&n("scroll",v)}}function O(a){const{height:v,width:T}=a;let $=!1;u.value!==v&&($=!0,u.value=v,e.onScrollHeight!==void 0&&n("scrollHeight",v),L()),c.value!==T&&($=!0,c.value=T),$===!0&&e.onResize!==void 0&&n("resize",a)}function H({height:a}){s.value!==a&&(s.value=a,L())}function L(){if(e.container===!0){const a=u.value>s.value?V():0;l.value!==a&&(l.value=a)}}let o=null;const p={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:r,height:u,containerHeight:s,scrollbarWidth:l,totalWidth:f(()=>c.value+l.value),rows:f(()=>{const a=e.view.toLowerCase().split(" ");return{top:a[0].split(""),middle:a[1].split(""),bottom:a[2].split("")}}),header:R({size:0,offset:0,space:!1}),right:R({size:300,offset:0,space:!1}),footer:R({size:0,offset:0,space:!1}),left:R({size:300,offset:0,space:!1}),scroll:g,animate(){o!==null?clearTimeout(o):document.body.classList.add("q-body--layout-animate"),o=setTimeout(()=>{o=null,document.body.classList.remove("q-body--layout-animate")},155)},update(a,v,T){p[a][v]=T}};if(K(F,p),V()>0){let T=function(){a=null,v.classList.remove("hide-scrollbar")},$=function(){if(a===null){if(v.scrollHeight>t.screen.height)return;v.classList.add("hide-scrollbar")}else clearTimeout(a);a=setTimeout(T,300)},E=function(j){a!==null&&j==="remove"&&(clearTimeout(a),T()),window[`${j}EventListener`]("resize",$)},a=null;const v=document.body;S(()=>e.container!==!0?"add":"remove",E),e.container!==!0&&E("add"),Y(()=>{E("remove")})}return()=>{const a=Z(i.default,[h(re,{onScroll:y}),h(N,{onResize:O})]),v=h("div",{class:m.value,style:b.value,ref:e.container===!0?void 0:r,tabindex:-1},a);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:r},[h(N,{onResize:H}),h("div",{class:"absolute-full",style:w.value},[h("div",{class:"scroll",style:d.value},[v])])]):v}}});const _={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},le=Object.keys(_);_.all=!0;function ge(e){const i={};for(const n of le)e[n]===!0&&(i[n]=!0);return Object.keys(i).length===0?_:(i.horizontal===!0?i.left=i.right=!0:i.left===!0&&i.right===!0&&(i.horizontal=!0),i.vertical===!0?i.up=i.down=!0:i.up===!0&&i.down===!0&&(i.vertical=!0),i.horizontal===!0&&i.vertical===!0&&(i.all=!0),i)}const ae=["INPUT","TEXTAREA"];function me(e,i){return i.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof i.handler=="function"&&ae.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(i.uid)===-1)}export{he as Q,fe as a,de as b,ce as c,ve as d,N as e,re as f,ge as g,me as s};
