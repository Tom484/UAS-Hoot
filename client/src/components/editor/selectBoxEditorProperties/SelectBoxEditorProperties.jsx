import React from "react"
import { connect } from "react-redux"
import { editorEditSlide } from "../../../redux/editor/editorActions"
import { selectEditorSlideCurrent } from "../../../redux/editor/editorSelectors"
import { CustomSelectWithLabel } from "../../custom/customSelect/CustomSelect"

import "./selectBoxEditorProperties.scss"

const SelectBoxEditorProperties = ({ slide, editSlide, label, options, name }) => {
  const changeHandler = e => {
    editSlide({
      slideId: slide.id,
      properties: { [name]: e },
    })
  }

  return (
    <CustomSelectWithLabel
      style={{ fontSize: "18px" }}
      theme="background-1"
      options={options}
      onChange={changeHandler}
      option={slide[name]}
      label={label}
    ></CustomSelectWithLabel>
  )
}

const mapStateToProps = state => ({
  slide: selectEditorSlideCurrent(state),
})

const mapDispatchToProps = dispatch => ({
  editSlide: idAndProperties => dispatch(editorEditSlide(idAndProperties)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectBoxEditorProperties)
