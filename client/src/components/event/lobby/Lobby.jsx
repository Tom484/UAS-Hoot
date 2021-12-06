import React from "react"
import { connect } from "react-redux"
import { selectEventPlayersArray } from "../../../redux/eventPlayers/eventPlayersSelectors"
import { selectEventDataConnect } from "../../../redux/eventData/eventDataSelectors"
import QRCode from "react-qr-code"
import useWindowSize from "../../../functions/hooks/useWindowSize"

import "./lobby.scss"

const HomeLobby = ({ players, eventDataConnect }) => {
  const { enterCode } = eventDataConnect

  const { width, height } = useWindowSize()
  const qrSize = Math.round(Math.min(width, height) / 2)

  return (
    <div className="home-lobby">
      <div className="home-lobby-container">
        <div className="container-title">
          <h2>
            Enter the game at <span className="link fw-600">https://uas-hoot.netlify.app</span> by
            entering the code&nbsp;
            <span className="code fw-600">{enterCode}</span>
          </h2>
        </div>
        <div className="container-players">
          <div className="players-container">
            {players?.length === 0 && <div className="player">Waiting for players</div>}
            {players?.map(player => (
              <div className="player" key={player.id}>
                {player.displayName}
              </div>
            ))}
          </div>
        </div>
        <div className="container-qr-code">
          {enterCode && (
            <span className="box-qr-code">
              <QRCode size={qrSize} value={`https://uas-hoot.netlify.app/join/${enterCode}`} />
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  players: selectEventPlayersArray(state),
  eventDataConnect: selectEventDataConnect(state),
})

export default connect(mapStateToProps)(HomeLobby)
