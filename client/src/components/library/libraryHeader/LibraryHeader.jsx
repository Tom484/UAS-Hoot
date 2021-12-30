import React from "react"
import { CustomInput } from "../../custom/customInput/CustomInput"
import { CustomTextLarge } from "../../custom/customText/CustomText"
import LibrarySortIcons from "../librarySortIcons/LibrarySortIcons"

import "./libraryHeader.scss"

const LibraryHeader = ({ searchFilter, handleSearchFilter }) => {
  return (
    <div className="library-header-container">
      <div className="library-header">
        <CustomTextLarge style={{ whiteSpace: "nowrap" }}>Your Library</CustomTextLarge>
        <CustomInput
          placeholder="Search collection"
          value={searchFilter}
          onChange={e => handleSearchFilter(e)}
        />
        <LibrarySortIcons />
      </div>
    </div>
  )
}

export default LibraryHeader
