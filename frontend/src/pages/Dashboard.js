// src/Dashboard.js
import React from 'react';
import { Container, Row, Col, Card, ProgressBar, Table } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <Container fluid>
            <Row className="my-4">
                <Col md={3}>
                    <Card className="text-center" style={{ backgroundColor: '#212121', color: '#FFF' }}>
                        <Card.Body>
                            <Card.Title>Today's Transactions</Card.Title>
                            <Card.Text>5</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="text-center" style={{ backgroundColor: '#212121', color: '#FFF' }}>
                        <Card.Body>
                            <Card.Title>New Registrations</Card.Title>
                            <Card.Text>12</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="text-center" style={{ backgroundColor: '#212121', color: '#FFF' }}>
                        <Card.Body>
                            <Card.Title>Global Storage Used</Card.Title>
                            <Card.Text>150 GB</Card.Text>
                            <ProgressBar variant="warning" now={75} label="75%" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="text-center" style={{ backgroundColor: '#212121', color: '#FFF' }}>
                        <Card.Body>
                            <Card.Title>Available Storage</Card.Title>
                            <Card.Text>50 GB</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="my-4">
                <Col>
                    <Card>
                        <Card.Header style={{ backgroundColor: '#FFC107', color: '#212121' }}>
                            <h5>Recent User Activities</h5>
                        </Card.Header>
                        <Card.Body>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>User</th>
                                        <th>Action</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>John Doe</td>
                                        <td>Downloaded File</td>
                                        <td>2024-10-19</td>
                                        <td>Success</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jane Smith</td>
                                        <td>Uploaded File</td>
                                        <td>2024-10-19</td>
                                        <td>In Progress</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="my-4">
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>User Slots Usage</Card.Title>
                            <ProgressBar variant="info" now={60} label="60%" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Subscription Overview</Card.Title>
                            <button className="btn btn-primary w-100">View Details</button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Storage Status</Card.Title>
                            <button className="btn btn-success w-100">Manage Storage</button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
