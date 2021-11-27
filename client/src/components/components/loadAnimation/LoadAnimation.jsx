import React from "react"
import "./loadAnimation.scss"

const LoadAnimation = () => {
  return (
    <div className="load-animation">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default LoadAnimation
