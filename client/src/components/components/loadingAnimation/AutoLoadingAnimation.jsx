import React from "react"
import { connect } from "react-redux"
import { selectUserCollectionsIsLoading } from "../../../redux/collections/collectionsSelectors"
import RollerAnimation from "../../animation/rollerAnimation/RollerAnimation"
import { selectUserIsLoading } from "../../../redux/user/userSelectors"

import "./loadingAnimation.scss"

const AutoLoadingAnimation = ({ collectionsIsLoading, userIsLoading }) => {
  if (!collectionsIsLoading && !userIsLoading) return <></>

  return (
    <div className="loading-animation">
      <div className="loading-animation-container">
        <div className="loading-card">
          <RollerAnimation />
          <div className="label">Please wait</div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  collectionsIsLoading: selectUserCollectionsIsLoading(state),
  userIsLoading: selectUserIsLoading(state),
})

export default connect(mapStateToProps)(AutoLoadingAnimation)
