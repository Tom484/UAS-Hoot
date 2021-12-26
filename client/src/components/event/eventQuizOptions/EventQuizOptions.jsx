import React, { Fragment } from "react"
import { connect } from "react-redux"
import { ICONCloudBold, ICONDropBold, ICONFlashBold, ICONMoonBold } from "../../../icons/Icons"
import { selectEventCurrentSlide } from "../../../redux/eventData/eventDataSelectors"
import { selectEventResultsArray } from "../../../redux/eventResults/eventResultsSelectors"

import "./eventQuizOptions.scss"

const EventQuizOptions = ({ eventCurrentSlide, showCorrect = false, eventResults }) => {
  const { options } = eventCurrentSlide

  return (
    <Fragment>
      {Object.values(options).map((option, i) => (
        <div
          className={`event-quiz-options option-${i + 1} ${
            showCorrect && option.correct ? "correct" : ""
          }`}
          key={option.id}
        >
          <div className={`icon-container option-${i + 1}`}>
            {showCorrect ? (
              eventResults[i]?.count
            ) : (
              <span>
                {i === 0 && <ICONFlashBold className="icon-option" />}
                {i === 1 && <ICONCloudBold className="icon-option" />}
                {i === 2 && <ICONDropBold className="icon-option" />}
                {i === 3 && <ICONMoonBold className="icon-option" />}
              </span>
            )}
          </div>
          <div className="option"> {option.option}</div>
        </div>
      ))}
    </Fragment>
  )
}

const mapStateToProps = state => ({
  eventCurrentSlide: selectEventCurrentSlide(state),
  eventResults: selectEventResultsArray(state),
})

export default connect(mapStateToProps)(EventQuizOptions)
