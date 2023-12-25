import"./assets/header-52d4e248.js";import{a as p,P as $}from"./assets/vendor-b592f4c5.js";const h="/project-teamNumber1/assets/sprite-0f0492a9.svg",v="shoppingCart";function q(t){const e=y();e.push(t),localStorage.setItem(v,JSON.stringify(e))}function F(t){return y().find(o=>o._id===t)}function y(){let t,e=localStorage.getItem(v);return e?t=JSON.parse(e):t=[],t}function B(t){let e=y();e=e.filter(o=>o._id!==t),localStorage.setItem(v,JSON.stringify(e))}const x="https://food-boutique.b.goit.study/api",w=document.querySelector("[data-modal-close]"),M=document.querySelector("[data-modal]"),c=document.querySelector(".modal-cart-button");function E(){M.classList.toggle("is-hidden")}const T=document.querySelector("#modal-img"),z=document.querySelector("#modal-name"),N=document.querySelector("#modal-category"),O=document.querySelector("#modal-size"),A=document.querySelector("#modal-popularity"),H=document.querySelector("#modal-desc"),D=document.querySelector("#modal-price");async function L(t){let e;try{let s=function(){c.removeEventListener("click",n),c.removeEventListener("click",o),w.removeEventListener("click",s),E()};e=await p(x+"/products/"+t),console.log(e),T.src=e.data.img,z.textContent=e.data.name,N.textContent=e.data.category,O.textContent=e.data.size,A.textContent=e.data.popularity,H.textContent=e.data.desc,D.textContent="$"+e.data.price,E();const o=i=>{const r=e.data;B(r._id),c.removeEventListener("click",o),c.firstChild.textContent="Add to",c.addEventListener("click",n)},n=i=>{const r=e.data;q(r),c.removeEventListener("click",n),c.firstChild.textContent="Remove from",c.addEventListener("click",o)};F(e.data._id)?(c.firstChild.textContent="Remove from",c.addEventListener("click",o)):(c.firstChild.textContent="Add to",c.addEventListener("click",n)),w.addEventListener("click",s)}catch(o){console.log(o)}}const J=document.querySelector("[data-modal-close-shopping-cart]"),R=document.querySelector("[data-modal-shopping-cart]");J.addEventListener("click",_);function _(){R.classList.toggle("is-hidden")}const g=document.querySelector(".order-btn");g==null||g.addEventListener("click",()=>_());function j(t){const e=`<ul class="card-container-list">${t.map(o=>{const n=o.category.split("_").join(" ");return`
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
  `}).join("")}</ul>`;return setTimeout(()=>{document.querySelectorAll(".cart-btn-list").forEach(o=>{o.addEventListener("click",n=>{const s=n.currentTarget.dataset.productId,i=t.find(r=>r._id===s);i?handleCartButtonClick(i,t):console.error("Product not found by ID:",s)})})},0),k(t),e}function k(t){document.querySelectorAll(".cart-btn-list").forEach(e=>{e.addEventListener("click",o=>{const n=o.currentTarget.dataset.productId;handleCartButtonClick(n,t)})})}function U(){const t=W();document.querySelectorAll(".cart-btn-list").forEach(e=>{const o=e.dataset.productId;t.find(s=>s._id===o)?e.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${h}#icon-check"></use>
        </svg>
      `:e.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${h}#icon-white-basket"></use>
        </svg>
      `})}function W(){const t=localStorage.getItem("shoppingCart");return t?JSON.parse(t):[]}const G=document.querySelector(".products-container");G.addEventListener("click",K);function K(t){t.preventDefault(),t.target.nodeName==="LI"&&L(item._id)}window.onscroll=function(){Q()};function Q(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("myBtn").style.display="block":document.getElementById("myBtn").style.display="none"}const V=document.getElementById("products-container");let a;function X(t,e){return p.get("https://food-boutique.b.goit.study/api/products",{params:{page:t,limit:e}})}function u(){const t=localStorage.getItem("productFilters");return t?JSON.parse(t):{keyword:null,category:null,page:1,limit:6}}function Y(t){localStorage.setItem("productFilters",JSON.stringify(t))}function f(t,e){const o=u();o[t]=e,Y(o)}window.addEventListener("resize",Z);function Z(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,u().limit!==t&&(f("limit",t),C())}async function C(){const t=u();let e=t.page||1,o=t.limit||6;try{const{data:n}=await X(e,o),{perPage:s,totalPages:i,results:r}=n,d=s*i;V.innerHTML=j(r),k(r);const l=document.getElementById("tui-pagination-container");a?(a.reset(d),a.movePageTo(e)):(a=new $(l,{totalItems:d,itemsPerPage:o,visiblePages:4,centerAlign:!0,page:e}),a.on("beforeMove",P=>{const S=P.page,m=u(),b=m.limit||6;(S!==m.page||b!==m.limit)&&(f("page",S),f("limit",b),C())})),U()}catch(n){console.error("Error fetching products",n)}}C();const tt=document.querySelector(".carts-discount");I();async function I(){const{data:t}=await p.get("https://food-boutique.b.goit.study/api/products/discount");return t.sort((o,n)=>n.popularity-o.popularity).slice(0,2)}et();async function et(){const e=(await I()).map(({img:i,is10PercentOff:r,price:d,name:l})=>`<li class="product-card"><img class="product-img" src="${i}" alt="${l}"/><div class="dis-card-description"><p class="dis-card-name">${l}</p><p class="dis-card-price">${d}</p><div class="carts-svg-box">
              <svg width="18" height="18">
                <use href="./img/sprite.svg#icon-white-basket"></use>
              </svg>
            </div></div></li>`).join(""),o=document.createElement("div");o.classList.add("container");const n=document.createElement("h2");n.classList.add("discount-title"),n.innerText="Discount products";const s=document.createElement("ul");s.classList.add("discount-list"),s.innerHTML=e,o.append(n),o.append(s),tt.append(o)}const ot="https://food-boutique.b.goit.study/api/products/popular",nt=document.querySelector(".carts-popular");function st(t){if(!t)return console.error("Помилка"),null;const e=document.createElement("div");e.classList.add("product-preview");const o=document.createElement("button");return o.onclick=()=>{},o.className="product-preview__cart-btn",e.innerHTML=`
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
  `,e.children[1].children[0].appendChild(o),e.onclick=()=>{L(t._id)},e}async function ct(){try{return(await p.get(ot)).data}catch(t){throw console.error("Помилка при отриманні даних: ",t),t}}document.addEventListener("DOMContentLoaded",async()=>{try{const t=await ct();console.log(t),t.sort((e,o)=>o.popularity-e.popularity).forEach(e=>{const o=st(e);o&&nt.appendChild(o)})}catch(t){console.error("Помилка при отриманні даних: ",t)}});
//# sourceMappingURL=commonHelpers.js.map
