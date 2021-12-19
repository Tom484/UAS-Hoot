import React from "react"
import CustomBackground from "../../components/components/customBackground/CustomBackground"
import CustomCard from "../../components/components/customCard/CustomCard"
import SignUp from "../../components/components/signUp/SignUp"

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
