import{i as m,f as b,r as T,a as k,s as q}from"./assets/modal-4f3b9666.js";import{a as d,S as x,P as G}from"./assets/vendor-cb0d5946.js";function V(t){return`<ul class="card-container-list">${t.map(e=>{const o=e.category.split("_").join(" ");return`
      <li class="photo-card-list" data-id="${e._id}">
        <a class="product-modal-list" href="#">
          <div class="img-container-list">
            <img class="product-image-list" src="${e.img}" alt="${e.name} photo" width=140 height=140 loading="lazy" />
          </div>

          <div class="product-info-list">
            <h3 class="product-name-list">${e.name}</h3>
            <div class="product-atributes-list">
              <p class="atributes-info-list">
                <span class="atributes-list">Category:</span> ${o}
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
              <use href="${m}#icon-white-basket"></use>
            </svg>
          </button>
        </div> 
      </li>
  `}).join("")}</ul>`}function K(t){document.querySelectorAll(".cart-btn-list").forEach(s=>{s.addEventListener("click",e=>{e.stopPropagation();const o=e.currentTarget.dataset.productId,i=t.find(n=>n._id===o);b(o)?(T(o),$(o)):(k(i),$(o))})})}function $(t){const s=document.querySelector(`[data-product-id='${t}']`);if(!s)return;b(t)?s.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${m}#icon-check"></use>
        </svg>
      `:s.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${m}#icon-white-basket"></use>
        </svg>
      `}function Q(){document.querySelectorAll(".photo-card-list").forEach(s=>{s.addEventListener("click",e=>{e.preventDefault(),q(s.dataset.id)})})}const w=document.querySelector("#myBtn");function B(){document.body.scrollTop>20||document.documentElement.scrollTop>20?w.style.display="block":w.style.display="none",w.addEventListener("click",X)}function X(){window.scroll({top:0,left:0,behavior:"smooth"})}window.onscroll=B;window.onload=B;const M="productFilters",A=document.querySelector(".filters-select"),N=document.querySelector(".filtersInput"),Y=document.querySelector(".filtersBtn");let E;document.getElementById("products-container");function u(){const t=localStorage.getItem(M);return t?JSON.parse(t):{keyword:null,category:null,page:1,limit:6}}function _(t){localStorage.setItem(M,JSON.stringify(t))}async function Z(){try{return(await d.get("https://food-boutique.b.goit.study/api/products/categories")).data}catch(t){throw console.log("Проблема при запросе на сервер"),new Error(t)}}async function j(t){const{keyword:s,category:e,page:o,limit:i}=t;try{let r;return s===null&&e===null?r=await d.get(`https://food-boutique.b.goit.study/api/products?page=${o}&limit=${i}`):s===null?r=await d.get(`https://food-boutique.b.goit.study/api/products?category=${e}&page=${o}&limit=${i}`):e===null?r=await d.get(`https://food-boutique.b.goit.study/api/products?keyword=${s}&page=${o}&limit=${i}`):r=await d.get(`https://food-boutique.b.goit.study/api/products?keyword=${s}&category=${e}&page=${o}&limit=${i}`),r}catch(r){throw console.log("Помилка на сервері при пошуку продуктів",r),new Error(r)}}async function tt(){try{const s=(await Z()).map(i=>`<option>${i}</option>`).join("")+"<option>Show all</option>";A.insertAdjacentHTML("beforeend",s);const e=new x({select:".filters-select"}),o=u();N.value=o.keyword,e.setSelected(o.category)}catch(t){console.log("Проблема при обработке данных с сервера",t)}}tt();A.addEventListener("change",et);Y.addEventListener("click",st);async function et(t){const s=t.currentTarget.value,e=u();s==="Show all"||s==="Categories"?e.category=null:e.category=s,_(e),E=await j(e),v(),console.log(E.data.results)}async function st(){const t=N.value,s=u();t.trim()?s.keyword=t:s.keyword=null,_(s),v(),console.log(E.data.results)}async function ot(){const t=u();return console.log("filters",t),await j(t)}const it=document.getElementById("products-container");let y,z=window.innerWidth<768?2:4;function rt(t,s){return ot()}function S(t,s){const e=u();e[t]=s,_(e)}window.addEventListener("resize",nt);function nt(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,u().limit!==t&&(S("limit",t),z=window.innerWidth<768?2:4,v())}async function v(){const t=u();let s=t.page||1,e=t.limit||6;try{const{data:o}=await rt(s,e),{perPage:i,totalPages:r,results:n}=o,c=i*r;it.innerHTML=V(n),K(n),Q();const a=document.getElementById("tui-pagination-container");r>1?(y?(y.reset(c),y.movePageTo(s)):(y=new G(a,{totalItems:c,itemsPerPage:e,visiblePages:z,centerAlign:!0,page:s}),y.on("beforeMove",l=>{const p=l.page,h=u(),C=h.limit||6;(p!==h.page||C!==h.limit)&&(S("page",p),S("limit",C),v())})),$()):a.innerHTML=""}catch(o){console.error("Error fetching products",o)}}v();const H=document.querySelector(".carts-discount");async function ct(){const{data:t}=await d.get("https://food-boutique.b.goit.study/api/products/discount");return t.sort(()=>Math.random()-.5).slice(0,2)}at();async function at(){const t=await ct(),s=t.map(({img:n,is10PercentOff:c,price:a,name:l,_id:p})=>{const h=l.split("").slice(0,11).join("")+"...";return`<li data-id="${p}"class="dis-product-card"><img class="dis-product-img" src="${n}" alt="${l}"/><div class="dis-card-description"><p class="dis-card-name">${l.split("").length>11?h:l}</p><div class="price-btn-list">
        <p class="product-price-list">$${a}</p>
        <button class="cart-btn-list" type="button" data-product-id="${p}">
          <svg class="list-cart-svg-list" width="18" height="18">
            <use href="${m}#icon-white-basket"></use>
          </svg></button>
      </div></div></div>${c?`<svg class="discount-icon"><use href="${m}#icon-discount"></use></svg>`:null}</li>`}).join(""),e=document.createElement("div");e.classList.add("dis-container");const o=document.createElement("h2");o.classList.add("discount-title"),o.innerText="Discount products";const i=document.createElement("ul");i.classList.add("discount-list"),i.innerHTML=s,e.append(o),e.append(i),i.querySelectorAll(".dis-product-card").forEach(n=>{n.addEventListener("click",c=>{const a=n.dataset.id;if(c.target.nodeName==="BUTTON"||c.target.nodeName==="use"||c.target.nodeName==="svg"){const l=t.find(p=>p._id===a);k(l),lt(a,!0)}else q(a)})}),H.append(e)}function lt(t,s){const e=H.querySelector(`[data-id="${t}"]`);if(!e)return;e.children[1].children[1].children[1].children[0].children[0].setAttribute("href",`${m}#${s?"icon-check":"icon-white-basket"}`)}const L=JSON.parse(localStorage.getItem("userEmailsArray"))||[],O=document.querySelector(".footer-form"),D=document.querySelector(".wrong-email-footer"),W=document.querySelector(".footer-modal-w-success"),R=document.querySelector(".footer-modal-w-failure"),g=O.querySelector("input[type=email]"),dt=O.querySelector("button[type=submit]"),ut=document.querySelector(".footer-close-success-margin"),pt=document.querySelector(".footer-close-failure-margin"),mt=document.querySelector(".footer-close-email-margin"),f=document.querySelector(".modal-section"),gt=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);dt.addEventListener("click",function(t){t.preventDefault();const s=g.value;if(!gt(s)){g.value="",D.classList.add("visibility"),f.classList.add("modal-subscribing-footer");return}ht()});const ft=()=>{const t=g.value;L.includes(t)?(g.value="",R.classList.add("visibility"),f.classList.add("modal-subscribing-footer")):(L.push(t),localStorage.setItem("userEmailsArray",JSON.stringify(L)))},ht=async()=>{try{const t="https://food-boutique.b.goit.study/api/subscription";ft();const s={email:`${g.value}`},e=await d.post(t,s);W.classList.add("visibility"),f.classList.add("modal-subscribing-footer"),g.value=""}catch(t){console.error("Error sending request:",t.message)}};pt.addEventListener("click",function(t){f.classList.remove("modal-subscribing-footer"),R.classList.remove("visibility")});mt.addEventListener("click",function(t){f.classList.remove("modal-subscribing-footer"),D.classList.remove("visibility")});ut.addEventListener("click",function(t){f.classList.remove("modal-subscribing-footer"),W.classList.remove("visibility")});const F=document.querySelector(".footer-modal-w-img"),yt=768;function U(){window.innerWidth<=yt?F.src="https://github.com/RaynaLuch/project-teamNumber1/blob/main/src/img/rectangle-mobile.png?raw=true":F.src="https://github.com/RaynaLuch/project-teamNumber1/blob/main/src/img/rectangle.png?raw=true"}U();window.addEventListener("resize",U);const vt="https://food-boutique.b.goit.study/api/products/popular",J=document.querySelector(".carts-popular"),I=document.createElement("h2");I.classList.add("popular-product-title");I.textContent="Popular products";J.appendChild(I);const P=document.createElement("ul");P.classList.add("popular-product-list");J.appendChild(P);function bt(t){if(!t)return console.error("Помилка"),null;const s=b(t._id),e=document.createElement("li");e.classList.add("product-preview"),e.setAttribute("data-id",t._id),s?e.classList.add("product-preview--in-cart"):e.classList.remove("product-preview--in-cart");const o=document.createElement("button");return o.onclick=i=>{i.stopPropagation(),b(t._id)?T(t._id):k(t)},o.className="product-preview__cart-btn",o.innerHTML=`
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
  `,e.children[1].children[0].appendChild(o),e.onclick=()=>{q(t._id)},e}async function wt(){try{return(await d.get(vt)).data}catch(t){throw console.error("Помилка при отриманні даних: ",t),t}}document.addEventListener("DOMContentLoaded",async()=>{try{const t=await wt();console.log(t),t.sort((s,e)=>e.popularity-s.popularity).forEach(s=>{const e=bt(s);e&&P.appendChild(e)})}catch(t){console.error("Помилка при отриманні даних: ",t)}});
//# sourceMappingURL=commonHelpers.js.map
