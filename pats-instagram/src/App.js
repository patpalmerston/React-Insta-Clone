import React from 'react';
import './App.css';
import LogIn from './Authentication/LogIn'
import PostsPage from './PostContainer/PostsPage';
import Authentication from './Authentication/Authentication'




function App() {
  
    return (
      <div className="App">
        <header className="App-header">
          <AuthenticatedComponent />
          
        </header>
      </div>
    );
  }
const AuthenticatedComponent = Authentication(PostsPage)(LogIn)
export default App;
