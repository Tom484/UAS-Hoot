import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import {
  addCollectionQuestion,
  editCollection,
} from "../../../redux/collections/collectionsActions"
import { selectUserQuestionsArray } from "../../../redux/collections/collectionsSelectors"
import SlideOverviewComponent from "../slideOverview/SlideOverviewComponent"
import "./slidesOverviewComponent.scss"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

const SlidesOverviewComponent = ({ questionsArray, addQuestion, match, editCollection }) => {
  const { collectionId } = match.params

  const handleOnDragEnd = result => {
    if (!result.destination) return
    const items = [...questionsArray]
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    const newQuestionsOrder = items.map(item => item.id)
    editCollection({ collectionId, properties: { questionsOrder: newQuestionsOrder } })
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="slides-container">
          {provided => (
            <div className="slides-container" {...provided.droppableProps} ref={provided.innerRef}>
              {questionsArray.map((question, i) => (
                <Draggable key={question.id} draggableId={question.id} index={i}>
                  {provided => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      key={i}
                    >
                      <SlideOverviewComponent question={question} order={i} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <button
        className="button button-basic add-button"
        onClick={() => addQuestion({ collectionId })}
      >
        Add question
      </button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { collectionId } = ownProps.match.params
  return {
    questionsArray: selectUserQuestionsArray(collectionId)(state),
  }
}

const mapDispatchToProps = dispatch => ({
  addQuestion: id => dispatch(addCollectionQuestion(id)),
  editCollection: idAndProperties => dispatch(editCollection(idAndProperties)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SlidesOverviewComponent))
