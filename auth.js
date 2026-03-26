import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

console.log("AUTH FILE LOADED");

const signupForm = document.querySelector("#signupForm");
const signinForm = document.querySelector("#signinForm");

if (signupForm) {
  console.log("SIGNUP FORM FOUND");

  signupForm.onsubmit = async function (e) {
    e.preventDefault();
    console.log("SIGNUP SUBMIT CAUGHT");

    const firstName = document.querySelector("#firstName").value.trim();
    const lastName = document.querySelector("#lastName").value.trim();
    const email = document.querySelector("#signupEmail").value.trim();
    const phone = document.querySelector("#phoneNumber").value.trim();
    const password = document.querySelector("#signupPassword").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;

    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem(
        "greenCentreUser",
        JSON.stringify({ firstName, lastName, email, phone })
      );
      localStorage.setItem("greenCentreLoggedIn", "true");
      alert("Account created successfully 🔥");
      window.location.href = "index.html";
    } catch (error) {
      console.log("SIGNUP ERROR:", error);
      alert(error.message);
    }
  };
}

if (signinForm) {
  console.log("SIGNIN FORM FOUND");

  signinForm.onsubmit = async function (e) {
    e.preventDefault();
    console.log("SIGNIN SUBMIT CAUGHT");

    const email = document.querySelector("#signinEmail").value.trim();
    const password = document.querySelector("#signinPassword").value;

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("greenCentreLoggedIn", "true");
      alert("Login successful ✅");
      window.location.href = "index.html";
    } catch (error) {
      console.log("SIGNIN ERROR:", error);
      alert(error.message);
    }
  };
}