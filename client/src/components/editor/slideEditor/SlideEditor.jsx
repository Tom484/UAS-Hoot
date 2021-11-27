import React from "react"
import { connect } from "react-redux"
import { selectEditorSlideCurrent } from "../../../redux/editor/editorSelectors"
import SlideEditorQuiz from "../slideEditorQuiz/SlideEditorQuiz"

import "./slideEditor.scss"

const SlideEditor = ({ slide }) => {
  return <div className="slide-editor">{slide.type === "quiz" && <SlideEditorQuiz />}</div>
}

const mapStateToProps = state => ({
  slide: selectEditorSlideCurrent(state),
})

export default connect(mapStateToProps)(SlideEditor)
