import showProductCard from './modal';
import { addProduct, findProductInCart, removeProduct } from './manage-cart';
import icons from '../img/sprite.svg';

function createMarkup(arr) {
  const markup = `<ul class="card-container-list">${arr
    .map(item => {
      const productInBasket = findProductInCart(item._id);
      const categoryWithoutUnderscore = item.category.split('_').join(' ');

      return `
      <li class="photo-card-list" data-id="${item._id}">
        <a class="product-modal-list" href="#">
          <div class="img-container-list">
            <img class="product-image-list" src="${item.img}" alt="${
        item.name
      } photo" width=140 height=140 loading="lazy" />
          </div>

          <div class="product-info-list">
            <h3 class="product-name-list">${item.name}</h3>
            <div class="product-atributes-list">
              <p class="atributes-info-list">
                <span class="atributes-list">Category:</span> ${categoryWithoutUnderscore}
              </p>
              <p class="atributes-info-list">
                <span class="atributes-list">Size:</span> ${item.size}
              </p>
              <p class="atributes-info-list">
                <span class="atributes-list">Popularity:</span> ${
                  item.popularity
                }
              </p>
            </div>
          </div>
        </a>
        <div class="price-and-btn-list">
          <p class="product-price-list">$${item.price}</p>
          <button class="cart-btn-list" type="button" data-product-id="${
            item._id
          }">
            <svg class="list-cart-svg-list" width="18" height="18">
              <use href="${icons}#${
        productInBasket ? 'icon-check' : 'icon-white-basket'
      }"></use>
            </svg>
          </button>
        </div> 
      </li>
  `;
    })
    .join('')}</ul>`;

  return markup;
}

// <use href="${icons}#icon-white-basket"></use>

function setCartButtonEventListeners(arr) {
  document.querySelectorAll('.cart-btn-list').forEach(button => {
    button.addEventListener('click', event => {
      event.stopPropagation();
      const productId = event.currentTarget.dataset.productId;
      const product = arr.find(p => p._id === productId);
      const isInCart = findProductInCart(productId);
      if (isInCart) {
        removeProduct(productId);
        updateCartButtonIcons(productId);
      } else {
        addProduct(product);
        updateCartButtonIcons(productId);
      }
    });
  });
}

function updateCartButtonIcons(id) {
  const button = document.querySelector(`[data-product-id='${id}']`);
  if (!button) return;
  const productInCart = findProductInCart(id);

  if (productInCart) {
    button.innerHTML = `
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${icons}#icon-check"></use>
        </svg>
      `;
  } else {
    button.innerHTML = `
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${icons}#icon-white-basket"></use>
        </svg>
      `;
  }
}

function setListeners() {
  // Opening modal window -------------------------------------
  const selectedCard = document.querySelectorAll('.photo-card-list');
  selectedCard.forEach(li => {
    li.addEventListener('click', event => {
      event.preventDefault();
      showProductCard(li.dataset.id);
    });
  });
}

export {
  createMarkup,
  setCartButtonEventListeners,
  updateCartButtonIcons,
  setListeners,
};

// -------------------------------------------------------
// Scroll Up
const btnTop = document.querySelector('#myBtn');

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
  btnTop.addEventListener('click', topFunction);
}

function topFunction() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

window.onscroll = scrollFunction;
window.onload = scrollFunction;
