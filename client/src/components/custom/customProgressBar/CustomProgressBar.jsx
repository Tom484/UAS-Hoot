import React from "react"
import { CustomTextInfoLarge } from "../../components/customText/CustomText"

import "./customProgressBar.scss"

export const CustomProgressBar = () => {
  return (
    <div className="custom-progress-bar">
      <CustomTextInfoLarge>Haha haha</CustomTextInfoLarge>
      <div className="progress-bar-container">
        <div className="progress-bar"></div>
      </div>
    </div>
  )
}
