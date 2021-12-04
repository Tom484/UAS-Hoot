import React from "react"
import PlayersResult from "../playersResult/PlayersResult"
import "./interimResults.scss"

const InterimResults = () => {
  return (
    <div className="interim-results">
      <div className="interim-results-container">
        <PlayersResult />
      </div>
    </div>
  )
}

export default InterimResults
