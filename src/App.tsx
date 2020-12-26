import React,{ FC } from 'react';
import { SignUp, SignIn } from './templates/index'
import { PostEdit } from './templates'

const App: FC = () => {
  return (
    <div className="App" id="Uchinoko">
      {/* <SignUp email={"foo"} password={"bar"} comfirmPassword={"bar"}/>
      <SignIn email={"foo"} password={"bar"} /> */}
      <PostEdit />
    </div>
  );
}

export default App;
