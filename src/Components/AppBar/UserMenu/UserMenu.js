import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Button } from 'react-bootstrap';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { authSelectors, authOperations } from '../../../redux/auth';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  const onLogOut = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
    <>
      <AccountCircleIcon style={{ color: 'grey' }} className="me-2" />
      <Navbar.Text className="me-2">Welcome, {name}</Navbar.Text>
      <Button size="sm" variant="outline-secondary" onClick={onLogOut}>
        Logout
      </Button>{' '}
    </>
  );
}
