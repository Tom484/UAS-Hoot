import React from "react"
import { connect } from "react-redux"
import { selectEventPlayersArray } from "../../../redux/eventPlayers/eventPlayersSelectors"
import {
  selectEventProperties,
  selectEventPropertiesAdmin,
} from "../../../redux/eventProperties/eventPropertiesSelectors"
import EventButton from "../eventButton/EventButton"
import "./lobby.scss"
import QRCode from "react-qr-code"

const HomeLobby = ({ eventProperties, players, admin }) => {
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
        <EventButton type="START_EVENT" />
        <EventButton type="UPDATE_PROPERTIES_CONNECT" properties={{ isOpen: "toggle" }}>
          Open ({eventProperties?.connect.isOpen ? "Yes" : "No"})
        </EventButton>
        <div>Hosted by {admin.displayName}</div>
        {eventProperties?.connect?.enterCode && (
          <QRCode
            value={`https://uas-hoot.netlify.app/join/${eventProperties?.connect?.enterCode}`}
          />
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  eventProperties: selectEventProperties(state),
  players: selectEventPlayersArray(state),
  admin: selectEventPropertiesAdmin(state),
})

export default connect(mapStateToProps)(HomeLobby)
