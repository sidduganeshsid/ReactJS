import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
          //this are know as the hooks 
    //[variable , method]  

          //near-by
   //problem is not const, everytime state is updated 
  const [counter, setCounter]= useState(0)//inside can be array string obj ...
  // let counter = 15;

  const addValue = ()=>{
  // counter = counter + 1;
  // console.log(counter);
  //update via the mehtod

  // setCounter(counter+1)

  //won't adds bcz , react actually bundles everything
  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)

    //below code react can't bundle
    //batching concept through is possible
    setCounter((prevCounter)=>(prevCounter + 1))
    setCounter((prevCounter)=>(prevCounter + 1))
    setCounter((prevCounter)=>(prevCounter + 1))
    setCounter((prevCounter)=>(prevCounter + 1))
    setCounter((prevCounter)=>(prevCounter + 1))





  }//react controls the flow
 

  //react is the library that focus on the UI
  //so it gave us the states
  //it constantly gets monitored are renders the UI in the web

  const remValue=()=>{
    setCounter(counter-1)
  }

  return (
    <>
     <h1>React course learning from 04/01/2024 :: {counter}</h1>
     <h2>Counter value : {counter}</h2>
     <button onClick={addValue}>Add value</button>{" "}
     <button onClick={remValue}>remove value</button>
     <p>footer: {counter} </p>
    </>
  )
}

export default App
