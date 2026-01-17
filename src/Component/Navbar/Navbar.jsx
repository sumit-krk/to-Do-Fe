import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../feature/signup/authSlice";
import { Link, Navigate } from "react-router-dom";
const Navbar = () => {
    return (
        <div style={{display:"flex",justifyContent:"space-between",padding:"10px",borderBottom:"1px solid gray", height:'4vh', backgroundColor:'red'}}>
            <div>To-Do</div>
            <div>
                <button><Link to="/login">Login</Link></button>
                <button><Link to="/signup">Signup</Link></button>
            </div>
        </div>
    )
}

export default Navbar;