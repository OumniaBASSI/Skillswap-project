import React from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => (
  <Container className="py-5 d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
    <Row className="w-100 justify-content-center">
      <Col md={6} lg={5}>
        <Card className="shadow-lg border-0">
          <Card.Body className="p-5">
            <div className="text-center mb-4">
              <span style={{ fontWeight: 700, fontSize: 32, color: "#7c3aed" }}>Skill</span>
              <span style={{ fontWeight: 700, fontSize: 32, color: "#a78bfa" }}>S</span>
              <span style={{ fontWeight: 700, fontSize: 32, color: "#7c3aed" }}>wap</span>
              <div className="mt-2 text-muted" style={{ fontSize: 16 }}>
                Welcome back! Log in to continue your learning journey.
              </div>
            </div>
            <h2 className="mb-4 text-center" style={{ color: "#7c3aed" }}>Login</h2>
            <Form>
              <Form.Group className="mb-3" controlId="loginEmail">
                <Form.Label style={{ color: "#7c3aed" }}>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="loginPassword">
                <Form.Label style={{ color: "#7c3aed" }}>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className="text-end mb-3">
                <a href="#" style={{ color: "#a78bfa", fontWeight: 500, fontSize: 14 }}>Forgot password?</a>
              </div>
              <Button
                variant="primary"
                type="submit"
                className="w-100"
                style={{ background: "linear-gradient(90deg, #7c3aed 60%, #a78bfa 100%)", border: "none" }}
              >
                Login
              </Button>
            </Form>
            <div className="mt-4 text-center text-muted" style={{ fontSize: 14 }}>
              Don't have an account? <Link to="/signup" style={{ color: "#7c3aed", fontWeight: 500 }}>Sign up</Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Login;
