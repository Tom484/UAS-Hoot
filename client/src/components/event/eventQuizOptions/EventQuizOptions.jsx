import React, { Fragment } from "react"
import { connect } from "react-redux"
import { ICONCloudBold, ICONDropBold, ICONFlashBold, ICONMoonBold } from "../../../icons/Icons"
import { selectEventCurrentSlide } from "../../../redux/eventData/eventDataSelectors"

import "./eventQuizOptions.scss"

const EventQuizOptions = ({ eventCurrentSlide }) => {
  const { options } = eventCurrentSlide

  return (
    <Fragment>
      {Object.values(options).map((option, i) => (
        <div className={`event-quiz-options option-${i + 1}`} key={option.id}>
          <div className={`icon-container option-${i + 1}`}>
            {i === 0 && <ICONFlashBold className="icon-option" />}
            {i === 1 && <ICONCloudBold className="icon-option" />}
            {i === 2 && <ICONDropBold className="icon-option" />}
            {i === 3 && <ICONMoonBold className="icon-option" />}
          </div>
          <div className="option"> {option.option}</div>
        </div>
      ))}
    </Fragment>
  )
}

const mapStateToProps = state => ({
  eventCurrentSlide: selectEventCurrentSlide(state),
})

export default connect(mapStateToProps)(EventQuizOptions)
