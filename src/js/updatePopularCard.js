import icons from '../img/sprite.svg';

export default function updatePopularCard(id, isInCart) {
  const popularList = document.querySelector('.popular-product-list');
  const cardEl = popularList.querySelector(`[data-id="${id}"]`);
  if (!cardEl) {
    return;
  }
  if (isInCart) {
    cardEl.classList.add('product-preview--in-cart');
  } else {
    cardEl.classList.remove('product-preview--in-cart');
  }
  const buttonEl = cardEl.children[1].children[0].children[1];
  buttonEl.children[0].children[0].setAttribute(
    'href',
    `${icons}#${isInCart ? 'icon-check' : 'icon-cart'}`
  );
}
