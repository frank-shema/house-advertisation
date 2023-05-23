import React from 'react'
import './Best.css'
import apt1 from '../../assets/bgt1.png'
import apt2 from '../../assets/cars.jpg'
import apt3 from '../../assets/host.jpg'

function Best() {
  return (
   <div className="best">
    <h1>Find Best Rated Properties</h1>
    <div>
        <p><span className="bold">All</span></p>
        <p>Commercial</p>
        <p>Residential</p>
        <p>Agricultural</p>
    </div>
    <div className="container">
    <img src={apt1} alt="" />
    <img src={apt2} alt="" />
    <img src={apt3} alt="" />
    </div>
    <button className="btn">View All</button>
   </div>
  )
}

export default Best
