// components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div className="bg-light p-3" style={{ width: '250px', height: '100vh', borderRight: '1px solid #ddd' }}>
      <h4 className="mb-4">My Profile</h4>
      <Nav className="flex-column">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => `nav-link mb-2 ${isActive ? 'active fw-bold text-primary' : 'text-dark'}`}
        >
          📊 Dashboard
        </NavLink>
        <NavLink
          to="/find-partner"
          className={({ isActive }) => `nav-link mb-2 ${isActive ? 'active fw-bold text-primary' : 'text-dark'}`}
        >
          🤝 Find Partner
        </NavLink>
        <NavLink
          to="/messages"
          className={({ isActive }) => `nav-link mb-2 ${isActive ? 'active fw-bold text-primary' : 'text-dark'}`}
        >
          💬 Messages
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) => `nav-link mb-2 ${isActive ? 'active fw-bold text-primary' : 'text-dark'}`}
        >
          👤 My Profile
        </NavLink>
      </Nav>
    </div>
  );
};


export default Sidebar;
