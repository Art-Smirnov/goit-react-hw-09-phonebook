import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

import AppBar from './Components/AppBar';
import Section from './Components/Section';
import routes from './routes';
import { authOperations } from './redux/auth';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

import './App.scss';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-view" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "register-view" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "login-view" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "contacts-view" */),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Container>
          <Suspense fallback={<p>Loading...</p>}>
            <Section>
              <Switch>
                <PublicRoute exact path={routes.home} component={HomeView} />
                <PublicRoute
                  path={routes.register}
                  restricted
                  component={RegisterView}
                  redirectTo="/contacts"
                />
                <PublicRoute
                  path={routes.login}
                  restricted
                  component={LoginView}
                  redirectTo="/contacts"
                />
                <PrivateRoute
                  path={routes.contacts}
                  component={ContactsView}
                  redirectTo="/login"
                />
              </Switch>
            </Section>
          </Suspense>
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
