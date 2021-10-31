import React from "react"
import { connect } from "react-redux"
import { editorEditCollection } from "../../../redux/editor/editorActions"
import { selectEditorCollection } from "../../../redux/editor/editorSelectors"
import CustomSelectBox from "../../components/customSelectBox/CustomSelectBox"
import EditorButton from "../editorButton/EditorButton"

import "./collectionEditorCard.scss"

const CollectionEditorCard = ({ collection, editCollection }) => {
  const { name, description, language, lobbyMusic } = collection
  const edit = properties => editCollection({ properties })

  return (
    <>
      {collection.collectionEditorCardShow && (
        <div className="collection-editor-card-layer">
          <div className="collection-editor-card">
            <div className="collection-editor-card-container">
              <div className="title">
                <h2>UAS Hoot summary</h2>
              </div>

              <div className="options-container">
                <div className="box">
                  <div className="label">Title</div>
                  <input
                    type="text"
                    className="input-basic input-100"
                    value={name}
                    onChange={e => edit({ name: e.target.value })}
                    maxLength={50}
                  />
                </div>

                <div className="box">
                  <div className="label">Language</div>
                  <CustomSelectBox
                    options={languageOptions}
                    value={language}
                    onChange={e => edit({ language: e })}
                  />
                </div>

                <div className="box">
                  <div className="label">Description</div>
                  <textarea
                    type="text"
                    className="textarea-basic w-100"
                    value={description}
                    onChange={e => edit({ description: e.target.value })}
                    maxLength={400}
                  />
                </div>

                <div className="box">
                  <div className="label">Lobby Music</div>
                  <CustomSelectBox
                    options={musicOptions}
                    value={lobbyMusic}
                    onChange={e => edit({ lobbyMusic: e })}
                  />
                </div>
              </div>

              <div className="buttons">
                <EditorButton type="COLLECTION_EDITOR_CARD_TOGGLE_SHOW" className="w-100" />
              </div>
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

const musicOptions = [
  { value: "cold", label: "Neffex - Cold" },
  { value: "destiny", label: "Neffex - Destiny" },
  { value: "rumors", label: "Neffex - Rumors" },
]
const languageOptions = [
  { value: "english", label: "English" },
  { value: "czech", label: "Czech" },
  { value: "germany", label: "Germany" },
]
