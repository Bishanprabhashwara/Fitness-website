import { useState } from 'react'
import './App.css'
import Running from './Pages/Running'
import Selection from './Pages/Selection/Selection'
import WeatherDisplay from './component/Weather/WeatherDisplay'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WeatherDisplay/>
    </>
  )
}

export default App
