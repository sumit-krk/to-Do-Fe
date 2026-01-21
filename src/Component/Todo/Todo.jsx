import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfile } from "../../feature/getProfile/getProfileSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  console.log("Todo component token:", token);
  useEffect(() => {
    if (token) {
      dispatch(getProfile());
    }
  }, [token]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>To do App</h2>
      <div
        style={{
          background: "#fff",
          width: "360px",
          margin: "20px auto",
          padding: "30px",
          borderRadius: "16px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
        }}
      >
        <form>
          <label htmlFor="todoInput">Enter your Todo :- </label>
          <input
            type="text"
            name="todoInput"
            id=""
            placeholder="Write here"
            value={""}
          />
          <button onSubmit={() => {}} type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Todo;
