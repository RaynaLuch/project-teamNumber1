import axios from 'axios';

const userEmailsArray =
  JSON.parse(localStorage.getItem('userEmailsArray')) || [];

const form = document.querySelector('.footer-form');
const modalEmailFooter = document.querySelector('.wrong-email-footer');
const modalSendsuccess = document.querySelector('.footer-modal-w-success');
const modalSendfailure = document.querySelector('.footer-modal-w-failure');
const emailInputFooter = form.querySelector('input[type=email]');
const sendBtnFooter = form.querySelector('button[type=submit]');
const closeBtnSuccessFooter = document.querySelector(
  '.footer-close-success-margin'
);
const closeBtnFailureFooter = document.querySelector(
  '.footer-close-failure-margin'
);
const closeBtnEmailFooter = document.querySelector(
  '.footer-close-email-margin'
);
const modalSection = document.querySelector('.modal-section');

const isValidEmail = email => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

sendBtnFooter.addEventListener('click', function (event) {
  event.preventDefault();

  const userEmail = emailInputFooter.value;
  if (!isValidEmail(userEmail)) {
    emailInputFooter.value = '';
    modalEmailFooter.classList.add('visibility');
    modalSection.classList.add('modal-subscribing-footer');
    return;
  }

  createOrder();
});

const addUserEmail = () => {
  const userEmail = emailInputFooter.value;

  if (userEmailsArray.includes(userEmail)) {
    emailInputFooter.value = '';
    modalSendfailure.classList.add('visibility');
    modalSection.classList.add('modal-subscribing-footer');
  } else {
    userEmailsArray.push(userEmail);
    // console.log('Users who have already subscribed:', userEmailsArray);

    localStorage.setItem('userEmailsArray', JSON.stringify(userEmailsArray));
  }
};

const createOrder = async () => {
  try {
    const apiUrl = 'https://food-boutique.b.goit.study/api/subscription';
    addUserEmail();

    const postToAdd = {
      email: `${emailInputFooter.value}`,
    };

    const response = await axios.post(apiUrl, postToAdd);

    modalSendsuccess.classList.add('visibility');
    modalSection.classList.add('modal-subscribing-footer');
    emailInputFooter.value = '';
  } catch (error) {
    console.error('Error sending request:', error.message);
  }
};
closeBtnFailureFooter.addEventListener('click', function (event) {
  modalSection.classList.remove('modal-subscribing-footer');
  modalSendfailure.classList.remove('visibility');
});
closeBtnEmailFooter.addEventListener('click', function (event) {
  modalSection.classList.remove('modal-subscribing-footer');
  modalEmailFooter.classList.remove('visibility');
});

closeBtnSuccessFooter.addEventListener('click', function (event) {
  modalSection.classList.remove('modal-subscribing-footer');
  modalSendsuccess.classList.remove('visibility');
});

const dynamicImage = document.querySelector('.footer-modal-w-img');
const breakpointWidth = 768;

function updateImage() {
  if (window.innerWidth <= breakpointWidth) {
    dynamicImage.src =
      'https://github.com/RaynaLuch/project-teamNumber1/blob/main/src/img/rectangle-mobile.png?raw=true';
  } else {
    dynamicImage.src =
      'https://github.com/RaynaLuch/project-teamNumber1/blob/main/src/img/rectangle.png?raw=true';
  }
}

updateImage();

window.addEventListener('resize', updateImage);

// function to clear the local storage
//
// const clearUserEmailsArray = () => {
//   userEmailsArray.splice(0, userEmailsArray.length);
//   localStorage.removeItem('userEmailsArray');
//   console.log('userEmailsArray has been cleared:', userEmailsArray);
// };
//
// clearUserEmailsArray();
