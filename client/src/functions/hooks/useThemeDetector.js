import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { updateSystemTheme } from "../../redux/localSetting/localSettingActions"

export default function useThemeDetector() {
  const dispatch = useDispatch()

  const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches
  const [, setIsDarkTheme] = useState(getCurrentTheme())
  const mqListener = e => {
    setIsDarkTheme(e.matches)
    dispatch(updateSystemTheme(e.matches ? "dark" : "light"))
  }

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)")
    darkThemeMq.addListener(mqListener)
    return () => darkThemeMq.removeListener(mqListener) // eslint-disable-next-line
  }, [])
}
