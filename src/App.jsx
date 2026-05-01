import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import HeroBanner from './Component/Home/Banner/HeroBanner'
import Stat from './Component/Home/Stat/Stat'
import Footer from './Component/Footer/Footer'
import DigiTools_Card from './Component/Home/Card_Tools/DigiTools_Card/DigiTools_Card'

const fetchProduct= async ()=>{
  const res = await fetch('/Data.json');
  return res.json();
}
function App() {
  const roductsDataPromise=fetchProduct();
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <HeroBanner></HeroBanner>
        <Stat></Stat>
        <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
          <DigiTools_Card roductsDataPromise={roductsDataPromise}></DigiTools_Card>
        </Suspense>
      </main>
      <footer>
        {/* <Footer></Footer> */}
      </footer>
    </>
  )
}

export default App
