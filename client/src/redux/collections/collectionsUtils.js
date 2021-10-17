import { collectionSkeleton } from "./collectionsSkeleton"

export const createCollection = (previousCollections, { name, creatorName }) => {
  return { ...previousCollections, ...collectionSkeleton(name, creatorName) }
}
