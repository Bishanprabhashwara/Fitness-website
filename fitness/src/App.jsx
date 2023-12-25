import { useState } from 'react'
import './App.css'
import Running from './Pages/Running'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Running/>
    </>
  )
}

export default App
