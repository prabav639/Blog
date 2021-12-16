import React from 'react';
import Header from '../../components/Header';
import './style.css';
import img from './image.png';

const Home =props=>{
    return(
        <div>
            <img alt="img"className="im" src={img}/>
            <h1>Hey! Prabav here. This is the homepage</h1>
             <h2>Due to Covid-19, please stay at Home(page) ;)</h2>
             <h2>Wear Mask, Be Safe!</h2>
             </div>
    );
}
export default Home;