import React from "react"
import CustomBackground from "../../../components/custom/customBackground/CustomBackground"
import CustomCard from "../../../components/custom/customCard/CustomCard"
import ResetPasswordEmail from "../../../components/auth/resetPasswordEmail/ResetPasswordEmail"

const ResetPasswordEmailPage = () => {
  return (
    <CustomBackground>
      <CustomCard>
        <ResetPasswordEmail />
      </CustomCard>
    </CustomBackground>
  )
}

export default ResetPasswordEmailPage
