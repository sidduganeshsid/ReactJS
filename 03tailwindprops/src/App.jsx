import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

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
    message: 'All is well',
    profilePic: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
  }

  

  let newArr = [1, 2, 3, 4, 5]

  return (
    <>
     
    
     <Card username="Siddu Ganesh Musa" post='Full Stack Developer' message='Ignorance is better than Half Knowledge' img='https://media.licdn.com/dms/image/D5603AQHEzh6FD2Z3Fw/profile-displayphoto-shrink_200_200/0/1702717493736?e=1709769600&v=beta&t=-dtyKAGuf7AiPWJQp0FL7lOEkFXqtuksWFKrUhja9Uo'/>
     <h1 className='text-3xl bg-green-500 p-3 rounded-md'>LinkedIn</h1>
     <Card username={agm.name} post={agm.post} message={agm.message} img={agm.profilePic}/>
     <h1 className='text-3xl bg-green-500 p-3 rounded-md'>LinkedIn</h1>
     <Card username={jb.name} post={jb.post} message={jb.message} img={jb.profilePic}/>

     <h1 className='text-3xl bg-green-500 p-3 rounded-md'>LinkedIn</h1>

    </>
  )
}

export default App
