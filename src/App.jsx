import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import HeroBanner from './Component/Home/Banner/HeroBanner'
import Stat from './Component/Home/Stat/Stat'
import Footer from './Component/Footer/Footer'
import DigiTools_Card from './Component/Home/Card_Tools/DigiTools_Card/DigiTools_Card'

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <HeroBanner></HeroBanner>
        <Stat></Stat>
        <DigiTools_Card></DigiTools_Card>
      </main>
      <footer>
          {/* <Footer></Footer> */}
      </footer>
    </>
  )
}

export default App
