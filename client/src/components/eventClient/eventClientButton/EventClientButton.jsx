import React from "react"
import { connect } from "react-redux"
import { joinEventStart } from "../../../redux/eventClient/eventClientActions"
import EventClientButtonTypes from "./eventClientButtonTypes"
import { withRouter } from "react-router-dom"

const EventClientButton = ({
  children,
  label,
  className,
  type,
  joinEvent,
  eventId,
  displayName,
  history,
}) => {
  const clickHandler = () => {
    switch (type) {
      case EventClientButtonTypes.JOIN_EVENT.id:
        joinEventHandler()
        break
      default:
        console.log("Error! Enter correct type name!")
    }
  }

  const joinEventHandler = () => {
    joinEvent({ eventId, displayName, history })
  }

  if (children) return <span onClick={clickHandler}>{children}</span>

  return (
    <button className={"button btn-basic " + className} onClick={clickHandler}>
      {label ? label : EventClientButtonTypes[type]?.label || "Enter correct type"}
    </button>
  )
}

const mapDispatchToProps = dispatch => ({
  joinEvent: id => dispatch(joinEventStart(id)),
})

export default withRouter(connect(null, mapDispatchToProps)(EventClientButton))
