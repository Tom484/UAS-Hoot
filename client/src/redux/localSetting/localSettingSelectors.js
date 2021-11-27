import { createSelector } from "reselect"

const selectLocalSetting = state => state.localSetting

export const selectLocalSettingTheme = createSelector([selectLocalSetting], state => state.theme)
