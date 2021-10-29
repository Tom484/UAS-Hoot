import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import TextareaAutosize from "react-textarea-autosize"
import { editSlide } from "../../../redux/collections/collectionsActions"
import { selectUserSlide } from "../../../redux/collections/collectionsSelectors"

import "./editSlideQuestionComponent.scss"

const EditSlideQuestionComponent = ({ editSlide, slide, match, collectionId }) => {
  collectionId = collectionId || match.params.collectionId

  const handleChange = e => {
    editSlide({
      collectionId,
      properties: { question: e.target.value },
    })
  }

  return (
    <div className="textarea-container">
      <TextareaAutosize
        onChange={handleChange}
        className="text-area textarea-question"
        placeholder="Start typing your question..."
        value={slide.question}
        maxLength={125}
      />
      <span>{125 - slide.question.length}</span>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { collectionId } = ownProps.match.params
  return {
    slide: selectUserSlide(collectionId)(state),
  }
}

const mapDispatchToProps = dispatch => ({
  editSlide: idsAndProperties => dispatch(editSlide(idsAndProperties)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditSlideQuestionComponent))
