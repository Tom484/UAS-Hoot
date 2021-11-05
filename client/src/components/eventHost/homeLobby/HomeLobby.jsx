import React from "react"
import { connect } from "react-redux"
import { selectEventPlayersArray } from "../../../redux/eventHostPlayers/eventHostPlayersSelectors"
import { selectEventProperties } from "../../../redux/eventHostProperties/eventHostPropertiesSelectors"
import EventHostButton from "../eventHostButton/EventHostButton"
import "./homeLobby.scss"

const HomeLobby = ({ eventProperties, players }) => {
  console.log(eventProperties)
  console.log(eventProperties?.connect.isOpen)
  return (
    <div className="home-lobby">
      <div className="home-lobby-container">
        <h1>Game Pin: {eventProperties?.connect?.enterCode}</h1>
        <div>Number of Players: {players.length}</div>
        <div className="players-container">
          {players.map(player => (
            <div key={player.id}>{player.displayName}</div>
          ))}
        </div>
        <EventHostButton type="START_EVENT" />
        <EventHostButton type="UPDATE_HOST_PROPERTIES_CONNECT" properties={{ isOpen: "toggle" }}>
          Open ({eventProperties?.connect.isOpen ? "Yes" : "No"})
        </EventHostButton>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  eventProperties: selectEventProperties(state),
  players: selectEventPlayersArray(state),
})

export default connect(mapStateToProps)(HomeLobby)
