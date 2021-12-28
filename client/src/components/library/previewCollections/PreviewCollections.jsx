import { withRouter } from "react-router-dom"
import PreviewCollection from "../previewCollection/PreviewCollection"

import "./previewCollections.scss"

const PreviewCollections = ({ collections }) => {
  if (!collections) return <div>Something went wrong</div>

  return (
    <div className="preview-collections">
      {collections.map(collection => (
        <PreviewCollection key={collection.id} collection={collection} />
      ))}
    </div>
  )
}
export default withRouter(PreviewCollections)
