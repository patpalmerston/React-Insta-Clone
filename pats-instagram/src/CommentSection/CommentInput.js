import React from 'react';
import PropTypes from 'prop-types';

function CommentInput(props) {
  return(
    <form>
      <input
        className='comment'
        placeholder='Comment Here'
        name='commentInput'
      />
    </form>
  )
}

CommentInput.propTypes = {

}


export default CommentInput;