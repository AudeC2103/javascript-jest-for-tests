// Objectif:
// Écouter l'événement de survol sur une zone et mettre à jour le contenu textuel en conséquence.

// Étapes:
// Ajoutez un écouteur d'événement mouseover pour l'élément avec l'ID hover-area.
// Mettez à jour le contenu de l'élément interaction-result lorsque l'utilisateur survole la zone.

const hoverArea = document.getElementById('hover-area');
const interactionResult = document.getElementById('interaction-result');

// Ajoute un écouteur d'événement pour détecter le survol de la zone
hoverArea.addEventListener('mouseover', () => {
    // Mise à jour du contenu textuel lorsque l'utilisateur survole la zone
    interactionResult.textContent = 'Vous avez survolé la zone !';
});
