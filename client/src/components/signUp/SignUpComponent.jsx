import React, { useState } from "react"
import ButtonComponent from "../button/ButtonComponent"
import FormInputComponent from "../formInput/FormInputComponent"

import "./signUpComponent.scss"

const SignUpComponent = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })

  const handleChange = e => {
    const { value, name } = e.target
    setUserCredentials(prevUserCredentials => ({ ...prevUserCredentials, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(userCredentials)
  }

  return (
    <div className="sign-up-component">
      <div>Sign up with email and password</div>
      <form className="container" onSubmit={handleSubmit}>
        <FormInputComponent
          name="displayName"
          type="text"
          handleChange={handleChange}
          value={userCredentials.displayName}
          label="Nickname"
          required
        />
        <FormInputComponent
          name="email"
          type="email"
          handleChange={handleChange}
          value={userCredentials.email}
          label="Email"
          required
        />
        <FormInputComponent
          name="password"
          type="password"
          value={userCredentials.password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInputComponent
          name="passwordConfirm"
          type="password"
          value={userCredentials.passwordConfirm}
          handleChange={handleChange}
          label="Password Confirmation"
          required
        />
        <ButtonComponent type="submit">Sign Up</ButtonComponent>
      </form>
    </div>
  )
}

export default SignUpComponent
