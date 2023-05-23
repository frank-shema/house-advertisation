import React from 'react'
import {AiOutlineSearch}from 'react-icons/ai'
import './hero.css'

export default function Hero() {
  return (
    <div className="hero">
        <div className="content">
            <h1>Find the perfect place</h1>
            <p className='search-text'>Search the largest selection of luxury of high-rise apartments,multy-family homes and luxury homes.</p>
            <form action="" className="search">
                <div>
                    <input type="text" placeholder='Enter keyword' />
                </div>
                <div className="radio">
                    <input type="radio" checked name="house"/>
                    <label htmlFor="">Buy</label>
                    <input type="radio" name="house"/>
                    <label htmlFor="">Rent</label>
                    <button type='submit'><AiOutlineSearch className='icon'/></button>
                </div>
            </form>
        </div>
    </div>
  )
}
