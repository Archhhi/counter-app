import React from "react";
import s from './Button.module.css'

type PropsType = {
  name: string
  startValue: number
  maxValue: number
  disabled: boolean
  changeCount: (value: any) => void
}

export function Button(props: PropsType) {
  return (
    <>
      <div className={s.btn}>
        <button
          onClick={props.changeCount}
          disabled={props.disabled}
        >
          <span className={s.btn_text}>{props.name}</span>
        </button>
      </div>
    </>
  )
}