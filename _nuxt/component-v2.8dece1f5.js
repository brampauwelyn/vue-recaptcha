import{r as b,w as g,c as p}from"./index.ce6a0987.js";import{J as K,r as x,K as m,x as y,z as C}from"./entry.2271887c.js";var c=(r=>(r.Init="init",r.Verified="verified",r.Expired="expired",r.Error="error",r))(c||{});function D({root:r=x(),options:f={}}){const e=K(),n=x(),t=m(),i=p(),a=p(),u=p(),l=b(r),s=x("init");return g(l,async v=>{const d=await t.render(v,{...f,sitekey:e,callback:i.trigger,"expired-callback":a.trigger,"error-callback":u.trigger});n.value=d}),i.on(()=>{s.value="verified"}),a.on(()=>{s.value="expired"}),u.on(()=>{s.value="error"}),{root:l,widgetID:n,execute(){typeof n.value<"u"&&t.execute(n.value)},reset(){s.value="init",typeof n.value<"u"&&t.reset(n.value)},state:s,onVerify:i.on,onExpired:a.on,onError:u.on}}function z(r,f,e){const{root:n,state:t,widgetID:i,onError:a,onExpired:u,onVerify:l,reset:s,execute:v}=D({options:r||{}}),d=y(()=>t.value===c.Expired),V=y(()=>t.value===c.Error),w=y(()=>t.value===c.Verified);return g(i,o=>{e("load",o),e("update:widgetId",o)}),C(f,(o,I)=>{!o&&I&&!d.value&&E()}),u(()=>{e("update:modelValue",null),e("expired",i.value)}),a(o=>{e("error",o)}),l(o=>{e("success",o),e("update:modelValue",o)}),{root:n,widgetID:i,state:t,isError:V,isExpired:d,isVerified:w,reset:E,execute:v};function E(){s(),k()}function k(){e("update:modelValue",null)}}export{c as R,z as u};
