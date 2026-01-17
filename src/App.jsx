import { Routes, Route } from "react-router-dom";
import Body from "./Component/Body/Body";
import Login from "./Component/Login/Login";
import Signup from "./Component/Signup/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Body />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;
