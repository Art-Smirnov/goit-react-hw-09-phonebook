import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import routes from '../../../routes';

const AuthNav = () => (
  <Nav>
    <Nav.Link className="me-2" to={routes.register} as={NavLink}>
      Register
    </Nav.Link>
    <Nav.Link to={routes.login} as={NavLink}>
      Login
    </Nav.Link>
  </Nav>
);

export default AuthNav;
