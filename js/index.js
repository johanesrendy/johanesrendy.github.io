document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const loading = document.getElementById("loading");
  const alert = document.getElementById("alert");
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Reset pesan kesalahan
    document
      .querySelectorAll(".error-message")
      .forEach((element) => (element.textContent = ""));
    document
      .querySelectorAll(".form-control")
      .forEach((element) => element.classList.remove("has-error"));

    // Validasi input
    const nama = document.getElementById("nama").value.trim();
    const email = emailInput.value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    let isValid = true;

    if (nama === "") {
      isValid = false;
      document.getElementById("nama-error").textContent =
        "Nama tidak boleh kosong";
      document.getElementById("nama").classList.add("has-error");
    }

    if (email === "") {
      isValid = false;
      emailError.textContent = "Email tidak boleh kosong";
      emailInput.classList.add("has-error");
    } else if (!isValidEmail(email)) {
      isValid = false;
      emailError.textContent = "Email tidak valid";
      emailInput.classList.add("has-error");
    }

    if (pesan === "") {
      isValid = false;
      document.getElementById("pesan-error").textContent =
        "Pesan tidak boleh kosong";
      document.getElementById("pesan").classList.add("has-error");
    }

    if (isValid) {
      submitBtn.setAttribute("disabled", "true");
      loading.style.display = "block";

      // Simulasi pengiriman pesan (gantilah ini dengan kode pengiriman nyata)
      setTimeout(function () {
        loading.style.display = "none";
        alert.style.display = "block";
        alert.innerHTML =
          '<div class="alert alert-success" role="alert">Pesan terkirim!</div>';
        contactForm.reset();
        submitBtn.removeAttribute("disabled");
      }, 2000); // Gantilah 2000 dengan waktu yang sesuai dengan kebutuhan.
    }
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
