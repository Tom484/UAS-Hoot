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

  if (status === STATUS_TYPES.LOBBY) return <Lobby />
  if (status === STATUS_TYPES.GAME) return <SlideGame />
  if (status === STATUS_TYPES.OVERALL_RESULTS) return <OverallResults />
  return <LoadingAnimation />
}

const mapStateToProps = state => ({
  eventDataEvent: selectEventDataEvent(state),
})

export default connect(mapStateToProps)(EventSlide)
