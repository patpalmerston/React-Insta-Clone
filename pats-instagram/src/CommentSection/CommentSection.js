import React from 'react'


function CommentSection(props) {
  return(
    <>

    <h3>{props.username}</h3>

    {props.passCom.map((comment, index) => {
      return(
        <div className='userComment' key={index}>
          <span>{comment.username}: </span>
          <span>{comment.text}</span>
        </div>
      )
    })}

    <form>
      <input
        className='comment'
        placeholder='Comment Here'
        name='commentInput'
      />{' '}
    </form>
    
    </>
  )
}


export default CommentSection