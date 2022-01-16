import React from "react"
import { connect } from "react-redux"
import { ICONUserOutline } from "../../../icons/Icons"
import { selectEventPlayersCount } from "../../../redux/eventPlayers/eventPlayersSelectors"

const PlayersCount = ({ eventPlayersCount }) => {
  return (
    <div className="container-setting">
      <span>
        <ICONUserOutline className="icon-setting" />
      </span>
      <div className="label">
        Players: <span className="fw-500">{eventPlayersCount}</span>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  eventPlayersCount: selectEventPlayersCount(state),
})

export default connect(mapStateToProps)(PlayersCount)
