import React,{ FC } from 'react';
import { SignUp,SignIn,TimeLine } from './templates/index'

const App: FC = () => {
  return (
    <div className="App" id="Uchinoko">
      <TimeLine />
      <SignUp email={"foo"} password={"bar"} comfirmPassword={"bar"}/>
      <SignIn email={"foo"} password={"bar"} />
    </div>
  );
}

export default App;