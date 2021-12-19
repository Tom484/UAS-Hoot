import React from "react"

import "./customInputCard.scss"

const CustomInputCard = ({ children, className = "" }) => {
  return (
    <div className="custom-input-card">
      <div className={className ? className : "custom-input-card-container"}>{children}</div>
    </div>
  )
}

export default CustomInputCard
