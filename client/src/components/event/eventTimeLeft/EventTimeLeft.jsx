import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { selectEventDataEvent } from "../../../redux/eventData/eventDataSelectors"

import "./eventTimeLeft.scss"

const EventTimeLeft = ({ eventDataEvent }) => {
  const { closeVoteAt } = eventDataEvent

  const [timeInterval, setTimeInterval] = useState()
  const [timeToEnd, setTimeToEnd] = useState(closeVoteAt - new Date().getTime())

  useEffect(() => {
    setTimeInterval(setInterval(() => setTimeToEnd(closeVoteAt - new Date().getTime()), 1000))
    return () => {
      clearInterval(timeInterval)
    }
    // eslint-disable-next-line
  }, [])
  return <div className="event-time-left">Time left: {Math.ceil(timeToEnd / 1000)}</div>
}

const mapStateToProps = state => ({
  eventDataEvent: selectEventDataEvent(state),
})

export default connect(mapStateToProps)(EventTimeLeft)
