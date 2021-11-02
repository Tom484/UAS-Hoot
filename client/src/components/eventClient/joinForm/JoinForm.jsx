import React, { useState } from "react"
import FormInput from "../../components/formInput/FormInput"
import EventClientButton from "../eventClientButton/EventClientButton"

import "./joinForm.scss"

const JoinForm = () => {
  const [credentials, setCredentials] = useState({ eventId: "", playerDisplayName: "" })

  const handleChange = e => {
    const { value, name } = e.target
    setCredentials(prevCredentials => ({ ...prevCredentials, [name]: value }))
  }

  return (
    <div>
      <h2>Join</h2>
      <FormInput
        name="eventId"
        type="number"
        handleChange={handleChange}
        value={credentials.eventId}
        label="Enter Event ID"
        required
      />
      <FormInput
        name="playerDisplayName"
        type="text"
        handleChange={handleChange}
        value={credentials.playerDisplayName}
        label="Nickname"
        required
      />
      <EventClientButton
        type="JOIN_EVENT"
        displayName={credentials.playerDisplayName}
        eventId={credentials.eventId}
      />
    </div>
  )
}

export default JoinForm
