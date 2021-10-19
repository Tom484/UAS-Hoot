import { createSelector } from "reselect"

const functionSelectUserCollections = state => state.collections.userCollections

export const selectUserCollections = createSelector(
  [functionSelectUserCollections],
  collections => collections
)

export const selectUserCollection = id =>
  createSelector([functionSelectUserCollections], collections =>
    collections ? collections[id] : null
  )

export const selectUserQuestions = id =>
  createSelector([functionSelectUserCollections], collections =>
    collections ? collections[id].questions : null
  )
