import React, { useState } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { emailSignUpStart } from "../../../redux/user/userActions"
import CustomButton from "../../custom/customButton/CustomButton"
import { CustomInputWithLabel } from "../../custom/customInput/CustomInput"
import { CustomTextInfoSmall, CustomTextLarge } from "../../custom/customText/CustomText"
import { createNotification } from "../../../redux/notifications/notificationsActions"

import { NOTIFICATIONS } from "../../../redux/notifications/notificationsTypes"

const SignUpComponent = ({ emailSignUpStart, history, createNotification }) => {
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

    if (password !== passwordConfirm) return createNotification(NOTIFICATIONS.PASSWORD_NOT_MATCH)

    emailSignUpStart(email, password, displayName)
  }

  return (
    <form className="sign-in-container" onSubmit={handleSubmit}>
      <CustomTextLarge>Sign Up</CustomTextLarge>
      <CustomInputWithLabel
        name="displayName"
        type="text"
        onChange={handleChange}
        value={userCredentials.displayName}
        label="Nickname"
        required
        style={{ fontSize: "17px" }}
      />
      <CustomInputWithLabel
        name="email"
        type="email"
        onChange={handleChange}
        value={userCredentials.email}
        label="Email"
        required
        style={{ fontSize: "17px" }}
      />
      <CustomInputWithLabel
        name="password"
        type="password"
        value={userCredentials.password}
        onChange={handleChange}
        label="Password"
        required
        style={{ fontSize: "17px" }}
      />
      <CustomInputWithLabel
        name="passwordConfirm"
        type="password"
        value={userCredentials.passwordConfirm}
        onChange={handleChange}
        label="Password Confirmation"
        required
        style={{ fontSize: "17px" }}
      />
      <CustomButton type="submit">Sign Up</CustomButton>
      <CustomTextInfoSmall
        style={{ marginTop: "10px" }}
        className="cursor-pointer"
        onClick={() => history.push("/auth/sign-in")}
      >
        Do you already have an account? Sign in.
      </CustomTextInfoSmall>
    </form>
  )
}

const mapDispatchToPro = dispatch => ({
  createNotification: notification => dispatch(createNotification(notification)),
  emailSignUpStart: (email, password, displayName) =>
    dispatch(emailSignUpStart({ user: { email, password }, additionalData: { displayName } })),
})

export default withRouter(connect(null, mapDispatchToPro)(SignUpComponent))
