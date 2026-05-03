import { Suspense, useState, } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import HeroBanner from './Component/Home/Banner/HeroBanner'
import Stat from './Component/Home/Stat/Stat'
import Footer from './Component/Footer/Footer'
import DigiTools_Card from './Component/Home/Card_Tools/DigiTools_Card/DigiTools_Card'
import Process_Section from './Component/Home/Process-Section/Process_Section'
import PricingCart from './Component/Home/Pricing_Section/PricingCart'
import Workflow from './Component/Home/Workflow/Workflow'

const fetchProduct = async () => {
  const res = await fetch('/Data.json');
  return res.json();
}
function App() {
  const productsDataPromise = fetchProduct();
  const [cartProduct, setCartProduct]=useState([]);
  return (
    <>
      <header>
        <Navbar cartProduct={cartProduct}></Navbar>
      </header>
      <main>
        <HeroBanner></HeroBanner>
        <Stat></Stat>
        <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
          <DigiTools_Card productsDataPromise={productsDataPromise} cartProduct={cartProduct} setCartProduct={setCartProduct}></DigiTools_Card>
        </Suspense>
        <Process_Section></Process_Section>
        <PricingCart></PricingCart>
        <Workflow></Workflow>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
