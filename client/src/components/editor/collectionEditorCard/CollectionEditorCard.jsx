import React from "react"
import { connect } from "react-redux"
import { editorEditCollection } from "../../../redux/editor/editorActions"
import { selectEditorCollection } from "../../../redux/editor/editorSelectors"
import CustomButton from "../../custom/customButton/CustomButton"
import { CustomInputWithLabel } from "../../custom/customInput/CustomInput"
import { CustomTextLarge } from "../../custom/customText/CustomText"
import { CustomTextareaWithLabel } from "../../custom/customTextarea/CustomTextarea"
import EditorButton from "../editorButton/EditorButton"

import "./collectionEditorCard.scss"

const CollectionEditorCard = ({ collection, editCollection }) => {
  const { name, description } = collection
  const edit = properties => editCollection({ properties })

  return (
    <>
      {collection.collectionEditorCardShow && (
        <div className="collection-editor-card-layer">
          <div className="collection-editor-card">
            <div className="collection-editor-card-container">
              <CustomTextLarge style={{ marginBottom: "15px" }}>UAS Hoot summary</CustomTextLarge>
              <div className="options-container">
                <CustomInputWithLabel
                  label="Name"
                  type="text"
                  value={name}
                  onChange={e => edit({ name: e.target.value })}
                  maxLength={50}
                />

                {/* <CustomSelectWithLabel
                  label="Language"
                  options={languageOptions}
                  option={language}
                  onChange={e => edit({ language: e })}
                /> */}

                <CustomTextareaWithLabel
                  styleTextarea={{ fontSize: "20px", background: "var(--color-background-2)" }}
                  label="Description"
                  type="text"
                  value={description}
                  onChange={e => edit({ description: e.target.value })}
                  maxLength={400}
                />

                {/* <CustomSelectWithLabel
                  label="Lobby Music"
                  options={musicOptions}
                  onChange={e => edit({ lobbyMusic: e })}
                  option={lobbyMusic}
                /> */}
              </div>

              <EditorButton type="COLLECTION_EDITOR_CARD_TOGGLE_SHOW" className="w-100">
                <CustomButton>OK</CustomButton>
              </EditorButton>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const mapStateToProps = state => ({
  collection: selectEditorCollection(state),
})

const mapDispatchToProps = dispatch => ({
  editCollection: properties => dispatch(editorEditCollection(properties)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionEditorCard)

// const musicOptions = [
//   { value: "cold", label: "Neffex - Cold" },
//   { value: "destiny", label: "Neffex - Destiny" },
//   { value: "rumors", label: "Neffex - Rumors" },
// ]
// const languageOptions = [
//   { value: "english", label: "English" },
//   { value: "czech", label: "Czech" },
//   { value: "germany", label: "Germany" },
// ]
