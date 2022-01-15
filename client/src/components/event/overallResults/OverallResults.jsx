import React from "react"
import { connect } from "react-redux"
import { selectEventPlayersArraySorted } from "../../../redux/eventPlayers/eventPlayersSelectors"
import CustomBackground from "../../custom/customBackground/CustomBackground"
import { CustomTextExtraLarge } from "../../custom/customText/CustomText"

import "./overallResults.scss"

const OverallResults = ({ eventPlayers }) => {
  console.log(eventPlayers)

  return (
    <CustomBackground className="overall-results">
      <div className="results-container">
        <CustomTextExtraLarge center style={{ marginBottom: "20px" }}>
          Results
        </CustomTextExtraLarge>
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
    </CustomBackground>
  )
}

const mapStateToProps = state => ({
  eventPlayers: selectEventPlayersArraySorted(state),
})

export default connect(mapStateToProps)(OverallResults)
