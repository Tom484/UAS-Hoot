import React from "react"
import { connect } from "react-redux"
import { editorEditSlide } from "../../../redux/editor/editorActions"
import { selectEditorSlideCurrent } from "../../../redux/editor/editorSelectors"
import CustomSelectBoxComponent from "../../components/customSelectBox/CustomSelectBoxComponent"

import "./selectBoxEditorProperties.scss"

const SelectBoxEditorProperties = ({ slide, editSlide, label, options, name }) => {
  const changeHandler = e => {
    editSlide({
      slideId: slide.id,
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

const mapStateToProps = state => ({
  slide: selectEditorSlideCurrent(state),
})

const mapDispatchToProps = dispatch => ({
  editSlide: idAndProperties => dispatch(editorEditSlide(idAndProperties)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectBoxEditorProperties)
