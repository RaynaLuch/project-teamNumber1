import{f as g,i as m,r as T,a as q,s as I}from"./assets/modal-2180bbbb.js";import{a as u,S as x,P as G}from"./assets/vendor-cb0d5946.js";function V(t){return`<ul class="card-container-list">${t.map(e=>{const o=g(e._id),i=e.category.split("_").join(" ");return`
      <li class="photo-card-list" data-id="${e._id}">
        <a class="product-modal-list" href="#">
          <div class="img-container-list">
            <img class="product-image-list" src="${e.img}" alt="${e.name} photo" width=140 height=140 loading="lazy" />
          </div>

          <div class="product-info-list">
            <h3 class="product-name-list">${e.name}</h3>
            <div class="product-atributes-list">
              <p class="atributes-info-list">
                <span class="atributes-list">Category:</span> ${i}
              </p>
              <p class="atributes-info-list">
                <span class="atributes-list">Size:</span> ${e.size}
              </p>
              <p class="atributes-info-list">
                <span class="atributes-list">Popularity:</span> ${e.popularity}
              </p>
            </div>
          </div>
        </a>
        <div class="price-and-btn-list">
          <p class="product-price-list">$${e.price}</p>
          <button class="cart-btn-list" type="button" data-product-id="${e._id}">
            <svg class="list-cart-svg-list" width="18" height="18">
              <use href="${m}#${o?"icon-check":"icon-white-basket"}"></use>
            </svg>
          </button>
        </div> 
      </li>
  `}).join("")}</ul>`}function K(t){document.querySelectorAll(".cart-btn-list").forEach(s=>{s.addEventListener("click",e=>{e.stopPropagation();const o=e.currentTarget.dataset.productId,i=t.find(r=>r._id===o);g(o)?(T(o),S(o)):(q(i),S(o))})})}function S(t){const s=document.querySelector(`[data-product-id='${t}']`);if(!s)return;g(t)?s.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${m}#icon-check"></use>
        </svg>
      `:s.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${m}#icon-white-basket"></use>
        </svg>
      `}function Q(){document.querySelectorAll(".photo-card-list").forEach(s=>{s.addEventListener("click",e=>{e.preventDefault(),I(s.dataset.id)})})}const L=document.querySelector("#myBtn");function B(){document.body.scrollTop>20||document.documentElement.scrollTop>20?L.style.display="block":L.style.display="none",L.addEventListener("click",X)}function X(){window.scroll({top:0,left:0,behavior:"smooth"})}window.onscroll=B;window.onload=B;const M="productFilters",A=document.querySelector(".filters-select"),N=document.querySelector(".filtersInput"),Y=document.querySelector(".filtersBtn");let E;document.getElementById("products-container");function p(){const t=localStorage.getItem(M);return t?JSON.parse(t):{keyword:null,category:null,page:1,limit:6}}function _(t){localStorage.setItem(M,JSON.stringify(t))}async function Z(){try{return(await u.get("https://food-boutique.b.goit.study/api/products/categories")).data}catch(t){throw console.log("Проблема при запросе на сервер"),new Error(t)}}async function j(t){const{keyword:s,category:e,page:o,limit:i}=t;try{let n;return s===null&&e===null?n=await u.get(`https://food-boutique.b.goit.study/api/products?page=${o}&limit=${i}`):s===null?n=await u.get(`https://food-boutique.b.goit.study/api/products?category=${e}&page=${o}&limit=${i}`):e===null?n=await u.get(`https://food-boutique.b.goit.study/api/products?keyword=${s}&page=${o}&limit=${i}`):n=await u.get(`https://food-boutique.b.goit.study/api/products?keyword=${s}&category=${e}&page=${o}&limit=${i}`),n}catch(n){throw console.log("Помилка на сервері при пошуку продуктів",n),new Error(n)}}async function tt(){try{const s=(await Z()).map(i=>`<option>${i}</option>`).join("")+"<option>Show all</option>";A.insertAdjacentHTML("beforeend",s);const e=new x({select:".filters-select"}),o=p();N.value=o.keyword,e.setSelected(o.category)}catch(t){console.log("Проблема при обработке данных с сервера",t)}}tt();A.addEventListener("change",et);Y.addEventListener("click",st);async function et(t){const s=t.currentTarget.value,e=p();s==="Show all"||s==="Categories"?e.category=null:e.category=s,_(e),E=await j(e),b(),console.log(E.data.results)}async function st(){const t=N.value,s=p();t.trim()?s.keyword=t:s.keyword=null,_(s),b(),console.log(E.data.results)}async function ot(){const t=p();return console.log("filters",t),await j(t)}const it=document.getElementById("products-container");let v,z=window.innerWidth<768?2:4;function nt(t,s){return ot()}function k(t,s){const e=p();e[t]=s,_(e)}window.addEventListener("resize",rt);function rt(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,p().limit!==t&&(k("limit",t),z=window.innerWidth<768?2:4,b())}async function b(){const t=p();let s=t.page||1,e=t.limit||6;try{const{data:o}=await nt(s,e),{perPage:i,totalPages:n,results:r}=o,c=i*n;it.innerHTML=V(r),K(r),Q();const a=document.getElementById("tui-pagination-container");n>1?(v?(v.reset(c),v.movePageTo(s)):(v=new G(a,{totalItems:c,itemsPerPage:e,visiblePages:z,centerAlign:!0,page:s}),v.on("beforeMove",l=>{const d=l.page,h=p(),w=h.limit||6;(d!==h.page||w!==h.limit)&&(k("page",d),k("limit",w),b())})),S()):a.innerHTML=""}catch(o){console.error("Error fetching products",o)}}b();const H=document.querySelector(".carts-discount");async function ct(){const{data:t}=await u.get("https://food-boutique.b.goit.study/api/products/discount");return t.sort(()=>Math.random()-.5).slice(0,2)}at();async function at(){const t=await ct(),s=t.map(({img:r,is10PercentOff:c,price:a,name:l,_id:d})=>{const h=g(d),w=l.split("").slice(0,11).join("")+"...";return`<li data-id="${d}"class="dis-product-card"><img class="dis-product-img" src="${r}" alt="${l}"/><div class="dis-card-description"><p class="dis-card-name">${l.split("").length>11?w:l}</p><div class="price-btn-list">
        <p class="product-price-list">$${a}</p>
        <button class="dis-btn-list" type="button" data-product-id="${d}">
          <svg class="list-cart-svg-list" width="18" height="18">
            <use href="${m}#${h?"icon-check":"icon-white-basket"}"></use>
          </svg></button>
      </div></div></div>${c?`<svg class="discount-icon"><use href="${m}#icon-discount"></use></svg>`:null}</li>`}).join(""),e=document.createElement("div");e.classList.add("dis-container");const o=document.createElement("h2");o.classList.add("discount-title"),o.innerText="Discount products";const i=document.createElement("ul");i.classList.add("discount-list"),i.innerHTML=s,e.append(o),e.append(i),i.querySelectorAll(".dis-product-card").forEach(r=>{r.addEventListener("click",c=>{const a=r.dataset.id;if(c.target.nodeName==="BUTTON"||c.target.nodeName==="use"||c.target.nodeName==="svg"){const l=t.find(d=>d._id===a);q(l),lt(a,!0)}else I(a)})}),H.append(e)}function lt(t,s){const e=H.querySelector(`[data-id="${t}"]`);if(!e)return;e.children[1].children[1].children[1].children[0].children[0].setAttribute("href",`${m}#${s?"icon-check":"icon-white-basket"}`)}const $=JSON.parse(localStorage.getItem("userEmailsArray"))||[];document.querySelector("body");const O=document.querySelector(".footer-form"),D=document.querySelector(".wrong-email-footer"),W=document.querySelector(".footer-modal-w-success"),R=document.querySelector(".footer-modal-w-failure"),f=O.querySelector("input[type=email]"),dt=O.querySelector("button[type=submit]"),ut=document.querySelector(".footer-close-success-margin"),pt=document.querySelector(".footer-close-failure-margin"),mt=document.querySelector(".footer-close-email-margin"),y=document.querySelector(".modal-section"),gt=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);dt.addEventListener("click",function(t){t.preventDefault(),document.body.classList.add("modal-open");const s=f.value;if(!gt(s)){f.value="",D.classList.add("visibility"),y.classList.add("modal-subscribing-footer");return}yt()});const ft=()=>{const t=f.value;$.includes(t)?(f.value="",R.classList.add("visibility"),y.classList.add("modal-subscribing-footer")):($.push(t),localStorage.setItem("userEmailsArray",JSON.stringify($)))},yt=async()=>{try{const t="https://food-boutique.b.goit.study/api/subscription";ft();const s={email:`${f.value}`},e=await u.post(t,s);W.classList.add("visibility"),y.classList.add("modal-subscribing-footer"),f.value=""}catch(t){console.error("Error sending request:",t.message)}};pt.addEventListener("click",function(t){y.classList.remove("modal-subscribing-footer"),R.classList.remove("visibility"),document.body.classList.remove("modal-open")});mt.addEventListener("click",function(t){y.classList.remove("modal-subscribing-footer"),D.classList.remove("visibility"),document.body.classList.remove("modal-open")});ut.addEventListener("click",function(t){y.classList.remove("modal-subscribing-footer"),W.classList.remove("visibility"),document.body.classList.remove("modal-open")});const F=document.querySelector(".footer-modal-w-img"),ht=768;function U(){window.innerWidth<=ht?F.src="https://github.com/RaynaLuch/project-teamNumber1/blob/main/src/img/rectangle-mobile.png?raw=true":F.src="https://github.com/RaynaLuch/project-teamNumber1/blob/main/src/img/rectangle.png?raw=true"}U();window.addEventListener("resize",U);const vt="https://food-boutique.b.goit.study/api/products/popular",J=document.querySelector(".carts-popular"),P=document.createElement("h2");P.classList.add("popular-product-title");P.textContent="Popular products";J.appendChild(P);const C=document.createElement("ul");C.classList.add("popular-product-list");J.appendChild(C);function bt(t){if(!t)return console.error("Помилка"),null;const s=g(t._id),e=document.createElement("li");e.classList.add("product-preview"),e.setAttribute("data-id",t._id),s?e.classList.add("product-preview--in-cart"):e.classList.remove("product-preview--in-cart");const o=document.createElement("button");return o.onclick=i=>{i.stopPropagation(),g(t._id)?T(t._id):q(t)},o.className="product-preview__cart-btn",o.innerHTML=`
    <svg>
      <use href="${m}#${s?"icon-check":"icon-cart"}">
      </use>
    </svg>`,e.innerHTML=`
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
  `,e.children[1].children[0].appendChild(o),e.onclick=()=>{I(t._id)},e}async function wt(){try{return(await u.get(vt)).data}catch(t){throw console.error("Помилка при отриманні даних: ",t),t}}document.addEventListener("DOMContentLoaded",async()=>{try{const t=await wt();console.log(t),t.sort((s,e)=>e.popularity-s.popularity).forEach(s=>{const e=bt(s);e&&C.appendChild(e)})}catch(t){console.error("Помилка при отриманні даних: ",t)}});
//# sourceMappingURL=commonHelpers.js.map
