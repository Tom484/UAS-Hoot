import React from "react"
import { connect } from "react-redux"
import { joinEventStart } from "../../../redux/eventClient/eventClientActions"
import EventClientButtonTypes from "./eventClientButtonTypes"

const EventClientButton = ({
  children,
  label,
  className,
  type,
  joinEvent,
  eventId,
  displayName,
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
    joinEvent({ eventId, displayName })
  }

  if (children) return <span onClick={clickHandler}>{children}</span>

  return (
    <button className={"button button-basic " + className} onClick={clickHandler}>
      {label ? label : EventClientButtonTypes[type]?.label || "Enter correct type"}
    </button>
  )
}

const mapDispatchToProps = dispatch => ({
  joinEvent: id => dispatch(joinEventStart(id)),
})

export default connect(null, mapDispatchToProps)(EventClientButton)
