

import React, { useState } from 'react';
import '../styles/Contact.css';


function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    // Validation and error handling still needed!
    // const [nameError, setNameError] = useState('');
    // const [emailError, setEmailError] = useState('');
    // const [messageError, setMessageError] = useState('');

    // useEffect(() => {
    //     setNameError('');
    //     setEmailError('');
    //     setMessageError('');
    // }, [name, email, message]);

    const handleSubmit = (e) => {
        e.preventDefault();
    
    // Console logging as a placeholder for a DB.
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear the form after submission
    setName('');
    setEmail('');
    setMessage('');

    };


    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <p>Functionality coming soon!!</p>
            <div>
                <form onSubmit={handleSubmit}>

                    <label for="name">Name:</label>
                    <div className="Contact-input">
                        <input type="text" className="Contact-input-name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <label for="email">Email:</label>
                    <div className="Contact-input">
                        <input type="email" className="Contact-input-email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <label for="message">Message:</label>
                    <div className="Contact-input">
                        <input type="text" className="Contact-input-message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
}


export default Contact;