import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const signinForm = document.getElementById("signinForm");

  if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const firstName = document.getElementById("firstName")?.value.trim();
      const lastName = document.getElementById("lastName")?.value.trim();
      const email = document.getElementById("signupEmail")?.value.trim();
      const phone = document.getElementById("phoneNumber")?.value.trim();
      const password = document.getElementById("signupPassword")?.value;
      const confirmPassword = document.getElementById("confirmPassword")?.value;

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

        const user = {
          firstName,
          lastName,
          email,
          phone
        };

        localStorage.setItem("greenCentreUser", JSON.stringify(user));
        localStorage.setItem("greenCentreLoggedIn", "true");

        alert("Account created successfully 🔥");
        window.location.href = "index.html";
      } catch (error) {
        alert(error.message);
        console.error("Signup error:", error);
      }
    });
  }

  if (signinForm) {
    signinForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("signinEmail")?.value.trim();
      const password = document.getElementById("signinPassword")?.value;

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
        alert(error.message);
        console.error("Signin error:", error);
      }
    });
  }
});