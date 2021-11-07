import React from "react"
import { connect } from "react-redux"
import { selectEventDataEvent } from "../../../redux/eventData/eventDataSelectors"

import "./slideGameVote.scss"

const SlideGameVote = ({ eventDataEvent }) => {
  const { question, options } = eventDataEvent.currentSlideData
  return (
    <div>
      <h2>{question}</h2>
      {Object.values(options).map(option => (
        <div key={option.id}>{option.option}</div>
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  eventDataEvent: selectEventDataEvent(state),
})

export default connect(mapStateToProps)(SlideGameVote)
