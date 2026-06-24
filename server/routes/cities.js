import express from 'express'
import CitiesController from '../controllers/cities.js'
import HackathonsController from '../controllers/hackathons.js'

const router = express.Router()

router.get('/', CitiesController.getCities)

router.get('/:cityName', HackathonsController.getHackathonsByCity)

export default router