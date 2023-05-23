import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/hero'
import Best from './components/bests/Best'
import Features from './components/features/features'
import Footer from './components/footer/Footer'
export default function App() {
  return (
  <>
  <Navbar/>
  <Hero/>
  <Best/>
  <Features/>
  <Footer/>
  </>
  )
}
