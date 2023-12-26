import{s as P}from"./assets/header-f2efdf7c.js";import{a as u,P as R}from"./assets/vendor-b592f4c5.js";const h="/project-teamNumber1/assets/sprite-0f0492a9.svg",S="basket";function $(t){const e=L();e.push(t),localStorage.setItem(S,JSON.stringify(e)),P()}function F(t){return L().find(o=>o._id===t)}function L(){let t,e=localStorage.getItem(S);return e?t=JSON.parse(e):t=[],t}function W(t){let e=L();e=e.filter(o=>o._id!==t),localStorage.setItem(S,JSON.stringify(e)),P()}const j="https://food-boutique.b.goit.study/api",q=document.querySelector("[data-modal-close]"),G=document.querySelector("[data-modal]"),r=document.querySelector(".modal-cart-button");function I(){G.classList.toggle("is-hidden")}const V=document.querySelector("#modal-img"),K=document.querySelector("#modal-name"),Q=document.querySelector("#modal-category"),X=document.querySelector("#modal-size"),Y=document.querySelector("#modal-popularity"),Z=document.querySelector("#modal-desc"),tt=document.querySelector("#modal-price");async function B(t){let e;try{let n=function(){r.removeEventListener("click",s),r.removeEventListener("click",o),q.removeEventListener("click",n),I()};e=await u(j+"/products/"+t),console.log(e),V.src=e.data.img,K.textContent=e.data.name,Q.textContent=e.data.category,X.textContent=e.data.size,Y.textContent=e.data.popularity,Z.textContent=e.data.desc,tt.textContent="$"+e.data.price,I();const o=c=>{const i=e.data;W(i._id),r.removeEventListener("click",o),r.firstChild.textContent="Add to",r.addEventListener("click",s)},s=c=>{const i=e.data;$(i),r.removeEventListener("click",s),r.firstChild.textContent="Remove from",r.addEventListener("click",o)};F(e.data._id)?(r.firstChild.textContent="Remove from",r.addEventListener("click",o)):(r.firstChild.textContent="Add to",r.addEventListener("click",s)),q.addEventListener("click",n)}catch(o){console.log(o)}}const et=document.querySelector("[data-modal-close-shopping-cart]"),ot=document.querySelector("[data-modal-shopping-cart]");et.addEventListener("click",T);function T(){ot.classList.toggle("is-hidden")}const y=document.querySelector(".order-btn");y==null||y.addEventListener("click",()=>T());function st(t){const e=`<ul class="card-container-list">${t.map(o=>{const s=o.category.split("_").join(" ");return`
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
              <use href="${h}#icon-white-basket"></use>
            </svg>
          </button>
        </div> 
      </li>
  `}).join("")}</ul>`;return setTimeout(()=>{document.querySelectorAll(".cart-btn-list").forEach(o=>{o.addEventListener("click",s=>{const n=s.currentTarget.dataset.productId,c=t.find(i=>i._id===n);c?handleCartButtonClick(c,t):console.error("Product not found by ID:",n)})})},0),x(t),e}function x(t){document.querySelectorAll(".cart-btn-list").forEach(e=>{e.addEventListener("click",o=>{const s=o.currentTarget.dataset.productId;handleCartButtonClick(s,t)})})}function nt(){const t=rt();document.querySelectorAll(".cart-btn-list").forEach(e=>{const o=e.dataset.productId;t.find(n=>n._id===o)?e.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${h}#icon-check"></use>
        </svg>
      `:e.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${h}#icon-white-basket"></use>
        </svg>
      `})}function rt(){const t=localStorage.getItem("shoppingCart");return t?JSON.parse(t):[]}const it=document.querySelector(".products-container");it.addEventListener("click",ct);function ct(t){t.preventDefault(),t.target.nodeName==="LI"&&B(item._id)}window.onscroll=function(){at()};function at(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("myBtn").style.display="block":document.getElementById("myBtn").style.display="none"}const lt=document.getElementById("products-container");let d;function dt(t,e){return u.get("https://food-boutique.b.goit.study/api/products",{params:{page:t,limit:e}})}function f(){const t=localStorage.getItem("productFilters");return t?JSON.parse(t):{keyword:null,category:null,page:1,limit:6}}function ut(t){localStorage.setItem("productFilters",JSON.stringify(t))}function b(t,e){const o=f();o[t]=e,ut(o)}window.addEventListener("resize",pt);function pt(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,f().limit!==t&&(b("limit",t),C())}async function C(){const t=f();let e=t.page||1,o=t.limit||6;try{const{data:s}=await dt(e,o),{perPage:n,totalPages:c,results:i}=s,p=n*c;lt.innerHTML=st(i),x(i);const m=document.getElementById("tui-pagination-container");d?(d.reset(p),d.movePageTo(e)):(d=new R(m,{totalItems:p,itemsPerPage:o,visiblePages:4,centerAlign:!0,page:e}),d.on("beforeMove",U=>{const w=U.page,v=f(),k=v.limit||6;(w!==v.page||k!==v.limit)&&(b("page",w),b("limit",k),C())})),nt()}catch(s){console.error("Error fetching products",s)}}C();const mt=document.querySelector(".carts-discount");M();async function M(){const{data:t}=await u.get("https://food-boutique.b.goit.study/api/products/discount");return t.sort((o,s)=>s.popularity-o.popularity).slice(0,2)}gt();async function gt(){const e=(await M()).map(({img:c,is10PercentOff:i,price:p,name:m})=>`<li class="product-card"><img class="product-img" src="${c}" alt="${m}"/><div class="dis-card-description"><p class="dis-card-name">${m}</p><p class="dis-card-price">${p}</p><div class="carts-svg-box">
              <svg width="18" height="18">
                <use href="./img/sprite.svg#icon-white-basket"></use>
              </svg>
            </div></div></li>`).join(""),o=document.createElement("div");o.classList.add("container");const s=document.createElement("h2");s.classList.add("discount-title"),s.innerText="Discount products";const n=document.createElement("ul");n.classList.add("discount-list"),n.innerHTML=e,o.append(s),o.append(n),mt.append(o)}const g=JSON.parse(localStorage.getItem("userEmailsArray"))||[],A=document.querySelector(".footer-form"),N=document.querySelector(".wrong-email-footer"),O=document.querySelector(".footer-modal-w-success"),z=document.querySelector(".footer-modal-w-failure"),a=A.querySelector("input[type=email]"),ft=A.querySelector("button[type=submit]"),vt=document.querySelector(".footer-close-success-margin"),yt=document.querySelector(".footer-close-failure-margin"),ht=document.querySelector(".footer-close-email-margin"),l=document.querySelector(".modal-section"),bt=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);ft.addEventListener("click",function(t){t.preventDefault();const e=a.value;if(!bt(e)){a.value="",N.classList.add("visibility"),l.classList.add("modal-subscribing-footer");return}Lt()});const St=()=>{const t=a.value;g.includes(t)?(a.value="",z.classList.add("visibility"),l.classList.add("modal-subscribing-footer")):(g.push(t),console.log("Users who have already subscribed:",g),localStorage.setItem("userEmailsArray",JSON.stringify(g)))},Lt=async()=>{try{const t="https://food-boutique.b.goit.study/api/subscription";St();const e={email:`${a.value}`},o=await u.post(t,e);O.classList.add("visibility"),l.classList.add("modal-subscribing-footer"),a.value=""}catch(t){console.error("Error sending request:",t.message)}};yt.addEventListener("click",function(t){l.classList.remove("modal-subscribing-footer"),z.classList.remove("visibility")});ht.addEventListener("click",function(t){l.classList.remove("modal-subscribing-footer"),N.classList.remove("visibility")});vt.addEventListener("click",function(t){l.classList.remove("modal-subscribing-footer"),O.classList.remove("visibility")});const _=document.querySelector(".footer-modal-w-img"),Ct=768;function H(){window.innerWidth<=Ct?_.src="../img/rectangle-mobile.png":_.src="../img/rectangle.png"}H();window.addEventListener("resize",H);const Et="https://food-boutique.b.goit.study/api/products/popular",E=document.querySelector(".carts-popular"),D=document.createElement("h2");D.textContent="Popular products";E.appendChild(D);const J=document.createElement("ul");J.classList.add("popular-product-list");E.appendChild(J);function wt(t){if(!t)return console.error("Помилка"),null;const e=F(t.id),o=document.createElement("li");o.classList.add("product-preview");const s=document.createElement("button");return s.onclick=n=>{n.stopPropagation(),$(t)},s.className="product-preview__cart-btn",s.innerHTML=`
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
  `,o.children[1].children[0].appendChild(s),o.onclick=()=>{B(t._id)},o}async function kt(){try{return(await u.get(Et)).data}catch(t){throw console.error("Помилка при отриманні даних: ",t),t}}document.addEventListener("DOMContentLoaded",async()=>{try{const t=await kt();console.log(t),t.sort((e,o)=>o.popularity-e.popularity).forEach(e=>{const o=wt(e);o&&E.appendChild(o)})}catch(t){console.error("Помилка при отриманні даних: ",t)}});
//# sourceMappingURL=commonHelpers.js.map
