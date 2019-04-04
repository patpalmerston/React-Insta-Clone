import React from 'react';
import './App.css';

import styled from 'styled-components';

import LogIn from './Authentication/LogIn'
import PostsPage from './PostContainer/PostsPage';
import Authentication from './Authentication/Authentication'

const AppDiv = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 800px;
  max-width: 100%;
  color: white;
  display: flex;
`;

const AppHeader = styled.div`
  background-color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
`;


function App() {
  
    return (
      <AppDiv>
        <AppHeader>
          
          <AuthenticatedComponent />
          
        </AppHeader>
      </AppDiv>
    );
  }
const AuthenticatedComponent = Authentication(PostsPage)(LogIn)

export default App;
