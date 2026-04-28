/* =========================
   GREEN CENTRE APP.JS
========================= */

/* =========================
   PRODUCTS
========================= */
const products = [
  {
    id: 1,
    name: "Kunlun Mountain Snow Chrysanthemum",
    price: 12000,
    category: "Liquid Supplements",
    image: "images1.jpg",
    description: "Natural wellness tea product for general body support."
  },
  {
    id: 2,
    name: "Longreen Chitin Softgel",
    price: 15000,
    category: "Supplements",
    image: "images2.jpg",
    description: "Softgel supplement designed for daily wellness support."
  },
  {
    id: 3,
    name: "Malaphoid Herbal Capsules",
    price: 10000,
    category: "Herbal Products",
    image: "images3.jpg",
    description: "Herbal capsule product for body wellness support."
  },
  {
    id: 4,
    name: "Diabetes Care Herbal Capsules",
    price: 12000,
    category: "Herbal Products",
    image: "images4.jpg",
    description: "Herbal support product for metabolic wellness."
  },
  {
    id: 5,
    name: "Athrilax",
    price: 14000,
    category: "Pain Relief",
    image: "images5.jpg",
    description: "Capsule product for joint and body comfort support."
  },
  {
    id: 6,
    name: "Golden Six Pills",
    price: 18000,
    category: "Supplements",
    image: "images6.jpg",
    description: "Supplement pill product for general daily support."
  },
  {
    id: 7,
    name: "Stroke Caps",
    price: 11000,
    category: "Herbal Products",
    image: "images7.jpg",
    description: "Herbal capsule product for circulatory wellness support."
  },
  {
    id: 8,
    name: "Venecare 40 (Std Care)",
    price: 12000,
    category: "Herbal Products",
    image: "images8.jpg",
    description: "Herbal capsule product for wellness support."
  },
  {
    id: 9,
    name: "Men's Formula Herbal Capsules",
    price: 13000,
    category: "Herbal Products",
    image: "images9.jpg",
    description: "Herbal formula designed for men's wellness support."
  },
  {
    id: 10,
    name: "Ulcer Care Herbal Capsules",
    price: 11000,
    category: "Herbal Products",
    image: "images10.jpg",
    description: "Herbal product for digestive wellness support."
  },
  {
    id: 11,
    name: "Ganoderma Lucidum Spore Powder",
    price: 17000,
    category: "Supplements",
    image: "images11.jpg",
    description: "Capsule supplement for immune and wellness support."
  },
  {
    id: 12,
    name: "Natural Antibiotics (Dukun Care)",
    price: 10000,
    category: "Herbal Products",
    image: "images12.jpg",
    description: "Natural herbal support product for everyday wellness."
  },
  {
    id: 13,
    name: "Eye Care Herbal Capsules",
    price: 10000,
    category: "Herbal Products",
    image: "images13.jpg",
    description: "Herbal capsule product for eye wellness support."
  },
  {
    id: 14,
    name: "Stop Piles Herbal Capsules",
    price: 10000,
    category: "Herbal Products",
    image: "images14.jpg",
    description: "Herbal support product for digestive comfort."
  },
  {
    id: 15,
    name: "Hyperthyroidism Capsule",
    price: 12500,
    category: "Herbal Products",
    image: "images15.jpg",
    description: "Capsule product for thyroid wellness support."
  },
  {
    id: 16,
    name: "EH GinBiloba Extra Strength",
    price: 14000,
    category: "Supplements",
    image: "images16.jpg",
    description: "Supplement designed to support memory and brain wellness."
  },
  {
    id: 17,
    name: "Edimax Difens (Internal Detox)",
    price: 11000,
    category: "Herbal Products",
    image: "images17.jpg",
    description: "Herbal detox support capsule for internal wellness."
  },
  {
    id: 18,
    name: "Ediherb Lung Care",
    price: 12000,
    category: "Herbal Products",
    image: "images18.jpg",
    description: "Herbal nutraceutical support for lung wellness."
  },
  {
    id: 19,
    name: "Kidney Care Herbal Capsules",
    price: 12000,
    category: "Herbal Products",
    image: "images19.jpg",
    description: "Herbal capsule support for kidney wellness."
  },
  {
    id: 20,
    name: "Immune Booster",
    price: 13500,
    category: "Supplements",
    image: "images20.jpg",
    description: "Supplement designed to support immune wellness."
  },
  {
    id: 21,
    name: "Garligin-K Softgel",
    price: 14500,
    category: "Supplements",
    image: "images21.jpg",
    description: "Black seed oil, ginger oil and garlic oil softgel support."
  },
  {
    id: 22,
    name: "Fitforlife Herbal Stem Cell",
    price: 16000,
    category: "Liquid Supplements",
    image: "images22.jpg",
    description: "Liquid herbal wellness product for daily body support."
  },
  {
    id: 23,
    name: "Ediherb Coenzyme Q10",
    price: 15000,
    category: "Supplements",
    image: "images23.jpg",
    description: "Dietary supplement for heart and daily energy support."
  },
  {
    id: 24,
    name: "Vigor Brand Multivitamin B Tablets",
    price: 13000,
    category: "Supplements",
    image: "images24.jpg",
    description: "Multivitamin B tablet product for daily nutritional support."
  },
  {
    id: 25,
    name: "Pure Valoten",
    price: 14500,
    category: "Supplements",
    image: "images25.jpg",
    description: "Supplement product for immune and anti-inflammatory support."
  },
  {
    id: 26,
    name: "Edible Omega 3 Fish Oil",
    price: 15500,
    category: "Supplements",
    image: "images26.jpg",
    description: "Omega 3 fish oil softgel for heart, brain and joint wellness."
  },
  {
    id: 27,
    name: "Edible Omega 3 Fish Oil",
    price: 15500,
    category: "Supplements",
    image: "images27.jpg",
    description: "Omega 3 fish oil softgel for heart, brain and joint wellness."
  },
  {
    id: 28,
    name: "Edible Omega 3 Fish Oil",
    price: 15500,
    category: "Supplements",
    image: "images28.jpg",
    description: "Omega 3 fish oil softgel for heart, brain and joint wellness."
  },
  {
    id: 29,
    name: "Edible Omega 3 Fish Oil",
    price: 15500,
    category: "Supplements",
    image: "images29.jpg",
    description: "Omega 3 fish oil softgel for heart, brain and joint wellness."
  },
  {
    id: 30,
    name: "Edible Omega 3 Fish Oil",
    price: 15500,
    category: "Supplements",
    image: "images30.jpg",
    description: "Omega 3 fish oil softgel for heart, brain and joint wellness."
  },
  {
    id: 31,
    name: "Edible Omega 3 Fish Oil",
    price: 15500,
    category: "Supplements",
    image: "images31.jpg",
    description: "Omega 3 fish oil softgel for heart, brain and joint wellness."
  },
  {
    id: 32,
    name: "Edible Omega 3 Fish Oil",
    price: 15500,
    category: "Supplements",
    image: "images32.jpg",
    description: "Omega 3 fish oil softgel for heart, brain and joint wellness."
  },
  {
    id: 33,
    name: "Edible Omega 3 Fish Oil",
    price: 15500,
    category: "Supplements",
    image: "images33.jpg",
    description: "Omega 3 fish oil softgel for heart, brain and joint wellness."
  },
  {
    id: 34,
    name: "Edible Omega 3 Fish Oil",
    price: 15500,
    category: "Supplements",
    image: "images34.jpg",
    description: "Omega 3 fish oil softgel for heart, brain and joint wellness."
  },
  {
    id: 35,
    name: "Edible Omega 3 Fish Oil",
    price: 15500,
    category: "Supplements",
    image: "images35.jpg",
    description: "Omega 3 fish oil softgel for heart, brain and joint wellness."
  },
  {
    id: 36,
    name: "Kidney Care Herbal Capsules",
    price: 12000,
    category: "Herbal Products",
    image: "images36.jpg",
    description: "Herbal capsule support for kidney wellness."
  },
  {
    id: 37,
    name: "Kidney Care Herbal Capsules",
    price: 12000,
    category: "Herbal Products",
    image: "images37.jpg",
    description: "Herbal capsule support for kidney wellness."
  },
  {
    id: 38,
    name: "Kidney Care Herbal Capsules",
    price: 12000,
    category: "Herbal Products",
    image: "images38.jpg",
    description: "Herbal capsule support for kidney wellness."
  },
  {
    id: 39,
    name: "Garligin-K Softgel",
    price: 14500,
    category: "Supplements",
    image: "images39.jpg",
    description: "Black seed oil, ginger oil and garlic oil softgel support."
  },
  {
    id: 40,
    name: "Garligin-K Softgel",
    price: 14500,
    category: "Supplements",
    image: "images40.jpg",
    description: "Black seed oil, ginger oil and garlic oil softgel support."
  },
  {
    id: 41,
    name: "Garligin-K Softgel",
    price: 14500,
    category: "Supplements",
    image: "images41.jpg",
    description: "Black seed oil, ginger oil and garlic oil softgel support."
  },
  {
    id: 42,
    name: "Garligin-K Softgel",
    price: 14500,
    category: "Supplements",
    image: "images42.jpg",
    description: "Black seed oil, ginger oil and garlic oil softgel support."
  },
  {
    id: 43,
    name: "Garligin-K Softgel",
    price: 14500,
    category: "Supplements",
    image: "images43.jpg",
    description: "Black seed oil, ginger oil and garlic oil softgel support."
  },
  {
    id: 44,
    name: "Garligin-K Softgel",
    price: 14500,
    category: "Supplements",
    image: "images44.jpg",
    description: "Black seed oil, ginger oil and garlic oil softgel support."
  },
  {
    id: 45,
    name: "Garligin-K Softgel",
    price: 14500,
    category: "Supplements",
    image: "images45.jpg",
    description: "Black seed oil, ginger oil and garlic oil softgel support."
  },
  {
    id: 46,
    name: "Garligin-K Softgel",
    price: 14500,
    category: "Supplements",
    image: "images46.jpg",
    description: "Black seed oil, ginger oil and garlic oil softgel support."
  },
  {
    id: 47,
    name: "Garligin-K Softgel",
    price: 14500,
    category: "Supplements",
    image: "images47.jpg",
    description: "Black seed oil, ginger oil and garlic oil softgel support."
  },
  {
    id: 48,
    name: "Garligin-K Softgel",
    price: 14500,
    category: "Supplements",
    image: "images48.jpg",
    description: "Black seed oil, ginger oil and garlic oil softgel support."
  },
  {
    id: 49,
    name: "Garligin-K Softgel",
    price: 14500,
    category: "Supplements",
    image: "images49.jpg",
    description: "Black seed oil, ginger oil and garlic oil softgel support."
  },
  {
    id: 50,
    name: "Garligin-K Softgel",
    price: 14500,
    category: "Supplements",
    image: "images50.jpg",
    description: "Black seed oil, ginger oil and garlic oil softgel support."
  },
  {
    id: 51,
    name: "Kunlun Mountain Snow Chrysanthemum",
    price: 12000,
    category: "Liquid Supplements",
    image: "images51.jpg",
    description: "Natural wellness tea product for general body support."
  },
  {
    id: 52,
    name: "Longreen Chitin Softgel",
    price: 15000,
    category: "Supplements",
    image: "images52.jpg",
    description: "Softgel supplement designed for daily wellness support."
  },
  {
    id: 53,
    name: "Malaphoid Herbal Capsules",
    price: 10000,
    category: "Herbal Products",
    image: "images53.jpg",
    description: "Herbal capsule product for body wellness support."
  },
  {
    id: 54,
    name: "Diabetes Care Herbal Capsules",
    price: 12000,
    category: "Herbal Products",
    image: "images54.jpg",
    description: "Herbal support product for metabolic wellness."
  },
  {
    id: 55,
    name: "Athrilax",
    price: 14000,
    category: "Pain Relief",
    image: "images55.jpg",
    description: "Capsule product for joint and body comfort support."
  },
  {
    id: 56,
    name: "Golden Six Pills",
    price: 18000,
    category: "Supplements",
    image: "images56.jpg",
    description: "Supplement pill product for general daily support."
  },
  {
    id: 57,
    name: "Stroke Caps",
    price: 11000,
    category: "Herbal Products",
    image: "images57.jpg",
    description: "Herbal capsule product for circulatory wellness support."
  },
  {
    id: 58,
    name: "Venecare 40 (Std Care)",
    price: 12000,
    category: "Herbal Products",
    image: "images58.jpg",
    description: "Herbal capsule product for wellness support."
  },
  {
    id: 59,
    name: "Men's Formula Herbal Capsules",
    price: 13000,
    category: "Herbal Products",
    image: "images59.jpg",
    description: "Herbal formula designed for men's wellness support."
  },
  {
    id: 60,
    name: "Ulcer Care Herbal Capsules",
    price: 11000,
    category: "Herbal Products",
    image: "images60.jpg",
    description: "Herbal product for digestive wellness support."
  },
  {
    id: 61,
    name: "Ganoderma Lucidum Spore Powder",
    price: 17000,
    category: "Supplements",
    image: "images61.jpg",
    description: "Capsule supplement for immune and wellness support."
  },
  {
    id: 62,
    name: "Natural Antibiotics (Dukun Care)",
    price: 10000,
    category: "Herbal Products",
    image: "images62.jpg",
    description: "Natural herbal support product for everyday wellness."
  },
  {
    id: 63,
    name: "Eye Care Herbal Capsules",
    price: 10000,
    category: "Herbal Products",
    image: "images63.jpg",
    description: "Herbal capsule product for eye wellness support."
  },
  {
    id: 64,
    name: "Stop Piles Herbal Capsules",
    price: 10000,
    category: "Herbal Products",
    image: "images64.jpg",
    description: "Herbal support product for digestive comfort."
  },
  {
    id: 65,
    name: "Hyperthyroidism Capsule",
    price: 12500,
    category: "Herbal Products",
    image: "images65.jpg",
    description: "Capsule product for thyroid wellness support."
  },
  {
    id: 66,
    name: "EH GinBiloba Extra Strength",
    price: 14000,
    category: "Supplements",
    image: "images66.jpg",
    description: "Supplement designed to support memory and brain wellness."
  },
  {
    id: 67,
    name: "Edimax Difens (Internal Detox)",
    price: 11000,
    category: "Herbal Products",
    image: "images67.jpg",
    description: "Herbal detox support capsule for internal wellness."
  },
  {
    id: 68,
    name: "Ediherb Lung Care",
    price: 12000,
    category: "Herbal Products",
    image: "images68.jpg",
    description: "Herbal nutraceutical support for lung wellness."
  },
  {
    id: 69,
    name: "Kidney Care Herbal Capsules",
    price: 12000,
    category: "Herbal Products",
    image: "images69.jpg",
    description: "Herbal capsule support for kidney wellness."
  },
  {
    id: 70,
    name: "Immune Booster",
    price: 13500,
    category: "Supplements",
    image: "images70.jpg",
    description: "Supplement designed to support immune wellness."
  },
  {
    id: 71,
    name: "Garligin-K Softgel",
    price: 14500,
    category: "Supplements",
    image: "images71.jpg",
    description: "Black seed oil, ginger oil and garlic oil softgel support."
  },
  {
    id: 72,
    name: "Fitforlife Herbal Stem Cell",
    price: 16000,
    category: "Liquid Supplements",
    image: "images72.jpg",
    description: "Liquid herbal wellness product for daily body support."
  },
  {
    id: 73,
    name: "Ediherb Coenzyme Q10",
    price: 15000,
    category: "Supplements",
    image: "images73.jpg",
    description: "Dietary supplement for heart and daily energy support."
  },
  {
    id: 74,
    name: "Vigor Brand Multivitamin B Tablets",
    price: 13000,
    category: "Supplements",
    image: "images74.jpg",
    description: "Multivitamin B tablet product for daily nutritional support."
  },
  {
    id: 75,
    name: "Pure Valoten",
    price: 14500,
    category: "Supplements",
    image: "images75.jpg",
    description: "Supplement product for immune and anti-inflammatory support."
  },
  {
    id: 76,
    name: "Edible Omega 3 Fish Oil",
    price: 15500,
    category: "Supplements",
    image: "images76.jpg",
    description: "Omega 3 fish oil softgel for heart, brain and joint wellness."
  }
];


