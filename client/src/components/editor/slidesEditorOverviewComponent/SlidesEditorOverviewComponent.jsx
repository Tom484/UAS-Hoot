import React from "react"
import { connect } from "react-redux"
import { ICONCopyOutline, ICONTrashOutline } from "../../../icons/Icons"
import { editorEditCollection } from "../../../redux/editor/editorActions"
import { selectEditorCollection } from "../../../redux/editor/editorSelectors"
import EditorButton from "../editorButton/EditorButton"

import "./slidesEditorOverviewComponent.scss"

const SlidesEditorOverviewComponent = ({ slide, order, collection, editCollection }) => {
  const clickHandler = () => {
    editCollection({
      properties: {
        currentSlideId: slide.id,
      },
    })
  }

  return (
    <div
      className={`slides-editor-overview-component ${
        collection.currentSlideId === slide.id ? "active-slide" : ""
      }`}
    >
      <div className="label-container">
        <div className="label">{order}.</div>
        <div className="icon-container">
          <EditorButton type="DELETE_SLIDE" slideId={slide.id}>
            <ICONTrashOutline className="icon-sm-size icon-df-color cursor-pointer" />
          </EditorButton>
          <EditorButton type="DUPLICATE_SLIDE" slideId={slide.id}>
            <ICONCopyOutline className="icon-sm-size icon-df-color cursor-pointer" />
          </EditorButton>
        </div>
      </div>

      <div className="preview-container" onClick={clickHandler}>
        <div className="label-question">{slide.question || "Start typing your question..."}</div>
        <div className="label-time">{slide.time.value}</div>
        <div className="container-options">
          {Object.values(slide.options).map((option, i) => (
            <div key={i} className={`container-option ${option.correct ? "option-active" : ""}`}>
              <div className="label-option">{option.option || `Add answer ${i + 1}`}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  collection: selectEditorCollection(state),
})

const mapDispatchToProps = dispatch => ({
  editCollection: properties => dispatch(editorEditCollection(properties)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SlidesEditorOverviewComponent)
