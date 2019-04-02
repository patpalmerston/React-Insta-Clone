import React, { Component } from 'react';
import './App.css';
import Data from './Data'
import PostContainer from './PostContainer/PostContainer'
import SearchBar from './SearchBar/SearchBar'




class App extends Component {
  constructor(){
    super()
    this.state= {
      data: Data
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <SearchBar />
            {this.state.data.map((post) => {
              return <PostContainer passCon={post} key={post.id} />
            })}
          
          
        </header>
      </div>
    );
  }

}

export default App;
