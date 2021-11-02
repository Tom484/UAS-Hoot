import React from "react"

import "./homeLobby.scss"

const HomeLobby = () => {
  return (
    <div className="home-lobby">
      <div className="home-lobby-container">
        <h1>Game Pin:</h1>
        <button>Start</button>
        <div>Number of Players</div>
        <div className="players-container">
          <div className="player">Tom</div>
          <div className="player">John</div>
          <div className="player">Hattie</div>
        </div>
      </div>
    </div>
  )
}

export default HomeLobby
