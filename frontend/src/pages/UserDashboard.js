import React from 'react';
import { Link } from 'react-router-dom';
import './UserDashboard.css';

const UserDashboard = () => {
    return (
        <div className="dashboard_container">
            <header className="dashboard_header">
                {/* <h1 className="dashboard_brand-name">BTVaults</h1> */}
                <nav className="dashboard_navbar">
                    <Link className="dashboard_nav-link" to="/dashboard">Dashboard</Link>
                    <Link className="dashboard_nav-link" to="/files">Files</Link>
                    <Link className="dashboard_nav-link" to="/torrents">Torrents</Link>
                    <Link className="dashboard_nav-link" to="/plans">Plans</Link>
                    <Link className="dashboard_nav-link" to="/settings">Settings</Link>
                    <Link className="dashboard_nav-link" to="/logout">Logout</Link>
                </nav>
            </header>
            <main className="dashboard_main-content">
                <section className="dashboard_stats">
                    <h2 className="dashboard_section-title">Statistics</h2>
                    <div className="dashboard_stat-item">
                        <strong>Usage:</strong>
                        <div className="dashboard_progress-bar-container">
                            <div className="dashboard_progress-bar" style={{ width: '60%' }}>3/5 Used</div>
                        </div>
                    </div>
                    <div className="dashboard_stat-item">
                        <strong>Storage:</strong>
                        <div className="dashboard_progress-bar-container">
                            <div className="dashboard_progress-bar" style={{ width: '70%' }}>3.5GB/5GB Used</div>
                        </div>
                    </div>
                </section>
                <section className="dashboard_plans">
                    <h2 className="dashboard_section-title">Current Plan</h2>
                    <p><strong>Plan Name:</strong> Free</p>
                    <p><strong>Download Slot:</strong> 1 per day</p>
                    <p><strong>Expiry:</strong> 3650 days</p>
                    <button className="dashboard_btn-change-plan">Change Plan</button>
                    <h3 className="dashboard_subscription-history-title">Subscription History</h3>
                    {/* Add Subscription History Table Here */}
                </section>
                <section className="dashboard_files">
                    <h2 className="dashboard_section-title">My Files</h2>
                    <ul className="dashboard_file-list">
                        <li className="dashboard_file-item">
                            File Name: example.torrent
                            <button className="dashboard_btn-download">Download</button>
                            <button className="dashboard_btn-zip">Zip</button>
                            <button className="dashboard_btn-delete">Delete</button>
                        </li>
                        {/* Repeat for other files */}
                    </ul>
                </section>
                <section className="dashboard_torrents">
                    <h2 className="dashboard_section-title">Add Torrent</h2>
                    <input type="text" className="dashboard_input-field" placeholder="Magnet Link" />
                    <button className="dashboard_btn-add">Add Magnet</button>
                    <input type="file" className="dashboard_input-field" />
                    <button className="dashboard_btn-upload">Upload Torrent File</button>
                    <input type="text" className="dashboard_input-field" placeholder="Search Torrents" />
                    <button className="dashboard_btn-search">Search</button>
                </section>
            </main>
        </div>
    );
};

export default UserDashboard;
