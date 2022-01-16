import React from "react"
import { connect } from "react-redux"
import { ICONMainComponentOutline } from "../../../icons/Icons"
import { selectEventDataHost } from "../../../redux/eventData/eventDataSelectors"

const HostName = ({ eventDataHost }) => {
  return (
    <div className="container-setting">
      <span>
        <ICONMainComponentOutline className="icon-setting" />
      </span>
      <div className="label">
        Host: <span className="fw-500">{eventDataHost?.displayName}</span>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  eventDataHost: selectEventDataHost(state),
})

export default connect(mapStateToProps)(HostName)
