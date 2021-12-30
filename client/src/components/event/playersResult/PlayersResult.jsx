import React from "react"
import { connect } from "react-redux"
import { selectEventPlayersArraySorted } from "../../../redux/eventPlayers/eventPlayersSelectors"
import { CustomTextExtraLarge } from "../../custom/customText/CustomText"
import PlayerResult from "../playerResult/PlayerResult"
import PlayerResultLabel from "../playerResultLabel/PlayerResultLabel"

import "./playersResult.scss"

const PlayersResult = ({ players, title = "" }) => {
  return (
    <div className="players-result">
      <div className="players-result-container">
        {title && <CustomTextExtraLarge style={{ padding: "20px" }}>{title}</CustomTextExtraLarge>}
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
