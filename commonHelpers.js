import"./assets/styles-af69a64f.js";import{a,S as h}from"./assets/vendor-db58f109.js";const u=document.querySelector(".filters-select"),v=document.querySelector(".filtersInput"),w=document.querySelector(".filtersBtn");let i;const n={keyword:null,category:null,page:1,limit:9};localStorage.setItem("filterParams",JSON.stringify(n));async function S(){try{return(await a.get("https://food-boutique.b.goit.study/api/products/categories")).data}catch(t){throw console.log("Проблема при запросе на сервер"),new Error(t)}}async function p(t){const{keyword:e,category:o,page:s,limit:r}=t;try{let c;return e===null&&o===null?c=await a.get(`https://food-boutique.b.goit.study/api/products?page=${s}&limit=${r}`):e===null?c=await a.get(`https://food-boutique.b.goit.study/api/products?category=${o}&page=${s}&limit=${r}`):o===null?c=await a.get(`https://food-boutique.b.goit.study/api/products?keyword=${e}&page=${s}&limit=${r}`):c=await a.get(`https://food-boutique.b.goit.study/api/products?keyword=${e}&category=${o}&page=${s}&limit=${r}`),c.data.results}catch(c){throw console.log("Помилка на сервері при пошуку продуктів",c),new Error(c)}}async function $(){try{const e=(await S()).map(o=>`<option>${o}</option>`).join("")+"<option>Show all</option>";u.insertAdjacentHTML("beforeend",e),new h({select:".filters-select"})}catch(t){console.log("Проблема при обработке данных с сервера",t)}}$();u.addEventListener("change",b);w.addEventListener("click",q);async function b(t){n.category=t.currentTarget.value,n.category==="Show all"?n.category=null:localStorage.setItem("filterParams",JSON.stringify(n)),i=await p(n),console.log(i),SecondSelection(i)}async function q(){const t=v.value;t.trim()?n.keyword=t:n.keyword=null,localStorage.setItem("filterParams",JSON.stringify(n)),i=await p(n),console.log(i),SecondSelection(i)}const _="https://food-boutique.b.goit.study/api",E=document.querySelector("[data-modal-close]"),k=document.querySelector("[data-modal]");E.addEventListener("click",m);function m(){k.classList.toggle("is-hidden")}const L=document.querySelector("#modal-img"),C=document.querySelector("#modal-name"),P=document.querySelector("#modal-category"),I=document.querySelector("#modal-size"),x=document.querySelector("#modal-popularity"),B=document.querySelector("#modal-desc"),M=document.querySelector("#modal-price");async function g(t){let e;try{e=await a(_+"/products/"+t),console.log(e),L.src=e.data.img,C.textContent=e.data.name,P.textContent=e.data.category,I.textContent=e.data.size,x.textContent=e.data.popularity,B.textContent=e.data.desc,M.textContent="$"+e.data.price,m()}catch(o){console.log(o)}}const D="https://food-boutique.b.goit.study/api",F="/products",T=document.querySelector(".products-container");let N=1;async function O(){try{const t=await z();t.results?T.innerHTML=j(t.results):console.error("No results found in the response data.")}catch(t){console.error("Error fetching products:",t)}}async function z(){const t=new URLSearchParams({page:N,limit:9}),e=await fetch(`${D}${F}?${t}`);if(!e.ok)throw new Error(e.status);return e.json()}function j(t){return t.map(({img:e,name:o,price:s,category:r,size:c,popularity:l})=>`
    <ul>
      <li class="product-card">
        <div class="carts-img-box">
          <img class="product-img" src="${e}" alt="${o}" />
        </div>
        <div class="product-info">
          <h3>${o}</h3>
          <div class="product-description">
            <p><span>Category:</span> ${r}</p>
            <p><span>Size:</span> ${c}</p>
            <p><span>Popularity:</span> ${l}</p>
          </div>
          <div class="product-forsale">
            <p class="product-price">$${s}</p>
            <button class="carts-svg-box" type="button">
              <svg width="18" height="18">
                <use href="./img/sprite.svg#icon-white-basket"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>
    </ul>
  `).join("")}O();const A=document.querySelector(".products-container");A.addEventListener("click",H);function H(t){t.preventDefault(),g(response.data._id)}window.onscroll=function(){R()};function R(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("myBtn").style.display="block":document.getElementById("myBtn").style.display="none"}const U=document.querySelector(".carts-discount");y();async function y(){const{data:t}=await a.get("https://food-boutique.b.goit.study/api/products/discount");return t.sort((o,s)=>s.popularity-o.popularity).slice(0,2)}J();async function J(){const e=(await y()).map(({img:c,is10PercentOff:l,price:f,name:d})=>`<li class="product-card"><img class="product-img" src="${c}" alt="${d}"/><div class="dis-card-description"><p class="dis-card-name">${d}</p><p class="dis-card-price">${f}</p><div class="carts-svg-box">
              <svg width="18" height="18">
                <use href="./img/sprite.svg#icon-white-basket"></use>
              </svg>
            </div></div></li>`).join(""),o=document.createElement("div");o.classList.add("container");const s=document.createElement("h2");s.classList.add("discount-title"),s.innerText="Discount products";const r=document.createElement("ul");r.classList.add("discount-list"),r.innerHTML=e,o.append(s),o.append(r),U.append(o)}const G="https://food-boutique.b.goit.study/api/products/popular",K=document.querySelector(".carts-popular");function Q(t){if(!t)return console.error("Помилка"),null;const e=document.createElement("div");e.classList.add("product-preview");const o=document.createElement("button");return o.onclick=()=>{},o.className="product-preview__cart-btn",e.innerHTML=`
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
  `,e.children[1].children[0].appendChild(o),e.onclick=()=>{g(t._id)},e}async function V(){try{return(await a.get(G)).data}catch(t){throw console.error("Помилка при отриманні даних: ",t),t}}document.addEventListener("DOMContentLoaded",async()=>{try{const t=await V();console.log(t),t.sort((e,o)=>o.popularity-e.popularity).forEach(e=>{const o=Q(e);o&&K.appendChild(o)})}catch(t){console.error("Помилка при отриманні даних: ",t)}});
//# sourceMappingURL=commonHelpers.js.map
