
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Daisy from './Components/DaisyNav/Daisy'
import { Suspense } from 'react'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import ResultChart from './Components/ResultChart/ResultChart'
import axios from 'axios'
import MarkChart from './Components/MarksChart/MarkChart'



const PricingPromise = fetch("PricingData.json")
.then(res => res.json())
const marksPromise = axios.get('MarksData.json');

function App() {


  return (
    <>

    <header>
      <Navbar></Navbar>
      {/* <Daisy></Daisy> */}
    </header>

    <main>
      <Suspense fallback={<span class="loading loading-spinner loading-lg"></span>}>
        <PricingOptions PricingPromise={PricingPromise}></PricingOptions>
      </Suspense>

    <Suspense fallback={<span class="loading loading-spinner loading-lg"></span>}>
      <MarkChart marksPromise={marksPromise}></MarkChart>
    </Suspense>



      {/* <ResultCharts></ResultCharts> */}
     <ResultChart></ResultChart>

    </main>


    </>
  )
}

export default App
