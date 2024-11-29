import React from 'react'
import '../stayle/search.css'
import RecentCard from './RecentCard'
import rasm1 from '../img/turkiya1.svg'
import rasm2 from '../img/australiya2.svg'
import rasm3 from '../img/azarbayjon3.svg'
import rasm4 from '../img/maldives4.svg'
import '../stayle/recent.css'

function Search() {
  return (
    <section className='recent'>
      <div className="container">
        <h2>Your recent searchers</h2>
        <div className="recent__wrapper">
          <RecentCard rasm={rasm1} nom="Istanbul, Turkey" />
          <RecentCard rasm={rasm2} nom="Sydney, Australia" />
          <RecentCard rasm={rasm3} nom="Baku, Azerbajan" />
          <RecentCard rasm={rasm4} nom="Male, Maldives" />
        </div>
      </div>
    </section>
  )
}

export default Search
