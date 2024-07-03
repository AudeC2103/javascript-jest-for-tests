// script.js
const addButton = document.getElementById('add-class-button');
const element = document.getElementById('element');

function addClassToElement() {
  // Your code here: Add a CSS class to the 'element' div.
  element.classList.add('new-class'); // Ajoute la classe 'new-class' à l'élément
}

// Ajoute un écouteur d'événements au bouton pour qu'il appelle la fonction addClassToElement lors du clic
addButton.addEventListener('click', addClassToElement);
