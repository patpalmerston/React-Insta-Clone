import React from 'react'

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


export default CommentInput;