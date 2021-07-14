import React, { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Container>
        <Suspense fallback={<p>Loading...</p>}>
          <Section>
            <Switch>
              <PublicRoute exact path={routes.home}>
                <HomeView />
              </PublicRoute>

              <PublicRoute
                path={routes.register}
                restricted
                redirectTo="/contacts"
              >
                <RegisterView />
              </PublicRoute>

              <PublicRoute
                path={routes.login}
                restricted
                redirectTo="/contacts"
              >
                <LoginView />
              </PublicRoute>

              <PrivateRoute path={routes.contacts} redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
            </Switch>
          </Section>
        </Suspense>
      </Container>
    </>
  );
}
