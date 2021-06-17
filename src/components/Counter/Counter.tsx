import React from "react";
import s from './Counter.module.css'
import {Button} from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {addCountAC, resetCountAC} from "../../redux/actions/addcountAC";
import {StateType} from "../../redux/store";
import {CounterStateType} from "../../redux/reducers/counter-reducer";

export function Counter() {

  const dispatch = useDispatch()
  const state = useSelector<StateType, CounterStateType>(state => state.counter)

  const classes = state.startValue === state.maxValue || state.status === 'error'
    ? s.count_red
    : ''
  const classes_2 = state.status !== 'ok'
    ? s.message
    : s.count

  const addCount = () => {
    dispatch(addCountAC())
  }
  const resetCount = () => {
    dispatch(resetCountAC())
  }

  return (
    <div className={s.container}>
      <div className={s.scoreboard}>
        <span className={classes + ' ' + classes_2}>
          {
            state.status === 'ok'
              ? state.startValue
              : state.status === 'error'
              ? 'Incorrect value!'
              : `enter values and press 'set'`
          }
        </span>
      </div>
      <div className={s.container_btn}>
        <Button name={'inc'}
                startValue={state.startValue}
                maxValue={state.maxValue}
                changeCount={addCount}
                disabled={state.startValue === state.maxValue ? true : false}
        />
        <Button name={'reset'}
                startValue={state.startValue}
                maxValue={state.maxValue}
                changeCount={resetCount}
                disabled={state.startValue === 0 ? true : false}
        />
      </div>
    </div>
  )
}