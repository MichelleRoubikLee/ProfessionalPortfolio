function Footer() {
    return ( 
        <footer className="footer">
            <ul className="nav">
                <li className="nav__item"><a href="#experience" className="nav__link">Experience</a></li>
                <li className="nav__item"><a href="#aboutMe" className="nav__link">About Me</a></li>
                <li className="nav__item"><a href="#projects" className="nav__link">Projects</a></li>
                <li className="nav__item"><a href="#contact" className="nav__link">Contact Me</a></li>
            </ul>
            <p className="copyright">
                &copy; Copyright 2022 by Michelle Roubik Lee
            </p>
        </footer>
     );
}

export default Footer;