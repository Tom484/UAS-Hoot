import React, { useState } from "react"
import { connect } from "react-redux"
import { emailSignUpStart } from "../../../redux/user/userActions"
import ButtonComponent from "../../components/button/ButtonComponent"
import FormInputComponent from "../../components/formInput/FormInputComponent"

import "./signUp.scss"

const SignUpComponent = ({ emailSignUpStart }) => {
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

  const handleSubmit = async e => {
    e.preventDefault()
    const { displayName, email, password, passwordConfirm } = userCredentials

    if (password !== passwordConfirm) {
      alert("passwords do not much")
      return
    }

    emailSignUpStart(email, password, displayName)
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

const mapDispatchToPro = dispatch => ({
  emailSignUpStart: (email, password, displayName) =>
    dispatch(emailSignUpStart({ user: { email, password }, additionalData: { displayName } })),
})

export default connect(null, mapDispatchToPro)(SignUpComponent)
