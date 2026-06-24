import pool from './database.js'
import './dotenv.js'
import hackathonData from '../data/hackathons.js'

const createHackathonsTable = async() => {
    const createTableQuery = `
        DROP TABLE IF EXISTS hackathons;

        CREATE TABLE IF NOT EXISTS hackathons (
            id SERIAL PRIMARY KEY,
            cityId INTEGER NOT NULL,
            name VARCHAR(255) NOT NULL,
            city VARCHAR(255) NOT NULL,
            organizer VARCHAR(255) NOT NULL,
            tracks VARCHAR(255) NOT NULL,
            startDate DATE NOT NULL,
            image VARCHAR(255) NOT NULL
        )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 hackathons table created successfully')
    }
    catch (err) {
        console.log('⚠️ error creating gifts table', err)
    }
}

const seedHackathonsTable = async() => {
    await createHackathonsTable()

    hackathonData.forEach((hackathon) => {
        const insertQuery = {
            text: 'INSERT INTO hackathons (name, city, cityId, organizer, tracks, startDate, image) VALUES ($1, $2, $3, $4, $5, $6, $7)'
        }

        const values = [
            hackathon.name,
            hackathon.city,
            hackathon.cityId,
            hackathon.organizer, 
            hackathon.tracks,
            hackathon.startDate,
            hackathon.image
        ]

        pool.query(insertQuery, values,(err, res) => {
            if (err) {
                console.log('⚠️ error inserting gift', err)
                return
            }
            console.log(`✅ ${hackathon.name} added successfully`)
        })
    });
}

seedHackathonsTable()