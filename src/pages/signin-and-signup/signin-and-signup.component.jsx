import React from 'react'

import SignIn from '../../components/signin/signin.component'
import SignUp from '../../components/signup/sign-up.component'

import './signin-and-signup.styles.scss'

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
)

export  default SignInAndSignUpPage