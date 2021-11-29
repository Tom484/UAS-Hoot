import React from "react"
import { connect } from "react-redux"
import { selectEventPlayersArray } from "../../../redux/eventPlayers/eventPlayersSelectors"
import { selectEventData } from "../../../redux/eventData/eventDataSelectors"
import QRCode from "react-qr-code"
import useWindowSize from "../../../functions/hooks/useWindowSize"

import "./lobby.scss"

const HomeLobby = ({ eventData, players }) => {
  const { width, height } = useWindowSize()
  const qrSize = Math.round(Math.min(width, height) / 2)

  return (
    <div className="home-lobby">
      <div className="home-lobby-container">
        <div className="container-title">
          <h2>
            Enter game on <span className="link fw-600">https://uas-hoot.netlify.app</span> with
            enter code&nbsp;
            <span className="code fw-600">{eventData?.connect?.enterCode}</span>
          </h2>
        </div>
        <div className="container-players">
          {/* <div className="label">Players</div> */}
          <div className="players-container">
            {players.map(player => (
              <div className="player" key={player.id}>
                {player.displayName}
              </div>
            ))}
          </div>
        </div>
        <div className="container-qr-code">
          {eventData?.connect?.enterCode && (
            <span className="box-qr-code">
              <QRCode
                size={qrSize}
                value={`https://uas-hoot.netlify.app/join/${eventData?.connect?.enterCode}`}
              />
              {/* <div className="label">Scan QR Code</div> */}
            </span>
          )}
        </div>
        {/* <EventButton type="START_EVENT" /> */}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  eventData: selectEventData(state),
  players: selectEventPlayersArray(state),
})

export default connect(mapStateToProps)(HomeLobby)
