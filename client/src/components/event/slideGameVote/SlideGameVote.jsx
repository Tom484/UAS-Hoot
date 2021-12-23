import { connect } from "react-redux"
import { selectEventDataEvent } from "../../../redux/eventData/eventDataSelectors"
import SlideGameVoteQuiz from "../slideGameVoteQuiz/SlideGameVoteQuiz"
import { SLIDE_TYPES } from "../../../redux/eventData/eventDataTypes"

const SlideGameVote = ({ eventDataEvent }) => {
  const { slideType } = eventDataEvent

  if (slideType === SLIDE_TYPES.QUIZ) return <SlideGameVoteQuiz />
  return <SlideGameVoteQuiz />
}

const mapStateToProps = state => ({
  eventDataEvent: selectEventDataEvent(state),
})

export default connect(mapStateToProps)(SlideGameVote)
