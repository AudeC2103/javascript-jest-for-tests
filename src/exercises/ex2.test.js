/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');

describe('showMessage', () => {
  let clickMeButton;
  let message;

  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    clickMeButton = document.getElementById('click-me-button');
    message = document.getElementById('message');
    require('./ex2');
  });

  test('should change the text content of the message paragraph when the button is clicked', () => {
    clickMeButton.click(); // Simuler un clic sur le bouton
    expect(message.textContent).toBe('Le message a été modifié!'); // Vérifier que le texte est modifié
  });
});
