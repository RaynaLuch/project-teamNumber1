import"./assets/header-52d4e248.js";import{a as l,S as M,P as T}from"./assets/vendor-446832d1.js";const $=document.querySelector(".filters-select"),x=document.querySelector(".filtersInput"),N=document.querySelector(".filtersBtn");let d;const c={keyword:null,category:null,page:1,limit:9};localStorage.setItem("filterParams",JSON.stringify(c));async function O(){try{return(await l.get("https://food-boutique.b.goit.study/api/products/categories")).data}catch(t){throw console.log("Проблема при запросе на сервер"),new Error(t)}}async function I(t){const{keyword:e,category:o,page:n,limit:s}=t;try{let r;return e===null&&o===null?r=await l.get(`https://food-boutique.b.goit.study/api/products?page=${n}&limit=${s}`):e===null?r=await l.get(`https://food-boutique.b.goit.study/api/products?category=${o}&page=${n}&limit=${s}`):o===null?r=await l.get(`https://food-boutique.b.goit.study/api/products?keyword=${e}&page=${n}&limit=${s}`):r=await l.get(`https://food-boutique.b.goit.study/api/products?keyword=${e}&category=${o}&page=${n}&limit=${s}`),r.data.results}catch(r){throw console.log("Помилка на сервері при пошуку продуктів",r),new Error(r)}}async function z(){try{const e=(await O()).map(o=>`<option>${o}</option>`).join("")+"<option>Show all</option>";$.insertAdjacentHTML("beforeend",e),new M({select:".filters-select"})}catch(t){console.log("Проблема при обработке данных с сервера",t)}}z();$.addEventListener("change",A);N.addEventListener("click",H);async function A(t){c.category=t.currentTarget.value,c.category==="Show all"?c.category=null:localStorage.setItem("filterParams",JSON.stringify(c)),d=await I(c),console.log(d),SecondSelection(d)}async function H(){const t=x.value;t.trim()?c.keyword=t:c.keyword=null,localStorage.setItem("filterParams",JSON.stringify(c)),d=await I(c),console.log(d),SecondSelection(d)}const h="/project-teamNumber1/assets/sprite-0f0492a9.svg",S="shoppingCart";function J(t){const e=w();e.push(t),localStorage.setItem(S,JSON.stringify(e))}function D(t){return w().find(o=>o._id===t)}function w(){let t,e=localStorage.getItem(S);return e?t=JSON.parse(e):t=[],t}function j(t){let e=w();e=e.filter(o=>o._id!==t),localStorage.setItem(S,JSON.stringify(e))}const R="https://food-boutique.b.goit.study/api",L=document.querySelector("[data-modal-close]"),U=document.querySelector("[data-modal]"),i=document.querySelector(".modal-cart-button");function k(){U.classList.toggle("is-hidden")}const W=document.querySelector("#modal-img"),G=document.querySelector("#modal-name"),K=document.querySelector("#modal-category"),Q=document.querySelector("#modal-size"),V=document.querySelector("#modal-popularity"),X=document.querySelector("#modal-desc"),Y=document.querySelector("#modal-price");async function P(t){let e;try{let s=function(){i.removeEventListener("click",n),i.removeEventListener("click",o),L.removeEventListener("click",s),k()};e=await l(R+"/products/"+t),console.log(e),W.src=e.data.img,G.textContent=e.data.name,K.textContent=e.data.category,Q.textContent=e.data.size,V.textContent=e.data.popularity,X.textContent=e.data.desc,Y.textContent="$"+e.data.price,k();const o=r=>{const a=e.data;j(a._id),i.removeEventListener("click",o),i.firstChild.textContent="Add to",i.addEventListener("click",n)},n=r=>{const a=e.data;J(a),i.removeEventListener("click",n),i.firstChild.textContent="Remove from",i.addEventListener("click",o)};D(e.data._id)?(i.firstChild.textContent="Remove from",i.addEventListener("click",o)):(i.firstChild.textContent="Add to",i.addEventListener("click",n)),L.addEventListener("click",s)}catch(o){console.log(o)}}const Z=document.querySelector("[data-modal-close-shopping-cart]"),tt=document.querySelector("[data-modal-shopping-cart]");Z.addEventListener("click",_);function _(){tt.classList.toggle("is-hidden")}const y=document.querySelector(".order-btn");y==null||y.addEventListener("click",()=>_());function et(t){const e=`<ul class="card-container-list">${t.map(o=>{const n=o.category.split("_").join(" ");return`
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
  `}).join("")}</ul>`;return setTimeout(()=>{document.querySelectorAll(".cart-btn-list").forEach(o=>{o.addEventListener("click",n=>{const s=n.currentTarget.dataset.productId,r=t.find(a=>a._id===s);r?handleCartButtonClick(r,t):console.error("Product not found by ID:",s)})})},0),q(t),e}function q(t){document.querySelectorAll(".cart-btn-list").forEach(e=>{e.addEventListener("click",o=>{const n=o.currentTarget.dataset.productId;handleCartButtonClick(n,t)})})}function ot(){const t=nt();document.querySelectorAll(".cart-btn-list").forEach(e=>{const o=e.dataset.productId;t.find(s=>s._id===o)?e.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${h}#icon-check"></use>
        </svg>
      `:e.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${h}#icon-white-basket"></use>
        </svg>
      `})}function nt(){const t=localStorage.getItem("shoppingCart");return t?JSON.parse(t):[]}const st=document.querySelector(".products-container");st.addEventListener("click",rt);function rt(t){t.preventDefault(),t.target.nodeName==="LI"&&P(item._id)}window.onscroll=function(){it()};function it(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("myBtn").style.display="block":document.getElementById("myBtn").style.display="none"}const ct=document.getElementById("products-container");let u;function at(t,e){return l.get("https://food-boutique.b.goit.study/api/products",{params:{page:t,limit:e}})}function m(){const t=localStorage.getItem("productFilters");return t?JSON.parse(t):{keyword:null,category:null,page:1,limit:6}}function lt(t){localStorage.setItem("productFilters",JSON.stringify(t))}function v(t,e){const o=m();o[t]=e,lt(o)}window.addEventListener("resize",dt);function dt(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,m().limit!==t&&(v("limit",t),b())}async function b(){const t=m();let e=t.page||1,o=t.limit||6;try{const{data:n}=await at(e,o),{perPage:s,totalPages:r,results:a}=n,p=s*r;ct.innerHTML=et(a),q(a);const g=document.getElementById("tui-pagination-container");u?(u.reset(p),u.movePageTo(e)):(u=new T(g,{totalItems:p,itemsPerPage:o,visiblePages:4,centerAlign:!0,page:e}),u.on("beforeMove",B=>{const C=B.page,f=m(),E=f.limit||6;(C!==f.page||E!==f.limit)&&(v("page",C),v("limit",E),b())})),ot()}catch(n){console.error("Error fetching products",n)}}b();const ut=document.querySelector(".carts-discount");F();async function F(){const{data:t}=await l.get("https://food-boutique.b.goit.study/api/products/discount");return t.sort((o,n)=>n.popularity-o.popularity).slice(0,2)}pt();async function pt(){const e=(await F()).map(({img:r,is10PercentOff:a,price:p,name:g})=>`<li class="product-card"><img class="product-img" src="${r}" alt="${g}"/><div class="dis-card-description"><p class="dis-card-name">${g}</p><p class="dis-card-price">${p}</p><div class="carts-svg-box">
              <svg width="18" height="18">
                <use href="./img/sprite.svg#icon-white-basket"></use>
              </svg>
            </div></div></li>`).join(""),o=document.createElement("div");o.classList.add("container");const n=document.createElement("h2");n.classList.add("discount-title"),n.innerText="Discount products";const s=document.createElement("ul");s.classList.add("discount-list"),s.innerHTML=e,o.append(n),o.append(s),ut.append(o)}const gt="https://food-boutique.b.goit.study/api/products/popular",mt=document.querySelector(".carts-popular");function ft(t){if(!t)return console.error("Помилка"),null;const e=document.createElement("div");e.classList.add("product-preview");const o=document.createElement("button");return o.onclick=()=>{},o.className="product-preview__cart-btn",e.innerHTML=`
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
  `,e.children[1].children[0].appendChild(o),e.onclick=()=>{P(t._id)},e}async function yt(){try{return(await l.get(gt)).data}catch(t){throw console.error("Помилка при отриманні даних: ",t),t}}document.addEventListener("DOMContentLoaded",async()=>{try{const t=await yt();console.log(t),t.sort((e,o)=>o.popularity-e.popularity).forEach(e=>{const o=ft(e);o&&mt.appendChild(o)})}catch(t){console.error("Помилка при отриманні даних: ",t)}});
//# sourceMappingURL=commonHelpers.js.map
