import"./assets/styles-2b5a6562.js";import{a,S as w}from"./assets/vendor-db58f109.js";const p=document.querySelector(".filters-select"),S=document.querySelector(".filtersInput"),$=document.querySelector(".filtersBtn");let i;const r={keyword:null,category:null,page:1,limit:9};localStorage.setItem("filterParams",JSON.stringify(r));async function b(){try{return(await a.get("https://food-boutique.b.goit.study/api/products/categories")).data}catch(t){throw console.log("Проблема при запросе на сервер"),new Error(t)}}async function m(t){const{keyword:e,category:o,page:s,limit:n}=t;try{let c;return e===null&&o===null?c=await a.get(`https://food-boutique.b.goit.study/api/products?page=${s}&limit=${n}`):e===null?c=await a.get(`https://food-boutique.b.goit.study/api/products?category=${o}&page=${s}&limit=${n}`):o===null?c=await a.get(`https://food-boutique.b.goit.study/api/products?keyword=${e}&page=${s}&limit=${n}`):c=await a.get(`https://food-boutique.b.goit.study/api/products?keyword=${e}&category=${o}&page=${s}&limit=${n}`),c.data.results}catch(c){throw console.log("Помилка на сервері при пошуку продуктів",c),new Error(c)}}async function q(){try{const e=(await b()).map(o=>`<option>${o}</option>`).join("")+"<option>Show all</option>";p.insertAdjacentHTML("beforeend",e),new w({select:".filters-select"})}catch(t){console.log("Проблема при обработке данных с сервера",t)}}q();p.addEventListener("change",_);$.addEventListener("click",E);async function _(t){r.category=t.currentTarget.value,r.category==="Show all"?r.category=null:localStorage.setItem("filterParams",JSON.stringify(r)),i=await m(r),console.log(i),SecondSelection(i)}async function E(){const t=S.value;t.trim()?r.keyword=t:r.keyword=null,localStorage.setItem("filterParams",JSON.stringify(r)),i=await m(r),console.log(i),SecondSelection(i)}const L="https://food-boutique.b.goit.study/api",k=document.querySelector("[data-modal-close]"),C=document.querySelector("[data-modal]");k.addEventListener("click",g);function g(){C.classList.toggle("is-hidden")}const P=document.querySelector("#modal-img"),I=document.querySelector("#modal-name"),x=document.querySelector("#modal-category"),B=document.querySelector("#modal-size"),M=document.querySelector("#modal-popularity"),D=document.querySelector("#modal-desc"),F=document.querySelector("#modal-price");async function y(t){let e;try{e=await a(L+"/products/"+t),console.log(e),P.src=e.data.img,I.textContent=e.data.name,x.textContent=e.data.category,B.textContent=e.data.size,M.textContent=e.data.popularity,D.textContent=e.data.desc,F.textContent="$"+e.data.price,g()}catch(o){console.log(o)}}const T=document.querySelector("[data-modal-close-shopping-cart]"),N=document.querySelector("[data-modal-shopping-cart]");T.addEventListener("click",f);function f(){N.classList.toggle("is-hidden")}const l=document.querySelector(".order-btn");l==null||l.addEventListener("click",()=>f());const O="https://food-boutique.b.goit.study/api",z="/products",j=document.querySelector(".products-container");let A=1;async function H(){try{const t=await R();t.results?j.innerHTML=U(t.results):console.error("No results found in the response data.")}catch(t){console.error("Error fetching products:",t)}}async function R(){const t=new URLSearchParams({page:A,limit:9}),e=await fetch(`${O}${z}?${t}`);if(!e.ok)throw new Error(e.status);return e.json()}function U(t){return t.map(({img:e,name:o,price:s,category:n,size:c,popularity:d})=>`
    <ul>
      <li class="product-card">
        <div class="carts-img-box">
          <img class="product-img" src="${e}" alt="${o}" />
        </div>
        <div class="product-info">
          <h3>${o}</h3>
          <div class="product-description">
            <p><span>Category:</span> ${n}</p>
            <p><span>Size:</span> ${c}</p>
            <p><span>Popularity:</span> ${d}</p>
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
  `).join("")}H();const J=document.querySelector(".products-container");J.addEventListener("click",G);function G(t){t.preventDefault(),y(response.data._id)}window.onscroll=function(){K()};function K(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("myBtn").style.display="block":document.getElementById("myBtn").style.display="none"}const Q=document.querySelector(".carts-discount");h();async function h(){const{data:t}=await a.get("https://food-boutique.b.goit.study/api/products/discount");return t.sort((o,s)=>s.popularity-o.popularity).slice(0,2)}V();async function V(){const e=(await h()).map(({img:c,is10PercentOff:d,price:v,name:u})=>`<li class="product-card"><img class="product-img" src="${c}" alt="${u}"/><div class="dis-card-description"><p class="dis-card-name">${u}</p><p class="dis-card-price">${v}</p><div class="carts-svg-box">
              <svg width="18" height="18">
                <use href="./img/sprite.svg#icon-white-basket"></use>
              </svg>
            </div></div></li>`).join(""),o=document.createElement("div");o.classList.add("container");const s=document.createElement("h2");s.classList.add("discount-title"),s.innerText="Discount products";const n=document.createElement("ul");n.classList.add("discount-list"),n.innerHTML=e,o.append(s),o.append(n),Q.append(o)}const W="https://food-boutique.b.goit.study/api/products/popular",X=document.querySelector(".carts-popular");function Y(t){if(!t)return console.error("Помилка"),null;const e=document.createElement("div");e.classList.add("product-preview");const o=document.createElement("button");return o.onclick=()=>{},o.className="product-preview__cart-btn",e.innerHTML=`
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
  `,e.children[1].children[0].appendChild(o),e.onclick=()=>{y(t._id)},e}async function Z(){try{return(await a.get(W)).data}catch(t){throw console.error("Помилка при отриманні даних: ",t),t}}document.addEventListener("DOMContentLoaded",async()=>{try{const t=await Z();console.log(t),t.sort((e,o)=>o.popularity-e.popularity).forEach(e=>{const o=Y(e);o&&X.appendChild(o)})}catch(t){console.error("Помилка при отриманні даних: ",t)}});
//# sourceMappingURL=commonHelpers.js.map
