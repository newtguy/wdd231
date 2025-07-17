import { apiFetch } from "./index.js";

const currentTemp = document.querySelector('#current-temp');
const currentDesc = document.querySelector()

function displayResults(data) {
    currentTemp.textContent = `${data.main.temp}°`;
    let iconcode = data.weather[0].icon;
    let iconurl = `https://openweathermap.org/img/w/${iconcode}.png`
    let descrip = data.weather[0].description;
    weatherIcon.setAttribute('src', iconurl);
    weatherIcon.setAttribute('alt', descrip);

    captionDesc.textContent = data.weather[0].description;
    captionDesc.textContent = captionDesc.textContent.toUpperCase();
};

const data = await apiFetch();
displayResults(data);