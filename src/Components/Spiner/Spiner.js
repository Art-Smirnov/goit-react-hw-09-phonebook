import React from 'react';
import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { contactsSelectors } from '../../redux/contacts';
import style from './Spiner.module.scss';

export default function Spiner() {
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);
  return (
    <Loader
      className={style.Loader}
      type="BallTriangle"
      color="#00BFFF"
      height={80}
      width={80}
      visible={isLoadingContacts}
    />
  );
}
