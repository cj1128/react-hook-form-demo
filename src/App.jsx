import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"

import Form from "./Form.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Form />
    </div>
  )
}

export default App
