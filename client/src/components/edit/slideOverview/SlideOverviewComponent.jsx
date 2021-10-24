import React from "react"
import { withRouter } from "react-router-dom"
import DuplicateQuestionButtonComponent from "../duplicateQuestionButton/DublicateQuestionButtonComponent"
import RemoveQuestionButtonComponent from "../removeQuestionButton/RemoveQuestionButtonComponent"

import "./slideOverviewComponent.scss"

const SlideOverviewComponent = ({ question, match, order, history }) => {
  const { collectionId, currentQuestion } = match.params
  return (
    <div>
      <div className="label" onClick={() => history.push(`/edit/${collectionId}/${order + 1}`)}>
        {question?.question}
      </div>
      <RemoveQuestionButtonComponent questionId={question.id} />
      <DuplicateQuestionButtonComponent currentQuestion={currentQuestion} />
    </div>
  )
}

export default withRouter(SlideOverviewComponent)
