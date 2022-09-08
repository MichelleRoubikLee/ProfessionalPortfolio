import imgLondon from "../img/MichelleLondon.jpg";
import imgHiking from "../img/MichelleHiking.JPG";

function AboutMe() {
    return ( 
        <>
            <div id="aboutMe" className="aboutMe__pictures">
                <img src={imgLondon} alt="Michelle in london" className="aboutMe__img--1" />
                <img src={imgHiking} alt="michelle hiking" className="aboutMe__img--2" />
            </div>
            <div className="aboutMe__content">
                <h3 className="heading-3 mb-sm">About Me</h3>
                <h2 className="heading-2 heading-2--dark mb-md">&ldquo;Entrepreneur and Adventurer&rdquo;</h2>
                <p className="aboutMe__text">Hi, I'm Michelle Lee and I am an entrepreneur.</p>
                <p className="aboutMe__text">My career is a bit unconventional, but I find the most success when I color outside the lines.</p>
                <p className="aboutMe__text">I am here to bring my problem solving skills and technical understanding to the small business world. Small businesses are the cornerstone of our society and I help grow those small businesses through engineering efficiency and technology.</p>
                <p className="aboutMe__text">Do you want to grow your small business?</p>
                <button className="btn">Contact Me</button>
            </div>
        </>
     );
}

export default AboutMe;