import { createSelector } from "reselect"

const selectCollections = state => state.collections

export const selectUserCollections = createSelector(
  [selectCollections],
  collections => collections.userCollections
)

export const selectUserCollection = collectionId =>
  createSelector([selectUserCollections], userCollections => userCollections[collectionId])

export const selectUserQuestionsOrder = collectionId =>
  createSelector(
    [selectUserCollection(collectionId)],
    userCollections => userCollections.questionsOrder
  )

export const selectUserQuestions = collectionId =>
  createSelector([selectUserCollection(collectionId)], userCollection => userCollection.questions)

export const selectUserQuestionsArray = collectionId =>
  createSelector(
    [selectUserQuestions(collectionId), selectUserQuestionsOrder(collectionId)],
    (questions, order) => order.map(value => questions[value])
  )

export const selectUserQuestion = (collectionId, questionOrder) =>
  createSelector(
    [selectUserQuestions(collectionId), selectUserQuestionsOrder(collectionId)],
    (userQuestions, questionsOrder) => userQuestions[questionsOrder[questionOrder - 1]]
  )

export const selectUserQuestionId = (collectionId, questionOrder) =>
  createSelector([selectUserQuestion(collectionId, questionOrder)], question => question.id)

export const selectUserAnswers = (collectionId, questionOrder) =>
  createSelector(
    [selectUserQuestion(collectionId, questionOrder)],
    userQuestion => userQuestion.answers
  )

export const selectUserAnswersArray = (collectionId, questionOrder) =>
  createSelector([selectUserAnswers(collectionId, questionOrder)], userAnswers =>
    Object.values(userAnswers)
  )
