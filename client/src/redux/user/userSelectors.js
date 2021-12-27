import { createSelector } from "reselect"

const selectUser = state => state.user

export const selectCurrentUser = createSelector([selectUser], user => user.currentUser)
export const selectUserIsLoading = createSelector([selectUser], user => user.isLoading)

export const selectCompletedAuthInitialProcess = createSelector(
  [selectUser],
  user => user.completedAuthInitialProcess
)
