import React from 'react'

import CommentSection from '../CommentSection/CommentSection'

function PostContainer(props) {
  return(
    <>
    <span className='user'>{props.passPost.username}</span>

    <img 
      className='thumb' 
      src={props.passPost.thumbnailUrl}
      alt='thumbnail' 
    />

    <img 
      className='profile-photo' 
      src={props.passPost.imageUrl}
      alt='ProfilePhoto' 
    />

    <p className='likes'>{props.passPost.likes}</p>

    <p><i className='far fa-comment'></i></p>
    <p className='timestamp'></p>

    <CommentSection passCom={props.passPost.comments} />
    
    </>
  )
}


export default PostContainer; 