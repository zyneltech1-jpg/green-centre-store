import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  doc,
  setDoc
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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "user", user.uid), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        createdAt: new Date().toISOString()
      });

      localStorage.setItem(
        "greenCentreUser",
        JSON.stringify({ firstName, lastName, email, phone })
      );
      localStorage.setItem("greenCentreLoggedIn", "true");

      alert("Account created successfully 🔥");
      window.location.href = "index.html";
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  });
}

  if (signinForm) {
  signinForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    e.stopPropagation();

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
      alert(error.message);
      console.log(error);
    }
  });
}
});