import{a,S as h}from"./assets/vendor-db58f109.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const u=document.querySelector(".filters-select"),S=document.querySelector(".filtersInput"),w=document.querySelector(".filtersBtn");let l;const n={keyword:null,category:null,page:1,limit:9};localStorage.setItem("filterParams",JSON.stringify(n));async function v(){try{return(await a.get("https://food-boutique.b.goit.study/api/products/categories")).data}catch(t){throw console.log("Проблема при запросе на сервер"),new Error(t)}}async function p(t){const{keyword:e,category:r,page:c,limit:o}=t;try{let s;return e===null&&r===null?s=await a.get(`https://food-boutique.b.goit.study/api/products?page=${c}&limit=${o}`):e===null?s=await a.get(`https://food-boutique.b.goit.study/api/products?category=${r}&page=${c}&limit=${o}`):r===null?s=await a.get(`https://food-boutique.b.goit.study/api/products?keyword=${e}&page=${c}&limit=${o}`):s=await a.get(`https://food-boutique.b.goit.study/api/products?keyword=${e}&category=${r}&page=${c}&limit=${o}`),s.data.results}catch(s){throw console.log("Помилка на сервері при пошуку продуктів",s),new Error(s)}}async function $(){try{const e=(await v()).map(r=>`<option>${r}</option>`).join("")+"<option>Show all</option>";u.insertAdjacentHTML("beforeend",e),new h({select:".filters-select"})}catch(t){console.log("Проблема при обработке данных с сервера",t)}}$();u.addEventListener("change",b);w.addEventListener("click",q);async function b(t){n.category=t.currentTarget.value,n.category==="Show all"?n.category=null:localStorage.setItem("filterParams",JSON.stringify(n)),l=await p(n),console.log(l),SecondSelection(l)}async function q(){const t=S.value;t.trim()?n.keyword=t:n.keyword=null,localStorage.setItem("filterParams",JSON.stringify(n)),l=await p(n),console.log(l),SecondSelection(l)}const L="https://food-boutique.b.goit.study/api",k=document.querySelector("[data-modal-close]"),P=document.querySelector("[data-modal]");k.addEventListener("click",m);function m(){P.classList.toggle("is-hidden")}const E=document.querySelector("#modal-img"),C=document.querySelector("#modal-name"),x=document.querySelector("#modal-category"),I=document.querySelector("#modal-size"),M=document.querySelector("#modal-popularity"),N=document.querySelector("#modal-desc"),O=document.querySelector("#modal-price");async function f(t){let e;try{e=await a(L+"/products/"+t),console.log(e),E.src=e.data.img,C.textContent=e.data.name,x.textContent=e.data.category,I.textContent=e.data.size,M.textContent=e.data.popularity,N.textContent=e.data.desc,O.textContent="$"+e.data.price,m()}catch(r){console.log(r)}}const F="https://food-boutique.b.goit.study/api",D="/products",B=document.querySelector(".products-container");let T=1;async function j(){try{const t=await z();t.results?B.innerHTML=A(t.results):console.error("No results found in the response data.")}catch(t){console.error("Error fetching products:",t)}}async function z(){const t=new URLSearchParams({page:T,limit:9}),e=await fetch(`${F}${D}?${t}`);if(!e.ok)throw new Error(e.status);return e.json()}function A(t){return t.map(({img:e,name:r,price:c,category:o,size:s,popularity:i})=>`
    <ul>
      <li class="product-card">
        <img class="product-img" src="${e}" alt="${r} width="1000px" />
        <div class="product-info">
          <h3>${r}</h3>
          <div class="product-description">
            <p><span>Category:</span> ${o}</p>
            <p><span>Size:</span> ${s}</p>
            <p><span>Popularity:</span> ${i}</p>
          </div>
          <div class="product-forsale">
            <p class="product-price">$${c}</p>
            <div class="carts-svg-box">
              <svg width="18" height="18">
                <use href="./img/sprite.svg#icon-white-basket"></use>
              </svg>
            </div>
          </div>
        </div>
      </li>
    </ul>
  `).join("")}j();const H=document.querySelector(".products-container");H.addEventListener("click",J);function J(t){t.preventDefault(),console.log(t),f("640c2dd963a319ea671e383b")}const R=document.querySelector(".carts-discount");g();async function g(){const{data:t}=await a.get("https://food-boutique.b.goit.study/api/products/discount");return t.sort((r,c)=>c.popularity-r.popularity).slice(0,2)}U();async function U(){const e=(await g()).map(({img:s,is10PercentOff:i,price:y,name:d})=>`<li class="product-card"><img class="product-img" src="${s}" alt="${d}"/><div class="dis-card-description"><p class="dis-card-name">${d}</p><p class="dis-card-price">${y}</p><div class="carts-svg-box">
              <svg width="18" height="18">
                <use href="./img/sprite.svg#icon-white-basket"></use>
              </svg>
            </div></div></li>`).join(""),r=document.createElement("div");r.classList.add("container");const c=document.createElement("h2");c.classList.add("discount-title"),c.innerText="Discount products";const o=document.createElement("ul");o.classList.add("discount-list"),o.innerHTML=e,r.append(c),r.append(o),R.append(r)}const _=document.querySelector("#test");_.addEventListener("click",()=>f("640c2dd963a319ea671e383b"));
//# sourceMappingURL=commonHelpers.js.map
