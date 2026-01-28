import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../../feature/getProfile/getProfileSlice";

import "./Body.css";

export default function Body() {
    const dispatch = useDispatch();
    return <div style={{margin:"0px"}}>
        <Navbar />
        <div style={{height:"calc(96vh - 40px)", boxSizing:"border-box", display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign:"center", margin:"16px"}}>
            <h2>Welcome to</h2>
            <h1>Todo App</h1>
            <p>Please Login/sign-up to use Todo App...</p>
            <Outlet/>
        </div>
    </div>
  }