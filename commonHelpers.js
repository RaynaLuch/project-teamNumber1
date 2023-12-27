import{r as N,a as C,f as E,i as g}from"./assets/manage-cart-9a2a8fe0.js";import{a as l,P as G,S as K}from"./assets/vendor-cb0d5946.js";const Q="https://food-boutique.b.goit.study/api",F=document.querySelector("[data-modal-close]"),X=document.querySelector("[data-modal]"),c=document.querySelector(".modal-cart-button");function B(){X.classList.toggle("is-hidden")}const Y=document.querySelector("#modal-img"),Z=document.querySelector("#modal-name"),tt=document.querySelector("#modal-category"),et=document.querySelector("#modal-size"),ot=document.querySelector("#modal-popularity"),st=document.querySelector("#modal-desc"),rt=document.querySelector("#modal-price");async function k(t){let o;try{let r=function(){c.removeEventListener("click",s),c.removeEventListener("click",e),F.removeEventListener("click",r),B()};o=await l(Q+"/products/"+t),console.log(o),Y.src=o.data.img,Z.textContent=o.data.name,tt.textContent=o.data.category,et.textContent=o.data.size,ot.textContent=o.data.popularity,st.textContent=o.data.desc,rt.textContent="$"+o.data.price,B();const e=i=>{const n=o.data;N(n._id),c.removeEventListener("click",e),c.firstChild.textContent="Add to",c.addEventListener("click",s)},s=i=>{const n=o.data;C(n),c.removeEventListener("click",s),c.firstChild.textContent="Remove from",c.addEventListener("click",e)};E(o.data._id)?(c.firstChild.textContent="Remove from",c.addEventListener("click",e)):(c.firstChild.textContent="Add to",c.addEventListener("click",s)),F.addEventListener("click",r)}catch(e){console.log(e)}}const it=document.querySelector("[data-modal-close-shopping-cart]"),nt=document.querySelector("[data-modal-shopping-cart]");it.addEventListener("click",A);function A(){nt.classList.toggle("is-hidden")}const L=document.querySelector(".order-btn");L==null||L.addEventListener("click",()=>A());function ct(t){const o=`<ul class="card-container-list">${t.map(e=>{const s=e.category.split("_").join(" ");return`
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
              <use href="${g}#icon-white-basket"></use>
            </svg>
          </button>
        </div> 
      </li>
  `}).join("")}</ul>`;return setTimeout(()=>{document.querySelectorAll(".cart-btn-list").forEach(e=>{e.addEventListener("click",s=>{const r=s.currentTarget.dataset.productId,i=t.find(n=>n._id===r);i?handleCartButtonClick(i,t):console.error("Product not found by ID:",r)})})},0),M(t),o}function M(t){document.querySelectorAll(".cart-btn-list").forEach(o=>{o.addEventListener("click",e=>{const s=e.currentTarget.dataset.productId;handleCartButtonClick(s,t)})})}function at(){const t=lt();document.querySelectorAll(".cart-btn-list").forEach(e=>{const s=e.dataset.productId;t.find(i=>i._id===s)?e.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${g}#icon-check"></use>
        </svg>
      `:e.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${g}#icon-white-basket"></use>
        </svg>
      `}),document.querySelectorAll(".photo-card-list").forEach(e=>{e.addEventListener("click",s=>{console.log(s.target),console.log(s.currentTarget),s.target.nodeName,k(e.dataset.id)})})}function lt(){const t=localStorage.getItem("shoppingCart");return t?JSON.parse(t):[]}const dt=document.getElementById("products-container");let v,x=window.innerWidth<768?2:4;function ut(t,o){return l.get("https://food-boutique.b.goit.study/api/products",{params:{page:t,limit:o}})}function w(){const t=localStorage.getItem("productFilters");return t?JSON.parse(t):{keyword:null,category:null,page:1,limit:6}}function pt(t){localStorage.setItem("productFilters",JSON.stringify(t))}function $(t,o){const e=w();e[t]=o,pt(e)}window.addEventListener("resize",mt);function mt(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,w().limit!==t&&($("limit",t),x=window.innerWidth<768?2:4,q())}async function q(){const t=w();let o=t.page||1,e=t.limit||6;try{const{data:s}=await ut(o,e),{perPage:r,totalPages:i,results:n}=s,d=r*i;dt.innerHTML=ct(n),M(n);const p=document.getElementById("tui-pagination-container");v?(v.reset(d),v.movePageTo(o)):(v=new G(p,{totalItems:d,itemsPerPage:e,visiblePages:x,centerAlign:!0,page:o}),v.on("beforeMove",u=>{const m=u.page,y=w(),_=y.limit||6;(m!==y.page||_!==y.limit)&&($("page",m),$("limit",_),q())})),at()}catch(s){console.error("Error fetching products",s)}}q();const O=document.querySelector(".carts-discount");z();async function z(){const{data:t}=await l.get("https://food-boutique.b.goit.study/api/products/discount");return t.sort(()=>Math.random()-.5).slice(0,2)}gt();async function gt(){const t=await z(),o=t.map(({img:n,is10PercentOff:d,price:p,name:u,_id:m})=>{const y=u.split("").slice(0,11).join("")+"...";return`<li data-id="${m}"class="dis-product-card"><img class="dis-product-img" src="${n}" alt="${u}"/><div class="dis-card-description"><p class="dis-card-name">${u.split("").length>11?y:u}</p><div class="price-btn-list">
        <p class="product-price-list">$${p}</p>
        <button class="cart-btn-list" type="button" data-product-id="${m}">
          <svg class="list-cart-svg-list" width="18" height="18">
            <use href="${g}#icon-white-basket"></use>
          </svg></button>
      </div></div></div>${d?`<svg class="discount-icon"><use href="${g}#icon-discount"></use></svg>`:null}</li>`}).join(""),e=document.createElement("div");e.classList.add("dis-container");const s=document.createElement("h2");s.classList.add("discount-title"),s.innerText="Discount products";const r=document.createElement("ul");r.classList.add("discount-list"),r.innerHTML=o,e.append(s),e.append(r),r.querySelectorAll(".dis-product-card").forEach(n=>{n.addEventListener("click",d=>{const p=n.dataset.id;if(d.target.nodeName==="BUTTON"||d.target.nodeName==="use"||d.target.nodeName==="svg"){const u=t.find(m=>m._id===p);C(u),ft(p,!0)}else k(p)})}),O.append(e)}function ft(t,o){const e=O.querySelector(`[data-id="${t}"]`);if(!e)return;e.children[1].children[1].children[1].children[0].children[0].setAttribute("href",`${g}#${o?"icon-check":"icon-white-basket"}`)}const b=JSON.parse(localStorage.getItem("userEmailsArray"))||[],H=document.querySelector(".footer-form"),j=document.querySelector(".wrong-email-footer"),D=document.querySelector(".footer-modal-w-success"),J=document.querySelector(".footer-modal-w-failure"),f=H.querySelector("input[type=email]"),ht=H.querySelector("button[type=submit]"),yt=document.querySelector(".footer-close-success-margin"),vt=document.querySelector(".footer-close-failure-margin"),bt=document.querySelector(".footer-close-email-margin"),h=document.querySelector(".modal-section"),wt=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);ht.addEventListener("click",function(t){t.preventDefault();const o=f.value;if(!wt(o)){f.value="",j.classList.add("visibility"),h.classList.add("modal-subscribing-footer");return}Lt()});const St=()=>{const t=f.value;b.includes(t)?(f.value="",J.classList.add("visibility"),h.classList.add("modal-subscribing-footer")):(b.push(t),console.log("Users who have already subscribed:",b),localStorage.setItem("userEmailsArray",JSON.stringify(b)))},Lt=async()=>{try{const t="https://food-boutique.b.goit.study/api/subscription";St();const o={email:`${f.value}`},e=await l.post(t,o);D.classList.add("visibility"),h.classList.add("modal-subscribing-footer"),f.value=""}catch(t){console.error("Error sending request:",t.message)}};vt.addEventListener("click",function(t){h.classList.remove("modal-subscribing-footer"),J.classList.remove("visibility")});bt.addEventListener("click",function(t){h.classList.remove("modal-subscribing-footer"),j.classList.remove("visibility")});yt.addEventListener("click",function(t){h.classList.remove("modal-subscribing-footer"),D.classList.remove("visibility")});const T=document.querySelector(".footer-modal-w-img"),Et=768;function U(){window.innerWidth<=Et?T.src="https://github.com/RaynaLuch/project-teamNumber1/blob/main/src/img/rectangle-mobile.png?raw=true":T.src="https://github.com/RaynaLuch/project-teamNumber1/blob/main/src/img/rectangle.png?raw=true"}U();window.addEventListener("resize",U);const $t="https://food-boutique.b.goit.study/api/products/popular",W=document.querySelector(".carts-popular"),P=document.createElement("h2");P.classList.add("popular-product-title");P.textContent="Popular products";W.appendChild(P);const I=document.createElement("ul");I.classList.add("popular-product-list");W.appendChild(I);function Ct(t){if(!t)return console.error("Помилка"),null;const o=E(t._id),e=document.createElement("li");e.classList.add("product-preview"),e.setAttribute("data-id",t._id),o?e.classList.add("product-preview--in-cart"):e.classList.remove("product-preview--in-cart");const s=document.createElement("button");return s.onclick=r=>{r.stopPropagation(),E(t._id)?N(t._id):C(t)},s.className="product-preview__cart-btn",s.innerHTML=`
    <svg>
      <use href="${g}#${o?"icon-check":"icon-cart"}">
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
  `,e.children[1].children[0].appendChild(s),e.onclick=()=>{k(t._id)},e}async function kt(){try{return(await l.get($t)).data}catch(t){throw console.error("Помилка при отриманні даних: ",t),t}}document.addEventListener("DOMContentLoaded",async()=>{try{const t=await kt();console.log(t),t.sort((o,e)=>e.popularity-o.popularity).forEach(o=>{const e=Ct(o);e&&I.appendChild(e)})}catch(t){console.error("Помилка при отриманні даних: ",t)}});const R=document.querySelector(".filters-select"),qt=document.querySelector(".filtersInput"),Pt=document.querySelector(".filtersBtn");let S;const a={keyword:null,category:null,page:1,limit:9};localStorage.setItem("filterParams",JSON.stringify(a));async function It(){try{return(await l.get("https://food-boutique.b.goit.study/api/products/categories")).data}catch(t){throw console.log("Проблема при запросе на сервер"),new Error(t)}}async function V(t){const{keyword:o,category:e,page:s,limit:r}=t;try{let i;return o===null&&e===null?i=await l.get(`https://food-boutique.b.goit.study/api/products?page=${s}&limit=${r}`):o===null?i=await l.get(`https://food-boutique.b.goit.study/api/products?category=${e}&page=${s}&limit=${r}`):e===null?i=await l.get(`https://food-boutique.b.goit.study/api/products?keyword=${o}&page=${s}&limit=${r}`):i=await l.get(`https://food-boutique.b.goit.study/api/products?keyword=${o}&category=${e}&page=${s}&limit=${r}`),i.data.results}catch(i){throw console.log("Помилка на сервері при пошуку продуктів",i),new Error(i)}}async function _t(){try{const o=(await It()).map(e=>`<option>${e}</option>`).join("")+"<option>Show all</option>";R.insertAdjacentHTML("beforeend",o),new K({select:".filters-select"})}catch(t){console.log("Проблема при обработке данных с сервера",t)}}_t();R.addEventListener("change",Ft);Pt.addEventListener("click",Bt);async function Ft(t){a.category=t.currentTarget.value,a.category==="Show all"?a.category=null:localStorage.setItem("filterParams",JSON.stringify(a)),S=await V(a),console.log(S)}async function Bt(){const t=qt.value;t.trim()?a.keyword=t:a.keyword=null,localStorage.setItem("filterParams",JSON.stringify(a)),S=await V(a),console.log(S)}
//# sourceMappingURL=commonHelpers.js.map
