console.log("AUTH JS IS RUNNING")

// 🔥 IMPORT FIREBASE
import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// ==========================
// 🟢 SIGN UP
// ==========================
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // ✅ VALIDATION
    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // 🧠 USER OBJECT (optional local storage)
    const user = {
      firstName,
      lastName,
      email,
      phone
    };

    // 🔥 FIREBASE SIGN UP
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Account created successfully 🔥");

        // save user locally (optional)
        localStorage.setItem("greenCentreUser", JSON.stringify(user));

        // redirect
        window.location.href = "index.html";
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  });
}


// ==========================
// 🔵 SIGN IN
// ==========================
const signinForm = document.getElementById("signinForm");

if (signinForm) {
  signinForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // 🔥 FIREBASE LOGIN
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Login successful ✅");

        localStorage.setItem("greenCentreLoggedIn", "true");

        window.location.href = "index.html";
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  });
}