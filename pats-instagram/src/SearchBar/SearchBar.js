import React from 'react'
import styled from 'styled-components'

import './SearchBar.css';

const SearchWrap = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  border-bottom: 1px solid silver;
  
    .logo-wrap {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 20%;
    }
    
    .social-wrap {
    display: flex;
    flex-direction: row;
    width: 20%;
    justify-content: space-between;
    
    }
`;

function SearchBar(props) {
  return(
    <SearchWrap>

      <div className='logo-wrap'>
        <div>
        <i className="fab fa-instagram"></i>
        </div>
        <div>
          <h4>Pat-Gram</h4>
          </div>
      </div>

       <div>
        <input 
          type='text' 
          placeholder='Search' 
          onChange={props.upDateSearch}
        />
      </div>

      <div className="social-wrap">
        <div>
          <i className='fa fa-compass' />
        </div>
        <div>
          <i className='fa fa-heart' />
        </div>
        <div>
          <i className='fa fa-user-circle' />
        </div>
        
      </div>
    </SearchWrap>
  );
};

export default SearchBar;