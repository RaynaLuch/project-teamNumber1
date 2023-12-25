import"./assets/styles-d77e09a2.js";import{a as c,S as F,P as T}from"./assets/vendor-446832d1.js";const E=document.querySelector(".filters-select"),M=document.querySelector(".filtersInput"),N=document.querySelector(".filtersBtn");let i;const a={keyword:null,category:null,page:1,limit:9};localStorage.setItem("filterParams",JSON.stringify(a));async function O(){try{return(await c.get("https://food-boutique.b.goit.study/api/products/categories")).data}catch(t){throw console.log("Проблема при запросе на сервер"),new Error(t)}}async function L(t){const{keyword:e,category:o,page:n,limit:s}=t;try{let r;return e===null&&o===null?r=await c.get(`https://food-boutique.b.goit.study/api/products?page=${n}&limit=${s}`):e===null?r=await c.get(`https://food-boutique.b.goit.study/api/products?category=${o}&page=${n}&limit=${s}`):o===null?r=await c.get(`https://food-boutique.b.goit.study/api/products?keyword=${e}&page=${n}&limit=${s}`):r=await c.get(`https://food-boutique.b.goit.study/api/products?keyword=${e}&category=${o}&page=${n}&limit=${s}`),r.data.results}catch(r){throw console.log("Помилка на сервері при пошуку продуктів",r),new Error(r)}}async function x(){try{const e=(await O()).map(o=>`<option>${o}</option>`).join("")+"<option>Show all</option>";E.insertAdjacentHTML("beforeend",e),new F({select:".filters-select"})}catch(t){console.log("Проблема при обработке данных с сервера",t)}}x();E.addEventListener("change",z);N.addEventListener("click",A);async function z(t){a.category=t.currentTarget.value,a.category==="Show all"?a.category=null:localStorage.setItem("filterParams",JSON.stringify(a)),i=await L(a),console.log(i),SecondSelection(i)}async function A(){const t=M.value;t.trim()?a.keyword=t:a.keyword=null,localStorage.setItem("filterParams",JSON.stringify(a)),i=await L(a),console.log(i),SecondSelection(i)}const h="/project-teamNumber1/assets/sprite-0f0492a9.svg",S="shoppingCart";function D(t){const e=w();e.push(t),localStorage.setItem(S,JSON.stringify(e))}function J(t){return w().find(o=>o._id===t)}function w(){let t,e=localStorage.getItem(S);return e?t=JSON.parse(e):t=[],t}function j(t){let e=w();e=e.filter(o=>o._id!==t),localStorage.setItem(S,JSON.stringify(e))}const H="https://food-boutique.b.goit.study/api",R=document.querySelector("[data-modal-close]"),U=document.querySelector("[data-modal]");R.addEventListener("click",k);const g=document.querySelector(".modal-cart-button");function k(){U.classList.toggle("is-hidden")}const W=document.querySelector("#modal-img"),G=document.querySelector("#modal-name"),K=document.querySelector("#modal-category"),Q=document.querySelector("#modal-size"),V=document.querySelector("#modal-popularity"),X=document.querySelector("#modal-desc"),Y=document.querySelector("#modal-price");async function I(t){let e;try{e=await c(H+"/products/"+t),console.log(e),W.src=e.data.img,G.textContent=e.data.name,K.textContent=e.data.category,Q.textContent=e.data.size,V.textContent=e.data.popularity,X.textContent=e.data.desc,Y.textContent="$"+e.data.price,k(),J(e.data._id)?(g.textContent="Remove from",g.addEventListener("click",o=>{const n=e.data;j(n._id)})):(g.textContent="Add to",g.addEventListener("click",o=>{const n=e.data;D(n)}))}catch(o){console.log(o)}}const Z=document.querySelector("[data-modal-close-shopping-cart]"),tt=document.querySelector("[data-modal-shopping-cart]");Z.addEventListener("click",_);function _(){tt.classList.toggle("is-hidden")}const y=document.querySelector(".order-btn");y==null||y.addEventListener("click",()=>_());function et(t){const e=`<ul class="card-container-list">${t.map(o=>{const n=o.category.split("_").join(" ");return`
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
              <use href="${h}#icon-white-basket"></use>
            </svg>
          </button>
        </div> 
      </li>
  `}).join("")}</ul>`;return setTimeout(()=>{document.querySelectorAll(".cart-btn-list").forEach(o=>{o.addEventListener("click",n=>{const s=n.currentTarget.dataset.productId,r=t.find(l=>l._id===s);r?handleCartButtonClick(r,t):console.error("Product not found by ID:",s)})})},0),q(t),e}function q(t){document.querySelectorAll(".cart-btn-list").forEach(e=>{e.addEventListener("click",o=>{const n=o.currentTarget.dataset.productId;handleCartButtonClick(n,t)})})}function ot(){const t=nt();document.querySelectorAll(".cart-btn-list").forEach(e=>{const o=e.dataset.productId;t.find(s=>s._id===o)?e.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${h}#icon-check"></use>
        </svg>
      `:e.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${h}#icon-white-basket"></use>
        </svg>
      `})}function nt(){const t=localStorage.getItem("shoppingCart");return t?JSON.parse(t):[]}const st=document.querySelector(".products-container");st.addEventListener("click",rt);function rt(t){t.preventDefault(),t.target.nodeName==="LI"&&I(item._id)}window.onscroll=function(){at()};function at(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("myBtn").style.display="block":document.getElementById("myBtn").style.display="none"}const ct=document.getElementById("products-container");let d;function it(t,e){return c.get("https://food-boutique.b.goit.study/api/products",{params:{page:t,limit:e}})}function m(){const t=localStorage.getItem("productFilters");return t?JSON.parse(t):{keyword:null,category:null,page:1,limit:6}}function v(t,e){const o=m();o[t]=e,saveFilters(o)}window.addEventListener("resize",lt);function lt(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,m().limit!==t&&(v("limit",t),b())}async function b(){const t=m();let e=t.page||1,o=t.limit||6;try{const{data:n}=await it(e,o),{perPage:s,totalPages:r,results:l}=n,u=s*r;ct.innerHTML=et(l),q(l);const p=document.getElementById("tui-pagination-container");d?(d.reset(u),d.movePageTo(e)):(d=new T(p,{totalItems:u,itemsPerPage:o,visiblePages:4,centerAlign:!0,page:e}),d.on("beforeMove",B=>{const C=B.page,f=m(),$=f.limit||6;(C!==f.page||$!==f.limit)&&(v("page",C),v("limit",$),b())})),ot()}catch(n){console.error("Error fetching products",n)}}b();const dt=document.querySelector(".carts-discount");P();async function P(){const{data:t}=await c.get("https://food-boutique.b.goit.study/api/products/discount");return t.sort((o,n)=>n.popularity-o.popularity).slice(0,2)}ut();async function ut(){const e=(await P()).map(({img:r,is10PercentOff:l,price:u,name:p})=>`<li class="product-card"><img class="product-img" src="${r}" alt="${p}"/><div class="dis-card-description"><p class="dis-card-name">${p}</p><p class="dis-card-price">${u}</p><div class="carts-svg-box">
              <svg width="18" height="18">
                <use href="./img/sprite.svg#icon-white-basket"></use>
              </svg>
            </div></div></li>`).join(""),o=document.createElement("div");o.classList.add("container");const n=document.createElement("h2");n.classList.add("discount-title"),n.innerText="Discount products";const s=document.createElement("ul");s.classList.add("discount-list"),s.innerHTML=e,o.append(n),o.append(s),dt.append(o)}const pt="https://food-boutique.b.goit.study/api/products/popular",gt=document.querySelector(".carts-popular");function mt(t){if(!t)return console.error("Помилка"),null;const e=document.createElement("div");e.classList.add("product-preview");const o=document.createElement("button");return o.onclick=()=>{},o.className="product-preview__cart-btn",e.innerHTML=`
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
  `,e.children[1].children[0].appendChild(o),e.onclick=()=>{I(t._id)},e}async function ft(){try{return(await c.get(pt)).data}catch(t){throw console.error("Помилка при отриманні даних: ",t),t}}document.addEventListener("DOMContentLoaded",async()=>{try{const t=await ft();console.log(t),t.sort((e,o)=>o.popularity-e.popularity).forEach(e=>{const o=mt(e);o&&gt.appendChild(o)})}catch(t){console.error("Помилка при отриманні даних: ",t)}});
//# sourceMappingURL=commonHelpers.js.map
