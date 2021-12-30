import React from "react"
import CustomBackground from "../../../components/custom/customBackground/CustomBackground"
import CustomCard from "../../../components/custom/customCard/CustomCard"
import SignIn from "../../../components/auth/signIn/SignIn"

const SignInPage = () => {
  return (
    <CustomBackground>
      <CustomCard>
        <SignIn />
      </CustomCard>
    </CustomBackground>
  )
}

export default SignInPage
