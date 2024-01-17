import { useState } from 'react'
import './App.css'
import Running from './Pages/Running'
import Selection from './Pages/Selection/Selection'
import Navybar from './component/NavigationBar/Navybar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navybar/>
    </>
  )
}

export default App
