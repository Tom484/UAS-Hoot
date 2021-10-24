import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import TextareaAutosize from "react-textarea-autosize"
import { ICONTickSquareBold } from "../../../icons/Icons"
import { editCollectionAnswer } from "../../../redux/collections/collectionsActions"
import { selectUserQuestionId } from "../../../redux/collections/collectionsSelectors"

import "./selectAnswerComponent.scss"

const SelectAnswerComponent = ({ answer, order, editAnswer, questionId, match }) => {
  const editAnswerProperties = properties => {
    return editAnswer({
      collectionId: match.params.collectionId,
      questionId,
      answerId: answer.id,
      properties,
    })
  }

  return (
    <div className="select-answer-component">
      <span className="order">{order}</span>
      <TextareaAutosize
        className="textarea-create textarea textarea-answer"
        value={answer.answer}
        onChange={e => editAnswerProperties({ answer: e.target.value })}
      />
      <ICONTickSquareBold
        className={`svg-icon-default-size icon ${answer.correct ? "checked" : ""}`}
        onClick={() => editAnswerProperties({ correct: !answer.correct })}
      />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { collectionId, currentQuestion } = ownProps.match.params
  return {
    questionId: selectUserQuestionId(collectionId, currentQuestion)(state),
  }
}

const mapDispatchToProps = dispatch => ({
  editAnswer: idsAndProperties => dispatch(editCollectionAnswer(idsAndProperties)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SelectAnswerComponent))
