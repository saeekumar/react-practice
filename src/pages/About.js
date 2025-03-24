import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col md={6}>
          <Image
            src="https://placehold.co/500"
            roundedCircle
            fluid
            alt="About Us"
          />
          
        </Col>
        <Col md={6}>
          <h2>About MyApp</h2>
          <p>
            MyApp is dedicated to providing top-notch solutions for task management. Our platform is designed to help individuals and teams organize their work efficiently and effectively.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h3>Our Mission</h3>
          <p>
            To empower users with intuitive tools that enhance productivity and collaboration.
          </p>
        </Col>
      </Row>
      <Row className="mt-4 mb-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Our Vision</Card.Title>
              <Card.Text>
                To be the leading platform in task management, recognized for innovation and user-centric design.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Our Values</Card.Title>
              <Card.Text>
                Integrity, Excellence, and Collaboration are at the core of everything we do.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Our Team</Card.Title>
              <Card.Text>
                A diverse group of professionals committed to delivering the best user experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

