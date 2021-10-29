import { createSelector } from "reselect"

const selectEditor = state => state.editor

export const selectEditorCollection = createSelector([selectEditor], editor => editor.collection)

export const selectEditorSlides = createSelector(
  [selectEditorCollection],
  editorCollection => editorCollection.slides
)

export const selectEditorSlidesOrder = createSelector(
  [selectEditorCollection],
  editorCollection => editorCollection.slidesOrder
)

export const selectEditorSlidesArray = createSelector(
  [selectEditorSlides, selectEditorSlidesOrder],
  (slides, order) => order.map(value => slides[value])
)

export const selectEditorCurrentSlideId = createSelector(
  [selectEditorCollection],
  editorCollection => editorCollection.currentSlideId
)

export const selectEditorSlide = slideId =>
  createSelector([selectEditorSlides], slides => slides[slideId])

export const selectEditorSlideCurrent = createSelector(
  [selectEditorSlides, selectEditorCurrentSlideId],
  (slides, currentSlideId) => slides[currentSlideId]
)

export const selectEditorOptions = slideId =>
  createSelector([selectEditorSlide(slideId)], slide => slide.options)

export const selectUserOptionsArray = slideId =>
  createSelector([selectEditorOptions(slideId)], options => Object.values(options))

export const selectEditorOptionsCurrent = createSelector(
  [selectEditorSlideCurrent],
  slide => slide.options
)

export const selectEditorOptionsArrayCurrent = createSelector(
  [selectEditorOptionsCurrent],
  options => Object.values(options)
)
