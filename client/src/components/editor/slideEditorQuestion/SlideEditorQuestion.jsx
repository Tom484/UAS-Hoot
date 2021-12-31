import React from "react"
import { connect } from "react-redux"
import { selectEditorSlideCurrent } from "../../../redux/editor/editorSelectors"
import { editorEditSlide } from "../../../redux/editor/editorActions"

import "./slideEditorQuestion.scss"
import { CustomTextarea } from "../../custom/customTextarea/CustomTextarea"

const SlideEditorQuestion = ({ slide, editSlide }) => {
  const handleChange = e => {
    editSlide({
      properties: { question: e.target.value },
    })
  }

  return (
    <div>
      <CustomTextarea
        onChange={handleChange}
        placeholder="Start typing your question..."
        value={slide.question}
        maxLength={125}
        className={!slide?.question ? "warning" : ""}
        style={{
          textAlign: "center",
          fontSize: "32px",
          borderWidth: "3px",
          borderRadius: "12px",
        }}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  slide: selectEditorSlideCurrent(state),
})

const mapDispatchToProps = dispatch => ({
  editSlide: idAndProperties => dispatch(editorEditSlide(idAndProperties)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SlideEditorQuestion)
