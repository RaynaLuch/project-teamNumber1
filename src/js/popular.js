import axios from 'axios';
import { showProductCard } from './modal';

const BASE_URL = 'https://food-boutique.b.goit.study/api/products/popular';
const popularContainer = document.querySelector('.carts-popular');

function createImageCard(product) {
  if (!product) {
    console.error('Помилка');
    return null;
  }
  // const inCart = isInCart(product.id); //pseudocode
  const card = document.createElement('div');
  card.classList.add('product-preview');
  const button = document.createElement('button');
  button.onclick = () => {
    // addToCart(product._id); //pseudocode
  };
  // button.disabled = inCart;
  button.className = 'product-preview__cart-btn';
  // button.innerHTML = `
  //   <svg>
  //     <use href="../img/sprite.svg#${inCart ? 'icon-check' : 'icon-cart'}">
  //     </use>
  //   </svg>`;
  card.innerHTML = `
    <div class="product-preview__image-container">
      <img src="${product.img}" alt="${product.name}">
    </div>
    <div class="product-preview__info">
      <div class="product-preview__heading-wrapper">
        <h2 class="product-preview__heading">${product.name}</h2>
      </div>
      <div class="product-preview__description">
        <p class="product-preview__category"><span class="product-preview__sub-heading">Category:</span> ${product.category}</p>
        <p><span class="product-preview__sub-heading">Size: ${product.size}</span></p>
        <p><span class="product-preview__sub-heading">Popularity:</span> ${product.popularity}</p>
      </div>
    </div>
  `;
  card.children[1].children[0].appendChild(button);
  card.onclick = () => {
    showProductCard(product._id);
  };
  return card;
}

async function fetchPopular() {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні даних: ', error);
    throw error;
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const products = await fetchPopular();
    console.log(products);

    products
      .sort((a, b) => b.popularity - a.popularity)
      .forEach(product => {
        const card = createImageCard(product);
        if (card) {
          popularContainer.appendChild(card);
        }
      });
  } catch (error) {
    console.error('Помилка при отриманні даних: ', error);
  }
});
