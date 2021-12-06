import React, { useEffect } from "react"
import { useState } from "react"
import { connect } from "react-redux"
import { ICONCloudBold, ICONDropBold, ICONFlashBold, ICONMoonBold } from "../../../icons/Icons"
import {
  selectEventCurrentSlide,
  selectEventDataEvent,
} from "../../../redux/eventData/eventDataSelectors"
import { selectEventAnswersLength } from "../../../redux/eventAnswers/eventAnswersSelectors"

import "./slideGameVote.scss"
import { selectEventPlayersCount } from "../../../redux/eventPlayers/eventPlayersSelectors"

const SlideGameVote = ({ eventDataEvent, eventCurrentSlide, numberOfAnswers, playersCount }) => {
  const { closeVoteAt } = eventDataEvent
  const { question, options, time } = eventCurrentSlide

  const [timeInterval, setTimeInterval] = useState()
  const [timeToEnd, setTimeToEnd] = useState(closeVoteAt - new Date().getTime())

  useEffect(() => {
    setTimeInterval(setInterval(() => setTimeToEnd(closeVoteAt - new Date().getTime()), 1000))
    return () => {
      clearInterval(timeInterval)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div className="slide-game-vote">
      <div className="slide-game-vote-container">
        <div className="question-container">
          <h2 className="question">{question}</h2>
        </div>
        <div className="information-container">
          <div className="time-bar-container">
            <div className="label">Answers</div>
            <div className="time-bar">
              <div className="value">
                {numberOfAnswers}/{playersCount}
              </div>
              <div
                className="bar"
                style={{
                  transform: `translateX(-${Math.abs(
                    (numberOfAnswers / playersCount) * 100 - 100
                  )}%)`,
                }}
              ></div>
            </div>
          </div>
          <div className="time-bar-container">
            <div className="label">Time to end</div>
            <div className="time-bar">
              <div className="value">{Math.ceil(timeToEnd / 1000)}</div>
              <div
                className="bar"
                style={{
                  transform: `translateX(-${Math.abs(
                    (timeToEnd / (time.value * 1000)) * 100 - 100
                  )}%)`,
                }}
              ></div>
            </div>
          </div>
        </div>
        {Object.values(options).map((option, i) => (
          <div className={`option-container option-${i + 1}`} key={option.id}>
            <div className="icon-container">
              {i === 0 && <ICONFlashBold className="icon-option" />}
              {i === 1 && <ICONCloudBold className="icon-option" />}
              {i === 2 && <ICONDropBold className="icon-option" />}
              {i === 3 && <ICONMoonBold className="icon-option" />}
            </div>
            <div className="option"> {option.option}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  eventDataEvent: selectEventDataEvent(state),
  eventCurrentSlide: selectEventCurrentSlide(state),
  numberOfAnswers: selectEventAnswersLength(state),
  playersCount: selectEventPlayersCount(state),
})

export default connect(mapStateToProps)(SlideGameVote)
