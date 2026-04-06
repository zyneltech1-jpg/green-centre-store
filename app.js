/* =========================
   GREEN CENTRE APP.JS
========================= */

import { auth, db } from "./firebase.js"
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

/* =========================
   PRODUCTS
========================= */
const products = [
  {
    id: 1,
    name: "Kunlun Mountain Snow Chrysanthemum",
    price: 12000,
    category: "Liquid Supplements",
    image: "product8.jpg",
    description: "Natural wellness tea product for general body support."
  },
  {
    id: 2,
    name: "Longreen Chitin Softgel",
    price: 15000,
    category: "Supplements",
    image: "product9.jpg",
    description: "Softgel supplement designed for daily wellness support."
  },
  {
    id: 3,
    name: "Malaphoid Herbal Capsules",
    price: 10000,
    category: "Herbal Products",
    image: "product1.jpg",
    description: "Herbal capsule product for body wellness support."
  },
  {
    id: 4,
    name: "Diabetes Care Herbal Capsules",
    price: 12000,
    category: "Herbal Products",
    image: "product2.jpg",
    description: "Herbal support product for metabolic wellness."
  },
  {
    id: 5,
    name: "Athrilax",
    price: 14000,
    category: "Pain Relief",
    image: "product3.jpg",
    description: "Capsule product for joint and body comfort support."
  },
  {
    id: 6,
    name: "Golden Six Pills",
    price: 18000,
    category: "Supplements",
    image: "product4.jpg",
    description: "Supplement pill product for general daily support."
  },
  {
    id: 7,
    name: "Stroke Caps",
    price: 11000,
    category: "Herbal Products",
    image: "product5.jpg",
    description: "Herbal capsule product for circulatory wellness support."
  },
  {
    id: 8,
    name: "Venecare 40 (Std Care)",
    price: 12000,
    category: "Herbal Products",
    image: "product6.jpg",
    description: "Herbal capsule product for wellness support."
  },
  {
    id: 9,
    name: "Men's Formula Herbal Capsules",
    price: 13000,
    category: "Herbal Products",
    image: "product7.jpg",
    description: "Herbal formula designed for men's wellness support."
  },
  {
    id: 10,
    name: "Ulcer Care Herbal Capsules",
    price: 11000,
    category: "Herbal Products",
    image: "product10.jpg",
    description: "Herbal product for digestive wellness support."
  },
  {
    id: 11,
    name: "Ganoderma Lucidum Spore Powder",
    price: 17000,
    category: "Supplements",
    image: "product11.jpg",
    description: "Capsule supplement for immune and wellness support."
  },
  {
    id: 12,
    name: "Natural Antibiotics (Dukun Care)",
    price: 10000,
    category: "Herbal Products",
    image: "product12.jpg",
    description: "Natural herbal support product for everyday wellness."
  },
  {
    id: 13,
    name: "Eye Care Herbal Capsules",
    price: 10000,
    category: "Herbal Products",
    image: "product13.jpg",
    description: "Herbal capsule product for eye wellness support."
  },
  {
    id: 14,
    name: "Stop Piles Herbal Capsules",
    price: 10000,
    category: "Herbal Products",
    image: "product14.jpg",
    description: "Herbal support product for digestive comfort."
  },
  {
    id: 15,
    name: "Hyperthyroidism Capsule",
    price: 12500,
    category: "Herbal Products",
    image: "product15.jpg",
    description: "Capsule product for thyroid wellness support."
  },
  {
    id: 16,
    name: "EH GinBiloba Extra Strength",
    price: 14000,
    category: "Supplements",
    image: "product16.jpg",
    description: "Supplement designed to support memory and brain wellness."
  },
  {
    id: 17,
    name: "Edimax Difens (Internal Detox)",
    price: 11000,
    category: "Herbal Products",
    image: "product17.jpg",
    description: "Herbal detox support capsule for internal wellness."
  },
  {
    id: 18,
    name: "Ediherb Lung Care",
    price: 12000,
    category: "Herbal Products",
    image: "product18.jpg",
    description: "Herbal nutraceutical support for lung wellness."
  },
  {
    id: 19,
    name: "Kidney Care Herbal Capsules",
    price: 12000,
    category: "Herbal Products",
    image: "product19.jpg",
    description: "Herbal capsule support for kidney wellness."
  },
  {
    id: 20,
    name: "Immune Booster",
    price: 13500,
    category: "Supplements",
    image: "product20.jpg",
    description: "Supplement designed to support immune wellness."
  },
  {
    id: 21,
    name: "Garligin-K Softgel",
    price: 14500,
    category: "Supplements",
    image: "product21.jpg",
    description: "Black seed oil, ginger oil and garlic oil softgel support."
  },
  {
    id: 22,
    name: "Fitforlife Herbal Stem Cell",
    price: 16000,
    category: "Liquid Supplements",
    image: "product22.jpg",
    description: "Liquid herbal wellness product for daily body support."
  },
  {
    id: 23,
    name: "Ediherb Coenzyme Q10",
    price: 15000,
    category: "Supplements",
    image: "product23.jpg",
    description: "Dietary supplement for heart and daily energy support."
  },
  {
    id: 24,
    name: "Vigor Brand Multivitamin B Tablets",
    price: 13000,
    category: "Supplements",
    image: "product24.jpg",
    description: "Multivitamin B tablet product for daily nutritional support."
  },
  {
    id: 25,
    name: "Pure Valoten",
    price: 14500,
    category: "Supplements",
    image: "product25.jpg",
    description: "Supplement product for immune and anti-inflammatory support."
  },
  {
    id: 26,
    name: "Edible Omega 3 Fish Oil",
    price: 15500,
    category: "Supplements",
    image: "product26.jpg",
    description: "Omega 3 fish oil softgel for heart, brain and joint wellness."
  }
];

