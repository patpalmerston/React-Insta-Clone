import React from 'react'

function PostHeader(props) {
  return(
    <div className='header'>
      <div className='thumb'>
        <img 
        className='thumb' 
        src={props.thumbnailUrl}
        alt='thumbnail' 
        />
      </div>
      <span className='user'>{props.username}</span>
    </div>
  );
};


export default PostHeader;