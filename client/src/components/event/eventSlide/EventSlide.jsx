import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { selectEventDataEvent } from "../../../redux/eventData/eventDataSelectors"
import { STATUS_TYPES } from "../../../redux/eventData/eventDataTypes"
import ROUTES from "../../../routes/routes"
import LoadingAnimationFullScreen from "../../animation/loadingAnimation/LoadingAnimationFullScreen"
import Lobby from "../lobby/Lobby"
import OverallResults from "../overallResults/OverallResults"
import SlideGame from "../slideGame/SlideGame"

const EventSlide = ({ eventDataEvent, history }) => {
  if (!eventDataEvent || Object.keys(eventDataEvent).length === 0)
    history.push(ROUTES.LIBRARY.RECENT)
  const { status } = eventDataEvent

  if (status === STATUS_TYPES.LOBBY) return <Lobby />
  if (status === STATUS_TYPES.GAME) return <SlideGame />
  if (status === STATUS_TYPES.OVERALL_RESULTS) return <OverallResults />
  return <LoadingAnimationFullScreen />
}

const mapStateToProps = state => ({
  eventDataEvent: selectEventDataEvent(state),
})

export default withRouter(connect(mapStateToProps)(EventSlide))
