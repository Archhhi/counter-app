import React, {ChangeEvent, useState} from "react";
import s from './SettingBlock.module.css';
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {controlAC, statusChangeAC} from "../../redux/actions/addcountAC";
import {StateType} from "../../redux/store";
import {CounterStateType} from "../../redux/reducers/counter-reducer";

export function SettingBlock() {

  const dispatch = useDispatch<Dispatch>()
  const state = useSelector<StateType, CounterStateType>(state => state.counter)

  let [maxValue, setMaxValue] = useState(state.maxValue)
  let [startValue, setStartValue] = useState(state.startValue)

  function onChangeMaxValue(e: ChangeEvent<HTMLInputElement>) {
    setMaxValue(+e.currentTarget.value)
    if (+e.currentTarget.value < 1 || +e.currentTarget.value <= startValue) {
      dispatch(statusChangeAC('error'))
    } else {
      dispatch(statusChangeAC('setting'))
    }
  }

  function onChangeStartValue(e: ChangeEvent<HTMLInputElement>) {
    setStartValue(+e.currentTarget.value)
    if (+e.currentTarget.value < 0 || +e.currentTarget.value >= maxValue) {
      dispatch(statusChangeAC('error'))
    } else {
      dispatch(statusChangeAC('setting'))
    }
  }

  function onClickFunction() {
    dispatch(controlAC(maxValue, startValue))
    dispatch(statusChangeAC('ok'))
  }

  return (
    <div className={s.container}>
      <div className={s.window_settings}>
        <div className={s.setting_max_value}>
          <span className={s.params_value}>max value: </span>
          <Input value={maxValue}
                 name={'maxValue'}
                 status={state.status}
                 onChange={onChangeMaxValue}
          />
        </div>
        <div className={s.setting_start_value}>
          <span className={s.params_value}>start value: </span>
          <Input value={startValue}
                 name={'startValue'}
                 status={state.status}
                 onChange={onChangeStartValue}
          />
        </div>
      </div>
      <div className={s.container_btn}>
        <Button name={'set'}
                startValue={state.startValue}
                maxValue={state.maxValue}
                changeCount={onClickFunction}
                disabled={state.status === 'error'}
        />
      </div>
    </div>
  )
}