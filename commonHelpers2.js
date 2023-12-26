import"./assets/header-bbf0054b.js";const r=document.querySelector(".product-list"),i=document.querySelector(".sub-container"),p=[{img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",productName:"Ackee",category:"Fresh_Produce",size:"16 oz",price:8.99},{img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3860.png",productName:"Allspice",category:"Pantry_Item",size:"1.5oz",price:2.99},{img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3861.png",productName:"Almond Extract",category:"Pantry_Items",size:"2oz",price:4.99},{img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png",productName:"Ancho Chillies",category:"Pantry_Items",size:"100g",price:4.99}];function n(){localStorage.setItem("basket",JSON.stringify(p))}n();function m(){const t=localStorage.getItem("basket");return JSON.parse(t)}const d=`<div class="empty">
<img src="./img/yellow shopping basket.png" alt="empty basket" class="empty-picture">
<h2 class="empty-main-text">Your basket is <a href="../index.html" class="empty-link">empty...</a> </h2>
<p class="empty-sub-text">Go to the main page to select your favorite products and add them to the cart.</p>
</div>`;function g(){const t=localStorage.getItem("basket"),e=JSON.parse(t);if(console.log(e),e!==null){r.insertAdjacentHTML("beforeend",u(m()));return}i.innerHTML=d}g();function u(t){return t.map(({img:e,productName:s,category:a,size:c,price:o})=>`
      <li class="product-cart">
      <img
        class="product-picture"
        src="${e}"
        width="100"
        height="100"
      alt="avocado"
      />
      <div class="">
        <p class="product-name">${s}</p>

        <div class="product-descr">
          <p>Category: <span class="qwe">${a}</span></p>
          <p>Size: <span class="qwe">${c}</span></p>
        </div>

        <p class="product-price">$${o}</p>
      </div>
      <button class="cart-btn" type="button">
        <svg class="">
          <use href="./img/sprite.svg#icon-cross"></use>
        </svg>
      </button>
    </li>
    `).join("")}
//# sourceMappingURL=commonHelpers2.js.map