/* =========================
   HELPERS
========================= */
function formatPrice(amount) {
  return `₦${amount.toLocaleString()}`;
}

function getUser() {
  return JSON.parse(localStorage.getItem("greenCentreUser")) || null;
}

function isLoggedIn() {
  return localStorage.getItem("greenCentreLoggedIn") === "true";
}

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
  return JSON.parse(localStorage.getItem("greenCentreLastPlacedOrder")) || null;
}

/* =========================
   PAGE PROTECTION
========================= */
function protectPages() {
  const protectedPages = [
    "home",
    "categories",
    "cart",
    "checkout",
    "wishlist",
    "account",
    "product-details",
    "order-success"
  ];

  const currentPage = document.body.dataset.page;

  if (protectedPages.includes(currentPage) && !isLoggedIn()) {
    window.location.href = "welcome.html";
  }
}

/* =========================
   CART BADGE
========================= */
function updateCartBadge() {
  const totalItems = getCart().reduce((sum, item) => sum + item.quantity, 0);
  const badges = document.querySelectorAll("#cartBadge");

  badges.forEach(badge => {
    badge.textContent = totalItems;
  });
}

/* =========================
   PRODUCT GRID
========================= */
function renderProductGrid(targetId, items) {
  const container = document.getElementById(targetId);
  if (!container) return;

  if (!items.length) {
    container.innerHTML = `
      <div class="empty-state">
        <p>No products found.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(product => `
    <article class="product-card" onclick="openProduct(${product.id})">
      <div class="product-image-wrap">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <h3 class="product-name">${product.name}</h3>
      <p class="product-price">${formatPrice(product.price)}</p>
    </article>
  `).join("");
}

/* =========================
   HOME SECTIONS
========================= */
function renderHomeSections() {
  const featured = products.slice(0, 6);
  const herbal = products.filter(p => p.category === "Herbal Products").slice(0, 4);
  const supplements = products.filter(p => p.category === "Supplements").slice(0, 4);
  const liquid = products.filter(p => p.category === "Liquid Supplements").slice(0, 4);

  renderProductGrid("featuredProducts", featured);
  renderProductGrid("herbalProducts", herbal);
  renderProductGrid("supplementProducts", supplements);
  renderProductGrid("liquidProducts", liquid);
}

/* =========================
   SEARCH
========================= */
function setupHomeSearch() {
  const homeSearch = document.getElementById("homeSearch");
  if (!homeSearch) return;

  homeSearch.addEventListener("input", function () {
    const value = this.value.toLowerCase().trim();

    if (!value) {
      renderHomeSections();
      return;
    }

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(value) ||
      product.category.toLowerCase().includes(value) ||
      product.description.toLowerCase().includes(value)
    );

    renderProductGrid("featuredProducts", filtered);
    renderProductGrid("herbalProducts", []);
    renderProductGrid("supplementProducts", []);
    renderProductGrid("liquidProducts", []);
  });
}

function setupCategorySearch() {
  const categorySearch = document.getElementById("categorySearch");
  if (!categorySearch) return;

  categorySearch.addEventListener("input", function () {
    const searchValue = this.value.toLowerCase().trim();
    const activePill = document.querySelector(".category-pill.active");
    const activeCategory = activePill ? activePill.dataset.category : "All";

    let filtered = products;

    if (activeCategory !== "All") {
      filtered = filtered.filter(product => product.category === activeCategory);
    }

    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue) ||
      product.description.toLowerCase().includes(searchValue)
    );

    renderProductGrid("categoryProducts", filtered);
  });
}

/* =========================
   CATEGORY FILTER
========================= */
function setSelectedCategory(category) {
  localStorage.setItem("greenCentreSelectedCategory", category);
}

function setupCategoryFilter() {
  const pills = document.querySelectorAll(".category-pill");
  const categorySearch = document.getElementById("categorySearch");
  const categoryContainer = document.getElementById("categoryProducts");

  if (!pills.length || !categoryContainer) return;

  function applyCategoryFilter(selectedCategory) {
    const searchValue = categorySearch ? categorySearch.value.toLowerCase().trim() : "";

    pills.forEach(pill => {
      pill.classList.toggle("active", pill.dataset.category === selectedCategory);
    });

    let filtered = products;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue) ||
      product.description.toLowerCase().includes(searchValue)
    );

    renderProductGrid("categoryProducts", filtered);
  }

  pills.forEach(pill => {
    pill.addEventListener("click", function () {
      const selectedCategory = this.dataset.category;
      setSelectedCategory(selectedCategory);
      applyCategoryFilter(selectedCategory);
    });
  });

  const savedCategory = localStorage.getItem("greenCentreSelectedCategory") || "All";
  applyCategoryFilter(savedCategory);
}

/* =========================
   PRODUCT DETAILS PAGE
========================= */
function setSelectedProduct(id) {
  localStorage.setItem("greenCentreSelectedProduct", String(id));
}

function openProduct(id) {
  setSelectedProduct(id);
  window.location.href = "product-details.html";
}

function renderProductDetails() {
  const imageEl = document.getElementById("detailsImage");
  const categoryEl = document.getElementById("detailsCategory");
  const nameEl = document.getElementById("detailsName");
  const priceEl = document.getElementById("detailsPrice");
  const descEl = document.getElementById("detailsDescription");
  const cartBtn = document.getElementById("detailsCartBtn");
  const wishBtn = document.getElementById("detailsWishlistBtn");

  if (!imageEl || !categoryEl || !nameEl || !priceEl || !descEl) return;

  const selectedId = Number(localStorage.getItem("greenCentreSelectedProduct"));
  const product = products.find(item => item.id === selectedId);

  if (!product) {
    nameEl.textContent = "Product not found";
    descEl.textContent = "The selected product could not be loaded.";
    return;
  }

  imageEl.src = product.image;
  imageEl.alt = product.name;
  categoryEl.textContent = product.category;
  nameEl.textContent = product.name;
  priceEl.textContent = formatPrice(product.price);
  descEl.textContent = product.description;

  if (cartBtn) {
    cartBtn.onclick = function () {
      addToCart(product.id);
    };
  }

  if (wishBtn) {
    wishBtn.onclick = function () {
      addToWishlist(product.id);
    };
  }
}

/* =========================
   CART
========================= */
function addToCart(id) {
  const cart = getCart();
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    const product = products.find(item => item.id === id);
    if (!product) return;
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
  updateCartBadge();
  alert("Product added to cart.");
}

function renderCart() {
  const wrap = document.getElementById("cartItems");
  const subtotalEl = document.getElementById("subtotal");
  const totalEl = document.getElementById("total");
  const summaryWrap = document.getElementById("cartSummaryWrap");

  if (!wrap) return;

  const cart = getCart();

  if (!cart.length) {
    wrap.innerHTML = `
      <div class="empty-state">
        <h3>Your cart is empty!</h3>
        <p>Browse products and add what you want to buy.</p>
        <a href="index.html" class="primary-btn">Start Shopping</a>
      </div>
    `;
    if (summaryWrap) summaryWrap.style.display = "none";
    return;
  }

  if (summaryWrap) summaryWrap.style.display = "block";

  let subtotal = 0;

  wrap.innerHTML = cart.map(item => {
    subtotal += item.price * item.quantity;

    return `
      <article class="cart-item">
        <div class="cart-thumb">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-info">
          <h4>${item.name}</h4>
          <p>${item.category}</p>
          <div class="cart-price">${formatPrice(item.price)}</div>
          <div class="qty-row">
            <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
            <strong>${item.quantity}</strong>
            <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
            <button class="remove-btn" onclick="removeItem(${item.id})">Remove</button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  const delivery = 3000;
  const total = subtotal + delivery;

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (totalEl) totalEl.textContent = formatPrice(total);
}

function changeQty(id, change) {
  const cart = getCart();
  const item = cart.find(product => product.id === id);
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    saveCart(cart.filter(product => product.id !== id));
  } else {
    saveCart(cart);
  }

  updateCartBadge();
  renderCart();
}

