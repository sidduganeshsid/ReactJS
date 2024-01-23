import { useState } from 'react'
import Youtube from './youtube' //not req extension if files is same as of this extension

// const uname = "sidduganesh"
function App() {
  // const [count, setCount] = useState(0)
  const uname = "sidduganesh"

  return (
    // common practice 
    //its draw back in jsx so they remove <div> and added <> empty 
    <>
    <h1>Vite react app</h1>
    <h1>Hey adding {2+24.2}</h1>
    <h1>Hello World! react through vite bundler,<br/> Name : {uname}</h1>
    {/* //below code place only evaluated expressions */}
    {/* <h1>Hello World! react through vite bundler,<br/> Name : {if(uname=="sidduganesh")?"yes":"no"}</h1> */}
    

    <Youtube/>
    </>

  )
}

export default App
