import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import './style.css';
import sear from './search.png';


/**
* @author
* @function Navbar
**/

export const Navbar  = (props) => {
    const[search,setSearch]=useState(false);

const openSearch=() =>{
    setSearch(true);
}
const searchClass=search?'searchInput active':'searchInput';

  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to="/Home">Home</NavLink></li>
            <li><NavLink to="/AboutMe">About Me</NavLink></li>
            <li><NavLink to="/HalifaxWeatherNow">Halifax Weather Now</NavLink></li>
        </ul>
        <div className="search">
        
        </div>
        <div>
            <input type="text" className={searchClass} placeholder="Search"/>
            <img alt="sear"className="se" src={sear}/>
            
        </div>
    </div>
   )

 }