import React from "react"
import { connect } from "react-redux"
import { selectEventCurrentSlide } from "../../../redux/eventData/eventDataSelectors"
import LineBackground from "../../components/lineBackground/LineBackground"

import "./slideGamePreview.scss"

const SlideGamePreview = ({ eventCurrentSlide }) => {
  return (
    <div className="slide-game-preview">
      <LineBackground />
      <div className="slide-game-preview-container">
        <div className="question">{eventCurrentSlide?.question || "Question was not found"}</div>
        <div className="time-line-container">
          <span className="time-line"></span>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  eventCurrentSlide: selectEventCurrentSlide(state),
})

export default connect(mapStateToProps)(SlideGamePreview)
