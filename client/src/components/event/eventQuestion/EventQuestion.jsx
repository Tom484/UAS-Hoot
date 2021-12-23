import React from "react"
import { connect } from "react-redux"
import { selectEventCurrentSlide } from "../../../redux/eventData/eventDataSelectors"

import "./eventQuestion.scss"

const EventQuestion = ({ currentSlide: { question } }) => {
  return <div className="event-question">{question}</div>
}

const mapStateToProps = state => ({
  currentSlide: selectEventCurrentSlide(state),
})

export default connect(mapStateToProps)(EventQuestion)
