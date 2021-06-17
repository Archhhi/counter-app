import {ACTION_TYPE, ActionTypes} from "../actions/addcountAC";

export type CounterStateType = {
  maxValue: number
  startValue: number
  status: string
}

const initialState: CounterStateType = {
  maxValue: 5,
  startValue: 1,
  status: 'setting'
}

const counterReducer = (state = initialState, action: ActionTypes): CounterStateType => {
  switch (action.type) {
    case ACTION_TYPE.ADD_COUNT:
      if (state.startValue < state.maxValue) {
        debugger
        return {
          ...state,
          startValue: state.startValue + 1
        }
      }
      debugger
      return state
    case ACTION_TYPE.RESET_COUNT:
      return {
        ...state,
        startValue: 0
      }
    case ACTION_TYPE.CONTROL:
      return {
        ...state,
        maxValue: action.maxValue,
        startValue: action.startValue
      }
    case ACTION_TYPE.STATUS_CHANGE:
      return {
        ...state,
        status: action.status
      }
    default:
      return state
  }
}

export default counterReducer;