import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Login.css";

const Login = (props) => {
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const history = useHistory();
    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        if(name === "username"){
            setUserName(value)
        }
        else{
            setPassword(value)
        }
      }
      const handleSubmit = (e)  => {
          //Type of user
        e.preventDefault();
        //here you can verfiy username and password
        if ((username === "teacher" || username === "student") && password == "123456") {
            history.push("/home");
        } 
      }
    
    return (
        <form className="form" onSubmit={(e)=> handleSubmit(e)}>
          <div className="input-container">
            <label className="label">Username: </label>
            <input
              type="text"
              name="username"
              className="input"
              placeholder="Username"
              value={username}
              onChange={(e)=> handleChange(e)}
            />
          </div>
          <div className="input-container">
            <label className="label">Password: </label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type="submit" id="login-btn">
            Login
          </button>
        </form>
      );
}

export default Login;
