import React, { useEffect } from "react"
import { connect } from "react-redux"
import { deleteNotification } from "../../../redux/notifications/notificationsActions"
import { selectNotifications } from "../../../redux/notifications/notificationsSelectors"
import Notification from "../notification/Notification"

import "./notifications.scss"

const Notifications = ({ notifications, deleteNotification }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      checkNotificationsDeleteTime()
    }, 1000)
    return () => clearInterval(interval)
    // eslint-disable-next-line
  }, [notifications])

  const checkNotificationsDeleteTime = () => {
    notifications.forEach(notification => {
      if (notification.deleteTime < new Date().getTime()) {
        deleteNotification(notification.id)
      }
    })
  }

  if (!notifications || notifications.length === 0) return <></>

  return (
    <div className="notifications">
      <div className="notifications-container">
        {notifications.map((notification, i) => (
          <Notification key={i} notification={notification} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  notifications: selectNotifications(state),
})

const mapDispatchToProps = dispatch => ({
  deleteNotification: id => dispatch(deleteNotification(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)
