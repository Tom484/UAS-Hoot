import React from "react"
import { connect } from "react-redux"
import { selectUserCollectionsIsLoading } from "../../../redux/collections/collectionsSelectors"
import { selectUserIsLoading } from "../../../redux/user/userSelectors"
import RollerTemplateAnimation from "../templates/rollerTempleAnimation/RollerTemplateAnimation"

import "./loadingAnimation.scss"

const LoadingAnimationOnEvent = ({ collectionsIsLoading, userIsLoading }) => {
  if (!collectionsIsLoading && !userIsLoading) return <></>

  return (
    <div className="loading-animation">
      <div className="loading-animation-container">
        <div className="loading-card">
          <RollerTemplateAnimation />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  collectionsIsLoading: selectUserCollectionsIsLoading(state),
  userIsLoading: selectUserIsLoading(state),
})

export default connect(mapStateToProps)(LoadingAnimationOnEvent)
