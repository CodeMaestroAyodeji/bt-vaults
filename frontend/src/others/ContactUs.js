import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contactUs_page">
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out!</p>
            <form className="contactUs_form">
                <div className="formGroup">
                    <label>Name:</label>
                    <input type="text" placeholder="Your Name" required />
                </div>
                <div className="formGroup">
                    <label>Email:</label>
                    <input type="email" placeholder="Your Email" required />
                </div>
                <div className="formGroup">
                    <label>Message:</label>
                    <textarea placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="submitButton">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUs;
