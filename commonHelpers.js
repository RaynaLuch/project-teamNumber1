import{s as _}from"./assets/header-2274413e.js";import{a as u,P as z}from"./assets/vendor-b592f4c5.js";const h="/project-teamNumber1/assets/sprite-0f0492a9.svg",S="basket";function D(t){const e=L();e.push(t),localStorage.setItem(S,JSON.stringify(e)),_()}function H(t){return L().find(o=>o._id===t)}function L(){let t,e=localStorage.getItem(S);return e?t=JSON.parse(e):t=[],t}function J(t){let e=L();e=e.filter(o=>o._id!==t),localStorage.setItem(S,JSON.stringify(e)),_()}const U="https://food-boutique.b.goit.study/api",k=document.querySelector("[data-modal-close]"),R=document.querySelector("[data-modal]"),r=document.querySelector(".modal-cart-button");function q(){R.classList.toggle("is-hidden")}const W=document.querySelector("#modal-img"),j=document.querySelector("#modal-name"),G=document.querySelector("#modal-category"),V=document.querySelector("#modal-size"),K=document.querySelector("#modal-popularity"),Q=document.querySelector("#modal-desc"),X=document.querySelector("#modal-price");async function P(t){let e;try{let n=function(){r.removeEventListener("click",s),r.removeEventListener("click",o),k.removeEventListener("click",n),q()};e=await u(U+"/products/"+t),console.log(e),W.src=e.data.img,j.textContent=e.data.name,G.textContent=e.data.category,V.textContent=e.data.size,K.textContent=e.data.popularity,Q.textContent=e.data.desc,X.textContent="$"+e.data.price,q();const o=c=>{const i=e.data;J(i._id),r.removeEventListener("click",o),r.firstChild.textContent="Add to",r.addEventListener("click",s)},s=c=>{const i=e.data;D(i),r.removeEventListener("click",s),r.firstChild.textContent="Remove from",r.addEventListener("click",o)};H(e.data._id)?(r.firstChild.textContent="Remove from",r.addEventListener("click",o)):(r.firstChild.textContent="Add to",r.addEventListener("click",s)),k.addEventListener("click",n)}catch(o){console.log(o)}}const Y=document.querySelector("[data-modal-close-shopping-cart]"),Z=document.querySelector("[data-modal-shopping-cart]");Y.addEventListener("click",$);function $(){Z.classList.toggle("is-hidden")}const y=document.querySelector(".order-btn");y==null||y.addEventListener("click",()=>$());function tt(t){const e=`<ul class="card-container-list">${t.map(o=>{const s=o.category.split("_").join(" ");return`
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
  `}).join("")}</ul>`;return setTimeout(()=>{document.querySelectorAll(".cart-btn-list").forEach(o=>{o.addEventListener("click",s=>{const n=s.currentTarget.dataset.productId,c=t.find(i=>i._id===n);c?handleCartButtonClick(c,t):console.error("Product not found by ID:",n)})})},0),F(t),e}function F(t){document.querySelectorAll(".cart-btn-list").forEach(e=>{e.addEventListener("click",o=>{const s=o.currentTarget.dataset.productId;handleCartButtonClick(s,t)})})}function et(){const t=ot();document.querySelectorAll(".cart-btn-list").forEach(e=>{const o=e.dataset.productId;t.find(n=>n._id===o)?e.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${h}#icon-check"></use>
        </svg>
      `:e.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${h}#icon-white-basket"></use>
        </svg>
      `})}function ot(){const t=localStorage.getItem("shoppingCart");return t?JSON.parse(t):[]}const st=document.querySelector(".products-container");st.addEventListener("click",nt);function nt(t){t.preventDefault(),t.target.nodeName==="LI"&&P(item._id)}window.onscroll=function(){rt()};function rt(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("myBtn").style.display="block":document.getElementById("myBtn").style.display="none"}const it=document.getElementById("products-container");let d;function ct(t,e){return u.get("https://food-boutique.b.goit.study/api/products",{params:{page:t,limit:e}})}function f(){const t=localStorage.getItem("productFilters");return t?JSON.parse(t):{keyword:null,category:null,page:1,limit:6}}function at(t){localStorage.setItem("productFilters",JSON.stringify(t))}function b(t,e){const o=f();o[t]=e,at(o)}window.addEventListener("resize",lt);function lt(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,f().limit!==t&&(b("limit",t),E())}async function E(){const t=f();let e=t.page||1,o=t.limit||6;try{const{data:s}=await ct(e,o),{perPage:n,totalPages:c,results:i}=s,p=n*c;it.innerHTML=tt(i),F(i);const m=document.getElementById("tui-pagination-container");d?(d.reset(p),d.movePageTo(e)):(d=new z(m,{totalItems:p,itemsPerPage:o,visiblePages:4,centerAlign:!0,page:e}),d.on("beforeMove",O=>{const w=O.page,v=f(),C=v.limit||6;(w!==v.page||C!==v.limit)&&(b("page",w),b("limit",C),E())})),et()}catch(s){console.error("Error fetching products",s)}}E();const dt=document.querySelector(".carts-discount");B();async function B(){const{data:t}=await u.get("https://food-boutique.b.goit.study/api/products/discount");return t.sort((o,s)=>s.popularity-o.popularity).slice(0,2)}ut();async function ut(){const e=(await B()).map(({img:c,is10PercentOff:i,price:p,name:m})=>`<li class="product-card"><img class="product-img" src="${c}" alt="${m}"/><div class="dis-card-description"><p class="dis-card-name">${m}</p><p class="dis-card-price">${p}</p><div class="carts-svg-box">
              <svg width="18" height="18">
                <use href="./img/sprite.svg#icon-white-basket"></use>
              </svg>
            </div></div></li>`).join(""),o=document.createElement("div");o.classList.add("container");const s=document.createElement("h2");s.classList.add("discount-title"),s.innerText="Discount products";const n=document.createElement("ul");n.classList.add("discount-list"),n.innerHTML=e,o.append(s),o.append(n),dt.append(o)}const g=JSON.parse(localStorage.getItem("userEmailsArray"))||[],T=document.querySelector(".footer-form"),x=document.querySelector(".wrong-email-footer"),A=document.querySelector(".footer-modal-w-success"),M=document.querySelector(".footer-modal-w-failure"),a=T.querySelector("input[type=email]"),pt=T.querySelector("button[type=submit]"),mt=document.querySelector(".footer-close-success-margin"),gt=document.querySelector(".footer-close-failure-margin"),ft=document.querySelector(".footer-close-email-margin"),l=document.querySelector(".modal-section"),vt=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);pt.addEventListener("click",function(t){t.preventDefault();const e=a.value;if(!vt(e)){a.value="",x.classList.add("visibility"),l.classList.add("modal-subscribing-footer");return}ht()});const yt=()=>{const t=a.value;g.includes(t)?(a.value="",M.classList.add("visibility"),l.classList.add("modal-subscribing-footer")):(g.push(t),console.log("Users who have already subscribed:",g),localStorage.setItem("userEmailsArray",JSON.stringify(g)))},ht=async()=>{try{const t="https://food-boutique.b.goit.study/api/subscription";yt();const e={email:`${a.value}`},o=await u.post(t,e);A.classList.add("visibility"),l.classList.add("modal-subscribing-footer"),a.value=""}catch(t){console.error("Error sending request:",t.message)}};gt.addEventListener("click",function(t){l.classList.remove("modal-subscribing-footer"),M.classList.remove("visibility")});ft.addEventListener("click",function(t){l.classList.remove("modal-subscribing-footer"),x.classList.remove("visibility")});mt.addEventListener("click",function(t){l.classList.remove("modal-subscribing-footer"),A.classList.remove("visibility")});const I=document.querySelector(".footer-modal-w-img"),bt=768;function N(){window.innerWidth<=bt?I.src="../img/rectangle-mobile.png":I.src="../img/rectangle.png"}N();window.addEventListener("resize",N);const St="https://food-boutique.b.goit.study/api/products/popular",Lt=document.querySelector(".carts-popular");function Et(t){if(!t)return console.error("Помилка"),null;const e=document.createElement("div");e.classList.add("product-preview");const o=document.createElement("button");return o.onclick=()=>{},o.className="product-preview__cart-btn",e.innerHTML=`
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
  `,e.children[1].children[0].appendChild(o),e.onclick=()=>{P(t._id)},e}async function wt(){try{return(await u.get(St)).data}catch(t){throw console.error("Помилка при отриманні даних: ",t),t}}document.addEventListener("DOMContentLoaded",async()=>{try{const t=await wt();console.log(t),t.sort((e,o)=>o.popularity-e.popularity).forEach(e=>{const o=Et(e);o&&Lt.appendChild(o)})}catch(t){console.error("Помилка при отриманні даних: ",t)}});
//# sourceMappingURL=commonHelpers.js.map
