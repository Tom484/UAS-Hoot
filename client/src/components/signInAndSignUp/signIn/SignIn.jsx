import React, { useState } from "react"
import Button from "../../components/button/Button"
import FormInput from "../../components/formInput/FormInput"
import { googleSignInStart, emailSignInStart } from "../../../redux/user/userActions"

import "./signIn.scss"
import { connect } from "react-redux"

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
        <Button type="submit">Sign In</Button>
        <Button type="button" onClick={googleSignInStart}>
          Sign In with Google
        </Button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
})

export default connect(null, mapDispatchToProps)(SignIn)
