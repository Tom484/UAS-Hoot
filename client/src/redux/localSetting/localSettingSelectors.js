import { createSelector } from "reselect"

const selectLocalSetting = state => state.localSetting

export const selectLocalSettingTheme = createSelector([selectLocalSetting], state => state.theme)

export const selectLocalSettingThemeSetting = createSelector(
  [selectLocalSetting],
  state => state.settingTheme
)
