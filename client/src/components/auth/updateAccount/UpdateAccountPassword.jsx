import React, { useState } from "react"
import { changePasswordStart } from "../../../redux/user/userActions"
import { connect } from "react-redux"

import CustomInputCard from "../../custom/customInputCard/CustomInputCard"
import { CustomInputWithLabel } from "../../custom/customInput/CustomInput"
import { CustomTextLarge } from "../../custom/customText/CustomText"
import CustomButton from "../../custom/customButton/CustomButton"

import { createNotification } from "../../../redux/notifications/notificationsActions"
import { NOTIFICATIONS } from "../../../redux/notifications/notificationsTypes"

import "./updateAccount.scss"

const UpdateAccountPassword = ({ changePassword, createNotification }) => {
  const [userPassword, setUserPassword] = useState({ password: "", passwordConfirmation: "" })

  const inputHandler = e => {
    setUserPassword(prevPasswords => ({ ...prevPasswords, [e.target.name]: e.target.value }))
  }

  const changePasswordHandler = e => {
    const { password, passwordConfirmation } = userPassword
    if (password !== passwordConfirmation)
      return createNotification(NOTIFICATIONS.PASSWORD_NOT_MATCH)
    setUserPassword({ password: "", passwordConfirmation: "" })
    changePassword(password)
  }

  return (
    <CustomInputCard>
      <CustomTextLarge style={{ marginBottom: "25px" }}>Change Password</CustomTextLarge>
      <CustomInputWithLabel
        label="Password"
        name="password"
        type="password"
        value={userPassword.password}
        onChange={inputHandler}
      />
      <CustomInputWithLabel
        label="Confirm Password"
        name="passwordConfirmation"
        type="password"
        onChange={inputHandler}
        value={userPassword.passwordConfirmation}
      />
      <CustomButton onClick={changePasswordHandler}>Update</CustomButton>
    </CustomInputCard>
  )
}

const mapDispatchToProps = dispatch => ({
  createNotification: notification => dispatch(createNotification(notification)),
  changePassword: password => dispatch(changePasswordStart({ password })),
})

export default connect(null, mapDispatchToProps)(UpdateAccountPassword)
