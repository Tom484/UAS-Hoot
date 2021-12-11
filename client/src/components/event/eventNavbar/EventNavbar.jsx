import React from "react"
import { ICONLogoOutline } from "../../../icons/Icons"
import FullScreenToggle from "../../eventNavbar/fullScreenToggle/FullScreenToggle"
import SlidesOrder from "../../eventNavbar/slidesOrder/SlidesOrder"
import HostName from "../../eventNavbar/hostName/HostName"
import PlayersCount from "../../eventNavbar/playersCount/PlayersCount"
import EnterCode from "../../eventNavbar/enterCode/EnterCode"
import NextSlide from "../../eventNavbar/nextSlide/NextSlide"
import StartEvent from "../../eventNavbar/startEvent/StartEvent"

import "./eventNavbar.scss"

const EventNavbar = () => {
  return (
    <div className="event-navbar">
      <div className="event-navbar-container">
        <div className="name-container">
          <ICONLogoOutline className="icon-logo" />
          <div className="name">
            UAS <span className="fw-600">Hoot</span>
          </div>
        </div>
        <div className="event-setting">
          <StartEvent />
          <NextSlide />
          <EnterCode />
          <PlayersCount />
          <HostName />
          <SlidesOrder />
          <FullScreenToggle />
        </div>
      </div>
    </div>
  )
}

export default EventNavbar
