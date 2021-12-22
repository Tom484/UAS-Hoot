import React from "react"
import SlidesEditorOverview from "../slidesEditorOverview/SlidesEditorOverview"
import EditorButton from "../editorButton/EditorButton"

import "./slidesEditor.scss"

const SlidesEditor = () => {
  return (
    <div className="slides-editor">
      <div className="slides-editor-container">
        <SlidesEditorOverview />
        <EditorButton type="ADD_SLIDE_QUIZ" />
      </div>
    </div>
  )
}

export default SlidesEditor
