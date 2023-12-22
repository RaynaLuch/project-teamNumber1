import axios from 'axios';
import SlimSelect from 'slim-select';
// import '/node_modules/slim-select/dist/slimselect.css';

const filtersSelect = document.querySelector('.filters-select');
console.log(filtersSelect);
//Додаємо початкові значення змінних у локальне сховище
const filterParams = {
  keyword: null,
  category: null,
  page: 1,
  limit: 6,
};
localStorage.setItem('filterParams', JSON.stringify(filterParams));

//функція запиту на сервер

function fetchFoods() {
  return axios
    .get('https://food-boutique.b.goit.study/api/products/categories')
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log('Проблема при запиті на сервер');
      throw new Error(error);
    });
}
// console.log(fetchFoods());
//Функція опрацювання даних із серверу та відмальовування іх в селект
fetchFoods()
  .then(resolve => {
    //   console.log(resolve.data);
    const selectMarkup =
      resolve.data.map(item => `<option>${item}</option>`).join('') +
      `<option>Show all</option>`;
    filtersSelect.insertAdjacentHTML('beforeend', selectMarkup);
    //   new SlimSelect({
    //     select: '.filters-select',
    //   });
  })
  .catch(error => {
    console.log('Проблема при опрацювання даних із серверу', error);
  });

//Відслухаємо що натиснув користувач

filtersSelect.addEventListener('change', handleSelection);

//Функція визначення того, що обрав користувач та відправки даних на сервер

function handleSelection(event) {
  filterParams.category = event.currentTarget.value;
  if (filterParams.category === 'Show all') {
    filterParams.category = null;
  }
  //   console.log(filterParams.category);
  localStorage.setItem('filterParams', JSON.stringify(filterParams));
}
