import"./assets/styles-f02d5c18.js";const r=document.querySelector(".product-list");document.querySelector(".sub-container");const i=[{img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",productName:"Ackee",category:"Fresh_Produce",size:"16 oz",price:8.99},{img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3860.png",productName:"Allspice",category:"Pantry_Item",size:"1.5oz",price:2.99},{img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3861.png",productName:"Almond Extract",category:"Pantry_Items",size:"2oz",price:4.99}];function n(){localStorage.setItem("basket",JSON.stringify(i))}n();function p(){const t=localStorage.getItem("basket");return JSON.parse(t)}function d(){localStorage.length!==0&&r.insertAdjacentHTML("beforeend",g(p()))}d();function g(t){return t.map(({img:e,productName:s,category:c,size:o,price:a})=>`
      <li class="product-cart">
      <img
        class="product-picture"
        src="${e}"
        width="100"
        height="100"
      alt="avocado"
      />
      <div class="product-info">
        <p class="product-name">${s}</p>

        <div class="product-descr">
          <p>Category: <span class="qwe">${c}</span></p>
          <p>Size: <span class="qwe">${o}</span></p>
        </div>

        <p class="product-price">$${a}</p>
      </div>
      <button class="cart-btn" type="button">
        <svg class="">
          <use href="./img/sprite.svg#icon-cross"></use>
        </svg>
      </button>
    </li>
    `).join("")}function u(){const t=localStorage.getItem("basket"),e=JSON.parse(t);console.log(e),e===null&&console.log("hi")}u();
//# sourceMappingURL=commonHelpers2.js.map
