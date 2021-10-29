import React from "react"
import SlidesEditorOverview from "../slidesEditorOverview/SlidesEditorOverview"

import "./slidesEditor.scss"

const SlidesEditor = () => {
  return (
    <div className="slides-editor">
      <div className="slides-editor-container">
        <SlidesEditorOverview />
      </div>
    </div>
  )
}

export default SlidesEditor
