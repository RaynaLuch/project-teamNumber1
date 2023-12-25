const list = document.querySelector(".product-list")
const sub = document.querySelector(".sub-container")


const items = [{
  img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",
  productName: "Ackee",
  category: 'Fresh_Produce',
  size: '16 oz',
  price: 8.99,
},
{img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3860.png',
  productName: 'Allspice',
  category: 'Pantry_Item',
  size: '1.5oz',
  price: 2.99,
},
{img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3861.png',
  productName: 'Almond Extract',
  category: 'Pantry_Items',
  size: '2oz',
  price: 4.99,
}
]
    
function localS() {
  localStorage.setItem('basket', JSON.stringify(items));
}
localS();

function getItems() {
  const item = localStorage.getItem('basket');
  const parsedItems = JSON.parse(item);
  return parsedItems
}

function createPage() {
  if (localStorage.length !== 0) {
    list.insertAdjacentHTML('beforeend', createImageMarkup(getItems()));
  }
  }

createPage();

function createImageMarkup(array) {
  return array
    .map(
      ({ img, productName, category, size, price }) => `
      <li class="product-cart">
      <img
        class="product-picture"
        src="${img}"
        width="100"
        height="100"
      alt="avocado"
      />
      <div class="product-info">
        <p class="product-name">${productName}</p>

        <div class="product-descr">
          <p>Category: <span class="qwe">${category}</span></p>
          <p>Size: <span class="qwe">${size}</span></p>
        </div>

        <p class="product-price">$${price}</p>
      </div>
      <button class="cart-btn" type="button">
        <svg class="">
          <use href="./img/sprite.svg#icon-cross"></use>
        </svg>
      </button>
    </li>
    `
    )
    .join('');
}

function getLocalStorage() {
    const products = localStorage.getItem("basket")
    const parsedProducts = JSON.parse(products)
    console.log(parsedProducts);
    if (parsedProducts === null) {
      console.log("hi");
    }
    
}

getLocalStorage()


