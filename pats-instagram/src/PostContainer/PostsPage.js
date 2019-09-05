import React from 'react'

import Data from '../Data'
import PostContainer from './PostContainer'
import SearchBar from '../SearchBar/SearchBar'


class PostsPage extends React.Component {
  constructor(){
    super()
    this.state= {
      data: [],
      filteredPosts: [],
      searching: false
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

  upDateLike = (event, likes, id) => {
    console.log('updated the like button')
    event.preventDefault()

    const postToUpdate = this.state.data.find(post => {
      return post.id === id
    })

    postToUpdate.likes++

    const postIndex = this.state.data.indexOf(post => {
      return post.id === id
    })

    Data[postIndex] = postToUpdate;
    this.setState({
      data: Data
    })
  }

  upDateSearch = e => {
    if(e.target.value !== ''){
      const searchIt = this.state.data.filter(post => {
        if (post.username.includes(e.target.value)) {
          return post;
        }
      })
      this.setState({filteredPosts: searchIt, searching: true})
    } else {
      this.setState({searching: false})
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <SearchBar upDateSearch={this.upDateSearch} />

            {(this.state.searching ? this.state.filteredPosts : this.state.data).map((post) => {
              // console.log(post)
              return <PostContainer 
                        upDatePost={this.upDatePost}
                        upDateLike={this.upDateLike}
                        passCon={post} 
                        key={post.id} 
                        />
            })}
        
        </header>
      </div>
    );
  }
}


export default PostsPage;