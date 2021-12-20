import React from "react"
import PreviewCollectionsContainer from "../../components/library/previewCollectionsContainer/PreviewCollectionsContainer"
import EditButton from "../../components/components/editButton/EditButton"
import CustomBackground from "../../components/components/customBackground/CustomBackground"
import { CustomTextLarge } from "../../components/components/customText/CustomText"

import "./libraryPage.scss"

const LibraryPage = () => {
  return (
    <CustomBackground navbar className="library-page-container">
      <div className="library-page-header">
        <CustomTextLarge>Your Library</CustomTextLarge>
        <EditButton type="CREATE_COLLECTION"></EditButton>
      </div>
      <PreviewCollectionsContainer />
    </CustomBackground>
  )
}

export default LibraryPage
