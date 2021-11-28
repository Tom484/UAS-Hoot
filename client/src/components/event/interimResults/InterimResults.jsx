import React from "react"
import { connect } from "react-redux"
import { selectEventPlayersArraySorted } from "../../../redux/eventPlayers/eventPlayersSelectors"
import PlayersResult from "../playersResult/PlayersResult"
import "./interimResults.scss"

const InterimResults = ({ players }) => {
  console.log(players)
  return (
    <div className="interim-results">
      <div className="interim-results-container">
        <PlayersResult />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  players: selectEventPlayersArraySorted(state),
})

export default connect(mapStateToProps)(InterimResults)
