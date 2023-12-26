import{s as B}from"./assets/header-16e8538e.js";import{a as f,P as W}from"./assets/vendor-b592f4c5.js";const a="/project-teamNumber1/assets/sprite-851c6254.svg";function A(t,e){const s=document.querySelector(".popular-product-list").querySelector(`[data-id="${t}"]`);if(!s||(e?s.classList.add("product-preview--in-cart"):s.classList.remove("product-preview--in-cart"),!s))return;s.children[1].children[0].children[1].children[0].children[0].setAttribute("href",`${a}#${e?"icon-check":"icon-cart"}`)}const w="basket";function N(t){const e=C();e.push(t),localStorage.setItem(w,JSON.stringify(e)),B(),A(t._id,!0)}function S(t){return C().find(o=>o._id===t)}function C(){let t,e=localStorage.getItem(w);return e?t=JSON.parse(e):t=[],t}function T(t){let e=C();e=e.filter(o=>o._id!==t),localStorage.setItem(w,JSON.stringify(e)),B(),A(t,!1)}const G="https://food-boutique.b.goit.study/api",I=document.querySelector("[data-modal-close]"),V=document.querySelector("[data-modal]"),r=document.querySelector(".modal-cart-button");function P(){V.classList.toggle("is-hidden")}const K=document.querySelector("#modal-img"),Q=document.querySelector("#modal-name"),X=document.querySelector("#modal-category"),Y=document.querySelector("#modal-size"),Z=document.querySelector("#modal-popularity"),tt=document.querySelector("#modal-desc"),et=document.querySelector("#modal-price");async function k(t){let e;try{let n=function(){r.removeEventListener("click",s),r.removeEventListener("click",o),I.removeEventListener("click",n),P()};e=await f(G+"/products/"+t),console.log(e),K.src=e.data.img,Q.textContent=e.data.name,X.textContent=e.data.category,Y.textContent=e.data.size,Z.textContent=e.data.popularity,tt.textContent=e.data.desc,et.textContent="$"+e.data.price,P();const o=c=>{const i=e.data;T(i._id),r.removeEventListener("click",o),r.firstChild.textContent="Add to",r.addEventListener("click",s)},s=c=>{const i=e.data;N(i),r.removeEventListener("click",s),r.firstChild.textContent="Remove from",r.addEventListener("click",o)};S(e.data._id)?(r.firstChild.textContent="Remove from",r.addEventListener("click",o)):(r.firstChild.textContent="Add to",r.addEventListener("click",s)),I.addEventListener("click",n)}catch(o){console.log(o)}}const ot=document.querySelector("[data-modal-close-shopping-cart]"),st=document.querySelector("[data-modal-shopping-cart]");ot.addEventListener("click",M);function M(){st.classList.toggle("is-hidden")}const L=document.querySelector(".order-btn");L==null||L.addEventListener("click",()=>M());function nt(t){const e=`<ul class="card-container-list">${t.map(o=>{const s=o.category.split("_").join(" ");return`
      <li class="photo-card-list">
        <a class="product-modal-list" href="#">
          <div class="img-container-list">
            <img class="product-image-list" src="${o.img}" alt="${o.name} photo" width=140 height=140 loading="lazy" />
          </div>

          <div class="product-info-list">
            <h3 class="product-name-list">${o.name}</h3>
            <div class="product-atributes-list">
              <p class="atributes-info-list">
                <span class="atributes-list">Category:</span> ${s}
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
              <use href="${a}#icon-white-basket"></use>
            </svg>
          </button>
        </div> 
      </li>
  `}).join("")}</ul>`;return setTimeout(()=>{document.querySelectorAll(".cart-btn-list").forEach(o=>{o.addEventListener("click",s=>{const n=s.currentTarget.dataset.productId,c=t.find(i=>i._id===n);c?handleCartButtonClick(c,t):console.error("Product not found by ID:",n)})})},0),x(t),e}function x(t){document.querySelectorAll(".cart-btn-list").forEach(e=>{e.addEventListener("click",o=>{const s=o.currentTarget.dataset.productId;handleCartButtonClick(s,t)})})}function it(){const t=rt();document.querySelectorAll(".cart-btn-list").forEach(e=>{const o=e.dataset.productId;t.find(n=>n._id===o)?e.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${a}#icon-check"></use>
        </svg>
      `:e.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${a}#icon-white-basket"></use>
        </svg>
      `})}function rt(){const t=localStorage.getItem("shoppingCart");return t?JSON.parse(t):[]}const ct=document.querySelector(".products-container");ct.addEventListener("click",at);function at(t){t.preventDefault(),t.target.nodeName==="LI"&&k(item._id)}window.onscroll=function(){lt()};function lt(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("myBtn").style.display="block":document.getElementById("myBtn").style.display="none"}const dt=document.getElementById("products-container");let g;function ut(t,e){return f.get("https://food-boutique.b.goit.study/api/products",{params:{page:t,limit:e}})}function y(){const t=localStorage.getItem("productFilters");return t?JSON.parse(t):{keyword:null,category:null,page:1,limit:6}}function pt(t){localStorage.setItem("productFilters",JSON.stringify(t))}function E(t,e){const o=y();o[t]=e,pt(o)}window.addEventListener("resize",mt);function mt(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,y().limit!==t&&(E("limit",t),q())}async function q(){const t=y();let e=t.page||1,o=t.limit||6;try{const{data:s}=await ut(e,o),{perPage:n,totalPages:c,results:i}=s,v=n*c;dt.innerHTML=nt(i),x(i);const b=document.getElementById("tui-pagination-container");g?(g.reset(v),g.movePageTo(e)):(g=new W(b,{totalItems:v,itemsPerPage:o,visiblePages:4,centerAlign:!0,page:e}),g.on("beforeMove",l=>{const p=l.page,m=y(),_=m.limit||6;(p!==m.page||_!==m.limit)&&(E("page",p),E("limit",_),q())})),it()}catch(s){console.error("Error fetching products",s)}}q();const gt=document.querySelector(".carts-discount");O();async function O(){const{data:t}=await f.get("https://food-boutique.b.goit.study/api/products/discount");return t.sort(()=>Math.random()-.5).slice(0,2)}ft();async function ft(){const e=(await O()).map(({img:i,is10PercentOff:v,price:b,name:l,_id:p})=>{const m=l.split("").slice(0,11).join("")+"...";return`<li data-id="${p}"class="dis-product-card"><img class="dis-product-img" src="${i}" alt="${l}"/><div class="dis-card-description"><p class="dis-card-name">${l.split("").length>11?m:l}</p><div class="price-btn-list">
        <p class="product-price-list">$${b}</p>
        <button class="cart-btn-list" type="button" data-product-id="${p}">
          <svg class="list-cart-svg-list" width="18" height="18">
            <use href="${a}#icon-white-basket"></use>
          </svg>
        </button>
      </div></div></div>${v?`<svg class="discount-icon"><use href="${a}#icon-discount"></use></svg>`:null}</li>`}).join(""),o=document.createElement("div");o.classList.add("dis-container");const s=document.createElement("h2");s.classList.add("discount-title"),s.innerText="Discount products";const n=document.createElement("ul");n.classList.add("discount-list"),n.innerHTML=e,o.append(s),o.append(n),document.createElement("svg"),n.querySelectorAll(".dis-product-card").forEach(i=>{i.addEventListener("click",()=>{k(i.dataset.id)})}),gt.append(o)}const h=JSON.parse(localStorage.getItem("userEmailsArray"))||[],z=document.querySelector(".footer-form"),H=document.querySelector(".wrong-email-footer"),D=document.querySelector(".footer-modal-w-success"),J=document.querySelector(".footer-modal-w-failure"),d=z.querySelector("input[type=email]"),vt=z.querySelector("button[type=submit]"),ht=document.querySelector(".footer-close-success-margin"),yt=document.querySelector(".footer-close-failure-margin"),bt=document.querySelector(".footer-close-email-margin"),u=document.querySelector(".modal-section"),Lt=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);vt.addEventListener("click",function(t){t.preventDefault();const e=d.value;if(!Lt(e)){d.value="",H.classList.add("visibility"),u.classList.add("modal-subscribing-footer");return}Et()});const St=()=>{const t=d.value;h.includes(t)?(d.value="",J.classList.add("visibility"),u.classList.add("modal-subscribing-footer")):(h.push(t),console.log("Users who have already subscribed:",h),localStorage.setItem("userEmailsArray",JSON.stringify(h)))},Et=async()=>{try{const t="https://food-boutique.b.goit.study/api/subscription";St();const e={email:`${d.value}`},o=await f.post(t,e);D.classList.add("visibility"),u.classList.add("modal-subscribing-footer"),d.value=""}catch(t){console.error("Error sending request:",t.message)}};yt.addEventListener("click",function(t){u.classList.remove("modal-subscribing-footer"),J.classList.remove("visibility")});bt.addEventListener("click",function(t){u.classList.remove("modal-subscribing-footer"),H.classList.remove("visibility")});ht.addEventListener("click",function(t){u.classList.remove("modal-subscribing-footer"),D.classList.remove("visibility")});const F=document.querySelector(".footer-modal-w-img"),wt=768;function j(){window.innerWidth<=wt?F.src="https://github.com/RaynaLuch/project-teamNumber1/blob/main/src/img/rectangle-mobile.png?raw=true":F.src="https://github.com/RaynaLuch/project-teamNumber1/blob/main/src/img/rectangle.png?raw=true"}j();window.addEventListener("resize",j);const Ct="https://food-boutique.b.goit.study/api/products/popular",R=document.querySelector(".carts-popular"),U=document.createElement("h2");U.textContent="Popular products";R.appendChild(U);const $=document.createElement("ul");$.classList.add("popular-product-list");R.appendChild($);function kt(t){if(!t)return console.error("Помилка"),null;const e=S(t._id),o=document.createElement("li");o.classList.add("product-preview"),o.setAttribute("data-id",t._id),e?o.classList.add("product-preview--in-cart"):o.classList.remove("product-preview--in-cart");const s=document.createElement("button");return s.onclick=n=>{n.stopPropagation(),S(t._id)?T(t._id):N(t)},s.className="product-preview__cart-btn",s.innerHTML=`
    <svg>
      <use href="${a}#${e?"icon-check":"icon-cart"}">
      </use>
    </svg>`,o.innerHTML=`
    <div class="product-preview__image-container">
      <img src="${t.img}" alt="${t.name}">
    </div>
    <div class="product-preview__info">
      <div class="product-preview__heading-wrapper">
        <h2 class="product-preview__heading">${t.name}</h2>
      </div>
      <div class="product-preview__description">
        <p class="product-preview__category"><span class="product-preview__sub-heading">Category:</span> ${t.category}</p>
        <p><span class="product-preview__sub-heading">Size:</span> ${t.size}</p>
        <p><span class="product-preview__sub-heading">Popularity:</span> ${t.popularity}</p>
      </div>
    </div>
  `,o.children[1].children[0].appendChild(s),o.onclick=()=>{k(t._id)},o}async function qt(){try{return(await f.get(Ct)).data}catch(t){throw console.error("Помилка при отриманні даних: ",t),t}}document.addEventListener("DOMContentLoaded",async()=>{try{const t=await qt();console.log(t),t.sort((e,o)=>o.popularity-e.popularity).forEach(e=>{const o=kt(e);o&&$.appendChild(o)})}catch(t){console.error("Помилка при отриманні даних: ",t)}});
//# sourceMappingURL=commonHelpers.js.map
