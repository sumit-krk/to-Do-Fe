import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../feature/signup/authSlice";
import { Link, Navigate } from "react-router-dom";


const Navbar = () => {
import { Link, useNavigate } from "react-router-dom";
import { resetProfileState } from "../../feature/getProfile/getProfileSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getProfileState = useSelector(
    (state) => state.getProfileState
  );

  const handleLogout = () => {
    localStorage.removeItem("token");     // 1️⃣ remove token
    dispatch(resetProfileState());         // 2️⃣ clear redux
    navigate("/login");                    // 3️⃣ redirect
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        height: "8vh",
        backgroundColor: "navy",
        color: "white",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        position: "sticky",
        top: "0",
        zIndex:"1"
      }}
    >
      <div>
        <Link to="/todo" style={{ textDecoration: "none", color: "white" }}>
          To-Do
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        <button
          style={{
            background: "none",
            padding: "8px",
            textAlign: "center",
            borderRadius: "8px",
            margin:"8px",
            border:"none"
          }}
        >
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            Login
          </Link>
        </button>
        <button style={{
            background: "none",
            padding: "8px",
            textAlign: "center",
            borderRadius: "8px",
            margin:"8px",
            border:"none"
          }}>
          <Link to="/signup" style={{ textDecoration: "none", color: "white" }}>
            Signup
          </Link>
        </button>
      </div>
        padding: "10px",
        borderBottom: "1px solid gray",
        height: "4vh",
        backgroundColor: "red",
      }}
    >
      <div>
        <Link to="/todo">To-Do</Link>
      </div>

      {!getProfileState?.list?.success ? (
        <div>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/profile">
            <button>Profile</button>
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
