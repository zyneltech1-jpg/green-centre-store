import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

console.log("AUTH LOADED");

window.addEventListener("load", () => {
  console.log("PAGE FULLY LOADED");

  const signupForm = document.getElementById("signupForm");
  const signinForm = document.getElementById("signinForm");

  console.log("signupForm:", signupForm);
  console.log("signinForm:", signinForm);

  if (signupForm) {
    signupForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      e.stopPropagation();

      alert("SIGNUP JS IS CATCHING SUBMIT");

      const firstName = document.getElementById("firstName").value.trim();
      const lastName = document.getElementById("lastName").value.trim();
      const email = document.getElementById("signupEmail").value.trim();
      const phone = document.getElementById("phoneNumber").value.trim();
      const password = document.getElementById("signupPassword").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

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
        console.error("SIGNUP ERROR:", error);
        alert(error.message);
      }
    });
  }

  if (signinForm) {
    signinForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      e.stopPropagation();

      alert("SIGNIN JS IS CATCHING SUBMIT");

      const email = document.getElementById("signinEmail").value.trim();
      const password = document.getElementById("signinPassword").value;

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
        console.error("SIGNIN ERROR:", error);
        alert(error.message);
      }
    });
  }
});