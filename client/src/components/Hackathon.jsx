import React from 'react'
import '../css/Event.css'

const Hackathon = ({ hackathon = {} }) => {
  const { id, name, city, organizer, tracks, startDate, image } = hackathon

  return (
    <article className="hackathon-card">
      {image && (
        <img src={image} alt={name} className="hackathon-image" />
      )}

      <div className="hackathon-info">
        <h3>{name}</h3>
        <p className="meta">{city} — {organizer}</p>
        {tracks && <p className="tracks">{tracks}</p>}
        {startDate && <p className="date">Starts: {startDate}</p>}
      </div>
    </article>
  )
}

export default Hackathon
