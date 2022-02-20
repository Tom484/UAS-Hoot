import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { selectEventDataEvent } from "../../../redux/eventData/eventDataSelectors"
import { analyzeAnswersStart } from "../../../redux/eventResults/eventResultsActions"
import SlideGamePreview from "../slideGamePreview/SlideGamePreview"
import SlideGameVote from "../slideGameVote/SlideGameVote"
import SlideGameResults from "../slideGameResults/SlideGameResults"

import "./slideGame.scss"
import InterimResults from "../interimResults/InterimResults"

const SlideGame = ({ eventDataEvent, analyzeAnswers }) => {
  const { openVoteAt, closeVoteAt } = eventDataEvent

  const RENDER_SLIDE_TYPES = {
    SLIDE_GAME_PREVIEW: "SLIDE_GAME_PREVIEW",
    SLIDE_GAME_VOTE: "SLIDE_GAME_VOTE",
    SLIDE_GAME_RESULTS: "SLIDE_GAME_RESULTS",
    SLIDE_GAME_INTERIM_RESULTS: "SLIDE_GAME_INTERIM_RESULTS",
  }

  const [renderSlide, setRenderSlide] = useState(RENDER_SLIDE_TYPES.SLIDE_GAME_PREVIEW)
  const [previousDataEvent, setPreviousDataEvent] = useState()

  useEffect(() => {
    if (previousDataEvent?.closeVoteAt === eventDataEvent?.closeVoteAt) return
    setPreviousDataEvent(eventDataEvent)
    setRenderSlide(RENDER_SLIDE_TYPES.SLIDE_GAME_PREVIEW)
    // eslint-disable-next-line
  }, [eventDataEvent])

  useEffect(() => {
    if (previousDataEvent?.closeVoteAt === eventDataEvent?.closeVoteAt) return
    setPreviousDataEvent(eventDataEvent)
    const timer = setTimeout(() => {
      setRenderSlide(RENDER_SLIDE_TYPES.SLIDE_GAME_VOTE)
    }, openVoteAt - new Date().getTime())
    return () => clearTimeout(timer)
    // eslint-disable-next-line
  }, [eventDataEvent])

  useEffect(() => {
    if (previousDataEvent?.closeVoteAt === eventDataEvent?.closeVoteAt) return
    setPreviousDataEvent(eventDataEvent)
    const timer = setTimeout(() => {
      analyzeAnswers()
      setRenderSlide(RENDER_SLIDE_TYPES.SLIDE_GAME_RESULTS)
    }, closeVoteAt - new Date().getTime())
    return () => clearTimeout(timer)
    // eslint-disable-next-line
  }, [eventDataEvent])

  const renderSlideInterimResults = () => {
    setRenderSlide(RENDER_SLIDE_TYPES.SLIDE_GAME_INTERIM_RESULTS)
  }

  return (
    <div>
      {renderSlide === RENDER_SLIDE_TYPES.SLIDE_GAME_PREVIEW && (
        <SlideGamePreview timeLeft={openVoteAt - new Date().getTime()} />
      )}
      {renderSlide === RENDER_SLIDE_TYPES.SLIDE_GAME_VOTE && <SlideGameVote />}
      {renderSlide === RENDER_SLIDE_TYPES.SLIDE_GAME_RESULTS && (
        <SlideGameResults next={renderSlideInterimResults} />
      )}
      {renderSlide === RENDER_SLIDE_TYPES.SLIDE_GAME_INTERIM_RESULTS && <InterimResults />}
    </div>
  )
}

const mapStateToProps = state => ({
  eventDataEvent: selectEventDataEvent(state),
})

const mapDispatchToProps = dispatch => ({
  analyzeAnswers: data => dispatch(analyzeAnswersStart(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SlideGame)
