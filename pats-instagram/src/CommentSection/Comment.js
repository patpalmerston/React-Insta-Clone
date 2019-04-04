import React from 'react';
import PropTypes from 'prop-types';

function Comment(props) {
  return(
    <div className="posted-comment">
      <span>{props.comment.text}</span>{'  '}
      <span className="user">-{props.comment.username}</span>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    username: PropTypes.string
  })
}


export default Comment;