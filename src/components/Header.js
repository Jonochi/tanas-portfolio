import React from 'react';
import '../styles/Header.css';


function Header() {
    return (
        <header className="header">
            <h1>Welcome</h1>
            <nav>
                <ul>
                    <li><a href="#about-me">About Me</a></li>
                    <li><a href="#contact-me">Contact Me</a></li>
                    <li><a href="#work">My Work</a></li>
                </ul></nav>

        </header>
    );
}

export default Header;
