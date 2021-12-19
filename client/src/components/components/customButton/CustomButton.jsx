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
