import React from "react"
import EventClientButton from "../../components/eventClient/eventClientButton/EventClientButton"

import "./homePage.scss"

const HomePage = () => {
  return (
    <div>
      Home Page
      <EventClientButton type="JOIN_EVENT" />
    </div>
  )
}

export default HomePage
