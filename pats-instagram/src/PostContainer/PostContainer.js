import React from 'react'
import './PostContainer.css'

import styled from 'styled-components'


import Posts from './Posts'



const ContainerWrap = styled.div`
  border: 1px solid red;
  display: flex;

`;


function PostContainer(props) {
  return(
    <ContainerWrap>
    <Posts 
    upDatePost={props.upDatePost} 
    passPosts={props.passCon}
    upDateLike={props.upDateLike} 
    />
    
    </ContainerWrap>
  )
}


export default PostContainer; 