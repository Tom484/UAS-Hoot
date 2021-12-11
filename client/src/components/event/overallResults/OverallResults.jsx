import React from "react"
import { connect } from "react-redux"
import { selectEventPlayersArraySorted } from "../../../redux/eventPlayers/eventPlayersSelectors"
import BubbleBackground from "../../components/bubbleBackground/BubbleBackground"
import LineBackground from "../../components/lineBackground/LineBackground"

import "./overallResults.scss"

const OverallResults = ({ eventPlayers }) => {
  return (
    <div className="overall-results">
      <BubbleBackground />
      <LineBackground />
      <div className="overall-results-container">
        <div className="results">
          <div className="results-container">
            <div className="podium">
              <div className="second podium-spot">
                <div className="name">{eventPlayers[1]?.displayName}</div>
                <div className="position second">2</div>
                <div className="points">{eventPlayers[1]?.score || "0"}</div>
              </div>
              <div className="first podium-spot">
                <div className="name">{eventPlayers[0]?.displayName || "0"}</div>
                <div className="position first">1</div>
                <div className="points">{eventPlayers[0]?.score || "0"}</div>
              </div>
              <div className="third podium-spot">
                <div className="name">{eventPlayers[2]?.displayName}</div>
                <div className="position third">3</div>
                <div className="points">{eventPlayers[2]?.score || "0"}</div>
              </div>
            </div>
            <div className="other-results">
              {eventPlayers.length >= 3 &&
                eventPlayers.map((player, i) => {
                  if (i < 3) return <></>
                  return (
                    <div className="result-box">
                      <div className="order">{i + 1}.</div>
                      <div className="name">{player.displayName}</div>
                      <div className="points">{player.score}</div>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  eventPlayers: selectEventPlayersArraySorted(state),
})

export default connect(mapStateToProps)(OverallResults)
