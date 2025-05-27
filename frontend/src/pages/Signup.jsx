import React from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => (
  <Container className="py-5 d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
    <Row className="w-100 justify-content-center">
      <Col md={7} lg={6}>
        <Card className="shadow-lg border-0">
          <Card.Body className="p-5">
            <div className="text-center mb-4">
              <span style={{ fontWeight: 700, fontSize: 32, color: "#7c3aed" }}>Skill</span>
              <span style={{ fontWeight: 700, fontSize: 32, color: "#a78bfa" }}>S</span>
              <span style={{ fontWeight: 700, fontSize: 32, color: "#7c3aed" }}>wap</span>
              <div className="mt-2 text-muted" style={{ fontSize: 16 }}>
                Join a vibrant community and unlock new skills!
              </div>
            </div>
            <h2 className="mb-4 text-center" style={{ color: "#7c3aed" }}>Sign Up</h2>
            <Form>
              <Form.Group className="mb-3" controlId="signupName">
                <Form.Label style={{ color: "#7c3aed" }}>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="signupEmail">
                <Form.Label style={{ color: "#7c3aed" }}>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="signupPassword">
                <Form.Label style={{ color: "#7c3aed" }}>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="signupConfirmPassword">
                <Form.Label style={{ color: "#7c3aed" }}>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm password" />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="w-100"
                style={{ background: "linear-gradient(90deg, #7c3aed 60%, #a78bfa 100%)", border: "none" }}
              >
                Create Account
              </Button>
            </Form>
            <div className="mt-4 text-center text-muted" style={{ fontSize: 14 }}>
              Already have an account? <Link to="/login" style={{ color: "#7c3aed", fontWeight: 500 }}>Sign in</Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default SignUp;
