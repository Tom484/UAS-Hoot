import React from "react"

import SignIn from "../../components/signInAndSignUp/signIn/SignIn"
import SignUp from "../../components/signInAndSignUp/signUp/SignUp"

import "./signInAndSignUpPage.scss"

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up-page">
      <div className="sign-in-and-sign-up-page-container">
        <div className="background-lines">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line center"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <SignIn />
        <SignUp />
      </div>
    </div>
  )
}

export default SignInAndSignUp
