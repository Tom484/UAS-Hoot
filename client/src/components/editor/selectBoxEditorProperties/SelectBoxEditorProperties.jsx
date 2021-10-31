import React from "react"
import { connect } from "react-redux"
import { editorEditSlide } from "../../../redux/editor/editorActions"
import { selectEditorSlideCurrent } from "../../../redux/editor/editorSelectors"
import CustomSelectBox from "../../components/customSelectBox/CustomSelectBox"

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
      <CustomSelectBox
        options={options}
        onChange={changeHandler}
        value={slide[name]}
      ></CustomSelectBox>
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
