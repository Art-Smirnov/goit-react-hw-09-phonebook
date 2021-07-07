import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Navigation = ({ isAuthenticated }) => (
  <Nav className="me-auto">
    <Nav.Link exact to="/" as={NavLink}>
      Home
    </Nav.Link>

    {isAuthenticated && (
      <Nav.Link to="/contacts" as={NavLink}>
        Contacts
      </Nav.Link>
    )}
  </Nav>
);

export default Navigation;
