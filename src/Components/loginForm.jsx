import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const LoginForm=()=>{


    const [inputValues, setInputValues] = useState({
        username: '', password: ''
      });
      
      const handleChange = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
      };

      const navigate=useNavigate()
      const handleSubmit=(e)=>{
        e.preventDefault()

      const username='Shaka.L@budgetapp.com'
      const password='testing123'

      if(username===inputValues.username && password===inputValues.password){


        navigate(`/transactions`)
      
  }else{
   
      

      alert('ENTER CORRECT UserName & Password')
  }
      
      }




      

    return(<>
    
    <div id="login-background"  >
   

    <div id="login">
    <form className="lf" onSubmit={handleSubmit}>
        <label>UserName:
        </label>
            <input name="username" id="userName" type="text" onChange={handleChange}></input><br></br>
            <label>Password:
        </label>
            <input  name="password"  id="password"type="password" onChange={handleChange}></input><br></br>
            <button type="submit">Login</button>
        
        
        </form></div></div>
        
        </>)
}

export default LoginForm