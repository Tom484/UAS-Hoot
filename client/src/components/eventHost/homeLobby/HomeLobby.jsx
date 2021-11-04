import React from "react"
import { connect } from "react-redux"
import {
  selectEventPlayersArray,
  selectEventProperties,
} from "../../../redux/eventHost/eventHostSelectors"
import "./homeLobby.scss"

const HomeLobby = ({ eventProperties, players }) => {
  console.log(players)
  return (
    <div className="home-lobby">
      <div className="home-lobby-container">
        <h1>Game Pin: {eventProperties.connect.enterCode}</h1>
        <button>Start</button>
        <div>Number of Players</div>
        <div className="players-container">
          {players.map(player => (
            <div key={player.id}>{player.displayName}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  eventProperties: selectEventProperties(state),
  players: selectEventPlayersArray(state),
})

export default connect(mapStateToProps)(HomeLobby)
