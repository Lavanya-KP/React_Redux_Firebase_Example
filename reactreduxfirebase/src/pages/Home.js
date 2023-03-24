import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logoutIntiate } from '../redux/actions';

function Home() {
const { currentUser } = useSelector((state) => state.user)
const dispatch = useDispatch();
const navigate = useNavigate();

useEffect(()=>{
  if(currentUser){
navigate('./login')
  }
},[currentUser,navigate])

  const handleLogout = () => {
    if(currentUser){
      dispatch(logoutIntiate())
    }
  }

  return (
    <div>
      <h>Home</h>
      <br/>
      <button type='button' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home
