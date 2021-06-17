export enum ACTION_TYPE {
  ADD_COUNT = 'ADD_COUNT',
  RESET_COUNT = 'RESET_COUNT',
  STATUS_CHANGE = 'STATUS_CHANGE',
  CONTROL = 'CONTROL'
}

export type AddCountACType = {
  type: ACTION_TYPE.ADD_COUNT
}
export type ResetCountACType = {
  type: ACTION_TYPE.RESET_COUNT
}
export type StatusChangeACType = {
  type: ACTION_TYPE.STATUS_CHANGE
  status: 'setting' | 'error' | 'ok'
}
export type ControlACType = {
  type: ACTION_TYPE.CONTROL
  maxValue: number
  startValue: number
}

export type ActionTypes = AddCountACType | ResetCountACType | StatusChangeACType | ControlACType

export const addCountAC = (): ActionTypes => {
  debugger
  return {
    type: ACTION_TYPE.ADD_COUNT
  }
}
export const resetCountAC = (): ActionTypes => ({
  type: ACTION_TYPE.RESET_COUNT
})
export const statusChangeAC = (status: 'setting' | 'error' | 'ok'): ActionTypes => ({
  type: ACTION_TYPE.STATUS_CHANGE,
  status
})
export const controlAC = (maxValue: number, startValue: number): ActionTypes => ({
  type: ACTION_TYPE.CONTROL,
  maxValue,
  startValue
})