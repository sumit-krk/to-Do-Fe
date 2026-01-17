import { useDispatch, useSelector } from "react-redux";
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