function removeItem(id) {
  const cart = getCart().filter(item => item.id !== id);
  saveCart(cart);
  updateCartBadge();
  renderCart();
}

/* =========================
   WISHLIST
========================= */
function addToWishlist(id) {
  const wishlist = getWishlist();
  const existing = wishlist.find(item => item.id === id);

  if (existing) {
    alert("Product already in wishlist.");
    return;
  }

  const product = products.find(item => item.id === id);
  if (!product) return;

  wishlist.push(product);
  saveWishlist(wishlist);
  alert("Product added to wishlist.");
}

function renderWishlist() {
  const wrap = document.getElementById("wishlistItems");
  if (!wrap) return;

  const wishlist = getWishlist();

  if (!wishlist.length) {
    wrap.innerHTML = `
      <div class="empty-state">
        <h3>Your wishlist is empty</h3>
        <p>Save products you may want to buy later.</p>
        <a href="index.html" class="primary-btn">Browse Products</a>
      </div>
    `;
    return;
  }

  wrap.innerHTML = wishlist.map(item => `
    <div class="wishlist-item">
      <div class="wishlist-card">
        <div class="wishlist-thumb">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="wishlist-info">
          <h4>${item.name}</h4>
          <p>${item.category}</p>
          <div class="cart-price">${formatPrice(item.price)}</div>
          <div class="wishlist-actions">
            <button class="small-btn small-green-btn" onclick="moveWishlistToCart(${item.id})">Add to Cart</button>
            <button class="small-btn small-light-btn" onclick="removeFromWishlist(${item.id})">Remove</button>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

function removeFromWishlist(id) {
  const wishlist = getWishlist().filter(item => item.id !== id);
  saveWishlist(wishlist);
  renderWishlist();
}

function moveWishlistToCart(id) {
  addToCart(id);
  removeFromWishlist(id);
}

/* =========================
   CHECKOUT
========================= */
function renderCheckout() {
  const wrap = document.getElementById("checkoutItems");
  const subtotalEl = document.getElementById("checkoutSubtotal");
  const totalEl = document.getElementById("checkoutTotal");
  const summaryWrap = document.getElementById("checkoutSummaryWrap");

  if (!wrap) return;

  const cart = getCart();

  if (!cart.length) {
    wrap.innerHTML = `
      <div class="empty-state">
        <h3>No items to checkout</h3>
        <p>Add products to your cart before checking out.</p>
        <a href="index.html" class="primary-btn">Start Shopping</a>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = "₦0";
    if (totalEl) totalEl.textContent = "₦0";
    if (summaryWrap) summaryWrap.style.display = "block";
    return;
  }

  let subtotal = 0;

  wrap.innerHTML = cart.map(item => {
    subtotal += item.price * item.quantity;

    return `
      <article class="checkout-item">
        <div class="checkout-thumb">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="checkout-info">
          <h4>${item.name}</h4>
          <p>${item.category}</p>
          <p>Qty: ${item.quantity}</p>
          <strong>${formatPrice(item.price * item.quantity)}</strong>
        </div>
      </article>
    `;
  }).join("");

  const delivery = 3000;
  const total = subtotal + delivery;

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (totalEl) totalEl.textContent = formatPrice(total);
}

