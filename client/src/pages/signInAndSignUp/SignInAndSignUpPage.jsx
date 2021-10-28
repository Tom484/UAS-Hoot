import React from "react"

import SignIn from "../../components/signInAndSignUp/signIn/SignIn"
import SignUp from "../../components/signInAndSignUp/signUp/SignUp"

import "./signInAndSignUpPage.scss"

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up-page">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInAndSignUp
