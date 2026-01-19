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
        <div style={{height:"calc(96vh - 40px)", boxSizing:"border-box"}}>
            <Outlet/>
        </div>
    </div>
  }