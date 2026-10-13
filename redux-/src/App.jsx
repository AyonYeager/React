import './App.css'
import Navbar from './com/Navbar'
import { useSelector , useDispatch } from 'react-redux'
import {increment , decrement} from './redux/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />
      <div>
        <button onClick ={()=>{dispatch(decrement())}}>-</button>
        the count is {count}
        <button onClick ={()=>{dispatch(increment())}}>+</button>
      </div>
    </>
  )
}

export default App
