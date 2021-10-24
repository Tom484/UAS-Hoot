import React from "react"

import "./editCollection.scss"
import Select from "react-select"
import { connect } from "react-redux"
import { editCollection } from "../../../redux/collections/collectionsActions"
import { withRouter } from "react-router-dom"
import { selectUserCollection } from "../../../redux/collections/collectionsSelectors"

const EditCollection = ({ collection, editCollection, collectionId, match }) => {
  const { name, description, language, lobbyMusic } = collection
  collectionId = collectionId || match.params.collectionId

  const edit = properties => editCollection({ properties, collectionId })

  return (
    <>
      {collection.collectionSettingCardVisible && (
        <div className="edit-collection-layer">
          <div className="edit-collection">
            <div className="edit-collection-container">
              <div className="title">
                <h2>UAS Hoot summary</h2>
              </div>
              <div className="setting-container">
                <div className="box">
                  <div className="label">Title</div>
                  <input
                    type="text"
                    className="input-basic input-100"
                    value={name}
                    onChange={e => edit({ name: e.target.value })}
                  />
                </div>

                <div className="box">
                  <div className="label">Language</div>
                  <Select
                    options={languageOptions}
                    theme={theme}
                    value={language}
                    onChange={e => edit({ language: e })}
                  />
                </div>

                <div className="box">
                  <div className="label">Description</div>
                  <textarea
                    type="text"
                    className="textarea-basic textarea-100"
                    value={description}
                    onChange={e => edit({ description: e.target.value })}
                  />
                </div>

                <div className="box">
                  <div className="label">Lobby Music</div>
                  <Select
                    options={musicOptions}
                    theme={theme}
                    value={lobbyMusic}
                    onChange={e => edit({ lobbyMusic: e })}
                  />
                </div>
              </div>

              <div className="buttons">
                <button
                  onClick={() => edit({ collectionSettingCardVisible: false })}
                  className="button-basic button-100"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { collectionId } = ownProps.match.params

  return {
    collection: selectUserCollection(collectionId)(state),
  }
}

const mapDispatchToProps = dispatch => ({
  editCollection: id => dispatch(editCollection(id)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditCollection))

const theme = theme => ({
  ...theme,
  borderRadius: 4,
  colors: {
    ...theme.colors,
    primary75: "#e9e9e9",
    primary50: "#e9e9e9",
    primary25: "#e9e9e9",
    primary: "#6070ff",
  },
})

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