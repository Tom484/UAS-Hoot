import React from "react"
import { connect } from "react-redux"
import EventHostButtonTypes from "./eventHostButtonTypes"
import { withRouter } from "react-router-dom"
import {
  createEventStart,
  updateHostPropertiesConnectStart,
  updateHostPropertiesEventStart,
} from "../../../redux/eventHostProperties/eventHostPropertiesActions"

const EventClientButton = ({
  children,
  label,
  className,
  type,
  collectionId,
  createEvent,
  history,
  updateHostPropertiesConnect,
  updateHostPropertiesEvent,
  properties,
}) => {
  const clickHandler = () => {
    switch (type) {
      case EventHostButtonTypes.CREATE_EVENT.id:
        createEventHandler()
        break
      case EventHostButtonTypes.UPDATE_HOST_PROPERTIES_CONNECT.id:
        updateHostPropertiesConnectHandler()
        break
      case EventHostButtonTypes.UPDATE_HOST_PROPERTIES_EVENT.id:
        updateHostPropertiesEventHandler()
        break
      default:
        console.log("Error! Enter correct type name!")
    }
  }

  const createEventHandler = () => {
    createEvent({ collectionId, history })
  }
  const updateHostPropertiesConnectHandler = () => {
    updateHostPropertiesConnect({ ...properties })
  }

  const updateHostPropertiesEventHandler = () => {
    updateHostPropertiesEvent({ ...properties })
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
  updateHostPropertiesConnect: properties => dispatch(updateHostPropertiesConnectStart(properties)),
  updateHostPropertiesEvent: properties => dispatch(updateHostPropertiesEventStart(properties)),
})

export default withRouter(connect(null, mapDispatchToProps)(EventClientButton))
