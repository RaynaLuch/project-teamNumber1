import"./assets/styles-d77e09a2.js";import{a as i,S as B,P as T}from"./assets/vendor-446832d1.js";const L=document.querySelector(".filters-select"),M=document.querySelector(".filtersInput"),N=document.querySelector(".filtersBtn");let l;const c={keyword:null,category:null,page:1,limit:9};localStorage.setItem("filterParams",JSON.stringify(c));async function O(){try{return(await i.get("https://food-boutique.b.goit.study/api/products/categories")).data}catch(t){throw console.log("Проблема при запросе на сервер"),new Error(t)}}async function k(t){const{keyword:e,category:o,page:n,limit:r}=t;try{let s;return e===null&&o===null?s=await i.get(`https://food-boutique.b.goit.study/api/products?page=${n}&limit=${r}`):e===null?s=await i.get(`https://food-boutique.b.goit.study/api/products?category=${o}&page=${n}&limit=${r}`):o===null?s=await i.get(`https://food-boutique.b.goit.study/api/products?keyword=${e}&page=${n}&limit=${r}`):s=await i.get(`https://food-boutique.b.goit.study/api/products?keyword=${e}&category=${o}&page=${n}&limit=${r}`),s.data.results}catch(s){throw console.log("Помилка на сервері при пошуку продуктів",s),new Error(s)}}async function x(){try{const e=(await O()).map(o=>`<option>${o}</option>`).join("")+"<option>Show all</option>";L.insertAdjacentHTML("beforeend",e),new B({select:".filters-select"})}catch(t){console.log("Проблема при обработке данных с сервера",t)}}x();L.addEventListener("change",z);N.addEventListener("click",A);async function z(t){c.category=t.currentTarget.value,c.category==="Show all"?c.category=null:localStorage.setItem("filterParams",JSON.stringify(c)),l=await k(c),console.log(l),SecondSelection(l)}async function A(){const t=M.value;t.trim()?c.keyword=t:c.keyword=null,localStorage.setItem("filterParams",JSON.stringify(c)),l=await k(c),console.log(l),SecondSelection(l)}const v="/project-teamNumber1/assets/sprite-0f0492a9.svg",w="shoppingCart";function J(t){const e=b();e.push(t),localStorage.setItem(w,JSON.stringify(e))}function D(t){return b().find(o=>o._id===t)}function b(){let t,e=localStorage.getItem(w);return e?t=JSON.parse(e):t=[],t}function H(t){let e=b();e=e.filter(o=>o._id!==t),localStorage.setItem(w,JSON.stringify(e))}const j="https://food-boutique.b.goit.study/api",R=document.querySelector("[data-modal-close]"),U=document.querySelector("[data-modal]");R.addEventListener("click",m);const a=document.querySelector(".modal-cart-button");function m(){U.classList.toggle("is-hidden")}const W=document.querySelector("#modal-img"),G=document.querySelector("#modal-name"),K=document.querySelector("#modal-category"),Q=document.querySelector("#modal-size"),V=document.querySelector("#modal-popularity"),X=document.querySelector("#modal-desc"),Y=document.querySelector("#modal-price");async function I(t){let e;try{e=await i(j+"/products/"+t),console.log(e),W.src=e.data.img,G.textContent=e.data.name,K.textContent=e.data.category,Q.textContent=e.data.size,V.textContent=e.data.popularity,X.textContent=e.data.desc,Y.textContent="$"+e.data.price,m();const o=r=>{const s=e.data;H(s._id),a.removeEventListener("click",o),m()},n=r=>{const s=e.data;J(s),a.removeEventListener("click",n),m()};D(e.data._id)?(a.firstChild.textContent="Remove from",a.addEventListener("click",o)):(a.firstChild.textContent="Add to",a.addEventListener("click",n))}catch(o){console.log(o)}}const Z=document.querySelector("[data-modal-close-shopping-cart]"),tt=document.querySelector("[data-modal-shopping-cart]");Z.addEventListener("click",P);function P(){tt.classList.toggle("is-hidden")}const h=document.querySelector(".order-btn");h==null||h.addEventListener("click",()=>P());function et(t){const e=`<ul class="card-container-list">${t.map(o=>{const n=o.category.split("_").join(" ");return`
      <li class="photo-card-list">
        <a class="product-modal-list" href="#">
          <div class="img-container-list">
            <img class="product-image-list" src="${o.img}" alt="${o.name} photo" width=140 height=140 loading="lazy" />
          </div>

          <div class="product-info-list">
            <h3 class="product-name-list">${o.name}</h3>
            <div class="product-atributes-list">
              <p class="atributes-info-list">
                <span class="atributes-list">Category:</span> ${n}
              </p>
              <p class="atributes-info-list">
                <span class="atributes-list">Size:</span> ${o.size}
              </p>
              <p class="atributes-info-list">
                <span class="atributes-list">Popularity:</span> ${o.popularity}
              </p>
            </div>
          </div>
        </a>
        <div class="price-and-btn-list">
          <p class="product-price-list">$${o.price}</p>
          <button class="cart-btn-list" type="button" data-product-id="${o._id}">
            <svg class="list-cart-svg-list" width="18" height="18">
              <use href="${v}#icon-white-basket"></use>
            </svg>
          </button>
        </div> 
      </li>
  `}).join("")}</ul>`;return setTimeout(()=>{document.querySelectorAll(".cart-btn-list").forEach(o=>{o.addEventListener("click",n=>{const r=n.currentTarget.dataset.productId,s=t.find(d=>d._id===r);s?handleCartButtonClick(s,t):console.error("Product not found by ID:",r)})})},0),_(t),e}function _(t){document.querySelectorAll(".cart-btn-list").forEach(e=>{e.addEventListener("click",o=>{const n=o.currentTarget.dataset.productId;handleCartButtonClick(n,t)})})}function ot(){const t=nt();document.querySelectorAll(".cart-btn-list").forEach(e=>{const o=e.dataset.productId;t.find(r=>r._id===o)?e.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${v}#icon-check"></use>
        </svg>
      `:e.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${v}#icon-white-basket"></use>
        </svg>
      `})}function nt(){const t=localStorage.getItem("shoppingCart");return t?JSON.parse(t):[]}const st=document.querySelector(".products-container");st.addEventListener("click",rt);function rt(t){t.preventDefault(),t.target.nodeName==="LI"&&I(item._id)}window.onscroll=function(){ct()};function ct(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("myBtn").style.display="block":document.getElementById("myBtn").style.display="none"}const it=document.getElementById("products-container");let u;function at(t,e){return i.get("https://food-boutique.b.goit.study/api/products",{params:{page:t,limit:e}})}function f(){const t=localStorage.getItem("productFilters");return t?JSON.parse(t):{keyword:null,category:null,page:1,limit:6}}function lt(t){localStorage.setItem("productFilters",JSON.stringify(t))}function S(t,e){const o=f();o[t]=e,lt(o)}window.addEventListener("resize",dt);function dt(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,f().limit!==t&&(S("limit",t),C())}async function C(){const t=f();let e=t.page||1,o=t.limit||6;try{const{data:n}=await at(e,o),{perPage:r,totalPages:s,results:d}=n,p=r*s;it.innerHTML=et(d),_(d);const g=document.getElementById("tui-pagination-container");u?(u.reset(p),u.movePageTo(e)):(u=new T(g,{totalItems:p,itemsPerPage:o,visiblePages:4,centerAlign:!0,page:e}),u.on("beforeMove",F=>{const $=F.page,y=f(),E=y.limit||6;($!==y.page||E!==y.limit)&&(S("page",$),S("limit",E),C())})),ot()}catch(n){console.error("Error fetching products",n)}}C();const ut=document.querySelector(".carts-discount");q();async function q(){const{data:t}=await i.get("https://food-boutique.b.goit.study/api/products/discount");return t.sort((o,n)=>n.popularity-o.popularity).slice(0,2)}pt();async function pt(){const e=(await q()).map(({img:s,is10PercentOff:d,price:p,name:g})=>`<li class="product-card"><img class="product-img" src="${s}" alt="${g}"/><div class="dis-card-description"><p class="dis-card-name">${g}</p><p class="dis-card-price">${p}</p><div class="carts-svg-box">
              <svg width="18" height="18">
                <use href="./img/sprite.svg#icon-white-basket"></use>
              </svg>
            </div></div></li>`).join(""),o=document.createElement("div");o.classList.add("container");const n=document.createElement("h2");n.classList.add("discount-title"),n.innerText="Discount products";const r=document.createElement("ul");r.classList.add("discount-list"),r.innerHTML=e,o.append(n),o.append(r),ut.append(o)}const gt="https://food-boutique.b.goit.study/api/products/popular",mt=document.querySelector(".carts-popular");function ft(t){if(!t)return console.error("Помилка"),null;const e=document.createElement("div");e.classList.add("product-preview");const o=document.createElement("button");return o.onclick=()=>{},o.className="product-preview__cart-btn",e.innerHTML=`
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
  `,e.children[1].children[0].appendChild(o),e.onclick=()=>{I(t._id)},e}async function yt(){try{return(await i.get(gt)).data}catch(t){throw console.error("Помилка при отриманні даних: ",t),t}}document.addEventListener("DOMContentLoaded",async()=>{try{const t=await yt();console.log(t),t.sort((e,o)=>o.popularity-e.popularity).forEach(e=>{const o=ft(e);o&&mt.appendChild(o)})}catch(t){console.error("Помилка при отриманні даних: ",t)}});
//# sourceMappingURL=commonHelpers.js.map
