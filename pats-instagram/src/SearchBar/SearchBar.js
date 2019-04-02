import React from 'react'
import './SearchBar.css';

function SearchBar(pops) {
  return(
    <div className="search-wrap">

      <div className='logo-wrap'>
        <div>
        <i className="fab fa-instagram"></i>
        </div>
        <div>
          <h4>Pats-Instagram</h4>
          </div>
      </div>

       <div>
        <input type='text' placeholder='Search' />
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
    </div>
  );
};

export default SearchBar;