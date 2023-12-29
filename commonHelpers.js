import{f as g,i as m,r as F,a as k,s as q}from"./assets/modal-2bdbc16b.js";import{a as u,S as J,P as x}from"./assets/vendor-cb0d5946.js";function G(t){return`<ul class="card-container-list">${t.map(e=>{const o=g(e._id),i=e.category.split("_").join(" ");return`
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
  `}).join("")}</ul>`}function V(t){document.querySelectorAll(".cart-btn-list").forEach(s=>{s.addEventListener("click",e=>{e.stopPropagation();const o=e.currentTarget.dataset.productId,i=t.find(n=>n._id===o);g(o)?(F(o),S(o)):(k(i),S(o))})})}function S(t){const s=document.querySelector(`[data-product-id='${t}']`);if(!s)return;g(t)?s.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${m}#icon-check"></use>
        </svg>
      `:s.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${m}#icon-white-basket"></use>
        </svg>
      `}function K(){document.querySelectorAll(".photo-card-list").forEach(s=>{s.addEventListener("click",e=>{e.preventDefault(),q(s.dataset.id)})})}const L=document.querySelector("#myBtn");function T(){document.body.scrollTop>20||document.documentElement.scrollTop>20?L.style.display="block":L.style.display="none",L.addEventListener("click",Q)}function Q(){window.scroll({top:0,left:0,behavior:"smooth"})}window.onscroll=T;window.onload=T;const B="productFilters",M=document.querySelector(".filters-select"),A=document.querySelector(".filtersInput"),X=document.querySelector(".filtersBtn");document.getElementById("products-container");function p(){const t=localStorage.getItem(B);return t?JSON.parse(t):{keyword:null,category:null,page:1,limit:6}}function I(t){localStorage.setItem(B,JSON.stringify(t))}async function Y(){try{return(await u.get("https://food-boutique.b.goit.study/api/products/categories")).data}catch(t){throw console.log("Проблема при запросе на сервер"),new Error(t)}}async function N(t){const{keyword:s,category:e,page:o,limit:i}=t;try{let r;return s===null&&e===null?r=await u.get(`https://food-boutique.b.goit.study/api/products?page=${o}&limit=${i}`):s===null?r=await u.get(`https://food-boutique.b.goit.study/api/products?category=${e}&page=${o}&limit=${i}`):e===null?r=await u.get(`https://food-boutique.b.goit.study/api/products?keyword=${s}&page=${o}&limit=${i}`):r=await u.get(`https://food-boutique.b.goit.study/api/products?keyword=${s}&category=${e}&page=${o}&limit=${i}`),r}catch(r){throw console.log("Помилка на сервері при пошуку продуктів",r),new Error(r)}}async function Z(){try{const s=(await Y()).map(i=>`<option>${i}</option>`).join("")+"<option>Show all</option>";M.insertAdjacentHTML("beforeend",s);const e=new J({select:".filters-select"}),o=p();A.value=o.keyword,e.setSelected(o.category)}catch(t){console.log("Проблема при обработке данных с сервера",t)}}Z();M.addEventListener("change",tt);X.addEventListener("click",et);async function tt(t){const s=t.currentTarget.value,e=p();s==="Show all"||s==="Categories"?e.category=null:e.category=s,I(e),await N(e),b()}async function et(){const t=A.value,s=p();t.trim()?s.keyword=t:s.keyword=null,I(s),b()}async function st(){const t=p();return await N(t)}const ot=document.getElementById("products-container");let v,j=window.innerWidth<768?2:4;function it(t,s){return st()}function E(t,s){const e=p();e[t]=s,I(e)}window.addEventListener("resize",rt);function rt(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,p().limit!==t&&(E("limit",t),j=window.innerWidth<768?2:4,b())}async function b(){const t=p();let s=t.page||1,e=t.limit||6;try{const{data:o}=await it(s,e),{perPage:i,totalPages:r,results:n}=o,c=i*r;ot.innerHTML=G(n),V(n),K();const a=document.getElementById("tui-pagination-container");r>1?(v?(v.reset(c),v.movePageTo(s)):(v=new x(a,{totalItems:c,itemsPerPage:e,visiblePages:j,centerAlign:!0,page:s}),v.on("beforeMove",l=>{const d=l.page,h=p(),w=h.limit||6;(d!==h.page||w!==h.limit)&&(E("page",d),E("limit",w),b())})),S()):a.innerHTML=""}catch(o){console.error("Error fetching products",o)}}b();const z=document.querySelector(".carts-discount");async function nt(){const{data:t}=await u.get("https://food-boutique.b.goit.study/api/products/discount");return t.sort(()=>Math.random()-.5).slice(0,2)}ct();async function ct(){const t=await nt(),s=t.map(({img:n,is10PercentOff:c,price:a,name:l,_id:d})=>{const h=g(d),w=l.split("").slice(0,11).join("")+"...";return`<li data-id="${d}"class="dis-product-card"><img class="dis-product-img" src="${n}" alt="${l}"/><div class="dis-card-description"><p class="dis-card-name">${l.split("").length>11?w:l}</p><div class="price-btn-list">
        <p class="product-price-list">$${a}</p>
        <button class="dis-btn-list" type="button" data-product-id="${d}">
          <svg class="list-cart-svg-list" width="18" height="18">
            <use href="${m}#${h?"icon-check":"icon-white-basket"}"></use>
          </svg></button>
      </div></div></div>${c?`<svg class="discount-icon"><use href="${m}#icon-discount"></use></svg>`:null}</li>`}).join(""),e=document.createElement("div");e.classList.add("dis-container");const o=document.createElement("h2");o.classList.add("discount-title"),o.innerText="Discount products";const i=document.createElement("ul");i.classList.add("discount-list"),i.innerHTML=s,e.append(o),e.append(i),i.querySelectorAll(".dis-product-card").forEach(n=>{n.addEventListener("click",c=>{const a=n.dataset.id;if(c.target.nodeName==="BUTTON"||c.target.nodeName==="use"||c.target.nodeName==="svg"){const l=t.find(d=>d._id===a);k(l),at(a,!0)}else q(a)})}),z.append(e)}function at(t,s){const e=z.querySelector(`[data-id="${t}"]`);if(!e)return;e.children[1].children[1].children[1].children[0].children[0].setAttribute("href",`${m}#${s?"icon-check":"icon-white-basket"}`)}const $=JSON.parse(localStorage.getItem("userEmailsArray"))||[];document.querySelector("body");const H=document.querySelector(".footer-form"),O=document.querySelector(".wrong-email-footer"),D=document.querySelector(".footer-modal-w-success"),W=document.querySelector(".footer-modal-w-failure"),f=H.querySelector("input[type=email]"),lt=H.querySelector("button[type=submit]"),dt=document.querySelector(".footer-close-success-margin"),ut=document.querySelector(".footer-close-failure-margin"),pt=document.querySelector(".footer-close-email-margin"),y=document.querySelector(".modal-section"),mt=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);lt.addEventListener("click",function(t){t.preventDefault(),document.body.classList.add("modal-open");const s=f.value;if(!mt(s)){f.value="",O.classList.add("visibility"),y.classList.add("modal-subscribing-footer");return}ft()});const gt=()=>{const t=f.value;$.includes(t)?(f.value="",W.classList.add("visibility"),y.classList.add("modal-subscribing-footer")):($.push(t),localStorage.setItem("userEmailsArray",JSON.stringify($)))},ft=async()=>{try{const t="https://food-boutique.b.goit.study/api/subscription";gt();const s={email:`${f.value}`},e=await u.post(t,s);D.classList.add("visibility"),y.classList.add("modal-subscribing-footer"),f.value=""}catch(t){console.error("Error sending request:",t.message)}};ut.addEventListener("click",function(t){y.classList.remove("modal-subscribing-footer"),W.classList.remove("visibility"),document.body.classList.remove("modal-open")});pt.addEventListener("click",function(t){y.classList.remove("modal-subscribing-footer"),O.classList.remove("visibility"),document.body.classList.remove("modal-open")});dt.addEventListener("click",function(t){y.classList.remove("modal-subscribing-footer"),D.classList.remove("visibility"),document.body.classList.remove("modal-open")});const C=document.querySelector(".footer-modal-w-img"),yt=768;function R(){window.innerWidth<=yt?C.src="https://github.com/RaynaLuch/project-teamNumber1/blob/main/src/img/rectangle-mobile.png?raw=true":C.src="https://github.com/RaynaLuch/project-teamNumber1/blob/main/src/img/rectangle.png?raw=true"}R();window.addEventListener("resize",R);const ht="https://food-boutique.b.goit.study/api/products/popular",U=document.querySelector(".carts-popular"),_=document.createElement("h2");_.classList.add("popular-product-title");_.textContent="Popular products";U.appendChild(_);const P=document.createElement("ul");P.classList.add("popular-product-list");U.appendChild(P);function vt(t){if(!t)return console.error("Помилка"),null;const s=g(t._id),e=document.createElement("li");e.classList.add("product-preview"),e.setAttribute("data-id",t._id),s?e.classList.add("product-preview--in-cart"):e.classList.remove("product-preview--in-cart");const o=document.createElement("button");return o.onclick=i=>{i.stopPropagation(),g(t._id)?F(t._id):k(t)},o.className="product-preview__cart-btn",o.innerHTML=`
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
  `,e.children[1].children[0].appendChild(o),e.onclick=()=>{q(t._id)},e}async function bt(){try{return(await u.get(ht)).data}catch(t){throw console.error("Помилка при отриманні даних: ",t),t}}document.addEventListener("DOMContentLoaded",async()=>{try{(await bt()).sort((s,e)=>e.popularity-s.popularity).forEach(s=>{const e=vt(s);e&&P.appendChild(e)})}catch(t){console.error("Помилка при отриманні даних: ",t)}});
//# sourceMappingURL=commonHelpers.js.map
