import React from 'react'

function BannerCard({rasm, nomi, text, narx, btn_text}) {
  return (
    <div className='banner__card' style={{backgroundImage:`url(${rasm})`}}>
      <div>
        <div className='banner__card__wrapper'>
        <h4>{nomi}</h4>
        <span>{text}</span>
        </div>
        <h3>{narx}</h3>
      </div>
      <button>{btn_text}</button>
    </div>
  )
}

export default BannerCard
