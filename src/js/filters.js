import axios from 'axios';
import SlimSelect from 'slim-select';
import '../../node_modules/slim-select/dist/slimselect.css';
import {
  createMarkup,
  setCartButtonEventListeners,
  updateCartButtonIcons,
  setListeners,
} from './carts.js';
import { renderProducts } from './pagination.js';

const FILTER_STORAGE = 'productFilters';

const filtersSelect = document.querySelector('.filters-select');
const filtersInput = document.querySelector('.filtersInput');
const filtersBtn = document.querySelector('.filtersBtn');
let ProductsList;

const productsListContainer = document.getElementById('products-container');

//Додаємо початкові значення змінних у локальне сховище
const filterParams = {
  keyword: null,
  category: null,
  page: 1,
  limit: 9,
};
//localStorage.setItem('filterParams', JSON.stringify(filterParams));

function getFilters() {
  const savedFilters = localStorage.getItem(FILTER_STORAGE);
  return savedFilters
    ? JSON.parse(savedFilters)
    : { keyword: null, category: null, page: 1, limit: 6 };
}

function saveFilters(filters) {
  localStorage.setItem(FILTER_STORAGE, JSON.stringify(filters));
}

//функція запиту на сервер
async function fetchFoods() {
  try {
    const response = await axios.get(
      'https://food-boutique.b.goit.study/api/products/categories'
    );
    return response.data;
  } catch (error) {
    console.log('Проблема при запросе на сервер');
    throw new Error(error);
  }
}
// функція яка відправляє дані на сервер
async function getProductsListInServer(filterParams) {
  const { keyword, category, page, limit } = filterParams;

  try {
    let response;

    if (keyword === null && category === null) {
      response = await axios.get(
        `https://food-boutique.b.goit.study/api/products?page=${page}&limit=${limit}`
      );
    } else if (keyword === null) {
      response = await axios.get(
        `https://food-boutique.b.goit.study/api/products?category=${category}&page=${page}&limit=${limit}`
      );
    } else if (category === null) {
      response = await axios.get(
        `https://food-boutique.b.goit.study/api/products?keyword=${keyword}&page=${page}&limit=${limit}`
      );
    } else {
      response = await axios.get(
        `https://food-boutique.b.goit.study/api/products?keyword=${keyword}&category=${category}&page=${page}&limit=${limit}`
      );
    }

    return response;
  } catch (error) {
    console.log('Помилка на сервері при пошуку продуктів', error);
    throw new Error(error);
  }
}
//Функція опрацювання даних із серверу та відмальовування іх в селект
async function fetchData() {
  try {
    const resolve = await fetchFoods();
    const selectMarkup =
      resolve.map(item => `<option>${item}</option>`).join('') +
      `<option>Show all</option>`;
    filtersSelect.insertAdjacentHTML('beforeend', selectMarkup);

    const ss = new SlimSelect({
      select: '.filters-select',
    });

    const curFilters = getFilters();
    filtersInput.value = curFilters.keyword;
    ss.setSelected(curFilters.category);
  } catch (error) {
    console.log('Проблема при обработке данных с сервера', error);
  }
}

fetchData();
//Відслухаємо що натиснув користувач в селекті
filtersSelect.addEventListener('change', handleSelection);
//Відслуховуємо, що користувач клікнув на кнопку відправки
filtersBtn.addEventListener('click', handleBtn);

//Функція визначення того, що обрав користувач та відправки даних на сервер

export async function handleSelection(event) {
  const selectedCategory = event.currentTarget.value;
  const currentFilters = getFilters();

  if (selectedCategory === 'Show all') {
    currentFilters.category = null;
  } else {
    currentFilters.category = selectedCategory;
    //localStorage.setItem('filterParams', JSON.stringify(filterParams));
  }
  saveFilters(currentFilters);

  ProductsList = await getProductsListInServer(currentFilters);
  renderProducts();

  // productsListContainer.innerHTML = createMarkup(ProductsList.data.results);
  // setCartButtonEventListeners(ProductsList.data.results);
  // setListeners();
  console.log(ProductsList.data.results);
}
//Функція яка зчинує введені дані користувачем з інпута та зберігає їх у локальне сховище
export async function handleBtn() {
  const inputInformation = filtersInput.value;
  const currentFilters = getFilters();

  if (!inputInformation.trim()) {
    currentFilters.keyword = null;
  } else {
    currentFilters.keyword = inputInformation;
  }
  //localStorage.setItem('filterParams', JSON.stringify(filterParams));
  saveFilters(currentFilters);
  renderProducts();
  // ProductsList = await getProductsListInServer(currentFilters);
  // productsListContainer.innerHTML = createMarkup(ProductsList.data.results);
  // setCartButtonEventListeners(ProductsList.data.results);
  // setListeners();
  console.log(ProductsList.data.results);
}

async function getFilteredProductList() {
  const curFilters = getFilters();
  console.log('filters', curFilters);
  const products = await getProductsListInServer(curFilters);
  return products;
}

export { getFilters, saveFilters, getFilteredProductList };
