import React, { useState } from "react"
import { connect } from "react-redux"
import { emailSignUpStart } from "../../../redux/user/userActions"
import Button from "../../components/button/Button"
import FormInput from "../../components/formInput/FormInput"

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
        <FormInput
          name="displayName"
          type="text"
          handleChange={handleChange}
          value={userCredentials.displayName}
          label="Nickname"
          required
        />
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={userCredentials.email}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={userCredentials.password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          name="passwordConfirm"
          type="password"
          value={userCredentials.passwordConfirm}
          handleChange={handleChange}
          label="Password Confirmation"
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

const mapDispatchToPro = dispatch => ({
  emailSignUpStart: (email, password, displayName) =>
    dispatch(emailSignUpStart({ user: { email, password }, additionalData: { displayName } })),
})

export default connect(null, mapDispatchToPro)(SignUpComponent)
