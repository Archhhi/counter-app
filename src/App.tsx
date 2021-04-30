import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {SettingBlock} from "./components/SettingBlock/SettingBlock";

function App() {
  const [maxValue, setMaxValue] = useState( Number(localStorage.getItem('maxValue')) )
  const [startValue, setStartValue] = useState( Number(localStorage.getItem('startValue')) )
  const [status, setStatus] = useState<'setting' | 'error' | 'ok'>('setting')

  const addCount = () => startValue < maxValue && setStartValue(startValue + 1)

  const resetCount = () => setStartValue(0)

  const control = (maxValue: number, startValue: number) => {
    setMaxValue(+maxValue)
    localStorage.setItem('maxValue', maxValue.toString())
    setStartValue(+startValue)
    localStorage.setItem('startValue', startValue.toString())
  }

  return (
    <div className="App">
      <div className="setting_block">
        <SettingBlock maxValue={maxValue}
                      startValue={startValue}
                      status={status}
                      addCount={addCount}
                      control={control}
                      resetCount={resetCount}
                      setStatus={setStatus}
        />
      </div>
      <div className="counter">
        <Counter maxValue={maxValue}
                 startValue={startValue}
                 addCount={addCount}
                 resetCount={resetCount}
                 status={status}
        />
      </div>
    </div>
  );
}

export default App;
