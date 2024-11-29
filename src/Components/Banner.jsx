import React from 'react';
import Top from './Top';
import BannerCard from './BannerCard';
import muzey from '../img/muzey.png'
import france from '../img/france.png'
import kalesi from '../img/kalesi.png'
import kolumbiya from '../img/kolumbiya.png'
import '../stayle/banner.css'

function Banner({info}) {
  return (
    <section className='banner'>
        <div className="container">
            <Top title="Fall into travel" tex="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
            btn="See All" />
            <div className="banner__wrapper">
                <BannerCard rasm={muzey} text="An amazing journey" nomi="Melbourne" narxi="$ 700" btn_text={info}/>
                <BannerCard rasm={france} text="A Paris Adventure" nomi="France" narxi="$ 600"  btn_text={info}/>
                <BannerCard rasm={kalesi} text="London eye adventure" nomi="London" narxi="$ 350" btn_text={info}/>
                <BannerCard rasm={kolumbiya} text="Amazing streets" nomi="Columby" narxi="$ 700" btn_text={info}/>
            </div>
        </div>
    </section>
  )
}

export default Banner
