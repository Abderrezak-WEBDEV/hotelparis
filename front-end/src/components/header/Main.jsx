
import React from 'react';
import VideoParis  from './paris1.mp4';
import './main.css';
import Nav from "../nav/Nav";
import logo from './logo.png';
import Home from '../home/Home';
const Main = () => {
    return (
        <div className="main">
            <Nav/>
            <video src={VideoParis} autoPlay muted/>
            <div className='content'>
                <div>
                      <img src= {logo} alt="logo"/> 
                </div>
                <h1> Welcome </h1>
                <h1>To Argenson Hotel</h1>
                <Home/>
            </div>
        </div>
    );
};
export default Main;