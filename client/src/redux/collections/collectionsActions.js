import CollectionsActionTypes from "./collectionsTypes"

export const createCollection = property => ({
  type: CollectionsActionTypes.CREATE_COLLECTION,
  payload: property,
})
