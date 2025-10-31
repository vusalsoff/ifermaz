document.addEventListener("DOMContentLoaded", () => {
  // ✅ REGISTER FORM
  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault(); // səhifə yenilənməsin

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const pass = document.getElementById("pass").value.trim();
      const re_pass = document.getElementById("re_pass").value.trim();
      const agree = document.getElementById("agree-term").checked;

      // --- Yoxlamalar ---
      if (!name || !email || !pass || !re_pass) {
        alert("Bütün sahələri doldurun!");
        return;
      }

      if (!email.includes("@") || !email.includes(".")) {
        alert("Email düzgün deyil!");
        return;
      }

      if (/^\d{4}$/.test(pass)) {
        alert("Parol yalnız 4 rəqəmdən ibarət ola bilməz!");
        return;
      }

      if (/^\d+$/.test(pass)) {
        alert("Parol yalnız rəqəmlərdən ibarət ola bilməz!");
        return;
      }

      if (pass.length < 6) {
        alert("Parol ən azı 6 simvoldan ibarət olmalıdır!");
        return;
      }

      if (pass !== re_pass) {
        alert("Parollar uyğun gəlmir!");
        return;
      }

      if (!agree) {
        alert("Qeydiyyat üçün şərtlərlə razı olmalısınız!");
        return;
      }

      // ✅ Hər şey düzgündürsə yönləndir
      window.location.replace("./index.html");
    });
  }

  // ✅ LOGIN FORM
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("your_email").value.trim();
      const pass = document.getElementById("your_pass").value.trim();

      // --- Yoxlamalar ---
      if (!email || !pass) {
        alert("Email və parol boş ola bilməz!");
        return;
      }

      if (!email.includes("@") || !email.includes(".")) {
        alert("Email düzgün deyil!");
        return;
      }

      if (/^\d{4}$/.test(pass)) {
        alert("Parol yalnız 4 rəqəmdən ibarət ola bilməz!");
        return;
      }

      if (/^\d+$/.test(pass)) {
        alert("Parol yalnız rəqəmlərdən ibarət ola bilməz!");
        return;
      }

      if (pass.length < 6) {
        alert("Parol ən azı 6 simvoldan ibarət olmalıdır!");
        return;
      }

      // ✅ Hər şey düzgündürsə yönləndir
      window.location.replace("https://yerli-xidmet.preview.emergentagent.com/");
    });
  }
});
