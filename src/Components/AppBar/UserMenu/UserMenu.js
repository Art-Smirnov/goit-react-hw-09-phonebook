import React from 'react';
import { Navbar, Button } from 'react-bootstrap';

const UserMenu = ({ Avatar, name, onLogout }) => (
  <>
    <Avatar style={{ color: 'grey' }} className="me-2" />
    <Navbar.Text className="me-2">Welcome, {name}</Navbar.Text>
    <Button size="sm" variant="outline-secondary" onClick={onLogout}>
      Logout
    </Button>{' '}
  </>
);

export default UserMenu;
