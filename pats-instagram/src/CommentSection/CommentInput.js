import React from 'react';
import PropTypes from 'prop-types';

function CommentInput(props) {
  
    return(
      <form onSubmit={(event) => {props.upDatePost(event, props.comment, props.passId)}}>
        <input
          className='comment'
          placeholder='Comment Here'
          name='commentInput'
          onChange={props.eventHandler}
          value={props.comment}
        />
      </form>
    )
  
}

CommentInput.propTypes = {
  comment: PropTypes.string,
  eventHandler: PropTypes.func,
  passId: PropTypes.string,
  upDatePost: PropTypes.func
}


export default CommentInput;