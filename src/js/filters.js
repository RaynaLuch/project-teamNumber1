import axios from 'axios';
import SlimSelect from 'slim-select';
// import 'slim-select/dist/slimselect.css';
// import './node_modules/slim-select/dist/slimselect.css';

const filtersSelect = document.querySelector('.filters-select');
const filtersInput = document.querySelector('.filtersInput');
const filtersBtn = document.querySelector('.filtersBtn');
let ProductsList;

//Додаємо початкові значення змінних у локальне сховище
const filterParams = {
  keyword: null,
  category: null,
  page: 1,
  limit: 9,
};
localStorage.setItem('filterParams', JSON.stringify(filterParams));

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

    return response.data.results;
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
    new SlimSelect({
      select: '.filters-select',
    });
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

async function handleSelection(event) {
  filterParams.category = event.currentTarget.value;
  if (filterParams.category === 'Show all') {
    filterParams.category = null;
  } else {
    localStorage.setItem('filterParams', JSON.stringify(filterParams));
  }

  ProductsList = await getProductsListInServer(filterParams);
  console.log(ProductsList);
}
//Функція яка зчинує введені дані користувачем з інпута та зберігає їх у локальне сховище
async function handleBtn() {
  const inputInformation = filtersInput.value;
  if (!inputInformation.trim()) {
    filterParams.keyword = null;
  } else {
    filterParams.keyword = inputInformation;
  }
  localStorage.setItem('filterParams', JSON.stringify(filterParams));
  ProductsList = await getProductsListInServer(filterParams);
  console.log(ProductsList);
}
