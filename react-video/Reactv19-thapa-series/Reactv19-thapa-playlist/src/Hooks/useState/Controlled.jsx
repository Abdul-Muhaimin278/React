import { useState } from "react";
import "../hooks.css"

const ControlledForm = () => {
  const [name, setName] = useState('')

  const HandleChange = (event) => {
    setName(event.target.value)
  }

  const HandleSubmit = (event) => {
    event.preventDefault();
    console.log(name);

  }
  return (
    <section>
      <h1>Uncontrolled Component</h1>
      <form onSubmit={HandleSubmit}>
        <label>
          name:
          <input id="inputName" name="name" type="text" value={name} onChange={HandleChange} />
        </label>
        <br />
        <button type="submit" className="state-button">Submit</button>
      </form>
    </section>
  )
}

export default ControlledForm;