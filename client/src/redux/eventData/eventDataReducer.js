import EventDataActions from "./eventDataTypes"
import { updateDataConnect, updateDataEvent } from "./eventDataUtils"

const initialState = {
  data: null,
  isLoading: false,
  errorMessage: null,
}
const eventDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case EventDataActions.CREATE_EVENT_START:
      return { ...state, isLoading: true, errorMessage: null }
    case EventDataActions.CREATE_EVENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        data: { ...action.payload },
      }
    case EventDataActions.CREATE_EVENT_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload }

    case EventDataActions.START_EVENT_START:
    case EventDataActions.EVENT_NEXT_SLIDE_START:
    case EventDataActions.UPDATE_DATA_EVENT_START:
      return { ...state, isLoading: true, errorMessage: null }
    case EventDataActions.START_EVENT_SUCCESS:
    case EventDataActions.EVENT_NEXT_SLIDE_SUCCESS:
    case EventDataActions.UPDATE_DATA_EVENT_SUCCESS:
      return {
        ...state,
        data: updateDataEvent(state.data, action.payload),
        errorMessage: null,
        isLoading: false,
      }
    case EventDataActions.START_EVENT_FAILURE:
    case EventDataActions.EVENT_NEXT_SLIDE_FAILURE:
    case EventDataActions.UPDATE_DATA_EVENT_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload }

    case EventDataActions.UPDATE_DATA_CONNECT_START:
      return { ...state, isLoading: true, errorMessage: null }
    case EventDataActions.UPDATE_DATA_CONNECT_SUCCESS:
      return {
        ...state,
        data: updateDataConnect(state.data, action.payload),
        isLoading: false,
        errorMessage: null,
      }
    case EventDataActions.UPDATE_DATA_CONNECT_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload }
    default:
      return state
  }
}

export default eventDataReducer
