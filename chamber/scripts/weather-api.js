const lat = 37.09;
const lon = -113.57;
const units = 'imperial';
const api = '35515945e4e08870fde07b1df8d178ca';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=${units}`;
let weatherCache = null;

async function apiFetch() {
    if (weatherCache !== null) {
        return weatherCache;
    }

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            weatherCache = data;
            return weatherCache;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

export { apiFetch };