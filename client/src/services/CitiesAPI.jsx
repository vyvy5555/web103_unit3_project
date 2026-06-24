const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const getAllCities = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/cities`);

        if (!response.ok) {
            throw new Error('Failed to fetch cities');
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

const getCityHackathons = async (cityName) => {
    try {
        const response = await fetch(
            `${BASE_URL}/api/cities/${cityName}/hackathons`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch city hackathons');
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

export default { getAllCities, getCityHackathons }