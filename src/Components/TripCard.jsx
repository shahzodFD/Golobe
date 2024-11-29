import React from 'react'

function TripCard({img,title}) {
  return (
    <div className='trip_card'>
      <img src={img} alt="" />
      <div>
      <h5>{title}</h5>
      <p>Flights • Hotels • Resorts</p>
      </div>
  
    </div>
  )
}

export default TripCard
