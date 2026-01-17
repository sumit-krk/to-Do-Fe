import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Body() {
    return <div>
        <Navbar />
        <div style={{height:"calc(96vh - 40px)", boxSizing:"border-box"}}>
            <Outlet/>
        </div>
    </div>
  }