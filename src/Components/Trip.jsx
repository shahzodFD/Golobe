import React from 'react'
import Top from './Top'
import "../stayle/trip.css"
import TripCard from './TripCard'
import trip1 from "../img/turkiya1.svg"
import trip2 from "../img/australiya2.svg"
import trip3 from "../img/azarbayjon3.svg"
import trip4 from "../img/maldives4.svg"
import trip5 from "../img/fronsuya5.svg"
import trip6 from "../img/usa6.svg"
import trip7 from "../img/Uk7.svg"
import trip8 from "../img/japon8.svg"
import trip9 from "../img/Dubai9.svg"
import tripbanner1 from "../img/tripbanner1.svg"
import tripbanner2 from "../img/tripbanner2.svg"
import TripBanner from './TripBanner'

function Trip() {
  return (
<section className='trip'>
<div className="container">
  
<Top title="Plan your perfect trip"  tex="Search Flights & Places Hire to our most popular destinations" btn="See more places" />
 <div className="trip_wrapper">
    <TripCard img={trip1} title="Istanbul, Turkey"  />
    <TripCard img={trip2} title="Sydney, Australia"  />
    <TripCard img={trip3} title="Baku, Azerbaijan"  />
    <TripCard img={trip4} title="Malé, Maldives"  />
    <TripCard img={trip5} title="Paris, France"  />
    <TripCard img={trip6} title="New York, US"  />
    <TripCard img={trip7} title="London, UK"  />
    <TripCard img={trip8} title="Tokyo, Japan"  />
    <TripCard img={trip9} title="Dubai, UAE"  />
 </div>

<div className="trip_img">
<TripBanner img={tripbanner1} title="Flights" text="Search Flights & Places Hire to our most popular destinations"   />
<TripBanner img={tripbanner2} title="Hotels" text="Search hotels & Places Hire to our most popular destinations"   />
</div>

</div>
</section>
  )
}

export default Trip
