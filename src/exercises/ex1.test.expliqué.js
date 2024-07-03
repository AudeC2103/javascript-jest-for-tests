// ex1.test.js

// Utilise Jest pour simuler un environnement de navigateur en utilisant jsdom.
// @jest-environment jsdom est un commentaire spécial qui indique à Jest d'utiliser jsdom pour les tests.
 /**
 * @jest-environment jsdom
 */

// Importer les modules nécessaires
// require est une fonction utilisée pour inclure des modules dans un fichier Node.js.
const fs = require('fs'); // Le module fs permet de lire les fichiers du système de fichiers.
const path = require('path'); // Le module path permet de manipuler les chemins de fichiers.

// Lire le contenu du fichier HTML pour l'utiliser dans les tests.
// fs.readFileSync lit le fichier spécifié de manière synchrone et retourne son contenu.
// path.resolve génère un chemin absolu vers le fichier index.html.
const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');

// Décrire un groupe de tests pour la fonction addClassToElement.
// describe est une fonction Jest qui regroupe plusieurs tests.
describe('addClassToElement', () => {
  let addButton;
  let element;

  // Réinitialiser le DOM avant chaque test
  // beforeEach est une fonction Jest qui exécute une fonction avant chaque test.
  beforeEach(() => {
    // Injecter directement le contenu HTML nécessaire pour les tests
    // document.body.innerHTML permet de définir le contenu HTML du body du document.
    document.body.innerHTML = `
      <div class="container">
        <button id="add-class-button">Add Class</button>
        <div id="element" class="initial-class"></div>
      </div>
    `;
    
    // Sélectionner les éléments nécessaires
    addButton = document.getElementById('add-class-button');
    element = document.getElementById('element');
    
    // Charger le script qui contient la fonction à tester
    // require('./ex1') inclut et exécute le fichier ex1.js pour que les fonctions et les écouteurs d'événements soient définis.
    require('./ex1');
  });

  // Définir un test pour vérifier que la classe est ajoutée après un clic
  // test est une fonction Jest qui définit un test unitaire.
  test('should add a new class to the element when the button is clicked', () => {
    // Simuler un clic sur le bouton
    // addButton.click simule un clic sur l'élément bouton.
    addButton.click();
    
    // Vérifier que la nouvelle classe est ajoutée à l'élément
    // expect est une fonction Jest qui crée une assertion.
    // element.classList.contains vérifie si l'élément contient la classe spécifiée.
    // toBe(true) vérifie que la valeur est vraie.
    expect(element.classList.contains('new-class')).toBe(true);
  });
});
