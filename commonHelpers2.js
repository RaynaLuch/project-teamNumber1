import"./assets/header-e823d060.js";const l=document.querySelector(".product-list"),i=document.querySelector(".sub-container"),p=document.querySelector(".delete-btn"),o=document.querySelector(".count"),m=document.querySelector(".amount");function d(){let e,t=localStorage.getItem("basket");return t?e=JSON.parse(t):e=[],e}const g=`<div class="empty">
<img src="/img/yellow shopping basket.png" alt="empty basket" class="empty-picture">
<h2 class="empty-main-text">Your basket is <a href="../index.html" class="empty-link">empty...</a> </h2>
<p class="empty-sub-text">Go to the main page to select your favorite products and add them to the cart.</p>
</div>`;function n(){const e=localStorage.getItem("basket"),t=JSON.parse(e);if(t!==null){const s=t.length;l.insertAdjacentHTML("beforeend",h(d())),o.textContent=s,m.textContent=b(t);return}o.textContent=0,i.innerHTML=g}n();p.addEventListener("click",y);function y(){localStorage.removeItem("basket"),n(),S()}function b(e){let t=0;return e.map(({price:s})=>t+=s),t}function h(e){return e.map(({id:t,img:s,name:c,category:a,size:r,price:u})=>`
      <li class="product-cart" data-id="${t}">
      <img
        class="product-picture"
        src="${s}"
        width="100"
        height="100"
      alt="avocado"
      />
      <div class="">
        <p class="product-name">${c}</p>

        <div class="product-descr">
          <p>Category: <span class="qwe">${a}</span></p>
          <p>Size: <span class="qwe">${r}</span></p>
        </div>

        <p class="product-price">$${u}</p>
      </div>
      <button class="cart-btn" type="button">
        <svg class="">
          <use href="/img/sprite.svg#icon-cross"></use>
        </svg>
      </button>
    </li>
    `).join("")}function S(){var s;const e=((s=JSON.parse(localStorage.getItem("basket")))==null?void 0:s.length)??0,t=document.querySelector(".itemsCount");t.innerText=e}
//# sourceMappingURL=commonHelpers2.js.map
