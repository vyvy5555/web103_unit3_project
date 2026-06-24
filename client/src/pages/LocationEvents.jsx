import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CitiesAPI from '../services/CitiesAPI'
import '../css/LocationEvents.css'
import Hackathons from '../components/Hackathons'

const LocationEvents = () => {
    const { cityName } = useParams()
    const [location, setLocation] = useState(null)
    const [events, setEvents] = useState([])

    useEffect(() => {
        (async () => {
            try {
                // fetch city info
                const cities = await CitiesAPI.getAllCities()
                const found = cities.find(c => (c.name || '').toLowerCase() === (cityName || '').toLowerCase())
                setLocation(found || { name: cityName })

                // fetch hackathons for city
                const cityHackathons = await CitiesAPI.getCityHackathons(cityName)
                setEvents(cityHackathons)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [cityName])

    return (
        <div className="location-events">
            <header>
                <div className="location-image">
                    <img src={location && location.image} alt={location && location.name} />
                </div>

                <div className="location-info">
                    <h2>{location ? location.name : cityName}</h2>
                    {location && <p>{location.city || ''}{location.organizer ? `, ${location.organizer}` : ''}{location.tracks ? `, ${location.tracks}` : ''}</p>}
                </div>
            </header>

            <main>
                <Hackathons hackathons={events} />
            </main>
        </div>
    )
}

export default LocationEvents