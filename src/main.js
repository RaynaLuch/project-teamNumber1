import './js/carts';
import './js/discount.js';
import './js/footer.js';

import showProductCard from './js/modal.js';
const testModalBtn = document.querySelector('#test');
testModalBtn.addEventListener('click', () =>
  showProductCard('640c2dd963a319ea671e383b')
);
