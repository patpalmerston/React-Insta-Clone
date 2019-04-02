import React, { Component } from 'react';
import './App.css';
import Data from './Data'
import PostContainer from './PostContainer/PostContainer'
import SearchBar from './SearchBar/SearchBar'




class App extends Component {
  constructor(){
    super()
    this.state= {
      data: []
    };
  }

  componentDidMount() {
    this.setState({
      data: Data
    })
  };

  upDatePost = (event, commentInput, id) => {
    event.preventDefault()
  //access the comments and then update comments
  //comments are in an object

    const postToUpdate = this.state.data.find(post => {
      return post.id === id
    })

    const newComment = {
      id: Date.now(),
      username: 'Gandalf',
      text: commentInput
    }

    // postToUpdate.comments.push(newComment);
    const newPost = {...postToUpdate, comments: [...postToUpdate.comments, newComment]}
    console.log(newPost)
    const newCopy = this.state.data.map((loop) => {
      if (loop.id === id) {
        return newPost
      } else {
        return {...loop}
      }
    })

    // console.log(postToUpdate.comments)

    this.setState({
      data: newCopy
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <SearchBar />

            {this.state.data.map((post) => {
              // console.log(post)
              return <PostContainer 
                        upDatePost={this.upDatePost}
                        passCon={post} 
                        key={post.id} 
                        />
            })}
          
          
        </header>
      </div>
    );
  }

}

export default App;
