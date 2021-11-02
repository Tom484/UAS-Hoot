import React, { useState } from "react"
import CustomButton from "../../components/customButton/CustomButton"
import FormInput from "../../components/formInput/FormInput"
import { googleSignInStart, emailSignInStart } from "../../../redux/user/userActions"
import { connect } from "react-redux"

import "./signIn.scss"

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
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
    <div className="sign-in-component">
      <div>Sign in or Sign Up</div>
      <form className="container" onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={userCredentials.email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={userCredentials.password}
          handleChange={handleChange}
          label="password"
          required
        />
        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton type="button" onClick={googleSignInStart}>
          Sign In with Google
        </CustomButton>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
})

export default connect(null, mapDispatchToProps)(SignIn)
