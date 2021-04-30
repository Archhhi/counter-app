import React, {ChangeEvent, useState} from "react";
import s from './SettingBlock.module.css';
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";

type PropsType = {
  maxValue: number
  startValue: number
  status: 'setting' | 'error' | 'ok'
  addCount: () => void
  resetCount: () => void
  setStatus: (value: 'setting' | 'error' | 'ok') => void
  control: (startValue: number, maxValue: number) => void
}

export function SettingBlock(props: PropsType) {
  let [maxValue, setMaxValue] = useState(props.maxValue)
  let [startValue, setStartValue] = useState(props.startValue)

  function onChangeMaxValue(e: ChangeEvent<HTMLInputElement>) {
    setMaxValue(+e.currentTarget.value)
    if (+e.currentTarget.value < 1 || +e.currentTarget.value <= startValue) {
      props.setStatus('error')
    } else {
      props.setStatus('setting')
    }
  }

  function onChangeStartValue(e: ChangeEvent<HTMLInputElement>) {
    setStartValue(+e.currentTarget.value)
    if (+e.currentTarget.value < 0 || +e.currentTarget.value >= maxValue) {
      props.setStatus('error')
    } else {
      props.setStatus('setting')
    }
  }

  function onClickFunction() {
    props.control(maxValue, startValue)
    props.setStatus('ok')
  }

  return (
    <div className={s.container}>
      <div className={s.window_settings}>
        <div className={s.setting_max_value}>
          <span className={s.params_value}>max value: </span>
          <Input value={maxValue}
                 name={'maxValue'}
                 status={props.status}
                 onChange={onChangeMaxValue}
          />
        </div>
        <div className={s.setting_start_value}>
          <span className={s.params_value}>start value: </span>
          <Input value={startValue}
                 name={'startValue'}
                 status={props.status}
                 onChange={onChangeStartValue}
          />
        </div>
      </div>
      <div className={s.container_btn}>
        <Button name={'set'}
                startValue={props.startValue}
                maxValue={props.maxValue}
                changeCount={onClickFunction}
                disabled={props.status === 'error'}
        />
      </div>
    </div>
  )
}