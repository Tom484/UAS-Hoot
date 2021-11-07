import React from "react"
import { connect } from "react-redux"
import { selectEventDataEvent } from "../../../redux/eventData/eventDataSelectors"

import "./slideGamePreview.scss"

const SlideGamePreview = ({ eventDataEvent }) => {
  const { question } = eventDataEvent.currentSlideData
  return <div>{question}</div>
}

const mapStateToProps = state => ({
  eventDataEvent: selectEventDataEvent(state),
})

export default connect(mapStateToProps)(SlideGamePreview)
