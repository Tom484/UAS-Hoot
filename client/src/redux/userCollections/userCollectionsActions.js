import UserCollectionsActionTypes from "./userCollectionsTypes"

export const createCollection = property => ({
  type: UserCollectionsActionTypes.CREATE_COLLECTION,
  payload: property,
})
