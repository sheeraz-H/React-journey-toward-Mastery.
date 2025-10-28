import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Pros from "./pros"
import { jsx as _jsx } from 'react/jsx-runtime'
function MyApp(){
  return (
    <div>
      <h1>Hello Abhijeeth!</h1>
      <h3>Hmm, app janab</h3>

      <h1>jee</h1>
    </div>
  )
}

// const reactElement = { 
//   type: 'a',
//   props: {
//     href: 'https://www.google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

//how we write or create new elements in react.
const userName02 = "faisal shah sahb." 
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'Click goto Google',
  userName02
)

//react vs a custom created element
const customElement = (
  <a href="https://google.com" target='_blank'>visit another page</a>
)

createRoot(document.getElementById('root')).render(
    
    reactElement
    
)


