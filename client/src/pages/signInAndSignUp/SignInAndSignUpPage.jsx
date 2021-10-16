import React from "react"

import SignInComponent from "../../components/signIn/SignInComponent"
import SignUpComponent from "../../components/signUp/SignUpComponent"

import "./signInAndSignUpPage.scss"

const SignIn = () => {
  return (
    <div className="space-around-development">
      <SignInComponent />
      <SignUpComponent />
    </div>
  )
}
//
export default SignIn
