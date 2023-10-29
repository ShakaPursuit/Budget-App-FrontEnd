import React from "react";



const LoginForm=()=>{





    return(<>
    <div id="login">
    <form className="lf">
        <label>UserName:
        </label>
            <input id="userName" type="text"></input><br></br>
            <label>Password:
        </label>
            <input  id="password"type="password"></input><br></br>
            <button type="submit">Login</button>
        
        
        </form></div></>)
}

export default LoginForm