import React from "react"
import { connect } from "react-redux"
import { ICONSliderOutline } from "../../../icons/Icons"
import { selectEventDataEvent } from "../../../redux/eventData/eventDataSelectors"

const SlidesOrder = ({ eventDataEvent }) => {
  return (
    <div className="container-setting">
      <span>
        <ICONSliderOutline className="icon-setting" />
      </span>
      <div className="label">
        Slides:{" "}
        <span className="fw-500">
          {eventDataEvent.status === "LOBBY" ? 0 : eventDataEvent.slideIndex + 1}/
          {eventDataEvent.numberOfSlides}
        </span>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  eventDataEvent: selectEventDataEvent(state),
})

export default connect(mapStateToProps)(SlidesOrder)
