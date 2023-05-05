import React from 'react';
import '../styles/About.css';

import image from '../assets/tanaPhoto.jpeg';


function About() {
    return (

        <div className="about">
            <h1>About Me</h1>
            <div className='about-content'>
                <img src={image} alt="Tana" />
                <p> I am currently enrolled in University of Utah Professional Education Coding Boot Camp. The
                    graduation for this bootcamp is set for May 2023. I have recently finished an internship for
                    software development specializing in front end development. During the internship, I focused on
                    learning and familiarizing myself with Angular and creating automated tests using Cypress. I also
                    spent time working as a QA Engineer manual testing web development as well during this
                    internship. Skills: HTLM, CSS, JavaScript, Microsoft Excel, Cypress, Software Development,
                    Manual Testing, Automated Testing. Familiarity with Angular.
                </p>
            </div>

        </div>
    );
}

export default About;