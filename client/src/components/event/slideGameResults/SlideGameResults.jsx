import React, { useState } from "react"
import InterimResults from "../interimResults/InterimResults"

// import BubbleBackground from "../../components/bubbleBackground/BubbleBackground"
// import LineBackground from "../../components/lineBackground/LineBackground"

import "./slideGameResults.scss"
import CurrentResults from "../currentResults/CurrentResults"

const SLIDE_TYPES = {
  CURRENT_GAME_RESULTS: "GAME_RESULTS",
  INTERIM_RESULTS: "INTERIM_RESULTS",
}

const SlideGameResults = () => {
  const [resultSlide, setResultSlide] = useState(SLIDE_TYPES.CURRENT_GAME_RESULTS)
  const toggleSlideHandler = () => {
    if (resultSlide === SLIDE_TYPES.CURRENT_GAME_RESULTS) {
      setResultSlide(SLIDE_TYPES.INTERIM_RESULTS)
    } else {
      setResultSlide(SLIDE_TYPES.CURRENT_GAME_RESULTS)
    }
  }

  return (
    <div className="slide-game-results">
      {/* <LineBackground /> */}
      {/* <BubbleBackground /> */}
      <div className="slide-game-results-container">
        <h2 className="slide-name" onClick={toggleSlideHandler}>
          {resultSlide === SLIDE_TYPES.CURRENT_GAME_RESULTS ? "Game Results" : "Interim Results"}
        </h2>
        {resultSlide === SLIDE_TYPES.CURRENT_GAME_RESULTS ? <CurrentResults /> : <InterimResults />}
      </div>
    </div>
  )
}

export default SlideGameResults
