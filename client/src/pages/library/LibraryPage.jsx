import React from "react"
import PreviewCollectionsContainer from "../../components/library/previewCollectionsContainer/PreviewCollectionsContainer"
import EditButton from "../../components/components/editButton/EditButton"
import CustomBackground from "../../components/components/customBackground/CustomBackground"
import { CustomTextLarge } from "../../components/components/customText/CustomText"
import Navbar from "../../components/components/Navbar/Navbar"

import "./libraryPage.scss"

const LibraryPage = () => {
  return (
    <div style={{ paddingTop: "80px" }}>
      <Navbar />
      <CustomBackground navbar className="library-page-container">
        <div className="library-page-header">
          <CustomTextLarge>Your Library</CustomTextLarge>
          <EditButton type="CREATE_COLLECTION"></EditButton>
        </div>
        <PreviewCollectionsContainer />
      </CustomBackground>
    </div>
  )
}

export default LibraryPage
