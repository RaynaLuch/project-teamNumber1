import axios from 'axios';

const BASE_URL = 'https://food-boutique.b.goit.study/api';

const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');

closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle('is-hidden');
}

export default async function showProductCard(id) {
  let response;
  try {
    response = await axios(BASE_URL + '/products/' + id);
    console.log(response);
    toggleModal();
  } catch (error) {
    console.log(error);
  }
}
