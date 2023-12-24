const BASE_URL = `https://food-boutique.b.goit.study/api`;
const END_POINT = `/products`;
const productsContainer = document.querySelector(`.products-container`);

let page = 1;

async function fetchData() {
  try {
    const data = await serviceProducts();
    if (data.results) {
      console.log(data);
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
        <img class="product-img" src="${img}" alt="${name} width="1000px" />
        <div class="product-info">
          <h3>${name}</h3>
          <div class="product-description">
            <p><span>Category:</span> ${category}</p>
            <p><span>Size:</span> ${size}</p>
            <p><span>Popularity:</span> ${popularity}</p>
          </div>
          <div class="product-forsale">
            <p class="product-price">$${price}</p>
            <div class="carts-svg-box">
              <svg width="18" height="18">
                <use href="./img/sprite.svg#icon-white-basket"></use>
              </svg>
            </div>
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
  console.log(event);
  showProductCard('640c2dd963a319ea671e383b');
}

// showProductCard('640c2dd963a319ea671e383b');
