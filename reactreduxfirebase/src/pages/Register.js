import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link , useNavigate } from 'react-router-dom'
import '../pagesCss/Login.css'
import { registerIntiate } from '../redux/actions'

function Register() {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: ""
  })
  const dispatch = useDispatch()
  const {currentUser} = useSelector((state) => state.user)
  const history = useNavigate()
  useEffect(()=>{
    if(currentUser){
      history('/')
    }
  },[currentUser,history])
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(registerIntiate(email,password,displayName));
    setState({email:'',password:'',displayName:'',passwordConfirm: ""})
  }
  const handleGooglrSignIn = () => { }
  const handleFacebookSignIn = () => { }

  const handleChange = (e) => {
    let { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const { email, password, displayName, passwordConfirm } = state
  return (
    <div>
      <div id='logreg-forms' >
        <form className='form-signin' onSubmit={handleSubmit} >
          <h1 className='h3 mb-3 font-weight-normal'>Sign Up</h1>
          {/* ----------------------------------------  Buttons --------------------------------------------- */}
          <div>
            <input type='text' id='displayName' className='form-control' placeholder='Full Name' name='displayName' onChange={handleChange} value={displayName} required />
            <input type='email' id='inputEmail' className='form-control' placeholder='Email Address' name='email' onChange={handleChange} value={email} required />
            <input type='password' id='inputPassword' className='form-control' placeholder='Password' name='password' onChange={handleChange} value={password} required />
            <input type='password' id='inputPassword' className='form-control' placeholder='Repeat Password' name='passwordConfirm' onChange={handleChange} value={passwordConfirm} required />
          </div>
          <br />
          <button className='btn btn-secondary btn-block' type='submit'>
            Sign Up
          </button>
          <br />
          <hr />
          <p>You have already an account</p>
          <Link to='/login'>
            <button
              className='btn btn-primary btn-block'
              type='button'
              id='btn-signup'
            >
              <i className='fas fa-user-plus'>Sign In</i>
            </button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Register
