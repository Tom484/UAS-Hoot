import { useEffect } from "react"
import { useSelector } from "react-redux"
import { selectLocalSettingTheme } from "../../redux/localSetting/localSettingSelectors"

export default function useUpdateDocumentTheme() {
  const theme = useSelector(selectLocalSettingTheme)
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark-theme")
    } else {
      document.body.classList.add("dark-theme")
    }
  }, [theme])
}
