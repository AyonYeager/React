import { useState } from 'react'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>The count is {count} </div>
      <button className="button-icon" onClick={()=>{setCount(count+1)}}> Click </button>
    </>
  )
}

export default App
