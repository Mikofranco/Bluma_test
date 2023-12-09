import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignUpBtn() {
  const navigate = useNavigate();
  function goToSignUpPage(){
    navigate("/sign-up")
  }
  return (
    <div className='sign-up'><button onClick={goToSignUpPage}>Sign up</button></div>
  )
}

export default SignUpBtn