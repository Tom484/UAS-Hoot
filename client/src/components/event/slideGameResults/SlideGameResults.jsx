import React from "react"
import { selectEventResults } from "../../../redux/eventResults/eventResultsSelectors"
import { connect } from "react-redux"
import SlideGameResultsChart from "../slideGameResultsChart/SlideGameResultsChart"

import "./slideGameResults.scss"

const SlideGameResults = ({ eventResults }) => {
  return (
    <div className="slide-game-results">
      <div className="slide-game-results-container">
        Slide Game Results
        <SlideGameResultsChart />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  eventResults: selectEventResults(state),
})

export default connect(mapStateToProps)(SlideGameResults)
