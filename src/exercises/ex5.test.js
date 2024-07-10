const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Mise à jour du chemin vers le fichier HTML
const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');
const scriptContent = fs.readFileSync(path.resolve(__dirname, './ex5.js'), 'utf8');

let dom;
let document;

describe('Exercice 5 - Survol de zone', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;

    // Exécuter le script ex5.js dans le contexte du DOM
    const scriptElement = document.createElement("script");
    scriptElement.textContent = scriptContent;
    document.body.appendChild(scriptElement);
  });

  test('Met à jour le texte lorsque la zone est survolée', () => {
    const hoverArea = document.getElementById('hover-area');
    const interactionResult = document.getElementById('interaction-result');

    // Simuler l'événement mouseover
    const event = new dom.window.MouseEvent('mouseover', {
      view: dom.window,
      bubbles: true,
      cancelable: true
    });

    hoverArea.dispatchEvent(event);

    // Vérifier que le texte a été mis à jour
    expect(interactionResult.textContent).toBe('Vous avez survolé la zone !');
  });
});
