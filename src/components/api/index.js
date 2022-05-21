const url = 'https://covid.ourworldindata.org/data/owid-covid-data.json';

export const fetchData = async () => {
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (error) {
        return error;
    }
};
