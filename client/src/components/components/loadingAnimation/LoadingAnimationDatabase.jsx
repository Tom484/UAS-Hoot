import React from "react"
import { connect } from "react-redux"
import { selectUserCollectionsIsLoading } from "../../../redux/collections/collectionsSelectors"
import RollerAnimation from "../../animation/rollerAnimation/RollerAnimation"

import "./loadingAnimation.scss"

const LoadingAnimationDatabase = ({ collectionsIsLoading }) => {
  if (!collectionsIsLoading) return <></>

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
})

export default connect(mapStateToProps)(LoadingAnimationDatabase)
