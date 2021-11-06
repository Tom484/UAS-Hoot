import React from "react"
import SlideGamePreview from "../slideGamePreview/SlideGamePreview"
import SlideGameVote from "../slideGameVote/SlideGameVote"
import SlideGameResults from "../slideGameResults/SlideGameResults"

import "./slideGame.scss"

const SlideGame = () => {
  return (
    <div>
      Slide Game
      <SlideGamePreview />
      <SlideGameVote />
      <SlideGameResults />
    </div>
  )
}

export default SlideGame
