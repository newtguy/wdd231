import { getAviationData } from "./index.js";

const params = new URLSearchParams(window.location.search);
const airportCode = params.get("airportCode");
const displayContainer = document.getElementById('displayAirportInfo');

if (airportCode) {
    const apiKey = '3e210de545f7ef11bbde41d9a394862d';
    const url = `https://api.aviationstack.com/v1/airports?access_key=${apiKey}&icao_code=${airportCode}`;
    const data = await getAviationData(url);
    displayAirportInfo(data);
    console.log("Airport information data:", data);
} else {
    console.log("Missing airportCode in url...")
}

async function displayAirportInfo(data) {
    const airport = data.data[0];
    displayContainer.innerHTML = "";

    const card = document.createElement("section");
    const title = document.createElement("h3");
    const location = document.createElement("p");
    const timezone = document.createElement("p");
    const coordinates = document.createElement("p");
    const phone = document.createElement("p");
    card.classList.add("card");


    title.textContent = `${airport.airport_name} (${airport.iata_code || airport.icao_code})`;
    location.textContent = `${airport.city_iata_code}, ${airport.country_name}`;
    timezone.textContent = `Timezone: ${airport.timezone} (GMT${airport.gmt})`;
    coordinates.textContent = `Latitude: ${airport.latitude} | Longitude: ${airport.longitude}`;
    phone.textContent = `Phone: ${airport.phone_number || "No phone number available"}`;

    card.appendChild(title);
    card.appendChild(location);
    card.appendChild(timezone);
    card.appendChild(coordinates);
    card.appendChild(phone);

    displayContainer.appendChild(card);
}