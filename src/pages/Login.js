import React from 'react'
import { google } from '../assets/images'
import {Col, Form , FormGroup } from 'reactstrap'
// import { github } from '../assets/images'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import{
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { addUser, removeUser } from '../redux/renderSlice';

const Login = () => {
  const navigate = useNavigate()
  const auth = getAuth()
  const provider = new GoogleAuthProvider()
const dispatch = useDispatch()
  const handeGoogleLogin = (e)=>{
      e.preventDefault()
      signInWithPopup(auth, provider).then((result)=>{
            const user = result.user;
            dispatch(addUser({
              _id: user.uid,
              name: user.displayName,
              email:user.email,
              image:user.photoURL,
            }));
            setTimeout(()=>{
              navigate("/")
            },1500)
      }).catch((error)=>{
       dispatch(error);
      })
    }

 const handleSignOut = ()=>{
  signOut(auth)
  .then(()=>{
    dispatch(removeUser())
    toast.success("Log out Successfully")
  })
  .catch((error)=>{
    console.log(error);
  })
 }
    
  return (
    <div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
      <div className='w-full flex items-center justify-center gap-10'>
        <div
         onClick={handeGoogleLogin}
          className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400
        rounded-md flex items-center justify-center gap-2 hover:border-blue-600 
        cursor-pointer duration-300'>
        <img className='w-8' src={google} alt="googleLogo" />
        <span className='text-sm text-gray-900'>sign in with Google</span>
        </div>
        <button onClick={ handleSignOut} className='bg-black text-white text-base py-3 px-8 tracking-wide
            rounded-md hover:bg-gray-800 duration-300'>sign out</button>
      </div>
      {/* <div className='w-full flex items-center justify-center gap-10'>
        <div className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400
        rounded-md flex items-center justify-center gap-2 hover:border-blue-600 
        cursor-pointer duration-300'>
        <img className='w-8' src={github} alt="github" />
        <span className='text-sm text-gray-900'>sign in with github</span>
        </div>
        <button className='bg-black text-white text-base py-3 px-8 tracking-wide
            rounded-md hover:bg-gray-800 duration-300'>sign out</button>
      </div> */}
      <Col lg='6' className='m-auto text-center'>
            <h3 className='fw-bold fs-4 mb-3'>Login</h3>
      <Form className='auth__form'  >
              <FormGroup className='form__group'>
              <input type="email" placeholder='Enter your email'
                   />
              </FormGroup>
              <FormGroup className='form__group'>
              <input type="password" placeholder='Enter your password'
                 
              />
              </FormGroup>
              <button type='submit' className='buy__btn auth__btn'>Login</button>
              <p>Don't have an account? <Link to='/signup'>Create an account</Link></p>
            </Form>
            </Col>
            
    </div>
  )
}

export default Login
