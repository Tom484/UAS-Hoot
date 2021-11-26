import React from "react"

import "./formInput.scss"

const FormInput = ({ handleChange, label, ...props }) => {
  return (
    <div className="form-input-container">
      <span className="label">{label}</span>
      <input className="form-input" onChange={handleChange} {...props} />
    </div>
  )
}

export default FormInput
