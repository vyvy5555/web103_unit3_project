import express from 'express'
import HackathonsController from '../controllers/hackathons.js'

const router = express.Router()

router.get('/', HackathonsController.getHackathons)

export default router