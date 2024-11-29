import React from 'react'
import Top from './Top'
import '../stayle/greenBanner.css'
import rasm1 from '../img/zz.png'
import rasm2 from '../img/ee.png'
import rasm3 from '../img/qq.png'
import rasm4 from '../img/aa.png'

function GreenBanner() {
  return (
    <section className='greenBanner'>
        <div className="container">
            <Top title="Fall into travel" text="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination." btn_text="See All" />

            <div className="greenBanner__wrapper">
                <div className="greenBanner__content">
                    <div>
                        <h2>Backpacking <br /> Sri Lanka</h2>
                        <button><span>From <br /></span>$700</button>
                        
                    </div>
                    <p>Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.</p>
                    <button>Book Flight</button>
                </div>
                <div className="greenBanner__grid">
                    <img src={rasm1} alt="" />
                    <img src={rasm2} alt="" />
                    <img src={rasm3} alt="" />
                    <img src={rasm4} alt="" />

                </div>
            </div>
        </div>
      
    </section>
  )
}

export default GreenBanner
