// Ex6
// Ex6

// Fonction pour trouver la valeur maximale dans un tableau de nombres
function findMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return undefined;
    return Math.max(...arr);
  }
  
  // Fonction pour supprimer les valeurs dupliquées dans un tableau
  function removeDuplicates(arr) {
    if (!Array.isArray(arr)) return undefined;
    return [...new Set(arr)];
  }
  
  // Fonction pour vérifier si un tableau contient une valeur spécifique
  function containsValue(arr, value) {
    if (!Array.isArray(arr)) return undefined;
    return arr.includes(value);
  }
  
  // Fonction pour trier un tableau de nombres par ordre croissant
  function sortArray(arr) {
    if (!Array.isArray(arr)) return undefined;
    return arr.slice().sort((a, b) => a - b);
  }
  
  module.exports = { findMax, removeDuplicates, containsValue, sortArray };
  