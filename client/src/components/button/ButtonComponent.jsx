import React from "react"

import "./buttonComponent.scss"

const ButtonComponent = ({ children, ...props }) => {
  return <button {...props}>{children}</button>
}

export default ButtonComponent
