import React, { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import "./sass/main.scss";

function App() {
    return ( 
        <div className="container">
            <div className="sidebar">
                <button className="nav-btn"></button>
            </div>
            <header className="header">
                <svg className="header__logo">
                    {/* <use xlink:href="img/sprite.svg#icon-feather"></use> */}
                </svg>
                <h3 className="header__name heading-3">Michelle Roubik Lee</h3>
                <h1 className="header__tag heading-1">Entrepreneur and Web Developer</h1>
                <button className="btn header__btn">View my projects</button>
                <div className="header__findMe-text">Find me on</div>
                <div className="header__findMe-logos">
                    <a href="https://www.linkedin.com/in/michelle-roubik-lee/"><svg>
                        {/* <use xlink:href="img/sprite.svg#icon-linkedin"></use> */}
                    </svg></a>
                    <a href="https://github.com/MichelleRoubikLee"><svg>
                        {/* <use xlink:href="img/sprite.svg#icon-github"></use> */}
                    </svg></a>
                    <svg>
                        {/* <use xlink:href="img/sprite.svg#icon-v-card"></use> */}
                    </svg>
                </div>
            </header>
            <section className="projects">
                <div className="project">
                    <img src="img/MentalHealthGraph.png" alt="mental health graph" className="project__img" />
                    <svg className="project__github">
                        {/* <use xlink:href="img/sprite.svg#icon-github"></use> */}
                    </svg>
                    <h5 className="project__name">Mental Health App</h5>
                    <div className="project__language">
                        <svg>
                            {/* <use xlink:href="img/sprite.svg#icon-message"></use> */}
                        </svg>
                        <p>MERN Stack</p>
                    </div>
                    <div className="project__description">
                        <svg>
                            {/* <use xlink:href="img/sprite.svg#icon-pencil"></use> */}
                        </svg>
                        <p>description</p>
                    </div>
                    <button className="btn project__btn">Demo Website
                        
                    </button>
                </div>
                <div className="project">
                    <img src="img/bookreview.png" alt="book review site" className="project__img" />
                    <svg className="project__github">
                        {/* <use xlink:href="img/sprite.svg#icon-github"></use> */}
                    </svg>
                    <h5 className="project__name">Social Book Review Site</h5>
                    <div className="project__language">
                        <svg>
                            {/* <use xlink:href="img/sprite.svg#icon-message"></use> */}
                        </svg>
                        <p>MERN Stack</p>
                    </div>
                    <div className="project__description">
                        <svg>
                            {/* <use xlink:href="img/sprite.svg#icon-pencil"></use> */}
                        </svg>
                        <p>In development</p>
                    </div>
                    <button className="btn project__btn">Demo Website
                        
                    </button>
                </div>
                
                <div className="project">project card 3</div>
                <div className="project">project card 4</div>
                <div className="project">project card 5</div>
                <div className="project">project card 6</div>
            </section>
            <div className="aboutMe__pictures">
                <img src="img/MichelleLondon.jpg" alt="Michelle in london" className="aboutMe__img--1" />
                <img src="img/MichelleHiking.JPG" alt="michelle hiking" className="aboutMe__img--2" />
            </div>
            <div className="aboutMe__content">
                <h3 className="heading-3 mb-sm">About Me</h3>
                <h2 className="heading-2 heading-2--dark mb-md">&ldquo;Entrepreneur and Adventurer&rdquo;</h2>
                <p className="aboutMe__text">Hello! My name is Michelle Lee. I am a full stack website developer in Milwaukee, Wisconsin, USA. I started my career in problem solving with an electrical engineering degree from the Milwaukee School of Engineering and FHL, a German Technical University. After four years of working in that field, I transitioned to web development. I am currently a freelance website developer.</p>
                <p className="aboutMe__text">I buy and grow local small businesses in my community. </p>
                <p className="aboutMe__text">I love traveling, hiking, and camping. </p>
                <button className="btn">Contact Me</button>
            </div>
            <section className="experiences">
                <div className="experience">
                    <svg className="experience__icon">
                        {/* <use xlink:href="img/sprite.svg#icon-camera"></use> */}
                    </svg>
                    <h4 className="heading-4">Electrical Engineering</h4>
                        <p className="experience__text">I have dual degrees in electrical engineering from the Milwaukee School of Engineering in Wisconsin and FHL Lubeck in Germany. After graduating I worked in the engineering field for four years. I loved problem solving but realized I wanted more autonomy and flexibility in my career. </p>
                </div>
                <div className="experience">
                    <svg className="experience__icon">
                        {/* <use xlink:href="img/sprite.svg#icon-camera"></use> */}
                    </svg>
                    <h4 className="heading-4">Website Development</h4>
                        <p className="experience__text">I took a website development bootcamp with the goal of ending up in freelance website development. I love the development community and after I completed the bootcamp, I went back to teach that same bootcamp six months later.</p>
                </div>
                <div className="experience">
                    <svg className="experience__icon">
                        {/* <use xlink:href="img/sprite.svg#icon-camera"></use> */}
                    </svg>
                    <h4 className="heading-4">Buying and Growing Businesses</h4>
                        <p className="experience__text">I buy small businesses in my area. With my skillset of problem solving and website creation, I buy local small businesses where I can use my experience to grow the web presence and grow the business. </p>
                </div>
                
            </section>
            <section className="contact">
            </section>
            <footer className="footer">
                <ul className="nav">
                    <li className="nav__item"><a href="#" className="nav__link">Projects</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">About Me</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Experience</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Contact Me</a></li>
                </ul>
                <p className="copyright">
                    &copy; Copyright 2022 by Michelle Roubik Lee
                </p>
            </footer>
        </div>
     );
}

export default App;