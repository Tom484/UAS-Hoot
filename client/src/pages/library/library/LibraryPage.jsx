import React, { useEffect, useState } from "react"
import PreviewCollections from "../../../components/library/previewCollections/PreviewCollections"
import { selectUserCollectionsArraySorted } from "../../../redux/collections/collectionsSelectors"
import CustomBackground from "../../../components/custom/customBackground/CustomBackground"
import NavbarContainer from "../../../components/navbar/navbarContainer/NavbarContainer"
import LibraryHeader from "../../../components/library/libraryHeader/LibraryHeader"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"

import "./libraryPage.scss"

const LibraryPage = ({ collectionArray }) => {
  const [searchFilter, setSearchFilter] = useState("")
  const [filterCollections, setFilterCollections] = useState(collectionArray)

  const handleSearchFilter = e => {
    const value = e?.target?.value || ""

    setSearchFilter(value)
    if (!value) return setFilterCollections(collectionArray)

    setFilterCollections(
      collectionArray.filter(collection =>
        collection.name.toLowerCase().includes(value.toLowerCase())
      )
    )
  }

  useEffect(() => {
    handleSearchFilter()
    // eslint-disable-next-line
  }, [collectionArray])

  return (
    <NavbarContainer>
      <CustomBackground className="library-page" bubbleBackground={false}>
        <LibraryHeader searchFilter={searchFilter} handleSearchFilter={handleSearchFilter} />
        <PreviewCollections collections={filterCollections} />
      </CustomBackground>
    </NavbarContainer>
  )
}

const mapStateToProps = (state, { location }) => {
  const sortValue = location.pathname.split("/").slice(-1)[0] // Return last path name
  return {
    collectionArray: selectUserCollectionsArraySorted(sortValue)(state),
  }
}

export default withRouter(connect(mapStateToProps)(LibraryPage))
