import React, { useState } from "react"
import InterimResults from "../interimResults/InterimResults"
import CurrentResults from "../currentResults/CurrentResults"
import CustomBackground from "../../components/customBackground/CustomBackground"

import "./slideGameResults.scss"

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
    <CustomBackground eventNavbar>
      <div className="slide-game-results">
        <div className="slide-game-results-container">
          <h2 className="slide-name" onClick={toggleSlideHandler}>
            {resultSlide === SLIDE_TYPES.CURRENT_GAME_RESULTS ? "Game Results" : "Interim Results"}
          </h2>
          {resultSlide === SLIDE_TYPES.CURRENT_GAME_RESULTS ? (
            <CurrentResults />
          ) : (
            <InterimResults />
          )}
        </div>
      </div>
    </CustomBackground>
  )
}

export default SlideGameResults
