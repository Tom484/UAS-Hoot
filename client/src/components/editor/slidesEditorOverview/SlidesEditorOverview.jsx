import React from "react"
import { connect } from "react-redux"
import { selectEditorSlidesArray } from "../../../redux/editor/editorSelectors"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import SlidesEditorOverviewComponent from "../slidesEditorOverviewComponent/SlidesEditorOverviewComponent"

import "./slidesEditorOverview.scss"
import { editorEditCollection } from "../../../redux/editor/editorActions"

const SlidesEditorOverview = ({ slidesArray, editCollection }) => {
  const handleOnDragEnd = result => {
    if (!result.destination) return
    const items = [...slidesArray]
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    const newSlidesOrder = items.map(item => item.id)

    editCollection({ properties: { slidesOrder: newSlidesOrder } })
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
                      <SlidesEditorOverviewComponent slide={slide} order={i + 1} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

const mapStateToProps = state => ({
  slidesArray: selectEditorSlidesArray(state),
})

const mapDispatchToProps = dispatch => ({
  editCollection: () => dispatch(editorEditCollection()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SlidesEditorOverview)
