import React from "react"
import { withRouter } from "react-router-dom"
import CustomButton from "../../custom/customButton/CustomButton"

import CustomCard from "../../custom/customCard/CustomCard"
import {
  CustomTextExtraLarge,
  CustomTextInfoBgMedium,
  CustomTextLarge,
} from "../../custom/customText/CustomText"

const HomePageContent = ({ history }) => {
  return (
    <CustomCard className="home-page">
      <CustomTextExtraLarge style={{ paddingBottom: "10px" }}>
        <span className="fw-400">UAS</span> <span className="fw-600">Hoot</span>
      </CustomTextExtraLarge>
      <CustomTextLarge center style={{ fontSize: "22px", color: "var(--color-text-3)" }}>
        Create and play your own events for free. And have fun!
      </CustomTextLarge>
      <CustomTextInfoBgMedium style={{ fontSize: "14px" }}>
        On this page you can create your own events that you can play with your friends, family,
        etc. You can share your own events with others. This site is completely free.
      </CustomTextInfoBgMedium>
      <CustomTextInfoBgMedium center style={{ fontWeight: "600", color: "var(--color-text-3)" }}>
        Created by Tomáš Kůrka 2021
      </CustomTextInfoBgMedium>
      <CustomButton onClick={() => history.push("/library/recent")}>Continue</CustomButton>
    </CustomCard>
  )
}

export default withRouter(HomePageContent)
