import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="p-4 w-100">
        <h2 style={{ color: "#7c3aed" }}>My profile</h2>
        <Card className="p-4 w-75 mx-auto text-center shadow-sm border-0">
          <div className="fs-1 mb-3">👤</div>
          <h4 style={{ color: "#7c3aed" }}>User x</h4>
          <p className="text-muted"><strong>About Me:</strong><br />
            Web developer specializing in React and TypeScript. Love to learn and share knowledge with others.
          </p>
          <div className="text-start">
            <strong style={{ color: "#7c3aed" }}>Skills I Offer:</strong>
            <ul>
              <li>JavaScript <span className="text-muted">Expert</span></li>
              <li>React <span className="text-muted">Expert</span></li>
              <li>TypeScript <span className="text-muted">Advanced</span></li>
              <li>Node.js</li>
            </ul>
            <strong style={{ color: "#7c3aed" }}>Skills I Want:</strong>
            <ul>
              <li>Spanish Language</li>
              <li>UI/UX Design</li>
              <li>Digital Marketing</li>
            </ul>
          </div>
          <Button
            variant="primary"
            style={{ background: "linear-gradient(90deg, #7c3aed 60%, #a78bfa 100%)", border: "none" }}
            onClick={() => navigate('/edit-profile')}
          >
            Edit Profile
          </Button>
          <Button
            variant="primary"
            style={{ background: "linear-gradient(90deg, #7c3aed 60%, #a78bfa 100%)", border: "none", marginTop: "10px" }}
            onClick={() => navigate('/find-partner')}
          >
            Find Partner
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
