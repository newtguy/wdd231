import { getAviationData } from "./index.js";

const params = new URLSearchParams(window.location.search);
const airportCode = params.get("airportCode");
const apiKey = '9025d0049e314ae0b48a809ff96e272e';

let myHeaders = new Headers();

//pasted from checkwx website
let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

if (airportCode) {
    const url = `https://api.checkwx.com/metar/${airportCode}/decoded?x-api-key=${apiKey}`;
    const data = await getAviationData(url, requestOptions);
    // console.log("Weather data:", data);
    displayWeather(data);
} else {
    console.log("Missing airportCode in url...")
}

async function displayWeather(data) {
    const weatherData = data.data[0];

    const displayContainer = document.getElementById("displayWeather");
    const card = document.createElement("section");
    const rawMetar = document.createElement("p");
    const flightCategory = document.createElement("span");
    const title = document.createElement("h3");
    const location = document.createElement("p");
    const observed = document.createElement("p");
    const details = document.createElement("div");

    card.classList.add("card");

    rawMetar.classList.add("rawMetar");
    rawMetar.textContent = weatherData.raw_text;

    flightCategory.classList.add("flightCategory");
    flightCategory.textContent = weatherData.flight_category;

    switch (weatherData.flight_category) {
        case "VFR": flightCategory.style.backgroundColor = "#4CAF50"; break;
        case "IFR": flightCategory.style.backgroundColor = "#f44336"; break;
        default: flightCategory.style.backgroundColor = "#757575"; break;
    }

    title.textContent = `${weatherData.station.name} (${weatherData.icao})`;
    title.appendChild(flightCategory);

    location.textContent = weatherData.station.location;

    observed.textContent = `Observed: ${new Date(weatherData.observed).toLocaleString()}`;

    details.classList.add("details");
    details.innerHTML = `
    <p><strong>Temperature:</strong> ${weatherData.temperature.celsius}°C (${weatherData.temperature.fahrenheit}°F)</p>
    <p><strong>Dewpoint:</strong> ${weatherData.dewpoint.celsius}°C (${weatherData.dewpoint.fahrenheit}°F)</p>
    <p><strong>Humidity:</strong> ${weatherData.humidity.percent}%</p>
    <p><strong>Barometer:</strong> ${weatherData.barometer.hg} inHg (${weatherData.barometer.mb} mb)</p>
    <p><strong>Wind:</strong> ${weatherData.wind.degrees}° at ${weatherData.wind.speed_kts} kts (Gust: ${weatherData.wind.gust_kts} kts)</p>
    <p><strong>Visibility:</strong> ${weatherData.visibility.miles_text} miles (${weatherData.visibility.meters_text} m)</p>
    <p><strong>Elevation:</strong> ${weatherData.elevation.feet} ft (${weatherData.elevation.meters} m)</p>
    <p><strong>Clouds:</strong> ${weatherData.clouds.map(c => `${c.text} at ${c.feet} ft`)}</p>`;

    card.appendChild(rawMetar);
    card.appendChild(title);
    card.appendChild(location);
    card.appendChild(observed);
    card.appendChild(details);

    displayContainer.appendChild(card);
}