import React from 'react'

function RecentCard({rasm, nom}) {
  return (
    <div className='recent__card'>
      <img src={rasm} alt="" />
      <div>
        <h4>{nom}</h4>
        <span>325 places</span>
      </div>
    </div>
  )
}

export default RecentCard
