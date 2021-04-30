import React, {ChangeEvent} from "react";
import s from './Input.module.css'

type PropsType = {
  value: number
  status: string
  name: string
  onChange: (value: ChangeEvent<HTMLInputElement>) => void
}

export function Input(props: PropsType) {
  let classes = props.status === 'error' && props.name === 'startValue'
    ? s.input_red
    : props.status === 'error' && props.name === 'maxValue'
      ? s.input_red
      : ''
  return (
    <>
      <div>
        <input
          className={classes + ' ' + s.setting_input}
          type="number"
          {...props}
        />
      </div>
    </>
  )
}