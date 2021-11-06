import React from "react"
import { connect } from "react-redux"
import Lobby from "../../components/event/lobby/Lobby"
import OverallResults from "../../components/event/overallResults/OverallResults"
import { selectEventPropertiesEvent } from "../../redux/eventProperties/eventPropertiesSelectors"

import "./eventPage.scss"

const EventPage = ({ eventPropertiesEvent }) => {
  if (!eventPropertiesEvent?.currentSlide) return <div>Loading</div>
  console.log(eventPropertiesEvent)
  return (
    <div>
      {eventPropertiesEvent?.currentSlide?.type === "lobby" && <Lobby />}
      {eventPropertiesEvent?.currentSlide?.type === "overallResults" && <OverallResults />}
    </div>
  )
}

const mapStateToProps = state => ({
  eventPropertiesEvent: selectEventPropertiesEvent(state),
})

export default connect(mapStateToProps)(EventPage)
