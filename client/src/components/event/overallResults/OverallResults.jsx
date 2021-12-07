import React from "react"
import BubbleBackground from "../../components/bubbleBackground/BubbleBackground"
import LineBackground from "../../components/lineBackground/LineBackground"
import PlayerResult from "../playerResult/PlayerResult"

import "./overallResults.scss"

const OverallResults = () => {
  return (
    <div className="overall-results">
      <BubbleBackground />
      <LineBackground />
      <div className="overall-results-container">
        <PlayerResult />
      </div>
    </div>
  )
}

export default OverallResults
