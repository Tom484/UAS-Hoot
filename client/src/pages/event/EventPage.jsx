import React from "react"
import EventNavbar from "../../components/event/eventNavbar/EventNavbar"
import EventSlide from "../../components/event/eventSlide/EventSlide"

import "./eventPage.scss"

const EventPage = () => {
  return (
    <div className="event-page">
      <div className="event-page-container">
        <EventNavbar />
        <EventSlide />
      </div>
    </div>
  )
}

export default EventPage
