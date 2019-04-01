import React from 'react'

import Posts from './Posts'


function PostContainer(props) {
  return(
    <>

    <Posts passPosts={props.passCon} />
    
    </>
  )
}


export default PostContainer; 