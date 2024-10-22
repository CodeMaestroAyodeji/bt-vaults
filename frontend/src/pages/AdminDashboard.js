import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
    return (
        <div className="admin_dashboard-container">
            <header className="admin_header">
                <div className="admin_header-content">
                    <h1>BTVaults Admin</h1>
                    <nav className="admin_nav-links">
                        <Link to="/admin/dashboard">Dashboard</Link>
                        <Link to="/admin/users">Users</Link>
                        <Link to="/admin/plans">Plans</Link>
                        <Link to="/admin/admins">Admins</Link>
                        <Link to="/admin/reports">Reports</Link>
                        <Link to="/admin/settings">Settings</Link>
                        <Link to="/logout" className="admin_logout">Logout</Link>
                    </nav>
                </div>
            </header>
            <main className="admin_main-content">
                <section className="admin_stats mb-4">
                    <h2>Statistics</h2>
                    <div className="admin_stats-card">
                        <p>Today's Transactions: <span className="admin_highlight">$200</span></p>
                        <p>Today's Registrations: <span className="admin_highlight">50</span></p>
                        <p>Global Storage Used: <span className="admin_highlight">150GB</span></p>
                        <p>Available Storage: <span className="admin_highlight">850GB</span></p>
                    </div>
                </section>
                <section className="admin_users mb-4">
                    <h2>User Management</h2>
                    <table className="admin_table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Registered Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>User 1</td>
                                <td>user1@example.com</td>
                                <td>2024-10-20</td>
                                <td>
                                    <button className="admin_btn admin_btn-warning">Approve</button>
                                    <button className="admin_btn admin_btn-danger">Block</button>
                                    <button className="admin_btn admin_btn-info">Delete</button>
                                </td>
                            </tr>
                            {/* Repeat for other users */}
                        </tbody>
                    </table>
                </section>
                <section className="admin_plans mb-4">
                    <h2>Manage Plans</h2>
                    <table className="admin_table">
                        <thead>
                            <tr>
                                <th>Plan Name</th>
                                <th>Amount</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Free</td>
                                <td>$0</td>
                                <td>
                                    <button className="admin_btn admin_btn-primary">Edit</button>
                                    <button className="admin_btn admin_btn-danger">Delete</button>
                                </td>
                            </tr>
                            {/* Repeat for other plans */}
                        </tbody>
                    </table>
                    <button className="admin_btn admin_btn-success">Add New Plan</button>
                </section>
            </main>
        </div>
    );
};

export default AdminDashboard;
