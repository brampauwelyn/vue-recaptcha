import L from"./DocumentDrivenEmpty.f725812b.js";import h from"./ContentRenderer.e06351b2.js";import x from"./DocumentDrivenNotFound.ea095e47.js";import{aj as S,a as m,a0 as C,aH as k,x as R,u as o,aI as d,aJ as g,aK as i,E,ab as N,ag as j,X as w,aq as B,o as c,f as D,b as p,w as l,c as _}from"./entry.8160c3ba.js";import"./ContentRendererMarkdown.a448dda8.js";import"./ButtonLink.f568b2c3.js";/* empty css                       *//* empty css                                   */const b=m({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(s,t){const a=await d[s.name]().then(e=>e.default||e);return()=>j(a,t.attrs,t.slots)}}),q=m({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(s,t){const a=E("_route"),e=a===C()?k():a,n=R(()=>o(s.name)??e.meta.layout??"default");return()=>{const u=n.value&&n.value in d,r=e.meta.layoutTransition??g;return i(N,u&&r,{default:()=>i(b,u&&{key:n.value,name:n.value,...t.attrs},t.slots).default()}).default()}}}),A={class:"document-driven-page"},P=m({__name:"document-driven",setup(s){const{page:t,layout:a}=w();return t.value,B(t),(e,n)=>{const u=L,r=h,f=x,y=q;return c(),D("div",A,[p(y,{name:o(a)||"default"},{default:l(()=>[o(t)?(c(),_(r,{key:o(t)._id,value:o(t)},{empty:l(({value:v})=>[p(u,{value:v},null,8,["value"])]),_:1},8,["value"])):(c(),_(f,{key:1}))]),_:1},8,["name"])])}}});export{P as default};