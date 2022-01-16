import EditorActions from "./editorTypes"

export const editorCopyCollection = collection => ({
  type: EditorActions.EDITOR_COPY_COLLECTION,
  payload: collection,
})

export const editorEditCollection = properties => ({
  type: EditorActions.EDITOR_EDIT_COLLECTION,
  payload: properties,
})

export const editorAddSlideQuiz = () => ({
  type: EditorActions.EDITOR_ADD_SLIDE_QUIZ,
})

export const editorAddSlideTrueFalse = () => ({
  type: EditorActions.EDITOR_ADD_SLIDE_TRUE_FALSE,
})
export const editorAddSlideInput = () => ({
  type: EditorActions.EDITOR_ADD_SLIDE_INPUT,
})

export const editorEditSlide = idAndProperties => ({
  type: EditorActions.EDITOR_EDIT_SLIDE,
  payload: idAndProperties,
})

export const editorDuplicateSlide = id => ({
  type: EditorActions.EDITOR_DUPLICATE_SLIDE,
  payload: id,
})

export const editorDeleteSlide = id => ({
  type: EditorActions.EDITOR_DELETE_SLIDE,
  payload: id,
})

export const editorEditOption = idsAndProperties => ({
  type: EditorActions.EDITOR_EDIT_OPTION,
  payload: idsAndProperties,
})
