import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//react looks as everything inside the obj
const reactElem = {
  type: 'a',
  //props belows are
  props: { //props can have attributes or objects
      //fearther can be drilled a lot
      href: "https://google.com",
      target: '_blank'
  },
  children: 'Click me to visit google'
}

function MyApp(){
  return (
    <div>
      <h1>custom react app</h1>
    </div>
  )
}

const AnotherElem = (
  <a href='https://www.google.com' target='_blank'>Visit Google</a>
)

  // convert everything as the react language //whole above 26th goes into the react and renders as JSX
const actualReactElem = React.createElement(
  'a', //order is imp FirstThing is type and Second must be object  // type
  { href : 'https://google.com', target:'_blank' },                 // attribute
  'click to visit google'                                           // children
)

ReactDOM.createRoot(document.getElementById('root')).render(

  /*  // <App />
  // MyApp()
  //load it as the component
  // <MyApp />

  // AnotherElem() won't works
  // AnotherElem works fine

  // reactElem won't works because type,props are not understandable by the react

  below code renders because it is the object version of it. */

  //IMP 1
  //actualReactElem 

  <App />


)
