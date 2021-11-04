import EventHostPropertiesActions from "./eventHostPropertiesTypes"

const initialState = {
  properties: undefined,
  isCreatingEvent: false,
  errorMessage: undefined,
}
const eventHostPropertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case EventHostPropertiesActions.CREATE_EVENT_START:
      return { ...state, isCreatingEvent: true, errorMessage: undefined }
    case EventHostPropertiesActions.CREATE_EVENT_SUCCESS:
      return {
        ...state,
        isCreatingEvent: false,
        errorMessage: undefined,
        properties: { ...action.payload },
      }
    case EventHostPropertiesActions.CREATE_EVENT_FAILURE:
      return { ...state, isCreatingEvent: false, errorMessage: action.payload }
    default:
      return state
  }
}

export default eventHostPropertiesReducer
