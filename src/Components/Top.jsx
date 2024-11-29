import React from 'react'
import "../stayle/top.css"
function Top({title,tex,btn}) {
  return (
    <div className='top'>
        <div >
        <h1>{title}</h1>
        <p>{tex}</p>
        </div>
      <button>{btn}</button>
    </div>
  )
}

export default Top
