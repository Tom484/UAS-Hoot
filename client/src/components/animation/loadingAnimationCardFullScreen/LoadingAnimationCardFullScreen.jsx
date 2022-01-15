import React from "react"
import CustomBackground from "../customBackground/CustomBackground"
import LoadingAnimationCard from "../loadingAnimationCard/LoadingAnimationCard"

const LoadingAnimationCardFullScreen = ({ name }) => {
  return (
    <CustomBackground navbar>
      <LoadingAnimationCard name={name} />
    </CustomBackground>
  )
}

export default LoadingAnimationCardFullScreen
