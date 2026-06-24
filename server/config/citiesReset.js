import pool from './database.js';
import './dotenv.js'
import cityData from '../data/cities.js'

const createCitiesTable = async () => {
    const query = `
        DROP TABLE IF EXISTS cities;

        CREATE TABLE IF NOT EXISTS cities (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
        );
    `;

    try {
        await pool.query(query);
        console.log("🎉 cities table created");
    }
    catch (err) {
        console.log('⚠️ error creating gifts table', err)
    } 
};

const seedCitiesTable = async () => {
    await createCitiesTable();

    const cities = [
        { name: "Irvine", slug: "irvine", image: "" },
        { name: "Los Angeles", slug: "los-angeles", image: "" },
        { name: "San Francisco", slug: "san-francisco", image: "" },
        { name: "Sacramento", slug: "sacramento", image: "" }
    ];

    for (const city of cities) {
        await pool.query(
            `INSERT INTO cities (name) VALUES ($1)`, [city.name]
        );

        console.log(`✅ ${city.name} added`);
    }
};

seedCitiesTable();