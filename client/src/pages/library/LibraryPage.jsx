import React from "react"
import PreviewCollections from "../../components/library/previewCollections/PreviewCollections"
import CustomBackground from "../../components/components/customBackground/CustomBackground"
import LibraryHeader from "../../components/library/libraryHeader/LibraryHeader"
import { withRouter } from "react-router-dom"
import { selectUserCollectionsArraySorted } from "../../redux/collections/collectionsSelectors"
import { connect } from "react-redux"

import "./libraryPage.scss"

const LibraryPage = ({ collectionArray }) => {
  console.log(collectionArray)
  return (
    <CustomBackground navbar className="library-page" bubbleBackground={false}>
      <LibraryHeader />
      <PreviewCollections collections={collectionArray} />
    </CustomBackground>
  )
}

const mapStateToProps = (state, { location }) => {
  const sortValue = location.pathname.split("/").slice(-1)[0] // Return last path name
  return {
    collectionArray: selectUserCollectionsArraySorted(sortValue)(state),
  }
}

export default withRouter(connect(mapStateToProps)(LibraryPage))
