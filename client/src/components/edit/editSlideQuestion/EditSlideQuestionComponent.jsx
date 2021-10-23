import React from "react"

import "./editSlideQuestionComponent.scss"
import SelectAnswersComponent from "../selectAnswers/SelectAnswersComponent"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import {
  selectUserAnswers,
  selectUserAnswersArray,
  selectUserCollection,
  selectUserCollections,
  selectUserQuestion,
  selectUserQuestions,
  selectUserQuestionsOrder,
} from "../../../redux/collections/collectionsSelectors"
import EditQuestionComponent from "../editQuestion/EditQuestionComponent"

const EditSlideQuestionComponent = () => {
  return (
    <div className="create-question-component">
      <EditQuestionComponent />
      <SelectAnswersComponent />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { collectionId, currentQuestion } = ownProps.match.params
  return {
    collections: selectUserCollections(state),
    collection: selectUserCollection(collectionId)(state),
    questions: selectUserQuestions(collectionId)(state),
    questionsOrder: selectUserQuestionsOrder(collectionId)(state),
    question: selectUserQuestion(collectionId, currentQuestion)(state),
    answers: selectUserAnswers(collectionId, currentQuestion)(state),
    answersArray: selectUserAnswersArray(collectionId, currentQuestion)(state),
  }
}

export default withRouter(connect(mapStateToProps)(EditSlideQuestionComponent))
