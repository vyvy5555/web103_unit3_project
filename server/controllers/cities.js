import { pool } from '../config/database.js'

const getCities = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM cities ORDER BY id ASC')
        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(409).json( { error: error.message } )
    }
}

// const getCitiesById = async (req, res) => {
//     try {
//         const selectQuery = `
//             SELECT name
//             FROM cities
//             WHERE id = $1
//         `
//         const cityId = req.params.cityId
//         const results = await pool.query(selectQuery, [cityId])
//         res.status(200).json(results.rows[0])
//     }
//     catch (error) {
//         res.status(409).json( { error: error.message} )
//     }
// }

export default { getCities }