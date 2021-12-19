import React, { useState } from "react"
import { changePasswordStart } from "../../../redux/user/userActions"
import { connect } from "react-redux"

import "./updateAccount.scss"
import CustomInputCard from "../customInputCard/CustomInputCard"
import { CustomInputWithLabel } from "../customInput/CustomInput"
import { CustomTextLarge } from "../customText/CustomText"
import CustomButton from "../customButton/CustomButton"

const UpdateAccountPassword = ({ changePassword }) => {
  const [userPassword, setUserPassword] = useState({ password: "", passwordConfirmation: "" })

  const inputHandler = e => {
    setUserPassword(prevPasswords => ({ ...prevPasswords, [e.target.name]: e.target.value }))
  }

  const changePasswordHandler = e => {
    const { password, passwordConfirmation } = userPassword
    if (password !== passwordConfirmation) return alert("Passwords do not match!")
    changePassword(userPassword.password)
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
  changePassword: password => dispatch(changePasswordStart({ password })),
})

export default connect(null, mapDispatchToProps)(UpdateAccountPassword)
