import React from "react"
import img from "../../../img/img-1.svg"

import "./customCard.scss"

const CustomCard = ({ children, className = "" }) => {
  return (
    <div className="custom-card">
      <div className="custom-card-container">
        <div className="picture-container">
          <div className="picture" style={{ backgroundImage: `url(${img})` }}></div>
        </div>
        <div className={className || "content"}>{children}</div>
      </div>
    </div>
  )
}

export default CustomCard
