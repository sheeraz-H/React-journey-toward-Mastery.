import './index.css'
import Card from './components/card'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  
  return (
    <>
    <Header/>

        <Card name='Jamal Nasir' company= 'Zuckassiance'  age='33' />
        <Card name='Maaya Jackson' role='Senior Archtecture designer' company='Visual Effects' age='27' avatar= 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' cover='https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg
'  /> 

        <Footer/>
    </>
  )
}

export default App
