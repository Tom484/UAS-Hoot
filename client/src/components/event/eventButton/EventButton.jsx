import React from "react"
import { connect } from "react-redux"
import EventButtonTypes from "./eventButtonTypes"
import { withRouter } from "react-router-dom"
import {
  createEventStart,
  startEventStart,
  updateDataConnectStart,
  updateDataEventStart,
} from "../../../redux/eventData/eventDataActions"

const EventButton = ({
  children,
  label,
  className,
  type,
  collectionId,
  createEvent,
  history,
  updateDataConnect,
  updateDataEvent,
  data,
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
      case EventButtonTypes.UPDATE_DATA_CONNECT.id:
        updateDataConnectHandler()
        break
      case EventButtonTypes.UPDATE_DATA_EVENT.id:
        updateDataEventHandler()
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

  const updateDataConnectHandler = () => {
    updateDataConnect({ data })
  }

  const updateDataEventHandler = () => {
    updateDataEvent({ data })
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
  updateDataConnect: data => dispatch(updateDataConnectStart(data)),
  updateDataEvent: data => dispatch(updateDataEventStart(data)),
})

export default withRouter(connect(null, mapDispatchToProps)(EventButton))
