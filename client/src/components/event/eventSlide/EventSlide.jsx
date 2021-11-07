import React from "react"
import { connect } from "react-redux"
import { selectEventDataEvent } from "../../../redux/eventData/eventDataSelectors"
import Lobby from "../lobby/Lobby"
import OverallResults from "../overallResults/OverallResults"
import SlideGame from "../slideGame/SlideGame"

import "./eventSlide.scss"

const EventSlide = ({ eventDataEvent }) => {
  if (!eventDataEvent?.currentSlide) return <div>Loading</div>
  return (
    <div>
      {eventDataEvent?.currentSlide?.type === "lobby" && <Lobby />}
      {eventDataEvent?.currentSlide?.type === "game" && <SlideGame />}
      {eventDataEvent?.currentSlide?.type === "overallResults" && <OverallResults />}
    </div>
  )
}

const mapStateToProps = state => ({
  eventDataEvent: selectEventDataEvent(state),
})

export default connect(mapStateToProps)(EventSlide)
