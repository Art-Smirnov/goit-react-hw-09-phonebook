import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { authSelectors } from '../../../redux/auth';
import routes from '../../../routes';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Nav className="me-auto">
      <Nav.Link exact to={routes.home} as={NavLink}>
        Home
      </Nav.Link>

      {isLoggedIn && (
        <Nav.Link to={routes.contacts} as={NavLink}>
          Contacts
        </Nav.Link>
      )}
    </Nav>
  );
}
