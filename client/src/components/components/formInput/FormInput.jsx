import React from "react"

import "./formInput.scss"

const FormInput = ({ handleChange, label, ...props }) => {
  return (
    <div>
      <span>{label}</span>
      <input onChange={handleChange} {...props} />
    </div>
  )
}

export default FormInput
