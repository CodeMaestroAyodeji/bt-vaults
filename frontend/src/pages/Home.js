import React from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center justify-content-center">
        <Container className="text-center">
          <h1>Welcome to BTVaults</h1>
          <p>Secure Torrent Caching and Leeching Simplified.</p>
          <Button variant="primary" size="lg">Learn More</Button>
        </Container>
      </section>

      {/* About Us Section */}
      <section className="about-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src="/assets/about-sample.png" alt="About Us" className="img-fluid" />
            </Col>
            <Col md={6}>
              <h2>About BTVaults</h2>
              <p>
                BTVaults is your ultimate platform for fast and secure torrent caching and leeching. 
                With our easy-to-use interface, you can cache .torrent files and magnet links directly 
                to external storage and download them seamlessly.
              </p>
              <Button variant="outline-primary" size="lg">Explore Our Features</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Our Services</h2>
          <Row>
            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Cache Torrents</Card.Title>
                  <Card.Text>
                    Add torrent files or magnet links and let us handle the caching process, with 
                    real-time download progress updates.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>File Management</Card.Title>
                  <Card.Text>
                    Download, delete, or zip cached files for easier management and storage.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Premium Plans</Card.Title>
                  <Card.Text>
                    Upgrade to our premium plans for higher storage limits, faster download speeds, 
                    and increased daily download slots.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Payment Section */}
      <section className="payment-section py-5">
        <Container>
          <h2 className="text-center mb-4">Payment Information</h2>
          <Row className="align-items-center">
            <Col md={6}>
              <h4>Flexible Payment Options</h4>
              <p>
                We offer multiple payment methods, including PayPal, Paystack, Flutterwave, and Stripe.
                Choose a plan that suits your needs and enjoy premium services with BTVaults.
              </p>
              <ul>
                <li>Free Plan: 1 file per day, 500MB max file size</li>
                <li>Premium Plan: 5 files per day, 2GB max file size</li>
              </ul>
            </Col>
            <Col md={6}>
              <img src="/assets/pay-sample.png" alt="Payment Options" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Get in Touch</h2>
          <Row>
            <Col md={6}>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Your message" />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
              </Form>
            </Col>
            <Col md={6}>
              <h4>Contact Information</h4>
              <p>Email: support@btvaults.com</p>
              <p>Phone: +234 123 4567</p>
              <p>Address: Ikorodu, Lagos, Nigeria</p>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Home;
