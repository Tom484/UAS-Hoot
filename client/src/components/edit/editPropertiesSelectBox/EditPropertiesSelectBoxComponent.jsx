import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { editSlide } from "../../../redux/collections/collectionsActions"
import { selectUserSlide } from "../../../redux/collections/collectionsSelectors"
import CustomSelectBoxComponent from "../../customSelectBox/CustomSelectBoxComponent"

import "./editPropertiesSelectBoxComponent.scss"

const EditPropertiesSelectBoxComponent = ({ options, label, match, name, editSlide, slide }) => {
  const changeHandler = e => {
    editSlide({
      collectionId: match.params.collectionId,
      questionId: slide.id,
      properties: { [name]: e },
    })
  }

  return (
    <div className="select-box-container">
      <div className="label">{label}</div>
      <CustomSelectBoxComponent
        options={options}
        onChange={changeHandler}
        value={slide[name]}
      ></CustomSelectBoxComponent>
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditPropertiesSelectBoxComponent)
)
