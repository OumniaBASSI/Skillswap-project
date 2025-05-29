import React from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';

const users = [
  { name: "User 1", skill: "JavaScript Development", availability: "Weekdays" },
  { name: "User 2", skill: "Graphic Design", availability: "Evenings" },
  { name: "User 3", skill: "Digital Marketing", availability: "Weekdays" },
  { name: "User 4", skill: "Digital Marketing", availability: "Evenings" },
  { name: "User 5", skill: "Photography", availability: "Flexible" },
];

const FindPartner = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="p-4 w-100">
        <h2>Find Partners</h2>
        <p>Discover people with the skills you need</p>
        <Row className="mb-3">
          <Col><Form.Control placeholder="Search by name or skill" /></Col>
          <Col><Form.Select><option>Category</option></Form.Select></Col>
          <Col md="auto">
            <Button variant="primary">Search</Button>{' '}
            <Button variant="light">Reset</Button>
          </Col>
        </Row>
        {users.map((user, i) => (
          <Card className="mb-2" key={i}>
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <b>{user.name}</b><br />
                <span className="text-primary">{user.skill}</span><br />
                <small>Available: {user.availability}</small>
              </div>
              <Button variant="primary">Send Proposal</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FindPartner;
