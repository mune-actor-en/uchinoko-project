import React,{ FC } from 'react';
import { SignUp } from './templates/index'

const App: FC = () => {
  return (
    <div className="App" id="Uchinoko">
      <SignUp email={"foo"} password={"bar"} comfirmPassword={"bar"}/>
    </div>
  );
}

export default App;
