import React from "react"
import BubbleBackground from "../bubbleBackground/BubbleBackground"
import LineBackground from "../lineBackground/LineBackground"

import "./customBackground.scss"

const CustomBackground = ({
  children,
  className = "",
  navbar = false,
  eventNavbar = false,
  bubbleBackground = true,
  lineBackground = true,
}) => {
  return (
    <div
      className="custom-background"
      style={{
        minHeight: navbar ? "calc(100vh - 80px)" : eventNavbar ? "calc(100vh - 60px)" : "100vh",
      }}
    >
      {bubbleBackground && <BubbleBackground />}
      {lineBackground && <LineBackground />}
      <div className={className || "custom-background-container"}>{children}</div>
    </div>
  )
}

export default CustomBackground
