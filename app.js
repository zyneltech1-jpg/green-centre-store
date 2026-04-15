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

// =======================
// GLOBAL STATE
// =======================

const STORAGE_KEYS = {
  CART: "greenCentreCart",
  WISHLIST: "greenCentreWishlist",
  ORDERS: "greenCentreOrders",
  LAST_ORDER: "greenCentreLastPlacedOrder",
  CATEGORY: "greenCentreSelectedCategory"
};

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


// =======================
// UTILITIES
// =======================

function formatPrice(price) {
  return "₦" + price.toLocaleString();
}

function safeGet(id) {
  return document.getElementById(id);
}

// =======================
// STORAGE HELPERS
// =======================

function getCart() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.CART)) || [];
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
}

function getWishlist() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.WISHLIST)) || [];
}

function saveWishlist(data) {
  localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(data));
}

function getOrders() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS)) || [];
}

function saveOrders(data) {
  localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(data));
}

// =======================
// PRODUCT RENDERING
// =======================

function renderProductGrid(containerId, list) {
  const container = safeGet(containerId);
  if (!container) return;

  if (!list.length) {
    container.innerHTML = "<p>No products found</p>";
    return;
  }

  container.innerHTML = list.map(p => `
    <div class="product-card" onclick="openProduct(${p.id})">
      <img src="${p.image}" alt="${p.name}">
      <h4>${p.name}</h4>
      <p>${formatPrice(p.price)}</p>
    </div>
  `).join("");
}

// =======================
// CATEGORY FILTER
// =======================

function setupCategoryFilter() {
  const pills = document.querySelectorAll(".category-pill");
  const search = safeGet("categorySearch");

  if (!pills.length) return;

  function applyFilter(category) {
    let filtered = [...products];

    if (category !== "All") {
      filtered = filtered.filter(p => p.category === category);
    }

    if (search) {
      const val = search.value.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(val)
      );
    }

    renderProductGrid("categoryProducts", filtered);
  }

  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      const cat = pill.dataset.category;

      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");

      localStorage.setItem(STORAGE_KEYS.CATEGORY, cat);
      applyFilter(cat);
    });
  });

  if (search) {
    search.addEventListener("input", () => {
      const active = document.querySelector(".category-pill.active");
      applyFilter(active ? active.dataset.category : "All");
    });
  }

  const saved = localStorage.getItem(STORAGE_KEYS.CATEGORY) || "All";
  applyFilter(saved);
}

// =======================
// PRODUCT DETAILS
// =======================

function openProduct(id) {
  localStorage.setItem("selectedProduct", id);
  window.location.href = "product-details.html";
}

function renderProductDetails() {
  const id = Number(localStorage.getItem("selectedProduct"));
  const product = products.find(p => p.id === id);

  if (!product) return;

  safeGet("detailsImage").src = product.image;
  safeGet("detailsName").textContent = product.name;
  safeGet("detailsPrice").textContent = formatPrice(product.price);
  safeGet("detailsDescription").textContent = product.description;

  safeGet("detailsCartBtn")?.addEventListener("click", () => addToCart(product.id));
  safeGet("detailsWishlistBtn")?.addEventListener("click", () => addToWishlist(product.id));
}

// =======================
// CART
// =======================

function addToCart(id) {
  let cart = getCart();
  const item = cart.find(i => i.id === id);

  if (item) {
    item.quantity++;
  } else {
    const product = products.find(p => p.id === id);
    if (!product) return;

    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
  alert("Added to cart");
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.querySelector(".cart-count");
  if (!badge) return;

  const cart = getCart();
  badge.textContent = cart.reduce((sum, i) => sum + i.quantity, 0);
}

function renderCart() {
  const container = safeGet("cartItems");
  if (!container) return;

  const cart = getCart();

  if (!cart.length) {
    container.innerHTML = "<p>Cart is empty</p>";
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}">
      <h4>${item.name}</h4>
      <p>${formatPrice(item.price)}</p>
      <p>Qty: ${item.quantity}</p>
      <button onclick="removeItem(${item.id})">Remove</button>
    </div>
  `).join("");
}

function removeItem(id) {
  let cart = getCart().filter(i => i.id !== id);
  saveCart(cart);
  renderCart();
  updateCartBadge();
}

// =======================
// WISHLIST
// =======================

function addToWishlist(id) {
  let list = getWishlist();

  if (list.find(i => i.id === id)) {
    alert("Already in wishlist");
    return;
  }

  const product = products.find(p => p.id === id);
  list.push(product);

  saveWishlist(list);
  alert("Added to wishlist");
}

function renderWishlist() {
  const container = safeGet("wishlistItems");
  if (!container) return;

  const list = getWishlist();

  if (!list.length) {
    container.innerHTML = "<p>No wishlist items</p>";
    return;
  }

  container.innerHTML = list.map(item => `
    <div>
      <h4>${item.name}</h4>
      <button onclick="addToCart(${item.id})">Add to cart</button>
    </div>
  `).join("");
}

// =======================
// CHECKOUT
// =======================

function renderCheckout() {
  const container = safeGet("checkoutItems");
  if (!container) return;

  const cart = getCart();

  if (!cart.length) {
    container.innerHTML = "<p>No items</p>";
    return;
  }

  let subtotal = 0;

  container.innerHTML = cart.map(i => {
    subtotal += i.price * i.quantity;
    return `<p>${i.name} x ${i.quantity}</p>`;
  }).join("");

  safeGet("checkoutSubtotal").textContent = formatPrice(subtotal);
  safeGet("checkoutTotal").textContent = formatPrice(subtotal + 3000);
}

// =======================
// INIT
// =======================

document.addEventListener("DOMContentLoaded", () => {
  renderProductGrid("categoryProducts", products);
  setupCategoryFilter();

  renderProductDetails();
  renderCart();
  renderWishlist();
  renderCheckout();

  updateCartBadge();
});

// =======================
// GLOBALS
// =======================

window.openProduct = openProduct;
window.addToCart = addToCart;
window.removeItem = removeItem;