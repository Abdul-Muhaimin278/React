import { useState } from "react"
import "./index.css"

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="container state-container text-center">
      <h1>useState Hook!</h1>
      <br />
      <p>Count:{count}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>

  )
}

export default Counter