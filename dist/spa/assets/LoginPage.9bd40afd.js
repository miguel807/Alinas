import{Q as c}from"./QInput.66be7811.js";import{_,E as v,r as l,F as d,L as p,N as u,P as r,am as x,I as h,Q as y,J as f,W as V,V as I,X as b,Y as w}from"./index.a8db99c8.js";import"./use-dark.93d8ea25.js";import"./focus-manager.02955f48.js";import"./use-form.7422adbb.js";const C=a=>(b("data-v-3c75ed74"),a=a(),w(),a),N={class:"todo"},S=C(()=>u("span",{class:"text-h3 text-center",style:{color:"#ce0e31"}},"Login",-1)),k={style:{height:"300px",width:"400px",border:"2px solid #ce0e31","border-radius":"10px",margin:"auto","margin-top":"50px",background:"beige"}},L={key:0,class:"text-negative text-h6 q-mt-lg q-mb-md"},P=v({__name:"LoginPage",setup(a){const m=f(),t=l(""),s=l(""),n=l(!1),g=async()=>{const i={username:t.value,password:s.value};try{const o=await(await fetch("http://localhost:3000/user/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json();console.log(o),o?(localStorage.setItem("auth","true"),m.push({name:"adminCategory"})):(n.value=!0,t.value="",s.value="")}catch(e){console.log(e)}};return(i,e)=>(d(),p("div",N,[S,u("div",k,[r(c,{style:{margin:"20px"},outlined:"",modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value=o),color:"negative",label:"Usuario"},null,8,["modelValue"]),r(c,{style:{margin:"20px"},outlined:"",type:"password",color:"negative",modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=o=>s.value=o),label:"Contrase\xF1a"},null,8,["modelValue"]),n.value?(d(),p("div",L," Usuario o contrase\xF1a incorrecta ")):x("",!0),r(y,{color:"negative",style:{"margin-top":"20px"},onClick:g},{default:h(()=>[V("Ingresar "),r(I,{name:"login",class:"q-ml-sm"})]),_:1})])]))}});var T=_(P,[["__scopeId","data-v-3c75ed74"]]);export{T as default};