function setupCheckoutForm() {
  const form = document.getElementById("checkoutForm");
  if (!form) return;

  const user = getUser();

  if (user) {
    const fullName = document.getElementById("fullName");
    const emailAddress = document.getElementById("emailAddress");
    const phoneNumber = document.getElementById("phoneNumber");

    if (fullName) fullName.value = `${user.firstName} ${user.lastName}`;
    if (emailAddress) emailAddress.value = user.email;
    if (phoneNumber) phoneNumber.value = user.phone || "";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const cart = getCart();
    if (!cart.length) {
      alert("Your cart is empty.");
      return;
    }

    const paymentMethod =
      document.querySelector('input[name="paymentMethod"]:checked')?.value || "Pay Online";

    const order = {
  order_id: "GC-" + Date.now(),
  status: "Pending",
  date: new Date().toLocaleString(),

  items: cart,

  total: cart.reduce((sum, item) => sum + item.price * item.qty, 0) + 3000,
};

      customer: {
        fullName: document.getElementById("fullName").value.trim(),
        phone: document.getElementById("phoneNumber").value.trim(),
        email: document.getElementById("emailAddress").value.trim(),
        address: document.getElementById("deliveryAddress").value.trim(),
        city: document.getElementById("city").value.trim(),
        state: document.getElementById("state").value.trim()
      },

      paymentMethod,
      items: cart,
      createdAt: new Date().toISOString()
    };

    const existingOrders = getOrders();
    existingOrders.unshift(order);
    saveOrders(existingOrders);

    localStorage.setItem("greenCentreLastPlacedOrder", JSON.stringify(order));
    localStorage.removeItem("greenCentreCart");

Promise.all([
emailjs.send("service_ir5afre", "template_h3bqnnk", {
  order_id: order.order_id,
  name: order.customer.name,
  email: order.customer.email,
  phone: order.customer.phone,
  address: order.customer.address,
  city: order.customer.city,
  state: order.customer.state,
  payment: order.payment,
  items: itemsHTML,
  total: order.total,
  date: order.date
});

  emailjs.send("service_ir5afre", "template_1nwnwi4", {
  order_id: order.order_id,
  name: order.customer.name,
  email: order.customer.email,
  items: itemsHTML,
  total: order.total,
  date: order.date,
  payment: order.payment,
  address: order.customer.address,
  city: order.customer.city,
  state: order.customer.state
});
.then(() => {
  console.log("Emails sent successfully ✅");
  window.location.href = "order-success.html";
})
.catch(err => {
  console.error("Email error:", err);
  alert("Order placed but email failed");
  window.location.href = "order-success.html";
});

    window.location.href = "order-success.html";
  });
}

