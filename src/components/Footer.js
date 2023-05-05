import React from 'react';
import '../styles/Footer.css';


const Footer = () => {

    return (
        <div className='footer'>
            <div className='footer-section footer-section-small'>
                <ul>
                    <a href='#'>github</a>
                    <a href='#'>twitter</a>
                    <a href='#'>linkedin</a>
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
