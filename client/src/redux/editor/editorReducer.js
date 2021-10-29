import EditorActions from "./editorTypes"
import {
  editorEditCollection,
  editorAddSlideQuiz,
  editorEditSlide,
  editorDuplicateSlide,
  editorDeleteSlide,
  editorEditOption,
} from "./editorUtils"

const INITIAL_STATE = {
  collection: {},
}

const editorReducer = (state = INITIAL_STATE, action) => {
  const collection = state.collection

  switch (action.type) {
    case EditorActions.EDITOR_EDIT_COLLECTION:
      return {
        ...state,
        collection: editorEditCollection(collection, action.payload),
      }
    case EditorActions.EDITOR_ADD_SLIDE_QUIZ:
      return {
        ...state,
        collection: editorAddSlideQuiz(collection),
      }

    case EditorActions.ADD_SLIDE_TRUE_FALSE:
      return state

    case EditorActions.EDITOR_EDIT_SLIDE:
      return {
        ...state,
        collection: editorEditSlide(collection, action.payload),
      }

    case EditorActions.EDITOR_DUPLICATE_SLIDE:
      return {
        ...state,
        collection: editorDuplicateSlide(collection, action.payload),
      }

    case EditorActions.EDITOR_DELETE_SLIDE:
      return {
        ...state,
        collection: editorDeleteSlide(collection, action.payload),
      }

    case EditorActions.EDITOR_EDIT_OPTION:
      return {
        ...state,
        collection: editorEditOption(collection, action.payload),
      }
    default:
      return state
  }
}

export default editorReducer
