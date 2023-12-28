import{r as m,b as u,g as d,t as g,i as h}from"./assets/modal-e1364c50.js";import{a as y}from"./assets/vendor-cb0d5946.js";const b="/project-teamNumber1/assets/yellow-shopping-basket-88cc64a6.png",r=document.querySelector(".product-list"),f=document.querySelector(".sub-container"),v=document.querySelector(".delete-btn"),a=document.querySelector(".count"),S=document.querySelector(".change"),P=document.querySelector(".order-form"),k="https://food-boutique.b.goit.study/api/orders",q=`<div class="empty">
<img src="${b}" alt="empty basket" class="empty-picture">
<h2 class="empty-main-text">Your basket is <a href="../index.html" class="empty-link">empty...</a> </h2>
<p class="empty-sub-text">Go to the main page to select your favorite products and add them to the cart.</p>
</div>`;function n(){const e=localStorage.getItem("basket"),t=JSON.parse(e);if(t!==null){const o=t.length;r.insertAdjacentHTML("beforeend",L(d())),a.textContent=o,S.textContent=x(t);return}a.textContent=0,f.innerHTML=q}n();r.addEventListener("click",$);function $(e){r.innerHTML="";const o=e.target.closest(".product-cart").dataset.id;m(o);const s=localStorage.getItem("basket"),c=JSON.parse(s);console.log(c.length),c.length===0&&u(),n()}v.addEventListener("click",i);function i(){u(),n()}function x(e){let t=0;return e.map(({price:o})=>t+=o),t.toFixed(2)}function L(e){return e.map(({_id:t,img:o,name:s,category:c,size:l,price:p})=>`
      <li class="product-cart" data-id="${t}">
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
          <p>Size: <span class="qwe">${l}</span></p>
        </div>

        <p class="product-price">$${p}</p>
      </div>
      <button class="cart-btn" type="button">
        <svg class="">
          <use href="${h}#icon-cross"></use>
        </svg>
      </button>
    </li>
    `).join("")}P.addEventListener("submit",C);function C(e){e.preventDefault();const t=d(),o=B(t);y.post(k,{email:e.target.elements.email.value,products:o}).then(s=>{s.status===201&&(i(),g())}).catch(s=>console.log(s.message))}function B(e){return e.map(t=>({productId:t._id,amount:1}))}
//# sourceMappingURL=commonHelpers2.js.map
