
import './App.css'
import Component from './component'
import ToDo from './Todo';

function App() {

  const books= [
    {id:1,name:'Physice',price:250},
    {id:2,name:'Chemistry',price:350},
    {id:3,name:'Math',price:255},
    {id:4,name:'Bjiology',price:290}
  ];

  const time=50;




  return (
    <>
  {/* <Component books={books}></Component> */}



    {/* <ToDo task='Learn React' isDone={true} time={time}></ToDo> */}

    <Developer></Developer>
  
      

      
    </>
  )
}

function Developer() {
  return(
    <div>
      <h1>Developer:</h1>
    <h2>Technology:</h2>
    </div>
  )
}

export default App
