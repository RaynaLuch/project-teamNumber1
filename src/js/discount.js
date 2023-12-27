import axios from "axios";
import icons from '../img/sprite.svg';
import showProductCard from "./modal";


const discount = document.querySelector(".carts-discount");

fetchDiscountProducts();
 
async function fetchDiscountProducts() {
  const { data } = await axios.get("https://food-boutique.b.goit.study/api/products/discount");

  // const firstItem = data[Math.floor(Math.random() * data.length)];

  // const secondItem = data[Math.floor(Math.random() * data.length)];
  // const result = [firstItem, secondItem];

  //   const result = data.sort((a, b) => b.popularity - a.popularity).slice(0, 2);
  //  return result;

  const result = data.sort(() => Math.random() - 0.5).slice(0, 2);
    return result;
}
     
createDiscountMarkup();

async function createDiscountMarkup() {
    const data = await fetchDiscountProducts();
  const markup = data.map(({ img, is10PercentOff, price, name, _id }) => {
      const editedName = name.split("").slice(0, 11).join("") + "...";
      
    return (`<li data-id="${_id}"class="dis-product-card"><img class="dis-product-img" src="${img}" alt="${name}"/><div class="dis-card-description"><p class="dis-card-name">${name.split("").length > 11 ? editedName: name}</p><div class="price-btn-list">
        <p class="product-price-list">$${price}</p>
        <button class="cart-btn-list" type="button" data-product-id="${_id}">
          <svg class="list-cart-svg-list" width="18" height="18">
            <use href="${icons}#icon-white-basket"></use>
          </svg></button>
      </div></div></div>${is10PercentOff?`<svg class="discount-icon"><use href="${icons}#icon-discount"></use></svg>`:null}</li>`)}).join('');
  
    
    const container = document.createElement('div');
    container.classList.add("dis-container");

    const title = document.createElement('h2');
    title.classList.add("discount-title");
    title.innerText ="Discount products";

    const ul = document.createElement('ul');
    ul.classList.add("discount-list");
  ul.innerHTML = markup;
  
  container.append(title);
  container.append(ul);

  const svgDiscount = document.createElement('svg');


  const listItems = ul.querySelectorAll(".dis-product-card");
  listItems.forEach((li) => {
    li.addEventListener("click", () => {
      showProductCard(li.dataset.id)

    })
   })
  
    discount.append(container); 
     
}

