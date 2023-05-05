import React from 'react';
import '../styles/Footer.css';


const Footer = () => {

    return (
        <div className='footer'>
            <div className='footer-section footer-section-small'>
                <ul>
                    <a href="https://www.github.com/Jonochi" target='_blank' rel='noreferrer'>github</a>
                    <a href="https://twitter.com/_tanacity" target='_blank' rel='noreferrer'>twitter</a>
                    <a href='https://www.linkedin.com/in/tanajayne/' target='_blank' rel='noreferrer'>linkedin</a>
                </ul>
            </div>
            <div className='footer-section footer-section-large'>
                <p>Tana Larrabee</p>
                <p>© 2023</p>
            </div>
        </div>
    );
};

export default Footer;
