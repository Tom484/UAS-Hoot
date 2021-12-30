import React from "react"
import CustomBackground from "../../custom/customBackground/CustomBackground"
import EventQuizOptions from "../eventQuizOptions/EventQuizOptions"
import EventQuestion from "../eventQuestion/EventQuestion"

import "./slideGameResults.scss"
import CustomButton from "../../custom/customButton/CustomButton"

const SlideGameResults = ({ next }) => {
  return (
    <CustomBackground style={{ position: "relative" }} className="slide-game-results" eventNavbar>
      <CustomButton
        style={{
          position: "absolute",
          width: "180px",
          right: "10px",
          top: "10px",
          fontSize: "16px",
        }}
        onClick={next}
      >
        Interim Results
      </CustomButton>
      <EventQuestion />
      <EventQuizOptions showCorrect />
    </CustomBackground>
  )
}

export default SlideGameResults
