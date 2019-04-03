import React from 'react';

function LogIn(props) {


  return(
    <form>
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
        <button onClick={props.toggleLogin}>Please Log In</button>
    </form>
  )
}


export default LogIn;