import{a as m,Z as w,r as _,o as a,f as l,h as y,b as h,w as S,c as d,u as f,ac as B,Q as C,q as b,R as k,S as $,j as v,t as x,p as I,G as P}from"./entry.e169b2cc.js";import{a as z}from"./index.0cc69d18.js";/* empty css                      */import"./index.e43a5061.js";const N=e=>(k("data-v-607f6383"),e=e(),$(),e),T=N(()=>y("span",{class:"sr-only"},"Copy to clipboard",-1)),V={class:"icon-wrapper"},A=m({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,{copy:s}=z(),{prose:o}=w(),t=_("init"),c=g=>{s(n.content).then(()=>{t.value="copied",setTimeout(()=>{t.value="init"},1e3)}).catch(p=>{console.warn("Couldn't copy to clipboard!",p)})};return(g,p)=>{const r=b;return a(),l("button",{class:C([(e.show||t.value==="copied")&&"show"]),onClick:c},[T,y("span",V,[h(B,{name:"fade"},{default:S(()=>{var i,u;return[t.value==="copied"?(a(),d(r,{key:0,name:(i=f(o).copyButton)==null?void 0:i.iconCopied,size:"18",class:"copied"},null,8,["name"])):(a(),d(r,{key:1,name:(u=f(o).copyButton)==null?void 0:u.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}}),M=v(A,[["__scopeId","data-v-607f6383"]]),j={key:0,class:"filename"},q=m({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=_(!1);return(s,o)=>{const t=M;return a(),l("div",{class:C([[`highlight-${e.language}`],"prose-code"]),onMouseenter:o[0]||(o[0]=c=>n.value=!0),onMouseleave:o[1]||(o[1]=c=>n.value=!1)},[e.filename?(a(),l("span",j,x(e.filename),1)):I("",!0),P(s.$slots,"default",{},void 0,!0),h(t,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}}),R=v(q,[["__scopeId","data-v-3d18b008"]]);export{R as default};
