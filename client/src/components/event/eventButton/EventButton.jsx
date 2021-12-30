import React from "react"
import { connect } from "react-redux"
import EventButtonTypes from "./eventButtonTypes"
import { withRouter } from "react-router-dom"
import {
  createEventStart,
  eventNextSlideStart,
  startEventStart,
  updateDataConnectStart,
  updateDataEventStart,
} from "../../../redux/eventData/eventDataActions"
import CustomButton from "../../custom/customButton/CustomButton"

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
  eventNextSlide,
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
      case EventButtonTypes.EVENT_NEXT_SLIDE.id:
        eventNextSlideHandler()
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

  const eventNextSlideHandler = () => {
    eventNextSlide()
  }

  if (children) return <span onClick={clickHandler}>{children}</span>

  return (
    <CustomButton onClick={clickHandler}>
      {label ? label : EventButtonTypes[type]?.label || "Enter correct type"}
    </CustomButton>
  )
}

const mapDispatchToProps = dispatch => ({
  createEvent: id => dispatch(createEventStart(id)),
  startEvent: () => dispatch(startEventStart()),
  updateDataConnect: data => dispatch(updateDataConnectStart(data)),
  updateDataEvent: data => dispatch(updateDataEventStart(data)),
  eventNextSlide: () => dispatch(eventNextSlideStart()),
})

export default withRouter(connect(null, mapDispatchToProps)(EventButton))
