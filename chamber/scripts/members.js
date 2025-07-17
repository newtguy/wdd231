const url = "data/members.json";
let memberCache = null;

const getMemberData = async () => {
    if (memberCache !== null) {
        return memberCache;
    }

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            memberCache = data.members;
            return memberCache;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export { getMemberData };