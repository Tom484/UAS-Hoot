import React from "react"
import { connect } from "react-redux"
import { selectEventCurrentSlide } from "../../../redux/eventData/eventDataSelectors"
import CustomBackground from "../../components/customBackground/CustomBackground"
import "./slideGamePreview.scss"

const SlideGamePreview = ({ eventCurrentSlide }) => {
  return (
    <CustomBackground eventNavbar bubbleBackground={false} className="slide-game-preview">
      <div className="slide-game-preview-container">
        <div className="type-container">
          <div className="type">Quiz | Normal points</div>
        </div>
        <div className="question">{eventCurrentSlide?.question || "Question was not found"}</div>
        <div className="time-line-container">
          <span className="time-line"></span>
        </div>
      </div>
    </CustomBackground>
  )
}

const mapStateToProps = state => ({
  eventCurrentSlide: selectEventCurrentSlide(state),
})

export default connect(mapStateToProps)(SlideGamePreview)
