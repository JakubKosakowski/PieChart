import{j as l}from"./app-OAjhoVK2.js";function u(e){return l.jsxs("label",{style:{margin:"15px 0"},children:[e.labelName,":",l.jsx("input",{id:e.name,type:e.type,name:e.name,value:e.value,onChange:t=>{var a,n;return e.fun(e.name,e.type==="text"?(a=t.target)==null?void 0:a.value:+((n=t.target)==null?void 0:n.value))},style:{margin:"0 15px"},readOnly:e.labelType==="edit"&&e.type==="text"})]})}export{u as L};