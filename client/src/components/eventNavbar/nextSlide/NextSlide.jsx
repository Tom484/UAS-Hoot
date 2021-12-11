import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { ICONPlayBold } from "../../../icons/Icons"
import { selectEventDataEvent } from "../../../redux/eventData/eventDataSelectors"
import EventButton from "../../event/eventButton/EventButton"
import EventButtonTypes from "../../event/eventButton/eventButtonTypes"

const NextSlide = ({ eventDataEvent }) => {
  const [previousDataEvent, setPreviousDataEvent] = useState()
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const date = new Date().getTime()
    if (eventDataEvent?.closeVoteAt === previousDataEvent?.closeVoteAt) return
    if (eventDataEvent?.closeVoteAt < date) return

    const timer = setTimeout(() => {
      setShowButton(true)
    }, [eventDataEvent?.closeVoteAt - date])
    setShowButton(false)
    setPreviousDataEvent(eventDataEvent)
    return () => clearTimeout(timer)
  }, [eventDataEvent])

  if (!showButton) return <></>

  return (
    <EventButton type={EventButtonTypes.EVENT_NEXT_SLIDE.id}>
      <div className="container-setting highlight">
        <ICONPlayBold className="icon-setting" />{" "}
        <div className="label">
          {eventDataEvent.numberOfSlides === eventDataEvent.slideIndex + 1
            ? "Overall Results"
            : "Next Slide"}
        </div>
      </div>
    </EventButton>
  )
}

const mapStateToProps = state => ({
  eventDataEvent: selectEventDataEvent(state),
})

export default connect(mapStateToProps)(NextSlide)
