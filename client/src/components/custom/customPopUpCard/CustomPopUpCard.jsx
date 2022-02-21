import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import {
  deleteCollectionStart,
  saveCollectionStart,
} from "../../../redux/collections/collectionsActions"
import { hidePopUpCard } from "../../../redux/localSetting/localSettingActions"
import { selectLocalSettingPopUpCard } from "../../../redux/localSetting/localSettingSelectors"
import ROUTES from "../../../routes/routes"
import CustomButton from "../customButton/CustomButton"
import { CustomTextLarge } from "../customText/CustomText"

import "./customPopUpCard.scss"

export const CUSTOM_POP_UP_CARD_ACTIONS = {
  DELETE_COLLECTION: "DELETE_COLLECTION",
  EXIT_EVENT_EDITOR: "EXIT_EVENT_EDITOR",
}

const CustomPopUpCard = ({
  popUpCard,
  hidePopUpCard,
  deleteCollection,
  history,
  saveCollection,
}) => {
  if (!popUpCard.show) return <></>

  if (popUpCard.action.type === CUSTOM_POP_UP_CARD_ACTIONS.DELETE_COLLECTION)
    return (
      <div className="custom-pop-up-card-background-layer">
        <div className="custom-pop-up-card">
          <CustomTextLarge>Delete Collection</CustomTextLarge>
          <p>
            Are you sure you want to delete this collection? It will no longer be possible to
            recover this collection! Make sure you delete the posts you really want!
          </p>
          <div className="buttons">
            <CustomButton
              style={{ background: "var(--color-background-3)", color: "var(--color-text-2)" }}
              onClick={() => hidePopUpCard()}
            >
              Cancel
            </CustomButton>
            <CustomButton
              onClick={() => {
                const collectionId = popUpCard.action.collectionId
                if (collectionId) {
                  deleteCollection(popUpCard.action.collectionId)
                  hidePopUpCard()
                } else {
                  hidePopUpCard()
                }
              }}
              className="danger"
            >
              Delete
            </CustomButton>
          </div>
        </div>
      </div>
    )
  if (popUpCard.action.type === CUSTOM_POP_UP_CARD_ACTIONS.EXIT_EVENT_EDITOR)
    return (
      <div className="custom-pop-up-card-background-layer">
        <div className="custom-pop-up-card">
          <CustomTextLarge>Exit editor</CustomTextLarge>
          <div className="buttons">
            <CustomButton
              onClick={() => {
                const collectionId = popUpCard.action.collectionId

                console.log(collectionId)
                if (collectionId) {
                  saveCollection(collectionId)
                }
                hidePopUpCard()
                history.push(ROUTES.LIBRARY.RECENT)
              }}
            >
              Exit And Save
            </CustomButton>
            <CustomButton
              onClick={() => {
                history.push(ROUTES.LIBRARY.RECENT)
                hidePopUpCard()
              }}
              className="danger"
            >
              Exit
            </CustomButton>
          </div>
        </div>
      </div>
    )

  return <>Option was not found!</>
}

const mapStateToProps = state => ({
  popUpCard: selectLocalSettingPopUpCard(state),
})

const mapDispatchToProps = dispatch => ({
  hidePopUpCard: () => dispatch(hidePopUpCard()),
  deleteCollection: collectionId => dispatch(deleteCollectionStart({ collectionId })),
  saveCollection: collectionId => dispatch(saveCollectionStart({ collectionId })),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomPopUpCard))
