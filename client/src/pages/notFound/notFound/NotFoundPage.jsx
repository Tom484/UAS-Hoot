import React from "react"
import { withRouter } from "react-router-dom"
import CustomBackground from "../../../components/custom/customBackground/CustomBackground"
import CustomButton from "../../../components/custom/customButton/CustomButton"
import CustomCard from "../../../components/custom/customCard/CustomCard"
import {
  CustomTextInfoBgMedium,
  CustomTextLarge,
} from "../../../components/custom/customText/CustomText"

import "./notFoundPage.scss"

const NotFoundPage = ({ history }) => {
  return (
    <CustomBackground>
      <CustomCard>
        <CustomTextLarge center>Page was not found!</CustomTextLarge>
        <CustomTextInfoBgMedium>
          Sorry, this page was not found! There may be some connection issues or the event did not
          exist.
        </CustomTextInfoBgMedium>
        <CustomButton onClick={() => history.push("/")}>HOME</CustomButton>
      </CustomCard>
    </CustomBackground>
  )
}

export default withRouter(NotFoundPage)
