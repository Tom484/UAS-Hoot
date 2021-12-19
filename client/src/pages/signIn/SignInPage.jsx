import React from "react"
import CustomBackground from "../../components/components/customBackground/CustomBackground"
import CustomCard from "../../components/components/customCard/CustomCard"
import SignIn from "../../components/components/signIn/SignIn"

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
