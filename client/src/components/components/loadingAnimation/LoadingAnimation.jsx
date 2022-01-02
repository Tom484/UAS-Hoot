import React from "react"
import RollerAnimation from "../../animation/rollerAnimation/RollerAnimation"
import CustomBackground from "../../custom/customBackground/CustomBackground"
import "./loadingAnimation.scss"

const LoadingAnimation = () => {
  return (
    <CustomBackground>
      <div className="loading-animation">
        <div className="loading-animation-container">
          <div className="loading-card">
            <RollerAnimation />
          </div>
        </div>
      </div>
    </CustomBackground>
  )
}

export default LoadingAnimation
