import { userCollectionSkeleton } from "./userCollectionsSkeleton"

export const createCollection = (previousCollections, { name, creatorName }) => {
  return { ...previousCollections, ...userCollectionSkeleton(name, creatorName) }
}
