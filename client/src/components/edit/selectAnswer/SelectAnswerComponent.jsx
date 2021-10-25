import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import TextareaAutosize from "react-textarea-autosize"
import {
  ICONCloudBroken,
  ICONDropBroken,
  ICONFlashBroken,
  ICONMoonBroken,
  ICONTickSquareBold,
} from "../../../icons/Icons"
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
      {order === 1 && <ICONFlashBroken className="svg-icon-default-size svg-icon-default-color" />}
      {order === 2 && <ICONCloudBroken className="svg-icon-default-size svg-icon-default-color" />}
      {order === 3 && <ICONDropBroken className="svg-icon-default-size svg-icon-default-color" />}
      {order === 4 && <ICONMoonBroken className="svg-icon-default-size svg-icon-default-color" />}
      <TextareaAutosize
        className="textarea-create textarea textarea-answer"
        onChange={e => editAnswerProperties({ answer: e.target.value })}
        placeholder={`Add answer ${order}`}
        value={answer.answer === "" ? answer.answer : null}
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
