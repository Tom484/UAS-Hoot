import React from "react"
import CustomBackground from "../../components/components/customBackground/CustomBackground"
import HomePageContent from "../../components/components/homePageContent/HomePageContent"
import { selectCurrentUser } from "../../redux/user/userSelectors"
import { connect } from "react-redux"

import "./homePage.scss"
import NavbarContainer from "../../components/components/navbarContainer/NavbarContainer"

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
