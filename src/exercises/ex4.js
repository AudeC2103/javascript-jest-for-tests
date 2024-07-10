// Objectif:
// Récupérer des données météorologiques via une API et les afficher sur la page.

// Étapes:
// Créez une fonction fetchData dans le fichier ex4.js pour récupérer les données de l'API.
// Créez une fonction displayData pour afficher les données récupérées sur la page.
// Ajoutez un écouteur d'événement DOMContentLoaded pour charger les données lorsque la page est prête.

import axios from 'axios';

// Coordonnées de Bordeaux et clé API
const longitude = 44.83;
const latitude = -0.57;
const api_key = '891fcaaa0f613df11046ed15bd1a4607';
const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`;

// Fonction pour récupérer les données météorologiques
export const fetchData = async () => {
    try {
        const response = await axios.get(api_url);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        return null;
    }
};

// Fonction pour afficher les données sur la page
const displayData = async () => {
    const data = await fetchData();
    console.log(data)
    if (data) {
        const weatherDataDiv = document.getElementById('weather-data');
        weatherDataDiv.innerHTML = `
            <h3>Météo à Bordeaux</h3>
            <p>Température : ${(data.main.temp - 273.15).toFixed(2)}°C</p>
            <p>Humidité : ${data.main.humidity}%</p>
        `;
    }
};

// Ajoute un écouteur d'événement pour charger les données lorsque la page est prête
document.addEventListener('DOMContentLoaded', displayData);
