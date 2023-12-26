import{s as F}from"./assets/header-aca8ffe7.js";import{a as v,P as R}from"./assets/vendor-b592f4c5.js";const g="/project-teamNumber1/assets/sprite-0f0492a9.svg",E="basket";function B(t){const e=C();e.push(t),localStorage.setItem(E,JSON.stringify(e)),F()}function N(t){return C().find(o=>o._id===t)}function C(){let t,e=localStorage.getItem(E);return e?t=JSON.parse(e):t=[],t}function U(t){let e=C();e=e.filter(o=>o._id!==t),localStorage.setItem(E,JSON.stringify(e)),F()}const W="https://food-boutique.b.goit.study/api",I=document.querySelector("[data-modal-close]"),G=document.querySelector("[data-modal]"),c=document.querySelector(".modal-cart-button");function _(){G.classList.toggle("is-hidden")}const V=document.querySelector("#modal-img"),K=document.querySelector("#modal-name"),Q=document.querySelector("#modal-category"),X=document.querySelector("#modal-size"),Y=document.querySelector("#modal-popularity"),Z=document.querySelector("#modal-desc"),tt=document.querySelector("#modal-price");async function w(t){let e;try{let n=function(){c.removeEventListener("click",s),c.removeEventListener("click",o),I.removeEventListener("click",n),_()};e=await v(W+"/products/"+t),console.log(e),V.src=e.data.img,K.textContent=e.data.name,Q.textContent=e.data.category,X.textContent=e.data.size,Y.textContent=e.data.popularity,Z.textContent=e.data.desc,tt.textContent="$"+e.data.price,_();const o=r=>{const i=e.data;U(i._id),c.removeEventListener("click",o),c.firstChild.textContent="Add to",c.addEventListener("click",s)},s=r=>{const i=e.data;B(i),c.removeEventListener("click",s),c.firstChild.textContent="Remove from",c.addEventListener("click",o)};N(e.data._id)?(c.firstChild.textContent="Remove from",c.addEventListener("click",o)):(c.firstChild.textContent="Add to",c.addEventListener("click",s)),I.addEventListener("click",n)}catch(o){console.log(o)}}const et=document.querySelector("[data-modal-close-shopping-cart]"),ot=document.querySelector("[data-modal-shopping-cart]");et.addEventListener("click",T);function T(){ot.classList.toggle("is-hidden")}const S=document.querySelector(".order-btn");S==null||S.addEventListener("click",()=>T());function st(t){const e=`<ul class="card-container-list">${t.map(o=>{const s=o.category.split("_").join(" ");return`
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
              <use href="${g}#icon-white-basket"></use>
            </svg>
          </button>
        </div> 
      </li>
  `}).join("")}</ul>`;return setTimeout(()=>{document.querySelectorAll(".cart-btn-list").forEach(o=>{o.addEventListener("click",s=>{const n=s.currentTarget.dataset.productId,r=t.find(i=>i._id===n);r?handleCartButtonClick(r,t):console.error("Product not found by ID:",n)})})},0),M(t),e}function M(t){document.querySelectorAll(".cart-btn-list").forEach(e=>{e.addEventListener("click",o=>{const s=o.currentTarget.dataset.productId;handleCartButtonClick(s,t)})})}function nt(){const t=it();document.querySelectorAll(".cart-btn-list").forEach(e=>{const o=e.dataset.productId;t.find(n=>n._id===o)?e.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${g}#icon-check"></use>
        </svg>
      `:e.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${g}#icon-white-basket"></use>
        </svg>
      `})}function it(){const t=localStorage.getItem("shoppingCart");return t?JSON.parse(t):[]}const ct=document.querySelector(".products-container");ct.addEventListener("click",rt);function rt(t){t.preventDefault(),t.target.nodeName==="LI"&&w(item._id)}window.onscroll=function(){at()};function at(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("myBtn").style.display="block":document.getElementById("myBtn").style.display="none"}const lt=document.getElementById("products-container");let m;function dt(t,e){return v.get("https://food-boutique.b.goit.study/api/products",{params:{page:t,limit:e}})}function y(){const t=localStorage.getItem("productFilters");return t?JSON.parse(t):{keyword:null,category:null,page:1,limit:6}}function ut(t){localStorage.setItem("productFilters",JSON.stringify(t))}function L(t,e){const o=y();o[t]=e,ut(o)}window.addEventListener("resize",pt);function pt(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,y().limit!==t&&(L("limit",t),k())}async function k(){const t=y();let e=t.page||1,o=t.limit||6;try{const{data:s}=await dt(e,o),{perPage:n,totalPages:r,results:i}=s,f=n*r;lt.innerHTML=st(i),M(i);const b=document.getElementById("tui-pagination-container");m?(m.reset(f),m.movePageTo(e)):(m=new R(b,{totalItems:f,itemsPerPage:o,visiblePages:4,centerAlign:!0,page:e}),m.on("beforeMove",a=>{const u=a.page,p=y(),$=p.limit||6;(u!==p.page||$!==p.limit)&&(L("page",u),L("limit",$),k())})),nt()}catch(s){console.error("Error fetching products",s)}}k();const mt=document.querySelector(".carts-discount");A();async function A(){const{data:t}=await v.get("https://food-boutique.b.goit.study/api/products/discount");return t.sort(()=>Math.random()-.5).slice(0,2)}gt();async function gt(){const e=(await A()).map(({img:i,is10PercentOff:f,price:b,name:a,_id:u})=>{const p=a.split("").slice(0,11).join("")+"...";return`<li data-id="${u}"class="dis-product-card"><img class="dis-product-img" src="${i}" alt="${a}"/><div class="dis-card-description"><p class="dis-card-name">${a.split("").length>11?p:a}</p><div class="price-btn-list">
        <p class="product-price-list">$${b}</p>
        <button class="cart-btn-list" type="button" data-product-id="${u}">
          <svg class="list-cart-svg-list" width="18" height="18">
            <use href="${g}#icon-white-basket"></use>
          </svg>
        </button>
      </div></div></div>${f?`<svg class="discount-icon"><use href="${g}#icon-discount"></use></svg>`:null}</li>`}).join(""),o=document.createElement("div");o.classList.add("dis-container");const s=document.createElement("h2");s.classList.add("discount-title"),s.innerText="Discount products";const n=document.createElement("ul");n.classList.add("discount-list"),n.innerHTML=e,o.append(s),o.append(n),document.createElement("svg"),n.querySelectorAll(".dis-product-card").forEach(i=>{i.addEventListener("click",()=>{w(i.dataset.id)})}),mt.append(o)}const h=JSON.parse(localStorage.getItem("userEmailsArray"))||[],x=document.querySelector(".footer-form"),O=document.querySelector(".wrong-email-footer"),z=document.querySelector(".footer-modal-w-success"),H=document.querySelector(".footer-modal-w-failure"),l=x.querySelector("input[type=email]"),vt=x.querySelector("button[type=submit]"),ft=document.querySelector(".footer-close-success-margin"),ht=document.querySelector(".footer-close-failure-margin"),yt=document.querySelector(".footer-close-email-margin"),d=document.querySelector(".modal-section"),bt=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);vt.addEventListener("click",function(t){t.preventDefault();const e=l.value;if(!bt(e)){l.value="",O.classList.add("visibility"),d.classList.add("modal-subscribing-footer");return}Lt()});const St=()=>{const t=l.value;h.includes(t)?(l.value="",H.classList.add("visibility"),d.classList.add("modal-subscribing-footer")):(h.push(t),console.log("Users who have already subscribed:",h),localStorage.setItem("userEmailsArray",JSON.stringify(h)))},Lt=async()=>{try{const t="https://food-boutique.b.goit.study/api/subscription";St();const e={email:`${l.value}`},o=await v.post(t,e);z.classList.add("visibility"),d.classList.add("modal-subscribing-footer"),l.value=""}catch(t){console.error("Error sending request:",t.message)}};ht.addEventListener("click",function(t){d.classList.remove("modal-subscribing-footer"),H.classList.remove("visibility")});yt.addEventListener("click",function(t){d.classList.remove("modal-subscribing-footer"),O.classList.remove("visibility")});ft.addEventListener("click",function(t){d.classList.remove("modal-subscribing-footer"),z.classList.remove("visibility")});const P=document.querySelector(".footer-modal-w-img"),Et=768;function D(){window.innerWidth<=Et?P.src="https://github.com/RaynaLuch/project-teamNumber1/blob/main/src/img/rectangle-mobile.png?raw=true":P.src="https://github.com/RaynaLuch/project-teamNumber1/blob/main/src/img/rectangle.png?raw=true"}D();window.addEventListener("resize",D);const Ct="https://food-boutique.b.goit.study/api/products/popular",q=document.querySelector(".carts-popular"),J=document.createElement("h2");J.textContent="Popular products";q.appendChild(J);const j=document.createElement("ul");j.classList.add("popular-product-list");q.appendChild(j);function wt(t){if(!t)return console.error("Помилка"),null;const e=N(t.id),o=document.createElement("li");o.classList.add("product-preview");const s=document.createElement("button");return s.onclick=n=>{n.stopPropagation(),B(t)},s.className="product-preview__cart-btn",s.innerHTML=`
    <svg>
      <use href="./img/sprite.svg#${e?"icon-check":"icon-cart"}">
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
        <p><span class="product-preview__sub-heading">Size: ${t.size}</span></p>
        <p><span class="product-preview__sub-heading">Popularity:</span> ${t.popularity}</p>
      </div>
    </div>
  `,o.children[1].children[0].appendChild(s),o.onclick=()=>{w(t._id)},o}async function kt(){try{return(await v.get(Ct)).data}catch(t){throw console.error("Помилка при отриманні даних: ",t),t}}document.addEventListener("DOMContentLoaded",async()=>{try{const t=await kt();console.log(t),t.sort((e,o)=>o.popularity-e.popularity).forEach(e=>{const o=wt(e);o&&q.appendChild(o)})}catch(t){console.error("Помилка при отриманні даних: ",t)}});
//# sourceMappingURL=commonHelpers.js.map
