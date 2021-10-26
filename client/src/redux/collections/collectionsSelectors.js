import { createSelector } from "reselect"

const selectCollections = state => state.collections

export const selectUserCollections = createSelector(
  [selectCollections],
  collections => collections.userCollections
)

export const selectUserCollectionsArray = createSelector([selectUserCollections], collections =>
  Object.values(collections)
)

export const selectUserCollection = collectionId =>
  createSelector([selectUserCollections], userCollections => userCollections[collectionId])

export const selectUserSlidesOrder = collectionId =>
  createSelector(
    [selectUserCollection(collectionId)],
    userCollections => userCollections.slidesOrder
  )

export const selectUserSlides = collectionId =>
  createSelector([selectUserCollection(collectionId)], userCollection => userCollection.slides)

export const selectUserSlidesArray = collectionId =>
  createSelector(
    [selectUserSlides(collectionId), selectUserSlidesOrder(collectionId)],
    (slides, order) => order.map(value => slides[value])
  )

export const selectUserCurrentSlideId = collectionId =>
  createSelector([selectUserCollection(collectionId)], slide => slide.currentSlideId)

export const selectUserSlide = (collectionId, slideId) =>
  createSelector(
    [selectUserSlides(collectionId), selectUserCurrentSlideId(collectionId)],
    (slides, currentSlideId = slideId) => slides[currentSlideId]
  )

export const selectUserOptions = (collectionId, slideId) =>
  createSelector([selectUserSlide(collectionId, slideId)], slide => slide.options)

export const selectUserOptionsArray = (collectionId, slideId) =>
  createSelector([selectUserOptions(collectionId, slideId)], options => Object.values(options))
