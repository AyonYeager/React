import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [card , setcard] = useState([])

  const fetchData = async()=>{
    let  a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setcard(data)

  }

  useEffect(()=>{
    fetchData()

  },[])

  return (
    <>
    <div className="container"></div>
    {card.map((card)=>{
      return <div key="id" className="card">
        <h1>{card.title}</h1>
          <p>{card.body}</p>
          <span>By UserId: {card.userId} </span>
        
      </div>
    })}
      
    </>
  )
}

export default App
