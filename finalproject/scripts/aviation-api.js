// if button = airports
let url = "https://api.aviationapi.com/v1/airports";

let dataCache = null;

const getAviationData = async () => {
    if (dataCache !== null) {
        return dataCache;
    }

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            dataCache = data;
            return dataCache;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export { getAviationData };