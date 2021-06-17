import React from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {SettingBlock} from "./components/SettingBlock/SettingBlock";

function App() {

  return (
    <div className="App">
      <div className="setting_block">
        <SettingBlock/>
      </div>
      <div className="counter">
        <Counter/>
      </div>
    </div>
  );
}

export default App;
