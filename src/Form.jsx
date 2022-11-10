import { useForm, useWatch } from "react-hook-form"
import { useState, useRef } from "react"
import FormContent from "./FormContent"

export default function App() {
  const [type, setType] = useState("1")

  const form1 = useForm()
  const form2 = useForm()

  const form1Value = useRef()
  const form2Value = useRef()

  form1.watch((val) => {
    // console.log("value", val)
    form1Value.current = val
  })

  form2.watch((val) => {
    // console.log("value", val)
    form2Value.current = val
  })

  const formValue = () =>
    type === "1" ? form1Value.current : form2Value.current

  // function showFormContent() {
  //   console.log(formValue())
  // }

  function onSubmit() {
    console.log("form submit", formValue())
    return false
  }

  return (
    <main>
      <h1>Parent Component</h1>
      <div>
        <label htmlFor="f1">
          <input
            id="f1"
            type="radio"
            value="1"
            checked={type === "1"}
            onChange={() => setType("1")}
          />
          form1
        </label>

        <label htmlFor="f2">
          <input
            id="f2"
            type="radio"
            value="2"
            checked={type === "2"}
            onChange={() => setType("2")}
          />
          form 2
        </label>
      </div>

      <FormContent
        key={type}
        register={type === "1" ? form1.register : form2.register}
        name={`Form ${type}`}
        onSubmit={onSubmit}
      />
      {/* <button onClick={showFormContent}>show form content</button> */}
    </main>
  )
}
