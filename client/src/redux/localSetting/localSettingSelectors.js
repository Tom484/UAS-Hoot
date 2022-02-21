import { createSelector } from "reselect"

const selectLocalSetting = state => state.localSetting

export const selectLocalSettingTheme = createSelector([selectLocalSetting], state => state.theme)

export const selectLocalSettingThemeSetting = createSelector(
  [selectLocalSetting],
  state => state.themeSetting
)

export const selectLocalSettingSystemTheme = createSelector(
  [selectLocalSetting],
  state => state.systemTheme
)

export const selectLocalSettingNavbarActive = createSelector(
  [selectLocalSetting],
  state => state.navbarActive
)

export const selectLocalSettingContextMenuItems = createSelector(
  [selectLocalSetting],
  state => state.contextMenuItems
)

export const selectLocalSettingPopUpCard = createSelector(
  [selectLocalSetting],
  state => state.popUpCard
)
