import React from "react"
import { withRouter } from "react-router-dom"
import { ICONCalendarOutline, ICONEditOutline, ICONHeartOutline } from "../../../icons/Icons"
import { LIBRARY_ROUTES } from "../../../routes/library/LibraryRoutes"
import CustomButton from "../../components/customButton/CustomButton"
import { CustomInput } from "../../components/customInput/CustomInput"
import { CustomTextLarge } from "../../components/customText/CustomText"
import EditButton from "../../components/editButton/EditButton"

import "./libraryHeader.scss"

const LibraryHeader = ({ history, location }) => {
  return (
    <div className="library-header-container">
      <div className="library-header">
        <CustomTextLarge style={{ whiteSpace: "nowrap" }}>Your Library</CustomTextLarge>
        <CustomInput placeholder="Search collection" />
        <div className="sorts-icon">
          <ICONEditOutline
            className={`sort-icon ${location.pathname === LIBRARY_ROUTES.RECENT ? "active" : ""}`}
            onClick={() => history.push(LIBRARY_ROUTES.RECENT)}
          />
          <ICONCalendarOutline
            className={`sort-icon ${location.pathname === LIBRARY_ROUTES.CREATED ? "active" : ""}`}
            onClick={() => history.push(LIBRARY_ROUTES.CREATED)}
          />
          <ICONHeartOutline
            className={`sort-icon ${
              location.pathname === LIBRARY_ROUTES.FAVORITES ? "active" : ""
            }`}
            onClick={() => history.push(LIBRARY_ROUTES.FAVORITES)}
          />
        </div>
        {/* <EditButton type="CREATE_COLLECTION">
          <CustomButton>New</CustomButton>
        </EditButton> */}
      </div>
    </div>
  )
}

export default withRouter(LibraryHeader)
