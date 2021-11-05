import React from "react"
import { connect } from "react-redux"
import { selectEventPropertiesEvent } from "../../redux/eventHostProperties/eventHostPropertiesSelectors"
import HomeLobby from "../../components/eventClient/homeLobby/HomeLobby"
import OverallResults from "../../components/eventClient/overallResults/OverallResults"
import "./eventClientPage.scss"

const EventClientPage = ({ eventPropertiesEvent }) => {
  if (!eventPropertiesEvent?.eventSlide) return <div>Loading</div>
  console.log(eventPropertiesEvent)
  return (
    <div>
      {eventPropertiesEvent?.eventSlide?.type === "lobby" && <HomeLobby />}
      {eventPropertiesEvent?.eventSlide?.type === "overallResults" && <OverallResults />}
    </div>
  )
}

const mapStateToProps = state => ({
  eventPropertiesEvent: selectEventPropertiesEvent(state),
})

export default connect(mapStateToProps)(EventClientPage)
