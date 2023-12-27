import { setNumItems } from './header.js';
import updatePopularCard from './updatePopularCard.js';

const STORAGE = 'basket';

function addProduct(product) {
  const shoppingCart = getCart();
  shoppingCart.push(product);
  localStorage.setItem(STORAGE, JSON.stringify(shoppingCart));
  setNumItems();
  try {
    updatePopularCard(product._id, true);
  } catch (error) {}
}

function findProductInCart(id) {
  const shoppingCart = getCart();
  return shoppingCart.find(p => p._id === id);
}

function getCart() {
  let shoppingCart;
  let shoppingCartStr = localStorage.getItem(STORAGE);
  if (!shoppingCartStr) {
    shoppingCart = [];
  } else {
    shoppingCart = JSON.parse(shoppingCartStr);
  }
  return shoppingCart;
}

function removeProduct(id) {
  let shoppingCart = getCart();
  shoppingCart = shoppingCart.filter(p => p._id !== id);
  localStorage.setItem(STORAGE, JSON.stringify(shoppingCart));
  setNumItems();
  try {
    updatePopularCard(id, false);
  } catch (error) {}
}

function removeAllProducts() {
  localStorage.removeItem(STORAGE);
  setNumItems();
}

export {
  addProduct,
  findProductInCart,
  removeProduct,
  removeAllProducts,
  getCart,
};
