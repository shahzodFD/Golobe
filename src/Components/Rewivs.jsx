import React from 'react'
import "../stayle/rewivs.css"
import Top from './Top'
import yulduz from "../img/yulduz.svg"
import google from "../img/google.svg"
import rewivs1 from "../img/rewivs3.png"
import rewivs2 from "../img/rewivs2.png"
import rewivs3 from "../img/rewivs1.png"
function Rewivs() {
  return (
<section className='rewivs'>
<div className="container">
<Top title='Reviews' tex='What people says about Golobe facilities' btn='See All'  />
</div>
<div className="rewivs_wrapper">
  <div className="rewivs_card">
  <h1>“A real sense of community, nurtured”</h1>
  <p>Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.
View more</p>
<h4>View more</h4>
<img src={yulduz} alt="" />
<h5>Olga</h5>
<p>Weave Studios – Kai Tak</p>
<img src={google} alt="" />
<img src={rewivs1} alt="" />
  </div>
  <div className="rewivs_card">
  <h1>“The facilities are superb. Clean, slick, bright.”</h1>
  <p>Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.
View more</p>
<h4>View more</h4>
<img src={yulduz} alt="" />
<h5>Olga</h5>
<p>Weave Studios – Kai Tak</p>
<img src={google} alt="" />
<img src={rewivs2} alt="" />
  </div>
  <div className="rewivs_card">
  <h1>“A real sense of community, nurtured”</h1>
  <p>Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.
View more</p>
<h4>View more</h4>
<img src={yulduz} alt="" />
<h5>Olga</h5>
<p>Weave Studios – Kai Tak</p>
<img src={google} alt="" />
<img src={rewivs3} alt="" />
  </div>
</div>
</section>
  )
}

export default Rewivs
