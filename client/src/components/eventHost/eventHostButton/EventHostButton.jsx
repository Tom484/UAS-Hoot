import React from "react"
import { connect } from "react-redux"
import { createEventStart } from "../../../redux/eventHost/eventHostActions"
import EventHostButtonTypes from "./eventHostButtonTypes"

const EventClientButton = ({ children, label, className, type, collectionId, createEvent }) => {
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
    createEvent({ collectionId })
  }

  if (children) return <span onClick={clickHandler}>{children}</span>

  return (
    <button className={"button button-basic " + className} onClick={clickHandler}>
      {label ? label : EventHostButtonTypes[type]?.label || "Enter correct type"}
    </button>
  )
}

const mapDispatchToProps = dispatch => ({
  createEvent: id => dispatch(createEventStart(id)),
})

export default connect(null, mapDispatchToProps)(EventClientButton)
