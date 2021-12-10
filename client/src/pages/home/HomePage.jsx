import React from "react"
import BubbleBackground from "../../components/components/bubbleBackground/BubbleBackground"
import LineBackground from "../../components/components/lineBackground/LineBackground"
import SignIn from "../../components/signInAndSignUp/signIn/SignIn"
import SignUp from "../../components/signInAndSignUp/signUp/SignUp"
import "./homePage.scss"

const HomePage = () => {
  return (
    <div className="home-page">
      <LineBackground />
      <BubbleBackground />
      <div className="home-page-container">
        <SignIn />
        <SignUp />
      </div>
    </div>
  )
}

export default HomePage
