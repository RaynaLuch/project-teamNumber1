import './js/carts';
import showProductCard from './js/modal.js';
const testModalBtn = document.querySelector('#test');
testModalBtn.addEventListener('click', () =>
  showProductCard('640c2dd963a319ea671e383b')
);
