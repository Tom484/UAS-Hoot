import React from "react"
import CustomBackground from "../../custom/customBackground/CustomBackground"
import RollerTemplateAnimation from "../templates/rollerTempleAnimation/RollerTemplateAnimation"
import "./loadingAnimation.scss"

const LoadingAnimationFullScreen = () => {
  return (
    <CustomBackground>
      <div className="loading-animation">
        <div className="loading-animation-container">
          <div className="loading-card">
            <RollerTemplateAnimation />
          </div>
        </div>
      </div>
    </CustomBackground>
  )
}

export default LoadingAnimationFullScreen
