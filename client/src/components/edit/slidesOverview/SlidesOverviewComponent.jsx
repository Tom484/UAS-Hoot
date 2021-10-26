import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { editCollection } from "../../../redux/collections/collectionsActions"
import { selectUserSlidesArray } from "../../../redux/collections/collectionsSelectors"
import SlideOverviewComponent from "../slideOverview/SlideOverviewComponent"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { addSlideQuiz } from "../../../redux/collections/collectionsUtils"
import EditButtonComponent from "../editButton/EditButtonComponent"

import "./slidesOverviewComponent.scss"

const SlidesOverviewComponent = ({ slidesArray, match, editCollection }) => {
  const { collectionId } = match.params

  const handleOnDragEnd = result => {
    if (!result.destination) return
    const items = [...slidesArray]
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    const newSlidesOrder = items.map(item => item.id)
    editCollection({ collectionId, properties: { slidesOrder: newSlidesOrder } })
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="slides-container">
          {provided => (
            <div className="slides-container" {...provided.droppableProps} ref={provided.innerRef}>
              {slidesArray.map((slide, i) => (
                <Draggable key={slide.id} draggableId={slide.id} index={i}>
                  {provided => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      key={i}
                    >
                      <SlideOverviewComponent slide={slide} order={i + 1} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <EditButtonComponent type="ADD_SLIDE_QUIZ" className="add-button" />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { collectionId } = ownProps.match.params
  return {
    slidesArray: selectUserSlidesArray(collectionId)(state),
  }
}

const mapDispatchToProps = dispatch => ({
  addSlideQuiz: id => dispatch(addSlideQuiz(id)),
  editCollection: idAndProperties => dispatch(editCollection(idAndProperties)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SlidesOverviewComponent))
