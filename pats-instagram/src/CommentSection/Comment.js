import React from 'react'

function Comment(props) {
  return(
    <div className="posted-comment">
      <span>{props.comment.text}</span>{' '}
      <span className="user">-{props.comment.username}</span>
    </div>
  )
}


export default Comment;