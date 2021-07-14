import React from 'react';

import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { Link } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import routes from '../../routes';

import styles from './AppBar.module.scss';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header>
      <Navbar
        className={styles.AppBar}
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to={routes.home}>
            Phonebook
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
