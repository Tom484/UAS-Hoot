import React from "react"
import { connect } from "react-redux"
import { createEventStart } from "../../../redux/eventHost/eventHostActions"
import EventHostButtonTypes from "./eventHostButtonTypes"
import { withRouter } from "react-router-dom"

const EventClientButton = ({
  children,
  label,
  className,
  type,
  collectionId,
  createEvent,
  history,
}) => {
  const clickHandler = () => {
    switch (type) {
      case EventHostButtonTypes.CREATE_EVENT.id:
        createEventHandler()
        break
      default:
        console.log("Error! Enter correct type name!")
    }
  }

  const createEventHandler = () => {
    createEvent({ collectionId, history })
  }

  if (children) return <span onClick={clickHandler}>{children}</span>

  return (
    <button className={"button btn-basic " + className} onClick={clickHandler}>
      {label ? label : EventHostButtonTypes[type]?.label || "Enter correct type"}
    </button>
  )
}

const mapDispatchToProps = dispatch => ({
  createEvent: id => dispatch(createEventStart(id)),
})

export default withRouter(connect(null, mapDispatchToProps)(EventClientButton))
