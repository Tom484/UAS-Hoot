import React from "react"
import { connect } from "react-redux"
import { ICONCloseSquareBold } from "../../../icons/Icons"
import { deleteNotification } from "../../../redux/notifications/notificationsActions"

import "./notification.scss"

const Notification = ({ notification, deleteNotification }) => {
  return (
    <div className="notification" key={notification.id}>
      <div className="notification-container">
        <div className="title">{notification.title}</div>
        <div className="message">{notification.message}</div>
        <ICONCloseSquareBold
          className="icon-cancel"
          onClick={() => deleteNotification(notification.id)}
        />
        <div className={"type " + notification.type}></div>
        <div className="btn-cancel" onClick={() => deleteNotification(notification.id)}>
          OK
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteNotification: id => dispatch(deleteNotification(id)),
})

export default connect(null, mapDispatchToProps)(Notification)
