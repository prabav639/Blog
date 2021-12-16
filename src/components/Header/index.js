import React from 'react'
import './style.css';
/**
* @author
* @function Header
**/

const Header  = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="/Home">Prabav's React Application!</a>
            
        </nav>
        <div>
            <nav className="headerMenu">
            
            </nav>
        </div>
    </header>
   )

 }
 export default Header