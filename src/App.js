import React from 'react';

import logo from './logo.svg';
import './App.css'; 
import Home from './Miniprogect1/Pages/Home';
import About from './Miniprogect1/Pages/About';
import Contact from './Miniprogect1/Pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from 'react-router-dom';
import Nav from './Miniprogect1/Dashbord';
import LoginPage from './Miniprogect1/LoginPage';
function App() {
 return (
<React.Fragment>
<Nav/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/loginpage' element={<LoginPage/>}/>
    </Routes>
</React.Fragment>
  );
}

export default App;
