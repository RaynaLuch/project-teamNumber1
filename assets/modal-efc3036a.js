import{a as C}from"./vendor-cb0d5946.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();function d(){var o;const t=((o=JSON.parse(localStorage.getItem("basket")))==null?void 0:o.length)??0,e=document.querySelector(".itemsCount");e.innerText=t}d();const L="/project-teamNumber1/assets/sprite-851c6254.svg";function h(t,e){const i=document.querySelector(".popular-product-list").querySelector(`[data-id="${t}"]`);if(!i)return;e?i.classList.add("product-preview--in-cart"):i.classList.remove("product-preview--in-cart"),i.children[1].children[0].children[1].children[0].children[0].setAttribute("href",`${L}#${e?"icon-check":"icon-cart"}`)}const a="basket";function S(t){const e=f();e.push(t),localStorage.setItem(a,JSON.stringify(e)),d();try{h(t._id,!0)}catch{}}function k(t){return f().find(o=>(o==null?void 0:o._id)===t)}function f(){let t,e=localStorage.getItem(a);return e?t=JSON.parse(e):t=[],t}function E(t){let e=f();e=e.filter(o=>o._id!==t),localStorage.setItem(a,JSON.stringify(e)),d();try{h(t,!1)}catch{}}function _(){localStorage.removeItem(a),d()}const q="https://food-boutique.b.goit.study/api",u=document.querySelector("[data-modal-close]"),b=document.querySelector("[data-modal]"),c=document.querySelector(".modal-cart-button");function m(){document.body.classList.toggle("modal-open"),b.classList.toggle("is-hidden")}const g=document.querySelector("#modal-img"),y=document.querySelector("#modal-name"),x=document.querySelector("#modal-category"),P=document.querySelector("#modal-size"),N=document.querySelector("#modal-popularity"),O=document.querySelector("#modal-desc"),F=document.querySelector("#modal-price");async function H(t){let e;try{let n=function(){c.removeEventListener("click",i),c.removeEventListener("click",o),u.removeEventListener("click",n),document.removeEventListener("keyup",r),m()},r=function(s){s.keyCode===27&&(m(),c.removeEventListener("click",i),c.removeEventListener("click",o),document.removeEventListener("keyup",r),u.removeEventListener("click",n))};e=await C(q+"/products/"+t),console.log(e),g.src=e.data.img,y.textContent=e.data.name,g.alt=y.textContent,x.textContent=e.data.category,P.textContent=e.data.size,N.textContent=e.data.popularity,O.textContent=e.data.desc,F.textContent="$"+e.data.price,m();const o=s=>{const l=e.data;E(l._id),c.removeEventListener("click",o),c.firstChild.textContent="Add to",c.addEventListener("click",i)},i=s=>{const l=e.data;S(l),c.removeEventListener("click",i),c.firstChild.textContent="Remove from",c.addEventListener("click",o)};k(e.data._id)?(c.firstChild.textContent="Remove from",c.addEventListener("click",o)):(c.firstChild.textContent="Add to",c.addEventListener("click",i)),u.addEventListener("click",n),document.addEventListener("keyup",r)}catch(o){console.log(o)}}const p=document.querySelector("[data-modal-close-shopping-cart]"),I=document.querySelector("[data-modal-shopping-cart]"),w=document.querySelector(".shopping-cart-container");function v(){document.body.classList.toggle("modal-open"),I.classList.toggle("is-hidden")}if(w){let t=function(e){e.keyCode===27&&(v(),document.removeEventListener("keydown",t))};p==null||p.addEventListener("click",v),document.addEventListener("keydown",t)}export{S as a,_ as b,k as f,f as g,L as i,E as r,H as s,v as t};
//# sourceMappingURL=modal-efc3036a.js.map