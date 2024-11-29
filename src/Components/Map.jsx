import React from 'react'
import Top from './Top'
import maps from '../img/maps.svg'
import '../stayle/map.css'

function Map() {
  return (
    <section className='map'>
        <div className="container">
            <Top title="Let's go places together" tex="Discover the latest offers and news and start planning your next trip with us." btn="See All" />
            <img src={maps} alt="" />
        </div>
    </section>
  )
}

export default Map
