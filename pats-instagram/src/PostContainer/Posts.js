import React from 'react'

import CommentSection from '../CommentSection/CommentSection'
import PostHeader from './PostHeader'
import LikeSection from './LikeSection'

function Posts(props) {
  return(
    <div>
      <PostHeader 
        username={props.passPosts.username}
        thumbnailUrl={props.passPosts.thumbnailUrl}
      />

      <div className='post-image'>
        <img
        alt=''
        className='post-image'
        src={props.passPosts.imageUrl}/>
      </div>

      <LikeSection upDateLike={(event, likes) => props.upDateLike(event, likes,props.passPosts.id)} passLike={props.passPosts.likes} />
      <p className='likes'>{props.passPosts.likes}</p>

      <p><i className='far fa-comment'></i></p>
      <p className='timestamp'>{props.passPosts.timestamp}</p>

      <CommentSection 
        upDatePost={props.upDatePost} 
        passCom={props.passPosts.comments}
        passId={props.passPosts.id} 
      />
    </div>
  )
}



export default Posts;

