import React from "react"
import { getRandomFacts } from "../../../data/facts"
import DotsTemplateAnimation from "../templates/dotsTemplateAnimation/DotsTemplateAnimation"
import CustomCard from "../customCard/CustomCard"
import {
  CustomTextInfoBgMedium,
  CustomTextLarge,
  CustomTextMedium,
} from "../../custom/customText/CustomText"

import "./loadingCard.scss"

const LoadingAnimationCard = ({ name }) => {
  const facts = getRandomFacts(2)
  return (
    <CustomCard>
      <CustomTextLarge>{name}</CustomTextLarge>
      <CustomTextMedium>
        <span className="fw-500">Did you know?</span>
      </CustomTextMedium>
      <CustomTextInfoBgMedium>{facts[0]}</CustomTextInfoBgMedium>
      <CustomTextInfoBgMedium style={{ marginBottom: "20px" }}>{facts[1]}</CustomTextInfoBgMedium>
      <DotsTemplateAnimation />
    </CustomCard>
  )
}

export default LoadingAnimationCard
