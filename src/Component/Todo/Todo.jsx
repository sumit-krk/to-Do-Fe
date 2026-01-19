import {React , useState} from 'react'

const Todo = () => {

  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo(e.target.value);
    console.log(e.target.value, "value:-");
  }

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getProfile } from '../../feature/getProfile/getProfileSlice';

const Todo = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  console.log("Todo component token:", token);
  useEffect(()=>{
      if(token){
          dispatch(getProfile())
      }
  },[token])
  return (
    <div style={{textAlign:"center", marginTop:"20px" }}>
      <h2>To do App</h2>
      <div style={{border:"1px solid black", width:"50%", margin:"20px auto", padding:"20px", borderRadius:"8px"}}><form>
        <label htmlFor="todoInput">Enter your Todo :- </label>
        <input type="text" name="todoInput" id="" placeholder='Write here' value={todo} />
        <button onSubmit={handleSubmit} type="submit">Add</button>
      </form>
      </div>
    </div>
  )
}

export default Todo;