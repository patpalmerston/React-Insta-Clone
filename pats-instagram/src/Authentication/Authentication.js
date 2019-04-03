import React from 'react'

import LogIn from './LogIn'
import PostsPage from '../PostContainer/PostsPage'

const Authentication = PostsPage => LogIn =>
  class extends React.Component {
    constructor() {
      super()
      this.state = {
        LogIn: false
      }
    }

    toggleLogin = (event) => {
      if (!this.state.LogIn) {
        localStorage.setItem('LogIn', true);
        console.log('added to localStorage')
      } else {
        localStorage.removeItem('LogIn');
        console.log('removed from localStorage')
      }
      this.setState({LogIn: !this.state.LogIn})
    }



    render() {
      if(this.state.LogIn === true) {
        return <PostsPage />
      } else {
        return <LogIn toggleLogin={this.toggleLogin}/>
      }
    }
  }
  



export default Authentication