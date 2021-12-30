import React, { useState } from "react"
import { resetPasswordEmailStart } from "../../../redux/user/userActions"
import { connect } from "react-redux"
import { CustomInputWithLabel } from "../../custom/customInput/CustomInput"
import CustomButton from "../../custom/customButton/CustomButton"
import { CustomTextInfoSmall, CustomTextLarge } from "../../custom/customText/CustomText"
import { withRouter } from "react-router-dom"

const ResetPasswordEmail = ({ resetPasswordEmail, history }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
  })

  const handleChange = e => {
    const { value, name } = e.target
    setUserCredentials(prevUserCredentials => ({ ...prevUserCredentials, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const { email } = userCredentials
    resetPasswordEmail(email)
  }

  return (
    <form className="sign-in-container" onSubmit={handleSubmit}>
      <CustomTextLarge>Reset Password</CustomTextLarge>
      <CustomInputWithLabel
        name="email"
        type="email"
        onChange={handleChange}
        value={userCredentials.email}
        label="Email"
        required
        style={{ fontSize: "17px" }}
      />
      <CustomButton type="submit">
        <span className="fw-600">Reset Password</span>
      </CustomButton>
      <CustomTextInfoSmall
        style={{ marginTop: "10px" }}
        className="cursor-pointer"
        onClick={() => history.push("/auth/sign-in")}
      >
        Do you already have an account? Sign in.
      </CustomTextInfoSmall>
      <CustomTextInfoSmall className="cursor-pointer" onClick={() => history.push("/auth/sign-up")}>
        Don't have an account? Sign up.
      </CustomTextInfoSmall>
    </form>
  )
}

const mapDispatchToProps = dispatch => ({
  resetPasswordEmail: email => dispatch(resetPasswordEmailStart(email)),
})

export default withRouter(connect(null, mapDispatchToProps)(ResetPasswordEmail))
