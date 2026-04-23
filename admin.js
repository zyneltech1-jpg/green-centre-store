import { db, auth } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const productForm = document.getElementById("productForm");
const adminProducts = document.getElementById("adminProducts");
const adminOrders = document.getElementById("adminOrders");

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "welcome.html";
    return;
  }

  await loadProducts();
  await loadOrders();
});

if (productForm) {
  productForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("productName").value.trim();
    const price = Number(document.getElementById("productPrice").value);
    const category = document.getElementById("productCategory").value.trim();
    const image = document.getElementById("productImage").value.trim();
    const description = document.getElementById("productDescription").value.trim();

    try {
      await addDoc(collection(db, "products"), {
        name,
        price,
        category,
        image,
        description,
        createdAt: new Date().toISOString()
      });

      productForm.reset();
      await loadProducts();
      alert("Product added successfully.");
    } catch (error) {
      alert(error.message);
    }
  });
}

async function loadProducts() {
  if (!adminProducts) return;

  const snapshot = await getDocs(collection(db, "products"));

  if (snapshot.empty) {
    adminProducts.innerHTML = "<p style='padding:14px;'>No products yet.</p>";
    return;
  }

  adminProducts.innerHTML = "";

  snapshot.forEach((docSnap) => {
    const product = docSnap.data();

    const item = document.createElement("div");
    item.className = "order-item";
    item.innerHTML = `
      <h4>${product.name}</h4>
      <p>${product.category}</p>
      <p>₦${product.price.toLocaleString()}</p>
      <button class="small-btn small-light-btn" data-id="${docSnap.id}">Delete</button>
    `;

    const deleteBtn = item.querySelector("button");
    deleteBtn.addEventListener("click", async () => {
      await deleteDoc(doc(db, "products", docSnap.id));
      await loadProducts();
    });

    adminProducts.appendChild(item);
  });
}

async function loadOrders() {
  if (!adminOrders) return;

  const snapshot = await getDocs(collection(db, "orders"));

  if (snapshot.empty) {
    adminOrders.innerHTML = "<p style='padding:14px;'>No orders yet.</p>";
    return;
  }

  adminOrders.innerHTML = "";

  snapshot.forEach((docSnap) => {
    const order = docSnap.data();

    const total = order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0) + 3000;

    const item = document.createElement("div");
    item.className = "order-item";
    item.innerHTML = `
      <h4>Order #${docSnap.id.slice(0, 6)}</h4>
      <p>Payment: ${order.paymentMethod}</p>
      <p>Status: ${order.status || "Pending"}</p>
      <p>Total: ₦${total.toLocaleString()}</p>
      <button class="small-btn small-green-btn" data-id="${docSnap.id}">Mark Delivered</button>
    `;

    const statusBtn = item.querySelector("button");
    statusBtn.addEventListener("click", async () => {
      await updateDoc(doc(db, "orders", docSnap.id), {
        status: "Delivered"
      });
      await loadOrders();
    });

    adminOrders.appendChild(item);
  });
}