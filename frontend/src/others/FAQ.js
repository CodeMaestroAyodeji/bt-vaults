import React from 'react';
import './FAQ.css';

const FAQ = () => {
    return (
        <div className="faq_page">
            <h1>Frequently Asked Questions</h1>
            <div className="faq_item">
                <h3>Question 1?</h3>
                <p>Answer to question 1.</p>
            </div>
            <div className="faq_item">
                <h3>Question 2?</h3>
                <p>Answer to question 2.</p>
            </div>
            {/* Add more questions as needed */}
        </div>
    );
};

export default FAQ;
