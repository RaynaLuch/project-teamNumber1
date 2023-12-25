import"./assets/styles-f02d5c18.js";import{a as n,S as h}from"./assets/vendor-db58f109.js";const u=document.querySelector(".filters-select"),v=document.querySelector(".filtersInput"),w=document.querySelector(".filtersBtn");let i;const c={keyword:null,category:null,page:1,limit:9};localStorage.setItem("filterParams",JSON.stringify(c));async function S(){try{return(await n.get("https://food-boutique.b.goit.study/api/products/categories")).data}catch(t){throw console.log("Проблема при запросе на сервер"),new Error(t)}}async function p(t){const{keyword:e,category:o,page:s,limit:a}=t;try{let r;return e===null&&o===null?r=await n.get(`https://food-boutique.b.goit.study/api/products?page=${s}&limit=${a}`):e===null?r=await n.get(`https://food-boutique.b.goit.study/api/products?category=${o}&page=${s}&limit=${a}`):o===null?r=await n.get(`https://food-boutique.b.goit.study/api/products?keyword=${e}&page=${s}&limit=${a}`):r=await n.get(`https://food-boutique.b.goit.study/api/products?keyword=${e}&category=${o}&page=${s}&limit=${a}`),r.data.results}catch(r){throw console.log("Помилка на сервері при пошуку продуктів",r),new Error(r)}}async function $(){try{const e=(await S()).map(o=>`<option>${o}</option>`).join("")+"<option>Show all</option>";u.insertAdjacentHTML("beforeend",e),new h({select:".filters-select"})}catch(t){console.log("Проблема при обработке данных с сервера",t)}}$();u.addEventListener("change",b);w.addEventListener("click",q);async function b(t){c.category=t.currentTarget.value,c.category==="Show all"?c.category=null:localStorage.setItem("filterParams",JSON.stringify(c)),i=await p(c),console.log(i),SecondSelection(i)}async function q(){const t=v.value;t.trim()?c.keyword=t:c.keyword=null,localStorage.setItem("filterParams",JSON.stringify(c)),i=await p(c),console.log(i),SecondSelection(i)}const _="https://food-boutique.b.goit.study/api",L=document.querySelector("[data-modal-close]"),k=document.querySelector("[data-modal]");L.addEventListener("click",g);function g(){k.classList.toggle("is-hidden")}const E=document.querySelector("#modal-img"),C=document.querySelector("#modal-name"),P=document.querySelector("#modal-category"),x=document.querySelector("#modal-size"),I=document.querySelector("#modal-popularity"),M=document.querySelector("#modal-desc"),D=document.querySelector("#modal-price");async function m(t){let e;try{e=await n(_+"/products/"+t),console.log(e),E.src=e.data.img,C.textContent=e.data.name,P.textContent=e.data.category,x.textContent=e.data.size,I.textContent=e.data.popularity,M.textContent=e.data.desc,D.textContent="$"+e.data.price,g()}catch(o){console.log(o)}}const F="https://food-boutique.b.goit.study/api",N="/products",B=document.querySelector(".products-container");let O=1;async function T(){try{const t=await z();t.results?B.innerHTML=j(t.results):console.error("No results found in the response data.")}catch(t){console.error("Error fetching products:",t)}}async function z(){const t=new URLSearchParams({page:O,limit:9}),e=await fetch(`${F}${N}?${t}`);if(!e.ok)throw new Error(e.status);return e.json()}function j(t){return t.map(({img:e,name:o,price:s,category:a,size:r,popularity:l})=>`
    <ul>
      <li class="product-card">
        <img class="product-img" src="${e}" alt="${o} width="1000px" />
        <div class="product-info">
          <h3>${o}</h3>
          <div class="product-description">
            <p><span>Category:</span> ${a}</p>
            <p><span>Size:</span> ${r}</p>
            <p><span>Popularity:</span> ${l}</p>
          </div>
          <div class="product-forsale">
            <p class="product-price">$${s}</p>
            <div class="carts-svg-box">
              <svg width="18" height="18">
                <use href="./img/sprite.svg#icon-white-basket"></use>
              </svg>
            </div>
          </div>
        </div>
      </li>
    </ul>
  `).join("")}T();const A=document.querySelector(".products-container");A.addEventListener("click",H);function H(t){t.preventDefault(),console.log(t),m("640c2dd963a319ea671e383b")}const R=document.querySelector(".carts-discount");y();async function y(){const{data:t}=await n.get("https://food-boutique.b.goit.study/api/products/discount");return t.sort((o,s)=>s.popularity-o.popularity).slice(0,2)}U();async function U(){const e=(await y()).map(({img:r,is10PercentOff:l,price:f,name:d})=>`<li class="product-card"><img class="product-img" src="${r}" alt="${d}"/><div class="dis-card-description"><p class="dis-card-name">${d}</p><p class="dis-card-price">${f}</p><div class="carts-svg-box">
              <svg width="18" height="18">
                <use href="./img/sprite.svg#icon-white-basket"></use>
              </svg>
            </div></div></li>`).join(""),o=document.createElement("div");o.classList.add("container");const s=document.createElement("h2");s.classList.add("discount-title"),s.innerText="Discount products";const a=document.createElement("ul");a.classList.add("discount-list"),a.innerHTML=e,o.append(s),o.append(a),R.append(o)}const J="https://food-boutique.b.goit.study/api/products/popular",G=document.querySelector(".carts-popular");function K(t){if(!t)return console.error("Помилка"),null;const e=document.createElement("div");e.classList.add("product-preview");const o=document.createElement("button");return o.onclick=()=>{},o.className="product-preview__cart-btn",e.innerHTML=`
    <div class="product-preview__image-container">
      <img src="${t.img}" alt="${t.name}">
    </div>
    <div class="product-preview__info">
      <div class="product-preview__heading-wrapper">
        <h2 class="product-preview__heading">${t.name}</h2>
      </div>
      <div class="product-preview__description">
        <p class="product-preview__category"><span class="product-preview__sub-heading">Category:</span> ${t.category}</p>
        <p><span class="product-preview__sub-heading">Size: ${t.size}</span></p>
        <p><span class="product-preview__sub-heading">Popularity:</span> ${t.popularity}</p>
      </div>
    </div>
  `,e.children[1].children[0].appendChild(o),e.onclick=()=>{m(t._id)},e}async function Q(){try{return(await n.get(J)).data}catch(t){throw console.error("Помилка при отриманні даних: ",t),t}}document.addEventListener("DOMContentLoaded",async()=>{try{const t=await Q();console.log(t),t.sort((e,o)=>o.popularity-e.popularity).forEach(e=>{const o=K(e);o&&G.appendChild(o)})}catch(t){console.error("Помилка при отриманні даних: ",t)}});
//# sourceMappingURL=commonHelpers.js.map
