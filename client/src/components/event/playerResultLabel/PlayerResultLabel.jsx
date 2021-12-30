import React from "react"
import { CustomTextSmall } from "../../custom/customText/CustomText"

const PlayerResultLabel = () => {
  return (
    <div className="player-result">
      <div className="player-result-container label">
        <span></span>
        <CustomTextSmall>Nickname</CustomTextSmall>
        <CustomTextSmall style={{ textAlign: "right" }}>Score</CustomTextSmall>
        <CustomTextSmall style={{ textAlign: "right" }}>Strike</CustomTextSmall>
      </div>
    </div>
  )
}

export default PlayerResultLabel
