import React, { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import "./sass/main.scss";
import Header from './components/Header';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
    return ( 
        <div className="container">
            {/* <div className="sidebar">
                <button className="nav-btn"></button>
            </div> */}
            <Header/>
            <Experience/>
            
            <AboutMe/>
            <Projects/>
            <Contact/>
            <Footer/>
            
        </div>
     );
}

export default App;