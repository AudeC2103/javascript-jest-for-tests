function initializeValidation() {
  const emailForm = document.getElementById('email-form');
  const emailInput = document.getElementById('email-input');
  const validationMessage = document.getElementById('validation-message');

  // Fonction pour valider l'email
  function validateEmail() {
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      validationMessage.textContent = "Adresse email valide.";
      validationMessage.style.color = "green";
    } else {
      validationMessage.textContent = "Adresse email invalide.";
      validationMessage.style.color = "red";
    }
  }

  // Ajouter un événement lors de la soumission du formulaire
  emailForm.addEventListener('submit', function (e) {
    e.preventDefault();
    validateEmail();
  });

  return { validateEmail };
}

module.exports = { initializeValidation };
