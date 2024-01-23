import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)
  const [color, setColor] = useState('olive')

  function changeColor(color)
  {
    setColor(color)
  }

  let agm = {
    name : 'Aakash Ganesh Musa',
    age : 25,
    address : {
      city: 'Hyderabad',
      state: 'Telangana',
      country: 'India'
    },
    post: 'Java Developer',
    message: 'The greatest glory in living lies not in never falling, but in rising every time we fall',
    profilePic: 'https://media.licdn.com/dms/image/D5603AQHAXYGPlqmhnQ/profile-displayphoto-shrink_200_200/0/1673363538110?e=1709769600&v=beta&t=kxkKqPe3qD5I-hi5WggOBaJkTU4YIblZiIIoi6TLy50'
  }

  let jb = {
    name : 'Jyothika bolla',
    age : 25,
    address : {
      city: 'Hyderabad',
      state: 'Telangana',
      country: 'India'
    },
    post: 'Java Developer',
    message: 'The greatest glory in living lies not in never falling, but in rising every time we fall',
    profilePic: 'https://media.licdn.com/dms/image/D5603AQHoMxqyB_SOfA/profile-displayphoto-shrink_800_800/0/1704392647744?e=1709769600&v=beta&t=0lP2Rdw9w9mAinqPQG5HV8-ihbKuQ9gXMFQIynWNY4o'
  }

  

  let newArr = [1, 2, 3, 4, 5]


  return (
    // <>
    //   <h1 className='bg-green-500 p-5 text-3xl'>A bg changer app with vite</h1>
    //   <marquee direction="ltr">Tailwind CSS + React + vite bundler</marquee>
    // </>
    <>
    <div style={{textAlign: "right", padding: "25px", position: "fixed"}}>
            <button onClick={()=>changeColor('gray')} className='outline-none px-4 py-1 rounded-l-full shadow-lg border border-black text-black' style={{backgroundColor: "gray"}}>N</button>
            <button onClick={()=>changeColor('white')} className='outline-none px-4 py-1 rounded-r-full shadow-lg border border-black text-black' style={{backgroundColor: "white"}}>D</button>
    </div>             

                                {/* //sets view port to 100vh, bg-black */}
<div className='w-full duration-200 m-0 p-0'                style={{backgroundColor: color, boxSizing: 'border-box'}}>

<div className=" flex items-center p-10 justify-center">
  {/* Your outer container */}
  <div>
  {/* <div className="bg-blue-500 text-white p-4 mx-auto"> */}
    
  {/* <div className="h-screen items-center justify-center w" > */}
    <Card username="Siddu Ganesh Musa" post='Full Stack Developer' message='The greatest glory in living lies not in never falling, but in rising every time we fall' img='https://media.licdn.com/dms/image/D5603AQHEzh6FD2Z3Fw/profile-displayphoto-shrink_200_200/0/1702717493736?e=1709769600&v=beta&t=-dtyKAGuf7AiPWJQp0FL7lOEkFXqtuksWFKrUhja9Uo'/>
    <h1 className='text-3xl bg-green-500 p-3 rounded-md'>LinkedIn</h1>
    <Card username={agm.name} post={agm.post} message={agm.message} img={agm.profilePic}/>
    <h1 className='text-3xl bg-green-500 p-3 rounded-md'>LinkedIn</h1>
    <Card username={jb.name} post={jb.post} message={jb.message} img={jb.profilePic}/>

    <h1 className='text-3xl bg-green-500 p-3 rounded-md'>LinkedIn</h1>
      {/* </div> */}
    </div>
</div>             
  {/* </div> */}


    {/* //flex box class                                                x-axis */}
      <div className='fixed flex flex flex-wrap justify-center bottom-12 inset-x-0'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={()=>changeColor('red')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: "red"}}>Home</button>
            <button onClick={()=>changeColor('green')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: "green"}}>About</button>

            {/* //no  need of extra function to pass color, setColor works fine */}
            <button onClick={()=>setColor('blue')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: "blue"}}>Projects</button>

            
            
            
          </div>
          {/* <h1>Hey</h1> */}
      </div>
      
      {/* <h1>Hai</h1> */}
    </div>
    </>
  )
}

export default App
