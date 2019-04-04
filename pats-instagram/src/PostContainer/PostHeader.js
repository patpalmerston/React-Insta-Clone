import React from 'react'
import styled from 'styled-components'


const HeaderWrap = styled.div`
  border: 1px solid red;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  
    .thumb {
      width: 30%;
      border-radius: 50%;
    }
`;

function PostHeader(props) {
  return(
    <HeaderWrap>
      <div className='thumb'>
        <img 
        className='thumb' 
        src={props.thumbnailUrl}
        alt='thumbnail' 
        />
      </div>
      <span className='user'>{props.username}
      </span>
    </HeaderWrap>
  );
};


export default PostHeader;