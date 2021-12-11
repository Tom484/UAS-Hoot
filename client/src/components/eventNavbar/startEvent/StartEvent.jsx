import React from "react"
import { connect } from "react-redux"
import { ICONFlagBold } from "../../../icons/Icons"
import { selectEventDataEvent } from "../../../redux/eventData/eventDataSelectors"
import { STATUS_TYPES } from "../../../redux/eventData/eventDataTypes"
import EventButton from "../../event/eventButton/EventButton"
import EventButtonTypes from "../../event/eventButton/eventButtonTypes"

const StartEvent = ({ eventDataEvent }) => {
  if (eventDataEvent?.status === STATUS_TYPES.LOBBY) {
    return (
      <EventButton type={EventButtonTypes.START_EVENT.id}>
        <div className="container-setting highlight">
          <ICONFlagBold className="icon-setting" /> <div className="label">Start Event</div>
        </div>
      </EventButton>
    )
  }
  return <></>
}

const mapStateToProps = state => ({
  eventDataEvent: selectEventDataEvent(state),
})

export default connect(mapStateToProps)(StartEvent)
