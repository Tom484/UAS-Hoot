import React, { useEffect } from "react"
import { useState } from "react"
import { connect } from "react-redux"
import {
  ICONFlagBold,
  ICONLockOutline,
  ICONLockSlashOutline,
  ICONLogoOutline,
  ICONMainComponentOutline,
  ICONSizeBold,
  ICONSizeOutline,
  ICONUserOutline,
} from "../../../icons/Icons"
import {
  selectEventDataHost,
  selectEventDataConnect,
  selectEventDataEvent,
} from "../../../redux/eventData/eventDataSelectors"
import { STATUS_TYPES } from "../../../redux/eventData/eventDataTypes"
import { selectEventPlayersCount } from "../../../redux/eventPlayers/eventPlayersSelectors"
import EventButton from "../eventButton/EventButton"

import "./eventNavbar.scss"

const EventNavbar = ({ eventDataConnect, eventPlayersCount, eventDataAdmin, eventDataEvent }) => {
  const [fullScreen, setFullScreen] = useState(false)

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleScreenChange)
    return () => document.removeEventListener("fullscreenchange", handleScreenChange)
  })

  const handleScreenChange = () => {
    setFullScreen(document.fullscreenElement)
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
            UAS <span className="fw-600">Hoot</span>
          </div>
        </div>
        <div className="event-setting">
          {eventDataEvent?.status === STATUS_TYPES.LOBBY && (
            <EventButton type="START_EVENT">
              <div className="container-setting highlight">
                <ICONFlagBold className="icon-setting" /> <div className="label">Start Event</div>
              </div>
            </EventButton>
          )}
          <div className="container-setting">
            {eventDataConnect?.isOpen ? (
              <EventButton type="UPDATE_DATA_CONNECT" data={{ isOpen: "toggle" }}>
                <ICONLockSlashOutline className="icon-setting" />
              </EventButton>
            ) : (
              <EventButton type="UPDATE_DATA_CONNECT" data={{ isOpen: "toggle" }}>
                <ICONLockOutline className="icon-setting" />
              </EventButton>
            )}
            <div className="label">
              Enter Code: <span className="fw-500">{eventDataConnect?.enterCode || "--||--"}</span>
            </div>
          </div>

          <div className="container-setting">
            <span>
              <ICONUserOutline className="icon-user" />
            </span>
            <div className="label">
              Players: <span className="fw-500">{eventPlayersCount}</span>
            </div>
          </div>

          <div className="container-setting">
            <span>
              <ICONMainComponentOutline className="icon-user" />
            </span>
            <div className="label">
              Admin: <span className="fw-500">{eventDataAdmin?.displayName}</span>
            </div>
          </div>

          <div className="container-setting">
            {fullScreen ? (
              <ICONSizeBold className="icon-setting" onClick={toggleFullScreen} />
            ) : (
              <ICONSizeOutline className="icon-setting" onClick={toggleFullScreen} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  eventDataConnect: selectEventDataConnect(state),
  eventPlayersCount: selectEventPlayersCount(state),
  eventDataHost: selectEventDataHost(state),
  eventDataEvent: selectEventDataEvent(state),
})

export default connect(mapStateToProps)(EventNavbar)
