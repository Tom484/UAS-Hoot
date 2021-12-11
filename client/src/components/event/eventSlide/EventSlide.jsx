import React from "react"
import { connect } from "react-redux"
import { selectEventDataEvent } from "../../../redux/eventData/eventDataSelectors"
import { STATUS_TYPES } from "../../../redux/eventData/eventDataTypes"
import Lobby from "../lobby/Lobby"
import OverallResults from "../overallResults/OverallResults"
import SlideGame from "../slideGame/SlideGame"

import "./eventSlide.scss"

const EventSlide = ({ eventDataEvent }) => {
  const { status } = eventDataEvent

  if (!status) return <div>Loading</div>

  return (
    <div>
      {status === STATUS_TYPES.LOBBY && <Lobby />}
      {status === STATUS_TYPES.GAME && <SlideGame />}
      {status === STATUS_TYPES.OVERALL_RESULTS && <OverallResults />}
    </div>
  )
}

const mapStateToProps = state => ({
  eventDataEvent: selectEventDataEvent(state),
})

export default connect(mapStateToProps)(EventSlide)
