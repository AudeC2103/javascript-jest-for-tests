/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');

describe('addClassToElement', () => {
  let addButton;
  let element;

  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    addButton = document.getElementById('add-class-button');
    element = document.getElementById('element');
    require('./ex1');
  });

  test('should add a new class to the element when the button is clicked', () => {
    addButton.click(); // Simuler un clic sur le bouton
    expect(element.classList.contains('new-class')).toBe(true); // Vérifier que la nouvelle classe est ajoutée
  });
});
