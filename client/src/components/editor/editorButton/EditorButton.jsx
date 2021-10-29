import React from "react"
import { connect } from "react-redux"
import {
  editorDeleteSlide,
  editorEditSlide,
  editorAddSlideQuiz,
  editorDuplicateSlide,
} from "../../../redux/editor/editorActions"
import { selectEditorCollection } from "../../../redux/editor/editorSelectors"

import EditorButtonTypes from "./editorButtonTypes"

const EditorButton = ({
  collection,
  editCollection,
  addSlideQuiz,
  duplicateSlide,
  deleteSlide,
  type,
  slideId,
  className,
  children,
  label,
}) => {
  const clickHandler = () => {
    switch (type) {
      case EditorButtonTypes.COLLECTION_EDITOR_CARD_TOGGLE_SHOW.id:
        collectionEditorCardToggleShowHandler()
        break
      case EditorButtonTypes.ADD_SLIDE_QUIZ.id:
        addSlideQuizHandler()
        break
      case EditorButtonTypes.ADD_SLIDE_TRUE_FALSE.id:
        addSlideTrueFalseHandler()
        break
      case EditorButtonTypes.DUPLICATE_SLIDE.id:
        duplicateSlideHandler()
        break
      case EditorButtonTypes.DELETE_SLIDE.id:
        deleteSlideHandler()
        break
      default:
        console.log("Error! Enter correct type name!")
    }
  }

  const collectionEditorCardToggleShowHandler = () => {
    editCollection({
      properties: { collectionEditorCardShow: !collection.collectionSettingShow },
    })
  }

  const addSlideQuizHandler = () => {
    addSlideQuiz()
  }

  const addSlideTrueFalseHandler = () => {
    console.log("Add function!!")
  }

  const duplicateSlideHandler = () => {
    duplicateSlide({ slideId })
  }

  const deleteSlideHandler = () => {
    deleteSlide({ slideId })
  }

  if (children) return <span onClick={clickHandler}>{children}</span>

  return (
    <button className={"button button-basic " + className} onClick={clickHandler}>
      {label ? label : EditorButtonTypes[type]?.label || "Enter correct type"}
    </button>
  )
}

const mapStateToProps = state => ({
  collection: selectEditorCollection(state),
})

const mapDispatchToProps = dispatch => ({
  editCollection: () => dispatch(editorEditSlide()),
  addSlideQuiz: () => dispatch(editorAddSlideQuiz()),
  duplicateSlide: id => dispatch(editorDuplicateSlide(id)),
  deleteSlide: id => dispatch(editorDeleteSlide(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditorButton)
