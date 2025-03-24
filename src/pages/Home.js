import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="mt-5">
      <Row className="text-center">
        <Col>
          <h1>Welcome to MyApp</h1>
          <p>Your one-stop solution for managing tasks efficiently.</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Feature One</Card.Title>
              <Card.Text>
                Description of the first feature. Highlight how it benefits the user.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Feature Two</Card.Title>
              <Card.Text>
                Description of the second feature. Explain its advantages.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Feature Three</Card.Title>
              <Card.Text>
                Description of the third feature. Emphasize its usefulness.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
