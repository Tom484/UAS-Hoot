import React from "react"
import CustomBackground from "../../../components/custom/customBackground/CustomBackground"
import CustomCard from "../../../components/custom/customCard/CustomCard"
import SignUp from "../../../components/auth/signUp/SignUp"

const SignUpPage = () => {
  return (
    <CustomBackground>
      <CustomCard>
        <SignUp />
      </CustomCard>
    </CustomBackground>
  )
}

export default SignUpPage
