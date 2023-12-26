import"./assets/header-16e8538e.js";const p=document.querySelector(".product-list"),u=document.querySelector(".sub-container"),i=document.querySelector(".delete-btn"),c=document.querySelector(".count"),d=document.querySelector(".amount");function m(){let e,t=localStorage.getItem("basket");return t?e=JSON.parse(t):e=[],e}const g=`<div class="empty">
<img src="./img/yellow shopping basket.png" alt="empty basket" class="empty-picture">
<h2 class="empty-main-text">Your basket is <a href="../index.html" class="empty-link">empty...</a> </h2>
<p class="empty-sub-text">Go to the main page to select your favorite products and add them to the cart.</p>
</div>`;function o(){const e=localStorage.getItem("basket"),t=JSON.parse(e);if(t!==null){const s=t.length;p.insertAdjacentHTML("beforeend",h(m())),c.textContent=s,d.textContent=b(t);return}c.textContent=0,u.innerHTML=g}o();i.addEventListener("click",y);function y(){localStorage.removeItem("basket"),o()}function b(e){let t=0;return e.map(({price:s})=>t+=s),t}function h(e){return e.map(({id:t,img:s,name:n,category:a,size:r,price:l})=>`
      <li class="product-cart" data-id="${t}">
      <img
        class="product-picture"
        src="${s}"
        width="100"
        height="100"
      alt="avocado"
      />
      <div class="">
        <p class="product-name">${n}</p>

        <div class="product-descr">
          <p>Category: <span class="qwe">${a}</span></p>
          <p>Size: <span class="qwe">${r}</span></p>
        </div>

        <p class="product-price">$${l}</p>
      </div>
      <button class="cart-btn" type="button">
        <svg class="">
          <use href="./img/sprite.svg#icon-cross"></use>
        </svg>
      </button>
    </li>
    `).join("")}
//# sourceMappingURL=commonHelpers2.js.map
