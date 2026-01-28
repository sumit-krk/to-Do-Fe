import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../feature/signup/authSlice";
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
        padding: "16px",
        height: "8vh",
        backgroundColor: "navy",
        color: "white",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        position: "sticky",
        top: "0",
        zIndex: "1"
      }}
    >
      <div>
        <Link to="/todo" style={{ textDecoration: "none", color: "white",cursor:"pointer", margin:"12px" }}>
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
      </div>

      {!getProfileState?.list?.success ? (
        <div>
          <button
            style={{
              background: "none",
              padding: "8px",
              textAlign: "center",
              borderRadius: "8px",
              margin: "8px",
              border: "none",
              cursor:"pointer"
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
            margin: "8px",
            border: "none",
            cursor:"pointer"
          }}>
            <Link to="/signup" style={{ textDecoration: "none", color: "white" }}>
              Signup
            </Link>
          </button>
        </div>
      ) : (
        <div>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <button style={{
              background: "none",
              padding: "8px",
              textAlign: "center",
              borderRadius: "8px",
              margin: "8px",
              border: "none",
              color: "white",
              cursor:"pointer"
            }}>Profile</button>
          </Link>
          <button onClick={handleLogout} style={{
              background: "none",
              padding: "8px",
              textAlign: "center",
              borderRadius: "8px",
              margin: "8px",
              border: "none",
              color: "white",
              cursor:"pointer"
            }}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
