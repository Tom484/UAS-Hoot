import { withRouter } from "react-router-dom"
import PreviewCollection from "../previewCollection/PreviewCollection"
import PreviewCollectionCreate from "../previewCollectionCreate/PreviewCollectionCreate"

import "./previewCollections.scss"

const PreviewCollections = ({ collections }) => {
  if (!collections) return <div>Something went wrong</div>

  return (
    <div className="preview-collections">
      <PreviewCollectionCreate />
      {collections.map(collection => (
        <PreviewCollection key={collection.id} collection={collection} />
      ))}
    </div>
  )
}
export default withRouter(PreviewCollections)
