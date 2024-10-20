import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

function Header() {
    const navigate = useNavigate();

    // Function to handle sign out
    // eslint-disable-next-line
    const handleSignOut = () => {
        // Clear user session
        localStorage.removeItem('userToken');
        navigate('/login');  
    };

    // Check if the user is authenticated by checking the presence of 'userToken'
    const isAuthenticated = !!localStorage.getItem('userToken');
    console.log("Authenticated: ", isAuthenticated);

    return (
        <Navbar bg="" variant="" expand="lg" className="p-3 header-board">
            <Navbar.Brand as={Link} to="/bt-vaults">
                <img
                    src="logo192.png"
                    height="40"
                    className="d-inline-block align-top"
                    alt="BTVaults logo"
                />{' '}
                BTVaults
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {isAuthenticated ? (
                        <>
                            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                            <Nav.Link as={Link} to="/login">Logout</Nav.Link>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
