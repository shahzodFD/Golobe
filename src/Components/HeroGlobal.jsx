import React from 'react'
import '../stayle/heroglobal.css'

function HeroGlobal({rasm}) {
  return (
    <section className='heroGlobal' style={{backgroundImage:`url(${rasm})`}}>
      <div className="container">
        <div className="heroGlobal__content">
            <h1>Make your travel whishlist, we’ll do the rest</h1>
            <p>Special offers to suit your plan</p>
        </div>
      </div>
    </section>
  )
}

export default HeroGlobal
