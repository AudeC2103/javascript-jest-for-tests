// Ajoutez ceci en haut du fichier ex3.test.js
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

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
    dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });
    document = dom.window.document;
    global.window = dom.window;
    global.document = dom.window.document;

    // Initialiser la validation
    ({ validateEmail } = initializeValidation());

    // Forcer le chargement du DOM pour JSDOM
    return new Promise((resolve) => {
      dom.window.addEventListener('load', () => {
        resolve();
      });
    });
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

  test('devrait empêcher la soumission du formulaire par défaut', () => {
    const emailForm = document.getElementById('email-form');
    const event = new dom.window.Event('submit', {
      bubbles: true,
      cancelable: true
    });

    let isDefaultPrevented = false;
    emailForm.addEventListener('submit', (e) => {
      isDefaultPrevented = e.defaultPrevented;
    });

    emailForm.dispatchEvent(event);
    expect(isDefaultPrevented).toBe(true);
  });
});
