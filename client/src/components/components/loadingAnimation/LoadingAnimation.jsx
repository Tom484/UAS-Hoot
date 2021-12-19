import React from "react"
import RollerAnimation from "../../animation/rollerAnimation/RollerAnimation"
import CustomBackground from "../customBackground/CustomBackground"

const LoadingAnimation = () => {
  return (
    <CustomBackground>
      <div className="loading-animation">
        <div className="loading-animation-container">
          <div className="loading-card">
            <RollerAnimation />
            <div className="label">Please wait</div>
          </div>
        </div>
      </div>
    </CustomBackground>
  )
}

export default LoadingAnimation
