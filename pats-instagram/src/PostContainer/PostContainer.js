import React from 'react'
import './PostContainer.css'

import Posts from './Posts'


function PostContainer(props) {
  return(
    <div className='Container-wrap'>

    <Posts passPosts={props.passCon} />
    
    </div>
  )
}


export default PostContainer; 