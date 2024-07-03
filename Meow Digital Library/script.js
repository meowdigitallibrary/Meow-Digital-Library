// script.js

let cartCount = 0;

function addToCart(itemId, fileName) {
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;
  localStorage.setItem(`item${itemId}`, fileName);
}

document.getElementById('checkout-button').onclick = function() {
  window.location.href = 'checkout.html';
}
