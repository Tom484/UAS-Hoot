import React from "react"
import { connect } from "react-redux"
import { selectEventPlayersArraySorted } from "../../../redux/eventPlayers/eventPlayersSelectors"
import PlayerResult from "../playerResult/PlayerResult"
import PlayerResultLabel from "../playerResultLabel/PlayerResultLabel"

import "./playersResult.scss"

const PlayersResult = ({ players }) => {
  return (
    <div className="players-result">
      <div className="players-result-container">
        <PlayerResultLabel />
        {players?.map((player, i) => (
          <PlayerResult key={player.id} player={player} order={i + 1} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  players: selectEventPlayersArraySorted(state),
})

export default connect(mapStateToProps)(PlayersResult)
