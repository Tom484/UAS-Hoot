import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { ICONCopyOutline, ICONTrashOutline } from "../../../icons/Icons"
import { editCollection } from "../../../redux/collections/collectionsActions"
import { selectUserCollection } from "../../../redux/collections/collectionsSelectors"
import EditButtonComponent from "../editButton/EditButtonComponent"

import "./slideOverviewComponent.scss"

const SlideOverviewComponent = ({ slide, match, order, editCollection, collection }) => {
  const { collectionId } = match.params
  console.log(collection.currentSlideId)

  const clickHandler = () => {
    editCollection({
      collectionId,
      properties: {
        currentSlideId: slide.id,
      },
    })
  }

  return (
    <div className="overview-slide">
      <div className="slide-label">
        <div>{order}.</div>
        <div className="icon-container">
          <EditButtonComponent type="DELETE_SLIDE" slideId={slide.id}>
            <ICONTrashOutline className="svg-icon-small-size svg-icon-default-color svg-icon-pointer" />
          </EditButtonComponent>
          <EditButtonComponent type="DUPLICATE_SLIDE" slideId={slide.id}>
            <ICONCopyOutline className="svg-icon-small-size svg-icon-default-color svg-icon-pointer" />
          </EditButtonComponent>
        </div>
      </div>

      <div
        className={`slide-preview ${collection.currentSlideId === slide.id ? "active-slide" : ""}`}
        onClick={clickHandler}
      >
        <div className="question-label">{slide.question || "Start typing your question..."}</div>
        <div className="time-label">{slide.time.value}</div>
        <div className="answers-container">
          {Object.values(slide.options).map((option, i) => (
            <div key={i} className={`answer-container ${option.correct ? "active-answer" : ""}`}>
              <div className="answer-label">{option.option || `Add answer ${i + 1}`}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, onwProps) => {
  const { collectionId } = onwProps.match.params
  return {
    collection: selectUserCollection(collectionId)(state),
  }
}
const mapDispatchToProps = dispatch => ({
  editCollection: idAndProperties => dispatch(editCollection(idAndProperties)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SlideOverviewComponent))
