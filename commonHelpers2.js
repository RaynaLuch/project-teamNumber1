import{r as i,b as u,g as p}from"./assets/manage-cart-9a051454.js";const n=document.querySelector(".product-list"),m=document.querySelector(".sub-container"),g=document.querySelector(".delete-btn"),a=document.querySelector(".count"),y=document.querySelector(".amount"),v=`<div class="empty">
<img src="../img/yellow-shopping-basket.png" alt="empty basket" class="empty-picture">
<h2 class="empty-main-text">Your basket is <a href="../index.html" class="empty-link">empty...</a> </h2>
<p class="empty-sub-text">Go to the main page to select your favorite products and add them to the cart.</p>
</div>`;function r(){const e=localStorage.getItem("basket"),t=JSON.parse(e);if(t!==null){const c=t.length;n.insertAdjacentHTML("beforeend",P(p())),a.textContent=c,y.textContent=f(t);return}a.textContent=0,m.innerHTML=v}r();n.addEventListener("click",b);function b(e){n.innerHTML="";const c=e.target.closest(".product-cart").dataset.id;i(c);const o=localStorage.getItem("basket"),s=JSON.parse(o);console.log(s.length),s.length===0&&u(),r()}g.addEventListener("click",h);function h(){u(),r()}function f(e){let t=0;return e.map(({price:c})=>t+=c),t.toFixed(2)}function P(e){return e.map(({_id:t,img:c,name:o,category:s,size:d,price:l})=>`
      <li class="product-cart" data-id="${t}">
      <img
        class="product-picture"
        src="${c}"
        width="100"
        height="100"
      alt="avocado"
      />
      <div class="">
        <p class="product-name">${o}</p>

        <div class="product-descr">
          <p>Category: <span class="qwe">${s}</span></p>
          <p>Size: <span class="qwe">${d}</span></p>
        </div>

        <p class="product-price">$${l}</p>
      </div>
      <button class="cart-btn" type="button">
        <svg class="">
          <use href="../img/sprite.svg#icon-cross"></use>
        </svg>
      </button>
    </li>
    `).join("")}
//# sourceMappingURL=commonHelpers2.js.map
