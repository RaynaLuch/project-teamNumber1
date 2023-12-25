import{s as L}from"./assets/header-1cc75927.js";import{a as p,P as q}from"./assets/vendor-b592f4c5.js";const f="/project-teamNumber1/assets/sprite-0f0492a9.svg",v="shoppingCart";function F(t){const e=y();e.push(t),localStorage.setItem(v,JSON.stringify(e)),L()}function B(t){return y().find(o=>o._id===t)}function y(){let t,e=localStorage.getItem(v);return e?t=JSON.parse(e):t=[],t}function x(t){let e=y();e=e.filter(o=>o._id!==t),localStorage.setItem(v,JSON.stringify(e)),L()}const M="https://food-boutique.b.goit.study/api",w=document.querySelector("[data-modal-close]"),T=document.querySelector("[data-modal]"),c=document.querySelector(".modal-cart-button");function E(){T.classList.toggle("is-hidden")}const N=document.querySelector("#modal-img"),z=document.querySelector("#modal-name"),O=document.querySelector("#modal-category"),A=document.querySelector("#modal-size"),H=document.querySelector("#modal-popularity"),D=document.querySelector("#modal-desc"),J=document.querySelector("#modal-price");async function _(t){let e;try{let s=function(){c.removeEventListener("click",n),c.removeEventListener("click",o),w.removeEventListener("click",s),E()};e=await p(M+"/products/"+t),console.log(e),N.src=e.data.img,z.textContent=e.data.name,O.textContent=e.data.category,A.textContent=e.data.size,H.textContent=e.data.popularity,D.textContent=e.data.desc,J.textContent="$"+e.data.price,E();const o=i=>{const r=e.data;x(r._id),c.removeEventListener("click",o),c.firstChild.textContent="Add to",c.addEventListener("click",n)},n=i=>{const r=e.data;F(r),c.removeEventListener("click",n),c.firstChild.textContent="Remove from",c.addEventListener("click",o)};B(e.data._id)?(c.firstChild.textContent="Remove from",c.addEventListener("click",o)):(c.firstChild.textContent="Add to",c.addEventListener("click",n)),w.addEventListener("click",s)}catch(o){console.log(o)}}const R=document.querySelector("[data-modal-close-shopping-cart]"),j=document.querySelector("[data-modal-shopping-cart]");R.addEventListener("click",k);function k(){j.classList.toggle("is-hidden")}const g=document.querySelector(".order-btn");g==null||g.addEventListener("click",()=>k());function U(t){const e=`<ul class="card-container-list">${t.map(o=>{const n=o.category.split("_").join(" ");return`
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
              <use href="${f}#icon-white-basket"></use>
            </svg>
          </button>
        </div> 
      </li>
  `}).join("")}</ul>`;return setTimeout(()=>{document.querySelectorAll(".cart-btn-list").forEach(o=>{o.addEventListener("click",n=>{const s=n.currentTarget.dataset.productId,i=t.find(r=>r._id===s);i?handleCartButtonClick(i,t):console.error("Product not found by ID:",s)})})},0),I(t),e}function I(t){document.querySelectorAll(".cart-btn-list").forEach(e=>{e.addEventListener("click",o=>{const n=o.currentTarget.dataset.productId;handleCartButtonClick(n,t)})})}function W(){const t=G();document.querySelectorAll(".cart-btn-list").forEach(e=>{const o=e.dataset.productId;t.find(s=>s._id===o)?e.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${f}#icon-check"></use>
        </svg>
      `:e.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${f}#icon-white-basket"></use>
        </svg>
      `})}function G(){const t=localStorage.getItem("shoppingCart");return t?JSON.parse(t):[]}const K=document.querySelector(".products-container");K.addEventListener("click",Q);function Q(t){t.preventDefault(),t.target.nodeName==="LI"&&_(item._id)}window.onscroll=function(){V()};function V(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("myBtn").style.display="block":document.getElementById("myBtn").style.display="none"}const X=document.getElementById("products-container");let a;function Y(t,e){return p.get("https://food-boutique.b.goit.study/api/products",{params:{page:t,limit:e}})}function u(){const t=localStorage.getItem("productFilters");return t?JSON.parse(t):{keyword:null,category:null,page:1,limit:6}}function Z(t){localStorage.setItem("productFilters",JSON.stringify(t))}function h(t,e){const o=u();o[t]=e,Z(o)}window.addEventListener("resize",tt);function tt(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,u().limit!==t&&(h("limit",t),C())}async function C(){const t=u();let e=t.page||1,o=t.limit||6;try{const{data:n}=await Y(e,o),{perPage:s,totalPages:i,results:r}=n,d=s*i;X.innerHTML=U(r),I(r);const l=document.getElementById("tui-pagination-container");a?(a.reset(d),a.movePageTo(e)):(a=new q(l,{totalItems:d,itemsPerPage:o,visiblePages:4,centerAlign:!0,page:e}),a.on("beforeMove",$=>{const S=$.page,m=u(),b=m.limit||6;(S!==m.page||b!==m.limit)&&(h("page",S),h("limit",b),C())})),W()}catch(n){console.error("Error fetching products",n)}}C();const et=document.querySelector(".carts-discount");P();async function P(){const{data:t}=await p.get("https://food-boutique.b.goit.study/api/products/discount");return t.sort((o,n)=>n.popularity-o.popularity).slice(0,2)}ot();async function ot(){const e=(await P()).map(({img:i,is10PercentOff:r,price:d,name:l})=>`<li class="product-card"><img class="product-img" src="${i}" alt="${l}"/><div class="dis-card-description"><p class="dis-card-name">${l}</p><p class="dis-card-price">${d}</p><div class="carts-svg-box">
              <svg width="18" height="18">
                <use href="./img/sprite.svg#icon-white-basket"></use>
              </svg>
            </div></div></li>`).join(""),o=document.createElement("div");o.classList.add("container");const n=document.createElement("h2");n.classList.add("discount-title"),n.innerText="Discount products";const s=document.createElement("ul");s.classList.add("discount-list"),s.innerHTML=e,o.append(n),o.append(s),et.append(o)}const nt="https://food-boutique.b.goit.study/api/products/popular",st=document.querySelector(".carts-popular");function ct(t){if(!t)return console.error("Помилка"),null;const e=document.createElement("div");e.classList.add("product-preview");const o=document.createElement("button");return o.onclick=()=>{},o.className="product-preview__cart-btn",e.innerHTML=`
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
  `,e.children[1].children[0].appendChild(o),e.onclick=()=>{_(t._id)},e}async function rt(){try{return(await p.get(nt)).data}catch(t){throw console.error("Помилка при отриманні даних: ",t),t}}document.addEventListener("DOMContentLoaded",async()=>{try{const t=await rt();console.log(t),t.sort((e,o)=>o.popularity-e.popularity).forEach(e=>{const o=ct(e);o&&st.appendChild(o)})}catch(t){console.error("Помилка при отриманні даних: ",t)}});
//# sourceMappingURL=commonHelpers.js.map