/* =========================
   ORDER SUCCESS
========================= */
function renderOrderSuccess() {
  const dateEl = document.getElementById("successDate");
  const paymentEl = document.getElementById("successPayment");
  const itemsEl = document.getElementById("successItems");
  const totalEl = document.getElementById("successTotal");

  if (!dateEl || !paymentEl || !itemsEl || !totalEl) return;

  const order = getLastOrder();

  if (!order) {
    dateEl.textContent = "-";
    paymentEl.textContent = "-";
    itemsEl.textContent = "0";
    totalEl.textContent = "₦0";
    return;
  }

  const itemCount = order.items.reduce((sum, item) => sum + item.quantity, 0);
  const total = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0) + 3000;

  dateEl.textContent = new Date(order.createdAt).toLocaleString();
  paymentEl.textContent = order.paymentMethod;
  itemsEl.textContent = itemCount;
  totalEl.textContent = formatPrice(total);
}

/* =========================
   ORDER HISTORY
========================= */
function renderOrderHistory() {
  const wrap = document.getElementById("orderHistoryList");
  if (!wrap) return;

  const orders = getOrders();

  if (!orders.length) {
    wrap.innerHTML = `
      <div class="empty-state">
        <p>No orders yet.</p>
      </div>
    `;
    return;
  }

  wrap.innerHTML = orders.map((order, index) => {
    const itemCount = order.items.reduce((sum, item) => sum + item.quantity, 0);
    const total = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0) + 3000;

    return `
      <div class="order-item">
        <h4>Order #${orders.length - index}</h4>
        <p>${new Date(order.createdAt).toLocaleString()}</p>
        <p>${itemCount} item(s)</p>
        <p>Payment: ${order.paymentMethod}</p>
        <div class="order-total">${formatPrice(total)}</div>
      </div>
    `;
  }).join("");
}

