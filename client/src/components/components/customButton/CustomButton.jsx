import React from "react"

import "./customButton.scss"

const CustomButton = ({ children, className, ...rest }) => {
  return (
    <button {...rest} className={`btn-custom ${className}`}>
      {children}
    </button>
  )
}

export default CustomButton

export const CustomButtonActivation = ({ children, activate, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={`btn-custom-activation ${activate ? "activate" : " false"}  ${className}`}
    >
      {children}
    </button>
  )
}
