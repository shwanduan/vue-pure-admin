import{S as c}from"./sortable.esm-fa38c9a5.js";import{r as p,G as i,f as a,b as u,n as d}from"./index-ab9e3548.js";import{t as m}from"./data-de75864f.js";function D(){const e=p(i(m,!0)),n=r=>{r.preventDefault(),d(()=>{const o=document.querySelector(".el-table__body-wrapper tbody");c.create(o,{animation:300,handle:".drag-btn",onEnd:({newIndex:t,oldIndex:l})=>{const s=e.value.splice(l,1)[0];e.value.splice(t,0,s)}})})};return{columns:[{label:"ID",prop:"id",cellRenderer:({row:r})=>a("div",{class:"flex items-center"},[a(u("iconify-icon-online"),{icon:"icon-park-outline:drag",class:"drag-btn cursor-grab",onMouseenter:o=>n(o)},null),a("p",{class:"ml-[16px]"},[r.id])])},{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"}],dataList:e}}export{D as useColumns};
