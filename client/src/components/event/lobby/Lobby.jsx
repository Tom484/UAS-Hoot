import React from "react"
import { connect } from "react-redux"
import { selectEventPlayersArray } from "../../../redux/eventPlayers/eventPlayersSelectors"
import { selectEventData, selectEventDataAdmin } from "../../../redux/eventData/eventDataSelectors"
import EventButton from "../eventButton/EventButton"
import QRCode from "react-qr-code"

import "./lobby.scss"

const HomeLobby = ({ eventData, players, admin }) => {
  return (
    <div className="home-lobby">
      <div className="home-lobby-container">
        <h1>Game Pin: {eventData?.connect?.enterCode}</h1>
        <div>Number of Players: {players.length}</div>
        <div className="players-container">
          {players.map(player => (
            <div key={player.id}>{player.displayName}</div>
          ))}
        </div>
        <EventButton type="START_EVENT" />
        <EventButton type="UPDATE_DATA_CONNECT" data={{ isOpen: "toggle" }}>
          Open ({eventData?.connect.isOpen ? "Yes" : "No"})
        </EventButton>
        <div>Hosted by {admin.displayName}</div>
        {eventData?.connect?.enterCode && (
          <QRCode value={`https://uas-hoot.netlify.app/join/${eventData?.connect?.enterCode}`} />
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  eventData: selectEventData(state),
  players: selectEventPlayersArray(state),
  admin: selectEventDataAdmin(state),
})

export default connect(mapStateToProps)(HomeLobby)
