import React, { useEffect, useState } from "react"
import { ICONSizeBold, ICONSizeOutline } from "../../../icons/Icons"

const FullScreenToggle = () => {
  const [fullScreen, setFullScreen] = useState(false)

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleScreenChange)
    return () => document.removeEventListener("fullscreenchange", handleScreenChange)
  })

  const handleScreenChange = () => {
    setFullScreen(document.fullscreenElement)
  }

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }

  return (
    <div className="container-setting">
      {fullScreen ? (
        <ICONSizeBold className="icon-setting" onClick={toggleFullScreen} />
      ) : (
        <ICONSizeOutline className="icon-setting" onClick={toggleFullScreen} />
      )}
    </div>
  )
}

export default FullScreenToggle
