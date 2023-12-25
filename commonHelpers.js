import{a,S as h}from"./assets/vendor-db58f109.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const u=document.querySelector(".filters-select"),v=document.querySelector(".filtersInput"),w=document.querySelector(".filtersBtn");let l;const n={keyword:null,category:null,page:1,limit:9};localStorage.setItem("filterParams",JSON.stringify(n));async function S(){try{return(await a.get("https://food-boutique.b.goit.study/api/products/categories")).data}catch(e){throw console.log("Проблема при запросе на сервер"),new Error(e)}}async function p(e){const{keyword:t,category:o,page:c,limit:r}=e;try{let s;return t===null&&o===null?s=await a.get(`https://food-boutique.b.goit.study/api/products?page=${c}&limit=${r}`):t===null?s=await a.get(`https://food-boutique.b.goit.study/api/products?category=${o}&page=${c}&limit=${r}`):o===null?s=await a.get(`https://food-boutique.b.goit.study/api/products?keyword=${t}&page=${c}&limit=${r}`):s=await a.get(`https://food-boutique.b.goit.study/api/products?keyword=${t}&category=${o}&page=${c}&limit=${r}`),s.data.results}catch(s){throw console.log("Помилка на сервері при пошуку продуктів",s),new Error(s)}}async function $(){try{const t=(await S()).map(o=>`<option>${o}</option>`).join("")+"<option>Show all</option>";u.insertAdjacentHTML("beforeend",t),new h({select:".filters-select"})}catch(e){console.log("Проблема при обработке данных с сервера",e)}}$();u.addEventListener("change",b);w.addEventListener("click",q);async function b(e){n.category=e.currentTarget.value,n.category==="Show all"?n.category=null:localStorage.setItem("filterParams",JSON.stringify(n)),l=await p(n),console.log(l),SecondSelection(l)}async function q(){const e=v.value;e.trim()?n.keyword=e:n.keyword=null,localStorage.setItem("filterParams",JSON.stringify(n)),l=await p(n),console.log(l),SecondSelection(l)}const L="https://food-boutique.b.goit.study/api",_=document.querySelector("[data-modal-close]"),k=document.querySelector("[data-modal]");_.addEventListener("click",m);function m(){k.classList.toggle("is-hidden")}const E=document.querySelector("#modal-img"),P=document.querySelector("#modal-name"),C=document.querySelector("#modal-category"),x=document.querySelector("#modal-size"),I=document.querySelector("#modal-popularity"),M=document.querySelector("#modal-desc"),N=document.querySelector("#modal-price");async function g(e){let t;try{t=await a(L+"/products/"+e),console.log(t),E.src=t.data.img,P.textContent=t.data.name,C.textContent=t.data.category,x.textContent=t.data.size,I.textContent=t.data.popularity,M.textContent=t.data.desc,N.textContent="$"+t.data.price,m()}catch(o){console.log(o)}}const O="https://food-boutique.b.goit.study/api",D="/products",F=document.querySelector(".products-container");let B=1;async function T(){try{const e=await z();e.results?F.innerHTML=j(e.results):console.error("No results found in the response data.")}catch(e){console.error("Error fetching products:",e)}}async function z(){const e=new URLSearchParams({page:B,limit:9}),t=await fetch(`${O}${D}?${e}`);if(!t.ok)throw new Error(t.status);return t.json()}function j(e){return e.map(({img:t,name:o,price:c,category:r,size:s,popularity:i})=>`
    <ul>
      <li class="product-card">
        <img class="product-img" src="${t}" alt="${o} width="1000px" />
        <div class="product-info">
          <h3>${o}</h3>
          <div class="product-description">
            <p><span>Category:</span> ${r}</p>
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
  `).join("")}T();const A=document.querySelector(".products-container");A.addEventListener("click",H);function H(e){e.preventDefault(),console.log(e),g("640c2dd963a319ea671e383b")}const R=document.querySelector(".carts-discount");f();async function f(){const{data:e}=await a.get("https://food-boutique.b.goit.study/api/products/discount");return e.sort((o,c)=>c.popularity-o.popularity).slice(0,2)}U();async function U(){const t=(await f()).map(({img:s,is10PercentOff:i,price:y,name:d})=>`<li class="product-card"><img class="product-img" src="${s}" alt="${d}"/><div class="dis-card-description"><p class="dis-card-name">${d}</p><p class="dis-card-price">${y}</p><div class="carts-svg-box">
              <svg width="18" height="18">
                <use href="./img/sprite.svg#icon-white-basket"></use>
              </svg>
            </div></div></li>`).join(""),o=document.createElement("div");o.classList.add("container");const c=document.createElement("h2");c.classList.add("discount-title"),c.innerText="Discount products";const r=document.createElement("ul");r.classList.add("discount-list"),r.innerHTML=t,o.append(c),o.append(r),R.append(o)}const J="https://food-boutique.b.goit.study/api/products/popular",K=document.querySelector(".carts-popular");function G(e){if(!e)return console.error("Помилка"),null;const t=document.createElement("div");t.classList.add("product-preview");const o=document.createElement("button");return o.onclick=()=>{},o.className="product-preview__cart-btn",t.innerHTML=`
    <div class="product-preview__image-container">
      <img src="${e.img}" alt="${e.name}">
    </div>
    <div class="product-preview__info">
      <div class="product-preview__heading-wrapper">
        <h2 class="product-preview__heading">${e.name}</h2>
      </div>
      <div class="product-preview__description">
        <p class="product-preview__category"><span class="product-preview__sub-heading">Category:</span> ${e.category}</p>
        <p><span class="product-preview__sub-heading">Size: ${e.size}</span></p>
        <p><span class="product-preview__sub-heading">Popularity:</span> ${e.popularity}</p>
      </div>
    </div>
  `,t.children[1].children[0].appendChild(o),t.onclick=()=>{g(e._id)},t}async function Q(){try{return(await a.get(J)).data}catch(e){throw console.error("Помилка при отриманні даних: ",e),e}}document.addEventListener("DOMContentLoaded",async()=>{try{const e=await Q();console.log(e),e.sort((t,o)=>o.popularity-t.popularity).forEach(t=>{const o=G(t);o&&K.appendChild(o)})}catch(e){console.error("Помилка при отриманні даних: ",e)}});
//# sourceMappingURL=commonHelpers.js.map
