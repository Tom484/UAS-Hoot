import React from "react"
import { connect } from "react-redux"
import { ICONCloudBold, ICONDropBold, ICONFlashBold, ICONMoonBold } from "../../../icons/Icons"
import { selectEventCurrentSlide } from "../../../redux/eventData/eventDataSelectors"
import CurrentResultsChart from "../currentResultsChart/CurrentResultsChart"

import "./currentResults.scss"

const CurrentResults = ({ eventCurrentSlide }) => {
  return (
    <div className="current-results">
      <div className="current-results-container">
        <div className="question">{eventCurrentSlide.question}</div>
        <CurrentResultsChart />
        <div className="options-container">
          {Object.values(eventCurrentSlide.options)?.map((option, i) => (
            <div
              className={`option-container option-${i + 1} ${option.correct ? "correct" : ""}`}
              key={option.id}
            >
              <div className="icon-container">
                {i === 0 && <ICONFlashBold className="icon-option" />}
                {i === 1 && <ICONCloudBold className="icon-option" />}
                {i === 2 && <ICONDropBold className="icon-option" />}
                {i === 3 && <ICONMoonBold className="icon-option" />}
              </div>
              <div className="option">{option.option}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  eventCurrentSlide: selectEventCurrentSlide(state),
})

export default connect(mapStateToProps)(CurrentResults)
