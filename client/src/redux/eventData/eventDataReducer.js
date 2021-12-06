import EventDataActions from "./eventDataTypes"
import { updateDataConnect, updateDataEvent } from "./eventDataUtils"

const initialState = {
  data: undefined,
  isLoading: false,
  errorMessage: undefined,
}
const eventDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case EventDataActions.CREATE_EVENT_START:
      return { ...state, isLoading: true, errorMessage: undefined }
    case EventDataActions.CREATE_EVENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: undefined,
        data: { ...action.payload },
      }
    case EventDataActions.CREATE_EVENT_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload }

    case EventDataActions.START_EVENT_START:
      return { ...state, isLoading: true, errorMessage: undefined }
    case EventDataActions.START_EVENT_SUCCESS:
      return {
        ...state,
        data: updateDataEvent(state.data, action.payload),
        errorMessage: undefined,
        isLoading: false,
      }
    case EventDataActions.START_EVENT_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload }

    case EventDataActions.UPDATE_DATA_CONNECT_START:
      return { ...state, isLoading: true, errorMessage: undefined }
    case EventDataActions.UPDATE_DATA_CONNECT_SUCCESS:
      return {
        ...state,
        data: updateDataConnect(state.data, action.payload),
        isLoading: false,
        errorMessage: undefined,
      }
    case EventDataActions.UPDATE_DATA_CONNECT_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload }

    case EventDataActions.UPDATE_DATA_EVENT_START:
      return { ...state, isLoading: true, errorMessage: undefined }
    case EventDataActions.UPDATE_DATA_EVENT_SUCCESS:
      return {
        ...state,
        data: updateDataEvent(state.data, action.payload),
        isLoading: false,
        errorMessage: undefined,
      }
    case EventDataActions.UPDATE_DATA_EVENT_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload }
    default:
      return state
  }
}

export default eventDataReducer
