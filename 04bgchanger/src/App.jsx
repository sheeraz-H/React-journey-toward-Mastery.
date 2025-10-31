import { useState } from 'react'

import Changer from './components/Changer'

function App() {
  const [color, setColor] = useState('')

  return (
//     <div className='text-white w-full h-screen duration-200 ' style={{backgroundColor: color}}>
//       <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        
//       <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-2 rounded-3xl'>
//       <button onClick={() => setColor('green')} className='outline-none px-4 py-1  rounded-full shadow-lg ' style={{backgroundColor: 'green'}} >Green</button>
//       <button onClick={() => setColor('red')} className='outline-none px-4 py-1  rounded-full shadow-lg ' style={{backgroundColor: 'red'}}>Red</button>
//       <button onClick={() => setColor('blue')} className='outline-none px-4 py-1 rounded-full shadow-lg ' style={{backgroundColor: 'blue'}}>Blue</button>
//       </div><br />
//       <button onClick={() => setColor('gray')} className='outline-none px-6 py-1 mx-3 rounded-full bg-gray-500 shadow-lg ' style={{backgroundColor: 'gray'}}>Default</button>

//       </div>
//     </div>

<>
<Changer/>
</>

  )
}
export default App
