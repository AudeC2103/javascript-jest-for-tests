// ex1.js

// Sélectionne l'élément bouton avec l'ID 'add-class-button'.
// document.getElementById est une méthode JavaScript utilisée pour sélectionner un élément HTML par son ID.
const addButton = document.getElementById('add-class-button');

// Sélectionne l'élément <div> avec l'ID 'element'.
const element = document.getElementById('element');

// Définir une fonction qui ajoute une classe CSS à l'élément <div>.
function addClassToElement() {
  // Utilise element.classList.add pour ajouter la classe CSS 'new-class' à l'élément <div>.
  element.classList.add('new-class'); // Ajoute la classe 'new-class'
}

// Ajouter un écouteur d'événement au bouton pour appeler la fonction lors du clic.
// addEventListener est une méthode qui attache un gestionnaire d'événement à un élément.
// Le gestionnaire d'événement sera exécuté lorsque l'événement spécifié se produit.
addButton.addEventListener('click', addClassToElement);
