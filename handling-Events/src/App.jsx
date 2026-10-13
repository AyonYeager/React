import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // const [name, setName] = useState(0);
  const [form , setForm] = useState({ email:"" , phone:""})

  const handleClick = () => {
    alert("hey i'm clicked")
  };
  const onMouseOver = () => {
    alert("hey i'm on mouse over")
  };
  const handleChange = (e) => {
    // setName(e.target.value)
    setForm({...form,[e.target.name]:e.target.value})
  };

  return (
    <>
      <div className="button">
        <button onClick={handleClick}> click me</button>

      </div>
      {/* <div className="red" onMouseOver={onMouseOver}>
        hey i'm  a div
      </div> */}
      {/* <input type="text" value={name} onChange={handleChange} /> */}
      <input type="text" name ="email" value={form.email} onChange={handleChange} />
      <input type="text" name ="phone" value={form.phone} onChange={handleChange} />

    </>
  )
}

export default App
