import React from "react"
import { connect } from "react-redux"
import Select from "react-select"
import { selectLocalSettingTheme } from "../../../redux/localSetting/localSettingSelectors"

import "./customSelectBox.scss"

const CustomSelectBox = ({ localTheme, ...props }) => {
  return <Select theme={localTheme === "light" ? themeLight : themeDark} {...props} />
}

const themeLight = theme => ({
  ...theme,
  borderRadius: 4,
  colors: {
    ...theme.colors,
    primary75: "#e9e9e9",
    primary50: "#e9e9e9",
    primary25: "#e9e9e9",
    primary: "#7134ff",
  },
})

const themeDark = theme => ({
  ...theme,
  borderRadius: 4,
  colors: {
    ...theme.colors,
    primary75: "#060606",
    primary50: "#060606",
    primary25: "#060606",
    primary: "#7134ff",
  },
})

const mapStateToProps = state => ({
  localTheme: selectLocalSettingTheme(state),
})

export default connect(mapStateToProps)(CustomSelectBox)
