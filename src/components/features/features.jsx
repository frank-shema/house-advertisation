import React from 'react'
import './features.css'
import house from '../../assets/clone.jpg'
import house1 from '../../assets/room1.jpg'
import house2 from '../../assets/room2.jpg'
import house3 from '../../assets/room3.png'
import house4 from '../../assets/room4.png'

import house8 from '../../assets/house4.jpg'
import house10 from '../../assets/room5.png'
import house7 from '../../assets/room6.png'
import house6 from '../../assets/room7.jpg'
import house9 from '../../assets/room8.jpg'

function Features() {
    return (
        <div className="featured">
            <h1 className="featured-text">Top Featured Listings</h1>
            <p className='featured-text'>selected listings by city ,state & zip based on views</p>
            <div className="container">
                <img className='span-3 image-grid-row-2' src={house} alt="" />
                <img src={house1} alt="" />
                <img src={house2} alt="" />
                <img src={house3} alt="" />
                <img src={house4} alt="" />
                <div className="span-3 ing-details">
                    <div className="top">
                        <h1>123 Acne St. Dllas, TX</h1>
                        <p>House for sale</p>
                        <p className="price">$2,677,000</p>
                    </div>
                    <div className="info-grid">
                        <div>
                            <div className="info">
                                <p className="bold">Bedrooms:</p><p>5</p>
                            </div>
                            <div className="info">
                                <p className="bold">Bathrooms:</p><p>7</p>
                            </div>
                        </div>

                        <div>
                            <div className="info">
                                <p className="bold">Square feet:</p><p>8,138</p>
                            </div>
                            <div className="info">
                                <p className="bold">:</p>Est Payment<p>$14,797/mo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="span-2 right-img-details">
                    <p>A beautifull modern day home in the city with a full-size poll. Spacious and luxurious home in Texas. Including media room workout facility and built-in sauna.</p>
                    <button className='btn'>View Listing</button>
                </div>
            </div>

            {/* section section */}
            <div className="container">
                <img src={house10} className='order-2'  alt="" />
                <img src={house7} alt="" className='order-3'/>

                <img src={house6} className='span-3 image-grid-row-2 order-1'  alt="" />

                <img src={house8} alt=""  className='order-4'/>
                <img src={house9} alt=""  className='order-5'/>

                <div className="span-2 right-img-details order-7">
                    <p>A beautifull modern day home in the city with a full-size poll. Spacious and luxurious home in Texas. Including media room workout facility and built-in sauna.</p>
                    <button className='btn'>View Listing</button>
                </div>

                <div className="span-3 ing-details order-6'">
                    <div className="top">
                        <h1>123 Acne St. Dllas, TX</h1>
                        <p>House for sale</p>
                        <p className="price">$2,677,000</p>
                    </div>
                    <div className="info-grid">
                        <div>
                            <div className="info">
                                <p className="bold">Bedrooms:</p><p>5</p>
                            </div>
                            <div className="info">
                                <p className="bold">Bathrooms:</p><p>7</p>
                            </div>
                        </div>

                        <div>
                            <div className="info">
                                <p className="bold">Square feet:</p><p>8,138</p>
                            </div>
                            <div className="info">
                                <p className="bold">:</p>Est Payment<p>$14,797/mo</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Features
