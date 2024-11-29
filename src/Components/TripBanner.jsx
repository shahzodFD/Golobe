import React from 'react'

function TripBanner({title,img,text}) {
  return (
    <div className='tripBanner' style={{backgroundImage:`url(${img})`}}>
   <div className="trip-content">
   <h2>{title}</h2>
    <p>{text}</p>
     <button>Show Filghts</button>
   </div>
      <div className="trip_overlay"></div>
    </div>
  )
}

export default TripBanner
