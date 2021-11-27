import React, { useState } from "react"
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
    <div className="sign-in">
      <div className="sign-in-container">
        <div className="form-name">Sign in</div>
        <form className="container" onSubmit={handleSubmit}>
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
          <button type="submit" className="btn btn-sign-in">
            Sign In
          </button>
          <button type="button" onClick={googleSignInStart} className="btn btn-sign-in">
            Google Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
})

export default connect(null, mapDispatchToProps)(SignIn)
