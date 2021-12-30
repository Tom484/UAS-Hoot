import React from "react"
import CustomBackground from "../../../components/custom/customBackground/CustomBackground"
import HomePageContent from "../../../components/components/homePageContent/HomePageContent"
import NavbarContainer from "../../../components/navbar/navbarContainer/NavbarContainer"
import { selectCurrentUser } from "../../../redux/user/userSelectors"
import { connect } from "react-redux"

import "./homePage.scss"

const HomePage = ({ currentUser }) => {
  if (currentUser)
    return (
      <NavbarContainer>
        <CustomBackground>
          <HomePageContent />
        </CustomBackground>
      </NavbarContainer>
    )

  return (
    <CustomBackground>
      <HomePageContent />
    </CustomBackground>
  )
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
})

export default connect(mapStateToProps)(HomePage)
