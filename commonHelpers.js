import{a}from"./assets/vendor-b3a2ce1a.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const l=document.querySelector(".filters-select");console.log(l);const c={keyword:null,category:null,page:1,limit:6};localStorage.setItem("filterParams",JSON.stringify(c));function u(){return a.get("https://food-boutique.b.goit.study/api/products/categories").then(e=>e).catch(e=>{throw console.log("Проблема при запиті на сервер"),new Error(e)})}u().then(e=>{const r=e.data.map(n=>`<option>${n}</option>`).join("")+"<option>Show all</option>";l.insertAdjacentHTML("beforeend",r)}).catch(e=>{console.log("Проблема при опрацювання даних із серверу",e)});l.addEventListener("change",d);function d(e){c.category=e.currentTarget.value,c.category==="Show all"&&(c.category=null),localStorage.setItem("filterParams",JSON.stringify(c))}const f="https://food-boutique.b.goit.study/api",p="/products",g=document.querySelector(".products-container");let h=1;async function m(){try{const e=await y();e.results?(console.log(e),g.innerHTML=S(e.results)):console.error("No results found in the response data.")}catch(e){console.error("Error fetching products:",e)}}async function y(){const e=new URLSearchParams({page:h,limit:9}),r=await fetch(`${f}${p}?${e}`);if(!r.ok)throw new Error(r.status);return r.json()}function S(e){return e.map(({img:r,name:n,price:i,category:t,size:o,popularity:s})=>`
    <ul>
      <li class="product-card">
        <img class="product-img" src="${r}" alt="${n} width="1000px" />
        <div class="product-info">
          <h3>${n}</h3>
          <p>Category: ${t}</p>
          <p>Size: ${o}</p>
          <p>Popularity: ${s}</p>
          <p class="product-price">$${i}</p>
        </div>
      </li>
    </ul>
  `).join("")}m();
//# sourceMappingURL=commonHelpers.js.map
