import{r as i,b as u,g as p,i as m}from"./assets/manage-cart-52b4aebc.js";const g="/project-teamNumber1/assets/yellow-shopping-basket-88cc64a6.png",n=document.querySelector(".product-list"),y=document.querySelector(".sub-container"),b=document.querySelector(".delete-btn"),a=document.querySelector(".count"),h=document.querySelector(".amount"),v=`<div class="empty">
<img src="${g}" alt="empty basket" class="empty-picture">
<h2 class="empty-main-text">Your basket is <a href="../index.html" class="empty-link">empty...</a> </h2>
<p class="empty-sub-text">Go to the main page to select your favorite products and add them to the cart.</p>
</div>`;function r(){const e=localStorage.getItem("basket"),t=JSON.parse(e);if(t!==null){const c=t.length;n.insertAdjacentHTML("beforeend",S(p())),a.textContent=c,h.textContent=k(t);return}a.textContent=0,y.innerHTML=v}r();n.addEventListener("click",f);function f(e){n.innerHTML="";const c=e.target.closest(".product-cart").dataset.id;i(c);const o=localStorage.getItem("basket"),s=JSON.parse(o);console.log(s.length),s.length===0&&u(),r()}b.addEventListener("click",P);function P(){u(),r()}function k(e){let t=0;return e.map(({price:c})=>t+=c),t.toFixed(2)}function S(e){return e.map(({_id:t,img:c,name:o,category:s,size:d,price:l})=>`
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
          <use href="${m}#icon-cross"></use>
        </svg>
      </button>
    </li>
    `).join("")}
//# sourceMappingURL=commonHelpers2.js.map
