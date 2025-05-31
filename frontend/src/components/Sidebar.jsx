// components/Sidebar.js
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { FaTachometerAlt, FaUserFriends, FaComments, FaUser } from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-light p-3 d-flex flex-column justify-content-between"
      style={{
        width: '250px',
        height: '100vh',
        borderRight: '1px solid #ddd',
        position: 'sticky',
        top: 0,
        left: 0,
        zIndex: 1020,
      }}
    >
      <div>
        <h4 className="mb-4">My Profile</h4>
        <Nav className="flex-column">
          <NavLink
            to="/dashboard"
            className={({ isActive }) => `nav-link mb-2 d-flex align-items-center ${isActive ? 'active fw-bold text-primary' : 'text-dark'}`}
          >
            <FaTachometerAlt className="me-2" /> Dashboard
          </NavLink>
          <NavLink
            to="/find-partner"
            className={({ isActive }) => `nav-link mb-2 d-flex align-items-center ${isActive ? 'active fw-bold text-primary' : 'text-dark'}`}
          >
            <FaUserFriends className="me-2" /> Find Partner
          </NavLink>
          <NavLink
            to="/messages"
            className={({ isActive }) => `nav-link mb-2 d-flex align-items-center ${isActive ? 'active fw-bold text-primary' : 'text-dark'}`}
          >
            <FaComments className="me-2" /> Messages
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => `nav-link mb-2 d-flex align-items-center ${isActive ? 'active fw-bold text-primary' : 'text-dark'}`}
          >
            <FaUser className="me-2" /> My Profile
          </NavLink>
        </Nav>
      </div>
      {/* Removed Sign out button from the bottom */}
    </div>
  );
};

export default Sidebar;
