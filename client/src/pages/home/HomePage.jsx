import React from "react"
import { withRouter } from "react-router-dom"
import CustomBackground from "../../components/components/customBackground/CustomBackground"
import CustomCard from "../../components/components/customCard/CustomCard"
import {
  CustomTextExtraLarge,
  CustomTextInfoBgMedium,
  CustomTextLarge,
} from "../../components/components/customText/CustomText"
import CustomButton from "../../components/components/customButton/CustomButton"

import "./homePage.scss"

const HomePage = ({ history }) => {
  return (
    <CustomBackground>
      <CustomCard className="home-page">
        <CustomTextExtraLarge style={{ paddingBottom: "10px" }}>
          <span className="fw-400">UAS</span> <span className="fw-600">Hoot</span>
        </CustomTextExtraLarge>
        <CustomTextLarge center style={{ fontSize: "22px", color: "var(--color-text-3)" }}>
          Create and play your own events for free. And have fun!
        </CustomTextLarge>
        <CustomTextInfoBgMedium style={{ fontSize: "14px" }}>
          On this page you can create your custom events which you can play with your friend, family
          etc. Your own events you can share with others. This website is complete free.
        </CustomTextInfoBgMedium>
        <CustomTextInfoBgMedium center>Created by Tomáš Kůrka 2021</CustomTextInfoBgMedium>
        <CustomButton onClick={() => history.push("/library/recent")}>Continue</CustomButton>
      </CustomCard>
    </CustomBackground>
  )
}

export default withRouter(HomePage)
