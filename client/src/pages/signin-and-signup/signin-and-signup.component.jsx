import React from 'react';

import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/sign-up.component';

import { SignInAndSignUpContainer } from './signin-and-signup.styles';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;