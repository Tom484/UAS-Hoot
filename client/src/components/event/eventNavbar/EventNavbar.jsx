import React, { useEffect } from "react"
import { useState } from "react"
import { connect } from "react-redux"
import {
  ICONLockOutline,
  ICONLockSlashOutline,
  ICONLogoOutline,
  ICONSizeBold,
  ICONSizeOutline,
  ICONUserOutline,
} from "../../../icons/Icons"
import { selectEventDataConnect } from "../../../redux/eventData/eventDataSelectors"
import { selectEventPlayersCount } from "../../../redux/eventPlayers/eventPlayersSelectors"

import "./eventNavbar.scss"

const EventNavbar = ({ eventDataConnect, eventPlayersCount }) => {
  const [fullScreen, setFullScreen] = useState(false)

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleScreenChange)
    return () => document.removeEventListener("fullscreenchange", handleScreenChange)
  })

  const handleScreenChange = e => {
    console.log(e)
    // console.log(document.fullScreen)
  }

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }

  return (
    <div className="event-navbar">
      <div className="event-navbar-container">
        <div className="name-container">
          <ICONLogoOutline className="icon-logo" />
          <div className="name">
            UAS <span className="bold">Hoot</span>
          </div>
        </div>
        <div className="event-setting">
          <div className="full-screen">
            {fullScreen ? (
              <ICONSizeBold className="icon-full-screen" onClick={toggleFullScreen} />
            ) : (
              <ICONSizeOutline className="icon-full-screen" onClick={toggleFullScreen} />
            )}
          </div>
          <div className="user-container">
            <ICONUserOutline className="icon-user" />
            <span className="number-of-users">Users: {eventPlayersCount}</span>
          </div>
          <div className="enter-code-container">
            {eventDataConnect?.isOpen ? (
              <ICONLockSlashOutline className="icon-lock" />
            ) : (
              <ICONLockOutline className="icon-lock" />
            )}
            <div className="label">Enter Code: {eventDataConnect?.enterCode || "--||--"}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  eventDataConnect: selectEventDataConnect(state),
  eventPlayersCount: selectEventPlayersCount(state),
})

export default connect(mapStateToProps)(EventNavbar)
