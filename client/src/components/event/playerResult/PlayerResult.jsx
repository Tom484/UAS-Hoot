import React from "react"

import "./playerResult.scss"

const PlayerResult = ({ player, order }) => {
  return (
    <div className="player-result">
      <div
        className={`player-result-container ${order === 1 ? "first" : ""} ${
          order === 2 ? "second" : ""
        } ${order === 3 ? "third" : ""}`}
      >
        <span>{order}.</span>
        <span>{player?.displayName}</span>
        <span style={{ textAlign: "right" }}>{player?.score}</span>
        <span style={{ textAlign: "right" }}>{player?.consecutiveCorrectAnswers || 0}</span>
      </div>
    </div>
  )
}

export default PlayerResult
