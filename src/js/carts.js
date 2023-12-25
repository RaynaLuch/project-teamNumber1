const BASE_URL = `https://food-boutique.b.goit.study/api`;
const END_POINT = `/products`;
const productsContainer = document.querySelector(`.products-container`);

let page = 1;

async function fetchData() {
  try {
    const data = await serviceProducts();
    if (data.results) {
      // console.log(data);
      productsContainer.innerHTML = createMarkup(data.results);
    } else {
      console.error(`No results found in the response data.`);
    }
  } catch (error) {
    console.error(`Error fetching products:`, error);
  }
}

async function serviceProducts() {
  const queryParams = new URLSearchParams({
    page: page,
    limit: 9,
  });

  const response = await fetch(`${BASE_URL}${END_POINT}?${queryParams}`);

  if (!response.ok) {
    throw new Error(response.status);
  }

  return response.json();
}

function createMarkup(arr) {
  return arr
    .map(
      ({ img, name, price, category, size, popularity }) => `
    <ul>
      <li class="product-card">
        <div class="carts-img-box">
          <img class="product-img" src="${img}" alt="${name}" />
        </div>
        <div class="product-info">
          <h3>${name}</h3>
          <div class="product-description">
            <p><span>Category:</span> ${category}</p>
            <p><span>Size:</span> ${size}</p>
            <p><span>Popularity:</span> ${popularity}</p>
          </div>
          <div class="product-forsale">
            <p class="product-price">$${price}</p>
            <button class="carts-svg-box" type="button">
              <svg width="18" height="18">
                <use href="./img/sprite.svg#icon-white-basket"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>
    </ul>
  `
    )
    .join('');
}

fetchData();

// Opening modal window -------------------------------------

import showProductCard from './modal';

const selectedCard = document.querySelector('.products-container');
selectedCard.addEventListener('click', handleClickOpen);

function handleClickOpen(event) {
  event.preventDefault();
  showProductCard(response.data._id);
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
