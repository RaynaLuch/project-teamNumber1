import{r as l,b as u,g as p,i as m}from"./assets/manage-cart-2135e1f9.js";const n=document.querySelector(".product-list"),g=document.querySelector(".sub-container"),y=document.querySelector(".delete-btn"),a=document.querySelector(".count"),v=document.querySelector(".amount"),b=`<div class="empty">
<img src="emptyBasketPicture" alt="empty basket" class="empty-picture">
<h2 class="empty-main-text">Your basket is <a href="../index.html" class="empty-link">empty...</a> </h2>
<p class="empty-sub-text">Go to the main page to select your favorite products and add them to the cart.</p>
</div>`;function r(){const e=localStorage.getItem("basket"),t=JSON.parse(e);if(t!==null){const c=t.length;n.insertAdjacentHTML("beforeend",k(p())),a.textContent=c,v.textContent=P(t);return}a.textContent=0,g.innerHTML=b}r();n.addEventListener("click",h);function h(e){n.innerHTML="";const c=e.target.closest(".product-cart").dataset.id;l(c);const o=localStorage.getItem("basket"),s=JSON.parse(o);console.log(s.length),s.length===0&&u(),r()}y.addEventListener("click",f);function f(){u(),r()}function P(e){let t=0;return e.map(({price:c})=>t+=c),t.toFixed(2)}function k(e){return e.map(({_id:t,img:c,name:o,category:s,size:d,price:i})=>`
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

        <p class="product-price">$${i}</p>
      </div>
      <button class="cart-btn" type="button">
        <svg class="">
          <use href="${m}#icon-cross"></use>
        </svg>
      </button>
    </li>
    `).join("")}
//# sourceMappingURL=commonHelpers2.js.map
