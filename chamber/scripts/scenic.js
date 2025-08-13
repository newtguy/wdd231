const url = "data/scenic.json";
let scenicCache = null;

const getScenicData = async () => {
    if (scenicCache !== null) {
        return scenicCache;
    }

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            scenicCache = data.scenes;
            return scenicCache;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export { getScenicData };