import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import HeroBanner from './Component/Home/Banner/HeroBanner'

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <HeroBanner></HeroBanner>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
