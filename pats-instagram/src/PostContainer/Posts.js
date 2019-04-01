import React from 'react'

import CommentSection from '../CommentSection/CommentSection'
import PostHeader from './PostHeader'

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
      <CommentSection passCom={props.passPosts.comments} />
    </div>
  )
}



export default Posts;

