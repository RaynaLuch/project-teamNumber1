import icons from '../img/sprite.svg';

function createMarkup(arr) {
  const markup = `<ul class="card-container-list">${arr
    .map(item => {
      const categoryWithoutUnderscore = item.category.split('_').join(' ');

      return `
      <li class="photo-card-list">
        <a class="product-modal-list" href="#">
          <div class="img-container-list">
            <img class="product-image-list" src="${item.img}" alt="${item.name} photo" width=140 height=140 loading="lazy" />
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
                <span class="atributes-list">Popularity:</span> ${item.popularity}
              </p>
            </div>
          </div>
        </a>
        <div class="price-and-btn-list">
          <p class="product-price-list">$${item.price}</p>
          <button class="cart-btn-list" type="button" data-product-id="${item._id}">
            <svg class="list-cart-svg-list" width="18" height="18">
              <use href="${icons}#icon-white-basket"></use>
            </svg>
          </button>
        </div> 
      </li>
  `;
    })
    .join('')}</ul>`;

  setTimeout(() => {
    document.querySelectorAll('.cart-btn-list').forEach(button => {
      button.addEventListener('click', event => {
        const productId = event.currentTarget.dataset.productId;
        const product = arr.find(item => item._id === productId);
        if (product) {
          handleCartButtonClick(product, arr);
        } else {
          console.error('Product not found by ID:', productId);
        }
      });
    });
  }, 0);

  setCartButtonEventListeners(arr);
  return markup;
}

function setCartButtonEventListeners(arr) {
  document.querySelectorAll('.cart-btn-list').forEach(button => {
    button.addEventListener('click', event => {
      const productId = event.currentTarget.dataset.productId;
      handleCartButtonClick(productId, arr);
    });
  });
}

function updateCartButtonIcons() {
  const cart = getCart();
  document.querySelectorAll('.cart-btn-list').forEach(button => {
    const productId = button.dataset.productId;
    const productInCart = cart.find(item => item._id === productId);

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
  });
}

function getCart() {
  const savedCart = localStorage.getItem('shoppingCart');
  return savedCart ? JSON.parse(savedCart) : [];
}

export { createMarkup, setCartButtonEventListeners, updateCartButtonIcons };

// Opening modal window -------------------------------------

import showProductCard from './modal';

const selectedCard = document.querySelector('.products-container');
selectedCard.addEventListener('click', handleClickOpen);

function handleClickOpen(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'LI') {
    return;
  }
  // console.log(event.target);
  showProductCard(item._id);
}

// showProductCard('640c2dd963a319ea671e383b');

// -------------------------------------------------------

// Scroll Up

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('myBtn').style.display = 'block';
  } else {
    document.getElementById('myBtn').style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
