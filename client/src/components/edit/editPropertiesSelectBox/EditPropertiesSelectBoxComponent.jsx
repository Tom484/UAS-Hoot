import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { editCollectionQuestion } from "../../../redux/collections/collectionsActions"
import { selectUserQuestion } from "../../../redux/collections/collectionsSelectors"

import "./editPropertiesSelectBoxComponent.scss"

const EditPropertiesSelectBoxComponent = ({
  values,
  title,
  match,
  name,
  editCollectionQuestion,
  question,
}) => {
  const changeHandler = e => {
    editCollectionQuestion({
      collectionId: match.params.collectionId,
      questionId: question.id,
      properties: { [name]: parseInt(e.target.value) },
    })
  }

  return (
    <div className="component-box">
      <div className="component-box-title">{title}</div>
      <select onChange={changeHandler} defaultValue={question[name]}>
        {values.map((value, i) => (
          <option key={i} value={value.value}>
            {value.label}
          </option>
        ))}
      </select>
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
  editCollectionQuestion: idsAndProperties => dispatch(editCollectionQuestion(idsAndProperties)),
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditPropertiesSelectBoxComponent)
)
