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

/* =========================
   STORAGE HELPERS
========================= */

function getCart() {
    return JSON.parse(localStorage.getItem("greenCentreCart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("greenCentreCart", JSON.stringify(cart));
}

function getWishlist() {
    return JSON.parse(localStorage.getItem("greenCentreWishlist")) || [];
}

function saveWishlist(wishlist) {
    localStorage.setItem("greenCentreWishlist", JSON.stringify(wishlist));
}

function getOrders() {
    return JSON.parse(localStorage.getItem("greenCentreOrders")) || [];
}

function saveOrders(orders) {
    localStorage.setItem("greenCentreOrders", JSON.stringify(orders));
}

function getLastOrder() {
    return JSON.parse(localStorage.getItem("greenCentreLastPlacedOrder"));
}

/* =========================
   UTILITIES
========================= */

function formatPrice(price) {
    return "₦" + price.toLocaleString();
}

/* =========================
   PRODUCTS (keep yours)
========================= */

const products = window.products || [];

/* =========================
   PRODUCT GRID
========================= */

function renderProductGrid(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!items.length) {
        container.innerHTML = "<p>No products found</p>";
        return;
    }

    container.innerHTML = items.map(product => `
        <div class="product-card" onclick="openProduct(${product.id})">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <strong>${formatPrice(product.price)}</strong>
        </div>
    `).join("");
}

/* =========================
   PRODUCT DETAILS
========================= */

function setSelectedProduct(id) {
    localStorage.setItem("greenCentreSelectedProduct", id);
}

function openProduct(id) {
    setSelectedProduct(id);
    window.location.href = "product-details.html";
}

function renderProductDetails() {
    const id = Number(localStorage.getItem("greenCentreSelectedProduct"));
    const product = products.find(p => p.id === id);

    if (!product) return;

    document.getElementById("detailsImage").src = product.image;
    document.getElementById("detailsName").textContent = product.name;
    document.getElementById("detailsCategory").textContent = product.category;
    document.getElementById("detailsPrice").textContent = formatPrice(product.price);
    document.getElementById("detailsDescription").textContent = product.description;

    document.getElementById("detailsCartBtn").onclick = () => addToCart(product.id);
    document.getElementById("detailsWishlistBtn").onclick = () => addToWishlist(product.id);
}

/* =========================
   CART
========================= */

function addToCart(id) {
    const cart = getCart();
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        const product = products.find(p => p.id === id);
        if (!product) return;

        cart.push({ ...product, quantity: 1 });
    }

    saveCart(cart);
    updateCartBadge();
    alert("Added to cart");
}

function updateCartBadge() {
    const badge = document.getElementById("cartBadge");
    if (!badge) return;

    const cart = getCart();
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);

    badge.textContent = total;
}

function renderCart() {
    const wrap = document.getElementById("cartItems");
    if (!wrap) return;

    const cart = getCart();

    if (!cart.length) {
        wrap.innerHTML = "<p>Your cart is empty</p>";
        return;
    }

    let subtotal = 0;

    wrap.innerHTML = cart.map(item => {
        subtotal += item.price * item.quantity;

        return `
            <div>
                <h4>${item.name}</h4>
                <p>${formatPrice(item.price)}</p>
                <button onclick="changeQty(${item.id}, -1)">-</button>
                ${item.quantity}
                <button onclick="changeQty(${item.id}, 1)">+</button>
                <button onclick="removeItem(${item.id})">Remove</button>
            </div>
        `;
    }).join("");

    document.getElementById("subtotal").textContent = formatPrice(subtotal);
    document.getElementById("total").textContent = formatPrice(subtotal + 3000);
}

function changeQty(id, change) {
    const cart = getCart();
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeItem(id);
        return;
    }

    saveCart(cart);
    renderCart();
    updateCartBadge();
}

function removeItem(id) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== id);

    saveCart(cart);
    renderCart();
    updateCartBadge();
}

/* =========================
   WISHLIST
========================= */

function addToWishlist(id) {
    const wishlist = getWishlist();
    if (wishlist.find(i => i.id === id)) return;

    const product = products.find(p => p.id === id);
    if (!product) return;

    wishlist.push(product);
    saveWishlist(wishlist);

    alert("Added to wishlist");
}

function renderWishlist() {
    const wrap = document.getElementById("wishlistItems");
    if (!wrap) return;

    const wishlist = getWishlist();

    if (!wishlist.length) {
        wrap.innerHTML = "<p>Wishlist is empty</p>";
        return;
    }

    wrap.innerHTML = wishlist.map(item => `
        <div>
            <h4>${item.name}</h4>
            <button onclick="addToCart(${item.id})">Add to Cart</button>
            <button onclick="removeFromWishlist(${item.id})">Remove</button>
        </div>
    `).join("");
}

function removeFromWishlist(id) {
    let wishlist = getWishlist();
    wishlist = wishlist.filter(i => i.id !== id);
    saveWishlist(wishlist);
    renderWishlist();
}

/* =========================
   CHECKOUT
========================= */

function renderCheckout() {
    const wrap = document.getElementById("checkoutItems");
    if (!wrap) return;

    const cart = getCart();

    if (!cart.length) {
        wrap.innerHTML = "<p>No items</p>";
        return;
    }

    let subtotal = 0;

    wrap.innerHTML = cart.map(item => {
        subtotal += item.price * item.quantity;

        return `<p>${item.name} x ${item.quantity}</p>`;
    }).join("");

    document.getElementById("checkoutSubtotal").textContent = "₦" + subtotal;
    document.getElementById("checkoutTotal").textContent = "₦" + (subtotal + 3000);
}

/* =========================
   ORDER
========================= */

function setupCheckoutForm() {
    const form = document.getElementById("checkoutForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const cart = getCart();
        if (!cart.length) return alert("Cart is empty");

        const order = {
            items: cart,
            createdAt: new Date().toISOString()
        };

        const orders = getOrders();
        orders.unshift(order);
        saveOrders(orders);

        localStorage.setItem("greenCentreLastPlacedOrder", JSON.stringify(order));
        localStorage.removeItem("greenCentreCart");

        window.location.href = "order-success.html";
    });
}

function renderOrderSuccess() {
    const order = getLastOrder();
    if (!order) return;

    const total = order.items.reduce((sum, item) =>
        sum + item.price * item.quantity, 0
    ) + 3000;

    document.getElementById("successTotal").textContent = formatPrice(total);
}

/* =========================
   INIT
========================= */

document.addEventListener("DOMContentLoaded", function () {
    updateCartBadge();

    renderProductGrid("categoryProducts", products);
    renderProductDetails();
    renderCart();
    renderWishlist();
    renderCheckout();
    renderOrderSuccess();

    setupCheckoutForm();
});

/* =========================
   GLOBAL FUNCTIONS
========================= */

window.addToCart = addToCart;
window.changeQty = changeQty;
window.removeItem = removeItem;
window.openProduct = openProduct;
window.removeFromWishlist = removeFromWishlist;