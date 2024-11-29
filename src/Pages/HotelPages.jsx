import React from 'react'
import HeroGlobal from '../Components/HeroGlobal'
import Banner from '../Components/Banner'
import villa from '../img/villa.svg'
import GreenBanner from '../Components/GreenBanner'
import Recent from '../Components/Recent'

function HotelPages() {
  return (
    <main>
      <HeroGlobal rasm={villa} />
      <Recent />
      <Banner info="Book a Hotel"/>
      <GreenBanner />
      
    </main>
  )
}

export default HotelPages
