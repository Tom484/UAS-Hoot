import React from "react"
import { connect } from "react-redux"
import HomeLobby from "../../components/eventHost/homeLobby/HomeLobby"
import OverallResults from "../../components/eventHost/overallResults/OverallResults"
import { selectEventPropertiesEvent } from "../../redux/eventHostProperties/eventHostPropertiesSelectors"

import "./eventHostPage.scss"

const EventHostPage = ({ eventPropertiesEvent }) => {
  if (!eventPropertiesEvent?.currentSlide) return <div>Loading</div>
  console.log(eventPropertiesEvent)
  return (
    <div>
      {eventPropertiesEvent?.currentSlide?.type === "lobby" && <HomeLobby />}
      {eventPropertiesEvent?.currentSlide?.type === "overallResults" && <OverallResults />}
    </div>
  )
}

const mapStateToProps = state => ({
  eventPropertiesEvent: selectEventPropertiesEvent(state),
})

export default connect(mapStateToProps)(EventHostPage)
