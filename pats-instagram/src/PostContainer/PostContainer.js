import React from 'react'
import './PostContainer.css'


import Posts from './Posts'


function PostContainer(props) {
  return(
    <div className='Container-wrap'>
    <Posts 
    upDatePost={props.upDatePost} 
    passPosts={props.passCon}
    upDateLike={props.upDateLike} 
    />
    
    </div>
  )
}


export default PostContainer; 