import axios from 'axios';
import { addProduct, findProductInCart, removeProduct } from './manage-cart.js';

const BASE_URL = 'https://food-boutique.b.goit.study/api';

const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');

const modalCartBtn = document.querySelector('.modal-cart-button');

function toggleModal() {
  modal.classList.toggle('is-hidden');
}

const modalImgField = document.querySelector('#modal-img');
const modalNameField = document.querySelector('#modal-name');
const modalCategoryField = document.querySelector('#modal-category');
const modalSizeField = document.querySelector('#modal-size');
const modalPopularityField = document.querySelector('#modal-popularity');
const modalDeskField = document.querySelector('#modal-desc');
const modalPriceField = document.querySelector('#modal-price');

export default async function showProductCard(id) {
  let response;
  try {
    response = await axios(BASE_URL + '/products/' + id);
    console.log(response);
    modalImgField.src = response.data.img;
    modalNameField.textContent = response.data.name;
    modalCategoryField.textContent = response.data.category;
    modalSizeField.textContent = response.data.size;
    modalPopularityField.textContent = response.data.popularity;
    modalDeskField.textContent = response.data.desc;
    modalPriceField.textContent = '$' + response.data.price;
    toggleModal();
    const removeProductHandler = event => {
      const product = response.data;
      removeProduct(product._id);
      modalCartBtn.removeEventListener('click', removeProductHandler);
      modalCartBtn.firstChild.textContent = 'Add to';
      modalCartBtn.addEventListener('click', addProductHandler);
    };
    const addProductHandler = event => {
      const product = response.data;
      addProduct(product);
      modalCartBtn.removeEventListener('click', addProductHandler);
      modalCartBtn.firstChild.textContent = 'Remove from';
      modalCartBtn.addEventListener('click', removeProductHandler);
    };

    if (findProductInCart(response.data._id)) {
      modalCartBtn.firstChild.textContent = 'Remove from';
      modalCartBtn.addEventListener('click', removeProductHandler);
    } else {
      modalCartBtn.firstChild.textContent = 'Add to';
      modalCartBtn.addEventListener('click', addProductHandler);
    }

    closeModalBtn.addEventListener('click', closeModalHandler);

    function closeModalHandler() {
      modalCartBtn.removeEventListener('click', addProductHandler);
      modalCartBtn.removeEventListener('click', removeProductHandler);
      closeModalBtn.removeEventListener('click', closeModalHandler);
      toggleModal();
    }
  } catch (error) {
    console.log(error);
  }
}
const closeModalBtnShCart = document.querySelector(
  '[data-modal-close-shopping-cart]'
);
const modalShCart = document.querySelector('[data-modal-shopping-cart]');

closeModalBtnShCart.addEventListener('click', toggleModalShCart);

function toggleModalShCart() {
  modalShCart.classList.toggle('is-hidden');
}

const orderModalBtn = document.querySelector('.order-btn');
orderModalBtn?.addEventListener('click', () => toggleModalShCart());
