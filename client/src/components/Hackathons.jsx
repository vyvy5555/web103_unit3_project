import React from 'react'
import '../css/Event.css'

const Hackathon = ({ hackathon = {} }) => {
  const { id, name, city, organizer, tracks, startDate, image } = hackathon

  return (
    <article className="hackathon-card" id={`hackathon-${id}`}>
      {image && <img src={image} alt={name} className="hackathon-image" />}

      <div className="hackathon-info">
        <h3>{name}</h3>
        <p className="meta">{city} — {organizer}</p>
        {tracks && <p className="tracks">{tracks}</p>}
        {startDate && <p className="date">Starts: {startDate}</p>}
      </div>
    </article>
  )
}

const Hackathons = ({ hackathons = [] }) => {
  if (!hackathons || hackathons.length === 0) {
    return <p className="no-hackathons">No hackathons found for this location.</p>
  }

  return (
    <section className="hackathons-list">
      {hackathons.map(h => (
        <Hackathon key={h.id} hackathon={h} />
      ))}
    </section>
  )
}

export default Hackathons
