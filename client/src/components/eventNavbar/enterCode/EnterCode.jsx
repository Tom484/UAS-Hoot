import React from "react"
import { connect } from "react-redux"
import { ICONLockOutline, ICONLockSlashOutline } from "../../../icons/Icons"
import { selectEventDataConnect } from "../../../redux/eventData/eventDataSelectors"
import EventButton from "../../event/eventButton/EventButton"
import EventButtonTypes from "../../event/eventButton/eventButtonTypes"

const EnterCode = ({ eventDataConnect }) => {
  return (
    <div className="container-setting">
      {eventDataConnect?.isOpen ? (
        <EventButton type={EventButtonTypes.UPDATE_DATA_CONNECT.id} data={{ isOpen: "toggle" }}>
          <ICONLockSlashOutline className="icon-setting" />
        </EventButton>
      ) : (
        <EventButton type={EventButtonTypes.UPDATE_DATA_CONNECT.id} data={{ isOpen: "toggle" }}>
          <ICONLockOutline className="icon-setting" />
        </EventButton>
      )}
      <div className="label">
        Enter Code: <span className="fw-500">{eventDataConnect?.enterCode || "--||--"}</span>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  eventDataConnect: selectEventDataConnect(state),
})

export default connect(mapStateToProps)(EnterCode)
