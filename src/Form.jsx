import React, { useState } from 'react'

const Form = () => {
  const [value, setValue] = useState("")
  const [value2, setValue2] = useState("")
  const [show, setShow] = useState("")

  const getText = (event) => {
    if(event.target.name == "firstname"){
      setValue(event.target.value)
    }
    if(event.target.name == "lastname"){
      setValue2(event.target.value)
    }
  }
  const submitBtn = (event) => {
    event.preventDefault()
    setShow(value +" "+ value2)
  }

  return (
    <>
    <form onSubmit={submitBtn}>
      <div className='form'>
        <h1>{show}</h1>
        <label>Enter First Name</label>
        <input type="text" name='firstname' onChange={getText} value={value}/>
        <label>Enter last Name</label>
        <input type="text" name='lastname' onChange={getText} value={value2}/>
        <button type="submit">Submit</button>
      </div>
    </form>
    </>
  )
}

export default Form
