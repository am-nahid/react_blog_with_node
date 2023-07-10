import React from 'react'
import { Logo } from '../../Components'
import Login from './Login'
import './login.style.css'

function LoginPage() {
  return (
    <>
    <div className='LoginLogo'><Logo/></div>
    <Login/>

      </>
  )
}

export default LoginPage