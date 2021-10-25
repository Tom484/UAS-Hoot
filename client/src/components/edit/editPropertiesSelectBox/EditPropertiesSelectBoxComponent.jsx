import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { editCollectionQuestion } from "../../../redux/collections/collectionsActions"
import { selectUserQuestion } from "../../../redux/collections/collectionsSelectors"
import CustomSelectBoxComponent from "../../customSelectBox/CustomSelectBoxComponent"

import "./editPropertiesSelectBoxComponent.scss"

const EditPropertiesSelectBoxComponent = ({
  options,
  title,
  match,
  name,
  editCollectionQuestion,
  question,
}) => {
  const changeHandler = e => {
    console.log(e)
    editCollectionQuestion({
      collectionId: match.params.collectionId,
      questionId: question.id,
      properties: { [name]: e },
    })
  }

  return (
    <div className="component-box">
      <div className="box-label">{title}</div>
      <CustomSelectBoxComponent
        options={options}
        onChange={changeHandler}
        value={question[name]}
      ></CustomSelectBoxComponent>
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
