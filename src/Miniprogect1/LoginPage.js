import React,{useState} from 'react';

import Registartion from './Registartion';
import Login from './Login';
function LoginPage() {
    const [currentForm, setCurrentForm]=useState('login');

    const  mainForm=(form)=>{
       setCurrentForm(form);
     }
  return (
    <div className="App">
    {currentForm === 'login'?  <Login onFormSwitch={mainForm}/>:   <Registartion onFormSwitch={mainForm}/>}
  </div>
  )
}

export default LoginPage;