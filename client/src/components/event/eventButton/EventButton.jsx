import React from "react"
import { connect } from "react-redux"
import EventButtonTypes from "./eventButtonTypes"
import { withRouter } from "react-router-dom"
import {
  createEventStart,
  startEventStart,
  updatePropertiesConnectStart,
  updatePropertiesEventStart,
} from "../../../redux/eventProperties/eventPropertiesActions"

const EventButton = ({
  children,
  label,
  className,
  type,
  collectionId,
  createEvent,
  history,
  updatePropertiesConnect,
  updatePropertiesEvent,
  properties,
  startEvent,
}) => {
  const clickHandler = () => {
    switch (type) {
      case EventButtonTypes.CREATE_EVENT.id:
        createEventHandler()
        break
      case EventButtonTypes.START_EVENT.id:
        startEventHandler()
        break
      case EventButtonTypes.UPDATE_PROPERTIES_CONNECT.id:
        updatePropertiesConnectHandler()
        break
      case EventButtonTypes.UPDATE_PROPERTIES_EVENT.id:
        updatePropertiesEventHandler()
        break
      default:
        console.log("Error! Enter correct type name!")
    }
  }

  const createEventHandler = () => {
    createEvent({ collectionId, history })
  }

  const startEventHandler = () => {
    startEvent()
  }

  const updatePropertiesConnectHandler = () => {
    updatePropertiesConnect({ properties })
  }

  const updatePropertiesEventHandler = () => {
    updatePropertiesEvent({ properties })
  }

  if (children) return <span onClick={clickHandler}>{children}</span>

  return (
    <button className={"button btn-basic " + className} onClick={clickHandler}>
      {label ? label : EventButtonTypes[type]?.label || "Enter correct type"}
    </button>
  )
}

const mapDispatchToProps = dispatch => ({
  createEvent: id => dispatch(createEventStart(id)),
  startEvent: () => dispatch(startEventStart()),
  updatePropertiesConnect: properties => dispatch(updatePropertiesConnectStart(properties)),
  updatePropertiesEvent: properties => dispatch(updatePropertiesEventStart(properties)),
})

export default withRouter(connect(null, mapDispatchToProps)(EventButton))
