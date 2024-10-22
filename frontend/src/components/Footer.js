import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-column">
                        <a className="footer-link" href='/bt-vaults'>
                        <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="BTVaults Logo" className="footer-logo" />
                        <h3 className="footer-title">BTVaults</h3>
                        </a>
                    </div>
                    <div className="footer-column">
                        <h4 className="footer-heading">Short Cut</h4>
                        <ul className="list-unstyled">
                            <li><a className="footer-link" href="/bt-vaults/signup">Sign up</a></li>
                            <li><a className="footer-link" href="/bt-vaults/login">Login</a></li>
                            <li><a className="footer-link" href="/bt-vaults/pricing-list">Pricing</a></li>
                            <li><a className="footer-link" href="/bt-vaults/admin">Admin Dashboard</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4 className="footer-heading">Support</h4>
                        <ul className="list-unstyled">
                        <li><a className="footer-link" href="/bt-vaults/about-us">About Us</a></li>
                            <li><a className="footer-link" href="/bt-vaults/contact-us">Contact Us</a></li>
                            <li><a className="footer-link" href="/bt-vaults/report-a-problem">Report a problem</a></li>
                            <li><a className="footer-link" href="/bt-vaults/faq">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4 className="footer-heading">Legal</h4>
                        <ul className="list-unstyled">
                            <li><a className="footer-link" href="/bt-vaults/terms-of-use">Terms of Use</a></li>
                            <li><a className="footer-link" href="/bt-vaults/privacy-policy">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-copy">
                    <small>© 2024 BTVaults, all rights reserved</small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
