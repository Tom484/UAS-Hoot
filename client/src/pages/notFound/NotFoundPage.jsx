import React from "react"
import BubbleBackground from "../../components/components/bubbleBackground/BubbleBackground"
import LineBackground from "../../components/components/lineBackground/LineBackground"
import { withRouter } from "react-router-dom"

import "./notFoundPage.scss"

const NotFoundPage = ({ history }) => {
  return (
    <div className="not-found-page">
      <BubbleBackground />
      <LineBackground />
      <div className="not-found-page-container">
        <div className="container">
          <div className="label">Not Found Page</div>
          <div className="btn-home btn" onClick={() => history.push("/")}>
            Return Home
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(NotFoundPage)
