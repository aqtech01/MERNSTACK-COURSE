"use strict";

let products = [
  { id: 1, price: 100, discount: 0.1 },
  { id: 2, price: 200, discount: 0.1 },
  { id: 3, price: 300, discount: 0.1 },
  { id: 4, price: 400, discount: 0.1 },
  { id: 5, price: 500, discount: 0.05 },
];

// Initially, the cart is empty
let cart = [];
// Function to calculate total after discount
const calculateTotal = (price, discount, quantity) =>
  price * quantity * (1 - discount);

function addToCart(cart, product) {
  // Create a shallow copy of the cart to avoid mutating the original cart
  const cartItems = cart.slice();

  let isExist = false;
  let existingProductIndex = -1;

  // Check if the product already exists in the cart
  for (let index = 0; index < cartItems.length; index++) {
    const element = cartItems[index];
    if (element.id === product.id) {
      isExist = true;
      existingProductIndex = index;
      break;
    }
  }

  if (!isExist) {
    // Case 1: Product does not exist in the cart, add it with qty = 1 and total
    const newProduct = {
      ...product, // Spread operator to avoid mutating the original product object
      qty: 1, // Set the initial quantity to 1
      total: calculateTotal(product.price, product.discount, 1), // Calculate the total
    };
    cartItems.push(newProduct);
  } else {
    // Case 2: Product already exists, increment the quantity and recalculate total
    const existingProduct = cartItems[existingProductIndex];
    const updatedProduct = {
      ...existingProduct, // Spread to avoid mutating
      qty: existingProduct.qty + 1, // Increment the quantity
      total: calculateTotal(
        existingProduct.price,
        existingProduct.discount,
        existingProduct.qty + 1
      ), // Recalculate the total
    };
    // Replace the old product with the updated one
    cartItems[existingProductIndex] = updatedProduct;
  }

  // Return the new cart array (immutability is preserved)
  return cartItems;
}

// Example usage:
let selectedProduct = products[3];
let newSelectedProduct = products[4];
cart = addToCart(cart, selectedProduct);
cart = addToCart(cart, selectedProduct);
cart = addToCart(cart, newSelectedProduct);

// console.log(cart);

cart = addToCart(cart, selectedProduct); // Adding the same product again

const removeFromCart = (cart, product) => {
  let cartItems = cart.slice();
  let existingProductIndex = -1;

  if (cartItems.length === 0) {
    console.log("Cart is Empty");
    return cartItems; // Return the empty cart
  } else {
    for (let index = 0; index < cartItems.length; index++) {
      const element = cartItems[index];
      if (element.id === product.id) {
        existingProductIndex = index;
        break;
      }
    }

    if (
      existingProductIndex !== -1 &&
      cartItems[existingProductIndex].qty > 1
    ) {
      // Decrement the quantity and update the total
      cartItems[existingProductIndex] = {
        ...cartItems[existingProductIndex],
        qty: cartItems[existingProductIndex].qty - 1,
        total: calculateTotal(
          cartItems[existingProductIndex].price,
          cartItems[existingProductIndex].discount,
          cartItems[existingProductIndex].qty - 1
        ),
      };
    } else if (
      existingProductIndex !== -1 &&
      cartItems[existingProductIndex].qty === 1
    ) {
      cartItems.splice(existingProductIndex, 1);
    }
  }

  return cartItems; // Return the updated cart
};

// Cart with a product having quantity of 2

let decreaseSelectedProduct = products[3]; // Product with id 4
let decrementCart = removeFromCart(cart, decreaseSelectedProduct);
console.log(decrementCart); // Should decrement the quantity and update the total

const incrementCartItems = (cart, product) => {
  const cartItems = cart.slice();
  let existingProductIndex = -1;
  let isExist = false;
  if (cartItems.length === 0) {
    const updatedProduct = {
      ...product,
      qty: 1,
      total: calculateTotal(product.price, product.discount, 1),
    };
    cartItems.push(updatedProduct);
  } else {
    for (let index = 0; index < cartItems.length; index++) {
      const element = cartItems[index];
      if (element.id === product.id) {
        isExist = true;
        existingProductIndex = index;
        break;
      }
    }
    if (isExist) {
      const existingProduct = cartItems[existingProductIndex];
      const updateProduct = {
        ...existingProduct,
        qty: existingProduct.qty + 1,
        total: calculateTotal(
          existingProduct.price,
          existingProduct.discount,
          existingProduct.qty
        ),
      };
      cartItems[existingProductIndex] = updateProduct;
    }
  }
  return cartItems;
};
