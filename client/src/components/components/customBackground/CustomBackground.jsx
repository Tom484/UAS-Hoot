import React from "react"
import BubbleBackground from "../bubbleBackground/BubbleBackground"
import LineBackground from "../lineBackground/LineBackground"

import "./customBackground.scss"

const CustomBackground = ({ children, className = "", navbar = false }) => {
  return (
    <div
      className="custom-background"
      style={{ minHeight: navbar ? "calc(100vh - 60px)" : "100vh" }}
    >
      <BubbleBackground />
      <LineBackground />
      <div className={className || "custom-background-container"}>{children}</div>
    </div>
  )
}

export default CustomBackground
