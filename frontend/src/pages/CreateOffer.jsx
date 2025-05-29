import React from 'react';
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";

const CreateOffer = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <Container className="py-5 d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
        <Row className="w-100 justify-content-center">
          <Col md={7} lg={6}>
            <Card className="shadow-lg border-0">
              <Card.Body className="p-5">
                <h2 className="mb-4 text-center" style={{ color: "#7c3aed" }}>Create Offer</h2>
                <Form>
                  <Form.Group className="mb-3" controlId="offerTitle">
                    <Form.Label style={{ color: "#7c3aed" }}>Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter offer title"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="offerDescription">
                    <Form.Label style={{ color: "#7c3aed" }}>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter offer description"
                      required
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100"
                    style={{ background: "linear-gradient(90deg, #7c3aed 60%, #a78bfa 100%)", border: "none" }}
                  >
                    Create Offer
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateOffer;
