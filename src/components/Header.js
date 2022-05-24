import React from 'react';
import githublogo from '../Assets/githublogo.png';


function Header() {
  
  return (
     <header className='header'>
       <img src={githublogo} alt="github logo" width={"128"} height={"128"}/>
      </header>
  );
}

export default Header;