// ==========================
// 🧰 HELPERS
// ==========================
function formatPrice(num) {
  return "₦" + num.toLocaleString();
}

function generateCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// ==========================
// 🔐 PAGE PROTECTION
// ==========================
function protectPages() {
  const protectedPages = [
    "home",
    "cart",
    "checkout",
    "account",
    "wishlist",
    "product-details"
  ];

  const currentPage = document.body.dataset.page;

  onAuthStateChanged(auth, (user) => {
    if (!user && protectedPages.includes(currentPage)) {
      window.location.href = "signin.html";
    }
  });
}

// ==========================
// 🛒 CART SYSTEM
// ==========================
function getCart() {
  return JSON.parse(localStorage.getItem("greenCart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("greenCart", JSON.stringify(cart));
}

function addToCart(id) {
  const cart = getCart();
  const product = products.find(p => p.id === id);

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
  updateCartBadge();
  alert("Added to cart");
}

function removeItem(id) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== id);
  saveCart(cart);
  renderCart();
  updateCartBadge();
}

function changeQty(id, type) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);

  if (!item) return;

  if (type === "inc") item.quantity++;
  if (type === "dec") item.quantity--;

  if (item.quantity <= 0) {
    removeItem(id);
    return;
  }

  saveCart(cart);
  renderCart();
  updateCartBadge();
}

// ==========================
// 🧮 CART BADGE
// ==========================
function updateCartBadge() {
  const badge = document.getElementById("cartBadge");
  if (!badge) return;

  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);

  badge.textContent = total;
}

// ==========================
// 🏠 HOME PRODUCTS
// ==========================
function renderHomeSections() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  grid.innerHTML = products.map(p => `
    <div class="product-card">
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>${formatPrice(p.price)}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
      <button onclick="openProduct(${p.id})">View</button>
    </div>
  `).join("");
}

// ==========================
// 🔍 PRODUCT DETAILS
// ==========================
function openProduct(id) {
  localStorage.setItem("selectedProduct", id);
  window.location.href = "product-details.html";
}

function renderProductDetails() {
  const container = document.getElementById("productDetails");
  if (!container) return;

  const id = localStorage.getItem("selectedProduct");
  const product = products.find(p => p.id == id);

  if (!product) return;

  container.innerHTML = `
    <img src="${product.image}">
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <h3>${formatPrice(product.price)}</h3>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
}

// ==========================
// 🛒 CART PAGE
// ==========================
function renderCart() {
  const container = document.getElementById("cartItems");
  if (!container) return;

  const cart = getCart();

  if (!cart.length) {
    container.innerHTML = "<p>Cart is empty</p>";
    return;
  }

  let subtotal = 0;

  container.innerHTML = cart.map(item => {
    subtotal += item.price * item.quantity;

    return `
      <div class="cart-item">
        <h4>${item.name}</h4>
        <p>${formatPrice(item.price)}</p>
        <button onclick="changeQty(${item.id}, 'dec')">-</button>
        ${item.quantity}
        <button onclick="changeQty(${item.id}, 'inc')">+</button>
        <button onclick="removeItem(${item.id})">Remove</button>
      </div>
    `;
  }).join("");

  document.getElementById("cartTotal").textContent = formatPrice(subtotal + 3000);
}

// ==========================
// 💳 CHECKOUT
// ==========================
function renderCheckout() {
  const container = document.getElementById("checkoutItems");
  if (!container) return;

  const cart = getCart();

  let subtotal = 0;

  container.innerHTML = cart.map(item => {
    subtotal += item.price * item.quantity;
    return `<p>${item.name} x ${item.quantity}</p>`;
  }).join("");

  document.getElementById("checkoutTotal").textContent = formatPrice(subtotal + 3000);
}

function setupCheckoutForm() {
  const form = document.getElementById("checkoutForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const cart = getCart();

    const order = {
      id: "ORD-" + Date.now(),
      items: cart,
      name: document.getElementById("fullName").value,
      email: document.getElementById("emailAddress").value,
      phone: document.getElementById("phoneNumber").value,
      address: document.getElementById("deliveryAddress").value,
      payment: document.querySelector('input[name="paymentMethod"]:checked').value,
      total: cart.reduce((sum, i) => sum + i.price * i.quantity, 0) + 3000,
      pickupCode: generateCode()
    };

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    localStorage.setItem("lastOrder", JSON.stringify(order));

    saveCart([]);

    alert("Order placed successfully");
    window.location.href = "order-success.html";
  });
}

// ==========================
// 🎉 SUCCESS PAGE
// ==========================
function renderOrderSuccess() {
  const order = JSON.parse(localStorage.getItem("lastOrder"));
  if (!order) return;

  document.getElementById("successCode").textContent = order.pickupCode;
  document.getElementById("successTotal").textContent = formatPrice(order.total);
}

// ==========================
// 🚪 LOGOUT
// ==========================
function setupLogout() {
  const btn = document.getElementById("logoutBtn");
  if (!btn) return;

  btn.addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "signin.html";
  });
}

// ==========================
// 🌍 GLOBAL
// ==========================
window.addToCart = addToCart;
window.changeQty = changeQty;
window.removeItem = removeItem;
window.openProduct = openProduct;

// ==========================
// 🚀 INIT
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  protectPages();
  updateCartBadge();

  renderHomeSections();
  renderProductDetails();
  renderCart();
  renderCheckout();
  renderOrderSuccess();

  setupCheckoutForm();
  setupLogout();
});