import React from "react"
import { connect } from "react-redux"
import { selectEventAnswersLength } from "../../../redux/eventAnswers/eventAnswersSelectors"

import "./eventNumberOfAnswers.scss"

const EventNumberOfAnswers = ({ numberOfAnswers }) => {
  return <div className="event-number-of-answers">Answers: {numberOfAnswers}</div>
}

const mapStateToProps = state => ({
  numberOfAnswers: selectEventAnswersLength(state),
})

export default connect(mapStateToProps)(EventNumberOfAnswers)
