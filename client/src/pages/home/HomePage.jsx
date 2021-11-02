import React from "react"
import EventClientButton from "../../components/eventClient/eventClientButton/EventClientButton"
import JoinForm from "../../components/eventClient/joinForm/JoinForm"

import "./homePage.scss"

const HomePage = () => {
  return (
    <div>
      <EventClientButton type="JOIN_EVENT" />
      <JoinForm />
    </div>
  )
}

export default HomePage
