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
          <p>Category: ${category}</p>
          <p>Size: ${size}</p>
          <p>Popularity: ${popularity}</p>
          <p class="product-price">$${price}</p>
        </div>
      </li>
    </ul>
  `
    )
    .join('');
}

fetchData();
