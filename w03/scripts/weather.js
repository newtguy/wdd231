const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#current-descr');
const lat = 49.75;
const lon = 6.64;
const units = 'imperial';
const api = '35515945e4e08870fde07b1df8d178ca';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=${units}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

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