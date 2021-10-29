import React from "react"
import { connect } from "react-redux"
import { selectEditorSlideCurrent } from "../../../redux/editor/editorSelectors"
import TextareaAutosize from "react-textarea-autosize"

import "./slideEditorQuestion.scss"
import { editorEditSlide } from "../../../redux/editor/editorActions"

const SlideEditorQuestion = ({ slide, editSlide }) => {
  const handleChange = e => {
    editSlide({
      properties: { question: e.target.value },
    })
  }

  return (
    <div>
      <TextareaAutosize
        onChange={handleChange}
        className="text-area textarea-question"
        placeholder="Start typing your question..."
        value={slide.question}
        maxLength={125}
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
