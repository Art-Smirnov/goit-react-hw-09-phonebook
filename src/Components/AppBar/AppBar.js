import React from 'react';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { Link } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import routes from '../../routes';

import styles from './AppBar.module.scss';

const AppBar = ({ isAuthenticated }) => (
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
          {isAuthenticated ? <UserMenu /> : <AuthNav />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);

export default AppBar;
