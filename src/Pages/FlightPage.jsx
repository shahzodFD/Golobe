import React from 'react'
import HeroGlobal from '../Components/HeroGlobal'
import samolet from '../img/samolet.svg'
import Map from '../Components/Map'
import Banner from '../Components/Banner'
import GreenBanner from '../Components/GreenBanner'
function FlightPage() {
  return (
    <main>
      <HeroGlobal rasm={samolet} />
      <Map />
      <Banner />
      <GreenBanner />
    </main>
  )
}

export default FlightPage
