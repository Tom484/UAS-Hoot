import EventHostPropertiesActions from "./eventHostPropertiesTypes"
import { updatePropertiesConnect, updatePropertiesEvent } from "./eventHostPropertiesUtils"

const initialState = {
  properties: undefined,
  isCreatingEvent: false,
  isStartingEvent: false,
  isUpdatingConnect: false,
  isUpdatingEvent: false,
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

    case EventHostPropertiesActions.START_EVENT_START:
      return { ...state, isStartingEvent: true, errorMessage: undefined }
    case EventHostPropertiesActions.START_EVENT_SUCCESS:
      return { ...state }
    case EventHostPropertiesActions.START_EVENT_FAILURE:
      return { ...state, isStartingEvent: false, errorMessage: action.payload }

    case EventHostPropertiesActions.UPDATE_HOST_PROPERTIES_CONNECT_START:
      return { ...state, isUpdatingConnect: true, errorMessage: undefined }
    case EventHostPropertiesActions.UPDATE_HOST_PROPERTIES_CONNECT_SUCCESS:
      return {
        ...state,
        properties: updatePropertiesConnect(state.properties, action.payload),
        isUpdatingConnect: false,
        errorMessage: undefined,
      }
    case EventHostPropertiesActions.UPDATE_HOST_PROPERTIES_CONNECT_FAILURE:
      return { ...state, isUpdatingConnect: false, errorMessage: action.payload }

    case EventHostPropertiesActions.UPDATE_HOST_PROPERTIES_EVENT_START:
      return { ...state, isUpdatingEvent: true, errorMessage: undefined }
    case EventHostPropertiesActions.UPDATE_HOST_PROPERTIES_EVENT_SUCCESS:
      return {
        ...state,
        properties: updatePropertiesEvent(state.properties, action.payload),
        isUpdatingEvent: false,
        errorMessage: undefined,
      }
    case EventHostPropertiesActions.UPDATE_HOST_PROPERTIES_EVENT_FAILURE:
      return { ...state, isUpdatingEvent: false, errorMessage: action.payload }
    default:
      return state
  }
}

export default eventHostPropertiesReducer
