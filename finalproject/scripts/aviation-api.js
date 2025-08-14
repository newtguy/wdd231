let dataCache = null;

const getAviationData = async (url, requestOptions = null) => {
    if (dataCache !== null) {
        return dataCache;
    }

    try {
        const response = await fetch(url, requestOptions);

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