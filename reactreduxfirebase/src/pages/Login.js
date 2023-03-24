import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import '../pagesCss/Login.css'
import { facebookSignInIntiate, googleSignInIntiate, loginIntiate } from '../redux/actions'

function Login() {
  const [state, setState] = useState({
    email: "",
    password: ""
  })

const dispatch = useDispatch()
const {currentUser} = useSelector((state) => state.user)
const navigate = useNavigate()

useEffect(()=>{
  if(currentUser){
    navigate('/')
  }
},[currentUser,navigate])

  const handleSubmit = (e) => { 
    e.preventDefault();
    if(!email || !password){
      return
    }
    dispatch(loginIntiate(email,password))
    setState({email:'',password:''})
  }

  const handleGooglrSignIn = () => { 
    dispatch(googleSignInIntiate())
  }
  const handleFacebookSignIn = () => { 
    dispatch(facebookSignInIntiate())
   }
  const handleChange = (e) => {
    let { name, value } = e.target
    setState({ ...state, [name]: value })
  }
  const { email, password } = state
  return (
    <div>
      <div id='logreg-forms' >
        <form className='form-signin' onSubmit={handleSubmit} >
          <h1 className='h3 mb-3 font-weight-normal'>Sign in</h1>
          {/* ---------------------------------------- Social Buttons --------------------------------------------- */}
          <div className='social-login'>
            <button className='btn google-btn social-btn' type='button' onClick={handleGooglrSignIn}>
              <span>
                <i className='fab fa-google-plus-g'></i>Sign in with Google
              </span>
            </button>
            <button className='btn facebook-btn social-btn' type='button' onClick={handleFacebookSignIn}>
              <span>
                <i className='fab fa-facebook-f
                '></i>Sign in with Facebook
              </span>
            </button>
          </div>
          {/* ----------------------------------------  Buttons --------------------------------------------- */}
          <p >OR</p>
          <div>
            <input type='email' id='inputEmail' className='form-control' placeholder='Email Address' name='email' onChange={handleChange} value={email} required />
            <input type='password' id='inputPassword' className='form-control' placeholder='Password' name='password' onChange={handleChange} value={password} required />
          </div>
          <br/>
          <button className='btn btn-secondary btn-block' type='submit'>
            Sign In
          </button>
          <br/>
          <hr/>
          <p>Don't have an account</p>
          <Link to='/register'>
            <button
            className='btn btn-primary btn-block'
            type='button'
            id='btn-signup'
            >
              <i className='fas fa-user-plus'>Sign up Account</i>
            </button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login
