import axios from 'axios';
import { getCart, removeProduct, removeAllProducts} from "./manage-cart"
import icons from '../img/sprite.svg';
import image from '../img/yellow-shopping-basket.png'
import './modal';

const list = document.querySelector(".product-list")
const sub = document.querySelector(".sub-container")
const deleteBtn = document.querySelector(".delete-btn")
const count = document.querySelector(".count")
const totalPriceAmount = document.querySelector(".change")
const orderBtn = document.querySelector(".order-form")
const BASE_URL = "https://food-boutique.b.goit.study/api/orders";

const emptyBasket = `<div class="empty">
<img src="${image}" alt="empty basket" class="empty-picture">
<h2 class="empty-main-text">Your basket is <a href="../index.html" class="empty-link">empty...</a> </h2>
<p class="empty-sub-text">Go to the main page to select your favorite products and add them to the cart.</p>
</div>`

function createPage() {
  const products = localStorage.getItem("basket")
  const parsedProducts = JSON.parse(products)
  if (parsedProducts !== null) {
        const numCount = parsedProducts.length
        list.insertAdjacentHTML('beforeend', createImageMarkup(getCart()));
        count.textContent = numCount;
        totalPriceAmount.textContent = totalPrice(parsedProducts);
      return
      } 
        count.textContent = 0;
        sub.innerHTML = emptyBasket;
}

createPage();

list.addEventListener('click', deleteProduct) 

function deleteProduct(event) {
  list.innerHTML = "";
  const currentProduct = event.target.closest(".product-cart")
  const id = currentProduct.dataset.id;
  removeProduct(id)
  const products = localStorage.getItem("basket")
  const parsedProducts = JSON.parse(products)
  console.log(parsedProducts.length);
  if (parsedProducts.length === 0) {
    removeAllProducts()
}
  createPage()
}

deleteBtn.addEventListener("click",removeProducts)

function removeProducts() {
  removeAllProducts()
  createPage()
}

function totalPrice(array) {
  let amm = 0;
  array.map((({ price }) => amm += price))
  return amm.toFixed(2);
}

// MARKUP function
function createImageMarkup(array) {
  return array
    .map(
      ({ _id, img, name, category, size, price }) => `
      <li class="product-cart" data-id="${_id}">
      <img
        class="product-picture"
        src="${img}"
        width="100"
        height="100"
      alt="avocado"
      />
      <div class="">
        <p class="product-name">${name}</p>

        <div class="product-descr">
          <p>Category: <span class="qwe">${category}</span></p>
          <p>Size: <span class="qwe">${size}</span></p>
        </div>

        <p class="product-price">$${price}</p>
      </div>
      <button class="cart-btn" type="button">
        <svg class="">
          <use href="${icons}#icon-cross"></use>
        </svg>
      </button>
    </li>
    `
    )
    .join('');
}

orderBtn.addEventListener("submit", placeOrder)

function placeOrder(event) {
  event.preventDefault();
  const productList = getCart()
  const productsToBuy = getId(productList)
  axios.post(BASE_URL, {
    email: event.target.elements.email.value,
    products: productsToBuy
  })
  .then(res => { 
    if (res.status === 201) {
      removeProducts()
      toggleModalShCart()
    }})
  .catch(error => console.log(error.message))
}

function getId(array) {
 return array.map(item => ({
    productId: item._id,
    amount: 1
 }))
}
