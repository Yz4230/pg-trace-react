var k=Object.defineProperty,T=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var B=(n,t,o)=>t in n?k(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,g=(n,t)=>{for(var o in t||(t={}))z.call(t,o)&&B(n,o,t[o]);if(h)for(var o of h(t))R.call(t,o)&&B(n,o,t[o]);return n},D=(n,t)=>T(n,I(t));import{n as e,j as u,a as i,F as j,b as L,c as $,d as P,e as O,R as W,f as H}from"./vendor.afc6570d.js";const N=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}};N();const M=n=>`url('${n}')`,U="Roboto, sans-serif",c='"Noto Sans JP", sans-serif',E=e.h1({fontSize:"1.5em",letterSpacing:"0.3em",color:"white",fontWeight:"normal"}),_=()=>u(E,{children:"Switch"}),G=e.div({padding:"4em 0",paddingBottom:0,textAlign:"center"}),V=e.div({fontSize:"0.8em",fontFamily:c,textAlign:"center",lineHeight:"2em",color:"#404040"}),Y=e.div({marginTop:"1em",display:"flex",justifyContent:"center",gap:"1em"}),q=e.div({marginTop:"3em",padding:"1em",backgroundColor:"#F5F5F5",display:"flex",justifyContent:"center"}),J=e.a({margin:"0 1em",textDecoration:"none",color:"black",fontSize:"0.8em",fontFamily:c,transition:"opacity 0.2s ease-in-out",textTransform:"uppercase",":hover":{opacity:.5}}),K=()=>{const n=["home","consept","service","floors","interview","blog","access","download"];return i(G,{children:[u(E,{css:{color:"black",fontSize:"2.5em",margin:0},children:"Switch"}),i(V,{children:["\u3012150-0011 \u6771\u4EAC\u90FD\u6E0B\u8C37\u533A\u795E\u5BAE\u524D3-1-1 ",u("br",{}),"TEL: 03-6304-5100 FAX: 03-6304-5102 \u55B6\u696D\u6642\u9593: 10:00-18:00 \u5B9A\u4F11\u65E5/\u4E0D\u5B9A\u4F11"]}),i(Y,{children:[u(j,{}),u(L,{}),u($,{}),u(P,{})]}),u(q,{children:n.map((t,o)=>i(O,{children:[u(J,{href:"#",children:t},t),o!==n.length-1&&u("span",{children:" | "})]}))})]})};var p="./assets/cafe4.cf00e398.jpg",X="./assets/cafe5.f506c68c.jpg",Q="./assets/cafe6.77ef421f.jpg";const Z=e.div({fontFamily:c,display:"flex",flexDirection:"column"}),uu=e.div({position:"relative",height:"12em"}),eu=e.img({width:"100%",height:"100%",objectFit:"cover",clipPath:"polygon(7em 0, 0 7em, 0 100%, 100% 100%, 100% 0)"}),nu=e.div({position:"absolute",top:"0",left:"0",textTransform:"uppercase",fontWeight:"bold"}),tu=e.div({padding:"1.5em",backgroundColor:"#F4F4F4",flex:1,display:"flex",flexDirection:"column"}),iu=e.p({margin:0,marginBottom:"1em",fontSize:"0.8em",lineHeight:"2.2em"}),ou=e.div({flex:1,display:"flex",alignItems:"flex-end",justifyContent:"center"}),ru=e.a({font:c,textDecoration:"none",backgroundColor:"black",color:"white",padding:"1em",width:"70%",textAlign:"center",transition:"opacity 0.2s ease-in-out","&:hover":{opacity:.5}}),cu=n=>i(Z,{children:[i(uu,{children:[u(nu,{children:n.section}),u(eu,{src:n.imageUrl})]}),i(tu,{children:[u(iu,{children:n.description}),u(ou,{children:u(ru,{href:"#",children:n.linkLabel})})]})]}),lu=e.div({display:"grid",gap:"1em",gridTemplateColumns:"repeat(auto-fit, minmax(0, 1fr))"}),au=[{imageUrl:p,section:"concept",linkLabel:"\u30B3\u30F3\u30BB\u30D7\u30C8",description:"\u300C\u672C\u5C4B\u300D\u3067\u3082\u300C\u81EA\u7FD2\u5BA4\u300D\u3067\u3082\u306A\u3044\u3001\u65B0\u3057\u3044\u7A7A\u9593\u3001\u305D\u308C\u304C\u3053\u306E\u30AB\u30D5\u30A7\uFF06\u30B3\u30EF\u30FC\u30AD\u30F3\u30B0\u3067\u3059\u3002\u304A\u597D\u304D\u306A\u30C9\u30EA\u30F3\u30AF\u3092\u98F2\u307F\u306A\u304C\u3089\u3086\u3063\u305F\u308A\u3068\u6C17\u517C\u306D\u306A\u304F\u52C9\u5F37\u3084\u4ED5\u4E8B\u306B\u53D6\u308A\u7D44\u3093\u3067\u3044\u305F\u3060\u3051\u307E\u3059\u3002"},{imageUrl:X,section:"service",linkLabel:"\u30B5\u30FC\u30D3\u30B9",description:"\u55AB\u8336\u30FB\u8EFD\u98DF\u3092\u697D\u3057\u3081\u308B\u30AB\u30D5\u30A7\u30B9\u30DA\u30FC\u30B9\u3002\u30D3\u30B8\u30CD\u30B9\u6240\u304B\u3089\u6700\u65B0\u306E\u96D1\u8A8C\u307E\u3067\u53D6\u308A\u305D\u308D\u3048\u308B\u30D6\u30C3\u30AF\u30B9\u30DA\u30FC\u30B9\u3002\u30D6\u30FC\u30B9\u578B\u306E\u30D1\u30FC\u30BD\u30CA\u30EB\u30EF\u30FC\u30AF\u30B9\u30DA\u30FC\u30B9\u306B\u3001\u958B\u653E\u611F\u304C\u3042\u308B\u30B3\u30EF\u30FC\u30AD\u30F3\u30B0\u30B9\u30DA\u30FC\u30B9\u3002"},{imageUrl:Q,section:"floor",linkLabel:"\u30D5\u30ED\u30A2\u30FC",description:"\u30AB\u30D5\u30A7\u30FB\u30D6\u30C3\u30AF\u30FB\u30B3\u30EF\u30FC\u30AD\u30F3\u30B0\u3002\u5404\u30A8\u30EA\u30A2\u3067\u7570\u306A\u308B\u30B3\u30F3\u30BB\u30D7\u30C8\u3092\u6301\u3064\u5F53\u5E97\u3067\u306F\u3001\u76EE\u7684\u3084\u6C17\u5206\u306B\u5408\u308F\u305B\u3066\u30D5\u30ED\u30A2\u5185\u3092\u79FB\u52D5\u3059\u308B\u3053\u3068\u3067\u5145\u5B9F\u3057\u305F\u6642\u9593\u3092\u304A\u904E\u3054\u3057\u3044\u305F\u3060\u3051\u307E\u3059\u3002"}],su=()=>u(lu,{children:au.map(n=>u(cu,{imageUrl:n.imageUrl,section:n.section,linkLabel:n.linkLabel,description:n.description},n.section))}),du=e.div({padding:"2em 0",backgroundColor:"#F5F5F5",textAlign:"center"}),mu=e.h3({fontSize:"1.6em",color:"#4A2E0C",fontWeight:"normal",marginBottom:"0.3em"}),Fu=e.p({lineHeight:"2em",fontSize:"0.6em",fontFamily:c}),fu=()=>i(du,{children:[u(mu,{children:"\u4EBA\u3068\u4EBA\u3001\u4EBA\u3068\u672C\u304C\u7E4B\u304C\u308B\u307E\u3063\u305F\u304F\u65B0\u3057\u3044\u5FEB\u9069\u6642\u9593\u3002"}),i(Fu,{children:["\u6708\u984D\u30D7\u30E9\u30F3\u4EE5\u5916\u306B\u30D3\u30B8\u30BF\u30FC\u6599\u91D1\u3067\u306E\u3054\u5229\u7528\u3082\u53EF\u80FD\u3067\u3059\u3002\u901A\u3044\u3084\u3059\u3044\u6642\u9593\u3084\u66DC\u65E5\u306B\u5408\u308F\u305B\u3066\u30D7\u30E9\u30F3\u3092\u304A\u9078\u3073\u304F\u3060\u3055\u3044\u3002",u("br",{}),"\u3054\u767B\u9332\u30D7\u30E9\u30F3\u306F\u5F8C\u306E\u5909\u66F4\u3082\u53EF\u80FD\u3067\u3059\u306E\u3067\u3001\u8CC7\u683C\u8A66\u9A13\u7B49\u306E\u76EE\u6A19\u304C\u3042\u308B\u5834\u5408\u306A\u3069\u74B0\u5883\u306E\u5909\u5316\u306B\u5408\u308F\u305B\u3066\u67D4\u8EDF\u306B\u5BFE\u5FDC\u3057\u3066\u304A\u308A\u307E\u3059\u3002Wi-Fi\u3082\u96FB\u6E90\u3082\u6A19\u6E96\u8A2D\u5099\u3057\u3066\u304A\u308A\u3001",u("br",{}),"\u6642\u9593\u3092\u6C17\u306B\u305B\u305A\u4ED5\u4E8B\u3084\u52C9\u5F37\u306B\u53D6\u308A\u7D44\u3081\u307E\u3059\u3002\u30AB\u30D5\u30A7\u3067\u306E\u9577\u5C45\u306F\u6C17\u304C\u5F15\u3051\u308B\u3068\u3044\u3046\u65B9\u306B\u3082\u5FC3\u7F6E\u304D\u306A\u304F\u3054\u5229\u7528\u3044\u305F\u3060\u3051\u307E\u3059\u3002"]})]});var hu="./assets/cafe1.2109a128.jpg",Bu="./assets/cafe2.52a7cfd5.jpg",gu="./assets/cafe3.c1090360.jpg";const Du=e.div({display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(0, 1fr))",alignItems:"stretch",justifyItems:"stretch"}),Eu=e.img({aspectRatio:"1/1",objectFit:"cover"}),pu=()=>u(Du,{children:[hu,Bu,gu,p].map((t,o)=>u(Eu,{src:t},o))}),Au=e.div({display:"flex",flexDirection:"column"}),Cu=()=>i(Au,{children:[u(pu,{}),u(fu,{})]}),vu=e.div({padding:"5em 15%",display:"flex",flexDirection:"column",gap:"5em"}),xu=()=>i(vu,{children:[u(Cu,{}),u(su,{})]});var yu="./assets/cafe8.97e794cf.jpg";const A=e.div({display:"flex",flexDirection:"column"}),C=e.div({display:"flex",alignItems:"center",gap:"0.8em",fontWeight:"normal",color:"#4A2E0C",marginBottom:"1em"}),v=e.h3({lineHeight:0,fontSize:"2em",fontWeight:"normal"}),x=e.h4({lineHeight:0,fontSize:"0.8em",fontWeight:"normal",fontFamily:c}),y=e.div({flex:1,overflow:"scroll",border:"1px solid #D0D0D0"}),b=e.a({marginTop:"1em",textDecoration:"none",color:"black",display:"flex",alignItems:"center",justifyContent:"flex-end",fontFamily:c,transition:"opaicty 0.2s ease-in-out","&:hover":{opacity:.5}}),w=e.span({fontSize:"0.8em",marginRight:"0.5em"}),S=()=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",children:u("path",{fillRule:"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"})}),bu=e.div({display:"flex",flexDirection:"column"}),wu=e.div({backgroundColor:"white",fontFamily:c,borderBottom:"1px solid #D0D0D0","&:last-child":{borderBottom:"none"},display:"grid",gridTemplateColumns:"minmax(0, 2fr) minmax(0, 3fr)",gridTemplateRows:"6em",alignItems:"stretch",justifyItems:"stretch"}),Su=e.img({objectFit:"cover"}),ku=e.div({padding:"1em",display:"flex",flexDirection:"column",justifyContent:"center"}),Tu=e.div({fontSize:"0.8em",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}),Iu=e.div({fontSize:"0.5em",color:"#979797"}),zu=({event:n})=>i(wu,{children:[u(Su,{src:n.image}),i(ku,{children:[u(Tu,{children:n.title}),u(Iu,{children:n.datePublished})]})]}),Ru=({events:n})=>u(bu,{children:n.map(t=>u(zu,{event:t},t.title))}),ju=()=>{const n=Array(10).fill({title:"Reprehenderit minim mollit occaecat fugiat eiusmod cillum duis laborum.",datePublished:"2020.01.01",image:yu}).map((t,o)=>D(g({},t),{title:t.title+o}));return i(A,{children:[i(C,{children:[u(v,{children:"Events"}),u(x,{children:"\u30A4\u30D9\u30F3\u30C8"})]}),u(y,{children:u(Ru,{events:n})}),i(b,{href:"#",children:[u(w,{children:"\u30A4\u30D9\u30F3\u30C8\u4E00\u89A7"}),u(S,{})]})]})},Lu=e.div({display:"flex",flexDirection:"column"}),$u=e.div({backgroundColor:"white",padding:"0.8em",fontFamily:c,borderBottom:"1px solid #D0D0D0","&:last-child":{borderBottom:"none"}}),Pu=e.div({fontSize:"0.5em",color:"#979797"}),Ou=e.div({fontSize:"0.8em",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}),Wu=({news:n})=>i($u,{children:[u(Pu,{children:n.datePublished}),u(Ou,{children:n.title})]}),Hu=({news:n})=>u(Lu,{children:n.map(t=>u(Wu,{news:t},t.title))}),Nu=()=>{const n=Array(10).fill({title:"Reprehenderit minim mollit occaecat fugiat eiusmod cillum duis laborum.",datePublished:"2020.01.01"}).map((t,o)=>({title:t.title+o,datePublished:t.datePublished}));return i(A,{children:[i(C,{children:[u(v,{children:"News"}),u(x,{children:"\u30CB\u30E5\u30FC\u30B9"})]}),u(y,{children:u(Hu,{news:n})}),i(b,{href:"#",children:[u(w,{children:"\u304A\u77E5\u3089\u305B\u4E00\u89A7"}),u(S,{})]})]})},Mu=e.div({padding:"3em 15%",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(0, 1fr))",gridTemplateRows:"25em",gap:"2em",backgroundColor:"#F4F4F4"}),Uu=()=>i(Mu,{children:[u(Nu,{}),u(ju,{})]}),m=e.div({border:"1px solid #D0D0D0",fontFamily:c}),F=e.div({textAlign:"center",backgroundColor:"#A19282",padding:"1em",color:"white",fontWeight:"bold"}),f=({price:n})=>{let t="";return n.toString().split("").reverse().forEach((o,s)=>{s===0?t+=o:s%3==0?t+=`,${o}`:t+=o}),t=t.split("").reverse().join(""),i("div",{css:{backgroundColor:"#EBE8E6",color:"#442602",padding:"1em",textAlign:"center"},children:[i("div",{children:[u("span",{css:{fontSize:"1em"},children:"\uFFE5"}),u("span",{css:{fontSize:"2em",fontWeight:"bold"},children:t})]}),u("div",{children:u("span",{css:{fontSize:"0.8em"},children:"\u6708\u984D"})})]})},l=({children:n})=>u("div",{css:{padding:"1.2em",fontSize:"0.8em",textAlign:"center",color:"#404040",borderTop:"1px solid #D0D0D0"},children:n}),_u=e.div({padding:"6em 15%"}),Gu=e.div({textAlign:"center"}),Vu=e.h3({lineHeight:0,fontSize:"1.6em",color:"#4A2E0C",fontWeight:"normal"}),Yu=e.p({lineHeight:"2em",fontSize:"0.6em",fontFamily:c,marginBottom:"3em"}),qu=e.div({display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(0, 1fr))",gridGap:"1em"}),Ju=e.div({marginTop:"3em",display:"flex",justifyContent:"center"}),Ku=e.a({color:"white",fontSize:"0.8em",textDecoration:"none",fontFamily:c,padding:"1em 4em",backgroundColor:"black",transition:"opacity 0.2s ease-in-out",":hover":{opacity:.5}}),Xu=()=>i(_u,{children:[i(Gu,{children:[u(Vu,{children:"\u30E9\u30A4\u30D5\u30B9\u30BF\u30A4\u30EB\u306B\u5408\u308F\u305B\u3066\u9078\u3079\u308B\u591A\u5F69\u306A\u30D7\u30E9\u30F3\u3002"}),i(Yu,{children:["\u5E73\u65E5\u306E\u307F\u306E\u30D7\u30E9\u30F3\u3001\u4ED5\u4E8B\u5E30\u308A\u3092\u30B3\u30A2\u30BF\u30A4\u30E0\u3068\u3057\u305F\u5915\u65B9\u4EE5\u964D\u304C\u4E2D\u5FC3\u306E\u30D7\u30E9\u30F3\u3001\u4F11\u65E5\u3092\u30E1\u30A4\u30F3\u3068\u3057\u305F\u30D7\u30E9\u30F3\u306A\u3069\u3001",u("br",{}),"\u591A\u5F69\u306A\u30D7\u30E9\u30F3\u306E\u4E2D\u304B\u3089\u305D\u308C\u305E\u308C\u306E\u304A\u5BA2\u69D8\u306E\u30E9\u30A4\u30D5\u30B9\u30BF\u30A4\u30EB\u306B\u5408\u308F\u305B\u3066\u304A\u9078\u3073\u3044\u305F\u3060\u3051\u307E\u3059\u3002",u("br",{}),"\u30D3\u30B8\u30BF\u30FC\u6599\u91D1\u3067\u306E\u3054\u5229\u7528\u3082\u53EF\u80FD\u3067\u3059\u306E\u3067\u3001\u6708\u984D\u4F1A\u54E1\u767B\u9332\u306E\u524D\u306B\u4F53\u9A13\u3092\u3057\u305F\u3044\u3068\u3044\u3046\u65B9\u3082\u662F\u975E\u3054\u5229\u7528\u304F\u3060\u3055\u3044\u3002"]})]}),i(qu,{children:[i(m,{children:[u(F,{children:"\u30C7\u30A4\u30BF\u30A4\u30E0\u30D7\u30E9\u30F3"}),u(f,{price:5e3}),u(l,{children:"\u5165\u4F1A\u91D10\u5186"}),u(l,{children:"\u5E73\u65E5 : 9\u6642\u301C17\u6642"}),u(l,{children:"\u571F\u65E5\u795D : \u5229\u7528\u30CA\u30B7"}),u(l,{children:"\u30B3\u30A2\u30BF\u30A4\u30E0\u3067\u306E\u5229\u7528\u306B\u6700\u9069\u306A\u30D7\u30E9\u30F3"})]}),i(m,{css:{border:"4px solid #442602"},children:[u(F,{css:{backgroundColor:"#442602"},children:"\u30B9\u30BF\u30F3\u30C0\u30FC\u30C9\u30D7\u30E9\u30F3"}),u(f,{price:15e3}),u(l,{children:"\u5165\u4F1A\u91D10\u5186"}),u(l,{children:"\u5E73\u65E5 : 9\u6642\u301C23\u6642"}),u(l,{children:"\u571F\u65E5\u795D : \u55B6\u696D\u6642\u9593\u5168\u3066"}),u(l,{children:"\u55B6\u696D\u6642\u9593\u5185\u3067\u7D42\u65E5\u3054\u5229\u7528\u53EF\u80FD\u306A\u30D7\u30E9\u30F3"})]}),i(m,{children:[u(F,{children:"\u30D7\u30EC\u30DF\u30A2\u30E0\u30D7\u30E9\u30F3"}),u(f,{price:2e4}),u(l,{children:"\u5165\u4F1A\u91D15000\u5186"}),u(l,{children:"\u5E73\u65E5 : \u55B6\u696D\u6642\u9593\u5168\u3066"}),u(l,{children:"\u571F\u65E5\u795D : \u55B6\u696D\u6642\u9593\u5168\u3066"}),u(l,{children:"\u30D5\u30EB\u306B\u4F7F\u3044\u305F\u3044\u65B9\u306E\u305F\u3081\u306E\u30D7\u30E9\u30F3"})]})]}),u(Ju,{children:u(Ku,{href:"#",children:"\u30D7\u30E9\u30F3\u6599\u91D1"})})]}),Qu=e.div({padding:"3em",textAlign:"center",backgroundColor:"black",color:"white"}),Zu=e.h2({fontSize:"1.6em",lineHeight:"0",fontWeight:"normal",marginBottom:"1em"}),u0=e.p({fontSize:"0.6em",lineHeight:"2em",fontFamily:c}),e0=()=>i(Qu,{children:[u(Zu,{children:"\u30AB\u30D5\u30A7\u3067\u8AAD\u66F8\uFF06\u30B3\u30EF\u30FC\u30AD\u30F3\u30B0\u3002\u5FEB\u9069\u306E\u30D5\u30ED\u30A2\u30B9\u30DA\u30FC\u30B9\u7A7A\u9593\u3002"}),i(u0,{children:["\u30AB\u30D5\u30A7\u30A8\u30EA\u30A2\u3067\u30B3\u30FC\u30D2\u30FC\u3092\u6CE8\u6587\u3057\u3001\u30D6\u30C3\u30AF\u30A8\u30EA\u30A2\u3067\u304A\u597D\u307F\u306E\u672C\u3092\u9078\u3073\u3001\u30B3\u30EF\u30FC\u30AD\u30F3\u30B0\u30B9\u30DA\u30FC\u30B9\u3067\u30B3\u30FC\u30D2\u30FC\u3068\u5171\u306B\u8AAD\u66F8\u3092\u697D\u3057\u3080\u3002",u("br",{}),"\u5B66\u6821\u30FB\u4ED5\u4E8B\u5E30\u308A\u306B\u3001\u5E73\u65E5\u306B\u65E5\u4E2D\u306B\u3001\u4F11\u65E5\u306B\u3086\u3063\u304F\u308A\u2026\u3055\u307E\u3056\u307E\u306A\u30E9\u30A4\u30D5\u30B9\u30BF\u30A4\u30EB\u306B\u5408\u308F\u305B\u3066\u3054\u5229\u7528\u3044\u305F\u3060\u3051\u308B\u591A\u5F69\u306A\u30D7\u30E9\u30F3\u3092\u3054\u7528\u610F\u3057\u3066\u304A\u308A\u307E\u3059\u3002"]})]});var n0="./assets/cafe.aff54b20.png";const t0=e.div({display:"flex",flex:1,justifyContent:"flex-end"}),i0=e.a({color:"white",textDecoration:"none",transition:"opacity 0.2s ease-in-out",fontFamily:U,textTransform:"uppercase",marginLeft:"2em",fontSize:"0.7em","&:hover":{opacity:.5}}),o0=e.header({display:"flex",alignItems:"center",padding:"0.5em 1.5em",backgroundColor:"rgba(0,0,0,0.7)"}),r0=()=>{const n=["home","consept","service","floors","interview","blog","access","download"];return i(o0,{children:[u(_,{}),u(t0,{children:n.map(t=>u(i0,{href:"#",children:t},t))})]})},c0=e.span({writingMode:"vertical-rl",color:"white",fontSize:"1.5em"}),l0=()=>i(c0,{children:["\u305D\u3046\u3060\u3002",u("br",{}),"\u30AB\u30D5\u30A7\u306B\u884C\u3053\u3046\u3002"]}),a0=e.div({display:"flex",flexDirection:"column",height:"100vh",backgroundImage:M(n0),backgroundSize:"cover"}),s0=e.div({flex:1,display:"flex",justifyContent:"center",alignItems:"center"}),d0=()=>i(a0,{children:[u(r0,{}),u(s0,{children:u(l0,{})})]}),m0=e.div({display:"flex",flexDirection:"column",width:"100%"}),F0=()=>i(m0,{children:[u(d0,{}),u(e0,{}),u(xu,{}),u(Uu,{}),u(Xu,{}),u(K,{})]});W.render(u(H.StrictMode,{children:u(F0,{})}),document.getElementById("root"));
