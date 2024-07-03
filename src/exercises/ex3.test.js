const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');
const { initializeValidation } = require('./ex3');

// Charger le fichier HTML
const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');

let dom;
let document;
let validateEmail;

describe('Validation d\'email', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    global.window = dom.window;
    global.document = dom.window.document;

    // Initialiser la validation
    ({ validateEmail } = initializeValidation());

    // Réinitialiser les éléments du DOM pour chaque test
    const emailInput = document.getElementById('email-input');
    const validationMessage = document.getElementById('validation-message');
    emailInput.value = '';
    validationMessage.textContent = '';
  });

  test('devrait afficher "Adresse email valide." pour un email valide', () => {
    const emailInput = document.getElementById('email-input');
    const validationMessage = document.getElementById('validation-message');
    emailInput.value = 'test@example.com';
    validateEmail();
    expect(validationMessage.textContent).toBe('Adresse email valide.');
    expect(validationMessage.style.color).toBe('green');
  });

  test('devrait afficher "Adresse email invalide." pour un email invalide', () => {
    const emailInput = document.getElementById('email-input');
    const validationMessage = document.getElementById('validation-message');
    emailInput.value = 'invalid-email';
    validateEmail();
    expect(validationMessage.textContent).toBe('Adresse email invalide.');
    expect(validationMessage.style.color).toBe('red');
  });
});
