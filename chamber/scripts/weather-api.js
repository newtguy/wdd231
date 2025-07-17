const lat = 37.09;
const lon = -113.57;
const units = 'imperial';
const api = '35515945e4e08870fde07b1df8d178ca';

const urls = {
    current: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=${units}`,
    forecast: `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api}&units=${units}`
};

let url = null;
let weatherCache = {
    current: null,
    forecast: null
};

async function apiFetch(type = 'current') {
    if (weatherCache[type] != null) {
        return weatherCache[type];
    }

    if (type == 'current') {
        url = urls.current;
    } else if (type == 'forecast') {
        url = urls.forecast;
    } else {
        throw Error("Please use correct type: 'current' OR 'forecast'")
    }

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            weatherCache[type] = data;
            return weatherCache[type];
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

export { apiFetch };