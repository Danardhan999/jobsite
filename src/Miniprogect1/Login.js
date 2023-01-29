import React,{useState}from 'react';

const Login=(props)=> {
const [email, setEmail]=useState('')
const [password, setPassword]=useState('')


const submitForm=(e)=>{
  e.preventDefault();
  console.log(email);
    if (email==0 || password==0)
    {alert('fill the blank')}
  
};

  return (
    <>
     <div className='header'>
      <form className='continer'  onSubmit={submitForm}>
     
        <h1>Login</h1>
       
        <label>EMAIL</label> 
        <input type='text' placeholder='Email Address' value={email} name='email' onChange={(e)=>setEmail(e.target.value)} />
      
        <label>Password</label> 
        <input type='password' placeholder='Password'  name='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <br/>
     
        <button type='submit'>LOGIN</button>
      </form>
        <button className='btn' onClick={()=>props.onFormSwitch('Registartion')} >Don't have an Account? Registartion here.</button>
   
   </div>
   </>
  )
}

export default Login;