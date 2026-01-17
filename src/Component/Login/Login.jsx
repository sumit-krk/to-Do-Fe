import React, { useEffect, useState } from "react";
import "./Login.css";
import { loginUser, resetLoginState } from "../../feature/login/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../feature/getProfile/getProfileSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("kush@gmail.com");
    const [password, setPassword] = useState("Kush@123");
    const loginUserState = useSelector((state)=> state.loginUserState)
    const navigate = useNavigate();
    console.log(loginUserState,"loginUserState");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("seeData",{ email, password });
        dispatch(
            loginUser({
                "email": email,
                "password": password,
            })
        );
    };

    useEffect(()=>{
      if(loginUserState.signupSuccess) {
        localStorage.setItem("token", loginUserState.token);
        navigate("/todo");
        dispatch(resetLoginState());
      }
 
    },[loginUserState]);

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="login-title">Welcome Back 👋</h2>
        <p className="login-subtitle">Login to continue</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
