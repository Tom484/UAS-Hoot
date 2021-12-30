import React from "react"
import CustomBackground from "../../custom/customBackground/CustomBackground"
import EventQuestion from "../eventQuestion/EventQuestion"
import EventTimeLeft from "../eventTimeLeft/EventTimeLeft"
import EventNumberOfAnswers from "../eventNumberOfAnswers/EventNumberOfAnswers"
import EventQuizOptions from "../eventQuizOptions/EventQuizOptions"

import "./slideGameVoteQuiz.scss"

const SlideGameVote = () => {
  return (
    <CustomBackground className="slide-game-vote-container" eventNavbar>
      <EventQuestion />
      <EventTimeLeft />
      <EventNumberOfAnswers />
      <EventQuizOptions />
    </CustomBackground>
  )
}

export default SlideGameVote
