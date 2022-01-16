import React from "react"
import { ICONAddOutline } from "../../../icons/Icons"
import EditButton from "../../components/editButton/EditButton"

import "./previewCollectionCreate.scss"

const PreviewCollectionCreate = () => {
  return (
    <EditButton type="CREATE_COLLECTION" st>
      <div className="preview-collection-create">
        <ICONAddOutline className="preview-collection-icon" />
      </div>
    </EditButton>
  )
}

export default PreviewCollectionCreate
