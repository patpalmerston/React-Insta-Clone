import React from 'react';
import styled from 'styled-components';

import './LogIn.css'
function LogIn(props) {

const LoginWrapper = styled.div`
  margin: 0 auto;
  margin: 1rem;
  max-width: 100%;
  width: 100%;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
    .user-name {
      margin: 1rem;
    }
    .user-password {
      margin: 1rem;
    }
    .login-button {
      width: 100%;
      border-radius: 20%;
      height: 100%;
      margin: .5rem;
    }
`;

  return(
    <LoginWrapper>
      <FormWrapper>
        <input
            className='user-name'
            placeholder='Log In'
            name='userName'
            // onChange={}
            // value={}
          />
          <input
            className='user-password'
            placeholder='password please'
            name='password'
            // onChange={}
            // value={}
          />
          <button className='login-button' onClick={props.toggleLogin}>Log In</button>
      </FormWrapper>
    </LoginWrapper>
  )
}


export default LogIn;