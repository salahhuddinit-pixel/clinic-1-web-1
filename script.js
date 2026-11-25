(()=>{
"use strict";
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
const reduced=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const loader=$(".loader");
if(loader) window.addEventListener("load",()=>window.setTimeout(()=>loader.classList.add("done"),reduced?0:300),{once:true});
const year=$("#year"); if(year) year.textContent=String(new Date().getFullYear());
const toggle=$(".menu-toggle"), menu=$(".mobile-menu");
if(toggle&&menu){toggle.addEventListener("click",()=>{const open=toggle.getAttribute("aria-expanded")!=="true";toggle.setAttribute("aria-expanded",String(open));menu.classList.toggle("open",open);toggle.setAttribute("aria-label",open?"Close menu":"Open menu");});menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-label","Open menu");menu.classList.remove("open");}));}
const current=location.pathname.split("/").pop()||"index.html";
$$('.desktop-nav a,.mobile-menu a').forEach(a=>{try{if(new URL(a.href,location.href).pathname.split('/').pop()===current)a.setAttribute('aria-current','page');}catch{}});
const main=$("main"); if(main&&!main.id)main.id="main";
if("IntersectionObserver" in window&&!reduced){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target);}}),{threshold:.12});$$('.reveal').forEach(el=>observer.observe(el));}else{$$('.reveal').forEach(el=>el.classList.add('visible'));}
const art=$(".art-object"),hero=$(".hero-art");
if(art&&hero&&!reduced){hero.addEventListener("pointermove",e=>{const r=hero.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;art.style.transform=`rotateY(${x*18}deg) rotateX(${-y*14}deg) translateY(-4px)`;});hero.addEventListener("pointerleave",()=>art.style.transform="");}
$$('.magnetic').forEach(el=>{el.addEventListener('pointermove',e=>{if(reduced||e.pointerType==='touch')return;const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.045}px,${(e.clientY-r.top-r.height/2)*.07}px)`;});el.addEventListener('pointerleave',()=>el.style.transform='');});
const date=$('input[type="date"]');if(date){const today=new Date();date.min=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().slice(0,10);}
const form=$(".lead-form");
if(form){form.addEventListener("submit",e=>{e.preventDefault();if(!form.reportValidity())return;const btn=$(".submit-btn",form),label=$(".submit-btn span",form),success=$(".form-success",form);if(btn)btn.disabled=true;
try{const data=Object.fromEntries(new FormData(form).entries());data.id=(window.crypto&&crypto.randomUUID)?crypto.randomUUID():"req-"+Date.now()+"-"+Math.random().toString(16).slice(2);data.submittedAt=new Date().toISOString();const key="01-dental-clinic-requests-v2";let old=[];try{old=JSON.parse(localStorage.getItem(key)||"[]");if(!Array.isArray(old))old=[];}catch{throw new Error("Saved enquiries could not be read. Please check browser storage settings.");}old.push(data);localStorage.setItem(key,JSON.stringify(old));if(success){success.classList.add("show");success.setAttribute("role","status");success.setAttribute("aria-live","polite");const span=$("span",success);if(span)span.textContent="Demo mode: this request is saved only in this browser on this device. Connect a secure server to receive and manage enquiries.";}if(label)label.textContent="Saved on this device";if(btn)btn.setAttribute("aria-label","Request saved on this device");form.reset();if(date)date.min=new Date().toISOString().slice(0,10);
}catch(err){if(success){success.classList.add("show");success.setAttribute("role","alert");const b=$("b",success),span=$("span",success);if(b)b.textContent="Could not save your request";if(span)span.textContent=err&&err.message?err.message:"Please try again.";}if(btn)btn.disabled=false;if(label)label.textContent="Try again";}
});}
const topButton=$(".to-top");if(topButton){const update=()=>topButton.classList.toggle("show",window.scrollY>420);window.addEventListener("scroll",update,{passive:true});update();topButton.addEventListener("click",()=>window.scrollTo({top:0,behavior:reduced?"auto":"smooth"}));}
})();
