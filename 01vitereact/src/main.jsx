import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Hello Abhijeeth!</h1>
      <h3>Hmm, bool ma daya bol raha hun</h3>

      <h1>ha daya teri bhen ki codh</h1>
    </div>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
  </StrictMode>,
)
