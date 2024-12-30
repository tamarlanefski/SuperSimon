const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/react-konva-Ds4vkoaI.js","assets/vendor-YQncPFj8.js"])))=>i.map(i=>d[i]);
import{j as t,B as P,r as u,b as A}from"./vendor-YQncPFj8.js";import{Line as N}from"./react-konva-Ds4vkoaI.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))m(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&m(n)}).observe(document,{childList:!0,subtree:!0});function l(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function m(o){if(o.ep)return;o.ep=!0;const c=l(o);fetch(o.href,c)}})();const b=e=>{const a=()=>{const l=[];for(let m=0;m<8;m++)l.push(Math.floor(Math.random()*6));e.setSequence(l)};return t.jsxs("div",{id:"containStartGame",children:[t.jsx(P,{}),t.jsx("div",{onClick:a,id:"startGame",children:"start game"})]})},B=e=>t.jsx("div",{className:"menu",children:t.jsx(b,{setSequence:e.setSequence})}),O="modulepreload",T=function(e){return"/SuperSimon/"+e},R={},k=function(a,l,m){let o=Promise.resolve();if(l&&l.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),d=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));o=Promise.allSettled(l.map(y=>{if(y=T(y),y in R)return;R[y]=!0;const h=y.endsWith(".css"),C=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${C}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":O,h||(f.as="script"),f.crossOrigin="",f.href=y,d&&f.setAttribute("nonce",d),document.head.appendChild(f),h)return new Promise((j,x)=>{f.addEventListener("load",j),f.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${y}`)))})}))}function c(n){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=n,window.dispatchEvent(d),!d.defaultPrevented)throw n}return o.then(n=>{for(const d of n||[])d.status==="rejected"&&c(d.reason);return a().catch(c)})},z=e=>t.jsx(N,{x:e.x,y:e.y,points:[0,0,e.size,0,e.size/1.3,e.size/3,e.size-e.size/1.3,e.size/3],fill:e.fill,closed:!0,stroke:"#d2d8dd",strokeWidth:4,rotation:e.rotation,onClick:e.onClick}),_=e=>{const[a,l]=u.useState(-1),[m,o]=u.useState(0),[c,n]=u.useState(0),[d,y]=u.useState(null),[h,C]=u.useState(null),[f,j]=u.useState(null),x=["#D72638","#FF5700"," #FFC107","#4CAF50","#1E88E5","#9C27B0"],p=["#FF4D6D","#FFA333","#FFE066","#B9FBC0","#57C7FF","#E87BF8"],[g,F]=u.useState(x);u.useEffect(()=>{k(()=>import("./react-konva-Ds4vkoaI.js"),__vite__mapDeps([0,1])).then(s=>{y(s.Stage),C(s.Layer),j(s.RegularPolygon)})},[]);const q="/sound/soundsuccess.mp3",w="/sound/soundfail.mp3",v=[{x:465,y:100,rotation:0,fill:g[0],sound:"/sound/sound1.mp3"},{x:662,y:117,rotation:60,fill:g[1],sound:"/sound/sound2.mp3"},{x:758,y:302,rotation:120,fill:g[2],sound:"/sound/sound3.mp3"},{x:638,y:464,rotation:180,fill:g[3],sound:"/sound/sound4.mp3"},{x:428,y:440,rotation:240,fill:g[4],sound:"/sound/sound5.mp3"},{x:350,y:253,rotation:300,fill:g[5],sound:"/sound/sound6.mp3"}],E=s=>{new Audio(v[s].sound).play(),F(r=>{const S=[...r];return S[s]=p[s],S}),setTimeout(()=>{F(r=>{const S=[...r];return S[s]=x[s],S})},600)};u.useEffect(()=>{n(0),setTimeout(()=>{E(e.sequence[0]),n(1)},1e3),o(0),l(0)},[e.sequence]);const L=s=>{if(E(s),c==1)if(e.sequence[a]===s)if(a==m){if(a==7){new Audio(q).play();const i=e.elementRef.current,r=e.animationRef.current;i&&(i.style.animationName="none",i.offsetWidth,i.style.animationName="success",i.style.animationDuration="5s",i.style.animationTimingFunction="ease-in-out",i.style.animationIterationCount="1"),r&&(r.src="/animation/clapping.gif"),n(0)}else o(i=>i+1);l(0)}else l(i=>i+1);else{const i=e.animationRef.current;setTimeout(()=>{new Audio(w).play();const r=e.elementRef.current;r&&(n(0),r.style.animationName="none",r.offsetWidth,r.style.animationName="fail",r.style.animationDuration="1.7s",r.style.animationTimingFunction="ease-in-out",r.style.animationIterationCount="1"),i&&(i.src="/animation/cry.gif")},600)}};return u.useEffect(()=>{n(0);const s=e.animationRef.current;s&&(s.src="/animation/wait.gif"),e.sequence.slice(0,m+1).forEach((i,r)=>{setTimeout(()=>{console.log(r+" index "+i+" seq[index]"),E(i),r==m&&n(1)},950*(r+1))})},[m]),!d||!h||!f?t.jsx("div",{children:"Loading..."}):t.jsx(d,{width:845,height:500,children:t.jsxs(h,{children:[t.jsx(f,{x:550,y:280,sides:6,radius:250,fill:"#e9eaeb",stroke:"#d2d8dd",strokeWidth:3,rotation:30}),v.map((s,i)=>t.jsx(z,{x:s.x,y:s.y,size:170,rotation:s.rotation,fill:s.fill,onClick:()=>L(i),sound:s.sound},i))]})})},D=e=>t.jsxs("div",{id:"wrapper",children:[t.jsx("img",{ref:e.animationRef,src:"/animation/wait.gif"}),t.jsx("div",{ref:e.elementRef,children:"Super Simon"})]}),I=e=>{const a=u.useRef(null),l=u.useRef(null);return t.jsxs("div",{className:"main",children:[t.jsx(D,{elementRef:a,animationRef:l}),t.jsx(_,{sequence:e.sequence,elementRef:a,animationRef:l})]})};function W(){const[e,a]=u.useState([]);return t.jsxs(t.Fragment,{children:[t.jsx(I,{sequence:e}),t.jsx(B,{setSequence:a})]})}A.createRoot(document.getElementById("root")).render(t.jsx(u.StrictMode,{children:t.jsx(W,{})}));
//# sourceMappingURL=index-4kiQwp7g.js.map
