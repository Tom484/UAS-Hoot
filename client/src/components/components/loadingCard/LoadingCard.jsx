import React from "react"
import DotsAnimation from "../../animation/dotsAnimation/DotsAnimation"
import { getRandomFacts } from "../../../data/facts"
import CustomCard from "../customCard/CustomCard"
import {
  CustomTextInfoBgMedium,
  CustomTextLarge,
  CustomTextMedium,
} from "../../custom/customText/CustomText"

import "./loadingCard.scss"

const LoadingCard = ({ name }) => {
  const facts = getRandomFacts(2)
  return (
    <CustomCard>
      <CustomTextLarge>{name}</CustomTextLarge>
      <CustomTextMedium>
        <span className="fw-500">Did you know?</span>
      </CustomTextMedium>
      <CustomTextInfoBgMedium>{facts[0]}</CustomTextInfoBgMedium>
      <CustomTextInfoBgMedium style={{ marginBottom: "20px" }}>{facts[1]}</CustomTextInfoBgMedium>
      <DotsAnimation />
    </CustomCard>
  )
}

export default LoadingCard
