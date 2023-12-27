import{r as T,a as M,f as E,i as u}from"./assets/manage-cart-9a051454.js";import{a as l,P as V,S as G}from"./assets/vendor-cb0d5946.js";const K="https://food-boutique.b.goit.study/api",_=document.querySelector("[data-modal-close]"),Q=document.querySelector("[data-modal]"),c=document.querySelector(".modal-cart-button");function F(){Q.classList.toggle("is-hidden")}const X=document.querySelector("#modal-img"),Y=document.querySelector("#modal-name"),Z=document.querySelector("#modal-category"),tt=document.querySelector("#modal-size"),et=document.querySelector("#modal-popularity"),ot=document.querySelector("#modal-desc"),st=document.querySelector("#modal-price");async function C(t){let o;try{let r=function(){c.removeEventListener("click",s),c.removeEventListener("click",e),_.removeEventListener("click",r),F()};o=await l(K+"/products/"+t),console.log(o),X.src=o.data.img,Y.textContent=o.data.name,Z.textContent=o.data.category,tt.textContent=o.data.size,et.textContent=o.data.popularity,ot.textContent=o.data.desc,st.textContent="$"+o.data.price,F();const e=i=>{const n=o.data;T(n._id),c.removeEventListener("click",e),c.firstChild.textContent="Add to",c.addEventListener("click",s)},s=i=>{const n=o.data;M(n),c.removeEventListener("click",s),c.firstChild.textContent="Remove from",c.addEventListener("click",e)};E(o.data._id)?(c.firstChild.textContent="Remove from",c.addEventListener("click",e)):(c.firstChild.textContent="Add to",c.addEventListener("click",s)),_.addEventListener("click",r)}catch(e){console.log(e)}}const rt=document.querySelector("[data-modal-close-shopping-cart]"),it=document.querySelector("[data-modal-shopping-cart]");rt.addEventListener("click",A);function A(){it.classList.toggle("is-hidden")}const L=document.querySelector(".order-btn");L==null||L.addEventListener("click",()=>A());function nt(t){const o=`<ul class="card-container-list">${t.map(e=>{const s=e.category.split("_").join(" ");return`
      <li class="photo-card-list" data-id="${e._id}">
        <a class="product-modal-list" href="#">
          <div class="img-container-list">
            <img class="product-image-list" src="${e.img}" alt="${e.name} photo" width=140 height=140 loading="lazy" />
          </div>

          <div class="product-info-list">
            <h3 class="product-name-list">${e.name}</h3>
            <div class="product-atributes-list">
              <p class="atributes-info-list">
                <span class="atributes-list">Category:</span> ${s}
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
              <use href="${u}#icon-white-basket"></use>
            </svg>
          </button>
        </div> 
      </li>
  `}).join("")}</ul>`;return setTimeout(()=>{document.querySelectorAll(".cart-btn-list").forEach(e=>{e.addEventListener("click",s=>{const r=s.currentTarget.dataset.productId,i=t.find(n=>n._id===r);i?handleCartButtonClick(i,t):console.error("Product not found by ID:",r)})})},0),N(t),o}function N(t){document.querySelectorAll(".cart-btn-list").forEach(o=>{o.addEventListener("click",e=>{const s=e.currentTarget.dataset.productId;handleCartButtonClick(s,t)})})}function ct(){const t=at();document.querySelectorAll(".cart-btn-list").forEach(e=>{const s=e.dataset.productId;t.find(i=>i._id===s)?e.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${u}#icon-check"></use>
        </svg>
      `:e.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${u}#icon-white-basket"></use>
        </svg>
      `}),document.querySelectorAll(".photo-card-list").forEach(e=>{e.addEventListener("click",s=>{console.log(s.target),console.log(s.currentTarget),s.target.nodeName,C(e.dataset.id)})})}function at(){const t=localStorage.getItem("shoppingCart");return t?JSON.parse(t):[]}const lt=document.getElementById("products-container");let v,x=window.innerWidth<768?2:4;function dt(t,o){return l.get("https://food-boutique.b.goit.study/api/products",{params:{page:t,limit:o}})}function b(){const t=localStorage.getItem("productFilters");return t?JSON.parse(t):{keyword:null,category:null,page:1,limit:6}}function ut(t){localStorage.setItem("productFilters",JSON.stringify(t))}function $(t,o){const e=b();e[t]=o,ut(e)}window.addEventListener("resize",pt);function pt(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,b().limit!==t&&($("limit",t),x=window.innerWidth<768?2:4,q())}async function q(){const t=b();let o=t.page||1,e=t.limit||6;try{const{data:s}=await dt(o,e),{perPage:r,totalPages:i,results:n}=s,y=r*i;lt.innerHTML=nt(n),N(n);const S=document.getElementById("tui-pagination-container");v?(v.reset(y),v.movePageTo(o)):(v=new V(S,{totalItems:y,itemsPerPage:e,visiblePages:x,centerAlign:!0,page:o}),v.on("beforeMove",d=>{const g=d.page,f=b(),I=f.limit||6;(g!==f.page||I!==f.limit)&&($("page",g),$("limit",I),q())})),ct()}catch(s){console.error("Error fetching products",s)}}q();const mt=document.querySelector(".carts-discount");z();async function z(){const{data:t}=await l.get("https://food-boutique.b.goit.study/api/products/discount");return t.sort(()=>Math.random()-.5).slice(0,2)}gt();async function gt(){const o=(await z()).map(({img:n,is10PercentOff:y,price:S,name:d,_id:g})=>{const f=d.split("").slice(0,11).join("")+"...";return`<li data-id="${g}"class="dis-product-card"><img class="dis-product-img" src="${n}" alt="${d}"/><div class="dis-card-description"><p class="dis-card-name">${d.split("").length>11?f:d}</p><div class="price-btn-list">
        <p class="product-price-list">$${S}</p>
        <button class="cart-btn-list" type="button" data-product-id="${g}">
          <svg class="list-cart-svg-list" width="18" height="18">
            <use href="${u}#icon-white-basket"></use>
          </svg>
        </button>
      </div></div></div>${y?`<svg class="discount-icon"><use href="${u}#icon-discount"></use></svg>`:null}</li>`}).join(""),e=document.createElement("div");e.classList.add("dis-container");const s=document.createElement("h2");s.classList.add("discount-title"),s.innerText="Discount products";const r=document.createElement("ul");r.classList.add("discount-list"),r.innerHTML=o,e.append(s),e.append(r),document.createElement("svg"),r.querySelectorAll(".dis-product-card").forEach(n=>{n.addEventListener("click",()=>{C(n.dataset.id)})}),mt.append(e)}const h=JSON.parse(localStorage.getItem("userEmailsArray"))||[],O=document.querySelector(".footer-form"),H=document.querySelector(".wrong-email-footer"),j=document.querySelector(".footer-modal-w-success"),D=document.querySelector(".footer-modal-w-failure"),p=O.querySelector("input[type=email]"),ft=O.querySelector("button[type=submit]"),vt=document.querySelector(".footer-close-success-margin"),yt=document.querySelector(".footer-close-failure-margin"),ht=document.querySelector(".footer-close-email-margin"),m=document.querySelector(".modal-section"),bt=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);ft.addEventListener("click",function(t){t.preventDefault();const o=p.value;if(!bt(o)){p.value="",H.classList.add("visibility"),m.classList.add("modal-subscribing-footer");return}St()});const wt=()=>{const t=p.value;h.includes(t)?(p.value="",D.classList.add("visibility"),m.classList.add("modal-subscribing-footer")):(h.push(t),console.log("Users who have already subscribed:",h),localStorage.setItem("userEmailsArray",JSON.stringify(h)))},St=async()=>{try{const t="https://food-boutique.b.goit.study/api/subscription";wt();const o={email:`${p.value}`},e=await l.post(t,o);j.classList.add("visibility"),m.classList.add("modal-subscribing-footer"),p.value=""}catch(t){console.error("Error sending request:",t.message)}};yt.addEventListener("click",function(t){m.classList.remove("modal-subscribing-footer"),D.classList.remove("visibility")});ht.addEventListener("click",function(t){m.classList.remove("modal-subscribing-footer"),H.classList.remove("visibility")});vt.addEventListener("click",function(t){m.classList.remove("modal-subscribing-footer"),j.classList.remove("visibility")});const B=document.querySelector(".footer-modal-w-img"),Lt=768;function J(){window.innerWidth<=Lt?B.src="https://github.com/RaynaLuch/project-teamNumber1/blob/main/src/img/rectangle-mobile.png?raw=true":B.src="https://github.com/RaynaLuch/project-teamNumber1/blob/main/src/img/rectangle.png?raw=true"}J();window.addEventListener("resize",J);const Et="https://food-boutique.b.goit.study/api/products/popular",U=document.querySelector(".carts-popular"),k=document.createElement("h2");k.classList.add("popular-product-title");k.textContent="Popular products";U.appendChild(k);const P=document.createElement("ul");P.classList.add("popular-product-list");U.appendChild(P);function $t(t){if(!t)return console.error("Помилка"),null;const o=E(t._id),e=document.createElement("li");e.classList.add("product-preview"),e.setAttribute("data-id",t._id),o?e.classList.add("product-preview--in-cart"):e.classList.remove("product-preview--in-cart");const s=document.createElement("button");return s.onclick=r=>{r.stopPropagation(),E(t._id)?T(t._id):M(t)},s.className="product-preview__cart-btn",s.innerHTML=`
    <svg>
      <use href="${u}#${o?"icon-check":"icon-cart"}">
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
  `,e.children[1].children[0].appendChild(s),e.onclick=()=>{C(t._id)},e}async function Ct(){try{return(await l.get(Et)).data}catch(t){throw console.error("Помилка при отриманні даних: ",t),t}}document.addEventListener("DOMContentLoaded",async()=>{try{const t=await Ct();console.log(t),t.sort((o,e)=>e.popularity-o.popularity).forEach(o=>{const e=$t(o);e&&P.appendChild(e)})}catch(t){console.error("Помилка при отриманні даних: ",t)}});const W=document.querySelector(".filters-select"),qt=document.querySelector(".filtersInput"),kt=document.querySelector(".filtersBtn");let w;const a={keyword:null,category:null,page:1,limit:9};localStorage.setItem("filterParams",JSON.stringify(a));async function Pt(){try{return(await l.get("https://food-boutique.b.goit.study/api/products/categories")).data}catch(t){throw console.log("Проблема при запросе на сервер"),new Error(t)}}async function R(t){const{keyword:o,category:e,page:s,limit:r}=t;try{let i;return o===null&&e===null?i=await l.get(`https://food-boutique.b.goit.study/api/products?page=${s}&limit=${r}`):o===null?i=await l.get(`https://food-boutique.b.goit.study/api/products?category=${e}&page=${s}&limit=${r}`):e===null?i=await l.get(`https://food-boutique.b.goit.study/api/products?keyword=${o}&page=${s}&limit=${r}`):i=await l.get(`https://food-boutique.b.goit.study/api/products?keyword=${o}&category=${e}&page=${s}&limit=${r}`),i.data.results}catch(i){throw console.log("Помилка на сервері при пошуку продуктів",i),new Error(i)}}async function It(){try{const o=(await Pt()).map(e=>`<option>${e}</option>`).join("")+"<option>Show all</option>";W.insertAdjacentHTML("beforeend",o),new G({select:".filters-select"})}catch(t){console.log("Проблема при обработке данных с сервера",t)}}It();W.addEventListener("change",_t);kt.addEventListener("click",Ft);async function _t(t){a.category=t.currentTarget.value,a.category==="Show all"?a.category=null:localStorage.setItem("filterParams",JSON.stringify(a)),w=await R(a),console.log(w)}async function Ft(){const t=qt.value;t.trim()?a.keyword=t:a.keyword=null,localStorage.setItem("filterParams",JSON.stringify(a)),w=await R(a),console.log(w)}
//# sourceMappingURL=commonHelpers.js.map
