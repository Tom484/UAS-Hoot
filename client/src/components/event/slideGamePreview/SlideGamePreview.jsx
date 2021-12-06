import React from "react"
import { connect } from "react-redux"
import { selectEventCurrentSlide } from "../../../redux/eventData/eventDataSelectors"

import "./slideGamePreview.scss"

const SlideGamePreview = ({ eventCurrentSlide }) => {
  return <div>{eventCurrentSlide?.question || "Question was not found"}</div>
}

const mapStateToProps = state => ({
  eventCurrentSlide: selectEventCurrentSlide(state),
})

export default connect(mapStateToProps)(SlideGamePreview)
