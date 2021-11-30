import React from "react"
import BubbleBackground from "../../components/components/bubbleBackground/BubbleBackground"
import LineBackground from "../../components/components/lineBackground/LineBackground"

import SignIn from "../../components/signInAndSignUp/signIn/SignIn"
import SignUp from "../../components/signInAndSignUp/signUp/SignUp"

import "./signInAndSignUpPage.scss"

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up-page">
      <div className="sign-in-and-sign-up-page-container">
        <LineBackground />
        <BubbleBackground />
        <SignIn />
        <SignUp />
      </div>
    </div>
  )
}

export default SignInAndSignUp
