import { useCallback, useEffect, useState } from "react"
import { connect } from "react-redux"
import { setContextMenuItems } from "../../../redux/localSetting/localSettingActions"
import { selectLocalSettingContextMenuItems } from "../../../redux/localSetting/localSettingSelectors"
import ContextMenuPreviewCollection from "./ContextMenuPreviewCollection"
import "./contextMenu.scss"

export const CONTEXT_MENU_TYPES = {
  PREVIEW_COLLECTION: "PREVIEW_COLLECTION",
}

const ContextMenu = ({ contextMenuItems, setContextMenuItems }) => {
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 })
  const [show, setShow] = useState(false)

  const handleContextMenu = useCallback(
    event => {
      event.preventDefault()
      setAnchorPoint({ x: event.pageX, y: event.pageY })
      setShow(true)
    },
    [setAnchorPoint]
  )

  const handleClick = useCallback(() => {
    setContextMenuItems({})
    return show ? setShow(false) : null
    // eslint-disable-next-line
  }, [show])

  useEffect(() => {
    document.addEventListener("click", handleClick)
    document.addEventListener("contextmenu", handleContextMenu)
    return () => {
      document.removeEventListener("click", handleClick)
      document.removeEventListener("contextmenu", handleContextMenu)
    }
  })

  return (
    <div>
      {show ? (
        <div
          className="context-menu-container"
          style={{
            top: anchorPoint.y,
            left: anchorPoint.x,
          }}
        >
          {contextMenuItems?.type === CONTEXT_MENU_TYPES.PREVIEW_COLLECTION && (
            <ContextMenuPreviewCollection />
          )}
        </div>
      ) : (
        <> </>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  contextMenuItems: selectLocalSettingContextMenuItems(state),
})

const mapDispatchToProps = dispatch => ({
  setContextMenuItems: items => dispatch(setContextMenuItems(items)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContextMenu)
