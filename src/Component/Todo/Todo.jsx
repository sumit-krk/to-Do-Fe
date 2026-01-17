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
    <div>Todo</div>
  )
}

export default Todo;