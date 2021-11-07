import EventDataActions from "./eventDataTypes"
import { updateDataConnect, updateDataEvent } from "./eventDataUtils"

const initialState = {
  data: undefined,
  isCreatingEvent: false,
  isStartingEvent: false,
  isUpdatingConnect: false,
  isUpdatingEvent: false,
  errorMessage: undefined,
}
const eventDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case EventDataActions.CREATE_EVENT_START:
      return { ...state, isCreatingEvent: true, errorMessage: undefined }
    case EventDataActions.CREATE_EVENT_SUCCESS:
      return {
        ...state,
        isCreatingEvent: false,
        errorMessage: undefined,
        data: { ...action.payload },
      }
    case EventDataActions.CREATE_EVENT_FAILURE:
      return { ...state, isCreatingEvent: false, errorMessage: action.payload }

    case EventDataActions.START_EVENT_START:
      return { ...state, isStartingEvent: true, errorMessage: undefined }
    case EventDataActions.START_EVENT_SUCCESS:
      return {
        ...state,
        data: updateDataEvent(state.data, action.payload),
        errorMessage: undefined,
        isStartingEvent: false,
      }
    case EventDataActions.START_EVENT_FAILURE:
      return { ...state, isStartingEvent: false, errorMessage: action.payload }

    case EventDataActions.UPDATE_DATA_CONNECT_START:
      return { ...state, isUpdatingConnect: true, errorMessage: undefined }
    case EventDataActions.UPDATE_DATA_CONNECT_SUCCESS:
      return {
        ...state,
        data: updateDataConnect(state.data, action.payload),
        isUpdatingConnect: false,
        errorMessage: undefined,
      }
    case EventDataActions.UPDATE_DATA_CONNECT_FAILURE:
      return { ...state, isUpdatingConnect: false, errorMessage: action.payload }

    case EventDataActions.UPDATE_DATA_EVENT_START:
      return { ...state, isUpdatingEvent: true, errorMessage: undefined }
    case EventDataActions.UPDATE_DATA_EVENT_SUCCESS:
      return {
        ...state,
        data: updateDataEvent(state.data, action.payload),
        isUpdatingEvent: false,
        errorMessage: undefined,
      }
    case EventDataActions.UPDATE_DATA_EVENT_FAILURE:
      return { ...state, isUpdatingEvent: false, errorMessage: action.payload }
    default:
      return state
  }
}

export default eventDataReducer
