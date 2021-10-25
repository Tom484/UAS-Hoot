import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import TextareaAutosize from "react-textarea-autosize"
import { editCollectionQuestion } from "../../../redux/collections/collectionsActions"
import { selectUserQuestion } from "../../../redux/collections/collectionsSelectors"

import "./editQuestionComponent.scss"

const EditQuestionComponent = ({ editQuestion, question, match }) => {
  const handleChange = e => {
    editQuestion({
      collectionId: match.params.collectionId,
      questionId: question.id,
      properties: { question: e.target.value },
    })
  }

  return (
    <div>
      <TextareaAutosize
        onChange={handleChange}
        className="textarea-create textarea-question"
        placeholder="Start typing your question..."
        value={question.question === "" ? question.question : null}
      />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { collectionId, currentQuestion } = ownProps.match.params
  return {
    question: selectUserQuestion(collectionId, currentQuestion)(state),
  }
}

const mapDispatchToProps = dispatch => ({
  editQuestion: idsAndProperties => dispatch(editCollectionQuestion(idsAndProperties)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditQuestionComponent))
