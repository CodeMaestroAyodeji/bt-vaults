import React from 'react';
import '../App.css';

function Footer() {
    return (
        <footer className="text-center p-3" style={{ backgroundColor: '#D7D7D5', color: '#333' }}>
            <p>&copy; 2024 BTVaults. All Rights Reserved.</p>
            <p>
                <a href="/privacy" style={{ color: '#4B4B4A' }}>Privacy Policy</a> | 
                <a href="/terms" style={{ color: '#4B4B4A' }}> Terms of Service</a>
            </p>
        </footer>
    );
}

export default Footer;
