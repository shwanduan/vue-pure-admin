import{d as N,b as _,c as f,k as C,f as l,F as T}from"./index-ab9e3548.js";const $=N({__name:"totalRow",setup(h){const p=n=>{const{columns:u,data:a}=n,t=[];return u.forEach((d,e)=>{if(e===0){t[e]="Total Cost";return}const r=a.map(o=>Number(o[d.property]));r.every(o=>Number.isNaN(o))?t[e]="N/A":t[e]=`$ ${r.reduce((o,s)=>{const i=Number(s);return Number.isNaN(i)?o:o+s},0)}`}),t},m=[{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"Tom",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15}],c=[{label:"ID",prop:"id"},{label:"Name",prop:"name"},{label:"Amount 1",prop:"amount1",sortable:!0},{label:"Amount 2",prop:"amount2",sortable:!0},{label:"Amount 3",prop:"amount3",sortable:!0}],b=[{label:"ID",prop:"id"},{label:"Name",prop:"name"},{label:"Cost 1 ($)",prop:"amount1"},{label:"Cost 2 ($)",prop:"amount2"},{label:"Cost 3 ($)",prop:"amount3"}];return(n,u)=>{const a=_("pure-table");return f(),C(T,null,[l(a,{data:m,columns:c,border:"","show-summary":"",class:"mb-6"}),l(a,{data:m,columns:b,border:"","summary-method":p,"show-summary":""})],64)}}});export{$ as _};
