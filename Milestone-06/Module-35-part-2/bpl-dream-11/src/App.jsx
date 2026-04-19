

import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/homepage/banner/Banner'
import Player from './Components/homepage/players/Player'
import Navbar from './Components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify'

const fetchPlayer = async () => {
  const res = await fetch("/data.json") 
  return res.json();
}



function App() {
 const playersPromise = fetchPlayer();
const [coin,setCoin] = useState(50000)


  return (
  <>
  
   <Navbar coin={coin} />
   <Banner />
   <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
  <Player playersPromise={playersPromise} setCoin={setCoin} coin={coin}></Player>
   </Suspense>


   <ToastContainer />
  </>
  )
}

export default App
