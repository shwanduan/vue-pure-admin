import{g as m}from"./data-14810b62.js";import{d as w,r as u,s as z,b as a,c as C,k as I,h as t,f as o,w as r,g as k,ar as S,z as d,u as V,_ as b}from"./index-ab9e3548.js";const D={class:"dynamic-scroller-demo"},M={class:"flex justify-around mb-4"},j={class:"avatar"},B={class:"text"},F={class:"index"},L=w({__name:"horizontal",setup(N){const c=u([]),n=u("");for(let e=0;e<1e4;e++)c.value.push({id:e,...m()});const p=z(()=>{if(!n.value)return c.value;const e=n.value.toLowerCase();return c.value.filter(l=>l.message.toLowerCase().includes(e))});function f(e){Object.assign(e,m())}return(e,l)=>{const h=a("el-input"),g=a("el-tag"),v=a("IconifyIconOnline"),y=a("DynamicScrollerItem"),x=a("DynamicScroller");return C(),I("div",D,[t("div",M,[o(h,{class:"mr-2 !w-[1/1.5]",clearable:"",modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=s=>n.value=s),placeholder:"Filter...",style:{width:"300px"}},null,8,["modelValue"]),o(g,{effect:"dark"},{default:r(()=>[k("\u6C34\u5E73\u6A21\u5F0Fhorizontal")]),_:1})]),o(x,{items:V(p),"min-item-size":54,direction:"horizontal",class:"scroller"},{default:r(({item:s,index:i,active:_})=>[o(y,{item:s,active:_,"size-dependencies":[s.message],"data-index":i,"data-active":_,title:`Click to change message ${i}`,style:S({width:`${Math.max(130,Math.round(s.message.length/20*20))}px`}),class:"message",onClick:O=>f(s)},{default:r(()=>[t("div",j,[o(v,{icon:"openmoji:beaming-face-with-smiling-eyes",width:"40"})]),t("div",B,d(s.message),1),t("div",F,[t("span",null,d(s.id)+" (id)",1),t("span",null,d(i)+" (index)",1)])]),_:2},1032,["item","active","size-dependencies","data-index","data-active","title","style","onClick"])]),_:1},8,["items"])])}}});const A=b(L,[["__scopeId","data-v-5e4726a5"]]);export{A as default};
