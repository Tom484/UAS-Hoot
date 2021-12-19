import React, { useState } from "react"
import { googleSignInStart, emailSignInStart } from "../../../redux/user/userActions"
import { connect } from "react-redux"
import { CustomInputWithLabel } from "../customInput/CustomInput"
import CustomButton from "../customButton/CustomButton"
import { CustomTextInfoSmall, CustomTextLarge } from "../customText/CustomText"
import { withRouter } from "react-router-dom"

import "./signIn.scss"

const SignIn = ({ googleSignInStart, emailSignInStart, history }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  })

  const handleChange = e => {
    const { value, name } = e.target
    setUserCredentials(prevUserCredentials => ({ ...prevUserCredentials, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const { email, password } = userCredentials
    emailSignInStart(email, password)
  }

  return (
    <form className="sign-in-container" onSubmit={handleSubmit}>
      <CustomTextLarge>Sign In</CustomTextLarge>
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
      <CustomButton type="submit">
        <span className="fw-600">Sign In</span>
      </CustomButton>
      <CustomButton onClick={googleSignInStart}>
        <span className="fw-600">Google Sign In</span>
      </CustomButton>
      <CustomTextInfoSmall className="cursor-pointer" onClick={() => history.push("/sign-up")}>
        Don't have an account? Sign up.
      </CustomTextInfoSmall>
    </form>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
})

export default withRouter(connect(null, mapDispatchToProps)(SignIn))
