import { Routes, Route } from "react-router-dom";
import Body from "./Component/Body/Body";
import Login from "./Component/Login/Login";
import Signup from "./Component/Signup/Signup";
import Todo from "./Component/Todo/Todo";
import Profile from "./Component/Profile/Profile";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Body />}>
        {/* PUBLIC ROUTES */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />

        {/* PROTECTED ROUTES */}
        <Route element={<ProtectedRoute />}>
          <Route path="todo" element={<Todo />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
