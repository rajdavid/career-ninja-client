
import './App.scss';
import React, {useState} from "react";

function App() {
  const [loginState, setLoginState] = React.useState({
    email: "",
    password: '',
  });

  const onValueChange = async (e) => {
    console.log('e target id', e.target.id);
    setLoginState({
      ...loginState,
      [e.target.id]:e.target.value,
    })
  }
  const handleLogin = async (e) => {
    console.log('inside login');
    console.log('login state  ---', loginState);
    // some comments

  }
  return (
    <div className="main">
      <div className="left">
<img src="/career.png" alt=""/>
      </div>
      <div className="right">
        <p className="emaillabel">Login via E-mail</p>
        <div className="formgroup">
          <label >Email Address</label>
          <input type="email" placeholder="Your primary address" id="email" onChange={onValueChange}/>
        </div>
        <div className="formgroup">
          <label>Password</label>
          <input type="password" placeholder="must be 8 digits or more" id="password" onChange={onValueChange}/>
        </div>
        <div className="formgroup">
          <span className="loginbtn" onClick={handleLogin}>Log In</span>
        </div>
      </div>
 
    </div>
  );
}
export default App;
