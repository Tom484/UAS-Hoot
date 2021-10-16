import UserCollectionsActionTypes from "./userCollectionsTypes"

export const createCollection = value => ({
  type: UserCollectionsActionTypes.CREATE_COLLECTION,
  payload: value,
})
