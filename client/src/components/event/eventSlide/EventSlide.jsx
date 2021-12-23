import React from "react"
import { connect } from "react-redux"
import { selectEventDataEvent } from "../../../redux/eventData/eventDataSelectors"
import { STATUS_TYPES } from "../../../redux/eventData/eventDataTypes"
import LoadingAnimation from "../../components/loadingAnimation/LoadingAnimation"
import Lobby from "../lobby/Lobby"
import OverallResults from "../overallResults/OverallResults"
import SlideGame from "../slideGame/SlideGame"

const EventSlide = ({ eventDataEvent }) => {
  const { status } = eventDataEvent

  if (!status) return <LoadingAnimation />

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
