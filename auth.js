document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");
  const signinForm = document.getElementById("signinForm");
  const otpForm = document.getElementById("otpForm");
  const otpBoxes = document.querySelectorAll(".otp-box");

  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

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

      const user = {
        firstName,
        lastName,
        email,
        phone,
        password
      };

      localStorage.setItem("greenCentreUser", JSON.stringify(user));
      window.location.href = "otp.html";
    });
  }

  if (signinForm) {
    signinForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("signinEmail").value.trim();
      const password = document.getElementById("signinPassword").value;

      const savedUser = JSON.parse(localStorage.getItem("greenCentreUser"));

      if (!savedUser) {
        alert("No account found. Please create an account first.");
        return;
      }

      if (savedUser.email === email && savedUser.password === password) {
        localStorage.setItem("greenCentreLoggedIn", "true");
        window.location.href = "index.html";
      } else {
        alert("Invalid email or password.");
      }
    });
  }

  if (otpBoxes.length > 0) {
    otpBoxes.forEach((box, index) => {
      box.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");

        if (this.value && index < otpBoxes.length - 1) {
          otpBoxes[index + 1].focus();
        }
      });

      box.addEventListener("keydown", function (e) {
        if (e.key === "Backspace" && !this.value && index > 0) {
          otpBoxes[index - 1].focus();
        }
      });
    });
  }

  if (otpForm) {
    otpForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const code = Array.from(otpBoxes).map(box => box.value).join("");

      if (code.length !== 6) {
        alert("Please enter the full 6-digit code.");
        return;
      }

      localStorage.setItem("greenCentreLoggedIn", "true");
      window.location.href = "index.html";
    });
  }
});