import { pool } from '../config/database.js'

const getHackathons = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM cities ORDER BY startDate')
        res.status(200).json(results.rows)
    }
    catch (err) {
        res.status(409).json( { error: error.message } )
    }
}

const getHackathonsByCity = async (req, res) => {
    try {
        const cityName = req.params.cityName
        
        const cityResult = await pool.query(
            'SELECT * FROM cities WHERE name = $1',
            [cityName]
        )

        if (cityResult.rows.length === 0) {
            return res.status(404).json({ error: 'City not found' })
        }

        const cityId = cityResult.rows[0].id

        //Find hackathons in that city
        const hackathonResult = await pool.query(
            'SELECT * FROM hackathons WHERE cityId = $1',
            [cityId]
        )

        res.json(hackathonResult.rows)
    }
    catch (error) {
        res.status(409).json( { error: error.message} )
    }
}

export default { getHackathons, getHackathonsByCity }