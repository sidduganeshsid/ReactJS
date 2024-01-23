// import { Children } from "react"

function customRender(reactElem, container){
    // const domElem = document.createElement(reactElem.type)
    // domElem.innerHTML = reactElem.children
    // domElem.setAttribute('href',reactElem.props.href)
    // domElem.setAttribute('target',reactElem.props.target)
    // container.appendChild(domElem)

    //optimized code
    const domElem = document.createElement(reactElem.type)
    domElem.innerHTML = reactElem.children
    for (const prop in reactElem.props) {
        if(prop==='children') continue
      domElem.setAttribute(prop, reactElem.props[prop])
    }
    container.appendChild(domElem)
    
}
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

const mainContainer = document.querySelector('#root');

//custom method
customRender(reactElem, mainContainer)