import React, {useState}from 'react'

const Registartion= (props) =>{

    const [username,setUserName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email); 
        
     } 

  return (
    <>
    <form className='container' onSubmit={handleSubmit}  >
        <div className='header'>
            <h1><u>Registartion Form</u></h1>
        </div>
        <input type='text' placeholder='enter your name' 
        name='name' value={username} onChange={(e) => setUserName(e.target.value)}></input> <br/>
        <br/>
        <input type='text' placeholder='enter your Email' name='E-mail'
        value={email} onChange={(e) =>setEmail(e.target.value)}></input> <br/> <br/>
        <input type='text' placeholder='enter your possword' name='possword'
        value={password} onChange= {(e) => setPassword(e.target.value)} ></input> <br/>

        <input type='submit'  className='btn1' onClick={()=>{props.onFormSwitch('login')}} />
    </form>
    </>
    )
}

export default Registartion;