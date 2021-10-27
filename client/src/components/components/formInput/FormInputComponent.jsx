import React from "react"

import "./formInputComponent.scss"

const FormInputComponent = ({ handleChange, label, ...props }) => {
  return (
    <div>
      <span>{label}</span>
      <input onChange={handleChange} {...props} />
    </div>
  )
}

export default FormInputComponent
