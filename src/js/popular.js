import axios from 'axios';
import showProductCard from './modal';
import { addProduct, findProductInCart } from './manage-cart';

const BASE_URL = 'https://food-boutique.b.goit.study/api/products/popular';
const popularContainer = document.querySelector('.carts-popular');

const popularTitle = document.createElement('h2');
popularTitle.textContent = 'Popular products';
popularContainer.appendChild(popularTitle);

const popularList = document.createElement('ul');
popularList.classList.add('popular-product-list');
popularContainer.appendChild(popularList);

export function updateItemOnCartChange(id, isInCart) {
  const cardEl = popularList.querySelector(`[data-id]="${id}"`);
  if (isInCart) {
    cardEl.classList.add('product-preview--in-cart');
  } else {
    cardEl.classList.remove('product-preview--in-cart');
  }
  if (!cardEl) {
    return;
  }
  const buttonEl = cardEl.children[1].children[0].children[1];
  buttonEl.children[0].children[0].setAttribute(
    'href',
    `./img/sprite.svg#${isInCart ? 'icon-check' : 'icon-cart'}`
  );
}

function createImageCard(product) {
  if (!product) {
    console.error('Помилка');
    return null;
  }
  const inCart = findProductInCart(product.id);
  const card = document.createElement('li');
  card.classList.add('product-preview');
  const button = document.createElement('button');
  button.onclick = e => {
    e.stopPropagation();
    addProduct(product);
  };
  button.className = 'product-preview__cart-btn';
  button.innerHTML = `
    <svg>
      <use href="./img/sprite.svg#${inCart ? 'icon-check' : 'icon-cart'}">
      </use>
    </svg>`;
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
