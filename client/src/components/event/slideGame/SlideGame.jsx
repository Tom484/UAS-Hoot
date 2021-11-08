import React, { useEffect, useState } from "react"
import SlideGamePreview from "../slideGamePreview/SlideGamePreview"
import SlideGameVote from "../slideGameVote/SlideGameVote"
import SlideGameResults from "../slideGameResults/SlideGameResults"

import "./slideGame.scss"
import { selectEventDataEvent } from "../../../redux/eventData/eventDataSelectors"
import { connect } from "react-redux"
import { analyzeAnswersStart } from "../../../redux/eventResults/eventResultsActions"

const SlideGame = ({ eventDataEvent, analyzeAnswers }) => {
  const { openVoteAt, closeVoteAt } = eventDataEvent.currentSlide

  const [time, setTime] = useState(Date.now())
  const [timeInterval, setTimeInterval] = useState("")

  useEffect(() => {
    setTimeInterval(setInterval(() => setTime(Date.now()), 10))
    return () => {
      clearInterval(timeInterval)
    }
    // eslint-disable-next-line
  }, [])

  if (new Date().getTime() > closeVoteAt) {
    clearInterval(timeInterval)
    analyzeAnswers()
  }

  return (
    <div>
      {time < openVoteAt && <SlideGamePreview />}
      {time >= openVoteAt && time < closeVoteAt && <SlideGameVote />}
      {time >= closeVoteAt && <SlideGameResults />}
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
