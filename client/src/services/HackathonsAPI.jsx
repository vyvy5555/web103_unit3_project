const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const getAllHackathons = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/hackathons`);

        if (!response.ok) {
            throw new Error('Failed to fetch hackathons');
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

export default { getAllHackathons }

