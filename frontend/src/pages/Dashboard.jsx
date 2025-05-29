import React, { useState, useEffect } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar'
import axios from 'axios';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    skills_offered: 0,
    skills_requested: 0,
    active_exchanges: 0,
    recent_activity: [],
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get('/api/dashboard');
        setDashboardData(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="p-4 w-100">
        <h2 style={{ color: "#7c3aed" }}>Welcome, Name!</h2>
        <p className="text-muted">Here’s what’s happening with your skill exchanges</p>
        <Row className="mb-4">
          <Col md={4}>
            <Card className="text-center p-3 shadow-sm border-0">
              <Card.Body>
                <Card.Title style={{ color: "#7c3aed" }}>My Skills</Card.Title>
                <Card.Text className="text-muted">Skills you're offering</Card.Text>
                <h4>{dashboardData.skills_offered}</h4>
                <Button variant="outline-primary" style={{ color: "#7c3aed", borderColor: "#a78bfa" }}>+ Create Offer</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center p-3 shadow-sm border-0">
              <Card.Body>
                <Card.Title style={{ color: "#7c3aed" }}>My Requests</Card.Title>
                <Card.Text className="text-muted">Skills you’re looking for</Card.Text>
                <h4>{dashboardData.skills_requested}</h4>
                <Button variant="outline-primary" style={{ color: "#7c3aed", borderColor: "#a78bfa" }}>View Available Skills</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center p-3 shadow-sm border-0">
              <Card.Body>
                <Card.Title style={{ color: "#7c3aed" }}>Active Exchanges</Card.Title>
                <Card.Text className="text-muted">Current skill swaps</Card.Text>
                <h4>{dashboardData.active_exchanges}</h4>
                <Button variant="outline-primary" style={{ color: "#7c3aed", borderColor: "#a78bfa" }}>View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h4 style={{ color: "#7c3aed" }}>Recent Activity</h4>
        {dashboardData.recent_activity.map((activity, index) => (
          <Card className="mb-2 shadow-sm border-0" key={index}><Card.Body><b>{activity}</b></Card.Body></Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
