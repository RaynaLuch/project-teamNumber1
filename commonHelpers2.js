import{r as m,b as d,g as i,t as g,i as f}from"./assets/modal-a4b1c644.js";import{a as b}from"./assets/vendor-cb0d5946.js";const y="/project-teamNumber1/assets/yellow-shopping-basket-88cc64a6.png",r=document.querySelector(".product-list"),h=document.querySelector(".sub-container"),v=document.querySelector(".delete-btn"),u=document.querySelector(".count"),P=document.querySelector(".change"),S=document.querySelector(".order-form"),k="https://food-boutique.b.goit.study/api/orders",q=`<div class="empty">
<img src="${y}" alt="empty basket" class="empty-picture">
<h2 class="empty-main-text">Your basket is <a href="../index.html" class="empty-link">empty...</a> </h2>
<p class="empty-sub-text">Go to the main page to select your favorite products and add them to the cart.</p>
</div>`;function a(){const t=localStorage.getItem("basket"),e=JSON.parse(t);if(e!==null){const o=e.length;r.insertAdjacentHTML("beforeend",L(i())),u.textContent=o,P.textContent=x(e);return}u.textContent=0,h.innerHTML=q}a();r.addEventListener("click",$);function $(t){if(t.target!==t.currentTarget){const e=t.target.closest(".cart-btn"),s=t.target.closest(".product-cart").dataset.id;if(e!==null){r.innerHTML="",m(s);const c=localStorage.getItem("basket");JSON.parse(c).length===0&&d(),a()}}}v.addEventListener("click",l);function l(){d(),a()}function x(t){let e=0;return t.map(({price:o})=>e+=o),e.toFixed(2)}function L(t){return t.map(({_id:e,img:o,name:s,category:c,size:n,price:p})=>`
      <li class="product-cart" data-id="${e}">
      <img
        class="product-picture"
        src="${o}"
        width="100"
        height="100"
      alt="avocado"
      />
      <div class="">
        <p class="product-name">${s}</p>

        <div class="product-descr">
          <p>Category: <span class="qwe">${c}</span></p>
          <p>Size: <span class="qwe">${n}</span></p>
        </div>

        <p class="product-price">$${p}</p>
      </div>
      <button class="cart-btn" type="button">
        <svg class="cross-icon">
          <use href="${f}#icon-cross"></use>
        </svg>
      </button>
    </li>
    `).join("")}S.addEventListener("submit",C);function C(t){t.preventDefault();const e=i(),o=B(e);b.post(k,{email:t.target.elements.email.value,products:o}).then(s=>{s.status===201&&(l(),g())}).catch(s=>console.log(s.message))}function B(t){return t.map(e=>({productId:e._id,amount:1}))}
//# sourceMappingURL=commonHelpers2.js.map
