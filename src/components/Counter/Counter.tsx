import React from "react";
import s from './Counter.module.css'
import {Button} from "../Button/Button";

type PropsType = {
  maxValue: number
  startValue: number
  status: 'setting' | 'error' | 'ok'
  addCount: () => void
  resetCount: () => void
}

export function Counter(props: PropsType) {

  const classes = props.startValue === props.maxValue || props.status === 'error'
    ? s.count_red
    : ''
  const classes_2 = props.status !== 'ok'
    ? s.message
    : s.count

  return (
    <div className={s.container}>
      <div className={s.scoreboard}>
        <span className={classes + ' ' + classes_2}>
          {
            props.status === 'ok'
              ? props.startValue
              : props.status === 'error'
              ? 'Incorrect value!'
              : `enter values and press 'set'`
          }
        </span>
      </div>
      <div className={s.container_btn}>
        <Button name={'inc'}
                startValue={props.startValue}
                maxValue={props.maxValue}
                changeCount={props.addCount}
                disabled={props.startValue === props.maxValue ? true : false}
        />
        <Button name={'reset'}
                startValue={props.startValue}
                maxValue={props.maxValue}
                changeCount={props.resetCount}
                disabled={props.startValue === 0 ? true : false}
        />
      </div>
    </div>
  )
}