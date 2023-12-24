import axios from "axios";

const discount = document.querySelector(".carts-discount");

fetchDiscountProducts();
 
async function fetchDiscountProducts() {
    const { data } = await axios.get("https://food-boutique.b.goit.study/api/products/discount");

    const result = data.sort((a, b) => b.popularity - a.popularity).slice(0, 2);
 return result;

}       
createDiscountMarkup();
async function createDiscountMarkup() {
    const data = await fetchDiscountProducts();
    const markup = data.map(({ img, is10PercentOff, price, name }) => `<li class="product-card"><img class="product-img" src="${img}" alt="${name}"/><div class="dis-card-description"><p class="dis-card-name">${name}</p><p class="dis-card-price">${price}</p><div class="carts-svg-box">
              <svg width="18" height="18">
                <use href="./img/sprite.svg#icon-white-basket"></use>
              </svg>
            </div></div></li>`).join('');
    
    const container = document.createElement('div');
    container.classList.add("container");

    const title = document.createElement('h2');
    title.classList.add("discount-title");
    title.innerText ="Discount products";

    const ul = document.createElement('ul');
    ul.classList.add("discount-list");
    ul.innerHTML = markup;
    container.append(title);
    container.append(ul);
    

    discount.append(container); 
     

}
