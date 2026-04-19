
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import { Suspense } from 'react'
import FoodSection from './Components/FoodSection/FoodSection'


const foodDataRes = fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a").then(res => res.json())


function App() {


  return (
    <>
      <Navbar></Navbar>
      
      <Suspense fallback={<h1>loading...</h1>}>
        <FoodSection foodDataRes={foodDataRes}></FoodSection>
      </Suspense>


    </>
  )
}

export default App
