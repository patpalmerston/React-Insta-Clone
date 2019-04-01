import React from 'react'

import Comment from './Comment'
import CommentInput from './CommentInput'


class CommentSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: props.passCom
    }
  }


  render() {
    return (
      <div>

      {this.state.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
      <CommentInput />
      </div>
     
    )
  }
}

export default CommentSection