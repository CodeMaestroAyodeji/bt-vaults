import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header_board">
            <div className="header_container">
                <div className="main_brand">
                    <Link to="/bt-vaults" className="brand_link">
                        <img
                            src={process.env.PUBLIC_URL + "/logo192.png"}
                            height="40"
                            alt="BTVaults logo"
                            className="brand_logo"
                        />
                        <span className="brand_name">BTVaults</span>
                    </Link>
                </div>
                <nav className="main_nav">
                    <Link to="/bt-vaults/pricing-list" className="nav_link">Pricing</Link>
                    <Link to="/bt-vaults/login" className="nav_link">Login</Link>
                    <Link to="/bt-vaults/signup" className="nav_link act_btn">Sign Up</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
