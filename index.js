var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newObj = {itemName: item, itemPrice: Math.floor(Math.random() * 100)};
 cart.push(newObj);
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (!cart.length) {
    return "Your shopping cart is empty."
  }

  const itemsAndPrices = []

  for (let i = 0; i < cart.length; i++) {
    itemsAndPrices.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }

  return `In your cart, you have ${itemsAndPrices.join(', ')}.`
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
