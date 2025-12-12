//Contact Me form
(function() {
  const form = document.getElementById('contactForm');
  const toastEl = document.getElementById('submitToast');
  const toast = new bootstrap.Toast(toastEl, { delay: 3000 });

  form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      form.classList.add('was-validated');
      return;
    }
    e.preventDefault();
    form.reset();
    form.classList.remove('was-validated');
    toast.show();
  });
})();