/* ==========================
   ORDER SYSTEM (ADD HERE)
========================== */

function generateOrderCode() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  function part(length) {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }

  return `GRC-${part(4)}-${part(4)}-${part(4)}`;
}

function generateOrderId() {
  return "GC-" + Math.random().toString(36).substr(2, 9).toUpperCase();
}

function getFutureDate(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toDateString();
}

function placeOrder() {
  const orderCode = generateOrderCode();

  const order = {
    id: orderCode,
    date: new Date().toDateString(),
    status: "Pending",
    total: document.getElementById("total")?.innerText || "0"
  };

  localStorage.setItem("lastOrder", JSON.stringify(order));

  window.location.href = "order-success.html";
}

/* =========================
   ACCOUNT
========================= */
function fillAccount() {
  const user = getUser();
  const userName = document.getElementById("userName");
  const userEmail = document.getElementById("userEmail");

  if (user && userName) {
    userName.textContent = `Welcome ${user.firstName} ${user.lastName}!`;
  }

  if (user && userEmail) {
    userEmail.textContent = user.email;
  }
}

function setupLogout() {
  const logoutBtn = document.getElementById("logoutBtn");
  if (!logoutBtn) return;

  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("greenCentreLoggedIn");
    window.location.href = "welcome.html";
  });
}

/* =========================
   DOM READY
========================= */
document.addEventListener("DOMContentLoaded", function () {
  protectPages();
  updateCartBadge();

  renderHomeSections();
  renderProductGrid("categoryProducts", products);

  setupHomeSearch();
  setupCategoryFilter();
  setupCategorySearch();

  renderProductDetails();
  renderCart();
  renderWishlist();
  renderCheckout();
  renderOrderHistory();
  renderOrderSuccess();

  setupCheckoutForm();
  fillAccount();
  setupLogout();
});