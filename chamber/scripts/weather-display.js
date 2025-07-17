import { apiFetch } from "./index.js";

const currentType = 'current';
const forecastType = 'forecast';

const currentTemp = document.querySelector('#current-temp');
const currentDescr = document.querySelector('#current-descr');
const weatherIcon = document.querySelector('#weather-icon');

const dayOneTemp = document.querySelector('#day-one-temp');
const dayTwoTemp = document.querySelector('#day-two-temp');
const dayThreeTemp = document.querySelector('#day-three-temp');

function displayCurrentWeather(data) {
    currentTemp.textContent = `${data.main.temp}°F`;
    let iconcode = data.weather[0].icon;
    let iconurl = `https://openweathermap.org/img/w/${iconcode}.png`;
    let description = data.weather[0].description;
    weatherIcon.setAttribute('src', iconurl);
    weatherIcon.setAttribute('alt', description);
    currentDescr.textContent = description.charAt(0).toUpperCase() + description.slice(1);
};

function displayForecast(data) {
    const midDayForecasts = data.list.filter(forecast =>
        forecast.dt_txt.endsWith("12:00:00")
    );

    if (midDayForecasts.length >= 3) {
        dayOneTemp.textContent = `${midDayForecasts[0].main.temp}°F`;
        dayTwoTemp.textContent = `${midDayForecasts[1].main.temp}°F`;
        dayThreeTemp.textContent = `${midDayForecasts[2].main.temp}°F`;
    } else {
        console.warn("Not enough midday forecasts available.");
    }
}

let data = null;
data = await apiFetch(currentType);
displayCurrentWeather(data);

data = await apiFetch(forecastType);
displayForecast(data);
