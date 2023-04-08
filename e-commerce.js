// Define products data
const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description of product 1",
    price: 9.99,
    image: "product1.jpg"
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description of product 2",
    price: 19.99,
    image: "product2.jpg"
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of product 3",
    price: 29.99,
    image: "product3.jpg"
  }
];

// Define cart data
let cart = [];

// Define functions for adding and removing products from the cart
function addToCart(productId) {
  // Check if the product is already in the cart
  const existingCartItem = cart.find(item => item.productId === productId);
  if (existingCartItem) {
    // If the product is already in the cart, increase its quantity
    existingCartItem.quantity++;
  } else {
    // If the product is not in the cart, add it with quantity 1
    cart.push({
      productId: productId,
      quantity: 1
    });
  }
}

function removeFromCart(productId) {
  // Find the index of the cart item with the given product ID
  const cartItemIndex = cart.findIndex(item => item.productId === productId);
  if (cartItemIndex !== -1) {
    // If the cart item exists, remove it
    cart.splice(cartItemIndex, 1);
  }
}

// Define a function for rendering the products
function renderProducts() {
  const productsContainer = document.querySelector(".products");
  productsContainer.innerHTML = "";
  products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <button onclick="addToCart(${product.id})">Add to cart</button>
      <span>$${product.price.toFixed(2)}</span>
    `;
    productsContainer.appendChild(productElement);
  });
}

// Define a function for rendering the cart
function renderCart() {
  const cartContainer = document.querySelector(".cart");
  cartContainer.innerHTML = "";
  if (cart.length === 0) {
    // If the cart is empty, show a message
    cartContainer.innerHTML = "<p>Your cart is empty</p>";
  } else {
    // If the cart is not empty, show the items and total price
    const cartItemsList = document.createElement("ul");
    cart.forEach(cartItem => {
      const cartItemElement = document.createElement("li");
      cartItemElement.innerHTML = `
        ${products.find(product => product.id === cartItem.productId).name} x ${cartItem.quantity}
        <button onclick="removeFromCart(${cartItem.productId})">Remove</button>
      `;
      cartItemsList.appendChild(cartItemElement);
    });
    cartContainer.appendChild(cartItemsList);
    const totalPriceElement = document.createElement("p");
    totalPriceElement.innerHTML = `Total price: $${calculateTotalPrice().toFixed(2)}`;
    cartContainer.appendChild(totalPriceElement);
  }
}

// Define a

